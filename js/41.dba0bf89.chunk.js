(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[41],{126:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var s=t(12),c=t(0),r=t(150),l=t(134),i=t(151),n=t(1),d=t(34),o=t(284),m=t(245),b=t(244),j=t(239),u=t(179),x=t(2),g=function(e){var a=Object(c.lazy)(e);return a.preload=e,a}((function(){return t.e(42).then(t.t.bind(null,301,7))})),p=t(282);m.e.register(m.j,m.d,m.b,m.l,m.h,m.i,m.g,m.p);var h=Object(c.lazy)((function(){return t.e(51).then(t.bind(null,305))})),f=Object(b.a)("".concat(window.FALLBACK_LANGUAGE.toLowerCase(),"-").concat(window.COUNTRY.toUpperCase()));function O(){var e={page:"investments-dashboard",country:window.COUNTRY},a=Object(i.useTracking)(e).trackEvent,t=Object(l.a)().t,m=Object(n.g)(),b=Object(n.h)().address,O=Object(c.useState)(""),N=Object(s.a)(O,2),v=N[0],y=N[1],w=Object(c.useState)(null),C=Object(s.a)(w,2),T=C[0],D=C[1],S=Object(c.useState)(!1),U=Object(s.a)(S,2),A=U[0],k=U[1],Y=Object(c.useState)(!1),E=Object(s.a)(Y,2),R=E[0],F=E[1],_=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t={event:"pageview"};"production"===window.ENV?a(t):console.log(e,t)}),[]),Object(c.useEffect)((function(){b?y(b):(D(null),y(""))}),[b]),Object(c.useEffect)((function(){v&&g.preload().then((function(t){if(t.AccAddress.validate(v)){_.current.click();var s={event:"user_action",event_category:"anchor_protocol_".concat(v.slice(v.length-6,v.length)),event_label:"search"};"production"===window.ENV?a(s):console.log(e,s),k(!0),m("/monitor/anchor-protocol/".concat(v)),fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/get-anchor-protocol-data-v2/").concat(v):"".concat(window.BARNEY_BR_API_URL,"/get-anchor-protocol-data-v2/").concat(v)).then((function(e){return e.json()})).then((function(e){D(e)})).catch((function(){return D(null)})).finally((function(){return k(!1)}))}}))}),[v]),Object(u.a)((function(){T&&v&&g.preload().then((function(e){e.AccAddress.validate(v)&&fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/get-anchor-protocol-data-v2/").concat(v):"".concat(window.BARNEY_BR_API_URL,"/get-anchor-protocol-data-v2/").concat(v)).then((function(e){return e.json()})).then((function(e){D(e)})).catch((function(){return D(null)})).finally((function(){return k(!1)}))}))}),6e4,!1),Object(x.jsxs)(x.Fragment,{children:[!T&&!A&&Object(x.jsx)(h,{}),(T||A)&&Object(x.jsx)("div",{className:"p-5",children:Object(x.jsx)("h1",{className:"text-2xl font-bold",children:"Anchor Protocol Monitor"})}),!T&&!A&&Object(x.jsxs)("div",{className:"flex flex-col justify-center md:w-3/6 mx-auto",children:[Object(x.jsx)("div",{className:"p-5",children:Object(x.jsx)("h1",{className:"text-2xl font-bold",children:"Anchor Protocol Monitor"})}),Object(x.jsxs)("div",{className:"mx-5 mb-5 p-5 lg:pb-0 bg-gray-700 bg-opacity-70 rounded-lg",children:[Object(x.jsx)("h2",{className:"text-xl font-bold",children:t("Monitorea tus inversiones en Anchor Protocol y anticipa tu ganancia por d\xeda, semana y m\xe1s")}),Object(x.jsxs)("div",{className:"relative mt-5",children:[Object(x.jsx)("span",{className:"h-10 text-gray-600 focus-within:text-gray-400 absolute inset-y-0 left-0 flex items-center pl-2",children:Object(x.jsx)("button",{className:"p-1 focus:outline-none focus:shadow-outline",children:Object(x.jsx)(r.y,{className:"w-5 h-5"})})}),Object(x.jsxs)("div",{className:"grid grid-flow-col justify-between",children:[Object(x.jsx)("iframe",{id:"rememberTerraUserAddress",name:"rememberTerraUserAddress",className:"hidden",src:"about:blank"}),Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsxs)("form",{target:"rememberTerraUserAddress",method:"post",action:"about:blank",children:[Object(x.jsx)("fieldset",{children:Object(x.jsx)("input",{type:"search",name:"terraUserAddress",id:"terraUserAddress",className:"py-2 h-10 w-72 sm:w-80 lg:w-96 text-sm text-white bg-gray-800 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:t("Ingresa tu address p\xfablica para empezar"),value:v,onChange:function(e){return y(e.target.value.toLowerCase())}})}),Object(x.jsx)("button",{type:"submit",className:"hidden",ref:_})]}),Object(x.jsxs)("div",{className:"flex flex-row gap-2",children:[Object(x.jsx)("button",{type:"button",className:"w-max mt-2 p-1 text-xs font-medium rounded-lg border border-blue-400 bg-blue-400 hover:bg-blue-500 hover:text-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-400 focus:text-blue-400",onClick:function(){return y("terra13kc0x8kr3sq8226myf4nmanmn2mrk9s5s9wsnz")},children:t("VER UNA DEMO")}),"us"!==window.COUNTRY&&Object(x.jsx)(d.b,{className:"w-max mt-2 p-1 text-xs font-medium text-blue-400 rounded-lg border border-blue-400 hover:bg-gray-600 hover:text-blue-400 focus:z-10 focus:ring-2 focus:ring-blue-400 focus:text-blue-400",to:t("/blog/como-invertir-en-anchor-protocol"),children:t("C\xd3MO INVERTIR")})]})]}),Object(x.jsx)("img",{src:"/static/img/blue-dyno.webp",className:"w-44 min-w-max h-52 hidden lg:block"})]})]})]})]}),A&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"grid sm:grid-flow-col px-5 pb-5 sm:justify-between text-center gap-1 font-bold",children:[Object(x.jsxs)("div",{className:"grid grid-flow-row justify-items-center",children:[Object(x.jsx)("img",{src:"/static/img/orange-dyno.webp",className:"w-44 h-28 z-10 -mb-3"}),Object(x.jsx)("div",{className:"bg-gray-700 text-2xl p-5 rounded-lg w-80 sm:w-full",children:Object(x.jsx)("div",{className:"animate-pulse bg-gray-600 rounded-lg h-9 sm:w-52"})})]}),Object(x.jsx)("div",{className:"bg-gray-700 text-3xl py-5 px-7 rounded-lg grid grid-flow-col self-end justify-center",children:Object(x.jsxs)("div",{className:"flex sm:w-44 -ml-2 mr-1.5",children:[t("APY"),": ",Object(x.jsx)("div",{className:"animate-pulse bg-gray-600 rounded-lg h-9 w-36 ml-3 -mr-3"})]})})]}),Object(x.jsxs)("div",{className:"grid sm:grid-flow-col gap-2 px-5 text-center pb-2",children:[Object(x.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1 border border-blue-400",children:[Object(x.jsx)("p",{className:"text-4xl",children:"\ud83e\udd11"}),Object(x.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(x.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(x.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(x.jsx)("p",{className:"text-4xl",children:"\ud83e\ude99"}),Object(x.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(x.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(x.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(x.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb5"}),Object(x.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(x.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]})]}),Object(x.jsxs)("div",{className:"grid sm:grid-flow-col gap-2 px-5 text-center pb-5",children:[Object(x.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(x.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb8"}),Object(x.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(x.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(x.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(x.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb0"}),Object(x.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(x.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]}),Object(x.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(x.jsx)("p",{className:"text-4xl",children:"\ud83e\udd73"}),Object(x.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse m-auto mt-1"}),Object(x.jsx)("div",{className:"bg-gray-800 w-16 h-4 animate-pulse m-auto mt-2 mb-1"})]})]}),Object(x.jsx)("div",{className:"p-5 -mt-3",children:Object(x.jsx)("h2",{className:"text-2xl font-bold",children:t("Evoluci\xf3n de tus ganancias")})}),Object(x.jsx)("div",{className:"h-52 animate-pulse",children:Object(x.jsxs)("div",{className:"flex space-x-4 items-baseline m-4",children:[Object(x.jsx)("div",{className:"flex-1 h-10 bg-gray-400 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-48 bg-gray-400 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-48 bg-gray-500 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-48 bg-gray-400 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-44 bg-gray-500 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-36 bg-gray-400 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-24 bg-gray-400 rounded"}),Object(x.jsx)("div",{className:"flex-1 h-10 bg-gray-400 rounded"})]})})]}),T&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"grid sm:grid-flow-col px-5 pb-5 sm:justify-between text-center gap-1 font-bold",children:[Object(x.jsxs)("div",{className:"grid grid-flow-row justify-items-center",children:[Object(x.jsx)("img",{src:"/static/img/orange-dyno.webp",className:"w-44 h-28 z-10 -mb-3"}),Object(x.jsx)("div",{className:"bg-gray-700 text-3xl p-5 rounded-lg",children:Object(x.jsx)("p",{children:Object(x.jsx)(j.a,{thousandSeparator:f.groupDelimiter,decimalSeparator:f.decimalDelimiter||!1,decimalScale:f.maximumFractionDigits,value:parseFloat(T.totalYield.ustHoldings),suffix:" UST",displayType:"text"})})})]}),Object(x.jsx)("div",{className:"bg-gray-700 text-3xl p-5 rounded-lg self-end",children:Object(x.jsxs)("p",{children:[t("APY"),": ",Object(x.jsx)(j.a,{thousandSeparator:f.groupDelimiter,decimalSeparator:f.decimalDelimiter||!1,decimalScale:f.maximumFractionDigits,value:parseFloat(T.currentRate),suffix:" %",displayType:"text"})]})})]}),Object(x.jsxs)("div",{className:"grid sm:grid-cols-3 gap-2 px-5 text-center pb-2",children:[Object(x.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1 border border-blue-400",children:[Object(x.jsx)("p",{className:"text-4xl",children:"\ud83e\udd11"}),Object(x.jsx)("h2",{children:t("Ganancia acumulada desde tu primer dep\xf3sito")}),Object(x.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(x.jsx)("p",{children:Object(x.jsx)(j.a,{thousandSeparator:f.groupDelimiter,decimalSeparator:f.decimalDelimiter||!1,decimalScale:f.maximumFractionDigits,value:parseFloat(T.totalYield.yield),suffix:" UST",displayType:"text"})})})]}),Object(x.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(x.jsx)("p",{className:"text-4xl",children:"\ud83e\ude99"}),Object(x.jsx)("h2",{children:t("Ganancia estimada por hora")}),Object(x.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(x.jsx)("p",{children:Object(x.jsx)(j.a,{thousandSeparator:f.groupDelimiter,decimalSeparator:f.decimalDelimiter||!1,decimalScale:f.maximumFractionDigits,value:parseFloat(T.estimatedYield.perHour),suffix:" UST",displayType:"text"})})})]}),Object(x.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(x.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb5"}),Object(x.jsx)("h2",{children:t("Ganancia estimada por d\xeda")}),Object(x.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(x.jsx)("p",{children:Object(x.jsx)(j.a,{thousandSeparator:f.groupDelimiter,decimalSeparator:f.decimalDelimiter||!1,decimalScale:f.maximumFractionDigits,value:parseFloat(T.estimatedYield.perDay),suffix:" UST",displayType:"text"})})})]})]}),Object(x.jsxs)("div",{className:"grid sm:grid-cols-3 gap-2 px-5 text-center pb-2",children:[Object(x.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(x.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb8"}),Object(x.jsx)("h2",{children:t("Ganancia estimada por semana")}),Object(x.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(x.jsx)("p",{children:Object(x.jsx)(j.a,{thousandSeparator:f.groupDelimiter,decimalSeparator:f.decimalDelimiter||!1,decimalScale:f.maximumFractionDigits,value:parseFloat(T.estimatedYield.perWeek),suffix:" UST",displayType:"text"})})})]}),Object(x.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(x.jsx)("p",{className:"text-4xl",children:"\ud83d\udcb0"}),Object(x.jsx)("h2",{children:t("Ganancia estimada por mes")}),Object(x.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(x.jsx)("p",{children:Object(x.jsx)(j.a,{thousandSeparator:f.groupDelimiter,decimalSeparator:f.decimalDelimiter||!1,decimalScale:f.maximumFractionDigits,value:parseFloat(T.estimatedYield.perMonth),suffix:" UST",displayType:"text"})})})]}),Object(x.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 rounded-lg col-span-1",children:[Object(x.jsx)("p",{className:"text-4xl",children:"\ud83e\udd73"}),Object(x.jsx)("h2",{children:t("Ganancia estimada por a\xf1o")}),Object(x.jsx)("span",{className:"m-auto flex rounded-lg px-3 bg-gray-700 items-center w-max text-blue-400 font-bold",children:Object(x.jsx)("p",{children:Object(x.jsx)(j.a,{thousandSeparator:f.groupDelimiter,decimalSeparator:f.decimalDelimiter||!1,decimalScale:f.maximumFractionDigits,value:parseFloat(T.estimatedYield.perYear),suffix:" UST",displayType:"text"})})})]})]}),T.historicalData&&T.historicalData.length>0&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"p-5",children:Object(x.jsx)("h2",{className:"text-2xl font-bold",children:t("Evoluci\xf3n de tus ganancias")})}),Object(x.jsx)("div",{className:"h-64 p-5",children:Object(x.jsx)(o.a,{type:"line",options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}},data:{labels:T.historicalData.slice(0).reverse().map((function(e){return p(e.time).format("us"===window.COUNTRY?"MM-DD-YYYY":"DD-MM-YYYY").toString()})),datasets:[{type:"line",label:t("Ganancia acumulada"),data:T.historicalData.slice(0).reverse().map((function(e){return e.yield})),borderWidth:2,fill:!1,borderColor:"#60A5FA"}]}})})]})]}),Object(x.jsxs)("div",{className:["flex flex-col",A||T?"":"justify-center md:w-3/6 mx-auto"].join(" "),children:[Object(x.jsxs)("div",{className:"mb-5 px-5",children:[Object(x.jsxs)("span",{className:"font-bold",children:["\ud83d\udee1\ufe0f",t("Importante:")]})," ",Object(x.jsx)("p",{className:"contents",children:t("\xa1est\xe1s protegido! Tu address p\xfablica no nos permite realizar operaciones por ti. No guardamos tus datos ni informaci\xf3n.")})," ",Object(x.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"".concat("br"!==window.COUNTRY?"/".concat(window.COUNTRY):"","/").concat(t("politicas-de-privacidad")),children:t("Ent\xe9rate m\xe1s en nuestras pol\xedticas de privacidad")})]}),"us"===window.COUNTRY&&Object(x.jsxs)("div",{className:"grid grid-flow-row mb-5 px-5 text-xs sm:text-base",children:[Object(x.jsxs)("div",{className:"flex cursor-pointer",onClick:function(){return F(!R)},children:[Object(x.jsx)("span",{children:"\ud83d\udc93"})," ",Object(x.jsx)("p",{className:"font-bold",children:"Liked our monitor? Help with your donation to any of our addresses"}),!R&&Object(x.jsx)(r.l,{className:"w-5 h-full ml-2 -mr-1","aria-hidden":"true"})||Object(x.jsx)(r.o,{className:"w-5 h-full ml-2 -mr-1","aria-hidden":"true"})]}),R&&Object(x.jsxs)("div",{className:"p-2 grid grid-flow-row gap-2",children:[Object(x.jsxs)("div",{className:"sm:flex",children:[Object(x.jsx)("p",{className:"font-bold",children:"BTC:"}),Object(x.jsx)("span",{className:"sm:ml-1",onClick:function(){navigator.clipboard.writeText("1Cjqa23ahy2tGNcr8CBBgpCgCCh4X7HPUV")},children:"1Cjqa23ahy2tGNcr8CBBgpCgCCh4X7HPUV"})]}),Object(x.jsxs)("div",{className:"sm:flex",children:[Object(x.jsx)("p",{className:"font-bold",children:"ETH, DAI, USDC or USDT (ERC20 tokens):"}),Object(x.jsx)("span",{className:"sm:ml-1",onClick:function(){navigator.clipboard.writeText("0x64785881576a7af9d9C08482F0458d7ba14E26D8")},children:"0x64785881576a7af9d9C08482F0458d7ba14E26D8"})]}),Object(x.jsxs)("div",{className:"sm:flex",children:[Object(x.jsx)("p",{className:"font-bold",children:"Any BSC token:"}),Object(x.jsx)("span",{className:"sm:ml-1",onClick:function(){navigator.clipboard.writeText("0x64785881576a7af9d9C08482F0458d7ba14E26D8")},children:"0x64785881576a7af9d9C08482F0458d7ba14E26D8"})]}),Object(x.jsxs)("div",{className:"sm:flex",children:[Object(x.jsx)("p",{className:"font-bold",children:"TRX or USDT (TRC20 tokens):"}),Object(x.jsx)("span",{className:"sm:ml-1",onClick:function(){navigator.clipboard.writeText("TVqV4C1Po9CwWHMnbFf2y6EpqrkqU1JPC6")},children:"TVqV4C1Po9CwWHMnbFf2y6EpqrkqU1JPC6"})]}),Object(x.jsxs)("div",{className:"sm:flex",children:[Object(x.jsx)("p",{className:"font-bold",children:"Luna or UST:"}),Object(x.jsx)("span",{className:"sm:ml-1",onClick:function(){navigator.clipboard.writeText("terra1fw3utehrhmrjatcnaslls6c3pa848qpykfqet5")},children:"terra1fw3utehrhmrjatcnaslls6c3pa848qpykfqet5"})]})]})]})]})]})}},179:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var s=t(0),c=t(12);function r(){return!document["undefined"!==typeof document.hidden?"hidden":"undefined"!==typeof document.msHidden?"msHidden":"undefined"!==typeof document.webkitHidden?"webkitHidden":void 0]}function l(){var e=Object(s.useState)(r()),a=Object(c.a)(e,2),t=a[0],l=a[1],i=function(){return l(r())};return Object(s.useLayoutEffect)((function(){var e="undefined"!==typeof document.hidden?"visibilitychange":"undefined"!==typeof document.msHidden?"msvisibilitychange":"undefined"!==typeof document.webkitHidden?"webkitvisibilitychange":void 0;return document.addEventListener(e,i,!1),function(){document.removeEventListener(e,i)}}),[]),t}function i(e,a,t){var c=l(),r=t?!c:c,i=Object(s.useRef)(),n=Object(s.useRef)();Object(s.useEffect)((function(){i.current=e,n.current=a}),[e,a]);for(var d=arguments.length,o=new Array(d>3?d-3:0),m=3;m<d;m++)o[m-3]=arguments[m];o.push(r),Object(s.useEffect)((function(){function e(){i.current()}if(n.current=r?n.current:null,null!==n.current){e();var a=setInterval(e,n.current);return function(){return clearInterval(a)}}}),o)}}}]);