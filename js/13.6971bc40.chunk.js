(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[13],{215:function(e,a){},536:function(e,a){},538:function(e,a){},549:function(e,a){},551:function(e,a){},565:function(e,a){},567:function(e,a){},568:function(e,a){},655:function(e,a){},657:function(e,a){},722:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var s=t(4),c=t(0),l=t(6),r=t(129),i=t(32),n=t(2),d=t(420),o=t(665),m=t(387),j=t(386),b=t(385),x=t(55),g=t(1),u=t(664);m.e.register(m.j,m.d,m.b,m.l,m.h,m.i,m.g,m.p);var p=Object(c.lazy)((function(){return t.e(34).then(t.bind(null,683))})),h=Object(j.a)("".concat(window.FALLBACK_LANGUAGE.toLowerCase(),"-").concat(window.COUNTRY.toUpperCase()));function f(){var e={page:"investments-dashboard",country:window.COUNTRY},a=Object(i.useTracking)(e).trackEvent,t=Object(r.a)().t,m=Object(n.g)(),j=Object(n.h)().address,f=Object(c.useState)(""),O=Object(s.a)(f,2),N=O[0],w=O[1],y=Object(c.useState)(null),v=Object(s.a)(y,2),C=v[0],D=v[1],T=Object(c.useState)(!1),S=Object(s.a)(T,2),U=S[0],A=S[1],Y=Object(c.useState)(!1),k=Object(s.a)(Y,2),F=k[0],R=k[1],E=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t={event:"pageview"};"production"===window.ENV?a(t):console.log(e,t)}),[]),Object(c.useEffect)((function(){j?w(j):(D(null),w(""))}),[j]),Object(c.useEffect)((function(){if(N&&d.AccAddress.validate(N)){E.current.click();var t={event:"user_action",event_category:"anchor_protocol_".concat(N.slice(N.length-6,N.length)),event_label:"search"};"production"===window.ENV?a(t):console.log(e,t),A(!0),m("/monitor/anchor-protocol/".concat(N)),fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/get-anchor-protocol-data-v2/").concat(N):"".concat(window.BARNEY_BR_API_URL,"/get-anchor-protocol-data-v2/").concat(N)).then((function(e){return e.json()})).then((function(e){D(e)})).catch((function(){return D(null)})).finally((function(){return A(!1)}))}}),[N]),Object(x.a)((function(){C&&N&&d.AccAddress.validate(N)&&fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/get-anchor-protocol-data-v2/").concat(N):"".concat(window.BARNEY_BR_API_URL,"/get-anchor-protocol-data-v2/").concat(N)).then((function(e){return e.json()})).then((function(e){D(e)})).catch((function(){return D(null)})).finally((function(){return A(!1)}))}),6e4,!1),Object(g.jsxs)(g.Fragment,{children:[!C&&!U&&Object(g.jsx)(p,{}),(C||U)&&Object(g.jsx)("div",{className:"p-5",children:Object(g.jsx)("h1",{className:"text-2xl font-bold",children:"Anchor Protocol Monitor"})}),!C&&!U&&Object(g.jsxs)("div",{className:"flex flex-col justify-center md:w-3/6 mx-auto",children:[Object(g.jsx)("div",{className:"p-5",children:Object(g.jsx)("h1",{className:"text-2xl font-bold",children:"Anchor Protocol Monitor"})}),Object(g.jsxs)("div",{className:"mx-5 mb-5 p-5 bg-gray-700 bg-opacity-70 rounded-lg",children:[Object(g.jsx)("h2",{className:"text-xl font-bold",children:t("Monitorea tus inversiones en Anchor Protocol y anticipa tu ganancia por d\xeda, semana y m\xe1s")}),Object(g.jsxs)("div",{className:"relative mt-5",children:[Object(g.jsx)("span",{className:"h-10 text-gray-600 focus-within:text-gray-400 absolute inset-y-0 left-0 flex items-center pl-2",children:Object(g.jsx)("button",{className:"p-1 focus:outline-none focus:shadow-outline",children:Object(g.jsx)(l.w,{className:"w-5 h-5"})})}),Object(g.jsxs)("div",{className:"grid grid-flow-col justify-between",children:[Object(g.jsx)("iframe",{id:"rememberTerraUserAddress",name:"rememberTerraUserAddress",className:"hidden",src:"about:blank"}),Object(g.jsxs)("div",{className:"flex flex-col",children:[Object(g.jsxs)("form",{target:"rememberTerraUserAddress",method:"post",action:"about:blank",children:[Object(g.jsx)("fieldset",{children:Object(g.jsx)("input",{type:"search",name:"terraUserAddress",id:"terraUserAddress",className:"py-2 h-10 w-72 sm:w-80 lg:w-96 text-sm text-white bg-gray-800 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:t("Ingresa tu address p\xfablica para empezar"),value:N,onChange:function(e){return w(e.target.value.toLowerCase())}})}),Object(g.jsx)("button",{type:"submit",className:"hidden",ref:E})]}),Object(g.jsx)("button",{type:"button",className:"w-max mt-2 p-1 text-xs font-medium text-blue-400 rounded-lg border border-blue-400 hover:bg-gray-600 hover:text-blue-400 focus:z-10 focus:ring-2 focus:ring-blue-400 focus:text-blue-400",onClick:function(){return w("terra13kc0x8kr3sq8226myf4nmanmn2mrk9s5s9wsnz")},children:t("VER UNA DEMO")})]}),Object(g.jsx)("img",{src:"/static/img/blue-dyno.webp",className:"w-44 min-w-max h-52 hidden lg:block"})]})]})]})]}),U&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"grid sm:grid-flow-col px-5 pb-5 sm:justify-between text-center gap-1 font-bold",children:[Object(g.jsxs)("div",{className:"grid grid-flow-row justify-items-center",children:[Object(g.jsx)("img",{src:"/static/img/orange-dyno.webp",className:"w-44 h-28 z-10 -mb-3"}),Object(g.jsx)("div",{className:"bg-gray-700 text-2xl p-5 rounded-lg w-80 sm:w-full",children:Object(g.jsx)("div",{className:"animate-pulse bg-gray-600 rounded-lg h-9 sm:w-52"})})]}),Object(g.jsx)("div",{className:"bg-gray-700 text-3xl py-5 px-7 rounded-lg grid grid-flow-col self-end justify-center",children:Object(g.jsxs)("div",{className:"flex sm:w-44 -ml-2 mr-1.5",children:[t("APY"),": ",Object(g.jsx)("div",{className:"animate-pulse bg-gray-600 rounded-lg h-9 w-36 ml-3 -mr-3"})]})})]}),Object(g.jsxs)("div",{className:"grid sm:grid-flow-col gap-2 px-5 text-center pb-2",children:[Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1 border border-blue-400",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83e\udd11"}),Object(g.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(g.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83e\ude99"}),Object(g.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(g.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb5"}),Object(g.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(g.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]})]}),Object(g.jsxs)("div",{className:"grid sm:grid-flow-col gap-2 px-5 text-center pb-5",children:[Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb8"}),Object(g.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(g.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb0"}),Object(g.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(g.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83e\udd73"}),Object(g.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(g.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]})]}),Object(g.jsx)("div",{className:"p-5 -mt-3",children:Object(g.jsx)("h2",{className:"text-2xl font-bold",children:t("Evoluci\xf3n de tus ganancias")})}),Object(g.jsx)("div",{className:"h-52 animate-pulse",children:Object(g.jsxs)("div",{className:"flex space-x-4 items-baseline m-4",children:[Object(g.jsx)("div",{className:"flex-1 h-10 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-48 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-48 bg-gray-500 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-48 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(g.jsx)("div",{className:"flex-1 h-10 bg-gray-400 rounded"})]})})]}),C&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"grid sm:grid-flow-col px-5 pb-5 sm:justify-between text-center gap-1 font-bold",children:[Object(g.jsxs)("div",{className:"grid grid-flow-row justify-items-center",children:[Object(g.jsx)("img",{src:"/static/img/orange-dyno.webp",className:"w-44 h-28 z-10 -mb-3"}),Object(g.jsx)("div",{className:"bg-gray-700 text-3xl p-5 rounded-lg",children:Object(g.jsx)("p",{children:Object(g.jsx)(b.a,{thousandSeparator:h.groupDelimiter,decimalSeparator:h.decimalDelimiter||!1,decimalScale:h.maximumFractionDigits,value:parseFloat(C.totalYield.ustHoldings),suffix:" UST",displayType:"text"})})})]}),Object(g.jsx)("div",{className:"bg-gray-700 text-3xl p-5 rounded-lg self-end",children:Object(g.jsxs)("p",{children:[t("APY"),": ",Object(g.jsx)(b.a,{thousandSeparator:h.groupDelimiter,decimalSeparator:h.decimalDelimiter||!1,decimalScale:h.maximumFractionDigits,value:parseFloat(C.currentRate),suffix:" %",displayType:"text"})]})})]}),Object(g.jsxs)("div",{className:"grid sm:grid-cols-3 gap-2 px-5 text-center pb-2",children:[Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1 border border-blue-400",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83e\udd11"}),Object(g.jsx)("h2",{children:t("Ganancia acumulada desde tu primer dep\xf3sito")}),Object(g.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(g.jsx)("p",{children:Object(g.jsx)(b.a,{thousandSeparator:h.groupDelimiter,decimalSeparator:h.decimalDelimiter||!1,decimalScale:h.maximumFractionDigits,value:parseFloat(C.totalYield.yield),suffix:" UST",displayType:"text"})})})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83e\ude99"}),Object(g.jsx)("h2",{children:t("Ganancia estimada por hora")}),Object(g.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(g.jsx)("p",{children:Object(g.jsx)(b.a,{thousandSeparator:h.groupDelimiter,decimalSeparator:h.decimalDelimiter||!1,decimalScale:h.maximumFractionDigits,value:parseFloat(C.estimatedYield.perHour),suffix:" UST",displayType:"text"})})})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb5"}),Object(g.jsx)("h2",{children:t("Ganancia estimada por d\xeda")}),Object(g.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(g.jsx)("p",{children:Object(g.jsx)(b.a,{thousandSeparator:h.groupDelimiter,decimalSeparator:h.decimalDelimiter||!1,decimalScale:h.maximumFractionDigits,value:parseFloat(C.estimatedYield.perDay),suffix:" UST",displayType:"text"})})})]})]}),Object(g.jsxs)("div",{className:"grid sm:grid-cols-3 gap-2 px-5 text-center pb-2",children:[Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb8"}),Object(g.jsx)("h2",{children:t("Ganancia estimada por semana")}),Object(g.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(g.jsx)("p",{children:Object(g.jsx)(b.a,{thousandSeparator:h.groupDelimiter,decimalSeparator:h.decimalDelimiter||!1,decimalScale:h.maximumFractionDigits,value:parseFloat(C.estimatedYield.perWeek),suffix:" UST",displayType:"text"})})})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb0"}),Object(g.jsx)("h2",{children:t("Ganancia estimada por mes")}),Object(g.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(g.jsx)("p",{children:Object(g.jsx)(b.a,{thousandSeparator:h.groupDelimiter,decimalSeparator:h.decimalDelimiter||!1,decimalScale:h.maximumFractionDigits,value:parseFloat(C.estimatedYield.perMonth),suffix:" UST",displayType:"text"})})})]}),Object(g.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(g.jsx)("p",{className:"text-4xl",children:"\ud83e\udd73"}),Object(g.jsx)("h2",{children:t("Ganancia estimada por a\xf1o")}),Object(g.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(g.jsx)("p",{children:Object(g.jsx)(b.a,{thousandSeparator:h.groupDelimiter,decimalSeparator:h.decimalDelimiter||!1,decimalScale:h.maximumFractionDigits,value:parseFloat(C.estimatedYield.perYear),suffix:" UST",displayType:"text"})})})]})]}),C.historicalData&&C.historicalData.length>0&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"p-5",children:Object(g.jsx)("h2",{className:"text-2xl font-bold",children:t("Evoluci\xf3n de tus ganancias")})}),Object(g.jsx)("div",{className:"h-64 p-5",children:Object(g.jsx)(o.a,{type:"line",options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}},data:{labels:C.historicalData.slice(0).reverse().map((function(e){return u(e.time).format("us"===window.COUNTRY?"MM-DD-YYYY":"DD-MM-YYYY").toString()})),datasets:[{type:"line",label:t("Ganancia acumulada"),data:C.historicalData.slice(0).reverse().map((function(e){return e.yield})),borderWidth:2,fill:!1,borderColor:"#60A5FA"}]}})})]})]}),Object(g.jsxs)("div",{className:["flex flex-col",U||C?"":"justify-center md:w-3/6 mx-auto"].join(" "),children:[Object(g.jsxs)("div",{className:"mb-5 px-5",children:[Object(g.jsxs)("span",{className:"font-bold",children:["\ud83d\udee1\ufe0f",t("Importante:")]})," ",Object(g.jsx)("p",{className:"contents",children:t("\xa1est\xe1s protegido! Tu address p\xfablica no nos permite realizar operaciones por ti. No guardamos tus datos ni informaci\xf3n.")})," ",Object(g.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(t("politicas-de-privacidad")),children:t("Ent\xe9rate m\xe1s en nuestras pol\xedticas de privacidad")})]}),"us"===window.COUNTRY&&Object(g.jsxs)("div",{className:"grid grid-flow-row mb-5 px-5 text-xs sm:text-base",children:[Object(g.jsxs)("div",{className:"flex cursor-pointer",onClick:function(){return R(!F)},children:[Object(g.jsx)("span",{children:"\ud83d\udc93"})," ",Object(g.jsx)("p",{className:"font-bold",children:"Liked our monitor? Help with your donation to any of our addresses"}),!F&&Object(g.jsx)(l.j,{className:"w-5 h-full ml-2 -mr-1","aria-hidden":"true"})||Object(g.jsx)(l.m,{className:"w-5 h-full ml-2 -mr-1","aria-hidden":"true"})]}),F&&Object(g.jsxs)("div",{className:"p-2 grid grid-flow-row gap-2",children:[Object(g.jsxs)("div",{className:"sm:flex",children:[Object(g.jsx)("p",{className:"font-bold",children:"BTC:"}),Object(g.jsx)("span",{className:"sm:ml-1",onClick:function(){navigator.clipboard.writeText("1Cjqa23ahy2tGNcr8CBBgpCgCCh4X7HPUV")},children:"1Cjqa23ahy2tGNcr8CBBgpCgCCh4X7HPUV"})]}),Object(g.jsxs)("div",{className:"sm:flex",children:[Object(g.jsx)("p",{className:"font-bold",children:"ETH, DAI, USDC or USDT (ERC20 tokens):"}),Object(g.jsx)("span",{className:"sm:ml-1",onClick:function(){navigator.clipboard.writeText("0x64785881576a7af9d9C08482F0458d7ba14E26D8")},children:"0x64785881576a7af9d9C08482F0458d7ba14E26D8"})]}),Object(g.jsxs)("div",{className:"sm:flex",children:[Object(g.jsx)("p",{className:"font-bold",children:"Any BSC token:"}),Object(g.jsx)("span",{className:"sm:ml-1",onClick:function(){navigator.clipboard.writeText("0x64785881576a7af9d9C08482F0458d7ba14E26D8")},children:"0x64785881576a7af9d9C08482F0458d7ba14E26D8"})]}),Object(g.jsxs)("div",{className:"sm:flex",children:[Object(g.jsx)("p",{className:"font-bold",children:"TRX or USDT (TRC20 tokens):"}),Object(g.jsx)("span",{className:"sm:ml-1",onClick:function(){navigator.clipboard.writeText("TVqV4C1Po9CwWHMnbFf2y6EpqrkqU1JPC6")},children:"TVqV4C1Po9CwWHMnbFf2y6EpqrkqU1JPC6"})]}),Object(g.jsxs)("div",{className:"sm:flex",children:[Object(g.jsx)("p",{className:"font-bold",children:"Luna or UST:"}),Object(g.jsx)("span",{className:"sm:ml-1",onClick:function(){navigator.clipboard.writeText("terra1fw3utehrhmrjatcnaslls6c3pa848qpykfqet5")},children:"terra1fw3utehrhmrjatcnaslls6c3pa848qpykfqet5"})]})]})]})]})]})}}}]);