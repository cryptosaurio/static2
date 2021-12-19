/*! For license information please see 18.0f3c9cd1.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[18],{146:function(e,t,o){"use strict";o.d(t,"a",(function(){return w}));var i,n,r=o(2),a=o(0),l=o.n(a),d=o(13),s=o(4),c=o(35),u=o(6),b=o(7),v=o(23),p=o(34),h=o(49);!function(e){e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.SetOrientation=1]="SetOrientation",e[e.SetActivation=2]="SetActivation",e[e.RegisterTab=3]="RegisterTab",e[e.UnregisterTab=4]="UnregisterTab",e[e.RegisterPanel=5]="RegisterPanel",e[e.UnregisterPanel=6]="UnregisterPanel",e[e.ForceRerender=7]="ForceRerender"}(n||(n={}));var g=((i={})[n.SetSelectedIndex]=function(e,t){return e.selectedIndex===t.index?e:Object(r.b)({},e,{selectedIndex:t.index})},i[n.SetOrientation]=function(e,t){return e.orientation===t.orientation?e:Object(r.b)({},e,{orientation:t.orientation})},i[n.SetActivation]=function(e,t){return e.activation===t.activation?e:Object(r.b)({},e,{activation:t.activation})},i[n.RegisterTab]=function(e,t){return e.tabs.includes(t.tab)?e:Object(r.b)({},e,{tabs:[].concat(e.tabs,[t.tab])})},i[n.UnregisterTab]=function(e,t){return Object(r.b)({},e,{tabs:e.tabs.filter((function(e){return e!==t.tab}))})},i[n.RegisterPanel]=function(e,t){return e.panels.includes(t.panel)?e:Object(r.b)({},e,{panels:[].concat(e.panels,[t.panel])})},i[n.UnregisterPanel]=function(e,t){return Object(r.b)({},e,{panels:e.panels.filter((function(e){return e!==t.panel}))})},i[n.ForceRerender]=function(e){return Object(r.b)({},e)},i),m=Object(a.createContext)(null);function f(e){var t=Object(a.useContext)(m);if(null===t){var o=new Error("<"+e+" /> is missing a parent <Tab.Group /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(o,f),o}return t}function C(e,t){return Object(d.a)(t.type,g,e,t)}m.displayName="TabsContext";var O=a.Fragment;function w(e){var t,o,i="headlessui-tabs-tab-"+Object(v.a)(),l=f(w.name),g=l[0],m=g.selectedIndex,C=g.tabs,O=g.panels,y=g.orientation,T=g.activation,S=l[1],j=S.dispatch,x=S.change,U=Object(a.useRef)(null),F=Object(c.a)(U,(function(e){e&&j({type:n.ForceRerender})}));Object(b.a)((function(){return j({type:n.RegisterTab,tab:U}),function(){return j({type:n.UnregisterTab,tab:U})}}),[j,U]);var L=C.indexOf(U),R=L===m,D=Object(a.useCallback)((function(e){var t=C.map((function(e){return e.current})).filter(Boolean);if(e.key===u.a.Space||e.key===u.a.Enter)return e.preventDefault(),e.stopPropagation(),void x(L);switch(e.key){case u.a.Home:case u.a.PageUp:return e.preventDefault(),e.stopPropagation(),Object(p.e)(t,p.a.First);case u.a.End:case u.a.PageDown:return e.preventDefault(),e.stopPropagation(),Object(p.e)(t,p.a.Last)}return Object(d.a)(y,{vertical:function(){return e.key===u.a.ArrowUp?Object(p.e)(t,p.a.Previous|p.a.WrapAround):e.key===u.a.ArrowDown?Object(p.e)(t,p.a.Next|p.a.WrapAround):void 0},horizontal:function(){return e.key===u.a.ArrowLeft?Object(p.e)(t,p.a.Previous|p.a.WrapAround):e.key===u.a.ArrowRight?Object(p.e)(t,p.a.Next|p.a.WrapAround):void 0}})}),[C,y,L,x]),E=Object(a.useCallback)((function(){var e;null==(e=U.current)||e.focus()}),[U]),I=Object(a.useCallback)((function(){var e;null==(e=U.current)||e.focus(),x(L)}),[x,L,U]),M=Object(a.useMemo)((function(){return{selected:R}}),[R]),N={ref:F,onKeyDown:D,onFocus:"manual"===T?E:I,onClick:I,id:i,role:"tab",type:Object(h.a)(e,U),"aria-controls":null==(t=O[L])||null==(o=t.current)?void 0:o.id,"aria-selected":R,tabIndex:R?0:-1},P=e;return Object(s.d)({props:Object(r.b)({},P,N),slot:M,defaultTag:"button",name:"Tabs.Tab"})}var y=s.a.RenderStrategy|s.a.Static;w.Group=function(e){var t=e.defaultIndex,o=void 0===t?0:t,i=e.vertical,d=void 0!==i&&i,c=e.manual,u=void 0!==c&&c,b=e.onChange,v=Object(r.c)(e,["defaultIndex","vertical","manual","onChange"]),p=d?"vertical":"horizontal",h=u?"manual":"auto",g=Object(a.useReducer)(C,{selectedIndex:null,tabs:[],panels:[],orientation:p,activation:h}),f=g[0],w=g[1],y=Object(a.useMemo)((function(){return{selectedIndex:f.selectedIndex}}),[f.selectedIndex]),T=Object(a.useRef)((function(){}));Object(a.useEffect)((function(){w({type:n.SetOrientation,orientation:p})}),[p]),Object(a.useEffect)((function(){w({type:n.SetActivation,activation:h})}),[h]),Object(a.useEffect)((function(){"function"===typeof b&&(T.current=b)}),[b]),Object(a.useEffect)((function(){if(!(f.tabs.length<=0)&&null===f.selectedIndex){var e=f.tabs.map((function(e){return e.current})).filter(Boolean),t=e.filter((function(e){return!e.hasAttribute("disabled")}));if(o<0)w({type:n.SetSelectedIndex,index:e.indexOf(t[0])});else if(o>f.tabs.length)w({type:n.SetSelectedIndex,index:e.indexOf(t[t.length-1])});else{var i=e.slice(0,o),r=e.slice(o),a=[].concat(r,i).find((function(e){return t.includes(e)}));if(!a)return;w({type:n.SetSelectedIndex,index:e.indexOf(a)})}}}),[o,f.tabs,f.selectedIndex]);var S=Object(a.useRef)(f.selectedIndex),j=Object(a.useMemo)((function(){return[f,{dispatch:w,change:function(e){S.current!==e&&T.current(e),S.current=e,w({type:n.SetSelectedIndex,index:e})}}]}),[f,w]);return l.a.createElement(m.Provider,{value:j},Object(s.d)({props:Object(r.b)({},v),slot:y,defaultTag:O,name:"Tabs"}))},w.List=function e(t){var o=f([w.name,e.name].join("."))[0],i={selectedIndex:o.selectedIndex},n={role:"tablist","aria-orientation":o.orientation},a=t;return Object(s.d)({props:Object(r.b)({},a,n),slot:i,defaultTag:"div",name:"Tabs.List"})},w.Panels=function e(t){var o=f([w.name,e.name].join("."))[0].selectedIndex,i=Object(a.useMemo)((function(){return{selectedIndex:o}}),[o]);return Object(s.d)({props:t,slot:i,defaultTag:"div",name:"Tabs.Panels"})},w.Panel=function e(t){var o,i,l=f([w.name,e.name].join(".")),d=l[0],u=d.selectedIndex,p=d.tabs,h=d.panels,g=l[1].dispatch,m="headlessui-tabs-panel-"+Object(v.a)(),C=Object(a.useRef)(null),O=Object(c.a)(C,(function(e){e&&g({type:n.ForceRerender})}));Object(b.a)((function(){return g({type:n.RegisterPanel,panel:C}),function(){return g({type:n.UnregisterPanel,panel:C})}}),[g,C]);var T=h.indexOf(C),S=T===u,j=Object(a.useMemo)((function(){return{selected:S}}),[S]),x={ref:O,id:m,role:"tabpanel","aria-labelledby":null==(o=p[T])||null==(i=o.current)?void 0:i.id,tabIndex:S?0:-1},U=t;return Object(s.d)({props:Object(r.b)({},U,x),slot:j,defaultTag:"div",features:y,visible:S,name:"Tabs.Panel"})}},148:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i=o(0);function n(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var r=n(i),a=function(){return(a=Object.assign||function(e){for(var t,o=1,i=arguments.length;o<i;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function l(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}var d=function(e,t,o,n){var a=i.createRef();return i.useEffect((function(){var o;if(a.current){var i=document.createElement("script");i.src=t,i.async=!0,i.type="text/javascript","Widget"===n||"MediumWidget"===n?void 0!==typeof TradingView&&(i.onload=function(){i.innerHTML=JSON.stringify("Widget"===n?new TradingView.widget(e):"MediumWidget"===n?new TradingView.MediumWidget(e):void 0)}):i.innerHTML=JSON.stringify(e),a.current.appendChild(i),o=a.current}return function(){if(o)for(;o.firstChild;)o.removeChild(o.firstChild)}}),[a,e]),r.default.createElement("div",{ref:a,id:o})},s=function(e){for(var t="",o="abcdef0123456789",i=o.length,n=0;n<e;n++)t+=o.charAt(Math.floor(Math.random()*i));return t},c=["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],u=["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],b=[{name:"Indices",originalName:"Indices",symbols:[{name:"FOREXCOM:SPXUSD",displayName:"S&P 500"},{name:"FOREXCOM:NSXUSD",displayName:"Nasdaq 100"},{name:"FOREXCOM:DJI",displayName:"Dow 30"},{name:"INDEX:NKY",displayName:"Nikkei 225"},{name:"INDEX:DEU30",displayName:"DAX Index"},{name:"FOREXCOM:UKXGBP",displayName:"UK 100"}]},{name:"Commodities",originalName:"Commodities",symbols:[{name:"CME_MINI:ES1!",displayName:"S&P 500"},{name:"CME:6E1!",displayName:"Euro"},{name:"COMEX:GC1!",displayName:"Gold"},{name:"NYMEX:CL1!",displayName:"Crude Oil"},{name:"NYMEX:NG1!",displayName:"Natural Gas"},{name:"CBOT:ZC1!",displayName:"Corn"}]},{name:"Bonds",originalName:"Bonds",symbols:[{name:"CME:GE1!",displayName:"Eurodollar"},{name:"CBOT:ZB1!",displayName:"T-Bond"},{name:"CBOT:UB1!",displayName:"Ultra T-Bond"},{name:"EUREX:FGBL1!",displayName:"Euro Bund"},{name:"EUREX:FBTP1!",displayName:"Euro BTP"},{name:"EUREX:FGBM1!",displayName:"Euro BOBL"}]},{name:"Forex",originalName:"Forex",symbols:[{name:"FX:EURUSD"},{name:"FX:GBPUSD"},{name:"FX:USDJPY"},{name:"FX:USDCHF"},{name:"FX:AUDUSD"},{name:"FX:USDCAD"}]}],v=[{title:"Indices",symbols:[{s:"FOREXCOM:SPXUSD",d:"S&P 500"},{s:"FOREXCOM:NSXUSD",d:"Nasdaq 100"},{s:"FOREXCOM:DJI",d:"Dow 30"},{s:"INDEX:NKY",d:"Nikkei 225"},{s:"INDEX:DEU30",d:"DAX Index"},{s:"FOREXCOM:UKXGBP",d:"UK 100"}],originalTitle:"Indices"},{title:"Commodities",symbols:[{s:"CME_MINI:ES1!",d:"S&P 500"},{s:"CME:6E1!",d:"Euro"},{s:"COMEX:GC1!",d:"Gold"},{s:"NYMEX:CL1!",d:"Crude Oil"},{s:"NYMEX:NG1!",d:"Natural Gas"},{s:"CBOT:ZC1!",d:"Corn"}],originalTitle:"Commodities"},{title:"Bonds",symbols:[{s:"CME:GE1!",d:"Eurodollar"},{s:"CBOT:ZB1!",d:"T-Bond"},{s:"CBOT:UB1!",d:"Ultra T-Bond"},{s:"EUREX:FGBL1!",d:"Euro Bund"},{s:"EUREX:FBTP1!",d:"Euro BTP"},{s:"EUREX:FGBM1!",d:"Euro BOBL"}],originalTitle:"Bonds"},{title:"Forex",symbols:[{s:"FX:EURUSD"},{s:"FX:GBPUSD"},{s:"FX:USDJPY"},{s:"FX:USDCHF"},{s:"FX:AUDUSD"},{s:"FX:USDCAD"}],originalTitle:"Forex"}],p=[["Apple","AAPL"],["Google","GOOGL"],["Microsoft","MSFT"]],h=[{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"FOREXCOM:NSXUSD",title:"Nasdaq 100"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"BITSTAMP:ETHUSD",title:"ETH/USD"}],g=[{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"FOREXCOM:NSXUSD",title:"Nasdaq 100"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"BITSTAMP:ETHUSD",title:"ETH/USD"}];t.AdvancedRealTimeChart=function(e){var t=e.width,o=void 0===t?980:t,i=e.height,n=void 0===i?610:i,r=e.autosize,c=void 0!==r&&r,u=e.symbol,b=void 0===u?"NASDAQ:AAPL":u,v=e.interval,p=void 0===v?"1":v,h=e.range,g=void 0===h?void 0:h,m=e.timezone,f=void 0===m?"UTC":m,C=e.theme,O=void 0===C?"light":C,w=e.style,y=void 0===w?"1":w,T=e.locale,S=void 0===T?"en":T,j=e.toolbar_bg,x=void 0===j?"#f1f3f6":j,U=e.enable_publishing,F=void 0!==U&&U,L=e.hide_top_toolbar,R=void 0!==L&&L,D=e.hide_legend,E=void 0!==D&&D,I=e.withdateranges,M=void 0===I||I,N=e.hide_side_toolbar,P=void 0!==N&&N,k=e.allow_symbol_change,B=void 0===k||k,A=e.save_image,_=void 0===A||A,G=e.details,X=void 0!==G&&G,z=e.hotlist,Q=void 0!==z&&z,H=e.calendar,W=void 0!==H&&H,Y=e.show_popup_button,J=void 0!==Y&&Y,K=e.popup_width,V=void 0===K?"600":K,q=e.popup_height,Z=void 0===q?"400":q,$=e.watchlist,ee=void 0===$?void 0:$,te=e.studies,oe=void 0===te?void 0:te,ie=e.container_id,ne=void 0===ie?"tradingview_"+s(5):ie,re=l(e,["width","height","autosize","symbol","interval","range","timezone","theme","style","locale","toolbar_bg","enable_publishing","hide_top_toolbar","hide_legend","withdateranges","hide_side_toolbar","allow_symbol_change","save_image","details","hotlist","calendar","show_popup_button","popup_width","popup_height","watchlist","studies","container_id"]);return d(a(a(a(a(a(a(a(a({},c?{width:"100%"}:{width:o}),c?{height:"100%"}:{height:n}),{autosize:c,symbol:b}),g?{range:g}:{interval:p}),{timezone:f,theme:O,style:y,locale:S,toolbar_bg:x,enable_publishing:F,hide_top_toolbar:R,hide_legend:E,withdateranges:M,hide_side_toolbar:P,allow_symbol_change:B,save_image:_,details:X,hotlist:Q,calendar:W}),J&&{show_popup_button:J,popup_width:V,popup_height:Z}),{watchlist:ee,studies:oe,container_id:ne}),re),"https://s3.tradingview.com/tv.js",ne,"Widget")},t.CompanyProfile=function(e){var t=e.symbol,o=void 0===t?"NASDAQ:AAPL":t,i=e.width,n=void 0===i?480:i,r=e.height,s=void 0===r?650:r,c=e.autosize,u=void 0!==c&&c,b=e.colorTheme,v=void 0===b?"light":b,p=e.isTransparent,h=void 0!==p&&p,g=e.locale,m=void 0===g?"en":g,f=e.largeChartUrl,C=void 0===f?void 0:f,O=l(e,["symbol","width","height","autosize","colorTheme","isTransparent","locale","largeChartUrl"]);return d(a(a(a(a({},u?{width:"100%"}:{width:n}),u?{height:"100%"}:{height:s}),{symbol:o,colorTheme:v,isTransparent:h,locale:m,largeChartUrl:C}),O),"https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js")},t.CryptoCurrencyMarket=function(e){var t=e.width,o=void 0===t?1e3:t,i=e.height,n=void 0===i?490:i,r=e.autosize,s=void 0!==r&&r,c=e.defaultColumn,u=void 0===c?"overview":c,b=e.screener_type,v=void 0===b?"crypto_mkt":b,p=e.displayCurrency,h=void 0===p?"USD":p,g=e.colorTheme,m=void 0===g?"light":g,f=e.locale,C=void 0===f?"en":f,O=e.isTransparent,w=void 0!==O&&O,y=l(e,["width","height","autosize","defaultColumn","screener_type","displayCurrency","colorTheme","locale","isTransparent"]);return d(a(a(a(a({},s?{width:"100%"}:{width:o}),s?{height:"100%"}:{height:n}),{defaultColumn:u,screener_type:v,displayCurrency:h,colorTheme:m,locale:C,isTransparent:w}),y),"https://s3.tradingview.com/external-embedding/embed-widget-screener.js")},t.EconomicCalendar=function(e){var t=e.colorTheme,o=void 0===t?"light":t,i=e.isTransparent,n=void 0!==i&&i,r=e.width,s=void 0===r?510:r,c=e.height,u=void 0===c?600:c,b=e.autosize,v=void 0!==b&&b,p=e.locale,h=void 0===p?"en":p,g=e.importanceFilter,m=void 0===g?"-1,0,1":g,f=e.currencyFilter,C=void 0===f?void 0:f,O=l(e,["colorTheme","isTransparent","width","height","autosize","locale","importanceFilter","currencyFilter"]);return d(a(a(a(a({colorTheme:o,isTransparent:n},v?{width:"100%"}:{width:s}),v?{height:"100%"}:{height:u}),{locale:h,importanceFilter:m,currencyFilter:C}),O),"https://s3.tradingview.com/external-embedding/embed-widget-events.js")},t.ForexCrossRates=function(e){var t=e.width,o=void 0===t?770:t,i=e.height,n=void 0===i?400:i,r=e.autosize,s=void 0!==r&&r,u=e.currencies,b=void 0===u?c:u,v=e.isTransparent,p=void 0!==v&&v,h=e.colorTheme,g=void 0===h?"light":h,m=e.locale,f=void 0===m?"en":m,C=e.largeChartUrl,O=void 0===C?void 0:C,w=l(e,["width","height","autosize","currencies","isTransparent","colorTheme","locale","largeChartUrl"]);return d(a(a(a(a({},s?{width:"100%"}:{width:o}),s?{height:"100%"}:{height:n}),{currencies:b,isTransparent:p,colorTheme:g,locale:f,largeChartUrl:O}),w),"https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js")},t.ForexHeatMap=function(e){var t=e.width,o=void 0===t?700:t,i=e.height,n=void 0===i?400:i,r=e.autosize,s=void 0!==r&&r,c=e.currencies,b=void 0===c?u:c,v=e.isTransparent,p=void 0!==v&&v,h=e.colorTheme,g=void 0===h?"light":h,m=e.locale,f=void 0===m?"en":m,C=e.largeChartUrl,O=void 0===C?void 0:C,w=l(e,["width","height","autosize","currencies","isTransparent","colorTheme","locale","largeChartUrl"]);return d(a(a(a(a({},s?{width:"100%"}:{width:o}),s?{height:"100%"}:{height:n}),{currencies:b,isTransparent:p,colorTheme:g,locale:f,largeChartUrl:O}),w),"https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js")},t.FundamentalData=function(e){var t=e.symbol,o=void 0===t?"NASDAQ:AAPL":t,i=e.colorTheme,n=void 0===i?"light":i,r=e.isTransparent,s=void 0!==r&&r,c=e.largeChartUrl,u=void 0===c?void 0:c,b=e.displayMode,v=void 0===b?"regular":b,p=e.width,h=void 0===p?480:p,g=e.height,m=void 0===g?830:g,f=e.autosize,C=void 0!==f&&f,O=e.locale,w=void 0===O?"en":O,y=l(e,["symbol","colorTheme","isTransparent","largeChartUrl","displayMode","width","height","autosize","locale"]);return d(a(a(a(a({},C?{width:"100%"}:{width:h}),C?{height:"100%"}:{height:m}),{symbol:o,colorTheme:n,isTransparent:s,largeChartUrl:u,displayMode:v,locale:w}),y),"https://s3.tradingview.com/external-embedding/embed-widget-financials.js")},t.MarketData=function(e){var t=e.width,o=void 0===t?770:t,i=e.height,n=void 0===i?450:i,r=e.autosize,s=void 0!==r&&r,c=e.symbolsGroups,u=void 0===c?b:c,v=e.showSymbolLogo,p=void 0===v||v,h=e.colorTheme,g=void 0===h?"light":h,m=e.isTransparent,f=void 0!==m&&m,C=e.locale,O=void 0===C?"en":C,w=e.largeChartUrl,y=void 0===w?void 0:w,T=l(e,["width","height","autosize","symbolsGroups","showSymbolLogo","colorTheme","isTransparent","locale","largeChartUrl"]);return d(a(a(a(a({},s?{width:"100%"}:{width:o}),s?{height:"100%"}:{height:n}),{symbolsGroups:u,showSymbolLogo:p,colorTheme:g,isTransparent:f,locale:O,largeChartUrl:y}),T),"https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js")},t.MarketOverview=function(e){var t=e.colorTheme,o=void 0===t?"light":t,i=e.dateRange,n=void 0===i?"12M":i,r=e.showChart,s=void 0===r||r,c=e.locale,u=void 0===c?"en":c,b=e.largeChartUrl,p=void 0===b?void 0:b,h=e.isTransparent,g=void 0!==h&&h,m=e.showSymbolLogo,f=void 0===m||m,C=e.showFloatingTooltip,O=void 0!==C&&C,w=e.width,y=void 0===w?400:w,T=e.height,S=void 0===T?660:T,j=e.autosize,x=void 0!==j&&j,U=e.plotLineColorGrowing,F=void 0===U?"rgba(33, 150, 243, 1)":U,L=e.plotLineColorFalling,R=void 0===L?"rgba(33, 150, 243, 1)":L,D=e.gridLineColor,E=void 0===D?"rgba(240, 243, 250, 1)":D,I=e.scaleFontColor,M=void 0===I?"rgba(120, 123, 134, 1)":I,N=e.belowLineFillColorGrowing,P=void 0===N?"rgba(33, 150, 243, 0.12)":N,k=e.belowLineFillColorFalling,B=void 0===k?"rgba(33, 150, 243, 0.12)":k,A=e.belowLineFillColorGrowingBottom,_=void 0===A?"rgba(41, 98, 255, 0)":A,G=e.belowLineFillColorFallingBottom,X=void 0===G?"rgba(41, 98, 255, 0)":G,z=e.symbolActiveColor,Q=void 0===z?"rgba(33, 150, 243, 0.12)":z,H=e.tabs,W=void 0===H?v:H,Y=l(e,["colorTheme","dateRange","showChart","locale","largeChartUrl","isTransparent","showSymbolLogo","showFloatingTooltip","width","height","autosize","plotLineColorGrowing","plotLineColorFalling","gridLineColor","scaleFontColor","belowLineFillColorGrowing","belowLineFillColorFalling","belowLineFillColorGrowingBottom","belowLineFillColorFallingBottom","symbolActiveColor","tabs"]);return d(a(a(a(a(a({colorTheme:o,dateRange:n,showChart:s,locale:u,largeChartUrl:p,isTransparent:g,showSymbolLogo:f,showFloatingTooltip:O},x?{width:"100%"}:{width:y}),x?{height:"100%"}:{height:S}),s&&{plotLineColorGrowing:F,plotLineColorFalling:R,gridLineColor:E,scaleFontColor:M,belowLineFillColorGrowing:P,belowLineFillColorFalling:B,belowLineFillColorGrowingBottom:_,belowLineFillColorFallingBottom:X,symbolActiveColor:Q}),{tabs:W}),Y),"https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js")},t.MiniChart=function(e){var t=e.symbol,o=void 0===t?"FX:EURUSD":t,i=e.width,n=void 0===i?350:i,r=e.height,s=void 0===r?220:r,c=e.locale,u=void 0===c?"en":c,b=e.dateRange,v=void 0===b?"12M":b,p=e.colorTheme,h=void 0===p?"light":p,g=e.trendLineColor,m=void 0===g?"rgba(41, 98, 255, 1)":g,f=e.underLineColor,C=void 0===f?"rgba(41, 98, 255, 0.3)":f;e.underLineBottomColor;var O=e.isTransparent,w=void 0!==O&&O,y=e.autosize,T=void 0!==y&&y,S=e.largeChartUrl,j=void 0===S?void 0:S,x=l(e,["symbol","width","height","locale","dateRange","colorTheme","trendLineColor","underLineColor","underLineBottomColor","isTransparent","autosize","largeChartUrl"]);return d(a(a(a(a({symbol:o},T?{width:"100%"}:{width:n}),T?{height:"100%"}:{height:s}),{locale:u,dateRange:v,colorTheme:h,trendLineColor:m,underLineColor:C,isTransparent:w,autosize:T,largeChartUrl:j}),x),"https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js")},t.Screener=function(e){var t=e.width,o=void 0===t?1100:t,i=e.height,n=void 0===i?512:i,r=e.autosize,s=void 0!==r&&r,c=e.defaultColumn,u=void 0===c?"overview":c,b=e.defaultScreen,v=void 0===b?"general":b,p=e.market,h=void 0===p?"forex":p,g=e.showToolbar,m=void 0===g||g,f=e.colorTheme,C=void 0===f?"light":f,O=e.locale,w=void 0===O?"en":O,y=e.isTransparent,T=void 0!==y&&y,S=e.largeChartUrl,j=void 0===S?void 0:S,x=l(e,["width","height","autosize","defaultColumn","defaultScreen","market","showToolbar","colorTheme","locale","isTransparent","largeChartUrl"]);return d(a(a(a(a({},s?{width:"100%"}:{width:o}),s?{height:"100%"}:{height:n}),{defaultColumn:u,defaultScreen:v,market:h,showToolbar:m,colorTheme:C,locale:w,isTransparent:T,largeChartUrl:j}),x),"https://s3.tradingview.com/external-embedding/embed-widget-screener.js")},t.SingleTicker=function(e){var t=e.symbol,o=void 0===t?"FX:EURUSD":t,i=e.width,n=void 0===i?350:i,r=e.autosize,s=void 0!==r&&r,c=e.colorTheme,u=void 0===c?"light":c,b=e.isTransparent,v=void 0!==b&&b,p=e.locale,h=void 0===p?"en":p,g=e.largeChartUrl,m=void 0===g?void 0:g,f=l(e,["symbol","width","autosize","colorTheme","isTransparent","locale","largeChartUrl"]);return d(a(a(a({symbol:o},s?{width:"100%"}:{width:n}),{colorTheme:u,isTransparent:v,locale:h,largeChartUrl:m}),f),"https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js")},t.StockMarket=function(e){var t=e.colorTheme,o=void 0===t?"light":t,i=e.dateRange,n=void 0===i?"12M":i,r=e.exchange,s=void 0===r?"US":r,c=e.showChart,u=void 0===c||c,b=e.locale,v=void 0===b?"en":b,p=e.largeChartUrl,h=void 0===p?void 0:p,g=e.isTransparent,m=void 0!==g&&g,f=e.showSymbolLogo,C=void 0===f||f;e.showFloatingTooltip;var O=e.width,w=void 0===O?400:O,y=e.height,T=void 0===y?600:y,S=e.autosize,j=void 0!==S&&S,x=e.plotLineColorGrowing,U=void 0===x?"rgba(33, 150, 243, 1)":x,F=e.plotLineColorFalling,L=void 0===F?"rgba(33, 150, 243, 1)":F,R=e.gridLineColor,D=void 0===R?"rgba(240, 243, 250, 1)":R,E=e.scaleFontColor,I=void 0===E?"rgba(120, 123, 134, 1)":E,M=e.belowLineFillColorGrowing,N=void 0===M?"rgba(33, 150, 243, 0.12)":M,P=e.belowLineFillColorFalling,k=void 0===P?"rgba(33, 150, 243, 0.12)":P,B=e.belowLineFillColorGrowingBottom,A=void 0===B?"rgba(41, 98, 255, 0)":B,_=e.belowLineFillColorFallingBottom,G=void 0===_?"rgba(41, 98, 255, 0)":_,X=e.symbolActiveColor,z=void 0===X?"rgba(33, 150, 243, 0.12)":X,Q=l(e,["colorTheme","dateRange","exchange","showChart","locale","largeChartUrl","isTransparent","showSymbolLogo","showFloatingTooltip","width","height","autosize","plotLineColorGrowing","plotLineColorFalling","gridLineColor","scaleFontColor","belowLineFillColorGrowing","belowLineFillColorFalling","belowLineFillColorGrowingBottom","belowLineFillColorFallingBottom","symbolActiveColor"]);return d(a(a(a(a({colorTheme:o,dateRange:n,exchange:s,showChart:u,locale:v,largeChartUrl:h,isTransparent:m,showSymbolLogo:C},j?{width:"100%"}:{width:w}),j?{height:"100%"}:{height:T}),u&&{plotLineColorGrowing:U,plotLineColorFalling:L,gridLineColor:D,scaleFontColor:I,belowLineFillColorGrowing:N,belowLineFillColorFalling:k,belowLineFillColorGrowingBottom:A,belowLineFillColorFallingBottom:G,symbolActiveColor:z}),Q),"https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js")},t.SymbolInfo=function(e){var t=e.symbol,o=void 0===t?"NASDAQ:AAPL":t,i=e.width,n=void 0===i?1e3:i,r=e.autosize,s=void 0!==r&&r,c=e.locale,u=void 0===c?"en":c,b=e.colorTheme,v=void 0===b?"light":b,p=e.isTransparent,h=void 0!==p&&p,g=e.largeChartUrl,m=void 0===g?void 0:g,f=l(e,["symbol","width","autosize","locale","colorTheme","isTransparent","largeChartUrl"]);return d(a(a(a({symbol:o},s?{width:"100%"}:{width:n}),{locale:u,colorTheme:v,isTransparent:h,largeChartUrl:m}),f),"https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js")},t.SymbolOverview=function(e){var t=e.symbols,o=void 0===t?p:t,i=e.chartOnly,n=void 0!==i&&i,r=e.width,c=void 0===r?1e3:r,u=e.height,b=void 0===u?400:u,v=e.locale,h=void 0===v?"en":v,g=e.colorTheme,m=void 0===g?"light":g,f=e.gridLineColor,C=void 0===f?"rgba(42, 46, 57, 0)":f,O=e.fontColor,w=void 0===O?"#787B86":O,y=e.isTransparent,T=void 0!==y&&y,S=e.showFloatingTooltip,j=void 0===S||S,x=e.scalePosition,U=void 0===x?"no":x,F=e.scaleMode,L=void 0===F?"Normal":F,R=e.fontFamily,D=void 0===R?"Trebuchet MS, sans-serif":R,E=e.noTimeScale,I=void 0!==E&&E,M=e.chartType,N=void 0===M?"area":M,P=e.lineColor,k=void 0===P?"#2962FF":P,B=e.bottomColor,A=void 0===B?"rgba(41, 98, 255, 0)":B,_=e.topColor,G=void 0===_?"rgba(41, 98, 255, 0.3)":_,X=e.upColor,z=void 0===X?"#26a69a":X,Q=e.downColor,H=void 0===Q?"#ef5350":Q,W=e.borderUpColor,Y=void 0===W?"#26a69a":W,J=e.borderDownColor,K=void 0===J?"#ef5350":J,V=e.wickUpColor,q=void 0===V?"#26a69a":V,Z=e.wickDownColor,$=void 0===Z?"#ef5350":Z,ee=e.autosize,te=void 0!==ee&&ee,oe=e.container_id,ie=void 0===oe?"tradingview_"+s(5):oe,ne=l(e,["symbols","chartOnly","width","height","locale","colorTheme","gridLineColor","fontColor","isTransparent","showFloatingTooltip","scalePosition","scaleMode","fontFamily","noTimeScale","chartType","lineColor","bottomColor","topColor","upColor","downColor","borderUpColor","borderDownColor","wickUpColor","wickDownColor","autosize","container_id"]);return d(a(a(a(a(a(a(a(a({symbols:o,chartOnly:n},te?{width:"100%"}:{width:c}),te?{height:"100%"}:{height:b}),{locale:h,colorTheme:m,gridLineColor:C,fontColor:w,isTransparent:T,showFloatingTooltip:j,scalePosition:U,scaleMode:L,fontFamily:D,noTimeScale:I,chartType:N}),"area"===N&&{lineColor:k,bottomColor:A,topColor:G}),("bars"===N||"candlesticks"===N)&&{upColor:z,downColor:H}),"candlesticks"===N&&{borderUpColor:Y,borderDownColor:K,wickUpColor:q,wickDownColor:$}),{autosize:te,container_id:ie}),ne),"https://s3.tradingview.com/tv.js",ie,"MediumWidget")},t.TechnicalAnalysis=function(e){var t=e.interval,o=void 0===t?"1m":t,i=e.width,n=void 0===i?425:i,r=e.height,s=void 0===r?450:r,c=e.autosize,u=void 0!==c&&c,b=e.isTransparent,v=void 0!==b&&b,p=e.symbol,h=void 0===p?"NASDAQ:AAPL":p,g=e.showIntervalTabs,m=void 0===g||g,f=e.locale,C=void 0===f?"en":f,O=e.colorTheme,w=void 0===O?"light":O,y=e.largeChartUrl,T=void 0===y?void 0:y,S=l(e,["interval","width","height","autosize","isTransparent","symbol","showIntervalTabs","locale","colorTheme","largeChartUrl"]);return d(a(a(a(a({interval:o},u?{width:"100%"}:{width:n}),u?{height:"100%"}:{height:s}),{isTransparent:v,symbol:h,showIntervalTabs:m,locale:C,colorTheme:w,largeChartUrl:T}),S),"https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js")},t.Ticker=function(e){var t=e.colorTheme,o=void 0===t?"light":t,i=e.isTransparent,n=void 0!==i&&i,r=e.showSymbolLogo,s=void 0===r||r,c=e.locale,u=void 0===c?"en":c,b=e.symbols,v=void 0===b?h:b,p=l(e,["colorTheme","isTransparent","showSymbolLogo","locale","symbols"]);return d(a({colorTheme:o,isTransparent:n,showSymbolLogo:s,locale:u,symbols:v},p),"https://s3.tradingview.com/external-embedding/embed-widget-tickers.js")},t.TickerTape=function(e){var t=e.symbols,o=void 0===t?g:t,i=e.showSymbolLogo,n=void 0===i||i,r=e.colorTheme,s=void 0===r?"light":r,c=e.isTransparent,u=void 0!==c&&c,b=e.largeChartUrl,v=void 0===b?void 0:b,p=e.displayMode,h=void 0===p?"adaptive":p,m=e.locale,f=void 0===m?"en":m,C=l(e,["symbols","showSymbolLogo","colorTheme","isTransparent","largeChartUrl","displayMode","locale"]);return d(a({symbols:o,showSymbolLogo:n,colorTheme:s,isTransparent:u,largeChartUrl:v,displayMode:h,locale:f},C),"https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js")},t.Timeline=function(e){var t=e.feedMode,o=void 0===t?"all_symbols":t,i=e.colorTheme,n=void 0===i?"light":i,r=e.isTransparent,s=void 0!==r&&r,c=e.displayMode,u=void 0===c?"regular":c,b=e.width,v=void 0===b?480:b,p=e.height,h=void 0===p?830:p,g=e.autosize,m=void 0!==g&&g,f=e.locale,C=void 0===f?"en":f,O=e.largeChartUrl,w=void 0===O?void 0:O,y=l(e,["feedMode","colorTheme","isTransparent","displayMode","width","height","autosize","locale","largeChartUrl"]);return d(a(a(a(a({},m?{width:"100%"}:{width:v}),m?{height:"100%"}:{height:h}),{feedMode:o,colorTheme:n,isTransparent:s,displayMode:u,locale:C,largeChartUrl:w}),y),"https://s3.tradingview.com/external-embedding/embed-widget-timeline.js")}},220:function(e,t,o){"use strict";o.d(t,"a",(function(){return L}));var i=o(2),n=o(0),r=o.n(n),a=o(13),l=o(4),d=o(35),s=o(6),c=o(47),u=o(7),b=o(23),v=o(34),p=o(44),h=o(10),g=o(49),m=o(17),f=o(40);function C(e,t){var o=Object(n.useState)(e),i=o[0],r=o[1],a=Object(n.useRef)(e);return Object(u.a)((function(){a.current=e}),[e]),Object(u.a)((function(){return r(a.current)}),[a,r].concat(t)),i}var O,w,y,T=o(15);!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(w||(w={})),function(e){e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.SetDisabled=2]="SetDisabled",e[e.SetOrientation=3]="SetOrientation",e[e.GoToOption=4]="GoToOption",e[e.Search=5]="Search",e[e.ClearSearch=6]="ClearSearch",e[e.RegisterOption=7]="RegisterOption",e[e.UnregisterOption=8]="UnregisterOption"}(y||(y={}));var S=((O={})[y.CloseListbox]=function(e){return e.disabled||e.listboxState===w.Closed?e:Object(i.b)({},e,{activeOptionIndex:null,listboxState:w.Closed})},O[y.OpenListbox]=function(e){return e.disabled||e.listboxState===w.Open?e:Object(i.b)({},e,{listboxState:w.Open})},O[y.SetDisabled]=function(e,t){return e.disabled===t.disabled?e:Object(i.b)({},e,{disabled:t.disabled})},O[y.SetOrientation]=function(e,t){return e.orientation===t.orientation?e:Object(i.b)({},e,{orientation:t.orientation})},O[y.GoToOption]=function(e,t){if(e.disabled)return e;if(e.listboxState===w.Closed)return e;var o=Object(T.b)(t,{resolveItems:function(){return e.options},resolveActiveIndex:function(){return e.activeOptionIndex},resolveId:function(e){return e.id},resolveDisabled:function(e){return e.dataRef.current.disabled}});return""===e.searchQuery&&e.activeOptionIndex===o?e:Object(i.b)({},e,{searchQuery:"",activeOptionIndex:o})},O[y.Search]=function(e,t){if(e.disabled)return e;if(e.listboxState===w.Closed)return e;var o=e.searchQuery+t.value.toLowerCase(),n=e.options.findIndex((function(e){var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(o))}));return-1===n||n===e.activeOptionIndex?Object(i.b)({},e,{searchQuery:o}):Object(i.b)({},e,{searchQuery:o,activeOptionIndex:n})},O[y.ClearSearch]=function(e){return e.disabled||e.listboxState===w.Closed||""===e.searchQuery?e:Object(i.b)({},e,{searchQuery:""})},O[y.RegisterOption]=function(e,t){return Object(i.b)({},e,{options:[].concat(e.options,[{id:t.id,dataRef:t.dataRef}])})},O[y.UnregisterOption]=function(e,t){var o=e.options.slice(),n=null!==e.activeOptionIndex?o[e.activeOptionIndex]:null,r=o.findIndex((function(e){return e.id===t.id}));return-1!==r&&o.splice(r,1),Object(i.b)({},e,{options:o,activeOptionIndex:r===e.activeOptionIndex||null===n?null:o.indexOf(n)})},O),j=Object(n.createContext)(null);function x(e){var t=Object(n.useContext)(j);if(null===t){var o=new Error("<"+e+" /> is missing a parent <"+L.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(o,x),o}return t}function U(e,t){return Object(a.a)(t.type,S,e,t)}j.displayName="ListboxContext";var F=n.Fragment;function L(e){var t,o=e.value,d=e.onChange,s=e.disabled,c=void 0!==s&&s,b=e.horizontal,g=void 0!==b&&b,m=Object(i.c)(e,["value","onChange","disabled","horizontal"]),f=g?"horizontal":"vertical",C=Object(n.useReducer)(U,{listboxState:w.Closed,propsRef:{current:{value:o,onChange:d}},labelRef:Object(n.createRef)(),buttonRef:Object(n.createRef)(),optionsRef:Object(n.createRef)(),disabled:c,orientation:f,options:[],searchQuery:"",activeOptionIndex:null}),O=C[0],T=O.listboxState,S=O.propsRef,x=O.optionsRef,L=O.buttonRef,R=C[1];Object(u.a)((function(){S.current.value=o}),[o,S]),Object(u.a)((function(){S.current.onChange=d}),[d,S]),Object(u.a)((function(){return R({type:y.SetDisabled,disabled:c})}),[c]),Object(u.a)((function(){return R({type:y.SetOrientation,orientation:f})}),[f]),Object(p.a)("mousedown",(function(e){var t,o,i,n=e.target;T===w.Open&&((null==(t=L.current)?void 0:t.contains(n))||(null==(o=x.current)?void 0:o.contains(n))||(R({type:y.CloseListbox}),Object(v.f)(n,v.c.Loose)||(e.preventDefault(),null==(i=L.current)||i.focus())))}));var D=Object(n.useMemo)((function(){return{open:T===w.Open,disabled:c}}),[T,c]);return r.a.createElement(j.Provider,{value:C},r.a.createElement(h.a,{value:Object(a.a)(T,(t={},t[w.Open]=h.b.Open,t[w.Closed]=h.b.Closed,t))},Object(l.d)({props:m,slot:D,defaultTag:F,name:"Listbox"})))}var R=Object(l.c)((function e(t,o){var r,a=x([L.name,e.name].join(".")),u=a[0],v=a[1],p=Object(d.a)(u.buttonRef,o),h="headlessui-listbox-button-"+Object(b.a)(),m=Object(f.a)(),O=Object(n.useCallback)((function(e){switch(e.key){case s.a.Space:case s.a.Enter:case s.a.ArrowDown:e.preventDefault(),v({type:y.OpenListbox}),m.nextFrame((function(){u.propsRef.current.value||v({type:y.GoToOption,focus:T.a.First})}));break;case s.a.ArrowUp:e.preventDefault(),v({type:y.OpenListbox}),m.nextFrame((function(){u.propsRef.current.value||v({type:y.GoToOption,focus:T.a.Last})}))}}),[v,u,m]),S=Object(n.useCallback)((function(e){switch(e.key){case s.a.Space:e.preventDefault()}}),[]),j=Object(n.useCallback)((function(e){if(Object(c.a)(e.currentTarget))return e.preventDefault();u.listboxState===w.Open?(v({type:y.CloseListbox}),m.nextFrame((function(){var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),v({type:y.OpenListbox}))}),[v,m,u]),U=C((function(){if(u.labelRef.current)return[u.labelRef.current.id,h].join(" ")}),[u.labelRef.current,h]),F=Object(n.useMemo)((function(){return{open:u.listboxState===w.Open,disabled:u.disabled}}),[u]),R=t,D={ref:p,id:h,type:Object(g.a)(t,u.buttonRef),"aria-haspopup":!0,"aria-controls":null==(r=u.optionsRef.current)?void 0:r.id,"aria-expanded":u.disabled?void 0:u.listboxState===w.Open,"aria-labelledby":U,disabled:u.disabled,onKeyDown:O,onKeyUp:S,onClick:j};return Object(l.d)({props:Object(i.b)({},R,D),slot:F,defaultTag:"button",name:"Listbox.Button"})}));var D=l.a.RenderStrategy|l.a.Static,E=Object(l.c)((function e(t,o){var r,c=x([L.name,e.name].join(".")),v=c[0],p=c[1],g=Object(d.a)(v.optionsRef,o),O="headlessui-listbox-options-"+Object(b.a)(),S=Object(f.a)(),j=Object(f.a)(),U=Object(h.c)(),F=null!==U?U===h.b.Open:v.listboxState===w.Open;Object(u.a)((function(){var e=v.optionsRef.current;e&&v.listboxState===w.Open&&e!==document.activeElement&&e.focus({preventScroll:!0})}),[v.listboxState,v.optionsRef]);var R=Object(n.useCallback)((function(e){switch(j.dispose(),e.key){case s.a.Space:if(""!==v.searchQuery)return e.preventDefault(),e.stopPropagation(),p({type:y.Search,value:e.key});case s.a.Enter:if(e.preventDefault(),e.stopPropagation(),p({type:y.CloseListbox}),null!==v.activeOptionIndex){var t=v.options[v.activeOptionIndex].dataRef;v.propsRef.current.onChange(t.current.value)}Object(m.a)().nextFrame((function(){var e;return null==(e=v.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case Object(a.a)(v.orientation,{vertical:s.a.ArrowDown,horizontal:s.a.ArrowRight}):return e.preventDefault(),e.stopPropagation(),p({type:y.GoToOption,focus:T.a.Next});case Object(a.a)(v.orientation,{vertical:s.a.ArrowUp,horizontal:s.a.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),p({type:y.GoToOption,focus:T.a.Previous});case s.a.Home:case s.a.PageUp:return e.preventDefault(),e.stopPropagation(),p({type:y.GoToOption,focus:T.a.First});case s.a.End:case s.a.PageDown:return e.preventDefault(),e.stopPropagation(),p({type:y.GoToOption,focus:T.a.Last});case s.a.Escape:return e.preventDefault(),e.stopPropagation(),p({type:y.CloseListbox}),S.nextFrame((function(){var e;return null==(e=v.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case s.a.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(p({type:y.Search,value:e.key}),j.setTimeout((function(){return p({type:y.ClearSearch})}),350))}}),[S,p,j,v]),E=C((function(){var e,t,o;return null!=(e=null==(t=v.labelRef.current)?void 0:t.id)?e:null==(o=v.buttonRef.current)?void 0:o.id}),[v.labelRef.current,v.buttonRef.current]),I=Object(n.useMemo)((function(){return{open:v.listboxState===w.Open}}),[v]),M={"aria-activedescendant":null===v.activeOptionIndex||null==(r=v.options[v.activeOptionIndex])?void 0:r.id,"aria-labelledby":E,"aria-orientation":v.orientation,id:O,onKeyDown:R,role:"listbox",tabIndex:0,ref:g},N=t;return Object(l.d)({props:Object(i.b)({},N,M),slot:I,defaultTag:"ul",features:D,visible:F,name:"Listbox.Options"})}));L.Button=R,L.Label=function e(t){var o=x([L.name,e.name].join("."))[0],r="headlessui-listbox-label-"+Object(b.a)(),a=Object(n.useCallback)((function(){var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})}),[o.buttonRef]),d=Object(n.useMemo)((function(){return{open:o.listboxState===w.Open,disabled:o.disabled}}),[o]),s={ref:o.labelRef,id:r,onClick:a};return Object(l.d)({props:Object(i.b)({},t,s),slot:d,defaultTag:"label",name:"Listbox.Label"})},L.Options=E,L.Option=function e(t){var o=t.disabled,r=void 0!==o&&o,a=t.value,d=Object(i.c)(t,["disabled","value"]),s=x([L.name,e.name].join(".")),c=s[0],v=s[1],p="headlessui-listbox-option-"+Object(b.a)(),h=null!==c.activeOptionIndex&&c.options[c.activeOptionIndex].id===p,g=c.propsRef.current.value===a,f=Object(n.useRef)({disabled:r,value:a});Object(u.a)((function(){f.current.disabled=r}),[f,r]),Object(u.a)((function(){f.current.value=a}),[f,a]),Object(u.a)((function(){var e,t;f.current.textValue=null==(e=document.getElementById(p))||null==(t=e.textContent)?void 0:t.toLowerCase()}),[f,p]);var C=Object(n.useCallback)((function(){return c.propsRef.current.onChange(a)}),[c.propsRef,a]);Object(u.a)((function(){return v({type:y.RegisterOption,id:p,dataRef:f}),function(){return v({type:y.UnregisterOption,id:p})}}),[f,p]),Object(u.a)((function(){var e;c.listboxState===w.Open&&g&&(v({type:y.GoToOption,focus:T.a.Specific,id:p}),null==(e=document.getElementById(p))||null==e.focus||e.focus())}),[c.listboxState]),Object(u.a)((function(){if(c.listboxState===w.Open&&h){var e=Object(m.a)();return e.nextFrame((function(){var e;return null==(e=document.getElementById(p))||null==e.scrollIntoView?void 0:e.scrollIntoView({block:"nearest"})})),e.dispose}}),[p,h,c.listboxState]);var O=Object(n.useCallback)((function(e){if(r)return e.preventDefault();C(),v({type:y.CloseListbox}),Object(m.a)().nextFrame((function(){var e;return null==(e=c.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))}),[v,c.buttonRef,r,C]),S=Object(n.useCallback)((function(){if(r)return v({type:y.GoToOption,focus:T.a.Nothing});v({type:y.GoToOption,focus:T.a.Specific,id:p})}),[r,p,v]),j=Object(n.useCallback)((function(){r||h||v({type:y.GoToOption,focus:T.a.Specific,id:p})}),[r,h,p,v]),U=Object(n.useCallback)((function(){r||h&&v({type:y.GoToOption,focus:T.a.Nothing})}),[r,h,v]),F=Object(n.useMemo)((function(){return{active:h,selected:g,disabled:r}}),[h,g,r]),R={id:p,role:"option",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,"aria-selected":!0===g||void 0,disabled:void 0,onClick:O,onFocus:S,onPointerMove:j,onMouseMove:j,onPointerLeave:U,onMouseLeave:U};return Object(l.d)({props:Object(i.b)({},d,R),slot:F,defaultTag:"li",name:"Listbox.Option"})}}}]);