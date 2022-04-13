---
layout: default
title: xcsi
parent: Archived Labs
---
# Lab Name
[xcsi](https://github.com/hyperledger-labs/xcsi)

# Short Description
Cross chain settlement instruction

# Scope of Lab

Create a cross chain settlement instruction. Many chains for issuing and trading digital assets and holding digital cash are being built. We envision a future in which chains are built on multiple platforms. To create a digital market, a chain that holds and trades assets needs to be connected to a chain accessible payment leg. Trading of assets could happen on one chain and payment could happen at a different venue. Cross chain settlement instructions are needed from the asset trading chain to the payment settlement chain. We use the short form xcsi/r. The first version contains only payment instructions. Faint inspiration comes from Swift MT 202 and ISO 20022 settlement and payment standards. We use the philosophy that interoperation between chains can happen through non-repudiable cross chain messages, which need to contain proofs. Verification, if needed, can happen through a DPKI setting and access to the sending chain. These messages are meant for asynchronous settlement between counterparties that have existing master agreements. These counterparties are enterprise participants migrating to digital markets to trade tokenised traditional or new assets.  We propose an instruction as well as a response in the JSON format. The preliminary schema has been created pretty rapidly. These JSON files containing signed commitments can be detached from their respective chains as settlement can rely on master agreements between counterparties and also on credit. The message in transport and rest can be encrypted. We are transport agnostic. These features do not necessitate an atomic operation. The initial message interaction will be tested in the destination chain client interface using a REST api. The idea is to explore the space and see what can be built as a lightweight bridge mechanism by focusing on connecting the asset leg to the payment leg.

# Initial Committers

https://github.com/vipinsun - dlt.nyc
https://github.com/mmani99 - Mani Pillai Swapshub
https://github.com/jagadeeshtmr - Jagadeesh Babu Swapshub

# Sponsor
- https://github.com/vipinsun - Chair of the Identity workgroup

# Pre-existing repository
None
