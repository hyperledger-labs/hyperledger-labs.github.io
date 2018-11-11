# Lab Name

Private-transaction-families

# Short Description

Private-transaction-families system provides a mechanism for privacy over Hyperledger Sawtooth by enforcing a policy of access control to the ledger.


# Scope of Lab

Private-transaction-families system provides a mechanism for privacy over Hyperledger Sawtooth by enforcing a policy of access control to the ledger and sensitive state content based on the client’s role trying to access the data.

The system is based on a generic distributed ledger infrastructure (Hyperledger Sawtooth) and an Intel® SGX (Software Guard Extensions) ‘hardened’ Transaction Processor which provides a mechanism to enable Hyperledger Sawtooth to contain private information that is both not publicly available but required to validate transactions. This solution supports encryption of information in transactions and blocks while allowing the ledger to validate the information in those transactions in all the nodes and allow them to reach a consensus on the current state of the ledger.

# Initial Committers

- https://github.com/sgurary
- https://github.com/yoni-wolf
- https://github.com/ronenshemtov
- https://github.com/naishai
- https://github.com/esorski

# Sponsor

Dan Middleton (dan.middleton@intel.com)
