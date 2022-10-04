"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1481],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(o),d=n,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return o?r.createElement(h,i(i({ref:t},l),{},{components:o})):r.createElement(h,i({ref:t},l))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5056:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={title:"Feature Requests",sidebar_position:5},i="Feature Requests",s={unversionedId:"community/requests",id:"community/requests",title:"Feature Requests",description:"Liquid Metal has a small but enthusiastic team, and a steadily growing community.",source:"@site/docs/community/requests.md",sourceDirName:"community",slug:"/community/requests",permalink:"/site/docs/community/requests",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/community/requests.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Feature Requests",sidebar_position:5},sidebar:"community",previous:{title:"Contributing",permalink:"/site/docs/community/contributing"},next:{title:"Contact",permalink:"/site/docs/community/contact"}},u={},c=[{value:"Project board",id:"project-board",level:2},{value:"Request process",id:"request-process",level:2},{value:"How to open a feature request ticket",id:"how-to-open-a-feature-request-ticket",level:3},{value:"Feature acceptance",id:"feature-acceptance",level:3}],l={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"feature-requests"},"Feature Requests"),(0,n.kt)("p",null,"Liquid Metal has a small but enthusiastic team, and a steadily growing community."),(0,n.kt)("p",null,"With that in mind, please bear with us as we process your suggestions \ud83d\ude05."),(0,n.kt)("p",null,"Before participating in the Liquid Metal community, please have a read of our\n",(0,n.kt)("a",{parentName:"p",href:"/docs/community/coc"},"Code of Conduct")," which applies all involved in an capacity with the project."),(0,n.kt)("h2",{id:"project-board"},"Project board"),(0,n.kt)("p",null,"The Liquid Metal project board can be found in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/weaveworks-liquidmetal/projects/1/views/2"},"Github"),". The board cannot be\nedited by outsiders, but we recommend that you check existing features before opening\na new one."),(0,n.kt)("h2",{id:"request-process"},"Request process"),(0,n.kt)("p",null,"First you need to determine the scope of your request and which component(s) it would\napply to. You will need to open a ticket on the correct github repository. (Or at least\ntry to. We can always move it later.)"),(0,n.kt)("p",null,"Here is a rule of thumb:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Suggesting a change to the scheduling of microvms as kubernetes nodes? You'll want\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm"},"capmvm"),"."),(0,n.kt)("li",{parentName:"ul"},"Suggesting a change to the running of microvms on devices? That will be ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/weaveworks-liquidmetal/flintlock"},"flintlock"),".")),(0,n.kt)("p",null,"There are many other components, but these are the two main ones."),(0,n.kt)("p",null,"If you have a huge idea which will impact most or all of the project, open a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/discussions/categories/ideas"},"discussion"),"\nat the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/discussions/categories/ideas"},"capmvm")," level."),(0,n.kt)("p",null,"If are not at all sure where to open the request, just pick the repo which looks\nsort of right and we can move it later if it is wrong \ud83d\ude42."),(0,n.kt)("h3",{id:"how-to-open-a-feature-request-ticket"},"How to open a feature request ticket"),(0,n.kt)("p",null,"Once you have found a repo which you hope is the correct one, go to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Issues"),"\ntab and click on ",(0,n.kt)("inlineCode",{parentName:"p"},"New issue"),". You will be invited to select from 3 templates.\nChoose the ",(0,n.kt)("inlineCode",{parentName:"p"},"Feature request")," one."),(0,n.kt)("p",null,"Try to fill in ",(0,n.kt)("strong",{parentName:"p"},"as much detail as possible")," on the ticket to avoid a lot of\nunnecessary back and forth. Pay special attention to the user journey and how your idea will benefit\nthe project. If you have any ideas on implementation, note those too.\nThe template will guide you towards the sort of information we will need at a minimum."),(0,n.kt)("p",null,"Once you have opened your request, drop a link to it in the ",(0,n.kt)("a",{parentName:"p",href:"https://weave-community.slack.com/archives/C02KARWGR7S"},"slack")," channel to get more people\ninvolved."),(0,n.kt)("h3",{id:"feature-acceptance"},"Feature acceptance"),(0,n.kt)("p",null,"If, after discussion, your idea is accepted, it will be scheduled for POC or work. If you\nwould like to contribute all or part of it yourself, please do! See the ",(0,n.kt)("a",{parentName:"p",href:"/docs/community/contributing"},"contributing"),"\npage to learn how to do this."),(0,n.kt)("p",null,"The maintainers may also decide that your idea is not right for the project at this\ntime and close the request as rejected."))}p.isMDXComponent=!0}}]);