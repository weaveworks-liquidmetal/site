---
title: Flintlock
---

Instructions on how to provision hardware to run Flintlock services.

## The `provision` tool

The recommended way to provision your devices is to use the `provision.sh` tool.

The script and documentation can be found [here][provision].

If you are running Liquid Metal in production it is recommended that you attach
storage to each device acting as a host. If this is not possible, pass the `--dev`
flag upon execution and sparse storage will be generated.

## Manual provisioning

If you would rather prepare your hosts manually or via your own tooling, here is
a list of required packages and components:

- `firecracker` from [our supported fork][fc].
- [`flintlockd`][flint]
- [`containerd`][containerd]
- The host must be capable of running hardware accelerated KVM virtual machines
- Either the `macvtap` module loaded in the kernel or a bridge network
- [Devicemapper][devmapper] storage

## Server configuration

`flintlockd` can be run as a [`systemd` service][service] or directly/managed by another mechanism.

The service can be configured via flags or a yaml config file.

The minimum options required to run are:

```yaml
containerd-socket: <path to containerd socket>
verbosity: <1-9>
parent-iface: <wired interface>
```

## Adding SSH keys to MicroVMs

:::info
For instructions on how to add SSH keys to MicroVMs created via CAPMVM see
[this page][capmvm].
:::

If you are creating MicroVMs via the flintlock API directly, encode your keys
in the `cloud-init` `"user-data"`:

```bash
cat << EOF >userdata.txt
#cloud-config
hostname: mvm0
users:
    - name: root
      ssh_authorized_keys:
        - |
          ssh-ed25519 foobar
disable_root: false
package_update: false
final_message: The Liquid Metal booted system is good to go after $UPTIME seconds
runcmd:
    - dhclient -r
    - dhclient
EOF

cat userdata.txt | base64
# result
```

And add the result to the spec:
```json
{
    "id": "mvm0",
    "namespace": "ns0",
    // ...
    "metadata": {
      "meta-data": "aW5zdGFuY2VfaWQ6IG5zMC9tdm0wCmxvY2FsX2hvc3RuYW1lOiBtdm0wCnBsYXRmb3JtOiBsaXF1aWRfbWV0YWwK",
      "user-data": "ENCODED RESULT"
    }
}
```

[capmvm]: /docs/guides/capmvm/#adding-ssh-keys-to-microvms
[provision]: https://github.com/weaveworks-liquidmetal/flintlock/tree/main/hack/scripts#provisionsh
[fc]: https://github.com/weaveworks/firecracker/releases
[flint]: https://github.com/weaveworks-liquidmetal/flintlock/releases
[service]: https://github.com/weaveworks-liquidmetal/flintlock/blob/main/flintlockd.service
[containerd]: https://github.com/containerd/containerd/releases
[devmapper]: https://docs.docker.com/storage/storagedriver/device-mapper-driver/
