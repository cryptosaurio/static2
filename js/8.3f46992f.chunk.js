/*! For license information please see 8.3f46992f.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[8],{104:function(e,t,n){},105:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1);function c(e){var t=e.active,n=e.onClick;return Object(i.jsx)("li",{className:"inline-block",onClick:function(){return n&&n()},children:Object(i.jsx)("label",{className:["cursor-pointer block text-4xl text-white",t||"text-gray-700"].join(" "),children:"\u2022"})})}var o=function(e,t){return e.active===t.active};t.a=a.a.memo(c,o)},106:function(e,t,n){"use strict";function r(){return{responsive:{desktop:{breakpoint:{max:9999,min:769},items:2},mobile:{breakpoint:{max:768,min:0},items:1}},fixed:{desktop:{breakpoint:{max:9999,min:0},items:1}}}}n.d(t,"a",(function(){return r}))},108:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(45),c=n(112),o=n.n(c),s=(n(113),n(104),n(46)),l=(n(109),n(105)),u=n(106),d=n(1);function f(e){var t=e.location,n={page:t,country:window.COUNTRY},r=Object(i.useTracking)(n),c=(r.Track,r.trackEvent),f=Object(s.a)(window.COUNTRY,t,"opportunityBanner");return"home"===t&&(f=f.slice(0,1)),(f=f.sort((function(){return.5-Math.random()}))).forEach((function(e){var t={event:"system_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"show"};"production"===window.ENV?c(t):console.log(n,t)})),Object(d.jsx)(o.a,{className:"rolls-carousel",responsive:Object(u.a)().fixed,renderDotsOutside:!0,showDots:f.length>1,infinite:f.length>1,autoPlay:f.length>1,autoPlaySpeed:4e3,customDot:Object(d.jsx)(l.a,{}),arrows:!1,children:f.map((function(e,t){var r={event:"user_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"click"};return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("img",{onClick:function(){"production"===window.ENV?c(r):console.log(n,r),window.open(e.sponsoredUrl)},className:"cursor-pointer mx-auto my-2 sm:hidden max-w-opportunityBanner-mobile",src:e.mobileImgUrl}),Object(d.jsx)("img",{onClick:function(){"production"===window.ENV?c(r):console.log(n,r),window.open(e.sponsoredUrl)},className:"cursor-pointer mx-auto my-2 hidden sm:block max-w-opportunityBanner-desktop",src:e.desktopImgUrl})]},t)}))})}t.a=a.a.memo(f,(function(){return!0}))},109:function(e,t,n){},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.hasCookies=function(){var e=new l;try{var t="__test";e.setItem(t,"1");var n=e.getItem(t);return e.removeItem(t),"1"===n}catch(r){return!1}};var a,i=n(130),c=(a=i)&&a.__esModule?a:{default:a};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s="lS_",l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this.cookieOptions=Object.assign({path:"/"},t),s=void 0===t.prefix?s:t.prefix}return r(e,[{key:"getItem",value:function(e){var t=c.default.parse(document.cookie);return t&&t.hasOwnProperty(s+e)?t[s+e]:null}},{key:"setItem",value:function(e,t){return document.cookie=c.default.serialize(s+e,t,this.cookieOptions),t}},{key:"removeItem",value:function(e){var t=Object.assign({},this.cookieOptions,{maxAge:-1});return document.cookie=c.default.serialize(s+e,"",t),null}},{key:"clear",value:function(){var e=c.default.parse(document.cookie);for(var t in e)0===t.indexOf(s)&&this.removeItem(t.substr(s.length));return null}}]),e}();t.default=l},119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MemoryStorage=t.CookieStorage=t.isSupported=t.storage=void 0;var r=c(n(129)),a=c(n(116)),i=c(n(131));function c(e){return e&&e.__esModule?e:{default:e}}var o=null;(0,r.default)("localStorage")?t.storage=o=window.localStorage:(0,r.default)("sessionStorage")?t.storage=o=window.sessionStorage:(0,r.default)("cookieStorage")?t.storage=o=new a.default:t.storage=o=new i.default,t.default=o,t.storage=o,t.isSupported=r.default,t.CookieStorage=a.default,t.MemoryStorage=i.default},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localStorage",t=String(e).replace(/storage$/i,"").toLowerCase();if("local"===t)return i("localStorage");if("session"===t)return i("sessionStorage");if("cookie"===t)return(0,r.hasCookies)();if("memory"===t)return!0;throw new Error("Storage method `"+e+"` is not available.\n    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage.")};var r=n(116),a="__test";function i(e){try{var t=window[e];return t.setItem(a,"1"),t.removeItem(a),!0}catch(n){return!1}}},130:function(e,t,n){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var n={},a=t||{},c=e.split(i),s=a.decode||r,l=0;l<c.length;l++){var u=c[l],d=u.indexOf("=");if(!(d<0)){var f=u.substr(0,d).trim(),b=u.substr(++d,u.length).trim();'"'==b[0]&&(b=b.slice(1,-1)),void 0==n[f]&&(n[f]=o(b,s))}}return n},t.serialize=function(e,t,n){var r=n||{},i=r.encode||a;if("function"!==typeof i)throw new TypeError("option encode is invalid");if(!c.test(e))throw new TypeError("argument name is invalid");var o=i(t);if(o&&!c.test(o))throw new TypeError("argument val is invalid");var s=e+"="+o;if(null!=r.maxAge){var l=r.maxAge-0;if(isNaN(l))throw new Error("maxAge should be a Number");s+="; Max-Age="+Math.floor(l)}if(r.domain){if(!c.test(r.domain))throw new TypeError("option domain is invalid");s+="; Domain="+r.domain}if(r.path){if(!c.test(r.path))throw new TypeError("option path is invalid");s+="; Path="+r.path}if(r.expires){if("function"!==typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+r.expires.toUTCString()}r.httpOnly&&(s+="; HttpOnly");r.secure&&(s+="; Secure");if(r.sameSite){switch("string"===typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return s};var r=decodeURIComponent,a=encodeURIComponent,i=/; */,c=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function o(e,t){try{return t(e)}catch(n){return e}}},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data={}}return r(e,[{key:"getItem",value:function(e){return this._data.hasOwnProperty(e)?this._data[e]:null}},{key:"setItem",value:function(e,t){return this._data[e]=String(t)}},{key:"removeItem",value:function(e){return delete this._data[e]}},{key:"clear",value:function(){return this._data={}}}]),e}();t.default=a},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r,a,i=n(2),c=n(0),o=n.n(c),s=n(13),l=n(4),u=n(35),d=n(6),f=n(7),b=n(23),p=n(34),m=n(49);!function(e){e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.SetOrientation=1]="SetOrientation",e[e.SetActivation=2]="SetActivation",e[e.RegisterTab=3]="RegisterTab",e[e.UnregisterTab=4]="UnregisterTab",e[e.RegisterPanel=5]="RegisterPanel",e[e.UnregisterPanel=6]="UnregisterPanel",e[e.ForceRerender=7]="ForceRerender"}(a||(a={}));var j=((r={})[a.SetSelectedIndex]=function(e,t){return e.selectedIndex===t.index?e:Object(i.b)({},e,{selectedIndex:t.index})},r[a.SetOrientation]=function(e,t){return e.orientation===t.orientation?e:Object(i.b)({},e,{orientation:t.orientation})},r[a.SetActivation]=function(e,t){return e.activation===t.activation?e:Object(i.b)({},e,{activation:t.activation})},r[a.RegisterTab]=function(e,t){return e.tabs.includes(t.tab)?e:Object(i.b)({},e,{tabs:[].concat(e.tabs,[t.tab])})},r[a.UnregisterTab]=function(e,t){return Object(i.b)({},e,{tabs:e.tabs.filter((function(e){return e!==t.tab}))})},r[a.RegisterPanel]=function(e,t){return e.panels.includes(t.panel)?e:Object(i.b)({},e,{panels:[].concat(e.panels,[t.panel])})},r[a.UnregisterPanel]=function(e,t){return Object(i.b)({},e,{panels:e.panels.filter((function(e){return e!==t.panel}))})},r[a.ForceRerender]=function(e){return Object(i.b)({},e)},r),x=Object(c.createContext)(null);function O(e){var t=Object(c.useContext)(x);if(null===t){var n=new Error("<"+e+" /> is missing a parent <Tab.Group /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,O),n}return t}function v(e,t){return Object(s.a)(t.type,j,e,t)}x.displayName="TabsContext";var h=c.Fragment;function g(e){var t,n,r="headlessui-tabs-tab-"+Object(b.a)(),o=O(g.name),j=o[0],x=j.selectedIndex,v=j.tabs,h=j.panels,w=j.orientation,y=j.activation,k=o[1],N=k.dispatch,S=k.change,_=Object(c.useRef)(null),C=Object(u.a)(_,(function(e){e&&N({type:a.ForceRerender})}));Object(f.a)((function(){return N({type:a.RegisterTab,tab:_}),function(){return N({type:a.UnregisterTab,tab:_})}}),[N,_]);var P=v.indexOf(_),T=P===x,I=Object(c.useCallback)((function(e){var t=v.map((function(e){return e.current})).filter(Boolean);if(e.key===d.a.Space||e.key===d.a.Enter)return e.preventDefault(),e.stopPropagation(),void S(P);switch(e.key){case d.a.Home:case d.a.PageUp:return e.preventDefault(),e.stopPropagation(),Object(p.e)(t,p.a.First);case d.a.End:case d.a.PageDown:return e.preventDefault(),e.stopPropagation(),Object(p.e)(t,p.a.Last)}return Object(s.a)(w,{vertical:function(){return e.key===d.a.ArrowUp?Object(p.e)(t,p.a.Previous|p.a.WrapAround):e.key===d.a.ArrowDown?Object(p.e)(t,p.a.Next|p.a.WrapAround):void 0},horizontal:function(){return e.key===d.a.ArrowLeft?Object(p.e)(t,p.a.Previous|p.a.WrapAround):e.key===d.a.ArrowRight?Object(p.e)(t,p.a.Next|p.a.WrapAround):void 0}})}),[v,w,P,S]),U=Object(c.useCallback)((function(){var e;null==(e=_.current)||e.focus()}),[_]),R=Object(c.useCallback)((function(){var e;null==(e=_.current)||e.focus(),S(P)}),[S,P,_]),E=Object(c.useMemo)((function(){return{selected:T}}),[T]),A={ref:C,onKeyDown:I,onFocus:"manual"===y?U:R,onClick:R,id:r,role:"tab",type:Object(m.a)(e,_),"aria-controls":null==(t=h[P])||null==(n=t.current)?void 0:n.id,"aria-selected":T,tabIndex:T?0:-1},M=e;return Object(l.d)({props:Object(i.b)({},M,A),slot:E,defaultTag:"button",name:"Tabs.Tab"})}var w=l.a.RenderStrategy|l.a.Static;g.Group=function(e){var t=e.defaultIndex,n=void 0===t?0:t,r=e.vertical,s=void 0!==r&&r,u=e.manual,d=void 0!==u&&u,f=e.onChange,b=Object(i.c)(e,["defaultIndex","vertical","manual","onChange"]),p=s?"vertical":"horizontal",m=d?"manual":"auto",j=Object(c.useReducer)(v,{selectedIndex:null,tabs:[],panels:[],orientation:p,activation:m}),O=j[0],g=j[1],w=Object(c.useMemo)((function(){return{selectedIndex:O.selectedIndex}}),[O.selectedIndex]),y=Object(c.useRef)((function(){}));Object(c.useEffect)((function(){g({type:a.SetOrientation,orientation:p})}),[p]),Object(c.useEffect)((function(){g({type:a.SetActivation,activation:m})}),[m]),Object(c.useEffect)((function(){"function"===typeof f&&(y.current=f)}),[f]),Object(c.useEffect)((function(){if(!(O.tabs.length<=0)&&null===O.selectedIndex){var e=O.tabs.map((function(e){return e.current})).filter(Boolean),t=e.filter((function(e){return!e.hasAttribute("disabled")}));if(n<0)g({type:a.SetSelectedIndex,index:e.indexOf(t[0])});else if(n>O.tabs.length)g({type:a.SetSelectedIndex,index:e.indexOf(t[t.length-1])});else{var r=e.slice(0,n),i=e.slice(n),c=[].concat(i,r).find((function(e){return t.includes(e)}));if(!c)return;g({type:a.SetSelectedIndex,index:e.indexOf(c)})}}}),[n,O.tabs,O.selectedIndex]);var k=Object(c.useRef)(O.selectedIndex),N=Object(c.useMemo)((function(){return[O,{dispatch:g,change:function(e){k.current!==e&&y.current(e),k.current=e,g({type:a.SetSelectedIndex,index:e})}}]}),[O,g]);return o.a.createElement(x.Provider,{value:N},Object(l.d)({props:Object(i.b)({},b),slot:w,defaultTag:h,name:"Tabs"}))},g.List=function e(t){var n=O([g.name,e.name].join("."))[0],r={selectedIndex:n.selectedIndex},a={role:"tablist","aria-orientation":n.orientation},c=t;return Object(l.d)({props:Object(i.b)({},c,a),slot:r,defaultTag:"div",name:"Tabs.List"})},g.Panels=function e(t){var n=O([g.name,e.name].join("."))[0].selectedIndex,r=Object(c.useMemo)((function(){return{selectedIndex:n}}),[n]);return Object(l.d)({props:t,slot:r,defaultTag:"div",name:"Tabs.Panels"})},g.Panel=function e(t){var n,r,o=O([g.name,e.name].join(".")),s=o[0],d=s.selectedIndex,p=s.tabs,m=s.panels,j=o[1].dispatch,x="headlessui-tabs-panel-"+Object(b.a)(),v=Object(c.useRef)(null),h=Object(u.a)(v,(function(e){e&&j({type:a.ForceRerender})}));Object(f.a)((function(){return j({type:a.RegisterPanel,panel:v}),function(){return j({type:a.UnregisterPanel,panel:v})}}),[j,v]);var y=m.indexOf(v),k=y===d,N=Object(c.useMemo)((function(){return{selected:k}}),[k]),S={ref:h,id:x,role:"tabpanel","aria-labelledby":null==(n=p[y])||null==(r=n.current)?void 0:r.id,tabIndex:k?0:-1},_=t;return Object(l.d)({props:Object(i.b)({},_,S),slot:N,defaultTag:"div",features:w,visible:k,name:"Tabs.Panel"})}},219:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var r,a,i=n(43),c=n(14),o=n(27),s=n(8),l=n(0),u=n.n(l),d=n(95),f=n(51),b=n(146),p=n(112),m=n.n(p),j=n(9),x=n(120),O=n(108),v=(n(113),n(106)),h=(n(104),["title","titleId"]);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y(e,t){var n=e.title,i=e.titleId,c=w(e,h);return l.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",ref:t,"aria-labelledby":i},c),n?l.createElement("title",{id:i},n):null,r||(r=l.createElement("defs",null)),a||(a=l.createElement("path",{d:"M519 128l-47-48a56 56 0 00-40-16H205c-15 0-29 6-39 16l-48 48H0v256h64c18 0 32-15 32-32h9l85 76c30 25 73 26 105 4a61 61 0 0090-8c22 9 48 3 64-17l26-32c6-7 9-15 11-23h58c0 17 15 32 32 32h64V128H519zM48 352c-9 0-16-8-16-16s7-16 16-16 16 7 16 16-7 16-16 16zm390-7l-26 32c-3 3-8 4-11 1l-24-19-30 36c-6 8-15 5-18 3l-37-32-16 19a40 40 0 01-55 7l-97-88H96V176h42l62-62 5-2h57l-39 35a72 72 0 00-4 102c15 16 61 41 101 4l9-7 108 87c3 3 4 8 1 12zm106-41h-69l-8-8-103-83 13-12c6-6 7-16 1-22l-11-12c-6-6-16-7-23-1l-55 51c-9 8-26 9-34 0-10-10-9-25 1-34l65-60c8-7 17-11 27-11h84l6 2 61 62h45v128zm48 48c-9 0-16-8-16-16s7-16 16-16 16 7 16 16-7 16-16 16z"})))}var k,N=l.forwardRef(y),S=(n.p,n(22)),_=n(30),C=n(119),P=n.n(C),T=n(105),I=n(1),U=u.a.lazy((function(){return n.e(15).then(n.bind(null,213))}));function R(){var e=Object(d.a)().t,t=Object(l.useState)({}),n=Object(s.a)(t,2),r=n[0],a=n[1],u=Object(l.useState)({}),p=Object(s.a)(u,2),h=p[0],g=p[1],w=Object(l.useState)({}),y=Object(s.a)(w,2),C=y[0],R=y[1],E=Object(l.useState)([]),A=Object(s.a)(E,2),M=A[0],D=A[1],B=Object(l.useState)(""),z=Object(s.a)(B,2),L=z[0],V=z[1],Y=Object(l.useState)(""),F=Object(s.a)(Y,2),H=F[0],J=F[1],W=Object(l.useState)({}),G=Object(s.a)(W,2),$=G[0],K=G[1],q=Object(l.useState)(10),Q=Object(s.a)(q,2),X=Q[0],Z=Q[1],ee=Object(l.useState)(k.ByCoin),te=Object(s.a)(ee,2),ne=te[0],re=te[1],ae=Object(l.useState)([]),ie=Object(s.a)(ae,2),ce=ie[0],oe=ie[1],se=Object(l.useState)([]),le=Object(s.a)(se,2),ue=le[0],de=le[1],fe=Object(l.useState)(!1),be=Object(s.a)(fe,2),pe=be[0],me=be[1];function je(e){var t=JSON.parse(JSON.stringify(e));if(ne===k.ByCoin)for(var n in t)L&&n in t&&t[n]&&t[n].offers&&L in t[n].offers.fields.providers&&(t[n].offers.fields.providers=Object(o.a)({},L,{ask:(t[n].offers.fields.providers[L].ask||[]).filter((function(e){return-1===ue.indexOf(e.provider_id)})),bid:(t[n].offers.fields.providers[L].bid||"bid").filter((function(e){return-1===ue.indexOf(e.provider_id)}))}));else if(ne===k.ByProvider)for(var r in t)for(var a in t[r])ue.indexOf("".concat(a,"p2p"))>-1&&delete t[r][a];return Object(c.a)({},t)}return Object(l.useEffect)((function(){var e=Object(S.a)();D(e.available_currencies);var t=P.a.getItem("".concat(window.COUNTRY.toUpperCase(),"_currency_selected"));-1===e.available_currencies.indexOf(t)&&(t=e.available_currencies[0]),V(t)}),[]),Object(f.a)((function(){fetch("br"!==window.COUNTRY?"".concat(window.API_URL,"/").concat(window.COUNTRY,"/p2p-data?viewType=").concat(k[ne]):"".concat(window.BR_API_URL,"/p2p-data?viewType=").concat(k[ne])).then((function(e){return e.json()})).then((function(e){oe(e.providers),a(e.offers),g(je(e.offers))})).catch((function(){return g({})}))}),6e4,!1,ne),Object(l.useEffect)((function(){Object.values(r).length>0&&g(je(r))}),[r,L,ue]),Object(f.a)((function(){ne===k.ByCoin&&H&&-1===["DAI","USDC","USDT","BUSD"].indexOf(H.toUpperCase())?fetch("".concat(window.API_URL,"/").concat(window.COUNTRY,"/coin-stats/").concat(H,"?simple=true")).then((function(e){return e.json()})).then((function(e){return R(e)})).catch((function(){return R({})})):R({})}),6e4,!1,ne,H),Object(l.useEffect)((function(){Z(ne===k.ByCoin?10:4)}),[ne]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(O.a,{location:"p2p"}),Object(I.jsxs)(b.a.Group,{onChange:function(e){return J(Object.keys(h)[e])},children:[Object(I.jsxs)(b.a.List,{className:"flex p-1 space-x-1 xl:ml-52 xl:mr-52 bg-gray-800 sticky top-0 z-10 overflow-x-auto no-scrollbar",children:[Object.keys(h).map((function(e,t){return 0===t&&!H&&J(e),Object(I.jsxs)(b.a,{className:function(e){return["min-w-max p-2.5 sm:w-full text-sm font-medium flex justify-center",e.selected&&"border-b-2 border-blue-400"].join(" ")},children:[Object(I.jsx)("img",{src:Object(_.a)(e.toUpperCase()).icon,className:"w-5 mr-1"}),Object(I.jsx)("p",{children:Object(_.a)(e.toUpperCase()).name})]},t)})),0===Object.keys(h).length&&Object(i.a)(Array(5)).map((function(e,t){return Object(I.jsx)("div",{className:"animate-pulse w-screen h-12 bg-gray-700"},t)}))]}),H&&Object(I.jsxs)("h2",{className:"px-5 pt-5 xl:px-0 xl:pt-5 xl:mx-52",children:[e("Compara f\xe1cilmente anuncios P2P de {{coin}} en distintas plataformas y elige el m\xe1s conveniente. Para tener una mejor experiencia,",{coin:Object(_.a)(H.toUpperCase()).name})," ",Object(I.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline text-blue-400 hover:text-blue-600",href:"".concat("br"!=window.COUNTRY?"/"+window.COUNTRY:"","/blog/").concat(e("tips-para-operar-p2p")),children:e("te acercamos algunos consejos para operar P2P")}),"."]}),Object(I.jsxs)("p",{onClick:function(){return me(!0)},className:"mt-8 pl-5 xl:pl-0 xl:ml-52 cursor-pointer inline-flex items-center",children:[Object(I.jsx)(j.b,{className:"inline-block fill-current w-5 h-5 align-text-top mr-1"}),e("Preferencias")]}),pe&&Object(I.jsx)(l.Suspense,{fallback:Object(I.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:Object(I.jsx)("div",{className:"min-h-screen px-4",children:Object(I.jsx)("div",{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"})})}),children:Object(I.jsx)(U,{preferencesModalIsOpen:pe,setPreferencesModalIsOpen:me,providerList:ce,setP2PData:g,viewType:ne,setViewType:re,blockedProviders:ue,setBlockedProviders:de,selectedCurrency:L,setSelectedCurrency:V,availableCurrencies:M})}),Object(I.jsxs)(b.a.Panels,{className:"mt-2 pb-5",children:[Object.values(h).map((function(t,n){return Object(I.jsx)(b.a.Panel,{children:Object.values(t).map((function(t,n){return Object(I.jsxs)("div",{className:["flex flex-col xl:ml-52 xl:mr-52 border-2 border-gray-600 overflow-x-auto",n>0?"mt-8":"mt-1"].join(" "),children:[Object(I.jsx)("div",{className:"bg-gray-600",children:Object(I.jsx)("div",{className:"py-3 px-3 sm:px-6 lg:px-8",children:ne===k.ByProvider&&Object(I.jsxs)("span",{className:"text-white flex items-center",children:[Object(I.jsx)("img",{className:"w-5 mr-1",src:t.fields.icon}),Object(I.jsx)("a",{className:"font-medium",href:t.fields.url,target:"_blank",rel:"sponsored noreferrer",children:t.fields.name&&t.fields.name.replace(/ P2P/,"")}),t.fields.score&&t.fields.score.count>0&&Object(I.jsxs)("p",{className:"ml-1 font-light text-gray-400",children:[t.fields.score.rating,Object(I.jsx)(j.x,{className:"inline-block fill-current w-5 h-5 align-text-top"}),Object(I.jsx)("a",{className:"ml-1 underline",href:"".concat("br"!=window.COUNTRY?"/"+window.COUNTRY:"","/").concat(e("opiniones"),"/").concat(t.fields.id),children:e("Ver opiniones")})]})]})||Object(I.jsxs)("div",{className:"grid grid-flow-row",children:[Object(I.jsxs)("span",{className:"text-white flex items-center",children:[Object(I.jsx)("img",{className:"w-5 mr-1",src:t.fields.coin_icon}),Object(I.jsx)("h3",{className:"text-lg",children:t.fields.coin})]}),C.price&&Object(I.jsxs)("div",{className:"flex my-1",children:[Object(I.jsxs)("p",{className:"font-bold",children:["USD $ ",C.price]}),Object(I.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",C.price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:C.price_change_percentage_24h}),Object(I.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"/".concat("br"!=window.COUNTRY?window.COUNTRY:"","/").concat("btc"===H?"bitcoin":"eth"===H?"ethereum":H),children:e("Ver estad\xedsticas")})]})]})})}),Object(I.jsx)("div",{className:"py-2 align-middle inline-block",children:Object(I.jsx)("div",{className:"border-gray-200",children:Object(I.jsx)(m.a,{responsive:Object(v.a)().responsive,arrows:!1,showDots:!0,customDot:Object(I.jsx)(T.a,{}),children:Object(i.a)(Array("ask","bid")).map((function(n,r){return Object(I.jsx)("div",{className:"overflow-x-auto no-scrollbar",children:Object(I.jsxs)("table",{className:["mt-1 m-auto",L&&L in t.fields.providers&&(!(n in t.fields.providers[L])||0===t.fields.providers[L][n].length)&&"flex items-center justify-center mt-5"].join(" "),children:[L&&L in t.fields.providers&&n in t.fields.providers[L]&&t.fields.providers[L][n].length>0&&Object(I.jsxs)("thead",{children:[Object(I.jsx)("tr",{children:Object(I.jsx)("th",{children:Object(I.jsx)("span",{className:"ml-1 sm:ml-4 px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===n&&e("VENDEDORES")||e("COMPRADORES")})})}),Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(I.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:e("PRECIO")}),t.fields.providers[L][n].filter((function(e){return e.limit})).length>0&&Object(I.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:e("VOLUMEN")})]})]})||Object(I.jsx)("tbody",{children:Object(I.jsx)("tr",{children:Object(I.jsx)("td",{children:Object(I.jsx)("p",{children:e("No hay ".concat("ask"===n?"vendedores":"compradores"," en este momento..."))})})})}),L&&(L in t.fields.providers&&t.fields.providers[L][n]||[]).slice(0,!$["".concat(H,"-").concat(t.fields.id,"-").concat(n)]&&X||L&&(L in t.fields.providers&&t.fields.providers[L][n]||[]).length).map((function(t,n){return Object(I.jsx)("tbody",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 cursor-pointer min-w-min",children:Object(I.jsxs)("a",{className:"grid grid-flow-col",href:t.url,target:"_blank",rel:"sponsored noreferrer",children:[ne===k.ByCoin&&Object(I.jsx)("img",{className:"w-5 sm:w-7 mr-2 self-center",src:t.provider_icon,"data-tip":!0,"data-for":t.provider_name}),Object(I.jsx)(x.a,{effect:"solid",id:t.provider_name,children:t.provider_name.replace(/ P2P/,"")}),Object(I.jsxs)("div",{className:"w-24 text-sm self-center",children:[Object(I.jsxs)("span",{className:"flex",children:[Object(I.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:t.name}),t.pro_user&&Object(I.jsx)(j.c,{className:"inline-block fill-current text-yellow-400 w-5 h-5 align-bottom flex-shrink-0"})]}),0!=t.amount_of_orders&&Object(I.jsxs)("span",{className:"text-xs text-gray-400",children:[t.amount_of_orders," ",Object(I.jsx)(N,{className:"w-4 inline-block fill-current"})," ",t.success_rate,"%"]})]})]})}),Object(I.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3",children:Object(I.jsxs)("div",{className:"text-sm truncate w-32 grid grid-flow-row",children:[Object(I.jsx)("span",{children:t.price}),Object(I.jsx)("span",{className:"grid grid-flow-col gap-2 justify-start cursor-pointer text-gray-400 text-xs",children:Object(I.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:t.payment_methods.map((function(e){return e.name})).join(", ")})})]})}),t.limit&&Object(I.jsxs)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 grid grid-flow-row",children:[Object(I.jsxs)("span",{className:"text-sm truncate w-24",children:[t.limit," ",H.toUpperCase()]}),(t.limit_min||t.limit_max)&&Object(I.jsxs)("span",{className:"text-xs truncate hover:overflow-clip hover:whitespace-normal hover:overflow-visible w-24 text-gray-400 cursor-pointer",children:[t.limit_min&&e("M\xedn")+":"+String.fromCharCode(8239)+t.limit_min+" ",t.limit_max&&e("M\xe1x")+":"+String.fromCharCode(8239)+t.limit_max]})]})]})},n)})),L&&L in t.fields.providers&&n in t.fields.providers[L]&&t.fields.providers[L][n].length>X&&Object(I.jsx)("tbody",{onClick:function(){$["".concat(H,"-").concat(t.fields.id,"-").concat(n)]=!$["".concat(H,"-").concat(t.fields.id,"-").concat(n)],K(Object(c.a)({},$))},children:Object(I.jsx)("tr",{children:Object(I.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 cursor-pointer underline",children:!$["".concat(H,"-").concat(t.fields.id,"-").concat(n)]&&e("Ver m\xe1s")||e("Ver menos")})})})]})},r)}))})})})]},n)}))},n)})),0===Object.values(h).length&&Object(i.a)(Array(3)).map((function(e,t){return Object(I.jsxs)("div",{className:["animate-pulse justify-between flex flex-row xl:ml-52 xl:mr-52 bg-gray-700 overflow-x-auto h-80",t>0?"mt-8":"mt-1"].join(" "),children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-16"}),Object(I.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-4"}),Object(I.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-4"})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-16"}),Object(I.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-4"}),Object(I.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-4"})]})]},t)}))]})]})]})}!function(e){e.ByProvider="ByProvider",e.ByCoin="ByCoin"}(k||(k={}))}}]);