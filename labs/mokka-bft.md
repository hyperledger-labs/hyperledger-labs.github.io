---
layout: default
title: Mokka-BFT
parent: Labs
---
# Lab Name
Mokka-BFT

# Short Description
Mokka-BFT Hyperledger lab is a repository for development of a production version of a BFT library based on the Mokka-BFT protocol,
described in the paper 'Mokka: BFT consensus' (https://arxiv.org/ftp/arxiv/papers/1901/1901.08435.pdf).

Mokka is a BFT consensus algorithm, with some common approaches nested from RAFT. Here are some advantages of the algorithm:
- one voting round
- each voting ends with multi-signature (of static size), which allows to determinate, which nodes voted for which candidate
- the algorithm also provides properties to resist against network freeze and networks split
- the algorithm makes sure that all nodes have the same installation of network peers
- the original RAFT can be extended with Mokka's properties

The original repository contains the implementation of the algorithm in Node.js (which is already used in some projects in production): https://github.com/ega-forever/mokka.
Also, as implementation is written in Javascript, you also can try the algorithm online: https://ega-forever.github.io/mokka/

# Scope of Lab
Mokka-BFT library could be used as an alternative BFT consensus algorithm, or some properties of the algorithm can be used to 
extend the existent consensus algorithms.

# Initial Committers
- https://github.com/ega-forever

# Initial Committers
- https://github.com/ega-forever

# Sponsor
None

# Pre-existing repository
None
