(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[4],{181:function(e,t,a){"use strict";t.a=function(e,t){return e===t||e.length===t.length&&e.every((function(e,a){return e.id===t[a].id&&e.title===t[a].title}))}},266:function(e,t,a){"use strict";a.r(t);var i=a(49),r=a(20),n=a(4),c=a(0),s=a.n(c),o=a(128),l=a(228),d=a(6),u=a(129),m=a(660),b=a.n(m),j=a(673),p=a.n(j),g=a(181),x=(a(674),a(1)),f=function(e){var t=e.index,a=e.selectedIndex,i=e.hoverIndex,r=t<=a,n=null!=i&&t<=i,c=null!=i,s=i===t;return Object(x.jsx)(d.B,{className:["w-5 h-5 mr-1 text-gray-400",c&&r&&!n&&"text-blue-300",(r||s)&&!(c&&r&&!n)&&"text-blue-400",c&&!r&&n&&"text-blue-400"].join(" "),"aria-hidden":"true"})};function h(e){var t=e.reviewModalIsOpen,a=e.executeRecaptcha,s=e.setReviewModalIsOpen,m=e.selectedProvider,j=e.setSelectedProvider,g=e.providerList,h=e.alreadyRecommended,O=e.setAlreadyRecommended,v=e.modalContext,_=Object(u.a)().t,y=Object(c.useState)({provider_id:m.provider_id,review_comment:"",email:null,transfer_speed_rating:0,liquidity_rating:0,usability_rating:0,support_rating:0,arbitrage_quality:-2}),w=Object(n.a)(y,2),N=w[0],k=w[1],C=Object(c.useRef)(null),q=Object(c.useState)([]),R=Object(n.a)(q,2),S=R[0],D=R[1],T=Object(c.useState)(!1),F=Object(n.a)(T,2),P=F[0],A=F[1],I=function(e){k(Object(r.a)(Object(r.a)({},N),{},{arbitrage_quality:+e.target.value}))};return Object(x.jsx)(o.a,{appear:!0,show:t,as:c.Fragment,children:Object(x.jsx)(l.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){s(!1),A(!1)},children:Object(x.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(x.jsx)(l.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(x.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(x.jsx)(o.a.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(x.jsxs)("div",{className:"inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(x.jsxs)("div",{className:"flex justify-between",children:[Object(x.jsx)(l.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:!P&&_("Opinar")}),Object(x.jsx)(d.F,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){s(!1),A(!1)}})]}),!P&&Object(x.jsxs)("form",{ref:C,children:[Object(x.jsxs)("div",{className:"mt-3 text-white",children:[Object(x.jsx)("p",{children:_("\xbfDe qui\xe9n quieres opinar?")}),Object(x.jsx)("select",{className:"mt-2 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:bg-white w-full",onChange:function(e){j(g.filter((function(t){return t.provider_id===e.target.value}))[0]),k(Object(r.a)(Object(r.a)({},N),{},{provider_id:e.target.value}))},defaultValue:m.provider_id,disabled:1===g.length,children:Object(i.a)(g).sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){return Object(x.jsx)("option",{value:e.provider_id,children:e.name},e.provider_id)}))})]}),-1===m.provider_id.indexOf("p2p")&&Object(x.jsxs)("div",{className:["mt-3 text-white",S.indexOf("transfer_speed_rating")>-1?"shake-animation":""].join(" "),children:[Object(x.jsx)("p",{children:_("\xbfC\xf3mo calificar\xedas su velocidad de transferencias?")}),Object(x.jsx)(b.a,{className:"mt-2",value:N.transfer_speed_rating,onChange:function(e){k(Object(r.a)(Object(r.a)({},N),{},{transfer_speed_rating:e}))},numberStars:5,starRenderer:f})]})||Object(x.jsxs)("div",{className:["mt-3 text-white",S.indexOf("liquidity_rating")>-1?"shake-animation":""].join(" "),children:[Object(x.jsx)("p",{children:_("\xbfC\xf3mo calificar\xedas su liquidez (cantidad de publicaciones u oferta)?")}),Object(x.jsx)(b.a,{className:"mt-2",value:N.liquidity_rating,onChange:function(e){k(Object(r.a)(Object(r.a)({},N),{},{liquidity_rating:e}))},numberStars:5,starRenderer:f})]}),Object(x.jsxs)("div",{className:["mt-3 text-white",S.indexOf("usability_rating")>-1?"shake-animation":""].join(" "),children:[Object(x.jsx)("p",{children:_("\xbfC\xf3mo calificar\xedas su facilidad de uso?")}),Object(x.jsx)(b.a,{className:"mt-2",value:N.usability_rating,onChange:function(e){k(Object(r.a)(Object(r.a)({},N),{},{usability_rating:e}))},numberStars:5,starRenderer:f})]}),Object(x.jsxs)("div",{className:["mt-3 text-white",S.indexOf("support_rating")>-1?"shake-animation":""].join(" "),children:[Object(x.jsx)("p",{children:_("\xbfC\xf3mo calificar\xedas su atenci\xf3n?")}),Object(x.jsx)(b.a,{className:"mt-2",value:N.support_rating,onChange:function(e){k(Object(r.a)(Object(r.a)({},N),{},{support_rating:e}))},numberStars:5,starRenderer:f})]}),-1===m.provider_id.indexOf("p2p")&&Object(x.jsxs)("div",{className:["mt-3 text-white",S.indexOf("arbitrage_quality")>-1?"shake-animation":""].join(" "),children:[Object(x.jsx)("p",{children:_("\xbfRecomend\xe1s {{providerName}} para arbitrar?",{providerName:m.name})}),Object(x.jsxs)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:[Object(x.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(x.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:"1",checked:1===N.arbitrage_quality,onChange:I}),Object(x.jsx)("span",{className:"ml-1",children:_("Si")})]}),Object(x.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(x.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:"0",checked:0===N.arbitrage_quality,onChange:I}),Object(x.jsx)("span",{className:"ml-1",children:_("No")})]}),Object(x.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(x.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:"-1",checked:-1===N.arbitrage_quality,onChange:I}),Object(x.jsx)("span",{className:"ml-1",children:_("Nunca la us\xe9 para arbitrar")})]})]})]}),Object(x.jsx)("label",{htmlFor:"reviewFreeTextArea",className:"form-label inline-block my-3 text-white",children:_("Cu\xe9ntanos un poco m\xe1s, \xbfc\xf3mo fu\xe9 tu experiencia con {{providerName}}?",{providerName:m.name})}),Object(x.jsx)("textarea",{className:"form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none",id:"reviewFreeTextArea",rows:5,placeholder:_("\xbfSali\xf3 todo como esperabas? \xbfSe la recomendar\xedas a un amigo o familiar? \xbfPor qu\xe9?"),onChange:function(e){k(Object(r.a)(Object(r.a)({},N),{},{review_comment:e.target.value}))},value:N.review_comment}),Object(x.jsxs)("div",{className:"grid grid-cols-4 text-white text-xs",children:[S.indexOf("review_comment_length_error")>-1&&N.review_comment.length<20&&Object(x.jsx)("p",{className:"col-span-4",children:_("\xa1Danos m\xe1s detalles! Esperamos al menos 20 caracteres")}),Object(x.jsxs)("p",{className:"col-end-6",children:[N.review_comment.length," / 1500"]})]}),Object(x.jsx)("label",{htmlFor:"emailInput",className:"form-label inline-block my-3 text-white",children:_("\xbfQuieres dejarnos tu e-mail? No quedar\xe1 visible y solo lo usaremos para contactarte si podemos ayudar con tu caso.")}),Object(x.jsx)("input",{type:"email",onChange:function(e){k(Object(r.a)(Object(r.a)({},N),{},{email:e.target.value}))},className:"form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none"}),Object(x.jsx)("div",{className:"mt-5 text-right",children:Object(x.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){return function(){D([]);var e=[];N.provider_id.indexOf("p2p")>-1?(N.arbitrage_quality=-2,0===N.liquidity_rating&&(e=[].concat(Object(i.a)(e),["liquidity_rating"]))):0===N.transfer_speed_rating&&(e=[].concat(Object(i.a)(e),["transfer_speed_rating"])),0===N.usability_rating&&(e=[].concat(Object(i.a)(e),["usability_rating"])),0===N.support_rating&&(e=[].concat(Object(i.a)(e),["support_rating"])),-1===N.provider_id.indexOf("p2p")&&-2===N.arbitrage_quality&&(e=[].concat(Object(i.a)(e),["arbitrage_quality"])),(N.review_comment.length<20||N.review_comment.length>1500)&&(e=[].concat(Object(i.a)(e),["review_comment_length_error"])),!1===C.current.checkValidity()&&(e=[].concat(Object(i.a)(e),["email"]),C.current.reportValidity()),D(e),e.length>0?setTimeout((function(){D(e.filter((function(e){return"review_comment_length_error"===e})))}),1e3):a&&(O([].concat(Object(i.a)(h),[N.provider_id])),A(!0),a("submit_provider_review").then((function(e){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/"):"".concat(window.BARNEY_BR_API_URL,"/reviews/"),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(Object(r.a)(Object(r.a)({},N),{},{captcha_response:e}))}).then((function(){})).catch((function(){}))})))}()},children:_("Enviar mi opini\xf3n")})})]})||Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("img",{loading:"lazy",src:"https://i.imgur.com/nceihRp.png",className:"w-60 mx-auto my-10"}),Object(x.jsx)("p",{className:"text-center text-white font-medium",children:_("\xa1Gracias por tu opini\xf3n!")}),Object(x.jsx)("p",{className:"text-white mt-2",children:_("Tu experiencia ayudar\xe1 a tomar buenas decisiones sobre d\xf3nde comprar o vender sus criptomonedas.")}),Object(x.jsx)("button",{type:"button",className:"mt-5 mx-auto px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){s(!1),A(!1)},children:"provider"===v&&_("Volver")||_("Seguir opinando")})]}),P&&Object(x.jsx)(p.a,{})]})})]})})})}var O=function(e,t){return e.selectedProvider.provider_id===t.selectedProvider.provider_id&&(e.reviewData&&t.reviewData&&e.reviewData.transfer_speed_rating===t.reviewData.transfer_speed_rating&&e.reviewData.usability_rating===t.reviewData.usability_rating&&e.reviewData.support_rating===t.reviewData.support_rating&&e.reviewData.arbitrage_quality===t.reviewData.arbitrage_quality||!0)&&Object(g.a)(e.formErrors,t.formErrors)};t.default=s.a.memo(h,O)},674:function(e,t,a){}}]);