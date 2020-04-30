# Lab Name
Fabex

# Short Description
The aim of this tool is to provide microservice which augments and index the ledger of Hyperledger Fabric and to provide additional set of complex queries APIs to extract provenance information out of the ledger.

# Scope of Lab
Fabex aims to contribute to the Hyperledger Fabric audit ecosystem. It provides GRPC API and extensible database storage interface (MongoDB and CassandraDB implementations are now available). 
This tool can be used as CLI or microservice. Simple API documented in [fabex.proto](https://github.com/VadimInshakov/fabex/blob/master/proto/fabex.proto). 

MongoDB can be used as simple and convenient blocks storage. CassandraDB is the option for those who want column-oriented database for fast reads.

More information can be found in the [readme](https://github.com/vadimInshakov/fabex/blob/master/readme.md)

# Initial Committers
- https://github.com/vadiminshakov
- https://github.com/Mikelle

# Sponsor
- https://github.com/C0rWin - HLF maintainer 

# Pre-existing repository
- https://github.com/vadiminshakov/fabex