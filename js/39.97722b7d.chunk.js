(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[39],{174:function(e,r,n){"use strict";r.a=function(e,r){return e===r||e.length===r.length&&e.every((function(e,n){return e.id===r[n].id&&e.title===r[n].title}))}},336:function(e,r,n){"use strict";n.r(r);var t,s=n(145),c=n(0),i=n.n(c),a=n(202),l=n(212),o=n(150),d=n(134),u=n(174),f=n(2);function x(e){var r=e.preferencesModalIsOpen,n=e.setPreferencesModalIsOpen,i=e.providerList,u=e.setP2PData,x=e.viewType,m=e.setViewType,j=e.blockedProviders,b=e.setBlockedProviders,p=e.selectedCurrency,h=e.setSelectedCurrency,g=e.availableCurrencies,v=Object(d.a)().t;function y(e){u({}),m(e.target.value)}function O(e){e=e.target.value;var r=j.indexOf(e);-1!==r?r>-1&&b(j.filter((function(r){return r!==e}))):b((function(r){return[].concat(Object(s.a)(r),[e])}))}return Object(f.jsx)(a.a,{appear:!0,show:r,as:c.Fragment,children:Object(f.jsx)(l.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){return n(!1)},children:Object(f.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(f.jsx)(l.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(f.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(f.jsx)(a.a.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(f.jsxs)("div",{className:"inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(f.jsxs)("div",{className:"flex justify-between",children:[Object(f.jsx)(l.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:v("Preferencias")}),Object(f.jsx)(o.H,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){return n(!1)}})]}),Object(f.jsxs)("div",{className:"mt-2 flex flex-col gap-3 text-white",children:[g.length>0&&Object(f.jsxs)("div",{className:"flex flex-row",children:[Object(f.jsx)("p",{className:"w-32 pr-5",children:v("Moneda")}),Object(f.jsx)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:g.map((function(e,r){return Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(f.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e,checked:p&&p===e,onChange:function(){return h(e)}}),Object(f.jsx)("span",{className:"ml-1",children:v(e)})]},r)}))})]}),Object(f.jsxs)("div",{className:"flex flex-row",children:[Object(f.jsx)("p",{className:"w-32 pr-5",children:v("Vista")}),Object(f.jsxs)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:[Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(f.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:t.ByCoin,checked:x===t.ByCoin,onChange:y}),Object(f.jsx)("span",{className:"ml-1",children:v("Unificada")})]}),Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(f.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:t.ByProvider,checked:x===t.ByProvider,onChange:y}),Object(f.jsx)("span",{className:"ml-1",children:v("Por plataforma")})]})]})]}),i.length>0&&Object(f.jsxs)("div",{className:"flex flex-row",children:[Object(f.jsx)("p",{className:"w-32",children:v("Plataformas")}),Object(f.jsx)("div",{className:"flex flex-row flex-wrap w-full",children:i.map((function(e,r){return Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(f.jsx)("input",{type:"checkbox",className:"form-radio text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.id,onChange:O,checked:-1===j.indexOf(e.id)}),Object(f.jsx)("span",{className:"ml-1",children:e.name})]},r)}))})]})]}),Object(f.jsx)("div",{className:"mt-4 text-right",children:Object(f.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){return n(!1)},children:v("Guardar")})})]})})]})})})}!function(e){e.ByProvider="ByProvider",e.ByCoin="ByCoin"}(t||(t={}));var m=function(e,r){return Object(u.a)(e.blockedProviders,r.blockedProviders)&&e.viewType===r.viewType&&e.selectedCurrency===r.selectedCurrency};r.default=i.a.memo(x,m)}}]);