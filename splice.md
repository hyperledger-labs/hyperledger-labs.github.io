---
layout: default
title: Splice
parent: Labs
---
# Hyperledger Splice

# Short Description
Reference applications for funding, operating, and incentivizing the use of a decentralized, public Canton synchronizer. Includes the Amulet reference application for creating native payment utilities for Canton synchronizers and Daml applications.

# Scope of Lab
## Abstract
Hyperledger Splice is a set of reference applications designed to allow entities to operate, fund, and govern publicly available Canton synchronizers that provide connectivity and interoperability infrastructure for the Canton Network, as well as to provide bootstrapping rewards and incentives to early users of that service. The Canton Network is the set of all applications built using the Daml blockchain application platform that form shared blockchain state via the Canton Protocol.

A virtual Canton Service Provider (vCSP), henceforth “operating group” is a group of entities that collectively operate a deployment of a decentralized Canton synchronizer. Hyperledger Splice introduces a reference method for operating a publicly available decentralized synchronizer, using what Splice calls a Super Validator Collective (SVC) as the operating group.  Super Validators in a Collective operate the nodes of a decentralized Canton synchronizer. The group of Super Validators in the Collective act both individually and collectively to configure, monitor and govern the synchronizer.

Hyperledger Splice aims to help operating groups create a transparent economic ecosystem that will, over time, fund operations of and extensions to multiple public synchronization services in the Canton Network.

## Context
Daml is a platform built by Digital Asset designed for deploying blockchains and developing blockchain applications. It includes a smart contract language, a set of APIs for calling smart contract code, a transaction processing engine, a query-optimized database for accessing smart contract state, and development tooling including an SDK. The open source and enterprise distributions of Daml also include a blockchain protocol, Canton, that creates synchronized state among nodes running the Daml platform.

The Canton blockchain guarantees secure state synchronization between participant nodes by running a per-transaction consensus protocol using encrypted messages through a synchronization infrastructure called synchronizers (or sometimes synchronization domains). Synchronizers serve three functions:

* guaranteeing consistent message order and timestamps among stakeholders; <br>
* guaranteeing delivery of messages to the stakeholders; and <br>
* aggregating validation confirmations from stakeholders that the proposed transactions use valid inputs and produce valid outputs.

Together these allow ordered, two-phase atomic transaction processing, with confirmation of transaction validation and transaction commits. Canton does this while keeping data private to the stakeholders in each transaction. <br> <p>
Daml applications may choose any Canton synchronizer on a per-transaction basis to help them advance the shared blockchain state that forms on the participant nodes. The collection of all Daml applications that synchronize their state via the Canton protocol, and the set of Canton synchronizers they use to do this, together form the Canton Network. <br> <p>
Operating groups may charge a fee for traffic that uses their synchronizer. The fee may be metered in USD per megabyte, and levied via an on-chain payment utility. This utility is an implementation of the Hyperledger Splice reference application called Amulet. <br> <p>
The Amulet reference application specifies how to implement on-chain payments using “amulets” which represent the ability to pay an operating group to synchronize a transaction with a payload of a given size. Together with the full suite of Hyperledger Splice applications, amulets allow a collective of entities to deploy, operate, fund, and govern a decentralized Canton synchronizer, and incentivize application developers and their customers to use that synchronizer to create blockchain state among their nodes. Each operating group configures an Amulet implementation to charge for use of the synchronizer, and distribute their own named version of amulets as rewards to incentivize early use of the service.<br> <p>
To provide a mapping between the value of its specific amulet and fiat currencies, the synchronizer operating group may use tooling included in Hyperledger Splice to jointly vote on a fee rate in megabytes per USD, and a nominal conversion rate between USD and the amulet configured by that operating group. This provides a base intrinsic value for the amulet used by the operating group: each amulet represents the value of creating and maintaining high guarantees of synchronized state across multiple computers, for a given data volume of messages shared among those computers. Should a market for that operating group’s amulet develop, the operating group may align the on-ledger price to the market price at its discretion. Synchronizer operating groups can incentivize use of their synchronizer by issuing their amulets to members of the operating group, to application providers, and to Canton participant node operators (“Validators”).  <br> <p>
Daml applications may choose to use their own, privately operated, Canton synchronizer to create shared state across the Canton participant nodes interacting with those applications, or they may use any shared synchronizer offered by a third party operating group.<br>

