"""Utility functions for the API endpoints."""
import pandas as pd
import sqlalchemy

from sqlalchemy import select, cast, or_

from zetomapapi.orm.manager import session
from zetomapapi.orm.models import Node, Exp, Compound, Gene, KeyEvent, Edge, Pcr
from zetomapapi.constants import (
    ID,
    SOURCE,
    TARGET,
    NODES,
    EDGES,
    TESTED_GENES,
    VPA_SENS,
    CHL_SENS,
    TRI_SENS,
)

session = session()


def compile_results(query) -> dict:
    """Compiles results from pre-ran query into format for frontend."""
    results = session.execute(query).all()
    edges = []
    node_ids = set()

    for row in results:
        edge_id, source_node_id, target_node_id = row

        node_ids.update([source_node_id, target_node_id])

        edge_entry = {
            ID: f"e{edge_id}",
            SOURCE: str(source_node_id),
            TARGET: str(target_node_id),
        }
        edges.append(edge_entry)

    nodes = [get_node_metadata(node_id) for node_id in node_ids]
    ke_node_ids = {node["id"] for node in nodes if node["node_type"] == "ke"}
    ker_edges = get_kers(ke_node_ids=ke_node_ids)
    print(ker_edges)
    edges += ker_edges

    return {NODES: nodes, EDGES: edges}


def get_kers(ke_node_ids: set) -> list:
    """Get all key event relationships for KE nodes if present in output."""
    nodes_to_check = [int(x) for x in ke_node_ids]
    stmt = select(
        cast(Edge.id, sqlalchemy.String),
        cast(Edge.source, sqlalchemy.String),
        cast(Edge.target, sqlalchemy.String),
    ).where(or_(Edge.source.in_(nodes_to_check), Edge.target.in_(nodes_to_check)))
    kers = session.execute(stmt).all()

    ker_edges = []
    for row in kers:
        edge_id, source_node_id, target_node_id = row
        if (
            source_node_id in ke_node_ids and target_node_id in ke_node_ids
        ):  # Both nodes needed
            edge_entry = {
                ID: f"e{edge_id}",
                SOURCE: source_node_id,
                TARGET: target_node_id,
            }
            ker_edges.append(edge_entry)

    return ker_edges


def basic_query(query):
    """Execute the provided query and return the scalars."""
    return session.execute(query).all()


def get_node_metadata(node_id: int) -> dict:
    """Get table info for given node ID."""
    stmt = select(cast(Node.id, sqlalchemy.String), Node.node_type, Node.name).where(
        Node.id == node_id
    )
    results = session.execute(stmt).first()  # Should only be one
    result_dict = dict(zip(("id", "node_type", "name"), results))

    return result_dict


def get_exp_data_for_ke(ke_node_id: int) -> dict:
    """Get any experimental data for a given KE node and the tested genes."""
    ke_name = (
        session.execute(select(Node.name).where(Node.id == ke_node_id))
        .scalars()
        .first()
    )
    ke_id = (
        session.execute(select(KeyEvent.id).where(KeyEvent.title == ke_name))
        .scalars()
        .first()
    )
    ke_data_stmt = (
        select(
            Gene.ensembl,
            Gene.zfin,
            # Gene.hgnc,
            Compound.name,
            Exp.log2fc,
            Exp.padj,
            Exp.id,
            Gene.zfinid,
            Exp.pvalue,
            Exp.timepoint,
            Exp.concentration,
        )
        .join(KeyEvent.genes.and_(KeyEvent.id == ke_id))
        .join(Exp)
        .join(Compound, isouter=True)
        .where(Exp.padj.isnot(None))
        .limit(500)
    )

    ke_data_results = session.execute(ke_data_stmt).all()
    results = [
        {
            "ensembl": x[0],
            "zfin": x[1],
            "compound": x[2],
            "log2fc": x[3],
            "padj": x[4],
            "key": x[5],
            "zfinid": x[6],
            "pvalue": x[7],
            "timepoint": x[8],
            "concentration": x[9],
        }
        for x in ke_data_results
    ]
    return {"tested": TESTED_GENES, "exp": results}


def pcr_associated_kes_aops(
    pcr_cpd_id: str = "2", conc: str | None = None, limit: str | int = 5
) -> dict:
    """For a tested compound ID, get the associated key events and AOPs for the genes."""
    # Get significant genes from PCR data
    # TODO: Get values from DB instead of hardcoding
    pcr_cpd_map = {"2": "VPA", "3": "Chlorpyrifos", "4": "Tridimefon"}
    pcr_cpd = pcr_cpd_map[pcr_cpd_id]
    stmt = select(Gene.id).join(Pcr).where(Pcr.compound == pcr_cpd)

    if conc:  # Add concentration filter to stmt
        stmt = stmt.where(Pcr.concentration == conc)

    sig_genes = set(session.execute(stmt).scalars().all())

    ke_aop_nodes_and_edges = identify_associated_kes_aops(
        sig_genes=sig_genes, num_top_hits=limit
    )
    return ke_aop_nodes_and_edges


def sensitive_associated_kes_aops(sens_cpd_id: str = "1", limit: str | int = 5) -> dict:
    """For a tested compound ID, get the associated key events and AOPs for the genes."""
    sens_cpd_map = {"1": CHL_SENS, "2": TRI_SENS, "3": VPA_SENS}
    sig_genes = sens_cpd_map[sens_cpd_id]

    ke_aop_nodes_and_edges = identify_associated_kes_aops(
        sig_genes=sig_genes, num_top_hits=limit, map_symbols=True
    )
    return ke_aop_nodes_and_edges


