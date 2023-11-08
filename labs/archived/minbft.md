---
layout: default
title: MinBFT
parent: Archived Labs
---
# Lab Name
[MinBFT](https://github.com/hyperledger-labs/minbft)

# Short Description

Implementation of MinBFT consensus protocol.

# Scope of Lab

MinBFT is a pluggable software component that allows to achieve
Byzantine fault-tolerant consensus with fewer consenting nodes and
less communication rounds comparing to the conventional BFT protocols.
The component is implemented based on [Efficient Byzantine
Fault-Tolerance paper][minbft-paper], a BFT protocol that leverages
secure hardware capabilities of the participant nodes.

This lab is an implementation of MinBFT consensus protocol. The
code is written in Golang, except the TEE part which is written in C,
as an Intel® SGX enclave.

We hope that by evaluating this consensus component under the existing
blockchain frameworks, the community will benefit from availability to
leverage it in different practical use cases.

[minbft-paper]: https://www.researchgate.net/publication/260585535_Efficient_Byzantine_Fault-Tolerance

# Initial Committers

- https://github.com/sergefdrv
- https://github.com/luthlee
- https://github.com/ynamiki
- https://github.com/Naoya-Horiguchi

# Sponsor

- Kelly Olson (kelly.m.olson@intel.com)

# Pre-existing repository

https://github.com/nec-blockchain/minbft