## Dependent Projects
Hyperledger Splice has grown out of the Daml blockchain ecosystem and its Canton protocol. Open Source versions of Daml are maintained by Digital Asset under an Apache 2.0 License. <br> <p>
Hyperledger Splice expands on Daml’s privacy-preserving blockchain technology by providing governance, network bootstrapping and rewards mechanisms as well as payment solutions for any public, decentralized synchronizer built using the Daml blockchain platform. Hyperledger Splice uses the Daml smart contract language to represent the stakeholders and business operations involved in configuring and implementing amulets and the applications that use them. Hyperledger Splice repositories are designed to be deployed in conjunction with Canton synchronizers and participant nodes. Any organization that operates a Canton synchronizer uses the Daml platform in addition to the tooling and applications provided by Hyperledger Splice. This use of the Daml platform could include use of closed-source elements of Daml, at the operating group’s discretion. <br>

## Motivation
Hyperledger Splice aims to create a transparent economic ecosystem that will, over time, fund operations of and extensions to a public synchronization service. Success for Hyperledger Splice would mean that synchronization infrastructure becomes so widely available that any application will be able to use Daml to define a subset of state to be synchronized, distribute Daml code for generating that state to the computers to be synchronized, and use a synchronizer to coordinate creation of that shared state across any set of computers running Daml.  <br> <p>
For a synchronization infrastructure to be this widely adopted, application developers need to know that they can trust it to operate in a transparent and predictable way, and at a better “price per value” point than comparable integration and synchronization technologies. Application developers and users also need reasons to try out the network before wide adoption creates strong network effects, so Hyperledger Splice includes a system of incentives and fees that reward early adopters. <br> <p>
Hyperledger Splice aims to make a high level of trust possible in the following ways:<br>
* Make operations and governance of Canton synchronizers transparent and trackable through built-in governance tooling.<br>
* Keep synchronizer transaction costs low via integrated payment, operations monitoring and governance automation, so operating groups can adjust their operations as needed to maintain a stable, long-term service offering.<br>
* Manage these tools and applications via an Apache 2.0 license and an open source community within the Hyperledger Foundation. <br> <p>
Hyperledger Splice’s interlocking system of incentives and fees includes:<br>
* Tools for using amulets as a payment utility, including a secure payment redirect feature that allows applications to call an amulet wallet to complete payments with strong security guarantees.<br>
* Rewards denominated in amulets which strongly incentivize early providers of synchronization infrastructure, application providers who make solutions available in the early stages of the network, and Validator operators, who  run blockchain nodes in the early stages of the network. <br>
* Traffic acquisition tooling that allows users to purchase access to synchronization infrastructure using amulets. <br>
* Handles for amulet users, to make it easy to find counterparties on chain and exchange amulets with them. <br>

## Status
The code that forms Hyperledger Splice was first implemented in June 2023 as part of a TestNet synchronizer operated by the members of an initial Super Validator Collective. The TestNet synchronizer has operated continuously since that time, with regular tests and software upgrades, using the code proposed for Hyperledger Splice to implement its operations, governance and payment applications. In late December, Digital Asset and 46 separate financial institutions demonstrated 30 decentralized application deployments that synchronized roughly 350 financial transactions via the TestNet synchronizer. <br> <p>
The collective operating this TestNet currently includes Digital Asset and three other organizations, with four additional organizations currently in the process of applying to join. <br> <p>
Digital Asset has funded an engineering team to develop the Hyperledger Splice reference applications. Digital Asset is working to build a team of collaborators who can decentralize responsibility for further development as part of the Hyperledger Open Source Software process. <br> <p>

