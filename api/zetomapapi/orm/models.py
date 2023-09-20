from typing import Optional

from sqlalchemy import ForeignKey, Table, Column
from sqlalchemy.orm import declarative_base, relationship, Mapped, mapped_column

from zetomapapi.constants import GENE

Base = declarative_base()

association_table = Table(
    "ke_gene_association_table",
    Base.metadata,
    Column("ke_id", ForeignKey("key_event.id"), primary_key=True),
    Column("gene_id", ForeignKey("gene.id"), primary_key=True),
)


# Table definitions
class Compound(Base):
    """Compound entires used in experiments."""

    __tablename__ = "compound"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    name: Mapped[str]
    casrn: Mapped[Optional[str]]

    exps: Mapped[list["Exp"]] = relationship()


class Gene(Base):
    """Individual genes."""

    __tablename__ = GENE

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    zfinid: Mapped[Optional[str]]  # ZFIN identifier
    zfin: Mapped[Optional[str]]  # ZFIN gene symbol
    hgncid: Mapped[Optional[str]]  # Mapped human ortholog HGNC ID
    hgnc: Mapped[Optional[str]]  # Mapped human ortholog HGNC symbol
    ensembl: Mapped[Optional[str]]

    exps: Mapped[list["Exp"]] = relationship()
    pcrs: Mapped[list["Pcr"]] = relationship()


class KeyEvent(Base):
    """Key Event entries to link to genes."""

    __tablename__ = "key_event"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    title: Mapped[str] = mapped_column(nullable=True, index=True)

    genes: Mapped[list[Gene]] = relationship(secondary=association_table)


class Exp(Base):
    """Experiment values."""

    __tablename__ = "exp"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)

    compound_id: Mapped[int] = mapped_column(ForeignKey(Compound.id))
    gene_id: Mapped[int] = mapped_column(ForeignKey(Gene.id))
    basemean: Mapped[Optional[float]]
    log2fc: Mapped[Optional[float]]
    lfcse: Mapped[Optional[float]]
    stat: Mapped[Optional[float]]
    pvalue: Mapped[Optional[float]]
    padj: Mapped[Optional[float]]
    timepoint: Mapped[int]
    concentration: Mapped[float]


class Pcr(Base):
    """Pcr values."""

    __tablename__ = "pcr"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    gene_id: Mapped[int] = mapped_column(ForeignKey(Gene.id))
    compound: Mapped[str]
    concentration: Mapped[float]
    qpcr: Mapped[float]
    seq: Mapped[float]


# Graph-like tables
class Node(Base):
    """Table for nodes."""

    __tablename__ = "node"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    node_type: Mapped[str] = mapped_column(index=True)
    name: Mapped[str]
    aop_id: Mapped[Optional[int]]


class Edge(Base):
    """Table for storing edges."""

    __tablename__ = "edge"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    source: Mapped[int] = mapped_column(ForeignKey(Node.id), index=True)
    target: Mapped[int] = mapped_column(ForeignKey(Node.id))

    source_name: Mapped[str]
    target_name: Mapped[str]
