(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[40],{192:function(e,t,s){"use strict";t.a=function(e,t){return e===t||e.length===t.length&&e.every((function(e,s){return e.id===t[s].id&&e.title===t[s].title}))}},263:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var n=s(132),i=s(142),a=(s(0),s(27)),c=s(2),r=["children","to","condition"];function l(e){var t=e.children,s=e.to,l=e.condition,o=Object(i.a)(e,r);return l&&s?Object(c.jsx)(a.b,Object(n.a)(Object(n.a)({to:s},o),{},{children:t})):Object(c.jsx)("a",Object(n.a)(Object(n.a)({href:s},o),{},{children:t}))}},392:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return k}));var n=s(130),i=s(0),a=s.n(i),c=s(209),r=s(384),l=s(180),o=s(129),d=s(134),m=s(132),f=s(382),p=s(327),b=s(328),j=s(198),u=s(230),x=s(160),h=s(213),O=s(192),g=s(263),w=s(2);function N(e){var t=e.contextualTrackingData,s=e.rollsData,n=e.crypto,c=e.blockedProviders,r=e.selectedCurrency,l=e.setCalculatorData,O=e.setCalculatorModalIsOpen,N=e.showProviderIcon,y=e.rollsModalIsOpen,v=Object(o.a)().t,_=Object(x.useTracking)(t).trackEvent;return Object(i.useEffect)((function(){y&&(u.a.hide(),u.a.rebuild())}),[y,s]),isNaN(n)&&s&&n in s&&s[n].filter((function(e){return!c.includes(e.buy.fields.id)&&!c.includes(e.sell.fields.id)})).map((function(e,t){return Object(w.jsxs)("div",{className:"relative flex flex-col mt-5 bg-gray-800 rounded-xl",children:[Object(w.jsx)("div",{className:"py-3 px-3 sm:px-6 lg:px-8 border-b border-gray-700",children:Object(w.jsxs)("div",{className:"grid grid-flow-col place-content-between items-center",children:[Object(w.jsx)("span",{className:"text-white items-center",children:Object(w.jsxs)("h3",{className:"text-lg",children:[Object(w.jsx)("span",{className:"inline-flex items-center font-bold",children:v("Gan\xe1 {{difference}}%",{difference:e.difference})}),Object(w.jsx)("span",{className:"px-2",children:"\u2022"}),v("Inversi\xf3n m\xednima {{minimumInversion}}",{minimumInversion:e.minimumInversion})]})}),Object(w.jsx)(f.a,{onClick:function(){l(Object(m.a)(Object(m.a)({},{userInversion:e.rawMinimumInversion}),e)),O(!0)},className:"w-5 h-5 -mr-1 cursor-pointer","aria-hidden":"true"})]})}),Object(w.jsx)("div",{className:"py-2 px-3 align-middle inline-block",children:Object(w.jsx)("div",{className:"overflow-x-auto no-scrollbar",children:Object(w.jsxs)("table",{className:"table-fixed",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-400",children:v("Compr\xe1s en")}),Object(w.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-400",children:v("Vend\xe9s en")})]})}),Object(w.jsx)("tbody",{children:Object(w.jsx)("tr",{children:Object(d.a)(Array("buy","sell")).map((function(t,s){return Object(w.jsx)(a.a.Fragment,{children:Object(w.jsxs)("td",{className:"px-1 pt-1 sm:px-5 sm:pb-5 w-64",children:[Object(w.jsxs)("span",{className:"flex",children:[Object(w.jsxs)(g.a,{condition:e[t].fields.id.indexOf("p2p")>-1,className:"grid grid-flow-col",to:e[t].fields.url,target:-1===e[t].fields.id.indexOf("p2p")?"_blank":"_self",rel:-1===e[t].fields.id.indexOf("p2p")?"sponsored noreferrer":void 0,children:[N&&Object(w.jsx)("img",{loading:"lazy",className:"w-5 sm:w-7 mr-2 self-center",src:e[t].fields.icon,alt:e[t].fields.name}),Object(w.jsx)("div",{className:"text-md self-center",children:Object(w.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:e[t].fields.name})})]}),e[t].fields.info_access&&Object(w.jsx)(p.a,{onClick:function(s){_({event:"user_action",event_category:"".concat(e[t].fields.id,"_home_rolls_info_access"),event_label:"click"}),window.open(e[t].fields.info_access_url),s.preventDefault()},className:"w-6 h-6 ml-1 cursor-pointer text-blue-500","aria-hidden":"true"},s),e[t].fields["available_".concat("ask"===t?"deposits":"withdrawals","_blockchains")]&&e[t].fields["available_".concat("ask"===t?"deposits":"withdrawals","_blockchains")].filter((function(e){return-1===["BITCOIN","ETHEREUM"].indexOf(e)})).map((function(s,i){return Object(w.jsxs)(a.a.Fragment,{children:[Object(w.jsx)(u.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"rolls-".concat(e[t].fields.id,"-").concat(n,"-").concat(s),children:v("{{- providerName}} te permite operar con la red de {{blockchainName}} haciendo la transacci\xf3n m\xe1s r\xe1pida y barata.",{providerName:e[t].fields.name,blockchainName:Object(h.a)(s).name})}),Object(w.jsx)("img",{loading:"lazy",src:Object(h.a)(s).icon,className:"ml-1 w-4 h-4 self-center ".concat(s," cursor-pointer"),"data-tip":!0,"data-for":"rolls-".concat(e[t].fields.id,"-").concat(n,"-").concat(s)})]},i)})),("buy"===t&&(!1===e[t].fields.fiat_deposits_operating_now||!1===e[t].fields.crypto_withdrawals_operating_now)||"sell"===t&&(!1===e[t].fields.fiat_withdrawals_operating_now||!1===e[t].fields.crypto_deposits_operating_now))&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(b.a,{className:"text-indigo-500 w-4 h-4 self-center ml-1 cursor-pointer","aria-hidden":"true","data-tip":!0,"data-for":"rolls-".concat(e[t].fields.id,"-").concat(n,"-").concat(t)}),Object(w.jsx)(u.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"rolls-".concat(e[t].fields.id,"-").concat(n,"-").concat(t),children:"buy"===t&&(!1===e[t].fields.fiat_deposits_operating_now&&!1===e[t].fields.crypto_withdrawals_operating_now&&v("En este momento no permite dep\xf3sitos de FIAT ni retiros de criptomonedas.")||!1===e[t].fields.fiat_deposits_operating_now&&v("En este momento no permite dep\xf3sitos de FIAT.")||!1===e[t].fields.crypto_withdrawals_operating_now&&v("En este momento no permite retiros de criptomonedas."))||"sell"===t&&(!1===e[t].fields.fiat_withdrawals_operating_now&&!1===e[t].fields.crypto_deposits_operating_now&&v("En este momento no permite dep\xf3sitos de criptomonedas ni retiros de FIAT.")||!1===e[t].fields.fiat_withdrawals_operating_now&&v("En este momento no permite retiros de FIAT.")||!1===e[t].fields.crypto_deposits_operating_now&&v("En este momento no permite dep\xf3sitos de criptomonedas."))})]})]}),e[t].fields.score&&e[t].fields.score.count>0&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("span",Object(m.a)(Object(m.a)({},e[t].fields.score&&e[t].fields.score.count>0&&e[t].fields.score.rating<=2&&{"data-tip":"","data-for":"rolls-".concat(e[t].fields.id,"-").concat(n,"-bad-score")}),{},{className:e[t].fields.score.rating<=2?"text-sm self-center inline-flex text-red-400":"text-sm self-center text-gray-500 inline-flex",children:[e[t].fields.score.rating,Object(w.jsx)(j.a,{className:"w-5 h-5 -mr-1","aria-hidden":"true"})]})),e[t].fields.score&&e[t].fields.score.count>0&&e[t].fields.score.rating<=2&&Object(w.jsx)(u.a,{html:!0,place:"right",className:"w-48",effect:"solid",id:"rolls-".concat(e[t].fields.id,"-").concat(n,"-bad-score"),children:v("Atenci\xf3n: te recomendamos que leas atentamente las opiniones de otros usuarios antes de operar.")})]}),Object(w.jsx)("span",{className:"flex",children:r&&t in e&&r in e[t].fields&&("buy"===t?e[t].fields[r].ask:e[t].fields[r].bid)})]})},s)}))})})]})})})]},t)}))}var y=function(e,t){return Object(O.a)(e.blockedProviders,t.blockedProviders)&&e.crypto===t.crypto&&e.selectedCurrency===t.selectedCurrency&&e.showProviderIcon===t.showProviderIcon&&JSON.stringify(e.rollsData)===JSON.stringify(t.rollsData)},v=a.a.memo(N,y),_=s(163);function k(e){var t=e.rollsData,s=e.blockedCryptos,a=e.contextualTrackingData,d=e.blockedProviders,m=e.selectedCurrency,f=e.setCalculatorData,p=e.calculatorModalIsOpen,b=e.setCalculatorModalIsOpen,j=e.showProviderIcon,u=e.rollsModalIsOpen,x=e.setRollsModalIsOpen,h=e.rollsModalCoin,O=e.setRollsModalCoin,g=e.setNotificationSettingsModalIsOpen,N=e.notificationSettingsModalIsOpen,y=e.notificationsEnabled,k=e.selectedCryptosForNotifications,C=e.selectedPercentageForNotifications,I=e.isMobile,T=Object(o.a)().t;return Object(w.jsx)(c.a,{appear:!0,show:u,as:i.Fragment,children:Object(w.jsx)(r.a,{as:"div",className:"fixed inset-0 z-50 overflow-y-auto",onClose:function(){return!N&&!p&&x(!1)},children:Object(w.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(w.jsx)(r.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(w.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(w.jsx)(c.a.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(w.jsxs)("div",{className:"inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl text-white",children:[Object(w.jsxs)("div",{className:"flex justify-between",children:[Object(w.jsxs)(r.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:[T("Oportunidades con"),Object(w.jsx)("img",{loading:"lazy",className:"w-5 h-5 mx-1 inline-block align-bottom",src:Object(_.a)(h)&&Object(_.a)(h).icon||"https://cdn.worldvectorlogo.com/logos/dinosaurio.svg"}),Object(_.a)(h).name||crypto]}),Object(w.jsx)(l.a,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){return x(!1)}})]}),t&&Object.keys(t).length>0&&Object.values(t).flatMap((function(e){return e})).filter((function(e){return!s.includes(e.coin)})).filter((function(e){return!d.includes(e.buy.fields.id)&&!d.includes(e.sell.fields.id)})).length>0&&Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("h2",{className:"",children:[T("Arbitrajes disponibles en este mism\xedsimo momento.")," ",Object(w.jsx)("a",{className:"underline",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(T("blog/como-hacer-un-arbitraje-de-criptomonedas")),target:"_blank",rel:"noreferrer",children:T("C\xf3mo arbitrar")})]})}),t&&Object.keys(t).filter((function(e){return!s.includes(e.toUpperCase())})).filter((function(e){return e===h})).length>0&&Object.keys(t).filter((function(e){return!s.includes(e.toUpperCase())})).filter((function(e){return e===h})).map((function(e,s){return Object(w.jsx)(v,{contextualTrackingData:a,rollsData:Object.keys(t).includes(h)?Object(n.a)({},h,t[h]):{},crypto:e,blockedProviders:d,selectedCurrency:m,setCalculatorData:f,setCalculatorModalIsOpen:b,showProviderIcon:j,rollsModalIsOpen:u},s)}))||Object(w.jsxs)("div",{className:"grid grid-flow-col items-center gap-5 p-16",children:[Object(w.jsx)("p",{className:"text-2xl text-center",children:T("No encontramos oportunidades en este momento")}),Object(w.jsx)("img",{src:"/static/img/rolls-empty-state.webp",loading:"lazy",className:"hidden w-60 sm:block"})]}),!I&&Object(w.jsxs)("div",{className:"w-full grid grid-cols-10 my-5 bg-white cursor-pointer relative h-full text-sm",onClick:function(){g(!0)},children:[Object(w.jsxs)("div",{className:"col-span-8 grid grid-flow-row text-black mx-5",children:[(!y||!k.includes(h))&&Object(w.jsx)("span",{className:"flex pt-5",children:Object(w.jsx)("p",{className:"font-bold text-md",children:T("Crea una alerta personalizada")})})||Object(w.jsx)("span",{className:"flex pt-5",children:Object(w.jsx)("p",{className:"font-bold text-md",children:T("Tienes una alerta creada para arbitrajes con {{coin}} desde {{percentage}}% de ganancia",{coin:Object(_.a)(h).name,percentage:C})})}),Object(w.jsx)("p",{className:"pb-5",children:T("Te enviaremos una notificaci\xf3n de escritorio cada vez que encontremos oportunidades para ti.")})]}),Object(w.jsx)("img",{loading:"lazy",src:"/static/img/notification-settings-banner.webp",className:"col-span-2 absolute -right-3 -bottom-6 h-36"})]}),Object(w.jsx)("div",{className:["grid sm:grid-cols-2 justify-center mx-auto gap-5",I?"pt-5":""].join(" "),children:t&&Object.keys(t).filter((function(e){return!s.includes(e.toUpperCase())})).filter((function(e){return e!==h})).length>0&&Object.keys(t).filter((function(e){return!s.includes(e.toUpperCase())})).filter((function(e){return e!==h})).map((function(e,s){return t[e].filter((function(e){return!d.includes(e.buy.fields.id)&&!d.includes(e.sell.fields.id)})).length>0?Object(w.jsxs)("div",{className:"cursor-pointer bg-gray-700 bg-opacity-70 rounded-lg p-5 grid grid-flow-col",onClick:function(){O(e)},children:[Object(w.jsx)("img",{className:"self-center pr-3 w-14 mr-1",src:Object(_.a)(e).icon}),Object(w.jsxs)("span",{className:"font-bold self-center",children:[Object(w.jsx)("p",{children:T("\xa1Arbitrajes con {{coinName}}!",{coinName:Object(_.a)(e).name})})," ",Object(w.jsx)("p",{className:"contents font-normal",children:T("Tambi\xe9n hay oportunidades de arbitraje con {{coinName}} de hasta {{percentage}}% de ganancia.",{coinName:Object(_.a)(e).name,percentage:t[e].filter((function(e){return!d.includes(e.buy.fields.id)&&!d.includes(e.sell.fields.id)}))[0].difference})})]})]}):null}))})]})})]})})})}}}]);