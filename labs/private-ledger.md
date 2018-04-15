# Lab Name

Private Ledger

# Short Description

Distributed ledger technology enables de-centralization of the ledger data to distribute the trust in the ledger content integrity between the parties involved. The principle to achieve this goal is having multiple copies of the data, shared between dedicated ledger nodes. Each of these nodes has two major roles: the first is to gather transactions, execute them and propose the new state of the ledger that resulted from executing those transactions (adding a new block in the block-chain), and the second is to validate blocks proposed by peer nodes. In this model, since each node must be able to execute all the transactions which operate on the current state of the ledger, it is a common practice that all the information is available to all the nodes. Usually distributed ledgers even provide a set of APIs to look at blocks, transactions and the current state of the ledger – there are no secrets from the node!
The purpose of the software we develop (“Private Ledger”) is to provide a mechanism for Transaction Processors protection by Intel® SGX (Software Guard Extensions) so an attacker is not able to view the internal state of the transaction processor and its used memory. The Private Ledger SW provides privacy to the logic layer to decide what data is private and who can access this data

# Scope of Lab

This Hyperledger lab scope is to develop and test the creation of a private ledger application, that works with Intel's SGX technology.

# Initial Committers

sgurary - shefy.gurary@intel.com, yoni-wolf - yoni.wolf@intel.com, oron.lenz@intel.com, ronen.shem-tov@intel.com, idan.sorski@intel.com (others might be added later on)

# Sponsor

dcmiddle - dan.middleton@intel.com

# Pre-existing repository

No pre-existing repository in github. Files would be added manually.
