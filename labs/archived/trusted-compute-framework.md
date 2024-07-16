---
layout: default
title: Trusted Compute Framework
parent: Archived Labs
---
# Lab Name
Trusted Compute Framework

# Short Description
The Trusted Compute Framework (TCF) enables privacy in blockchain transactions, moving intensive processing from a main blockchain to improve scalability and latency, and to support attested Oracles.

The Trusted Compute Specification was designed to help developers gain the benefits of computational trust and mitigate its drawbacks. In case of the Trusted Compute Framework a blockchain is used to enforce execution policies and ensure transaction auditability, while associated off-chain trusted compute resources execute transactions. By using trusted off-chain compute resources, a developer can accelerate throughput and improve data privacy. 

Preservation of the integrity of execution and the enforcement
of confidentiality guarantees come through the use of a Trusted Compute (TC) option, e.g. ZKP (Zero Knowledge Proof), MPC (Multi Party Compute), or HW based TEE (Trusted Execution Environment). While the approach will work with any TC option that guarantees integrity and confidentiality for code and data, our initial implementation uses Intel<sup>@</sup> Software Guard Extensions (SGX).

TCF leverages the existence of a distributed ledger to
 * Maintain a registry of the trusted workers (including their attestation info)
 * Provide a mechanism for submitting work orders from a client(s) to a worker
 * Preserve a log of work order receipts and acknowledgments

TCF uses Off-Chain Trusted Compute Specification defined by Enterprise Ethereum Alliance (EEA) Task Force as a starting point to apply a consistant and compatible approach to all supported blockchains.


# Scope of Lab
This project provides several substantial advances for Hyperledger
distributed ledger platforms that expand computational trust to off-chain workload execution in a ledger independent manner
 * A mechanism for off-chain workload execution that preservers privacy and improves scalability
 * Attested oracles serving as a trusted source of the data generated outside of the blockchain
 * Standard compliance starting with EEA Off-chain Trusted Compute Specification and extending it to other blockchains



# Initial Committers
 * danintel (daniel.anderson@intel.com)
 * EugeneYYY (yevgeniy.y.yarmosh@intel.com)
 * manojgop (manoj.gopalakrishnan@intel.com)
 * srinathduraisamy (srinath.duraisamy@intel.com)
 * TomBarnes (thomas.j.barnes@intel.com)

# Sponsor
Mic Bowman (mic.bowman@intel.com) - a TSC member

# Pre-existing repository
Existing repository is internal to Intel. It was originated from Hyperledger project Private Data Objects at https://github.com/hyperledger-labs/private-data-objects.
We plan to transfer the private TCF repository to Hyperledger GITHUB upon receiving required HL and Intel internal approvals.
