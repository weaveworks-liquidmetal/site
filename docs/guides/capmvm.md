---
title: Cluster API Provider MicroVM
---

Installing and using CAPMVM to create bare-metal workload clusters.

CAPMVM is Liquid Metal's bare-metal CAPI infrastructure provider.

Instructions on how to install CAPMVM to your management cluster can be found
in any of the [tutorials][install] on this site.

## CAPMVM API

## Adding SSH keys to MicroVMs

To add SSH keys to any MicroVM nodes, add the following to your `cluster.yaml`
before applying:

```yaml
...
kind: MicrovmCluster
spec:
  sshPublicKeys:
  - user: "root"
    authorizedKeys:
    - "ssh-ed25519 foobar"
...
```

[install]: /docs/tutorial-basics/capi
