(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[39],{183:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return c}));var i={BITCOIN:{code:"BITCOIN",name:"Bitcoin",icon:"https://farm.army/token/btc.webp"},ETHEREUM:{code:"ETHEREUM",name:"Ethereum",icon:"https://farm.army/token/eth.webp"},LIGHTNING_NETWORK:{code:"LIGHTNING_NETWORK",name:"Lightning",icon:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Lightning_Network.svg"},BSC:{code:"BSC",name:"Binance Smart Chain",icon:"https://cdn.worldvectorlogo.com/logos/binance-logo.svg"},TERRA:{code:"TERRA",name:"Terra",icon:"https://cryptologos.cc/logos/terra-luna-luna-logo.svg?v=014"},POLYGON:{code:"POLYGON",name:"Polygon",icon:"https://cryptologos.cc/logos/polygon-matic-logo.svg"},TRON:{code:"TRON",name:"TRON",icon:"https://cryptologos.cc/logos/tron-trx-logo.svg"},STELLAR:{code:"STELLAR",name:"Stellar",icon:"https://cryptologos.cc/logos/stellar-xlm-logo.svg"},CARDANO:{code:"CARDANO",name:"Cardano",icon:"https://cryptologos.cc/logos/cardano-ada-logo.svg"},SOLANA:{code:"SOLANA",name:"Solana",icon:"https://cryptologos.cc/logos/solana-sol-logo.svg"},POLKADOT:{code:"POLKADOT",name:"Polkadot",icon:"https://cryptologos.cc/logos/polkadot-new-dot-logo.svg"},RIPPLE:{code:"RIPPLE",name:"Ripple",icon:"https://cryptologos.cc/logos/xrp-xrp-logo.svg"},LITECOIN:{code:"LITECOIN",name:"Litecoin",icon:"https://cryptologos.cc/logos/litecoin-ltc-logo.svg"},BITCOINCASH:{code:"BITCOINCASH",name:"Bitcoin Cash",icon:"https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg"},DOGECOIN:{code:"DOGECOIN",name:"Dogecoin",icon:"https://cryptologos.cc/logos/dogecoin-doge-logo.svg"},OPTIMISM_PBC:{code:"OPTIMISM_PBC",name:"Optimism",icon:"https://gateway.optimism.io/favicon.ico"},ARBITRUM:{code:"ARBITRUM",name:"Arbitrum One",icon:"https://portal.arbitrum.one/wp-content/uploads/2021/10/favicon.png"}};function o(e){return i[e.toUpperCase()]}function c(){return i}},285:function(e,t,s){"use strict";s.r(t);var i=s(139),o=s(145),c=s(12),a=s(150),n=s(0),r=s.n(n),l=s(134),d=s(170),p=s.n(d),m=s(34),j=s(196),f=s(151),b=s(183),h=s(166),x=s(156),O=s(190),g=s(165),u=s(2);function w(e){var t=e.contextualTrackingData,s=e.crypto,d=e.showCoinStats,w=e.coinStats,N=e.coinStatsCryptos,v=e.pricesData,y=e.selectedCurrency,_=e.showProviderIcon,C=e.providerDataExpandedByType,k=e.setProviderDataExpandedByType,T=e.providersExtraData,U=e.setTempSelectedCurrency,I=e.setTempBlockedCryptos,E=e.setTempBlockedProviders,P=e.setTempBlockedP2PProviders,A=e.setTempBlockedBlockchains,R=e.blockedCryptos,S=e.blockedProviders,L=e.blockedP2PProviders,B=e.blockedBlockchains,D=e.setPreferencesModalIsOpen,F=e.scrollToPriceTable,M=e.showAlwaysMoreOffers,G=Object(l.a)().t,V=Object(f.useTracking)(t).trackEvent,Y=Object(n.useState)({}),H=Object(c.a)(Y,2),z=H[0],J=H[1];return Object(u.jsxs)(u.Fragment,{children:[d&&Object(u.jsx)("div",{className:"bg-gray-600",children:Object(u.jsx)("div",{className:"py-3 px-3 sm:px-6 lg:px-8",children:Object(u.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(u.jsxs)("div",{className:"grid grid-flow-row",children:[Object(u.jsxs)("span",{className:"text-white flex items-center",children:[Object(u.jsx)("img",{loading:"lazy",className:"w-5 mr-1",src:Object(x.a)(s.toUpperCase())&&Object(x.a)(s.toUpperCase()).icon||"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),Object(u.jsx)("h3",{className:"text-lg",children:Object(x.a)(s.toUpperCase())&&Object(x.a)(s.toUpperCase()).name||s.toUpperCase()})]}),w[s]&&w[s].price&&Object(u.jsxs)("div",{className:"flex my-1",children:[Object(u.jsx)("p",{className:"font-bold",children:w[s].price}),Object(u.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",w[s].price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:w[s].price_change_percentage_24h}),Object(u.jsx)(m.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(x.a)(s).name.split(" ").join("-").toLowerCase()),children:G("Ver estad\xedsticas")})]})||N&&N.indexOf(s)>-1&&Object(u.jsxs)("div",{className:"flex my-1",children:[Object(u.jsx)("div",{className:"self-center animate-pulse bg-gray-900 w-24 sm:w-24 h-5"}),Object(u.jsx)("div",{className:"self-center mx-3 px-2 rounded-full animate-pulse bg-gray-900 w-12 sm:w-12 h-6"}),Object(u.jsx)(m.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(x.a)(s).name.split(" ").join("-").toLowerCase()),children:G("Ver estad\xedsticas")})]})||N&&-1===N.indexOf(s)&&Object(u.jsx)("div",{className:"flex my-1",children:Object(u.jsx)(m.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(x.a)(s).name.split(" ").join("-").toLowerCase()),children:G("Ver estad\xedsticas")})})]})})})}),v&&(!(s.toUpperCase()in v)||v[s.toUpperCase()]&&"ask"in v[s.toUpperCase()]&&"bid"in v[s.toUpperCase()]&&v[s.toUpperCase()].ask.length>0&&v[s.toUpperCase()].bid.length>0&&v[s.toUpperCase()].ask.filter((function(e){return K(e,s)})).length>0&&v[s.toUpperCase()].bid.filter((function(e){return K(e,s)})).length>0)&&Object(u.jsx)(p.a,{className:"align-middle",responsive:Object(h.a)().responsive,arrows:!1,showDots:!0,customDot:Object(u.jsx)(g.a,{}),children:Object(o.a)(Array("ask","bid")).map((function(e,t){return Object(u.jsx)("div",{className:"py-2 overflow-x-auto no-scrollbar",children:Object(u.jsxs)("table",{className:"mt-1 m-auto",children:[Object(u.jsxs)("thead",{children:[Object(u.jsx)("tr",{children:Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===e&&G("COMPRAS A")||G("VENDES A")})})}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(u.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:G("PRECIO")}),Object(u.jsx)("th",{scope:"col"})]})]}),Object(u.jsx)("tbody",{children:v&&v[s.toUpperCase()]&&v[s.toUpperCase()][e]&&v[s.toUpperCase()][e].filter((function(e){return K(e,s)})).slice(0,M||z[e]?v[s.toUpperCase()][e].length:5).map((function(t,o){var c,n,l,d,p,f,h,g,w,N,v,U,I,E,P,A,R,S,L,B,D,F,M,Y,H,z,J;return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex",children:[Object(u.jsxs)(O.a,{condition:t.fields.id.indexOf("p2p")>-1&&y&&y in t.fields&&e in t.fields[y],className:"grid grid-flow-col justify-start",to:t.fields.url,target:-1===t.fields.id.indexOf("p2p")&&y&&y in t.fields&&e in t.fields[y]?"_blank":"_self",rel:-1===t.fields.id.indexOf("p2p")&&y&&y in t.fields&&e in t.fields[y]?"sponsored noreferrer":void 0,children:[_&&Object(u.jsx)("img",{loading:"lazy",className:"w-5 sm:w-7 mr-2 self-center",src:t.fields.icon,"data-tip":!0,"data-for":t.fields.name}),Object(u.jsx)("div",{className:"text-md self-center",children:Object(u.jsx)("span",{className:"flex",children:Object(u.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:t.fields.name})})})]}),t.fields.info_access&&Object(u.jsx)(a.u,{onClick:function(e){V({event:"user_action",event_category:"".concat(t.fields.id,"_home_info_access"),event_label:"click"}),window.open(t.fields.info_access_url),e.preventDefault()},className:"w-6 h-6 ml-1 cursor-pointer text-blue-500","aria-hidden":"true"},o),t.fields.available_blockchains&&t.fields.available_blockchains.map((function(e,i){return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)(j.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:G("{{providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:t.fields.name,blockchainName:Object(b.a)(e).name})}),Object(u.jsx)("img",{loading:"lazy",src:Object(b.a)(e).icon,className:"ml-1 w-4 h-4 self-center ".concat(e," cursor-pointer"),"data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)})]},i)})),("ask"===e&&t.fields.deposits_allowed&&(!1===t.fields.fiat_deposits_operating_now||!1===t.fields.crypto_withdrawals_operating_now)||"bid"===e&&t.fields.withdrawals_allowed&&(!1===t.fields.fiat_withdrawals_operating_now||!1===t.fields.crypto_deposits_operating_now))&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(a.x,{className:"text-indigo-500 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)}),Object(u.jsx)(j.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:"ask"===e&&(!1===t.fields.fiat_deposits_operating_now&&!1===t.fields.crypto_withdrawals_operating_now&&G("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===t.fields.fiat_deposits_operating_now&&G("En este momento no permite dep\xf3sitos de FIAT.")||!1===t.fields.crypto_withdrawals_operating_now&&G("En este momento no permite retiros de criptomonedas."))||"bid"===e&&(!1===t.fields.fiat_withdrawals_operating_now&&!1===t.fields.crypto_deposits_operating_now&&G("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===t.fields.fiat_withdrawals_operating_now&&G("En este momento no permite retiros de FIAT.")||!1===t.fields.crypto_deposits_operating_now&&G("En este momento no permite dep\xf3sitos de criptomonedas."))})]}),("ask"===e&&"deposits_allowed"in t.fields&&!t.fields.deposits_allowed||"bid"===e&&"withdrawals_allowed"in t.fields&&!t.fields.withdrawals_allowed)&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(a.f,{className:"text-red-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed")}),Object(u.jsx)(j.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed"),children:G("{{providerName}} no permite {{operation}} {{crypto}}.",{providerName:t.fields.name,operation:"ask"===e&&G("retirar")||G("depositar"),crypto:Object(x.a)(s.toUpperCase()).name})})]}),"operation_type"in t.fields&&t.fields.operation_type.indexOf("in_person")>-1&&"operation_location"in t.fields&&t.fields.operation_location.length>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(a.G,{className:"text-gray-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length)}),Object(u.jsx)(j.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length),children:G("{{providerName}} solo opera {{operationType}} en {{operationLocation}}.",{providerName:t.fields.name,operationType:t.fields.operation_type.reduce((function(e,t){return"".concat(e?"".concat(e," ").concat(G("o")," "):"").concat(G(t))}),null),operationLocation:t.fields.operation_location.reduce((function(e,t){return"".concat(e,", ").concat(t)}))})})]})]}),y&&y in t.fields&&e in t.fields[y]&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{className:"align-top",children:Object(u.jsx)("div",{className:"text-md truncate max-w-40 sm:w-40 pr-3 sm:pr-5",children:Object(u.jsx)("span",{children:y&&t.fields[y][e]})})}),Object(u.jsx)("td",{className:"align-top",children:-1===C[s][e].indexOf(t.fields.id)&&Object(u.jsx)(a.l,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){C[s][e].indexOf(t.fields.id)>-1?C[s][e].splice(C[s][e].indexOf(t.fields.id),1):C[s][e].push(t.fields.id),k(Object(i.a)({},C))}})||Object(u.jsx)(a.o,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){C[s][e].indexOf(t.fields.id)>-1?C[s][e].splice(C[s][e].indexOf(t.fields.id),1):C[s][e].push(t.fields.id),k(Object(i.a)({},C))}})})]})]}),Object(u.jsx)("tr",{children:Object(u.jsx)("td",{className:"text-sm text-gray-500 pb-1 sm:pb-3",colSpan:3,children:Object(u.jsxs)("span",{className:"flex",children:[t.fields.score&&t.fields.score.count>0&&Object(u.jsxs)("p",{className:t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2?"flex text-red-400":"flex",children:[t.fields.score.rating,Object(u.jsx)(a.D,{className:"w-5 h-5 mr-1","aria-hidden":"true"})]}),C[s][e].indexOf(t.fields.id)>-1&&Object(u.jsx)(m.b,{className:["underline",t.fields.score&&t.fields.score.count>0?"-ml-1":""].join(" "),to:"".concat(G("/opiniones/")).concat(t.fields.id),target:"_blank",rel:"noreferrer",children:G("Ver opiniones")})]})})}),y&&C[s][e].indexOf(t.fields.id)>-1&&Object(u.jsxs)(u.Fragment,{children:[(!(t.fields.id in T)||t.fields.id in T&&("ask"===e&&(null===(c=T[t.fields.id])||void 0===c||null===(n=c.fees)||void 0===n||null===(l=n.fiat)||void 0===l?void 0:l.deposit)||"bid"===e&&(null===(d=T[t.fields.id])||void 0===d||null===(p=d.fees)||void 0===p||null===(f=p.fiat)||void 0===f?void 0:f.withdraw)))&&Object(u.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(t.fields.id in T)&&Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-24 h-4"})||Object(u.jsx)("p",{children:"ask"===e&&(null===(h=T[t.fields.id])||void 0===h||null===(g=h.fees)||void 0===g||null===(w=g.fiat)||void 0===w?void 0:w.deposit)&&G("Fee de dep\xf3sito")||(null===(N=T[t.fields.id])||void 0===N||null===(v=N.fees)||void 0===v||null===(U=v.fiat)||void 0===U?void 0:U.withdraw)&&G("Fee de retiro")})}),Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(t.fields.id in T)&&Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-8 h-4"})||Object(u.jsx)("p",{children:"ask"===e&&(null===(I=T[t.fields.id])||void 0===I||null===(E=I.fees)||void 0===E||null===(P=E.fiat)||void 0===P?void 0:P.deposit)||(null===(A=T[t.fields.id])||void 0===A||null===(R=A.fees)||void 0===R||null===(S=R.fiat)||void 0===S?void 0:S.withdraw)})})]}),t.fields[y]["".concat(e,"_without_fees")]&&Object(u.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(u.jsx)("p",{children:t.fields[y]["".concat(e,"_without_fees")]&&"".concat(G("Precio de")," ").concat(Object(x.a)(s.toUpperCase()).name)})}),Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(u.jsx)("p",{children:t.fields[y]["".concat(e,"_without_fees")]})})]}),(!(t.fields.id in T)||t.fields.id in T&&(null===(L=T[t.fields.id])||void 0===L||null===(B=L.fees)||void 0===B||null===(D=B.crypto)||void 0===D?void 0:D[e]))&&Object(u.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(t.fields.id in T)&&Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-20 h-4"})||Object(u.jsx)("p",{children:(null===(F=T[t.fields.id])||void 0===F||null===(M=F.fees)||void 0===M||null===(Y=M.crypto)||void 0===Y?void 0:Y[e])&&("ask"===e&&G("Fee por comprar")||G("Fee por vender"))})}),Object(u.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(t.fields.id in T)&&Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-10 h-4"})||Object(u.jsx)("p",{children:null===(H=T[t.fields.id])||void 0===H||null===(z=H.fees)||void 0===z||null===(J=z.crypto)||void 0===J?void 0:J[e]})})]}),-1===t.fields.id.indexOf("p2p")&&Object(u.jsx)("tr",{className:"border-t border-gray-700",children:Object(u.jsx)("td",{className:"text-sm py-1 sm:py-3",colSpan:3,children:Object(u.jsx)("a",{className:"underline text-blue-400",target:"_blank",rel:"noreferrer",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(G("comisiones-y-limites"),"/").concat(t.fields.id),children:G("Ver ficha t\xe9cnica")})})})]})]},o)}))||Object(o.a)(Array(3)).map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"pb-1 sm:pb-3",children:Object(u.jsxs)("div",{className:"w-44",children:[Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 mb-1 w-24 sm:w-24 h-4"}),Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-10 sm:w-10 h-4"})]})}),Object(u.jsx)("td",{className:"mt-1 sm:mt-3 align-top",children:Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-32 h-4"})}),Object(u.jsx)("td",{className:"align-top",children:Object(u.jsx)("div",{className:"animate-pulse bg-gray-900 w-4 sm:w-4 h-4"})})]},t)}))}),!M&&y&&v[s.toUpperCase()]&&e in v[s.toUpperCase()]&&v[s.toUpperCase()][e].length>5&&Object(u.jsx)("tbody",{onClick:function(){z[e]&&F(s),z[e]=!z[e],J(Object(i.a)({},z))},children:Object(u.jsx)("tr",{children:Object(u.jsx)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex underline text-blue-400",children:!z[e]&&G("Ver m\xe1s")||G("Ver menos")})})})]})},t)}))})||v&&v[s.toUpperCase()]&&"ask"in v[s.toUpperCase()]&&"bid"in v[s.toUpperCase()]&&v[s.toUpperCase()].ask.length>0&&v[s.toUpperCase()].bid.length>0&&Object(u.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(u.jsxs)("div",{className:"px-4 col-span-3",children:[Object(u.jsx)("p",{className:"font-bold",children:G("Prueba cambiando los filtros")}),Object(u.jsx)("p",{className:"inline",children:G("No encontramos precios de {{crypto}} con los filtros que aplicaste.",{crypto:Object(x.a)(s.toUpperCase()).name})})," ",Object(u.jsx)("p",{className:"cursor-pointer underline inline",onClick:function(){U(null),I(R),E(S),P(L),A(B),D(!0)},children:G("Cambiar filtros")})]}),Object(u.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})||Object(u.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(u.jsxs)("div",{className:"px-4 col-span-3",children:[Object(u.jsx)("p",{className:"font-bold",children:G("Estamos intentando restablecer la conexi\xf3n")}),Object(u.jsx)("p",{children:G("Espera un instante para volver a ver los precios de {{crypto}}.",{crypto:Object(x.a)(s.toUpperCase()).name})})]}),Object(u.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})]});function K(e,t){return!!y&&(!S.includes(e.fields.id)&&(!L.includes(e.fields.id)&&(e.fields.available_blockchains?!e.fields.available_blockchains.every((function(e){return B.includes(e)})):!B.includes(Object(x.a)(t.toUpperCase()).blockchain[0]))))}}var N=function(e,t){return!1};t.default=r.a.memo(w,N)}}]);