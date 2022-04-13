---
layout: default
title: private-transaction-families
parent: Archived Labs
---
# Lab Name
[private-transaction-families](https://github.com/hyperledger-labs/private-transaction-families)

# Short Description

private-transaction-families system provides a mechanism for privacy over Hyperledger Sawtooth by enforcing a policy of access control to the ledger.

This lab provides benefits for both application developers seeking to define and implement privacy-preserving distributed ledgers, and for service providers seeking to provide blockchain services with access restriction to the ledger data.

# Scope of Lab

The system is based on a generic distributed ledger infrastructure (Hyperledger Sawtooth) and an Intel® SGX (Software Guard Extensions) ‘hardened’ Transaction Processor which provides a mechanism to enable Hyperledger Sawtooth to contain private information that is both not publicly available but required to validate transactions.

This solution supports encryption of information in transactions and blocks while allowing the ledger to validate the information in those transactions in all the nodes and allow them to reach a consensus on the current state of the ledger.

private-transaction-families operates as a Hyperledger Lab and provided as a developer preview to demonstrate how privacy can be deployed on top of Hyperledger Sawtooth.

# Initial Committers

- https://github.com/sgurary
- https://github.com/yoni-wolf
- https://github.com/ronenshemtov
- https://github.com/naishai
- https://github.com/esorski

# Sponsor

Dan Middleton (dan.middleton@intel.com)

# Last Updated

12/09/2018
