(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[25],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var c,r=n(33),a=n(143),o=n(147),i=n(12),s=n(179),u=n(0),l=n.n(u),d=n(150),b=n(135),j=n(1),O=n(34),f=n(58),m=n(172),w=n.n(m),p=(n(177),n(165),n(214)),h=n(2),x=["onClick"],g=["onClick"],v=function(e){var t=e.onClick,n=Object(s.a)(e,x),c=(n.onMove,n.carouselState);c.currentSlide,c.deviceType;return Object(h.jsx)("button",{className:"absolute opacity-75 left-0 bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded-full",onClick:function(){return t()},children:Object(h.jsx)(d.c,{className:"w-4 h-full e","aria-hidden":"true"})})},N=function(e){var t=e.onClick,n=Object(s.a)(e,g),c=(n.onMove,n.carouselState);c.currentSlide,c.deviceType;return Object(h.jsx)("button",{className:"absolute opacity-75 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded-full",onClick:function(){return t()},children:Object(h.jsx)(d.d,{className:"w-4 h-full e","aria-hidden":"true"})})};function y(){var e=Object(b.a)().t,t=Object(j.h)().providerId,n=Object(O.d)(),s=Object(i.a)(n,1)[0],m=Object(o.a)(s).reduce((function(e,t){var n=Object(i.a)(t,2),c=n[0],r=n[1];return e[c]=r,e}),{}).darkMode,x=null,g=Object(u.useState)(null),y=Object(i.a)(g,2),E=y[0],R=y[1],_=Object(u.useState)(null),S=Object(i.a)(_,2),T=S[0],C=S[1],U=Object(u.useState)({}),k=Object(i.a)(U,2),Y=k[0],A=k[1],B=Object(u.useState)(-1!==Object.values(c).indexOf(x)&&c["".concat("br"===window.COUNTRY?"BR_":"").concat(Object.keys(c)[Object.values(c).indexOf(x)])]||-1!==Object.values(c).indexOf(x)&&c[Object.keys(c)[Object.values(c).indexOf(x)]]||("br"!==window.COUNTRY?c.NEWEST:c.BR_NEWEST)),M=Object(i.a)(B,2),P=M[0],D=(M[1],Object(u.useState)(1)),I=Object(i.a)(D,2),L=I[0],W=(I[1],Object(u.useState)(!1)),V=Object(i.a)(W,2),J=V[0],F=V[1],X=Object(u.useState)(!1),q=Object(i.a)(X,2),z=q[0],G=q[1];function H(t){return t<=1.5?{amountOfStars:1,text:e("MUY MALO")}:t<=2.5?{amountOfStars:2,text:e("MALO")}:t<=3.5?{amountOfStars:3,text:e("BUENO")}:t<=4.5?{amountOfStars:4,text:e("MUY BUENO")}:{amountOfStars:5,text:e("EXCELENTE")}}return Object(u.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/provider/").concat(t):"".concat(window.BARNEY_BR_API_URL,"/provider/").concat(t)).then((function(e){return e.json()})).then((function(e){e.provider_id=e.id,R(e)})).catch((function(){R(null)}))}),[]),Object(u.useEffect)((function(){var e=t.indexOf("p2p")>-1?"?merge=true":"";fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/").concat(t,"/general-info").concat(e):"".concat(window.BARNEY_BR_API_URL,"/reviews/").concat(t,"/general-info").concat(e)).then((function(e){return e.json()})).then((function(e){e.count>0&&C(e)})).catch((function(){C(null)}))}),[]),Object(u.useEffect)((function(){var e=t.indexOf("p2p")>-1?"?merge=true":"";fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/").concat(t,"/").concat(P,"/").concat(L).concat(e):"".concat(window.BARNEY_BR_API_URL,"/reviews/").concat(t,"/").concat(P,"/").concat(L).concat(e)).then((function(e){return e.json()})).then((function(e){A((function(t){return Object(a.a)(Object(a.a)({},t),Object(r.a)({},L,e))})),setTimeout((function(){return F(!0)}),500),setTimeout((function(){return G(!0)}),1200)})).catch((function(){}))}),[L,P]),T&&Object(h.jsx)("div",{className:["h-screen overflow-hidden grid grid-flow-row items-center justify-center",m?"text-white":""].join(" "),children:Object(h.jsxs)("div",{className:"mx-10 grid sm:grid-cols-4 gap-1 sm:gap-4",children:[Object(h.jsxs)("div",{className:"grid grid-flow-row justify-items-center col-span-1",children:[Object(h.jsx)("p",{className:"text-xs",children:e("Calificaci\xf3n")}),Object(h.jsx)("p",{className:"text-3xl font-semibold",children:H(T.rating).text}),Object(h.jsxs)("div",{className:"flex",children:[Object(o.a)(Array(H(T.rating).amountOfStars)).map((function(e,t){return Object(h.jsx)(d.E,{className:"w-7 h-7 text-blue-400 ml-2","aria-hidden":"true"},t)})),Object(o.a)(Array(5-H(T.rating).amountOfStars)).map((function(e,t){return Object(h.jsx)(d.E,{className:"w-7 h-7 text-gray-400 ml-2","aria-hidden":"true"},t)}))]}),Object(h.jsx)("h2",{children:e("Basado en {{amount}} opiniones",{amount:T.count})}),Object(h.jsxs)("a",{className:"flex items-center gap-1",target:"_blank",rel:"noreferrer noopener dofollow",href:"br"!==window.COUNTRY?"https://www.cryptosaurio.com/".concat(window.COUNTRY,"/"):"https://www.cryptossauro.com",children:[Object(h.jsx)("img",{className:"block w-8",src:p.a,alt:e("Cryptosaurio")}),Object(h.jsxs)("h1",{children:[e("Cryptosaurio"),".com"]})]})]}),Object(h.jsxs)("div",{className:["pt-5 row-span-1 sm:col-span-3 w-screen sm:w-auto sm:ml-10 md:ml-0 px-5 md:px-0",m?"text-gray-200":"text-gray-700"].join(" "),children:[Y[L]&&Object(h.jsx)(w.a,{className:J?"sm:pl-1":"invisible",responsive:{bigDesktop:{breakpoint:{max:9999,min:1600},items:Math.min(Y[L].length,4)},desktop:{breakpoint:{max:1599,min:769},items:Math.min(Y[L].length,3)},mobile:{breakpoint:{max:768,min:0},items:1}},showDots:!1,infinite:!0,swipeable:!0,draggable:!0,customLeftArrow:Object(h.jsx)(v,{}),customRightArrow:Object(h.jsx)(N,{}),itemClass:"px-6 text-center sm:text-left self-center md:self-baseline",children:Y[L].sort((function(){return.5-Math.random()})).map((function(e,t){return Object(h.jsxs)(l.a.Fragment,{children:[Object(h.jsxs)("div",{className:["grid grid-flow-row gap-1 justify-items-center",z?"":"hidden"].join(" "),children:[Object(h.jsxs)("div",{className:"flex",children:[Object(o.a)(Array(Math.ceil(e.average_rating))).map((function(e,t){return Object(h.jsx)(d.E,{className:"w-7 h-7 text-blue-400","aria-hidden":"true"},t)})),Object(o.a)(Array(5-Math.ceil(e.average_rating))).map((function(e,t){return Object(h.jsx)(d.E,{className:"w-7 h-7 text-gray-400","aria-hidden":"true"},t)}))]}),Object(h.jsx)("p",{className:"text-xs line-clamp-3",children:e.review_comment})]}),!z&&Object(h.jsxs)("div",{className:"my-0.5 lg:my-0.5 md:my-2.5 grid grid-flow-row justify-items-center",children:[Object(h.jsx)("div",{className:"flex",children:Object(o.a)(Array(Math.ceil(1+4*Math.random()))).map((function(e,t){return Object(h.jsx)(d.E,{className:"w-7 h-7 text-gray-400 animate-pulse","aria-hidden":"true"},t)}))}),Object(h.jsx)("div",{className:"w-44 h-3 mb-1 bg-gray-600 animate-pulse"}),Object(h.jsx)("div",{className:"w-44 h-3 mb-1 bg-gray-600 animate-pulse"}),Object(h.jsx)("div",{className:"w-24 h-3 bg-gray-600 animate-pulse"})]})]},t)}))}),E&&Object(h.jsxs)("div",{className:"grid grid-flow-col justify-items-center sm:justify-end gap-3 text-blue-400 underline cursor-pointer md:pt-8",children:[Object(h.jsx)("a",{target:"_blank",rel:"noreferrer noopener dofollow",href:"".concat("br"!==window.COUNTRY?"https://www.cryptosaurio.com/".concat(window.COUNTRY):"https://www.cryptossauro.com").concat(e("/opiniones/")).concat(E.id,"?ref=providerReviewsExternalComponent"),children:e("Ver m\xe1s opiniones")}),Object(h.jsx)("a",{target:"_blank",rel:"noreferrer noopener dofollow",href:"".concat("br"!==window.COUNTRY?"https://www.cryptosaurio.com/".concat(window.COUNTRY):"https://www.cryptossauro.com").concat(e("/opiniones/")).concat(E.id,"?ref=providerReviewsExternalComponent&reviewModalOpen=true"),children:e("Opinar sobre {{providerName}}",{providerName:E.name})})]}),!J&&Object(h.jsx)(f.a,{})]})]})})||Object(h.jsx)(f.a,{})}!function(e){e.NEWEST="mas-recientes",e.BEST_REVIEWED="mayor-puntuacion",e.MOST_VOTED="mas-votadas",e.BR_NEWEST="mais-recentes",e.BR_BEST_REVIEWED="pontuacao-mais-alta",e.BR_MOST_VOTED="mais-votadas"}(c||(c={}))},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(33);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},165:function(e,t,n){},171:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return c}))},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(171);function r(e,t){if(null==e)return{};var n,r,a=Object(c.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},214:function(e,t,n){"use strict";t.a=n.p+"static/media/logo-web.861d9586.webp"}}]);