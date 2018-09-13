# Lab Name
IBAN Portability Project

# Short Description
We propose a project that allows a solution to (Account Number Portability) ANP that is needed by a centralized shared banking platform. The solution involves:
1.	The registration of a group of Banks* (at least 2) into a shared banking platform, through a plug-in solution;
2.	The central repository of the platform imports data provided by the internal database of the bank (the OnBoarding phase) (including details of the account holders, IBAN* codes, generation dates and related BICs*); • automatically generate a portability code, which is associated with every IBAN: this code allows the portability of IBANs between banks that share the same platform; • In case of a switching operation: the new bank has to insert the portability code received by the client or directly by the old bank. The platform notifies the old bank. If this passes, the central repository updates the BIC; • After the switching operation the system gives a new portability Code to the IBAN in order to avoid risk of misuse of the code by anybody
3.	The Central Redirection Database controls the correctness of BIC code, for a given IBAN code, for every payment and consequently redirect every payment to the right bank
4.	The Central payment mandate repository gives centralized visibility above IBAN generation dates, lists of payments across several banks and BIC exchange dates for every client of the platform
5.	The central Know your Customer (KYC) database (Optional), collects and share information required by relevant regulations for all the banks accounts of the platform (independently from their open or closed IBANP context)


# Scope of Lab
With this lab we would implement a system of interchange of data relating to the consumer to allow the portability of the IBAN. The implementation uses Hyperledger Fabric.  The players involved are the bank of origin, the bank of arrival and a centralized control body. The transactions between the peers and the centralized entity must not be visible to other users of the blockchain. For this we use channels, to encapsulate transactions and increase privacy.
The first part of the laboratory aims to implement a blockchain network able to manage the flow of the operations. To route the arrival bank's request to that source via json files, return the response to the centralized institution and from there to the arrival bank. A second step isolates in a channel the transactions between the two banks.


# Initial Committers
Enzo Russo (e.russo@forfirm.com) CEO Lorenzo Piludu (l.piludu@ibanportabilityproject.org) CTO.

# Sponsor
Vipin Bharathan (vipinsun) vipinsun@gmail.com Chair of the Identity Working Group

# Pre-existing repository
_If you currently have a Github repository that you wish to transfer to the Hyperledger Labs organization, please provide a link here. **NOTE: Please refer to the README for additional information on existing repositories.**_
- http://ibanp-org-dev-portal-developers.s3-website-us-east-1.amazonaws.com/
