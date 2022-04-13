---
layout: default
title: Besu Operator
parent: Archived Labs
---
# Lab Name
[Besu Operator](https://github.com/hyperledger-labs/besu-operator)

# Short Description
Kubernetes operator to provide an easier way of packaging, deploying, and managing Hyperledger Besu network.

# Scope of Lab
Deploying applications using plain Docker containers has many issues such as :

1. No management layer on top of it
   - If a container dies, nothing will restart it
   - If a virtual machine crashes, no failure recovery
2. No monitoring, alerts, etc.
3. Not scalable, no easy way of spreading containers among VM’s

A solution to all these is Kubernetes. Kubernetes (also known as k8s or “kube”) is an open source container orchestration platform that automates many of the manual processes involved in deploying, managing, and scaling containerized applications. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available.

Kubernetes is a good fit for blockchain networks often running on multiple clouds and on-premise. Blockchain networks require different types of nodes - validators, bootnodes, and normal network nodes, so these arrangements can be easily configured for a particular cluster.

Currently it's possible to deploy Besu on Kubernetes using Helm Charts or in kubectl. The purpose of the lab is to wrap everything under Kubernetes operator, so one can provide the operator the desired state of Besu, and let it reach & maintain that state.

This lab directly affects the Hyperledger Besu Project. The basic operator structure & framework could be used to develop operators for other Hyperledger products.

Details : [Lab Google Doc](https://docs.google.com/document/d/1GdBv62g8dsASe4QSESar5JZNzMq2gq5L5onEqJa2HFg/edit?usp=sharing)

# Initial Committers
- https://github.com/Sumaid

# Sponsor
- Mark Wagner (mwagner@redhat.com) - a TSC member

# Pre-existing repository
- https://github.com/Sumaid/besu-kubernetes/tree/besuoperator/besu-operator
- [PegaSysEng/besu-kubernetes](https://github.com/PegaSysEng/besu-kubernetes) has different resources for deploying besu using helm, kubectl, etc. So I have been developing operator within a subdirectory of a forked branch of [PegaSysEng/besu-kubernetes](https://github.com/PegaSysEng/besu-kubernetes), upon shifting to hyperledger labs, besu operator can be its own repository.
