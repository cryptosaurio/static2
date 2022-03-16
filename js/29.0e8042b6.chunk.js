/*! For license information please see 29.0e8042b6.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[29],{127:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var a=r(144),n=r(12),o=r(0),c=r.n(o),s=r(34),i=r(153),l=r(136),u=r(188),d=r(160),p=r(2),m=c.a.lazy((function(){return Promise.all([r.e(5),r.e(7)]).then(r.bind(null,226))}));function b(){return Object(p.jsx)(u.a,{reCaptchaKey:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI",children:Object(p.jsx)(f,{})})}function f(){var e={page:"providers-ranking",country:window.COUNTRY},t=Object(d.useTracking)(e).trackEvent,r=Object(l.a)().t,c=Object(u.b)().executeRecaptcha;Object(o.useEffect)((function(){var r={event:"pageview"};"production"===window.ENV?t(r):console.log(e,r)}),[]);var b=Object(o.useState)([]),f=Object(n.a)(b,2),g=f[0],j=f[1],x=Object(o.useState)(null),h=Object(n.a)(x,2),y=h[0],v=h[1],w=Object(o.useState)(null),O=Object(n.a)(w,2),N=O[0],S=O[1],_=Object(o.useState)(!1),C=Object(n.a)(_,2),P=C[0],R=C[1],k=Object(o.useState)(""),E=Object(n.a)(k,2),$=E[0],A=E[1];return Object(o.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/summarized-reviews-info?merge_p2p=true"):"".concat(window.BARNEY_BR_API_URL,"/reviews/summarized-reviews-info?merge_p2p=true")).then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return 1===e.enabled})).sort((function(e,t){return t.rating-e.rating})),r=t.filter((function(e){return-1===e.provider_id.indexOf("p2p")}));j(t);var n=t.filter((function(e){return e.count>9}))[0],o=Object(a.a)(t).filter((function(e){return e.count>9})).sort((function(e,t){return t.average_support_rating-e.average_support_rating}))[0],c=Object(a.a)(r).filter((function(e){return e.count>9})).sort((function(e,t){return t.average_transfer_speed_rating-e.average_transfer_speed_rating}))[0],s=Object(a.a)(t).filter((function(e){return e.count>9})).sort((function(e,t){return t.average_usability_rating-e.average_usability_rating}))[0],i=Object(a.a)(r).filter((function(e){return e.count>9})).sort((function(e,t){return t.average_arbitrage_quality-e.average_arbitrage_quality}))[0],l=Object(a.a)(t).filter((function(e){return e.count>9})).sort((function(e,t){return t.count-e.count}))[0];v({overall:n,support:o,transferSpeed:c,usability:s,arbitrageQuality:i,mostReviewed:l})})).catch((function(){j([])}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"mx-5 mt-5",children:[Object(p.jsx)("h1",{className:"text-2xl",children:r("Ranking")}),Object(p.jsx)("h2",{className:"text-lg pt-3",children:r("\xbfTe preguntabas cu\xe1l es la mejor plataforma donde comprar criptomonedas?")}),Object(p.jsx)("h2",{className:"text-lg pt-3",children:r("Para ayudarte a decidir, ordenamos las plataformas de {{countryName}} seg\xfan las opiniones de nuestros usuarios. \xa1An\xedmate tu tambi\xe9n y suma tu experiencia!",{countryName:window.COUNTRY_NAME})})]}),y&&Object(p.jsxs)("div",{className:"grid md:grid-cols-4 gap-5 text-center p-4",children:[y.overall&&Object(p.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(p.jsxs)(s.b,{to:"".concat(r("/opiniones/")).concat(y.overall.provider_id),children:[Object(p.jsx)("img",{src:"/static/img/overall-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(p.jsxs)("h2",{children:["".concat(r("Plataforma")," ").concat(r("con"))," ",Object(p.jsx)("p",{className:"font-bold",children:r("mejor promedio")})]})]}),Object(p.jsx)("a",{className:"text-blue-400",href:y.overall.url,target:"_blank",rel:"sponsored noreferrer",children:y.overall.name})]}),y.mostReviewed&&Object(p.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(p.jsxs)(s.b,{to:"".concat(r("/opiniones/")).concat(y.mostReviewed.provider_id),children:[Object(p.jsx)("img",{src:"/static/img/most-reviews-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(p.jsxs)("h2",{children:["".concat(r("Plataforma")," ").concat(r("con"))," ",Object(p.jsx)("p",{className:"font-bold",children:"".concat(r("m\xe1s")," ").concat(r("opiniones"))})]})]}),Object(p.jsx)("a",{className:"text-blue-400",href:y.mostReviewed.url,target:"_blank",rel:"sponsored noreferrer",children:y.mostReviewed.name})]}),y.arbitrageQuality&&Object(p.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(p.jsxs)(s.b,{to:"".concat(r("/opiniones/")).concat(y.arbitrageQuality.provider_id),children:[Object(p.jsx)("img",{src:"/static/img/arbitrage-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(p.jsxs)("h2",{children:["".concat(r("Plataforma")," ").concat(r("m\xe1s"))," ",Object(p.jsx)("p",{className:"font-bold",children:r("recomendada para arbitrar")})]})]}),Object(p.jsx)("a",{className:"text-blue-400",href:y.arbitrageQuality.url,target:"_blank",rel:"sponsored noreferrer",children:y.arbitrageQuality.name})]}),y.transferSpeed&&Object(p.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(p.jsxs)(s.b,{to:"".concat(r("/opiniones/")).concat(y.transferSpeed.provider_id),children:[Object(p.jsx)("img",{src:"/static/img/transfer-speed-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(p.jsxs)("h2",{children:[r("Plataforma")," ",Object(p.jsx)("p",{className:"font-bold",children:r("m\xe1s r\xe1pida")})]})]}),Object(p.jsx)("a",{className:"text-blue-400",href:y.transferSpeed.url,target:"_blank",rel:"sponsored noreferrer",children:y.transferSpeed.name})]}),y.usability&&Object(p.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(p.jsxs)(s.b,{to:"".concat(r("/opiniones/")).concat(y.usability.provider_id),children:[Object(p.jsx)("img",{src:"/static/img/usability-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(p.jsxs)("h2",{children:[r("Plataforma")," ",Object(p.jsx)("p",{className:"font-bold",children:r("m\xe1s f\xe1cil de usar")})]})]}),Object(p.jsx)("a",{className:"text-blue-400",href:y.usability.url,target:"_blank",rel:"sponsored noreferrer",children:y.usability.name})]}),y.support&&Object(p.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(p.jsxs)(s.b,{to:"".concat(r("/opiniones/")).concat(y.support.provider_id),children:[Object(p.jsx)("img",{src:"/static/img/support-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(p.jsxs)("h2",{children:["".concat(r("Plataforma")," ").concat(r("con"))," ",Object(p.jsx)("p",{className:"font-bold",children:r("mejor atenci\xf3n")})]})]}),Object(p.jsx)("a",{className:"text-blue-400",href:y.support.url,target:"_blank",rel:"sponsored noreferrer",children:y.support.name})]})]}),!y&&Object(p.jsxs)("div",{className:"grid md:grid-cols-4 gap-5 text-center p-4",children:[Object(p.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(p.jsx)("div",{className:"w-20 h-20 mx-auto bg-gray-800 animate-pulse"}),Object(p.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse mx-auto"}),Object(p.jsx)("div",{className:"bg-gray-800 w-48 h-4 animate-pulse mx-auto mb-1"}),Object(p.jsx)("div",{className:"bg-gray-800 w-14 h-4 animate-pulse mx-auto"})]}),Object(p.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(p.jsx)("div",{className:"w-20 h-20 mx-auto bg-gray-800 animate-pulse"}),Object(p.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse mx-auto"}),Object(p.jsx)("div",{className:"bg-gray-800 w-48 h-4 animate-pulse mx-auto mb-1"}),Object(p.jsx)("div",{className:"bg-gray-800 w-14 h-4 animate-pulse mx-auto"})]}),Object(p.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(p.jsx)("div",{className:"w-20 h-20 mx-auto bg-gray-800 animate-pulse"}),Object(p.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse mx-auto"}),Object(p.jsx)("div",{className:"bg-gray-800 w-48 h-4 animate-pulse mx-auto mb-1"}),Object(p.jsx)("div",{className:"bg-gray-800 w-14 h-4 animate-pulse mx-auto"})]}),Object(p.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(p.jsx)("div",{className:"w-20 h-20 mx-auto bg-gray-800 animate-pulse"}),Object(p.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse mx-auto"}),Object(p.jsx)("div",{className:"bg-gray-800 w-48 h-4 animate-pulse mx-auto mb-1"}),Object(p.jsx)("div",{className:"bg-gray-800 w-14 h-4 animate-pulse mx-auto"})]}),Object(p.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(p.jsx)("div",{className:"w-20 h-20 mx-auto bg-gray-800 animate-pulse"}),Object(p.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse mx-auto"}),Object(p.jsx)("div",{className:"bg-gray-800 w-48 h-4 animate-pulse mx-auto mb-1"}),Object(p.jsx)("div",{className:"bg-gray-800 w-14 h-4 animate-pulse mx-auto"})]}),Object(p.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(p.jsx)("div",{className:"w-20 h-20 mx-auto bg-gray-800 animate-pulse"}),Object(p.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse mx-auto"}),Object(p.jsx)("div",{className:"bg-gray-800 w-48 h-4 animate-pulse mx-auto mb-1"}),Object(p.jsx)("div",{className:"bg-gray-800 w-14 h-4 animate-pulse mx-auto"})]})]}),Object(p.jsxs)("div",{className:"mx-5 mt-5",children:[Object(p.jsxs)("div",{className:"relative text-gray-600 focus-within:text-gray-400",children:[Object(p.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:Object(p.jsx)("button",{className:"p-1 focus:outline-none focus:shadow-outline",children:Object(p.jsx)(i.u,{className:"w-5 h-5"})})}),Object(p.jsx)("input",{type:"search",name:"q",className:"py-2 w-56 text-sm text-white bg-gray-800 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:r("Buscar una plataforma"),autoComplete:"off",value:$,onChange:function(e){return A(e.target.value.toLowerCase())}})]}),g.length>0&&Object(p.jsx)("div",{className:"flex flex-row flex-wrap gap-3 py-5",children:g.filter((function(e){return e.name.toLowerCase().includes($)})).map((function(e,t){return Object(p.jsxs)("div",{className:"flex flex-row w-72",children:[Object(p.jsx)("div",{className:"text-8xl font-extrabold text-gray-700 w-28 mr-1 text-right flex-shrink-0",children:t+1}),Object(p.jsxs)("div",{className:"flex flex-col gap-2 w-full border border-1 border-gray-700 pl-2 rounded-r-lg self-end py-2",children:[Object(p.jsx)("a",{href:e.url,target:"_blank",rel:"sponsored noreferrer",className:"font-bold hover:overflow-clip hover:whitespace-normal hover:break-words",children:e.name}),Object(p.jsxs)("span",{className:"flex rounded-lg px-3 bg-gray-700 text-white items-center w-max",children:[Object(p.jsx)(i.z,{className:"w-5 h-5 mr-1 text-blue-400","aria-hidden":"true"}),e.rating||"-"]}),e.rating&&Object(p.jsx)(s.b,{className:"text-blue-400 underline cursor-pointer",to:"".concat(r("/opiniones/")).concat(e.provider_id),children:1==e.count?r("Ver {{reviewCount}} opinion",{reviewCount:e.count}):r("Ver {{reviewCount}} opiniones",{reviewCount:e.count})})||Object(p.jsx)("p",{className:"text-blue-400 underline cursor-pointer",onClick:function(){S(e),R(!0)},children:r("Opinar")})]})]},t)}))})]}),P&&Object(p.jsx)(o.Suspense,{fallback:Object(p.jsx)("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:Object(p.jsx)("div",{className:"min-h-screen px-4",children:Object(p.jsx)("div",{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"})})}),children:Object(p.jsx)(m,{reviewModalIsOpen:P,executeRecaptcha:c,setReviewModalIsOpen:R,selectedProvider:N,setSelectedProvider:S,providerList:g,alreadyRecommended:[],setAlreadyRecommended:function(){}})}),0===g.length&&Object(p.jsx)("div",{className:"mx-5 mt-5",children:Object(p.jsx)("div",{className:"flex flex-row flex-wrap gap-3",children:Object(a.a)(Array(25)).map((function(e,t){return Object(p.jsxs)("div",{className:"flex flex-row cursor-pointer w-72",children:[Object(p.jsx)("div",{className:"text-8xl font-extrabold text-gray-700 w-28 mr-1 text-right flex-shrink-0 animate-pulse",children:t+1}),Object(p.jsxs)("div",{className:"flex flex-col gap-2 w-full border border-1 border-gray-700 pl-2 pt-3 pb-4 rounded-r-lg",children:[Object(p.jsx)("div",{className:"bg-gray-700 w-28 h-4 animate-pulse"}),Object(p.jsx)("div",{className:"rounded-lg px-3 bg-gray-700 w-20 h-6 mt-0.5 mb-1 animate-pulse"}),Object(p.jsx)("div",{className:"bg-gray-700 w-32 h-5 animate-pulse -mb-1.5"})]})]},t)}))})})]})}},144:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(26);var n=r(168),o=r(22);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||Object(n.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},168:function(e,t,r){"use strict";function a(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r.d(t,"a",(function(){return a}))},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r,a){return new(r||(r=Promise))((function(n,o){function c(e){try{i(a.next(e))}catch(e){o(e)}}function s(e){try{i(a.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}i((a=a.apply(e,t||[])).next())}))}function c(e,t){var r,a,n,o,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,a=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!((n=(n=c.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){c.label=o[1];break}if(6===o[0]&&c.label<n[1]){c.label=n[1],n=o;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(o);break}n[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var s,i=function(e){console.warn(e)};(s||(s={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var l=Object(a.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});l.Consumer;function u(e){var t=this,r=e.reCaptchaKey,u=e.useEnterprise,d=void 0!==u&&u,p=e.useRecaptchaNet,m=void 0!==p&&p,b=e.scriptProps,f=e.language,g=e.children,j=Object(a.useState)(null),x=j[0],h=j[1];Object(a.useEffect)((function(){if(r){var e=(null==b?void 0:b.id)||"google-recaptcha-v3";return function(e){var t=e.reCaptchaKey,r=e.language,a=e.onLoad,n=e.useRecaptchaNet,o=e.useEnterprise,c=e.scriptProps,s=void 0===c?{}:c,i=s.nonce,l=void 0===i?"":i,u=s.defer,d=void 0!==u&&u,p=s.async,m=void 0!==p&&p,b=s.id,f=void 0===b?"":b,g=s.appendTo,j=void 0===g?void 0:g,x=f||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(x))a();else{var h=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:o,useRecaptchaNet:n}),y=document.createElement("script");y.id=x,y.src=h+"?render="+t+(r?"&hl="+r:""),l&&(y.nonce=l),y.defer=!!d,y.async=!!m,y.onload=a,("body"===j?document.body:document.getElementsByTagName("head")[0]).appendChild(y)}}({reCaptchaKey:r,useEnterprise:d,useRecaptchaNet:m,scriptProps:b,language:f,onLoad:function(){if(window&&window.grecaptcha){var e=d?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){h(e)}))}else i("<GoogleRecaptchaProvider /> "+s.SCRIPT_NOT_AVAILABLE)},onError:function(){i("Error loading google recaptcha script")}}),function(){!function(e){var t=document.querySelector(".grecaptcha-badge");t&&t.parentNode&&document.body.removeChild(t.parentNode);var r=document.querySelector("#"+e);r&&r.remove(),function(){var e=document.querySelector("script[src^='https://www.gstatic.com/recaptcha/releases']");e&&e.remove()}()}(e)}}i("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[d,m,b,f,r]);var y=Object(a.useCallback)((function(e){return o(t,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:if(!x||!x.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return[4,x.execute(r,{action:e})];case 1:return[2,t.sent()]}}))}))}),[x]),v=Object(a.useMemo)((function(){return{executeRecaptcha:x?y:void 0}}),[y,x]);return n.a.createElement(l.Provider,{value:v},g)}var d=function(){return Object(a.useContext)(l)};function p(e,t){return e(t={exports:{}},t.exports),t.exports}var m="function"==typeof Symbol&&Symbol.for,b=m?Symbol.for("react.element"):60103,f=m?Symbol.for("react.portal"):60106,g=m?Symbol.for("react.fragment"):60107,j=m?Symbol.for("react.strict_mode"):60108,x=m?Symbol.for("react.profiler"):60114,h=m?Symbol.for("react.provider"):60109,y=m?Symbol.for("react.context"):60110,v=m?Symbol.for("react.async_mode"):60111,w=m?Symbol.for("react.concurrent_mode"):60111,O=m?Symbol.for("react.forward_ref"):60112,N=m?Symbol.for("react.suspense"):60113,S=m?Symbol.for("react.suspense_list"):60120,_=m?Symbol.for("react.memo"):60115,C=m?Symbol.for("react.lazy"):60116,P=m?Symbol.for("react.block"):60121,R=m?Symbol.for("react.fundamental"):60117,k=m?Symbol.for("react.responder"):60118,E=m?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case b:switch(e=e.type){case v:case w:case g:case x:case j:case N:return e;default:switch(e=e&&e.$$typeof){case y:case O:case C:case _:case h:return e;default:return t}}case f:return t}}}function A(e){return $(e)===w}var M={AsyncMode:v,ConcurrentMode:w,ContextConsumer:y,ContextProvider:h,Element:b,ForwardRef:O,Fragment:g,Lazy:C,Memo:_,Portal:f,Profiler:x,StrictMode:j,Suspense:N,isAsyncMode:function(e){return A(e)||$(e)===v},isConcurrentMode:A,isContextConsumer:function(e){return $(e)===y},isContextProvider:function(e){return $(e)===h},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===b},isForwardRef:function(e){return $(e)===O},isFragment:function(e){return $(e)===g},isLazy:function(e){return $(e)===C},isMemo:function(e){return $(e)===_},isPortal:function(e){return $(e)===f},isProfiler:function(e){return $(e)===x},isStrictMode:function(e){return $(e)===j},isSuspense:function(e){return $(e)===N},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===g||e===w||e===x||e===j||e===N||e===S||"object"==typeof e&&null!==e&&(e.$$typeof===C||e.$$typeof===_||e.$$typeof===h||e.$$typeof===y||e.$$typeof===O||e.$$typeof===R||e.$$typeof===k||e.$$typeof===E||e.$$typeof===P)},typeOf:$},T=p((function(e,t){})),L=(T.AsyncMode,T.ConcurrentMode,T.ContextConsumer,T.ContextProvider,T.Element,T.ForwardRef,T.Fragment,T.Lazy,T.Memo,T.Portal,T.Profiler,T.StrictMode,T.Suspense,T.isAsyncMode,T.isConcurrentMode,T.isContextConsumer,T.isContextProvider,T.isElement,T.isForwardRef,T.isFragment,T.isLazy,T.isMemo,T.isPortal,T.isProfiler,T.isStrictMode,T.isSuspense,T.isValidElementType,T.typeOf,p((function(e){e.exports=M}))),z={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},I={};I[L.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},I[L.Memo]=z;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype}}]);