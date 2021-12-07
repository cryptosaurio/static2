(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[10],{129:function(e,n,s){"use strict";s.r(n),s.d(n,"PreferencesModal",(function(){return d}));var c=s(0),l=s.n(c),r=s(87),t=s(130),a=s(15),i=s(88),o=s(1);function d(e){var n=e.preferencesModalIsOpen,s=e.setPreferencesModalIsOpen,l=e.isMobile,d=e.availableCurrencies,u=e.tempSelectedCurrency,x=e.selectedCurrency,f=e.setTempSelectedCurrency,m=e.tempShowProviderIcon,j=e.setTempShowProviderIcon,h=e.availableCryptos,b=e.selectAllCryptosCheckboxIsIndeterminate,p=e.tempBlockedCryptos,g=e.handleSelectAllBlockedCryptosChange,O=e.onBlockedCryptosChange,N=e.availableNotP2PProviders,y=e.selectAllProvidersCheckboxIsIndeterminate,v=e.tempBlockedProviders,w=e.handleSelectAllBlockedProvidersChange,k=e.onBlockedProvidersChange,C=e.availableOnlyP2PProviders,P=e.selectAllProvidersP2PCheckboxIsIndeterminate,B=e.tempBlockedP2PProviders,I=e.handleSelectAllBlockedP2PProvidersChange,T=e.onBlockedP2PProvidersChange,S=e.confirmFiltersChanged,A=Object(i.a)().t;return Object(o.jsx)(r.a,{appear:!0,show:n,as:c.Fragment,children:Object(o.jsx)(t.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){return s(!1)},children:Object(o.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(o.jsx)(t.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(o.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(o.jsx)(r.a.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(o.jsxs)("div",{className:"inline-block w-full max-w-5xl p-6 my-8 text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(o.jsxs)("div",{className:"flex justify-between",children:[Object(o.jsx)(t.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:A("Preferencias")}),Object(o.jsx)(a.q,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){return s(!1)}})]}),Object(o.jsxs)("div",{className:"mt-8 flex flex-col gap-3 text-white",children:[d.length>1&&Object(o.jsxs)("div",{className:"flex flex-row",children:[Object(o.jsx)("p",{className:"w-52",children:A("Moneda")}),Object(o.jsx)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:d.map((function(e,n){return Object(o.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-20",children:[Object(o.jsx)("input",{type:"radio",className:"form-radio text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e,checked:u&&u===e||!u&&x===e,onChange:function(){return f(e)}}),Object(o.jsx)("span",{className:"ml-1",children:A(e)})]},n)}))})]}),!l&&Object(o.jsxs)("div",{className:"flex flex-row",children:[Object(o.jsx)("p",{className:"w-52",children:A("Logo de plataformas")}),Object(o.jsxs)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:[Object(o.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-20",children:[Object(o.jsx)("input",{type:"radio",className:"form-radio text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",checked:m,onChange:function(){return j(!0)}}),Object(o.jsx)("span",{className:"ml-1",children:A("Si")})]}),Object(o.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-20",children:[Object(o.jsx)("input",{type:"radio",className:"form-radio text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",checked:!m,onChange:function(){return j(!1)}}),Object(o.jsx)("span",{className:"ml-1",children:A("No")})]})]})]}),h.length>0&&Object(o.jsxs)("div",{className:"flex flex-row",children:[Object(o.jsx)("p",{className:"w-52",children:A("Criptomonedas")}),Object(o.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(o.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(o.jsx)("input",{ref:function(e){return e&&(e.indeterminate=b)},checked:0===p.length,onChange:function(e){return g(e)},type:"checkbox",className:"text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(o.jsx)("span",{className:"ml-1",children:A("Todas")})]}),h.map((function(e,n){return Object(o.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(o.jsx)("input",{disabled:"BTC"===e||"ETH"===e,checked:!p.includes(e),onChange:O,type:"checkbox",className:"text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e}),Object(o.jsx)("span",{className:"ml-1",children:e})]},n)}))]})]}),N.length>0&&Object(o.jsxs)("div",{className:"flex flex-row",children:[Object(o.jsx)("p",{className:"w-52",children:A("Plataformas")}),Object(o.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(o.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(o.jsx)("input",{ref:function(e){return e&&(e.indeterminate=y)},checked:0===v.length,onChange:function(e){return w(e)},type:"checkbox",className:"text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(o.jsx)("span",{className:"ml-1",children:A("Todas")})]}),N.map((function(e,n){return Object(o.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(o.jsx)("input",{checked:!v.includes(e.id),onChange:k,type:"checkbox",className:"text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.id}),Object(o.jsx)("span",{className:"ml-1",children:e.name})]},n)}))]})]}),C.length>0&&Object(o.jsxs)("div",{className:"flex flex-row",children:[Object(o.jsx)("p",{className:"w-52",children:A("Plataformas P2P")}),Object(o.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(o.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(o.jsx)("input",{ref:function(e){return e&&(e.indeterminate=P)},checked:0===B.length,onChange:function(e){return I(e)},type:"checkbox",className:"text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(o.jsx)("span",{className:"ml-1",children:A("Todas")})]}),C.map((function(e,n){return Object(o.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(o.jsx)("input",{checked:!B.includes(e.id),onChange:T,type:"checkbox",className:"text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.id}),Object(o.jsx)("span",{className:"ml-1",children:e.name})]},n)}))]})]})]}),Object(o.jsx)("div",{className:"text-right sticky bottom-6",children:Object(o.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){s(!1),S()},children:A("Guardar")})})]})})]})})})}var u=function(e,n){return!0};n.default=l.a.memo(d,u)}}]);