"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(7462),i=(r(7294),r(3905)),a=r(941),o=r(4996);const l={title:"Introduction"},s=void 0,c={unversionedId:"intro",id:"intro",title:"Introduction",description:"<ThemedImage",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/site/docs/intro",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/intro.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"docs",next:{title:"Tutorial: DO try this at home",permalink:"/site/docs/category/tutorial-do-try-this-at-home"}},u={},p=[{value:"Flintlock",id:"flintlock",level:2},{value:"Cluster API Provider MicroVM (CAPMVM)",id:"cluster-api-provider-microvm-capmvm",level:2},{value:"Firecracker and Cloud Hypervisor",id:"firecracker-and-cloud-hypervisor",level:2},{value:"Containerd",id:"containerd",level:2},{value:"MicroVMs?",id:"microvms",level:2},{value:"High-level illustration",id:"high-level-illustration",level:2}],d={toc:p};function m(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{alt:"Liquid Metal Logo",sources:{light:(0,o.Z)("/img/LM-LOGO-HORIZONTAL-LIGHTBACK.svg"),dark:(0,o.Z)("/img/LM-LOGO-HORIZONTAL-DARKBACK.svg")},mdxType:"ThemedImage"}),(0,i.kt)("admonition",{title:"SITE UNDER CONSTRUCTION",type:"warning"}),(0,i.kt)("p",null,"Liquid Metal is a set of solutions to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Declaratively provision Kubernetes clusters dynamically on lightweight virtual machines (i.e. microVMs) and bare-metal"),(0,i.kt)("li",{parentName:"ul"},"Create lightweight clusters to maximize the available ","[edge]"," compute",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"microVMs are our friend"),(0,i.kt)("li",{parentName:"ul"},"More clusters/nodes on the available bare-metal hosts"),(0,i.kt)("li",{parentName:"ul"},"Minimizing resource footprint without sacrificing hard isolation"))),(0,i.kt)("li",{parentName:"ul"},"Support clusters where direct access to hardware acceleration is needed (i.e. 5G networks)"),(0,i.kt)("li",{parentName:"ul"},"Using standard kubernetes and linux kernel and operating system capabilities")),(0,i.kt)("p",null,"Liquid Metal may be right for you if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You want to run applications on edge hardware, without caring about the software\ninfrastructure (cattle not pets)."),(0,i.kt)("li",{parentName:"ul"},"You want to reduce your carbon emissions by using less hardware more efficiently."),(0,i.kt)("li",{parentName:"ul"},"You want an inexpensive, easy to operate on-prem solution."),(0,i.kt)("li",{parentName:"ul"},"You want a resource-light self-hosted CI runner solution."),(0,i.kt)("li",{parentName:"ul"},"You want to pack more nodes into your sweet Rasperry Pi homelab rig \ud83d\ude0e.")),(0,i.kt)("p",null,"The Liquid Metal project is comprised of various components which work together.\nThese are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flintlock/Cloud Hypervisor"),(0,i.kt)("li",{parentName:"ul"},"CAPMVM"),(0,i.kt)("li",{parentName:"ul"},"Firecracker"),(0,i.kt)("li",{parentName:"ul"},"Containerd")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A Liquid Metal ",(0,i.kt)("em",{parentName:"p"},"system/platform")," refers to the combination of a CAPI management cluster\nrunning CAPMVM, and a number of bare metal devices running Flintlock which are able\nto host MicroVMs."),(0,i.kt)("p",{parentName:"admonition"},"A Liquid Metal ",(0,i.kt)("em",{parentName:"p"},"cluster")," refers to a workload cluster created by CAPMVM with nodes\nrunning in MicroVMs created by ",(0,i.kt)("inlineCode",{parentName:"p"},"flintlockd")," on the bare metal host.")),(0,i.kt)("h2",{id:"flintlock"},"Flintlock"),(0,i.kt)("p",null,"Flintlock is a gRPC service written in Go which manages the lifecycle of lightweight\nvirtual machines (called MicroVMs) on physical and virtual hosts."),(0,i.kt)("p",null,"The component can be used independently of Liquid Metal if desired, but its primary\nusecase is to create microVMs on a bare-metal host where the MicroVMs will be used\nas nodes in a virtualized Liquid Metal Kubernetes cluster."),(0,i.kt)("p",null,"Flintlock supports ",(0,i.kt)("a",{parentName:"p",href:"https://firecracker-microvm.github.io/"},"Firecracker")," and experimentally ",(0,i.kt)("a",{parentName:"p",href:"https://www.cloudhypervisor.org/"},"Cloud Hypervisor"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Flintlock is only supported to run on ",(0,i.kt)("strong",{parentName:"p"},"Linux"),".")),(0,i.kt)("h2",{id:"cluster-api-provider-microvm-capmvm"},"Cluster API Provider MicroVM (CAPMVM)"),(0,i.kt)("p",null,"CAPMVM is a ",(0,i.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/"},"Cluster API")," Infrastructure Provider\nfor provisioning Kubernetes clusters in which the nodes (control plane & worker)\nare MicroVMs. The provider is designed to\nwork with Flintlock."),(0,i.kt)("p",null,"The CAPMVM controller is written in Go and handles the placement of MicroVMs/nodes\nacross a given list of potential Flintlock hosts."),(0,i.kt)("h2",{id:"firecracker-and-cloud-hypervisor"},"Firecracker and Cloud Hypervisor"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Firecracker is a virtual machine monitor (VMM) that uses the Linux Kernel-based Virtual Machine (KVM) to create and manage microVMs. Firecracker has a minimalist design. It excludes unnecessary devices and guest functionality to reduce the memory footprint and attack surface area of each microVM. This improves security, decreases the startup time, and increases hardware utilization.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Cloud Hypervisor is an open source Virtual Machine Monitor (VMM) implemented in Rust that focuses on running modern, cloud workloads, with minimal hardware emulation.")),(0,i.kt)("p",null,"In Liquid Metal, ",(0,i.kt)("a",{parentName:"p",href:"https://firecracker-microvm.github.io/"},"Firecracker")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.cloudhypervisor.org/"},"Cloud Hypervisor")," are\nboth wrapped by Flintlock to give a smoother management\nexperience of MicroVMs based on the needs of cluster orchestration. Flintlock will\ninitially default to using Firecracker, but either can be chosen via config on a per\nMicroVM basis. In the near future the default will be Cloud Hypervisor."),(0,i.kt)("h2",{id:"containerd"},"Containerd"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"containerd is a daemon which manages the complete container lifecycle of its host system, from image transfer and storage to container execution and supervision to low-level storage to network attachments and beyond.")),(0,i.kt)("p",null,"In our case, we use ",(0,i.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," to pull and manage the images which\nserve as the kernel and OS volume mounts for each MicroVM."),(0,i.kt)("h2",{id:"microvms"},"MicroVMs?"),(0,i.kt)("p",null,"TLDR: A MicroVM is a very lightweight virtual machine that optimizes for speed and less\nresource consumption over supporting a wide array of devices/etc."),(0,i.kt)("p",null,'MicroVMs sit nicely between containers and VMs and intend to give you the best of both worlds.\nVMs give security, but are quite "heavy" to run since they virtualise everything,\neven the things you may not end up needing.\nContainers give us speed since they just virtualise applications (remember that\ncontainers are not \u201creal\u201d: they are just processes), which means operators have to\nthink hard about securing those processes.'),(0,i.kt)("p",null,"Microvms are what they sound like: smaller VMs, or a smaller subset of virtualisation\ntailored for a specific need with minimal overhead, thus making them almost as fast\nto put up and tear down as containers"),(0,i.kt)("h2",{id:"high-level-illustration"},"High-level illustration"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Liquid Metal high-level illustration",src:r(9400).Z,width:"1804",height:"554"})),(0,i.kt)("p",null,"For more diagrams, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/category/architecture"},"Architecture"),"."))}m.isMDXComponent=!0},9400:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/high-level-bd43e2f914e70ba1f29a3b75961404ee.jpg"}}]);