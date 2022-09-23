---
sidebar_position: 1
---

# Overview

In this tutorial we will use a single local machine to act as multiple devices
in a development Liquid Metal platform.

:::info
This tutorial can currently only be run with a **Linux** computer, a macOS tutorial
is in the works.
:::

We have tested this tutorial on Ubuntu `20.04` and `22.04`, but any current linux
distribution with `systemctl` should do.

Your computer will be configured to act as _both_ bare-metal host _and_ a management
CAPI cluster.

:::tip
A Liquid Metal _system/platform_ refers to the combination of a CAPI management cluster
running CAPMVM, and a number of bare metal devices running Flintlock.

A Liquid Metal _cluster_ refers to a workload cluster created by CAPMVM with nodes
running in MicroVMs created by `flintlockd`.
:::

We will:
- Install all required MicroVM host components
  - Firecracker
  - Containerd
  - Flintlock
- Start the `flintlockd` service
- Use `kind` to create a local kubernetes cluster which will act as our CAPI management
cluster
- Install CAPI and CAPMVM on that `kind` cluster
- Write a manifest for a bare metal cluster
- Apply the manifest to the `kind` cluster
- Watch as CAPMVM connects to our `flintlockd` service to create MicroVMs
- See kubernetes nodes brought up in each MicroVM, and joined in a workload
cluster
- Tear down:
  - The bare metal workload cluster
  - The management `kind` cluster
  - All running host services

Let's get into it...
