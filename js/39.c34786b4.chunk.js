(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[39],{176:function(o,t,e){"use strict";e.d(t,"a",(function(){return i}));var r={ar:[{type:"opportunityBanner",location:"home",provider:"cryptomkt",providerName:"CryptoMarket",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptomkt-sponsored-ar-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptomkt-sponsored-ar-mobile.webp",desktopSponsoredUrl:"https://www.cryptomkt.com/es/argentina?cam=CryptosaurioArgentinadesktop",mobileSponsoredUrl:"https://www.cryptomkt.com/es/argentina?cam=CryptosaurioArgentinamobile"},{type:"topBanner",location:"home",provider:"fiwind",providerName:"Fiwind",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/fiwind-desktop8.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/fiwind-mobile2.webp",sponsoredUrl:"https://fiwind.io/",weight:5},{type:"middleBanner",location:"home",provider:"syklo",providerName:"Syklo P2P",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-desktop6.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-mobile4.webp",sponsoredUrl:"https://syklo.io/cryptosaurio",weight:3},{type:"middleBanner",location:"home",provider:"cryptoavisos",providerName:"Cryptoavisos",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptoavisos-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptoavisos-mobile.webp",sponsoredUrl:"https://cryptoavisos.com/?utm_source=cryptosaurio&utm_medium=middle_home_banner&utm_campaign=partnership",weight:6},{type:"opportunityBanner",location:"BTC-stats",provider:"cryptomkt",providerName:"CryptoMarket",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptomkt-desktop4.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/cryptomkt-mobile4.webp",sponsoredUrl:"https://www.cryptomkt.com/account/register?ref=215813"},{type:"opportunityBanner",location:"tools",provider:"syklo",providerName:"Syklo P2P",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-desktop6.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-mobile4.webp",sponsoredUrl:"https://syklo.io/cryptosaurio"},{type:"opportunityBanner",location:"p2p",provider:"calypsop2p",providerName:"Calypso Exchange",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/calypsop2p-desktop.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/calypsop2p-mobile.webp",sponsoredUrl:"https://calypso.exchange/#contactohash"}],br:[],cl:[{type:"topBanner",location:"home",provider:"syklo",providerName:"Syklo P2P",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-desktop6.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-mobile4.webp",sponsoredUrl:"https://syklo.io/cryptosaurio"}],co:[{type:"topBanner",location:"home",provider:"syklo",providerName:"Syklo P2P",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-desktop6.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-mobile4.webp",sponsoredUrl:"https://syklo.io/cryptosaurio"}],pe:[],ve:[{type:"topBanner",location:"home",provider:"syklo",providerName:"Syklo P2P",desktopImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-desktop6.webp",mobileImgUrl:"https://www.cryptosaurio.com/static/img/sponsored/syklo-mobile4.webp",sponsoredUrl:"https://syklo.io/cryptosaurio"}],any:[]};function i(o,t,e,i){return e=e.charAt(0).toLowerCase()+e.slice(1),(r[o]||[]).filter((function(o){return o.location===t})).filter((function(o){return o.type===e})).filter((function(o){return o.availableInCryptos&&o.availableInCryptos.includes(i)||!0})).concat(r.any.filter((function(t){return!(t.excludedCountries&&t.excludedCountries.includes(o))})).filter((function(o){return o.location===t})).filter((function(o){return o.type===e})).filter((function(o){return o.availableInCryptos&&o.availableInCryptos.includes(i)||!0})).filter((function(o,t,e){return t===e.findIndex((function(t){return t.provider===o.provider}))}))).filter((function(o,t,e){return e.findIndex((function(t){return t.provider===o.provider}))===t})).sort((function(o,t){return(o.weight||0)-(t.weight||0)}))}},352:function(o,t,e){"use strict";e.r(t);var r=e(8),i=e(0),s=e.n(i),p=e(157),n=e(152),c=e(187),a=e(176),l=e(2);function m(o){var t=o.location,e={page:t,country:window.COUNTRY},s=Object(p.useTracking)(e).trackEvent,m=Object(i.useState)(!1),d=Object(r.a)(m,2),w=d[0],y=d[1];Object(i.useEffect)((function(){y(!1)}),[t]);var u=Object(a.a)(window.COUNTRY,t,"stickyBanner");if(u.length>0){u=u.slice(0,1);var g=[],h=[],b=[],k=[];return u.forEach((function(o,t){if(!w){"object"===typeof o.desktopImgUrl&&(g[t]=o.desktopImgUrl.length,b[t]=Math.floor(Math.random()*g[t])),"object"===typeof o.mobileImgUrl&&(h[t]=o.mobileImgUrl.length,k[t]=Math.floor(Math.random()*h[t]));var r={event:"system_action",event_category:"".concat(o.provider,"_").concat(o.location,"_").concat(o.type).concat(c.isMobile?t in k?"_".concat(k[t]):"":t in b?"_".concat(b[t]):""),event_label:"show"};"production"===window.ENV?s(r):console.log(e,r)}})),u.map((function(o,t){var r={event:"user_action",event_category:"".concat(o.provider,"_").concat(o.location,"_").concat(o.type).concat(c.isMobile?t in k?"_".concat(k[t]):"":t in b?"_".concat(b[t]):""),event_label:"click"},i={event:"user_action",event_category:"".concat(o.provider,"_").concat(o.location,"_").concat(o.type).concat(c.isMobile?t in k?"_".concat(k[t]):"":t in b?"_".concat(b[t]):""),event_label:"close"};return!w&&Object(l.jsxs)("div",{className:"sticky bottom-0 mx-auto max-w-max z-10",children:[Object(l.jsxs)("picture",{onClick:function(){"production"===window.ENV?s(r):console.log(e,r),(o.mobileSponsoredUrl&&o.desktopSponsoredUrl||o.sponsoredUrl)&&(c.isMobile?window.open(o.mobileSponsoredUrl||o.sponsoredUrl):window.open(o.desktopSponsoredUrl||o.sponsoredUrl))},children:[Object(l.jsx)("source",{srcSet:t in k?o.mobileImgUrl[k[t]]:o.mobileImgUrl,media:"(max-width: 639px)",width:o.mobileImgWidthOverride||"400",height:o.mobileImgHeightOverride||"90"}),Object(l.jsx)("source",{srcSet:t in b?o.desktopImgUrl[b[t]]:o.desktopImgUrl,media:"(min-width: 640px)",width:o.desktopImgWidthOverride||"970",height:o.desktopImgHeightOverride||"90"}),Object(l.jsx)("img",{className:"cursor-pointer mx-auto my-2",src:t in b?o.desktopImgUrl[b[t]]:o.desktopImgUrl,width:o.desktopImgWidthOverride||"970",height:o.desktopImgHeightOverride||"90"})]}),Object(l.jsx)(n.E,{className:"w-5 h-5 absolute top-0 right-0 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){"production"===window.ENV?s(i):console.log(e,i),y(!0)}})]},t)}))}return null}t.default=s.a.memo(m,(function(o,t){return o.location===t.location}))}}]);