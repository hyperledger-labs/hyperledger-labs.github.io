# Hyperledger Labs

The current Hyperledger Project Lifecycle provides for projects to be started in Incubation and graduate from there to Active projects. This proposal aims at providing a space (i.e., GitHub repos) where work can easily be started without the creation of a project.

## Motivation

Hyperledger can help build communities by gathering people sharing a common interest in developing blockchain related software. However the only way to currently do so is to submit a HIP and launch a formal project in Incubation. This is a relatively heavy process which implies a level of endorsement by Hyperledger that is not suitable for cases where projects are immature from a code-complete, production-quality, or community building perspective, or experimental.

Labs will 1) lower the pressure on the TOC to start new projects and 2) allow for work to be done within a legal framework that eases transition to a project in Incubation in cases where this ends up being the chosen path for the lab. In particular, this includes enforcement of the use of the Apache Software License and sign-offs on all contributions.

This new space will allow teams to experiment with new frameworks or new modules without promise of stable code or MVP. It is a space suitable for innovation and testing of ideas.

Examples of possible labs: projects too early for TOC approval as an incubator because there’s not a lot of code; demos; documentation examples; sample code from hackathons, research projects, etc.

Hyperledger Labs have similarities with the Apache Labs and the W3C Community Groups.

## Labs and the Project Lifecycle

Code from Labs is code provided “AS-IS”, shared with the Hyperledger community (and beyond) without guarantee of any kind. Labs may either have the ambition to someday become a project or not. It is also fine for this ambition to change over time.

Either way, there is no guarantee that a lab will become an incubated or fully-fledged project. If at any point a lab wants to enter Incubation and become a project, a HIP will need to be submitted for TOC consideration.

Conversely, it is not required to go through a lab for a project to be proposed for Incubation. Going through a lab is an option, not a requirement. Projects deemed sufficiently mature may be proposed for Incubation to the TOC by submitting a HIP.

## Governance

Labs are not directly controlled by the TOC. Labs are proposed and run by the community. They can be created by a simple request (done by submitting a Pull Request) to the [labs Stewards](stewards) (see below), who should perform due diligence on proposed labs before adding them.


In particular, the [labs Stewards](stewards) are responsible for ensuring that:

1. The scope of the proposed lab fits within Hyperledger’s mission;
2. The proposed name is appropriate (e.g., not too generic, confusing, or conflicting with other labs or projects, etc);
3. Proposers have a Sponsor (i.e. a maintainer of one of the Hyperledger projects, a TOC member or a WG chair);
4. Proposers need to be active members of the Hyperledger technical community (as defined in Section 4.a.ii of the Hyperledger Charter).


Upon approval by at least 2 Stewards, any Steward can effectively launch the proposed lab by accepting the Pull Request.


Stewards are not responsible for 

1. Technical review
2. Maintaining or managing individual labs

[labs Stewards](stewards) act in oversight to ensure legal compliance, etc., and will produce a quarterly hyperledger-labs-wide “project” report to the TOC, following a slightly revised template. To help the community understand the status of the different labs, Stewards will also be responsible for curating the set of labs, moving to an archives space (see below) those that become dormant or unresponsive for an extended period (6+ months), or are explicitly deemed by the committers to be deprecated/obsoleted.

In case of issue with the [labs Stewards](stewards), requesters and/or committers can appeal to the TOC for arbitration.

The [labs Stewards](stewards) will be members of the Hyperledger Community Architect(s) and subsequently any volunteer approved by the TOC. The initial list of Lab Stewards is:

* Arnaud Le Hors
* Vipin Bharathan
* Tracy Kuhrt

Stewards are to serve for as long as they desire and can fulfill the responsibilities, short of being removed by decision of the TOC such as in case of a violation of the code of conduct.


Labs need not necessarily adopt a strict or formal governance model, though for labs that intend to become a project someday they would be advised to do so. In any case, some minimal and non-zero responsiveness from the lab committers is expected. 


## Infrastructure

A separate GitHub org “[hyperledger-labs](https://github.com/hyperledger-labs)” will be created with the “[labs-stewards](stewards)” team which will have control over the administrative functions pertaining to the repos created within the org. Note that the Stewards will have no oversight of the labs themselves. Their role is strictly to approve entrance into the program, and to curate the labs over time, removing dormant labs from the hyperledger-labs org after a period (6+ months) of sustained inactivity or due to unresponsiveness from the lab’s committers.

Each lab can have its own repo(s) that are initially created with a LICENSE (ASL 2.0) file within the “hyperledger-labs” org and that has DCO-BOT enabled to enforce DCO signature on all commits, and a README file which clearly indicates that it is a lab and not a Hyperledger project. Additionally, for each lab a team will be created <reponame-committers> that includes the initial set of requested committers.

Thus, there is no risk of non-maintainer being able to rename or delete their repo.  Though, that means new <reponame>-committers team members will need to be added by a member of [labs-stewards](stewards).

Deprecated, obsoleted, or dormant labs (as defined above) will be moved to a GitHub org “hyperledger-labs-archives” that signifies that the lab is no longer maintained. Labs in the archives still have committers, and if commits pick up they can be moved back out of the archives. Eventually repos not touched in an even longer period of time, may be wiped with a tarball left behind (as Apache does when it puts a project in the attic.) 

There shall be [one chat channel](https://discord.gg/hyperledger), and one hyperledger-labs mailing list. Then, on a per-lab basis, a new chat channel and mailing list if the traffic specific to that lab grows substantially. Even if these side channels are set up, all lab committers are expected to follow #labs and the hyperledger-labs mailing list.

## Labs representation

It is not permitted to publicly refer to work under the hyperledger-labs org as an “Hyperledger project” and directly use the Hyperledger brand as in “Hyperledger <lab_name>”.  One may refer to this type of work as a “Hyperledger Lab” and use  “<lab_name>, a Hyperledger Lab.”


The hyperledger.org website is expected to provide some general introduction to the Labs with a link to the GitHub org however there are no plans to individually advertise each lab on the hyperledger.org website. A list may be made available on a wiki linked to from technical docs or the official GitHub org.

### Reference

* [Project Lifecycle](https://wiki.hyperledger.org/community/project-lifecycle)
* [Apache Software Foundation Labs](http://labs.apache.org/)
* [W3C Community Groups](https://www.w3.org/community/)