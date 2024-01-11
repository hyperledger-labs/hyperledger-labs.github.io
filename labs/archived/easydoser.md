---
layout: default
title: EasyDoser
parent: Archived Labs
---
# Lab Name
EasyDoser

# Short Description
Ease endorsement operations for Hyperledger Fabric. In other words, provide easy ways to read/modify endorsement policies for Hyperledger Fabric systems.

# Scope of Lab
Endorsement policy controls the approval of a proposal to be executed at various granular levels.
In other words, this is the primary entity which is validated before a transaction is committed.
Endorsement policy can operate at two different granularities:

_Namespace level_: They can be set for the whole namespace.
This is the default approach in which endorsement policies are specified in the chaincode definition, which is agreed to by channel members and then committed to a channel

_Individual key level_: They can be set for individual state keys called private data collections. You can also specify an endorsement policy at the private data collection level, which would override the chaincode level endorsement policy for any keys in the private data collection.
This would further restrict which organizations can write to a private data collection.

## EasyDoser architecture
![alt text](https://cacoo.com/diagrams/3M6r1235YWmvGCyb-1ABD5.png)

## Start EasyDoser
[![asciicast](https://asciinema.org/a/355175.svg)](https://asciinema.org/a/355175)

## EasyDoser frontend
<img src="https://imgur.com/8cDvWSN.gif"/>

# Initial Committers
 - [Abhimanyu Shekhawat](https://github.com/Abhimanyu121)
 - [Anoop Vijayan Maniankara](https://github.com/maniankara)

# Future work
Also support other projects under Hyperledger projects umbrella

# Sponsor
[Vipin Bharathan](vipinsun@gmail.com) - Chair of the Identity Working Group

# Pre-existing repository
 - [EasyDoser](https://github.com/maniankara/hyperledger-easydoser) - **Private repository**

## More details
This is an extention project from hyperledger mentorship program 2020.
* Mentorship Project proposal - https://wiki.hyperledger.org/pages/viewpage.action?pageId=29035323
* Mentorship Project plan - https://wiki.hyperledger.org/display/INTERN/Project+Plan+and+Proposal
