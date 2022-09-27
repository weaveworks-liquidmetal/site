"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7135],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>v});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),v=o,m=u["".concat(s,".").concat(v)]||u[v]||p[v]||r;return t?i.createElement(m,a(a({ref:n},d),{},{components:t})):i.createElement(m,a({ref:n},d))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1946:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(7462),o=(t(7294),t(3905));const r={sidebar_position:2,title:"Install and start containerd"},a="Containerd",l={unversionedId:"tutorial-basics/containerd",id:"tutorial-basics/containerd",title:"Install and start containerd",description:"Liquid Metal uses containerd to download and manage the images which are mounted",source:"@site/docs/tutorial-basics/containerd.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/containerd",permalink:"/s/docs/tutorial-basics/containerd",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/docs/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/containerd.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Install and start containerd"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/s/docs/tutorial-basics/overview"},next:{title:"Install and start Flintlockd",permalink:"/s/docs/tutorial-basics/flintlockd"}},s={},c=[{value:"Create thinpool",id:"create-thinpool",level:2},{value:"Configure and start containerd",id:"configure-and-start-containerd",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"containerd"},"Containerd"),(0,o.kt)("p",null,"Liquid Metal uses ",(0,o.kt)("a",{parentName:"p",href:"https://containerd.io/"},(0,o.kt)("inlineCode",{parentName:"a"},"containerd"))," to download and manage the images which are mounted\ninto MicroVMs as kernel and OS volumes."),(0,o.kt)("p",null,"Download the all-in-one provision script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/weaveworks-liquidmetal/flintlock/main/hack/scripts/provision.sh\nchmod +x provision.sh\n")),(0,o.kt)("h2",{id:"create-thinpool"},"Create thinpool"),(0,o.kt)("p",null,"Flintlock relies on containerd's devicemapper snapshotter to provide filesystem\ndevices for Firecracker microvms. This is how the images are stored. In a production\nwe would use a dedicated disk, but here we will use a loopback device."),(0,o.kt)("p",null,"Run the script to create the thinpool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./provision.sh devpool\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[flintlock provision.sh] Creating containerd directory /var/lib/containerd-dev/snapshotter/devmapper\n[flintlock provision.sh] Creating containerd directory /run/containerd-dev\n[flintlock provision.sh] Creating containerd directory /etc/containerd\n[flintlock provision.sh] All containerd directories created\n[flintlock provision.sh] Will create loop-back thinpool flintlock-dev-thinpool\n[flintlock provision.sh] Creating sparse file /var/lib/containerd-dev/snapshotter/devmapper/data of size 100G\n[flintlock provision.sh] Sparse file /var/lib/containerd-dev/snapshotter/devmapper/data created\n[flintlock provision.sh] Creating sparse file /var/lib/containerd-dev/snapshotter/devmapper/metadata of size 10G\n[flintlock provision.sh] Sparse file /var/lib/containerd-dev/snapshotter/devmapper/metadata created\n[flintlock provision.sh] Associating loop devices with sparse files\n[flintlock provision.sh] Loop devices /dev/loop13 and /dev/loop20 associated\n[flintlock provision.sh] Creating thinpool flintlock-dev-thinpool with devices /dev/loop13 and /dev/loop20\n[flintlock provision.sh] Thinpool flintlock-dev-thinpool created\n[flintlock provision.sh] Dev thinpool creation complete\n[flintlock provision.sh] remember to set pool_name to flintlock-dev-thinpool in your containerd config\n")),(0,o.kt)("p",null,"Verify that the device has been created with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo dmsetup ls"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flintlock-dev-thinpool  (253:0)\n")),(0,o.kt)("h2",{id:"configure-and-start-containerd"},"Configure and start containerd"),(0,o.kt)("p",null,"Run the script to install ",(0,o.kt)("inlineCode",{parentName:"p"},"containerd")," in dev mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./provision.sh containerd --dev\n")),(0,o.kt)("p",null,"This command will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the latest version of ",(0,o.kt)("inlineCode",{parentName:"li"},"containerd")),(0,o.kt)("li",{parentName:"ul"},"Create various state dirs"),(0,o.kt)("li",{parentName:"ul"},"Save a development config file under ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/containerd/config-dev.toml")),(0,o.kt)("li",{parentName:"ul"},"Start ",(0,o.kt)("inlineCode",{parentName:"li"},"containerd")," as a ",(0,o.kt)("inlineCode",{parentName:"li"},"systemd")," service")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[flintlock provision.sh] Creating containerd directory /var/lib/containerd-dev/snapshotter/devmapper\n[flintlock provision.sh] Creating containerd directory /run/containerd-dev\n[flintlock provision.sh] Creating containerd directory /etc/containerd\n[flintlock provision.sh] All containerd directories created\n[flintlock provision.sh] Installing containerd version latest to /usr/local/bin\n[flintlock provision.sh] Containerd version v1.6.8 successfully installed\n[flintlock provision.sh] Writing containerd config to /etc/containerd/config-dev.toml\n[flintlock provision.sh] Containerd config saved\n[flintlock provision.sh] Starting containerd service\n[flintlock provision.sh] Containerd running\n")),(0,o.kt)("p",null,"Verify that the service started with ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl status containerd"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\u25cf containerd.service - containerd container runtime\n     Loaded: loaded (/etc/systemd/system/containerd.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2022-09-23 09:29:48 BST; 6h ago\n       Docs: https://containerd.io\n   Main PID: 1387 (containerd)\n      Tasks: 26\n     Memory: 76.1M\n        CPU: 1min 5.108s\n     CGroup: /system.slice/containerd.service\n             \u251c\u25001387 /usr/local/bin/containerd --config /etc/containerd/config.toml\n             \u2514\u25003234 /usr/local/bin/containerd-shim-runc-v2 -namespace moby -id 2f8915415519743e84a7da24b5c5ed08853523bb36ab6be40ae903595fd0685b -address /run/containerd/containerd.sock\n\nSep 23 09:29:47 callisto-XPS containerd[1387]: time="2022-09-23T09:29:47.999964272+01:00" level=info msg="loading plugin \\"io.containerd.grpc.v1.snapshots\\"..." type=io.containerd.grpc.v1\nSep 23 09:29:48 callisto-XPS containerd[1387]: time="2022-09-23T09:29:47.999993968+01:00" level=info msg="loading plugin \\"io.containerd.grpc.v1.tasks\\"..." type=io.containerd.grpc.v1\nSep 23 09:29:48 callisto-XPS containerd[1387]: time="2022-09-23T09:29:48.000012251+01:00" level=info msg="loading plugin \\"io.containerd.grpc.v1.version\\"..." type=io.containerd.grpc.v1\nSep 23 09:29:48 callisto-XPS containerd[1387]: time="2022-09-23T09:29:48.000027967+01:00" level=info msg="loading plugin \\"io.containerd.grpc.v1.introspection\\"..." type=io.containerd.grpc.v1\nSep 23 09:29:48 callisto-XPS containerd[1387]: time="2022-09-23T09:29:48.000360221+01:00" level=info msg=serving... address=/run/containerd/containerd.sock.ttrpc\nSep 23 09:29:48 callisto-XPS containerd[1387]: time="2022-09-23T09:29:48.000398173+01:00" level=info msg=serving... address=/run/containerd/containerd.sock\nSep 23 09:29:48 callisto-XPS containerd[1387]: time="2022-09-23T09:29:48.000435998+01:00" level=info msg="containerd successfully booted in 0.053398s"\nSep 23 09:29:48 callisto-XPS systemd[1]: Started containerd container runtime.\n...\n')),(0,o.kt)("p",null,"Now we can move on to installing flintlock."))}p.isMDXComponent=!0}}]);