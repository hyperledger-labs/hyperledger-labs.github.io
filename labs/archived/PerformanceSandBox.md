---
layout: default
title: PerformanceSandBox
parent: Archived Labs
---
# Lab Name
PerformanceSandBox

# Short Description
The Performance Sandbox is a Sandbox for Hyperledger Projects Performance research usage. It allows easy use of performance related works with this sandbox lab.

# Scope of Lab
_Enter the scope of the lab. This should include enough information to allow the Lab stewards to understand how it fits within Hyperledger's mission._

![What is Performance Sandbox](./images/PerformanceSandBox.png "What is Perfomance Sandbox")

## Overall
As the picture above, it uses kubernetes(as kind) as infrastructure, integrated with monitoring and open tracing(or say open telemetry).
- It supports user deploy a target network(as test-network for asset transform for Fabric), or called as SUT(system under test).
- It supports any traffic generator such as Tape for Hyperledger Fabric, keep sending traffic to the target network/SUT.
Performance researcher able to use this lab to do research with steps below:
1. Start sandbox with k8s integrated with monitoring and open telemetry
1. Deploy the SUT onto k8s infrastructure.
1. Start traffic generator to keep sending traffic to SUT.
1. Monitoring and Analyzing test result from Dash board/open telemetry result.
1. Changes local source code(for ex Fabric), make local docker image and redeploy the SUT.

It will extend existing PSWG published paper with monitoring and open telemetry. As the right side in the above figure, we can see the performance test model published in previously by PSWG, with SUT, traffic generator and observers.

## Flexible is considered and discussed:
- Migration from Kind to other k8s platform. In this lab, we will use k8s as infrastructure, hence it is easy to migrate to any other k8s based infrastructure.
- Replace with other blockchain system from Fabric to others. So far, the POC and demos been made base on Hyperledger Fabric, as the orange area shows the blockchain system, can be replaced with any kind of blockchain system you wanted.
- Traffic generator, so far deployed demo with Tape, as it is k8s development. It can be replaced with Caliper or Jmeter. Tape is a sample performance tool for Hyperledger Fabric without SDK(close to blockchain network itself). Caliper is based on Hyperledger Fabric SDK(more close to application level). For Jmeter, assuming you expose RESTFUL endpoint to enduser. You may need use Jmeter to create traffic as end to end performance research.
- Size of SUT, you are able to scale the size for SUT, as it is blockchain based on k8s.

## Summary scope of this lab
- [ ] Start kind with monitoring system.
- [ ] Dashboard for monitoring system.
- [ ] Deploy SUT.
- [ ] Deploy traffic generator system.
- [ ] Deploy/Local Image support.

# Initial Committers
- [Sam Yuan](https://github.com/SamYuan1990) - Sam Yuan

# Sponsor
- harisj@xilinx.com - Member of Hyperledger PSWG

# Pre-existing repository
N/A

So far the code is in some local branch, so it is not applied with repo transfer.
For POC demo, please ref link below:
https://www.bilibili.com/video/BV1d3411s7vq/

For disuccs across PSWG and Fabric contributor meeting
- https://wiki.hyperledger.org/display/PSWG/PSWG+December+14%2C+2021
- https://wiki.hyperledger.org/display/fabric/Contributor+Meetings+2022 (Jan 19th)
