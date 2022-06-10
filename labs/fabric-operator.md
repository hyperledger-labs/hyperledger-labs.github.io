---
layout: default
title: Fabric Operator
parent: Labs
---
# Lab Name
Hyperledger Fabric Operator

# Short Description
**fabric-operator** is an open-source, cloud-native [Kubernetes operator](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)
for administering Hyperledger Fabric networks.  The operator follows the [CNCF Operator Pattern](https://github.com/cncf/tag-app-delivery/blob/main/operator-wg/whitepaper/Operator-WhitePaper_v1-0.md),
delegating the minutia of performing repetitive, detailed configuration tasks to automated activities performed under
the guidance of software-based controllers.

# Scope of Lab
**fabric-operator** addresses several major impediments hindering the general acceptance of Hyperledger Fabric as a
platform for building enterprise-scale, permissioned blockchains solutions:

- As a distributed system, Fabric is by nature an inherently _complicated platform._  While the core platform has 
  evolved to address technical requirements for implementing a cryptographically secure distributed ledger,
  little or no consensus has been achieved for the operational management of the platform.  As a result, the 
  landscape of management, deployment, and administrative techniques has been severely fragmented into several
  "siloes".  (As an example, by a recent count we have identified 6 + 27 + 2 separate [Fabric Operations Labs](https://wiki.hyperledger.org/display/CA/Fabric+Operations+Labs)
  spanning the space of open-source, community efforts to bring order to the chaos of Fabric administration.)


- While early adopters of technology are more readily to accept some form of operational risk, enterprise consumers
  of Fabric are hindered by both the disparity of administrative approach and access to a marketplace of technical
  contributors with expertise in Fabric administration.  Fabric operator provides a venue for the community to both 
  coalesce on shared / best practices for Fabric administration, and some level of predictability for operational 
  support as realized by an open-source, production-grade, community operator.


- Fabric application development has traditionally occurred in a vacuum, with individual software / smart contract / 
  application coding occurring in a _completely orthogonal_ [Fabric test network](https://hyperledger-fabric.readthedocs.io/en/latest/test_network.html)
  (based on Docker Compose), rather than aligning with the ultimate production environment.  In addition to naturally
  aligning with modern "git-ops," continuous integration, and continuous delivery based models for change management,
  the operator enables a _local development workflow_ (e.g. run on kubernetes, but on your laptop...) in complete 
  harmony with production deployments.


- In simple terms: working with Fabric is _hard._  The use of a production grade operator will reduce the learning 
  curve for newcomers, accelerate application development / solution delivery time, and greatly reduce the 
  _mental complexity_ necessary to successfully deliver solutions.  

  
In functional terms, **fabric-operator** provides configuration and flexible automation options for manipulating
Fabric networks with: 

- The Kube API controller (kubectl, kustomization, helm, K8s SDKs clients, etc.)
- A web-based User interface, provided by the companion [Fabric Operations Console](https://github.com/hyperledger-labs/fabric-operations-console)
- Declarative, [Ansible automation playbooks](https://github.com/IBM-Blockchain/ansible-collection) 


**fabric-operator** is an open-source, production-grade, community contribution from IBM.  The work spans several
(hundreds of?) thousands of hours of hard work, ingenuity, passion, and dedication from the team.  Special thanks
are in order for key contributors:


# Initial Committers

- Mihir Shah
- [Dhyey Shah](https://github.com/dhyey20)
- Saad Karim
- Tammy Le
- [Ratnakar Asara](https://github.com/asararatnakar)
- Jamie Min
- [Gari Singh](https://www.linkedin.com/in/garisingh/)


# Sponsors

- [David Boswell](https://github.com/todo) - Hyperledger XYZ
- [Hart Montgomery](https://github.com/todo) - Hyperledger XYZ 
- [Ry Jones](https://github.com/todo) - Hyperledger XYZ
- [Dave Enyeart](https://github.com/denyeart)  - Hyperledger TSC Member
- [Arnaud LeHors](https://github.com/lehors)  - Hyperledger TSC Member


# Pre-existing repository

- https://github.com/IBM-Blockchain/fabric-operator
