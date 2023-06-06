---
layout: default
title: Open Enterprise Agent
parent: Labs
---
# Open Enterprise Agent
# Short Description
The Open Enterprise Agent is a software agent for building decentralised identity applications and services in line with W3C standards and Hyperledger Aries RFCs. Aiming to be blockchain agnostic and interoperable across two key technology ecosystems in SSI, it provides a scalable, robust, performant and user-friendly platform for building solutions and products based on it. Its REST API enables easy integration with any programming language, on top of a core built in Scala, a language well suited for building fault-tolerant, highly concurrent systems.

# Scope of Lab
The Open Enterprise Agent leverages the power of decentralized identity by supporting W3C standards, DIDComm v2, and Aries RFCs. It provides all the necessary features to ensure broad interoperability with SSI and web3 ecosystems. Notable high-level features of the Open Enterprise Agent include:

- Ability to develop controllers using the Open Enterprise Agent API to implement business logic tailored to specific use cases.
- Flexibility to develop controllers in any programming language.
- Written in Scala, a powerful, object-oriented language with functional programming language features that are highly scalable, based on JVM
- Support of did:prism, did:peer and other did-methods via a universal resolver
- Support of JWT-VCs and Anoncreds credential formats
- The Open Enterprise Node interfaces with the Cardano blockchain when required, ensuring high levels of security, scalability, and availability.
- The PRISM Open Enterprise Agent is designed as a cloudagent that can be accessed from anywhere.

In summary, the Open Enterprise Agent is a versatile and powerful software agent that provides a straightforward REST API for easy integration and supports industry-standard protocols, making it well-suited for a wide range of decentralized identity use cases.

## Current Features

### PLATFORM SUPPORT

- Server
- Kubernetes
- Docker

### AGENT TYPES

- Issuer
- Holder
- Verifier

### CREDENTIAL TYPES SUPPORTED

- W3C JWT-VC
- Anoncreds

### DID METHODS SUPPORTED

- did:prism
- did:peer
- Other did-methods can be verified via a universal resolver

### COMMUNICATION SUPPORT

- DIDCOMM V2

### DIDCOMM PROTOCOLS SUPPORTED

- [Mediator Coordinator](https://didcomm.org/mediator-coordination/2.0/)
- [DIDComm V2 Messaging](https://identity.foundation/didcomm-messaging/spec)
- [DIDComm V2 Issue Credential](https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential)
- [DIDComm V2 Present Proof](https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md)
- [DIDComm V2 Report Problem](https://identity.foundation/didcomm-messaging/spec/#problem-reports)
- [DIDComm V2 Routing Protocol](https://identity.foundation/didcomm-messaging/spec/#routing-protocol-20)

### SUPPORTED ARIES RFC’s

- [0023-did-exchange](https://github.com/hyperledger/aries-rfcs/tree/main/features/0023-did-exchange)
- [0434-out-of-band-protocol](https://github.com/hyperledger/aries-rfcs/blob/main/features/0434-outofband/README.md)
- [0453-issue-credential-protocol](https://github.com/hyperledger/aries-rfcs/tree/main/features/0453-issue-credential-v2)
- [0453-present-proof-protocol](https://github.com/hyperledger/aries-rfcs/tree/main/features/0454-present-proof-v2)

# Initial Committers
- https://github.com/patlo-iog
- https://github.com/davidpoltorak-io
- https://github.com/antonbaliasnikov
- https://github.com/FabioPinheiro
- https://github.com/mineme0110
- https://github.com/bvoiturier
- https://github.com/yshyn-iohk
- https://github.com/CryptoKnightIOG
- https://github.com/shotexa
- https://github.com/goncalo-frade-iohk
- https://github.com/lohanspies

# Initial Maintainers

- https://github.com/bsandmann
- https://github.com/patlo-iog
- https://github.com/davidpoltorak-io
- https://github.com/antonbaliasnikov
- https://github.com/yshyn-iohk

# Sponsors
- Lance Byrd - ([lance.byrd@rootsid.com](mailto:lance.byrd@rootsid.com)) - Aries DIDCommV2 WG member
- Stephen Curran (swcurran@cloudcompass.ca) - ACA-Py Maintainer, Aries RFC Maintainer
- Timo Glastra - ([timo@animo.id](mailto:timo@animo.id)) - Aries Framework JavaScript Maintainer, ACA-Py Contributor
- Daniel Hardman - ([daniel.hardman@gmail.com](mailto:daniel.hardman@gmail.com)) - Lead of ToIP Trust Spanning Task Force, Primary editor ToIP ACDC Task Force, Aries RFC Maintainer
- Darrell O’Donnell - ([darrell.odonnell@continuumloop.com](mailto:darrell.odonnell@continuumloop.com)) - Chair of ToIP Technology Stack WG, Chair of ToIP Technology Architecture Task Force & Lead of ToIP Trust Registry Task Force

# Pre-existing repository
- https://github.com/input-output-hk/atala-prism-building-blocks
- For information, the code in this repository makes use of the logback library, which is licensed under GNU Lesser General Public License version 2.1 or Eclipse Public License v1.0 - https://github.com/qos-ch/logback (this repo should not be transfered to the HL Labs organisation)