## Solution
Hyperledger Splice consists of:
* Daml models defining the behavior of amulets, including their use as a means of payment for traffic across a decentralized synchronizer, and their use as an incentive mechanism to encourage early adoption of Canton synchronization infrastructure. Amulet behaviors include a minting rate and a burn rate, and various fee mechanisms. These Daml models consist of complex smart contract code written in the Daml language. The minting rate describes a configurable issuance curve over time, while the burn rate consists of several fees paid by destroying (“burning”) amulets to reduce its total supply. Minted amulets are distributed as rewards to synchronizer operating groups, application providers, and Canton participant node operators (“Validators”). <br>
* Five reference applications that provide the foundation for configuring and implementing an incentivizing economic ecosystem using amulets. Each application includes Daml models, automation elements and UI components: <br>
* A directory of handles for amulet users called the Name Service<br>
* An Amulet Wallet for controlling amulets on behalf of a given user, sending and receiving transfers of amulets under the control of that user, handling payment redirects from within applications, and allowing authorized OAuth2 users to interact with wallets under their control.<br>
* A Payment Scan service that collects records of amulet transactions and makes them visible via an API and an application UI. <br>
* A Synchronizer Governance app, which a synchronizer operating group can use for setting fees for its synchronizer, monitoring its operation, setting the nominal price of its amulets in USD, and implementing votes to change governance, operations and the nominal price for its amulet. This app will be accessible to any entity or group that chooses to operate synchronization infrastructure. <br>
* A Traffic Acquisition app, which allows users to purchase traffic across a Canton synchronizer, and configure automatic refills of a desired traffic balance as the user submits transactions via the synchronizer.<br> <p>

Amulet behaviors are controlled by the underlying Daml models. These models can be used to create an on-chain instance of an amulet following the Amulet pattern, but the models do not control actual operations and governance of an on-chain amulet. Actual definition, configuration and governance of operating group-specific amulets takes place by setting configuration variables on these models via governance votes in a specific on-chain context.  <br>
The Amulet models expose a large number of configuration variables to the Governance app (fifty-five variables in the current version). These allow synchronizer operating groups to use the Governance app to modify minting and burning behaviors, including but not limited to issuance curves, issuance round timing, fees, and rewards. This makes it possible to separate the governance of a particular implementation of the Amulet reference application from development of the Hyperledger Splice code base. <br>
We expect that contributors interested in Hyperledger Splice may contribute, for example, extensions to the APIs for the reference applications, including extensions to Amulet Wallet and the Payment Scan; extensions and enhancements to the Synchronizer Governance application; changes to Traffic Acquisition behavior and APIs, and enhanced UI features in the Wallet and the Name Service. These will be accepted based on the Hyperledger Foundation process for open source projects. <br>
Any group operating a Canton synchronizer may accept and implement new versions of the Hyperledger Splice reference applications at its own discretion. The amulet configuration used by any Canton synchronizer operating group can be made publicly available (visible) by that operating group. <br>

## Architecture
The following diagrams show how the Hyperledger Splice applications interact with the Daml platform from Digital Asset.<br>

![SV Node Architecture](Super%20Validator%20Architecture%20Diagram%20for%20Hyperledger%20Splice%20(2).jpg)

![Validator Node Architecture](Super%20Validator%20Architecture%20Diagram%20for%20Hyperledger%20Splice%20(3).jpg)

### Notes:
The Validator module contains the Wallet module and the Traffic Acquisition module.<br>
The SV App module contains the Amulet smart contract code and the Amulet configuration variables, as well as the Synchronizer Governance app. 

# Initial Committers

- https://github.com/waynecollier-da
- https://github.com/isegall-da

# Sponsor
https://github.com/tkuhrt - Tracy Kuhrt, Chair of the Hyperledger Technical Oversight Committee

# Pre-existing repository
We have an existing private repository. We plan to copy code from that repository to the new Hyperledger Splice repository in the first few weeks after the project has been approved, instead of transferring the repository itself. 
