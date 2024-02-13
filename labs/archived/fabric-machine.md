---
layout: default
title: Fabric Machine
parent: Archived Labs
---
# Lab Name
[Fabric Machine](https://github.com/hyperledger-labs/fabric-machine)

# Short Description
FPGA-based hardware acceleration for Hyperledger Fabric

# Scope of Lab
This lab explores the use of network-attached hardware acceleration for Hyperledger Fabric to improve its performance beyond what is achievable by software-only implementation on a multi-core server. It leverages FPGA accelerator cards (such as Xilinx Alveo), which are being increasingly adopted for accelerating cloud workloads and are also available from major public cloud providers such as AWS and Microsoft Azure.

The scalability and peak performance of Fabric is primarily limited by the bottlenecks present in its block validation/commit phase. The validation phase is run by either an endorser peer (which also endorses transactions) or validator peer. This lab provides an implementation of Fabric Machine, a hardware/software co-designed platform with hardware accelerator and modified Fabric software to act as the hardware-accelerated validator peer in a Fabric network. It is based upon a more general "Blockchain Machine" hardware acceleration technology, which may be extended beyond Fabric to other Hyperledger projects in the future.

The Fabric Machine peer is targeted for a server with a network-attached FPGA card in contrast to existing validator peers which run Fabric software on just a multi-core server. The Fabric Machine peer receives blocks from the orderer through a hardware-friendly protocol, and the block data is retrieved in FPGA without any involvement of the host CPU. The extracted block and its transactions are then passed through an efficient block-level and transaction-level pipeline in FPGA, which implements the bottleneck operations of the validation phase. Finally, Fabric software running on the host CPU accesses the block validation results from hardware, and then commits the block to disk-based ledger just like the software-only validator peer. Overall, a Fabric Machine peer is a hardware/software co-designed peer, leveraging both CPUs and FPGA-based acceleration to deliver significantly better performance than just using CPUs in a multi-core server.

More details about Blockchain/Fabric Machine architecture are in the following paper:

Haris Javaid, Ji Yang, Nathania Santoso, Mohit Upadhyay, Sundararajarao Mohan, Chengchen Hu, Gordon Brebner. Blockchain Machine: A Network-Attached Hardware Accelerator for Hyperledger Fabric. Available at http://arxiv.org/abs/2104.06968

This lab provides a proof-of-concept implementation and is not meant for production use. The main goal is to engage the Hyperledger community in FPGA-based hardware acceleration, and to refine/improve the Fabric Machine peer based on community experience and feedback.

# Initial Committers
- https://github.com/yangji-xlnx
- https://github.com/harisj-xlnx

# Sponsor
- Mark Wagner (mwagner@redhat.com) - Chair Performance and Scale Working Group
- Vipin Bharathan (vip@dlt.nyc) - Labs Steward
- David Boswell (dboswell@linuxfoundation.org) - Director of Ecosystem, Linux Foundation

# Pre-existing repository
- https://github.com/Xilinx/hyperledger-fabric
