(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[13],{151:function(e,a,n){},152:function(e,a,n){"use strict";var o=n(0),i=n.n(o),t=n(1);function c(e){var a=e.active,n=e.onClick;return Object(t.jsx)("li",{className:"inline-block",onClick:function(){return n&&n()},children:Object(t.jsx)("label",{className:["cursor-pointer block text-4xl text-white",a||"text-gray-700"].join(" "),children:"\u2022"})})}var s=function(e,a){return e.active===a.active};a.a=i.a.memo(c,s)},153:function(e,a,n){"use strict";function o(){return{responsive:{desktop:{breakpoint:{max:9999,min:769},items:2},mobile:{breakpoint:{max:768,min:0},items:1}},fixed:{desktop:{breakpoint:{max:9999,min:0},items:1}}}}n.d(a,"a",(function(){return o}))},159:function(e,a,n){"use strict";var o=n(0),i=n.n(o),t=n(26),c=n(162),s=n.n(c),r=(n(163),n(151),n(28)),l=n(152),d=n(153),p=n(1);function m(e){var a=e.location,n={page:a,country:window.COUNTRY},o=Object(t.useTracking)(n),i=(o.Track,o.trackEvent),c=Object(r.a)(window.COUNTRY,a,"opportunityBanner");return"home"===a&&(c=c.slice(0,1)),(c=c.sort((function(){return.5-Math.random()}))).forEach((function(e){var a={event:"system_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"show"};"production"===window.ENV?i(a):console.log(n,a)})),Object(p.jsx)(s.a,{className:"rolls-carousel",responsive:Object(d.a)().fixed,renderDotsOutside:!0,showDots:c.length>1,infinite:c.length>1,autoPlay:c.length>1,autoPlaySpeed:4e3,customDot:Object(p.jsx)(l.a,{}),arrows:!1,children:c.map((function(e,a){var o={event:"user_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"click"};return Object(p.jsxs)("picture",{onClick:function(){"production"===window.ENV?i(o):console.log(n,o),window.open(e.sponsoredUrl)},children:[Object(p.jsx)("source",{srcSet:e.mobileImgUrl,media:"(max-width: 639px)",width:"400",height:e.mobileImgHeightOverride||"100"}),Object(p.jsx)("source",{srcSet:e.desktopImgUrl,media:"(min-width: 640px)",width:"820",height:e.desktopImgHeightOverride||"100"}),Object(p.jsx)("img",{className:"cursor-pointer mx-auto my-2",src:e.desktopImgUrl,width:"820",height:e.desktopImgHeightOverride||"100"})]},a)}))})}a.a=i.a.memo(m,(function(e,a){return e.location===a.location}))},184:function(e,a,n){"use strict";n.d(a,"a",(function(){return i})),n.d(a,"b",(function(){return t}));var o={BITCOIN:{code:"BITCOIN",name:"Bitcoin",icon:"https://farm.army/token/btc.webp"},ETHEREUM:{code:"ETHEREUM",name:"Ethereum",icon:"https://farm.army/token/eth.webp"},LIGHTNING_NETWORK:{code:"LIGHTNING_NETWORK",name:"Lightning",icon:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Lightning_Network.svg"},BSC:{code:"BSC",name:"Binance Smart Chain",icon:"https://cdn.worldvectorlogo.com/logos/binance-logo.svg"},TERRA:{code:"TERRA",name:"Terra",icon:"https://cryptologos.cc/logos/terra-luna-luna-logo.svg?v=014"},POLYGON:{code:"POLYGON",name:"Polygon",icon:"https://cryptologos.cc/logos/polygon-matic-logo.svg"},TRON:{code:"TRON",name:"TRON",icon:"https://cryptologos.cc/logos/tron-trx-logo.svg"},STELLAR:{code:"STELLAR",name:"Stellar",icon:"https://cryptologos.cc/logos/stellar-xlm-logo.svg"},CARDANO:{code:"CARDANO",name:"Cardano",icon:"https://cryptologos.cc/logos/cardano-ada-logo.svg"},SOLANA:{code:"SOLANA",name:"Solana",icon:"https://cryptologos.cc/logos/solana-sol-logo.svg"},POLKADOT:{code:"POLKADOT",name:"Polkadot",icon:"https://cryptologos.cc/logos/polkadot-new-dot-logo.svg"},RIPPLE:{code:"RIPPLE",name:"Ripple",icon:"https://cryptologos.cc/logos/xrp-xrp-logo.svg"},LITECOIN:{code:"LITECOIN",name:"Litecoin",icon:"https://cryptologos.cc/logos/litecoin-ltc-logo.svg"},BITCOINCASH:{code:"BITCOINCASH",name:"Bitcoin Cash",icon:"https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg"},DOGECOIN:{code:"DOGECOIN",name:"Dogecoin",icon:"https://cryptologos.cc/logos/dogecoin-doge-logo.svg"}};function i(e){return o[e.toUpperCase()]}function t(){return o}},229:function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));var o=n(18),i=n(230),t=(n(0),n(13)),c=n(1),s=["children","to","condition"];function r(e){var a=e.children,n=e.to,r=e.condition,l=Object(i.a)(e,s);return r&&n?Object(c.jsx)(t.b,Object(o.a)(Object(o.a)({to:n},l),{},{children:a})):Object(c.jsx)("a",Object(o.a)(Object(o.a)({href:n},l),{},{children:a}))}},401:function(e,a,n){},717:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return L}));var o=n(25),i=n(43),t=n(18),c=n(4),s=n(0),r=n.n(s),l=n(17),d=n(123),p=n(667),m=n(122),u=n(269),b=n(6),j=n(225),f=n(153),h=n(152),x=n(162),g=n.n(x),O=(n(163),n(151),n(26)),v=n(191),N=n(184),w=n(49),y=n(159),_=n(271),C=n(1);function k(e){var a=e.coin;return Object(C.jsx)(_.MiniChart,{colorTheme:"dark",dateRange:"3M",autosize:!0,symbol:"".concat(a,"USD"),locale:"br"!==window.COUNTRY?"es":"pt"})}var E=r.a.memo(k,(function(){return!0}));function S(e){var a=e.coin;return Object(C.jsx)(_.AdvancedRealTimeChart,{interval:"240",theme:"dark",autosize:!0,symbol:"".concat(a,"USD"),locale:"br"!==window.COUNTRY?"es":"pt",container_id:"tradingview_00895"})}var T=r.a.memo(S,(function(e,a){return e.coin===a.coin})),A={BTC:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"Es la criptomoneda m\xe1s popular a la fecha. Fue creada en 2008 y utiliza tecnolog\xeda blockchain, donde se registra cada movimiento de manera descentralizada logrando transacciones seguras e inalterables."},{title:"\xbfQu\xe9 es la blockchain?",description:"La blockchain es una tecnolog\xeda que registra cada transacci\xf3n en m\xfaltiples nodos. Como todos tienen la misma copia de la informaci\xf3n, se garantiza que est\xe9 disponible todo el tiempo y que nadie la pueda alterar, es decir que no se puede perder, modificar ni eliminar."},{title:"\xbfQu\xe9 es el halving?",description:"Lo primero que debes saber es que el n\xfamero de bitcoins es limitado: 21 millones. Para controlar su emisi\xf3n, cada aproximadamente cuatro a\xf1os, hay un evento llamado halving, en el que el n\xfamero de bitcoins que se libera por minar se reduce a la mitad."}],ETH:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:'Ethereum es en realidad una plataforma digital. Su moneda se llama Ether y, al igual que el Bitcoin, funciona con tecnolog\xeda blockchain. Sus operaciones se realizan por medio de "smart contracts" que pueden programar los usuarios a gusto.'},{title:'\xbfQu\xe9 es un "smart contract"?',description:'Es un contrato programado por los usuarios que contiene instrucciones que se almacenan en una blockchain. Son descentralizados y no necesitan intermediarios. Lo interesante de los "smart contracts" es que se pueden escribir a gusto, permitiendo no solo realizar transferencias de criptomonedas, sino tambi\xe9n crear aplicaciones sobre la red de Ethereum.'}],DAI:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"Es una criptomoneda de valor estable en relaci\xf3n al d\xf3lar. Es descentralizada y sus transacciones se realizan a trav\xe9s de \u201csmart contracts\u201d en la red de Ethereum. Eso les da respaldo y estabilidad."},{title:'\xbfQu\xe9 es una "stablecoin"?',description:"Es una criptomoneda que est\xe1 respaldada con alg\xfan activo, en el caso de DAI, el Ether. DAI opera en la plataforma de Ethereum y utiliza el valor del Ether para mantenerse ligada al precio del d\xf3lar. Entonces, para generar un DAI se \u201cpagan\u201d m\xe1s Ethers a modo de dep\xf3sito para mantener su valor estable en el tiempo."}],USDC:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"Es una criptomoneda de valor estable en relaci\xf3n al d\xf3lar. Sus operaciones utilizan la plataforma de Ethereum y est\xe1n reguladas por el Consorcio Centre."},{title:'\xbfQu\xe9 es una "stablecoin"?',description:"Es una criptomoneda que est\xe1 respaldada con alg\xfan activo, en el caso de USDC, el d\xf3lar. Las USDC son gestionadas por el Consorcio Centre, quien se debe asegurar que por cada unidad que circule, exista su equivalente en d\xf3lares en un banco."}],USDT:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:'Es una criptomoneda de valor estable en relaci\xf3n al d\xf3lar. Sus operaciones son centralizadas y las regula una empresa llamada Tether, quien se encarga de respaldarla. El nombre USDT se obtiene de la uni\xf3n entre USD (c\xf3digo del d\xf3lar de Estados Unidos) y la letra "T" de Tether.'},{title:'\xbfQu\xe9 es una "stablecoin"?',description:"Es una criptomoneda que est\xe1 respaldada con alg\xfan activo, en el caso de USDT, el d\xf3lar. Las USDT est\xe1n respaldadas por la empresa Tether, quien se debe asegurar que por cada unidad que circule, exista su equivalente en d\xf3lares en un banco."}],UST:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"TerraUSD (UST) es una stablecoin algor\xedtmica de la blockchain Terra. Es escalable y su valor se mantiene cercano o igual al dolar estadounidense. TerraUSD fu\xe9 creada para sumar valor a la comunidad Terra y ofrecer una soluci\xf3n escalable para los problemas encontrados en otras criptomonedas l\xedderes como DAI. Por lo tanto, TerraUSD promete a los usuarios altos niveles de escabilidad, buen inter\xe9s y interoperabilidad entre redes."},{title:'\xbfQu\xe9 es una "stablecoin"?',description:"Es una criptomoneda que est\xe1 respaldada con alg\xfan activo, en el caso de UST, por el token Luna de la red Terra."}],BNB:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"Es la criptomoneda de la plataforma Binance, quien respalda su valor y subsidia los costos de transacci\xf3n, logrando que sean de los m\xe1s bajos del mercado."}],BUSD:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"Binance USD (BUSD) es una moneda estable respaldada en USD 1:1 emitida por Binance (en asociaci\xf3n con Paxos), aprobada y regulada por el Departamento de Servicios Financieros del Estado de Nueva York (NYDFS). El Informe de Auditor\xeda Mensual de BUSD se puede ver en el sitio web oficial. Lanzado el 5 de septiembre de 2019, BUSD tiene como objetivo fusionar la estabilidad del d\xf3lar con la tecnolog\xeda blockchain. Es una moneda fiduciaria digital, emitida como ERC-20 y es compatible con BEP-2."}],LUNA:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"LUNA se utiliza en forma de colateral para conseguir la estabilidad del precio de la moneda estable UST. A diferencia de otras stablecoins, como Tether, cuyo precio est\xe1 directamente vinculado al d\xf3lar, la plataforma Terra utiliza una pol\xedtica monetaria el\xe1stica para mantener la estabilidad de su criptomoneda."}],MATIC:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"Polygon (anteriormente Matic Network) es una soluci\xf3n de escalado de Layer 2 respaldada por Binance y Coinbase. El proyecto busca estimular la adopci\xf3n masiva de criptomonedas resolviendo los problemas de escalabilidad en muchas cadenas de bloques."}],UNI:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:'Es la criptomoneda de la plataforma Uniswap, quien respalda su valor. Es descentralizada y sus transacciones se realizan a trav\xe9s de "smart contracts" en la red de Ethereum.'}],CAKE:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"PancakeSwap (CAKE), es un creador de mercado automatizado (AMM) basado en Binance Smart Chain que permite a los usuarios intercambiar tokens y ganar una parte de las tarifas a trav\xe9s del yield farming."}],ADA:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:'Es una criptomoneda creada por un grupo de acad\xe9micos respaldada por la Fundaci\xf3n Cardano. Utiliza su propio sistema de blockchain llamado de "tercera generaci\xf3n".'}],LTC:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"Litecoin fue pensada para ser una alternativa a Bitcoin para transferencias de bajo valor, y cada litecoin es fraccionado en 100.000.000 unidades m\xe1s peque\xf1as, definidas por ocho decimales."}],SOL:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"El protocolo Solana est\xe1 dise\xf1ado para facilitar la creaci\xf3n de aplicaciones descentralizadas (DApp). Su objetivo es mejorar la escalabilidad introduciendo un consenso de prueba de historia (PoH) combinado con el consenso de prueba de participaci\xf3n (PoS) subyacente de la cadena de bloques."}],DOT:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"Es el token de la red de Polkadot. Quienes lo tengan podr\xe1n participar en la gesti\xf3n de actualizaciones y correcciones de protocolos. Tambi\xe9n podr\xe1n validar transacciones al tenerlos almacenados."},{title:"\xbfC\xf3mo funciona Polkadot?",description:"Es un protocolo de c\xf3digo abierto creado en 2016 que permite la interoperabilidad entre diferentes blockchains de la red. Polkadot ofrece la posibilidad de procesar muchas transacciones en varias cadenas en paralelo (parachains), eliminando los cuellos de botella."},{title:"\xbfQu\xe9 es la Relay chain?",description:"Es el coraz\xf3n de Polkadot. Es responsable por la seguridad, el consenso y la comunicaci\xf3n de la red entera de Polkadot."},{title:"\xbfQu\xe9 son las parachains?",description:"Los parachains son fragmentos de Polkadot para cada uno de los proyectos. La idea es que la Relay chain y las parachains puedan intercambiar cualquier tipo de datos o archivos."}],LINK:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"Es el token de la red de Chainlink que se usa como medio de pago a los operadores de nodo de la red. Corre sobre la red de Ethereum."},{title:"\xbfQu\xe9 es Chainlink?",description:"Es un or\xe1culo descentralizado que corre sobre la red de Ethereum. Su misi\xf3n es proporcionar datos externos a contratos inteligentes."},{title:"\xbfQu\xe9 es un or\xe1culo?",description:"Es una herramienta para interactuar con el mundo f\xedsico. Permite llevar la informaci\xf3n del mundo real a la blockchain, y que los smart contracts puedan ejecutar acciones de acuerdo a esta informaci\xf3n."}],XRP:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"Es la criptomoneda de la red de Ripple. Su misi\xf3n es que los bancos e instituciones financieras puedan mover f\xe1cilmente el dinero por todo el mundo de forma r\xe1pida y eficiente."}],AXS:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"AXS o Axie Infinity Shard es una criptomoneda que fue lanzada por Sky Mavis, la empresa detr\xe1s de Axie Infinity en el 2020. Esta criptomoneda se puede ganar al jugar Axie Infinity y se puede usar para hacer staking o se puede tradear."}],SLP:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"Smooth Love Potion (SLP) es una ficha de juego que se utiliza principalmente para alimentar la creaci\xf3n de mascotas digitales llamadas Axies en el exitoso juego NFT Axie Infinity."}],BCH:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:"Es una bifurcaci\xf3n de Bitcoin creada en 2017 con la idea de que la criptomoneda logre convertirse en efectivo electr\xf3nico. Usa un algoritmo diferente al de BTC, donde los bloques son m\xe1s grandes y sus transacciones m\xe1s r\xe1pidas."}],DOGE:[{title:"\xbfQu\xe9 es {{coinName}} ({{coinCode}})?",description:'Es una bifurcaci\xf3n de Litecoin que nace como una broma. Su nombre y mascota se inspiran en el famoso meme del Shiba Inu "Doge".'}]};n(401);var R,U=n(229),I=n(2);function L(){var e={page:"statistics",country:window.COUNTRY},a=Object(O.useTracking)(e).trackEvent,n=Object(d.a)().t,x=Object(I.h)().coin;Object(s.useEffect)((function(){var n={event:"pageview"};"production"===window.ENV?a(n):console.log(e,n)}),[]);var _=Object(s.useState)(x),k=Object(c.a)(_,2),S=k[0],L=k[1],P=Object(s.useState)(Object(l.a)(x)),D=Object(c.a)(P,2),q=D[0],B=D[1];Object(s.useEffect)((function(){L(x),B(Object(l.a)(x))}),[x]);var Q,z=Object(s.useState)({}),Y=Object(c.a)(z,2),F=Y[0],G=Y[1],M=Object(s.useState)(),H=Object(c.a)(M,2),V=H[0],K=H[1],X=Object(s.useState)({}),J=Object(c.a)(X,2),W=J[0],Z=J[1],$=Object(s.useState)({ask:[],bid:[]}),ee=Object(c.a)($,2),ae=ee[0],ne=ee[1],oe=Object(s.useState)({}),ie=Object(c.a)(oe,2),te=ie[0],ce=ie[1],se=Object(s.useState)(R.RANGE_DAILY),re=Object(c.a)(se,2),le=re[0],de=re[1],pe=Object(s.useState)(R.RANGE_DAILY),me=Object(c.a)(pe,2),ue=me[0],be=me[1];return Object(w.a)((function(){fetch("br"!==window.COUNTRY?"".concat(window.API_URL,"/").concat(window.COUNTRY,"/coin-stats/").concat(q.code):"".concat(window.BR_API_URL,"/coin-stats/").concat(q.code)).then((function(e){return e.json()})).then((function(e){G(e),K(e.local_currency)})).catch((function(){return G({})}))}),6e4,!1,S),Object(w.a)((function(){V&&fetch("br"!==window.COUNTRY?"".concat(window.API_URL,"/").concat(window.COUNTRY,"/prices/").concat(V,"/").concat(q.code,"/ask,bid"):"".concat(window.BR_API_URL,"/prices/").concat(V,"/").concat(q.code,"/ask,bid")).then((function(e){return e.json()})).then((function(e){Z(Object(t.a)({},e))})).catch((function(){return Z({})}))}),6e4,!1,V,S),Object(s.useEffect)((function(){Object.keys(Object.values(ae)).length>0&&[].concat.apply([],Object.values(ae).map((function(e){return Object.values(e)})).reduce((function(e,a){return[].concat(Object(i.a)(e),Object(i.a)(a))}))).filter((function(e,a,n){return n.indexOf(e)===a&&-1===Object.keys(te).indexOf(e)})).forEach((function(e){fetch("br"!==window.COUNTRY?"".concat(window.API_URL,"/").concat(window.COUNTRY,"/provider/").concat(e):"".concat(window.BR_API_URL,"/provider/").concat(e)).then((function(e){return e.json()})).then((function(a){ce((function(n){return Object(t.a)(Object(t.a)({},n),{},Object(o.a)({},e,a))}))})).catch((function(){return ce((function(a){return Object(t.a)(Object(t.a)({},a),{},Object(o.a)({},e,null))}))}))}))}),[Object.keys(Object.values(ae))]),Object(C.jsxs)("div",{className:"py-2 px-5",children:[Object(C.jsx)("h1",{className:"text-2xl font-bold",children:n("Precio de {{coinName}} ({{coinCode}})",{coinName:q.name,coinCode:q.code})}),F&&F.price&&Object(C.jsxs)("div",{className:"md:grid md:grid-cols-4 gap-3",children:[Object(C.jsxs)("div",{className:["grid grid-flow-row gap-2 bg-gray-600 my-3 py-3 px-3 sm:px-6 lg:px-8 rounded-lg",F.price_in_local_currency?"col-span-3":"col-span-4"].join(" "),children:[Object(C.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(C.jsxs)("div",{className:"flex my-1",children:[Object(C.jsx)("p",{className:"font-bold",children:F.price}),Object(C.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",F.price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:F.price_change_percentage_24h})]})}),Object(C.jsxs)("span",{className:"grid grid-flow-col items-center",children:[Object(C.jsx)("p",{children:n("Precio m\xe1ximo de {{coinName}}:",{coinName:q.name})}),Object(C.jsx)("p",{className:"font-bold",children:F.ath_by_range[le]}),Object(C.jsx)(p.a,{value:le,onChange:de,children:Object(C.jsxs)("div",{className:"relative",children:[Object(C.jsxs)(p.a.Button,{className:"w-full py-2 pl-3 pr-10 text-left rounded-lg shadow-md cursor-default sm:text-sm",children:[Object(C.jsx)("span",{className:"block truncate",children:n(Object.keys(R)[Object.values(R).indexOf(le)])}),Object(C.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:Object(C.jsx)(b.x,{className:"w-5 h-5","aria-hidden":"true"})})]}),Object(C.jsx)(m.a,{as:s.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(C.jsx)(p.a.Options,{className:"z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-700 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:Object.keys(R).map((function(e,a){return Object(C.jsx)(p.a.Option,{value:Object.values(R)[a],className:function(e){var a=e.active;return"".concat(a&&"bg-gray-500","\n                            cursor-default select-none relative py-2 pl-10 pr-4")},children:function(e){var o=e.selected;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("span",{className:"".concat(o?"font-medium":"font-normal"," block truncate"),children:n(Object.keys(R)[a])}),o?Object(C.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3",children:Object(C.jsx)(b.i,{className:"w-5 h-5","aria-hidden":"true"})}):null]})}},e)}))})})]})})]}),Object(C.jsxs)("span",{className:"grid grid-flow-col items-center",children:[Object(C.jsx)("p",{children:n("Precio m\xednimo de {{coinName}}:",{coinName:q.name})}),Object(C.jsx)("p",{className:"font-bold",children:F.atl_by_range[ue]}),Object(C.jsx)(p.a,{value:ue,onChange:be,children:Object(C.jsxs)("div",{className:"relative",children:[Object(C.jsxs)(p.a.Button,{className:"w-full py-2 pl-3 pr-10 text-left rounded-lg shadow-md cursor-default sm:text-sm",children:[Object(C.jsx)("span",{className:"block truncate",children:n(Object.keys(R)[Object.values(R).indexOf(ue)])}),Object(C.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:Object(C.jsx)(b.x,{className:"w-5 h-5","aria-hidden":"true"})})]}),Object(C.jsx)(m.a,{as:s.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(C.jsx)(p.a.Options,{className:"z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-700 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:Object.keys(R).map((function(e,a){return Object(C.jsx)(p.a.Option,{value:Object.values(R)[a],className:function(e){var a=e.active;return"".concat(a&&"bg-gray-500","\n                            cursor-default select-none relative py-2 pl-10 pr-4")},children:function(e){var o=e.selected;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("span",{className:"".concat(o?"font-medium":"font-normal"," block truncate"),children:n(Object.keys(R)[a])}),o?Object(C.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3",children:Object(C.jsx)(b.i,{className:"w-5 h-5","aria-hidden":"true"})}):null]})}},e)}))})})]})})]})]}),F.price_in_local_currency&&Object(C.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-600 my-3 py-3 px-3 sm:px-6 lg:px-8 text-center rounded-lg",children:[Object(C.jsx)("h2",{children:n("Mejor precio en {{country}} para comprar ahora mismo",{country:window.COUNTRY_NAME})}),Object(C.jsx)("p",{className:"text-blue-400 font-bold",children:F.price_in_local_currency}),Object(C.jsx)(U.a,{condition:F.provider_in_local_currency.toLowerCase().indexOf("p2p")>-1,className:"font-bold",to:F.url_for_provider_in_local_currency,target:-1===F.provider_in_local_currency.toLowerCase().indexOf("p2p")?"_blank":"_self",rel:-1===F.provider_in_local_currency.toLowerCase().indexOf("p2p")?"sponsored noreferrer":void 0,children:F.provider_in_local_currency})]})]}),Object(C.jsx)(y.a,{location:"".concat(q.code,"-stats")}),Object(C.jsx)("h2",{className:"py-2 text-2xl font-bold",children:n("Estadisticas de {{coinName}} ({{coinCode}})",{coinName:q.name,coinCode:q.code})}),Object(C.jsx)("p",{className:"mb-2",children:n("En este gr\xe1fico podes ver el movimiento de {{coinName}} ({{coinCode}}) en el tiempo y su valor al momento.",{coinName:q.name,coinCode:q.code})}),Object(C.jsxs)(u.a.Group,{defaultIndex:j.isMobile?1:0,children:[Object(C.jsxs)(u.a.List,{className:"flex space-x-1 bg-gray-800 overflow-x-auto no-scrollbar",children:[Object(C.jsx)(u.a,{className:function(e){return["min-w-max p-2.5 text-sm font-medium flex justify-center",e.selected&&"border-b-2 border-blue-400"].join(" ")},value:0,children:n("Avanzado")}),Object(C.jsx)(u.a,{className:function(e){return["min-w-max p-2.5 text-sm font-medium flex justify-center",e.selected&&"border-b-2 border-blue-400"].join(" ")},value:1,children:n("Simple")})]}),Object(C.jsxs)(u.a.Panels,{className:function(e){var a=e.selectedIndex;return"pt-2 ".concat(0===a&&"h-96")},children:[Object(C.jsx)(u.a.Panel,{children:Object(C.jsx)(T,{coin:q.code})},0),Object(C.jsx)(u.a.Panel,{children:Object(C.jsx)(E,{coin:q.code})},1)]})]}),F&&"price"in F&&Object(C.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-5 py-5 xl:px-0 xl:pt-5 xl:mx-52",children:["staking_apy"in F&&F.staking_apy&&Object(C.jsxs)("div",{className:"flex flex-col gap-2 col-span-1 pb-3 sm:pb-0",children:[Object(C.jsxs)("h2",{className:"pb-2 text-2xl font-bold col-span-1 w-max",children:[n("Invertir")," ",q.name]}),Object(C.jsxs)("div",{className:"bg-gray-600 py-3 px-3 sm:px-6 lg:px-8 rounded-lg text-center col-span-1 sm:col-span-2 h-full w-full grid grid-flow-row content-center",children:[Object(C.jsx)("p",{children:n("Mejor rendimiento de staking")}),Object(C.jsxs)("p",{className:"text-green-400 font-bold",children:[F.staking_apy,"% APY ",n("con")," ",q.name]}),Object(C.jsx)("a",{href:F.staking_provider_url,target:"_blank",rel:"sponsored noreferrer",children:F.staking_provider})]})]}),Object(C.jsxs)("div",{className:"grid grid-flow-row gap-2 col-span-2",children:[Object(C.jsx)("h2",{className:"pb-2 text-2xl font-bold col-span-1 w-max",children:n("Datos de {{coinName}} ({{coinCode}}) en vivo",{coinName:q.name,coinCode:q.code})}),Object(C.jsx)("div",{className:"bg-gray-600 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-2",children:Object(C.jsx)("p",{children:n("El precio de {{coinName}} ({{coinCode}}) de hoy es de {{coinPrice}} con un volumen operado en las \xfaltimas 24 horas de {{operatedVolume}}. {{coinName}} ({{coinCode}}) cambi\xf3 {{changePercentageIn24Hours}}. Tiene una capitalizaci\xf3n de mercado de {{coinCapitalization}}. Est\xe1n circulando {{coinCirculation}} {{coinName}} ({{coinCode}}) de un total de {{maxSupply}} {{coinName}} ({{coinCode}}).",{coinName:q.name,coinCode:q.code,coinPrice:F.price,operatedVolume:F["24h_volume"],changePercentageIn24Hours:F.price_change_percentage_24h,coinCapitalization:F.market_cap,coinCirculation:F.circulating_supply,maxSupply:F.max_supply})})})]})]}),Object(C.jsx)("h2",{className:"pb-2 text-2xl font-bold pt-5 xl:px-0 xl:pt-5 xl:mx-52",children:n("Precios de {{coinName}} ({{coinCode}})",{coinName:q.name,coinCode:q.code})}),Object(C.jsx)(g.a,{className:"border-2 border-gray-600 pt-5 xl:px-0 xl:pt-5 xl:mx-52",responsive:Object(f.a)().responsive,arrows:!1,showDots:!0,customDot:Object(C.jsx)(h.a,{}),children:Object(i.a)(Array("ask","bid")).map((function(e,o){return Object(C.jsx)("div",{className:"py-2 overflow-x-auto no-scrollbar",children:Object(C.jsxs)("table",{className:"mt-1 m-auto",children:[Object(C.jsxs)("thead",{children:[Object(C.jsx)("tr",{children:Object(C.jsx)("th",{children:Object(C.jsx)("span",{className:"px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===e&&n("COMPRAS A")||n("VENDES A")})})}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(C.jsx)("th",{scope:"col",className:"py-1 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:n("PRECIO")}),Object(C.jsx)("th",{scope:"col"})]})]}),Object(C.jsx)("tbody",{children:W&&"ask"in W&&"bid"in W&&W[e].map((function(o,i){var c,s,l,d,p,m,u,j,f,h,x,g,O,w,y,_,k,E,S,T,A,R,I,L,P,D,B;return Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsxs)("tr",{className:"pt-1 sm:pt-3",children:[Object(C.jsx)("td",{className:["cursor-pointer min-w-min",ae[e].indexOf(o.fields.id)>-1?"mt-1 sm:mt-3":""].join(" "),children:Object(C.jsx)(U.a,{condition:o.fields.id.indexOf("p2p")>-1&&V&&V in o.fields&&e in o.fields[V],className:"grid grid-flow-col",to:o.fields.url,target:-1===o.fields.id.indexOf("p2p")&&V&&V in o.fields&&e in o.fields[V]?"_blank":"_self",rel:-1===o.fields.id.indexOf("p2p")&&V&&V in o.fields&&e in o.fields[V]?"sponsored noreferrer":void 0,children:Object(C.jsx)("div",{className:"w-44 text-md self-center",children:Object(C.jsxs)("span",{className:"flex",children:[Object(C.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:o.fields.name}),o.fields.info_access&&Object(C.jsx)(b.s,{onClick:function(e){a({event:"user_action",event_category:"".concat(o.fields.id,"_home_info_access"),event_label:"click"}),window.open(o.fields.info_access_url),e.preventDefault()},className:"w-6 h-6 pl-1 cursor-pointer text-blue-500","aria-hidden":"true"},i),o.fields.available_blockchains&&o.fields.available_blockchains.map((function(e,a){return Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(v.a,{place:"right",className:"w-48",effect:"solid",id:"".concat(o.fields.id,"-").concat(q.code,"-").concat(e),children:n("{{providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:o.fields.name,blockchainName:Object(N.a)(e).name})}),Object(C.jsx)("img",{loading:"lazy",src:Object(N.a)(e).icon,className:"pl-1 w-4 h-4 self-center ".concat(e," cursor-pointer"),"data-tip":!0,"data-for":"".concat(o.fields.id,"-").concat(q.code,"-").concat(e)})]},a)})),("ask"===e&&o.fields.deposits_allowed&&(!1===o.fields.fiat_deposits_operating_now||!1===o.fields.crypto_withdrawals_operating_now)||"bid"===e&&o.fields.withdrawals_allowed&&(!1===o.fields.fiat_withdrawals_operating_now||!1===o.fields.crypto_deposits_operating_now))&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(b.v,{className:"text-indigo-500 w-4 h-4 self-center pl-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(o.fields.id,"-").concat(q.code,"-").concat(e)}),Object(C.jsx)(v.a,{place:"right",className:"w-48",effect:"solid",id:"".concat(o.fields.id,"-").concat(q.code,"-").concat(e),children:"ask"===e&&(!1===o.fields.fiat_deposits_operating_now&&!1===o.fields.crypto_withdrawals_operating_now&&n("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===o.fields.fiat_deposits_operating_now&&n("En este momento no permite dep\xf3sitos de FIAT.")||!1===o.fields.crypto_withdrawals_operating_now&&n("En este momento no permite retiros de criptomonedas."))||"bid"===e&&(!1===o.fields.fiat_withdrawals_operating_now&&!1===o.fields.crypto_deposits_operating_now&&n("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===o.fields.fiat_withdrawals_operating_now&&n("En este momento no permite retiros de FIAT.")||!1===o.fields.crypto_deposits_operating_now&&n("En este momento no permite dep\xf3sitos de criptomonedas."))})]}),("ask"===e&&"deposits_allowed"in o.fields&&!o.fields.deposits_allowed||"bid"===e&&"withdrawals_allowed"in o.fields&&!o.fields.withdrawals_allowed)&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(b.d,{className:"text-red-400 w-4 h-4 self-center pl-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(o.fields.id,"-").concat(crypto,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed")}),Object(C.jsx)(v.a,{place:"right",className:"w-48",effect:"solid",id:"".concat(o.fields.id,"-").concat(crypto,"-").concat("ask"===e?"deposits_not_allowed":"withdrawals_not_allowed"),children:n("{{providerName}} no permite {{operation}} {{crypto}}.",{providerName:o.fields.name,operation:"ask"===e&&n("retirar")||n("depositar"),crypto:q.name})})]})]})})})}),V&&V in o.fields&&e in o.fields[V]&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("td",{className:"mt-1 sm:mt-3 align-top",children:Object(C.jsx)("div",{className:"text-md truncate w-40 min-w-min",children:Object(C.jsx)("span",{children:V&&o.fields[V][e]})})}),Object(C.jsx)("td",{className:"align-top",children:-1===ae[e].indexOf(o.fields.id)&&Object(C.jsx)(b.j,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){ae[e].indexOf(o.fields.id)>-1?ae[e].splice(ae[e].indexOf(o.fields.id),1):ae[e].push(o.fields.id),ne(Object(t.a)({},ae))}})||Object(C.jsx)(b.m,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer","aria-hidden":"true",onClick:function(){ae[e].indexOf(o.fields.id)>-1?ae[e].splice(ae[e].indexOf(o.fields.id),1):ae[e].push(o.fields.id),ne(Object(t.a)({},ae))}})})]})]}),Object(C.jsx)("tr",{className:(ae[e].indexOf(o.fields.id),""),children:Object(C.jsx)("td",{className:"text-sm text-gray-500 pb-1 sm:pb-3",colSpan:3,children:o.fields.score&&o.fields.score.count>0&&Object(C.jsxs)("span",{className:"flex",children:[o.fields.score.rating,Object(C.jsx)(b.B,{className:"w-5 h-5 -mr-1","aria-hidden":"true"}),ae[e].indexOf(o.fields.id)>-1&&Object(C.jsx)("a",{className:"underline pl-1",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"").concat(n("/opiniones/")).concat(o.fields.id),target:"_blank",rel:"noreferrer",children:n("Ver opiniones")})]})})}),V&&ae[e].indexOf(o.fields.id)>-1&&Object(C.jsxs)(C.Fragment,{children:[(!(o.fields.id in te)||o.fields.id in te&&("ask"===e&&(null===(c=te[o.fields.id])||void 0===c||null===(s=c.fees)||void 0===s||null===(l=s.fiat)||void 0===l?void 0:l.deposit)||"bid"===e&&(null===(d=te[o.fields.id])||void 0===d||null===(p=d.fees)||void 0===p||null===(m=p.fiat)||void 0===m?void 0:m.withdraw)))&&Object(C.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(C.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(o.fields.id in te)&&Object(C.jsx)("div",{className:"animate-pulse bg-gray-900 w-24 h-4"})||Object(C.jsx)("p",{children:"ask"===e&&(null===(u=te[o.fields.id])||void 0===u||null===(j=u.fees)||void 0===j||null===(f=j.fiat)||void 0===f?void 0:f.deposit)&&n("Fee de dep\xf3sito")||(null===(h=te[o.fields.id])||void 0===h||null===(x=h.fees)||void 0===x||null===(g=x.fiat)||void 0===g?void 0:g.withdraw)&&n("Fee de retiro")})}),Object(C.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(o.fields.id in te)&&Object(C.jsx)("div",{className:"animate-pulse bg-gray-900 w-8 h-4"})||Object(C.jsx)("p",{children:"ask"===e&&(null===(O=te[o.fields.id])||void 0===O||null===(w=O.fees)||void 0===w||null===(y=w.fiat)||void 0===y?void 0:y.deposit)||(null===(_=te[o.fields.id])||void 0===_||null===(k=_.fees)||void 0===k||null===(E=k.fiat)||void 0===E?void 0:E.withdraw)})})]}),o.fields[V]["".concat(e,"_without_fees")]&&Object(C.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(C.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:Object(C.jsx)("p",{children:o.fields[V]["".concat(e,"_without_fees")]&&"".concat(n("Precio de")," ").concat(q.name)})}),Object(C.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:Object(C.jsx)("p",{children:o.fields[V]["".concat(e,"_without_fees")]})})]}),(!(o.fields.id in te)||o.fields.id in te&&(null===(S=te[o.fields.id])||void 0===S||null===(T=S.fees)||void 0===T||null===(A=T.crypto)||void 0===A?void 0:A[e]))&&Object(C.jsxs)("tr",{className:"border-t border-gray-700",children:[Object(C.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",children:!(o.fields.id in te)&&Object(C.jsx)("div",{className:"animate-pulse bg-gray-900 w-20 h-4"})||Object(C.jsx)("p",{children:(null===(R=te[o.fields.id])||void 0===R||null===(I=R.fees)||void 0===I||null===(L=I.crypto)||void 0===L?void 0:L[e])&&("ask"===e&&n("Fee por comprar")||n("Fee por vender"))})}),Object(C.jsx)("td",{className:"cursor-pointer min-w-min text-gray-500 text-sm",colSpan:2,children:!(o.fields.id in te)&&Object(C.jsx)("div",{className:"animate-pulse bg-gray-900 w-10 h-4"})||Object(C.jsx)("p",{children:null===(P=te[o.fields.id])||void 0===P||null===(D=P.fees)||void 0===D||null===(B=D.crypto)||void 0===B?void 0:B[e]})})]}),-1===o.fields.id.indexOf("p2p")&&Object(C.jsx)("tr",{className:"border-t border-gray-700",children:Object(C.jsx)("td",{className:"text-sm py-1 sm:py-3",colSpan:3,children:Object(C.jsx)("a",{className:"underline text-blue-400",target:"_blank",rel:"noreferrer",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(n("comisiones-y-limites"),"/").concat(o.fields.id),children:n("Ver ficha t\xe9cnica")})})})]})]},i)}))||Object(i.a)(Array(3)).map((function(e,a){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{className:"pb-1 sm:pb-3",children:Object(C.jsxs)("div",{className:"w-44",children:[Object(C.jsx)("div",{className:"animate-pulse bg-gray-900 mb-1 w-24 sm:w-24 h-4"}),Object(C.jsx)("div",{className:"animate-pulse bg-gray-900 w-10 sm:w-10 h-4"})]})}),Object(C.jsx)("td",{className:"mt-1 sm:mt-3 align-top",children:Object(C.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-32 h-4"})}),Object(C.jsx)("td",{className:"align-top",children:Object(C.jsx)("div",{className:"animate-pulse bg-gray-900 w-4 sm:w-4 h-4"})})]},a)}))})]})},o)}))}),(Q=q.code,A[Q.toUpperCase()]?A[Q.toUpperCase()]:[]).map((function(e,a){return Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)("h2",{className:"pt-5 pb-2 text-2xl font-bold",children:n(e.title,{coinName:q.name,coinCode:q.code})}),Object(C.jsx)("p",{children:n(e.description)})]},a)}))]})}!function(e){e.RANGE_DAILY="24h",e.RANGE_SEVEN_DAYS="7d",e.RANGE_THIRTY_DAYS="30d",e.RANGE_YEARLY="1y",e.RANGE_EVER="ever"}(R||(R={}))}}]);