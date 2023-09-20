"""Import data into DB."""
import json
import logging
import pandas as pd

from ebel_rest import query
from tqdm import tqdm

from sqlalchemy import select

from zetomapapi.constants import (
    ZFIN_IDENTIFIERS,
    STRESSOR_TO_AOP,
    AOP_TO_KE,
    RID,
    ALL_KE_GENE_LINKS,
    KERS,
)
from zetomapapi.defaults import IDENTIFIER_CACHE, DATA, PCR_EXCEL
from zetomapapi.orm.manager import rebuild_database, session
from zetomapapi.orm.models import Compound, Gene, Exp, Node, Edge, KeyEvent, Pcr

logger = logging.getLogger(__name__)
session = session()


def compile_database():
    """Rebuild the database and populate it."""
    rebuild_database()
    ExpImporter().parse_data()
    GraphImporter().populate_graph_tables()
    # GraphImporter().import_kers()


class GraphImporter:
    """Class for populating graph-like tables in relational database."""

    def __init__(self):
        self.compounds = dict()
        self.aops = dict()
        self.kes = dict()  # rID: node table ID
        self.genes = dict()

    def populate_graph_tables(self):
        """Wrapper method for populating graph tables."""
        self.import_stressor_to_aop()
        self.import_aop_ke()
        self.import_ke_gene_rels()
        self.import_kers()
        # self.import_node_edges(source_node_type=KE, target_node_type=GENE, query_string=KE_TO_GENE)

    def import_kers(self):
        """Import the key event relationships from the graphstore as Edges."""
        kers = query.sql(KERS).table

        ke_q = select(Node.id, Node.name).where(
            Node.node_type == "ke"
        )  # Get all KE nodes
        ke_results = session.execute(ke_q).all()
        ke_map = {x[0]: x[1] for x in ke_results}

        added_ker = set()
        edges_to_add = []
        for ker in tqdm(
            kers.itertuples(index=False), total=len(kers), desc="Importing KERs"
        ):
            source, target = ker
            if source in self.kes and target in self.kes:
                if (source, target) not in added_ker:
                    source_id, target_id = self.kes[source], self.kes[target]
                    new_edge = Edge(
                        source=source_id,
                        target=target_id,
                        source_name=ke_map[source_id],
                        target_name=ke_map[target_id],
                    )
                    edges_to_add.append(new_edge)
                    added_ker.add((source, target))

        session.add_all(edges_to_add)
        session.commit()

    @staticmethod
    def import_ke_gene_rels():
        """Gather all KE to Gene links from the graphstore and import them into the database."""
        logger.info("Linking KE to genes")

        stmt = select(Gene.zfin, Gene).where(Gene.zfin is not None)
        gene_cache_results = session.execute(stmt).all()
        gene_cache = {x[0]: x[1] for x in gene_cache_results}

        ke_gene_table = query.sql(ALL_KE_GENE_LINKS).table
        key_events = ke_gene_table.ke.unique()

        kes_to_import = []
        for ke_title in tqdm(key_events, desc="Linking key events to genes"):
            ke_genes = set(ke_gene_table[ke_gene_table.ke == ke_title].symbol)

            gene_table_links = []
            for ke_gene in ke_genes:
                if ke_gene in gene_cache:
                    gene_table_links.append(gene_cache[ke_gene])

            new_ke_table_entry = KeyEvent(title=ke_title, genes=gene_table_links)
            kes_to_import.append(new_ke_table_entry)

        session.add_all(kes_to_import)
        session.commit()

    def import_stressor_to_aop(self):
        """Adds all AOPs as Nodes and adds Edges between AOP nodes and existing compounds."""
        stmt = select(Compound.name)
        compound_names = set(session.execute(stmt).scalars().all())

        for compound_name in compound_names:
            new_compound_node = Node(node_type="compound", name=compound_name)
            session.add(new_compound_node)
            session.commit()
            self.compounds[compound_name] = new_compound_node.id

        aops = query.sql(STRESSOR_TO_AOP).data

        cpd_aop_links = set()
        for row in aops:
            rid, aop_title, aop_id, cpd = row[RID], row["aop"], row["aopid"], row["cpd"]

            if cpd in self.compounds:  # Cache for later iteration
                cpd_aop_links.add((rid, cpd))

            if rid not in self.aops:  # Add to Node table if not exists
                new_aop_node = Node(node_type="aop", name=aop_title)
                session.add(new_aop_node)
                self.aops[rid] = (new_aop_node, aop_title, aop_id)

        session.commit()

        for aop_rid, cpd_name in cpd_aop_links:
            cpd_id = self.compounds[cpd_name]
            aop_node, aop_title, aop_id = self.aops[aop_rid]
            aop_id = aop_node.id

            new_edge = Edge(
                source=cpd_id,
                target=aop_id,
                source_name=cpd_name,
                target_name=aop_title,
            )
            session.add(new_edge)

        session.commit()

    def import_aop_ke(self) -> int:
        """Add the Node and Edges AOP to KE."""
        added_edges = 0

        results = query.sql(AOP_TO_KE).data

        aop_ke_links = set()
        for r in tqdm(results, desc="Import AOP-KE edges"):
            aop_rid, ke_title, ke_rid, aop_title, aop_id = (
                r["aop"],
                r["ke"],
                r[RID],
                r["aop_title"],
                r["aopid"],
            )

            if aop_rid not in self.aops:  # Add to Node table if not exists
                new_aop_node = Node(node_type="aop", name=aop_title, aop_id=aop_id)
                session.add(new_aop_node)
                session.commit()
                self.aops[aop_rid] = (new_aop_node, aop_title, aop_id)

            aop_node, aop_title, aop_id = self.aops[aop_rid]

            if ke_rid not in self.kes:
                new_node = Node(node_type="ke", name=ke_title)
                session.add(new_node)
                session.commit()
                self.kes[ke_rid] = new_node.id

            ke_node_id = self.kes[ke_rid]
            if (aop_node.id, ke_node_id) not in aop_ke_links:
                new_edge = Edge(
                    source=aop_node.id,
                    target=ke_node_id,
                    source_name=aop_title,
                    target_name=ke_title,
                )
                session.add(new_edge)
                aop_ke_links.add((aop_node.id, ke_node_id))
                added_edges += 1

        session.commit()

        return added_edges


