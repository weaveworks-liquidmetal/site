"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},l="Overview",o={unversionedId:"tutorial-basics/overview",id:"tutorial-basics/overview",title:"Overview",description:"In this tutorial we will use a single local machine to act as multiple devices",source:"@site/docs/tutorial-basics/overview.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/overview",permalink:"/s/docs/tutorial-basics/overview",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/docs/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basic Local Environment",permalink:"/s/docs/category/tutorial---basic-local-environment"},next:{title:"Install and start containerd",permalink:"/s/docs/tutorial-basics/containerd"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In this tutorial we will use a single local machine to act as multiple devices\nin a development Liquid Metal platform."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This tutorial can currently only be run with a ",(0,a.kt)("strong",{parentName:"p"},"Linux")," computer, a macOS tutorial\nis in the works.")),(0,a.kt)("p",null,"We have tested this tutorial on Ubuntu ",(0,a.kt)("inlineCode",{parentName:"p"},"20.04")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"22.04"),", but any current linux\ndistribution with ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl")," should do."),(0,a.kt)("p",null,"Your computer will be configured to act as ",(0,a.kt)("em",{parentName:"p"},"both")," bare-metal host ",(0,a.kt)("em",{parentName:"p"},"and")," a management\nCAPI cluster."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A Liquid Metal ",(0,a.kt)("em",{parentName:"p"},"system/platform")," refers to the combination of a CAPI management cluster\nrunning CAPMVM, and a number of bare metal devices running Flintlock."),(0,a.kt)("p",{parentName:"admonition"},"A Liquid Metal ",(0,a.kt)("em",{parentName:"p"},"cluster")," refers to a workload cluster created by CAPMVM with nodes\nrunning in MicroVMs created by ",(0,a.kt)("inlineCode",{parentName:"p"},"flintlockd"),".")),(0,a.kt)("p",null,"We will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install all required MicroVM host components",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Firecracker"),(0,a.kt)("li",{parentName:"ul"},"Containerd"),(0,a.kt)("li",{parentName:"ul"},"Flintlock"))),(0,a.kt)("li",{parentName:"ul"},"Start the ",(0,a.kt)("inlineCode",{parentName:"li"},"flintlockd")," service"),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"kind")," to create a local kubernetes cluster which will act as our CAPI management\ncluster"),(0,a.kt)("li",{parentName:"ul"},"Install CAPI and CAPMVM on that ",(0,a.kt)("inlineCode",{parentName:"li"},"kind")," cluster"),(0,a.kt)("li",{parentName:"ul"},"Write a manifest for a bare metal cluster"),(0,a.kt)("li",{parentName:"ul"},"Apply the manifest to the ",(0,a.kt)("inlineCode",{parentName:"li"},"kind")," cluster"),(0,a.kt)("li",{parentName:"ul"},"Watch as CAPMVM connects to our ",(0,a.kt)("inlineCode",{parentName:"li"},"flintlockd")," service to create MicroVMs"),(0,a.kt)("li",{parentName:"ul"},"See kubernetes nodes brought up in each MicroVM, and joined in a workload\ncluster"),(0,a.kt)("li",{parentName:"ul"},"Tear down:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The bare metal workload cluster"),(0,a.kt)("li",{parentName:"ul"},"The management ",(0,a.kt)("inlineCode",{parentName:"li"},"kind")," cluster"),(0,a.kt)("li",{parentName:"ul"},"All running host services")))),(0,a.kt)("p",null,"Let's get into it..."))}p.isMDXComponent=!0}}]);