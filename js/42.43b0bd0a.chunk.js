(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[42],{186:function(e,t,s){"use strict";s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return o}));var i={BITCOIN:{code:"BITCOIN",name:"Bitcoin",icon:"https://farm.army/token/btc.webp"},ETHEREUM:{code:"ETHEREUM",name:"Ethereum",icon:"https://farm.army/token/eth.webp"},LIGHTNING_NETWORK:{code:"LIGHTNING_NETWORK",name:"Lightning",icon:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Lightning_Network.svg"},BSC:{code:"BSC",name:"Binance Smart Chain",icon:"https://cdn.worldvectorlogo.com/logos/binance-logo.svg"},TERRA:{code:"TERRA",name:"Terra",icon:"https://cryptologos.cc/logos/terra-luna-luna-logo.svg?v=014"},POLYGON:{code:"POLYGON",name:"Polygon",icon:"https://cryptologos.cc/logos/polygon-matic-logo.svg"},TRON:{code:"TRON",name:"TRON",icon:"https://cryptologos.cc/logos/tron-trx-logo.svg"},STELLAR:{code:"STELLAR",name:"Stellar",icon:"https://cryptologos.cc/logos/stellar-xlm-logo.svg"},CARDANO:{code:"CARDANO",name:"Cardano",icon:"https://cryptologos.cc/logos/cardano-ada-logo.svg"},SOLANA:{code:"SOLANA",name:"Solana",icon:"https://cryptologos.cc/logos/solana-sol-logo.svg"},POLKADOT:{code:"POLKADOT",name:"Polkadot",icon:"https://cryptologos.cc/logos/polkadot-new-dot-logo.svg"},RIPPLE:{code:"RIPPLE",name:"Ripple",icon:"https://cryptologos.cc/logos/xrp-xrp-logo.svg"},LITECOIN:{code:"LITECOIN",name:"Litecoin",icon:"https://cryptologos.cc/logos/litecoin-ltc-logo.svg"},BITCOINCASH:{code:"BITCOINCASH",name:"Bitcoin Cash",icon:"https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg"},DOGECOIN:{code:"DOGECOIN",name:"Dogecoin",icon:"https://cryptologos.cc/logos/dogecoin-doge-logo.svg"},OPTIMISM_PBC:{code:"OPTIMISM_PBC",name:"Optimism",icon:"https://gateway.optimism.io/favicon.ico"},ARBITRUM:{code:"ARBITRUM",name:"Arbitrum One",icon:"https://portal.arbitrum.one/wp-content/uploads/2021/10/favicon.png"},RSK:{code:"RSK",name:"RSK",icon:"https://www.rsk.co/img/favicons/favicon-32x32.png"}};function c(e){try{i[e.toUpperCase()]||window.Rollbar.warning("Blockchain not found Exception: "+e)}catch(t){}return i[e.toUpperCase()]||{code:e.toUpperCase(),name:"?",icon:"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}}function o(){return i}},278:function(e,t,s){"use strict";s.r(t);var i=s(145),c=s(144),o=s(12),a=s(152),n=s(0),l=s.n(n),r=s(136),d=s(34),p=s(199),m=s(157),j=s(186),f=s(164),b=s(194),h=s(179),x=(s(177),s(170),s(171)),g=(s(166),s(2));function O(e){var t=e.contextualTrackingData,s=e.crypto,O=e.showCoinStats,u=e.coinStats,w=e.coinStatsCryptos,N=e.pricesData,v=e.selectedCurrency,y=e.showProviderIcon,_=e.providerDataExpandedByType,C=e.setProviderDataExpandedByType,k=e.providersExtraData,T=e.setTempSelectedCurrency,U=e.setTempBlockedCryptos,I=e.setTempBlockedProviders,E=e.setTempBlockedP2PProviders,P=e.setTempBlockedBlockchains,R=e.blockedCryptos,S=e.blockedProviders,A=e.blockedP2PProviders,B=e.blockedBlockchains,L=e.setPreferencesModalIsOpen,D=e.scrollToPriceTable,F=e.showAlwaysMoreOffers,M=e.rollsData,V=e.notificationsEnabled,G=e.selectedPercentageForNotifications,H=e.setNotificationSettingsModalIsOpen,K=e.selectedCryptosForNotifications,Y=e.setRollsModalIsOpen,z=e.setRollsModalCoin,J=e.isMobile,q=e.isVisible,W=Object(r.a)().t,Q=Object(m.useTracking)(t).trackEvent,X=Object(n.useState)({}),Z=Object(o.a)(X,2),$=Z[0],ee=Z[1];return Object(g.jsxs)(g.Fragment,{children:[O&&Object(g.jsxs)("div",{className:"bg-gray-600",children:[Object(g.jsxs)("div",{className:"py-3 px-3 sm:px-6 lg:px-8 flex flex-row justify-between items-center",children:[Object(g.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(g.jsxs)("div",{className:"grid grid-flow-row",children:[Object(g.jsxs)("span",{className:"text-white flex items-center",children:[Object(g.jsx)("img",{loading:"lazy",className:"w-5 mr-1",src:Object(f.a)(s.toUpperCase())&&Object(f.a)(s.toUpperCase()).icon||"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),Object(g.jsx)("h2",{className:"text-lg",children:Object(f.a)(s.toUpperCase())&&Object(f.a)(s.toUpperCase()).name||s.toUpperCase()})]}),u[s]&&u[s].price&&Object(g.jsxs)("div",{className:"flex my-1",children:[Object(g.jsx)("p",{className:"font-bold",children:u[s].price}),Object(g.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",u[s].price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:u[s].price_change_percentage_24h}),Object(g.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(f.a)(s).name.split(" ").join("-").toLowerCase()),children:W("Ver estad\xedsticas")})]})||w&&w.indexOf(s)>-1&&Object(g.jsxs)("div",{className:"flex my-1",children:[Object(g.jsx)("div",{className:["self-center bg-gray-900 w-24 sm:w-24 h-5",q?"animate-pulse":""].join(" ")}),Object(g.jsx)("div",{className:["self-center mx-3 px-2 rounded-full bg-gray-900 w-12 sm:w-12 h-6",q?"animate-pulse":""].join(" ")}),Object(g.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(f.a)(s).name.split(" ").join("-").toLowerCase()),children:W("Ver estad\xedsticas")})]})||w&&-1===w.indexOf(s)&&Object(g.jsx)("div",{className:"flex my-1",children:Object(g.jsx)(d.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(f.a)(s).name.split(" ").join("-").toLowerCase()),children:W("Ver estad\xedsticas")})})]})}),!J&&["BTC","ETH","DAI","USDC","USDT"].indexOf(s)>-1&&Object(g.jsx)("div",{className:"flex bg-gray-500 p-2",children:M&&Object.keys(M).filter((function(e){return!R.includes(e.toUpperCase())})).filter((function(e){return e===s})).length>0&&M[s].length>0&&Object(g.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){Q({event:"user_action",event_category:"".concat(s.toUpperCase(),"_rolls_modal_open"),event_label:"click"}),z(s.toUpperCase()),Y(!0)},children:["\ud83d\udd25",1===M[s].length&&Object(g.jsx)("p",{className:"pl-1",children:W("1 arbitraje disponible")}),M[s].length>1&&Object(g.jsx)("p",{className:"pl-1",children:W("{{amount}} arbitrajes disponibles",{amount:M[s].length})})]})||!J&&Object(g.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){return H(!0)},children:["\ud83d\udd14",(!V||!K.includes(s.toUpperCase()))&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("p",{className:"text-sm pl-1",children:W("Crea una alerta de arbitraje")})})||Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("p",{className:"text-sm pl-1",children:W("Tienes una alerta de arbitraje desde {{percentage}}%",{percentage:G})})})]})})]}),J&&["BTC","ETH","DAI","USDC","USDT"].indexOf(s)>-1&&M&&Object.keys(M).filter((function(e){return!R.includes(e.toUpperCase())})).filter((function(e){return e===s})).length>0&&M[s].length>0&&Object(g.jsxs)("div",{className:"flex items-center cursor-pointer bg-gray-500 px-3 py-1.5 font-bold",onClick:function(){Q({event:"user_action",event_category:"".concat(s.toUpperCase(),"_rolls_modal_open"),event_label:"click"}),z(s.toUpperCase()),Y(!0)},children:["\ud83d\udd25",1===M[s].length&&Object(g.jsx)("p",{className:"pl-1",children:W("1 arbitraje disponible")}),M[s].length>1&&Object(g.jsx)("p",{className:"pl-1",children:W("{{amount}} arbitrajes disponibles",{amount:M[s].length})})]})]}),N&&(!(s.toUpperCase()in N)||N[s.toUpperCase()]&&"ask"in N[s.toUpperCase()]&&"bid"in N[s.toUpperCase()]&&N[s.toUpperCase()].ask.length>0&&N[s.toUpperCase()].bid.length>0&&N[s.toUpperCase()].ask.filter((function(e){return te(e,s)})).length>0&&N[s.toUpperCase()].bid.filter((function(e){return te(e,s)})).length>0)&&Object(g.jsx)(h.a,{className:"w-full align-middle",breakpoints:{0:{slidesPerView:1},769:{slidesPerView:2}},pagination:{clickable:!0},modules:[x.d],children:Object(c.a)(Array("ask","bid")).map((function(e,t){return Object(g.jsx)(h.b,{className:"pb-6",children:Object(g.jsx)("div",{className:"py-2",children:Object(g.jsxs)("table",{className:"mt-1 m-auto",children:[Object(g.jsxs)("thead",{children:[Object(g.jsx)("tr",{children:Object(g.jsx)("th",{className:"text-left",children:Object(g.jsx)("span",{className:"px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===e&&W("COMPRAS A")||W("VENDES A")})})}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(g.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:W("PRECIO")}),Object(g.jsx)("th",{scope:"col"})]})]}),Object(g.jsx)("tbody",{children:N&&N[s.toUpperCase()]&&N[s.toUpperCase()][e]&&N[s.toUpperCase()][e].filter((function(e){return te(e,s)})).slice(0,F||$[e]?N[s.toUpperCase()][e].length:5).map((function(t,c){var o,n,r,m,h,x,O,u,w,N,T,U,I,E,P,R,S,A,B,L,D,F,M,V,G,H,K;return Object(g.jsxs)(l.a.Fragment,{children:[Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex",children:[Object(g.jsxs)(b.a,{condition:t.fields.id.indexOf("p2p")>-1&&v&&v in t.fields&&e in t.fields[v],className:"grid grid-flow-col justify-start",to:t.fields.url,target:-1===t.fields.id.indexOf("p2p")&&v&&v in t.fields&&e in t.fields[v]?"_blank":"_self",rel:-1===t.fields.id.indexOf("p2p")&&v&&v in t.fields&&e in t.fields[v]?"sponsored noreferrer":void 0,children:[y&&Object(g.jsx)("img",{loading:"lazy",className:"w-5 sm:w-7 mr-2 self-center",src:t.fields.icon,alt:t.fields.name}),Object(g.jsx)("div",{className:"text-md self-center",children:Object(g.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:t.fields.name})})]}),t.fields.info_access&&Object(g.jsx)(a.p,{onClick:function(e){Q({event:"user_action",event_category:"".concat(t.fields.id,"_home_info_access"),event_label:"click"}),window.open(t.fields.info_access_url),e.preventDefault()},className:"w-6 h-6 ml-1 cursor-pointer text-blue-500","aria-hidden":"true"},c),t.fields.available_blockchains&&t.fields.available_blockchains.map((function(e,i){return Object(g.jsxs)(l.a.Fragment,{children:[Object(g.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:W("{{providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:t.fields.name,blockchainName:Object(j.a)(e).name})}),Object(g.jsx)("img",{loading:"lazy",src:Object(j.a)(e).icon,className:"ml-1 w-4 h-4 self-center ".concat(e," cursor-pointer"),alt:Object(j.a)(e).name,"data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)})]},i)})),("ask"===e&&t.fields.deposits_allowed&&(!1===t.fields.fiat_deposits_operating_now||!1===t.fields.crypto_withdrawals_operating_now)||"bid"===e&&t.fields.withdrawals_allowed&&(!1===t.fields.fiat_withdrawals_operating_now||!1===t.fields.crypto_deposits_operating_now))&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(a.s,{className:"text-indigo-500 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(e)}),Object(g.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(e),children:"ask"===e&&(!1===t.fields.fiat_deposits_operating_now&&!1===t.fields.crypto_withdrawals_operating_now&&W("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===t.fields.fiat_deposits_operating_now&&W("En este momento no permite dep\xf3sitos de FIAT.")||!1===t.fields.crypto_withdrawals_operating_now&&W("En este momento no permite retiros de criptomonedas."))||"bid"===e&&(!1===t.fields.fiat_withdrawals_operating_now&&!1===t.fields.crypto_deposits_operating_now&&W("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===t.fields.fiat_withdrawals_operating_now&&W("En este momento no permite retiros de FIAT.")||!1===t.fields.crypto_deposits_operating_now&&W("En este momento no permite dep\xf3sitos de criptomonedas."))})]}),("ask"===e&&"deposits_allowed"in t.fields&&!t.fields.deposits_allowed||"bid"===e&&"withdrawals_allowed"in t.fields&&!t.fields.withdrawals_allowed)&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(a.d,{className:"text-red-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed")}),Object(g.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed"),children:W("{{providerName}} no permite {{operation}} {{crypto}}.",{providerName:t.fields.name,operation:"ask"===e&&W("retirar")||W("depositar"),crypto:Object(f.a)(s.toUpperCase()).name})})]}),"operation_type"in t.fields&&t.fields.operation_type.indexOf("in_person")>-1&&"operation_location"in t.fields&&t.fields.operation_location.length>0&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(a.C,{className:"text-gray-400 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length)}),Object(g.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-").concat(t.fields.operation_type.length,"-").concat(t.fields.operation_location.length),children:W("{{providerName}} solo opera {{operationType}} en {{operationLocation}}.",{providerName:t.fields.name,operationType:t.fields.operation_type.reduce((function(e,t){return"".concat(e?"".concat(e," ").concat(W("o")," "):"").concat(W(t))}),null),operationLocation:t.fields.operation_location.reduce((function(e,t){return"".concat(e,", ").concat(t)}))})})]})]}),v&&v in t.fields&&e in t.fields[v]&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("td",{className:"align-top",children:Object(g.jsx)("div",{className:"text-md truncate max-w-40 sm:w-40 pr-3 sm:pr-5",children:Object(g.jsx)("span",{children:v&&t.fields[v][e]})})}),Object(g.jsx)("td",{className:"align-top",children:-1===_[s][e].indexOf(t.fields.id)&&Object(g.jsx)(a.i,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){_[s][e].indexOf(t.fields.id)>-1?_[s][e].splice(_[s][e].indexOf(t.fields.id),1):_[s][e].push(t.fields.id),C(Object(i.a)({},_))}})||Object(g.jsx)(a.j,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){_[s][e].indexOf(t.fields.id)>-1?_[s][e].splice(_[s][e].indexOf(t.fields.id),1):_[s][e].push(t.fields.id),C(Object(i.a)({},_))}})})]})]}),Object(g.jsx)("tr",{children:Object(g.jsxs)("td",{className:"text-sm text-gray-500 pb-1 sm:pb-3",colSpan:3,children:[Object(g.jsxs)("span",Object(i.a)(Object(i.a)({},t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&{"data-tip":"","data-for":"".concat(t.fields.id,"-").concat(s,"-bad-score")}),{},{children:[t.fields.score&&t.fields.score.count>0&&Object(g.jsxs)("p",{className:t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2?"inline-flex text-red-400":"inline-flex",children:[t.fields.score.rating,Object(g.jsx)(a.z,{className:"w-5 h-5 mr-1","aria-hidden":"true"})]}),_[s][e].indexOf(t.fields.id)>-1&&Object(g.jsx)(d.b,{className:["underline",t.fields.score&&t.fields.score.count>0?"-ml-1":""].join(" "),to:"".concat(W("/opiniones/")).concat(t.fields.id),target:"_blank",rel:"noreferrer",children:W("Ver opiniones")})]})),t.fields.score&&t.fields.score.count>0&&t.fields.score.rating<=2&&Object(g.jsx)(p.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(t.fields.id,"-").concat(s,"-bad-score"),children:W("Atenci\xf3n: te recomendamos que leas atentamente las opiniones de otros usuarios antes de operar.")})]})}),v&&_[s][e].indexOf(t.fields.id)>-1&&Object(g.jsxs)(g.Fragment,{children:[(!(t.fields.id in k)||t.fields.id in k&&("ask"===e&&(null===(o=k[t.fields.id])||void 0===o||null===(n=o.fees)||void 0===n||null===(r=n.fiat)||void 0===r?void 0:r.deposit)||"bid"===e&&(null===(m=k[t.fields.id])||void 0===m||null===(h=m.fees)||void 0===h||null===(x=h.fiat)||void 0===x?void 0:x.withdraw)))&&Object(g.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(t.fields.id in k)&&Object(g.jsx)("div",{className:["bg-gray-900 w-24 h-4",q?"animate-pulse":""].join(" ")})||Object(g.jsx)("p",{children:"ask"===e&&(null===(O=k[t.fields.id])||void 0===O||null===(u=O.fees)||void 0===u||null===(w=u.fiat)||void 0===w?void 0:w.deposit)&&W("Fee de dep\xf3sito")||(null===(N=k[t.fields.id])||void 0===N||null===(T=N.fees)||void 0===T||null===(U=T.fiat)||void 0===U?void 0:U.withdraw)&&W("Fee de retiro")})}),Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(t.fields.id in k)&&Object(g.jsx)("div",{className:["bg-gray-900 w-8 h-4",q?"animate-pulse":""].join(" ")})||Object(g.jsx)("p",{children:"ask"===e&&(null===(I=k[t.fields.id])||void 0===I||null===(E=I.fees)||void 0===E||null===(P=E.fiat)||void 0===P?void 0:P.deposit)||(null===(R=k[t.fields.id])||void 0===R||null===(S=R.fees)||void 0===S||null===(A=S.fiat)||void 0===A?void 0:A.withdraw)})})]}),t.fields[v]["".concat(e,"_without_fees")]&&Object(g.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(g.jsx)("p",{children:t.fields[v]["".concat(e,"_without_fees")]&&"".concat(W("Precio de")," ").concat(Object(f.a)(s.toUpperCase()).name)})}),Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(g.jsx)("p",{children:t.fields[v]["".concat(e,"_without_fees")]})})]}),(!(t.fields.id in k)||t.fields.id in k&&(null===(B=k[t.fields.id])||void 0===B||null===(L=B.fees)||void 0===L||null===(D=L.crypto)||void 0===D?void 0:D[e]))&&Object(g.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(t.fields.id in k)&&Object(g.jsx)("div",{className:["bg-gray-900 w-20 h-4",q?"animate-pulse":""].join(" ")})||Object(g.jsx)("p",{children:(null===(F=k[t.fields.id])||void 0===F||null===(M=F.fees)||void 0===M||null===(V=M.crypto)||void 0===V?void 0:V[e])&&("ask"===e&&W("Fee por comprar")||W("Fee por vender"))})}),Object(g.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(t.fields.id in k)&&Object(g.jsx)("div",{className:["bg-gray-900 w-10 h-4",q?"animate-pulse":""].join(" ")})||Object(g.jsx)("p",{children:null===(G=k[t.fields.id])||void 0===G||null===(H=G.fees)||void 0===H||null===(K=H.crypto)||void 0===K?void 0:K[e]})})]}),-1===t.fields.id.indexOf("p2p")&&Object(g.jsx)("tr",{className:"border-t border-gray-700",children:Object(g.jsx)("td",{className:"text-sm py-1 sm:py-3",colSpan:3,children:Object(g.jsx)("a",{className:"underline text-blue-400",target:"_blank",rel:"noreferrer",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(W("comisiones-y-limites"),"/").concat(t.fields.id),children:W("Ver ficha t\xe9cnica")})})})]})]},c)}))||Object(c.a)(Array(5)).map((function(e,t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsxs)("div",{className:["max-w-44 sm:w-44 pr-3 sm:pr-5 pb-1 sm:pb-3.5 mb-2",0===t?"pt-1":""].join(" "),children:[Object(g.jsx)("div",{className:["bg-gray-900 mb-1 w-24 sm:w-24 h-4",q?"animate-pulse":""].join(" ")}),Object(g.jsx)("div",{className:["bg-gray-900 w-10 sm:w-10 h-4",q?"animate-pulse":""].join(" ")})]})}),Object(g.jsx)("td",{className:"align-top",children:Object(g.jsx)("div",{className:["max-w-40 sm:w-40 pr-3 sm:pr-11",0===t?"pt-1":""].join(" "),children:Object(g.jsx)("div",{className:["bg-gray-900 w-32 h-4",q?"animate-pulse":""].join(" ")})})}),Object(g.jsx)("td",{className:"align-top",children:Object(g.jsx)("div",{className:["w-5 h-5 ml-3 -mr-2.5",0===t?"pt-1":""].join(" "),children:Object(g.jsx)("div",{className:["bg-gray-900 w-4 h-4",q?"animate-pulse":""].join(" ")})})})]},t)}))}),!F&&v&&N[s.toUpperCase()]&&e in N[s.toUpperCase()]&&N[s.toUpperCase()][e].length>5&&Object(g.jsx)("tbody",{onClick:function(){$[e]&&D(s),$[e]=!$[e],ee(Object(i.a)({},$))},children:Object(g.jsx)("tr",{children:Object(g.jsx)("td",{className:"cursor-pointer max-w-44 sm:w-44 pr-3 sm:pr-5 flex underline text-blue-400",children:!$[e]&&W("Ver m\xe1s")||W("Ver menos")})})})]})})},t)}))})||N&&N[s.toUpperCase()]&&"ask"in N[s.toUpperCase()]&&"bid"in N[s.toUpperCase()]&&N[s.toUpperCase()].ask.length>0&&N[s.toUpperCase()].bid.length>0&&Object(g.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(g.jsxs)("div",{className:"px-4 col-span-3",children:[Object(g.jsx)("p",{className:"font-bold",children:W("Prueba cambiando los filtros")}),Object(g.jsx)("p",{className:"inline",children:W("No encontramos precios de {{crypto}} con los filtros que aplicaste.",{crypto:Object(f.a)(s.toUpperCase()).name})})," ",Object(g.jsx)("p",{className:"cursor-pointer underline inline",onClick:function(){T(null),U(R),I(S),E(A),P(B),L(!0)},children:W("Cambiar filtros")})]}),Object(g.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})||Object(g.jsxs)("div",{className:"grid grid-cols-3 pt-2",children:[Object(g.jsxs)("div",{className:"px-4 col-span-3",children:[Object(g.jsx)("p",{className:"font-bold",children:W("Estamos intentando restablecer la conexi\xf3n")}),Object(g.jsx)("p",{children:W("Espera un instante para volver a ver los precios de {{crypto}}.",{crypto:Object(f.a)(s.toUpperCase()).name})})]}),Object(g.jsx)("img",{loading:"lazy",className:"pr-4 w-24 col-start-4 self-end",src:"https://i.imgur.com/JIgnO8P.png"})]})]});function te(e,t){return!!v&&(!S.includes(e.fields.id)&&(!A.includes(e.fields.id)&&(e.fields.available_blockchains?!e.fields.available_blockchains.every((function(e){return B.includes(e)})):!B.includes(Object(f.a)(t.toUpperCase()).blockchain[0]))))}}var u=function(e,t){return!1};t.default=l.a.memo(O,u)}}]);