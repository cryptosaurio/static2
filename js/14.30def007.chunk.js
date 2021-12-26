(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[14],{156:function(e,t,n){"use strict";t.a=function(e,t){return e===t||e.length===t.length&&e.every((function(e,n){return e.id===t[n].id&&e.title===t[n].title}))}},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));var r,c=n(2),o=n(0),a=n.n(o),i=n(13),l=n(4),s=n(38),u=n(6),d=n(52),f=n(30),b=n(25),p=n(50),m=n(37),j=n(55);function h(e,t,n){void 0===t&&(t=r.All);var a=void 0===n?{}:n,i=a.initialFocus,l=a.containers,s=Object(o.useRef)("undefined"!==typeof window?document.activeElement:null),d=Object(o.useRef)(null),f=Object(j.a)(),b=Boolean(t&r.RestoreFocus),h=Boolean(t&r.InitialFocus);Object(o.useEffect)((function(){b&&(s.current=document.activeElement)}),[b]),Object(o.useEffect)((function(){if(b)return function(){Object(m.d)(s.current),s.current=null}}),[b]),Object(o.useEffect)((function(){if(h&&e.current){var t=document.activeElement;if(null==i?void 0:i.current){if((null==i?void 0:i.current)===t)return void(d.current=t)}else if(e.current.contains(t))return void(d.current=t);(null==i?void 0:i.current)?Object(m.d)(i.current):Object(m.e)(e.current,m.a.First)===m.b.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),d.current=document.activeElement}}),[e,i,h]),Object(p.a)("keydown",(function(n){t&r.TabLock&&e.current&&n.key===u.a.Tab&&(n.preventDefault(),Object(m.e)(e.current,(n.shiftKey?m.a.Previous:m.a.Next)|m.a.WrapAround)===m.b.Success&&(d.current=document.activeElement))})),Object(p.a)("focus",(function(n){if(t&r.FocusLock){var o=new Set(null==l?void 0:l.current);if(o.add(e),o.size){var a=d.current;if(a&&f.current){var i=n.target;i&&i instanceof HTMLElement?!function(e,t){for(var n,r=Object(c.a)(e);!(n=r()).done;){var o;if(null==(o=n.value.current)?void 0:o.contains(t))return!0}return!1}(o,i)?(n.preventDefault(),n.stopPropagation(),Object(m.d)(a)):(d.current=i,Object(m.d)(i)):Object(m.d)(d.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(r||(r={}));var O=n(7),v=new Set,g=new Map;function x(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function y(e){var t=g.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var w=Object(o.createContext)(!1);function k(e){return a.a.createElement(w.Provider,{value:e.force},e.children)}var C=n(53);function N(){var e=Object(o.useContext)(w),t=Object(o.useContext)(T),n=Object(o.useState)((function(){if(!e&&null!==t)return null;if("undefined"===typeof window)return null;var n=document.getElementById("headlessui-portal-root");if(n)return n;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=n[0],c=n[1];return Object(o.useEffect)((function(){e||null!==t&&c(t.current)}),[t,c,e]),r}var E=o.Fragment;function P(e){var t=e,n=N(),r=Object(o.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],c=Object(f.a)();return Object(O.a)((function(){if(n&&r)return n.appendChild(r),function(){var e;n&&(r&&(n.removeChild(r),n.childNodes.length<=0&&(null==(e=n.parentElement)||e.removeChild(n))))}}),[n,r]),c&&n&&r?Object(C.createPortal)(Object(l.d)({props:t,defaultTag:E,name:"Portal"}),r):null}var S=o.Fragment,T=Object(o.createContext)(null);P.Group=function(e){var t=e.target,n=Object(c.c)(e,["target"]);return a.a.createElement(T.Provider,{value:t},Object(l.d)({props:n,defaultTag:S,name:"Popover.Group"}))};var B=Object(o.createContext)(null);function A(){var e=Object(o.useContext)(B);if(null===e){var t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return e}var F,R,I,D,M=n(10),L=Object(o.createContext)((function(){}));function Y(e){var t=e.children,n=e.onUpdate,r=e.type,c=e.element,i=Object(o.useContext)(L),l=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n.apply(void 0,t),i.apply(void 0,t)}),[i,n]);return Object(O.a)((function(){return l(F.Add,r,c),function(){return l(F.Remove,r,c)}}),[l,r,c]),a.a.createElement(L.Provider,{value:l},t)}L.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(F||(F={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(I||(I={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(D||(D={}));var z=((R={})[D.SetTitleId]=function(e,t){return e.titleId===t.id?e:Object(c.b)({},e,{titleId:t.id})},R),G=Object(o.createContext)(null);function H(e){var t=Object(o.useContext)(G);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+K.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,H),n}return t}function W(e,t){return Object(i.a)(t.type,z,e,t)}G.displayName="DialogContext";var q=l.a.RenderStrategy|l.a.Static,J=Object(l.c)((function(e,t){var n,d=e.open,m=e.onClose,j=e.initialFocus,w=Object(c.c)(e,["open","onClose","initialFocus"]),C=Object(o.useState)(0),N=C[0],E=C[1],S=Object(M.c)();void 0===d&&null!==S&&(d=Object(i.a)(S,((n={})[M.b.Open]=!0,n[M.b.Closed]=!1,n)));var T=Object(o.useRef)(new Set),A=Object(o.useRef)(null),R=Object(s.a)(A,t),L=e.hasOwnProperty("open")||null!==S,z=e.hasOwnProperty("onClose");if(!L&&!z)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!L)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!z)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof d)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+d);if("function"!==typeof m)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+m);var H=d?I.Open:I.Closed,J=null!==S?S===M.b.Open:H===I.Open,U=Object(o.useReducer)(W,{titleId:null,descriptionId:null}),K=U[0],Q=U[1],V=Object(o.useCallback)((function(){return m(!1)}),[m]),X=Object(o.useCallback)((function(e){return Q({type:D.SetTitleId,id:e})}),[Q]),Z=Object(f.a)()&&H===I.Open,$=N>1,_=null!==Object(o.useContext)(G),ee=$?"parent":"leaf";h(A,Z?Object(i.a)(ee,{parent:r.RestoreFocus,leaf:r.All}):r.None,{initialFocus:j,containers:T}),function(e,t){void 0===t&&(t=!0),Object(O.a)((function(){if(t&&e.current){var n=e.current;v.add(n);for(var r,o=Object(c.a)(g.keys());!(r=o()).done;){var a=r.value;a.contains(n)&&(y(a),g.delete(a))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var t,n=Object(c.a)(v);!(t=n()).done;){var r=t.value;if(e.contains(r))return}1===v.size&&(g.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),x(e))}})),function(){if(v.delete(n),v.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!g.has(e)){for(var t,n=Object(c.a)(v);!(t=n()).done;){var r=t.value;if(e.contains(r))return}g.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),x(e)}}));else for(var e,t=Object(c.a)(g.keys());!(e=t()).done;){var r=e.value;y(r),g.delete(r)}}}}),[t])}(A,!!$&&Z),Object(p.a)("mousedown",(function(e){var t,n=e.target;H===I.Open&&($||(null==(t=A.current)?void 0:t.contains(n))||V())})),Object(p.a)("keydown",(function(e){e.key===u.a.Escape&&H===I.Open&&($||(e.preventDefault(),e.stopPropagation(),V()))})),Object(o.useEffect)((function(){if(H===I.Open&&!_){var e=document.documentElement.style.overflow,t=document.documentElement.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=n+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=t}}}),[H,_]),Object(o.useEffect)((function(){if(H===I.Open&&A.current){var e=new IntersectionObserver((function(e){for(var t,n=Object(c.a)(e);!(t=n()).done;){var r=t.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&V()}}));return e.observe(A.current),function(){return e.disconnect()}}}),[H,A,V]);var te=function(){var e=Object(o.useState)([]),t=e[0],n=e[1];return[t.length>0?t.join(" "):void 0,Object(o.useMemo)((function(){return function(e){var t=Object(o.useCallback)((function(e){return n((function(t){return[].concat(t,[e])})),function(){return n((function(t){var n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))}}),[]),r=Object(o.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return a.a.createElement(B.Provider,{value:r},e.children)}}),[n])]}(),ne=te[0],re=te[1],ce="headlessui-dialog-"+Object(b.a)(),oe=Object(o.useMemo)((function(){return[{dialogState:H,close:V,setTitleId:X},K]}),[H,K,V,X]),ae=Object(o.useMemo)((function(){return{open:H===I.Open}}),[H]),ie={ref:R,id:ce,role:"dialog","aria-modal":H===I.Open||void 0,"aria-labelledby":K.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()}},le=w;return a.a.createElement(Y,{type:"Dialog",element:A,onUpdate:Object(o.useCallback)((function(e,t,n){var r;"Dialog"===t&&Object(i.a)(e,((r={})[F.Add]=function(){T.current.add(n),E((function(e){return e+1}))},r[F.Remove]=function(){T.current.add(n),E((function(e){return e-1}))},r))}),[])},a.a.createElement(k,{force:!0},a.a.createElement(P,null,a.a.createElement(G.Provider,{value:oe},a.a.createElement(P.Group,{target:A},a.a.createElement(k,{force:!1},a.a.createElement(re,{slot:ae,name:"Dialog.Description"},Object(l.d)({props:Object(c.b)({},le,ie),slot:ae,defaultTag:"div",features:q,visible:J,name:"Dialog"}))))))))})),U=Object(l.c)((function e(t,n){var r=H([K.displayName,e.name].join("."))[0],a=r.dialogState,i=r.close,u=Object(s.a)(n),f="headlessui-dialog-overlay-"+Object(b.a)(),p=Object(o.useCallback)((function(e){if(e.target===e.currentTarget){if(Object(d.a)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}}),[i]),m=Object(o.useMemo)((function(){return{open:a===I.Open}}),[a]),j={ref:u,id:f,"aria-hidden":!0,onClick:p},h=t;return Object(l.d)({props:Object(c.b)({},h,j),slot:m,defaultTag:"div",name:"Dialog.Overlay"})}));var K=Object.assign(J,{Overlay:U,Title:function e(t){var n=H([K.displayName,e.name].join("."))[0],r=n.dialogState,a=n.setTitleId,i="headlessui-dialog-title-"+Object(b.a)();Object(o.useEffect)((function(){return a(i),function(){return a(null)}}),[i,a]);var s=Object(o.useMemo)((function(){return{open:r===I.Open}}),[r]),u={id:i},d=t;return Object(l.d)({props:Object(c.b)({},d,u),slot:s,defaultTag:"h2",name:"Dialog.Title"})},Description:function(e){var t=A(),n="headlessui-description-"+Object(b.a)();Object(O.a)((function(){return t.register(n)}),[n,t.register]);var r=e,o=Object(c.b)({},t.props,{id:n});return Object(l.d)({props:Object(c.b)({},r,o),slot:t.slot||{},defaultTag:"p",name:t.name||"Description"})}})},250:function(e,t,n){"use strict";n.r(t);var r=n(8),c=n(0),o=n.n(c),a=n(131),i=n(177),l=n(9),s=n(132),u=n(156),d=n(154),f=n(1);function b(e){var t=e.preferencesModalIsOpen,n=e.setPreferencesModalIsOpen,o=e.isMobile,u=e.availableCurrencies,b=e.tempSelectedCurrency,p=e.selectedCurrency,m=e.setTempSelectedCurrency,j=e.tempShowProviderIcon,h=e.setTempShowProviderIcon,O=e.availableCryptos,v=e.tempBlockedCryptos,g=e.handleSelectAllBlockedCryptosChange,x=e.onBlockedCryptosChange,y=e.availableNotP2PProviders,w=e.tempBlockedProviders,k=e.handleSelectAllBlockedProvidersChange,C=e.onBlockedProvidersChange,N=e.availableOnlyP2PProviders,E=e.tempBlockedP2PProviders,P=e.tempBlockedBlockchains,S=e.handleSelectAllBlockedP2PProvidersChange,T=e.handleSelectAllBlockedBlockchainsChange,B=e.onBlockedP2PProvidersChange,A=e.onBlockedBlockchainsChange,F=e.confirmFiltersChanged,R=Object(s.a)().t,I=Object(c.useState)(!1),D=Object(r.a)(I,2),M=D[0],L=D[1],Y=Object(c.useState)(!1),z=Object(r.a)(Y,2),G=z[0],H=z[1],W=Object(c.useState)(!1),q=Object(r.a)(W,2),J=q[0],U=q[1],K=Object(c.useState)(!1),Q=Object(r.a)(K,2),V=Q[0],X=Q[1];return Object(c.useEffect)((function(){v.length>0&&v.length!==O.length?L(!0):(v.length===O.length||0===v.length)&&L(!1),w.length>0&&w.length!==y.length?H(!0):(w.length===y.length||0===w.length)&&H(!1),E.length>0&&E.length!==N.length?U(!0):(E.length===N.length||0===E.length)&&U(!1),P.length>0&&P.length!==Object.keys(Object(d.b)()).length?X(!0):(P.length===Object.keys(Object(d.b)()).length||0===P.length)&&X(!1)}),[v,w,E,P]),Object(f.jsx)(a.a,{appear:!0,show:t,as:c.Fragment,children:Object(f.jsx)(i.a,{as:"div",className:"fixed inset-0 z-20 overflow-y-auto",onClose:function(){return n(!1)},children:Object(f.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(f.jsx)(i.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(f.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(f.jsx)(a.a.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(f.jsxs)("div",{className:"inline-block w-full max-w-5xl p-6 my-8 text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(f.jsxs)("div",{className:"flex justify-between",children:[Object(f.jsx)(i.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:R("Preferencias")}),Object(f.jsx)(l.A,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){return n(!1)}})]}),Object(f.jsxs)("div",{className:"mt-8 flex flex-col gap-3 text-white",children:[u.length>1&&Object(f.jsxs)("div",{className:"flex flex-row",children:[Object(f.jsx)("p",{className:"w-52",children:R("Moneda")}),Object(f.jsx)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:u.map((function(e,t){return Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-20",children:[Object(f.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e,checked:b&&b===e||!b&&p===e,onChange:function(){return m(e)}}),Object(f.jsx)("span",{className:"ml-1",children:R(e)})]},t)}))})]}),!o&&Object(f.jsxs)("div",{className:"flex flex-row",children:[Object(f.jsx)("p",{className:"w-52",children:R("Logo de plataformas")}),Object(f.jsxs)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:[Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-20",children:[Object(f.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",checked:j,onChange:function(){return h(!0)}}),Object(f.jsx)("span",{className:"ml-1",children:R("Si")})]}),Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-20",children:[Object(f.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",checked:!j,onChange:function(){return h(!1)}}),Object(f.jsx)("span",{className:"ml-1",children:R("No")})]})]})]}),O.length>0&&Object(f.jsxs)("div",{className:"flex flex-row",children:[Object(f.jsx)("p",{className:"w-52",children:R("Criptomonedas")}),Object(f.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(f.jsx)("input",{ref:function(e){return e&&(e.indeterminate=M)},checked:0===v.length,onChange:function(e){return g(e)},type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(f.jsx)("span",{className:"ml-1",children:R("Todas")})]}),O.map((function(e,t){return Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(f.jsx)("input",{disabled:"BTC"===e||"ETH"===e,checked:!v.includes(e),onChange:x,type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e}),Object(f.jsx)("span",{className:"ml-1",children:e})]},t)}))]})]}),Object(f.jsxs)("div",{className:"flex flex-row",children:[Object(f.jsx)("p",{className:"w-52",children:R("Blockchain")}),Object(f.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(f.jsx)("input",{ref:function(e){return e&&(e.indeterminate=V)},checked:0===P.length,onChange:function(e){return T(e)},type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(f.jsx)("span",{className:"ml-1",children:R("Todas")})]}),Object.values(Object(d.b)()).map((function(e,t){return Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(f.jsx)("input",{checked:!P.includes(e.code),onChange:A,type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.code}),Object(f.jsx)("span",{className:"ml-1",children:e.name})]},t)}))]})]}),y.length>0&&Object(f.jsxs)("div",{className:"flex flex-row",children:[Object(f.jsx)("p",{className:"w-52",children:R("Plataformas")}),Object(f.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(f.jsx)("input",{ref:function(e){return e&&(e.indeterminate=G)},checked:0===w.length,onChange:function(e){return k(e)},type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(f.jsx)("span",{className:"ml-1",children:R("Todas")})]}),y.map((function(e,t){return Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(f.jsx)("input",{checked:!w.includes(e.id),onChange:C,type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.id}),Object(f.jsx)("span",{className:"ml-1",children:e.name})]},t)}))]})]}),N.length>0&&Object(f.jsxs)("div",{className:"flex flex-row",children:[Object(f.jsx)("p",{className:"w-52",children:R("Plataformas P2P")}),Object(f.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(f.jsx)("input",{ref:function(e){return e&&(e.indeterminate=J)},checked:0===E.length,onChange:function(e){return S(e)},type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(f.jsx)("span",{className:"ml-1",children:R("Todas")})]}),N.map((function(e,t){return Object(f.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(f.jsx)("input",{checked:!E.includes(e.id),onChange:B,type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.id}),Object(f.jsx)("span",{className:"ml-1",children:e.name})]},t)}))]})]})]}),Object(f.jsx)("div",{className:"text-right sticky bottom-6 w-min float-right",children:Object(f.jsx)("button",{type:"button",className:"cursor-pointer inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){n(!1),F()},children:R("Guardar")})})]})})]})})})}var p=function(e,t){return e.tempSelectedCurrency===t.tempSelectedCurrency&&e.tempShowProviderIcon===t.tempShowProviderIcon&&Object(u.a)(e.tempBlockedCryptos,t.tempBlockedCryptos)&&Object(u.a)(e.tempBlockedProviders,t.tempBlockedProviders)&&Object(u.a)(e.tempBlockedP2PProviders,t.tempBlockedP2PProviders)&&Object(u.a)(e.tempBlockedBlockchains,t.tempBlockedBlockchains)};t.default=o.a.memo(b,p)}}]);