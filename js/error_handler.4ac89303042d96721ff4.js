(()=>{window.onerror=function(r,n,e,o,t){return reportError({"[JS Error]":r,Script:n,Line:e,Column:o,StackTrace:t}),!1},window.addEventListener("error",(function(r){reportError({"[JS Error]":r.reason.message})})),window.addEventListener("unhandledrejection",(function(r){reportError({"[JS Error]":r.reason.message})}));var r=[];function reportError(n){if(r.indexOf(JSON.stringify(n))<0){r.push(JSON.stringify(n));var e=new XMLHttpRequest;e.open("POST",window.BARNEY_ENDPOINT+"/report-js-error",!0),e.setRequestHeader("Content-Type","application/json"),e.send(JSON.stringify({info:n,userAgent:navigator.userAgent,url:window.location.href}))}}window.reportError=reportError})();