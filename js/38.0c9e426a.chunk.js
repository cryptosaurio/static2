(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[38],{129:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var c,r=t(152),s=t(147),n=t(12),i=t(33),o=t(0),l=t.n(o),d=t(242),b=t(154),m=t(316),u=t(201),j=t(138),g=t(211),p=t(160),O=t(1),x=t(34),h=t(162),w=t(336),f=t(290),N=t(335),v=t(217),y=t(2),R=l.a.lazy((function(){return Promise.all([t.e(5),t.e(33)]).then(t.bind(null,224))})),_=Object(h.a)(w.a)((function(e){var a,t=e.theme;return a={},Object(i.a)(a,".".concat(f.a.root),{color:t.palette.common.white}),Object(i.a)(a,"a.".concat(f.a.root),{border:"1px solid rgba(55, 65, 81, var(--tw-bg-opacity))",backgroundColor:"inherit"}),Object(i.a)(a,"a.".concat(f.a.root,".").concat(f.a.selected),{color:"rgba(96, 165, 250, var(--tw-border-opacity))",border:"1px solid rgba(96, 165, 250, var(--tw-border-opacity))"}),a}));function E(){return Object(y.jsx)(g.a,{reCaptchaKey:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI",children:Object(y.jsx)(T,{})})}function T(){var e={page:"provider-reviews",country:window.COUNTRY},a=Object(p.useTracking)(e).trackEvent,t=Object(j.a)().t,l=Object(g.b)().executeRecaptcha,h=Object(O.h)(),w=h.providerId,f=h.orderBy,E=h.page,T=Object(x.d)(),C=Object(n.a)(T,1)[0],U=Object(s.a)(C).reduce((function(e,a){var t=Object(n.a)(a,2),c=t[0],r=t[1];return e[c]=r,e}),{}).reviewModalOpen;Object(o.useEffect)((function(){var t={event:"pageview"};"production"===window.ENV?a(t):console.log(e,t)}),[]);var k=Object(o.useState)(null),S=Object(n.a)(k,2),B=S[0],A=S[1],Y=Object(o.useState)(null),D=Object(n.a)(Y,2),I=D[0],z=D[1],L=Object(o.useState)({}),F=Object(n.a)(L,2),V=F[0],M=F[1],P=Object(o.useState)([]),W=Object(n.a)(P,2),G=W[0],q=W[1],X=Object(o.useState)(null),J=Object(n.a)(X,2),K=J[0],H=J[1],Z=Object(o.useState)(!1),Q=Object(n.a)(Z,2),$=Q[0],ee=Q[1],ae=Object(o.useRef)(null),te=Object(o.useState)(!1),ce=Object(n.a)(te,2),re=ce[0],se=ce[1],ne=Object(o.useState)(-1!==Object.values(c).indexOf(f)&&c["".concat("br"===window.COUNTRY?"BR_":"").concat(Object.keys(c)[Object.values(c).indexOf(f)])]||-1!==Object.values(c).indexOf(f)&&c[Object.keys(c)[Object.values(c).indexOf(f)]]||("br"!==window.COUNTRY?c.NEWEST:c.BR_NEWEST)),ie=Object(n.a)(ne,2),oe=ie[0],le=ie[1],de=Object(o.useState)(E||1),be=Object(n.a)(de,2),me=be[0],ue=be[1];function je(e,a){l&&l("vote_review").then((function(t){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/review/"):"".concat(window.BARNEY_BR_API_URL,"/review/"),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e,operation_type:a,captcha_response:t})}).then((function(){})).catch((function(){}))}))}return Object(o.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/provider/").concat(w):"".concat(window.BARNEY_BR_API_URL,"/provider/").concat(w)).then((function(e){return e.json()})).then((function(e){e.provider_id=e.id,A(e),H(e),U&&ee(!0)})).catch((function(){A(null)}))}),[]),Object(o.useEffect)((function(){var e=w.indexOf("p2p")>-1?"?merge=true":"";fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/").concat(w,"/general-info").concat(e):"".concat(window.BARNEY_BR_API_URL,"/reviews/").concat(w,"/general-info").concat(e)).then((function(e){return e.json()})).then((function(e){z(e)})).catch((function(){z(null)}))}),[]),Object(o.useEffect)((function(){var e=w.indexOf("p2p")>-1?"?merge=true":"";fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/").concat(w,"/").concat(oe,"/").concat(me).concat(e):"".concat(window.BARNEY_BR_API_URL,"/reviews/").concat(w,"/").concat(oe,"/").concat(me).concat(e)).then((function(e){return e.json()})).then((function(e){M((function(a){return Object(r.a)(Object(r.a)({},a),Object(i.a)({},oe,Object(i.a)({},me,e)))}))})).catch((function(){}))}),[me,oe]),Object(o.useEffect)((function(){var e=-1!==Object.values(c).indexOf(oe)&&c["".concat("br"===window.COUNTRY?"BR_":"").concat(Object.keys(c)[Object.values(c).indexOf(oe)])]||-1!==Object.values(c).indexOf(oe)&&c[Object.keys(c)[Object.values(c).indexOf(oe)]]||("br"!==window.COUNTRY?c.NEWEST:c.BR_NEWEST);"br"!==window.COUNTRY?history.replaceState({},document.title,"/".concat(window.COUNTRY,"/opiniones/").concat(w,"/").concat(e,"/").concat(me)):history.replaceState({},document.title,"/opinioes/".concat(w,"/").concat(e,"/").concat(me))}),[oe]),Object(o.useEffect)((function(){G.indexOf(w)>-1&&(ue(1),le("br"!==window.COUNTRY?c.NEWEST:c.BR_NEWEST))}),[G]),Object(y.jsxs)(y.Fragment,{children:[B&&I&&I.count>0&&Object(y.jsx)(d.JsonLd,{item:{"@context":"https://schema.org","@type":"Product",name:B.name,image:B.icon,aggregateRating:{"@type":"AggregateRating",ratingValue:I.rating||"-",reviewCount:I.count,ratingCount:I.count}}}),B&&Object(y.jsx)(v.a,{page:"providerReviews",providerId:B.id}),Object(y.jsxs)("div",{className:"mx-5 mt-5",children:[Object(y.jsx)("span",{className:"mt-5 text-2xl items-center",children:Object(y.jsxs)("div",{className:"flex flex-row",children:[Object(y.jsx)("a",{className:"flex-shrink-0",href:B&&B.url,target:"_blank",rel:"sponsored noreferrer",children:Object(y.jsx)("img",{ref:function(e){return ae.current=e},onLoad:function(){return se(!0)},src:B&&B.icon,className:["rounded-full mx-5 w-16 h-16",!re&&"animate-pulse bg-gray-600 p-8"].join(" "),alt:B&&B.name})}),Object(y.jsxs)("div",{className:"grid grid-flow-row",children:[Object(y.jsxs)("div",{className:"grid grid-flow-col",children:[Object(y.jsx)("h1",{className:["font-bold",B?"sm:w-max":"animate-pulse bg-gray-600 w-36 h-7"].join(" "),children:B&&Object(y.jsx)("a",{href:B.url,target:"_blank",rel:"sponsored noreferrer",children:B.name})}),Object(y.jsx)(b.z,{className:"w-8 h-8 text-blue-400 ml-2","aria-hidden":"true"}),I&&Object(y.jsx)("p",{children:I.rating||"-"})||Object(y.jsx)("div",{className:"w-6 h-8 animate-pulse bg-gray-600"})]}),I&&Object(y.jsxs)("span",{className:"text-sm",children:[Object(y.jsx)("span",{children:I.count})," ",1==I.count?t("opinion"):t("opiniones")]})||Object(y.jsx)("div",{className:"w-24 h-5 bg-gray-600 animate-pulse"})]})]})}),I&&Object(y.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-5 text-center pt-4",children:[B&&Object(y.jsx)(y.Fragment,{children:-1===B.id.indexOf("p2p")&&Object(y.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(y.jsx)("img",{src:"/static/img/transfer-speed-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(y.jsx)("h2",{children:t("Velocidad de transferencias")}),Object(y.jsxs)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 text-white items-center w-max border border-blue-400",children:[Object(y.jsx)(b.z,{className:"w-5 h-5 mr-1 text-blue-400","aria-hidden":"true"}),I.average_transfer_speed_rating||"-"]})]})||Object(y.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(y.jsx)("img",{src:"/static/img/transfer-speed-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(y.jsx)("h2",{children:t("Liquidez")}),Object(y.jsxs)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 text-white items-center w-max border border-blue-400",children:[Object(y.jsx)(b.z,{className:"w-5 h-5 mr-1 text-blue-400","aria-hidden":"true"}),I.average_liquidity_rating||"-"]})]})})||Object(y.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-4 rounded-lg col-span-1",children:[Object(y.jsx)("div",{className:"w-20 h-20 m-auto bg-gray-800 animate-pulse"}),Object(y.jsx)("div",{className:"bg-gray-800 w-32 h-5 animate-pulse m-auto"}),Object(y.jsx)("div",{className:"bg-gray-800 w-16 h-6 rounded-lg animate-pulse m-auto mt-1 -mb-1.5"})]}),Object(y.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(y.jsx)("img",{src:"/static/img/usability-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(y.jsx)("h2",{children:t("Facilidad de uso")}),Object(y.jsxs)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 text-white items-center w-max border border-blue-400",children:[Object(y.jsx)(b.z,{className:"w-5 h-5 mr-1 text-blue-400","aria-hidden":"true"}),I.average_usability_rating||"-"]})]}),Object(y.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(y.jsx)("img",{src:"/static/img/support-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(y.jsx)("h2",{children:t("Calidad de atenci\xf3n")}),Object(y.jsxs)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 text-white items-center w-max border border-blue-400",children:[Object(y.jsx)(b.z,{className:"w-5 h-5 mr-1 text-blue-400","aria-hidden":"true"}),I.average_support_rating||"-"]})]}),B&&Object(y.jsx)(y.Fragment,{children:-1===B.id.indexOf("p2p")&&("arbitrage_quality_0"in I||"arbitrage_quality_1"in I)&&Object(y.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(y.jsx)("img",{src:"/static/img/arbitrage-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(y.jsx)("h2",{children:t("Recomendaciones para arbitrar")}),Object(y.jsxs)("div",{className:"flex gap-2 mx-auto",children:[Object(y.jsxs)("span",{className:"flex rounded-lg px-3 bg-gray-700 text-white items-center w-max border border-blue-400",children:[Object(y.jsx)(b.B,{className:"w-5 h-5 mr-1","aria-hidden":"true"}),I.arbitrage_quality_1||"-"]}),Object(y.jsxs)("span",{className:"flex rounded-lg px-3 bg-gray-700 text-white items-center w-max border border-blue-400",children:[Object(y.jsx)(b.A,{className:"w-5 h-5 mr-1","aria-hidden":"true"}),I.arbitrage_quality_0||"-"]})]})]})})||-1===w.indexOf("p2p")&&Object(y.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-4 rounded-lg col-span-1",children:[Object(y.jsx)("div",{className:"w-20 h-20 m-auto bg-gray-800 animate-pulse"}),Object(y.jsx)("div",{className:"bg-gray-800 w-32 h-5 animate-pulse m-auto"}),Object(y.jsxs)("div",{className:"flex gap-2 mx-auto",children:[Object(y.jsx)("span",{className:"bg-gray-800 w-16 h-6 rounded-lg animate-pulse mt-1 -mb-1.5"}),Object(y.jsx)("span",{className:"bg-gray-800 w-16 h-6 rounded-lg animate-pulse mt-1 -mb-1.5"})]})]})]}),!I&&Object(y.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-5 text-center pt-4",children:[Object(y.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-4 rounded-lg col-span-1",children:[Object(y.jsx)("div",{className:"w-20 h-20 m-auto bg-gray-800 animate-pulse"}),Object(y.jsx)("div",{className:"bg-gray-800 w-32 h-5 animate-pulse m-auto"}),Object(y.jsx)("div",{className:"bg-gray-800 w-16 h-6 rounded-lg animate-pulse m-auto mt-1 -mb-1.5"})]}),Object(y.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-4 rounded-lg col-span-1",children:[Object(y.jsx)("div",{className:"w-20 h-20 m-auto bg-gray-800 animate-pulse"}),Object(y.jsx)("div",{className:"bg-gray-800 w-32 h-5 animate-pulse m-auto"}),Object(y.jsx)("div",{className:"bg-gray-800 w-16 h-6 rounded-lg animate-pulse m-auto mt-1 -mb-1.5"})]}),Object(y.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-4 rounded-lg col-span-1",children:[Object(y.jsx)("div",{className:"w-20 h-20 m-auto bg-gray-800 animate-pulse"}),Object(y.jsx)("div",{className:"bg-gray-800 w-32 h-5 animate-pulse m-auto"}),Object(y.jsx)("div",{className:"bg-gray-800 w-16 h-6 rounded-lg animate-pulse m-auto mt-1 -mb-1.5"})]}),-1===w.indexOf("p2p")&&Object(y.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-4 rounded-lg col-span-1",children:[Object(y.jsx)("div",{className:"w-20 h-20 m-auto bg-gray-800 animate-pulse"}),Object(y.jsx)("div",{className:"bg-gray-800 w-32 h-5 animate-pulse m-auto"}),Object(y.jsxs)("div",{className:"flex gap-2 mx-auto",children:[Object(y.jsx)("span",{className:"bg-gray-800 w-16 h-6 rounded-lg animate-pulse mt-1 -mb-1.5"}),Object(y.jsx)("span",{className:"bg-gray-800 w-16 h-6 rounded-lg animate-pulse mt-1 -mb-1.5"})]})]})]}),Object(y.jsxs)("div",{className:"grid grid-flow-row pt-5",children:[Object(y.jsxs)("div",{className:"grid grid-cols-3 sm:grid-cols-10 sm:justify-between md:mr-32 lg:mr-52 xl:mr-72",children:[Object(y.jsxs)("h2",{className:"col-span-7 self-center text-xl flex",children:[t("Opiniones sobre")," ",B&&B.name||Object(y.jsx)("div",{className:"bg-gray-600 w-24 h-5 mt-1 animate-pulse ml-1"})]}),Object(y.jsx)(m.a,{value:oe,onChange:function(e){ue(1),le(e)},children:Object(y.jsxs)("div",{className:"relative col-span-2 sm:col-start-8 lg:col-start-8 sm:col-span-3 rounded-md border border-gray-700",children:[Object(y.jsxs)(m.a.Button,{className:"w-full py-2 pl-3 pr-10 text-left rounded-lg shadow-md cursor-default sm:text-sm",children:[Object(y.jsx)("span",{className:"block truncate",children:t(Object.keys(c)[Object.values(c).indexOf(oe)])}),Object(y.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:Object(y.jsx)(b.v,{className:"w-5 h-5","aria-hidden":"true"})})]}),Object(y.jsx)(u.a,{as:o.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(y.jsx)(m.a.Options,{className:"z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-700 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:Object.keys(c).filter((function(e,a){return-1===e.indexOf("BR")})).map((function(e,a){return Object(y.jsx)(m.a.Option,{value:Object.values(c)[a],className:function(e){var a=e.active;return"".concat(a&&"bg-gray-500","\n                            cursor-default select-none relative py-2 pl-10 pr-4")},children:function(e){var r=e.selected;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("span",{className:"".concat(r?"font-medium":"font-normal"," block truncate"),children:t(Object.keys(c)[a])}),r?Object(y.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3",children:Object(y.jsx)(b.h,{className:"w-5 h-5","aria-hidden":"true"})}):null]})}},e)}))})})]})})]}),Object(y.jsxs)("div",{className:"grid grid-flow-row md:mr-32 lg:mr-52 xl:mr-72",children:[oe in V&&me in V[oe]&&V[oe][me].map((function(e,a){return Object(y.jsxs)("div",{className:"grid grid-flow-row border border-blue-400 my-5 py-5 p-3",children:[Object(y.jsxs)("div",{className:"grid grid-flow-col justify-between pb-2",children:[Object(y.jsxs)("div",{className:"flex",children:[Object(s.a)(Array(Math.ceil(e.average_rating))).map((function(e,a){return Object(y.jsx)(b.z,{className:"w-7 h-7 text-blue-400 ml-2","aria-hidden":"true"},a)})),Object(s.a)(Array(5-Math.ceil(e.average_rating))).map((function(e,a){return Object(y.jsx)(b.z,{className:"w-7 h-7 text-gray-400 ml-2","aria-hidden":"true"},a)}))]}),Object(y.jsx)("div",{children:e.date})]}),Object(y.jsx)("p",{className:"ml-2 pb-2",children:e.review_comment}),Object(y.jsxs)("div",{className:"flex flex-auto-col gap-10",children:[Object(y.jsxs)("span",{className:"flex items-center gap-1 cursor-pointer",children:[Object(y.jsx)(b.B,{onClick:function(){e.alreadyUpvoted||(e.alreadyUpvoted=!0,M(Object(r.a)({},V)),je(e.pk,"upvote"))},className:["w-5 h-5 ml-2",e.alreadyUpvoted&&"text-gray-600"].join(" "),"aria-hidden":"true"}),e.alreadyUpvoted&&e.upvoted+1||e.upvoted]}),Object(y.jsxs)("span",{className:"flex items-center gap-1 cursor-pointer",children:[Object(y.jsx)(b.A,{onClick:function(){e.alreadyDownvoted||(e.alreadyDownvoted=!0,M(Object(r.a)({},V)),je(e.pk,"downvote"))},className:["w-5 h-5 ml-2",e.alreadyDownvoted&&"text-gray-600"].join(" "),"aria-hidden":"true"}),e.alreadyDownvoted&&e.downvoted+1||e.downvoted]})]})]},a)}))||Object(s.a)(Array(5)).map((function(e,a){return Object(y.jsxs)("div",{className:"grid grid-flow-row border border-blue-400 my-5 py-5 p-3",children:[Object(y.jsxs)("div",{className:"grid grid-flow-col justify-between pb-2",children:[Object(y.jsx)("div",{className:"flex",children:Object(s.a)(Array(Math.ceil(1+4*Math.random()))).map((function(e,a){return Object(y.jsx)(b.z,{className:"w-8 h-8 text-gray-400 ml-2 animate-pulse","aria-hidden":"true"},a)}))}),Object(y.jsx)("div",{className:"w-24 h-5 bg-gray-600 animate-pulse"})]}),Object(y.jsxs)("div",{className:"ml-2 pb-2 mb-2",children:[Object(y.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-full h-3"}),Object(y.jsx)("p",{className:"bg-gray-700 animate-pulse w-44 sm:w-80 h-3"})]}),Object(y.jsxs)("div",{className:"flex flex-auto-col gap-10",children:[Object(y.jsxs)("span",{className:"flex items-center gap-1 cursor-pointer",children:[Object(y.jsx)(b.B,{className:"w-5 h-5 ml-2","aria-hidden":"true"}),Object(y.jsx)("span",{className:"w-5 h-5 bg-gray-600 animate-pulse"})]}),Object(y.jsxs)("span",{className:"flex items-center gap-1 cursor-pointer",children:[Object(y.jsx)(b.A,{className:"w-5 h-5 ml-2","aria-hidden":"true"}),Object(y.jsx)("span",{className:"w-5 h-5 bg-gray-600 animate-pulse"})]})]})]},a)})),I&&Math.floor(I.count/5)>1&&Object(y.jsx)("div",{className:"w-max mx-auto",children:Object(y.jsx)(_,{siblingCount:0,page:+me,count:Math.floor(I.count/5),showFirstButton:!0,showLastButton:!0,variant:"outlined",shape:"rounded",renderItem:function(e){return Object(y.jsx)(N.a,Object(r.a)(Object(r.a)({},e),{},{component:x.b,to:"".concat("br"!==window.COUNTRY&&"/".concat(window.COUNTRY)||"").concat(t("/opiniones/")).concat(w,"/").concat(oe,"/").concat(e.page),color:"primary"}))},onChange:function(e,a){ue(a),history.replaceState({},document.title,"".concat("br"!==window.COUNTRY&&"/".concat(window.COUNTRY)||"").concat(t("/opiniones/")).concat(w,"/").concat(oe,"/").concat(a)),e.preventDefault()}})})||!I&&Object(y.jsx)("div",{className:"flex mx-auto gap-2 w-max",children:Object(s.a)(Array(10)).map((function(e,a){return Object(y.jsx)("div",{className:"animate-pulse bg-gray-600 h-8 w-8 rounded-md"},a)}))})]})]})]}),B&&Object(y.jsxs)("div",{className:"grid grid-flow-row gap-5 lg:grid-flow-col lg:gap-16 mx-5 pb-10",children:[-1===G.indexOf(B.id)&&Object(y.jsxs)("div",{className:"w-full grid grid-cols-10 my-5 bg-white cursor-pointer relative h-full",onClick:function(){ee(!0)},children:[Object(y.jsxs)("div",{className:"col-span-5 grid grid-flow-row text-black mx-5",children:[Object(y.jsx)("span",{className:"flex pt-5",children:Object(y.jsxs)("p",{className:"font-bold text-lg",children:[t("Opina sobre")," ",B.name]})}),Object(y.jsx)("p",{children:t("Suma tu experiencia y ayuda a otros a tomar buenas decisiones.")})]}),Object(y.jsx)("img",{loading:"lazy",src:"/static/img/leave-a-review-banner.webp",className:"col-span-2 absolute -right-3 -bottom-3.5 h-36"})]}),-1===B.id.indexOf("p2p")&&Object(y.jsxs)(x.b,{className:"w-full grid grid-cols-10 my-5 bg-white cursor-pointer relative h-full",to:"/".concat(t("comisiones-y-limites"),"/").concat(B.id),children:[Object(y.jsxs)("div",{className:"col-span-5 grid grid-flow-row text-black mx-5",children:[Object(y.jsx)("span",{className:"flex pt-5",children:Object(y.jsxs)("p",{className:"font-bold text-lg",children:[t("Mira la ficha t\xe9cnica de")," ",B.name]})}),Object(y.jsx)("p",{children:t("Consulta cu\xe1nto cobra de comisi\xf3n, qu\xe9 l\xedmites tiene y mucho m\xe1s.")})]}),Object(y.jsx)("img",{loading:"lazy",src:"/static/img/provider-technical-data-banner.webp",className:"col-span-2 absolute -right-5 bottom-0 h-28"})]})]}),$&&Object(y.jsx)(o.Suspense,{fallback:Object(y.jsx)("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:Object(y.jsx)("div",{className:"min-h-screen px-4",children:Object(y.jsx)("div",{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"})})}),children:Object(y.jsx)(R,{reviewModalIsOpen:$,executeRecaptcha:l,setReviewModalIsOpen:ee,selectedProvider:K,setSelectedProvider:H,providerList:[B],alreadyRecommended:G,setAlreadyRecommended:q,modalContext:"provider"})})]})}!function(e){e.NEWEST="mas-recientes",e.BEST_REVIEWED="mayor-puntuacion",e.MOST_VOTED="mas-votadas",e.BR_NEWEST="mais-recentes",e.BR_BEST_REVIEWED="pontuacao-mais-alta",e.BR_MOST_VOTED="mais-votadas"}(c||(c={}))},217:function(e,a,t){"use strict";var c=t(12),r=t(0),s=t.n(r),n=t(154),i=t(160),o={ar:{sesocio:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido, carg\xe1 saldo y particip\xe1 de un sorteo mensual.",url:"https://www.sesocio.com/referrals/Y3J5cHRvc2F1cmlvMDBAZ21haWwuY29t?s=c"},buenbit:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro c\xf3digo IQNKVKP, invert\xed desde 50 USD por 30 d\xedas y gan\xe1 15 DAI.",url:"https://www.buenbit.com/"},letsbit:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido, verific\xe1 tu cuenta a nivel 3 y particip\xe1 de un sorteo mensual.",url:"https://letsbit.io/register/IDF37AE929E9"},cryptomkt:{title:"Gan\xe1 con nuestro referido",description:"Al registrate con nuestro referido y comprar criptomonedas en CryptoMarket por ARS $ 20.000 o m\xe1s gan\xe1s 10 USDT.",url:"https://www.cryptomkt.com/account/register?ref=215813"},satoshitango:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido y obten\xe9 10 d\xedas para operar criptomonedas sin comisi\xf3n.",url:"https://www.satoshitango.com/gift/40OTRX9K"},ftx:{title:"Gan\xe1 con nuestro referido",description:"Registrate con nuestro referido para tener un 5% de descuento en costos de operaci\xf3n.",url:"https://ftx.com/referrals#a=cryptosaurio"}}},l={ar:{tools:{title:"20% OFF para comprar tu Ledger",description:"Us\xe1 nuestro c\xf3digo FRIEND-XDNVBSR al momento de hacer la compra y disfrut\xe1 el descuento.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}},br:{tools:{title:"20% DE DESCONTO para comprar seu Ledger",description:"Use nosso c\xf3digo FRIEND-XDNVBSR na hora da compra e aproveite o desconto.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}},any:{tools:{title:"20% OFF para comprar tu Ledger",description:"Usa nuestro c\xf3digo FRIEND-XDNVBSR al momento de hacer la compra y disfruta el descuento.",url:"https://go.referralcandy.com/recommend/XDNVBSR"}}};var d=t(2);function b(e){var a,t=e.page,s=e.providerId,b={page:"provider-reviews",country:window.COUNTRY},m=Object(i.useTracking)(b).trackEvent,u={event:"user_action",event_category:"".concat(t,"_").concat(s?"".concat(s,"_"):"","referalNotification"),event_label:"click"},j={event:"user_action",event_category:"".concat(t,"_").concat(s?"".concat(s,"_"):"","referalNotification"),event_label:"close"},g=Object(r.useState)(!1),p=Object(c.a)(g,2),O=p[0],x=p[1];return(a=s?function(e){return window.COUNTRY in o&&Object.keys(o[window.COUNTRY]).length>0?o[window.COUNTRY][e]:null}(s):function(e){return window.COUNTRY in l&&Object.keys(l[window.COUNTRY]).length>0?l[window.COUNTRY][e]:"any"in l&&Object.keys(l.any).length>0?l.any[e]:null}(t))&&!O&&a&&Object(d.jsxs)("div",{className:"bg-white rounded-lg border-gray-300 border p-3 shadow-lg absolute top-5 right-5 cursor-pointer z-30",children:[Object(d.jsxs)("div",{className:"grid grid-flow-col items-center",onClick:function(){"production"===window.ENV?m(u):console.log(b,u),window.open(a.url)},children:[Object(d.jsx)("p",{className:"text-4xl",children:"\ud83c\udf81"}),Object(d.jsxs)("div",{className:"ml-2 mr-6 text-xs w-44",children:[Object(d.jsx)("p",{className:"font-semibold text-black",children:a.title}),Object(d.jsx)("p",{className:"block text-gray-500",children:a.description})]})]}),Object(d.jsx)(n.E,{className:"w-5 h-5 absolute top-2 right-2 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(e){e.preventDefault(),"production"===window.ENV?m(j):console.log(b,j),x(!0)}})]})||null}var m=function(e,a){return e.providerId===a.providerId};a.a=s.a.memo(b,m)}}]);