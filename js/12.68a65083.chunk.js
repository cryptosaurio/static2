(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[12],{213:function(e,a){},530:function(e,a){},532:function(e,a){},543:function(e,a){},545:function(e,a){},559:function(e,a){},561:function(e,a){},562:function(e,a){},649:function(e,a){},651:function(e,a){},719:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var s=t(4),c=t(0),l=t(6),r=t(129),i=t(32),d=t(2),n=t(414),o=t(659),j=t(381),m=t(380),x=t(379),b=t(1),g=t(658);j.e.register(j.j,j.d,j.b,j.l,j.h,j.i,j.g,j.p);var p=Object(m.a)(window.COUNTRY);function u(){var e={page:"investments-dashboard",country:window.COUNTRY},a=Object(i.useTracking)(e).trackEvent,t=Object(r.a)().t,j=Object(d.g)(),m=Object(d.h)().address,u=Object(c.useState)(""),h=Object(s.a)(u,2),O=h[0],f=h[1],y=Object(c.useState)(null),N=Object(s.a)(y,2),v=N[0],w=N[1],S=Object(c.useState)(!1),F=Object(s.a)(S,2),T=F[0],Y=F[1];return Object(c.useEffect)((function(){var t={event:"pageview"};"production"===window.ENV?a(t):console.log(e,t)}),[]),Object(c.useEffect)((function(){m?f(m):(w(null),f(""))}),[m]),Object(c.useEffect)((function(){if(O&&n.AccAddress.validate(O)){var t={event:"user_action",event_category:"anchor_protocol_".concat(O),event_label:"search"};"production"===window.ENV?a(t):console.log(e,t),Y(!0),j("/monitor/anchor-protocol/".concat(O)),fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/get-anchor-protocol-data-v2/").concat(O):"".concat(window.BARNEY_BR_API_URL,"/get-anchor-protocol-data-v2/").concat(O)).then((function(e){return e.json()})).then((function(e){w(e)})).catch((function(){return w(null)})).finally((function(){return Y(!1)}))}}),[O]),Object(b.jsxs)(b.Fragment,{children:[(v||T)&&Object(b.jsx)("div",{className:"p-5",children:Object(b.jsx)("h1",{className:"text-2xl font-bold",children:"Anchor Protocol Monitor"})}),!v&&!T&&Object(b.jsxs)("div",{className:"flex flex-col justify-center md:w-3/6 mx-auto",children:[Object(b.jsx)("div",{className:"p-5",children:Object(b.jsx)("h1",{className:"text-2xl font-bold",children:"Anchor Protocol Monitor"})}),Object(b.jsxs)("div",{className:"mx-5 mb-5 p-5 bg-gray-700 bg-opacity-70 rounded-lg",children:[Object(b.jsx)("h2",{className:"text-xl font-bold",children:t("Monitorea tus inversiones en Anchor Protocol y anticipa tu ganancia por d\xeda, semana y m\xe1s")}),Object(b.jsxs)("div",{className:"relative mt-5",children:[Object(b.jsx)("span",{className:"h-10 text-gray-600 focus-within:text-gray-400 absolute inset-y-0 left-0 flex items-center pl-2",children:Object(b.jsx)("button",{className:"p-1 focus:outline-none focus:shadow-outline",children:Object(b.jsx)(l.w,{className:"w-5 h-5"})})}),Object(b.jsxs)("div",{className:"grid grid-flow-col justify-between",children:[Object(b.jsx)("input",{type:"search",name:"q",className:"py-2 h-10 w-80 text-sm text-white bg-gray-800 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:t("Ingresa tu address para empezar..."),autoComplete:"off",value:O,onChange:function(e){return f(e.target.value.toLowerCase())}}),Object(b.jsx)("img",{src:"/static/img/blue-dyno.webp",className:"w-44 hidden lg:block"})]})]})]})]}),T&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"grid sm:grid-flow-col px-5 pb-5 sm:justify-between text-center gap-1 font-bold",children:[Object(b.jsxs)("div",{className:"grid grid-flow-row justify-items-center",children:[Object(b.jsx)("img",{src:"/static/img/orange-dyno.webp",className:"w-44 z-10 -mb-3"}),Object(b.jsx)("div",{className:"bg-gray-700 text-2xl p-5 rounded-lg w-80 sm:w-full",children:Object(b.jsx)("div",{className:"animate-pulse bg-gray-600 rounded-lg h-9 sm:w-52"})})]}),Object(b.jsx)("div",{className:"bg-gray-700 text-3xl py-5 px-7 rounded-lg grid grid-flow-col self-end justify-center",children:Object(b.jsxs)("div",{className:"flex sm:w-44 -ml-2 mr-1.5",children:[t("APY"),": ",Object(b.jsx)("div",{className:"animate-pulse bg-gray-600 rounded-lg h-9 w-36 ml-3 -mr-3"})]})})]}),Object(b.jsxs)("div",{className:"grid sm:grid-flow-col gap-2 px-5 text-center pb-2",children:[Object(b.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1 border border-blue-400",children:[Object(b.jsx)("p",{className:"text-4xl",children:"\ud83e\udd11"}),Object(b.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(b.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(b.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(b.jsx)("p",{className:"text-4xl",children:"\ud83e\ude99"}),Object(b.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(b.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(b.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(b.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb5"}),Object(b.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(b.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]})]}),Object(b.jsxs)("div",{className:"grid sm:grid-flow-col gap-2 px-5 text-center pb-5",children:[Object(b.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(b.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb8"}),Object(b.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(b.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(b.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(b.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb0"}),Object(b.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(b.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(b.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(b.jsx)("p",{className:"text-4xl",children:"\ud83e\udd73"}),Object(b.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(b.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]})]}),Object(b.jsx)("div",{className:"p-5 -mt-3",children:Object(b.jsx)("h2",{className:"text-2xl font-bold",children:t("Evoluci\xf3n de tus ganancias")})}),Object(b.jsx)("div",{className:"h-52 animate-pulse",children:Object(b.jsxs)("div",{className:"flex space-x-4 items-baseline m-4",children:[Object(b.jsx)("div",{className:"flex-1 h-10 bg-gray-400 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-48 bg-gray-400 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-48 bg-gray-500 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-48 bg-gray-400 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(b.jsx)("div",{className:"flex-1 h-10 bg-gray-400 rounded"})]})})]}),v&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"grid sm:grid-flow-col px-5 pb-5 sm:justify-between text-center gap-1 font-bold",children:[Object(b.jsxs)("div",{className:"grid grid-flow-row justify-items-center",children:[Object(b.jsx)("img",{src:"/static/img/orange-dyno.webp",className:"w-44 z-10 -mb-3"}),Object(b.jsx)("div",{className:"bg-gray-700 text-3xl p-5 rounded-lg",children:Object(b.jsx)("p",{children:Object(b.jsx)(x.a,{thousandSeparator:".",decimalSeparator:",",decimalScale:p.maximumFractionDigits,value:parseFloat(v.totalYield.ustHoldings),suffix:" UST",displayType:"text"})})})]}),Object(b.jsx)("div",{className:"bg-gray-700 text-3xl p-5 rounded-lg self-end",children:Object(b.jsxs)("p",{children:[t("APY"),": ",Object(b.jsx)(x.a,{thousandSeparator:".",decimalSeparator:",",decimalScale:p.maximumFractionDigits,value:parseFloat(v.currentRate),suffix:" %",displayType:"text"})]})})]}),Object(b.jsxs)("div",{className:"grid sm:grid-cols-3 gap-2 px-5 text-center pb-2",children:[Object(b.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1 border border-blue-400",children:[Object(b.jsx)("p",{className:"text-4xl",children:"\ud83e\udd11"}),Object(b.jsx)("h2",{children:t("Ganancia acumulada desde tu primer dep\xf3sito")}),Object(b.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(b.jsx)("p",{children:Object(b.jsx)(x.a,{thousandSeparator:".",decimalSeparator:",",decimalScale:p.maximumFractionDigits,value:parseFloat(v.totalYield.yield),suffix:" UST",displayType:"text"})})})]}),Object(b.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(b.jsx)("p",{className:"text-4xl",children:"\ud83e\ude99"}),Object(b.jsx)("h2",{children:t("Ganancia estimada por hora")}),Object(b.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(b.jsx)("p",{children:Object(b.jsx)(x.a,{thousandSeparator:".",decimalSeparator:",",decimalScale:p.maximumFractionDigits,value:parseFloat(v.estimatedYield.perHour),suffix:" UST",displayType:"text"})})})]}),Object(b.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(b.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb5"}),Object(b.jsx)("h2",{children:t("Ganancia estimada por d\xeda")}),Object(b.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(b.jsx)("p",{children:Object(b.jsx)(x.a,{thousandSeparator:".",decimalSeparator:",",decimalScale:p.maximumFractionDigits,value:parseFloat(v.estimatedYield.perDay),suffix:" UST",displayType:"text"})})})]})]}),Object(b.jsxs)("div",{className:"grid sm:grid-cols-3 gap-2 px-5 text-center pb-2",children:[Object(b.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(b.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb8"}),Object(b.jsx)("h2",{children:t("Ganancia estimada por semana")}),Object(b.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(b.jsx)("p",{children:Object(b.jsx)(x.a,{thousandSeparator:".",decimalSeparator:",",decimalScale:p.maximumFractionDigits,value:parseFloat(v.estimatedYield.perWeek),suffix:" UST",displayType:"text"})})})]}),Object(b.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(b.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb0"}),Object(b.jsx)("h2",{children:t("Ganancia estimada por mes")}),Object(b.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(b.jsx)("p",{children:Object(b.jsx)(x.a,{thousandSeparator:".",decimalSeparator:",",decimalScale:p.maximumFractionDigits,value:parseFloat(v.estimatedYield.perMonth),suffix:" UST",displayType:"text"})})})]}),Object(b.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(b.jsx)("p",{className:"text-4xl",children:"\ud83e\udd73"}),Object(b.jsx)("h2",{children:t("Ganancia estimada por a\xf1o")}),Object(b.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(b.jsx)("p",{children:Object(b.jsx)(x.a,{thousandSeparator:".",decimalSeparator:",",decimalScale:p.maximumFractionDigits,value:parseFloat(v.estimatedYield.perYear),suffix:" UST",displayType:"text"})})})]})]}),v.historicalData&&v.historicalData.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"p-5",children:Object(b.jsx)("h2",{className:"text-2xl font-bold",children:t("Evoluci\xf3n de tus ganancias")})}),Object(b.jsx)("div",{className:"h-64 p-5",children:Object(b.jsx)(o.a,{type:"line",options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}},data:{labels:v.historicalData.slice(0).reverse().map((function(e){return g(e.time).format("DD-MM-YYYY").toString()})),datasets:[{type:"line",label:"Ganancia acumulada",data:v.historicalData.slice(0).reverse().map((function(e){return e.yield})),borderWidth:2,fill:!1,borderColor:"#60A5FA"}]}})})]})]})]})}}}]);