(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[42],{198:function(e,n,c){"use strict";n.a=function(e,n){return e===n||e.length===n.length&&e.every((function(e,c){return e.id===n[c].id&&e.title===n[c].title}))}},355:function(e,n,c){"use strict";c.r(n);var t=c(149),s=c(12),l=c(0),r=c.n(l),a=c(211),i=c(226),o=c(160),d=c(138),u=c(198),h=c(206),m=c(175),j=c(2);function f(e){var n=e.preferencesModalIsOpen,c=e.setPreferencesModalIsOpen,r=e.isMobile,u=e.availableCurrencies,f=e.tempSelectedCurrency,x=e.selectedCurrency,p=e.setTempSelectedCurrency,b=e.tempShowProviderIcon,g=e.setTempShowProviderIcon,O=e.availableCryptos,y=e.tempBlockedCryptos,N=e.handleSelectAllBlockedCryptosChange,k=e.onBlockedCryptosChange,v=e.availableNotP2PProviders,w=e.tempBlockedProviders,C=e.handleSelectAllBlockedProvidersChange,P=e.onBlockedProvidersChange,B=e.availableOnlyP2PProviders,S=e.tempBlockedP2PProviders,T=e.tempBlockedBlockchains,I=e.handleSelectAllBlockedP2PProvidersChange,F=e.handleSelectAllBlockedBlockchainsChange,A=e.onBlockedP2PProvidersChange,M=e.onBlockedBlockchainsChange,E=e.confirmFiltersChanged,J=Object(d.a)().t,z=Object(l.useState)(!1),G=Object(s.a)(z,2),H=G[0],L=G[1],q=Object(l.useState)(!1),D=Object(s.a)(q,2),K=D[0],Q=D[1],R=Object(l.useState)(!1),U=Object(s.a)(R,2),V=U[0],W=U[1],X=Object(l.useState)(!1),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1];return Object(l.useEffect)((function(){y.length>0&&y.length!==O.length?L(!0):(y.length===O.length||0===y.length)&&L(!1),w.length>0&&w.length!==v.length?Q(!0):(w.length===v.length||0===w.length)&&Q(!1),S.length>0&&S.length!==B.length?W(!0):(S.length===B.length||0===S.length)&&W(!1),T.length>0&&T.length!==Object.keys(Object(h.b)()).length?$(!0):(T.length===Object.keys(Object(h.b)()).length||0===T.length)&&$(!1)}),[y,w,S,T]),Object(j.jsx)(a.a,{appear:!0,show:n,as:l.Fragment,children:Object(j.jsx)(i.a,{as:"div",className:"fixed inset-0 z-50 overflow-y-auto",onClose:function(){return c(!1)},children:Object(j.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(j.jsx)(i.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(j.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(j.jsx)(a.a.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(j.jsxs)("div",{className:"inline-block w-full max-w-5xl p-6 my-8 text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(j.jsxs)("div",{className:"flex justify-between",children:[Object(j.jsx)(i.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:J("Preferencias")}),Object(j.jsx)(o.E,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){return c(!1)}})]}),Object(j.jsxs)("div",{className:"mt-8 flex flex-col gap-3 text-white",children:[u.length>1&&Object(j.jsxs)("div",{className:"flex flex-row",children:[Object(j.jsx)("p",{className:"w-52",children:J("Moneda")}),Object(j.jsx)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:u.map((function(e,n){return Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-20",children:[Object(j.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e,checked:f&&f===e||!f&&x===e,onChange:function(){return p(e)}}),Object(j.jsx)("span",{className:"ml-1",children:J(e)})]},n)}))})]}),!r&&Object(j.jsxs)("div",{className:"flex flex-row",children:[Object(j.jsx)("p",{className:"w-52",children:J("Logo de plataformas")}),Object(j.jsxs)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:[Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-20",children:[Object(j.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",checked:b,onChange:function(){return g(!0)}}),Object(j.jsx)("span",{className:"ml-1",children:J("Si")})]}),Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-20",children:[Object(j.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",checked:!b,onChange:function(){return g(!1)}}),Object(j.jsx)("span",{className:"ml-1",children:J("No")})]})]})]}),O.length>0&&Object(j.jsxs)("div",{className:"flex flex-row",children:[Object(j.jsx)("p",{className:"w-52",children:J("Criptomonedas")}),Object(j.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(j.jsx)("input",{ref:function(e){return e&&(e.indeterminate=H)},checked:0===y.length,onChange:function(e){return N(e)},type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(j.jsx)("span",{className:"ml-1",children:J("Todas")})]}),Object(t.a)(O).sort((function(e,n){return Object(m.a)(e).name.localeCompare(Object(m.a)(n).name)})).map((function(e,n){return Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(j.jsx)("input",{disabled:"BTC"===e||"ETH"===e,checked:!y.includes(e),onChange:k,type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e}),Object(j.jsx)("span",{className:"ml-1",children:Object(m.a)(e).name})]},n)}))]})]}),Object(j.jsxs)("div",{className:"flex flex-row",children:[Object(j.jsx)("p",{className:"w-52",children:J("Blockchain")}),Object(j.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(j.jsx)("input",{ref:function(e){return e&&(e.indeterminate=Z)},checked:0===T.length,onChange:function(e){return F(e)},type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(j.jsx)("span",{className:"ml-1",children:J("Todas")})]}),Object(t.a)(Object.values(Object(h.b)())).sort((function(e,n){return e.name.localeCompare(n.name)})).map((function(e,n){return Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(j.jsx)("input",{checked:!T.includes(e.code),onChange:M,type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.code}),Object(j.jsx)("span",{className:"ml-1",children:e.name})]},n)}))]})]}),v.length>0&&Object(j.jsxs)("div",{className:"flex flex-row",children:[Object(j.jsx)("p",{className:"w-52",children:J("Plataformas")}),Object(j.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(j.jsx)("input",{ref:function(e){return e&&(e.indeterminate=K)},checked:0===w.length,onChange:function(e){return C(e)},type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(j.jsx)("span",{className:"ml-1",children:J("Todas")})]}),v.map((function(e,n){return Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(j.jsx)("input",{checked:!w.includes(e.id),onChange:P,type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.id}),Object(j.jsx)("span",{className:"ml-1",children:e.name})]},n)}))]})]}),B.length>0&&Object(j.jsxs)("div",{className:"flex flex-row",children:[Object(j.jsx)("p",{className:"w-52",children:J("Plataformas P2P")}),Object(j.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(j.jsx)("input",{ref:function(e){return e&&(e.indeterminate=V)},checked:0===S.length,onChange:function(e){return I(e)},type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(j.jsx)("span",{className:"ml-1",children:J("Todas")})]}),B.map((function(e,n){return Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(j.jsx)("input",{checked:!S.includes(e.id),onChange:A,type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.id}),Object(j.jsx)("span",{className:"ml-1",children:e.name})]},n)}))]})]})]}),Object(j.jsx)("div",{className:"text-right sticky bottom-6 w-min float-right",children:Object(j.jsx)("button",{type:"button",className:"cursor-pointer inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){c(!1),E()},children:J("Guardar")})})]})})]})})})}var x=function(e,n){return e.tempSelectedCurrency===n.tempSelectedCurrency&&e.tempShowProviderIcon===n.tempShowProviderIcon&&Object(u.a)(e.tempBlockedCryptos,n.tempBlockedCryptos)&&Object(u.a)(e.tempBlockedProviders,n.tempBlockedProviders)&&Object(u.a)(e.tempBlockedP2PProviders,n.tempBlockedP2PProviders)&&Object(u.a)(e.tempBlockedBlockchains,n.tempBlockedBlockchains)};n.default=r.a.memo(f,x)}}]);