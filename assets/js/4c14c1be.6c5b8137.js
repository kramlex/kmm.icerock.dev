"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[2312],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var m=r.createContext({}),u=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,m=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=u(n),f=i,d=s["".concat(m,".").concat(f)]||s[f]||p[f]||o;return n?r.createElement(d,a(a({ref:e},c),{},{components:n})):r.createElement(d,a({ref:e},c))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},81249:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],l={sidebar_position:0},m="\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 KMM",u={unversionedId:"kotlin-multiplatform-mobile/kmm-intro",id:"kotlin-multiplatform-mobile/kmm-intro",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 KMM",description:"Kotlin Multiplatform Mobile - \u044d\u0442\u043e \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0430\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0435\u0434\u0438\u043d\u0443\u044e \u0431\u0430\u0437\u0443 \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b \u043a\u043e\u0434 \u043d\u0443\u0436\u043d\u043e \u043f\u0438\u0441\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0430\u043c, \u0433\u0434\u0435 \u044d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0438\u043b\u0438 \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 API \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b.",source:"@site/university/3-kotlin-multiplatform-mobile/kmm-intro.md",sourceDirName:"3-kotlin-multiplatform-mobile",slug:"/kotlin-multiplatform-mobile/kmm-intro",permalink:"/university/kotlin-multiplatform-mobile/kmm-intro",draft:!1,editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/university/3-kotlin-multiplatform-mobile/kmm-intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",permalink:"/university/ios-basics/practice"},next:{title:"\u041e\u0441\u043d\u043e\u0432\u044b Kotlin Multiplatform Mobile",permalink:"/university/kotlin-multiplatform-mobile/kmm"}},c={},p=[],s={toc:p};function f(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435-\u0432-kmm"},"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 KMM"),(0,o.kt)("p",null,"Kotlin Multiplatform Mobile - \u044d\u0442\u043e \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0430\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0435\u0434\u0438\u043d\u0443\u044e \u0431\u0430\u0437\u0443 \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b \u043a\u043e\u0434 \u043d\u0443\u0436\u043d\u043e \u043f\u0438\u0441\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0430\u043c, \u0433\u0434\u0435 \u044d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0438\u043b\u0438 \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 API \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b."),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0430 \u0432\u044b \u0443\u0437\u043d\u0430\u0435\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d Kotlin Multiplatform Mobile"),(0,o.kt)("li",{parentName:"ul"},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 ",(0,o.kt)("inlineCode",{parentName:"li"},"expect/actual")),(0,o.kt)("li",{parentName:"ul"},"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0441\u0435\u0442\u044c\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f Ktor"),(0,o.kt)("li",{parentName:"ul"},"\u0421\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 Kotlin Serialization"),(0,o.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c gradle \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 KMM"),(0,o.kt)("li",{parentName:"ul"},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 multiplatform-settings \u0438 \u043a\u0430\u043a \u0438\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c"),(0,o.kt)("li",{parentName:"ul"},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 multiplatform \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0438 \u0438\u0445 \u043e\u0442\u043b\u0438\u0447\u0438\u044f \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a"),(0,o.kt)("li",{parentName:"ul"},"\u0413\u0434\u0435 \u0438\u0441\u043a\u0430\u0442\u044c \u0438 \u043a\u0430\u043a \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c kmm \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u0415\u0441\u043b\u0438 \u0432\u044b \u0443\u0436\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u044b \u0441\u043e \u0432\u0441\u0435\u043c \u044d\u0442\u0438\u043c, \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u044c \u043a ",(0,o.kt)("a",{parentName:"p",href:"practice"},"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u0437\u0430\u0434\u0430\u043d\u0438\u044e")))))}f.isMDXComponent=!0}}]);