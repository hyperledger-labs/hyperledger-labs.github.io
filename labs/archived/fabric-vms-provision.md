---
layout: default
title: fabric-vms-provision
parent: Archived Labs
---
# Lab Name
fabric-vms-provision

# Short Description
This entry will provide an example on how to provision, using Ansible, Hyperledger Fabric native binaries on multiple Softlayer vms. A build your second network example.

# Scope of Lab
Most of the provisioning examples so far seem to focus on levegering docker-compose on a single vm to provision a network.
This does not take advantage of the distributed capibilities of Fabric, since if the vm goes down, the whole network goes with it.

Two examples are provided.
The first shows how to bring up the most minimal functioning Fabric network, a single peer and a single solo orderer.
The purpose of this example is to highlight the artifacts (correct certificates, yaml config files, and enviroment variables) required to have a working peer and orderer.
It also shows how to use the provided Fabric tools `cryptogen` and `configtxgen` to generate these artifacts.

Using the template of the first example, the second example creates a fully distributed Fabric network.
Since this would be an extremely error prone process if done manually, an ansible playbook is provided instead, addressing the numerous roles required for the network.
The Fabric conponents run on seperate vms, which are provided by Softlayer.

# Initial Committers
- https://github.com/jdsheehan
- https://github.com/eragnoli

# Sponsor
- https://github.com/christo4ferris  Christopher Ferris (chrisfer@us.ibm.com) - Role ("Member of Hyperledger TSC")

# Pre-existing repository
- https://github.com/jdsheehan/fabric-vms-provision
