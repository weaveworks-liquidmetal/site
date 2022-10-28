---
title: Cluster API Provider MicroVM
---

Installing and using CAPMVM to create bare-metal workload clusters.

CAPMVM is Liquid Metal's bare-metal CAPI infrastructure provider.

Instructions on how to install CAPMVM to your management cluster can be found
in any of the [tutorials][install] on this site.

## CAPMVM API

_CRD yamls generated with [`crd-to-sample-yaml`][cty]._

### `MicrovmCluster`

```yaml
apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1
kind: MicrovmCluster
metadata: {}
spec:
  controlPlaneEndpoint:
    host: string
    port: 1
  microvmProxy:
    endpoint: string
  placement:
    staticPool:
      basicAuthSecret: string
      hosts:
      - controlplaneAllowed: true
        endpoint: string
        name: string
  sshPublicKeys:
  - authorizedKeys: ["string"]
    user: string
  tlsSecretRef: string
status:
  conditions:
  - lastTransitionTime: string
    message: string
    reason: string
    severity: string
    status: string
    type: string
  failureDomains: {}
```

### `MicrovmMachine`

```yaml
apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1
kind: MicrovmMachine
metadata: {}
spec:
  initrd:
    filename: string
    image: string
  kernel:
    filename: string
    image: string
  kernelCmdline: {}
  memoryMb: 1
  networkInterfaces:
  - address: string
    guestDeviceName: string
    guestMac: string
    type: string
  providerID: string
  rootVolume:
    id: string
    image: string
    readOnly: true
  sshPublicKeys:
  - authorizedKeys: ["string"]
    user: string
  vcpu: 1
  volumes:
  - id: string
    image: string
    readOnly: true
status:
  addresses:
  - address: string
    type: string
  conditions:
  - lastTransitionTime: string
    message: string
    reason: string
    severity: string
    status: string
    type: string
  failureMessage: string
  failureReason: string
  ready: true
  vmState: string
```

### `MicrovmMachineTemplate`

```yaml
apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1
kind: MicrovmMachineTemplate
metadata: {}
spec:
  template:
    metadata:
      annotations: {}
      labels: {}
    spec:
      initrd:
        filename: string
        image: string
      kernel:
        filename: string
        image: string
      kernelCmdline: {}
      memoryMb: 1
      networkInterfaces:
      - address: string
        guestDeviceName: string
        guestMac: string
        type: string
      providerID: string
      rootVolume:
        id: string
        image: string
        readOnly: true
      sshPublicKeys:
      - authorizedKeys: ["string"]
        user: string
      vcpu: 1
      volumes:
      - id: string
        image: string
        readOnly: true
```

[install]: /docs/tutorial-basics/capi
[cty]: https://github.com/Skarlso/crd-to-sample-yaml
