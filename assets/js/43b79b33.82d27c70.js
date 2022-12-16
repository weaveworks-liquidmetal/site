"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3363],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(i),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return i?n.createElement(f,l(l({ref:t},c),{},{components:i})):n.createElement(f,l({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},2940:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=i(7462),r=(i(7294),i(3905));const a={title:"Overview"},l=void 0,o={unversionedId:"tutorial-equinix/intro",id:"tutorial-equinix/intro",title:"Overview",description:"In this guide we will create a Liquid Metal Platform on devices hosted by",source:"@site/docs/tutorial-equinix/intro.md",sourceDirName:"tutorial-equinix",slug:"/tutorial-equinix/intro",permalink:"/site/docs/tutorial-equinix/intro",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/tutorial-equinix/intro.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Advanced: Equinix Platform",permalink:"/site/docs/category/advanced-equinix-platform"},next:{title:"Provision the infrastructure",permalink:"/site/docs/tutorial-equinix/terraform"}},u={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Outcomes",id:"outcomes",level:2}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide we will create a Liquid Metal Platform on devices hosted by\n",(0,r.kt)("a",{parentName:"p",href:"https://metal.equinix.com/"},"Equinix Metal"),"."),(0,r.kt)("p",null,"The Platform we will end up with is the one used by the team for testing and delivering\ndemos in a near-Production environment. Therefore it is a good place to start and\nlearn more about Liquid Metal while you fine-tune your environments."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"You will need to have the following to complete this tutorial:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://metal.equinix.com/"},"Equinix Account")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://tailscale.com/"},"Tailscale account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads"},(0,r.kt)("inlineCode",{parentName:"a"},"terraform"))," installed locally"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tailscale.com/download"},(0,r.kt)("inlineCode",{parentName:"a"},"tailscale"))," installed locally"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},(0,r.kt)("inlineCode",{parentName:"a"},"kind"))," installed locally"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},(0,r.kt)("inlineCode",{parentName:"a"},"kubectl"))," installed locally"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cluster-api.sigs.k8s.io/user/quick-start.html#install-clusterctl"},(0,r.kt)("inlineCode",{parentName:"a"},"clusterctl"))," installed locally")),(0,r.kt)("admonition",{title:"NOTE",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Please do not authenticate your local machine to Tailscale just now.")),(0,r.kt)("h2",{id:"outcomes"},"Outcomes"),(0,r.kt)("p",null,"We will be using ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/downloads"},"Terraform")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/weaveworks-liquidmetal/terraform-equinix-liquidmetal"},(0,r.kt)("inlineCode",{parentName:"a"},"terraform-equinix-liquidmetal")),"\nto provision our infrastructure."),(0,r.kt)("p",null,"The module will create the following in your org:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A new project"),(0,r.kt)("li",{parentName:"ul"},"A VLAN in that project"),(0,r.kt)("li",{parentName:"ul"},'A "networking hub" device to run our DHCP server, NAT forwarding and VPN subnet router'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"N")," devices to act as MicroVM hosts running the ",(0,r.kt)("inlineCode",{parentName:"li"},"flintlockd")," service")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Liquid Metal Equinix resources",src:i(4563).Z,width:"1288",height:"776"})),(0,r.kt)("p",null,"The following networking topology will be applied:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All devices will be configured in ",(0,r.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/layer2-networking/hybrid-bonded-mode/"},"Hybrid Bonded mode"),"."),(0,r.kt)("li",{parentName:"ul"},"All devices will be connected to a VLAN (",(0,r.kt)("inlineCode",{parentName:"li"},"100"),") tagged to their bonded interface.\nThe VLAN's subnet will be ",(0,r.kt)("inlineCode",{parentName:"li"},"192.168.10.0/25"),"."),(0,r.kt)("li",{parentName:"ul"},"A DHCP server will be configured to assign MicroVM addresses from within that VLAN's private range."),(0,r.kt)("li",{parentName:"ul"},"MicroVMs will have ",(0,r.kt)("inlineCode",{parentName:"li"},"macvtap")," devices mapped to their host's VLAN interface."),(0,r.kt)("li",{parentName:"ul"},"NAT and filter rules will forward egress traffic from the VLAN interface to the parent bond."),(0,r.kt)("li",{parentName:"ul"},"A VPN subnet router will route traffic from local VPN-connected devices to MicroVMs\nin the private subnet.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"At the time of writing, the private subnet for MicroVMs (",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.10.0/25"),") is\nnot configurable with the terraform module used in this tutorial. This may cause\nissues if you are using the same network on your local workstation."),(0,r.kt)("p",{parentName:"admonition"},"Fixing this is on our todo list.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Liquid Metal Equinix Network",src:i(7238).Z,width:"1696",height:"589"})))}p.isMDXComponent=!0},4563:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/equinix1-4a344791c4a41c31c40a2371bdd6d2ff.jpg"},7238:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/equinix2-40e68d2f3cc1a2cb2cc0996d0326710b.jpg"}}]);