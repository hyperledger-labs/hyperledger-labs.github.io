---
layout: default
title: Media Tracking Platform to Tackle Online Piracy
parent: Labs
---

# Lab Name
Media Tracking Platform to Tackle Online Piracy

# Short Description
Copyright infringement is a big issue in today's world, where intellectual property is often worth more than a physical one. When piracy websites distribute copyrighted media by some other entity, it makes that entity lose money, and as a result, even governments lose their share of taxes. Such infringements lead to more minor purchases of the copyrighted content through legal means, and it also lowers the income of industries that produce such content.

Encryption and device restrictions are often not enough to limit piracy; another way to limit it would be to target websites that distribute copyright content illegally. 

Our system is a distributed system with a blockchain ledger maintaining information on the copyrighted content provided by the legal owner of such content that could be accessed by our crawler as a sample to identify content similar to it on unauthorized websites. The crawler will index the URL and IP address of the platform hosting the content illegally. It notifies the concerned owner of the content, who verifies whether the content belongs to them. Post verification, the illegal distributor or the content can be taken down from the internet.

# Scope of Lab
Our solution combines web crawlers, deep web crawlers, and a distributed ledger technology like blockchain using Hyperledger Fabric. The ledger contributors are mainly the owners of the copyrighted content. According to their necessity, they can contribute a node to our blockchain and withdraw the node from the blockchain network.

The crawler searches the internet for any similar content or link to the content whose information has been immutably stored on the blockchain. If found, the information is indexed to our system. It sends out a notification to the copyright content owner, who then verifies it and approves forwarding the crawled information to law enforcement or any other agency responsible for taking down the content.

Existing solutions utilize crawlers just like our system. The novel approach we have taken is the employment of distributed ledger, which remove intermediaries, i.e., the system does not involve anyone else in the process other than the copyright owner. In our case, the content owner can be a part of the blockchain system and contribute to it. Law enforcement agencies and other agencies that can contribute by facilitating content removal are also part of our blockchain ecosystem.

Another key difference is that the existing service providers crawl the web only for the content they have been tasked to find on a contract basis. Our system lets the stakeholders manage the content database that they do not want to be infringed.

During the prototype phase, a web crawler and a distributed blockchain ledger based on Hyperledger Fabric can be set up with the facility to search for content that the crawler has found and suspects of being infringed.

# Initial Committers
- https://github.com/ramagururadhakrishnan
- https://github.com/Augustoandro
