/*! For license information please see 26.d5de0fb7.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[26],{119:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(21);var o=r(138),c=r(15);function a(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||Object(o.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},138:function(e,t,r){"use strict";function n(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r.d(t,"a",(function(){return n}))},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r,n){return new(r||(r=Promise))((function(o,c){function a(e){try{i(n.next(e))}catch(e){c(e)}}function s(e){try{i(n.throw(e))}catch(e){c(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}i((n=n.apply(e,t||[])).next())}))}function a(e,t){var r,n,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(c){return function(s){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}var s,i=function(e){console.warn(e)};(s||(s={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var l=Object(n.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});l.Consumer;function u(e){var t=this,r=e.reCaptchaKey,u=e.useEnterprise,d=void 0!==u&&u,f=e.useRecaptchaNet,p=void 0!==f&&f,m=e.scriptProps,b=e.language,y=e.children,h=Object(n.useState)(null),j=h[0],v=h[1];Object(n.useEffect)((function(){if(r){var e=(null==m?void 0:m.id)||"google-recaptcha-v3";return function(e){var t=e.reCaptchaKey,r=e.language,n=e.onLoad,o=e.useRecaptchaNet,c=e.useEnterprise,a=e.scriptProps,s=void 0===a?{}:a,i=s.nonce,l=void 0===i?"":i,u=s.defer,d=void 0!==u&&u,f=s.async,p=void 0!==f&&f,m=s.id,b=void 0===m?"":m,y=s.appendTo,h=void 0===y?void 0:y,j=b||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(j))n();else{var v=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:c,useRecaptchaNet:o}),x=document.createElement("script");x.id=j,x.src=v+"?render="+t+(r?"&hl="+r:""),l&&(x.nonce=l),x.defer=!!d,x.async=!!p,x.onload=n,("body"===h?document.body:document.getElementsByTagName("head")[0]).appendChild(x)}}({reCaptchaKey:r,useEnterprise:d,useRecaptchaNet:p,scriptProps:m,language:b,onLoad:function(){if(window&&window.grecaptcha){var e=d?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){v(e)}))}else i("<GoogleRecaptchaProvider /> "+s.SCRIPT_NOT_AVAILABLE)},onError:function(){i("Error loading google recaptcha script")}}),function(){!function(e){var t=document.querySelector(".grecaptcha-badge");t&&t.parentNode&&document.body.removeChild(t.parentNode);var r=document.querySelector("#"+e);r&&r.remove(),function(){var e=document.querySelector("script[src^='https://www.gstatic.com/recaptcha/releases']");e&&e.remove()}()}(e)}}i("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[d,p,m,b,r]);var x=Object(n.useCallback)((function(e){return c(t,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:if(!j||!j.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return[4,j.execute(r,{action:e})];case 1:return[2,t.sent()]}}))}))}),[j]),w=Object(n.useMemo)((function(){return{executeRecaptcha:j?x:void 0}}),[x,j]);return o.a.createElement(l.Provider,{value:w},y)}var d=function(){return Object(n.useContext)(l)};function f(e,t){return e(t={exports:{}},t.exports),t.exports}var p="function"==typeof Symbol&&Symbol.for,m=p?Symbol.for("react.element"):60103,b=p?Symbol.for("react.portal"):60106,y=p?Symbol.for("react.fragment"):60107,h=p?Symbol.for("react.strict_mode"):60108,j=p?Symbol.for("react.profiler"):60114,v=p?Symbol.for("react.provider"):60109,x=p?Symbol.for("react.context"):60110,w=p?Symbol.for("react.async_mode"):60111,g=p?Symbol.for("react.concurrent_mode"):60111,O=p?Symbol.for("react.forward_ref"):60112,N=p?Symbol.for("react.suspense"):60113,S=p?Symbol.for("react.suspense_list"):60120,C=p?Symbol.for("react.memo"):60115,P=p?Symbol.for("react.lazy"):60116,R=p?Symbol.for("react.block"):60121,E=p?Symbol.for("react.fundamental"):60117,$=p?Symbol.for("react.responder"):60118,A=p?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case m:switch(e=e.type){case w:case g:case y:case j:case h:case N:return e;default:switch(e=e&&e.$$typeof){case x:case O:case P:case C:case v:return e;default:return t}}case b:return t}}}function M(e){return k(e)===g}var _={AsyncMode:w,ConcurrentMode:g,ContextConsumer:x,ContextProvider:v,Element:m,ForwardRef:O,Fragment:y,Lazy:P,Memo:C,Portal:b,Profiler:j,StrictMode:h,Suspense:N,isAsyncMode:function(e){return M(e)||k(e)===w},isConcurrentMode:M,isContextConsumer:function(e){return k(e)===x},isContextProvider:function(e){return k(e)===v},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===m},isForwardRef:function(e){return k(e)===O},isFragment:function(e){return k(e)===y},isLazy:function(e){return k(e)===P},isMemo:function(e){return k(e)===C},isPortal:function(e){return k(e)===b},isProfiler:function(e){return k(e)===j},isStrictMode:function(e){return k(e)===h},isSuspense:function(e){return k(e)===N},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===y||e===g||e===j||e===h||e===N||e===S||"object"==typeof e&&null!==e&&(e.$$typeof===P||e.$$typeof===C||e.$$typeof===v||e.$$typeof===x||e.$$typeof===O||e.$$typeof===E||e.$$typeof===$||e.$$typeof===A||e.$$typeof===R)},typeOf:k},L=f((function(e,t){})),T=(L.AsyncMode,L.ConcurrentMode,L.ContextConsumer,L.ContextProvider,L.Element,L.ForwardRef,L.Fragment,L.Lazy,L.Memo,L.Portal,L.Profiler,L.StrictMode,L.Suspense,L.isAsyncMode,L.isConcurrentMode,L.isContextConsumer,L.isContextProvider,L.isElement,L.isForwardRef,L.isFragment,L.isLazy,L.isMemo,L.isPortal,L.isProfiler,L.isStrictMode,L.isSuspense,L.isValidElementType,L.typeOf,f((function(e){e.exports=_}))),I={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},F={};F[T.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},F[T.Memo]=I;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype},96:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var n=r(119),o=r(9),c=r(0),a=r.n(c),s=r(125),i=r(106),l=r(157),u=r(126),d=r(2),f=a.a.lazy((function(){return Promise.all([r.e(4),r.e(5)]).then(r.bind(null,192))}));function p(){return Object(d.jsx)(l.a,{reCaptchaKey:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI",children:Object(d.jsx)(m,{})})}function m(){var e={page:"review-landing",country:window.COUNTRY},t=Object(u.useTracking)(e).trackEvent,r=Object(i.a)().t,a=Object(l.b)().executeRecaptcha;Object(c.useEffect)((function(){var r={event:"pageview"};"production"===window.ENV?t(r):console.log(e,r)}),[]);var p=Object(c.useState)([]),m=Object(o.a)(p,2),b=m[0],y=m[1],h=Object(c.useState)([]),j=Object(o.a)(h,2),v=j[0],x=j[1],w=Object(c.useState)(null),g=Object(o.a)(w,2),O=g[0],N=g[1],S=Object(c.useState)(!1),C=Object(o.a)(S,2),P=C[0],R=C[1],E=Object(c.useState)(""),$=Object(o.a)(E,2),A=$[0],k=$[1];return Object(c.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/summarized-reviews-info?merge_p2p=true"):"".concat(window.BARNEY_BR_API_URL,"/reviews/summarized-reviews-info?merge_p2p=true")).then((function(e){return e.json()})).then((function(e){y(e.filter((function(e){return 1===e.enabled})))})).catch((function(){y([])}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"mx-5 mt-5",children:[Object(d.jsx)("h1",{className:"text-2xl",children:r("Opinar")}),Object(d.jsx)("h2",{className:"text-lg pt-3",children:r("\xbfCompraste o vendiste cripto en alguna de estas plataformas? Nuestros usuarios quieren conocer tu experiencia para tomar buenas decisiones.")})]}),Object(d.jsxs)("div",{className:"mx-5 mt-5",children:[Object(d.jsxs)("div",{className:"relative text-gray-600 focus-within:text-gray-400",children:[Object(d.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:Object(d.jsx)("button",{className:"p-1 focus:outline-none focus:shadow-outline",children:Object(d.jsx)(s.y,{className:"w-5 h-5"})})}),Object(d.jsx)("input",{type:"search",name:"q",className:"py-2 w-56 text-sm text-white bg-gray-800 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:r("Buscar una plataforma"),autoComplete:"off",value:A,onChange:function(e){return k(e.target.value.toLowerCase())}})]}),b.length>0&&Object(d.jsx)("div",{className:"flex flex-row flex-wrap gap-3 py-5",children:b.filter((function(e){return e.name.toLowerCase().includes(A)})).map((function(e,t){return Object(d.jsxs)("div",{className:"flex flex-row cursor-pointer w-64 mr-5",onClick:function(){-1===v.indexOf(e.provider_id)&&(N(e),R(!0))},children:[Object(d.jsx)("img",{src:e.icon,className:"w-24 h-24 rounded-l-lg",loading:"lazy"}),Object(d.jsxs)("div",{className:"flex flex-col gap-2 w-full border border-1 border-gray-700 pl-2 rounded-r-lg",children:[Object(d.jsx)("p",{className:"font-bold hover:overflow-clip hover:whitespace-normal hover:break-words",children:e.name}),Object(d.jsxs)("span",{className:"flex rounded-lg px-3 bg-gray-700 text-white items-center w-max",children:[Object(d.jsx)(s.D,{className:"w-5 h-5 mr-1 text-blue-400","aria-hidden":"true"}),e.rating||"-"]}),-1===v.indexOf(e.provider_id)&&Object(d.jsx)("p",{className:"text-blue-400 underline cursor-pointer",children:r("Opinar")})||Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("p",{className:"text-green-400 flex items-center",children:[r("\xa1Ya opinaste!")," ",Object(d.jsx)(s.j,{className:"w-4 h-4 ml-0.5","aria-hidden":"true"})]})})]})]},t)}))})]}),P&&Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:Object(d.jsx)("div",{className:"min-h-screen px-4",children:Object(d.jsx)("div",{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"})})}),children:Object(d.jsx)(f,{reviewModalIsOpen:P,executeRecaptcha:a,setReviewModalIsOpen:R,selectedProvider:O,setSelectedProvider:N,providerList:b,alreadyRecommended:v,setAlreadyRecommended:x})}),0===b.length&&Object(d.jsx)("div",{className:"mx-5 mt-5",children:Object(d.jsx)("div",{className:"flex flex-row flex-wrap gap-3",children:Object(n.a)(Array(25)).map((function(e,t){return Object(d.jsxs)("div",{className:"flex flex-row cursor-pointer w-64 mr-5",children:[Object(d.jsx)("div",{className:"flex-shrink-0 bg-gray-700 w-24 h-24 rounded-l-lg animate-pulse"}),Object(d.jsxs)("div",{className:"flex flex-col gap-2 w-full border border-1 border-gray-700 pl-2 pt-2 rounded-r-lg",children:[Object(d.jsx)("div",{className:"bg-gray-700 w-16 h-5 animate-pulse"}),Object(d.jsx)("div",{className:"rounded-lg px-3 bg-gray-700 w-20 h-5 animate-pulse"}),Object(d.jsx)("div",{className:"bg-gray-700 w-14 h-5 animate-pulse"})]})]},t)}))})})]})}}}]);