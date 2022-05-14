"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[1163],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,v=d["".concat(c,".").concat(b)]||d[b]||s[b]||o;return t?i.createElement(v,a(a({ref:n},u),{},{components:t})):i.createElement(v,a({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91677:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var i=t(83117),r=t(80102),o=(t(67294),t(3905)),a=["components"],l={sidebar_position:4},c="\u0418\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f ObjC \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0432 Kotlin",p={unversionedId:"kotlin-native/objc_protocol",id:"kotlin-native/objc_protocol",title:"\u0418\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f ObjC \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0432 Kotlin",description:"Objective-C \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0442\u0430\u043a\u043e\u0433\u043e \u0432\u0438\u0434\u0430:",source:"@site/learning/kotlin-native/objc_protocol.md",sourceDirName:"kotlin-native",slug:"/kotlin-native/objc_protocol",permalink:"/learning/kotlin-native/objc_protocol",draft:!1,editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/learning/kotlin-native/objc_protocol.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Kotlin/Swift interop",permalink:"/learning/kotlin-native/swift-interop"},next:{title:"CocoaPods integration",permalink:"/learning/kotlin-native/cocoapods"}},u={},s=[],d={toc:s};function b(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f-objc-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430-\u0432-kotlin"},"\u0418\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f ObjC \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0432 Kotlin"),(0,o.kt)("p",null,"Objective-C \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0442\u0430\u043a\u043e\u0433\u043e \u0432\u0438\u0434\u0430:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objective-c"},"@protocol WKNavigationDelegate <NSObject>\n\n@optional\n\n- (void)webView:(WKWebView *)webView didStartProvisionalNavigation:(WK_NULL_UNSPECIFIED WKNavigation *)navigation;\n- (void)webView:(WKWebView *)webView didFinishNavigation:(WK_NULL_UNSPECIFIED WKNavigation *)navigation;\n\n@end\n")),(0,o.kt)("p",null,"\u0438 \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"Kotlin")," \u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0439 \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u043e\u0439 - \u0438\u043c\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"webView")," \u0441 \u0434\u0432\u0443\u043c\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438, \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0442\u0438\u043f\u044b ",(0,o.kt)("inlineCode",{parentName:"p"},"WKWebView")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"WKNavigation"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class NavigationDelegate: NSObject(), WKNavigationDelegateProtocol {\n\n    override fun webView(webView: WKWebView, didStartProvisionalNavigation: WKNavigation?) { }\n\n    override fun webView(webView: WKWebView, didFinishNavigation: WKNavigation?) { }\n}\n")),(0,o.kt)("p",null,"\u0414\u043b\u044f IDE \u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0447\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u043e\u0448\u0438\u0431\u043a\u043e\u0439, \u0435\u0441\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0442\u0441\u044f \u043e\u0431\u0430 \u043c\u0435\u0442\u043e\u0434\u0430:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Conflicting overloads: public open fun webView(webView: WKWebView, didStartProvisionalNavigation: WKNavigation?): Unit defined in ...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"public open fun webView(webView: WKWebView, didFinishNavigation: WKNavigation?): Unit defined in ..."))),(0,o.kt)("p",null,"\u041d\u043e \u043f\u043e \u043f\u0440\u0430\u0432\u0434\u0435, \u0434\u043b\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"Kotlin/Native"),", \u044d\u0442\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e (",(0,o.kt)("strong",{parentName:"p"},"\u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043e\u0442 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u0432 ObjC"),"). \u0418 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"Suppress"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Suppress("CONFLICTING_OVERLOADS")\nclass NavigationDelegate: NSObject(), WKNavigationDelegateProtocol {\n\n    override fun webView(webView: WKWebView, didStartProvisionalNavigation: WKNavigation?) { }\n\n    override fun webView(webView: WKWebView, didFinishNavigation: WKNavigation?) { }\n}\n')))}b.isMDXComponent=!0}}]);