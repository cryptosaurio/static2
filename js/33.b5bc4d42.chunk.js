(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[33],{185:function(e,s,t){"use strict";t.d(s,"a",(function(){return a}));var i=t(172);function a(e,s){if(null==e)return{};var t,a,c=Object(i.a)(e,s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}},207:function(e,s,t){"use strict";t.d(s,"a",(function(){return l}));var i=t(142),a=t(185),c=(t(0),t(34)),n=t(2),r=["children","to","condition"];function l(e){var s=e.children,t=e.to,l=e.condition,d=Object(a.a)(e,r);return l&&t?Object(n.jsx)(c.b,Object(i.a)(Object(i.a)({to:t},d),{},{children:s})):Object(n.jsx)("a",Object(i.a)(Object(i.a)({href:t},d),{},{children:s}))}},331:function(e,s,t){"use strict";t.r(s);var i=t(142),a=t(145),c=t(150),n=t(0),r=t.n(n),l=t(134),d=t(173),o=t.n(d),p=t(34),m=t(206),j=t(153),b=t(195),f=t(168),x=t(158),h=t(207),O=t(167),u=t(2);function w(e){var s=e.contextualTrackingData,t=e.crypto,n=e.coinStats,d=e.coinStatsCryptos,w=e.pricesData,g=e.selectedCurrency,v=e.showProviderIcon,N=e.providerDataExpandedByType,y=e.setProviderDataExpandedByType,_=e.providersExtraData,k=e.setTempSelectedCurrency,C=e.setTempBlockedCryptos,U=e.setTempBlockedProviders,P=e.setTempBlockedP2PProviders,T=e.setTempBlockedBlockchains,E=e.blockedCryptos,F=e.blockedProviders,S=e.blockedP2PProviders,D=e.blockedBlockchains,I=e.setPreferencesModalIsOpen,A=(e.activeCryptoTable,Object(l.a)().t),B=Object(j.useTracking)(s).trackEvent;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"bg-gray-600",children:Object(u.jsx)("div",{className:"py-3 px-3 sm:px-6 lg:px-8",children:Object(u.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(u.jsxs)("div",{className:"grid grid-flow-row",children:[Object(u.jsxs)("span",{className:"text-white flex items-center",children:[Object(u.jsx)("img",{loading:"lazy",className:"w-5 mr-1",src:Object(x.a)(t.toUpperCase())&&Object(x.a)(t.toUpperCase()).icon||"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),Object(u.jsx)("h3",{className:"text-lg",children:Object(x.a)(t.toUpperCase())&&Object(x.a)(t.toUpperCase()).name||t.toUpperCase()})]}),n[t]&&n[t].price&&Object(u.jsxs)("div",{className:"flex my-1",children:[Object(u.jsx)("p",{className:"font-bold",children:n[t].price}),Object(u.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",n[t].price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:n[t].price_change_percentage_24h}),Object(u.jsx)(p.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(x.a)(t).name.split(" ").join("-").toLowerCase()),children:A("Ver estad\xedsticas")})]})||d&&d.indexOf(t)>-1&&Object(u.jsxs)("div",{className:"flex my-1",children:[Object(u.jsx)("div",{className:"self-center animate-pulse bg-gray-900 w-24 sm:w-24 h-5"}),Object(u.jsx)("div",{className:"self-center mx-3 px-2 rounded-full animate-pulse bg-gray-900 w-12 sm:w-12 h-6"}),Object(u.jsx)(p.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(x.a)(t).name.split(" ").join("-").toLowerCase()),children:A("Ver estad\xedsticas")})]})||d&&-1===d.indexOf(t)&&Object(u.jsx)("div",{className:"flex my-1",children:Object(u.jsx)(p.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(x.a)(t).name.split(" ").join("-").toLowerCase()),children:A("Ver estad\xedsticas")})})]})})})}),w&&(!(t.toUpperCase()in w)||w[t.toUpperCase()]&&"ask"in w[t.toUpperCase()]&&"bid"in w[t.toUpperCase()]&&w[t.toUpperCase()].ask.length>0&&w[t.toUpperCase()].bid.length>0&&w[t.toUpperCase()].ask.filter((function(e){return R(e,t)})).length>0&&w[t.toUpperCase()].bid.filter((function(e){return R(e,t)})).length>0)&&Object(u.jsx)(o.a,{className:"align-middle",responsive:Object(f.a)().responsive,arrows:!1,showDots:!0,customDot:Object(u.jsx)(O.a,{}),children:Object(a.a)(Array("ask","bid")).map((function(e,s){return Object(u.jsx)("div",{className:"py-2 overflow-x-auto no-scrollbar",children:Object(u.jsxs)("table",{className:"mt-1 m-auto",children:[Object(u.jsxs)("thead",{children:[Object(u.jsx)("tr",{children:Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===e&&A("COMPRAS A")||A("VENDES A")})})}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(u.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:A("PRECIO")}),Object(u.jsx)("th",{scope:"col"})]})]}),Object(u.jsx)("tbody",{children:w&&w[t.toUpperCase()]&&w[t.toUpperCase()][e]&&w[t.toUpperCase()][e].filter((function(e){return R(e,t)})).map((function(s,a){var n,l,d,o,j,f,O,w,k,C,U,P,T,E,F,S,D,I,R,V,z,Y,J,L,M,q,G;return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsxs)("tr",{className:"pt-1 sm:pt-3",children:[Object(u.jsx)("td",{className:["cursor-pointer min-w-min",N[t][e].indexOf(s.fields.id)>-1?"mt-1 sm:mt-3":""].join(" "),children:Object(u.jsxs)(h.a,{condition:s.fields.id.indexOf("p2p")>-1&&g&&g in s.fields&&e in s.fields[g],className:"grid grid-flow-col",to:s.fields.url,target:-1===s.fields.id.indexOf("p2p")&&g&&g in s.fields&&e in s.fields[g]?"_blank":"_self",rel:-1===s.fields.id.indexOf("p2p")&&g&&g in s.fields&&e in s.fields[g]?"sponsored noreferrer":void 0,children:[v&&Object(u.jsx)("img",{loading:"lazy",className:"w-5 sm:w-7 mr-2 self-center",src:s.fields.icon,"data-tip":!0,"data-for":s.fields.name}),Object(u.jsx)("div",{className:"w-44 text-md self-center",children:Object(u.jsxs)("span",{className:"flex",children:[Object(u.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:s.fields.name}),s.fields.info_access&&Object(u.jsx)(c.u,{onClick:function(e){B({event:"user_action",event_category:"".concat(s.fields.id,"_home_info_access"),event_label:"click"}),window.open(s.fields.info_access_url),e.preventDefault()},className:"w-6 h-6 pl-1 cursor-pointer text-blue-500","aria-hidden":"true"},a),s.fields.available_blockchains&&s.fields.available_blockchains.map((function(e,i){return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)(m.a,{place:"right",className:"w-48",effect:"solid",id:"".concat(s.fields.id,"-").concat(t,"-").concat(e),children:A("{{providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:s.fields.name,blockchainName:Object(b.a)(e).name})}),Object(u.jsx)("img",{loading:"lazy",src:Object(b.a)(e).icon,className:"pl-1 w-4 h-4 self-center ".concat(e," cursor-pointer"),"data-tip":!0,"data-for":"".concat(s.fields.id,"-").concat(t,"-").concat(e)})]},i)})),("ask"===e&&s.fields.deposits_allowed&&(!1===s.fields.fiat_deposits_operating_now||!1===s.fields.crypto_withdrawals_operating_now)||"bid"===e&&s.fields.withdrawals_allowed&&(!1===s.fields.fiat_withdrawals_operating_now||!1===s.fields.crypto_deposits_operating_now))&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(c.x,{className:"text-indigo-500 w-4 h-4 self-center pl-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(s.fields.id,"-").concat(t,"-").concat(e)}),Object(u.jsx)(m.a,{place:"right",className:"w-48",effect:"solid",id:"".concat(s.fields.id,"-").concat(t,"-").concat(e),children:"ask"===e&&(!1===s.fields.fiat_deposits_operating_now&&!1===s.fields.crypto_withdrawals_operating_now&&A("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===s.fields.fiat_deposits_operating_now&&A("En este momento no permite dep\xf3sitos de FIAT.")||!1===s.fields.crypto_withdrawals_operating_now&&A("En este momento no permite retiros de criptomonedas."))||"bid"===e&&(!1===s.fields.fiat_withdrawals_operating_now&&!1===s.fields.crypto_deposits_operating_now&&A("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===s.fields.fiat_withdrawals_operating_now&&A("En este momento no permite retiros de FIAT.")||!1===s.fields.crypto_deposits_operating_now&&A("En este momento no permite dep\xf3sitos de criptomonedas."))})]}),("ask"===e&&"deposits_allowed"in s.fields&&!s.fields.deposits_allowed||"bid"===e&&"withdrawals_allowed"in s.fields&&!s.fields.withdrawals_allowed)&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(c.f,{className:"text-red-400 w-4 h-4 self-center pl-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(s.fields.id,"-").concat(t,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed")}),Object(u.jsx)(m.a,{place:"right",className:"w-48",effect:"solid",id:"".concat(s.fields.id,"-").concat(t,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed"),children:A("{{providerName}} no permite {{operation}} {{crypto}}.",{providerName:s.fields.name,operation:"ask"===e&&A("retirar")||A("depositar"),crypto:Object(x.a)(t.toUpperCase()).name})})]})]})})]})}),g&&g in s.fields&&e in s.fields[g]&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{className:"mt-1 sm:mt-3 align-top",children:Object(u.jsx)("div",{className:"text-md truncate w-40 min-w-min",children:Object(u.jsx)("span",{children:g&&s.fields[g][e]})})}),Object(u.jsx)("td",{className:"align-top",children:-1===N[t][e].indexOf(s.fields.id)&&Object(u.jsx)(c.l,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){N[t][e].indexOf(s.fields.id)>-1?N[t][e].splice(N[t][e].indexOf(s.fields.id),1):N[t][e].push(s.fields.id),y(Object(i.a)({},N))}})||Object(u.jsx)(c.o,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){N[t][e].indexOf(s.fields.id)>-1?N[t][e].splice(N[t][e].indexOf(s.fields.id),1):N[t][e].push(s.fields.id),y(Object(i.a)({},N))}})})]})]}),Object(u.jsx)("tr",{className:(N[t][e].indexOf(s.fields.id),""),children:Object(u.jsx)("td",{className:"text-sm text-gray-500 pb-1 sm:pb-3",colSpan:3,children:Object(u.jsxs)("span",{className:"flex",children:[s.fields.score&&s.fields.score.count>0&&Object(u.jsxs)(u.Fragment,{children:[s.fields.score.rating,Object(u.jsx)(c.D,{className:"w-5 h-5 mr-1","aria-hidden":"true"})]}),N[t][e].indexOf(s.fields.id)>-1&&Object(u.jsx)(p.b,{className:["underline",s.fields.score&&s.fields.score.count>0?"-ml-1":""].join(" "),to:"".concat(A("/opiniones/")).concat(s.fields.id),target:"_blank",rel:"noreferrer",children:A("Ver opiniones")})]})})}),g&&N[t][e].indexOf(s.fields.id)>-1&&Object(u.jsxs)(u.Fragment,{children:[(!(s.fields.id in _)||s.fields.id in _&&("ask"===e&&(null===(n=_[s.fields.id])||void 0===n||null===(l=n.fees)||void 0===l||null===(d=l.fiat)||void 0===d?void 0:d.deposit)||"bid"===e&&(null===(o=_[s.fields.id])||void 0===o||null===(j=o.fees)||void 0===j||null===(f=j.fiat)||void 0===f?void 0:f.withdraw)))&&Object(u.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(s.fields.id in _)&&Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-24 h-4"})||Object(u.jsx)("p",{children:"ask"===e&&(null===(O=_[s.fields.id])||void 0===O||null===(w=O.fees)||void 0===w||null===(k=w.fiat)||void 0===k?void 0:k.deposit)&&A("Fee de dep\xf3sito")||(null===(C=_[s.fields.id])||void 0===C||null===(U=C.fees)||void 0===U||null===(P=U.fiat)||void 0===P?void 0:P.withdraw)&&A("Fee de retiro")})}),Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(s.fields.id in _)&&Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-8 h-4"})||Object(u.jsx)("p",{children:"ask"===e&&(null===(T=_[s.fields.id])||void 0===T||null===(E=T.fees)||void 0===E||null===(F=E.fiat)||void 0===F?void 0:F.deposit)||(null===(S=_[s.fields.id])||void 0===S||null===(D=S.fees)||void 0===D||null===(I=D.fiat)||void 0===I?void 0:I.withdraw)})})]}),s.fields[g]["".concat(e,"_without_fees")]&&Object(u.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(u.jsx)("p",{children:s.fields[g]["".concat(e,"_without_fees")]&&"".concat(A("Precio de")," ").concat(Object(x.a)(t.toUpperCase()).name)})}),Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(u.jsx)("p",{children:s.fields[g]["".concat(e,"_without_fees")]})})]}),(!(s.fields.id in _)||s.fields.id in _&&(null===(R=_[s.fields.id])||void 0===R||null===(V=R.fees)||void 0===V||null===(z=V.crypto)||void 0===z?void 0:z[e]))&&Object(u.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(s.fields.id in _)&&Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-20 h-4"})||Object(u.jsx)("p",{children:(null===(Y=_[s.fields.id])||void 0===Y||null===(J=Y.fees)||void 0===J||null===(L=J.crypto)||void 0===L?void 0:L[e])&&("ask"===e&&A("Fee por comprar")||A("Fee por vender"))})}),Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(s.fields.id in _)&&Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-10 h-4"})||Object(u.jsx)("p",{children:null===(M=_[s.fields.id])||void 0===M||null===(q=M.fees)||void 0===q||null===(G=q.crypto)||void 0===G?void 0:G[e]})})]}),-1===s.fields.id.indexOf("p2p")&&Object(u.jsx)("tr",{className:"border-t border-gray-700",children:Object(u.jsx)("td",{className:"text-sm py-1 sm:py-3",colSpan:3,children:Object(u.jsx)("a",{className:"underline text-blue-400",target:"_blank",rel:"noreferrer",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(A("comisiones-y-limites"),"/").concat(s.fields.id),children:A("Ver ficha t\xe9cnica")})})})]})]},a)}))||Object(a.a)(Array(3)).map((function(e,s){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"pb-1 sm:pb-3",children:Object(u.jsxs)("div",{className:"w-44",children:[Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 mb-1 w-24 sm:w-24 h-4"}),Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-10 sm:w-10 h-4"})]})}),Object(u.jsx)("td",{className:"mt-1 sm:mt-3 align-top",children:Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-32 h-4"})}),Object(u.jsx)("td",{className:"align-top",children:Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-4 sm:w-4 h-4"})})]},s)}))})]})},s)}))})||w&&w[t.toUpperCase()]&&"ask"in w[t.toUpperCase()]&&"bid"in w[t.toUpperCase()]&&w[t.toUpperCase()].ask.length>0&&w[t.toUpperCase()].bid.length>0&&Object(u.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(u.jsxs)("div",{className:"px-4 col-span-3",children:[Object(u.jsx)("p",{className:"font-bold",children:A("Prueba cambiando los filtros")}),Object(u.jsx)("p",{className:"inline",children:A("No encontramos precios de {{crypto}} con los filtros que aplicaste.",{crypto:Object(x.a)(t.toUpperCase()).name})})," ",Object(u.jsx)("p",{className:"cursor-pointer underline inline",onClick:function(){k(null),C(E),U(F),P(S),T(D),I(!0)},children:A("Cambiar filtros")})]}),Object(u.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})||Object(u.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(u.jsxs)("div",{className:"px-4 col-span-3",children:[Object(u.jsx)("p",{className:"font-bold",children:A("Estamos intentando restablecer la conexi\xf3n")}),Object(u.jsx)("p",{children:A("Espera un instante para volver a ver los precios de {{crypto}}.",{crypto:Object(x.a)(t.toUpperCase()).name})})]}),Object(u.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})]});function R(e,s){return!!g&&(!F.includes(e.fields.id)&&(!S.includes(e.fields.id)&&(e.fields.available_blockchains?!e.fields.available_blockchains.every((function(e){return D.includes(e)})):!D.includes(Object(x.a)(s.toUpperCase()).blockchain[0]))))}}var g=function(e,s){return!1};s.default=r.a.memo(w,g)}}]);