def cpd_associated_kes_aops(compound_id: str = "1", limit: str | int = 5) -> dict:
    """For a given drug, get the associated key events and AOPs for the statistically significant genes."""
    # Get significant genes from compound experiment
    stmt = (
        select(Gene.id).join(Exp).join(Compound).where(Compound.id == int(compound_id))
    )
    sig_genes = set(session.execute(stmt).scalars().all())

    ke_aop_nodes_and_edges = identify_associated_kes_aops(
        sig_genes=sig_genes, num_top_hits=limit
    )
    return ke_aop_nodes_and_edges


def identify_associated_kes_aops(
    sig_genes: set, num_top_hits: int = 5, map_symbols: bool = False
) -> dict:
    """Get associated Key Events and linked Aops for a given set of genes and rank it."""
    if map_symbols:
        gene_query_results = session.execute(select(Gene.zfin, Gene.id)).all()
        gene_id_map = {x[0]: x[1] for x in gene_query_results if len(x) == 2}
        sig_genes = {
            gene_id_map[symbol] for symbol in sig_genes if symbol in gene_id_map
        }

    compound_associated_kes_and_genes = identify_associated_kes_and_genes(
        sig_genes_ids=sig_genes
    )

    aop_df = rank_aops(
        set(compound_associated_kes_and_genes.keys())
    )  # Has number KEs and coverage
    top_aop_node_id_col = aop_df.iloc[:num_top_hits]["aop_node_id"].values

    top_aop_node_ids = [
        int(x) for x in top_aop_node_id_col
    ]  # Need int or sqlalchemy query will fail

    # Compile AOP/KE network
    aop_ke_stmt = select(Edge.id, Edge.source, Edge.target).where(
        Edge.source.in_(top_aop_node_ids)
    )
    nodes_and_edges = compile_results(aop_ke_stmt)
    nodes_and_edges["ke_gene_data"] = compound_associated_kes_and_genes
    return nodes_and_edges


def identify_associated_kes_and_genes(sig_genes_ids: set) -> dict:
    """Gather all associated KEs for a given set of genes and return dict of KEs and the genes that marked them."""
    # Get associated KEs
    all_ke_genes = gather_ke_genes()

    compound_associated_kes_and_genes = dict()
    for ke_title, gene_dict in all_ke_genes.items():
        # gene_dict = {gene_id: zfin_symbol}
        ke_gene_ids = set(gene_dict.keys())
        overlapping_gene_ids = ke_gene_ids & sig_genes_ids
        if overlapping_gene_ids:
            overlapping_gene_symbols = [
                gene_dict[gene_id] for gene_id in overlapping_gene_ids
            ]
            compound_associated_kes_and_genes[ke_title] = overlapping_gene_symbols

    return compound_associated_kes_and_genes


def gather_ke_genes() -> dict:
    """Gather all Key Events and their associated genes."""
    ke_gene_stmt = select(KeyEvent.title, Gene.id, Gene.zfin).join(KeyEvent.genes)
    ke_genes_db_results = session.execute(ke_gene_stmt).all()

    ke_genes = dict()
    for entry in ke_genes_db_results:
        ke, gene_id, zfin = entry
        if ke in ke_genes:
            ke_genes[ke][gene_id] = zfin

        else:
            ke_genes[ke] = {gene_id: zfin}

    return ke_genes


def rank_aops(gene_associated_kes: set) -> pd.DataFrame:
    """From the significant genes, return list of AOPs ordered by number of linked KEs that are have a link to a
    sig gene."""
    stmt = (
        select(Edge.id, Edge.source_name, Edge.target_name, Edge.source)
        .where(Node.node_type == "aop")
        .join(Node, Edge.source == Node.id)
    )
    results = session.execute(stmt).all()

    aop_kes = dict()  # AOP to KEs
    aop_id = dict()  # Name to ID
    for r in results:
        edge_id, aop_title, ke_title, aop_node_id = r
        aop_id[aop_title] = aop_node_id
        if aop_title in aop_kes:
            aop_kes[aop_title].add(ke_title)

        else:
            aop_kes[aop_title] = {ke_title}

    aop_ranking_rows = []
    for aop, ke_set in aop_kes.items():
        overlapping_kes = (
            ke_set & gene_associated_kes
        )  # Find intersection of AOP-KEs and sig gene-linked KEs
        num_overlapping_kes = len(overlapping_kes)
        coverage = num_overlapping_kes / len(ke_set)
        aop_node_id = aop_id[aop]
        aop_ranking_rows.append(
            {
                "aop": aop,
                "num_kes": num_overlapping_kes,
                "kes": "|".join(overlapping_kes),
                "coverage": coverage,
                "aop_node_id": aop_node_id,
            }
        )

    aop_df = pd.DataFrame(aop_ranking_rows)
    return aop_df.sort_values(by="coverage", ascending=False)


def get_kes_from_aop_id(aop_id: str) -> dict:
    """Get the associated KEs for a given AOP ID."""
    ke_stmt = select(Edge.target_name).where(Edge.source == aop_id)
    ke_results = session.execute(ke_stmt).scalars().all()

    return {"kes": ke_results}


if __name__ == "__main__":
    a = identify_associated_kes_aops(sig_genes={"dhrs3b"}, map_symbols=True)
