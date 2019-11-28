# Lab Name
Proof of Elapsed Time 2

# Short Description
The Proof of Elapsed Time 2 (PoET2) is an experimental new protocol for Consensus based on PoET. The PoET2 Consensus method offers a solution to the Byzantine Generals Problem that utilizes a "trusted execution environment".

The PoET2 Consensus protocol differs from current [Hyperledger Sawtooth PoET](https://github.com/hyperledger/sawtooth-poet). The new protocol is designed to work independent of secure timer and monotonic counters set inside Intel&reg; Software Guard Extensions (SGX). The secure timers and monotonic counters rely on _SGX Platform Services_ to access these services from the system hardware.

# Scope of Lab
The project provides a reference implementation that is based on a generic distributed ledger infrastructure (Hyperledger Sawtooth) and Intel&reg; SGX. This will also act as a framework for enabling fair leader election algorithm (Proof of Elapsed Time) to the other distributed ledger infrastructure under the Hyperledger umbrella and/or for other blockchain infrastructure.

# Initial Committers
- https://github.com/arsulegai
- https://github.com/raneja14
- https://github.com/askmish
- https://github.com/rranjan3
- https://github.com/manju956

# Sponsor
Dan Middleton (dan.middleton@intel.com) - a TSC member

# Pre-existing repository
The PoET2 implementation consumes part of the existing Hyperledger Sawtooth PoET repository at https://github.com/hyperledger/sawtooth-poet.
We plan to complete the upload of the PoET2 in parts, by following the PR process.
