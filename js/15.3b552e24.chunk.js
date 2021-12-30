/*! For license information please see 15.3b552e24.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[15],{175:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r,n){return new(r||(r=Promise))((function(o,c){function a(e){try{i(n.next(e))}catch(e){c(e)}}function s(e){try{i(n.throw(e))}catch(e){c(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}i((n=n.apply(e,t||[])).next())}))}function a(e,t){var r,n,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(c){return function(s){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}var s,i=function(e){console.warn(e)};(s||(s={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var l=Object(n.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});l.Consumer;function u(e){var t=this,r=e.reCaptchaKey,u=e.useEnterprise,d=void 0!==u&&u,p=e.useRecaptchaNet,f=void 0!==p&&p,m=e.scriptProps,b=e.language,h=e.children,y=Object(n.useState)(null),v=y[0],j=y[1];Object(n.useEffect)((function(){if(r){var e=(null==m?void 0:m.id)||"google-recaptcha-v3";return function(e){var t=e.reCaptchaKey,r=e.language,n=e.onLoad,o=e.useRecaptchaNet,c=e.useEnterprise,a=e.scriptProps,s=void 0===a?{}:a,i=s.nonce,l=void 0===i?"":i,u=s.defer,d=void 0!==u&&u,p=s.async,f=void 0!==p&&p,m=s.id,b=void 0===m?"":m,h=s.appendTo,y=void 0===h?void 0:h,v=b||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(v))n();else{var j=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:c,useRecaptchaNet:o}),x=document.createElement("script");x.id=v,x.src=j+"?render="+t+(r?"&hl="+r:""),l&&(x.nonce=l),x.defer=!!d,x.async=!!f,x.onload=n,("body"===y?document.body:document.getElementsByTagName("head")[0]).appendChild(x)}}({reCaptchaKey:r,useEnterprise:d,useRecaptchaNet:f,scriptProps:m,language:b,onLoad:function(){if(window&&window.grecaptcha){var e=d?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){j(e)}))}else i("<GoogleRecaptchaProvider /> "+s.SCRIPT_NOT_AVAILABLE)},onError:function(){i("Error loading google recaptcha script")}}),function(){!function(e){var t=document.querySelector(".grecaptcha-badge");t&&t.parentNode&&document.body.removeChild(t.parentNode);var r=document.querySelector("#"+e);r&&r.remove(),function(){var e=document.querySelector("script[src^='https://www.gstatic.com/recaptcha/releases']");e&&e.remove()}()}(e)}}i("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[d,f,m,b,r]);var x=Object(n.useCallback)((function(e){return c(t,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:if(!v||!v.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return[4,v.execute(r,{action:e})];case 1:return[2,t.sent()]}}))}))}),[v]),w=Object(n.useMemo)((function(){return{executeRecaptcha:v?x:void 0}}),[x,v]);return o.a.createElement(l.Provider,{value:w},h)}var d=function(){return Object(n.useContext)(l)};function p(e,t){return e(t={exports:{}},t.exports),t.exports}var f="function"==typeof Symbol&&Symbol.for,m=f?Symbol.for("react.element"):60103,b=f?Symbol.for("react.portal"):60106,h=f?Symbol.for("react.fragment"):60107,y=f?Symbol.for("react.strict_mode"):60108,v=f?Symbol.for("react.profiler"):60114,j=f?Symbol.for("react.provider"):60109,x=f?Symbol.for("react.context"):60110,w=f?Symbol.for("react.async_mode"):60111,g=f?Symbol.for("react.concurrent_mode"):60111,O=f?Symbol.for("react.forward_ref"):60112,S=f?Symbol.for("react.suspense"):60113,N=f?Symbol.for("react.suspense_list"):60120,C=f?Symbol.for("react.memo"):60115,P=f?Symbol.for("react.lazy"):60116,R=f?Symbol.for("react.block"):60121,$=f?Symbol.for("react.fundamental"):60117,E=f?Symbol.for("react.responder"):60118,k=f?Symbol.for("react.scope"):60119;function M(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case m:switch(e=e.type){case w:case g:case h:case v:case y:case S:return e;default:switch(e=e&&e.$$typeof){case x:case O:case P:case C:case j:return e;default:return t}}case b:return t}}}function A(e){return M(e)===g}var T={AsyncMode:w,ConcurrentMode:g,ContextConsumer:x,ContextProvider:j,Element:m,ForwardRef:O,Fragment:h,Lazy:P,Memo:C,Portal:b,Profiler:v,StrictMode:y,Suspense:S,isAsyncMode:function(e){return A(e)||M(e)===w},isConcurrentMode:A,isContextConsumer:function(e){return M(e)===x},isContextProvider:function(e){return M(e)===j},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===m},isForwardRef:function(e){return M(e)===O},isFragment:function(e){return M(e)===h},isLazy:function(e){return M(e)===P},isMemo:function(e){return M(e)===C},isPortal:function(e){return M(e)===b},isProfiler:function(e){return M(e)===v},isStrictMode:function(e){return M(e)===y},isSuspense:function(e){return M(e)===S},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===h||e===g||e===v||e===y||e===S||e===N||"object"==typeof e&&null!==e&&(e.$$typeof===P||e.$$typeof===C||e.$$typeof===j||e.$$typeof===x||e.$$typeof===O||e.$$typeof===$||e.$$typeof===E||e.$$typeof===k||e.$$typeof===R)},typeOf:M},L=p((function(e,t){})),_=(L.AsyncMode,L.ConcurrentMode,L.ContextConsumer,L.ContextProvider,L.Element,L.ForwardRef,L.Fragment,L.Lazy,L.Memo,L.Portal,L.Profiler,L.StrictMode,L.Suspense,L.isAsyncMode,L.isConcurrentMode,L.isContextConsumer,L.isContextProvider,L.isElement,L.isForwardRef,L.isFragment,L.isLazy,L.isMemo,L.isPortal,L.isProfiler,L.isStrictMode,L.isSuspense,L.isValidElementType,L.typeOf,p((function(e){e.exports=T}))),F={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},G={};G[_.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},G[_.Memo]=F;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype},176:function(e,t,r){},268:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var n=r(49),o=r(8),c=r(0),a=r.n(c),s=r(9),i=r(131),l=r(175),u=(r(176),r(48)),d=r(1),p=a.a.lazy((function(){return Promise.all([r.e(8),r.e(14)]).then(r.bind(null,216))}));function f(){return Object(d.jsx)(l.a,{reCaptchaKey:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI",children:Object(d.jsx)(m,{})})}function m(){var e={page:"review",country:window.COUNTRY},t=Object(u.useTracking)(e).trackEvent,r=Object(i.a)().t,a=Object(l.b)().executeRecaptcha;Object(c.useEffect)((function(){var r={event:"pageview"};"production"===window.ENV?t(r):console.log(e,r)}),[]);var f=Object(c.useState)([]),m=Object(o.a)(f,2),b=m[0],h=m[1],y=Object(c.useState)([]),v=Object(o.a)(y,2),j=v[0],x=v[1],w=Object(c.useState)(null),g=Object(o.a)(w,2),O=g[0],S=g[1],N=Object(c.useState)(!1),C=Object(o.a)(N,2),P=C[0],R=C[1];return Object(c.useEffect)((function(){fetch("https://barney.cryptosaurio.com/".concat(window.COUNTRY,"/reviews/summarized-reviews-info")).then((function(e){return e.json()})).then((function(e){h(e.filter((function(e){return 1===e.enabled})))})).catch((function(){h([])}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"mx-5 mt-5",children:[Object(d.jsx)("h1",{className:"text-2xl",children:r("Opinar")}),Object(d.jsx)("h2",{className:"text-lg pt-3",children:r("\xbfCompraste o vendiste cripto en alguna de estas plataformas? Nuestros usuarios quieren conocer tu experiencia para tomar buenas decisiones.")})]}),b.length>0&&Object(d.jsx)("div",{className:"mx-5 mt-5",children:Object(d.jsx)("div",{className:"flex flex-row flex-wrap gap-3 p-2",children:b.map((function(e,t){return Object(d.jsxs)("div",{className:"flex flex-row cursor-pointer w-60 m-5",onClick:function(){-1===j.indexOf(e.provider_id)&&(S(e),R(!0))},children:[Object(d.jsx)("img",{src:e.icon,className:"w-24 h-24",loading:"lazy"}),Object(d.jsxs)("div",{className:"flex flex-col gap-2 w-full border border-1 border-gray-700 pl-2",children:[Object(d.jsx)("p",{className:"font-bold hover:overflow-clip hover:whitespace-normal hover:break-words",children:e.name}),Object(d.jsxs)("span",{className:"flex rounded-lg px-3 bg-gray-700 text-white items-center w-max",children:[Object(d.jsx)(s.A,{className:"w-5 h-5 mr-1 text-blue-400","aria-hidden":"true"}),e.rating||"-"]}),-1===j.indexOf(e.provider_id)&&Object(d.jsx)("p",{className:"text-blue-400 underline cursor-pointer",children:r("Opinar")})||Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("p",{className:"text-green-400 flex items-center",children:[r("\xa1Ya opinaste!")," ",Object(d.jsx)(s.h,{className:"w-4 h-4 ml-0.5","aria-hidden":"true"})]})})]})]},t)}))})}),P&&Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:Object(d.jsx)("div",{className:"min-h-screen px-4",children:Object(d.jsx)("div",{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"})})}),children:Object(d.jsx)(p,{reviewModalIsOpen:P,executeRecaptcha:a,setReviewModalIsOpen:R,selectedProvider:O,setSelectedProvider:S,providerList:b,alreadyRecommended:j,setAlreadyRecommended:x})}),0===b.length&&Object(d.jsx)("div",{className:"mx-5 mt-5",children:Object(d.jsx)("div",{className:"flex flex-row flex-wrap gap-3 p-2",children:Object(n.a)(Array(25)).map((function(e,t){return Object(d.jsxs)("div",{className:"flex flex-row cursor-pointer w-60 m-5",children:[Object(d.jsx)("div",{className:"flex-shrink-0 bg-gray-700 h-24 w-24 animate-pulse"}),Object(d.jsxs)("div",{className:"flex flex-col gap-2 w-full border border-1 border-gray-700 pl-2 pt-2",children:[Object(d.jsx)("div",{className:"bg-gray-700 w-16 h-5"}),Object(d.jsx)("div",{className:"rounded-lg px-3 bg-gray-700 w-20 h-5"}),Object(d.jsx)("div",{className:"bg-gray-700 w-14 h-5"})]})]},t)}))})})]})}}}]);