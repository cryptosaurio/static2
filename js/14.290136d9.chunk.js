(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[14],{118:function(e,t,n){"use strict";t.a=function(e,t){return e===t||e.length===t.length&&e.every((function(e,n){return e.id===t[n].id&&e.title===t[n].title}))}},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));var r,c=n(2),o=n(0),a=n.n(o),i=n(13),l=n(4),s=n(35),u=n(6),d=n(47),f=n(29),p=n(23),b=n(44),m=n(34),j=n(50);function h(e,t,n){void 0===t&&(t=r.All);var a=void 0===n?{}:n,i=a.initialFocus,l=a.containers,s=Object(o.useRef)("undefined"!==typeof window?document.activeElement:null),d=Object(o.useRef)(null),f=Object(j.a)(),p=Boolean(t&r.RestoreFocus),h=Boolean(t&r.InitialFocus);Object(o.useEffect)((function(){p&&(s.current=document.activeElement)}),[p]),Object(o.useEffect)((function(){if(p)return function(){Object(m.d)(s.current),s.current=null}}),[p]),Object(o.useEffect)((function(){if(h&&e.current){var t=document.activeElement;if(null==i?void 0:i.current){if((null==i?void 0:i.current)===t)return void(d.current=t)}else if(e.current.contains(t))return void(d.current=t);(null==i?void 0:i.current)?Object(m.d)(i.current):Object(m.e)(e.current,m.a.First)===m.b.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),d.current=document.activeElement}}),[e,i,h]),Object(b.a)("keydown",(function(n){t&r.TabLock&&e.current&&n.key===u.a.Tab&&(n.preventDefault(),Object(m.e)(e.current,(n.shiftKey?m.a.Previous:m.a.Next)|m.a.WrapAround)===m.b.Success&&(d.current=document.activeElement))})),Object(b.a)("focus",(function(n){if(t&r.FocusLock){var o=new Set(null==l?void 0:l.current);if(o.add(e),o.size){var a=d.current;if(a&&f.current){var i=n.target;i&&i instanceof HTMLElement?!function(e,t){for(var n,r=Object(c.a)(e);!(n=r()).done;){var o;if(null==(o=n.value.current)?void 0:o.contains(t))return!0}return!1}(o,i)?(n.preventDefault(),n.stopPropagation(),Object(m.d)(a)):(d.current=i,Object(m.d)(i)):Object(m.d)(d.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(r||(r={}));var v=n(7),O=new Set,g=new Map;function x(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function y(e){var t=g.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var w=Object(o.createContext)(!1);function C(e){return a.a.createElement(w.Provider,{value:e.force},e.children)}var k=n(48);function N(){var e=Object(o.useContext)(w),t=Object(o.useContext)(T),n=Object(o.useState)((function(){if(!e&&null!==t)return null;if("undefined"===typeof window)return null;var n=document.getElementById("headlessui-portal-root");if(n)return n;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=n[0],c=n[1];return Object(o.useEffect)((function(){e||null!==t&&c(t.current)}),[t,c,e]),r}var E=o.Fragment;function P(e){var t=e,n=N(),r=Object(o.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],c=Object(f.a)();return Object(v.a)((function(){if(n&&r)return n.appendChild(r),function(){var e;n&&(r&&(n.removeChild(r),n.childNodes.length<=0&&(null==(e=n.parentElement)||e.removeChild(n))))}}),[n,r]),c&&n&&r?Object(k.createPortal)(Object(l.d)({props:t,defaultTag:E,name:"Portal"}),r):null}var S=o.Fragment,T=Object(o.createContext)(null);P.Group=function(e){var t=e.target,n=Object(c.c)(e,["target"]);return a.a.createElement(T.Provider,{value:t},Object(l.d)({props:n,defaultTag:S,name:"Popover.Group"}))};var F=Object(o.createContext)(null);function R(){var e=Object(o.useContext)(F);if(null===e){var t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,R),t}return e}var I,A,D,B,M=n(10),L=Object(o.createContext)((function(){}));function Y(e){var t=e.children,n=e.onUpdate,r=e.type,c=e.element,i=Object(o.useContext)(L),l=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n.apply(void 0,t),i.apply(void 0,t)}),[i,n]);return Object(v.a)((function(){return l(I.Add,r,c),function(){return l(I.Remove,r,c)}}),[l,r,c]),a.a.createElement(L.Provider,{value:l},t)}L.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(I||(I={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(D||(D={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(B||(B={}));var z=((A={})[B.SetTitleId]=function(e,t){return e.titleId===t.id?e:Object(c.b)({},e,{titleId:t.id})},A),G=Object(o.createContext)(null);function H(e){var t=Object(o.useContext)(G);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+K.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,H),n}return t}function W(e,t){return Object(i.a)(t.type,z,e,t)}G.displayName="DialogContext";var q=l.a.RenderStrategy|l.a.Static,J=Object(l.c)((function(e,t){var n,d=e.open,m=e.onClose,j=e.initialFocus,w=Object(c.c)(e,["open","onClose","initialFocus"]),k=Object(o.useState)(0),N=k[0],E=k[1],S=Object(M.c)();void 0===d&&null!==S&&(d=Object(i.a)(S,((n={})[M.b.Open]=!0,n[M.b.Closed]=!1,n)));var T=Object(o.useRef)(new Set),R=Object(o.useRef)(null),A=Object(s.a)(R,t),L=e.hasOwnProperty("open")||null!==S,z=e.hasOwnProperty("onClose");if(!L&&!z)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!L)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!z)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof d)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+d);if("function"!==typeof m)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+m);var H=d?D.Open:D.Closed,J=null!==S?S===M.b.Open:H===D.Open,U=Object(o.useReducer)(W,{titleId:null,descriptionId:null}),K=U[0],Q=U[1],V=Object(o.useCallback)((function(){return m(!1)}),[m]),X=Object(o.useCallback)((function(e){return Q({type:B.SetTitleId,id:e})}),[Q]),Z=Object(f.a)()&&H===D.Open,$=N>1,_=null!==Object(o.useContext)(G),ee=$?"parent":"leaf";h(R,Z?Object(i.a)(ee,{parent:r.RestoreFocus,leaf:r.All}):r.None,{initialFocus:j,containers:T}),function(e,t){void 0===t&&(t=!0),Object(v.a)((function(){if(t&&e.current){var n=e.current;O.add(n);for(var r,o=Object(c.a)(g.keys());!(r=o()).done;){var a=r.value;a.contains(n)&&(y(a),g.delete(a))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var t,n=Object(c.a)(O);!(t=n()).done;){var r=t.value;if(e.contains(r))return}1===O.size&&(g.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),x(e))}})),function(){if(O.delete(n),O.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!g.has(e)){for(var t,n=Object(c.a)(O);!(t=n()).done;){var r=t.value;if(e.contains(r))return}g.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),x(e)}}));else for(var e,t=Object(c.a)(g.keys());!(e=t()).done;){var r=e.value;y(r),g.delete(r)}}}}),[t])}(R,!!$&&Z),Object(b.a)("mousedown",(function(e){var t,n=e.target;H===D.Open&&($||(null==(t=R.current)?void 0:t.contains(n))||V())})),Object(b.a)("keydown",(function(e){e.key===u.a.Escape&&H===D.Open&&($||(e.preventDefault(),e.stopPropagation(),V()))})),Object(o.useEffect)((function(){if(H===D.Open&&!_){var e=document.documentElement.style.overflow,t=document.documentElement.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=n+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=t}}}),[H,_]),Object(o.useEffect)((function(){if(H===D.Open&&R.current){var e=new IntersectionObserver((function(e){for(var t,n=Object(c.a)(e);!(t=n()).done;){var r=t.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&V()}}));return e.observe(R.current),function(){return e.disconnect()}}}),[H,R,V]);var te=function(){var e=Object(o.useState)([]),t=e[0],n=e[1];return[t.length>0?t.join(" "):void 0,Object(o.useMemo)((function(){return function(e){var t=Object(o.useCallback)((function(e){return n((function(t){return[].concat(t,[e])})),function(){return n((function(t){var n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))}}),[]),r=Object(o.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return a.a.createElement(F.Provider,{value:r},e.children)}}),[n])]}(),ne=te[0],re=te[1],ce="headlessui-dialog-"+Object(p.a)(),oe=Object(o.useMemo)((function(){return[{dialogState:H,close:V,setTitleId:X},K]}),[H,K,V,X]),ae=Object(o.useMemo)((function(){return{open:H===D.Open}}),[H]),ie={ref:A,id:ce,role:"dialog","aria-modal":H===D.Open||void 0,"aria-labelledby":K.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()}},le=w;return a.a.createElement(Y,{type:"Dialog",element:R,onUpdate:Object(o.useCallback)((function(e,t,n){var r;"Dialog"===t&&Object(i.a)(e,((r={})[I.Add]=function(){T.current.add(n),E((function(e){return e+1}))},r[I.Remove]=function(){T.current.add(n),E((function(e){return e-1}))},r))}),[])},a.a.createElement(C,{force:!0},a.a.createElement(P,null,a.a.createElement(G.Provider,{value:oe},a.a.createElement(P.Group,{target:R},a.a.createElement(C,{force:!1},a.a.createElement(re,{slot:ae,name:"Dialog.Description"},Object(l.d)({props:Object(c.b)({},le,ie),slot:ae,defaultTag:"div",features:q,visible:J,name:"Dialog"}))))))))})),U=Object(l.c)((function e(t,n){var r=H([K.displayName,e.name].join("."))[0],a=r.dialogState,i=r.close,u=Object(s.a)(n),f="headlessui-dialog-overlay-"+Object(p.a)(),b=Object(o.useCallback)((function(e){if(e.target===e.currentTarget){if(Object(d.a)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}}),[i]),m=Object(o.useMemo)((function(){return{open:a===D.Open}}),[a]),j={ref:u,id:f,"aria-hidden":!0,onClick:b},h=t;return Object(l.d)({props:Object(c.b)({},h,j),slot:m,defaultTag:"div",name:"Dialog.Overlay"})}));var K=Object.assign(J,{Overlay:U,Title:function e(t){var n=H([K.displayName,e.name].join("."))[0],r=n.dialogState,a=n.setTitleId,i="headlessui-dialog-title-"+Object(p.a)();Object(o.useEffect)((function(){return a(i),function(){return a(null)}}),[i,a]);var s=Object(o.useMemo)((function(){return{open:r===D.Open}}),[r]),u={id:i},d=t;return Object(l.d)({props:Object(c.b)({},d,u),slot:s,defaultTag:"h2",name:"Dialog.Title"})},Description:function(e){var t=R(),n="headlessui-description-"+Object(p.a)();Object(v.a)((function(){return t.register(n)}),[n,t.register]);var r=e,o=Object(c.b)({},t.props,{id:n});return Object(l.d)({props:Object(c.b)({},r,o),slot:t.slot||{},defaultTag:"p",name:t.name||"Description"})}})},211:function(e,t,n){"use strict";n.r(t);var r=n(8),c=n(0),o=n.n(c),a=n(94),i=n(139),l=n(9),s=n(95),u=n(118),d=n(1);function f(e){var t=e.preferencesModalIsOpen,n=e.setPreferencesModalIsOpen,o=e.isMobile,u=e.availableCurrencies,f=e.tempSelectedCurrency,p=e.selectedCurrency,b=e.setTempSelectedCurrency,m=e.tempShowProviderIcon,j=e.setTempShowProviderIcon,h=e.availableCryptos,v=e.tempBlockedCryptos,O=e.handleSelectAllBlockedCryptosChange,g=e.onBlockedCryptosChange,x=e.availableNotP2PProviders,y=e.tempBlockedProviders,w=e.handleSelectAllBlockedProvidersChange,C=e.onBlockedProvidersChange,k=e.availableOnlyP2PProviders,N=e.tempBlockedP2PProviders,E=e.handleSelectAllBlockedP2PProvidersChange,P=e.onBlockedP2PProvidersChange,S=e.confirmFiltersChanged,T=Object(s.a)().t,F=Object(c.useState)(!1),R=Object(r.a)(F,2),I=R[0],A=R[1],D=Object(c.useState)(!1),B=Object(r.a)(D,2),M=B[0],L=B[1],Y=Object(c.useState)(!1),z=Object(r.a)(Y,2),G=z[0],H=z[1];return Object(c.useEffect)((function(){v.length>0&&v.length!==h.length?A(!0):(v.length===h.length||0===v.length)&&A(!1),y.length>0&&y.length!==x.length?L(!0):(y.length===x.length||0===y.length)&&L(!1),N.length>0&&N.length!==k.length?H(!0):(N.length===k.length||0===N.length)&&H(!1)}),[v,y,N]),Object(d.jsx)(a.a,{appear:!0,show:t,as:c.Fragment,children:Object(d.jsx)(i.a,{as:"div",className:"fixed inset-0 z-20 overflow-y-auto",onClose:function(){return n(!1)},children:Object(d.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(d.jsx)(i.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(d.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(d.jsx)(a.a.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(d.jsxs)("div",{className:"inline-block w-full max-w-5xl p-6 my-8 text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(d.jsxs)("div",{className:"flex justify-between",children:[Object(d.jsx)(i.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:T("Preferencias")}),Object(d.jsx)(l.z,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){return n(!1)}})]}),Object(d.jsxs)("div",{className:"mt-8 flex flex-col gap-3 text-white",children:[u.length>1&&Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{className:"w-52",children:T("Moneda")}),Object(d.jsx)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:u.map((function(e,t){return Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-20",children:[Object(d.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e,checked:f&&f===e||!f&&p===e,onChange:function(){return b(e)}}),Object(d.jsx)("span",{className:"ml-1",children:T(e)})]},t)}))})]}),!o&&Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{className:"w-52",children:T("Logo de plataformas")}),Object(d.jsxs)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:[Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-20",children:[Object(d.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",checked:m,onChange:function(){return j(!0)}}),Object(d.jsx)("span",{className:"ml-1",children:T("Si")})]}),Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-20",children:[Object(d.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",checked:!m,onChange:function(){return j(!1)}}),Object(d.jsx)("span",{className:"ml-1",children:T("No")})]})]})]}),h.length>0&&Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{className:"w-52",children:T("Criptomonedas")}),Object(d.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(d.jsx)("input",{ref:function(e){return e&&(e.indeterminate=I)},checked:0===v.length,onChange:function(e){return O(e)},type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(d.jsx)("span",{className:"ml-1",children:T("Todas")})]}),h.map((function(e,t){return Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(d.jsx)("input",{disabled:"BTC"===e||"ETH"===e,checked:!v.includes(e),onChange:g,type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e}),Object(d.jsx)("span",{className:"ml-1",children:e})]},t)}))]})]}),x.length>0&&Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{className:"w-52",children:T("Plataformas")}),Object(d.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(d.jsx)("input",{ref:function(e){return e&&(e.indeterminate=M)},checked:0===y.length,onChange:function(e){return w(e)},type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(d.jsx)("span",{className:"ml-1",children:T("Todas")})]}),x.map((function(e,t){return Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(d.jsx)("input",{checked:!y.includes(e.id),onChange:C,type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.id}),Object(d.jsx)("span",{className:"ml-1",children:e.name})]},t)}))]})]}),k.length>0&&Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{className:"w-52",children:T("Plataformas P2P")}),Object(d.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(d.jsx)("input",{ref:function(e){return e&&(e.indeterminate=G)},checked:0===N.length,onChange:function(e){return E(e)},type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(d.jsx)("span",{className:"ml-1",children:T("Todas")})]}),k.map((function(e,t){return Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(d.jsx)("input",{checked:!N.includes(e.id),onChange:P,type:"checkbox",className:"cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.id}),Object(d.jsx)("span",{className:"ml-1",children:e.name})]},t)}))]})]})]}),Object(d.jsx)("div",{className:"text-right sticky bottom-6 w-min float-right",children:Object(d.jsx)("button",{type:"button",className:"cursor-pointer inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){n(!1),S()},children:T("Guardar")})})]})})]})})})}var p=function(e,t){return e.tempSelectedCurrency===t.tempSelectedCurrency&&e.tempShowProviderIcon===t.tempShowProviderIcon&&Object(u.a)(e.tempBlockedCryptos,t.tempBlockedCryptos)&&Object(u.a)(e.tempBlockedProviders,t.tempBlockedProviders)&&Object(u.a)(e.tempBlockedP2PProviders,t.tempBlockedP2PProviders)};t.default=o.a.memo(f,p)}}]);