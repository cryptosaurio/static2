(()=>{function e(i){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(i)}angular.module("app",["ngSanitize","ngMaterial","ngMessages","ngMdIcons","ngclipboard","angular.snackbar","star-rating","fayzaan.gRecaptcha.v3"]).config(["$provide","$compileProvider","$mdThemingProvider","$sceDelegateProvider","$mdAriaProvider",function(i,n,t,r,a){n.debugInfoEnabled(!1),t.disableTheming(!0),a.disableWarnings(),i.decorator("$exceptionHandler",["$delegate",function(i){return function(n,t){i(n,t),window.reportError(JSON.stringify({exception:"object"==e(n)?n.stack:""+n,cause:""+t}))}}]),r.resourceUrlWhitelist(["https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@**","**/partials/*"])}])})(),angular.module("app").controller("ReviewsRankingController",["$scope","$window","$location","$http","$timeout","$mdDialog","gRecaptcha","commonFunctionsService",function(e,i,n,t,r,a,o,s){e.tooltipCopySuccessful=s.tooltipCopySuccessful,e.track=s.track,e.showCountriesMenu=s.showCountriesMenu,e.orderByOption={option:"br"==i.COUNTRY?"melhor-medio":"mejor-promedio"},e.redirectToNewWindow=function(e,n){e.preventDefault(),i.open(n)},o.initialize({key:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI"}),e.showDialogButtonDisabled=[];var l=!1,c=function(e){l=e};e.showReviewSubmitDialog=function(n,t){e.showDialogButtonDisabled[n]||(e.showDialogButtonDisabled[n]=!0,a.show({controller:"ReviewSubmitDialogController",templateUrl:"/"+i.COUNTRY+"/partials/review-submit-dialog",parent:angular.element(document.body),targetEvent:t,clickOutsideToClose:!0,escapeToClose:!0,fullscreen:!0,locals:{extraParameters:{providerSelected:n,context:"ranking-page"},changeSubmittedState:c,gRecaptchaV3:o},onComplete:function(){e.showDialogButtonDisabled[n]=!1},onRemoving:function(i,n){l&&e.fetchRankingWhenChangeOrderByOption(e.orderByOption.option)}}))},e.fetchRankingWhenChangeOrderByOption=function(i){e.orderByOption.option=i,e.fetchRanking()},e.fetchRanking=function(){t.get(i.BARNEY_ENDPOINT+"/reviews/summarized-reviews-info/"+e.orderByOption.option).then((function(n){e.ranking=n.data,t.get(i.BARNEY_ENDPOINT+"/reviews/summarized-reviews-info/"+e.orderByOption.option+"?merge=true").then((function(i){for(var n in i.data)if(i.data[n].provider_id.indexOf("p2p")>-1)for(var t in e.ranking)if(e.ranking[t].provider_id==i.data[n].provider_id){e.ranking[t]=i.data[n];break}e.ranking.sort((function(e,i){return e.rating<i.rating||!e.rating?1:i.rating<e.rating||!i.rating?-1:0}))}),(function(){}))}),(function(){}))},r((function(){e.fetchRanking()}),0),e.getRanking=function(){return e.ranking}}]),angular.module("app").controller("ReviewSubmitDialogController",["$scope","$window","$timeout","$http","$mdDialog","extraParameters","changeSubmittedState","gRecaptchaV3",function(e,i,n,t,r,a,o,s){e.step1=!0,e.step2=!1,e.context=a.context,e.providerSelected=a.providerSelected,e.answers={provider_id:a.providerSelected,review_comment:"",transfer_speed_rating:0,liquidity_rating:0,usability_rating:0,support_rating:0,arbitrage_quality:-2},e.submitReview=function(){var r=!1;e.answers.transfer_speed_rating<1&&e.answers.liquidity_rating<1&&(r||(angular.element(-1==e.answers.provider_id.indexOf("p2p")?document.querySelector("#transfer-speed-rating-div"):document.querySelector("#liquidity-rating-div"))[0].scrollIntoView(),r=!0),e.transfer_speed_rating_is_invalid=!0),e.answers.usability_rating<1&&(r||(angular.element(document.querySelector("#usability-rating-div"))[0].scrollIntoView(),r=!0),e.usability_rating_is_invalid=!0),e.answers.support_rating<1&&(r||(angular.element(document.querySelector("#support-rating-div"))[0].scrollIntoView(),r=!0),e.support_rating_is_invalid=!0),-2==e.answers.arbitrage_quality&&-1==e.answers.provider_id.indexOf("p2p")&&(r||(angular.element(document.querySelector("#arbitrage-quality-div"))[0].scrollIntoView(),r=!0),e.arbitrage_quality_is_invalid=!0),(e.answers.review_comment.length<20||e.answers.review_comment.length>1500)&&(r||(angular.element(document.querySelector("#review-comment-area-div"))[0].scrollIntoView(),r=!0),e.review_comment_area_is_invalid=!0,e.review_comment_area_was_invalid=!0),e.review_comment_area_is_invalid||e.transfer_speed_rating_is_invalid||e.usability_rating_is_invalid||e.support_rating_is_invalid||e.arbitrage_quality_is_invalid?n((function(){e.review_comment_area_is_invalid=!1,e.transfer_speed_rating_is_invalid=!1,e.usability_rating_is_invalid=!1,e.support_rating_is_invalid=!1,e.arbitrage_quality_is_invalid=!1}),1e3):e.submitting||(e.submitting=!0,s.execute({action:"submit_review"}).then((function(n){e.answers.captcha_response=n;var r=i.BARNEY_ENDPOINT+"/"+i.COUNTRY+"/reviews/";"br"!=i.COUNTRY&&(r=i.BARNEY_ENDPOINT+"/reviews/"),t.put(r,e.answers),e.step1=!1,o(!0),e.step2=!0,e.submitting=!1})))},e.onRatingChange=function(i,n){e.answers[i]=n},e.getSelectedProvider=function(e){return angular.element(document.querySelectorAll('[value="'+e+'"]')).text().trim()},e.getSeeProviderReviewsUrl=function(e){return"/"+i.COUNTRY+"/opiniones/"+e+"/"},e.cancelModal=function(){r.cancel()}}]);