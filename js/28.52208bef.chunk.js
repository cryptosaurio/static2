(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[28],{132:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return b}));var c=o(147),n=o(12),r=o(0),a=o.n(r),s=o(138),i=o(160),l=o(1),d=o(34),p=o(218),u=o(199),m=o(205),g=o(2);function b(){var e={page:"provider-reviews",country:window.COUNTRY},t=Object(i.useTracking)(e).trackEvent,o=Object(s.a)().t,b=Object(l.h)(),h=b.providerId,j=(b.orderBy,b.page,Object(d.d)());Object(n.a)(j,1)[0];Object(r.useEffect)((function(){var o={event:"pageview"};"production"===window.ENV?t(o):console.log(e,o)}),[]);var O=Object(r.useState)(null),f=Object(n.a)(O,2),w=f[0],N=f[1],v=Object(r.useState)(null),x=Object(n.a)(v,2),y=x[0],R=x[1],A=Object(r.useState)(null),I=Object(n.a)(A,2),C=I[0],T=I[1],E=Object(r.useRef)(null),S=Object(r.useState)(!1),k=Object(n.a)(S,2),_=k[0],B=k[1];return Object(r.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/provider/").concat(h):"".concat(window.BARNEY_BR_API_URL,"/provider/").concat(h)).then((function(e){return e.json()})).then((function(e){N(e)})).catch((function(){N(null)}))}),[]),Object(r.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/get-provider-technical-data/").concat(h):"".concat(window.BARNEY_BR_API_URL,"/get-provider-technical-data/").concat(h)).then((function(e){return e.json()})).then((function(e){T(Object(c.a)(new Set(Object.values(e.metadata.crypto.available).flatMap((function(e){return e.available_deposits_blockchains,e.available_withdrawals_blockchains}))))),R(e.data)})).catch((function(){T(null)}))}),[]),Object(g.jsxs)(g.Fragment,{children:[w&&Object(g.jsx)(p.a,{page:"providerReviews",providerId:w.id}),Object(g.jsx)("div",{className:"mx-5 mt-5",children:Object(g.jsxs)("span",{className:"mt-5 items-center",children:[Object(g.jsxs)("div",{className:"flex flex-row",children:[Object(g.jsx)("a",{href:w&&w.url,target:"_blank",rel:"sponsored noreferrer",children:Object(g.jsx)("img",{ref:function(e){return E.current=e},onLoad:function(){return B(!0)},src:w&&w.icon,className:["rounded-full mx-5 w-16 h-16",!_&&"animate-pulse bg-gray-600 p-8"].join(" "),alt:w&&w.name})}),Object(g.jsxs)("div",{className:"grid grid-flow-row w-min",children:[Object(g.jsx)("div",{className:"grid grid-flow-col text-2xl",children:Object(g.jsx)("h1",{className:["font-bold",w?"sm:w-max":"animate-pulse bg-gray-600 w-36 h-7"].join(" "),children:w&&Object(g.jsx)("a",{href:w.url,target:"_blank",rel:"sponsored noreferrer",children:w.name})})}),Object(g.jsx)("div",{className:"flex",children:w&&C&&C.map((function(e,t){return Object(g.jsxs)(a.a.Fragment,{children:[Object(g.jsx)(m.a,{html:!0,place:"right",className:"w-52",effect:"solid",id:"".concat(e),children:o("{{providerName}} te permite operar con la red de {{blockchainName}}.",{providerName:w.name,blockchainName:Object(u.a)(e).name})}),Object(g.jsx)("img",{loading:"lazy",src:Object(u.a)(e).icon,className:"ml-1 w-4 h-4 self-center ".concat(e," cursor-pointer"),alt:Object(u.a)(e).name,"data-tip":!0,"data-for":"".concat(e)})]},t)}))||Object(c.a)(Array(5)).map((function(e,t){return Object(g.jsx)("div",{className:"ml-1 w-4 h-4 bg-gray-600 animate-pulse self-center shadow-md rounded-full"},t)}))})]})]}),w&&Object(g.jsx)("h2",{className:"text-xl py-5",children:o("Comisiones, l\xedmites y otros datos a tener en cuenta a la hora de operar en {{providerName}}",{providerName:w.name})})||Object(g.jsx)("div",{className:"my-6 animate-pulse bg-gray-600 h-5 w-72"}),Object(g.jsx)("div",{className:"grid md:grid-cols-2 grid-flow-row gap-10 pb-5 overflow-x-auto",children:y&&y.map((function(e,t){return Object(g.jsxs)("table",{className:"text-left bg-gray-700 rounded-b-lg",children:[Object(g.jsx)("caption",{className:"text-left font-bold pb-2 border-b-2 border-gray-500 bg-gray-700 rounded-t-lg p-3 text-lg",children:e.title}),Object(g.jsx)("thead",{children:Object(g.jsx)("tr",{className:"",children:e.content.map((function(e,t){return Object(g.jsx)("th",{className:"pt-1.5 px-3",children:Object(g.jsx)("p",{children:e.title})},t)}))})}),Object(g.jsx)("tbody",{children:Object(g.jsx)("tr",{children:e.content.map((function(e,t){return Object(g.jsx)("td",{className:"pb-1.5 px-3",children:e.content.indexOf("https")>-1?Object(g.jsx)("a",{href:e.content,target:"_blank",rel:"sponsored noreferrer",className:"text-blue-400 truncate overflow-clip whitespace-normal break-all",children:e.content}):Object(g.jsx)("p",{className:"text-blue-400",children:e.content})},t)}))})})]},t)}))||Object(c.a)(Array(8)).map((function(e,t){return Object(g.jsxs)("table",{className:"text-left bg-gray-700 rounded-b-lg",children:[Object(g.jsx)("caption",{className:"text-left font-bold pb-2 border-b-2 border-gray-500 bg-gray-700 rounded-t-lg p-3 text-lg",children:Object(g.jsx)("div",{className:"my-1 animate-pulse bg-gray-600 h-5 w-32"})}),Object(g.jsx)("thead",{children:Object(g.jsx)("tr",{className:"",children:Object(c.a)(Array(3)).map((function(e,t){return Object(g.jsx)("th",{className:"pt-1.5 px-3",children:Object(g.jsx)("div",{className:"my-1 animate-pulse bg-gray-600 h-4 w-32"})},t)}))})}),Object(g.jsx)("tbody",{children:Object(g.jsx)("tr",{children:Object(c.a)(Array(3)).map((function(e,t){return Object(g.jsx)("td",{className:"pb-1.5 px-3",children:Object(g.jsx)("div",{className:"my-1 animate-pulse bg-gray-600 h-4 max-w-44"})},t)}))})})]},t)}))})]})})]})}},147:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var c=o(26);var n=o(178),r=o(22);function a(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||Object(n.a)(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},178:function(e,t,o){"use strict";function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}o.d(t,"a",(function(){return c}))},199:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return r}));var c={BITCOIN:{code:"BITCOIN",name:"Bitcoin",icon:"https://farm.army/token/btc.webp"},ETHEREUM:{code:"ETHEREUM",name:"Ethereum",icon:"https://farm.army/token/eth.webp"},LIGHTNING_NETWORK:{code:"LIGHTNING_NETWORK",name:"Lightning",icon:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Lightning_Network.svg"},BSC:{code:"BSC",name:"Binance Smart Chain",icon:"https://cdn.worldvectorlogo.com/logos/binance-logo.svg"},TERRA:{code:"TERRA",name:"Terra",icon:"https://cryptologos.cc/logos/terra-luna-luna-logo.svg?v=014"},POLYGON:{code:"POLYGON",name:"Polygon",icon:"https://cryptologos.cc/logos/polygon-matic-logo.svg"},TRON:{code:"TRON",name:"TRON",icon:"https://cryptologos.cc/logos/tron-trx-logo.svg"},STELLAR:{code:"STELLAR",name:"Stellar",icon:"https://cryptologos.cc/logos/stellar-xlm-logo.svg"},CARDANO:{code:"CARDANO",name:"Cardano",icon:"https://cryptologos.cc/logos/cardano-ada-logo.svg"},SOLANA:{code:"SOLANA",name:"Solana",icon:"https://cryptologos.cc/logos/solana-sol-logo.svg"},POLKADOT:{code:"POLKADOT",name:"Polkadot",icon:"https://cryptologos.cc/logos/polkadot-new-dot-logo.svg"},RIPPLE:{code:"RIPPLE",name:"Ripple",icon:"https://cryptologos.cc/logos/xrp-xrp-logo.svg"},LITECOIN:{code:"LITECOIN",name:"Litecoin",icon:"https://cryptologos.cc/logos/litecoin-ltc-logo.svg"},BITCOINCASH:{code:"BITCOINCASH",name:"Bitcoin Cash",icon:"https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg"},BITCOIN_CASH:{code:"BITCOIN_CASH",name:"Bitcoin Cash",icon:"https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg"},DOGECOIN:{code:"DOGECOIN",name:"Dogecoin",icon:"https://cryptologos.cc/logos/dogecoin-doge-logo.svg"},OPTIMISM_PBC:{code:"OPTIMISM_PBC",name:"Optimism",icon:"https://gateway.optimism.io/favicon.ico"},ARBITRUM:{code:"ARBITRUM",name:"Arbitrum One",icon:"https://portal.arbitrum.one/wp-content/uploads/2021/10/favicon.png"},RSK:{code:"RSK",name:"RSK",icon:"https://www.rsk.co/img/favicons/favicon-32x32.png"},AVAX:{code:"AVAX",name:"Avalanche",icon:"https://cryptologos.cc/logos/avalanche-avax-logo.svg"},AVALANCHE:{code:"AVALANCHE",name:"Avalanche",icon:"https://cryptologos.cc/logos/avalanche-avax-logo.svg"}};function n(e){try{c[e.toUpperCase()]||window.Rollbar.warning("Blockchain not found Exception: "+e)}catch(t){}return c[e.toUpperCase()]||{code:e.toUpperCase(),name:"?",icon:"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}}function r(){return c}},218:function(e,t,o){"use strict";var c=o(12),n=o(0),r=o.n(n),a=o(156),s=o(160),i={ar:{sesocio:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido, carg\xe1 saldo y particip\xe1 de un sorteo mensual.",url:"https://www.sesocio.com/referrals/Y3J5cHRvc2F1cmlvMDBAZ21haWwuY29t?s=c"},buenbit:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro c\xf3digo IQNKVKP, invert\xed desde 50 USD por 30 d\xedas y gan\xe1 15 DAI.",url:"https://www.buenbit.com/"},letsbit:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido, verific\xe1 tu cuenta a nivel 3 y particip\xe1 de un sorteo mensual.",url:"https://letsbit.io/register/IDF37AE929E9"},cryptomkt:{title:"Gan\xe1 con nuestro referido",description:"Al registrate con nuestro referido y comprar criptomonedas en CryptoMarket por ARS $ 20.000 o m\xe1s gan\xe1s 10 USDT.",url:"https://www.cryptomkt.com/account/register?ref=215813"},satoshitango:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido y obten\xe9 10 d\xedas para operar criptomonedas sin comisi\xf3n.",url:"https://www.satoshitango.com/gift/40OTRX9K"},ftx:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido para tener un 5% de descuento en costos de operaci\xf3n.",url:"https://ftx.com/referrals#a=cryptosaurio"}}},l={ar:{tools:{title:"20% OFF para comprar tu Ledger",description:"Us\xe1 nuestro c\xf3digo FRIEND-XDNVBSR al momento de hacer la compra y disfrut\xe1 el descuento.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}},br:{tools:{title:"20% DE DESCONTO para comprar seu Ledger",description:"Use nosso c\xf3digo FRIEND-XDNVBSR na hora da compra e aproveite o desconto.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}},any:{tools:{title:"20% OFF para comprar tu Ledger",description:"Usa nuestro c\xf3digo FRIEND-XDNVBSR al momento de hacer la compra y disfruta el descuento.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}}};var d=o(2);function p(e){var t,o=e.page,r=e.providerId,p={page:"provider-reviews",country:window.COUNTRY},u=Object(s.useTracking)(p).trackEvent,m={event:"user_action",event_category:"".concat(o,"_").concat(r?"".concat(r,"_"):"","referalNotification"),event_label:"click"},g={event:"user_action",event_category:"".concat(o,"_").concat(r?"".concat(r,"_"):"","referalNotification"),event_label:"close"},b=Object(n.useState)(!1),h=Object(c.a)(b,2),j=h[0],O=h[1];return(t=r?function(e){return window.COUNTRY in i&&Object.keys(i[window.COUNTRY]).length>0?i[window.COUNTRY][e]:null}(r):function(e){return window.COUNTRY in l&&Object.keys(l[window.COUNTRY]).length>0?l[window.COUNTRY][e]:"any"in l&&Object.keys(l.any).length>0?l.any[e]:null}(o))&&!j&&t&&Object(d.jsxs)("div",{className:"bg-white rounded-lg border-gray-300 border p-3 shadow-lg absolute top-5 right-5 cursor-pointer z-30",children:[Object(d.jsxs)("div",{className:"grid grid-flow-col items-center",onClick:function(){"production"===window.ENV?u(m):console.log(p,m),window.open(t.url)},children:[Object(d.jsx)("p",{className:"text-4xl",children:"\ud83c\udf81"}),Object(d.jsxs)("div",{className:"ml-2 mr-6 text-xs w-44",children:[Object(d.jsx)("p",{className:"font-semibold text-black",children:t.title}),Object(d.jsx)("p",{className:"block text-gray-500",children:t.description})]})]}),Object(d.jsx)(a.E,{className:"w-5 h-5 absolute top-2 right-2 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(e){e.preventDefault(),"production"===window.ENV?u(g):console.log(p,g),O(!0)}})]})||null}var u=function(e,t){return e.providerId===t.providerId};t.a=r.a.memo(p,u)}}]);