(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[37],{174:function(e,t,i){"use strict";t.a=function(e,t){return e===t||e.length===t.length&&e.every((function(e,i){return e.id===t[i].id&&e.title===t[i].title}))}},333:function(e,t,i){"use strict";i.r(t);var n=i(145),s=i(12),a=i(0),c=i.n(a),o=i(202),r=i(212),l=i(150),d=i(158),f=i(236),u=i.n(f),p=i(134),m=i(174),b=i(2),j=["BTC","ETH","DAI","USDC","USDT"],g=[1,2,3,4,5];function x(e){var t=e.notificationSettingsModalIsOpen,i=e.setNotificationSettingsModalIsOpen,c=e.setAskForNotificationsAccess,f=e.askForNotificationsAccess,m=e.tempSelectedCryptosForNotifications,x=e.setTempSelectedCryptosForNotifications,h=e.tempSelectedPercentageForNotifications,N=e.setTempSelectedPercentageForNotifications,O=e.setSelectedCryptosForNotifications,w=e.setSelectedPercentageForNotifications,y=e.setNotificationsEnabled,v=Object(p.a)().t,C=Object(a.useState)(!1),k=Object(s.a)(C,2),F=k[0],S=k[1];function T(e){m.includes(e.target.value)?x(m.filter((function(t){return t!==e.target.value}))):x((function(t){return[].concat(Object(n.a)(t),[e.target.value])}))}function U(e){e&&"Notification"in window?"granted"===Notification.permission?(i(!1),c(!1),y(!0),u.a.setItem("".concat(window.COUNTRY.toUpperCase(),"_notifications_enabled"),JSON.stringify(!0))):"denied"!==Notification.permission?(c(!0),Notification.requestPermission().then((function(e){"granted"===e&&(i(!1),c(!1),new Notification(v("\xa1Te damos la bienvenida!"),{body:v("\xa1Hola! As\xed se ver\xe1n las notificationes \ud83d\ude09"),icon:"https://www.cryptosaurio.com/static/img/logo-web.webp"})),y("granted"===e),u.a.setItem("".concat(window.COUNTRY.toUpperCase(),"_notifications_enabled"),JSON.stringify("granted"===e))}))):"denied"===Notification.permission?c(!0):(y(!1),u.a.setItem("".concat(window.COUNTRY.toUpperCase(),"_notifications_enabled"),JSON.stringify(!1)),i(!1)):(y(!1),u.a.setItem("".concat(window.COUNTRY.toUpperCase(),"_notifications_enabled"),JSON.stringify(!1)),i(!1)),O(m),u.a.setItem("".concat(window.COUNTRY.toUpperCase(),"_notifications_selected_cryptos"),JSON.stringify(m)),w(h),u.a.setItem("".concat(window.COUNTRY.toUpperCase(),"_notifications_selected_percentage"),JSON.stringify(h))}return Object(a.useEffect)((function(){m.length>0&&m.length!==j.length?S(!0):(m.length===j.length||0===m.length)&&S(!1)}),[m]),Object(b.jsx)(o.a,{appear:!0,show:t,as:a.Fragment,children:Object(b.jsx)(r.a,{as:"div",className:"fixed inset-0 z-50 overflow-y-auto",onClose:function(){i(!1),c(!1)},children:Object(b.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(b.jsx)(r.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(b.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(b.jsx)(o.a.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(b.jsxs)("div",{className:"inline-block w-full max-w-5xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(b.jsxs)("div",{className:"flex justify-between",children:[Object(b.jsx)(r.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:v("Crear alerta personalizada")}),Object(b.jsx)(l.H,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){i(!1),c(!1)}})]}),!f&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"text-white py-2",children:[Object(b.jsx)("p",{children:v("Selecciona los criterios que te interesan y te enviaremos una notificaci\xf3n de escritorio cuando encontremos oportunidades para ti.")}),Object(b.jsx)("p",{children:v("Para que funcione tendr\xe1s que tener la p\xe1gina de Cryptosaurio abierta, aunque sea en otra ventana.")}),Object(b.jsx)("p",{children:v("Tendremos en cuenta los filtros que tienes aplicados.")})]}),Object(b.jsxs)("div",{className:"mt-2 flex flex-col gap-3 text-white",children:[Object(b.jsxs)("div",{className:"flex flex-row",children:[Object(b.jsx)("p",{className:"w-52",children:v("Criptomonedas")}),Object(b.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(b.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(b.jsx)("input",{ref:function(e){return e&&(e.indeterminate=F)},checked:m.length===j.length,onChange:function(e){e.target.checked?x(j.map((function(e){return e}))):x([])},type:"checkbox",className:"text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(b.jsx)("span",{className:"ml-1",children:v("Todas")})]}),j.map((function(e,t){return Object(b.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(b.jsx)("input",{checked:m.includes(e),onChange:T,type:"checkbox",className:"text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e}),Object(b.jsx)("span",{className:"ml-1",children:Object(d.a)(e).name})]},t)}))]})]}),Object(b.jsxs)("div",{className:"flex flex-row",children:[Object(b.jsx)("p",{className:"w-52",children:v("Ganancia")}),Object(b.jsx)("div",{className:"flex flex-row flex-wrap w-full",children:g.map((function(e,t){return Object(b.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(b.jsx)("input",{checked:h===e,onChange:function(){return N(e)},type:"radio",className:"form-radio text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e}),Object(b.jsx)("span",{className:"ml-1",children:v("Desde {{percentage}}%",{percentage:e})})]},t)}))})]})]}),Object(b.jsxs)("div",{className:"mt-4 text-right",children:[Object(b.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 mr-3",onClick:function(){U(!1)},children:v("Desactivar")}),Object(b.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){m.length>0&&h&&h>0&&U(!0)},children:v("Guardar")})]})]})||Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"text-white py-2 grid grid-flow-row justify-items-center text-center",children:[Object(b.jsx)("img",{loading:"lazy",className:"w-56",src:"https://www.cryptosaurio.com/static/img/thanks-alerts.webp"}),Object(b.jsx)("p",{className:"font-bold pt-5",children:v("Ahora solo falta que nos des permiso")}),Object(b.jsx)("p",{className:"pt-1 mx-10",children:v("Necesitaremos que nos des permiso para enviar notificaciones a tu navegador. Esto nos permitir\xe1 avisarte cada vez que encontremos nuevas oportunidades.")})]})})]})})]})})})}var h=function(e,t){return e.askForNotificationsAccess&&t.askForNotificationsAccess&&e.availableCryptosForNotifications===t.availableCryptosForNotifications&&Object(m.a)(e.tempSelectedCryptosForNotifications,t.tempSelectedCryptosForNotifications)&&Object(m.a)(e.tempSelectedPercentageForNotifications,t.tempSelectedPercentageForNotifications)};t.default=c.a.memo(x,h)}}]);