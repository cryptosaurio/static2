(()=>{function e(o){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(o)}angular.module("app",["ngSanitize","ngMaterial","ngMessages","ngMdIcons","ngclipboard","angular.snackbar"]).config(["$provide","$compileProvider","$mdThemingProvider","$sceDelegateProvider","$mdAriaProvider",function(o,n,r,t,i){n.debugInfoEnabled(!1),r.disableTheming(!0),i.disableWarnings(),o.decorator("$exceptionHandler",["$delegate",function(o){return function(n,r){o(n,r),reportError(JSON.stringify({exception:"object"==e(n)?n.stack:""+n,cause:""+r}))}}]),t.resourceUrlWhitelist(["https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@**"])}])})(),angular.module("app").controller("CoinsGraphicsController",["$scope","commonFunctionsService",function(e,o){e.tooltipCopySuccessful=o.tooltipCopySuccessful,e.track=o.track,e.trackSystem=o.trackSystem,e.showCountriesMenu=o.showCountriesMenu}]);