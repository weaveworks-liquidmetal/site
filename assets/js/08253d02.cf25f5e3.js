"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(g,s(s({ref:t},m),{},{components:n})):r.createElement(g,s({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"Cluster API Provider MicroVM"},s=void 0,o={unversionedId:"guides/capmvm",id:"guides/capmvm",title:"Cluster API Provider MicroVM",description:"Installing and using CAPMVM to create bare-metal workload clusters.",source:"@site/docs/guides/capmvm.md",sourceDirName:"guides",slug:"/guides/capmvm",permalink:"/site/docs/guides/capmvm",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/guides/capmvm.md",tags:[],version:"current",frontMatter:{title:"Cluster API Provider MicroVM"},sidebar:"docs",previous:{title:"Cluster API",permalink:"/site/docs/guides/cluster-api"},next:{title:"Service Authentication",permalink:"/site/docs/guides/authn"}},l={},c=[{value:"CAPMVM API",id:"capmvm-api",level:2},{value:"MicrovmCluster",id:"microvmcluster",level:3},{value:"MicrovmMachine",id:"microvmmachine",level:3},{value:"MicrovmMachineTemplate",id:"microvmmachinetemplate",level:3}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Installing and using CAPMVM to create bare-metal workload clusters."),(0,i.kt)("p",null,"CAPMVM is Liquid Metal's bare-metal CAPI infrastructure provider."),(0,i.kt)("p",null,"Instructions on how to install CAPMVM to your management cluster can be found\nin any of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/capi"},"tutorials")," on this site."),(0,i.kt)("h2",{id:"capmvm-api"},"CAPMVM API"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"CRD yamls generated with ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/Skarlso/crd-to-sample-yaml"},(0,i.kt)("inlineCode",{parentName:"a"},"crd-to-sample-yaml")),". Click headings to see\nAPI code.")),(0,i.kt)("h3",{id:"microvmcluster"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/blob/main/api/v1alpha1/microvmcluster_types.go"},(0,i.kt)("inlineCode",{parentName:"a"},"MicrovmCluster"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1\nkind: MicrovmMachine\nmetadata: {}\nspec:\n  initrd:\n    filename: string\n    image: string\n  kernel:\n    filename: string\n    image: string\n  kernelCmdline: {}\n  memoryMb: 1\n  networkInterfaces:\n  - address: string\n    guestDeviceName: string\n    guestMac: string\n    type: string\n  providerID: string\n  rootVolume:\n    id: string\n    image: string\n    readOnly: true\n  sshPublicKeys:\n  - authorizedKeys: ["string"]\n    user: string\n  vcpu: 1\n  volumes:\n  - id: string\n    image: string\n    readOnly: true\nstatus:\n  addresses:\n  - address: string\n    type: string\n  conditions:\n  - lastTransitionTime: string\n    message: string\n    reason: string\n    severity: string\n    status: string\n    type: string\n  failureMessage: string\n  failureReason: string\n  ready: true\n  vmState: string\n')),(0,i.kt)("h3",{id:"microvmmachine"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/blob/main/api/v1alpha1/microvmmachine_types.go"},(0,i.kt)("inlineCode",{parentName:"a"},"MicrovmMachine"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1\nkind: MicrovmMachineTemplate\nmetadata: {}\nspec:\n  template:\n    metadata:\n      annotations: {}\n      labels: {}\n    spec:\n      initrd:\n        filename: string\n        image: string\n      kernel:\n        filename: string\n        image: string\n      kernelCmdline: {}\n      memoryMb: 1\n      networkInterfaces:\n      - address: string\n        guestDeviceName: string\n        guestMac: string\n        type: string\n      providerID: string\n      rootVolume:\n        id: string\n        image: string\n        readOnly: true\n      sshPublicKeys:\n      - authorizedKeys: ["string"]\n        user: string\n      vcpu: 1\n      volumes:\n      - id: string\n        image: string\n        readOnly: true\n')),(0,i.kt)("h3",{id:"microvmmachinetemplate"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/blob/main/api/v1alpha1/microvmmachinetemplate_types.go"},(0,i.kt)("inlineCode",{parentName:"a"},"MicrovmMachineTemplate"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"")))}u.isMDXComponent=!0}}]);