---
title: Provision the infrastructure
---

We will use terraform to create some devices in Equinix.

## Configure

1. Create a new local directory and change into it:

  ```bash
  mkdir lm-equinix
  cd lm-equinix
  ```

1. Generate an API key for both Equinix and Tailscale.

1. Create a new SSH key pair:

  ```bash
  ssh-keygen -t ed25519
  ```

1. Connect your local machine to Tailscale:

  For Linux users:
  ```bash
  sudo tailscale up --accept-routes
  ```

  For other OS users:
  ```bash
  sudo tailscale up
  ```

1. Write the following to a `main.tf` file:

  ```bash
  cat << EOF >main.tf
  module "create_devices" {
    source = "weaveworks-liquidmetal/liquidmetal/equinix"
    version = "0.0.1"

    metal_auth_token = "my equinix auth token"
    org_id = "my org id"
    project_name = "my-lm-project"
    public_key = "my ssh public key"
  }

  module "provision_hosts" {
    source = "weaveworks-liquidmetal/liquidmetal/equinix//modules/provision"
    version = "0.0.1"

    ts_auth_key = "my tailscale auth key"
    private_key_path = "/path/to/my/private/key"

    vlan_id = module.create_devices.vlan_id
    network_hub_address = module.create_devices.network_hub_ip
    microvm_host_addresses = module.create_devices.microvm_host_ips
    baremetal_host_addresses = module.create_devices.bare_metal_host_ips
  }
  EOF
  ```

1. Edit these fields in your `main.tf`:

    - `metal_auth_token`: _your API token for Equinix Metal_
    - `org_id`: _your Equinix org id_
    - `project_name`: _the name of the project to create_
    - `public_key`: _the contents of the `.pub` file you created earlier_
    - `ts_auth_key`: _your Tailscale auth key_
    - `private_key_path`: _the path to the private key you generated earlier_

## Apply

Once your variables are configured, apply the plan:

```bash
terraform init
terraform plan
terraform apply
```

This make take a few minutes.

Once the `apply` is complete, take a note of the following outputs:

- `network_hub_ip`
- `microvm_host_ips`

### Approve the subnet routes

Once your `network-hub` host is provisioned, navigate to your [Tailscale dash][ts-dash], and
locate your `network-hub` machine which should have come online in your network. Select
the machine.

On the machine page, click Review under the 'Subnets' section, and toggle your range to 'enabled'.

:::info
This bit is easy to overlook or forget, so I am highlighting here for extra clarity!
:::

## Test

To verify the `flintlockd` services are ready to accept requests, you can use either [`fl`][fl] or
[`hammertime`][ht] to perform simple queries against the `microvm_host_ips` returned
by the terraform:

```bash
hammertime list -a <address>:9090

fl microvm get --host <address>:9090
```

[ts-dash]: https://login.tailscale.com/admin/machines
[fl]: https://github.com/weaveworks-liquidmetal/fl
[ht]: https://github.com/warehouse-13/hammertime
