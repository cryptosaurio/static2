(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[29],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(12),s=n(0),c=n(1),i=n(138),o=n(160),r=n(242),l=(n(288),n(2));function m(){var e={page:"blog-post",country:window.COUNTRY},t=Object(o.useTracking)(e).trackEvent,n=Object(i.a)().t,m=Object(c.f)().pathname,d=Object(s.useState)(null),u=Object(a.a)(d,2),p=u[0],b=u[1],g=Object(s.useState)(null),j=Object(a.a)(g,2),w=j[0],h=j[1];return Object(s.useEffect)((function(){var n={event:"pageview"};"production"===window.ENV?t(n):console.log(e,n)}),[]),Object(s.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/blog-posts?url=").concat(m):"".concat(window.BARNEY_BR_API_URL,"/blog-posts?url=").concat(m)).then((function(e){return e.json()})).then((function(e){h(new Date(1e3*e.note_timestamp).toISOString()),b(e)})).catch((function(){}))}),[]),Object(l.jsxs)(l.Fragment,{children:[p&&Object(l.jsx)(r.JsonLd,{item:{"@context":"https://schema.org","@type":"NewsArticle",mainEntityOfPage:{"@type":"WebPage","@id":"https://google.com/article"},headline:(p["description_".concat(window.LANGUAGE)]||p["description_".concat(window.FALLBACK_LANGUAGE)]).length>110?(p["description_".concat(window.LANGUAGE)]||p["description_".concat(window.FALLBACK_LANGUAGE)]).substring(0,106)+"...":p["description_".concat(window.LANGUAGE)]||p["description_".concat(window.FALLBACK_LANGUAGE)],image:p.img,datePublished:w,dateModified:w,author:{"@type":"Organization",name:"BR"===window.COUNTRY?"Cryptossauro":"Cryptosaurio",url:n("https://twitter.com/cryptosaurioweb")},publisher:{"@type":"Organization",name:"BR"===window.COUNTRY?"Cryptossauro":"Cryptosaurio",logo:{"@type":"ImageObject",url:"https://cdn.jsdelivr.net/gh/cryptosaurio/static/media/logo-web.861d9586.webp"}}}}),Object(l.jsxs)("div",{className:"p-10",children:[w&&Object(l.jsxs)("div",{className:"text-right text-gray-500",children:[n("Fecha de publicaci\xf3n:"),"\xa0",w.split("T")[0]]}),p&&Object(l.jsx)("div",{className:"content",dangerouslySetInnerHTML:{__html:p["content_".concat(window.LANGUAGE)]||p["content_".concat(window.FALLBACK_LANGUAGE)]}}),!p&&Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 h-4 ml-12 mt-4"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-64 h-4 ml-12 mt-4"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-72 h-4 ml-12 mt-4"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-96 h-4 ml-12 mt-4"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 h-4 ml-12 mt-8"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-64 h-4 ml-12 mt-4"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-72 h-4 ml-12 mt-4"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-96 h-4 ml-12 mt-4"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 h-4 ml-12 mt-8"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-64 h-4 ml-12 mt-4"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-72 h-4 ml-12 mt-4"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-96 h-4 ml-12 mt-4"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 h-4 ml-12 mt-8"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-64 h-4 ml-12 mt-4"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-72 h-4 ml-12 mt-4"}),Object(l.jsx)("div",{className:"animate-pulse bg-gray-900 w-96 h-4 ml-12 mt-4"})]})]})]})}},242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.jsonLdScriptProps=t.JsonLd=t.helmetJsonLdProp=void 0;var a=n(243);Object.defineProperty(t,"helmetJsonLdProp",{enumerable:!0,get:function(){return a.helmetJsonLdProp}}),Object.defineProperty(t,"JsonLd",{enumerable:!0,get:function(){return a.JsonLd}}),Object.defineProperty(t,"jsonLdScriptProps",{enumerable:!0,get:function(){return a.jsonLdScriptProps}})},243:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.helmetJsonLdProp=t.jsonLdScriptProps=t.JsonLd=void 0;var a=n(0);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e,r,t.space)}}}t.JsonLd=function(e){return a.createElement("script",Object.assign({},s(e.item,e)))},t.jsonLdScriptProps=s,t.helmetJsonLdProp=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{type:"application/ld+json",innerHTML:JSON.stringify(e,r,t.space)}};var c=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}),i=new RegExp("[".concat(Object.keys(c).join(""),"]"),"g"),o=function(e){return c[e]},r=function(e,t){switch(typeof t){case"object":if(null===t)return;return t;case"number":case"boolean":case"bigint":return t;case"string":return t.replace(i,o);default:return}}},288:function(e,t,n){}}]);