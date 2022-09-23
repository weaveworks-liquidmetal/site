---
sidebar_position: 3
---

# Install and start Flintlockd

Here we will provision your machine to act as a host for MicroVMs.

## Firecracker

Flintlock is a wrapper around [Firecracker][firecracker] and [Cloud Hypervisor][cloud-h].
In this exercise we are going to use Firecracker. We can install that with the same
provisioning script as in the last section.

```bash
sudo ./provision.sh firecracker
```

Output:
```bash
[flintlock provision.sh] Installing firecracker version latest to /usr/local/bin
[flintlock provision.sh] Firecracker version v1.0.0-macvtap successfully installed
```

Verify the installation with `which firecracker`:
```bash
/usr/local/bin/firecracker
```

## Flintlock

We can install and start the service with the same script:

```bash
sudo ./provision.sh flintlock --dev --insecure
```

This command will:
- Install the latest version of `flintlockd`
- Create various state dirs
- Save a development config file under `/etc/opt/flintlockd/config.yaml`
- Start `flintlockd` as a `systemd` service

Output:
```bash

[flintlock provision.sh] Creating containerd directory /var/lib/containerd-dev/snapshotter/devmapper
[flintlock provision.sh] Creating containerd directory /run/containerd-dev
[flintlock provision.sh] Creating containerd directory /etc/containerd
[flintlock provision.sh] All containerd directories created
[flintlock provision.sh] Installing flintlockd version latest to /usr/local/bin
[flintlock provision.sh] Flintlockd version v0.3.0 successfully installed
[flintlock provision.sh] Writing flintlockd config to /etc/opt/flintlockd/config.yaml.
[flintlock provision.sh] Flintlockd config saved
[flintlock provision.sh] Starting flintlockd service
[flintlock provision.sh] Flintlockd running at localhost:9090
```

Verify that the service started with `systemctl status flintlockd`:
```bash
● flintlockd.service - flintlock microvm service
     Loaded: loaded (/etc/systemd/system/flintlockd.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2022-09-23 15:52:20 BST; 3s ago
       Docs: https://docs.flintlock.dev/
    Process: 54311 ExecStartPre=which firecracker (code=exited, status=0/SUCCESS)
    Process: 54312 ExecStartPre=which flintlockd (code=exited, status=0/SUCCESS)
   Main PID: 54313 (flintlockd)
      Tasks: 11 (limit: 18694)
     Memory: 10.6M
        CPU: 93ms
     CGroup: /system.slice/flintlockd.service
             └─54313 /usr/local/bin/flintlockd run

Sep 23 15:52:20 callisto-XPS flintlockd[54313]: time="2022-09-23T15:52:20+01:00" level=info msg="starting microvm controller"
Sep 23 15:52:20 callisto-XPS flintlockd[54313]: time="2022-09-23T15:52:20+01:00" level=info msg="starting microvm controller with 1 workers" controller=microvm
Sep 23 15:52:20 callisto-XPS flintlockd[54313]: time="2022-09-23T15:52:20+01:00" level=info msg="resyncing microvm specs" controller=microvm
Sep 23 15:52:20 callisto-XPS flintlockd[54313]: time="2022-09-23T15:52:20+01:00" level=info msg="Resyncing specs" action=resync controller=microvm namespace=ns
Sep 23 15:52:20 callisto-XPS flintlockd[54313]: time="2022-09-23T15:52:20+01:00" level=debug msg="Getting all specs" action=resync controller=microvm namespace=ns
Sep 23 15:52:20 callisto-XPS flintlockd[54313]: time="2022-09-23T15:52:20+01:00" level=warning msg="basic authentication is DISABLED"
Sep 23 15:52:20 callisto-XPS flintlockd[54313]: time="2022-09-23T15:52:20+01:00" level=warning msg="TLS is DISABLED"
Sep 23 15:52:20 callisto-XPS flintlockd[54313]: time="2022-09-23T15:52:20+01:00" level=debug msg="starting grpc server listening on endpoint localhost:9090"
Sep 23 15:52:20 callisto-XPS flintlockd[54313]: time="2022-09-23T15:52:20+01:00" level=info msg="starting event listener" controller=microvm
Sep 23 15:52:20 callisto-XPS flintlockd[54313]: time="2022-09-23T15:52:20+01:00" level=info msg="Starting workersnum_workers1" controller=microvm
...
```

[firecracker]: https://firecracker-microvm.github.io/
[cloud-h]: https://www.cloudhypervisor.org/

