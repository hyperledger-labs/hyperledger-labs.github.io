---
layout: default
title: Aries Wrapper For Fabric
parent: Archived Labs
---
# Aries Wrapper For Fabric
[Aries Wrapper For Fabric](https://github.com/hyperledger-labs/aries-fabric-wrapper)
# Description

Self-Sovereign Identity (SSI) is a mechanism which allows you to keep your identity under your control and at the same time also prove your identity to a verifier without revealing it. SSI applications are typically built using Hyperledger Aries, which depends on Indy as a Distributed Ledger and Ursa as a cryptography library. Currently, the most used Blockchain platform is Hyperledger Fabric. And the businesses that are building solutions using Fabric want to have some sort of identity verification to be done in their platform. This is the reason, why this project has come into existence. Once done it would enable Aries to interact with Fabric as a ledger, which would then enable SSI applications to be built on top of Fabric.

# Scope of Lab

As Hyperledger's mission is to increase the adoption of Blockchain technologies for business, this will enable businesses that are using Fabric for building their blockchain solutions to have identity verification process to be built-in into their system. The future developments that it will involve once it is set as a lab are :

Currently the Aries Framework Javascript (AFJ) only supports `did`, `schema` and `credential definition` as domain transactions. Once `revocation` and `attrib` transactions are added, we would add support for those as well in the chaincode and module.

Now there are 2 separate wallets – Indy wallet for agent and Fabric wallet for client application, we would try to integrate that into one.

We would also try to add support such that AFJ works with other ledger as well.

# Initial Committers

https://github.com/HarshMultani

# Sponsor

Kamlesh Nagware ( https://github.com/knagware9 ) - Role ( TSC Member )

# Pre-existing repository

https://github.com/HarshMultani/aries-fabric-wrapper

https://github.com/hyperledger/aries-framework-javascript/tree/feature/fabric-support
