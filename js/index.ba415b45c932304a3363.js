(()=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}angular.module("app",["ngSanitize","ngMaterial","ngMessages","ngMdIcons","ngclipboard","angular.snackbar","tooltips","angular-carousel"]).config(["$provide","$compileProvider","$mdThemingProvider","$sceDelegateProvider","$mdAriaProvider",function(t,r,a,o,n){r.debugInfoEnabled(!1),a.disableTheming(!0),n.disableWarnings(),t.decorator("$locale",["$delegate",function(e){return e.NUMBER_FORMATS.DECIMAL_SEP=",",e.NUMBER_FORMATS.GROUP_SEP=".",e}]),t.decorator("$exceptionHandler",["$delegate",function(t){return function(r,a){t(r,a),window.reportError(JSON.stringify({exception:"object"==e(r)?r.stack:""+r,cause:""+a}))}}]),o.resourceUrlWhitelist(["https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@**","**/partials/**","**/static/**"])}])})(),angular.module("app").service("providersService",(function(){var e=new Set;this.get=function(){return Array.from(e).sort()},this.add=function(t){e.add(t)},this.delete=function(t){e.delete(t)},this.clear=function(){e.clear()}})),(()=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}angular.module("app").controller("MainController",["$scope","$rootScope","$window","$http","$interval","$timeout","$mdDialog","$animate","$mdPanel","providersService","commonFunctionsService",function(t,r,a,o,n,l,i,c,s,d,u){var f=this;t.tooltipCopySuccessful=u.tooltipCopySuccessful,t.track=u.track,t.trackSystem=u.trackSystem,t.showCountriesMenu=u.showCountriesMenu,t.isCoinPricesAvailable=function(){return!!r.coin_prices&&r.coin_prices.data&&r.coin_prices.data.bitcoin&&r.coin_prices.data.bitcoin.usd},t.hideNews=function(){return!!JSON.parse(a.localStorage.getItem("staking_news_closed"))||!1},t.closeNews=function(){a.localStorage.setItem("staking_news_closed",!0)};var p={ar:["ARS","USD"],mx:["MXN","USD"],cl:["CLP","USD"],br:["BRL","USD"],co:["COP","USD"],ve:["VES"],pe:["PEN","USD"]},m={ar:{ARS:new Set,USD:new Set},mx:{MXN:new Set,USD:new Set},cl:{CLP:new Set,USD:new Set},br:{BRL:new Set,USD:new Set},co:{COP:new Set,USD:new Set},ve:{VES:new Set},pe:{PEN:new Set,USD:new Set}},g={ar:{ARS:new Set,USD:new Set},mx:{MXN:new Set,USD:new Set},cl:{CLP:new Set,USD:new Set},br:{BRL:new Set,USD:new Set},co:{COP:new Set,USD:new Set},ve:{VES:new Set},pe:{PEN:new Set,USD:new Set}},S={ar:new Set,mx:new Set,cl:new Set,br:new Set,co:new Set,ve:new Set,pe:new Set};t.blockedCryptosInFilters=S;var y={ar:new Set,mx:new Set,cl:new Set,br:new Set,co:new Set,ve:new Set,pe:new Set};t.minimumRollInversionPerCountry={ar:1e3,mx:150,cl:10500,br:50,co:4e4,ve:32e3,pe:40},t.maxDecimalsPerCoin={BTC:7,ETH:7,DAI:2,USDC:2,USDT:2,BNB:7,ADA:7,LTC:7},f.maxDecimalsPerCoin=t.maxDecimalsPerCoin,c.enabled(angular.element(document.getElementById("roll-calculator-dialog")),!1),t.redirectToNewWindow=function(e,t){e.preventDefault(),a.open(t)},t.redirectTo=function(e){a.location.href=e},t.isEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},t.carouselDataByCoin={btc:{index:0},eth:{index:0},dai:{index:0},usdc:{index:0},usdt:{index:0}},t.getObjectKeys=function(e){return Object.keys(e)},t.prevCarouselPage=function(e){e.index-=1},t.nextCarouselPage=function(e){e.index+=1};var C=p[a.COUNTRY];C.indexOf(a.localStorage.getItem("currency_selected"))>-1&&(a.localStorage.setItem(a.COUNTRY+"_currency_selected",a.localStorage.getItem("currency_selected")),a.localStorage.removeItem("currency_selected")),t.currencySelected=C.indexOf(a.localStorage.getItem(a.COUNTRY+"_currency_selected"))>-1?a.localStorage.getItem(a.COUNTRY+"_currency_selected"):a.localStorage.removeItem(a.COUNTRY+"_currency_selected")||C[0],f.currencySelected=t.currencySelected;var v=[Y];t.visibleFiltersDialog=!1;var O={},_={},b=!1,N=new Set,h=new Map,R={open:!1,coin:null};t.IS_MOBILE=window.IS_MOBILE;try{JSON.parse(a.localStorage.getItem("custom_alerts_config"))&&(a.localStorage.setItem(a.COUNTRY+"_custom_alerts_config",JSON.stringify(JSON.parse(a.localStorage.getItem("custom_alerts_config")))),a.localStorage.removeItem("custom_alerts_config"))}catch(e){a.localStorage.setItem(a.COUNTRY+"_custom_alerts_config",JSON.stringify({})),a.localStorage.removeItem("custom_alerts_config")}JSON.parse(a.localStorage.getItem("custom_alerts_enabled"))&&(a.localStorage.setItem(a.COUNTRY+"_custom_alerts_enabled",JSON.stringify(JSON.parse(a.localStorage.getItem("custom_alerts_enabled")))),a.localStorage.removeItem("custom_alerts_enabled"));try{t.customAlertsConfig=JSON.parse(a.localStorage.getItem(a.COUNTRY+"_custom_alerts_config"))||{}}catch(e){a.localStorage.setItem(a.COUNTRY+"_custom_alerts_config",JSON.stringify({})),t.customAlertsConfig={}}for(var A in t.customAlertsEnabled=!!JSON.parse(a.localStorage.getItem(a.COUNTRY+"_custom_alerts_enabled"))&&!angular.equals(t.customAlertsConfig,{})||!1,f.customAlertsEnabled=t.customAlertsEnabled,a.localStorage.setItem(a.COUNTRY+"_custom_alerts_enabled",t.customAlertsEnabled),t.getCustomAlertText=function(){if(t.getAlertsEnabled()){var e=[];for(var r in t.customAlertsConfig.coins)t.customAlertsConfig.coins[r].selected&&e.push(t.customAlertsConfig.coins[r].code);var o="";e.length>1?(o=e.slice(0,-1).join(", "),o+=" "+a.i18n.and+" "+e.slice(-1)[0]):o=e[0];var n=a.i18n["modulo-arbitrajes.alertas.alertas-configuradas.generic"];return t.customAlertsEnabled&&(n=a.i18n["modulo-arbitrajes.alertas.alertas-configuradas.dynamic"].replace("$COINS",o).replace("$PROFIT",t.customAlertsConfig.profit.replace(".",","))),n}return""},JSON.parse(a.localStorage.getItem("generic_alerts_enabled"))&&(a.localStorage.setItem(a.COUNTRY+"_generic_alerts_enabled",JSON.parse(a.localStorage.getItem("generic_alerts_enabled"))),a.localStorage.removeItem("generic_alerts_enabled")),t.alertsEnabled=!!JSON.parse(a.localStorage.getItem(a.COUNTRY+"_generic_alerts_enabled"))||t.customAlertsEnabled||!1,t.getAlertsEnabled=function(){return t.alertsEnabled},t.alertsPermissionGrantedInThePast="Notification"in window&&"granted"===Notification.permission,t.rollsLoadingStatus="indeterminate",p[a.COUNTRY])try{JSON.parse(a.localStorage.getItem("blocked_providers_"+p[a.COUNTRY][A].toLowerCase()))&&(a.localStorage.setItem(a.COUNTRY+"_blocked_providers_"+p[a.COUNTRY][A],JSON.stringify(JSON.parse(a.localStorage.getItem("blocked_providers_"+p[a.COUNTRY][A].toLowerCase())))),a.localStorage.removeItem("blocked_providers_"+p[a.COUNTRY][A].toLowerCase())),m[a.COUNTRY][p[a.COUNTRY][A]]=new Set(JSON.parse(a.localStorage.getItem(a.COUNTRY+"_blocked_providers_"+p[a.COUNTRY][A])))}catch(e){a.localStorage.setItem(a.COUNTRY+"_blocked_providers_"+p[a.COUNTRY][A],JSON.stringify([]))}try{S[a.COUNTRY]=new Set(JSON.parse(a.localStorage.getItem(a.COUNTRY+"_blocked_cryptos"))),S[a.COUNTRY]=new Set(Array.from(S[a.COUNTRY]).filter((function(e){return-1==["BTC","ETH"].indexOf(e)})))}catch(e){a.localStorage.setItem(a.COUNTRY+"_blocked_cryptos",JSON.stringify([]))}try{y[a.COUNTRY]=new Set(JSON.parse(a.localStorage.getItem(a.COUNTRY+"_blocked_cryptos"))),y[a.COUNTRY]=new Set(Array.from(y[a.COUNTRY]).filter((function(e){return-1==["BTC","ETH"].indexOf(e)})))}catch(e){a.localStorage.setItem(a.COUNTRY+"_blocked_cryptos",JSON.stringify([]))}for(var A in t.appliedFiltersText=function(){var e="";return(m[a.COUNTRY][t.currencySelected].size>0||S[a.COUNTRY].size>0)&&(e="("+(e=(m[a.COUNTRY][t.currencySelected].size||"")+(S[a.COUNTRY].size||""))+")"),e},p[a.COUNTRY])try{g[a.COUNTRY][p[a.COUNTRY][A]]=new Set(JSON.parse(a.localStorage.getItem(a.COUNTRY+"_blocked_providers_"+p[a.COUNTRY][A])))}catch(e){a.localStorage.setItem(a.COUNTRY+"_blocked_providers_"+p[a.COUNTRY][A],JSON.stringify([]))}function I(e){return!g[a.COUNTRY][t.currencySelected].has(e)}function U(e){return!y[a.COUNTRY].has(e)}function T(){return Array.from(m[a.COUNTRY][t.currencySelected]).sort()}function P(r,n){return S[a.COUNTRY].has(r.toUpperCase())?(t.coinsData[r]={},!1):(t.coinsData[r]=t.coinsData[r]||{},t.coinsData[r][n]=t.coinsData[r][n]||{},t.coinsData[r][n].loadingStatus="indeterminate",o.get(a.PRICES_ENDPOINT+"/prices/"+t.currencySelected+"/"+r+"/"+n+(T().length>0?"?not="+T().join():""),{headers:{"If-None-Match":_[r+n+t.currencySelected+T().join("")]}}).then((function(e){var o=[];for(var l in _[r+n+t.currencySelected+T().join("")]=e.headers("Etag"),e.data)e.data[l].fields[t.currencySelected]?(e.data[l].fields.price=e.data[l].fields[t.currencySelected],e.data[l].fields.price.currencyMask=["ARS","MXN","CLP","COP"].indexOf(t.currencySelected)>-1?"$":"BRL"==t.currencySelected?"R$":"VES"==t.currencySelected?"Bs.":"PEN"==t.currencySelected?"S/":"US$"):e.data[l].fields.prices&&e.data[l].fields.prices[t.currencySelected]&&e.data[l].fields.prices[t.currencySelected][n]&&e.data[l].fields.prices[t.currencySelected][n].length>0&&(e.data[l].fields.price=e.data[l].fields.prices[t.currencySelected][n][0],e.data[l].fields.price.currencyMask=["ARS","MXN","CLP","COP"].indexOf(t.currencySelected)>-1?"$":"BRL"==t.currencySelected?"R$":"VES"==t.currencySelected?"Bs.":"PEN"==t.currencySelected?"S/":"US$",e.data[l].fields.currencyMask=["ARS","MXN","CLP","COP"].indexOf(t.currencySelected)>-1?"$":"BRL"==t.currencySelected?"R$":"VES"==t.currencySelected?"Bs.":"PEN"==t.currencySelected?"S/":"US$"),(e.data[l].fields[t.currencySelected]||e.data[l].fields.prices&&e.data[l].fields.prices[t.currencySelected]&&e.data[l].fields.prices[t.currencySelected][n])&&(o.push(e.data[l]),d.add(e.data[l].fields.name),m[a.COUNTRY][t.currencySelected].forEach(d.add,d));t.coinsData[r][n]=o,R.open&&t.showP2PModal(R.provider,R.coin,R.operationType,null,!0)}),(function(e){304!==e.status?t.coinsData[r][n].error=!0:t.coinsData[r][n].error=!1})).finally((function(){for(var o in t.coinsData[r][n])if("ar"==a.COUNTRY&&"object"==e(t.coinsData[r][n][o])&&"satoshitango"==t.coinsData[r][n][o].fields.id){t.coinsData[r][n][o].fields.infoAccess=!0,t.coinsData[r][n][o].fields.infoUrl="https://www.satoshitango.com/blog/como-comprar-bitcoins-con-satoshitango/";break}if(["btc","eth","usdt"].indexOf(r)>-1){var l,i=!1;for(var o in t.coinsData[r][n])if("object"==e(t.coinsData[r][n][o])&&"okexp2p"==t.coinsData[r][n][o].fields.id){i=!0,l=o,t.coinsData[r][n][o].fields.sponsored=!0;break}i?0!=l&&t.coinsData[r][n].splice(0,0,t.coinsData[r][n].splice(l,1)[0]):"ask"==n?t.coinsData[r][n].unshift({fields:{id:"okexp2p",name:"Okex P2P",url:"https://bit.ly/3sghtVU",sponsored:!0}}):t.coinsData[r][n].unshift({fields:{id:"okexp2p",name:"",url:"https://bit.ly/3sghtVU",sponsored:!0}})}if(["dai"].indexOf(r)>-1)for(var o in t.coinsData[r][n])if("object"==e(t.coinsData[r][n][o])&&"tiendadolar"==t.coinsData[r][n][o].fields.id){t.coinsData[r][n][o].fields.bsc=!0;break}t.coinsData[r][n].loadingStatus="determinate"})))}t.notExistsInBlockedProvidersList=I,f.notExistsInBlockedProvidersList=I,t.addOrRemoveFromBlockedProviderList=function(e){t.notExistsInBlockedProvidersList(e)?g[a.COUNTRY][t.currencySelected].add(e):g[a.COUNTRY][t.currencySelected].delete(e)},f.addOrRemoveFromBlockedProviderList=t.addOrRemoveFromBlockedProviderList,t.getProviders=function(){return t.visibleFiltersDialog?Array.from(new Set(d.get().concat(Array.from(m[a.COUNTRY][t.currencySelected])))).sort():[]},t.getProvidersWithoutP2P=function(){return t.visibleFiltersDialog?Array.from(new Set(d.get().concat(Array.from(m[a.COUNTRY][t.currencySelected])))).filter((function(e){return-1==e.indexOf("P2P")})).sort():[]},f.getProvidersWithoutP2P=t.getProvidersWithoutP2P,t.getP2PProviders=function(){return t.visibleFiltersDialog?Array.from(new Set(d.get().concat(Array.from(m[a.COUNTRY][t.currencySelected])))).filter((function(e){return e.indexOf("P2P")>-1})).sort():[]},f.getP2PProviders=t.getP2PProviders,t.notExistsInBlockedCryptosList=U,f.notExistsInBlockedCryptosList=U,t.addOrRemoveFromBlockedCryptosList=function(e){t.notExistsInBlockedCryptosList(e)?y[a.COUNTRY].add(e):y[a.COUNTRY].delete(e)},f.addOrRemoveFromBlockedCryptosList=t.addOrRemoveFromBlockedCryptosList,t.isCryptosInFiltersIndeterminated=function(){var e=Array.from(y[a.COUNTRY]).filter((function(e){return-1==["BTC","ETH"].indexOf(e)})).length;return e>0&&e!=a.AVAILABLE_COINS.length-2&&!t.allCryptosCheckedInFiltersDialog()},f.isCryptosInFiltersIndeterminated=t.isCryptosInFiltersIndeterminated,t.allCryptosCheckedInFiltersDialog=function(){return 0==Array.from(y[a.COUNTRY]).filter((function(e){return-1==["BTC","ETH"].indexOf(e)})).length},f.allCryptosCheckedInFiltersDialog=t.allCryptosCheckedInFiltersDialog,t.toggleAllCryptosInFilters=function(){if(t.allCryptosCheckedInFiltersDialog()||t.isCryptosInFiltersIndeterminated())for(A in a.AVAILABLE_COINS)-1==["BTC","ETH"].indexOf(a.AVAILABLE_COINS[A].toUpperCase())&&y[a.COUNTRY].add(a.AVAILABLE_COINS[A].toUpperCase());else y[a.COUNTRY].clear()},f.toggleAllCryptosInFilters=t.toggleAllCryptosInFilters,t.allProvidersIncludingP2PAndCryptosBlockedInFiltersDialog=function(){return Array.from(y[a.COUNTRY]).length==a.AVAILABLE_COINS.length||Array.from(g[a.COUNTRY][t.currencySelected]).length==t.getProviders().length},f.allProvidersIncludingP2PAndCryptosBlockedInFiltersDialog=t.allProvidersIncludingP2PAndCryptosBlockedInFiltersDialog,t.allProviderCheckedInFiltersDialog=function(){return 0==Array.from(g[a.COUNTRY][t.currencySelected]).filter((function(e){return-1==e.indexOf("P2P")})).length},f.allProviderCheckedInFiltersDialog=t.allProviderCheckedInFiltersDialog,t.allProviderP2PCheckedInFiltersDialog=function(){return 0==Array.from(g[a.COUNTRY][t.currencySelected]).filter((function(e){return e.indexOf("P2P")>-1})).length},f.allProviderP2PCheckedInFiltersDialog=t.allProviderP2PCheckedInFiltersDialog,t.isProvidersInFiltersIndeterminated=function(){var e=Array.from(g[a.COUNTRY][t.currencySelected]).filter((function(e){return-1==e.indexOf("P2P")})).length;return e>0&&e!=t.getProvidersWithoutP2P().length&&!t.allProviderCheckedInFiltersDialog()},f.isProvidersInFiltersIndeterminated=t.isProvidersInFiltersIndeterminated,t.isProvidersP2PInFiltersIndeterminated=function(){var e=Array.from(g[a.COUNTRY][t.currencySelected]).filter((function(e){return e.indexOf("P2P")>-1})).length;return e>0&&e!=t.getP2PProviders().length&&!t.allProviderP2PCheckedInFiltersDialog()},f.isProvidersP2PInFiltersIndeterminated=t.isProvidersP2PInFiltersIndeterminated,t.toggleAllProvidersInFilters=function(){if(t.allProviderCheckedInFiltersDialog()||t.isProvidersInFiltersIndeterminated())for(A in t.getProvidersWithoutP2P())g[a.COUNTRY][t.currencySelected].add(t.getProvidersWithoutP2P()[A]);else g[a.COUNTRY][t.currencySelected]=new Set(Array.from(g[a.COUNTRY][t.currencySelected]).filter((function(e){return e.indexOf("P2P")>-1})))},f.toggleAllProvidersInFilters=t.toggleAllProvidersInFilters,t.toggleAllProvidersP2PInFilters=function(){if(t.allProviderP2PCheckedInFiltersDialog()||t.isProvidersP2PInFiltersIndeterminated())for(A in t.getP2PProviders())g[a.COUNTRY][t.currencySelected].add(t.getP2PProviders()[A]);else g[a.COUNTRY][t.currencySelected]=new Set(Array.from(g[a.COUNTRY][t.currencySelected]).filter((function(e){return-1==e.indexOf("P2P")})))},f.toggleAllProvidersP2PInFilters=t.toggleAllProvidersP2PInFilters,t.doFilter=function(){if(m[a.COUNTRY][t.currencySelected].size!=g[a.COUNTRY][t.currencySelected].size||JSON.stringify(Array.from(m[a.COUNTRY][t.currencySelected]).sort())!==JSON.stringify(Array.from(g[a.COUNTRY][t.currencySelected]).sort())||S[a.COUNTRY].size!=y[a.COUNTRY].size||JSON.stringify(Array.from(S[a.COUNTRY]).sort())!==JSON.stringify(Array.from(y[a.COUNTRY]).sort())){for(var e in m[a.COUNTRY][t.currencySelected]=new Set(g[a.COUNTRY][t.currencySelected]),S[a.COUNTRY]=new Set(y[a.COUNTRY]),p[a.COUNTRY])a.localStorage.setItem(a.COUNTRY+"_blocked_providers_"+p[a.COUNTRY][e],JSON.stringify(Array.from(m[a.COUNTRY][p[a.COUNTRY][e]])));a.localStorage.setItem(a.COUNTRY+"_blocked_cryptos",JSON.stringify(Array.from(S[a.COUNTRY]))),t.updatePrices(void 0,!0)}i.hide()},f.doFilter=t.doFilter,t.changePriceDisabled=!1,t.whenChangeCurrency=function(e){v.push(e)},t.updatePrices=function(e,r){for(var o in N.clear(),h.clear(),r?a.dataLayer.push({event:"user_action",event_category:"providers_filtered",event_label:T().join()+"|"+Array.from(S[a.COUNTRY]).join()||"Unfiltered"}):(e&&(t.currencySelected=e),a.dataLayer.push({event:"user_action",event_category:"currency_change",event_label:t.currencySelected}),t.changePriceDisabled=!0,m[a.COUNTRY][t.currencySelected]=new Set(JSON.parse(a.localStorage.getItem(a.COUNTRY+"_blocked_providers_"+t.currencySelected))),g[a.COUNTRY][t.currencySelected]=new Set(JSON.parse(a.localStorage.getItem(a.COUNTRY+"_blocked_providers_"+t.currencySelected))),S[a.COUNTRY]=new Set(JSON.parse(a.localStorage.getItem(a.COUNTRY+"_blocked_cryptos"))),y[a.COUNTRY]=new Set(JSON.parse(a.localStorage.getItem(a.COUNTRY+"_blocked_cryptos"))),d.clear()),O={},_={},v)v[o]();r?(b=!0,l((function(){b=!1}),1e3)):l((function(){t.changePriceDisabled=!1}),2500),a.localStorage.setItem(a.COUNTRY+"_currency_selected",t.currencySelected),f.currencySelected=t.currencySelected},t.btc_title="<i class='crypto-icon btc'></i> <h2>BITCOIN</h2>",t.eth_title="<i class='crypto-icon eth'></i> <h2>ETHEREUM</h2>",t.dai_title="<i class='crypto-icon dai'></i> <h2>DAI</h2>",t.usdc_title="<i class='crypto-icon usdc'></i> <h2>USDC</h2>",t.usdt_title="<i class='crypto-icon usdt'></i> <h2>USDT</h2>",t.bnb_title="<i class='crypto-icon bnb'></i> <h2>BNB</h2>",t.uni_title="<i class='crypto-icon uni'><img src='https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=010'></i> <h2>UNI</h2>",t.ada_title="<i class='crypto-icon ada'></i> <h2>ADA</h2>",t.ltc_title="<i class='crypto-icon ltc'></i> <h2>LTC</h2>",t.coinsData={},t.showP2PModal=function(r,o,n,l,c){var s={name:"",ask:{},bid:{}};r.indexOf("okex")>-1&&t.track("okex_sponsored_"+o+"_"+n,"click");for(var d=0;d<t.coinsData[o][n].length;d++)if("object"==e(t.coinsData[o][n][d])&&t.coinsData[o][n][d].fields.id==r){s.name=t.coinsData[o][n][d].fields.name,s[n]=t.coinsData[o][n][d],f.p2pLimitAvailable=t.coinsData[o][n][d].fields.prices[t.currencySelected]&&t.coinsData[o][n][d].fields.prices[t.currencySelected][n]&&t.coinsData[o][n][d].fields.prices[t.currencySelected][n].length>0&&null!=t.coinsData[o][n][d].fields.prices[t.currencySelected][n][0].limit;break}f.p2pOperationType=n,f.p2pModalData=s,f.p2pModalData[n]&&f.p2pModalData[n].fields.prices[t.currencySelected][n]&&0!=f.p2pModalData[n].fields.prices[t.currencySelected][n].length||i.cancel(),c||(f.p2pCoinSelected=o.toUpperCase(),f.p2pModalTitle=t[o+"_title"],t.p2pModalProviderId=r,R.open=!0,R.coin=o,R.operationType=n,R.provider=r,a.dataLayer.push({event:"user_action",event_category:"p2p_modal_"+r+"_open",event_label:r+"_"+o+"_"+n}),i.show({templateUrl:"/"+a.COUNTRY+"/partials/p2p-dialog",controller:function(){return f},controllerAs:"ctrl",parent:angular.element(document.body),targetEvent:l,clickOutsideToClose:!0,escapeToClose:!0,fullscreen:!0,onRemoving:function(){R.open=!1}}))},t.showFeesModal=function(e,o){i.show({templateUrl:"/"+a.COUNTRY+"/partials/gas-dialog/"+e+"/"+("btc"==e?r.coin_prices.data.bitcoin.usd:r.coin_prices.data.ethereum.usd),parent:angular.element(document.body),targetEvent:o,controller:function(){this.cancelModal=t.cancelModal},controllerAs:"ctrl",bindToController:!0,clickOutsideToClose:!0,escapeToClose:!0,fullscreen:!0})},t.specificRollData={};var w={body:a.i18n["modulo-arbitrajes.alertas.alerta.new.text"],icon:"/static/img/logo-web.png?v1"},D=new Set;for(var A in a.AVAILABLE_COINS)D.add(a.AVAILABLE_COINS[A].toUpperCase());function Y(){t.rollsLoadingStatus="indeterminate",o.get(a.PRICES_ENDPOINT+"/rolls/"+t.currencySelected+(T().length>0?"?not="+T().join():""),{headers:{"If-None-Match":O[t.currencySelected+T().join("")]}}).then((function(e){var r=[];O[t.currencySelected+T().join("")]=e.headers("Etag");var o="";for(var n in Array.from(D))k(!1,Array.from(D)[n].toLowerCase());var i="",c=[];for(var n in e.data){if(o!=e.data[n].k&&(o=e.data[n].k),e.data[n].buy.fields[t.currencySelected]&&e.data[n].sell.fields[t.currencySelected]){e.data[n].buy.fields.price=e.data[n].buy.fields[t.currencySelected],e.data[n].sell.fields.price=e.data[n].sell.fields[t.currencySelected],e.data[n].buy.fields.currencyMask=["ARS","MXN","CLP","COP"].indexOf(t.currencySelected)>-1?"$":"BRL"==t.currencySelected?"R$":"VES"==t.currencySelected?"Bs.":"PEN"==t.currencySelected?"S/":"US$",e.data[n].sell.fields.currencyMask=["ARS","MXN","CLP","COP"].indexOf(t.currencySelected)>-1?"$":"BRL"==t.currencySelected?"R$":"VES"==t.currencySelected?"Bs.":"PEN"==t.currencySelected?"S/":"US$";for(var s=!1,d=0;d<r.length&&!s;d++)r[d].k==o&&(s=!0);c[o]=c[o]||[],c[o].push(e.data[n]),s||r.push(e.data[n]),""!=i&&i!=o&&k(!0,i,c[i]),e.data.length-1==n&&k(!0,o,c[o])}else""!=i&&i!=o&&k(!1,i);i=o}if(t.rollsLoadingStatus="determinate",!window.IS_MOBILE){var u=new Set,f=new Set,p=new Set;for(var n in D.forEach(p.add,p),r)if(p.delete(r[n].k.toUpperCase()),!t.customAlertsEnabled||t.customAlertsEnabled&&t.customAlertsConfig.coins.filter((function(e){return e.code==r[n].k.toUpperCase()&&e.selected})).length>0&&parseFloat(r[n].difference.replace(",","."))>=t.customAlertsConfig.profit){if(N.has(r[n].k.toUpperCase())&&h.has(r[n].k.toUpperCase()+"|"+r[n].buy.fields.name.toUpperCase()+"|"+r[n].sell.fields.name.toUpperCase()))h.has(r[n].k.toUpperCase()+"|"+r[n].buy.fields.name.toUpperCase()+"|"+r[n].sell.fields.name.toUpperCase())&&parseFloat(r[n].difference.replace(",","."))-h.get(r[n].k.toUpperCase()+"|"+r[n].buy.fields.name.toUpperCase()+"|"+r[n].sell.fields.name.toUpperCase())>=.5&&f.add(r[n].k.toUpperCase());else{N.add(r[n].k.toUpperCase()),u.add(r[n].k.toUpperCase());var m=Array.from(h.keys());for(var g in m)m[g].substring(0,3)==r[n].k.toUpperCase()&&h.delete(m[g])}h.set(r[n].k.toUpperCase()+"|"+r[n].buy.fields.name.toUpperCase()+"|"+r[n].sell.fields.name.toUpperCase(),parseFloat(r[n].difference.replace(",",".")))}if(p.forEach(N.delete,N),document.hidden&&!window.IS_MOBILE&&"Notification"in window&&"granted"===Notification.permission&&t.alertsEnabled&&(u.size>0||f.size>0)){if(u.forEach(N.add,N),f.forEach(N.add,N),u.size>0){var S="",y=(n=1,JSON.parse(JSON.stringify(w)));u.forEach((function(e){2==n&&u.size==n?S+=" "+a.i18n.and+" "+e:2==n?S+=", "+e:1==n&&(S+=e),n++}));var C=0;2==u.size?(C=1,y.body=a.i18n["modulo-arbitrajes.alertas.alerta.text"]):u.size>2&&(C=2,y.body=a.i18n["modulo-arbitrajes.alertas.alerta.many.text"]),y.body=y.body.replace("$COIN",S),new Notification(["📣","🎉","🥳"][C]+" "+a.i18n["modulo-arbitrajes.alertas.alerta.title"],y).onclick=function(){window.focus(),a.dataLayer.push({event:"user_action",event_category:"notification",event_label:"click"})};var v=[];h.forEach((function(e,t){v.push(t+"|"+e)})),a.dataLayer.push({event:"system_action",event_category:"notification_sended",event_label:v.toString(",")})}if(f.size>0){var _=0;u.size>0&&(_=1e4),l((function(){var e="",t=1,r=JSON.parse(JSON.stringify(w));f.forEach((function(r){2==t&&f.size==t?e+=" "+a.i18n.and+" "+r:2==t?e+=", "+r:1==t&&(e+=r),t++})),f.size<=2?r.body=a.i18n["modulo-arbitrajes.alertas.alerta.more-profit.text"]:f.size>2&&(r.body=a.i18n["modulo-arbitrajes.alertas.alerta.more-profit.many.text"]),r.body=r.body.replace("$COIN",e),new Notification(["💰","📈","🔥"][Math.floor(3*Math.random())]+" "+a.i18n["modulo-arbitrajes.alertas.alerta.more-profit.title"],r).onclick=function(){window.focus(),a.dataLayer.push({event:"user_action",event_category:"notification",event_label:"click"})}}),_)}}}}),(function(e){304!==e.status&&k(!1),t.rollsLoadingStatus="determinate"}))}function k(r,o,n){if(o&&S[a.COUNTRY].has(o.toUpperCase()))return delete t.specificRollData[o],!1;if(o){for(var l in t.specificRollData[o]=t.specificRollData[o]||[],t.specificRollData[o])delete t.specificRollData[o][l].manuallySetted,t.specificRollData[o][l]=t.specificRollData[o][l]||{};if(n){for(var l in n)t.specificRollData[o][l]=t.specificRollData[o][l]||{},t.specificRollData[o][l].data=n[l],parseFloat(t.specificRollData[o][l].data.difference.replace(",","."))>=3.5&&t.specificRollData[o][l].data.buy.fields.score&&t.specificRollData[o][l].data.buy.fields.score.count>=10&&t.specificRollData[o][l].data.sell.fields.score&&t.specificRollData[o][l].data.sell.fields.score.count>=10&&t.specificRollData[o][l].data.buy.fields.score.average_transfer_speed_rating>=3.5&&t.specificRollData[o][l].data.sell.fields.score.average_transfer_speed_rating>=3.5?(t.specificRollData[o][l].score=3,t.trackSystem("unique_opportunity","show")):delete t.specificRollData[o][l].score,"ar"==a.COUNTRY&&"object"==e(t.specificRollData[o][l])&&"satoshitango"==t.specificRollData[o][l].data.buy.fields.id&&(t.specificRollData[o][l].data.buy.fields.infoAccess=!0,t.specificRollData[o][l].data.buy.fields.infoUrl="https://www.satoshitango.com/blog/como-comprar-bitcoins-con-satoshitango/"),"ar"==a.COUNTRY&&"object"==e(t.specificRollData[o][l])&&"satoshitango"==t.specificRollData[o][l].data.sell.fields.id&&(t.specificRollData[o][l].data.sell.fields.infoAccess=!0,t.specificRollData[o][l].data.sell.fields.infoUrl="https://www.satoshitango.com/blog/como-comprar-bitcoins-con-satoshitango/");t.carouselDataByCoin[o].index>=t.specificRollData[o].length&&(t.carouselDataByCoin[o].index=0)}else delete t.specificRollData[o]}else if(!r){var i=Object.keys(t.specificRollData);for(var l in i)delete t.specificRollData[i[l]]}}t.showFiltersDialog=function(e){b||(t.visibleFiltersDialog=!0,i.show({templateUrl:"/"+a.COUNTRY+"/partials/filters-dialog",controller:function(){return f},controllerAs:"ctrl",parent:angular.element(document.body),targetEvent:e,clickOutsideToClose:!0,escapeToClose:!0,fullscreen:!0,onRemoving:function(){t.visibleFiltersDialog=!1,g[a.COUNTRY][t.currencySelected]=new Set(JSON.parse(a.localStorage.getItem(a.COUNTRY+"_blocked_providers_"+t.currencySelected))),y[a.COUNTRY]=new Set(JSON.parse(a.localStorage.getItem(a.COUNTRY+"_blocked_cryptos")))}}))};var E=!1,F=!1;t.showRollCalculatorDialog=function(e,r,o){E=!1,F=!1,f.showCalculatorWarning=!1,a.dataLayer.push({event:"user_action",event_category:"roll_calculator",event_label:"open_"+r+"_"+t.currencySelected}),t.selectedCoinForRoll=r,f.selectedCoinForRoll=r,f.rollCalculator={amount:"BTC"!=r.toUpperCase()&&"ETH"!=r.toUpperCase()?(1e3*t.specificRollData[f.selectedCoinForRoll][o].data.buy.fields[t.currencySelected].ask).toString().replace(".",","):t.specificRollData[f.selectedCoinForRoll][o].data.buy.fields[t.currencySelected].ask.toString().replace(".",",")},f.calculatorRollData=Object.assign({},t.specificRollData[r][o]);var n=t.specificRollData[r][o].data.buy.fields.id+"-"+t.specificRollData[r][o].data.sell.fields.id,l=t.$watch("specificRollData[selectedCoinForRoll]",(function(e,r){var o=!1,l=!1;if(e)for(var i in e)if(e[i].data.buy.fields.id+"-"+e[i].data.sell.fields.id==n){e=e[i],o=!0;break}if(e&&!o&&(e=void 0),r)for(var i in r)if(r[i].data.buy.fields.id+"-"+r[i].data.sell.fields.id==n){r=r[i],l=!0;break}r&&!l&&(r=void 0),e&&e.manuallySetted||e===r||(E||e&&(!e||e===r||e.data.buy.fields.name===r.data.buy.fields.name&&e.data.sell.fields.name===r.data.sell.fields.name)?E||F||e===r||e.data.buy.fields.name!==r.data.buy.fields.name||e.data.sell.fields.name!==r.data.sell.fields.name||e.data.buy.fields[t.currencySelected].ask===r.data.buy.fields[t.currencySelected].ask&&e.data.sell.fields[t.currencySelected].bid===r.data.sell.fields[t.currencySelected].bid||(F=!0,f.calculatorWarningText=a.i18n["modulo-arbitrajes.calculadora.roll-updated"],f.calculatorWarningCTAText=a.i18n["modulo-arbitrajes.calculadora.roll-updated.cta"],f.calculatorWarningCTAAvailable=!0,f.showCalculatorWarning=!0):(E=!0,f.calculatorWarningText=a.i18n["modulo-arbitrajes.calculadora.roll-unavailable"],f.calculatorWarningCTAAvailable=!1,f.showCalculatorWarning=!0))}),!0);t.selectedRollIndexNumber=o,i.show({templateUrl:"/"+a.COUNTRY+"/partials/roll-calculator-dialog",controller:function(){return f},controllerAs:"ctrl",parent:angular.element(document.body),targetEvent:e,clickOutsideToClose:!0,escapeToClose:!0,fullscreen:!0,onRemoving:function(){l()}})},t.updateValuesInRollCalculator=function(){f.calculatorWarningCTAAvailable&&(t.specificRollData[f.selectedCoinForRoll][t.selectedRollIndexNumber].manuallySetted=!0,f.calculatorRollData=Object.assign({},t.specificRollData[f.selectedCoinForRoll][t.selectedRollIndexNumber]),f.showCalculatorWarning=!1,F=!1)},f.updateValuesInRollCalculator=t.updateValuesInRollCalculator,t.getMinimumRollInversion=function(e){if(!e||!e.buy.fields[t.currencySelected]||!e.sell.fields[t.currencySelected])return!1;if(e){var r=1e6/e.buy.fields[t.currencySelected].ask*e.sell.fields[t.currencySelected].bid-1e6;return 1e6*(t.minimumRollInversionPerCountry[a.COUNTRY]+e.gas_costs)/r}},t.showAlertsPermissionDialog=function(e,r){t.alertsForcedFiltersStep=r,r?f.customizeAlerts():(f.step1Alerts=!0,f.step2Alerts=!1,f.step3Alerts=!1),f.availableOptionsForAlerts=t.availableOptionsForAlerts,i.show({templateUrl:"/"+a.COUNTRY+"/partials/alerts-permission-dialog",controller:function(){return f},controllerAs:"ctrl",parent:angular.element(document.body),targetEvent:e,clickOutsideToClose:!0,escapeToClose:!0,fullscreen:!0})};var L={body:a.i18n["modulo-arbitrajes.alertas.alerta.welcome.text"],icon:"/static/img/logo-web.png?v1"},x={body:a.i18n["modulo-arbitrajes.alertas.alerta.welcome.custom-alerts.text"],icon:"/static/img/logo-web.png?v1"};if(t.customAlertsEnabled?t.availableOptionsForAlerts=JSON.parse(a.localStorage.getItem(a.COUNTRY+"_custom_alerts_config"))||{}:t.availableOptionsForAlerts={coins:[],profit:void 0},t.availableOptionsForAlerts.coins||0==t.availableOptionsForAlerts.coins.length)for(var A in t.availableOptionsForAlerts={coins:[],profit:void 0},Array.from(D))t.availableOptionsForAlerts.coins.push({code:Array.from(D)[A],selected:!1});else for(var A in Array.from(D)){var B=!1;for(var M in t.availableOptionsForAlerts.coins)t.availableOptionsForAlerts.coins[M].code==Array.from(D)[A]&&(B=!0);B||t.availableOptionsForAlerts.coins.push({code:Array.from(D)[A],selected:!1})}t.isCoinsIndeterminatedInAlertCustomization=function(){return t.availableOptionsForAlerts.coins.filter((function(e){return e.selected})).length>0&&!t.allCoinsSelectedInAlertCustomization()},f.isCoinsIndeterminatedInAlertCustomization=t.isCoinsIndeterminatedInAlertCustomization,t.allCoinsSelectedInAlertCustomization=function(){return 0===t.availableOptionsForAlerts.coins.filter((function(e){return!e.selected})).length},f.allCoinsSelectedInAlertCustomization=t.allCoinsSelectedInAlertCustomization,t.anyCoinSelectedInCustomization=function(){return t.availableOptionsForAlerts.coins.filter((function(e){return e.selected})).length>0},f.anyCoinSelectedInCustomization=t.anyCoinSelectedInCustomization,t.toggleAllCoinsInAlertCustomization=function(){t.allCoinsSelectedInAlertCustomization()?t.availableOptionsForAlerts.coins.forEach((function(e){e.selected=!1})):t.availableOptionsForAlerts.coins.filter((function(e){return!e.selected})).forEach((function(e){e.selected=!0}))},f.toggleAllCoinsInAlertCustomization=t.toggleAllCoinsInAlertCustomization,f.customizeAlerts=function(){f.step1Alerts=!1,f.step2Alerts=!0,f.step3Alerts=!1},f.enableAlerts=function(){f.step1Alerts=!1,f.step2Alerts=!1,f.step3Alerts=!0,t.customAlertsConfig=t.availableOptionsForAlerts,a.localStorage.setItem(a.COUNTRY+"_custom_alerts_config",angular.toJson(t.customAlertsConfig)),a.dataLayer.push({event:"user_action",event_category:"notifications_configured",event_label:t.customAlertsConfig.coins.filter((function(e){return e.selected})).map((function(e){return e.code})).toString(",")+"|"+t.customAlertsConfig.profit}),"Notification"in window&&"granted"===Notification.permission?(t.cancelModal(),a.localStorage.getItem(a.COUNTRY+"_custom_alerts_enabled")?t.alertsForcedFiltersStep?u.sendSnackbarAlert(a.i18n["modulo-arbitrajes.alertas.alerta.saved"]):new Notification(a.i18n["modulo-arbitrajes.alertas.alerta.welcome.title"],L):new Notification(a.i18n["modulo-arbitrajes.alertas.alerta.custom-alerts.welcome"],x),t.alertsEnabled=!0,t.customAlertsEnabled=!0,a.localStorage.removeItem(a.COUNTRY+"_generic_alerts_enabled"),a.localStorage.setItem(a.COUNTRY+"_custom_alerts_enabled",!0),a.dataLayer.push({event:"notifications_change",event_category:"user_action",event_label:"re_enabled_with_customization"})):"Notification"in window&&"denied"!==Notification.permission&&Notification.requestPermission().then((function(e){"granted"===e?(t.cancelModal(),new Notification(a.i18n["modulo-arbitrajes.alertas.alerta.welcome.title"],L),t.alertsEnabled=!0,t.customAlertsEnabled=!0,a.localStorage.removeItem(a.COUNTRY+"_generic_alerts_enabled"),a.localStorage.setItem(a.COUNTRY+"_custom_alerts_enabled",!0),a.dataLayer.push({event:"user_action",event_category:"notifications_change",event_label:"enabled_with_customization"})):a.dataLayer.push({event:"user_action",event_category:"notifications_change",event_label:"rejected_with_customization"})}))},t.disableAlerts=function(){t.cancelModal(),t.alertsEnabled=!1,t.customAlertsEnabled=!1,t.customAlertsConfig={},a.localStorage.setItem(a.COUNTRY+"_generic_alerts_enabled",!1),a.localStorage.setItem(a.COUNTRY+"_custom_alerts_enabled",!1),a.localStorage.removeItem(a.COUNTRY+"_custom_alerts_config"),u.sendSnackbarAlert(a.i18n["modulo-arbitrajes.alertas.disabled.text"]),a.dataLayer.push({event:"notifications_change",event_category:"user_action",event_label:"disabled"})},f.disableAlerts=t.disableAlerts,t.cancelModal=function(){i.cancel()},f.cancelModal=t.cancelModal;var $,J=($=".comparative-tables-menu-item",function(e,t,r){this._mdPanelRef=e,this.$timeout=t,this.$window=r,this.custom_class=$});J.$inject=["mdPanelRef","$timeout","$window"],J.prototype.$onInit=function(){this.$timeout((function(){var e=document.querySelector(this.custom_class+".selected");e?angular.element(e).focus():angular.element(document.querySelectorAll(this.custom_class)[0]).focus()}))},J.prototype.selectOption=function(e){this._mdPanelRef&&this._mdPanelRef.close().then((function(){a.location.href=e}))},J.prototype.indexOf=function(e,t){for(var r,a=0;r=e[a];a++)if(r===t)return a;return-1},J.prototype.onMouseOver=function(e){angular.element(e.srcElement||e.target).focus()},J.prototype.onKeydown=function(e,t){var r,a;switch(e.which){case 38:(a=document.querySelectorAll(this.custom_class))[(this.indexOf(a,document.activeElement)+a.length-1)%a.length].focus(),r=!0;break;case 40:(a=document.querySelectorAll(this.custom_class))[(this.indexOf(a,document.activeElement)+1)%a.length].focus(),r=!0;break;case 13:case 32:this.selectOption(t),r=!0;break;case 9:this._mdPanelRef&&this._mdPanelRef.close()}r&&(e.preventDefault(),e.stopImmediatePropagation())},t.showComparativeTablesMenu=function(e,t,r){var o=s.newPanelPosition().relativeTo(".comparative-tables-menu-button-"+t+"-"+r.fields.id).addPanelPosition(s.xPosition.ALIGN_START,s.yPosition.BELOW),n={options:[]};-1==r.fields.id.indexOf("p2p")&&n.options.push({text:"Ficha técnica",url:a.SITE_URL+a.TECHNICAL_DATA_URL+"/"+("ripio-exchange"==r.fields.id?"ripio":r.fields.id)}),n.options.push({text:a.i18n["provider-reviews.title"],url:a.SITE_URL+a.i18n["ranking.url"]+"/"+("ripio-exchange"==r.fields.id?"ripio":r.fields.id)+"/"});var l={attachTo:angular.element(document.body),controller:J,controllerAs:"ctrl",template:'<div class="comparative-tables-menu"      role="listbox">  <div class="comparative-tables-menu-item"        tabindex="-1"        role="option"        ng-repeat="option in ctrl.options"        ng-click="ctrl.selectOption(option.url)"       ng-mouseover="ctrl.onMouseOver($event)"       ng-keydown="ctrl.onKeydown($event, option.url)">    {{ option.text }}   </div></div>',position:o,locals:n,openFrom:e,clickOutsideToClose:!0,escapeToClose:!0,focusOnOpen:!1,zIndex:10};s.open(l)},!window.IS_MOBILE&&"Notification"in window&&"granted"===Notification.permission&&t.alertsEnabled||(t.alertsEnabled=!1,a.localStorage.setItem(a.COUNTRY+"_generic_alerts_enabled",!1));var j=["ask","bid"],z=[];for(var A in Y(),a.AVAILABLE_COINS)for(var V in j)P(a.AVAILABLE_COINS[A],j[V]),z[a.AVAILABLE_COINS[A]+j[V]]={interval:n((function(e,t){P(e,t)}),6e4,0,!0,a.AVAILABLE_COINS[A],j[V]),handled:!0},function(e,t){v.push((function(){P(e,t)}))}(a.AVAILABLE_COINS[A],j[V]);var W,H,q=n(Y,6e4),X=!0;document.addEventListener("visibilitychange",(function(){var e=t.getAlertsEnabled();for(var r in e||(X=!0,n.cancel(q),l.cancel(W),document.hidden?X=!1:(q=n(Y,6e4),W=l(Y,500))),a.AVAILABLE_COINS){var o=a.AVAILABLE_COINS[r];for(var i in j){var c=j[i];z[o+c]=z[o+c]||{};var s=z[o+c];s.handled=!0,n.cancel(s.interval),l.cancel(s.future_execution),document.hidden?s.handled=!1:(s.interval=n((function(e,t){P(e,t)}),6e4,0,!0,o,c),s.future_execution=l((function(e,t){P(e,t)}),500,!0,o,c))}}})),window.addEventListener("focus",(function(){var e=t.getAlertsEnabled();for(var r in e||(l.cancel(H),H=l((function(){X||(n.cancel(q),l.cancel(W),q=n(Y,6e4),W=l(Y,1),X=!0)}),499)),a.AVAILABLE_COINS){var o=a.AVAILABLE_COINS[r];for(var i in j){var c=j[i];z[o+c]=z[o+c]||{};var s=z[o+c];l.cancel(s.focusTimeout),s.focusTimeout=l((function(){s.handled||(n.cancel(s.interval),l.cancel(s.future_execution),s.interval=n((function(e,t){P(e,t)}),6e4,0,!0,o,c),s.future_execution=l((function(e,t){P(e,t)}),1,!0,o,c))}),499)}}}))}]).filter("makePositive",(function(){return function(e){return Math.abs(e)}})).directive("sanitizeCalculatorInput",(function(){return{require:"ngModel",link:function(e,t,r,a){e.$watch(r.ngModel,(function(e){null!=e&&(a.$setViewValue(String(e).replace(/,/g,".").replace(/\$/g,"").substring(0,9)),t.val(String(e).replace(/,/g,".").replace(/\$/g,"").substring(0,9)))}))}}})).directive("input",(function(){return{restrict:"E",require:"ngModel",link:function(e,t,r,a){"number"===t[0].type&&(a.$parsers.push((function(e){return Number(e)})),a.$formatters.push((function(e){return parseFloat(e,10)})))}}}))})();