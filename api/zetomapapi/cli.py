"""Console script for zetomapapi."""
import sys

import click
import uvicorn

from zetomapapi.orm.importer import compile_database


@click.group(help=f"ZETOMAP API Command Line Utilities on {sys.executable}")
@click.version_option()
def main():
    """Console script for zetomapapi."""
    pass


@main.command()
def build():
    """Load the data into database and build graph."""
    compile_database()


@main.command()
def serve():
    """Run the API server."""
    uvicorn.run("zetomapapi.api.server:app", reload=True, port=5000, host="0.0.0.0")


if __name__ == "__main__":
    sys.exit(main())  # pragma: no cover
