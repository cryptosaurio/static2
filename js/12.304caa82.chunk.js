/*! For license information please see 12.304caa82.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[12],{139:function(e,t,r){},140:function(e,t,r){"use strict";var n=r(0),c=r.n(n),o=r(1);function a(e){var t=e.active,r=e.onClick;return Object(o.jsx)("li",{className:"inline-block",onClick:function(){return r&&r()},children:Object(o.jsx)("label",{className:["cursor-pointer block text-4xl text-white",t||"text-gray-700"].join(" "),children:"\u2022"})})}var s=function(e,t){return e.active===t.active};t.a=c.a.memo(a,s)},141:function(e,t,r){"use strict";function n(){return{responsive:{desktop:{breakpoint:{max:9999,min:769},items:2},mobile:{breakpoint:{max:768,min:0},items:1}},fixed:{desktop:{breakpoint:{max:9999,min:0},items:1}}}}r.d(t,"a",(function(){return n}))},143:function(e,t,r){"use strict";var n=r(0),c=r.n(n),o=r(48),a=r(146),s=r.n(a),i=(r(147),r(139),r(52)),l=r(140),p=r(141),u=r(1);function d(e){var t=e.location,r={page:t,country:window.COUNTRY},n=Object(o.useTracking)(r),c=(n.Track,n.trackEvent),a=Object(i.a)(window.COUNTRY,t,"opportunityBanner");return"home"===t&&(a=a.slice(0,1)),(a=a.sort((function(){return.5-Math.random()}))).forEach((function(e){var t={event:"system_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"show"};"production"===window.ENV?c(t):console.log(r,t)})),Object(u.jsx)(s.a,{className:"rolls-carousel",responsive:Object(p.a)().fixed,renderDotsOutside:!0,showDots:a.length>1,infinite:a.length>1,autoPlay:a.length>1,autoPlaySpeed:4e3,customDot:Object(u.jsx)(l.a,{}),arrows:!1,children:a.map((function(e,t){var n={event:"user_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"click"};return Object(u.jsxs)("picture",{onClick:function(){"production"===window.ENV?c(n):console.log(r,n),window.open(e.sponsoredUrl)},children:[Object(u.jsx)("source",{srcSet:e.mobileImgUrl,media:"(max-width: 639px)",width:"400",height:e.mobileImgHeightOverride||"100"}),Object(u.jsx)("source",{srcSet:e.desktopImgUrl,media:"(min-width: 640px)",width:"820",height:e.desktopImgHeightOverride||"100"}),Object(u.jsx)("img",{className:"cursor-pointer mx-auto my-2",src:e.desktopImgUrl,width:"820",height:e.desktopImgHeightOverride||"100"})]},t)}))})}t.a=c.a.memo(d,(function(){return!0}))},153:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var n=r(0),c=r.n(n);function o(e,t,r,n){return new(r||(r=Promise))((function(c,o){function a(e){try{i(n.next(e))}catch(e){o(e)}}function s(e){try{i(n.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}i((n=n.apply(e,t||[])).next())}))}function a(e,t){var r,n,c,o,a={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(c=2&o[0]?n.return:o[0]?n.throw||((c=n.return)&&c.call(n),0):n.next)&&!(c=c.call(n,o[1])).done)return c;switch(n=0,c&&(o=[2&o[0],c.value]),o[0]){case 0:case 1:c=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((c=(c=a.trys).length>0&&c[c.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!c||o[1]>c[0]&&o[1]<c[3])){a.label=o[1];break}if(6===o[0]&&a.label<c[1]){a.label=c[1],c=o;break}if(c&&a.label<c[2]){a.label=c[2],a.ops.push(o);break}c[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=c=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var s,i=function(e){console.warn(e)};(s||(s={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var l=Object(n.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});l.Consumer;function p(e){var t=this,r=e.reCaptchaKey,p=e.useEnterprise,u=void 0!==p&&p,d=e.useRecaptchaNet,m=void 0!==d&&d,h=e.scriptProps,f=e.language,b=e.children,j=Object(n.useState)(null),g=j[0],x=j[1];Object(n.useEffect)((function(){if(r){var e=(null==h?void 0:h.id)||"google-recaptcha-v3";return function(e){var t=e.reCaptchaKey,r=e.language,n=e.onLoad,c=e.useRecaptchaNet,o=e.useEnterprise,a=e.scriptProps,s=void 0===a?{}:a,i=s.nonce,l=void 0===i?"":i,p=s.defer,u=void 0!==p&&p,d=s.async,m=void 0!==d&&d,h=s.id,f=void 0===h?"":h,b=s.appendTo,j=void 0===b?void 0:b,g=f||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(g))n();else{var x=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:o,useRecaptchaNet:c}),w=document.createElement("script");w.id=g,w.src=x+"?render="+t+(r?"&hl="+r:""),l&&(w.nonce=l),w.defer=!!u,w.async=!!m,w.onload=n,("body"===j?document.body:document.getElementsByTagName("head")[0]).appendChild(w)}}({reCaptchaKey:r,useEnterprise:u,useRecaptchaNet:m,scriptProps:h,language:f,onLoad:function(){if(window&&window.grecaptcha){var e=u?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){x(e)}))}else i("<GoogleRecaptchaProvider /> "+s.SCRIPT_NOT_AVAILABLE)},onError:function(){i("Error loading google recaptcha script")}}),function(){!function(e){var t=document.querySelector(".grecaptcha-badge");t&&t.parentNode&&document.body.removeChild(t.parentNode);var r=document.querySelector("#"+e);r&&r.remove(),function(){var e=document.querySelector("script[src^='https://www.gstatic.com/recaptcha/releases']");e&&e.remove()}()}(e)}}i("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[u,m,h,f,r]);var w=Object(n.useCallback)((function(e){return o(t,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:if(!g||!g.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return[4,g.execute(r,{action:e})];case 1:return[2,t.sent()]}}))}))}),[g]),y=Object(n.useMemo)((function(){return{executeRecaptcha:g?w:void 0}}),[w,g]);return c.a.createElement(l.Provider,{value:y},b)}var u=function(){return Object(n.useContext)(l)};function d(e,t){return e(t={exports:{}},t.exports),t.exports}var m="function"==typeof Symbol&&Symbol.for,h=m?Symbol.for("react.element"):60103,f=m?Symbol.for("react.portal"):60106,b=m?Symbol.for("react.fragment"):60107,j=m?Symbol.for("react.strict_mode"):60108,g=m?Symbol.for("react.profiler"):60114,x=m?Symbol.for("react.provider"):60109,w=m?Symbol.for("react.context"):60110,y=m?Symbol.for("react.async_mode"):60111,O=m?Symbol.for("react.concurrent_mode"):60111,v=m?Symbol.for("react.forward_ref"):60112,N=m?Symbol.for("react.suspense"):60113,k=m?Symbol.for("react.suspense_list"):60120,C=m?Symbol.for("react.memo"):60115,S=m?Symbol.for("react.lazy"):60116,_=m?Symbol.for("react.block"):60121,P=m?Symbol.for("react.fundamental"):60117,E=m?Symbol.for("react.responder"):60118,R=m?Symbol.for("react.scope"):60119;function T(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case h:switch(e=e.type){case y:case O:case b:case g:case j:case N:return e;default:switch(e=e&&e.$$typeof){case w:case v:case S:case C:case x:return e;default:return t}}case f:return t}}}function $(e){return T(e)===O}var A={AsyncMode:y,ConcurrentMode:O,ContextConsumer:w,ContextProvider:x,Element:h,ForwardRef:v,Fragment:b,Lazy:S,Memo:C,Portal:f,Profiler:g,StrictMode:j,Suspense:N,isAsyncMode:function(e){return $(e)||T(e)===y},isConcurrentMode:$,isContextConsumer:function(e){return T(e)===w},isContextProvider:function(e){return T(e)===x},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===h},isForwardRef:function(e){return T(e)===v},isFragment:function(e){return T(e)===b},isLazy:function(e){return T(e)===S},isMemo:function(e){return T(e)===C},isPortal:function(e){return T(e)===f},isProfiler:function(e){return T(e)===g},isStrictMode:function(e){return T(e)===j},isSuspense:function(e){return T(e)===N},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===b||e===O||e===g||e===j||e===N||e===k||"object"==typeof e&&null!==e&&(e.$$typeof===S||e.$$typeof===C||e.$$typeof===x||e.$$typeof===w||e.$$typeof===v||e.$$typeof===P||e.$$typeof===E||e.$$typeof===R||e.$$typeof===_)},typeOf:T},M=d((function(e,t){})),F=(M.AsyncMode,M.ConcurrentMode,M.ContextConsumer,M.ContextProvider,M.Element,M.ForwardRef,M.Fragment,M.Lazy,M.Memo,M.Portal,M.Profiler,M.StrictMode,M.Suspense,M.isAsyncMode,M.isConcurrentMode,M.isContextConsumer,M.isContextProvider,M.isElement,M.isForwardRef,M.isFragment,M.isLazy,M.isMemo,M.isPortal,M.isProfiler,M.isStrictMode,M.isSuspense,M.isValidElementType,M.typeOf,d((function(e){e.exports=A}))),U={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},q={};q[F.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},q[F.Memo]=U;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype},154:function(e,t,r){},278:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var n=r(49),c=r(8),o=r(13),a=r(0),s=r(9),i=r(130),l={intl_exchange:[{name:"Binance",icon:"https://graph.facebook.com/binance/picture?type=square",url:"https://www.binance.com/en/register?ref=39537186"},{name:"CEX.IO",icon:"https://graph.facebook.com/cexio/picture?type=square",url:"https://cexio.page.link/NU6Z"},{name:"Coinbase",icon:"https://graph.facebook.com/coinbase/picture?type=square",url:"https://coinbase.com/join/537df5f93bef2f950a000038"},{name:"Crypto.com",icon:"https://graph.facebook.com/cryptocomofficial/picture?type=square",url:"https://crypto.com/exch/w2uwxsynrh"},{name:"Huobi Global",icon:"https://www.huobi.com/favicon.ico",url:"https://www.huobi.com/es-es/topic/invited/?invite_code=hsg57"},{name:"Kraken",icon:"https://graph.facebook.com/KrakenFX/picture?type=square",url:"https://r.kraken.com/c/2546987/744552/10583?u=https%3A%2F%2Fwww.kraken.com/es-es"},{name:"ShapeShift",icon:"https://graph.facebook.com/ShapeShiftPlatform/picture?type=square",url:"https://shapeshift.app.link/share?af=BcN6tWFYwH5njT4E"}],p2p_exchange:[{name:"Binance",icon:"https://graph.facebook.com/binance/picture?type=square",url:"https://www.binance.com/en/register?ref=39537186"},{name:"Hodl Hodl",icon:"https://graph.facebook.com/hhodl/picture?type=square",url:"https://hodlhodl.com/join/R7YQ"},{name:"LocalBitcoins",icon:"https://localbitcoins.com/cached-static/img/touch-icon-144.png",url:"https://localbitcoins.com/?ch=1eq5i"},{name:"LocalCryptos",icon:"https://localcryptos.com/images/favicon-128.png",url:"https://localcryptos.com/r/cryptosaurio"},{name:"Okex",icon:"https://graph.facebook.com/okexofficial/picture?type=square",url:"https://www.okex.com/join/2952709"},{name:"Paxful",icon:"https://graph.facebook.com/paxful/picture?type=square",url:"https://paxful.com/es?r=Dgk4nWx32dJ&track=cryptosaurio"}],swap:[{name:"1inch",icon:"https://1inch.exchange/assets/favicon/apple-touch-icon.png",url:"https://1inch.exchange/#/r/0x4EA94DF39AF882F6160591fe38c001Cc4B683D40"},{name:"Curve",icon:"https://www.curve.fi/apple-touch-icon.png",url:"https://www.curve.fi/"},{name:"FixedFloat",icon:"https://fixedfloat.com/assets/images/favicon.png",url:"https://fixedfloat.com/"},{name:"Kyber",icon:"https://www.kyberswap.com/apple-touch-icon.png",url:"https://www.kyberswap.com/"},{name:"Matcha",icon:"https://matcha.xyz/apple-touch-icon.png",url:"https://matcha.xyz/"},{name:"PancakeSwap",icon:"https://pancakeswap.finance/logo.png",url:"https://pancakeswap.finance/"},{name:"Paraswap",icon:"https://avatars.githubusercontent.com/u/52015910",url:"https://paraswap.io/"},{name:"Uniswap",icon:"https://app.uniswap.org/images/192x192_App_Icon.png",url:"https://app.uniswap.org/"}]};function p(e){return l[e]}var u=r(155),d=r(143),m=r(153),h=(r(154),r(48)),f=r(1);function b(e){return Object(f.jsx)(m.a,{reCaptchaKey:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI",children:Object(f.jsx)(j,Object(o.a)({},e))})}function j(e){var t={page:"tools",country:window.COUNTRY},r=Object(h.useTracking)(t).trackEvent,o=Object(i.a)().t,l=Object(m.b)().executeRecaptcha;Object(a.useEffect)((function(){var e={event:"pageview"};"production"===window.ENV?r(e):console.log(t,e)}),[]),Object(a.useEffect)((function(){e.setCrumbs([])}),[]);var b=Object(a.useState)([]),j=Object(c.a)(b,2),g=j[0],x=j[1],w=Object(a.useState)([]),y=Object(c.a)(w,2),O=y[0],v=y[1],N=Object(a.useState)([]),k=Object(c.a)(N,2),C=k[0],S=k[1];return Object(a.useEffect)((function(){fetch("https://barney.cryptosaurio.com/wallets").then((function(e){return e.json()})).then((function(e){"br"===window.COUNTRY&&(e=e.filter((function(e){return null!==e.content_pt}))),x(e)})).catch((function(){return x([])}))}),[]),Object(a.useEffect)((function(){fetch("br"!==window.COUNTRY?"https://barney.cryptosaurio.com/".concat(window.COUNTRY,"/providers"):"https://barney.cryptossauro.com/".concat(window.COUNTRY,"/providers")).then((function(e){return e.json()})).then((function(e){v(e)})).catch((function(){return v([])}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{location:"tools"}),Object(f.jsxs)("div",{className:"mx-5 mt-5",children:[Object(f.jsx)("h1",{className:"text-2xl",children:o("Wallets")}),Object(f.jsx)("h2",{children:o("Guarda tus criptomonedas en una wallet para que est\xe9n seguras.")})]}),Object(f.jsxs)("div",{className:"grid lg:grid-cols-2 md:grid-flow-row pb-10",children:[g.sort((function(e,t){return t.recommended-e.recommended})).map((function(e,t){return Object(f.jsxs)("a",{className:"m-5",target:"_blank",href:e.url,rel:"sponsored noreferrer",children:[Object(f.jsx)("div",{className:"bg-gray-800 text-green-400 inline-block",children:0===t?o("M\xe1s recomendada"):null}),Object(f.jsxs)("div",{className:["bg-gray-900 bg-opacity-30 grid grid-cols-3 h-full border",0===t?"border-green-400":"border-gray-500"].join(" "),children:[Object(f.jsx)("div",{className:"m-auto flex-shrink-0 w-20 hidden sm:block",children:Object(f.jsx)("img",{loading:"lazy",src:e.icon})}),Object(f.jsx)("div",{className:"m-auto col-span-3 sm:col-span-2",children:Object(f.jsxs)("div",{className:"p-5",children:[Object(f.jsx)("h5",{className:"text-xl font-semibold mb-2 inline align-middle",children:e.name}),e.guarded&&Object(f.jsx)(s.y,{"data-tip":!0,"data-for":"guarded-wallet",className:"inline-block fill-current w-5 h-5 align-text-top mx-1 text-blue-600"})||Object(f.jsx)(s.t,{"data-tip":!0,"data-for":"non-guarded-wallet",className:"inline-block fill-current w-5 h-5 align-text-top mx-1 text-blue-600"}),e.recommended>0&&Object(f.jsx)("p",{className:"text-gray-600",children:e.recommended>1?o("Recomendado por {{amount}} personas.",{amount:e.recommended}):o("Recomendado por 1 persona.")}),null!==e.available_cryptos&&Object(f.jsxs)("p",{className:"mb-4",children:[o("Permite almacenar"),": ",e.available_cryptos.join(", ")]}),Object(f.jsx)("p",{className:"mb-4",children:"br"!==window.COUNTRY?e.content_es:e.content_pt||e.content_es})]})})]}),-1===C.indexOf(e.id)&&Object(f.jsx)("p",{className:"m-auto text-right w-full pr-5 text-blue-400 underline -mt-7",onClick:function(t){t.preventDefault(),function(e){e.recommended+=1,x(Object(n.a)(g)),S([].concat(Object(n.a)(C),[e.id])),l&&l("submit_wallet_recommendation").then((function(t){fetch("https://barney.cryptosaurio.com/wallet",{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e.id,captcha_response:t})}).then((function(){})).catch((function(){}))}))}(e)},children:o("RECOMENDAR")})]},t)})),g.length>0&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(u.a,{place:"right",className:"w-48",effect:"solid",id:"guarded-wallet",children:[Object(f.jsx)("p",{className:"font-bold",children:o("Wallet con custodia")}),Object(f.jsx)("p",{children:o("Un intermediario te facilitar\xe1 el acceso a tus criptomonedas y te ayudar\xe1 a recuperar tu clave si alguna vez te la olvidas.")})]}),Object(f.jsxs)(u.a,{place:"right",className:"w-48",effect:"solid",id:"non-guarded-wallet",children:[Object(f.jsx)("p",{className:"font-bold",children:o("Wallet sin custodia")}),Object(f.jsx)("p",{children:o("No hay intermediarios entre tu y tus criptomonedas. Eres el \xfanico responsable y si pierdes la clave, no podr\xe1s acceder a tus activos.")})]})]}),0===g.length&&Object(n.a)(Array(6)).map((function(e,t){return Object(f.jsx)("div",{className:"m-5 bg-gray-900 bg-opacity-30",children:Object(f.jsxs)("div",{className:"grid grid-cols-3 h-full p-5 border border-gray-500",children:[Object(f.jsx)("div",{className:"m-auto flex-shrink-0 bg-gray-700 h-28 w-28 sm:h-36 sm:w-36 animate-pulse"}),Object(f.jsx)("div",{className:"m-auto col-span-2",children:Object(f.jsxs)("div",{className:"p-5",children:[Object(f.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-32 sm:w-64 h-3"}),Object(f.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-40 sm:w-72 h-3"}),Object(f.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-44 sm:w-80 h-3"}),Object(f.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-44 sm:w-80 h-3"}),Object(f.jsx)("p",{className:"bg-gray-700 animate-pulse w-24 sm:w-64 h-3"})]})})]})},t)}))]}),Object(f.jsxs)("div",{className:"mx-5",children:[Object(f.jsx)("h1",{className:"text-2xl",children:o("Para operaciones en {{country}}",{country:window.COUNTRY_NAME})}),Object(f.jsx)("h2",{children:o("Compra o vende criptomonedas a proveedores en el pa\xeds.")})]}),O.length>0&&Object(f.jsx)("div",{className:"flex flex-row flex-wrap",children:O.filter((function(e){return e.enabled})).map((function(e,t){return Object(f.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(f.jsx)("img",{className:"w-12 rounded-full",loading:"lazy",src:e.icon}),Object(f.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),0===O.length&&Object(f.jsx)("div",{className:"flex flex-row flex-wrap",children:Object(n.a)(Array(6)).map((function(e,t){return Object(f.jsxs)("div",{className:"grid grid-cols-2 w-44 h-20 p-4 m-1",children:[Object(f.jsx)("p",{className:"bg-gray-700 animate-pulse w-12 rounded-full"}),Object(f.jsx)("p",{className:"bg-gray-700 animate-pulse self-center -ml-2 w-24 h-8"})]},t)}))}),Object(f.jsxs)("div",{className:"mx-5 mt-5",children:[Object(f.jsx)("h1",{className:"text-2xl",children:o("Para operaciones en el exterior")}),Object(f.jsx)("h2",{children:o("Compra o vende criptomonedas a proveedores fuera de {{country}}.",{country:window.COUNTRY_NAME})})]}),p("intl_exchange").length>0&&Object(f.jsx)("div",{className:"flex flex-row flex-wrap",children:p("intl_exchange").map((function(e,t){return Object(f.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(f.jsx)("img",{className:"w-12 rounded-full",loading:"lazy",src:e.icon}),Object(f.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),Object(f.jsxs)("div",{className:"mx-5 mt-5",children:[Object(f.jsx)("h1",{className:"text-2xl",children:o("Para operaciones P2P")}),Object(f.jsx)("h2",{children:o("Compra o vende criptomonedas directamente a otras personas.",{country:window.COUNTRY_NAME})})]}),p("p2p_exchange").length>0&&Object(f.jsx)("div",{className:"flex flex-row flex-wrap",children:p("p2p_exchange").map((function(e,t){return Object(f.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(f.jsx)("img",{className:"w-12 rounded-full",loading:"lazy",src:e.icon}),Object(f.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),Object(f.jsxs)("div",{className:"mx-5 mt-5",children:[Object(f.jsx)("h1",{className:"text-2xl",children:o("Para cambiar tus criptomonedas | Swap")}),Object(f.jsx)("h2",{children:o("Intercambia tus criptomonedas por otras al instante.",{country:window.COUNTRY_NAME})})]}),p("swap").length>0&&Object(f.jsx)("div",{className:"flex flex-row flex-wrap",children:p("swap").map((function(e,t){return Object(f.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(f.jsx)("img",{className:"w-12 rounded-full",loading:"lazy",src:e.icon}),Object(f.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))})]})}}}]);