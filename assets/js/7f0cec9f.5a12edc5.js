"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Flintlock"},o=void 0,p={unversionedId:"troubleshooting/flintlock",id:"troubleshooting/flintlock",title:"Flintlock",description:"Understanding common flintlockd errors.",source:"@site/docs/troubleshooting/flintlock.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/flintlock",permalink:"/site/docs/troubleshooting/flintlock",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/troubleshooting/flintlock.md",tags:[],version:"current",frontMatter:{title:"Flintlock"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/site/docs/category/troubleshooting"},next:{title:"MicroVMs",permalink:"/site/docs/troubleshooting/microvm"}},l={},c=[{value:"Snapshotter not loaded",id:"snapshotter-not-loaded",level:3},{value:"Operation not supported (network, macvtap)",id:"operation-not-supported-network-macvtap",level:3},{value:"A parent network device name is required for attaching a TAP interface",id:"a-parent-network-device-name-is-required-for-attaching-a-tap-interface",level:3},{value:"A parent network device name is required for macvtap interfaces",id:"a-parent-network-device-name-is-required-for-macvtap-interfaces",level:3}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Understanding common ",(0,r.kt)("inlineCode",{parentName:"p"},"flintlockd")," errors."),(0,r.kt)("p",null,"If you create a MicroVM but find that the ",(0,r.kt)("inlineCode",{parentName:"p"},"firecracker.stdout")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"stderr")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"log"),"\nfiles for it are empty, it means that ",(0,r.kt)("inlineCode",{parentName:"p"},"flintlockd")," was not able to start the MicroVM at\nall."),(0,r.kt)("p",null,"Flintlock logs can be watched by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"journatctl -fu flintlockd.service\n")),(0,r.kt)("h3",{id:"snapshotter-not-loaded"},"Snapshotter not loaded"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"failed to reconcile vmid FOO/BAR/ID: executing plan: executing plan steps: executing steps: executing step runtime_volume_mount: mount images docker.io/claudiaberesford/capmvm-kubernetes-arm:1.21.8 for volume use: checking if image docker.io/claudiaberesford/capmvm-kubernetes-arm:1.21.8 has been unpacked with snapshotter devmapper: snapshotter not loaded: devmapper: invalid argument"\n')),(0,r.kt)("p",null,"Your containerd storage is not provisioned."),(0,r.kt)("p",null,"You can check this with ",(0,r.kt)("inlineCode",{parentName:"p"},"dmsetup ls"),". It should return at least one line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flintlock-dev-thinpool  (253:0)\n")),(0,r.kt)("p",null,"The loop-backed thinpool will not survive restarts, to you'll need\nto recreate this whenever you reboot."),(0,r.kt)("p",null,"To remedy on a dev environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recreated the thinpool: ",(0,r.kt)("inlineCode",{parentName:"li"},"provision.sh devpool")),(0,r.kt)("li",{parentName:"ul"},"Restart containerd: ",(0,r.kt)("inlineCode",{parentName:"li"},"systemctl restart containerd-dev.service")),(0,r.kt)("li",{parentName:"ul"},"Restart flintlock: ",(0,r.kt)("inlineCode",{parentName:"li"},"systemctl restart flintlockd.service"))),(0,r.kt)("p",null,"To remedy on a prod environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attach a drive to the device"),(0,r.kt)("li",{parentName:"ul"},"Run: ",(0,r.kt)("inlineCode",{parentName:"li"},"provision.sh direct_lvm"))),(0,r.kt)("h3",{id:"operation-not-supported-network-macvtap"},"Operation not supported (network, macvtap)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This is not the exact error, which I forgot to grab when I saw it. Yours may vary.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'"failed to reconcile vmid <FOO/BAR/ID>: executing plan: executing plan steps: executing steps: executing step network_iface_create: creating network interface: Operation not supported"\n# or\n"failed to reconcile vmid <FOO/BAR/ID>: executing plan: executing plan steps: executing steps: executing step network_iface_create: creating network interface: Operation not permitted"\n')),(0,r.kt)("p",null,"This means that your device does not have the module to create ",(0,r.kt)("inlineCode",{parentName:"p"},"macvtap")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"macvlan"),"\ndevices."),(0,r.kt)("p",null,"You may also see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"RTNETLINK answers: Operation not supported\n")),(0,r.kt)("p",null,"if you try to create a device yourself."),(0,r.kt)("p",null,"Depending on your OS, you may need to install extra kernel modules and then\nload the ",(0,r.kt)("inlineCode",{parentName:"p"},"macvlan")," module on the device."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"modprobe macvlan\nlsmod | grep macvlan\n")),(0,r.kt)("h3",{id:"a-parent-network-device-name-is-required-for-attaching-a-tap-interface"},"A parent network device name is required for attaching a TAP interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'"failed to reconcile vmid <FOO/BAR/ID>: executing plan: executing plan steps: executing steps: executing step network_iface_create: creating network interface: a parent network device name is required for attaching a TAP interface"\n')),(0,r.kt)("p",null,'This means that you are trying to create a MicroVM in "bridge mode", ie: you have\nset the ',(0,r.kt)("inlineCode",{parentName:"p"},"eth1")," interface ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"flintlock")," spec or have set\n",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.spec.networkInterfaces[0].type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"tap"),", but have not set a ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge-name"),"\nin either the spec or the ",(0,r.kt)("inlineCode",{parentName:"p"},"flintlockd")," config."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option A"),": Set the MicroVM to be created with ",(0,r.kt)("inlineCode",{parentName:"p"},"macvtap")," instead, by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth1"),"\ninterface ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," (if just using ",(0,r.kt)("inlineCode",{parentName:"p"},"flintlock"),"), or by setting\n",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.spec.networkInterfaces[0].type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"macvtap"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option B"),": Open ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/opt/flintlockd/config.yaml")," and set ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge-name")," to the name\nof a bridge you have created. Save the file and restart the service: ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl restart flintlockd.service"),".\nThis bridge will be used as a parent for all MicroVM ",(0,r.kt)("inlineCode",{parentName:"p"},"tap")," devices."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option C"),": Edit the flintlock or capmvm spec to use a specific bridge for that\nMicroVM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// flintlock spec\n...\n"interfaces": [\n    {\n        "device_id": "eth1",\n        "type": 1,\n        "overrides": {\n            "bridge_name": "foo"\n        }\n    }\n],\n...\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# capmvm spec\n...\nnetworkInterfaces:\n- guestDeviceName: eth1\n  type: macvtap\n    overrides:\n        bridgeName: foobar\n...\n")),(0,r.kt)("h3",{id:"a-parent-network-device-name-is-required-for-macvtap-interfaces"},"A parent network device name is required for macvtap interfaces"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'"failed to reconcile vmid FOO/BAR/ID: executing plan: executing plan steps: executing steps: executing step network_iface_create: creating network interface: a parent network device name is required for macvtap interfaces"\n')),(0,r.kt)("p",null,'This means that you are trying to create a MicroVM in "macvtap mode", ie: you have\nset the ',(0,r.kt)("inlineCode",{parentName:"p"},"eth1")," interface ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"flintlock")," spec or have set\n",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.spec.networkInterfaces[0].type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"macvtap"),", but have not set a ",(0,r.kt)("inlineCode",{parentName:"p"},"parent-iface"),"\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},"flintlockd")," config."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option A"),": Set the MicroVM to be created with ",(0,r.kt)("inlineCode",{parentName:"p"},"tap")," (bridge mode) instead, by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth1"),"\ninterface ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," (if just using ",(0,r.kt)("inlineCode",{parentName:"p"},"flintlock"),"), or by setting\n",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.spec.networkInterfaces[0].type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"tap"),". Requires creating a bridge\nand configuring it in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/opt/flintlockd/config.yaml")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge-name"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option B"),": Open ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/opt/flintlockd/config.yaml")," and set ",(0,r.kt)("inlineCode",{parentName:"p"},"parent-iface")," to the name\nof your device's default ",(0,r.kt)("strong",{parentName:"p"},"wired")," interface (eg ",(0,r.kt)("inlineCode",{parentName:"p"},"eth0"),"). Save the file and restart the service: ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl restart flintlockd.service"),".\nThis interface will be used as a parent for all MicroVM ",(0,r.kt)("inlineCode",{parentName:"p"},"macvtap")," devices."))}d.isMDXComponent=!0}}]);