/*! For license information please see 24.560b0f27.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[24],{135:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return h}));var r=o(144),s=o(12),i=o(0),n=o(152),a=o(136),c={intl_exchange:[{name:"Binance",icon:"https://graph.facebook.com/binance/picture?type=square",url:"https://www.binance.com/en/register?ref=39537186"},{name:"CEX.IO",icon:"https://graph.facebook.com/cexio/picture?type=square",url:"https://cexio.page.link/NU6Z"},{name:"Coinbase",icon:"https://graph.facebook.com/coinbase/picture?type=square",url:"https://coinbase.com/join/537df5f93bef2f950a000038"},{name:"Crypto.com",icon:"https://graph.facebook.com/cryptocomofficial/picture?type=square",url:"https://crypto.com/exch/w2uwxsynrh"},{name:"Huobi Global",icon:"https://www.huobi.com/favicon.ico",url:"https://www.huobi.com/es-es/topic/invited/?invite_code=hsg57"},{name:"Kraken",icon:"https://graph.facebook.com/KrakenFX/picture?type=square",url:"https://r.kraken.com/c/2546987/744552/10583?u=https%3A%2F%2Fwww.kraken.com/es-es"},{name:"ShapeShift",icon:"https://graph.facebook.com/ShapeShiftPlatform/picture?type=square",url:"https://shapeshift.app.link/share?af=BcN6tWFYwH5njT4E"}],p2p_exchange:[{name:"Binance",icon:"https://graph.facebook.com/binance/picture?type=square",url:"https://www.binance.com/en/register?ref=39537186"},{name:"Hodl Hodl",icon:"https://graph.facebook.com/hhodl/picture?type=square",url:"https://hodlhodl.com/join/R7YQ"},{name:"LocalBitcoins",icon:"https://localbitcoins.com/cached-static/img/touch-icon-144.png",url:"https://localbitcoins.com/?ch=1eq5i"},{name:"LocalCryptos",icon:"https://localcryptos.com/images/favicon-128.png",url:"https://localcryptos.com/r/cryptosaurio"},{name:"Okex",icon:"https://graph.facebook.com/okxofficial/picture?type=square",url:"https://www.okex.com/join/2952709"},{name:"Paxful",icon:"https://graph.facebook.com/paxful/picture?type=square",url:"https://paxful.com/es?r=Dgk4nWx32dJ&track=cryptosaurio"}],swap:[{name:"1inch",icon:"https://1inch.exchange/assets/favicon/apple-touch-icon.png",url:"https://1inch.exchange/#/r/0x4EA94DF39AF882F6160591fe38c001Cc4B683D40"},{name:"Curve",icon:"https://www.curve.fi/apple-touch-icon.png",url:"https://www.curve.fi/"},{name:"FixedFloat",icon:"https://fixedfloat.com/assets/images/favicon.png",url:"https://fixedfloat.com/"},{name:"Kyber",icon:"https://kyberswap.com/favicon.png?version=v",url:"https://www.kyberswap.com/"},{name:"Matcha",icon:"https://matcha.xyz/apple-touch-icon.png",url:"https://matcha.xyz/"},{name:"PancakeSwap",icon:"https://pancakeswap.finance/logo.png",url:"https://pancakeswap.finance/"},{name:"Paraswap",icon:"https://avatars.githubusercontent.com/u/52015910",url:"https://paraswap.io/"},{name:"Uniswap",icon:"https://app.uniswap.org/images/192x192_App_Icon.png",url:"https://app.uniswap.org/"}]};function p(e){return c[e]}var l=o(199),m=o(176),d=o(189),u=o(157),w=o(232),b=o(2);function h(){return Object(b.jsx)(d.a,{reCaptchaKey:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI",children:Object(b.jsx)(y,{})})}function y(){var e={page:"tools",country:window.COUNTRY},t=Object(u.useTracking)(e).trackEvent,o=Object(a.a)().t,c=Object(d.b)().executeRecaptcha;Object(i.useEffect)((function(){var o={event:"pageview"};"production"===window.ENV?t(o):console.log(e,o)}),[]);var h=Object(i.useState)([]),y=Object(s.a)(h,2),g=y[0],f=y[1],v=Object(i.useState)([]),j=Object(s.a)(v,2),x=j[0],N=j[1],k=Object(i.useState)([]),O=Object(s.a)(k,2),U=O[0],_=O[1];return Object(i.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/wallets"):"".concat(window.BARNEY_BR_API_URL,"/wallets")).then((function(e){return e.json()})).then((function(e){"br"===window.COUNTRY&&(e=e.filter((function(e){return null!==e.content_pt}))),f(e)})).catch((function(){return f([])}))}),[]),Object(i.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/providers"):"".concat(window.BARNEY_BR_API_URL,"/providers")).then((function(e){return e.json()})).then((function(e){N(e)})).catch((function(){return N([])}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w.a,{page:"tools"}),Object(b.jsx)(m.a,{location:"tools"}),Object(b.jsxs)("div",{className:"mx-5 mt-5",children:[Object(b.jsx)("h1",{className:"text-2xl",children:o("Wallets")}),Object(b.jsx)("h2",{children:o("Guarda tus criptomonedas en una wallet para que est\xe9n seguras.")})]}),Object(b.jsxs)("div",{className:"grid lg:grid-cols-2 md:grid-flow-row pb-10",children:[g.sort((function(e,t){return t.recommended-e.recommended})).map((function(e,t){return Object(b.jsxs)("a",{className:"m-5",target:"_blank",href:e.url,rel:"sponsored noreferrer",children:[Object(b.jsx)("div",{className:"bg-gray-800 text-green-400 inline-block",children:0===t?o("M\xe1s recomendada"):null}),Object(b.jsxs)("div",{className:["bg-gray-900 bg-opacity-30 grid grid-cols-3 h-full border",0===t?"border-green-400":"border-gray-500"].join(" "),children:[Object(b.jsx)("div",{className:"m-auto flex-shrink-0 w-20 hidden sm:block",children:Object(b.jsx)("img",{loading:"lazy",src:e.icon})}),Object(b.jsx)("div",{className:"m-auto col-span-3 sm:col-span-2",children:Object(b.jsxs)("div",{className:"p-5",children:[Object(b.jsx)("h5",{className:"text-xl font-semibold mb-2 inline align-middle",children:e.name}),e.guarded&&Object(b.jsx)(n.w,{"data-tip":!0,"data-for":"guarded-wallet",className:"inline-block fill-current w-5 h-5 align-text-top mx-1 text-blue-600"})||Object(b.jsx)(n.q,{"data-tip":!0,"data-for":"non-guarded-wallet",className:"inline-block fill-current w-5 h-5 align-text-top mx-1 text-blue-600"}),e.recommended>0&&Object(b.jsx)("p",{className:"text-gray-600",children:e.recommended>1?o("Recomendado por {{amount}} personas.",{amount:e.recommended}):o("Recomendado por 1 persona.")}),null!==e.available_cryptos&&Object(b.jsxs)("p",{className:"mb-4",children:[o("Permite almacenar"),": ",e.available_cryptos.join(", ")]}),Object(b.jsx)("p",{className:"mb-4",children:"br"!==window.COUNTRY?e.content_es:e.content_pt||e.content_es})]})})]}),-1===U.indexOf(e.id)&&Object(b.jsx)("p",{className:"m-auto text-right w-full pr-5 text-blue-400 underline -mt-7",onClick:function(t){t.preventDefault(),function(e){e.recommended+=1,f(Object(r.a)(g)),_([].concat(Object(r.a)(U),[e.id])),c&&c("submit_wallet_recommendation").then((function(t){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/wallet"):"".concat(window.BARNEY_BR_API_URL,"/wallet"),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e.id,captcha_response:t})}).then((function(){})).catch((function(){}))}))}(e)},children:o("RECOMENDAR")})]},t)})),g.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(l.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"guarded-wallet",children:[Object(b.jsx)("p",{className:"font-bold",children:o("Wallet con custodia")}),Object(b.jsx)("p",{children:o("Un intermediario te facilitar\xe1 el acceso a tus criptomonedas y te ayudar\xe1 a recuperar tu clave si alguna vez te la olvidas.")})]}),Object(b.jsxs)(l.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"non-guarded-wallet",children:[Object(b.jsx)("p",{className:"font-bold",children:o("Wallet sin custodia")}),Object(b.jsx)("p",{children:o("No hay intermediarios entre tu y tus criptomonedas. Eres el \xfanico responsable y si pierdes la clave, no podr\xe1s acceder a tus activos.")})]})]}),0===g.length&&Object(r.a)(Array(6)).map((function(e,t){return Object(b.jsxs)("div",{className:"m-5",children:[Object(b.jsx)("div",{className:"mb-1 w-32 h-5 animate-pulse bg-gray-700"}),Object(b.jsxs)("div",{className:"grid grid-cols-3 h-full p-5 border border-gray-500 bg-gray-850",children:[Object(b.jsx)("div",{className:"m-auto flex-shrink-0 bg-gray-700 h-20 w-20 animate-pulse"}),Object(b.jsx)("div",{className:"m-auto col-span-2 p-0.5",children:Object(b.jsxs)("div",{className:"p-5",children:[Object(b.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-28 sm:w-64 h-3"}),Object(b.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-36 sm:w-72 h-3"}),Object(b.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-40 sm:w-80 h-3"}),Object(b.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-40 sm:w-80 h-3"}),Object(b.jsx)("p",{className:"bg-gray-700 animate-pulse w-24 sm:w-64 h-3"})]})})]})]},t)}))]}),Object(b.jsxs)("div",{className:"mx-5",children:[Object(b.jsx)("h1",{className:"text-2xl",children:o("Para operaciones en {{country}}",{country:window.COUNTRY_NAME})}),Object(b.jsx)("h2",{children:o("Compra o vende criptomonedas a proveedores en el pa\xeds.")})]}),x.length>0&&Object(b.jsx)("div",{className:"flex flex-row flex-wrap",children:x.filter((function(e){return e.enabled})).map((function(e,t){return Object(b.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(b.jsx)("img",{className:"w-12 h-12 rounded-full",loading:"lazy",src:e.icon}),Object(b.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),0===x.length&&Object(b.jsx)("div",{className:"flex flex-row flex-wrap",children:Object(r.a)(Array(6)).map((function(e,t){return Object(b.jsxs)("div",{className:"grid grid-cols-2 w-44 h-20 p-4 m-1",children:[Object(b.jsx)("p",{className:"bg-gray-700 animate-pulse w-12 rounded-full"}),Object(b.jsx)("p",{className:"bg-gray-700 animate-pulse self-center -ml-2 w-24 h-8"})]},t)}))}),Object(b.jsxs)("div",{className:"mx-5 mt-5",children:[Object(b.jsx)("h1",{className:"text-2xl",children:o("Para operaciones en el exterior")}),Object(b.jsx)("h2",{children:o("Compra o vende criptomonedas a proveedores fuera de {{country}}.",{country:window.COUNTRY_NAME})})]}),p("intl_exchange").length>0&&Object(b.jsx)("div",{className:"flex flex-row flex-wrap",children:p("intl_exchange").map((function(e,t){return Object(b.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(b.jsx)("img",{className:"w-12 h-12 rounded-full",loading:"lazy",src:e.icon}),Object(b.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),Object(b.jsxs)("div",{className:"mx-5 mt-5",children:[Object(b.jsx)("h1",{className:"text-2xl",children:o("Para operaciones P2P")}),Object(b.jsx)("h2",{children:o("Compra o vende criptomonedas directamente a otras personas.",{country:window.COUNTRY_NAME})})]}),p("p2p_exchange").length>0&&Object(b.jsx)("div",{className:"flex flex-row flex-wrap",children:p("p2p_exchange").map((function(e,t){return Object(b.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(b.jsx)("img",{className:"w-12 h-12 rounded-full",loading:"lazy",src:e.icon}),Object(b.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))}),Object(b.jsxs)("div",{className:"mx-5 mt-5",children:[Object(b.jsx)("h1",{className:"text-2xl",children:o("Para cambiar tus criptomonedas | Swap")}),Object(b.jsx)("h2",{children:o("Intercambia tus criptomonedas por otras al instante.",{country:window.COUNTRY_NAME})})]}),p("swap").length>0&&Object(b.jsx)("div",{className:"flex flex-row flex-wrap",children:p("swap").map((function(e,t){return Object(b.jsxs)("a",{className:"grid grid-cols-2 w-44 p-4 m-1",rel:"sponsored noreferrer",target:"_blank",href:e.url,children:[Object(b.jsx)("img",{className:"w-12 h-12 rounded-full",loading:"lazy",src:e.icon}),Object(b.jsx)("p",{className:"self-center -ml-2 w-24",children:e.name})]},t)}))})]})}},165:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var r={ar:[{type:"infoAccess",location:"home",provider:"satoshitango",providerName:"Satoshitango",directUrl:"https://www.satoshitango.com/gift/40OTRX9K",sponsoredUrl:"https://www.satoshitango.com/blog/como-comprar-bitcoins-con-satoshitango/",availableInCryptos:["BTC","ETH","DAI","USDC","USDT","LTC","ADA","SOL","DOT","UNI","LINK","XRP","BCH","DOGE"]},{type:"infoAccess",location:"home",provider:"coinex",providerName:"CoinEx",directUrl:"https://www.coinex.com/register?refer_code=82yur",sponsoredUrl:"https://spanish-marketing.medium.com/",availableInCryptos:["BTC","ETH","LTC","BNB","ADA","MATIC","UNI"]},{type:"opportunityBanner",location:"home",provider:"lemoncash",providerName:"LemonCash",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/lemoncash-opportunity-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/lemoncash-opportunity-mobile.webp",sponsoredUrl:"https://www.lemon.me/?utm_source=Cryptosaurio&utm_medium=OpportunityBanner&utm_campaign=branding"},{type:"opportunityBanner",location:"home",provider:"satoshitango",providerName:"Satoshitango",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/satoshitango-opportunity-desktop2.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/satoshitango-opportunity-mobile2.webp",sponsoredUrl:"https://www.satoshitango.com/register?utm_source=BANNER-CRYPTOSAURIO-YA&utm_medium=BANNER-REFERIDO&utm_campaign=BANNER-CRYPTOSAURIO-REGISTRO&utm_id=CRYPTOSAURIO-REGISTRO&utm_term=BANNER-CS&utm_content=BANNER"},{type:"topBanner",location:"home",provider:"letsbit",providerName:"Let'sBit",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/letsbit7-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/letsbit7-mobile.webp",sponsoredUrl:"https://letsbit.io/register/IDF37AE929E9?utm_source=cryptosaurio&utm_medium=banner&utm_campaign=rendimientos",weight:0},{type:"topBanner",location:"home",provider:"lemoncash",providerName:"LemonCash",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/lemoncash-desktop7.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/lemoncash-mobile6.webp",sponsoredUrl:"https://www.lemon.me/?utm_source=Cryptosaurio&utm_medium=Banner&utm_campaign=branding",weight:1},{type:"topBanner",location:"home",provider:"cryptomkt",providerName:"CryptoMarket",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptomkt-desktop3.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptomkt-mobile3.webp",sponsoredUrl:"https://www.cryptomkt.com/es/argentina",weight:2},{type:"topBanner",location:"home",provider:"fiwind",providerName:"Fiwind",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/fiwind-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/fiwind-mobile.webp",sponsoredUrl:"https://fiwind.io/",weight:5},{type:"topBanner",location:"home",provider:"calypsop2p",providerName:"Calypso Exchange",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/calypsop2p-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/calypsop2p-mobile.webp",sponsoredUrl:"https://calypso.exchange/#contactohash",weight:6},{type:"middleBanner",location:"home",provider:"copter",providerName:"Copter",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/copter-desktop7.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/copter-mobile5.webp",sponsoredUrl:"https://www.exchangecopter.com/",weight:0},{type:"middleBanner",location:"home",provider:"quantia",providerName:"Quantia",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/quantiacapital4-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/quantiacapital4-mobile.webp",sponsoredUrl:"https://bit.ly/QUANTIA--CAPITAL",weight:1},{type:"topBanner",location:"home",provider:"coinex",providerName:"CoinEx",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/coinex-desktop5.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/coinex-mobile5.webp",sponsoredUrl:"https://www.coinex.com/s/4G6H",weight:7},{type:"middleBanner",location:"home",provider:"syklo",providerName:"Syklo P2P",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-mobile.webp",sponsoredUrl:"https://syklo.io/cryptosaurio",weight:3},{type:"middleBanner",location:"home",provider:"cryptoavisos",providerName:"Cryptoavisos",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptoavisos-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptoavisos-mobile.webp",sponsoredUrl:"https://cryptoavisos.com/?utm_source=cryptosaurio&utm_medium=middle_home_banner&utm_campaign=partnership",weight:6},{type:"opportunityBanner",location:"BTC-stats",provider:"cryptomkt",providerName:"CryptoMarket",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptomkt-desktop3.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptomkt-mobile3.webp",sponsoredUrl:"https://www.cryptomkt.com/account/register?ref=215813"},{type:"opportunityBanner",location:"staking",provider:"lemoncash",providerName:"LemonCash",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/lemoncash-desktop7.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/lemoncash-mobile6.webp",sponsoredUrl:"https://www.lemon.me/?utm_source=Cryptosaurio&utm_medium=BannerStaking&utm_campaign=branding"},{type:"opportunityBanner",location:"staking",provider:"quantia",providerName:"Quantia",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/quantiacapital4-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/quantiacapital4-mobile.webp",sponsoredUrl:"https://bit.ly/QUANTIA--CAPITAL"},{type:"opportunityBanner",location:"staking",provider:"letsbit",providerName:"Let'sBit",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/letsbit7-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/letsbit7-mobile.webp",sponsoredUrl:"https://letsbit.io/register/IDF37AE929E9?utm_source=cryptosaurio_inversiones&utm_medium=banner&utm_campaign=rendimientos"},{type:"opportunityBanner",location:"tools",provider:"syklo",providerName:"Syklo P2P",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-mobile.webp",sponsoredUrl:"https://syklo.io/cryptosaurio"},{type:"middleBanner",location:"home",provider:"vibrant",providerName:"Vibrant",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-home-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-home-mobile.webp",sponsoredUrl:"http://vibrantapp.com/?utm_medium=display&utm_source=cryptosaurus&utm_campaign=listing_web_hp&utm_content=0_202112_cryptosaurio_na",weight:5},{type:"infoAccess",location:"home",provider:"vibrant",providerName:"Vibrant",directUrl:"https://vibrantapp.com/",sponsoredUrl:"http://vibrantapp.com/?utm_medium=display&utm_source=cryptosaurus&utm_campaign=listing_web_hp&utm_content=0_202112_cryptosaurio_na",availableInCryptos:["USDC"]},{type:"opportunityBanner",location:"p2p",provider:"vibrant",providerName:"Vibrant",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-p2p-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-p2p-mobile.webp",sponsoredUrl:"http://vibrantapp.com/?utm_medium=display&utm_source=cryptosaurus&utm_campaign=listing_web_hp&utm_content=0_202112_cryptosaurio_na"},{type:"opportunityBanner",location:"p2p",provider:"calypsop2p",providerName:"Calypso Exchange",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/calypsop2p-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/calypsop2p-mobile.webp",sponsoredUrl:"https://calypso.exchange/#contactohash"},{type:"opportunityBanner",location:"staking",provider:"vibrant",providerName:"Vibrant",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-staking-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-staking-mobile.webp",sponsoredUrl:"http://vibrantapp.com/?utm_medium=display&utm_source=cryptosaurus&utm_campaign=listing_web_hp&utm_content=0_202112_cryptosaurio_na"},{type:"opportunityBanner",location:"tools",provider:"vibrant",providerName:"Vibrant",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-tools-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/vibrant-tools-mobile.webp",sponsoredUrl:"http://vibrantapp.com/?utm_medium=display&utm_source=cryptosaurus&utm_campaign=listing_web_hp&utm_content=0_202112_cryptosaurio_na"},{type:"opportunityBanner",location:"home",provider:"bybit",providerName:"Bybit",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-opportunity-ar-desktop2.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-opportunity-ar-mobile2.webp",sponsoredUrl:"https://go.bybit.com/e/smqzSwuMMob"},{type:"opportunityBanner",location:"p2p",provider:"bybit",providerName:"Bybit",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-opportunity-ar-desktop2.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-opportunity-ar-mobile2.webp",sponsoredUrl:"https://go.bybit.com/e/smqzSwuMMob"},{type:"stickyBanner",location:"home",provider:"bybit",providerName:"Bybit",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-sticky-ar-desktop4.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-sticky-ar-mobile4.webp",sponsoredUrl:"https://go.bybit.com/e/aR08GKW2Pob"}],br:[{type:"infoAccess",location:"home",provider:"bybit",providerName:"Bybit",directUrl:"https://www.bybit.com/es-ES/invite?ref=PW7M2%230",sponsoredUrl:"https://go.bybit.com/e/uM1yN8Mh7hb",availableInCryptos:["BTC","ETH","LTC","BNB","ADA","MATIC","UNI"]},{type:"opportunityBanner",location:"home",provider:"bybit",providerName:"Bybit",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-opportunity-br-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-opportunity-br-mobile.webp",sponsoredUrl:"https://go.bybit.com/e/Hj5bBXAoVnb"},{type:"stickyBanner",location:"home",provider:"bybit",providerName:"Bybit",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-sticky-br-desktop4.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-sticky-br-mobile4.webp",sponsoredUrl:"https://go.bybit.com/e/Hj5bBXAoVnb"}],cl:[{type:"opportunityBanner",location:"home",provider:"satoshitango",providerName:"Satoshitango",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/satoshitango-opportunity-desktop-clpe.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/satoshitango-opportunity-mobile-clpe.webp",sponsoredUrl:"https://www.satoshitango.com/register?utm_source=BANNER-CRYPTOSAURIO-YA&utm_medium=BANNER-REFERIDO&utm_campaign=BANNER-CRYPTOSAURIO-REGISTRO-CL&utm_id=CRYPTOSAURIO-REGISTRO&utm_term=BANNER-CS&utm_content=BANNER"},{type:"topBanner",location:"home",provider:"syklo",providerName:"Syklo P2P",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-mobile.webp",sponsoredUrl:"https://syklo.io/cryptosaurio"}],co:[{type:"topBanner",location:"home",provider:"syklo",providerName:"Syklo P2P",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-mobile.webp",sponsoredUrl:"https://syklo.io/cryptosaurio"}],pe:[{type:"opportunityBanner",location:"home",provider:"satoshitango",providerName:"Satoshitango",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/satoshitango-opportunity-desktop-clpe.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/satoshitango-opportunity-mobile-clpe.webp",sponsoredUrl:"https://www.satoshitango.com/register?utm_source=BANNER-CRYPTOSAURIO-YA&utm_medium=BANNER-REFERIDO&utm_campaign=BANNER-CRYPTOSAURIO-REGISTRO-PE&utm_id=CRYPTOSAURIO-REGISTRO&utm_term=BANNER-CS&utm_content=BANNER"}],ve:[{type:"topBanner",location:"home",provider:"syklo",providerName:"Syklo P2P",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-mobile.webp",sponsoredUrl:"https://syklo.io/cryptosaurio"}],any:[{type:"infoAccess",location:"home",provider:"bybit",providerName:"Bybit",directUrl:"https://www.bybit.com/es-ES/invite?ref=PW7M2%230",sponsoredUrl:"https://go.bybit.com/e/BTx6M9uu5hb",availableInCryptos:["BTC","ETH","LTC","BNB","ADA","MATIC","UNI"]},{type:"opportunityBanner",location:"home",provider:"bybit",providerName:"Bybit",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-opportunity-es-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-opportunity-es-mobile.webp",sponsoredUrl:"https://go.bybit.com/e/uANsL0xoVnb",excludedCountries:["ar","br","us"]},{type:"stickyBanner",location:"home",provider:"bybit",providerName:"Bybit",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-sticky-es-desktop7.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/bybit-sticky-es-mobile6.webp",sponsoredUrl:"https://go.bybit.com/e/aR08GKW2Pob",excludedCountries:["ar","br","us"]},{type:"premiumNotification",location:"home",provider:"huobi",providerName:"Huobi P2P",title:"Registrate en Huobi",description:"Gana un bono de bienvenida de USD $150 + 20.000 SHIB.",imgUrl:"https://www.cryptosaurio.com/static/img/sponsored/huobi-logo.webp",sponsoredUrl:"https://www.huobi.com/en-us/topic/flashback/?utm_source=Cryptosaurio&utm_medium=banner&inviter_campaign=PrimePh10&inviter_id=11337270",excludedCountries:["br","us"]}]};function s(e,t,o,s){return o=o.charAt(0).toLowerCase()+o.slice(1),(r[e]||[]).filter((function(e){return e.location===t})).filter((function(e){return e.type===o})).filter((function(e){return e.availableInCryptos&&e.availableInCryptos.includes(s)||!0})).concat(r.any.filter((function(t){return!(t.excludedCountries&&t.excludedCountries.includes(e))})).filter((function(e){return e.location===t})).filter((function(e){return e.type===o})).filter((function(e){return e.availableInCryptos&&e.availableInCryptos.includes(s)||!0})).filter((function(e,t,o){return t===o.findIndex((function(t){return t.provider===e.provider}))}))).filter((function(e,t,o){return o.findIndex((function(t){return t.provider===e.provider}))===t})).sort((function(e,t){return(e.weight||0)-(t.weight||0)}))}},166:function(e,t,o){},170:function(e,t,o){},176:function(e,t,o){"use strict";var r=o(0),s=o.n(r),i=o(179),n=(o(177),o(178),o(170),o(171)),a=(o(166),o(157)),c=o(165),p=o(2);function l(e){var t=e.location,o={page:t,country:window.COUNTRY},r=Object(a.useTracking)(o),s=(r.Track,r.trackEvent),l=Object(c.a)(window.COUNTRY,t,"opportunityBanner");return l.length>0?((l=l.sort((function(){return.5-Math.random()}))).forEach((function(e){var t={event:"system_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"show"};"production"===window.ENV?s(t):console.log(o,t)})),Object(p.jsx)(i.a,{effect:"fade",autoplay:{delay:4e3},pagination:{clickable:!0},modules:[n.b,n.a,n.d],children:l.map((function(e,t){var r={event:"user_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"click"};return Object(p.jsx)(i.b,{className:"pb-6",children:Object(p.jsxs)("picture",{onClick:function(){"production"===window.ENV?s(r):console.log(o,r),window.open(e.sponsoredUrl)},children:[Object(p.jsx)("source",{srcSet:e.mobileImgUrl,media:"(max-width: 639px)",width:"400",height:e.mobileImgHeightOverride||"100"}),Object(p.jsx)("source",{srcSet:e.desktopImgUrl,media:"(min-width: 640px)",width:"820",height:e.desktopImgHeightOverride||"100"}),Object(p.jsx)("img",{className:"cursor-pointer mx-auto my-2",src:e.desktopImgUrl,width:"820",height:e.desktopImgHeightOverride||"100"})]})},t)}))})):null}t.a=s.a.memo(l,(function(e,t){return e.location===t.location}))},178:function(e,t,o){},189:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return m}));var r=o(0),s=o.n(r);function i(e,t,o,r){return new(o||(o=Promise))((function(s,i){function n(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,a)}c((r=r.apply(e,t||[])).next())}))}function n(e,t){var o,r,s,i,n={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;n;)try{if(o=1,r&&(s=2&i[0]?r.return:i[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,i[1])).done)return s;switch(r=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return n.label++,{value:i[1],done:!1};case 5:n.label++,r=i[1],i=[0];continue;case 7:i=n.ops.pop(),n.trys.pop();continue;default:if(!((s=(s=n.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){n=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){n.label=i[1];break}if(6===i[0]&&n.label<s[1]){n.label=s[1],s=i;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(i);break}s[2]&&n.ops.pop(),n.trys.pop();continue}i=t.call(e,n)}catch(e){i=[6,e],r=0}finally{o=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var a,c=function(e){console.warn(e)};(a||(a={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var p=Object(r.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});p.Consumer;function l(e){var t=this,o=e.reCaptchaKey,l=e.useEnterprise,m=void 0!==l&&l,d=e.useRecaptchaNet,u=void 0!==d&&d,w=e.scriptProps,b=e.language,h=e.children,y=Object(r.useState)(null),g=y[0],f=y[1];Object(r.useEffect)((function(){if(o){var e=(null==w?void 0:w.id)||"google-recaptcha-v3";return function(e){var t=e.reCaptchaKey,o=e.language,r=e.onLoad,s=e.useRecaptchaNet,i=e.useEnterprise,n=e.scriptProps,a=void 0===n?{}:n,c=a.nonce,p=void 0===c?"":c,l=a.defer,m=void 0!==l&&l,d=a.async,u=void 0!==d&&d,w=a.id,b=void 0===w?"":w,h=a.appendTo,y=void 0===h?void 0:h,g=b||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(g))r();else{var f=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:i,useRecaptchaNet:s}),v=document.createElement("script");v.id=g,v.src=f+"?render="+t+(o?"&hl="+o:""),p&&(v.nonce=p),v.defer=!!m,v.async=!!u,v.onload=r,("body"===y?document.body:document.getElementsByTagName("head")[0]).appendChild(v)}}({reCaptchaKey:o,useEnterprise:m,useRecaptchaNet:u,scriptProps:w,language:b,onLoad:function(){if(window&&window.grecaptcha){var e=m?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){f(e)}))}else c("<GoogleRecaptchaProvider /> "+a.SCRIPT_NOT_AVAILABLE)},onError:function(){c("Error loading google recaptcha script")}}),function(){!function(e){var t=document.querySelector(".grecaptcha-badge");t&&t.parentNode&&document.body.removeChild(t.parentNode);var o=document.querySelector("#"+e);o&&o.remove(),function(){var e=document.querySelector("script[src^='https://www.gstatic.com/recaptcha/releases']");e&&e.remove()}()}(e)}}c("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[m,u,w,b,o]);var v=Object(r.useCallback)((function(e){return i(t,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:if(!g||!g.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return[4,g.execute(o,{action:e})];case 1:return[2,t.sent()]}}))}))}),[g]),j=Object(r.useMemo)((function(){return{executeRecaptcha:g?v:void 0}}),[v,g]);return s.a.createElement(p.Provider,{value:j},h)}var m=function(){return Object(r.useContext)(p)};function d(e,t){return e(t={exports:{}},t.exports),t.exports}var u="function"==typeof Symbol&&Symbol.for,w=u?Symbol.for("react.element"):60103,b=u?Symbol.for("react.portal"):60106,h=u?Symbol.for("react.fragment"):60107,y=u?Symbol.for("react.strict_mode"):60108,g=u?Symbol.for("react.profiler"):60114,f=u?Symbol.for("react.provider"):60109,v=u?Symbol.for("react.context"):60110,j=u?Symbol.for("react.async_mode"):60111,x=u?Symbol.for("react.concurrent_mode"):60111,N=u?Symbol.for("react.forward_ref"):60112,k=u?Symbol.for("react.suspense"):60113,O=u?Symbol.for("react.suspense_list"):60120,U=u?Symbol.for("react.memo"):60115,_=u?Symbol.for("react.lazy"):60116,I=u?Symbol.for("react.block"):60121,R=u?Symbol.for("react.fundamental"):60117,C=u?Symbol.for("react.responder"):60118,B=u?Symbol.for("react.scope"):60119;function A(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case w:switch(e=e.type){case j:case x:case h:case g:case y:case k:return e;default:switch(e=e&&e.$$typeof){case v:case N:case _:case U:case f:return e;default:return t}}case b:return t}}}function E(e){return A(e)===x}var S={AsyncMode:j,ConcurrentMode:x,ContextConsumer:v,ContextProvider:f,Element:w,ForwardRef:N,Fragment:h,Lazy:_,Memo:U,Portal:b,Profiler:g,StrictMode:y,Suspense:k,isAsyncMode:function(e){return E(e)||A(e)===j},isConcurrentMode:E,isContextConsumer:function(e){return A(e)===v},isContextProvider:function(e){return A(e)===f},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===w},isForwardRef:function(e){return A(e)===N},isFragment:function(e){return A(e)===h},isLazy:function(e){return A(e)===_},isMemo:function(e){return A(e)===U},isPortal:function(e){return A(e)===b},isProfiler:function(e){return A(e)===g},isStrictMode:function(e){return A(e)===y},isSuspense:function(e){return A(e)===k},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===h||e===x||e===g||e===y||e===k||e===O||"object"==typeof e&&null!==e&&(e.$$typeof===_||e.$$typeof===U||e.$$typeof===f||e.$$typeof===v||e.$$typeof===N||e.$$typeof===R||e.$$typeof===C||e.$$typeof===B||e.$$typeof===I)},typeOf:A},T=d((function(e,t){})),P=(T.AsyncMode,T.ConcurrentMode,T.ContextConsumer,T.ContextProvider,T.Element,T.ForwardRef,T.Fragment,T.Lazy,T.Memo,T.Portal,T.Profiler,T.StrictMode,T.Suspense,T.isAsyncMode,T.isConcurrentMode,T.isContextConsumer,T.isContextProvider,T.isElement,T.isForwardRef,T.isFragment,T.isLazy,T.isMemo,T.isPortal,T.isProfiler,T.isStrictMode,T.isSuspense,T.isValidElementType,T.typeOf,d((function(e){e.exports=S}))),M={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Y={};Y[P.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Y[P.Memo]=M;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype},232:function(e,t,o){"use strict";var r=o(12),s=o(0),i=o.n(s),n=o(152),a=o(157),c={ar:{sesocio:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido, carg\xe1 saldo y particip\xe1 de un sorteo mensual.",url:"https://www.sesocio.com/referrals/Y3J5cHRvc2F1cmlvMDBAZ21haWwuY29t?s=c"},buenbit:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro c\xf3digo IQNKVKP, invert\xed desde 50 USD por 30 d\xedas y gan\xe1 15 DAI.",url:"https://www.buenbit.com/"},letsbit:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido, verific\xe1 tu cuenta a nivel 3 y particip\xe1 de un sorteo mensual.",url:"https://letsbit.io/register/IDF37AE929E9"},cryptomkt:{title:"Gan\xe1 con nuestro referido",description:"Al registrate con nuestro referido y comprar criptomonedas en CryptoMarket por ARS $ 20.000 o m\xe1s gan\xe1s 10 USDT.",url:"https://www.cryptomkt.com/account/register?ref=215813"},satoshitango:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido y obten\xe9 10 d\xedas para operar criptomonedas sin comisi\xf3n.",url:"https://www.satoshitango.com/gift/40OTRX9K"},ftx:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido para tener un 5% de descuento en costos de operaci\xf3n.",url:"https://ftx.com/referrals#a=cryptosaurio"}}},p={ar:{tools:{title:"20% OFF para comprar tu Ledger",description:"Us\xe1 nuestro c\xf3digo FRIEND-XDNVBSR al momento de hacer la compra y disfrut\xe1 el descuento.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}},br:{tools:{title:"20% DE DESCONTO para comprar seu Ledger",description:"Use nosso c\xf3digo FRIEND-XDNVBSR na hora da compra e aproveite o desconto.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}},any:{tools:{title:"20% OFF para comprar tu Ledger",description:"Usa nuestro c\xf3digo FRIEND-XDNVBSR al momento de hacer la compra y disfruta el descuento.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}}};var l=o(2);function m(e){var t,o=e.page,i=e.providerId,m={page:"provider-reviews",country:window.COUNTRY},d=Object(a.useTracking)(m).trackEvent,u={event:"user_action",event_category:"".concat(o,"_").concat(i?"".concat(i,"_"):"","referalNotification"),event_label:"click"},w={event:"user_action",event_category:"".concat(o,"_").concat(i?"".concat(i,"_"):"","referalNotification"),event_label:"close"},b=Object(s.useState)(!1),h=Object(r.a)(b,2),y=h[0],g=h[1];return(t=i?function(e){return window.COUNTRY in c&&Object.keys(c[window.COUNTRY]).length>0?c[window.COUNTRY][e]:null}(i):function(e){return window.COUNTRY in p&&Object.keys(p[window.COUNTRY]).length>0?p[window.COUNTRY][e]:"any"in p&&Object.keys(p.any).length>0?p.any[e]:null}(o))&&!y&&t&&Object(l.jsxs)("div",{className:"bg-white rounded-lg border-gray-300 border p-3 shadow-lg absolute top-5 right-5 cursor-pointer z-30",children:[Object(l.jsxs)("div",{className:"grid grid-flow-col items-center",onClick:function(){"production"===window.ENV?d(u):console.log(m,u),window.open(t.url)},children:[Object(l.jsx)("p",{className:"text-4xl",children:"\ud83c\udf81"}),Object(l.jsxs)("div",{className:"ml-2 mr-6 text-xs w-44",children:[Object(l.jsx)("p",{className:"font-semibold text-black",children:t.title}),Object(l.jsx)("p",{className:"block text-gray-500",children:t.description})]})]}),Object(l.jsx)(n.E,{className:"w-5 h-5 absolute top-2 right-2 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(e){e.preventDefault(),"production"===window.ENV?d(w):console.log(m,w),g(!0)}})]})||null}var d=function(e,t){return e.providerId===t.providerId};t.a=i.a.memo(m,d)}}]);