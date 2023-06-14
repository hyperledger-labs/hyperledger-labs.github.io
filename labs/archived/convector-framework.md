---
layout: default
title: Convector Framework
parent: Archived Labs
---
# Lab Name
[Convector Framework](https://github.com/hyperledger-labs/convector)

# Short Description
Convector is a Model/Controller fullstack JavaScript framework to improve and speed up the development experience of clean, scalable and robust Smart Contract Systems. The developer focuses on the EDApps (Enterprise Decentralized Applications) and contractual relationships of participants rather than in lower level blockchain details.

It currently supports Hyperledger Fabric and provides tools to build fullstack TypeScript Smart Contract Systems made up of native JavaScript chaincodes, backend layers (Node.JS), and front end modules (such as AngularJS and React).

Rather than creating new models for chaincode development, it improves the existing development lifecycle on top of Fabric's models, NodeJS backends, and front end libraries and frameworks by abstracting logic into Models and Controllers, as well providing useful tools for the developer such as local development blockchain network creation, and testing frameworks. The Frameworks also comes with pre built storage and adapter layers to support the basic flow of communication from front end to back end to blockchain, as well CouchDB querying.

Its modular approach aims to be make Convector a cross blockchain framework, making it possible to plug in third party and own made data layers (blockchain, http libraries, etc) and adapters (Fabric's SDK, CouchDB drivers).

# Scope of Lab
Convector Framework represents iterations of native JavaScript chaincode and smart contract systems development. Developers wanting to keep control of their code can find an easier way to bootstrap smart contract systems and integrate them to the rest of their team's development lifecycle. There are no extra components included, Convector-made code will be translated and transpiled (from TypeScript) into native and easy to explore JavaScript code that executes within Hyperledger Fabric's chaincode runtime, its resulting code can also imported into existing NodeJS backends or front end libraries and frameworks, without disrupting existing logic or modules.

We initially created Convector because we wanted a production ready framework for fullstack JavaScript development, without changing Fabric's development model.

# Initial Committers
- https://github.com/diestrin
- https://github.com/walmon

# Sponsor
- https://github.com/lehors - Arnaud J Le Hors - Senior Technical Staff Member, Web and Blockchain Open Technologies, IBM

# Pre-existing repository
- https://github.com/worldsibu/convector
