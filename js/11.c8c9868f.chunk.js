(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[11],{218:function(e,a){},543:function(e,a){},545:function(e,a){},556:function(e,a){},558:function(e,a){},572:function(e,a){},574:function(e,a){},575:function(e,a){},662:function(e,a){},664:function(e,a){},736:function(e,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return u}));var t=s(4),c=s(0),l=s(6),r=s(129),d=s(32),n=s(2),i=s(274),o=s(693),g=s(427),j=s(674),b=s(389),m=s(1),x=s(671);function u(){var e={page:"investments-dashboard",country:window.COUNTRY},a=Object(d.useTracking)(e).trackEvent,s=Object(r.a)().t,b=Object(n.h)().address,u=Object(c.useState)(b),p=Object(t.a)(u,2),h=p[0],O=p[1],f=Object(c.useState)(null),N=Object(t.a)(f,2),y=N[0],w=N[1],v=Object(c.useState)(!1),Y=Object(t.a)(v,2),A=Y[0],U=Y[1];return Object(c.useEffect)((function(){var s={event:"pageview"};"production"===window.ENV?a(s):console.log(e,s)}),[]),Object(c.useEffect)((function(){g.AccAddress.validate(h)&&(U(!0),"br"!==window.COUNTRY?history.replaceState({},document.title,"/".concat(window.COUNTRY,"/mis-inversiones/").concat(h)):history.replaceState({},document.title,"/mis-inversiones/".concat(h)),fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/get-anchor-protocol-data-v2/").concat(h):"".concat(window.BARNEY_BR_API_URL,"/get-anchor-protocol-data-v2/").concat(h)).then((function(e){return e.json()})).then((function(e){w(e)})).catch((function(){return w(null)})).finally((function(){return U(!1)})))}),[h]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"p-5",children:Object(m.jsx)("h1",{className:"text-2xl font-bold",children:"Anchor Protocol Monitor"})}),!y&&!A&&Object(m.jsxs)("div",{className:"flex justify-center",children:[Object(m.jsxs)("div",{className:"mx-5 mb-5 p-5 bg-gray-700 bg-opacity-70 rounded-lg",children:[Object(m.jsx)("h2",{className:"text-2xl font-bold",children:s("Monitorea tus inversiones en Anchor Protocol y mira c\xf3mo crece tu rendimiento")}),Object(m.jsxs)("div",{className:"relative mt-5",children:[Object(m.jsx)("span",{className:"h-10 text-gray-600 focus-within:text-gray-400 absolute inset-y-0 left-0 flex items-center pl-2",children:Object(m.jsx)("button",{className:"p-1 focus:outline-none focus:shadow-outline",children:Object(m.jsx)(l.w,{className:"w-5 h-5"})})}),Object(m.jsx)("div",{className:"grid grid-flow-col",children:Object(m.jsx)("input",{type:"search",name:"q",className:"py-2 h-10 text-sm text-white bg-gray-800 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:s("Ingresa tu address para empezar..."),autoComplete:"off",value:h,onChange:function(e){return O(e.target.value.toLowerCase())}})})]})]}),Object(m.jsx)("img",{src:"/static/img/blue-dyno.webp",className:"w-44 hidden md:block"})]}),A&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"grid sm:grid-flow-col px-5 pb-5 sm:justify-between text-center gap-1 font-bold",children:[Object(m.jsx)("div",{className:"bg-gray-700 text-2xl p-5 rounded-lg w-full sm:w-52",children:Object(m.jsx)("div",{className:"animate-pulse bg-gray-600 rounded-lg h-8"})}),Object(m.jsxs)("div",{className:"bg-gray-700 text-2xl p-5 rounded-lg w-full sm:w-64 grid grid-flow-col content-center",children:[s("APY actual"),": ",Object(m.jsx)("div",{className:"animate-pulse bg-gray-600 rounded-lg h-8 w-20 ml-2"})]})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row sm:grid-flow-col gap-2 px-5 text-center pb-5",children:[Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(m.jsx)("p",{className:"text-4xl",children:"\u2696\ufe0f"}),Object(m.jsx)("div",{className:"bg-gray-800 w-80 h-4 animate-pulse m-auto mt-1"}),Object(m.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 px-3"})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(m.jsx)("p",{className:"text-4xl",children:"\ud83e\ude99"}),Object(m.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(m.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 px-3 mb-1"})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(m.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb8"}),Object(m.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(m.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 px-3 mb-1"})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(m.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb0"}),Object(m.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(m.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 px-3 mb-1"})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(m.jsx)("p",{className:"text-4xl",children:"\ud83c\udfe6"}),Object(m.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(m.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 px-3 mb-1"})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(m.jsx)("p",{className:"text-4xl",children:"\ud83e\udd11"}),Object(m.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(m.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 px-3 mb-1"})]})]}),Object(m.jsx)("div",{className:"h-52 animate-pulse",children:Object(m.jsxs)("div",{className:"flex space-x-4 items-baseline m-4",children:[Object(m.jsx)("div",{className:"flex-1 h-10 bg-gray-400 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-48 bg-gray-400 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-48 bg-gray-500 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-48 bg-gray-400 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(m.jsx)("div",{className:"flex-1 h-10 bg-gray-400 rounded"})]})})]}),y&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"grid sm:grid-flow-col px-5 pb-5 sm:justify-between text-center gap-1 font-bold",children:[Object(m.jsx)("div",{className:"bg-gray-700 text-2xl p-5 rounded-lg",children:Object(m.jsxs)("p",{children:[y.totalYield.ustHoldings," UST"]})}),Object(m.jsx)("div",{className:"bg-gray-700 text-2xl p-5 rounded-lg",children:Object(m.jsxs)("p",{children:[s("APY actual"),": ",y.currentRate,"%"]})})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row sm:grid-flow-col gap-2 px-5 text-center pb-5",children:[Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(m.jsx)("p",{className:"text-4xl",children:"\u2696\ufe0f"}),Object(m.jsxs)("h2",{children:[s("Ganancia acumulada desde el "),Object(m.jsx)(i.a,{locale:window.FALLBACK_LANGUAGE,children:Object(m.jsx)(o.a,{value:y.deposits[y.deposits.length-1].time,year:"numeric",month:"long",day:"2-digit"})})]}),Object(m.jsxs)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:[y.totalYield.yield," UST"]})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(m.jsx)("p",{className:"text-4xl",children:"\ud83e\ude99"}),Object(m.jsx)("h2",{children:s("Ganancia estimada por hora")}),Object(m.jsxs)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:[y.estimatedYield.perHour," UST"]})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(m.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb8"}),Object(m.jsx)("h2",{children:s("Ganancia estimada por d\xeda")}),Object(m.jsxs)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:[y.estimatedYield.perDay," UST"]})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(m.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb0"}),Object(m.jsx)("h2",{children:s("Ganancia estimada por semana")}),Object(m.jsxs)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:[y.estimatedYield.perWeek," UST"]})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(m.jsx)("p",{className:"text-4xl",children:"\ud83c\udfe6"}),Object(m.jsx)("h2",{children:s("Ganancia estimada por mes")}),Object(m.jsxs)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:[y.estimatedYield.perMonth," UST"]})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(m.jsx)("p",{className:"text-4xl",children:"\ud83e\udd11"}),Object(m.jsx)("h2",{children:s("Ganancia estimada por a\xf1o")}),Object(m.jsxs)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:[y.estimatedYield.perYear," UST"]})]})]}),Object(m.jsx)("div",{className:"h-56",children:Object(m.jsx)(j.a,{type:"line",options:{responsive:!0,maintainAspectRatio:!1},data:{labels:y.historicalData.slice(0).reverse().map((function(e){return x(e.time).format("DD-MM-YYYY").toString()})),datasets:[{type:"line",label:"Ganancia acumulada",data:y.historicalData.slice(0).reverse().map((function(e){return e.yield})),borderWidth:2,fill:!1,borderColor:"#60A5FA"}]}})})]})]})}b.e.register(b.j,b.d,b.b,b.l,b.i,b.g,b.p)}}]);