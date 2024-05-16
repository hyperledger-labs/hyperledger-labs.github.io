---
layout: default
title: Hyperledger Labs Governance
nav_order: 4
---
[//]: # (SPDX-License-Identifier: CC-BY-4.0)

# Hyperledger Labs Governance

Labs are not directly controlled by the TOC. Labs are proposed and run by the community. They can be created by a [simple pull request](index#process-to-propose-a-new-lab) to the [labs stewards](stewards), who will perform due diligence on proposed labs before adding them. Upon approval by at least 2 stewards, any steward can effectively launch the proposed lab by accepting the Pull Request.

In case of issue with the [labs stewards](stewards), requesters and/or committers can appeal to the TOC for arbitration.

## Becoming a Lab Steward

If you are interested in volunteering to become a Hyperledger Lab Steward, please send an email to [the TOC mailing list](https://lists.hyperledger.org/g/toc) at [toc@lists.hyperledger.org](mailto:toc@lists.hyperledger.org). The email should contain:
1. Name
2. GitHub ID
3. Your involvement within the Hyperledger community
4. Why you want to become a lab steward

The TOC will then vote at an upcoming meeting to determine if your request is approved.

## Labs Stewards Responsibilities

The labs stewards are responsible for:
1. Reviewing Lab proposals **within a week of submission** and ensuring that:
    1. The scope of the proposed lab fits within Hyperledger’s mission;
    1. The proposed name is appropriate (e.g., not too generic, confusing, or conflicting with other labs or projects, etc);
    1. If there is an existing repo, that it is Apache 2.0 Licensed and that its commits have DCO sign-off. See [Bringing in an Existing Repository](https://github.com/hyperledger-labs/hyperledger-labs.github.io?tab=readme-ov-file#bringing-in-an-existing-repository) for more information.
1. If a lab steward expects to be away from the computer for more than a week, they must inform the other labs stewards in #labs-governance channel on Discord.
1. Quarterly, on a rotating basis:
    1. provide a quarterly update to the TOC on labs ([example](https://wiki.hyperledger.org/display/labs/2019+H2+Hyperledger+Labs+Update)). This update should include:
        - Activity Since Last Report (includes # of Labs Proposed, # of Labs Proposals Accepted, # of Labs Archived, # of Labs Proposals in Process, # of Labs Proposals Out of Scope/Withdrawn, # of Labs Graduated to Projects)
        - New Labs Since Last Report (includes a table with columns of Lab Name, Description, Created Date, PRs Merged, Last Commit)
        - List of Existing Labs (includes a table with columns of Lab Name, Description, Created Date, PRs Merged, Last Commit)
        - List of Labs that Became Projects (includes a table with columns 
        - List of Archived Labs (includes a table with columns of Lab Name, Description, Archived Date)
    1. Determine which labs should be archived (see [Archiving](https://github.com/hyperledger-labs/hyperledger-labs.github.io?tab=readme-ov-file#archiving) for details on when labs should be archived) and create a PR ([example](https://github.com/hyperledger-labs/fabric-topologies/commit/a7f305f297d70287ae9da264bba4c7f4d73af35b)) for each lab that needs to be archived.
    1. Determine which labs stewards have been inactive (see [Inactive Labs Stewards](#inactive-labs-stewards) for more information on what is required).
1. Resigning their position if they are no longer able to serve as a labs steward.

Labs stewards are **not** responsible for:
1. Technical review
1. Maintaining or managing individual labs

## Inactive Labs Stewards
Hyperledger very much appreciates the contributions of all labs stewards but removing write privileges is in the interest of an orderly and secure project.

When a labs steward has not reviewed any lab proposals for three months they will receive a notification informing them of the inactivity policies. The means and manner of notification will be a Discord mention in the #labs-governance channel.

When a labs steward has not reviewed any lab proposals for six months a proposal will be opened up to move the labs steward from active status to emeritus status. A member of the labs stewards or a Hyperledger staff member will open this proposal. Any permissions to approve pull requests or commit code and any other such privileges associated with labs stewards status will be removed upon merge of the proposal.

The proposal will be in the form of a pull request (PR) to the [`hyperledger-labs.github.io` repository](https://github.com/hyperledger-labs/hyperledger-labs.github.io) updating the [stewards list](stewards). The inactive labs steward will be notified of this via an “at” @ mention in the PR. The PR will be open for at least one week to allow time for comments.

Inactive labs stewards who express an intent to continue contributing may request a three-month extension. This request shall be made in the pull request updating their active status. Typically, only one such extension will be granted.

Labs stewards who have been moved to emeritus status may return to active status when their activity resumes and the current Labs stewards approve their reactivation.