class ExpImporter:
    """Class for importing data into the relational database."""

    def __init__(self, sig_threshold: float = 0.01):
        """Import omics and qPCR data."""
        self.sig_threshold = sig_threshold

        # Cached data
        self.cached_eids = self.read_identifiers()
        self.gs_compounds = self.gather_compounds()
        self.gs_genes = self.import_genes()

        # Data to be imported
        self.exps = self.read_exp_data_raw()
        self.pcr_results = self.read_pcr_data()
        self.compounds = dict()

    @staticmethod
    def cache_identifiers():
        """Get identifiers from ZFIN and compile a cache file mapping ensembl IDs to ZFIN IDs."""
        if not IDENTIFIER_CACHE.is_file():
            logger.warning("Compiling identifier cache, this may take awhile...")
            df = pd.read_csv(ZFIN_IDENTIFIERS, sep="\t")

            mapped_ids = dict()
            for row in df.itertuples(index=False):
                zfin_id, ids = row
                split_ids = ids.split(",")
                for alias in split_ids:
                    if alias.startswith("ENSDAR"):  # Ensembl ID for Danio rerio
                        mapped_ids[zfin_id] = alias

            with open(IDENTIFIER_CACHE, "w") as jf:
                json.dump(mapped_ids, jf, indent=4)

            logger.info("Successfully wrote identifier cache file")

    def read_identifiers(self) -> dict:
        """Read the identifier cache file."""
        self.cache_identifiers()  # Create cache if not exists
        with open(IDENTIFIER_CACHE, "r") as cf:
            id_cache = json.load(cf)

        return id_cache

    @staticmethod
    def read_exp_data_raw() -> list[tuple]:
        """Read all experimental data files in data folder and returns them as dataframes."""
        exp_tables = []
        for file in DATA.iterdir():
            if file.suffix == ".csv":
                compound_name = file.name.split("_")[0]
                exp_df = pd.read_csv(file)
                exp_tables.append((compound_name, exp_df))

        return exp_tables

    @staticmethod
    def read_pcr_data() -> list[dict]:
        """Read the qPCR genes tested and import the biomarkers and compounds tested."""
        pcr_df = pd.read_excel(
            PCR_EXCEL,
            sheet_name="qPCRvsSeq",
            names=["zfin", "compound", "concentration", "label", "qpcr", "seq"],
        ).drop(columns=["label"])
        records = pcr_df.to_dict(orient="records")

        return records

    @staticmethod
    def gather_compounds() -> dict:
        """Get all drugs and stressors as compounds from the graphstore."""
        logger.info("Query graphstore for compounds")
        stressors = query.sql("SELECT name, chemical_casrn as casrn FROM stressor").data
        drugs = query.sql("SELECT name, cas_number as casrn FROM drugbank").data

        compounds = dict()

        for dataset in (stressors, drugs):
            for r in dataset:
                compounds[r["name"]] = r["casrn"]

        return compounds

    def import_genes(self) -> dict:
        """Get gene information from graphstore and import into the database."""
        logger.info("Query graphstore for genes")
        genes = query.sql(
            "SELECT symbol as zfin, hgnc.id as hgncid, hgnc.symbol as hgnc, zfin_id as zfinid FROM zfin"
        ).data

        gene_entries = []
        gene_cache = dict()
        for r in genes:
            zfin_id = r["zfinid"]

            ensembl_id = None
            if zfin_id in self.cached_eids:
                ensembl_id = self.cached_eids[zfin_id]
                r["ensembl"] = ensembl_id

            new_gene = Gene(**r)
            if ensembl_id:
                gene_cache[ensembl_id] = new_gene
            gene_entries.append(new_gene)

        session.add_all(gene_entries)
        session.commit()

        return gene_cache

    def import_compound(self, compound: str):
        """Import compound and its linked AOPs."""
        casrn = self.gs_compounds[compound] if compound in self.gs_compounds else None
        new_compound = Compound(name=compound, casrn=casrn)
        session.add(new_compound)

        session.commit()  # Have to commit to get primary key ID
        self.compounds[compound] = new_compound.id  # Add to cache

    def parse_pcr_results(self):
        """Add information to PCR linked tables."""
        pcr_entries_to_add = []

        logger.info("Populating PCR tables")

        for entry in tqdm(self.pcr_results, desc="Importing PCR Results"):
            symbol = entry.pop("zfin")
            gene_id = (
                session.execute(select(Gene.id).where(Gene.zfin == symbol.strip()))
                .scalars()
                .first()
            )

            if not gene_id:  # Only for CR318588.3
                logger.warning(f"No gene ID found for {symbol}")
                continue

            new_pcr = Pcr(**entry)
            new_pcr.gene_id = gene_id
            pcr_entries_to_add.append(new_pcr)

        session.add_all(pcr_entries_to_add)
        session.commit()

    def parse_experiments(self):
        """Add information to experiment linked tables."""
        exps_to_add = []

        logger.info("Populating tables")
        for compound, table in self.exps:
            if compound not in self.compounds:  # Add compound to DB if not there
                self.import_compound(compound=compound)

            sig_df = table[table["padj"] < self.sig_threshold]
            sig_df.columns = [
                col.lower() for col in sig_df.columns
            ]  # Help ensure all same case

            compound_id = self.compounds[compound]
            next_gene_id = session.execute(select(Gene.id)).scalars().all()[-1] + 1

            for _, row in tqdm(
                sig_df.iterrows(),
                total=len(sig_df),
                desc=f"Importing {compound}",
            ):
                # ensembl_id, bm, l2fc, lfcse, stat, pval, padj = row
                bm, l2fc, lfcse, stat, pval, padj, result, ensembl_id = (
                    row["basemean"],
                    row["log2fc"],
                    row["lfcse"],
                    row["stat"],
                    row["pvalue"],
                    row["padj"],
                    row["result"],
                    row["ensembl"],
                )

                if ensembl_id not in self.gs_genes:
                    new_gene = Gene(id=next_gene_id, ensembl=ensembl_id)
                    self.gs_genes[ensembl_id] = new_gene
                    session.add(new_gene)
                    next_gene_id += 1
                    # session.commit()  # Have to commit to get primary key ID

                tp, conc = result.split(".", 1)
                tp = int(tp.strip("timepointh"))
                conc = float(conc.strip("concentration"))

                new_exp = Exp(
                    compound_id=compound_id,
                    gene_id=self.gs_genes[ensembl_id].id,
                    basemean=bm,
                    log2fc=l2fc,
                    lfcse=lfcse,
                    stat=stat,
                    pvalue=pval,
                    padj=padj,
                    timepoint=tp,
                    concentration=conc
                )
                exps_to_add.append(new_exp)

        session.add_all(exps_to_add)
        session.commit()

    def parse_data(self):
        """Wrapper method for importing experimental data."""
        self.parse_experiments()
        self.parse_pcr_results()


if __name__ == "__main__":
    compile_database()
