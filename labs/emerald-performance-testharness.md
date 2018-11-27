# Lab Name
Performance Test Harness for Emerald Paymentd Benchmark. 

# Short Description
This is a test harness designed to measure the performance of payments
between peers on a blockchain network.
This performance is measure against the Emerald benchmark which is 
specified here:  

https://gitlab.com/emerald-platform/emerald/wikis/Emerald-Benchmark

# Scope of Lab

## Overview

The test harness should be able to measure the performance of a simple payments
network on a number of different blockchain platforms.

## Why Payments?

Choosing a payments use case enables to not only compare the performance of a 
variety of blockchain plaforms but also compare against existing payment
platforms and networks.

## Definition of the payments network

The simple payment network consists of the following:

* A defined number of blockchain nodes/peers.
* Each node has a number of 'accounts' in which they can store tokens.
* Each node issues and sends tokens from its accounts to an account on a random peer/node other than itself.

## Use cases supported by the underlying blockchain platform

In order for the test harness to measure the performance of a blockchain
payents platform. The platform must support the following use cases:

* Create several accounts that can store tokens
* Issue tokens to specific accounts
* Transfer tokens from account to account between nodes.

The third use case is what is measured by this benchmark.

The overall scope is to have a ready made test harness which blockchain
developers can use to test and tune their own payment solutions.

# Initial Committers
- https://github.com/Bartman250

# Sponsor
mwagner at redhat dot com - Mark Wagner

