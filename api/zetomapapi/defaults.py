"""Default paths."""
import logging

from pathlib import Path


# Relational Database
HOME = Path.home()
PROJECT_DIR = HOME.joinpath(".zetomap_api")
PROJECT_DIR.mkdir(exist_ok=True, parents=True)

DB_PATH = PROJECT_DIR.joinpath("zetomapapi.sqlite")
CONN = f"sqlite:///{DB_PATH}"

# Data folder
cwd = Path(__file__)
DATA = cwd.parent.joinpath("data")
PCR_EXCEL = DATA.joinpath("qPCR_Seq_Shared.xlsx")

# Cache ZFIN aliases
IDENTIFIER_CACHE = PROJECT_DIR.joinpath("identifiers.json")

# Logging
LOG_DIR = PROJECT_DIR.joinpath("logs")
LOG_DIR.mkdir(exist_ok=True, parents=True)
LOG_FILE_PATH = LOG_DIR.joinpath("zetomap_api.log")
logging.basicConfig(
    filename=LOG_FILE_PATH,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.DEBUG,
)
