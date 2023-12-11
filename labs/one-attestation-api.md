---
layout: default
title: 1attestation API
parent: Labs
---
# Lab Name
One Attestation API

# Short Description
This lab proposes to create a single API to handle attestations.
Attestations are a crucial mechanism to establish trust in hardware-based trusted execution environments (TEEs).
Today, multiple attestation mechanisms are available (e.g., SGX-EPID, SGX-DCAP, TDX-DCAP).
This proposal aims to create a single abstraction for the generation and verification of hardware-based attestations.
The abstraction can benefit, and avoid redundant implementations in, multiple projects (e.g., Fabric Private Chaincode, Private Data Objects)
that use TEEs to enhance software integrity and confidentiality.

# Scope of Lab
The scope of the lab is to provide tools/support for hardware/software attestations.
Contributions from the community will help support additional attestation mechanisms and TEEs.
Initially, we anticipate to integrate this tool in two Hyperledger projects: Fabric Private Chaincode and Private Data Objects.

# Initial Committers
- https://github.com/bvavala

# Sponsor
Thanks to Marcus Brandenburger for sponsoring this lab.
- https://github.com/mbrandenburger (bur@zurich.ibm.com) - Hyperledger TOC Member

# Pre-existing repository
Initially, this lab is meant to spin off the attestation API created in/for the Fabric Private Chaincode project.
- [https://github.com/hyperledger/fabric-private-chaincode](https://github.com/hyperledger/fabric-private-chaincode/tree/2b384e75ed1b19e8192f4c070ba9925e4a5a1ea7/common/crypto/attestation-api)https://github.com/hyperledger/fabric-private-chaincode/tree/2b384e75ed1b19e8192f4c070ba9925e4a5a1ea7/common/crypto/attestation-api
