(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[18],{140:function(e,t,n){},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(152);function r(e,t){if(null==e)return{};var n,r,a=Object(c.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},152:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return c}))},298:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var c,r=n(49),a=n(31),o=n(20),i=n(4),s=n(151),l=n(0),u=n.n(l),d=n(6),b=n(131),j=n(2),m=n(67),O=n(145),f=n.n(O),w=(n(146),n(140),n(57)),p=n(1),h=["onClick"],x=["onClick"],g=function(e){var t=e.onClick,n=Object(s.a)(e,h),c=(n.onMove,n.carouselState);c.currentSlide,c.deviceType;return Object(p.jsx)("button",{className:"absolute opacity-75 left-0 bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded-full",onClick:function(){return t()},children:Object(p.jsx)(d.c,{className:"w-4 h-full e","aria-hidden":"true"})})},N=function(e){var t=e.onClick,n=Object(s.a)(e,x),c=(n.onMove,n.carouselState);c.currentSlide,c.deviceType;return Object(p.jsx)("button",{className:"absolute opacity-75 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded-full",onClick:function(){return t()},children:Object(p.jsx)(d.d,{className:"w-4 h-full e","aria-hidden":"true"})})};function v(){var e,t=Object(b.a)().t,n=Object(j.h)().providerId,s=null,O=Object(l.useState)(null),h=Object(i.a)(O,2),x=h[0],v=h[1],y=Object(l.useState)(null),R=Object(i.a)(y,2),E=R[0],_=R[1],T=Object(l.useState)({}),C=Object(i.a)(T,2),U=C[0],Y=C[1],A=Object(l.useState)(-1!==Object.values(c).indexOf(s)&&c["".concat("br"===window.COUNTRY?"BR_":"").concat(Object.keys(c)[Object.values(c).indexOf(s)])]||-1!==Object.values(c).indexOf(s)&&c[Object.keys(c)[Object.values(c).indexOf(s)]]||("br"!==window.COUNTRY?c.NEWEST:c.BR_NEWEST)),S=Object(i.a)(A,2),k=S[0],B=(S[1],Object(l.useState)(1)),M=Object(i.a)(B,2),D=M[0],I=(M[1],Object(l.useState)(!1)),L=Object(i.a)(I,2),P=L[0],W=L[1],V=Object(l.useState)(!1),J=Object(i.a)(V,2),F=J[0],X=J[1];return Object(l.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/provider/").concat(n):"".concat(window.BARNEY_BR_API_URL,"/provider/").concat(n)).then((function(e){return e.json()})).then((function(e){e.provider_id=e.id,v(e)})).catch((function(){v(null)}))}),[]),Object(l.useEffect)((function(){var e=n.indexOf("p2p")>-1?"?merge=true":"";fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/").concat(n,"/general-info").concat(e):"".concat(window.BARNEY_BR_API_URL,"/reviews/").concat(n,"/general-info").concat(e)).then((function(e){return e.json()})).then((function(e){_(e)})).catch((function(){_(null)}))}),[]),Object(l.useEffect)((function(){var e=n.indexOf("p2p")>-1?"?merge=true":"";fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/").concat(n,"/").concat(k,"/").concat(D).concat(e):"".concat(window.BARNEY_BR_API_URL,"/reviews/").concat(n,"/").concat(k,"/").concat(D).concat(e)).then((function(e){return e.json()})).then((function(e){Y((function(t){return Object(o.a)(Object(o.a)({},t),Object(a.a)({},D,e))})),setTimeout((function(){return W(!0)}),500),setTimeout((function(){return X(!0)}),1200)})).catch((function(){}))}),[D,k]),E&&Object(p.jsx)("div",{className:"h-screen overflow-hidden grid grid-flow-row items-center justify-center",children:Object(p.jsxs)("div",{className:"mx-10 grid sm:grid-cols-4 gap-1 sm:gap-4",children:[Object(p.jsxs)("div",{className:"sm:mb-10 grid grid-flow-row justify-items-center col-span-1",children:[Object(p.jsx)("p",{className:"text-3xl font-semibold",children:(e=E.rating,t(e<=1.5?"MUY MALO":e<=2.5?"MALO":e<=3.5?"BUENO":e<=4.5?"MUY BUENO":"EXCELENTE"))}),Object(p.jsxs)("div",{className:"flex",children:[Object(r.a)(Array(Math.floor(E.rating))).map((function(e,t){return Object(p.jsx)(d.D,{className:"w-7 h-7 text-blue-400 ml-2","aria-hidden":"true"},t)})),Object(r.a)(Array(5-Math.floor(E.rating))).map((function(e,t){return Object(p.jsx)(d.D,{className:"w-7 h-7 text-gray-400 ml-2","aria-hidden":"true"},t)}))]}),Object(p.jsx)("h2",{children:t("Basado en {{amount}} opiniones",{amount:E.count})}),Object(p.jsxs)("a",{className:"flex items-center gap-1",target:"_blank",rel:"noreferrer noopener dofollow",href:"br"!==window.COUNTRY?"https://www.cryptosaurio.com/".concat(window.COUNTRY,"/"):"https://www.cryptossauro.com",children:[Object(p.jsx)("img",{className:"block w-8",src:w.a,alt:t("Cryptosaurio")}),Object(p.jsxs)("h1",{children:[t("Cryptosaurio"),".com"]})]})]}),Object(p.jsxs)("div",{className:"pt-5 row-span-1 sm:col-span-3 w-screen sm:w-auto sm:ml-10 md:ml-0 px-5 md:px-0",children:[U[D]&&Object(p.jsx)(f.a,{className:P?"sm:pl-1":"invisible",responsive:{bigDesktop:{breakpoint:{max:9999,min:1600},items:4},desktop:{breakpoint:{max:1599,min:769},items:3},mobile:{breakpoint:{max:768,min:0},items:1}},showDots:!1,infinite:!0,swipeable:!0,draggable:!0,customLeftArrow:Object(p.jsx)(g,{}),customRightArrow:Object(p.jsx)(N,{}),itemClass:"px-6 text-center sm:text-left self-center md:self-baseline",children:U[D].sort((function(){return.5-Math.random()})).map((function(e,t){return Object(p.jsxs)(u.a.Fragment,{children:[Object(p.jsxs)("div",{className:["grid grid-flow-row gap-1 justify-items-center",F?"":"hidden"].join(" "),children:[Object(p.jsxs)("div",{className:"flex",children:[Object(r.a)(Array(Math.ceil(e.average_rating))).map((function(e,t){return Object(p.jsx)(d.D,{className:"w-7 h-7 text-blue-400","aria-hidden":"true"},t)})),Object(r.a)(Array(5-Math.ceil(e.average_rating))).map((function(e,t){return Object(p.jsx)(d.D,{className:"w-7 h-7 text-gray-400","aria-hidden":"true"},t)}))]}),Object(p.jsx)("p",{className:"text-xs line-clamp-3",children:e.review_comment})]}),!F&&Object(p.jsxs)("div",{className:"my-0.5 lg:my-0.5 md:my-2.5 grid grid-flow-row justify-items-center",children:[Object(p.jsx)("div",{className:"flex",children:Object(r.a)(Array(Math.ceil(1+4*Math.random()))).map((function(e,t){return Object(p.jsx)(d.D,{className:"w-7 h-7 text-gray-400 animate-pulse","aria-hidden":"true"},t)}))}),Object(p.jsx)("div",{className:"w-44 h-3 mb-1 bg-gray-600 animate-pulse"}),Object(p.jsx)("div",{className:"w-44 h-3 mb-1 bg-gray-600 animate-pulse"}),Object(p.jsx)("div",{className:"w-24 h-3 bg-gray-600 animate-pulse"})]})]},t)}))}),x&&Object(p.jsxs)("div",{className:"grid grid-flow-col justify-items-center sm:justify-end gap-3 text-blue-400 underline cursor-pointer md:pt-8",children:[Object(p.jsx)("a",{target:"_blank",rel:"noreferrer noopener dofollow",href:"".concat("br"!==window.COUNTRY?"https://www.cryptosaurio.com/".concat(window.COUNTRY):"https://www.cryptossauro.com").concat(t("/opiniones/")).concat(x.id,"?ref=externalComponent"),children:t("Ver m\xe1s opiniones")}),Object(p.jsx)("a",{target:"_blank",rel:"noreferrer noopener dofollow",href:"".concat("br"!==window.COUNTRY?"https://www.cryptosaurio.com/".concat(window.COUNTRY):"https://www.cryptossauro.com").concat(t("/opiniones/")).concat(x.id,"?ref=externalComponent&reviewModalOpen=true"),children:t("Opinar sobre {{providerName}}",{providerName:x.name})})]}),!P&&Object(p.jsx)(m.a,{})]})]})})||Object(p.jsx)(m.a,{})}!function(e){e.NEWEST="mas-recientes",e.BEST_REVIEWED="mayor-puntuacion",e.MOST_VOTED="mas-votadas",e.BR_NEWEST="mais-recentes",e.BR_BEST_REVIEWED="pontuacao-mais-alta",e.BR_MOST_VOTED="mais-votadas"}(c||(c={}))}}]);