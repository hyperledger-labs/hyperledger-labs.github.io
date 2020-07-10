# Hyperledger Labs

Hyperledger Labs provides a space (i.e., GitHub repos) where work can
easily be started without the creation of a project. Please refer to
the [Hyperledger Labs wiki page](https://wiki.hyperledger.org/display/labs)
for additional information.

## Process to propose a new lab

1. Fork the [hyperledger-labs.github.io](https://github.com/hyperledger-labs/hyperledger-labs.github.io) repository.

2. Fill out the [Proposal Template](https://github.com/hyperledger-labs/hyperledger-labs.github.io/blob/master/proposal-template.md)
and save it into the labs subdirectory under the name of your lab,
such as mynewlab.md. It is expected that your lab repository will have
the same name so keep that in mind.

3. In the Proposal Template, there is an entry for sponsor(s). The sponsor(s) are responsible for reviewing the proposal. Sponsors do not have a responsibility beyond this; ongoing work like contributing code or reviews is not tied to their role as sponsors. In reviewing the proposal, the sponsor(s) make sure that the proposal is cogent, and novel (in conception, proposed execution, or interested community). 
To find sponsors 
        a. the proposers can use their connections to existing projects and ask maintainers
        b. find working groups or projects with affinities to the proposed lab and pitch the project (good to have the template already filled out) in associated channels and or mailing lists. The WG chairs emails, the maintainers contacts etc. can be found on the wiki or github. Make personal appeals if you can.

4. Commit your changes with proper sign-off. This means that your commit
log message must contain a line that looks like the following one,
with your actual name and email address:

        Signed-off-by: John Doe <john.doe@example.com>

   Adding the `-s` flag to your `git commit` command will add that line
automatically. You can also add it manually as part of your commit
log message or add it afterwards with `git commit --amend -s`.

5. Submit a Pull Request.

The labs stewards will then review your proposal.

## Bringing in an existing repository

By default the Lab stewards will create a new repository for you to
start from but if you have an existing github repo you would like to
bring to your proposed lab you have the option to request for that
repo to be reused instead. This is however only possible if every
commit in your existing repo is signed-off so there is no 
[DCO](https://developercertificate.org/) related issues. If that is 
not the case, you will need to bring your code by squashing all of 
your commits into a single first commit made against your new lab 
repo with your sign-off.
