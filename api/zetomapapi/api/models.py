"""FastAPI Models"""
from typing import Union, Optional

from pydantic import BaseModel


class Compound(BaseModel):
    id: str
    name: str


class Gene(BaseModel):
    ensembl: str
    zfinid: str | None = None
    zfin: str | None = None
    hgncid: str | None = None
    hgnc: str | None = None


class ExpResult(BaseModel):
    compound: str
    ensembl: str
    log2fc: float | None = None
    pvalue: float | None = None
    padj: float | None = None
    zfinid: str | None = None
    zfin: str | None = None
    key: int | None = None
    timepoint: int | None = None
    concentration: float | None = None


class ExpResponse(BaseModel):
    tested: list[str]
    exp: list[ExpResult]


class AopKeyEvents(BaseModel):
    kes: list[str]


class KeyEvent(BaseModel):
    title: str


class Aop(BaseModel):
    title: str


class Genes(BaseModel):
    genes: list[str]


# Response Models
class Node(BaseModel):
    id: str
    node_type: str
    name: str
    # data: Optional[list[dict]] = None


class Edge(BaseModel):
    id: str
    source: str
    target: str


class BaseResponse(BaseModel):
    nodes: list[Node]
    edges: list[Edge]
    ke_gene_data: Optional[dict] = None
