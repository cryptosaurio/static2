(()=>{function e(o){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(o)}angular.module("app",["ngSanitize","ngMaterial","ngMessages","ngMdIcons","ngclipboard","angular.snackbar","star-rating"]).config(["$provide","$compileProvider","$mdThemingProvider","$sceDelegateProvider","$mdAriaProvider",function(o,n,t,r,i){n.debugInfoEnabled(!1),t.disableTheming(!0),i.disableWarnings(),o.decorator("$exceptionHandler",["$delegate",function(o){return function(n,t){o(n,t),reportError(JSON.stringify({exception:"object"==e(n)?n.stack:""+n,cause:""+t}))}}]),r.resourceUrlWhitelist(["https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@**"])}])})(),angular.module("app").controller("CommonController",["$scope","$window","commonFunctionsService",function(e,o,n){e.tooltipCopySuccessful=n.tooltipCopySuccessful,e.track=n.track,e.trackSystem=n.trackSystem,e.showCountriesMenu=n.showCountriesMenu,e.redirectTo=function(e){o.open(e,"_blank")},e.hideNews=function(e){return!!JSON.parse(o.localStorage.getItem(e+"_gift_news_closed"))||!1},e.closeNews=function(e,n){o.localStorage.setItem(e+"_gift_news_closed",!0)}}]);