(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[52],{122:function(n,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return e}));var r=c(12),o=c(0);function e(n){var t=n.match,c=Object(o.useState)(""),e=Object(r.a)(c,2),a=e[0],i=e[1];return Object(o.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/provider/").concat(t.params.providerId):"".concat(window.BARNEY_BR_API_URL,"/provider/").concat(t.params.providerId)).then((function(n){return n.json()})).then((function(n){i(n.name)})).catch((function(){}))}),[t.params.providerId]),a}}}]);