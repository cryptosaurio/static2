(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[43,57],{199:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return o})),s.d(t,"c",(function(){return i}));var c={BITCOIN:{code:"BITCOIN",name:"Bitcoin",icon:"https://farm.army/token/btc.webp"},ETHEREUM:{code:"ETHEREUM",name:"Ethereum",icon:"https://farm.army/token/eth.webp"},LIGHTNING_NETWORK:{code:"LIGHTNING_NETWORK",name:"Lightning",icon:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Lightning_Network.svg"},BSC:{code:"BSC",name:"Binance Smart Chain",icon:"https://cdn.worldvectorlogo.com/logos/binance-logo.svg"},BSC_OLD:{code:"BSC_OLD",name:"Binance Beacon Chain",icon:"https://cdn.worldvectorlogo.com/logos/binance-logo.svg"},TERRA:{code:"TERRA",name:"Terra",icon:"https://cryptologos.cc/logos/terra-luna-luna-logo.svg?v=014"},POLYGON:{code:"POLYGON",name:"Polygon",icon:"https://cryptologos.cc/logos/polygon-matic-logo.svg"},TRON:{code:"TRON",name:"TRON",icon:"https://cryptologos.cc/logos/tron-trx-logo.svg"},STELLAR:{code:"STELLAR",name:"Stellar",icon:"https://cryptologos.cc/logos/stellar-xlm-logo.svg"},CARDANO:{code:"CARDANO",name:"Cardano",icon:"https://cryptologos.cc/logos/cardano-ada-logo.svg"},SOLANA:{code:"SOLANA",name:"Solana",icon:"https://cryptologos.cc/logos/solana-sol-logo.svg"},POLKADOT:{code:"POLKADOT",name:"Polkadot",icon:"https://cryptologos.cc/logos/polkadot-new-dot-logo.svg"},RIPPLE:{code:"RIPPLE",name:"Ripple",icon:"https://cryptologos.cc/logos/xrp-xrp-logo.svg"},LITECOIN:{code:"LITECOIN",name:"Litecoin",icon:"https://cryptologos.cc/logos/litecoin-ltc-logo.svg"},BITCOINCASH:{code:"BITCOINCASH",name:"Bitcoin Cash",icon:"https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg"},BITCOIN_CASH:{code:"BITCOIN_CASH",name:"Bitcoin Cash",icon:"https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg"},DOGECOIN:{code:"DOGECOIN",name:"Dogecoin",icon:"https://cryptologos.cc/logos/dogecoin-doge-logo.svg"},OPTIMISM_PBC:{code:"OPTIMISM_PBC",name:"Optimism",icon:"https://gateway.optimism.io/favicon.ico"},ARBITRUM:{code:"ARBITRUM",name:"Arbitrum One",icon:"https://portal.arbitrum.one/wp-content/uploads/2021/10/favicon.png"},RSK:{code:"RSK",name:"RSK",icon:"https://www.rsk.co/img/favicons/favicon-32x32.png"},AVAX:{code:"AVAX",name:"Avalanche",icon:"https://cryptologos.cc/logos/avalanche-avax-logo.svg"},AVALANCHE:{code:"AVALANCHE",name:"Avalanche",icon:"https://cryptologos.cc/logos/avalanche-avax-logo.svg"},MONERO:{code:"MONERO",name:"Monero",icon:"https://cryptologos.cc/logos/monero-xmr-logo.svg"},OMNI:{code:"OMNI",name:"Omni",icon:"https://cryptologos.cc/logos/omni-omni-logo.svg"}};function a(e){try{c[e.toUpperCase()]||window.Rollbar.warning("Blockchain not found Exception: "+e)}catch(t){}return c[e.toUpperCase()]||{code:e.toUpperCase(),name:"?",icon:"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}}function o(){return c}function i(e){return void 0!==c[e.toUpperCase()]}},296:function(e,t,s){"use strict";s.r(t);var c=s(152),a=s(147),o=s(12),i=s(154),n=s(0),r=s.n(n),l=s(138),d=s(34),p=s(205),m=s(160),j=s(199),b=s(170),f=s(200),h=(s(197),s(185),s(186)),g=(s(181),s(2));function x(e){var t=e.contextualTrackingData,s=e.crypto,x=e.showCoinStats,O=e.coinStats,u=e.coinStatsCryptos,w=e.pricesData,N=e.selectedCurrency,_=e.showProviderIcon,v=e.providerDataExpandedByType,y=e.setProviderDataExpandedByType,C=e.providersExtraData,k=e.setTempSelectedCurrency,T=e.setTempBlockedCryptos,U=e.setTempBlockedProviders,A=e.setTempBlockedP2PProviders,I=e.setTempBlockedBlockchains,E=e.blockedCryptos,P=e.blockedProviders,R=e.blockedP2PProviders,S=e.blockedBlockchains,B=e.setPreferencesModalIsOpen,L=e.scrollToPriceTable,D=e.showAlwaysMoreOffers,M=e.rollsData,F=e.notificationsEnabled,V=e.selectedPercentageForNotifications,H=e.setNotificationSettingsModalIsOpen,G=e.selectedCryptosForNotifications,K=e.setRollsModalIsOpen,q=e.setRollsModalCoin,z=e.isMobile,Y=e.isVisible,J=Object(l.a)().t,W=Object(m.useTracking)(t).trackEvent,X=Object(n.useState)({}),Q=Object(o.a)(X,2),Z=Q[0],$=Q[1];return Object(g.jsxs)(g.Fragment,{children:[x&&Object(g.jsxs)("div",{className:"bg-gray-600",children:[Object(g.jsxs)("div",{className:"py-3 px-3 sm:px-6 lg:px-8 flex flex-row justify-between items-center",children:[Object(g.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(g.jsxs)("div",{className:"grid grid-flow-row",children:[Object(g.jsxs)("span",{className:"text-white flex items-center",children:[Object(g.jsx)("img",{loading:"lazy",className:"w-5 mr-1",src:Object(b.a)(s.toUpperCase())&&Object(b.a)(s.toUpperCase()).icon||"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),Object(g.jsx)("h2",{className:"text-lg",children:Object(b.a)(s.toUpperCase())&&Object(b.a)(s.toUpperCase()).name||s.toUpperCase()})]}),O[s]&&O[s].price&&Object(g.jsxs)("div",{className:"flex my-1",children:[Object(g.jsx)("p",{className:"font-bold",children:O[s].price}),Object(g.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",O[s].price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:O[s].price_change_percentage_24h}),Object(g.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(b.a)(s).name.split(" ").join("-").toLowerCase()),children:J("Ver estad\xedsticas")})]})||u&&u.indexOf(s)>-1&&Object(g.jsxs)("div",{className:"flex my-1",children:[Object(g.jsx)("div",{className:["self-center bg-gray-900 w-24 sm:w-24 h-5",Y?"animate-pulse":""].join(" ")}),Object(g.jsx)("div",{className:["self-center mx-3 px-2 rounded-full bg-gray-900 w-12 sm:w-12 h-6",Y?"animate-pulse":""].join(" ")}),Object(g.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(b.a)(s).name.split(" ").join("-").toLowerCase()),children:J("Ver estad\xedsticas")})]})||u&&-1===u.indexOf(s)&&Object(g.jsx)("div",{className:"flex my-1",children:Object(g.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(b.a)(s).name.split(" ").join("-").toLowerCase()),children:J("Ver estad\xedsticas")})})]})}),!z&&["BTC","ETH","DAI","USDC","USDT"].indexOf(s)>-1&&Object(g.jsx)("div",{className:"flex bg-gray-500 p-2",children:M&&Object.keys(M).filter((function(e){return!E.includes(e.toUpperCase())})).filter((function(e){return e===s})).length>0&&M[s].length>0&&M[s].filter((function(e){return!P.includes(e.buy.fields.id)&&!P.includes(e.sell.fields.id)})).length>0&&Object(g.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){W({event:"user_action",event_category:"".concat(s.toUpperCase(),"_rolls_modal_open"),event_label:"click"}),q(s.toUpperCase()),K(!0)},children:["\ud83d\udd25",1===M[s].length&&Object(g.jsx)("p",{className:"pl-1",children:J("1 arbitraje disponible")}),M[s].length>1&&Object(g.jsx)("p",{className:"pl-1",children:J("{{amount}} arbitrajes disponibles",{amount:M[s].length})})]})||!z&&Object(g.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){return H(!0)},children:["\ud83d\udd14",(!F||!G.includes(s.toUpperCase()))&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("p",{className:"text-sm pl-1",children:J("Crea una alerta de arbitraje")})})||Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("p",{className:"text-sm pl-1",children:J("Tienes una alerta de arbitraje desde {{percentage}}%",{percentage:V})})})]})})]}),z&&["BTC","ETH","DAI","USDC","USDT"].indexOf(s)>-1&&M&&Object.keys(M).filter((function(e){return!E.includes(e.toUpperCase())})).filter((function(e){return e===s})).length>0&&M[s].length>0&&M[s].filter((function(e){return!P.includes(e.buy.fields.id)&&!P.includes(e.sell.fields.id)})).length>0&&Object(g.jsxs)("div",{className:"flex items-center cursor-pointer bg-gray-500 px-3 py-1.5 font-bold",onClick:function(){W({event:"user_action",event_category:"".concat(s.toUpperCase(),"_rolls_modal_open"),event_label:"click"}),q(s.toUpperCase()),K(!0)},children:["\ud83d\udd25",1===M[s].length&&Object(g.jsx)("p",{className:"pl-1",children:J("1 arbitraje disponible")}),M[s].length>1&&Object(g.jsx)("p",{className:"pl-1",children:J("{{amount}} arbitrajes disponibles",{amount:M[s].length})})]})]}),w&&(!(s.toUpperCase()in w)||w[s.toUpperCase()]&&"ask"in w[s.toUpperCase()]&&"bid"in w[s.toUpperCase()]&&w[s.toUpperCase()].ask.length>0&&w[s.toUpperCase()].bid.length>0&&w[s.toUpperCase()].ask.filter((function(e){return ee(e,s)})).length>0&&w[s.toUpperCase()].bid.filter((function(e){return ee(e,s)})).length>0)&&Object(g.jsx)(f.a,{className:"w-full align-middle",breakpoints:{0:{slidesPerView:1},769:{slidesPerView:2}},pagination:{clickable:!0},modules:[h.d],children:Object(a.a)(Array("ask","bid")).map((function(e,t){return Object(g.jsx)(f.b,{className:"pb-6",children:Object(g.jsx)("div",{className:"py-2",children:Object(g.jsxs)("table",{className:"mt-1 m-auto",children:[Object(g.jsxs)("thead",{children:[Object(g.jsx)("tr",{children:Object(g.jsx)("th",{className:"text-left",children:Object(g.jsx)("span",{className:"px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===e&&J("COMPRAS A")||J("VENDES A")})})}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(g.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:J("PRECIO")}),Object(g.jsx)("th",{scope:"col"})]})]}),Object(g.jsx)("tbody",{children:w&&w[s.toUpperCase()]&&w[s.toUpperCase()][e]&&w[s.toUpperCase()][e].filter((function(e){return ee(e,s)})).slice(0,D||Z[e]?w[s.toUpperCase()][e].length:5).map((function(t,o){return Object(g.jsxs)(r.a.Fragment,{children:[Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex",children:[Object(g.jsxs)("a",{href:t.fields.url,target:"_blank",rel:"sponsored noreferrer",className:"grid grid-flow-col justify-start",children:[_&&Object(g.jsx)("img",{loading:"lazy",className:"w-5 sm:w-7 mr-2 self-center",src:t.fields.icon,alt:t.fields.name}),Object(g.jsx)("div",{className:"text-md self-center",children:Object(g.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:t.fields.name})})]}),t.fields.info_access&&Object(g.jsx)(i.p,{onClick:function(e){W({event:"user_action",event_category:"".concat(t.fields.id,"_home_info_access"),event_label:"click"}),window.open(t.fields.info_access_url),e.preventDefault()},className:"w-6 h-6 ml-1 cursor-pointer text-blue-500","aria-hidden":"true"},o),t.fields["available_".concat("ask"===e?"deposits":"withdrawals","_blockchains")]&&t.fields["available_".concat("ask"===e?"deposits":"withdrawals","_blockchains")].filter((function(e){return-1===["BITCOIN","ETHEREUM"].indexOf(e)})).map((function(e,c){return Object(g.jsxs)(r.a.Fragment,{children:[Object(g.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:J("{{providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:t.fields.name,blockchainName:Object(j.a)(e).name})}),Object(g.jsx)("img",{loading:"lazy",src:Object(j.a)(e).icon,className:"ml-1 w-4 h-4 self-center ".concat(e," cursor-pointer"),alt:Object(j.a)(e).name,"data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)})]},c)})),("ask"===e&&t.fields.deposits_allowed&&(!1===t.fields.fiat_deposits_operating_now||!1===t.fields.crypto_withdrawals_operating_now)||"bid"===e&&t.fields.withdrawals_allowed&&(!1===t.fields.fiat_withdrawals_operating_now||!1===t.fields.crypto_deposits_operating_now))&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.s,{className:"text-indigo-500 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)}),Object(g.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:"ask"===e&&(!1===t.fields.fiat_deposits_operating_now&&!1===t.fields.crypto_withdrawals_operating_now&&J("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===t.fields.fiat_deposits_operating_now&&J("En este momento no permite dep\xf3sitos de FIAT.")||!1===t.fields.crypto_withdrawals_operating_now&&J("En este momento no permite retiros de criptomonedas."))||"bid"===e&&(!1===t.fields.fiat_withdrawals_operating_now&&!1===t.fields.crypto_deposits_operating_now&&J("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===t.fields.fiat_withdrawals_operating_now&&J("En este momento no permite retiros de FIAT.")||!1===t.fields.crypto_deposits_operating_now&&J("En este momento no permite dep\xf3sitos de criptomonedas."))})]}),("ask"===e&&"deposits_allowed"in t.fields&&!t.fields.deposits_allowed||"bid"===e&&"withdrawals_allowed"in t.fields&&!t.fields.withdrawals_allowed)&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.d,{className:"text-red-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed")}),Object(g.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed"),children:J("{{providerName}} no permite {{operation}} {{crypto}}.",{providerName:t.fields.name,operation:"ask"===e&&J("retirar")||J("depositar"),crypto:Object(b.a)(s.toUpperCase()).name})})]}),"operation_type"in t.fields&&t.fields.operation_type.indexOf("in_person")>-1&&"operation_location"in t.fields&&t.fields.operation_location.length>0&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.C,{className:"text-gray-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length)}),Object(g.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length),children:J("{{providerName}} solo opera {{operationType}} en {{operationLocation}}.",{providerName:t.fields.name,operationType:t.fields.operation_type.reduce((function(e,t){return"".concat(e?"".concat(e," ").concat(J("o")," "):"").concat(J(t))}),null),operationLocation:t.fields.operation_location.reduce((function(e,t){return"".concat(e,", ").concat(t)}))})})]})]}),N&&N in t.fields&&e in t.fields[N]&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("td",{className:"align-top",children:[Object(g.jsxs)("div",{className:"text-md truncate w-44 grid grid-flow-col justify-between",children:[Object(g.jsx)("span",{children:N&&t.fields[N][e]}),Object(g.jsx)("span",{className:"self-center text-xs text-gray-600","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e,"-spread"),children:N&&t.fields[N]["".concat(e,"_spread")]})]}),Object(g.jsx)(p.a,{html:!0,place:z?"left":"ask"===e?"right":"left",className:"w-40",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e,"-spread"),children:"#1"===t.fields[N]["".concat(e,"_spread")]?J("ask"===e?"{{providerName}} tiene el mejor precio para comprar.":"{{providerName}} tiene el mejor precio para vender.",{providerName:t.fields.name}):J("ask"===e?"{{spread}} m\xe1s caro que comprar en {{providerName}}, quien tiene el mejor precio.":"{{spread}} m\xe1s barato que vender en {{providerName}}, quien tiene el mejor precio.",{spread:t.fields[N]["".concat(e,"_spread")].replace(/-|\+/g,""),providerName:t.fields[N]["".concat(e,"_best_price_provider_name")]})})]}),Object(g.jsx)("td",{className:"align-top",children:-1===v[s][e].indexOf(t.fields.id)&&Object(g.jsx)(i.i,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){v[s][e].indexOf(t.fields.id)>-1?v[s][e].splice(v[s][e].indexOf(t.fields.id),1):v[s][e].push(t.fields.id),y(Object(c.a)({},v))}})||Object(g.jsx)(i.j,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){v[s][e].indexOf(t.fields.id)>-1?v[s][e].splice(v[s][e].indexOf(t.fields.id),1):v[s][e].push(t.fields.id),y(Object(c.a)({},v))}})})]})]}),Object(g.jsx)("tr",{children:Object(g.jsxs)("td",{className:"text-sm text-gray-500 pb-1 sm:pb-3",colSpan:3,children:[Object(g.jsxs)("span",Object(c.a)(Object(c.a)({},t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&{"data-tip":"","data-for":"".concat(t.fields.id,"-").concat(s,"-bad-score")}),{},{children:[t.fields.score&&t.fields.score.count>0&&Object(g.jsxs)("p",{className:t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2?"inline-flex text-red-400":"inline-flex",children:[t.fields.score.rating,Object(g.jsx)(i.z,{className:"w-5 h-5 mr-1","aria-hidden":"true"})]}),v[s][e].indexOf(t.fields.id)>-1&&Object(g.jsx)(d.b,{className:["underline",t.fields.score&&t.fields.score.count>0?"-ml-1":""].join(" "),to:"".concat(J("/opiniones/")).concat(t.fields.id),target:"_blank",rel:"noreferrer",children:J("Ver opiniones")})]})),v[s][e].indexOf(t.fields.id)>-1&&t.fields.id.indexOf("p2p")>-1&&Object(g.jsx)(d.b,{className:"underline float-right",to:"".concat(J("/comparador-p2p/"),"/").concat(Object(b.a)(s.toUpperCase()).name.toLowerCase().split(" ").join("-")),children:J("Ir al comparador P2P")}),t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&Object(g.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-bad-score"),children:J("Atenci\xf3n: te recomendamos que leas atentamente las opiniones de otros usuarios antes de operar.")})]})}),N&&v[s][e].indexOf(t.fields.id)>-1&&Object(g.jsxs)(g.Fragment,{children:[-1===t.fields.id.indexOf("p2p")&&t.fields.id in C&&C[t.fields.id]&&Object(g.jsx)(g.Fragment,{children:C[t.fields.id].map((function(e,t){return Object(g.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(g.jsx)("p",{children:e.title})}),Object(g.jsx)("td",{className:"cursor-pointer text-gray-500 text-sm max-w-0",children:Object(g.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:overflow-visible",children:e.content})})]},t)}))})||!(t.fields.id in C)&&-1===t.fields.id.indexOf("p2p")&&Object(a.a)(Array(5)).map((function(e,t){return Object(g.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(g.jsx)("div",{className:"bg-gray-900 w-24 h-4 my-0.5 animate-pulse"})}),Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(g.jsx)("div",{className:"bg-gray-900 w-8 h-4 my-0.5 animate-pulse"})})]},t)})),t.fields[N]["".concat(e,"_without_fees")]&&Object(g.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(g.jsx)("p",{children:t.fields[N]["".concat(e,"_without_fees")]&&"".concat(J("Precio de")," ").concat(Object(b.a)(s.toUpperCase()).name)})}),Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(g.jsx)("p",{children:t.fields[N]["".concat(e,"_without_fees")]})})]}),-1===t.fields.id.indexOf("p2p")&&Object(g.jsx)("tr",{className:"border-t border-gray-700",children:Object(g.jsx)("td",{className:"text-sm py-1 sm:py-3",colSpan:3,children:Object(g.jsx)(d.b,{className:"underline text-blue-400",to:"/".concat(J("comisiones-y-limites"),"/").concat(t.fields.id.replaceAll("ripio-exchange","ripio")),children:J("Ver ficha t\xe9cnica")})})})]})]},o)}))||Object(a.a)(Array(5)).map((function(e,t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsxs)("div",{className:["max-w-44 sm:w-44 pr-3 sm:pr-5 pb-1 sm:pb-3.5 mb-2",0===t?"pt-1":""].join(" "),children:[Object(g.jsx)("div",{className:["bg-gray-900 mb-1 w-24 sm:w-24 h-4",Y?"animate-pulse":""].join(" ")}),Object(g.jsx)("div",{className:["bg-gray-900 w-10 sm:w-10 h-4",Y?"animate-pulse":""].join(" ")})]})}),Object(g.jsx)("td",{className:"align-top",children:Object(g.jsx)("div",{className:["max-w-40 sm:w-40 pr-3 sm:pr-11",0===t?"pt-1":""].join(" "),children:Object(g.jsx)("div",{className:["bg-gray-900 w-32 h-4",Y?"animate-pulse":""].join(" ")})})}),Object(g.jsx)("td",{className:"align-top",children:Object(g.jsx)("div",{className:["w-5 h-5 ml-3 -mr-2.5",0===t?"pt-1":""].join(" "),children:Object(g.jsx)("div",{className:["bg-gray-900 w-4 h-4",Y?"animate-pulse":""].join(" ")})})})]},t)}))}),!D&&N&&w[s.toUpperCase()]&&e in w[s.toUpperCase()]&&w[s.toUpperCase()][e].length>5&&Object(g.jsx)("tbody",{onClick:function(){Z[e]&&L(s),Z[e]=!Z[e],$(Object(c.a)({},Z))},children:Object(g.jsx)("tr",{children:Object(g.jsx)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex underline text-blue-400",children:!Z[e]&&J("Ver m\xe1s")||J("Ver menos")})})})]})})},t)}))})||w&&w[s.toUpperCase()]&&"ask"in w[s.toUpperCase()]&&"bid"in w[s.toUpperCase()]&&w[s.toUpperCase()].ask.length>0&&w[s.toUpperCase()].bid.length>0&&Object(g.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(g.jsxs)("div",{className:"px-4 col-span-3",children:[Object(g.jsx)("p",{className:"font-bold",children:J("Prueba cambiando los filtros")}),Object(g.jsx)("p",{className:"inline",children:J("No encontramos precios de {{crypto}} con los filtros que aplicaste.",{crypto:Object(b.a)(s.toUpperCase()).name})})," ",Object(g.jsx)("p",{className:"cursor-pointer underline inline",onClick:function(){k(null),T(E),U(P),A(R),I(S),B(!0)},children:J("Cambiar filtros")})]}),Object(g.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})||Object(g.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(g.jsxs)("div",{className:"px-4 col-span-3",children:[Object(g.jsx)("p",{className:"font-bold",children:J("Estamos intentando restablecer la conexi\xf3n")}),Object(g.jsx)("p",{children:J("Espera un instante para volver a ver los precios de {{crypto}}.",{crypto:Object(b.a)(s.toUpperCase()).name})})]}),Object(g.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})]});function ee(e,t){return!!N&&(!P.includes(e.fields.id)&&(!R.includes(e.fields.id)&&(e.fields.available_deposits_blockchains&&e.fields.available_deposits_blockchains.length>0&&e.fields.available_withdrawals_blockchains&&e.fields.available_withdrawals_blockchains.length>0?!(e.fields.available_deposits_blockchains.every((function(e){return S.includes(e)}))&&e.fields.available_withdrawals_blockchains.every((function(e){return S.includes(e)}))):!S.includes(Object(b.a)(t.toUpperCase()).blockchain[0]))))}}var O=function(e,t){return!1};t.default=r.a.memo(x,O)}}]);