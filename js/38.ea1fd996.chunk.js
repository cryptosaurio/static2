(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[38],{198:function(e,t,s){"use strict";t.a=function(e,t){return e===t||e.length===t.length&&e.every((function(e,s){return e.id===t[s].id&&e.title===t[s].title}))}},263:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var n=s(152),i=s(227),c=(s(0),s(34)),a=s(2),r=["children","to","condition"];function l(e){var t=e.children,s=e.to,l=e.condition,o=Object(i.a)(e,r);return l&&s?Object(a.jsx)(c.b,Object(n.a)(Object(n.a)({to:s},o),{},{children:t})):Object(a.jsx)("a",Object(n.a)(Object(n.a)({href:s},o),{},{children:t}))}},362:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return N}));var n=s(33),i=s(0),c=s.n(i),a=s(211),r=s(226),l=s(160),o=s(138),d=s(149),m=s(152),f=s(210),p=s(165),b=s(206),j=s(198),u=s(263),x=s(2);function h(e){var t=e.contextualTrackingData,s=e.rollsData,n=e.crypto,a=e.blockedProviders,r=e.selectedCurrency,j=e.setCalculatorData,h=e.setCalculatorModalIsOpen,O=e.showProviderIcon,g=e.rollsModalIsOpen,w=Object(o.a)().t,N=Object(p.useTracking)(t).trackEvent;return Object(i.useEffect)((function(){g&&(f.a.hide(),f.a.rebuild())}),[g,s]),isNaN(n)&&s&&n in s&&s[n].filter((function(e){return!a.includes(e.buy.fields.id)&&!a.includes(e.sell.fields.id)})).map((function(e,t){return Object(x.jsxs)("div",{className:"relative flex flex-col mt-5 bg-gray-800 rounded-xl",children:[Object(x.jsx)("div",{className:"py-3 px-3 sm:px-6 lg:px-8 border-b border-gray-700",children:Object(x.jsxs)("div",{className:"grid grid-flow-col place-content-between items-center",children:[Object(x.jsx)("span",{className:"text-white items-center",children:Object(x.jsxs)("h3",{className:"text-lg",children:[Object(x.jsx)("span",{className:"inline-flex items-center font-bold",children:w("Gan\xe1 {{difference}}%",{difference:e.difference})}),Object(x.jsx)("span",{className:"px-2",children:"\u2022"}),w("Inversi\xf3n m\xednima {{minimumInversion}}",{minimumInversion:e.minimumInversion})]})}),Object(x.jsx)(l.e,{onClick:function(){j(Object(m.a)(Object(m.a)({},{userInversion:e.rawMinimumInversion}),e)),h(!0)},className:"w-5 h-5 -mr-1 cursor-pointer","aria-hidden":"true"})]})}),Object(x.jsx)("div",{className:"py-2 px-3 align-middle inline-block",children:Object(x.jsx)("div",{className:"overflow-x-auto no-scrollbar",children:Object(x.jsxs)("table",{className:"table-fixed",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-400",children:w("Compr\xe1s en")}),Object(x.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-400",children:w("Vend\xe9s en")})]})}),Object(x.jsx)("tbody",{children:Object(x.jsx)("tr",{children:Object(d.a)(Array("buy","sell")).map((function(t,s){return Object(x.jsx)(c.a.Fragment,{children:Object(x.jsxs)("td",{className:"px-1 pt-1 sm:px-5 sm:pb-5 w-64",children:[Object(x.jsxs)("span",{className:"flex",children:[Object(x.jsxs)(u.a,{condition:e[t].fields.id.indexOf("p2p")>-1,className:"grid grid-flow-col",to:e[t].fields.url,target:-1===e[t].fields.id.indexOf("p2p")?"_blank":"_self",rel:-1===e[t].fields.id.indexOf("p2p")?"sponsored noreferrer":void 0,children:[O&&Object(x.jsx)("img",{loading:"lazy",className:"w-5 sm:w-7 mr-2 self-center",src:e[t].fields.icon,alt:e[t].fields.name}),Object(x.jsx)("div",{className:"text-md self-center",children:Object(x.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:e[t].fields.name})})]}),e[t].fields.info_access&&Object(x.jsx)(l.p,{onClick:function(s){N({event:"user_action",event_category:"".concat(e[t].fields.id,"_home_rolls_info_access"),event_label:"click"}),window.open(e[t].fields.info_access_url),s.preventDefault()},className:"w-6 h-6 ml-1 cursor-pointer text-blue-500","aria-hidden":"true"},s),e[t].fields["available_".concat("ask"===t?"deposits":"withdrawals","_blockchains")]&&e[t].fields["available_".concat("ask"===t?"deposits":"withdrawals","_blockchains")].filter((function(e){return-1===["BITCOIN","ETHEREUM"].indexOf(e)})).map((function(s,i){return Object(x.jsxs)(c.a.Fragment,{children:[Object(x.jsx)(f.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"rolls-".concat(e[t].fields.id,"-").concat(n,"-").concat(s),children:w("{{- providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:e[t].fields.name,blockchainName:Object(b.a)(s).name})}),Object(x.jsx)("img",{loading:"lazy",src:Object(b.a)(s).icon,className:"ml-1 w-4 h-4 self-center ".concat(s," cursor-pointer"),"data-tip":!0,"data-for":"rolls-".concat(e[t].fields.id,"-").concat(n,"-").concat(s)})]},i)})),("buy"===t&&(!1===e[t].fields.fiat_deposits_operating_now||!1===e[t].fields.crypto_withdrawals_operating_now)||"sell"===t&&(!1===e[t].fields.fiat_withdrawals_operating_now||!1===e[t].fields.crypto_deposits_operating_now))&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.s,{className:"text-indigo-500 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"rolls-".concat(e[t].fields.id,"-").concat(n,"-").concat(t)}),Object(x.jsx)(f.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"rolls-".concat(e[t].fields.id,"-").concat(n,"-").concat(t),children:"buy"===t&&(!1===e[t].fields.fiat_deposits_operating_now&&!1===e[t].fields.crypto_withdrawals_operating_now&&w("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===e[t].fields.fiat_deposits_operating_now&&w("En este momento no permite dep\xf3sitos de FIAT.")||!1===e[t].fields.crypto_withdrawals_operating_now&&w("En este momento no permite retiros de criptomonedas."))||"sell"===t&&(!1===e[t].fields.fiat_withdrawals_operating_now&&!1===e[t].fields.crypto_deposits_operating_now&&w("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===e[t].fields.fiat_withdrawals_operating_now&&w("En este momento no permite retiros de FIAT.")||!1===e[t].fields.crypto_deposits_operating_now&&w("En este momento no permite dep\xf3sitos de criptomonedas."))})]})]}),e[t].fields.score&&e[t].fields.score.count>0&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("span",Object(m.a)(Object(m.a)({},e[t].fields.score&&e[t].fields.score.count>0&&e[t].fields.score.rating<=2&&{"data-tip":"","data-for":"rolls-".concat(e[t].fields.id,"-").concat(n,"-bad-score")}),{},{className:e[t].fields.score.rating<=2?"text-sm self-center inline-flex text-red-400":"text-sm self-center text-gray-500 inline-flex",children:[e[t].fields.score.rating,Object(x.jsx)(l.z,{className:"w-5 h-5 -mr-1","aria-hidden":"true"})]})),e[t].fields.score&&e[t].fields.score.count>0&&e[t].fields.score.rating<=2&&Object(x.jsx)(f.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"rolls-".concat(e[t].fields.id,"-").concat(n,"-bad-score"),children:w("Atenci\xf3n: te recomendamos que leas atentamente las opiniones de otros usuarios antes de operar.")})]}),Object(x.jsx)("span",{className:"flex",children:r&&t in e&&r in e[t].fields&&("buy"===t?e[t].fields[r].ask:e[t].fields[r].bid)})]})},s)}))})})]})})})]},t)}))}var O=function(e,t){return Object(j.a)(e.blockedProviders,t.blockedProviders)&&e.crypto===t.crypto&&e.selectedCurrency===t.selectedCurrency&&e.showProviderIcon===t.showProviderIcon&&JSON.stringify(e.rollsData)===JSON.stringify(t.rollsData)},g=c.a.memo(h,O),w=s(175);function N(e){var t=e.rollsData,s=e.blockedCryptos,c=e.contextualTrackingData,d=e.blockedProviders,m=e.selectedCurrency,f=e.setCalculatorData,p=e.calculatorModalIsOpen,b=e.setCalculatorModalIsOpen,j=e.showProviderIcon,u=e.rollsModalIsOpen,h=e.setRollsModalIsOpen,O=e.rollsModalCoin,N=e.setRollsModalCoin,y=e.setNotificationSettingsModalIsOpen,v=e.notificationSettingsModalIsOpen,_=e.notificationsEnabled,k=e.selectedCryptosForNotifications,C=e.selectedPercentageForNotifications,I=e.isMobile,T=Object(o.a)().t;return Object(x.jsx)(a.a,{appear:!0,show:u,as:i.Fragment,children:Object(x.jsx)(r.a,{as:"div",className:"fixed inset-0 z-50 overflow-y-auto",onClose:function(){return!v&&!p&&h(!1)},children:Object(x.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(x.jsx)(r.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(x.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(x.jsx)(a.a.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(x.jsxs)("div",{className:"inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl text-white",children:[Object(x.jsxs)("div",{className:"flex justify-between",children:[Object(x.jsxs)(r.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:[T("Oportunidades con"),Object(x.jsx)("img",{loading:"lazy",className:"w-5 h-5 mx-1 inline-block align-bottom",src:Object(w.a)(O)&&Object(w.a)(O).icon||"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),Object(w.a)(O).name||crypto]}),Object(x.jsx)(l.E,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){return h(!1)}})]}),t&&Object.keys(t).length>0&&Object.values(t).flatMap((function(e){return e})).filter((function(e){return!s.includes(e.coin)})).filter((function(e){return!d.includes(e.buy.fields.id)&&!d.includes(e.sell.fields.id)})).length>0&&Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("h2",{className:"",children:[T("Arbitrajes disponibles en este mism\xedsimo momento.")," ",Object(x.jsx)("a",{className:"underline",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(T("blog/como-hacer-un-arbitraje-de-criptomonedas")),target:"_blank",rel:"noreferrer",children:T("C\xf3mo arbitrar")})]})}),t&&Object.keys(t).filter((function(e){return!s.includes(e.toUpperCase())})).filter((function(e){return e===O})).length>0&&Object.keys(t).filter((function(e){return!s.includes(e.toUpperCase())})).filter((function(e){return e===O})).map((function(e,s){return Object(x.jsx)(g,{contextualTrackingData:c,rollsData:Object.keys(t).includes(O)?Object(n.a)({},O,t[O]):{},crypto:e,blockedProviders:d,selectedCurrency:m,setCalculatorData:f,setCalculatorModalIsOpen:b,showProviderIcon:j,rollsModalIsOpen:u},s)}))||Object(x.jsxs)("div",{className:"grid grid-flow-col items-center gap-5 p-16",children:[Object(x.jsx)("p",{className:"text-2xl text-center",children:T("No encontramos oportunidades en este momento")}),Object(x.jsx)("img",{src:"/static/img/rolls-empty-state.webp",loading:"lazy",className:"hidden w-60 sm:block"})]}),!I&&Object(x.jsxs)("div",{className:"w-full grid grid-cols-10 my-5 bg-white cursor-pointer relative h-full text-sm",onClick:function(){y(!0)},children:[Object(x.jsxs)("div",{className:"col-span-8 grid grid-flow-row text-black mx-5",children:[(!_||!k.includes(O))&&Object(x.jsx)("span",{className:"flex pt-5",children:Object(x.jsx)("p",{className:"font-bold text-md",children:T("Crea una alerta personalizada")})})||Object(x.jsx)("span",{className:"flex pt-5",children:Object(x.jsx)("p",{className:"font-bold text-md",children:T("Tienes una alerta creada para arbitrajes con {{coin}} desde {{percentage}}% de ganancia",{coin:Object(w.a)(O).name,percentage:C})})}),Object(x.jsx)("p",{className:"pb-5",children:T("Te enviaremos una notificaci\xf3n de escritorio cada vez que encontremos oportunidades para ti.")})]}),Object(x.jsx)("img",{loading:"lazy",src:"/static/img/notification-settings-banner.webp",className:"col-span-2 absolute -right-3 -bottom-6 h-36"})]}),Object(x.jsx)("div",{className:["grid sm:grid-cols-2 justify-center mx-auto gap-5",I?"pt-5":""].join(" "),children:t&&Object.keys(t).filter((function(e){return!s.includes(e.toUpperCase())})).filter((function(e){return e!==O})).length>0&&Object.keys(t).filter((function(e){return!s.includes(e.toUpperCase())})).filter((function(e){return e!==O})).map((function(e,s){return t[e].filter((function(e){return!d.includes(e.buy.fields.id)&&!d.includes(e.sell.fields.id)})).length>0?Object(x.jsxs)("div",{className:"cursor-pointer bg-gray-700 bg-opacity-70 rounded-lg p-5 grid grid-flow-col",onClick:function(){N(e)},children:[Object(x.jsx)("img",{className:"self-center pr-3 w-14 mr-1",src:Object(w.a)(e).icon}),Object(x.jsxs)("span",{className:"font-bold self-center",children:[Object(x.jsx)("p",{children:T("\xa1Arbitrajes con {{coinName}}!",{coinName:Object(w.a)(e).name})})," ",Object(x.jsx)("p",{className:"contents font-normal",children:T("Tambi\xe9n hay oportunidades de arbitraje con {{coinName}} de hasta {{percentage}}% de ganancia.",{coinName:Object(w.a)(e).name,percentage:t[e].filter((function(e){return!d.includes(e.buy.fields.id)&&!d.includes(e.sell.fields.id)}))[0].difference})})]})]}):null}))})]})})]})})})}}}]);