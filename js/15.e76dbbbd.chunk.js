(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[15],{137:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return l}));var a=c(48),r=c(8),n=c(0),s=c(47),i=c(1);function l(){var e={page:"blog",country:window.COUNTRY},t=Object(s.useTracking)(e),c=t.Track,l=t.trackEvent,o=Object(n.useState)([]),d=Object(r.a)(o,2),b=d[0],u=d[1],m=Object(n.useState)([]),j=Object(r.a)(m,2),g=j[0],p=j[1];return Object(n.useEffect)((function(){fetch("https://barney.cryptosaurio.com/blog-posts").then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return!e.available_countries&&!e.excluded_countries||e.available_countries&&e.available_countries.split(",").indexOf(window.COUNTRY.toUpperCase())>-1||e.excluded_countries&&-1===e.excluded_countries.split(",").indexOf(window.COUNTRY.toUpperCase())}));u(t.filter((function(e){return!e.tracker_id||e.tracker_id&&-1===e.tracker_id.indexOf("backlink")}))),p(t.filter((function(e){return e.tracker_id&&e.tracker_id.indexOf("backlink")>-1})))})).catch((function(){return u([])}))}),[]),Object(i.jsxs)("div",{className:"grid lg:grid-cols-2 md:grid-flow-row pb-10",children:[Object(i.jsxs)(c,{children:[b.map((function(e){return e.tracker_id&&l({event:"system_action",event_category:e.tracker_id,event_label:"show"}),Object(i.jsxs)("a",{href:"".concat(0===e.is_external&&"br"!=window.COUNTRY?"/"+window.COUNTRY:"").concat(e["url_".concat(window.LANGUAGE)]||e.url_es),target:0===e.is_external?void 0:"_blank",rel:1===e.sponsored?"sponsored noreferrer":void 0,className:"m-5",onClick:function(){e.tracker_id&&l({event:"user_action",event_category:e.tracker_id,event_label:"click"})},children:[Object(i.jsx)("div",{className:"bg-gray-800 text-blue-400 inline-block",children:1===e.sponsored?"Patrocinado":null}),Object(i.jsxs)("div",{className:["bg-gray-900 bg-opacity-30 grid grid-cols-3 h-full px-5 border",1===e.sponsored?"border-blue-400":"border-gray-500"].join(" "),children:[Object(i.jsx)("div",{className:"m-auto flex-shrink-0 w-36 hidden sm:block",children:Object(i.jsx)("img",{loading:"lazy",src:e.img})}),Object(i.jsx)("div",{className:"m-auto col-span-3 sm:col-span-2",children:Object(i.jsxs)("div",{className:"p-5",children:[Object(i.jsx)("h5",{className:"text-xl font-semibold mb-2",children:e["title_".concat(window.LANGUAGE)]||e.title_es}),Object(i.jsx)("p",{className:"mb-4",children:e["description_".concat(window.LANGUAGE)]||e.description_es})]})})]})]},e.pk)})),g.length>0&&Object(i.jsxs)("div",{className:"py-5 mx-5",children:[Object(i.jsx)("div",{className:"bg-gray-800 text-gray-400 inline-block",children:"Patrocinado"}),Object(i.jsx)("div",{className:"bg-gray-900 bg-opacity-30 border border-gray-500 h-full flex flex-col",children:g.map((function(e,t){return e.tracker_id&&l({event:"system_action",event_category:e.tracker_id,event_label:"show"}),Object(i.jsx)("a",{className:["px-5",0===t?"mt-auto":t===g.length-1?"mb-auto":""].join(" "),href:"".concat(0===e.is_external&&"br"!=window.COUNTRY?"/"+window.COUNTRY:"").concat(e["url_".concat(window.LANGUAGE)]||e.url_es),target:0===e.is_external?void 0:"_blank",onClick:function(){e.tracker_id&&l({event:"user_action",event_category:e.tracker_id,event_label:"click"})},children:Object(i.jsx)("h5",{className:"mb-2 mt-2",children:e["title_".concat(window.LANGUAGE)]||e.title_es})},e.pk)}))})]})]}),0===b.length&&Object(a.a)(Array(6)).map((function(e,t){return Object(i.jsx)("div",{className:"m-5 bg-gray-900 bg-opacity-30",children:Object(i.jsxs)("div",{className:"grid grid-cols-3 h-full p-5 border border-gray-500",children:[Object(i.jsx)("div",{className:"m-auto flex-shrink-0 bg-gray-700 h-28 w-28 sm:h-36 sm:w-36 animate-pulse"}),Object(i.jsx)("div",{className:"m-auto col-span-2",children:Object(i.jsxs)("div",{className:"p-5",children:[Object(i.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-32 sm:w-64 h-3"}),Object(i.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-40 sm:w-72 h-3"}),Object(i.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-44 sm:w-80 h-3"}),Object(i.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-44 sm:w-80 h-3"}),Object(i.jsx)("p",{className:"bg-gray-700 animate-pulse w-24 sm:w-64 h-3"})]})})]})},t)}))]})}}}]);