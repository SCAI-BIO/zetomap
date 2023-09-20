"""Package constants."""
import os
from ebel_rest import connect

# Connect to Graphstore
server = "https://graphstore.scai.fraunhofer.de"
db_name = "zetomap"
user = "guest"
password = "guest"
print_url = True

connect(user, password, server, db_name, print_url)


# Strings
SOURCE = "source"
TARGET = "target"
ID = "id"
NODES = "nodes"
EDGES = "edges"
RID = "rid"
AOP = "aop"
KE = "ke"
GENE = "gene"


K8S = os.getenv("K8S")

# Root path
ROOT_PATH = "/api" if K8S else ""

# URLs
ZFIN_IDENTIFIERS = "https://zfin.org/downloads/identifiersForIntermine.txt"

# Queries
STRESSOR_TO_AOP = "SELECT out.title as aop, out.@rid.asString() as rid, out.aop_id as aopid, in.name as cpd FROM has_stressor"
AOP_TO_KE = "SELECT out.@rid.asString() as aop, out.title as aop_title, out.aop_id as aopid, in.title as ke, in.@rid.asString() as rid FROM has_key_event"
KERS = "SELECT out.@rid.asString() as source, in.@rid.asString() as target FROM key_event_relationship"
# KE_TO_GENE = "SELECT out.title as ke, in.name as gene, in.@rid.asString() as rid FROM has_go_link WHERE out.@rid = '{}'"

ALL_KE_GENE_LINKS = "SELECT out.title as ke, in.name as symbol FROM has_go_link"

# For the API utils
KE_GENES = "SELECT in.name as gene FROM has_go_link WHERE out.title = '{}'"

# Tested Genes
# List of genes tested as biomarkers recorded in qPCR excel file in data folder
TESTED_GENES = [
    "mobk13",
    "ssr2",
    "cyp26b1",
    "apobb.2",
    "cyp26a1",
    "cthrc1a",
    "dhrs3b",
    "cd248b",
    "Bactin2",
    "ctsll",
    "si:ch211-153b23.4",
    "efcab11",
    "slc4a1a",
    "lyz",
    "si:ch211-207n23.2",
    "ddx43",
    "CR318588.3",
    "slc47a2.2 = herc56.3",
    "si:dkey-235d18.5",
    "lgals17",
    "ifit15",
    "arf4b",
    "si:ch1073-165f9.2",
    "zgc:92590",
    "dctpp1",
    "cfhl5",
    "lgals1l1",
    "c4b",
    "rab43",
    "timp2b",
    "slc23a3",
    # "c3a.6",  # For testing # TODO remove!
]

# Sensitive Genes
VPA_SENS = {
    "apobb.2",
    "cela1.6",
    "alp3",
    "si:ch211-207n23.2",
    "si:dkey-235d18.5",
    "per1a",
    "efcab11",
    "krt15",
    "ddx43",
    "epdl2",
    "ces3",
    "apoa4b.2",
    "ctsll",
    "slc2a2",
    "pcdh1gc6",
    "CR318588.3",
    "apoa4a",
    "rgs8",
    "si:ch211-153b23.4",
    "hdac9b",
    "ncapg2",
    "slc4a1a",
    "CR318673.1",
    "dlgap1b",
    "si:ch211-199g17.2",
    "zgc:162509",
    "hdac11",
    "crygm2d14",
    "CR318588.4",
    "CR854838.1",
    "FP236197.1",
    "slc47a2.2",
    "etv5b",
    "aqp8a.1",
    "loxl3b",
    "serpine2",
    "cgref1",
    "glb1l",
    "hmgn7",
    "prkd1",
    "pvalb5",
    "tuba2",
    "lyz",
    "per2",
    "poglut2",
    "alas2",
    "idua",
    "hmgxb4a",
    "krt1-19d",
    "tert",
    "ndufa4",
    "zgc:86896",
    "pvalb8",
    "ripk4",
    "rcor1",
    "itgb1b.2",
    "hmgb1a",
    "prmt6",
    "camk2d1",
    "ift74",
    "ecm2",
    "asl",
    "anxa5b",
    "si:dkey-31g6.6",
    "zgc:123103",
    "gldc",
    "rcor3",
    "zbtb7b",
    "hopx",
    "gbp3",
    "rcor2",
    "elk4",
    "si:ch211-226m16.2",
    "apoea",
    "krt91",
    "tp53",
    "dcun1d4",
    "hmgb3b",
    "elmsan1b",
    "si:dkey-147f3.8",
    "usp20",
    "sdr16c5b",
    "mpx",
    "suv39h1b",
    "sphk2",
    "ccdc32",
    "mcamb",
    "zzz3",
    "sgf29",
    "hemgn",
    "nt5c2l1",
    "yeats2",
    "gatad2b",
    "nucb2a",
    "tbl1xr1a",
    "tada2a",
    "akap8l",
    "mapk8a",
    "aplnrb",
    "mier3a",
    "mier3b",
    "hdac10",
    "gpnmb",
    "lrrk2",
    "mta2",
    "smarcad1a",
    "bcl6aa",
    "sin3aa",
    "chd3",
}

TRI_SENS = {
    "cyp26a1",
    "dhrs3b",
    "cyp26b1",
    "and2",
    "cthrc1a",
    "hoxc1a",
    "cd248b",
    "jun",
    "lrata",
    "apobb.2",
    "igfbp1b",
    "rbp2a",
    "abca1a",
}

CHL_SENS = {
    "cks1b",
    "ptgs2b",
    "sae1",
    "aldoaa",
    "apoa1a",
    "c3a.1",
    "dhcr24",
    "odf2b",
    "rrm2",
    "sec22ba",
    "dao.1",
    "cart3",
    "c4b",
    "zgc:92590",
    "sult3st4",
    "hspb1",
    "pebp1",
    "c7a",
    "mmp9",
    "ifit15",
    "sc5d",
    "si:ch211-270n8.1",
    "zgc:153704",
    "hmgcra",
    "fetub",
    "dctpp1",
    "ctsba",
    "msmo1",
    "serpine1",
    "c6",
    "hells",
    "wfdc1",
    "rab43",
    "dpagt1",
    "lss",
    "ncapg",
    "pla2g12a",
    "tonsl",
    "ndc80",
    "si:ch1073-165f9.2",
    "apobb.2",
    "timp2b",
    "pttg1",
    "birc5a",
    "si:ch211-14a17.10",
    "si:ch211-160f23.5",
    "pot1",
    "klf4",
    "sqlea",
    "dbf4b",
    "lgals17",
    "lgals1l1",
    "slc23a3",
    "mustn1b",
    "MFAP4",
    "cyp1a",
    "mvda",
    "arf4b",
    "cfhl5",
    "CABZ01015815.2",
    "CABZ01034851.1",
    "hdac1",
}
