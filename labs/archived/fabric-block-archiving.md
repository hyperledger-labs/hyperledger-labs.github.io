---
layout: default
title: Hyperledger Fabric Block Archiving
parent: Archived Labs
---
# Lab Name
[Hyperledger Fabric Block Archiving](https://github.com/hyperledger-labs/fabric-block-archiving)

# Short Description

* Reduce the total amount of storage space required for an organisation to operate a Hyperledger Fabric network by archiving block data into repository.
* For organisations to operate a Hyperledger Fabric network with low resourced nodes such as a IoT edge devices.

# Scope of Lab

This feature is aimed primarily at Hyperledger Fabric network administrators who have been running their own network and have resource shortage problems. When considering the long term operation of service which makes use of Hyperledger Fabric as an underlying blockchain, Scalability is one of the most important factors for future business expansion while resource planning is critical in determining future capability. Calculating the required disk space is one of the key challenges faced by our partners. In the Blockchain community, there are a lot options to address this issue. In Bitcoin, Lightweight Node has already been introduced as an option for non-miners which download just the block headers so as to reduce disk space usage. Ethereum, the community has defined the Light client protocol for almost the same purpose as bitcoin's one. While in Hyperledger Fabric, there is a feature request for this issue as well. Unless this kind of feature is available, the business stakeholders will not be able to start their service in production on a large scale. This is one of the main reasons why most of the business stakeholders have considered making use of Blockchain as a Service (BaaS) managed by the cloud service providers despite it incurring more costs.

In our proposal, Hyperledger Fabric Block Archiving, data is handled in the unit of a certain amount of chunk of blocks called blockfiles. By default in Hyperledger Fabric, each peer node in an organisation needs to store block data into the blockfiles one by one from the genesis block to the latest one. So they have the exact same series of blockfiles through all peer nodes which are connecting to the same channel. The Block Archiving uses this characteristic to realize our concept. This functionality makes redundant the notion that every peer node is required to retain all blockfiles in the local file system indefinitely. And more importantly this preserves the Blockchain characteristics even after archiving the blockfiles. By enabling the block archiving feature not all peer nodes need to keep maintaining all the blockfiles. Simply, even devices which don't have much disk space could be a peer node of the blockchain network. For example, in an IoT system, you would be able to construct a blockchain network using edge devices with attached sensors in order to store sensor data and track information. This feature will make the target areas of the blockchain system broader than ever. Therefore The Block Archiving provides new possibilities for Blockchain applications.

Please refer to [the technical overview](https://github.com/nekia/fabric-block-archiving/blob/techoverview/BlockVault%20-%20Technical%20Overview.pdf) for more detail.


# Initial Committers
- [anand-jpa](https://github.com/anand-jpa) - Anand Konchery
- [chrism28](https://github.com/chrism28) - Chris Murphy
- [nekia](https://github.com/nekia) - Atsushi Neki

# Sponsors
- https://github.com/hartm - Member of Hyperledger TSC

# Pre-existing Repository
- https://github.com/nekia/fabric-block-archiving

