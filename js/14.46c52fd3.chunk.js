(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[14],{139:function(e,a,s){"use strict";s.r(a),s.d(a,"CalculatorModal",(function(){return x}));var i=s(28),r=s(0),l=s.n(r),n=s(97),t=s(106),c=s(17),o=s(135),d=s(52),u=s(134),m=s(98),b=s(1),p=Object(o.a)(window.COUNTRY),j={BTC:7,ETH:7,DAI:2,USDC:2,USDT:2,UST:2,BNB:7,ADA:7,LTC:7,CAKE:3,UNI:3,MATIC:7,SOL:7,DOT:7,LINK:7,XRP:7,BCH:7,DOGE:7};function x(e){var a=e.calculatorModalIsOpen,s=e.setCalculatorModalIsOpen,l=e.calculatorData,o=e.setCalculatorData,x=e.selectedCurrency,g=Object(m.a)().t;return Object(b.jsx)(n.a,{appear:!0,show:a,as:r.Fragment,children:Object(b.jsx)(t.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){return s(!1)},children:Object(b.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(b.jsx)(t.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(b.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(b.jsx)(n.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(b.jsxs)("div",{className:"inline-block w-full max-w-5xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(b.jsxs)("div",{className:"flex justify-between",children:[Object(b.jsx)(t.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:g("Calcula tu ganancia")}),Object(b.jsx)(c.s,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){return s(!1)}})]}),(l.opportunityUnavailable||l.opportunityChanged)&&Object(b.jsxs)("div",{className:"relative my-3 py-3 px-4 leading-normal text-red-700 bg-red-100 rounded-lg",role:"alert",children:[l.opportunityUnavailable&&Object(b.jsx)("p",{children:g("Esta oportunidad ya no est\xe1 disponible.")}),l.opportunityChanged&&Object(b.jsxs)("div",{className:"grid grid-cols-4",children:[Object(b.jsx)("p",{className:"col-span-full",children:g("Los precios que est\xe1s viendo est\xe1n desactualizados.")}),Object(b.jsx)("p",{className:"col-end-8 underline cursor-pointer",onClick:function(){o(Object(i.a)(Object(i.a)({},{userInversion:l.opportunityUpdatedData.rawMinimumInversion}),l.opportunityUpdatedData))},children:g("ACTUALIZAR")})]}),Object(b.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center mr-4"})]}),Object(b.jsxs)("div",{className:"mt-2 flex flex-col gap-3 text-white",children:[Object(b.jsxs)("div",{className:"my-4",children:[Object(b.jsx)("label",{className:"block text-sm mb-2","data-for":"username",children:"USD"===x&&g("D\xf3lares a invertir")||g("Pesos a invertir")}),Object(b.jsx)(u.a,{className:"bg-gray-900 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 border-gray-700",onValueChange:function(e){e.value!==l.userInversion&&o((function(a){return Object(i.a)(Object(i.a)({},a),{},{userInversion:e.value})}))},thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter,prefix:"".concat(l.currencyMask," "),decimalScale:p.maximumFractionDigits,allowNegative:!1,defaultValue:l.rawMinimumInversion,value:l.userInversion})]}),Object(b.jsxs)("div",{className:"md:grid md:grid-cols-8",children:[Object(b.jsxs)("span",{className:"md:col-span-3",children:[g("Compr\xe1s en")," ",l.buy.fields.name,Object(b.jsxs)("span",{className:"hidden md:flex items-center text-gray-500",children:[l.buy.fields.score.rating,Object(b.jsx)(c.r,{className:"w-5 h-5 -mr-1","aria-hidden":"true"})]})]}),Object(b.jsxs)("span",{className:"pl-1 md:pl-0 md:col-span-2",children:[x&&l.userInversion>0&&(l.userInversion/l.buy.fields[x].original_ask).toFixed(j[l.coin])," ",l.userInversion>0&&l.coin]}),Object(b.jsx)("span",{className:"md:col-span-2 hidden md:block",children:Object(b.jsx)(u.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter,prefix:"".concat(l.currencyMask," "),decimalScale:p.maximumFractionDigits,value:l.userInversion,displayType:"text"})}),Object(b.jsx)("span",{children:!l.buyDataExpanded&&Object(b.jsx)(c.e,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer float-right","aria-hidden":"true",onClick:function(){o((function(e){return Object(i.a)(Object(i.a)({},e),{},{buyDataExpanded:!0})}))}})||Object(b.jsx)(c.h,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer float-right","aria-hidden":"true",onClick:function(){o((function(e){return Object(i.a)(Object(i.a)({},e),{},{buyDataExpanded:!1})}))}})})]}),l.buyDataExpanded&&x&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"md:grid md:grid-cols-8 text-gray-500",children:[Object(b.jsxs)("span",{className:"col-span-3",children:[Object(d.a)(l.coin).name,Object(b.jsx)("span",{className:"md:hidden",children:":"})]}),Object(b.jsx)("span",{className:"col-start-4 pl-1 md:pl-0 md:col-start-6 col-span-5",children:l.userInversion>0&&Object(b.jsx)(u.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter,prefix:"".concat(l.currencyMask," "),decimalScale:p.maximumFractionDigits,value:0===l.buy.fields[x].original_ask_without_fees?l.userInversion:l.buy.fields[x].original_ask_without_fees*(l.userInversion/l.buy.fields[x].original_ask),displayType:"text"})||"-"})]}),Object(b.jsxs)("div",{className:"md:grid md:grid-cols-8 text-gray-500",children:[Object(b.jsxs)("span",{className:"col-span-3",children:[g("Comisiones"),Object(b.jsx)("span",{className:"md:hidden",children:":"})]}),Object(b.jsx)("span",{className:"col-start-4 pl-1 md:pl-0 md:col-start-6 col-span-5",children:l.userInversion>0&&Object(b.jsx)(u.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter,prefix:"".concat(l.currencyMask," "),decimalScale:p.maximumFractionDigits,value:0===l.buy.fields[x].original_ask_without_fees?l.buy.fields[x].original_ask_without_fees:l.userInversion-l.buy.fields[x].original_ask_without_fees*(l.userInversion/l.buy.fields[x].original_ask),displayType:"text"})||"-"})]}),Object(b.jsxs)("div",{className:"md:grid md:grid-cols-8 text-gray-500",children:[Object(b.jsxs)("span",{className:"col-span-3",children:[g("Fees de la red de {{blockchain}} de prioridad alta",{blockchain:Object(d.a)(l.coin).blockchain}),Object(b.jsx)("span",{className:"md:hidden",children:":"})]}),Object(b.jsxs)("span",{className:"col-span-5 pl-1 md:pl-0",children:[parseFloat(l.brute_gas_costs).toFixed(j[l.coin])," ",l.coin]})]})]}),Object(b.jsxs)("div",{className:"md:grid md:grid-cols-8",children:[Object(b.jsxs)("span",{className:"col-span-3",children:[g("Vend\xe9s en")," ",l.sell.fields.name,Object(b.jsxs)("span",{className:"hidden md:flex items-center text-gray-500",children:[l.sell.fields.score.rating,Object(b.jsx)(c.r,{className:"w-5 h-5 -mr-1","aria-hidden":"true"})]})]}),Object(b.jsxs)("span",{className:"col-span-2 hidden md:block",children:[x&&l.userInversion>0&&(l.userInversion/l.buy.fields[x].original_ask-l.brute_gas_costs)*l.sell.fields[x].original_bid-l.userInversion>0&&(l.userInversion/l.buy.fields[x].original_ask-l.gas_costs/l.buy.fields[x].original_ask).toFixed(j[l.coin])||"-"," ",x&&l.userInversion>0&&(l.userInversion/l.buy.fields[x].original_ask-l.brute_gas_costs)*l.sell.fields[x].original_bid-l.userInversion>0&&l.coin]}),Object(b.jsx)("span",{className:"pl-1 md:pl-0 md:col-span-2 col-span-4",children:x&&l.userInversion>0&&(l.userInversion/l.buy.fields[x].original_ask-l.brute_gas_costs)*l.sell.fields[x].original_bid-l.userInversion>0&&Object(b.jsx)(u.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter,prefix:"".concat(l.currencyMask," "),decimalScale:p.maximumFractionDigits,value:(l.userInversion/l.buy.fields[x].original_ask-l.brute_gas_costs)*l.sell.fields[x].original_bid,displayType:"text"})||"-"}),Object(b.jsx)("span",{children:!l.sellDataExpanded&&Object(b.jsx)(c.e,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer float-right","aria-hidden":"true",onClick:function(){o((function(e){return Object(i.a)(Object(i.a)({},e),{},{sellDataExpanded:!0})}))}})||Object(b.jsx)(c.h,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer float-right","aria-hidden":"true",onClick:function(){o((function(e){return Object(i.a)(Object(i.a)({},e),{},{sellDataExpanded:!1})}))}})})]}),x&&l.sellDataExpanded&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"md:grid md:grid-cols-8 text-gray-500",children:[Object(b.jsxs)("span",{className:"col-span-3",children:[Object(d.a)(l.coin).name,Object(b.jsx)("span",{className:"md:hidden",children:":"})]}),Object(b.jsx)("span",{className:"col-start-4 pl-1 md:pl-0 md:col-start-6 col-span-5",children:x&&l.userInversion>0&&(l.userInversion/l.buy.fields[x].original_ask-l.brute_gas_costs)*l.sell.fields[x].original_bid-l.userInversion>0&&Object(b.jsx)(u.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter,prefix:"".concat(l.currencyMask," "),decimalScale:p.maximumFractionDigits,value:0===l.sell.fields[x].original_bid_without_fees?(l.userInversion/l.buy.fields[x].original_ask-l.gas_costs/l.buy.fields[x].original_ask)*l.sell.fields[x].original_bid:(l.userInversion/l.buy.fields[x].original_ask-l.gas_costs/l.buy.fields[x].original_ask)*l.sell.fields[x].original_bid_without_fees,displayType:"text"})||"-"})]}),Object(b.jsxs)("div",{className:"flex md:grid md:grid-cols-8 text-gray-500",children:[Object(b.jsxs)("span",{className:"col-span-3",children:[g("Comisiones"),Object(b.jsx)("span",{className:"md:hidden",children:":"})]}),Object(b.jsx)("span",{className:"col-start-4 pl-1 md:pl-0 md:col-start-6 col-span-5",children:x&&l.userInversion>0&&(l.userInversion/l.buy.fields[x].original_ask-l.brute_gas_costs)*l.sell.fields[x].original_bid-l.userInversion>0&&Object(b.jsx)(u.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter,prefix:"".concat(l.currencyMask," "),decimalScale:p.maximumFractionDigits,value:0===l.sell.fields[x].original_bid_without_fees?l.sell.fields[x].original_bid_without_fees:(l.userInversion/l.buy.fields[x].original_ask-l.brute_gas_costs)*l.sell.fields[x].original_bid_without_fees-(l.userInversion/l.buy.fields[x].original_ask-l.brute_gas_costs)*l.sell.fields[x].original_bid,displayType:"text"})||"-"})]})]}),Object(b.jsxs)("div",{className:"flex md:grid md:grid-cols-8",children:[Object(b.jsxs)("span",{className:"col-span-3",children:[g("Ganancia estimada"),Object(b.jsx)("span",{className:"md:hidden",children:":"})]}),Object(b.jsx)("span",{className:["col-start-4 pl-1 md:pl-0 md:col-start-6 col-span-5","".concat(x&&l.userInversion>0&&(l.userInversion/l.buy.fields[x].original_ask-l.brute_gas_costs)*l.sell.fields[x].original_bid-l.userInversion>0?"text-green-500":"")].join(" "),children:x&&l.userInversion>0&&(l.userInversion/l.buy.fields[x].original_ask-l.brute_gas_costs)*l.sell.fields[x].original_bid-l.userInversion>0&&Object(b.jsx)(u.a,{thousandSeparator:p.groupDelimiter,decimalSeparator:p.decimalDelimiter,prefix:"".concat(l.currencyMask," "),decimalScale:p.maximumFractionDigits,value:(l.userInversion/l.buy.fields[x].original_ask-l.brute_gas_costs)*l.sell.fields[x].original_bid-l.userInversion,displayType:"text"})||"-"})]})]})]})})]})})})}var g=function(e,a){return e.calculatorData.userInversion===a.calculatorData.userInversion&&e.calculatorData.buyDataExpanded===a.calculatorData.buyDataExpanded&&e.calculatorData.sellDataExpanded===a.calculatorData.sellDataExpanded&&e.calculatorData.brute_gas_costs===a.calculatorData.brute_gas_costs&&e.calculatorData.difference===a.calculatorData.difference&&e.calculatorData.rawMinimumInversion===a.calculatorData.rawMinimumInversion};a.default=l.a.memo(x,g)}}]);