(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[7,31],{136:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i}))},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),i="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},138:function(e,t,n){"use strict";function r(e,t){if(e in t){for(var n=t[e],i=arguments.length,a=new Array(i>2?i-2:0),o=2;o<i;o++)a[o-2]=arguments[o];return"function"===typeof n?n.apply(void 0,a):n}var c=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(c,r),c}n.d(t,"a",(function(){return r}))},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u}));var r,i,a=n(136),o=n(0),c=n(138);function u(e){var t=e.props,n=e.slot,o=e.defaultTag,u=e.features,l=e.visible,d=void 0===l||l,f=e.name;if(d)return s(t,n,o,f);var b=null!=u?u:r.None;if(b&r.Static){var m=t.static,p=void 0!==m&&m,v=Object(a.c)(t,["static"]);if(p)return s(v,n,o,f)}if(b&r.RenderStrategy){var j,O=t.unmount,g=void 0===O||O,h=Object(a.c)(t,["unmount"]),x=g?i.Unmount:i.Hidden;return Object(c.a)(x,((j={})[i.Unmount]=function(){return null},j[i.Hidden]=function(){return s(Object(a.b)({},h,{hidden:!0,style:{display:"none"}}),n,o,f)},j))}return s(t,n,o,f)}function s(e,t,n,r){var i;void 0===t&&(t={});var c=d(e,["unmount","static"]),u=c.as,s=void 0===u?n:u,l=c.children,f=c.refName,b=void 0===f?"ref":f,m=Object(a.c)(c,["as","children","refName"]),p=void 0!==e.ref?((i={})[b]=e.ref,i):{},v="function"===typeof l?l(t):l;if(m.className&&"function"===typeof m.className&&(m.className=m.className(t)),s===o.Fragment&&Object.keys(m).length>0){if(!Object(o.isValidElement)(v)||Array.isArray(v)&&v.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(m).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return Object(o.cloneElement)(v,Object.assign({},function(e,t,n){for(var r,i=Object.assign({},e),o=function(){var n,a=r.value;void 0!==e[a]&&void 0!==t[a]&&Object.assign(i,((n={})[a]=function(n){n.defaultPrevented||e[a](n),n.defaultPrevented||t[a](n)},n))},c=Object(a.a)(n);!(r=c()).done;)o();return i}(function(e){var t=Object.assign({},e);for(var n in t)void 0===t[n]&&delete t[n];return t}(d(m,["ref"])),v.props,["onClick"]),p))}return Object(o.createElement)(s,Object.assign({},d(m,["ref"]),s!==o.Fragment&&p),v)}function l(e){var t;return Object.assign(Object(o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function d(e,t){void 0===t&&(t=[]);for(var n,r=Object.assign({},e),i=Object(a.a)(t);!(n=i()).done;){var o=n.value;o in r&&delete r[o]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(i||(i={}))},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),i={serverHandoffComplete:!1};function a(){var e=Object(r.useState)(i.serverHandoffComplete),t=e[0],n=e[1];return Object(r.useEffect)((function(){!0!==t&&n(!0)}),[t]),Object(r.useEffect)((function(){!1===i.serverHandoffComplete&&(i.serverHandoffComplete=!0)}),[]),t}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),i=n(137),a=n(141),o=0;function c(){return++o}function u(){var e=Object(a.a)(),t=Object(r.useState)(e?c:null),n=t[0],o=t[1];return Object(i.a)((function(){null===n&&o(c())}),[n]),null!=n?""+n:void 0}},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(33);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},149:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(r||(r={}))},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c}));var r,i=n(0),a=n.n(i),o=Object(i.createContext)(null);function c(){return Object(i.useContext)(o)}function u(e){var t=e.value,n=e.children;return a.a.createElement(o.Provider,{value:t},n)}o.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(r||(r={}))},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);function i(e,t,n){var i=Object(r.useRef)(t);i.current=t,Object(r.useEffect)((function(){function t(e){i.current.call(window,e)}return window.addEventListener(e,t,n),function(){return window.removeEventListener(e,t,n)}}),[e,n])}},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);function i(){var e=Object(r.useRef)(!1);return Object(r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return s}));var r,i,a,o,c=n(138),u=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function s(e,t){var n;return void 0===t&&(t=o.Strict),e!==document.body&&Object(c.a)(t,((n={})[o.Strict]=function(){return e.matches(u)},n[o.Loose]=function(){for(var t=e;null!==t;){if(t.matches(u))return!0;t=t.parentElement}return!1},n))}function l(e){null==e||e.focus({preventScroll:!0})}function d(e,t){var n=Array.isArray(e)?e.slice().sort((function(e,t){var n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})):function(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(u))}(e),o=document.activeElement,c=function(){if(t&(r.First|r.Next))return a.Next;if(t&(r.Previous|r.Last))return a.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),s=function(){if(t&r.First)return 0;if(t&r.Previous)return Math.max(0,n.indexOf(o))-1;if(t&r.Next)return Math.max(0,n.indexOf(o))+1;if(t&r.Last)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),l=t&r.NoScroll?{preventScroll:!0}:{},d=0,f=n.length,b=void 0;do{var m;if(d>=f||d+f<=0)return i.Error;var p=s+d;if(t&r.WrapAround)p=(p+f)%f;else{if(p<0)return i.Underflow;if(p>=f)return i.Overflow}null==(m=b=n[p])||m.focus(l),d+=c}while(b!==document.activeElement);return b.hasAttribute("tabindex")||b.setAttribute("tabindex","0"),i.Success}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(r||(r={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(i||(i={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(a||(a={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(o||(o={}))},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(136),i=n(0);function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=Object(i.useRef)(t);return Object(i.useEffect)((function(){a.current=t}),[t]),Object(i.useCallback)((function(e){for(var t,n=Object(r.a)(a.current);!(t=n()).done;){var i=t.value;null!=i&&("function"===typeof i?i(e):i.current=e)}}),[a])}},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(136);function i(){var e=[],t={requestAnimationFrame:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=requestAnimationFrame.apply(void 0,arguments);t.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.requestAnimationFrame((function(){t.requestAnimationFrame.apply(t,n)}))},setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=setTimeout.apply(void 0,arguments);t.add((function(){return clearTimeout(e)}))})),add:function(t){e.push(t)},dispose:function(){for(var t,n=Object(r.a)(e.splice(0));!(t=n()).done;){var i=t.value;i()}}};return t}},163:function(e,t,n){"use strict";function r(e){for(var t,n,r=e.parentElement,i=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(i=r),r=r.parentElement;var a=null!=(t=""===(null==(n=r)?void 0:n.getAttribute("disabled")))&&t;return(!a||!function(e){if(!e)return!1;var t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(i))&&a}n.d(t,"a",(function(){return r}))},173:function(e,t,n){"use strict";t.a=function(e,t){return e===t||e.length===t.length&&e.every((function(e,n){return e.id===t[n].id&&e.title===t[n].title}))}},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return F}));var r=n(136),i=n(0),a=n.n(i),o=n(138),c=n(139),u=n(137),s=n(141),l=n(142),d=n(156),f=n(151);var b,m=n(161);function p(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e&&r.length>0&&(t=e.classList).add.apply(t,r)}function v(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e&&r.length>0&&(t=e.classList).remove.apply(t,r)}function j(e,t,n,r,i,a){var o=Object(m.a)(),c=void 0!==a?function(e){var t={called:!1};return function(){if(!t.called)return t.called=!0,e.apply(void 0,arguments)}}(a):function(){};return v.apply(void 0,[e].concat(i)),p.apply(void 0,[e].concat(t,n)),o.nextFrame((function(){v.apply(void 0,[e].concat(n)),p.apply(void 0,[e].concat(r)),o.add(function(e,t){var n=Object(m.a)();if(!e)return n.dispose;var r=getComputedStyle(e),i=[r.transitionDuration,r.transitionDelay].map((function(e){var t=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,t){return t-e}))[0];return void 0===t?0:t})),a=i[0],o=i[1];return 0!==a?n.setTimeout((function(){t(b.Finished)}),a+o):t(b.Finished),n.add((function(){return t(b.Cancelled)})),n.dispose}(e,(function(n){return v.apply(void 0,[e].concat(r,t)),p.apply(void 0,[e].concat(i)),c(n)})))})),o.add((function(){return v.apply(void 0,[e].concat(t,n,r,i))})),o.add((function(){return c(b.Cancelled)})),o.dispose}function O(e){return void 0===e&&(e=""),Object(i.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(b||(b={}));var g,h=Object(i.createContext)(null);h.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(g||(g={}));var x=Object(i.createContext)(null);function y(e){return"children"in e?y(e.children):e.current.filter((function(e){return e.state===g.Visible})).length>0}function w(e){var t=Object(i.useRef)(e),n=Object(i.useRef)([]),r=Object(d.a)();Object(i.useEffect)((function(){t.current=e}),[e]);var a=Object(i.useCallback)((function(e,i){var a;void 0===i&&(i=c.b.Hidden);var u=n.current.findIndex((function(t){return t.id===e}));-1!==u&&(Object(o.a)(i,((a={})[c.b.Unmount]=function(){n.current.splice(u,1)},a[c.b.Hidden]=function(){n.current[u].state=g.Hidden},a)),!y(n)&&r.current&&(null==t.current||t.current()))}),[t,r,n]),u=Object(i.useCallback)((function(e){var t=n.current.find((function(t){return t.id===e}));return t?t.state!==g.Visible&&(t.state=g.Visible):n.current.push({id:e,state:g.Visible}),function(){return a(e,c.b.Unmount)}}),[n,a]);return Object(i.useMemo)((function(){return{children:n,register:u,unregister:a}}),[u,a,n])}function N(){}x.displayName="NestingContext";var _=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function E(e){for(var t,n={},i=Object(r.a)(_);!(t=i()).done;){var a,o=t.value;n[o]=null!=(a=e[o])?a:N}return n}var C=c.a.RenderStrategy;function S(e){var t,n=e.beforeEnter,d=e.afterEnter,m=e.beforeLeave,p=e.afterLeave,v=e.enter,N=e.enterFrom,_=e.enterTo,S=e.entered,F=e.leave,A=e.leaveFrom,T=e.leaveTo,P=Object(r.c)(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),R=Object(i.useRef)(null),k=Object(i.useState)(g.Visible),L=k[0],D=k[1],q=P.unmount?c.b.Unmount:c.b.Hidden,H=function(){var e=Object(i.useContext)(h);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),U=H.show,V=H.appear,I=H.initial,M=function(){var e=Object(i.useContext)(x);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),B=M.register,Y=M.unregister,W=Object(l.a)(),z=Object(i.useRef)(!1),G=w((function(){z.current||(D(g.Hidden),Y(W),te.current.afterLeave())}));Object(u.a)((function(){if(W)return B(W)}),[B,W]),Object(u.a)((function(){var e;q===c.b.Hidden&&W&&(U&&L!==g.Visible?D(g.Visible):Object(o.a)(L,((e={})[g.Hidden]=function(){return Y(W)},e[g.Visible]=function(){return B(W)},e)))}),[L,W,B,Y,U,q]);var J=O(v),Q=O(N),$=O(_),K=O(S),X=O(F),Z=O(A),ee=O(T),te=function(e){var t=Object(i.useRef)(E(e));return Object(i.useEffect)((function(){t.current=E(e)}),[e]),t}({beforeEnter:n,afterEnter:d,beforeLeave:m,afterLeave:p}),ne=Object(s.a)();Object(i.useEffect)((function(){if(ne&&L===g.Visible&&null===R.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[R,L,ne]);var re=I&&!V;Object(u.a)((function(){var e=R.current;if(e&&!re)return z.current=!0,U&&te.current.beforeEnter(),U||te.current.beforeLeave(),U?j(e,J,Q,$,K,(function(e){z.current=!1,e===b.Finished&&te.current.afterEnter()})):j(e,X,Z,ee,K,(function(e){z.current=!1,e===b.Finished&&(y(G)||(D(g.Hidden),Y(W),te.current.afterLeave()))}))}),[te,W,z,Y,G,R,re,U,J,Q,$,X,Z,ee]);var ie={ref:R},ae=P;return a.a.createElement(x.Provider,{value:G},a.a.createElement(f.a,{value:Object(o.a)(L,(t={},t[g.Visible]=f.b.Open,t[g.Hidden]=f.b.Closed,t))},Object(c.d)({props:Object(r.b)({},ae,ie),defaultTag:"div",features:C,visible:L===g.Visible,name:"Transition.Child"})))}function F(e){var t,n=e.show,u=e.appear,s=void 0!==u&&u,l=e.unmount,d=Object(r.c)(e,["show","appear","unmount"]),b=Object(f.c)();void 0===n&&null!==b&&(n=Object(o.a)(b,((t={})[f.b.Open]=!0,t[f.b.Closed]=!1,t)));if(![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var m=Object(i.useState)(n?g.Visible:g.Hidden),p=m[0],v=m[1],j=w((function(){v(g.Hidden)})),O=function(){var e=Object(i.useRef)(!0);return Object(i.useEffect)((function(){e.current=!1}),[]),e.current}(),N=Object(i.useMemo)((function(){return{show:n,appear:s||!O,initial:O}}),[n,s,O]);Object(i.useEffect)((function(){n?v(g.Visible):y(j)||v(g.Hidden)}),[n,j]);var _={unmount:l};return a.a.createElement(x.Provider,{value:j},a.a.createElement(h.Provider,{value:N},Object(c.d)({props:Object(r.b)({},_,{as:i.Fragment,children:a.a.createElement(S,Object.assign({},_,d))}),defaultTag:i.Fragment,features:C,visible:p===g.Visible,name:"Transition"})))}F.Child=function(e){var t=null!==Object(i.useContext)(h),n=null!==Object(f.c)();return!t&&n?a.a.createElement(F,Object.assign({},e)):a.a.createElement(S,Object.assign({},e))},F.Root=F},224:function(e,t,n){"use strict";n.r(t);var r=n(147),i=n(143),a=n(12),o=n(0),c=n.n(o),u=n(182),s=n(193),l=n(150),d=n(135),f=n(242),b=n.n(f),m=n(244),p=n.n(m),v=n(173),j=(n(225),n(2)),O=function(e){var t=e.index,n=e.selectedIndex,r=e.hoverIndex,i=t<=n,a=null!=r&&t<=r,o=null!=r,c=r===t;return Object(j.jsx)(l.D,{className:["w-5 h-5 mr-1 text-gray-400",o&&i&&!a&&"text-blue-300",(i||c)&&!(o&&i&&!a)&&"text-blue-400",o&&!i&&a&&"text-blue-400"].join(" "),"aria-hidden":"true"})};function g(e){var t=e.reviewModalIsOpen,n=e.executeRecaptcha,c=e.setReviewModalIsOpen,f=e.selectedProvider,m=e.setSelectedProvider,v=e.providerList,g=e.alreadyRecommended,h=e.setAlreadyRecommended,x=e.modalContext,y=Object(d.a)().t,w=Object(o.useState)({provider_id:f.provider_id,review_comment:"",email:null,transfer_speed_rating:0,liquidity_rating:0,usability_rating:0,support_rating:0,arbitrage_quality:-2}),N=Object(a.a)(w,2),_=N[0],E=N[1],C=Object(o.useRef)(null),S=Object(o.useState)([]),F=Object(a.a)(S,2),A=F[0],T=F[1],P=Object(o.useState)(!1),R=Object(a.a)(P,2),k=R[0],L=R[1],D=function(e){E(Object(i.a)(Object(i.a)({},_),{},{arbitrage_quality:+e.target.value}))};return Object(j.jsx)(u.a,{appear:!0,show:t,as:o.Fragment,children:Object(j.jsx)(s.a,{as:"div",className:"fixed inset-0 z-50 overflow-y-auto",onClose:function(){c(!1),L(!1)},children:Object(j.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(j.jsx)(s.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(j.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(j.jsx)(u.a.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(j.jsxs)("div",{className:"inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(j.jsxs)("div",{className:"flex justify-between",children:[Object(j.jsx)(s.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:!k&&y("Opinar")}),Object(j.jsx)(l.I,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){c(!1),L(!1)}})]}),!k&&Object(j.jsxs)("form",{ref:C,children:[Object(j.jsxs)("div",{className:"mt-3 text-white",children:[Object(j.jsx)("p",{children:y("\xbfDe qui\xe9n quieres opinar?")}),Object(j.jsx)("select",{className:"mt-2 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:bg-white w-full",onChange:function(e){m(v.filter((function(t){return t.provider_id===e.target.value}))[0]),E(Object(i.a)(Object(i.a)({},_),{},{provider_id:e.target.value}))},defaultValue:f.provider_id,disabled:1===v.length,children:Object(r.a)(v).sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){return Object(j.jsx)("option",{value:e.provider_id,children:e.name},e.provider_id)}))})]}),-1===f.provider_id.indexOf("p2p")&&Object(j.jsxs)("div",{className:["mt-3 text-white",A.indexOf("transfer_speed_rating")>-1?"shake-animation":""].join(" "),children:[Object(j.jsx)("p",{children:y("\xbfC\xf3mo calificar\xedas su velocidad de transferencias?")}),Object(j.jsx)(b.a,{className:"mt-2",value:_.transfer_speed_rating,onChange:function(e){E(Object(i.a)(Object(i.a)({},_),{},{transfer_speed_rating:e}))},numberStars:5,starRenderer:O})]})||Object(j.jsxs)("div",{className:["mt-3 text-white",A.indexOf("liquidity_rating")>-1?"shake-animation":""].join(" "),children:[Object(j.jsx)("p",{children:y("\xbfC\xf3mo calificar\xedas su liquidez (cantidad de publicaciones u oferta)?")}),Object(j.jsx)(b.a,{className:"mt-2",value:_.liquidity_rating,onChange:function(e){E(Object(i.a)(Object(i.a)({},_),{},{liquidity_rating:e}))},numberStars:5,starRenderer:O})]}),Object(j.jsxs)("div",{className:["mt-3 text-white",A.indexOf("usability_rating")>-1?"shake-animation":""].join(" "),children:[Object(j.jsx)("p",{children:y("\xbfC\xf3mo calificar\xedas su facilidad de uso?")}),Object(j.jsx)(b.a,{className:"mt-2",value:_.usability_rating,onChange:function(e){E(Object(i.a)(Object(i.a)({},_),{},{usability_rating:e}))},numberStars:5,starRenderer:O})]}),Object(j.jsxs)("div",{className:["mt-3 text-white",A.indexOf("support_rating")>-1?"shake-animation":""].join(" "),children:[Object(j.jsx)("p",{children:y("\xbfC\xf3mo calificar\xedas su atenci\xf3n?")}),Object(j.jsx)(b.a,{className:"mt-2",value:_.support_rating,onChange:function(e){E(Object(i.a)(Object(i.a)({},_),{},{support_rating:e}))},numberStars:5,starRenderer:O})]}),-1===f.provider_id.indexOf("p2p")&&Object(j.jsxs)("div",{className:["mt-3 text-white",A.indexOf("arbitrage_quality")>-1?"shake-animation":""].join(" "),children:[Object(j.jsx)("p",{children:y("\xbfRecomend\xe1s {{providerName}} para arbitrar?",{providerName:f.name})}),Object(j.jsxs)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:[Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(j.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:"1",checked:1===_.arbitrage_quality,onChange:D}),Object(j.jsx)("span",{className:"ml-1",children:y("Si")})]}),Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(j.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:"0",checked:0===_.arbitrage_quality,onChange:D}),Object(j.jsx)("span",{className:"ml-1",children:y("No")})]}),Object(j.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(j.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:"-1",checked:-1===_.arbitrage_quality,onChange:D}),Object(j.jsx)("span",{className:"ml-1",children:y("Nunca la us\xe9 para arbitrar")})]})]})]}),Object(j.jsx)("label",{htmlFor:"reviewFreeTextArea",className:"form-label inline-block my-3 text-white",children:y("Cu\xe9ntanos un poco m\xe1s, \xbfc\xf3mo fu\xe9 tu experiencia con {{providerName}}?",{providerName:f.name})}),Object(j.jsx)("textarea",{className:"form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none",id:"reviewFreeTextArea",rows:5,placeholder:y("\xbfSali\xf3 todo como esperabas? \xbfSe la recomendar\xedas a un amigo o familiar? \xbfPor qu\xe9?"),onChange:function(e){E(Object(i.a)(Object(i.a)({},_),{},{review_comment:e.target.value}))},value:_.review_comment}),Object(j.jsxs)("div",{className:"grid grid-cols-4 text-white text-xs",children:[A.indexOf("review_comment_length_error")>-1&&_.review_comment.length<20&&Object(j.jsx)("p",{className:"col-span-4",children:y("\xa1Danos m\xe1s detalles! Esperamos al menos 20 caracteres")}),Object(j.jsxs)("p",{className:"col-end-6",children:[_.review_comment.length," / 1500"]})]}),Object(j.jsx)("label",{htmlFor:"emailInput",className:"form-label inline-block my-3 text-white",children:y("\xbfQuieres dejarnos tu e-mail? No quedar\xe1 visible y solo lo usaremos para contactarte si podemos ayudar con tu caso.")}),Object(j.jsx)("input",{type:"email",onChange:function(e){E(Object(i.a)(Object(i.a)({},_),{},{email:e.target.value}))},className:"form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none"}),Object(j.jsx)("div",{className:"mt-5 text-right",children:Object(j.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){return function(){T([]);var e=[];_.provider_id.indexOf("p2p")>-1?(_.arbitrage_quality=-2,0===_.liquidity_rating&&(e=[].concat(Object(r.a)(e),["liquidity_rating"]))):0===_.transfer_speed_rating&&(e=[].concat(Object(r.a)(e),["transfer_speed_rating"])),0===_.usability_rating&&(e=[].concat(Object(r.a)(e),["usability_rating"])),0===_.support_rating&&(e=[].concat(Object(r.a)(e),["support_rating"])),-1===_.provider_id.indexOf("p2p")&&-2===_.arbitrage_quality&&(e=[].concat(Object(r.a)(e),["arbitrage_quality"])),(_.review_comment.length<20||_.review_comment.length>1500)&&(e=[].concat(Object(r.a)(e),["review_comment_length_error"])),!1===C.current.checkValidity()&&(e=[].concat(Object(r.a)(e),["email"]),C.current.reportValidity()),T(e),e.length>0?setTimeout((function(){T(e.filter((function(e){return"review_comment_length_error"===e})))}),1e3):n&&(h([].concat(Object(r.a)(g),[_.provider_id])),L(!0),n("submit_provider_review").then((function(e){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/"):"".concat(window.BARNEY_BR_API_URL,"/reviews/"),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(Object(i.a)(Object(i.a)({},_),{},{captcha_response:e}))}).then((function(){})).catch((function(){}))})))}()},children:y("Enviar mi opini\xf3n")})})]})||Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("img",{loading:"lazy",src:"https://i.imgur.com/nceihRp.png",className:"w-60 mx-auto my-10"}),Object(j.jsx)("p",{className:"text-center text-white font-medium",children:y("\xa1Gracias por tu opini\xf3n!")}),Object(j.jsx)("p",{className:"text-white mt-2",children:y("Tu experiencia ayudar\xe1 a tomar buenas decisiones sobre d\xf3nde comprar o vender sus criptomonedas.")}),Object(j.jsx)("button",{type:"button",className:"mt-5 mx-auto px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){c(!1),L(!1)},children:"provider"===x&&y("Volver")||y("Seguir opinando")})]}),k&&Object(j.jsx)(p.a,{})]})})]})})})}var h=function(e,t){return e.selectedProvider.provider_id===t.selectedProvider.provider_id&&(e.reviewData&&t.reviewData&&e.reviewData.transfer_speed_rating===t.reviewData.transfer_speed_rating&&e.reviewData.usability_rating===t.reviewData.usability_rating&&e.reviewData.support_rating===t.reviewData.support_rating&&e.reviewData.arbitrage_quality===t.reviewData.arbitrage_quality||!0)&&Object(v.a)(e.formErrors,t.formErrors)};t.default=c.a.memo(g,h)},225:function(e,t,n){}}]);