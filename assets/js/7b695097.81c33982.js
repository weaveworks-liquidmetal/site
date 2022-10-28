"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Inspect the environment"},l=void 0,o={unversionedId:"tutorial-equinix/inspect",id:"tutorial-equinix/inspect",title:"Inspect the environment",description:"Let's take a look around the machines we have created and understand how they",source:"@site/docs/tutorial-equinix/inspect.md",sourceDirName:"tutorial-equinix",slug:"/tutorial-equinix/inspect",permalink:"/site/docs/tutorial-equinix/inspect",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/tutorial-equinix/inspect.md",tags:[],version:"current",frontMatter:{title:"Inspect the environment"},sidebar:"docs",previous:{title:"Provision the infrastructure",permalink:"/site/docs/tutorial-equinix/terraform"},next:{title:"Provision a CAPI management cluster",permalink:"/site/docs/tutorial-equinix/capi"}},s={},c=[{value:"The network hub device",id:"the-network-hub-device",level:2},{value:"VLAN address",id:"vlan-address",level:3},{value:"DCHP server",id:"dchp-server",level:3},{value:"Tailscale subnet router",id:"tailscale-subnet-router",level:3},{value:"NAT forwarding rules",id:"nat-forwarding-rules",level:3},{value:"The MicroVM host devices",id:"the-microvm-host-devices",level:2},{value:"VLAN address",id:"vlan-address-1",level:3},{value:"Flintlock",id:"flintlock",level:3},{value:"Firecracker",id:"firecracker",level:3},{value:"Containerd",id:"containerd",level:3},{value:"Devmapper",id:"devmapper",level:3},{value:"MicroVM interfaces",id:"microvm-interfaces",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's take a look around the machines we have created and understand how they\nare configured."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you'd like to jump straight to using your infrastructure to host a MicroVM cluster,\ngo to the next page.")),(0,a.kt)("p",null,"If left to the default configuration, the terraform module will have created the\nfollowing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"3 devices of your chosen plan type with OS ",(0,a.kt)("inlineCode",{parentName:"li"},"ubuntu_20_04")," in your chosen metro.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"2 of these devices will be provisioned as MicroVM hosts"),(0,a.kt)("li",{parentName:"ul"},"1 of these devices is used to managed networking. ",(0,a.kt)("em",{parentName:"li"},"There is no reason for this\nto be a separate machine, it just helps for clarity in this tutorial.")))),(0,a.kt)("li",{parentName:"ul"},"A VLAN with id ",(0,a.kt)("inlineCode",{parentName:"li"},"1000"),". Each device has been added to the VLAN via their ",(0,a.kt)("inlineCode",{parentName:"li"},"bond0"),"\ninterface with a ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.10.x")," address.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In order to add devices to the VLAN, they have all been updated to use a\n",(0,a.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/layer2-networking/hybrid-bonded-mode/"},"Hybrid Bonded mode"),".")))),(0,a.kt)("p",null,"You can use the SSH key you included in your ",(0,a.kt)("inlineCode",{parentName:"p"},"main.tf")," to access all created devices."),(0,a.kt)("h2",{id:"the-network-hub-device"},"The network hub device"),(0,a.kt)("p",null,"SSH on to the ",(0,a.kt)("inlineCode",{parentName:"p"},"network-hub")," device. You can find its IP either by checking your\nEquinix dash, or by inspecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"outputs")," from the terraform apply command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i <private key> root@<network_hub_ip>\n")),(0,a.kt)("h3",{id:"vlan-address"},"VLAN address"),(0,a.kt)("p",null,"The device has been added to the VLAN with the address ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.10.2/25"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ip a | grep -A 3 bond0.1000\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"7: bond0.1000@bond0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000\n    link/ether 04:3f:72:d4:5d:a8 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.10.2/25 scope global bond0.1000\n       valid_lft forever preferred_lft forever\n    inet6 fe80::63f:72ff:fed4:5da8/64 scope link\n       valid_lft forever preferred_lft forever\n"))),(0,a.kt)("h3",{id:"dchp-server"},"DCHP server"),(0,a.kt)("p",null,"The device is running an ",(0,a.kt)("inlineCode",{parentName:"p"},"isc-dhcp-server"),". When MicroVMs are created they will\nrequest an IP over the ",(0,a.kt)("inlineCode",{parentName:"p"},"bond0.1000")," interface.\nThis server will provide those from a range within the VLAN CIDR.\nThe range begins at ",(0,a.kt)("inlineCode",{parentName:"p"},".26")," to avoid clashing with any devices which are added to\nthe VLAN from the start of the block."),(0,a.kt)("p",null,"Note that MicroVMs will not join the VLAN. The DCHP range is taken from this subnet\nto facilitate easier NAT forwarding rules later."),(0,a.kt)("p",null,"Check that the service is running with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status isc-dhcp-server.service\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u25cf isc-dhcp-server.service - ISC DHCP IPv4 server\n     Loaded: loaded (/lib/systemd/system/isc-dhcp-server.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2022-10-28 10:11:02 UTC; 1min 4s ago\n       Docs: man:dhcpd(8)\n   Main PID: 15373 (dhcpd)\n      Tasks: 4 (limit: 38207)\n     Memory: 4.4M\n     CGroup: /system.slice/isc-dhcp-server.service\n             \u2514\u250015373 dhcpd -user dhcpd -group dhcpd -f -4 -pf /run/dhcp-server/dhcpd.pid -cf /etc/dhcp/dhcpd.conf bond0.1000\n\nOct 28 10:11:02 network-hub sh[15373]: Wrote 0 leases to leases file.\nOct 28 10:11:02 network-hub dhcpd[15373]: PID file: /run/dhcp-server/dhcpd.pid\nOct 28 10:11:02 network-hub dhcpd[15373]: Wrote 0 leases to leases file.\nOct 28 10:11:02 network-hub dhcpd[15373]: Listening on LPF/bond0.1000/04:3f:72:d4:5d:a8/192.168.10.0/25\nOct 28 10:11:02 network-hub sh[15373]: Listening on LPF/bond0.1000/04:3f:72:d4:5d:a8/192.168.10.0/25\nOct 28 10:11:02 network-hub sh[15373]: Sending on   LPF/bond0.1000/04:3f:72:d4:5d:a8/192.168.10.0/25\nOct 28 10:11:02 network-hub sh[15373]: Sending on   Socket/fallback/fallback-net\nOct 28 10:11:02 network-hub dhcpd[15373]: Sending on   LPF/bond0.1000/04:3f:72:d4:5d:a8/192.168.10.0/25\nOct 28 10:11:02 network-hub dhcpd[15373]: Sending on   Socket/fallback/fallback-net\nOct 28 10:11:02 network-hub dhcpd[15373]: Server starting service.\n"))),(0,a.kt)("p",null,"The lease config can be found at ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/dhcp/dhcpd.conf")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"default-lease-time 600;\nmax-lease-time 7200;\nauthoritative;\n\nsubnet 192.168.10.0 netmask 255.255.255.128 {\n  range 192.168.10.26 192.168.10.126;\n  option routers 192.168.10.2;\n  option domain-name-servers 147.75.207.207, 147.75.207.208;\n}\n"))),(0,a.kt)("p",null,"The IPv4 interface configuration can be found at ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/default/isc-dhcp-server"),"."),(0,a.kt)("p",null,"When creating MicroVMs, assigned leases can be observed with ",(0,a.kt)("inlineCode",{parentName:"p"},"dhcp-leases-list"),"."),(0,a.kt)("h3",{id:"tailscale-subnet-router"},"Tailscale subnet router"),(0,a.kt)("p",null,"This device is registered with your Tailscale VPN. This is so that any other device\non your Tailscale network, such as your local workstation, can access the private\nsubnet of the VLAN, MicroVMs and later the workload cluster API."),(0,a.kt)("p",null,"Check the service with ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl status tailscaled.service"),":"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\u25cf tailscaled.service - Tailscale node agent\n     Loaded: loaded (/lib/systemd/system/tailscaled.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2022-10-28 10:11:16 UTC; 5min ago\n       Docs: https://tailscale.com/kb/\n    Process: 16818 ExecStartPre=/usr/sbin/tailscaled --cleanup (code=exited, status=0/SUCCESS)\n   Main PID: 16827 (tailscaled)\n     Status: "Connected; Callisto13@github; 100.80.93.210 fd7a:115c:a1e0:efe3::6450:5dd2"\n      Tasks: 22 (limit: 38207)\n     Memory: 12.6M\n     CGroup: /system.slice/tailscaled.service\n             \u2514\u250016827 /usr/sbin/tailscaled --state=/var/lib/tailscale/tailscaled.state --socket=/run/tailscale/tailscaled.sock --port=41641\n\nOct 28 10:11:18 network-hub tailscaled[16827]: magicsock: home is now derp-14 (ams)\nOct 28 10:11:18 network-hub tailscaled[16827]: magicsock: adding connection to derp-14 for home-keep-alive\nOct 28 10:11:18 network-hub tailscaled[16827]: control: NetInfo: NetInfo{varies=false hairpin=true ipv6=true udp=true icmpv4=false derp=#14 portmap= link=""}\nOct 28 10:11:18 network-hub tailscaled[16827]: magicsock: 1 active derp conns: derp-14=cr0s,wr0s\nOct 28 10:11:18 network-hub tailscaled[16827]: Switching ipn state Starting -> Running (WantRunning=true, nm=true)\nOct 28 10:11:18 network-hub tailscaled[16827]: derphttp.Client.Connect: connecting to derp-14 (ams)\nOct 28 10:11:18 network-hub tailscaled[16827]: ipnserver: conn2: ReadMsg: read unix /run/tailscale/tailscaled.sock->@: read: connection reset by peer\nOct 28 10:11:18 network-hub tailscaled[16827]: magicsock: endpoints changed: 145.40.97.117:41641 (stun), [2604:1380:4601:f900::1]:41641 (stun), 10.12.150.5:41641 (local), 192.168.10.2:41641 (local)\nOct 28 10:11:18 network-hub tailscaled[16827]: magicsock: derp-14 connected; connGen=1\nOct 28 10:11:18 network-hub tailscaled[16827]: health("overall"): ok\n'))),(0,a.kt)("h3",{id:"nat-forwarding-rules"},"NAT forwarding rules"),(0,a.kt)("p",null,"To allow traffic from the MicroVMs to the outside, and to ensure responding packets\nreturn to the right place, simple rules have been configured to allow this transit\nacross the ",(0,a.kt)("inlineCode",{parentName:"p"},"bond0.1000")," VLAN interface, which all MicroVMs will be tapped to."),(0,a.kt)("p",null,"These rules have been configured with ",(0,a.kt)("inlineCode",{parentName:"p"},"firewalld"),"."),(0,a.kt)("p",null,"To see the status of the ",(0,a.kt)("inlineCode",{parentName:"p"},"firewalld")," service run ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl status firewalld"),":"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u25cf firewalld.service - firewalld - dynamic firewall daemon\n     Loaded: loaded (/lib/systemd/system/firewalld.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2022-10-28 10:11:06 UTC; 16min ago\n       Docs: man:firewalld(1)\n   Main PID: 16037 (firewalld)\n      Tasks: 2 (limit: 38207)\n     Memory: 22.4M\n     CGroup: /system.slice/firewalld.service\n             \u2514\u250016037 /usr/bin/python3 /usr/sbin/firewalld --nofork --nopid\n\nOct 28 10:11:05 network-hub systemd[1]: Starting firewalld - dynamic firewall daemon...\nOct 28 10:11:06 network-hub systemd[1]: Started firewalld - dynamic firewall daemon.\n"))),(0,a.kt)("p",null,"To see applied rules, run ",(0,a.kt)("inlineCode",{parentName:"p"},"firewall-cmd --direct --get-all-rules"),":"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ipv4 filter FORWARD 0 -i bond0.1000 -o bond0 -j ACCEPT\nipv4 nat POSTROUTING 0 -o bond0 -j MASQUERADE\n"))),(0,a.kt)("h2",{id:"the-microvm-host-devices"},"The MicroVM host devices"),(0,a.kt)("p",null,"SSH on to any of your MicroVM ",(0,a.kt)("inlineCode",{parentName:"p"},"host-x")," devices. You can find their IPs either by checking your\nEquinix dash, or by inspecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"outputs")," from the terraform apply command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i <private key> root@<network_hub_ip>\n")),(0,a.kt)("h3",{id:"vlan-address-1"},"VLAN address"),(0,a.kt)("p",null,"The device has been added to the VLAN with the next sequential address from the\n",(0,a.kt)("inlineCode",{parentName:"p"},"network-hub")," device, starting at ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.10.3/25"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ip a | grep -A 3 bond0.1000\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"5: bond0.1000@bond0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000\n    link/ether bc:97:e1:ab:20:56 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.10.3/25 scope global bond0.1000\n       valid_lft forever preferred_lft forever\n    inet6 fe80::be97:e1ff:feab:2056/64 scope link\n       valid_lft forever preferred_lft forever\n"))),(0,a.kt)("h3",{id:"flintlock"},"Flintlock"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"flintlockd")," server is running as a ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," service. You can check the status\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl status flintlockd.service"),":"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\u25cf flintlockd.service - flintlock microvm service\n     Loaded: loaded (/etc/systemd/system/flintlockd.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2022-10-28 10:33:52 UTC; 1s ago\n       Docs: https://docs.flintlock.dev/\n    Process: 16139 ExecStartPre=/usr/bin/which firecracker (code=exited, status=0/SUCCESS)\n    Process: 16140 ExecStartPre=/usr/bin/which flintlockd (code=exited, status=0/SUCCESS)\n   Main PID: 16141 (flintlockd)\n      Tasks: 16 (limit: 38058)\n     Memory: 12.2M\n     CGroup: /system.slice/flintlockd.service\n             \u2514\u250016141 /usr/local/bin/flintlockd run\n\nOct 28 10:33:52 host-0 flintlockd[16141]: time="2022-10-28T10:33:52Z" level=info msg="flintlockd grpc api server starting"\nOct 28 10:33:52 host-0 flintlockd[16141]: time="2022-10-28T10:33:52Z" level=info msg="starting microvm controller"\nOct 28 10:33:52 host-0 flintlockd[16141]: time="2022-10-28T10:33:52Z" level=info msg="starting microvm controller with 1 workers" controller=microvm\nOct 28 10:33:52 host-0 flintlockd[16141]: time="2022-10-28T10:33:52Z" level=info msg="resyncing microvm specs" controller=microvm\nOct 28 10:33:52 host-0 flintlockd[16141]: time="2022-10-28T10:33:52Z" level=trace msg="querying all microvms: map[Namespace:]" component=app controller=microvm\nOct 28 10:33:52 host-0 flintlockd[16141]: time="2022-10-28T10:33:52Z" level=warning msg="basic authentication is DISABLED"\nOct 28 10:33:52 host-0 flintlockd[16141]: time="2022-10-28T10:33:52Z" level=warning msg="TLS is DISABLED"\nOct 28 10:33:52 host-0 flintlockd[16141]: time="2022-10-28T10:33:52Z" level=debug msg="starting grpc server listening on endpoint 0.0.0.0:9090"\nOct 28 10:33:52 host-0 flintlockd[16141]: time="2022-10-28T10:33:52Z" level=info msg="starting event listener" controller=microvm\nOct 28 10:33:52 host-0 flintlockd[16141]: time="2022-10-28T10:33:52Z" level=info msg="Starting workersnum_workers1" controller=microvm\n'))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"flintlockd")," logs will be followable with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -fu flintlockd.service\n")),(0,a.kt)("p",null,"Data and logs for each MicroVM will be stored under ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/flintlock/vm"),", with\nthe full path for a MicroVM being ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/flintlock/vm/NAMESPACE/NAME/UUID"),"."),(0,a.kt)("p",null,"Under that directory are the following files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"firecracker.cfg"),": the configuration set by ",(0,a.kt)("inlineCode",{parentName:"li"},"flintlock")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"firecracker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"firecracker.log"),": logs from the firecracker process"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"firecracker.metrics"),": metrics from the firecracker process"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"firecracker.pid"),": the pid of the running firecracker process"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"firecracker.stderr"),": MicroVM boot errors"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"firecracker.stdout"),": MicroVM boot logs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metadata.json"),": MicroVM boot userdata")),(0,a.kt)("h3",{id:"firecracker"},"Firecracker"),(0,a.kt)("p",null,"Each MicroVM runs as a detached ",(0,a.kt)("inlineCode",{parentName:"p"},"firecracker")," process. You will find logs in the\nfiles given in the section above."),(0,a.kt)("p",null,"To see the processes once MicroVMs are created, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ps aux | grep firecracker\n")),(0,a.kt)("h3",{id:"containerd"},"Containerd"),(0,a.kt)("p",null,"Liquid Metal uses containerd to pull and snapshot volume images which are used\nfor mounting in the kernel and operating system."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," server is running as a ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," service. You can check the status\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl status containerd.service"),":"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\u25cf containerd.service - containerd container runtime\n     Loaded: loaded (/etc/systemd/system/containerd.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2022-10-28 10:11:14 UTC; 32min ago\n       Docs: https://containerd.io\n   Main PID: 15367 (containerd)\n      Tasks: 24\n     Memory: 24.3M\n     CGroup: /system.slice/containerd.service\n             \u2514\u250015367 /usr/local/bin/containerd --config /etc/containerd/config.toml\n\nOct 28 10:11:14 host-0 containerd[15367]: time="2022-10-28T10:11:14.587507936Z" level=info msg=serving... address=/run/containerd/containerd.sock.ttrpc\nOct 28 10:11:14 host-0 containerd[15367]: time="2022-10-28T10:11:14.587587743Z" level=info msg="Start event monitor"\nOct 28 10:11:14 host-0 containerd[15367]: time="2022-10-28T10:11:14.587603095Z" level=info msg="Start snapshots syncer"\nOct 28 10:11:14 host-0 containerd[15367]: time="2022-10-28T10:11:14.587601581Z" level=info msg=serving... address=/run/containerd/containerd.sock\nOct 28 10:11:14 host-0 containerd[15367]: time="2022-10-28T10:11:14.587613093Z" level=info msg="Start cni network conf syncer for default"\nOct 28 10:11:14 host-0 containerd[15367]: time="2022-10-28T10:11:14.587621478Z" level=info msg="Start streaming server"\nOct 28 10:11:14 host-0 containerd[15367]: time="2022-10-28T10:11:14.587636369Z" level=debug msg="sd notification" error="<nil>" notified=true state="READY=1"\nOct 28 10:11:14 host-0 containerd[15367]: time="2022-10-28T10:11:14.587649269Z" level=info msg="containerd successfully booted in 0.023907s"\nOct 28 10:11:14 host-0 systemd[1]: Started containerd container runtime.\nOct 28 10:11:14 host-0 containerd[15367]: time="2022-10-28T10:11:14.687272347Z" level=debug msg="garbage collected" d="819.891\xb5s"\n'))),(0,a.kt)("p",null,"After creating MicroVMs, use ",(0,a.kt)("inlineCode",{parentName:"p"},"ctr")," to inspect artifacts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# leases are a reference to other resources connected to an object created by a client\nsudo ctr -n flintlock -a /run/containerd-dev/containerd.sock leases ls\n\n# images are the bases images for snapshots\nsudo ctr -n flintlock -a /run/containerd-dev/containerd.sock images ls\n\n# snapshots and microvm configuration are stored in the content store\nsudo ctr -n flintlock -a /run/containerd-dev/containerd.sock content ls\n")),(0,a.kt)("h3",{id:"devmapper"},"Devmapper"),(0,a.kt)("p",null,"Containerd uses ",(0,a.kt)("inlineCode",{parentName:"p"},"devmapper")," to store image layers and MicroVM artifacts."),(0,a.kt)("p",null,"In a production system, ",(0,a.kt)("inlineCode",{parentName:"p"},"devmapper")," will use a block device via ",(0,a.kt)("inlineCode",{parentName:"p"},"lvm_direct"),"."),(0,a.kt)("p",null,"Check this with ",(0,a.kt)("inlineCode",{parentName:"p"},"dmsetup ls")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"flintlock-thinpool      (253:2)\nflintlock-thinpool_tdata        (253:1)\nflintlock-thinpool_tmeta        (253:0)\n"))),(0,a.kt)("p",null,"You can see the disk in use with ",(0,a.kt)("inlineCode",{parentName:"p"},"lsblk"),":"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                       MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nloop0                        7:0    0  63.2M  1 loop /snap/core20/1623\nloop1                        7:1    0  67.8M  1 loop /snap/lxd/22753\nloop2                        7:2    0    48M  1 loop /snap/snapd/16778\nsda                          8:0    0 447.1G  0 disk\n\u251c\u2500sda1                       8:1    0     2M  0 part\n\u251c\u2500sda2                       8:2    0   1.9G  0 part [SWAP]\n\u2514\u2500sda3                       8:3    0 445.2G  0 part /\nsdb                          8:16   0 447.1G  0 disk\n\u251c\u2500flintlock-thinpool_tmeta 253:0    0   4.5G  0 lvm\n\u2502 \u2514\u2500flintlock-thinpool     253:2    0 424.8G  0 lvm\n\u2514\u2500flintlock-thinpool_tdata 253:1    0 424.8G  0 lvm\n  \u2514\u2500flintlock-thinpool     253:2    0 424.8G  0 lvm\n"))),(0,a.kt)("h3",{id:"microvm-interfaces"},"MicroVM interfaces"),(0,a.kt)("p",null,"When you create MicroVMs, flintlock will create 2 interfaces per MicroVM mapped\nto the ",(0,a.kt)("inlineCode",{parentName:"p"},"bond0.1000")," vlan interface. These can be seen with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ip link ls\n")))}p.isMDXComponent=!0}}]);