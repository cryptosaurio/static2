(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[35],{179:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var i=s(171);function a(e,t){if(null==e)return{};var s,a,c=Object(i.a)(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(c[s]=e[s])}return c}},193:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var i=s(143),a=s(179),c=(s(0),s(34)),n=s(2),r=["children","to","condition"];function l(e){var t=e.children,s=e.to,l=e.condition,o=Object(a.a)(e,r);return l&&s?Object(n.jsx)(c.b,Object(i.a)(Object(i.a)({to:s},o),{},{children:t})):Object(n.jsx)("a",Object(i.a)(Object(i.a)({href:s},o),{},{children:t}))}},286:function(e,t,s){"use strict";s.r(t);var i=s(143),a=s(148),c=s(12),n=s(151),r=s(0),l=s.n(r),o=s(135),d=s(178),p=s.n(d),j=s(34),m=s(198),f=s(156),b=s(185),h=s(170),x=s(163),u=s(193),O=s(169),g=s(2);function w(e){var t=e.contextualTrackingData,s=e.crypto,d=e.showCoinStats,w=e.coinStats,v=e.coinStatsCryptos,N=e.pricesData,_=e.selectedCurrency,y=e.showProviderIcon,C=e.providerDataExpandedByType,k=e.setProviderDataExpandedByType,U=e.providersExtraData,T=e.setTempSelectedCurrency,P=e.setTempBlockedCryptos,E=e.setTempBlockedProviders,F=e.setTempBlockedP2PProviders,S=e.setTempBlockedBlockchains,D=e.blockedCryptos,I=e.blockedProviders,A=e.blockedP2PProviders,B=e.blockedBlockchains,R=e.setPreferencesModalIsOpen,V=e.scrollToPriceTable,M=e.showAlwaysMoreOffers,z=e.rollsData,L=e.notificationsEnabled,Y=e.selectedPercentageForNotifications,J=e.setNotificationSettingsModalIsOpen,q=e.selectedCryptosForNotifications,H=e.setRollsModalIsOpen,G=e.setRollsModalCoin,K=e.isMobile,Q=e.isVisible,W=Object(o.a)().t,X=Object(f.useTracking)(t).trackEvent,Z=Object(r.useState)({}),$=Object(c.a)(Z,2),ee=$[0],te=$[1];return Object(g.jsxs)(g.Fragment,{children:[d&&Object(g.jsxs)("div",{className:"bg-gray-600",children:[Object(g.jsxs)("div",{className:"py-3 px-3 sm:px-6 lg:px-8 flex flex-row justify-between items-center",children:[Object(g.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(g.jsxs)("div",{className:"grid grid-flow-row",children:[Object(g.jsxs)("span",{className:"text-white flex items-center",children:[Object(g.jsx)("img",{loading:"lazy",className:"w-5 mr-1",src:Object(x.a)(s.toUpperCase())&&Object(x.a)(s.toUpperCase()).icon||"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),Object(g.jsx)("h2",{className:"text-lg",children:Object(x.a)(s.toUpperCase())&&Object(x.a)(s.toUpperCase()).name||s.toUpperCase()})]}),w[s]&&w[s].price&&Object(g.jsxs)("div",{className:"flex my-1",children:[Object(g.jsx)("p",{className:"font-bold",children:w[s].price}),Object(g.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",w[s].price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:w[s].price_change_percentage_24h}),Object(g.jsx)(j.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(x.a)(s).name.split(" ").join("-").toLowerCase()),children:W("Ver estad\xedsticas")})]})||v&&v.indexOf(s)>-1&&Object(g.jsxs)("div",{className:"flex my-1",children:[Object(g.jsx)("div",{className:["self-center bg-gray-900 w-24 sm:w-24 h-5",Q?"animate-pulse":""].join(" ")}),Object(g.jsx)("div",{className:["self-center mx-3 px-2 rounded-full bg-gray-900 w-12 sm:w-12 h-6",Q?"animate-pulse":""].join(" ")}),Object(g.jsx)(j.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(x.a)(s).name.split(" ").join("-").toLowerCase()),children:W("Ver estad\xedsticas")})]})||v&&-1===v.indexOf(s)&&Object(g.jsx)("div",{className:"flex my-1",children:Object(g.jsx)(j.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(x.a)(s).name.split(" ").join("-").toLowerCase()),children:W("Ver estad\xedsticas")})})]})}),!K&&["BTC","ETH","DAI","USDC","USDT"].indexOf(s)>-1&&Object(g.jsx)("div",{className:"flex bg-gray-500 p-2",children:z&&Object.keys(z).filter((function(e){return!D.includes(e.toUpperCase())})).filter((function(e){return e===s})).length>0&&z[s].length>0&&Object(g.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){X({event:"user_action",event_category:"".concat(s.toUpperCase(),"_rolls_modal_open"),event_label:"click"}),G(s.toUpperCase()),H(!0)},children:["\ud83d\udd25",1===z[s].length&&Object(g.jsx)("p",{className:"pl-1",children:W("1 arbitraje disponible")}),z[s].length>1&&Object(g.jsx)("p",{className:"pl-1",children:W("{{amount}} arbitrajes disponibles",{amount:z[s].length})})]})||!K&&Object(g.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){return J(!0)},children:["\ud83d\udd14",(!L||!q.includes(s.toUpperCase()))&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("p",{className:"text-sm pl-1",children:W("Crea una alerta de arbitraje")})})||Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("p",{className:"text-sm pl-1",children:W("Tienes una alerta de arbitraje desde {{percentage}}%",{percentage:Y})})})]})})]}),K&&["BTC","ETH","DAI","USDC","USDT"].indexOf(s)>-1&&z&&Object.keys(z).filter((function(e){return!D.includes(e.toUpperCase())})).filter((function(e){return e===s})).length>0&&z[s].length>0&&Object(g.jsxs)("div",{className:"flex items-center cursor-pointer bg-gray-500 px-3 py-1.5 font-bold",onClick:function(){X({event:"user_action",event_category:"".concat(s.toUpperCase(),"_rolls_modal_open"),event_label:"click"}),G(s.toUpperCase()),H(!0)},children:["\ud83d\udd25",1===z[s].length&&Object(g.jsx)("p",{className:"pl-1",children:W("1 arbitraje disponible")}),z[s].length>1&&Object(g.jsx)("p",{className:"pl-1",children:W("{{amount}} arbitrajes disponibles",{amount:z[s].length})})]})]}),N&&(!(s.toUpperCase()in N)||N[s.toUpperCase()]&&"ask"in N[s.toUpperCase()]&&"bid"in N[s.toUpperCase()]&&N[s.toUpperCase()].ask.length>0&&N[s.toUpperCase()].bid.length>0&&N[s.toUpperCase()].ask.filter((function(e){return se(e,s)})).length>0&&N[s.toUpperCase()].bid.filter((function(e){return se(e,s)})).length>0)&&Object(g.jsx)(p.a,{className:"align-middle",responsive:Object(h.a)().responsive,arrows:!1,showDots:!0,customDot:Object(g.jsx)(O.a,{}),children:Object(a.a)(Array("ask","bid")).map((function(e,t){return Object(g.jsx)("div",{className:"py-2 overflow-x-auto no-scrollbar",children:Object(g.jsxs)("table",{className:"mt-1 m-auto",children:[Object(g.jsxs)("thead",{children:[Object(g.jsx)("tr",{children:Object(g.jsx)("th",{children:Object(g.jsx)("span",{className:"px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===e&&W("COMPRAS A")||W("VENDES A")})})}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(g.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:W("PRECIO")}),Object(g.jsx)("th",{scope:"col"})]})]}),Object(g.jsx)("tbody",{children:N&&N[s.toUpperCase()]&&N[s.toUpperCase()][e]&&N[s.toUpperCase()][e].filter((function(e){return se(e,s)})).slice(0,M||ee[e]?N[s.toUpperCase()][e].length:5).map((function(t,a){var c,r,o,d,p,f,h,O,w,v,N,T,P,E,F,S,D,I,A,B,R,V,M,z,L,Y,J;return Object(g.jsxs)(l.a.Fragment,{children:[Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex",children:[Object(g.jsxs)(u.a,{condition:t.fields.id.indexOf("p2p")>-1&&_&&_ in t.fields&&e in t.fields[_],className:"grid grid-flow-col justify-start",to:t.fields.url,target:-1===t.fields.id.indexOf("p2p")&&_&&_ in t.fields&&e in t.fields[_]?"_blank":"_self",rel:-1===t.fields.id.indexOf("p2p")&&_&&_ in t.fields&&e in t.fields[_]?"sponsored noreferrer":void 0,children:[y&&Object(g.jsx)("img",{loading:"lazy",className:"w-5 sm:w-7 mr-2 self-center",src:t.fields.icon,alt:t.fields.name}),Object(g.jsx)("div",{className:"text-md self-center",children:Object(g.jsx)("span",{className:"flex",children:Object(g.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:t.fields.name})})})]}),t.fields.info_access&&Object(g.jsx)(n.r,{onClick:function(e){X({event:"user_action",event_category:"".concat(t.fields.id,"_home_info_access"),event_label:"click"}),window.open(t.fields.info_access_url),e.preventDefault()},className:"w-6 h-6 ml-1 cursor-pointer text-blue-500","aria-hidden":"true"},a),t.fields.available_blockchains&&t.fields.available_blockchains.map((function(e,i){return Object(g.jsxs)(l.a.Fragment,{children:[Object(g.jsx)(m.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:W("{{providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:t.fields.name,blockchainName:Object(b.a)(e).name})}),Object(g.jsx)("img",{loading:"lazy",src:Object(b.a)(e).icon,className:"ml-1 w-4 h-4 self-center ".concat(e," cursor-pointer"),alt:Object(b.a)(e).name,"data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)})]},i)})),("ask"===e&&t.fields.deposits_allowed&&(!1===t.fields.fiat_deposits_operating_now||!1===t.fields.crypto_withdrawals_operating_now)||"bid"===e&&t.fields.withdrawals_allowed&&(!1===t.fields.fiat_withdrawals_operating_now||!1===t.fields.crypto_deposits_operating_now))&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(n.u,{className:"text-indigo-500 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)}),Object(g.jsx)(m.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:"ask"===e&&(!1===t.fields.fiat_deposits_operating_now&&!1===t.fields.crypto_withdrawals_operating_now&&W("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===t.fields.fiat_deposits_operating_now&&W("En este momento no permite dep\xf3sitos de FIAT.")||!1===t.fields.crypto_withdrawals_operating_now&&W("En este momento no permite retiros de criptomonedas."))||"bid"===e&&(!1===t.fields.fiat_withdrawals_operating_now&&!1===t.fields.crypto_deposits_operating_now&&W("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===t.fields.fiat_withdrawals_operating_now&&W("En este momento no permite retiros de FIAT.")||!1===t.fields.crypto_deposits_operating_now&&W("En este momento no permite dep\xf3sitos de criptomonedas."))})]}),("ask"===e&&"deposits_allowed"in t.fields&&!t.fields.deposits_allowed||"bid"===e&&"withdrawals_allowed"in t.fields&&!t.fields.withdrawals_allowed)&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(n.f,{className:"text-red-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed")}),Object(g.jsx)(m.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed"),children:W("{{providerName}} no permite {{operation}} {{crypto}}.",{providerName:t.fields.name,operation:"ask"===e&&W("retirar")||W("depositar"),crypto:Object(x.a)(s.toUpperCase()).name})})]}),"operation_type"in t.fields&&t.fields.operation_type.indexOf("in_person")>-1&&"operation_location"in t.fields&&t.fields.operation_location.length>0&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(n.E,{className:"text-gray-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length)}),Object(g.jsx)(m.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length),children:W("{{providerName}} solo opera {{operationType}} en {{operationLocation}}.",{providerName:t.fields.name,operationType:t.fields.operation_type.reduce((function(e,t){return"".concat(e?"".concat(e," ").concat(W("o")," "):"").concat(W(t))}),null),operationLocation:t.fields.operation_location.reduce((function(e,t){return"".concat(e,", ").concat(t)}))})})]})]}),_&&_ in t.fields&&e in t.fields[_]&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("td",{className:"align-top",children:Object(g.jsx)("div",{className:"text-md truncate max-w-40 sm:w-40 pr-3 sm:pr-5",children:Object(g.jsx)("span",{children:_&&t.fields[_][e]})})}),Object(g.jsx)("td",{className:"align-top",children:-1===C[s][e].indexOf(t.fields.id)&&Object(g.jsx)(n.k,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){C[s][e].indexOf(t.fields.id)>-1?C[s][e].splice(C[s][e].indexOf(t.fields.id),1):C[s][e].push(t.fields.id),k(Object(i.a)({},C))}})||Object(g.jsx)(n.l,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){C[s][e].indexOf(t.fields.id)>-1?C[s][e].splice(C[s][e].indexOf(t.fields.id),1):C[s][e].push(t.fields.id),k(Object(i.a)({},C))}})})]})]}),Object(g.jsx)("tr",{children:Object(g.jsxs)("td",{className:"text-sm text-gray-500 pb-1 sm:pb-3",colSpan:3,children:[Object(g.jsxs)("span",Object(i.a)(Object(i.a)({},t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&{"data-tip":"","data-for":"".concat(t.fields.id,"-").concat(s,"-bad-score")}),{},{children:[t.fields.score&&t.fields.score.count>0&&Object(g.jsxs)("p",{className:t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2?"inline-flex text-red-400":"inline-flex",children:[t.fields.score.rating,Object(g.jsx)(n.B,{className:"w-5 h-5 mr-1","aria-hidden":"true"})]}),C[s][e].indexOf(t.fields.id)>-1&&Object(g.jsx)(j.b,{className:["underline",t.fields.score&&t.fields.score.count>0?"-ml-1":""].join(" "),to:"".concat(W("/opiniones/")).concat(t.fields.id),target:"_blank",rel:"noreferrer",children:W("Ver opiniones")})]})),t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&Object(g.jsx)(m.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-bad-score"),children:W("Atenci\xf3n: te recomendamos que leas atentamente las opiniones de otros usuarios antes de operar.")})]})}),_&&C[s][e].indexOf(t.fields.id)>-1&&Object(g.jsxs)(g.Fragment,{children:[(!(t.fields.id in U)||t.fields.id in U&&("ask"===e&&(null===(c=U[t.fields.id])||void 0===c||null===(r=c.fees)||void 0===r||null===(o=r.fiat)||void 0===o?void 0:o.deposit)||"bid"===e&&(null===(d=U[t.fields.id])||void 0===d||null===(p=d.fees)||void 0===p||null===(f=p.fiat)||void 0===f?void 0:f.withdraw)))&&Object(g.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(t.fields.id in U)&&Object(g.jsx)("div",{className:["bg-gray-900 w-24 h-4",Q?"animate-pulse":""].join(" ")})||Object(g.jsx)("p",{children:"ask"===e&&(null===(h=U[t.fields.id])||void 0===h||null===(O=h.fees)||void 0===O||null===(w=O.fiat)||void 0===w?void 0:w.deposit)&&W("Fee de dep\xf3sito")||(null===(v=U[t.fields.id])||void 0===v||null===(N=v.fees)||void 0===N||null===(T=N.fiat)||void 0===T?void 0:T.withdraw)&&W("Fee de retiro")})}),Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(t.fields.id in U)&&Object(g.jsx)("div",{className:["bg-gray-900 w-8 h-4",Q?"animate-pulse":""].join(" ")})||Object(g.jsx)("p",{children:"ask"===e&&(null===(P=U[t.fields.id])||void 0===P||null===(E=P.fees)||void 0===E||null===(F=E.fiat)||void 0===F?void 0:F.deposit)||(null===(S=U[t.fields.id])||void 0===S||null===(D=S.fees)||void 0===D||null===(I=D.fiat)||void 0===I?void 0:I.withdraw)})})]}),t.fields[_]["".concat(e,"_without_fees")]&&Object(g.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(g.jsx)("p",{children:t.fields[_]["".concat(e,"_without_fees")]&&"".concat(W("Precio de")," ").concat(Object(x.a)(s.toUpperCase()).name)})}),Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(g.jsx)("p",{children:t.fields[_]["".concat(e,"_without_fees")]})})]}),(!(t.fields.id in U)||t.fields.id in U&&(null===(A=U[t.fields.id])||void 0===A||null===(B=A.fees)||void 0===B||null===(R=B.crypto)||void 0===R?void 0:R[e]))&&Object(g.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(t.fields.id in U)&&Object(g.jsx)("div",{className:["bg-gray-900 w-20 h-4",Q?"animate-pulse":""].join(" ")})||Object(g.jsx)("p",{children:(null===(V=U[t.fields.id])||void 0===V||null===(M=V.fees)||void 0===M||null===(z=M.crypto)||void 0===z?void 0:z[e])&&("ask"===e&&W("Fee por comprar")||W("Fee por vender"))})}),Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(t.fields.id in U)&&Object(g.jsx)("div",{className:["bg-gray-900 w-10 h-4",Q?"animate-pulse":""].join(" ")})||Object(g.jsx)("p",{children:null===(L=U[t.fields.id])||void 0===L||null===(Y=L.fees)||void 0===Y||null===(J=Y.crypto)||void 0===J?void 0:J[e]})})]}),-1===t.fields.id.indexOf("p2p")&&Object(g.jsx)("tr",{className:"border-t border-gray-700",children:Object(g.jsx)("td",{className:"text-sm py-1 sm:py-3",colSpan:3,children:Object(g.jsx)("a",{className:"underline text-blue-400",target:"_blank",rel:"noreferrer",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(W("comisiones-y-limites"),"/").concat(t.fields.id),children:W("Ver ficha t\xe9cnica")})})})]})]},a)}))||Object(a.a)(Array(5)).map((function(e,t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsxs)("div",{className:["max-w-44 sm:w-44 pr-3 sm:pr-5 pb-1 sm:pb-3.5 mb-2",0===t?"pt-1":""].join(" "),children:[Object(g.jsx)("div",{className:["bg-gray-900 mb-1 w-24 sm:w-24 h-4",Q?"animate-pulse":""].join(" ")}),Object(g.jsx)("div",{className:["bg-gray-900 w-10 sm:w-10 h-4",Q?"animate-pulse":""].join(" ")})]})}),Object(g.jsx)("td",{className:"align-top",children:Object(g.jsx)("div",{className:["max-w-40 sm:w-40 pr-3 sm:pr-11",0===t?"pt-1":""].join(" "),children:Object(g.jsx)("div",{className:["bg-gray-900 w-32 h-4",Q?"animate-pulse":""].join(" ")})})}),Object(g.jsx)("td",{className:"align-top",children:Object(g.jsx)("div",{className:["w-5 h-5 ml-3 -mr-2.5",0===t?"pt-1":""].join(" "),children:Object(g.jsx)("div",{className:["bg-gray-900 w-4 h-4",Q?"animate-pulse":""].join(" ")})})})]},t)}))}),!M&&_&&N[s.toUpperCase()]&&e in N[s.toUpperCase()]&&N[s.toUpperCase()][e].length>5&&Object(g.jsx)("tbody",{onClick:function(){ee[e]&&V(s),ee[e]=!ee[e],te(Object(i.a)({},ee))},children:Object(g.jsx)("tr",{children:Object(g.jsx)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex underline text-blue-400",children:!ee[e]&&W("Ver m\xe1s")||W("Ver menos")})})})]})},t)}))})||N&&N[s.toUpperCase()]&&"ask"in N[s.toUpperCase()]&&"bid"in N[s.toUpperCase()]&&N[s.toUpperCase()].ask.length>0&&N[s.toUpperCase()].bid.length>0&&Object(g.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(g.jsxs)("div",{className:"px-4 col-span-3",children:[Object(g.jsx)("p",{className:"font-bold",children:W("Prueba cambiando los filtros")}),Object(g.jsx)("p",{className:"inline",children:W("No encontramos precios de {{crypto}} con los filtros que aplicaste.",{crypto:Object(x.a)(s.toUpperCase()).name})})," ",Object(g.jsx)("p",{className:"cursor-pointer underline inline",onClick:function(){T(null),P(D),E(I),F(A),S(B),R(!0)},children:W("Cambiar filtros")})]}),Object(g.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})||Object(g.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(g.jsxs)("div",{className:"px-4 col-span-3",children:[Object(g.jsx)("p",{className:"font-bold",children:W("Estamos intentando restablecer la conexi\xf3n")}),Object(g.jsx)("p",{children:W("Espera un instante para volver a ver los precios de {{crypto}}.",{crypto:Object(x.a)(s.toUpperCase()).name})})]}),Object(g.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})]});function se(e,t){return!!_&&(!I.includes(e.fields.id)&&(!A.includes(e.fields.id)&&(e.fields.available_blockchains?!e.fields.available_blockchains.every((function(e){return B.includes(e)})):!B.includes(Object(x.a)(t.toUpperCase()).blockchain[0]))))}}var v=function(e,t){return!1};t.default=l.a.memo(w,v)}}]);