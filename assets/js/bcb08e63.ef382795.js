"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2872],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const r={title:"Bonus: my exact demo build"},o=void 0,l={unversionedId:"tutorial-rpi/build-guide/demo-build",id:"tutorial-rpi/build-guide/demo-build",title:"Bonus: my exact demo build",description:"The final pieces if you want to copy exactly what I had on stage.",source:"@site/docs/tutorial-rpi/build-guide/demo-build.md",sourceDirName:"tutorial-rpi/build-guide",slug:"/tutorial-rpi/build-guide/demo-build",permalink:"/site/docs/tutorial-rpi/build-guide/demo-build",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/tutorial-rpi/build-guide/demo-build.md",tags:[],version:"current",frontMatter:{title:"Bonus: my exact demo build"}},s={},d=[{value:"Gear",id:"gear",level:2},{value:"Switch",id:"switch",level:2},{value:"Dell (ubuntu 2204)",id:"dell-ubuntu-2204",level:2},{value:"VLAN",id:"vlan",level:3},{value:"DHCP server",id:"dhcp-server",level:3},{value:"NAT forwarding",id:"nat-forwarding",level:3},{value:"Local image registry",id:"local-image-registry",level:3},{value:"Rp0 (ubuntu 2204)",id:"rp0-ubuntu-2204",level:2},{value:"VLAN",id:"vlan-1",level:3},{value:"Rp1 (ubuntu 2004)",id:"rp1-ubuntu-2004",level:2},{value:"VLAN",id:"vlan-2",level:3}],p={toc:d};function c(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The final pieces if you want to copy exactly what I had on stage."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(8966).Z,width:"4032",height:"3024"})),(0,i.kt)("h2",{id:"gear"},"Gear"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2 x Rpi4 4GB RAM"),(0,i.kt)("li",{parentName:"ul"},"2 x 32GB microSD",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1 With Ubuntu 2204, the other with 2004 (I prefer 2004 for this but did not\nget around to changing the first one yet)"))),(0,i.kt)("li",{parentName:"ul"},"2 x PoE hat"),(0,i.kt)("li",{parentName:"ul"},"Case"),(0,i.kt)("li",{parentName:"ul"},"4 x ethernet cable"),(0,i.kt)("li",{parentName:"ul"},"Managed switch (",(0,i.kt)("inlineCode",{parentName:"li"},"802.1q")," VLAN and ",(0,i.kt)("inlineCode",{parentName:"li"},"802.3af/at")," PoE capable)"),(0,i.kt)("li",{parentName:"ul"},"Wifi extender with ethernet port"),(0,i.kt)("li",{parentName:"ul"},"Extension cable")),(0,i.kt)("p",null,"To get this all to work the way I wanted it to, I needed a wired connection (",(0,i.kt)("inlineCode",{parentName:"p"},"macvtap"),"\ninterfaces cannot be created on a wireless interface) and I needed a way to reserve\nor predict a free internal IP. Both things hard to come by on stage, hence\nthe extension cable and the wifi extender. These combined with everything else\ngave me a wired connection and a VLAN with an address pool just for me."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(3378).Z,width:"1219",height:"820"})),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("h2",{id:"switch"},"Switch"),(0,i.kt)("p",null,"VLAN ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," with outgoing ports to all devices and incoming port from extender\nadded and tagged."),(0,i.kt)("h2",{id:"dell-ubuntu-2204"},"Dell (ubuntu 2204)"),(0,i.kt)("h3",{id:"vlan"},"VLAN"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# enxf8e43b5d5048 is my ethernet interface\n# 100 is my VLAN id on the switch\n# 192.168.10.2/25 is an address from a range that was not in use on the main network\n# this CIDR will be used in the dhcp pool\nnmcli con add type vlan con-name enx.100 dev enxf8e43b5d5048 id 100 ip4 192.168.10.2/25\n")),(0,i.kt)("p",null,"Creates VLAN device ",(0,i.kt)("inlineCode",{parentName:"p"},"enxf8e43b5d.100"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"I prefer to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"netplan")," for this but Ubuntu 2204 makes some annoying\ndecisions around networking tools which I could not be bothered to argue with."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"ip")," example:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'modprobe 8021q\necho "8021q" >> /etc/modules-load.d/networking.conf\n\nip link add link eth0 name eth0.100 type vlan id 100\nip addr add "192.168.10.2/25" dev eth0.100\nip -d link set dev eth0.100 up\n')),(0,i.kt)("p",{parentName:"admonition"},"Interface names have a length limit (except for the ones generated at boot, for\nwhatever reason). It is common to pick a VLAN interface name based on the parent\ninterface (eg. if you are creating a VLAN device linked to ",(0,i.kt)("inlineCode",{parentName:"p"},"eth0"),", most docs would\ntell you call it ",(0,i.kt)("inlineCode",{parentName:"p"},"eth0.100"),"). This is fine if the parent has a nice, short name,\nbut often they don't and you may end up with an ",(0,i.kt)("inlineCode",{parentName:"p"},"invalid arguement")," error."),(0,i.kt)("p",{parentName:"admonition"},"The VLAN device name can be anything so pick something shorter. If you want it to\nbe obvious what it is linked to, just abbreviate the name of the parent.")),(0,i.kt)("h3",{id:"dhcp-server"},"DHCP server"),(0,i.kt)("p",null,"I started a new dhcp server in my VLAN to respond to address requests from the MicroVMs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'apt update\napt install -y isc-dhcp-server\n\n\nmv /etc/dhcp/dhcpd.conf{,.backup}\n\n# 192.168.10.0/25 a subnet not in use on the main network\ncat <<EOF >/etc/dhcp/dhcpd.conf\ndefault-lease-time 600;\nmax-lease-time 7200;\nauthoritative;\nsubnet 192.168.10.0 netmask 255.255.255.128 {\n  range 192.168.10.26 192.168.10.126;\n  option routers 192.168.10.2;\n  option domain-name-servers 8.8.8.8, 8.8.4.4;\n}\nEOF\n\n# enxf8e43b5d.100 is my vlan interface\nsed -i "s/INTERFACESv4.*/INTERFACESv4=\\"enxf8e43b5d.100\\"/g" /etc/default/isc-dhcp-server\n\nsystemctl restart isc-dhcp-server.service\n')),(0,i.kt)("p",null,"I set the cluster ",(0,i.kt)("inlineCode",{parentName:"p"},"vip")," address to be from outside the pool ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.10.25"),"."),(0,i.kt)("p",null,"Leases can be viewed with ",(0,i.kt)("inlineCode",{parentName:"p"},"dhcp-lease-list"),"."),(0,i.kt)("h3",{id:"nat-forwarding"},"NAT forwarding"),(0,i.kt)("p",null,"To make sure addresses which come up in the ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.10.0/25")," dhcp range can access\nthe internet without being explicitly added to the VLAN."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'apt update\napt install -y firewalld\n\necho "net.ipv4.ip_forward = 1" >> /etc/sysctl.conf\nsysctl -p\n\n# enxf8e43b5d.100 is my VLAN interface\n# enxf8e43b5d5048 is my ethernet interface\n# basically send anything which comes over the VLAN (which the MicroVMs will be\n# parented to) out through the VLAN\'s parent\n\nfirewall-cmd --permanent --direct --add-rule ipv4 filter FORWARD 0 -i enxf8e43b5d.100 -o enxf8e43b5d5048 -j ACCEPT\nfirewall-cmd --permanent --direct --add-rule ipv4 nat POSTROUTING 0 -o enxf8e43b5d5048 -j MASQUERADE\nfirewall-cmd --reload\n')),(0,i.kt)("p",null,"Check the rules with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --direct --get-all-rules\n")),(0,i.kt)("h3",{id:"local-image-registry"},"Local image registry"),(0,i.kt)("p",null,"To speed up the demo by about 2 mins (yes I timed it) I ran a local insecure image registry on the Dell."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add ",(0,i.kt)("inlineCode",{parentName:"p"},'insecure-registries: ["192.168.10.2:5001"]')," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "insecure-registries": ["192.168.10.2:5001"]\n}\n')))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"systemctl restart docker.service"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start the registry in a docker container on the VLAN address:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --restart=always -p "192.168.10.2:5001:5000" --name lm-reg registry:2\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify on boards that ",(0,i.kt)("inlineCode",{parentName:"p"},"curl 192.168.10.2:5001/v2/_catalog")," returns something.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Load the cluster images to the registry. These need to be ",(0,i.kt)("inlineCode",{parentName:"p"},"arm64")," images, so the\neasy way to do this is upload them from one of the boards (",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," needed).\nI ran the following script on ",(0,i.kt)("inlineCode",{parentName:"p"},"rp0"),":"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"load-images.sh"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\nREG_ADDRESS=\'192.168.10.2\'\nREG_PORT=\'5001\'\n\nconfigure_daemon() {\n    cat <<EOF >/etc/docker/daemon.json\n{\n    "insecure-registries": ["$REG_ADDRESS:$REG_PORT"]\n}\nEOF\n  systemctl restart docker.service\n}\n\nload_image() {\n  local image="$1"\n\n  docker pull "$image"\n\n  docker tag "$image" "${REG_ADDRESS}:${REG_PORT}/${image##*/}"\n  docker push "${REG_ADDRESS}:${REG_PORT}/${image##*/}"\n}\n\nconfigure_daemon\nload_image "k8s.gcr.io/kube-apiserver:v1.21.14"\nload_image "k8s.gcr.io/kube-apiserver:v1.21.8"\nload_image "k8s.gcr.io/kube-controller-manager:v1.21.14"\nload_image "k8s.gcr.io/kube-controller-manager:v1.21.8"\nload_image "k8s.gcr.io/kube-scheduler:v1.21.14"\nload_image "k8s.gcr.io/kube-scheduler:v1.21.8"\nload_image "k8s.gcr.io/kube-proxy:v1.21.14"\nload_image "k8s.gcr.io/kube-proxy:v1.21.8"\nload_image "k8s.gcr.io/pause:3.4.1"\nload_image "k8s.gcr.io/pause:3.6"\nload_image "k8s.gcr.io/pause:3.2"\nload_image "k8s.gcr.io/etcd:3.4.13-0"\nload_image "k8s.gcr.io/coredns/coredns:v1.8.0"\nload_image "ghcr.io/kube-vip/kube-vip:v0.4.0"\nload_image "docker.io/rancher/mirrored-flannelcni-flannel-cni-plugin:v1.1.0"\nload_image "docker.io/rancher/mirrored-flannelcni-flannel:v0.19.2"\n')))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yaml")," add/change the following fields:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"cluster.yaml"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nkind: KubeadmControlPlane\nspec:\n  kubeadmConfigSpec:\n    files:\n      - path: /etc/containerd/config.toml\n        content: |\n          version = 2\n          [plugins]\n            [plugins."io.containerd.grpc.v1.cri"]\n              sandbox_image = "192.168.10.2:5001/pause:3.2"\n              [plugins."io.containerd.grpc.v1.cri".registry.mirrors]\n                [plugins."io.containerd.grpc.v1.cri".registry.mirrors."192.168.10.2:5001"]\n                endpoint = ["http://192.168.10.2:5001"]\n              [plugins."io.containerd.grpc.v1.cri".registry.configs]\n                [plugins."io.containerd.grpc.v1.cri".registry.configs."192.168.10.2:5001".tls]\n                  insecure_skip_verify = true\n    clusterConfiguration:\n      imageRepository: 192.168.10.2:5001\n      etcd:\n        local:\n          imageRepository: 192.168.10.2:5001\n    initConfiguration:\n      nodeRegistration:\n        kubeletExtraArgs:\n          pod-infra-container-image: 192.168.10.2:5001/pause:3.2\n    joinConfiguration:\n      nodeRegistration:\n        kubeletExtraArgs:\n          pod-infra-container-image: 192.168.10.2:5001/pause:3.2\n    preKubeadmCommands:\n      - mkdir -p /etc/kubernetes/manifests && ctr images pull --plain-http=true\n        192.168.10.2:5001/kube-vip:v0.4.0 && ctr run --rm --net-host 192.168.10.2:5001/kube-vip:v0.4.0\n        vip /kube-vip manifest pod --arp --interface $(ip -4 -j route list default | jq -r .[0].dev)\n        --address 192.168.10.25 --controlplane --leaderElection > /etc/kubernetes/manifests/kube-vip.yaml &&\n        sed -i \'s/ghcr.io\\/kube-vip/192.168.10.2:5001/\' /etc/kubernetes/manifests/kube-vip.yaml\n---\nkind: KubeadmConfigTemplate\nspec:\n  template:\n    spec:\n      files:\n        - path: /etc/containerd/config.toml\n          content: |\n            version = 2\n            [plugins]\n              [plugins."io.containerd.grpc.v1.cri"]\n                sandbox_image = "192.168.10.2:5001/pause:3.2"\n                [plugins."io.containerd.grpc.v1.cri".registry.mirrors]\n                  [plugins."io.containerd.grpc.v1.cri".registry.mirrors."192.168.10.2:5001"]\n                  endpoint = ["http://192.168.10.2:5001"]\n                [plugins."io.containerd.grpc.v1.cri".registry.configs]\n                  [plugins."io.containerd.grpc.v1.cri".registry.configs."192.168.10.2:5001".tls]\n                    insecure_skip_verify = true\n      joinConfiguration:\n        nodeRegistration:\n          kubeletExtraArgs:\n            pod-infra-container-image: 192.168.10.2:5001/pause:3.2\n'))),(0,i.kt)("p",{parentName:"li"},"Also the ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," fields in the ",(0,i.kt)("inlineCode",{parentName:"p"},"flannel")," CRS:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"image: 192.168.10.2:5001/mirrored-flannelcni-flannel-cni-plugin:v1.1.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"image: 192.168.10.2:5001/mirrored-flannelcni-flannel:v0.19.2"))))),(0,i.kt)("h2",{id:"rp0-ubuntu-2204"},"Rp0 (ubuntu 2204)"),(0,i.kt)("h3",{id:"vlan-1"},"VLAN"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# eth0 is the ethernet interface on the board\n# 100 is the switch VLAN id\n# 192.168.10.3 is the next ip in the VLAN subnet after the one my dell took\nnmcli con add type vlan con-name eth0.100 dev eth0 id 100 ip4 192.168.10.3/25\n")),(0,i.kt)("h2",{id:"rp1-ubuntu-2004"},"Rp1 (ubuntu 2004)"),(0,i.kt)("h3",{id:"vlan-2"},"VLAN"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# eth0 is the ethernet interface on the board\n# 100 is the switch VLAN id\n# 192.168.10.4 is the next ip in the VLAN subnet after the ones taken by the dell\n# and rp0\ncat <<EOF >/etc/netplan/50-cloud-init.yaml\nnetwork:\n    version: 2\n    ethernets:\n        eth0:\n            dhcp4: true\n            optional: true\n    vlans:\n        eth0.100:\n            id: 100\n            link: eth0\n            addresses: [192.168.10.4/25]\nEOF\n\nnetplan apply\n")),(0,i.kt)("p",null,"\u2728"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(5355).Z,width:"4032",height:"3024"})))}c.isMDXComponent=!0},8966:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/IMG_1249-cdc2847372717d177408eb536857c8f2.jpg"},5355:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/IMG_1255-5a8e70366cf429263ce92c4e490ead0d.jpg"},3378:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/chain-7dfefd5f0ae92787bd0c663eed090be4.jpg"}}]);