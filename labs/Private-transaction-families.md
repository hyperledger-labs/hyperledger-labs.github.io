# Lab Name

Private-transaction-families

# Short Description

Private-transaction-families system provides a mechanism for privacy over Hyperledger Sawtooth by enforcing a policy of access control to the ledger and sensitive state content based on the client’s role trying to access the data.

The system is based on a generic distributed ledger infrastructure (Hyperledger Sawtooth) and an Intel® SGX (Software Guard Extensions) ‘hardened’ Transaction Processor which provides a mechanism to enable Hyperledger Sawtooth to contain private information that is both not publicly available but required to validate transactions. This solution supports encryption of information in transactions and blocks while allowing the ledger to validate the information in those transactions in all the nodes and allow them to reach a consensus on the current state of the ledger.

Private-transaction-families provides benefits for both application developers seeking to define and implement privacy-preserving distributed ledgers, and for service providers seeking to provide blockchain services with access restriction to the ledger data.

# Scope of Lab

Private-transaction-families system provides a mechanism for privacy over Hyperledger Sawtooth by enforcing a policy of access control to the ledger and sensitive state content based on the client’s role trying to access the data.

The system is based on a generic distributed ledger infrastructure (Hyperledger Sawtooth) and an Intel® SGX (Software Guard Extensions) ‘hardened’ Transaction Processor which provides a mechanism to enable Hyperledger Sawtooth to contain private information that is both not publicly available but required to validate transactions. This solution supports encryption of information in transactions and blocks while allowing the ledger to validate the information in those transactions in all the nodes and allow them to reach a consensus on the current state of the ledger.

# Documentation

- Will be updated with links later -

Setup Instructions for Private-transaction-families can be found in the SETUP documentation.
For more information about how Private-transaction-families works, see the SPECIFICATION document.
The USAGE document describes How to run the system.

# Project Status

- Will be updated with links later -

Private-transaction-families operates as a Hyperledger Labs project and not a production ready project. This code is provided as a developer preview to demonstrate how privacy can be deployed on top of Hyperledger Sawtooth and currently implements the minimum viable product requirements (see details in the SPECIFICATION document).

# Initial Committers

- https://github.com/sgurary
- https://github.com/yoni-wolf
- https://github.com/ronenshemtov
- https://github.com/naishai
- https://github.com/esorski

# Sponsor

Dan Middleton (dan.middleton@intel.com)

#License

Private-transaction-families software is released under the Apache License Version 2.0 software license. See the license file for more details.
Private-transaction-families documentation is licensed under the Creative Commons Attribution 4.0 International License. You may obtain a copy of the license at: http://creativecommons.org/licenses/by/4.0/.
