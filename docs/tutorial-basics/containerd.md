---
sidebar_position: 2
title: Install and start containerd
---

# Containerd

Liquid Metal uses [`containerd`][containerd] to download and manage the images which are mounted
into MicroVMs as kernel and OS volumes.

Download the all-in-one provision script:

```bash
wget https://raw.githubusercontent.com/weaveworks-liquidmetal/flintlock/main/hack/scripts/provision.sh
chmod +x provision.sh
```

## Create thinpool

Flintlock relies on containerd's devicemapper snapshotter to provide filesystem
devices for Firecracker microvms. This is how the images are stored. In a production
we would use a dedicated disk, but here we will use a loopback device.

Run the script to create the thinpool:

```bash
sudo ./provision.sh devpool
```

Output:
```bash
[flintlock provision.sh] Creating containerd directory /var/lib/containerd-dev/snapshotter/devmapper
[flintlock provision.sh] Creating containerd directory /run/containerd-dev
[flintlock provision.sh] Creating containerd directory /etc/containerd
[flintlock provision.sh] All containerd directories created
[flintlock provision.sh] Will create loop-back thinpool flintlock-dev-thinpool
[flintlock provision.sh] Creating sparse file /var/lib/containerd-dev/snapshotter/devmapper/data of size 100G
[flintlock provision.sh] Sparse file /var/lib/containerd-dev/snapshotter/devmapper/data created
[flintlock provision.sh] Creating sparse file /var/lib/containerd-dev/snapshotter/devmapper/metadata of size 10G
[flintlock provision.sh] Sparse file /var/lib/containerd-dev/snapshotter/devmapper/metadata created
[flintlock provision.sh] Associating loop devices with sparse files
[flintlock provision.sh] Loop devices /dev/loop13 and /dev/loop20 associated
[flintlock provision.sh] Creating thinpool flintlock-dev-thinpool with devices /dev/loop13 and /dev/loop20
[flintlock provision.sh] Thinpool flintlock-dev-thinpool created
[flintlock provision.sh] Dev thinpool creation complete
[flintlock provision.sh] remember to set pool_name to flintlock-dev-thinpool in your containerd config
```

Verify that the device has been created with `sudo dmsetup ls`:
```bash
flintlock-dev-thinpool  (253:0)
```

## Configure and start containerd

Run the script to install `containerd` in dev mode:

```bash
sudo ./provision.sh containerd --dev
```

This command will:
- Install the latest version of `containerd`
- Create various state dirs
- Save a development config file under `/etc/containerd/config-dev.toml`
- Start `containerd` as a `systemd` service

Output:
```bash
[flintlock provision.sh] Creating containerd directory /var/lib/containerd-dev/snapshotter/devmapper
[flintlock provision.sh] Creating containerd directory /run/containerd-dev
[flintlock provision.sh] Creating containerd directory /etc/containerd
[flintlock provision.sh] All containerd directories created
[flintlock provision.sh] Installing containerd version latest to /usr/local/bin
[flintlock provision.sh] Containerd version v1.6.8 successfully installed
[flintlock provision.sh] Writing containerd config to /etc/containerd/config-dev.toml
[flintlock provision.sh] Containerd config saved
[flintlock provision.sh] Starting containerd service
[flintlock provision.sh] Containerd running
```

Verify that the service started with `systemctl status containerd`:

```bash
● containerd.service - containerd container runtime
     Loaded: loaded (/etc/systemd/system/containerd.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2022-09-23 09:29:48 BST; 6h ago
       Docs: https://containerd.io
   Main PID: 1387 (containerd)
      Tasks: 26
     Memory: 76.1M
        CPU: 1min 5.108s
     CGroup: /system.slice/containerd.service
             ├─1387 /usr/local/bin/containerd --config /etc/containerd/config.toml
             └─3234 /usr/local/bin/containerd-shim-runc-v2 -namespace moby -id 2f8915415519743e84a7da24b5c5ed08853523bb36ab6be40ae903595fd0685b -address /run/containerd/containerd.sock

Sep 23 09:29:47 callisto-XPS containerd[1387]: time="2022-09-23T09:29:47.999964272+01:00" level=info msg="loading plugin \"io.containerd.grpc.v1.snapshots\"..." type=io.containerd.grpc.v1
Sep 23 09:29:48 callisto-XPS containerd[1387]: time="2022-09-23T09:29:47.999993968+01:00" level=info msg="loading plugin \"io.containerd.grpc.v1.tasks\"..." type=io.containerd.grpc.v1
Sep 23 09:29:48 callisto-XPS containerd[1387]: time="2022-09-23T09:29:48.000012251+01:00" level=info msg="loading plugin \"io.containerd.grpc.v1.version\"..." type=io.containerd.grpc.v1
Sep 23 09:29:48 callisto-XPS containerd[1387]: time="2022-09-23T09:29:48.000027967+01:00" level=info msg="loading plugin \"io.containerd.grpc.v1.introspection\"..." type=io.containerd.grpc.v1
Sep 23 09:29:48 callisto-XPS containerd[1387]: time="2022-09-23T09:29:48.000360221+01:00" level=info msg=serving... address=/run/containerd/containerd.sock.ttrpc
Sep 23 09:29:48 callisto-XPS containerd[1387]: time="2022-09-23T09:29:48.000398173+01:00" level=info msg=serving... address=/run/containerd/containerd.sock
Sep 23 09:29:48 callisto-XPS containerd[1387]: time="2022-09-23T09:29:48.000435998+01:00" level=info msg="containerd successfully booted in 0.053398s"
Sep 23 09:29:48 callisto-XPS systemd[1]: Started containerd container runtime.
...
```

Now we can move on to installing flintlock.

[containerd]: https://containerd.io/
