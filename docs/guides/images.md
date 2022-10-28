---
title: MicroVM kernel and OS
---

The kernel binary and operating system for MicroVMs are supplied via OCI images.

They are pulled and mounted by `containerd`.

Liquid Metal supplies images for use with MicroVM clusters.

## Using images

### CAPMVM

Set the following variables before generating your manifest via `clusterctl`.

```bash
export MVM_KERNEL_IMAGE=docker.io/ORG/REPO:5.10.77
export MVM_ROOT_IMAGE=docker.io/ORG/REPO:1.21.8
```

Or edit the manifest directly for each `MicrovmMachineTemplate`.

<details><summary>Manifest changes</summary>

```yaml
...
---
apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1
kind: MicrovmMachineTemplate
spec:
  template:
    spec:
      kernel:
        filename: boot/vmlinux # make sure this matches where you left the kernel binary
        image: KERNEL_IMAGE
      rootVolume:
        id: root
        image: OS_IMAGE
...
```

</details>

### Flintlock

If using another flintlock client to create MicroVMs directly, set the
`spec.kernel.image` and `spec.root_volume.source.container_source`
options on the `CreateMicroVMRequest` call.


For example if using [`hammertime`][ht], edit the spec like so:

<details><summary>Spec example</summary>

```json
{
    "kernel": {
      "image": KERNEL_IMAGE,
      "filename": "boot/vmlinux", # make sure this matches where you left the kernel binary
      "add_network_config": true
    },
    "root_volume": {
        "id": "root",
        "is_read_only": false,
        "source": {
          "container_source": OS_IMAGE
        }
    }
}
```

</details>

## Supported images

**Kernel**:
- `ghcr.io/weaveworks-liquidmetal/flintlock-kernel:5.10.77`
- `ghcr.io/weaveworks-liquidmetal/flintlock-kernel:4.19.215`

**OS**:

_The tags here refer to the version of Kubernetes._
_The base OS is Ubuntu `20.04`._
- `ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes:1.23.5`
- `ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes:1.22.8`
- `ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes:1.22.3`
- `ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes:1.21.8`

## Experimental images

:::warning
These images are not guaranteed to work.
:::

**Kernel**:
- `ghcr.io/weaveworks-liquidmetal/flintlock-kernel-arm:5.10.77`
- `ghcr.io/weaveworks-liquidmetal/flintlock-kernel-arm:4.19.215`

**OS**:

- `ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes-arm:1.23.5`
- `ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes-arm:1.22.8`
- `ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes-arm:1.22.3`
- `ghcr.io/weaveworks-liquidmetal/capmvm-kubernetes-arm:1.21.8`

## Build your own images

You can supply your own images if desired.

Our image builder can be found [here][image-builder] if you would like to use it as a base.

:::info
Note that `firecracker` only documents support for `5.10` and `4.19` kernels.
:::

[image-builder]: https://github.com/weaveworks-liquidmetal/image-builder
[ht]: https://github.com/warehouse-13/hammertime
