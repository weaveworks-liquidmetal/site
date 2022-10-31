"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7041],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return t?r.createElement(g,s(s({ref:n},m),{},{components:t})):r.createElement(g,s({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={title:"Cluster API Provider MicroVM"},s=void 0,o={unversionedId:"guides/capmvm",id:"guides/capmvm",title:"Cluster API Provider MicroVM",description:"Installing and using CAPMVM to create bare-metal workload clusters.",source:"@site/docs/guides/capmvm.md",sourceDirName:"guides",slug:"/guides/capmvm",permalink:"/site/docs/guides/capmvm",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/guides/capmvm.md",tags:[],version:"current",frontMatter:{title:"Cluster API Provider MicroVM"},sidebar:"docs",previous:{title:"Cluster API",permalink:"/site/docs/guides/cluster-api"},next:{title:"Service Authentication",permalink:"/site/docs/guides/authn"}},l={},c=[{value:"CAPMVM API",id:"capmvm-api",level:2},{value:"MicrovmCluster",id:"microvmcluster",level:3},{value:"MicrovmMachine",id:"microvmmachine",level:3},{value:"MicrovmMachineTemplate",id:"microvmmachinetemplate",level:3}],m={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Installing and using CAPMVM to create bare-metal workload clusters."),(0,i.kt)("p",null,"CAPMVM is Liquid Metal's bare-metal CAPI infrastructure provider."),(0,i.kt)("p",null,"Instructions on how to install CAPMVM to your management cluster can be found\nin any of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/capi"},"tutorials")," on this site."),(0,i.kt)("h2",{id:"capmvm-api"},"CAPMVM API"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"CRD yamls generated with ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/Skarlso/crd-to-sample-yaml"},(0,i.kt)("inlineCode",{parentName:"a"},"crd-to-sample-yaml")),". Click headings to see\nAPI code.")),(0,i.kt)("h3",{id:"microvmcluster"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/blob/main/api/v1alpha1/microvmcluster_types.go"},(0,i.kt)("inlineCode",{parentName:"a"},"MicrovmCluster"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1\nkind: MicrovmCluster\nmetadata: {}\nspec:\n  controlPlaneEndpoint:\n    host: string\n    port: 1\n  microvmProxy:\n    endpoint: string\n  placement:\n    staticPool:\n      basicAuthSecret: string\n      hosts:\n      - controlplaneAllowed: true\n        endpoint: string\n        name: string\n  sshPublicKeys:\n  - authorizedKeys: ["string"]\n    user: string\n  tlsSecretRef: string\nstatus:\n  conditions:\n  - lastTransitionTime: string\n    message: string\n    reason: string\n    severity: string\n    status: string\n    type: string\n  failureDomains: {}\n  ready: true\n')),(0,i.kt)("h3",{id:"microvmmachine"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/blob/main/api/v1alpha1/microvmmachine_types.go"},(0,i.kt)("inlineCode",{parentName:"a"},"MicrovmMachine"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1\nkind: MicrovmMachine\nmetadata: {}\nspec:\n  initrd:\n    filename: string\n    image: string\n  kernel:\n    filename: string\n    image: string\n  kernelCmdline: {}\n  memoryMb: 1\n  networkInterfaces:\n  - address: string\n    guestDeviceName: string\n    guestMac: string\n    type: string\n  providerID: string\n  rootVolume:\n    id: string\n    image: string\n    readOnly: true\n  sshPublicKeys:\n  - authorizedKeys: ["string"]\n    user: string\n  vcpu: 1\n  volumes:\n  - id: string\n    image: string\n    readOnly: true\nstatus:\n  addresses:\n  - address: string\n    type: string\n  conditions:\n  - lastTransitionTime: string\n    message: string\n    reason: string\n    severity: string\n    status: string\n    type: string\n  failureMessage: string\n  failureReason: string\n  ready: true\n  vmState: string\n')),(0,i.kt)("h3",{id:"microvmmachinetemplate"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/blob/main/api/v1alpha1/microvmmachinetemplate_types.go"},(0,i.kt)("inlineCode",{parentName:"a"},"MicrovmMachineTemplate"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1\nkind: MicrovmMachineTemplate\nmetadata: {}\nspec:\n  template:\n    metadata:\n      annotations: {}\n      labels: {}\n    spec:\n      initrd:\n        filename: string\n        image: string\n      kernel:\n        filename: string\n        image: string\n      kernelCmdline: {}\n      memoryMb: 1\n      networkInterfaces:\n      - address: string\n        guestDeviceName: string\n        guestMac: string\n        type: string\n      providerID: string\n      rootVolume:\n        id: string\n        image: string\n        readOnly: true\n      sshPublicKeys:\n      - authorizedKeys: ["string"]\n        user: string\n      vcpu: 1\n      volumes:\n      - id: string\n        image: string\n        readOnly: true\n')))}u.isMDXComponent=!0}}]);