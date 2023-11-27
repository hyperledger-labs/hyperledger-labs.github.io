---
layout: default
title: neferti
parent: Archived Labs
---
# Lab Name
neferti
# Short Description
neferti will be a low-code, metaprogrammable, standards sensitive and highly secure implementation to issue and trade NFTs, in a protocol agnostic way.
neferti code will address market place utilities for issuance and trading of NFTs.

# Scope of Lab
neferti is a low-code, metaprogrammable, standards sensitive and highly secure implementation to issue and trade NFTs, in a protocol agnostic way.
neferti code will address market place utilities for issuance and trading of NFTs.
neferti implementation will allow for extensibility and openness. An initial reference Hyperledger Fabric implementation is planned.

The initial code will be written in go with use of go-generate for metaprogramming

For NFTs, the definition of fungibility is negated; that is, each token is unique and one cannot be exchanged for another.

A software system for the creation and trading for NFTs has to account for a way to tie the NFT to the unique object at issuance (Identity, authorization and a global registry); a marketplace for trading NFTs, which means establishing a price for the NFT as well as to transfer ownership. This means an implementation of these actions through interfaces supported by NFT token attributes and metadata.

The following is the initial plan.
  * Adopt a token standard (a combination of the TTF and ERC- inspired standards)
  * Implement a marketplace (recode fabric samples )
  * Use Hyperledger Fabric as the underlying utility. See how ERC standards have been implemented in Fabric.
  * A complex systems view (Identity, distribution, decentralization, fairness, payment systems, cross-border, multi-protocol, interoperability of tokens, standards)- See under extensions.

As Ethereum has been the main driver of NFTs, standards are most mature in EIPs (Ethereum Improvement Proposals). These standards have been implemented in Open Zeppelin and in other locations. Three standards are of note: ERC 721, ERC-1155 and ERC 998.  Of this ERC-721 is most commonly used. The implementation of eThaler as ERC-1155 in Hyperledger labs and its subsequent reuse in the Climate Accounting project means that these standards are mappable to Hyperledger projects like Fabric.

Some ideas that will be explored
    * Can this infrastructure be flexible enough to define and issue different kinds of NFTs that conform to different standards? (Smart contract meta-programming)
    * Can metaprogramming in a multi-protocol approach work (this is considerably more difficult as it involves creating smart contracts in different protocols)-
    * Investigate Solang HL Lab)
    * Interoperability of NFTs can NFT issued on one protocol move to another? After being paid for in another protocol
    * Oracles that underlie NFTs.
    * Submarining- Is this relevant for non-IPFS storage mechanisms? What about storj?
    * Other damping mechanisms- A governor or clamping mechanism with a circuit breaker for extreme events
    * Incorporate AI and XR in the stack

   Handle Current limitations of Web3 implementations (Moxie M)
       * "Design systems that can distribute trust without having to distribute infrastructure." . All data to be in distributed infrastructure (In Fabric this can be Private Data Collections)
       * "Reduce the burden of building software." - No code platform....A smart contract generator, for Go implementations first.
       * A generic issuer front end.
       * A wallet front end for transfers (not tied to a particular access point)
       * Platforms vs Protocols.
       * Avoid the worst of both worlds: "centralize to control, decentralize to reduce speed of change".
       * Wallets need interfaces to decentralized data without having to rely on a centralized intermediary.

# Initial Committers
https://github.com/vipinsun
https://github.com/salimbene

# Sponsor

Andrea Frosinini : afrosinini72@gmail.com Chair of the Trade Finance SIG

# Pre-existing repository
None, but will be checking in new code wih proper dco sign-off
