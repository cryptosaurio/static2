(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[57],{309:function(e,t,s){"use strict";s.r(t);var a=s(144),i=s(141),c=s(8),n=s(152),r=s(0),l=s.n(r),o=s(129),d=s(26),p=s(203),m=s(157),j=s(199),b=s(167),f=s(191),h=(s(188),s(177),s(180)),x=(s(175),s(2));function u(e){var t=e.contextualTrackingData,s=e.crypto,u=e.showCoinStats,O=e.coinStats,g=e.coinStatsCryptos,w=e.pricesData,_=e.selectedCurrency,N=e.showProviderIcon,v=e.providerDataExpandedByType,y=e.setProviderDataExpandedByType,k=e.providersExtraData,C=e.setTempSelectedCurrency,U=e.setTempBlockedCryptos,T=e.setTempBlockedProviders,E=e.setTempBlockedP2PProviders,P=e.setTempBlockedBlockchains,I=e.blockedCryptos,F=e.blockedProviders,A=e.blockedP2PProviders,S=e.blockedBlockchains,B=e.setPreferencesModalIsOpen,D=e.scrollToPriceTable,M=e.showAlwaysMoreOffers,R=e.rollsData,V=e.notificationsEnabled,z=e.selectedPercentageForNotifications,q=e.setNotificationSettingsModalIsOpen,H=e.selectedCryptosForNotifications,L=e.setRollsModalIsOpen,J=e.setRollsModalCoin,Y=e.isMobile,G=e.isVisible,K=Object(o.a)().t,Q=Object(m.useTracking)(t).trackEvent,W=Object(r.useState)({}),X=Object(c.a)(W,2),Z=X[0],$=X[1];return Object(x.jsxs)(x.Fragment,{children:[u&&Object(x.jsxs)("div",{className:"bg-gray-600",children:[Object(x.jsxs)("div",{className:"py-3 px-3 sm:px-6 lg:px-8 flex flex-row justify-between items-center",children:[Object(x.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(x.jsxs)("div",{className:"grid grid-flow-row",children:[Object(x.jsxs)("span",{className:"text-white flex items-center",children:[Object(x.jsx)("img",{loading:"lazy",className:"w-5 mr-1",src:Object(b.a)(s.toUpperCase())&&Object(b.a)(s.toUpperCase()).icon||"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),Object(x.jsx)("h2",{className:"text-lg",children:Object(b.a)(s.toUpperCase())&&Object(b.a)(s.toUpperCase()).name||s.toUpperCase()})]}),O[s]&&O[s].price&&Object(x.jsxs)("div",{className:"flex my-1",children:[Object(x.jsx)("p",{className:"font-bold",children:O[s].price}),Object(x.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",O[s].price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:O[s].price_change_percentage_24h}),Object(x.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(b.a)(s).name.split(" ").join("-").toLowerCase()),children:K("Ver estad\xedsticas")})]})||g&&g.indexOf(s)>-1&&Object(x.jsxs)("div",{className:"flex my-1",children:[Object(x.jsx)("div",{className:["self-center bg-gray-900 w-24 sm:w-24 h-5",G?"animate-pulse":""].join(" ")}),Object(x.jsx)("div",{className:["self-center mx-3 px-2 rounded-full bg-gray-900 w-12 sm:w-12 h-6",G?"animate-pulse":""].join(" ")}),Object(x.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(b.a)(s).name.split(" ").join("-").toLowerCase()),children:K("Ver estad\xedsticas")})]})||g&&-1===g.indexOf(s)&&Object(x.jsx)("div",{className:"flex my-1",children:Object(x.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(b.a)(s).name.split(" ").join("-").toLowerCase()),children:K("Ver estad\xedsticas")})})]})}),!Y&&["BTC","ETH","DAI","USDC","USDT"].indexOf(s)>-1&&Object(x.jsx)("div",{className:"flex bg-gray-500 p-2",children:R&&Object.keys(R).filter((function(e){return!I.includes(e.toUpperCase())})).filter((function(e){return e===s})).length>0&&R[s].length>0&&R[s].filter((function(e){return!F.includes(e.buy.fields.id)&&!F.includes(e.sell.fields.id)})).length>0&&Object(x.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){Q({event:"user_action",event_category:"".concat(s.toUpperCase(),"_rolls_modal_open"),event_label:"click"}),J(s.toUpperCase()),L(!0)},children:["\ud83d\udd25",1===R[s].length&&Object(x.jsx)("p",{className:"pl-1",children:K("1 arbitraje disponible")}),R[s].length>1&&Object(x.jsx)("p",{className:"pl-1",children:K("{{amount}} arbitrajes disponibles",{amount:R[s].length})})]})||!Y&&Object(x.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){return q(!0)},children:["\ud83d\udd14",(!V||!H.includes(s.toUpperCase()))&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("p",{className:"text-sm pl-1",children:K("Crea una alerta de arbitraje")})})||Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("p",{className:"text-sm pl-1",children:K("Tienes una alerta de arbitraje desde {{percentage}}%",{percentage:z})})})]})})]}),Y&&["BTC","ETH","DAI","USDC","USDT"].indexOf(s)>-1&&R&&Object.keys(R).filter((function(e){return!I.includes(e.toUpperCase())})).filter((function(e){return e===s})).length>0&&R[s].length>0&&R[s].filter((function(e){return!F.includes(e.buy.fields.id)&&!F.includes(e.sell.fields.id)})).length>0&&Object(x.jsxs)("div",{className:"flex items-center cursor-pointer bg-gray-500 px-3 py-1.5 font-bold",onClick:function(){Q({event:"user_action",event_category:"".concat(s.toUpperCase(),"_rolls_modal_open"),event_label:"click"}),J(s.toUpperCase()),L(!0)},children:["\ud83d\udd25",1===R[s].length&&Object(x.jsx)("p",{className:"pl-1",children:K("1 arbitraje disponible")}),R[s].length>1&&Object(x.jsx)("p",{className:"pl-1",children:K("{{amount}} arbitrajes disponibles",{amount:R[s].length})})]})]}),w&&(!(s.toUpperCase()in w)||w[s.toUpperCase()]&&"ask"in w[s.toUpperCase()]&&"bid"in w[s.toUpperCase()]&&w[s.toUpperCase()].ask.length>0&&w[s.toUpperCase()].bid.length>0&&w[s.toUpperCase()].ask.filter((function(e){return ee(e,s)})).length>0&&w[s.toUpperCase()].bid.filter((function(e){return ee(e,s)})).length>0)&&Object(x.jsx)(f.a,{className:"w-full align-middle",breakpoints:{0:{slidesPerView:1},769:{slidesPerView:2}},pagination:{clickable:!0},modules:[h.d],children:Object(i.a)(Array("ask","bid")).map((function(e,t){return Object(x.jsx)(f.b,{className:"pb-6",children:Object(x.jsx)("div",{className:"py-2",children:Object(x.jsxs)("table",{className:"mt-1 m-auto",children:[Object(x.jsxs)("thead",{children:[Object(x.jsx)("tr",{children:Object(x.jsx)("th",{className:"text-left",children:Object(x.jsx)("span",{className:"px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===e&&K("COMPRAS A")||K("VENDES A")})})}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(x.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:K("PRECIO")}),Object(x.jsx)("th",{scope:"col"})]})]}),Object(x.jsx)("tbody",{children:w&&w[s.toUpperCase()]&&w[s.toUpperCase()][e]&&w[s.toUpperCase()][e].filter((function(e){return ee(e,s)})).slice(0,M||Z[e]?w[s.toUpperCase()][e].length:5).map((function(t,c){return Object(x.jsxs)(l.a.Fragment,{children:[Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex",children:[Object(x.jsxs)("a",{href:t.fields.url,target:"_blank",rel:"sponsored noreferrer",className:"grid grid-flow-col justify-start",children:[N&&Object(x.jsx)("img",{loading:"lazy",className:"w-5 sm:w-7 mr-2 self-center",src:t.fields.icon,alt:t.fields.name}),Object(x.jsx)("div",{className:"text-md self-center",children:Object(x.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:t.fields.name})})]}),t.fields.info_access&&Object(x.jsx)(n.p,{onClick:function(e){Q({event:"user_action",event_category:"".concat(t.fields.id,"_home_info_access"),event_label:"click"}),window.open(t.fields.info_access_url),e.preventDefault()},className:"w-6 h-6 ml-1 cursor-pointer text-blue-500","aria-hidden":"true"},c),t.fields["available_".concat("ask"===e?"deposits":"withdrawals","_blockchains")]&&t.fields["available_".concat("ask"===e?"deposits":"withdrawals","_blockchains")].filter((function(e){return-1===["BITCOIN","ETHEREUM"].indexOf(e)})).length<4?t.fields["available_".concat("ask"===e?"deposits":"withdrawals","_blockchains")]&&t.fields["available_".concat("ask"===e?"deposits":"withdrawals","_blockchains")].filter((function(e){return-1===["BITCOIN","ETHEREUM"].indexOf(e)})).map((function(e,a){return Object(x.jsxs)(l.a.Fragment,{children:[Object(x.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:K("{{- providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:t.fields.name,blockchainName:Object(j.a)(e).name})}),Object(x.jsx)("img",{loading:"lazy",src:Object(j.a)(e).icon,className:"ml-1 w-4 h-4 self-center ".concat(e," cursor-pointer"),alt:Object(j.a)(e).name,"data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)})]},a)})):t.fields["available_".concat("ask"===e?"deposits":"withdrawals","_blockchains")]&&t.fields["available_".concat("ask"===e?"deposits":"withdrawals","_blockchains")].filter((function(e){return-1===["BITCOIN","ETHEREUM"].indexOf(e)})).length>3?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-many-blockchains"),children:K("{{- providerName}} te permite operar con {{blockchains}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:t.fields.name,blockchains:t.fields["available_".concat("ask"===e?"deposits":"withdrawals","_blockchains")]&&t.fields["available_".concat("ask"===e?"deposits":"withdrawals","_blockchains")].filter((function(e){return-1===["BITCOIN","ETHEREUM"].indexOf(e)})).map((function(e){return Object(j.a)(e).name})).join(", ").replace(/,(?!.*,)/gim," y")})}),Object(x.jsx)("img",{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/fortawesome/font-awesome/svgs/solid/infinity.svg",style:{filter:"invert(74%) sepia(77%) saturate(495%) hue-rotate(344deg) brightness(97%) contrast(103%)"},className:"ml-1 w-4 h-4 self-center cursor-pointer",alt:"many-blockchains ","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-many-blockchains")})]}):null,("ask"===e&&t.fields.withdrawals_allowed&&(!1===t.fields.fiat_deposits_operating_now||!1===t.fields.crypto_withdrawals_operating_now)||"bid"===e&&t.fields.deposits_allowed&&(!1===t.fields.fiat_withdrawals_operating_now||!1===t.fields.crypto_deposits_operating_now))&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(n.s,{className:"text-indigo-500 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)}),Object(x.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:"ask"===e&&(!1===t.fields.fiat_deposits_operating_now&&!1===t.fields.crypto_withdrawals_operating_now&&K("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===t.fields.fiat_deposits_operating_now&&K("En este momento no permite dep\xf3sitos de FIAT.")||!1===t.fields.crypto_withdrawals_operating_now&&K("En este momento no permite retiros de criptomonedas."))||"bid"===e&&(!1===t.fields.fiat_withdrawals_operating_now&&!1===t.fields.crypto_deposits_operating_now&&K("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===t.fields.fiat_withdrawals_operating_now&&K("En este momento no permite retiros de FIAT.")||!1===t.fields.crypto_deposits_operating_now&&K("En este momento no permite dep\xf3sitos de criptomonedas."))})]}),("ask"===e&&"withdrawals_allowed"in t.fields&&!t.fields.withdrawals_allowed||"bid"===e&&"deposits_allowed"in t.fields&&!t.fields.deposits_allowed)&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(n.d,{className:"text-red-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed")}),Object(x.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed"),children:K("{{- providerName}} no permite {{operation}} {{crypto}}.",{providerName:t.fields.name,operation:"ask"===e&&K("retirar")||K("depositar"),crypto:Object(b.a)(s.toUpperCase()).name})})]}),"operation_type"in t.fields&&t.fields.operation_type.indexOf("in_person")>-1&&"operation_location"in t.fields&&t.fields.operation_location.length>0&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(n.C,{className:"text-gray-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length)}),Object(x.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length),children:K("{{- providerName}} solo opera {{operationType}} en {{operationLocation}}.",{providerName:t.fields.name,operationType:t.fields.operation_type.reduce((function(e,t){return"".concat(e?"".concat(e," ").concat(K("o")," "):"").concat(K(t))}),null),operationLocation:t.fields.operation_location.reduce((function(e,t){return"".concat(e,", ").concat(t)}))})})]})]}),_&&_ in t.fields&&e in t.fields[_]&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("td",{className:"align-top",children:[Object(x.jsxs)("div",{className:"text-md truncate w-44 grid grid-flow-col justify-between",children:[Object(x.jsx)("span",{children:_&&t.fields[_][e]}),Object(x.jsx)("span",{className:"self-center text-xs text-gray-600","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e,"-spread"),children:_&&t.fields[_]["".concat(e,"_spread")]})]}),_ in t.fields&&"".concat(e,"_spread")in t.fields[_]&&Object(x.jsx)(p.a,{html:!0,place:Y?"left":"ask"===e?"right":"left",className:"w-40",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e,"-spread"),children:"#1"===t.fields[_]["".concat(e,"_spread")]?K("ask"===e?"{{- providerName}} tiene el mejor precio para comprar.":"{{- providerName}} tiene el mejor precio para vender.",{providerName:t.fields.name}):K("ask"===e?"{{spread}} m\xe1s caro que comprar en {{- providerName}}, quien tiene el mejor precio.":"{{spread}} m\xe1s barato que vender en {{- providerName}}, quien tiene el mejor precio.",{spread:t.fields[_]["".concat(e,"_spread")].replace(/-|\+/g,""),providerName:t.fields[_]["".concat(e,"_best_price_provider_name")]})})]}),Object(x.jsx)("td",{className:"align-top",children:-1===v[s][e].indexOf(t.fields.id)&&Object(x.jsx)(n.i,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){v[s][e].indexOf(t.fields.id)>-1?v[s][e].splice(v[s][e].indexOf(t.fields.id),1):v[s][e].push(t.fields.id),y(Object(a.a)({},v))}})||Object(x.jsx)(n.j,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){v[s][e].indexOf(t.fields.id)>-1?v[s][e].splice(v[s][e].indexOf(t.fields.id),1):v[s][e].push(t.fields.id),y(Object(a.a)({},v))}})})]})]}),Object(x.jsx)("tr",{children:Object(x.jsxs)("td",{className:"text-sm text-gray-500 pb-1 sm:pb-3",colSpan:3,children:[Object(x.jsxs)("span",Object(a.a)(Object(a.a)({},t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&{"data-tip":"","data-for":"".concat(t.fields.id,"-").concat(s,"-bad-score")}),{},{children:[t.fields.score&&t.fields.score.count>0&&Object(x.jsxs)("p",{className:t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2?"inline-flex text-red-400":"inline-flex",children:[t.fields.score.rating,Object(x.jsx)(n.z,{className:"w-5 h-5 mr-1","aria-hidden":"true"})]}),v[s][e].indexOf(t.fields.id)>-1&&Object(x.jsx)(d.b,{className:["underline",t.fields.score&&t.fields.score.count>0?"-ml-1":""].join(" "),to:"".concat(K("/opiniones/")).concat(t.fields.id.replaceAll("ripio-trade","ripio")),target:"_blank",rel:"noreferrer",children:K("Ver opiniones")})]})),v[s][e].indexOf(t.fields.id)>-1&&t.fields.id.indexOf("p2p")>-1&&Object(x.jsx)(d.b,{className:"underline float-right",to:"".concat(K("/comparador-p2p/"),"/").concat(Object(b.a)(s.toUpperCase()).name.toLowerCase().split(" ").join("-")),children:K("Ir al comparador P2P")}),t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&Object(x.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-bad-score"),children:K("Atenci\xf3n: te recomendamos que leas atentamente las opiniones de otros usuarios antes de operar.")})]})}),_&&v[s][e].indexOf(t.fields.id)>-1&&Object(x.jsxs)(x.Fragment,{children:[-1===t.fields.id.indexOf("p2p")&&t.fields.id in k&&k[t.fields.id]&&Object(x.jsx)(x.Fragment,{children:k[t.fields.id].map((function(e,t){return Object(x.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(x.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(x.jsx)("p",{children:e.title})}),Object(x.jsx)("td",{className:"cursor-pointer text-gray-500 text-sm max-w-0",children:Object(x.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:overflow-visible",children:e.content})})]},t)}))})||!(t.fields.id in k)&&-1===t.fields.id.indexOf("p2p")&&Object(i.a)(Array(5)).map((function(e,t){return Object(x.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(x.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(x.jsx)("div",{className:"bg-gray-900 w-24 h-4 my-0.5 animate-pulse"})}),Object(x.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(x.jsx)("div",{className:"bg-gray-900 w-8 h-4 my-0.5 animate-pulse"})})]},t)})),t.fields[_]["".concat(e,"_without_fees")]&&Object(x.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(x.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(x.jsx)("p",{children:t.fields[_]["".concat(e,"_without_fees")]&&"".concat(K("Precio de")," ").concat(Object(b.a)(s.toUpperCase()).name)})}),Object(x.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(x.jsx)("p",{children:t.fields[_]["".concat(e,"_without_fees")]})})]}),Object(x.jsx)("tr",{className:"border-t border-gray-700",children:Object(x.jsx)("td",{className:"text-sm py-1 sm:py-3",colSpan:3,children:Object(x.jsx)(d.b,{className:"underline text-blue-400",to:"/".concat(K("comisiones-y-limites"),"/").concat(t.fields.id.replaceAll("ripio-trade","ripio")),children:K("Ver ficha t\xe9cnica")})})})]})]},c)}))||Object(i.a)(Array(5)).map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsxs)("div",{className:["max-w-44 sm:w-44 pr-3 sm:pr-5 pb-1 sm:pb-3.5 mb-2",0===t?"pt-1":""].join(" "),children:[Object(x.jsx)("div",{className:["bg-gray-900 mb-1 w-24 sm:w-24 h-4",G?"animate-pulse":""].join(" ")}),Object(x.jsx)("div",{className:["bg-gray-900 w-10 sm:w-10 h-4",G?"animate-pulse":""].join(" ")})]})}),Object(x.jsx)("td",{className:"align-top",children:Object(x.jsx)("div",{className:["max-w-40 sm:w-40 pr-3 sm:pr-11",0===t?"pt-1":""].join(" "),children:Object(x.jsx)("div",{className:["bg-gray-900 w-32 h-4",G?"animate-pulse":""].join(" ")})})}),Object(x.jsx)("td",{className:"align-top",children:Object(x.jsx)("div",{className:["w-5 h-5 ml-3 -mr-2.5",0===t?"pt-1":""].join(" "),children:Object(x.jsx)("div",{className:["bg-gray-900 w-4 h-4",G?"animate-pulse":""].join(" ")})})})]},t)}))}),!M&&_&&w[s.toUpperCase()]&&e in w[s.toUpperCase()]&&w[s.toUpperCase()][e].length>5&&Object(x.jsx)("tbody",{onClick:function(){Z[e]&&D(s),Z[e]=!Z[e],$(Object(a.a)({},Z))},children:Object(x.jsx)("tr",{children:Object(x.jsx)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex underline text-blue-400",children:!Z[e]&&K("Ver m\xe1s")||K("Ver menos")})})})]})})},t)}))})||w&&w[s.toUpperCase()]&&"ask"in w[s.toUpperCase()]&&"bid"in w[s.toUpperCase()]&&w[s.toUpperCase()].ask.length>0&&w[s.toUpperCase()].bid.length>0&&Object(x.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(x.jsxs)("div",{className:"px-4 col-span-3",children:[Object(x.jsx)("p",{className:"font-bold",children:K("Prueba cambiando los filtros")}),Object(x.jsx)("p",{className:"inline",children:K("No encontramos precios de {{crypto}} con los filtros que aplicaste.",{crypto:Object(b.a)(s.toUpperCase()).name})})," ",Object(x.jsx)("p",{className:"cursor-pointer underline inline",onClick:function(){C(null),U(I),T(F),E(A),P(S),B(!0)},children:K("Cambiar filtros")})]}),Object(x.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})||Object(x.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(x.jsxs)("div",{className:"px-4 col-span-3",children:[Object(x.jsx)("p",{className:"font-bold",children:K("Estamos intentando restablecer la conexi\xf3n")}),Object(x.jsx)("p",{children:K("Espera un instante para volver a ver los precios de {{crypto}}.",{crypto:Object(b.a)(s.toUpperCase()).name})})]}),Object(x.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})]});function ee(e,t){return!!_&&(!F.includes(e.fields.id)&&(!A.includes(e.fields.id)&&(e.fields.available_deposits_blockchains&&e.fields.available_deposits_blockchains.length>0&&e.fields.available_withdrawals_blockchains&&e.fields.available_withdrawals_blockchains.length>0?!(e.fields.available_deposits_blockchains.every((function(e){return S.includes(e)}))&&e.fields.available_withdrawals_blockchains.every((function(e){return S.includes(e)}))):!S.includes(Object(b.a)(t.toUpperCase()).blockchain[0]))))}}var O=function(e,t){return!1};t.default=l.a.memo(u,O)}}]);