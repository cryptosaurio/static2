(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[25],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var c,r=n(33),a=n(152),o=n(147),i=n(12),s=n(0),l=n(156),u=n(138),d=n(1),j=n(34),O=n(59),b=n(231),m=n(200),w=(n(197),n(294),n(186)),f=(n(181),n(295),n(2));function p(){var e=Object(u.a)().t,t=Object(d.h)().providerId,n=Object(j.d)(),p=Object(i.a)(n,1)[0],h=Object(o.a)(p).reduce((function(e,t){var n=Object(i.a)(t,2),c=n[0],r=n[1];return e[c]=r,e}),{}).darkMode,x=null,g=Object(s.useState)(null),N=Object(i.a)(g,2),v=N[0],y=N[1],R=Object(s.useState)(null),E=Object(i.a)(R,2),_=E[0],T=E[1],S=Object(s.useState)({}),U=Object(i.a)(S,2),Y=U[0],C=U[1],A=Object(s.useState)(-1!==Object.values(c).indexOf(x)&&c["".concat("br"===window.COUNTRY?"BR_":"").concat(Object.keys(c)[Object.values(c).indexOf(x)])]||-1!==Object.values(c).indexOf(x)&&c[Object.keys(c)[Object.values(c).indexOf(x)]]||("br"!==window.COUNTRY?c.NEWEST:c.BR_NEWEST)),B=Object(i.a)(A,2),P=B[0],M=(B[1],Object(s.useState)(1)),k=Object(i.a)(M,2),I=k[0],L=(k[1],Object(s.useState)(!1)),D=Object(i.a)(L,2),V=D[0],W=D[1],z=Object(s.useState)(!1),J=Object(i.a)(z,2),X=J[0],q=J[1];function F(t){return t<=1.5?{amountOfStars:1,text:e("MUY MALO")}:t<=2.5?{amountOfStars:2,text:e("MALO")}:t<=3.5?{amountOfStars:3,text:e("BUENO")}:t<=4.5?{amountOfStars:4,text:e("MUY BUENO")}:{amountOfStars:5,text:e("EXCELENTE")}}return Object(s.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/provider/").concat(t):"".concat(window.BARNEY_BR_API_URL,"/provider/").concat(t)).then((function(e){return e.json()})).then((function(e){e.provider_id=e.id,y(e)})).catch((function(){y(null)}))}),[]),Object(s.useEffect)((function(){var e=t.indexOf("p2p")>-1?"?merge=true":"";fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/").concat(t,"/general-info").concat(e):"".concat(window.BARNEY_BR_API_URL,"/reviews/").concat(t,"/general-info").concat(e)).then((function(e){return e.json()})).then((function(e){e.count>0&&T(e)})).catch((function(){T(null)}))}),[]),Object(s.useEffect)((function(){var e=t.indexOf("p2p")>-1?"?merge=true":"";fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/").concat(t,"/").concat(P,"/").concat(I).concat(e):"".concat(window.BARNEY_BR_API_URL,"/reviews/").concat(t,"/").concat(P,"/").concat(I).concat(e)).then((function(e){return e.json()})).then((function(e){C((function(t){return Object(a.a)(Object(a.a)({},t),Object(r.a)({},I,e))})),setTimeout((function(){return W(!0)}),500),setTimeout((function(){return q(!0)}),1200)})).catch((function(){}))}),[I,P]),_&&Object(f.jsx)("div",{className:["h-screen overflow-hidden grid grid-flow-row items-center justify-center",h?"text-white":""].join(" "),children:Object(f.jsxs)("div",{className:"mx-10 grid sm:grid-cols-4 gap-1 sm:gap-4",children:[Object(f.jsxs)("div",{className:"grid grid-flow-row justify-items-center col-span-1",children:[Object(f.jsx)("p",{className:"text-xs",children:e("Calificaci\xf3n")}),Object(f.jsx)("p",{className:"text-3xl font-semibold",children:F(_.rating).text}),Object(f.jsxs)("div",{className:"flex",children:[Object(o.a)(Array(F(_.rating).amountOfStars)).map((function(e,t){return Object(f.jsx)(l.z,{className:"w-7 h-7 text-blue-400 ml-2","aria-hidden":"true"},t)})),Object(o.a)(Array(5-F(_.rating).amountOfStars)).map((function(e,t){return Object(f.jsx)(l.z,{className:"w-7 h-7 text-gray-400 ml-2","aria-hidden":"true"},t)}))]}),Object(f.jsx)("h2",{children:e("Basado en {{amount}} opiniones",{amount:_.count})}),Object(f.jsxs)("a",{className:"flex items-center gap-1",target:"_blank",rel:"noreferrer noopener dofollow",href:"br"!==window.COUNTRY?"https://www.cryptosaurio.com/".concat(window.COUNTRY,"/"):"https://www.cryptossauro.com",children:[Object(f.jsx)("img",{className:"block w-8",src:b.a,alt:e("Cryptosaurio")}),Object(f.jsxs)("h1",{children:[e("Cryptosaurio"),".com"]})]})]}),Object(f.jsxs)("div",{className:["pt-5 row-span-1 sm:col-span-3 w-screen sm:w-auto sm:ml-10 md:ml-0 px-5 md:px-0",h?"text-gray-200":"text-gray-700"].join(" "),children:[Y[I]&&Object(f.jsx)(m.a,{className:V?"w-full align-middle sm:pl-1":"w-full invisible",breakpoints:{0:{slidesPerView:1},769:{slidesPerView:Math.min(Y[I].length,3)},1600:{slidesPerView:Math.min(Y[I].length,4)}},navigation:!0,modules:[w.c],loop:!0,children:Y[I].sort((function(){return.5-Math.random()})).map((function(e,t){return Object(f.jsxs)(m.b,{className:"px-10",children:[Object(f.jsxs)("div",{className:["grid grid-flow-row gap-1 justify-items-center",X?"":"hidden"].join(" "),children:[Object(f.jsxs)("div",{className:"flex",children:[Object(o.a)(Array(Math.ceil(e.average_rating))).map((function(e,t){return Object(f.jsx)(l.z,{className:"w-7 h-7 text-blue-400","aria-hidden":"true"},t)})),Object(o.a)(Array(5-Math.ceil(e.average_rating))).map((function(e,t){return Object(f.jsx)(l.z,{className:"w-7 h-7 text-gray-400","aria-hidden":"true"},t)}))]}),Object(f.jsx)("p",{className:"text-xs line-clamp-3 text-center",children:e.review_comment})]}),!X&&Object(f.jsxs)("div",{className:"my-0.5 lg:my-0.5 md:my-2.5 grid grid-flow-row justify-items-center",children:[Object(f.jsx)("div",{className:"flex",children:Object(o.a)(Array(Math.ceil(1+4*Math.random()))).map((function(e,t){return Object(f.jsx)(l.z,{className:"w-7 h-7 text-gray-400 animate-pulse","aria-hidden":"true"},t)}))}),Object(f.jsx)("div",{className:"w-44 h-3 mb-1 bg-gray-600 animate-pulse"}),Object(f.jsx)("div",{className:"w-44 h-3 mb-1 bg-gray-600 animate-pulse"}),Object(f.jsx)("div",{className:"w-24 h-3 bg-gray-600 animate-pulse"})]})]},t)}))}),v&&Object(f.jsxs)("div",{className:"grid grid-flow-col justify-items-center sm:justify-end gap-3 text-blue-400 underline cursor-pointer md:pt-8",children:[Object(f.jsx)("a",{target:"_blank",rel:"noreferrer noopener dofollow",href:"".concat("br"!==window.COUNTRY?"https://www.cryptosaurio.com/".concat(window.COUNTRY):"https://www.cryptossauro.com").concat(e("/opiniones/")).concat(v.id,"?ref=providerReviewsExternalComponent"),children:e("Ver m\xe1s opiniones")}),Object(f.jsx)("a",{target:"_blank",rel:"noreferrer noopener dofollow",href:"".concat("br"!==window.COUNTRY?"https://www.cryptosaurio.com/".concat(window.COUNTRY):"https://www.cryptossauro.com").concat(e("/opiniones/")).concat(v.id,"?ref=providerReviewsExternalComponent&reviewModalOpen=true"),children:e("Opinar sobre {{providerName}}",{providerName:v.name})})]}),!V&&Object(f.jsx)(O.a,{})]})]})})||Object(f.jsx)(O.a,{})}!function(e){e.NEWEST="mas-recientes",e.BEST_REVIEWED="mayor-puntuacion",e.MOST_VOTED="mas-votadas",e.BR_NEWEST="mais-recentes",e.BR_BEST_REVIEWED="pontuacao-mais-alta",e.BR_MOST_VOTED="mais-votadas"}(c||(c={}))},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(33);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},181:function(e,t,n){},231:function(e,t,n){"use strict";t.a=n.p+"static/media/logo-web.861d9586.webp"},294:function(e,t,n){},295:function(e,t,n){}}]);