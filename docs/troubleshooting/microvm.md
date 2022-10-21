---
title: MicroVMs
---

Understanding common MicroVM boot/run errors

### MicroVM network configuration failure/timeout

When MicroVMs boot, they will be assigned an address from wherever you have a dhcp server.
This may be your home router or a dedicated pool you have configured for a VLAN.

If you see the following logs, then it means this has failed.

```sh
A start job is running for Wait for Network to be Configured (38s / no limit)
... etc for a couple of mins. but really if it is going to work it will do
... so within 10 seconds
Failed Wait for Network to be Configured.
```

Steps:
- Check that the host can ping the router. If not, and you have access to the router,
	disconnect the device (turn it off) and remove the previous record from the router's
	list. Reconnect the device and try pinging again.
- Ensure that the correct interface has been configured in `/var/lib/flintlockd/config.yaml`.
	`parent-iface` should be set to a wired interface (eg `eth0`). If you are
	using flintlock in bridge mode, `bridge-name` should be a bridge which is mastered
	to a parent interface with internet access.
- On the MicroVM's host device run `tcpdump -i <parent interface name> -vv` while creating a MicroVM. Look for dhcp
	`Discover`, `Offer`, `Request` and `ACK` messages. If you see none, it means the
	MicroVM cannot reach your dhcp server at all. If you see the first 2 but not the last,
	it means the dhcp server has offered an IP by the client for some reason does not
	receive or accept that. From here you are debugging based on your particular device
	and networking setup.

### Cannot SSH into MicroVM

- Check that you set a public SSH in the spec `user-data`.
- Check the `firecracker.stdout` boot logs of the MicroVM to make sure you have
	the correct IP, or that one has been set at all (see the above section).
