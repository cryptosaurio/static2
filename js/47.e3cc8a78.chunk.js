(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[47],{338:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n(0),i=n.n(r),a=n(1),c=function(e){return e.join("/").replace(/\/\/+/g,"/")},o=/^:\w+$/,s=function(e){return"*"===e};function u(e,t){var n=e.split("/"),r=n.length;return n.some(s)&&(r+=-2),t&&(r+=2),n.filter((function(e){return!s(e)})).reduce((function(e,t){return o.test(t)?e+3:""===t?e+1:e+10}),r)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return e.forEach((function(e,i){var a;if("string"!==typeof e.path&&!e.index&&!(null===(a=e.children)||void 0===a?void 0:a.length))throw new Error("useBreadcrumbs: `path` or `index` must be provided in every route object");if(e.path&&e.index)throw new Error("useBreadcrumbs: `path` and `index` cannot be provided at the same time");var o={relativePath:e.path||"",childrenIndex:i,route:e};if("/"===o.relativePath.charAt(0)){if(!o.relativePath.startsWith(r))throw new Error("useBreadcrumbs: The absolute path of the child route must start with the parent path");o.relativePath=o.relativePath.slice(r.length)}var s=c([r,o.relativePath]),h=n.concat(o);if(e.children&&e.children.length>0){if(e.index)throw new Error("useBreadcrumbs: Index route cannot have child routes");l(e.children,t,h,s)}t.push({path:s,score:u(s,e.index),routesMeta:h})})),t}var h=Symbol("NO_BREADCRUMB"),m=function(e){return e.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,(function(e){return e.toUpperCase()}))},p=function(e){var t=e.breadcrumb,n=e.match,a=e.location,c=e.props,o=Object.assign({match:n,location:a,key:n.pathname},c||{});return Object.assign(Object.assign({},o),{breadcrumb:"string"===typeof t?Object(r.createElement)("span",{key:o.key},t):i.a.createElement(t,Object.assign({},o))})},d=function(e){var t,n=e.currentSection,r=e.disableDefaults,i=e.excludePaths,c=e.location,o=e.pathSection,s=e.branches;return i&&i.some((function(e){return null!=Object(a.d)({path:e,end:!0},o)}))?h:(s.some((function(e){var i=e.path,s=e.routesMeta,u=s[s.length-1].route,l=u.breadcrumb;if(!l&&u.index){var d=s[s.length-2];d&&d.route.breadcrumb&&(l=d.route.breadcrumb)}var b=u.caseSensitive,f=u.props,v=Object(a.d)({path:i,end:!0,caseSensitive:b},o);return v&&null===l?(t=h,!0):!!v&&(!l&&r?(t=h,!0):(t=p({breadcrumb:l||m(n),match:Object.assign(Object.assign({},v),{route:u}),location:c,props:f}),!0))})),t||(r?h:function(e){var t=e.currentSection,n=e.location,r=e.pathSection,i=Object(a.d)({end:!0,path:r},r);return p({breadcrumb:m(t),match:i,location:n})}({pathSection:o,currentSection:"/"===o?"Home":n,location:c})))},b=function(e){var t=e.routes,n=e.location,r=e.options,i=void 0===r?{}:r,a=n.pathname,c=function(e){return e.sort((function(e,t){return e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((function(e,n){return e===t[n]}))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((function(e){return e.childrenIndex})),t.routesMeta.map((function(e){return e.childrenIndex})))}))}(l(t)),o=[];return a.split("?")[0].split("/").reduce((function(e,t,r){var a=t?"".concat(e,"/").concat(t):"/";if("/"===a&&0!==r)return"";var s=d(Object.assign({currentSection:t,location:n,pathSection:a,branches:c},i));return s!==h&&o.push(s),"/"===a?"":a}),""),o},f=function(e,t){return b({routes:e||[],location:Object(a.f)(),options:t})},v=n(59),g=n(34),j=n(2);function x(){var e=f(v.a,{excludePaths:["/criptomoneda/","/criptomoeda/","/monitor/","/monitor/anchor-protocol/simular-inversion/","/comisiones-y-limites/","/taxas-e-limites/"]});return e.length>1&&Object(j.jsx)("nav",{className:"w-full px-6 pt-6 py-2 rounded",children:Object(j.jsx)("ol",{itemScope:!0,itemType:"https://schema.org/BreadcrumbList",className:"text-sm lg:text-base",children:e.map((function(t,n){var r=t.match,i=t.breadcrumb;return n+1===e.length?Object(j.jsxs)("li",{itemProp:"itemListElement",itemScope:!0,itemType:"https://schema.org/ListItem",className:"inline-flex items-center align-middle",children:[Object(j.jsx)("span",{itemProp:"name",children:i}),Object(j.jsx)("meta",{itemProp:"position",content:String(n+1)})]},n):Object(j.jsxs)("li",{itemProp:"itemListElement",itemScope:!0,itemType:"https://schema.org/ListItem",className:"inline-flex items-center align-middle",children:[Object(j.jsx)(g.b,{itemProp:"item",to:r.pathname+(e.length>n&&1===n?"/":""),children:Object(j.jsx)("span",{itemProp:"name",children:i})}),Object(j.jsx)("svg",{className:"h-5 w-auto text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",children:Object(j.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),Object(j.jsx)("meta",{itemProp:"position",content:String(n+1)})]},n)}))})})||null}}}]);