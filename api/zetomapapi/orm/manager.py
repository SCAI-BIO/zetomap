import re

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy_utils import create_database, database_exists


from zetomapapi.orm.models import Base
from zetomapapi.defaults import CONN


# if not database_exists(CONN):
#     create_database(CONN)

engine = create_engine(CONN)
session = sessionmaker(bind=engine)


def get_standard_name(name: str) -> str:
    """Return standard name."""
    part_of_name = [x for x in re.findall("[A-Z]*[a-z0-9]*", name) if x]
    return "_".join(part_of_name).lower()


def rebuild_database() -> None:
    """Burn everything and builds the database."""
    drop_database()
    build_database()


def build_database() -> None:
    """Build the tables of the database."""
    Base.metadata.create_all(bind=engine)


def drop_database() -> None:
    """Drop all the associated tables in the database."""
    Base.metadata.drop_all(bind=engine)
