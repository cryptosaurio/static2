(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[28],{171:function(e,t,r){"use strict";t.a=function(e,t){return e===t||e.length===t.length&&e.every((function(e,r){return e.id===t[r].id&&e.title===t[r].title}))}},178:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var s=r(169);function i(e,t){if(null==e)return{};var r,i,n=Object(s.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)r=c[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}},190:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var s=r(139),i=r(178),n=(r(0),r(34)),c=r(2),a=["children","to","condition"];function o(e){var t=e.children,r=e.to,o=e.condition,l=Object(i.a)(e,a);return o&&r?Object(c.jsx)(n.b,Object(s.a)(Object(s.a)({to:r},l),{},{children:t})):Object(c.jsx)("a",Object(s.a)(Object(s.a)({href:r},l),{},{children:t}))}},329:function(e,t,r){"use strict";r.r(t);var s=r(145),i=r(139),n=r(150),c=r(0),a=r.n(c),o=r(134),l=r(170),d=r.n(l),m=r(196),f=r(151),p=r(183),b=r(166),j=r(156),u=r(171),h=r(190),x=r(165),O=r(2);function g(e){var t=e.contextualTrackingData,r=e.rollsData,c=e.crypto,l=e.rollsCarouselRef,u=e.blockedProviders,g=e.selectedCurrency,w=e.setCalculatorData,y=e.setCalculatorModalIsOpen,v=e.showProviderIcon,_=Object(o.a)().t,N=Object(f.useTracking)(t).trackEvent;return Object(O.jsx)(d.a,{className:"rolls-carousel",ref:function(e){e&&void 0===l.current[c]&&(l.current[c]=e)},responsive:Object(b.a)().fixed,renderDotsOutside:!0,showDots:isNaN(c)&&c in r&&r[c].filter((function(e){return!u.includes(e.buy.fields.id)&&!u.includes(e.sell.fields.id)})).length>1,customDot:Object(O.jsx)(x.a,{}),arrows:!1,children:isNaN(c)&&r&&c in r&&r[c].filter((function(e){return!u.includes(e.buy.fields.id)&&!u.includes(e.sell.fields.id)})).map((function(e,t){return Object(O.jsxs)("div",{className:"relative flex flex-col md:ml-32 md:mr-32 lg:ml-52 lg:mr-52 xl:ml-72 xl:mr-72 border-2 border-gray-600 mt-1",children:[t>0&&Object(O.jsx)("i",{className:"w-10 h-10 -ml-5 mt-24 hidden md:flex absolute cursor-pointer rounded-full border-2 bg-gray-800 border-gray-600 inset-y-0 left-0 items-center hover:bg-gray-400 text-gray-400 hover:text-gray-800",onClick:function(){void 0!==l.current[c]&&l.current[c].previous(),l.current[c]=Object(i.a)({},l.current[c])},children:Object(O.jsx)(n.m,{className:"w-5 h-5 ml-2 -mr-1","aria-hidden":"true"})}),t!==r[c].filter((function(e){return!u.includes(e.buy.fields.id)&&!u.includes(e.sell.fields.id)})).length-1&&Object(O.jsx)("i",{className:"w-10 h-10 -mr-5 mt-24 hidden md:flex absolute cursor-pointer rounded-full border-2 bg-gray-800 border-gray-600 inset-y-0 right-0 items-center hover:bg-gray-400 text-gray-400 hover:text-gray-800",onClick:function(){void 0!==l.current[c]&&l.current[c].next(),l.current[c]=Object(i.a)({},l.current[c])},children:Object(O.jsx)(n.n,{className:"w-5 h-5 ml-2 -mr-1","aria-hidden":"true"})}),Object(O.jsx)("div",{className:"bg-gray-600",children:Object(O.jsx)("div",{className:"py-3 px-3 sm:px-6 lg:px-8",children:Object(O.jsxs)("div",{className:"grid grid-flow-col place-content-between items-center",children:[Object(O.jsx)("span",{className:"text-white items-center",children:Object(O.jsxs)("h3",{className:"text-lg",children:[Object(O.jsxs)("span",{className:"inline-flex items-center",children:[_("Gan\xe1 {{difference}}% con ",{difference:e.difference}),Object(O.jsx)("img",{loading:"lazy",className:"w-5 h-5 mx-1 inline-block align-text-top",src:Object(j.a)(c.toUpperCase())&&Object(j.a)(c.toUpperCase()).icon||"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),Object(j.a)(c).name||c]}),Object(O.jsx)("span",{className:"px-2",children:"\u2022"}),_("Inversi\xf3n m\xednima {{minimumInversion}}",{minimumInversion:e.minimumInversion})]})}),Object(O.jsx)(n.h,{onClick:function(){w(Object(i.a)(Object(i.a)({},{userInversion:e.rawMinimumInversion}),e)),y(!0)},className:"w-5 h-5 -mr-1 cursor-pointer","aria-hidden":"true"})]})})}),Object(O.jsx)("div",{className:"py-2 px-3 align-middle inline-block",children:Object(O.jsx)("div",{className:"border-gray-200",children:Object(O.jsx)("div",{className:"overflow-x-auto no-scrollbar",children:Object(O.jsxs)("table",{className:"mt-1",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:_("Compr\xe1s en")}),Object(O.jsx)("th",{}),Object(O.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:_("Vend\xe9s en")})]})}),Object(O.jsx)("tbody",{children:Object(O.jsx)("tr",{children:Object(s.a)(Array("buy","sell")).map((function(t,r){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsxs)("td",{className:"px-1 pt-1 sm:px-5 sm:pb-5",children:[Object(O.jsxs)(h.a,{condition:e[t].fields.id.indexOf("p2p")>-1,className:"grid grid-flow-col",to:e[t].fields.url,target:-1===e[t].fields.id.indexOf("p2p")?"_blank":"_self",rel:-1===e[t].fields.id.indexOf("p2p")?"sponsored noreferrer":void 0,children:[v&&Object(O.jsx)("img",{loading:"lazy",className:"w-5 sm:w-7 mr-2 self-center",src:e[t].fields.icon,"data-tip":!0,"data-for":e[t].fields.name}),Object(O.jsx)("div",{className:"w-32 text-md self-center",children:Object(O.jsxs)("span",{className:"flex",children:[Object(O.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:e[t].fields.name}),e[t].fields.info_access&&Object(O.jsx)(n.u,{onClick:function(r){N({event:"user_action",event_category:"".concat(e[t].fields.id,"_home_rolls_info_access"),event_label:"click"}),window.open(e[t].fields.info_access_url),r.preventDefault()},className:"w-6 h-6 ml-1 cursor-pointer text-blue-500","aria-hidden":"true"},r),e[t].fields.available_blockchains&&e[t].fields.available_blockchains.map((function(r,s){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(m.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(e[t].fields.id,"-").concat(c,"-").concat(r),children:_("{{providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:e[t].fields.name,blockchainName:Object(p.a)(r).name})}),Object(O.jsx)("img",{loading:"lazy",src:Object(p.a)(r).icon,className:"ml-1 w-4 h-4 self-center ".concat(r," cursor-pointer"),"data-tip":!0,"data-for":"".concat(e[t].fields.id,"-").concat(c,"-").concat(r)})]},s)})),("buy"===t&&(!1===e[t].fields.fiat_deposits_operating_now||!1===e[t].fields.crypto_withdrawals_operating_now)||"sell"===t&&(!1===e[t].fields.fiat_withdrawals_operating_now||!1===e[t].fields.crypto_deposits_operating_now))&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(n.x,{className:"text-indigo-500 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"".concat(e[t].fields.id,"-").concat(c,"-").concat(t)}),Object(O.jsx)(m.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(e[t].fields.id,"-").concat(c,"-").concat(t),children:"buy"===t&&(!1===e[t].fields.fiat_deposits_operating_now&&!1===e[t].fields.crypto_withdrawals_operating_now&&_("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===e[t].fields.fiat_deposits_operating_now&&_("En este momento no permite dep\xf3sitos de FIAT.")||!1===e[t].fields.crypto_withdrawals_operating_now&&_("En este momento no permite retiros de criptomonedas."))||"sell"===t&&(!1===e[t].fields.fiat_withdrawals_operating_now&&!1===e[t].fields.crypto_deposits_operating_now&&_("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===e[t].fields.fiat_withdrawals_operating_now&&_("En este momento no permite retiros de FIAT.")||!1===e[t].fields.crypto_deposits_operating_now&&_("En este momento no permite dep\xf3sitos de criptomonedas."))})]})]})})]}),e[t].fields.score&&e[t].fields.score.count>0&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("span",Object(i.a)(Object(i.a)({},e[t].fields.score&&e[t].fields.score.count>0&&e[t].fields.score.rating<=2&&{"data-tip":"","data-for":"".concat(e[t].fields.id,"-").concat(c,"-bad-score")}),{},{className:e[t].fields.score.rating<=2?"text-sm self-center inline-flex text-red-400":"text-sm self-center text-gray-500 inline-flex",children:[e[t].fields.score.rating,Object(O.jsx)(n.D,{className:"w-5 h-5 -mr-1","aria-hidden":"true"})]})),e[t].fields.score&&e[t].fields.score.count>0&&e[t].fields.score.rating<=2&&Object(O.jsx)(m.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"".concat(e[t].fields.id,"-").concat(c,"-bad-score"),children:_("Atenci\xf3n: te recomendamos que leas atentamente las opiniones de otros usuarios antes de operar.")})]}),Object(O.jsx)("span",{className:"flex",children:g&&t in e&&g in e[t].fields&&("buy"===t?e[t].fields[g].ask:e[t].fields[g].bid)})]}),0===r&&Object(O.jsx)("td",{className:"px-5"})]},r)}))})})]})})})})]},t)}))})}var w=function(e,t){return Object(u.a)(e.blockedProviders,t.blockedProviders)&&e.crypto===t.crypto&&e.selectedCurrency===t.selectedCurrency&&e.showProviderIcon===t.showProviderIcon&&JSON.stringify(e.rollsData)===JSON.stringify(t.rollsData)};t.default=a.a.memo(g,w)}}]);