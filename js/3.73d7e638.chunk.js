(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[3],{172:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r,t=n(0),o=(r=t)&&"object"===typeof r&&"default"in r?r.default:r,a=n(188),s=new a,u=s.getBrowser(),l=s.getCPU(),c=s.getDevice(),d=s.getEngine(),b=s.getOS(),w=s.getUA(),m=function(e){return s.setUA(e)},f=function(e){if(e){var i=new a(e);return{UA:i,browser:i.getBrowser(),cpu:i.getCPU(),device:i.getDevice(),engine:i.getEngine(),os:i.getOS(),ua:i.getUA(),setUserAgent:function(e){return i.setUA(e)}}}console.error("No userAgent string was provided")},p=Object.freeze({ClientUAInstance:s,browser:u,cpu:l,device:c,engine:d,os:b,ua:w,setUa:m,parseUserAgent:f});function g(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,r)}return n}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function x(){return(x=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,i){return(E=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function k(e,i){if(null==e)return{};var n,r,t=function(e,i){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,t,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!i||o.length!==i);a=!0);}catch(u){s=!0,t=u}finally{try{a||null==n.return||n.return()}finally{if(s)throw t}}return o}(e,i)||function(e,i){if(!e)return;if("string"===typeof e)return P(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,i)}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,i){(null==i||i>e.length)&&(i=e.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=e[n];return r}var A="mobile",j="tablet",V="smarttv",W="console",F="wearable",T="embedded",I=void 0,M={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},N={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},_={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},U=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},B=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},L=function(e){var i=B();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},z=function(e,i,n,r){return function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?g(Object(n),!0).forEach((function(i){y(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}({},e,{vendor:U(i.vendor),model:U(i.model),os:U(n.name),osVersion:U(n.version),ua:U(r)})};var q=function(e){return e.type===A},D=function(e){return e.type===j},R=function(e){var i=e.type;return i===A||i===j},H=function(e){return e.type===V},Y=function(e){return e.type===I},$=function(e){return e.type===F},G=function(e){return e.type===W},Z=function(e){return e.type===T},X=function(e){var i=e.vendor;return U(i)},J=function(e){var i=e.model;return U(i)},K=function(e){var i=e.type;return U(i,"browser")},Q=function(e){return e.name===N.Android},ee=function(e){return e.name===N.Windows},ie=function(e){return e.name===N.MAC_OS},ne=function(e){return e.name===N.WindowsPhone},re=function(e){return e.name===N.IOS},te=function(e){var i=e.version;return U(i)},oe=function(e){var i=e.name;return U(i)},ae=function(e){return e.name===M.Chrome},se=function(e){return e.name===M.Firefox},ue=function(e){return e.name===M.Chromium},le=function(e){return e.name===M.Edge},ce=function(e){return e.name===M.Yandex},de=function(e){var i=e.name;return i===M.Safari||i===M.MobileSafari},be=function(e){return e.name===M.MobileSafari},we=function(e){return e.name===M.Opera},me=function(e){var i=e.name;return i===M.InternetExplorer||i===M.Ie},fe=function(e){return e.name===M.MIUI},pe=function(e){return e.name===M.SamsungBrowser},ge=function(e){var i=e.version;return U(i)},he=function(e){var i=e.major;return U(i)},ve=function(e){var i=e.name;return U(i)},ye=function(e){var i=e.name;return U(i)},xe=function(e){var i=e.version;return U(i)},Oe=function(){var e=B(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)},Ee=function(e){return"string"===typeof e&&-1!==e.indexOf("Edg/")},ke=function(){var e=B();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},Se=function(){return L("iPad")},Ce=function(){return L("iPhone")},Pe=function(){return L("iPod")},Ae=function(e){return U(e)};function je(e){var i=e||p,n=i.device,r=i.browser,t=i.os,o=i.engine,a=i.ua;return{isSmartTV:H(n),isConsole:G(n),isWearable:$(n),isEmbedded:Z(n),isMobileSafari:be(r)||Se(),isChromium:ue(r),isMobile:R(n)||Se(),isMobileOnly:q(n),isTablet:D(n)||Se(),isBrowser:Y(n),isDesktop:Y(n),isAndroid:Q(t),isWinPhone:ne(t),isIOS:re(t)||Se(),isChrome:ae(r),isFirefox:se(r),isSafari:de(r),isOpera:we(r),isIE:me(r),osVersion:te(t),osName:oe(t),fullBrowserVersion:ge(r),browserVersion:he(r),browserName:ve(r),mobileVendor:X(n),mobileModel:J(n),engineName:ye(o),engineVersion:xe(o),getUA:Ae(a),isEdge:le(r)||Ee(a),isYandex:ce(r),deviceType:K(n),isIOS13:ke(),isIPad13:Se(),isIPhone13:Ce(),isIPod13:Pe(),isElectron:Oe(),isEdgeChromium:Ee(a),isLegacyEdge:le(r)&&!Ee(a),isWindows:ee(t),isMacOs:ie(t),isMIUI:fe(r),isSamsungBrowser:pe(r)}}var Ve=H(c),We=G(c),Fe=$(c),Te=Z(c),Ie=be(u)||Se(),Me=ue(u),Ne=R(c)||Se(),_e=q(c),Ue=D(c)||Se(),Be=Y(c),Le=Y(c),ze=Q(b),qe=ne(b),De=re(b)||Se(),Re=ae(u),He=se(u),Ye=de(u),$e=we(u),Ge=me(u),Ze=te(b),Xe=oe(b),Je=ge(u),Ke=he(u),Qe=ve(u),ei=X(c),ii=J(c),ni=ye(d),ri=xe(d),ti=Ae(w),oi=le(u)||Ee(w),ai=ce(u),si=K(c),ui=ke(),li=Se(),ci=Ce(),di=Pe(),bi=Oe(),wi=Ee(w),mi=le(u)&&!Ee(w),fi=ee(b),pi=ie(b),gi=fe(u),hi=pe(u);function vi(e){var i=e||window.navigator.userAgent;return f(i)}i.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,r=k(e,["renderWithFragment","children"]);return ze?i?o.createElement(t.Fragment,null,n):o.createElement("div",r,n):null},i.BrowserTypes=M,i.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,r=k(e,["renderWithFragment","children"]);return Be?i?o.createElement(t.Fragment,null,n):o.createElement("div",r,n):null},i.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,r=k(e,["renderWithFragment","children"]);return We?i?o.createElement(t.Fragment,null,n):o.createElement("div",r,n):null},i.CustomView=function(e){var i=e.renderWithFragment,n=e.children,r=(e.viewClassName,e.style,e.condition),a=k(e,["renderWithFragment","children","viewClassName","style","condition"]);return r?i?o.createElement(t.Fragment,null,n):o.createElement("div",a,n):null},i.IEView=function(e){var i=e.renderWithFragment,n=e.children,r=k(e,["renderWithFragment","children"]);return Ge?i?o.createElement(t.Fragment,null,n):o.createElement("div",r,n):null},i.IOSView=function(e){var i=e.renderWithFragment,n=e.children,r=k(e,["renderWithFragment","children"]);return De?i?o.createElement(t.Fragment,null,n):o.createElement("div",r,n):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,r=(e.viewClassName,e.style,k(e,["renderWithFragment","children","viewClassName","style"]));return _e?i?o.createElement(t.Fragment,null,n):o.createElement("div",r,n):null},i.MobileView=function(e){var i=e.renderWithFragment,n=e.children,r=k(e,["renderWithFragment","children"]);return Ne?i?o.createElement(t.Fragment,null,n):o.createElement("div",r,n):null},i.OsTypes=N,i.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,r=k(e,["renderWithFragment","children"]);return Ve?i?o.createElement(t.Fragment,null,n):o.createElement("div",r,n):null},i.TabletView=function(e){var i=e.renderWithFragment,n=e.children,r=k(e,["renderWithFragment","children"]);return Ue?i?o.createElement(t.Fragment,null,n):o.createElement("div",r,n):null},i.WearableView=function(e){var i=e.renderWithFragment,n=e.children,r=k(e,["renderWithFragment","children"]);return Fe?i?o.createElement(t.Fragment,null,n):o.createElement("div",r,n):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,r=k(e,["renderWithFragment","children"]);return qe?i?o.createElement(t.Fragment,null,n):o.createElement("div",r,n):null},i.browserName=Qe,i.browserVersion=Ke,i.deviceDetect=function(e){var i=e?f(e):p,n=i.device,r=i.browser,t=i.engine,o=i.os,a=i.ua,s=function(e){switch(e){case A:return{isMobile:!0};case j:return{isTablet:!0};case V:return{isSmartTV:!0};case W:return{isConsole:!0};case F:return{isWearable:!0};case I:return{isBrowser:!0};case T:return{isEmbedded:!0};default:return _}}(n.type),u=s.isBrowser,l=s.isMobile,c=s.isTablet,d=s.isSmartTV,b=s.isConsole,w=s.isWearable,m=s.isEmbedded;return u?function(e,i,n,r,t){return{isBrowser:e,browserMajorVersion:U(i.major),browserFullVersion:U(i.version),browserName:U(i.name),engineName:U(n.name),engineVersion:U(n.version),osName:U(r.name),osVersion:U(r.version),userAgent:U(t)}}(u,r,t,o,a):d?function(e,i,n,r){return{isSmartTV:e,engineName:U(i.name),engineVersion:U(i.version),osName:U(n.name),osVersion:U(n.version),userAgent:U(r)}}(d,t,o,a):b?function(e,i,n,r){return{isConsole:e,engineName:U(i.name),engineVersion:U(i.version),osName:U(n.name),osVersion:U(n.version),userAgent:U(r)}}(b,t,o,a):l||c?z(s,n,o,a):w?function(e,i,n,r){return{isWearable:e,engineName:U(i.name),engineVersion:U(i.version),osName:U(n.name),osVersion:U(n.version),userAgent:U(r)}}(w,t,o,a):m?function(e,i,n,r,t){return{isEmbedded:e,vendor:U(i.vendor),model:U(i.model),engineName:U(n.name),engineVersion:U(n.version),osName:U(r.name),osVersion:U(r.version),userAgent:U(t)}}(m,n,t,o,a):void 0},i.deviceType=si,i.engineName=ni,i.engineVersion=ri,i.fullBrowserVersion=Je,i.getSelectorsByUserAgent=function(e){if(e&&"string"===typeof e){var i=f(e);return je({device:i.device,browser:i.browser,os:i.os,engine:i.engine,ua:i.ua})}console.error("No valid user agent string was provided")},i.getUA=ti,i.isAndroid=ze,i.isBrowser=Be,i.isChrome=Re,i.isChromium=Me,i.isConsole=We,i.isDesktop=Le,i.isEdge=oi,i.isEdgeChromium=wi,i.isElectron=bi,i.isEmbedded=Te,i.isFirefox=He,i.isIE=Ge,i.isIOS=De,i.isIOS13=ui,i.isIPad13=li,i.isIPhone13=ci,i.isIPod13=di,i.isLegacyEdge=mi,i.isMIUI=gi,i.isMacOs=pi,i.isMobile=Ne,i.isMobileOnly=_e,i.isMobileSafari=Ie,i.isOpera=$e,i.isSafari=Ye,i.isSamsungBrowser=hi,i.isSmartTV=Ve,i.isTablet=Ue,i.isWearable=Fe,i.isWinPhone=qe,i.isWindows=fi,i.isYandex=ai,i.mobileModel=ii,i.mobileVendor=ei,i.osName=Xe,i.osVersion=Ze,i.parseUserAgent=f,i.setUserAgent=function(e){return m(e)},i.useDeviceData=vi,i.useDeviceSelectors=function(e){var i=vi(e||window.navigator.userAgent);return[je(i),i]},i.useMobileOrientation=function(){var e=C(t.useState((function(){var e=window.innerWidth>window.innerHeight?90:0;return{isPortrait:0===e,isLandscape:90===e,orientation:0===e?"portrait":"landscape"}})),2),i=e[0],n=e[1],r=t.useCallback((function(){var e=window.innerWidth>window.innerHeight?90:0,r={isPortrait:0===e,isLandscape:90===e,orientation:0===e?"portrait":"landscape"};i.orientation!==r.orientation&&n(r)}),[i.orientation]);return t.useEffect((function(){return void 0!==("undefined"===typeof window?"undefined":h(window))&&Ne&&(r(),window.addEventListener("load",r,!1),window.addEventListener("resize",r,!1)),function(){window.removeEventListener("resize",r,!1),window.removeEventListener("load",r,!1)}}),[r]),i},i.withOrientationChange=function(e){return function(i){function n(e){var i;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),(i=function(e,i){if(i&&("object"===typeof i||"function"===typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}(this,O(n).call(this,e))).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(S(i)),i.onOrientationChange=i.onOrientationChange.bind(S(i)),i.onPageLoad=i.onPageLoad.bind(S(i)),i.state={isLandscape:!1,isPortrait:!1},i}var r,t,a;return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&E(e,i)}(n,i),r=n,(t=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"===typeof window?"undefined":h(window))&&Ne&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return o.createElement(e,x({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&v(r.prototype,t),a&&v(r,a),n}(o.Component)}},177:function(e,i,n){"use strict";n.d(i,"a",(function(){return t}));var r=n(23);function t(e,i){if(null==e)return{};var n,t,o=Object(r.a)(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},188:function(e,i,n){var r;!function(t,o){"use strict";var a="function",s="undefined",u="object",l="string",c="model",d="name",b="type",w="vendor",m="version",f="architecture",p="console",g="mobile",h="tablet",v="smarttv",y="wearable",x="embedded",O="Amazon",E="Apple",k="ASUS",S="BlackBerry",C="Firefox",P="Google",A="Huawei",j="LG",V="Microsoft",W="Motorola",F="Opera",T="Samsung",I="Sony",M="Xiaomi",N="Zebra",_="Facebook",U=function(e){for(var i={},n=0;n<e.length;n++)i[e[n].toUpperCase()]=e[n];return i},B=function(e,i){return typeof e===l&&-1!==L(i).indexOf(L(e))},L=function(e){return e.toLowerCase()},z=function(e,i){if(typeof e===l)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof i===s?e:e.substring(0,255)},q=function(e,i){for(var n,r,t,s,l,c,d=0;d<i.length&&!l;){var b=i[d],w=i[d+1];for(n=r=0;n<b.length&&!l;)if(l=b[n++].exec(e))for(t=0;t<w.length;t++)c=l[++r],typeof(s=w[t])===u&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=c?c.replace(s[1],s[2]):o:this[s[0]]=c?s[1].call(this,c,s[2]):o:4===s.length&&(this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):o):this[s]=c||o;d+=2}},D=function(e,i){for(var n in i)if(typeof i[n]===u&&i[n].length>0){for(var r=0;r<i[n].length;r++)if(B(i[n][r],e))return"?"===n?o:n}else if(B(i[n],e))return"?"===n?o:n;return e},R={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},H={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,m],[/opios[\/ ]+([\w\.]+)/i],[m,[d,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[m,[d,F]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[d,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[d,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[m,[d,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[d,"IE"]],[/yabrowser\/([\w\.]+)/i],[m,[d,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure Browser"],m],[/\bfocus\/([\w\.]+)/i],[m,[d,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[m,[d,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[d,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[d,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[m,[d,C]],[/\bqihu|(qi?ho?o?|360)browser/i],[[d,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 Browser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[d,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,_],m],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[d,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[d,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[d,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,"Chrome WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[d,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,m],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[m,[d,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[m,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[m,D,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[d,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[d,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,L]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,"",L]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,L]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[w,T],[b,h]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[w,T],[b,g]],[/\((ip(?:hone|od)[\w ]*);/i],[c,[w,E],[b,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[w,E],[b,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[w,A],[b,h]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[c,[w,A],[b,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[w,M],[b,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[w,M],[b,h]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[w,"OPPO"],[b,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[w,"Vivo"],[b,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[w,"Realme"],[b,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[w,W],[b,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[w,W],[b,h]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[w,j],[b,h]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[w,j],[b,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[w,"Lenovo"],[b,h]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[w,"Nokia"],[b,g]],[/(pixel c)\b/i],[c,[w,P],[b,h]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[w,P],[b,g]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[w,I],[b,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[w,I],[b,h]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[w,"OnePlus"],[b,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[w,O],[b,h]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[w,O],[b,g]],[/(playbook);[-\w\),; ]+(rim)/i],[c,w,[b,h]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[w,S],[b,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[w,k],[b,h]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[w,k],[b,g]],[/(nexus 9)/i],[c,[w,"HTC"],[b,h]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[w,[c,/_/g," "],[b,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[w,"Acer"],[b,h]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[w,"Meizu"],[b,g]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[w,"Sharp"],[b,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[w,c,[b,g]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[w,c,[b,h]],[/(surface duo)/i],[c,[w,V],[b,h]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[w,"Fairphone"],[b,g]],[/(u304aa)/i],[c,[w,"AT&T"],[b,g]],[/\bsie-(\w*)/i],[c,[w,"Siemens"],[b,g]],[/\b(rct\w+) b/i],[c,[w,"RCA"],[b,h]],[/\b(venue[\d ]{2,7}) b/i],[c,[w,"Dell"],[b,h]],[/\b(q(?:mv|ta)\w+) b/i],[c,[w,"Verizon"],[b,h]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[w,"Barnes & Noble"],[b,h]],[/\b(tm\d{3}\w+) b/i],[c,[w,"NuVision"],[b,h]],[/\b(k88) b/i],[c,[w,"ZTE"],[b,h]],[/\b(nx\d{3}j) b/i],[c,[w,"ZTE"],[b,g]],[/\b(gen\d{3}) b.+49h/i],[c,[w,"Swiss"],[b,g]],[/\b(zur\d{3}) b/i],[c,[w,"Swiss"],[b,h]],[/\b((zeki)?tb.*\b) b/i],[c,[w,"Zeki"],[b,h]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[w,"Dragon Touch"],c,[b,h]],[/\b(ns-?\w{0,9}) b/i],[c,[w,"Insignia"],[b,h]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[w,"NextBook"],[b,h]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[w,"Voice"],c,[b,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[w,"LvTel"],c,[b,g]],[/\b(ph-1) /i],[c,[w,"Essential"],[b,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[w,"Envizen"],[b,h]],[/\b(trio[-\w\. ]+) b/i],[c,[w,"MachSpeed"],[b,h]],[/\btu_(1491) b/i],[c,[w,"Rotor"],[b,h]],[/(shield[\w ]+) b/i],[c,[w,"Nvidia"],[b,h]],[/(sprint) (\w+)/i],[w,c,[b,g]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[w,V],[b,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[w,N],[b,h]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[w,N],[b,g]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[w,c,[b,p]],[/droid.+; (shield) bui/i],[c,[w,"Nvidia"],[b,p]],[/(playstation [345portablevi]+)/i],[c,[w,I],[b,p]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[w,V],[b,p]],[/smart-tv.+(samsung)/i],[w,[b,v]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[w,T],[b,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[w,j],[b,v]],[/(apple) ?tv/i],[w,[c,"Apple TV"],[b,v]],[/crkey/i],[[c,"Chromecast"],[w,P],[b,v]],[/droid.+aft(\w)( bui|\))/i],[c,[w,O],[b,v]],[/\(dtv[\);].+(aquos)/i],[c,[w,"Sharp"],[b,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[w,z],[c,z],[b,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,v]],[/((pebble))app/i],[w,c,[b,y]],[/droid.+; (glass) \d/i],[c,[w,P],[b,y]],[/droid.+; (wt63?0{2,3})\)/i],[c,[w,N],[b,y]],[/(quest( 2)?)/i],[c,[w,_],[b,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[w,[b,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[b,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[b,h]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,h]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[b,g]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[w,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[d,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[d,[m,D,R]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[d,"Windows"],[m,D,R]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,"Mac OS"],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[m,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,m],[/\(bb(10);/i],[m,[d,S]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[d,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[d,"webOS"]],[/crkey\/([\d\.]+)/i],[m,[d,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[d,"Chromium OS"],m],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,m],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[d,m]]},Y=function e(i,n){if(typeof i===u&&(n=i,i=o),!(this instanceof e))return new e(i,n).getResult();var r=i||(typeof t!==s&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:""),a=n?function(e,i){var n={};for(var r in e)i[r]&&i[r].length%2===0?n[r]=i[r].concat(e[r]):n[r]=e[r];return n}(H,n):H;return this.getBrowser=function(){var e,i={};return i.name=o,i.version=o,q.call(i,r,a.browser),i.major=typeof(e=i.version)===l?e.replace(/[^\d\.]/g,"").split(".")[0]:o,i},this.getCPU=function(){var e={};return e.architecture=o,q.call(e,r,a.cpu),e},this.getDevice=function(){var e={};return e.vendor=o,e.model=o,e.type=o,q.call(e,r,a.device),e},this.getEngine=function(){var e={};return e.name=o,e.version=o,q.call(e,r,a.engine),e},this.getOS=function(){var e={};return e.name=o,e.version=o,q.call(e,r,a.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===l&&e.length>255?z(e,255):e,this},this.setUA(r),this};Y.VERSION="0.7.31",Y.BROWSER=U([d,m,"major"]),Y.CPU=U([f]),Y.DEVICE=U([c,w,b,p,g,v,h,y,x]),Y.ENGINE=Y.OS=U([d,m]),typeof i!==s?(typeof e!==s&&e.exports&&(i=e.exports=Y),i.UAParser=Y):n(189)?(r=function(){return Y}.call(i,n,i,e))===o||(e.exports=r):typeof t!==s&&(t.UAParser=Y);var $=typeof t!==s&&(t.jQuery||t.Zepto);if($&&!$.ua){var G=new Y;$.ua=G.getResult(),$.ua.get=function(){return G.getUA()},$.ua.set=function(e){G.setUA(e);var i=G.getResult();for(var n in i)$.ua[n]=i[n]}}}("object"===typeof window?window:this)},189:function(e,i){(function(i){e.exports=i}).call(this,{})}}]);