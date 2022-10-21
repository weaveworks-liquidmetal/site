---
title: Flintlock
---

# Provision Flintlock on bare metal

Instructions on how to provision hardware to run Flintlock services.

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
