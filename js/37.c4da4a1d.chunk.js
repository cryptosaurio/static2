(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[37],{194:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var i=s(145),a=s(184),c=(s(0),s(34)),n=s(2),l=["children","to","condition"];function r(e){var t=e.children,s=e.to,r=e.condition,o=Object(a.a)(e,l);return r&&s?Object(n.jsx)(c.b,Object(i.a)(Object(i.a)({to:s},o),{},{children:t})):Object(n.jsx)("a",Object(i.a)(Object(i.a)({href:s},o),{},{children:t}))}},278:function(e,t,s){"use strict";s.r(t);var i=s(145),a=s(144),c=s(12),n=s(152),l=s(0),r=s.n(l),o=s(136),d=s(34),p=s(199),j=s(157),m=s(186),f=s(164),b=s(194),h=s(179),x=(s(177),s(170),s(171)),u=(s(166),s(2));function O(e){var t=e.contextualTrackingData,s=e.crypto,O=e.showCoinStats,g=e.coinStats,w=e.coinStatsCryptos,v=e.pricesData,N=e.selectedCurrency,_=e.showProviderIcon,y=e.providerDataExpandedByType,C=e.setProviderDataExpandedByType,k=e.providersExtraData,U=e.setTempSelectedCurrency,T=e.setTempBlockedCryptos,P=e.setTempBlockedProviders,F=e.setTempBlockedP2PProviders,E=e.setTempBlockedBlockchains,S=e.blockedCryptos,D=e.blockedProviders,A=e.blockedP2PProviders,I=e.blockedBlockchains,V=e.setPreferencesModalIsOpen,B=e.scrollToPriceTable,R=e.showAlwaysMoreOffers,M=e.rollsData,z=e.notificationsEnabled,L=e.selectedPercentageForNotifications,Y=e.setNotificationSettingsModalIsOpen,J=e.selectedCryptosForNotifications,q=e.setRollsModalIsOpen,H=e.setRollsModalCoin,G=e.isMobile,K=e.isVisible,Q=Object(o.a)().t,W=Object(j.useTracking)(t).trackEvent,X=Object(l.useState)({}),Z=Object(c.a)(X,2),$=Z[0],ee=Z[1];return Object(u.jsxs)(u.Fragment,{children:[O&&Object(u.jsxs)("div",{className:"bg-gray-600",children:[Object(u.jsxs)("div",{className:"py-3 px-3 sm:px-6 lg:px-8 flex flex-row justify-between items-center",children:[Object(u.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(u.jsxs)("div",{className:"grid grid-flow-row",children:[Object(u.jsxs)("span",{className:"text-white flex items-center",children:[Object(u.jsx)("img",{loading:"lazy",className:"w-5 mr-1",src:Object(f.a)(s.toUpperCase())&&Object(f.a)(s.toUpperCase()).icon||"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),Object(u.jsx)("h2",{className:"text-lg",children:Object(f.a)(s.toUpperCase())&&Object(f.a)(s.toUpperCase()).name||s.toUpperCase()})]}),g[s]&&g[s].price&&Object(u.jsxs)("div",{className:"flex my-1",children:[Object(u.jsx)("p",{className:"font-bold",children:g[s].price}),Object(u.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",g[s].price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:g[s].price_change_percentage_24h}),Object(u.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(f.a)(s).name.split(" ").join("-").toLowerCase()),children:Q("Ver estad\xedsticas")})]})||w&&w.indexOf(s)>-1&&Object(u.jsxs)("div",{className:"flex my-1",children:[Object(u.jsx)("div",{className:["self-center bg-gray-900 w-24 sm:w-24 h-5",K?"animate-pulse":""].join(" ")}),Object(u.jsx)("div",{className:["self-center mx-3 px-2 rounded-full bg-gray-900 w-12 sm:w-12 h-6",K?"animate-pulse":""].join(" ")}),Object(u.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(f.a)(s).name.split(" ").join("-").toLowerCase()),children:Q("Ver estad\xedsticas")})]})||w&&-1===w.indexOf(s)&&Object(u.jsx)("div",{className:"flex my-1",children:Object(u.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(f.a)(s).name.split(" ").join("-").toLowerCase()),children:Q("Ver estad\xedsticas")})})]})}),!G&&["BTC","ETH","DAI","USDC","USDT"].indexOf(s)>-1&&Object(u.jsx)("div",{className:"flex bg-gray-500 p-2",children:M&&Object.keys(M).filter((function(e){return!S.includes(e.toUpperCase())})).filter((function(e){return e===s})).length>0&&M[s].length>0&&M[s].filter((function(e){return!D.includes(e.buy.fields.id)&&!D.includes(e.sell.fields.id)})).length>0&&Object(u.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){W({event:"user_action",event_category:"".concat(s.toUpperCase(),"_rolls_modal_open"),event_label:"click"}),H(s.toUpperCase()),q(!0)},children:["\ud83d\udd25",1===M[s].length&&Object(u.jsx)("p",{className:"pl-1",children:Q("1 arbitraje disponible")}),M[s].length>1&&Object(u.jsx)("p",{className:"pl-1",children:Q("{{amount}} arbitrajes disponibles",{amount:M[s].length})})]})||!G&&Object(u.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){return Y(!0)},children:["\ud83d\udd14",(!z||!J.includes(s.toUpperCase()))&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{className:"text-sm pl-1",children:Q("Crea una alerta de arbitraje")})})||Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{className:"text-sm pl-1",children:Q("Tienes una alerta de arbitraje desde {{percentage}}%",{percentage:L})})})]})})]}),G&&["BTC","ETH","DAI","USDC","USDT"].indexOf(s)>-1&&M&&Object.keys(M).filter((function(e){return!S.includes(e.toUpperCase())})).filter((function(e){return e===s})).length>0&&M[s].length>0&&Object(u.jsxs)("div",{className:"flex items-center cursor-pointer bg-gray-500 px-3 py-1.5 font-bold",onClick:function(){W({event:"user_action",event_category:"".concat(s.toUpperCase(),"_rolls_modal_open"),event_label:"click"}),H(s.toUpperCase()),q(!0)},children:["\ud83d\udd25",1===M[s].length&&Object(u.jsx)("p",{className:"pl-1",children:Q("1 arbitraje disponible")}),M[s].length>1&&Object(u.jsx)("p",{className:"pl-1",children:Q("{{amount}} arbitrajes disponibles",{amount:M[s].length})})]})]}),v&&(!(s.toUpperCase()in v)||v[s.toUpperCase()]&&"ask"in v[s.toUpperCase()]&&"bid"in v[s.toUpperCase()]&&v[s.toUpperCase()].ask.length>0&&v[s.toUpperCase()].bid.length>0&&v[s.toUpperCase()].ask.filter((function(e){return te(e,s)})).length>0&&v[s.toUpperCase()].bid.filter((function(e){return te(e,s)})).length>0)&&Object(u.jsx)(h.a,{className:"w-full align-middle",breakpoints:{0:{slidesPerView:1},769:{slidesPerView:2}},pagination:{clickable:!0},modules:[x.d],children:Object(a.a)(Array("ask","bid")).map((function(e,t){return Object(u.jsx)(h.b,{className:"pb-6",children:Object(u.jsx)("div",{className:"py-2",children:Object(u.jsxs)("table",{className:"mt-1 m-auto",children:[Object(u.jsxs)("thead",{children:[Object(u.jsx)("tr",{children:Object(u.jsx)("th",{className:"text-left",children:Object(u.jsx)("span",{className:"px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===e&&Q("COMPRAS A")||Q("VENDES A")})})}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(u.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:Q("PRECIO")}),Object(u.jsx)("th",{scope:"col"})]})]}),Object(u.jsx)("tbody",{children:v&&v[s.toUpperCase()]&&v[s.toUpperCase()][e]&&v[s.toUpperCase()][e].filter((function(e){return te(e,s)})).slice(0,R||$[e]?v[s.toUpperCase()][e].length:5).map((function(t,a){var c,l,o,j,h,x,O,g,w,v,U,T,P,F,E,S,D,A,I,V,B,R,M,z,L,Y,J;return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex",children:[Object(u.jsxs)(b.a,{condition:t.fields.id.indexOf("p2p")>-1&&N&&N in t.fields&&e in t.fields[N],className:"grid grid-flow-col justify-start",to:t.fields.url,target:-1===t.fields.id.indexOf("p2p")&&N&&N in t.fields&&e in t.fields[N]?"_blank":"_self",rel:-1===t.fields.id.indexOf("p2p")&&N&&N in t.fields&&e in t.fields[N]?"sponsored noreferrer":void 0,children:[_&&Object(u.jsx)("img",{loading:"lazy",className:"w-5 sm:w-7 mr-2 self-center",src:t.fields.icon,alt:t.fields.name}),Object(u.jsx)("div",{className:"text-md self-center",children:Object(u.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:t.fields.name})})]}),t.fields.info_access&&Object(u.jsx)(n.p,{onClick:function(e){W({event:"user_action",event_category:"".concat(t.fields.id,"_home_info_access"),event_label:"click"}),window.open(t.fields.info_access_url),e.preventDefault()},className:"w-6 h-6 ml-1 cursor-pointer text-blue-500","aria-hidden":"true"},a),t.fields.available_blockchains&&t.fields.available_blockchains.map((function(e,i){return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:Q("{{providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:t.fields.name,blockchainName:Object(m.a)(e).name})}),Object(u.jsx)("img",{loading:"lazy",src:Object(m.a)(e).icon,className:"ml-1 w-4 h-4 self-center ".concat(e," cursor-pointer"),alt:Object(m.a)(e).name,"data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)})]},i)})),("ask"===e&&t.fields.deposits_allowed&&(!1===t.fields.fiat_deposits_operating_now||!1===t.fields.crypto_withdrawals_operating_now)||"bid"===e&&t.fields.withdrawals_allowed&&(!1===t.fields.fiat_withdrawals_operating_now||!1===t.fields.crypto_deposits_operating_now))&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(n.s,{className:"text-indigo-500 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)}),Object(u.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:"ask"===e&&(!1===t.fields.fiat_deposits_operating_now&&!1===t.fields.crypto_withdrawals_operating_now&&Q("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===t.fields.fiat_deposits_operating_now&&Q("En este momento no permite dep\xf3sitos de FIAT.")||!1===t.fields.crypto_withdrawals_operating_now&&Q("En este momento no permite retiros de criptomonedas."))||"bid"===e&&(!1===t.fields.fiat_withdrawals_operating_now&&!1===t.fields.crypto_deposits_operating_now&&Q("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===t.fields.fiat_withdrawals_operating_now&&Q("En este momento no permite retiros de FIAT.")||!1===t.fields.crypto_deposits_operating_now&&Q("En este momento no permite dep\xf3sitos de criptomonedas."))})]}),("ask"===e&&"deposits_allowed"in t.fields&&!t.fields.deposits_allowed||"bid"===e&&"withdrawals_allowed"in t.fields&&!t.fields.withdrawals_allowed)&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(n.d,{className:"text-red-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed")}),Object(u.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed"),children:Q("{{providerName}} no permite {{operation}} {{crypto}}.",{providerName:t.fields.name,operation:"ask"===e&&Q("retirar")||Q("depositar"),crypto:Object(f.a)(s.toUpperCase()).name})})]}),"operation_type"in t.fields&&t.fields.operation_type.indexOf("in_person")>-1&&"operation_location"in t.fields&&t.fields.operation_location.length>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(n.C,{className:"text-gray-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length)}),Object(u.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length),children:Q("{{providerName}} solo opera {{operationType}} en {{operationLocation}}.",{providerName:t.fields.name,operationType:t.fields.operation_type.reduce((function(e,t){return"".concat(e?"".concat(e," ").concat(Q("o")," "):"").concat(Q(t))}),null),operationLocation:t.fields.operation_location.reduce((function(e,t){return"".concat(e,", ").concat(t)}))})})]})]}),N&&N in t.fields&&e in t.fields[N]&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{className:"align-top",children:Object(u.jsx)("div",{className:"text-md truncate max-w-40 sm:w-40 pr-3 sm:pr-5",children:Object(u.jsx)("span",{children:N&&t.fields[N][e]})})}),Object(u.jsx)("td",{className:"align-top",children:-1===y[s][e].indexOf(t.fields.id)&&Object(u.jsx)(n.i,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){y[s][e].indexOf(t.fields.id)>-1?y[s][e].splice(y[s][e].indexOf(t.fields.id),1):y[s][e].push(t.fields.id),C(Object(i.a)({},y))}})||Object(u.jsx)(n.j,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){y[s][e].indexOf(t.fields.id)>-1?y[s][e].splice(y[s][e].indexOf(t.fields.id),1):y[s][e].push(t.fields.id),C(Object(i.a)({},y))}})})]})]}),Object(u.jsx)("tr",{children:Object(u.jsxs)("td",{className:"text-sm text-gray-500 pb-1 sm:pb-3",colSpan:3,children:[Object(u.jsxs)("span",Object(i.a)(Object(i.a)({},t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&{"data-tip":"","data-for":"".concat(t.fields.id,"-").concat(s,"-bad-score")}),{},{children:[t.fields.score&&t.fields.score.count>0&&Object(u.jsxs)("p",{className:t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2?"inline-flex text-red-400":"inline-flex",children:[t.fields.score.rating,Object(u.jsx)(n.z,{className:"w-5 h-5 mr-1","aria-hidden":"true"})]}),y[s][e].indexOf(t.fields.id)>-1&&Object(u.jsx)(d.b,{className:["underline",t.fields.score&&t.fields.score.count>0?"-ml-1":""].join(" "),to:"".concat(Q("/opiniones/")).concat(t.fields.id),target:"_blank",rel:"noreferrer",children:Q("Ver opiniones")})]})),t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&Object(u.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-bad-score"),children:Q("Atenci\xf3n: te recomendamos que leas atentamente las opiniones de otros usuarios antes de operar.")})]})}),N&&y[s][e].indexOf(t.fields.id)>-1&&Object(u.jsxs)(u.Fragment,{children:[(!(t.fields.id in k)||t.fields.id in k&&("ask"===e&&(null===(c=k[t.fields.id])||void 0===c||null===(l=c.fees)||void 0===l||null===(o=l.fiat)||void 0===o?void 0:o.deposit)||"bid"===e&&(null===(j=k[t.fields.id])||void 0===j||null===(h=j.fees)||void 0===h||null===(x=h.fiat)||void 0===x?void 0:x.withdraw)))&&Object(u.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(t.fields.id in k)&&Object(u.jsx)("div",{className:["bg-gray-900 w-24 h-4",K?"animate-pulse":""].join(" ")})||Object(u.jsx)("p",{children:"ask"===e&&(null===(O=k[t.fields.id])||void 0===O||null===(g=O.fees)||void 0===g||null===(w=g.fiat)||void 0===w?void 0:w.deposit)&&Q("Fee de dep\xf3sito")||(null===(v=k[t.fields.id])||void 0===v||null===(U=v.fees)||void 0===U||null===(T=U.fiat)||void 0===T?void 0:T.withdraw)&&Q("Fee de retiro")})}),Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(t.fields.id in k)&&Object(u.jsx)("div",{className:["bg-gray-900 w-8 h-4",K?"animate-pulse":""].join(" ")})||Object(u.jsx)("p",{children:"ask"===e&&(null===(P=k[t.fields.id])||void 0===P||null===(F=P.fees)||void 0===F||null===(E=F.fiat)||void 0===E?void 0:E.deposit)||(null===(S=k[t.fields.id])||void 0===S||null===(D=S.fees)||void 0===D||null===(A=D.fiat)||void 0===A?void 0:A.withdraw)})})]}),t.fields[N]["".concat(e,"_without_fees")]&&Object(u.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(u.jsx)("p",{children:t.fields[N]["".concat(e,"_without_fees")]&&"".concat(Q("Precio de")," ").concat(Object(f.a)(s.toUpperCase()).name)})}),Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(u.jsx)("p",{children:t.fields[N]["".concat(e,"_without_fees")]})})]}),(!(t.fields.id in k)||t.fields.id in k&&(null===(I=k[t.fields.id])||void 0===I||null===(V=I.fees)||void 0===V||null===(B=V.crypto)||void 0===B?void 0:B[e]))&&Object(u.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(t.fields.id in k)&&Object(u.jsx)("div",{className:["bg-gray-900 w-20 h-4",K?"animate-pulse":""].join(" ")})||Object(u.jsx)("p",{children:(null===(R=k[t.fields.id])||void 0===R||null===(M=R.fees)||void 0===M||null===(z=M.crypto)||void 0===z?void 0:z[e])&&("ask"===e&&Q("Fee por comprar")||Q("Fee por vender"))})}),Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(t.fields.id in k)&&Object(u.jsx)("div",{className:["bg-gray-900 w-10 h-4",K?"animate-pulse":""].join(" ")})||Object(u.jsx)("p",{children:null===(L=k[t.fields.id])||void 0===L||null===(Y=L.fees)||void 0===Y||null===(J=Y.crypto)||void 0===J?void 0:J[e]})})]}),-1===t.fields.id.indexOf("p2p")&&Object(u.jsx)("tr",{className:"border-t border-gray-700",children:Object(u.jsx)("td",{className:"text-sm py-1 sm:py-3",colSpan:3,children:Object(u.jsx)("a",{className:"underline text-blue-400",target:"_blank",rel:"noreferrer",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(Q("comisiones-y-limites"),"/").concat(t.fields.id),children:Q("Ver ficha t\xe9cnica")})})})]})]},a)}))||Object(a.a)(Array(5)).map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsxs)("div",{className:["max-w-44 sm:w-44 pr-3 sm:pr-5 pb-1 sm:pb-3.5 mb-2",0===t?"pt-1":""].join(" "),children:[Object(u.jsx)("div",{className:["bg-gray-900 mb-1 w-24 sm:w-24 h-4",K?"animate-pulse":""].join(" ")}),Object(u.jsx)("div",{className:["bg-gray-900 w-10 sm:w-10 h-4",K?"animate-pulse":""].join(" ")})]})}),Object(u.jsx)("td",{className:"align-top",children:Object(u.jsx)("div",{className:["max-w-40 sm:w-40 pr-3 sm:pr-11",0===t?"pt-1":""].join(" "),children:Object(u.jsx)("div",{className:["bg-gray-900 w-32 h-4",K?"animate-pulse":""].join(" ")})})}),Object(u.jsx)("td",{className:"align-top",children:Object(u.jsx)("div",{className:["w-5 h-5 ml-3 -mr-2.5",0===t?"pt-1":""].join(" "),children:Object(u.jsx)("div",{className:["bg-gray-900 w-4 h-4",K?"animate-pulse":""].join(" ")})})})]},t)}))}),!R&&N&&v[s.toUpperCase()]&&e in v[s.toUpperCase()]&&v[s.toUpperCase()][e].length>5&&Object(u.jsx)("tbody",{onClick:function(){$[e]&&B(s),$[e]=!$[e],ee(Object(i.a)({},$))},children:Object(u.jsx)("tr",{children:Object(u.jsx)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex underline text-blue-400",children:!$[e]&&Q("Ver m\xe1s")||Q("Ver menos")})})})]})})},t)}))})||v&&v[s.toUpperCase()]&&"ask"in v[s.toUpperCase()]&&"bid"in v[s.toUpperCase()]&&v[s.toUpperCase()].ask.length>0&&v[s.toUpperCase()].bid.length>0&&Object(u.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(u.jsxs)("div",{className:"px-4 col-span-3",children:[Object(u.jsx)("p",{className:"font-bold",children:Q("Prueba cambiando los filtros")}),Object(u.jsx)("p",{className:"inline",children:Q("No encontramos precios de {{crypto}} con los filtros que aplicaste.",{crypto:Object(f.a)(s.toUpperCase()).name})})," ",Object(u.jsx)("p",{className:"cursor-pointer underline inline",onClick:function(){U(null),T(S),P(D),F(A),E(I),V(!0)},children:Q("Cambiar filtros")})]}),Object(u.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})||Object(u.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(u.jsxs)("div",{className:"px-4 col-span-3",children:[Object(u.jsx)("p",{className:"font-bold",children:Q("Estamos intentando restablecer la conexi\xf3n")}),Object(u.jsx)("p",{children:Q("Espera un instante para volver a ver los precios de {{crypto}}.",{crypto:Object(f.a)(s.toUpperCase()).name})})]}),Object(u.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})]});function te(e,t){return!!N&&(!D.includes(e.fields.id)&&(!A.includes(e.fields.id)&&(e.fields.available_blockchains?!e.fields.available_blockchains.every((function(e){return I.includes(e)})):!I.includes(Object(f.a)(t.toUpperCase()).blockchain[0]))))}}var g=function(e,t){return!1};t.default=r.a.memo(O,g)}}]);