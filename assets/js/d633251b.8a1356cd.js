"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"Networking"},o=void 0,l={unversionedId:"component-info/networking",id:"component-info/networking",title:"Networking",description:"Information about Platform and MicroVM networking.",source:"@site/docs/component-info/networking.md",sourceDirName:"component-info",slug:"/component-info/networking",permalink:"/site/docs/component-info/networking",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/component-info/networking.md",tags:[],version:"current",frontMatter:{title:"Networking"},sidebar:"docs",previous:{title:"Hardware",permalink:"/site/docs/component-info/hardware"},next:{title:"Flintlock",permalink:"/site/docs/component-info/flintlock"}},c={},p=[{value:"Platform networking options",id:"platform-networking-options",level:2},{value:"MicroVM networking modes",id:"microvm-networking-modes",level:2},{value:"Macvtap mode",id:"macvtap-mode",level:3},{value:"Bridge mode",id:"bridge-mode",level:3}],s={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Information about Platform and MicroVM networking."),(0,i.kt)("h2",{id:"platform-networking-options"},"Platform networking options"),(0,i.kt)("p",null,"Users are responsible for bringing and configuring their own hardware and networking\nsolutions."),(0,i.kt)("p",null,"We recommend the following network considerations for the platform:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A private subnet for MicroVMs. Each MicroVM will request addresses on boot.\nReserving public IPv4 addresses is unnecessary and wasteful for MicroVMs which\nwill be part of a Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},"A single reserved IP for each cluster's load-balanced API endpoint. This can\nbe public or private, depending on whether you wish the cluster to be exposed.\nA unexposed cluster with a private address, and suitable access such as a VPN,\nwill be preferable to most."),(0,i.kt)("li",{parentName:"ul"},"Starting the ",(0,i.kt)("inlineCode",{parentName:"li"},"flintlockd")," services either within a private subnet, or ensuring\nthat the service is secured with ",(0,i.kt)("a",{parentName:"li",href:"/docs/component-info/authn"},"authentication"),".")),(0,i.kt)("h2",{id:"microvm-networking-modes"},"MicroVM networking modes"),(0,i.kt)("p",null,"Flintlock can create MicroVMs in two different network modes."),(0,i.kt)("h3",{id:"macvtap-mode"},"Macvtap mode"),(0,i.kt)("p",null,"On devices with the capability, MicroVMs can be created with their default interface\nmapped to ",(0,i.kt)("a",{parentName:"p",href:"https://linuxnatives.net/2012/virtualized-bridged-networking-with-macvtap"},(0,i.kt)("inlineCode",{parentName:"a"},"macvtap"))," interfaces in the host."),(0,i.kt)("p",null,"The devices are created in ",(0,i.kt)("inlineCode",{parentName:"p"},"bridge")," mode, enabling inter-microvm traffic directly\nbetween the taps without it passing through the host interface."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"macvtap")," is the default option."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Liquid Metal Microvms macvtap networking",src:n(2831).Z,width:"1489",height:"671"})),(0,i.kt)("p",null,"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"flintlockd")," to be ready to create ",(0,i.kt)("inlineCode",{parentName:"p"},"macvtap")," devices by starting the service with\nthe following in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/opt/flintlockd/config.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"parent-iface: enp0 # where the value is a wired interface on the host\n")),(0,i.kt)("p",null,"When creating MicroVMs directly via flintlock, ensure the spec contains the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "interfaces": [\n      {\n        "device_id": "eth1",\n        "type": 0 // 0 for macvtap\n      }\n    ]\n...\n')),(0,i.kt)("p",null,"When creating MicroVMs as part of a cluster via CAPMVM, ensure the spec contains the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1\nkind: MicrovmMachineTemplate\nspec:\n  template:\n    spec:\n      networkInterfaces:\n      - guestDeviceName: eth1\n        type: macvtap\n")),(0,i.kt)("h3",{id:"bridge-mode"},"Bridge mode"),(0,i.kt)("p",null,"Flintlock can optionally create MicroVMs in which the default interface within the guest\nis mapped to a ",(0,i.kt)("inlineCode",{parentName:"p"},"tap")," device attached to a ",(0,i.kt)("inlineCode",{parentName:"p"},"bridge")," on the host."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Liquid Metal Microvms bridge networking",src:n(7211).Z,width:"1383",height:"722"})),(0,i.kt)("p",null,"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"flintlockd")," to be ready to use a bridge to create ",(0,i.kt)("inlineCode",{parentName:"p"},"tap")," devices by starting the service with\nthe following in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/opt/flintlockd/config.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"bridge-name: br0 # where the value is a bridge to a host interface\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"bridge-name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parent-iface")," can be set in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/opt/flintlockd/config.yaml"),".\nThe decision is made at MicroVM create time depending on which is requested via the API.")),(0,i.kt)("p",null,"When creating MicroVMs directly via flintlock, ensure the spec contains the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "interfaces": [\n      {\n        "device_id": "eth1",\n        "type": 1 // 1 for tap\n      }\n    ]\n...\n')),(0,i.kt)("p",null,"When creating MicroVMs as part of a cluster via CAPMVM, ensure the spec contains the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1\nkind: MicrovmMachineTemplate\nspec:\n  template:\n    spec:\n      networkInterfaces:\n      - guestDeviceName: eth1\n        type: tap\n")))}m.isMDXComponent=!0},7211:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bridge-18b43b074da8425a3b5f8bea8bfe6dd3.jpg"},2831:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/macvtap-2830c88dbf40badd468a44a3357707d6.jpg"}}]);