---
title: Cluster API Provider MicroVM
---

# Cluster API Provider MicroVM

Installing and using CAPMVM to create bare-metal workload clusters.

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
