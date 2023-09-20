"""Setup and definitions for the API server."""
import sqlalchemy
import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select, cast

from zetomapapi.orm.models import Edge as EdgeTable, Compound as CompoundTable
from zetomapapi.constants import ROOT_PATH
from zetomapapi.api.utils import (
    compile_results,
    basic_query,
    get_exp_data_for_ke,
    identify_associated_kes_aops,
    get_kes_from_aop_id,
    cpd_associated_kes_aops,
    pcr_associated_kes_aops,
    sensitive_associated_kes_aops,
)
from zetomapapi.api.models import (
    BaseResponse,
    Compound,
    AopKeyEvents,
    ExpResponse,
    Genes,
)

tags_metadata = [
    {"name": "Query", "description": "Methods for querying the database."},
    {"name": "Experiment", "description": "Methods for gathering experimental data."},
    {"name": "Predict", "description": "Methods for predicting associations."},
]

app = FastAPI(
    root_path=ROOT_PATH,
    openapi_tags=tags_metadata,
    title="API for the ZET-O-MAP Graph Viewer",
    description="A set of methods for retrieving data for visualizing in the ZET-O-MAP GUI.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)


# Endpoints
@app.get("/results/base", tags=["Query"], response_model=BaseResponse)
async def get_base_graph():
    """Return the base/starting graph for a given keyword. If no keyword is given, returns links to all resources."""
    stmt = select(
        cast(EdgeTable.id, sqlalchemy.String),
        cast(EdgeTable.source, sqlalchemy.String),
        cast(EdgeTable.target, sqlalchemy.String),
    ).where(EdgeTable.source_name == "Valproic acid")

    return compile_results(stmt)


@app.get("/results/compounds", tags=["Query"], response_model=list[Compound])
async def get_compounds():
    """Return a list of compounds in the database for which there is experimental data."""
    stmt = select(
        cast(CompoundTable.id, sqlalchemy.String),
        CompoundTable.name,
    )
    results = basic_query(stmt)
    dict_list = [x._asdict() for x in results]
    return dict_list


@app.get("/results/{node_id}", tags=["Query"], response_model=BaseResponse)
async def get_next_nodes(node_id: str) -> dict:
    """Return the next nodes of the given node rID.

    Parameters
    ----------
    node_id :  str
        ID of node in graph.

    Returns
    -------
    dict
        List of node IDs coming out of given node ID.
    """
    stmt = select(
        cast(EdgeTable.id, sqlalchemy.String),
        cast(EdgeTable.source, sqlalchemy.String),
        cast(EdgeTable.target, sqlalchemy.String),
    ).where(EdgeTable.source == node_id)
    results = compile_results(stmt)

    return results


@app.get("/predict/omics/{compound_id}", tags=["Predict"], response_model=BaseResponse)
async def get_omics_kes_and_aops(compound_id: str, limit: int = 5) -> dict:
    """Get the predicted AOP & KeyEvent nodes and edges using the gene expression data for a given compound.

    Parameters
    ----------
    compound_id : str
        ID of compound used in the database: 1 = Valproic Acid, 2 = Triadimefon

    limit : int
        Number of AOPs to limit the results to

    Returns
    -------
    dict
        Nodes and edges of the associated KEs and AOPs."""
    results = cpd_associated_kes_aops(compound_id=compound_id, limit=limit)
    return results


@app.get("/predict/pcr/{compound_id}", tags=["Predict"], response_model=BaseResponse)
async def get_pcr_kes_and_aops(
    compound_id: str, concentration: str | float | int = None, limit: int = 5
) -> dict:
    """Get the predicted AOP & KeyEvent nodes and edges using the PCR results of a given compound.

    Parameters
    ----------
    compound_id :  str
        ID of compound used in the database: 2 = VPA, 3 = Chlorpyrifos, 4 = Tridimefon

    concentration : str
        Concentration of the compound used. If none provided, returns all data for all concentrations tested.

    limit : int
        Number of AOPs to limit the results to

    Returns
    -------
    dict
        Nodes and edges of the associated KEs and AOPs."""
    results = pcr_associated_kes_aops(
        pcr_cpd_id=compound_id, conc=concentration, limit=limit
    )
    return results


@app.post("/predict/genes", tags=["Predict"], response_model=BaseResponse)
async def get_kes_and_aops_from_gene_list(gene_dict: Genes, limit: int = 5) -> dict:
    """Get the predicted AOP & KeyEvent nodes and edges a list of porvided genes.

    Parameters
    ----------
    gene_dict :  Genes
        Dict of genes to use for prediction.

    limit : str
        Number of AOPs to limit the results to

    Returns
    -------
    dict
        Nodes and edges of the associated KEs and AOPs."""
    sig_genes = set(gene_dict.genes)
    results = identify_associated_kes_aops(
        sig_genes=sig_genes, num_top_hits=limit, map_symbols=True
    )
    return results


@app.get("/exp/{ke_node_id}", tags=["Experiment"], response_model=ExpResponse)
async def get_exp_genes(ke_node_id: str | int):
    """Return the experimentally significant genes that are also associated with the given Key Event node ID.

    Parameters
    ----------
    ke_node_id :  str
        Key Event ID of node in graph.

    Returns
    -------
    dict
        Table of experimental evidence for associated genes.
    """
    exp_results = get_exp_data_for_ke(ke_node_id)

    return exp_results


@app.get("/kes/{aop_node_id}", tags=["Query"], response_model=AopKeyEvents)
async def get_aop_kes(aop_node_id: str | int):
    """Return a list of KEs for a given AOP ID.

    Parameters
    ----------
    aop_node_id : str
        AOP ID of node in graph.

    Returns
    -------
    dict
        List of associated KEs."""
    return get_kes_from_aop_id(aop_node_id)


@app.get(
    "/predict/sensitive/{compound_id}", tags=["Predict"], response_model=BaseResponse
)
async def get_sensitive_kes_and_aops(compound_id: str, limit: int = 5):
    """Get the predicted AOP & KeyEvent nodes and edges using the sensitive gene list of a given compound.

    Parameters
    ----------
    compound_id :  str
        ID of compound used in the database: 1 = Chlorpyrifos, 2 = Triadimefon, 3 = VPA

    limit : int
        Number of AOPs to limit the results to

    Returns
    -------
    dict
        Nodes and edges of the associated KEs and AOPs."""
    results = sensitive_associated_kes_aops(sens_cpd_id=compound_id, limit=limit)
    return results


if __name__ == "__main__":
    uvicorn.run("server:app", reload=True, port=5000, host="0.0.0.0")
