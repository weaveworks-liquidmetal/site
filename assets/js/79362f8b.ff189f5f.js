"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},l="Provision a CAPI management cluster",o={unversionedId:"tutorial-basics/capi",id:"tutorial-basics/capi",title:"Provision a CAPI management cluster",description:"In this workshop we are going to use kind to create a cluster to run",source:"@site/docs/tutorial-basics/capi.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/capi",permalink:"/site/docs/tutorial-basics/capi",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/tutorial-basics/capi.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Install and start Flintlockd",permalink:"/site/docs/tutorial-basics/flintlockd"},next:{title:"Create a Liquid Metal cluster",permalink:"/site/docs/tutorial-basics/create"}},s={},c=[{value:"Kind",id:"kind",level:2},{value:"Clusterctl",id:"clusterctl",level:2},{value:"CAPMVM",id:"capmvm",level:2},{value:"CAPI",id:"capi",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"provision-a-capi-management-cluster"},"Provision a CAPI management cluster"),(0,a.kt)("p",null,"In this workshop we are going to use ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},(0,a.kt)("inlineCode",{parentName:"a"},"kind"))," to create a cluster to run\nCAPI (Cluster API) controllers and the Liquid Metal CAPMVM (Cluster API Provider MicroVM)\ncontrollers."),(0,a.kt)("p",null,"We can then apply yaml manifests to the management cluster, which the CAPI and CAPMVM\ncontrollers will act on to create child workload clusters in Microvms."),(0,a.kt)("h2",{id:"kind"},"Kind"),(0,a.kt)("p",null,"First ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"install ",(0,a.kt)("inlineCode",{parentName:"a"},"kind")),"."),(0,a.kt)("p",null,"Next, use ",(0,a.kt)("inlineCode",{parentName:"p"},"kind")," to create a cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster --name lm-management\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Creating cluster "lm-management" ...\n \u2713 Ensuring node image (kindest/node:v1.21.1) \ud83d\uddbc\n \u2713 Preparing nodes \ud83d\udce6\n \u2713 Writing configuration \ud83d\udcdc\n \u2713 Starting control-plane \ud83d\udd79\ufe0f\n \u2713 Installing CNI \ud83d\udd0c\n \u2713 Installing StorageClass \ud83d\udcbe\nSet kubectl context to "kind-lm-management"\nYou can now use your cluster with:\n\nkubectl cluster-info --context kind-lm-management\n\nHave a nice day! \ud83d\udc4b\n'))),(0,a.kt)("h2",{id:"clusterctl"},"Clusterctl"),(0,a.kt)("p",null,"Install the CAPI CLI tool, ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/user/quick-start.html#install-clusterctl"},(0,a.kt)("inlineCode",{parentName:"a"},"clusterctl")),"."),(0,a.kt)("p",null,"We will use this tool to install both the CAPI and CAPMVM controllers on the\nmanagement cluster."),(0,a.kt)("h2",{id:"capmvm"},"CAPMVM"),(0,a.kt)("p",null,"We install CAPMVM by configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterctl")," to use our custom provider."),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-api")," directory under home:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir -p ~/.cluster-api\n")),(0,a.kt)("p",null,"Set the CAPMVM version you wish to use in your environment. First ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/blob/main/docs/compatibility.md"},"check for the\nversion which is compatible")," with the version of ",(0,a.kt)("inlineCode",{parentName:"p"},"flintlockd")," you are running.\nIn my case I am using Flintlock ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.3.0"),", so the compatible CAPMVM version is ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.7.0"),".\nIf you ran the provisioning step without configuring the flintlock version, then\nthe latest will have been installed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export CAPMVM_VERSION=v0.7.0\n")),(0,a.kt)("p",null,"Write the installation information to a ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterctl")," config file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-api"),"\nrepo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat << EOF >>~/.cluster-api/clusterctl.yaml\nproviders:\n  - name: "microvm"\n    url: "https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/releases/$CAPMVM_VERSION/infrastructure-components.yaml"\n    type: "InfrastructureProvider"\nEOF\n')),(0,a.kt)("h2",{id:"capi"},"CAPI"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterctl")," to initialise the management cluster. This command will install all\nrequired controllers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export EXP_CLUSTER_RESOURCE_SET=true # required for the MicroVM clusters we want to create later\n\nclusterctl init --infrastructure microvm\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Fetching providers\nInstalling cert-manager Version="v1.5.3"\nWaiting for cert-manager to be available...\nInstalling Provider="cluster-api" Version="v1.2.2" TargetNamespace="capi-system"\nInstalling Provider="bootstrap-kubeadm" Version="v1.2.2" TargetNamespace="capi-kubeadm-bootstrap-system"\nI0927 13:51:15.765771  815920 request.go:665] Waited for 1.023726916s due to client-side throttling, not priority and fairness, request: GET:https://127.0.0.1:38035/apis/bootstrap.cluster.x-k8s.io/v1beta1?timeout=30s\nInstalling Provider="control-plane-kubeadm" Version="v1.2.2" TargetNamespace="capi-kubeadm-control-plane-system"\nInstalling Provider="infrastructure-microvm" Version="v0.7.0" TargetNamespace="capmvm-system"\n\nYour management cluster has been initialized successfully!\n\nYou can now create your first workload cluster by running the following:\n\n  clusterctl generate cluster [name] --kubernetes-version [version] | kubectl apply -f -\n'))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you see an error containing the words ",(0,a.kt)("inlineCode",{parentName:"p"},'"401 Bad Credentials"'),", make sure you don't\nhave any Github auth methods set in your environment. ",(0,a.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," is a common\nculprit and can be removed with ",(0,a.kt)("inlineCode",{parentName:"p"},"unset GITHUB_TOKEN"),".")),(0,a.kt)("p",null,"We are now ready to create a workload cluster with MicroVMs!"))}p.isMDXComponent=!0}}]);