window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+T.join(r+" ")+r).split(" "),s(o,t,n))}function l(){p.input=function(n){for(var r=0,o=n.length;o>r;r++)j[n[r]]=!!(n[r]in E);return j.list&&(j.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,o,a,i=0,c=e.length;c>i;i++)E.setAttribute("type",o=e[i]),r="text"!==E.type,r&&(E.value=x,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&E.style.WebkitAppearance!==n?(g.appendChild(E),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,g.removeChild(E)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?E.checkValidity&&E.checkValidity()===!1:E.value!=x)),P[e[i]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,m="2.8.3",p={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,E=t.createElement("input"),x=":)",w={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",k=C.split(" "),T=C.toLowerCase().split(" "),N={svg:"http://www.w3.org/2000/svg"},M={},P={},j={},$=[],D=$.slice,F=function(e,n,r,o){var a,i,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),u.appendChild(c);return a=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(l?u:d).innerHTML+=a,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),i=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),g.style.overflow=s),!!i},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;f=a(L,"undefined")||a(L.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(D.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(D.call(arguments)))};return r}),M.flexbox=function(){return u("flexWrap")},M.flexboxlegacy=function(){return u("boxDirection")},M.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},M.canvastext=function(){return!(!p.canvas||!a(t.createElement("canvas").getContext("2d").fillText,"function"))},M.webgl=function(){return!!e.WebGLRenderingContext},M.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},M.geolocation=function(){return"geolocation"in navigator},M.postmessage=function(){return!!e.postMessage},M.websqldatabase=function(){return!!e.openDatabase},M.indexedDB=function(){return!!u("indexedDB",e)},M.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},M.history=function(){return!(!e.history||!history.pushState)},M.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},M.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},M.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},M.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},M.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},M.backgroundsize=function(){return u("backgroundSize")},M.borderimage=function(){return u("borderImage")},M.borderradius=function(){return u("borderRadius")},M.boxshadow=function(){return u("boxShadow")},M.textshadow=function(){return""===t.createElement("div").style.textShadow},M.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},M.cssanimations=function(){return u("animationName")},M.csscolumns=function(){return u("columnCount")},M.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},M.cssreflections=function(){return u("boxReflect")},M.csstransforms=function(){return!!u("transform")},M.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},M.csstransitions=function(){return u("transition")},M.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},M.generatedcontent=function(){var e;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},M.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},M.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},M.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},M.webworkers=function(){return!!e.Worker},M.applicationcache=function(){return!!e.applicationCache},M.svg=function(){return!!t.createElementNS&&!!t.createElementNS(N.svg,"svg").createSVGRect},M.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==N.svg},M.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(N.svg,"animate")))},M.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(N.svg,"clipPath")))};for(var H in M)f(M,H)&&(d=H.toLowerCase(),p[d]=M[H](),$.push((p[d]?"":"no-")+d));return p.input||l(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=E=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function a(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),s=c.length;s>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||c(e,r),e}var u,l,d="3.7.0",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i};e.html5=y,s(t)}(this,t),p._version=m,p._prefixes=S,p._domPrefixes=T,p._cssomPrefixes=k,p.mq=z,p.hasEvent=A,p.testProp=function(e){return c([e])},p.testAllProps=u,p.testStyles=F,p.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+$.join(" "):""),p}(this,this.document);
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*!
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function( jQuery, window, undefined ) {
// See http://bugs.jquery.com/ticket/13335
// "use strict";


var warnedAbout = {};

// List of warnings already given; public read only
jQuery.migrateWarnings = [];

// Set to true to prevent console output; migrateWarnings still maintained
jQuery.migrateMute = true;

// Show a message on the console so devs know we're active
if ( !jQuery.migrateMute && window.console && window.console.log ) {
	window.console.log("JQMIGRATE: Logging is active");
}

// Set to false to disable traces that appear with warnings
if ( jQuery.migrateTrace === undefined ) {
	jQuery.migrateTrace = false;
}

// Forget any warnings we've already given; public
jQuery.migrateReset = function() {
	warnedAbout = {};
	jQuery.migrateWarnings.length = 0;
};

function migrateWarn( msg) {
	var console = window.console;
	if ( !warnedAbout[ msg ] ) {
		warnedAbout[ msg ] = true;
		jQuery.migrateWarnings.push( msg );
		if ( console && console.warn && !jQuery.migrateMute ) {
			console.warn( "JQMIGRATE: " + msg );
			if ( jQuery.migrateTrace && console.trace ) {
				console.trace();
			}
		}
	}
}

function migrateWarnProp( obj, prop, value, msg ) {
	if ( Object.defineProperty ) {
		// On ES5 browsers (non-oldIE), warn if the code tries to get prop;
		// allow property to be overwritten in case some other plugin wants it
		try {
			Object.defineProperty( obj, prop, {
				configurable: true,
				enumerable: true,
				get: function() {
					migrateWarn( msg );
					return value;
				},
				set: function( newValue ) {
					migrateWarn( msg );
					value = newValue;
				}
			});
			return;
		} catch( err ) {
			// IE8 is a dope about Object.defineProperty, can't warn there
		}
	}

	// Non-ES5 (or broken) browser; just set the property
	jQuery._definePropertyBroken = true;
	obj[ prop ] = value;
}

if ( document.compatMode === "BackCompat" ) {
	// jQuery has never supported or tested Quirks Mode
	migrateWarn( "jQuery is not compatible with Quirks Mode" );
}


var attrFn = jQuery( "<input/>", { size: 1 } ).attr("size") && jQuery.attrFn,
	oldAttr = jQuery.attr,
	valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get ||
		function() { return null; },
	valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set ||
		function() { return undefined; },
	rnoType = /^(?:input|button)$/i,
	rnoAttrNodeType = /^[238]$/,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	ruseDefault = /^(?:checked|selected)$/i;

// jQuery.attrFn
migrateWarnProp( jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated" );

jQuery.attr = function( elem, name, value, pass ) {
	var lowerName = name.toLowerCase(),
		nType = elem && elem.nodeType;

	if ( pass ) {
		// Since pass is used internally, we only warn for new jQuery
		// versions where there isn't a pass arg in the formal params
		if ( oldAttr.length < 4 ) {
			migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
		}
		if ( elem && !rnoAttrNodeType.test( nType ) &&
			(attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name])) ) {
			return jQuery( elem )[ name ]( value );
		}
	}

	// Warn if user tries to set `type`, since it breaks on IE 6/7/8; by checking
	// for disconnected elements we don't warn on $( "<button>", { type: "button" } ).
	if ( name === "type" && value !== undefined && rnoType.test( elem.nodeName ) && elem.parentNode ) {
		migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
	}

	// Restore boolHook for boolean property/attribute synchronization
	if ( !jQuery.attrHooks[ lowerName ] && rboolean.test( lowerName ) ) {
		jQuery.attrHooks[ lowerName ] = {
			get: function( elem, name ) {
				// Align boolean attributes with corresponding properties
				// Fall back to attribute presence where some booleans are not supported
				var attrNode,
					property = jQuery.prop( elem, name );
				return property === true || typeof property !== "boolean" &&
					( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?

					name.toLowerCase() :
					undefined;
			},
			set: function( elem, value, name ) {
				var propName;
				if ( value === false ) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr( elem, name );
				} else {
					// value is true since we know at this point it's type boolean and not false
					// Set boolean attributes to the same name and set the DOM property
					propName = jQuery.propFix[ name ] || name;
					if ( propName in elem ) {
						// Only set the IDL specifically if it already exists on the element
						elem[ propName ] = true;
					}

					elem.setAttribute( name, name.toLowerCase() );
				}
				return name;
			}
		};

		// Warn only for attributes that can remain distinct from their properties post-1.9
		if ( ruseDefault.test( lowerName ) ) {
			migrateWarn( "jQuery.fn.attr('" + lowerName + "') may use property instead of attribute" );
		}
	}

	return oldAttr.call( jQuery, elem, name, value );
};

// attrHooks: value
jQuery.attrHooks.value = {
	get: function( elem, name ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrGet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value') no longer gets properties");
		}
		return name in elem ?
			elem.value :
			null;
	},
	set: function( elem, value ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrSet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
		}
		// Does not return so that setAttribute is also used
		elem.value = value;
	}
};


var matched, browser,
	oldInit = jQuery.fn.init,
	oldParseJSON = jQuery.parseJSON,
	// Note: XSS check is done below after string is trimmed
	rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;

// $(html) "looks like html" rule change
jQuery.fn.init = function( selector, context, rootjQuery ) {
	var match;

	if ( selector && typeof selector === "string" && !jQuery.isPlainObject( context ) &&
			(match = rquickExpr.exec( jQuery.trim( selector ) )) && match[ 0 ] ) {
		// This is an HTML string according to the "old" rules; is it still?
		if ( selector.charAt( 0 ) !== "<" ) {
			migrateWarn("$(html) HTML strings must start with '<' character");
		}
		if ( match[ 3 ] ) {
			migrateWarn("$(html) HTML text after last tag is ignored");
		}
		// Consistently reject any HTML-like string starting with a hash (#9521)
		// Note that this may break jQuery 1.6.x code that otherwise would work.
		if ( match[ 0 ].charAt( 0 ) === "#" ) {
			migrateWarn("HTML string cannot start with a '#' character");
			jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
		}
		// Now process using loose rules; let pre-1.8 play too
		if ( context && context.context ) {
			// jQuery object as context; parseHTML expects a DOM object
			context = context.context;
		}
		if ( jQuery.parseHTML ) {
			return oldInit.call( this, jQuery.parseHTML( match[ 2 ], context, true ),
					context, rootjQuery );
		}
	}
	return oldInit.apply( this, arguments );
};
jQuery.fn.init.prototype = jQuery.fn;

// Let $.parseJSON(falsy_value) return null
jQuery.parseJSON = function( json ) {
	if ( !json && json !== null ) {
		migrateWarn("jQuery.parseJSON requires a valid JSON string");
		return null;
	}
	return oldParseJSON.apply( this, arguments );
};

jQuery.uaMatch = function( ua ) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		[];

	return {
		browser: match[ 1 ] || "",
		version: match[ 2 ] || "0"
	};
};

// Don't clobber any existing jQuery.browser in case it's different
if ( !jQuery.browser ) {
	matched = jQuery.uaMatch( navigator.userAgent );
	browser = {};

	if ( matched.browser ) {
		browser[ matched.browser ] = true;
		browser.version = matched.version;
	}

	// Chrome is Webkit, but Webkit is also Safari.
	if ( browser.chrome ) {
		browser.webkit = true;
	} else if ( browser.webkit ) {
		browser.safari = true;
	}

	jQuery.browser = browser;
}

// Warn if the code tries to get jQuery.browser
migrateWarnProp( jQuery, "browser", jQuery.browser, "jQuery.browser is deprecated" );

jQuery.sub = function() {
	function jQuerySub( selector, context ) {
		return new jQuerySub.fn.init( selector, context );
	}
	jQuery.extend( true, jQuerySub, this );
	jQuerySub.superclass = this;
	jQuerySub.fn = jQuerySub.prototype = this();
	jQuerySub.fn.constructor = jQuerySub;
	jQuerySub.sub = this.sub;
	jQuerySub.fn.init = function init( selector, context ) {
		if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
			context = jQuerySub( context );
		}

		return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
	};
	jQuerySub.fn.init.prototype = jQuerySub.fn;
	var rootjQuerySub = jQuerySub(document);
	migrateWarn( "jQuery.sub() is deprecated" );
	return jQuerySub;
};


// Ensure that $.ajax gets the new parseJSON defined in core.js
jQuery.ajaxSetup({
	converters: {
		"text json": jQuery.parseJSON
	}
});


var oldFnData = jQuery.fn.data;

jQuery.fn.data = function( name ) {
	var ret, evt,
		elem = this[0];

	// Handles 1.7 which has this behavior and 1.8 which doesn't
	if ( elem && name === "events" && arguments.length === 1 ) {
		ret = jQuery.data( elem, name );
		evt = jQuery._data( elem, name );
		if ( ( ret === undefined || ret === evt ) && evt !== undefined ) {
			migrateWarn("Use of jQuery.fn.data('events') is deprecated");
			return evt;
		}
	}
	return oldFnData.apply( this, arguments );
};


var rscriptType = /\/(java|ecma)script/i,
	oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;

jQuery.fn.andSelf = function() {
	migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
	return oldSelf.apply( this, arguments );
};

// Since jQuery.clean is used internally on older versions, we only shim if it's missing
if ( !jQuery.clean ) {
	jQuery.clean = function( elems, context, fragment, scripts ) {
		// Set context per 1.8 logic
		context = context || document;
		context = !context.nodeType && context[0] || context;
		context = context.ownerDocument || context;

		migrateWarn("jQuery.clean() is deprecated");

		var i, elem, handleScript, jsTags,
			ret = [];

		jQuery.merge( ret, jQuery.buildFragment( elems, context ).childNodes );

		// Complex logic lifted directly from jQuery 1.8
		if ( fragment ) {
			// Special handling of each script element
			handleScript = function( elem ) {
				// Check if we consider it executable
				if ( !elem.type || rscriptType.test( elem.type ) ) {
					// Detach the script and store it in the scripts array (if provided) or the fragment
					// Return truthy to indicate that it has been handled
					return scripts ?
						scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
						fragment.appendChild( elem );
				}
			};

			for ( i = 0; (elem = ret[i]) != null; i++ ) {
				// Check if we're done after handling an executable script
				if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
					// Append to fragment and handle embedded scripts
					fragment.appendChild( elem );
					if ( typeof elem.getElementsByTagName !== "undefined" ) {
						// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
						jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

						// Splice the scripts into ret after their former ancestor and advance our index beyond them
						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
						i += jsTags.length;
					}
				}
			}
		}

		return ret;
	};
}

var eventAdd = jQuery.event.add,
	eventRemove = jQuery.event.remove,
	eventTrigger = jQuery.event.trigger,
	oldToggle = jQuery.fn.toggle,
	oldLive = jQuery.fn.live,
	oldDie = jQuery.fn.die,
	ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
	rajaxEvent = new RegExp( "\\b(?:" + ajaxEvents + ")\\b" ),
	rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
	hoverHack = function( events ) {
		if ( typeof( events ) !== "string" || jQuery.event.special.hover ) {
			return events;
		}
		if ( rhoverHack.test( events ) ) {
			migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
		}
		return events && events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

// Event props removed in 1.9, put them back if needed; no practical way to warn them
if ( jQuery.event.props && jQuery.event.props[ 0 ] !== "attrChange" ) {
	jQuery.event.props.unshift( "attrChange", "attrName", "relatedNode", "srcElement" );
}

// Undocumented jQuery.event.handle was "deprecated" in jQuery 1.7
if ( jQuery.event.dispatch ) {
	migrateWarnProp( jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated" );
}

// Support for 'hover' pseudo-event and ajax event warnings
jQuery.event.add = function( elem, types, handler, data, selector ){
	if ( elem !== document && rajaxEvent.test( types ) ) {
		migrateWarn( "AJAX events should be attached to document: " + types );
	}
	eventAdd.call( this, elem, hoverHack( types || "" ), handler, data, selector );
};
jQuery.event.remove = function( elem, types, handler, selector, mappedTypes ){
	eventRemove.call( this, elem, hoverHack( types ) || "", handler, selector, mappedTypes );
};

jQuery.fn.error = function() {
	var args = Array.prototype.slice.call( arguments, 0);
	migrateWarn("jQuery.fn.error() is deprecated");
	args.splice( 0, 0, "error" );
	if ( arguments.length ) {
		return this.bind.apply( this, args );
	}
	// error event should not bubble to window, although it does pre-1.7
	this.triggerHandler.apply( this, args );
	return this;
};

jQuery.fn.toggle = function( fn, fn2 ) {

	// Don't mess with animation or css toggles
	if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
		return oldToggle.apply( this, arguments );
	}
	migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");

	// Save reference to arguments for access in closure
	var args = arguments,
		guid = fn.guid || jQuery.guid++,
		i = 0,
		toggler = function( event ) {
			// Figure out which function to execute
			var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ lastToggle ].apply( this, arguments ) || false;
		};

	// link all the functions, so any of them can unbind this click handler
	toggler.guid = guid;
	while ( i < args.length ) {
		args[ i++ ].guid = guid;
	}

	return this.click( toggler );
};

jQuery.fn.live = function( types, data, fn ) {
	migrateWarn("jQuery.fn.live() is deprecated");
	if ( oldLive ) {
		return oldLive.apply( this, arguments );
	}
	jQuery( this.context ).on( types, this.selector, data, fn );
	return this;
};

jQuery.fn.die = function( types, fn ) {
	migrateWarn("jQuery.fn.die() is deprecated");
	if ( oldDie ) {
		return oldDie.apply( this, arguments );
	}
	jQuery( this.context ).off( types, this.selector || "**", fn );
	return this;
};

// Turn global events into document-triggered events
jQuery.event.trigger = function( event, data, elem, onlyHandlers  ){
	if ( !elem && !rajaxEvent.test( event ) ) {
		migrateWarn( "Global events are undocumented and deprecated" );
	}
	return eventTrigger.call( this,  event, data, elem || document, onlyHandlers  );
};
jQuery.each( ajaxEvents.split("|"),
	function( _, name ) {
		jQuery.event.special[ name ] = {
			setup: function() {
				var elem = this;

				// The document needs no shimming; must be !== for oldIE
				if ( elem !== document ) {
					jQuery.event.add( document, name + "." + jQuery.guid, function() {
						jQuery.event.trigger( name, null, elem, true );
					});
					jQuery._data( this, name, jQuery.guid++ );
				}
				return false;
			},
			teardown: function() {
				if ( this !== document ) {
					jQuery.event.remove( document, name + "." + jQuery._data( this, name ) );
				}
				return false;
			}
		};
	}
);


})( jQuery, window );

/**
 * Read a named param from the url
 *
 * @var param ParamName
 */
jQuery.UrlParam = function(ParamName, QueryString){
	var results = new RegExp('[\?&]' + ParamName + '=([^&#]*)').exec(QueryString);
	if (results==null){
	   return null;
	}
	else{
	   return results[1] || 0;
	}
}

/**
 * Read a named param from the url
 *
 * @var param DefaultValue
 */
jQuery.ReadUrlParam = function(ParamName, DefaultValue) {
	var Response;
	var ParamValue = decodeURIComponent(jQuery.UrlParam(ParamName, window.location.href));
	
	if (null != ParamValue && 'null' != ParamValue) {
		Response = ParamValue;
	} else {
		Response = DefaultValue;
	}
	
	return Response;
}

document.write(unescape('%3Cscript src="/titleautos/dist/js/jquery-ui.min.js"%3E%3C/script%3E'));
	function InIframe () {
		try {
			return window.self !== window.top;
		} catch (e) {
			return true;
		}
	};
var _image_switch;
var _image_dimensions = 0.75;
var flLeaseBedragFactor = 0.80000000000000004;
var vulFinancialLeaseGalerij = function(objFl, data) {
    objFl.html("&euro; " + data.leasetermijn + ",- p/m");
}
var vulFinancialLeaseLijst = function(objFl, data) {
    objFl.html("&euro; " + data.leasetermijn + ",- p/m");
}
var _laddaVerzonden = function(soort) {
    if(soort == undefined) return;
    if(soort == "beoordelen_v2") {
         showBeoordelingForm("volgende");
    }
};
(function ($) {

    if (!Modernizr.canvas) {
        $(".html5").hide();
    }
    var pluginInfo = {
        namespace: 'ad-lazyloader',
        version: '1.0'
    };
	
	var _windowHeight;
	var _windowWidth;
	$(window).on("load resize", function(){
		var _this = $(this);
		_windowHeight = _this.height();
		_windowWidth = _this.width();
	});
	
    var main = {
        options: {
            id: pluginInfo.namespace,
			src: null,
			events: {
                beforeShow: null,
                afterShow: null
            }
        },
		
		_loaded: false,
		
        _create: function (options) {
			var _self = this;
			_self.setOptions(options);
			
			if (null == _self.options.src) {
				if (_self.element.data("lazyloader-src") != undefined) {
					_self.options.src = _self.element.data("lazyloader-src");
				}
			}
			
			if (null == _self.options.src) {
				throw new Exception("Lazyloader: Missing image");
			}
			
			$(window).on("DOMContentLoaded load resize scroll", function(){
				if (!_self._loaded && _self.inViewport.apply(_self)) {
					_self.show.apply(_self);
				}
			});
        },

        setOptions: function (options) {
            if ('object' === typeof options) {
                $.extend(true, this.options, options);
            }
        },

        getOptions: function () {
            return this.options;
        },

        /**
         * Override or set one option in self.options
         *
         * @attribute string key
         * @attribute mix value
         * @return void
         */
        setOption: function (key, value) {
			if (key.indexOf(".") > -1) {
				var _split = key.split(".");
				var o = this.options;
				for (var i = 0; i < _split.length - 1; ++i) {
					o = o[_split[i]];
				}

				o[_split[_split.length -1]] = value;
			} else {
				this.options[key] = value;
			}
        },
		    /**
         * get one option in self.options
         *
         * @attribute string key
         * @return self.options.key
         */
        getOption: function (key) {
            var response = null;
			if (key.indexOf(".") > -1) {
				var _split = key.split(".");
				var o = this.options;
				for (var i = 0; i < _split.length; ++i) {
					o = o[_split[i]];
				}

				response = o;
			} else {
				response = this.options[key];
			}
			
			return response;
        },
		
		show: function() {
			var _self = this;
			
			if (typeof _self.options.events.beforeShow === "function") {
				_self.options.events.beforeShow.apply(_self.element);
			}

			var preloadedImage = _self.element
				.clone()
				.attr("src", _self.options.src)
				.css({
					display: "none"
				});

			_self.element.after(preloadedImage);
			
			preloadedImage.on("load", function(){
				preloadedImage.remove();
				_self.element.attr("src", _self.options.src);
				_self._loaded = true;
				
				if (typeof _self.options.events.afterShow === "function") {
					_self.options.events.afterShow.apply(_self.element);
				}
			});
		},
		
		inViewport: function() {
			var rect = this.element[0].getBoundingClientRect();
			var response = (
				rect.top >= -rect.height &&
				rect.left >= -rect.width &&
				rect.bottom <= (_windowHeight + rect.height) &&
				rect.right <= (_windowWidth + rect.width)
			);

			return response;
		}
    };

    $.fn.Lazyloader = function (method) {
        if (method instanceof String && '_' == method.charAt(0)) {
            return this;
        }

        var e = this;
        var response = e;
        var args = arguments;
        if (!method || 'object' === typeof method) {
            e.each(function () {
                var instance = $.data(
                    this, pluginInfo.namespace);
                if (!instance) {
                    instance = $.data(
                        this, pluginInfo.namespace, $.extend(true, {}, new Object(main)));
                    instance.element = $(this);
                }	
                response = instance._create.apply(instance, [method]);
            });
        }
        else if (main[method]) {
            e.each(function () {
                var instance = $.data(
                    this, pluginInfo.namespace);
                args = [].slice.call(args, 1);
                response = instance[method].apply(instance, args);
            });
        }
        return response;
    };
})(jQuery);
/*Begin time slider */
/**
 * jQuery Plugin TimeSlider
 *
 * @date 30-9-2014
 * @version: 1.0
 * @author Frank Bonnet
 *
 * @dependencies:
 *	jquery.min.js
 */

(function ($) {

	/**
	 * Are the images loaded?
	 */
	var _windowLoaded = document.readyState == "complete";
	$(window).load(function(){
		_windowLoaded = true;
	});

    /**
     * Plugin info
     *
     * The name of the plugin is used for the $.data
     * namespace of the selected element
     */
    var pluginInfo = {
        namespace: 'ad-timeslider',
        version: '1.0'
    };

    var main = {
        options: {
            id: pluginInfo.namespace,
            time: 2000,
			images: null,
			loader: {
				padding: "10px",
				height: "10px",
				progress: {
					updateRate: 5,
				}
			},
			effects: {
				show: "fade",
				hide: "fade",
				speed: 1
			},
			events: {
                beforeStartTimer: null,
                afterEndTimer: null,
				beforeNextImage: null,
				afterNextImage: null
            }
        },
		
		/**
		 * Loader html
		 */
		_loader: null,
		
		/**
		 * Progress html (placed inside loader)
		 */
		_progress: null,
		
		/**
		 * Wrapper html (wrapped around image)
		 */
		_wrapper: null,
		
		/**
		 * Check that indicates if the mouse is 
		 * currently over the image
		 */
		_mouseover: false,
		
		/**
		 * True if an animation is in progress
		 */
		_animationInProgress: false,
		
		/**
		 * Current image (-1 is the original)
		 */
		_current: -1,
		
		/**
		 * Preloaded images
		 */
		_preloadedImages: new Array(),
		/**
		 * Latest creation date
		 */
		_created: null,
		
        /**
         * Initialize the plugin. _create is only called once when the main object is created.
		 *
		 * If the window load event has occured yet the code is 
		 * excecuted directly, if not an event is bound to the 
		 * window load event.
         *
         * @attribute this.options
         * @return    void
         */
        _create: function (options) {
			var _self = this;
			var _hold_until_images_loaded = function() {
				_self.setOptions(options);
				
				if (null == _self.options.images) {
					if (_self.element.attr("data-timeslider-image") != null && _self.element.attr("data-timeslider-image").length > 0) {
						_self.options.images = _self.element.attr("data-timeslider-image").split(",");
					}
				}
				
				if (null != _self.options.images && _self.options.images.length > 0) {
				
					var wrapper = _self._getWrapper.apply(_self);
					wrapper.mouseenter(function () { 
				        if (!_self._mouseover) {
						    _self._mouseover = true;
						    _self._created = new Date();
						    _self.startTimer.apply(_self);
					    }
					});
					
					wrapper.mouseleave(function(){
						_self._mouseover = false;
					});
					
					_self.element.wrap(wrapper);
					_self.element.css({
						transition: "none"
					});
				}
			};
	
			if (_windowLoaded) {
				_hold_until_images_loaded();
			} else {
				$(window).load(_hold_until_images_loaded);
			}
        },

        /**
         * Merge options with this.options
         * 
         * @attribute options
         * @return    void
         */
        setOptions: function (options) {
            if ('object' === typeof options) {
                $.extend(true, this.options, options);
            }
        },

        /**
         * Get the complete array with options
         *
         * @attribute void
         * @return	 self.options
         */
        getOptions: function () {
            return this.options;
        },

        /**
         * Override or set one option in self.options
         *
         * @attribute string key
         * @attribute mix value
         * @return void
         */
        setOption: function (key, value) {
			if (key.indexOf(".") > -1) {
				var _split = key.split(".");
				var o = this.options;
				for (var i = 0; i < _split.length - 1; ++i) {
					o = o[_split[i]];
				}

				o[_split[_split.length -1]] = value;
			} else {
				this.options[key] = value;
			}
        },
		 /**
         * get one option in self.options
         *
         * @attribute string key
         * @return self.options.key
         */
        getOption: function (key) {
            var response = null;
			if (key.indexOf(".") > -1) {
				var _split = key.split(".");
				var o = this.options;
				for (var i = 0; i < _split.length; ++i) {
					o = o[_split[i]];
				}

				response = o;
			} else {
				response = this.options[key];
			}
			
			return response;
        },

        /**
         * Get the current plugin version
         *
         * @return    pluginInfo.version
         */
        getVersion: function () {
            return pluginInfo.version;
        },
		
		/**
		 * Preload an image
		 *
		 * @attribute index
		 */
		_preloadImage: function(_index){
			var _self = this;
		
			if (_self._preloadedImages[_index] == undefined) {
				_self._preloadedImages[_index] = _self.element.clone()
					.attr("src", _self.options.images[_index])
					.css({
						display: "none"
					});
					
				_self.element.after(
					_self._preloadedImages[_index]);
			}
			
			return _self._preloadedImages[_index];
		},
		
		/**
		 * Gets next image if any
		 *
		 * @return object image 
		 */
		getNextImage: function() {
			var _self = this;
			var _image;
			
			if (_self.options.images.length > ++_self._current) {
				_image = _self._preloadImage.apply(_self, [_self._current]);
			} else {
				_self._current = -1;
				_image = _self.element;
			}
			
			return _image;
		},
		
		/**
		 * Wrapper to surround the image element with
		 *
		 * @return object
		 */
		_getWrapper: function() {
			var _self = this;
			if (null == _self._wrapper) {
				_self._wrapper = $("<div>").css({
					overflow: "hidden",
					zIndex: "auto"
				});

			}
			
			return _self._wrapper;
		},
		
		/**
		 * Loader to append to the image element
		 *
		 * @return object
		 */
		_getLoader: function() {
			var _self = this;
			if (null == _self._loader) {
				_self._loader = $("<div>").css({
					position: "absolute",
					zIndex: 999,
					bottom: _self.options.loader.padding,
					left: _self.options.loader.padding,
					right: _self.options.loader.padding,
					height: _self.options.loader.height,
				}).addClass(
					pluginInfo.namespace + "-loader");
					
				_self._loader.append(
					_self._getProgress.apply(_self));
			}
			
			return _self._loader;
		},
		
		_getProgress: function() {
			var _self = this;
			if (null == _self._progress) {
				_self._progress = $("<div>").css({
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 0,
				}).addClass(
					pluginInfo.namespace + "-progress");
			}
			
			return _self._progress;
		},

		nextImage: function() {
			var _self = this;
		
            if (typeof _self.options.events.beforeNextImage === "function") {
                _self.options.events.beforeNextImage.apply(_self);
            }
			
			var currentImage;
			if (_self._current == -1) {
				currentImage = _self.element;
			} else {
				currentImage = _self._preloadedImages[_self._current];
			}
			
			var _createdAtStart = _self._created;
			currentImage.hide(_self.options.effects.hide, _self.options.effects.speed, function(){
				_self.getNextImage.apply(_self).show(_self.options.effects.show, _self.options.effects.speed, function(){
					if (typeof _self.options.events.afterNextImage === "function") {
						_self.options.events.afterNextImage.apply(_self);
					}
					
					if (_self._mouseover && _createdAtStart == _self._created) {
						_self.startTimer.apply(_self);
					}
				});
			});
		},

        startTimer: function () {
            var _self = this;
            
            if (typeof _self.options.events.beforeStartTimer === "function") {
                _self.options.events.beforeStartTimer.apply(_self);
            }
			
			if ((_self._current == -1 && _self._preloadedImages.length == 0) || _self._preloadedImages.length < _self.options.images.length) {
				_self._preloadImage.apply(_self, [_self._current + 1]);
			}
			
			if (_self._mouseover) {
				_self.initLoader.apply(_self);
			}
			
			var _start = (new Date()).getTime();
			var _end = _start + _self.options.time;
			var _elapsed = 0;
			
			var t = setInterval(function(){
				var _time = (new Date()).getTime();
				if (_time < _end) {
					if (!_self._mouseover) {
						_self.removeLoader.apply(_self);
						clearInterval(t);
					}
					
					_elapsed = _time - _start;
					_progress = _elapsed / (_self.options.time / 100);
					
					_self.updateLoader.apply(_self, [_progress]);
				} 
				
				else {
					clearInterval(t);
					_self.removeLoader.apply(_self);
				
					if (typeof _self.options.events.afterEndTimer === "function") {
						_self.options.events.afterEndTimer.apply(_self);
					}
					
					if (_self._mouseover) {
						_self.nextImage.apply(_self);
					}
				}
			}, _self.options.loader.progress.updateRate);
        },

        initLoader: function(){
			var _self = this;
			_self.element.after(
				_self._getLoader.apply(_self));
		},
		
		updateLoader: function(percentage) {
			var _self = this;
			var _progress = _self._getProgress.apply(_self);
			_progress.css({
				width: percentage + "%"
			});
		},
		
		/**
		 * Remove loader element
		 *
		 * @return void
		 */
		removeLoader: function(){
			var _self = this;
			_self._getLoader.apply(_self).remove();
		}
    };

    /**
     * The place where the function is called
     * There is no need to change this
     */
    $.fn.TimeSlider = function (method) {
        if (method instanceof String && '_' == method.charAt(0)) {
            return this; 
        }

        var e = this;
        var response = e;
        var args = arguments;
        if (!method || 'object' === typeof method) {
            e.each(function () {
                var instance = $.data(
                    this, pluginInfo.namespace);
                if (!instance) {
                    instance = $.data(
                        this, pluginInfo.namespace, $.extend(true, {}, new Object(main)));
                    instance.element = $(this);
                }
                response = instance._create.apply(instance, [method]);
            });
        }
        else if (main[method]) {
            e.each(function () {
                var instance = $.data(
                    this, pluginInfo.namespace);
                args = [].slice.call(args, 1);
                response = instance[method].apply(instance, args);
            });
        }
        return response;
    };
})(jQuery);
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

(function(e){var t=function(t,n){this.$form=e(t);this.options=e.extend({},e.fn.bootstrapValidator.DEFAULT_OPTIONS,n);this.$invalidFields=e([]);this.$submitButton=null;this.$hiddenButton=null;this.STATUS_NOT_VALIDATED="NOT_VALIDATED";this.STATUS_VALIDATING="VALIDATING";this.STATUS_INVALID="INVALID";this.STATUS_VALID="VALID";var r=function(){var e=3,t=document.createElement("div"),n=t.all||[];while(t.innerHTML="<!--[if gt IE "+ ++e+"]><br><![endif]-->",n[0]){}return e>4?e:!e}();var i=document.createElement("div");this._changeEvent=r===9||!("oninput"in i)?"keyup":"input";this._submitIfValid=null;this._cacheFields={};this._init()};t.prototype={constructor:t,_init:function(){var t=this,n={excluded:this.$form.attr("data-bv-excluded"),trigger:this.$form.attr("data-bv-trigger"),message:this.$form.attr("data-bv-message"),container:this.$form.attr("data-bv-container"),group:this.$form.attr("data-bv-group"),submitButtons:this.$form.attr("data-bv-submitbuttons"),threshold:this.$form.attr("data-bv-threshold"),live:this.$form.attr("data-bv-live"),onSuccess:this.$form.attr("data-bv-onsuccess"),onError:this.$form.attr("data-bv-onerror"),fields:{},feedbackIcons:{valid:this.$form.attr("data-bv-feedbackicons-valid"),invalid:this.$form.attr("data-bv-feedbackicons-invalid"),validating:this.$form.attr("data-bv-feedbackicons-validating")},events:{formInit:this.$form.attr("data-bv-events-form-init"),formError:this.$form.attr("data-bv-events-form-error"),formSuccess:this.$form.attr("data-bv-events-form-success"),fieldAdded:this.$form.attr("data-bv-events-field-added"),fieldRemoved:this.$form.attr("data-bv-events-field-removed"),fieldInit:this.$form.attr("data-bv-events-field-init"),fieldError:this.$form.attr("data-bv-events-field-error"),fieldSuccess:this.$form.attr("data-bv-events-field-success"),fieldStatus:this.$form.attr("data-bv-events-field-status"),validatorError:this.$form.attr("data-bv-events-validator-error"),validatorSuccess:this.$form.attr("data-bv-events-validator-success")}};this.$form.attr("novalidate","novalidate").addClass(this.options.elementClass).on("submit.bv",function(e){e.preventDefault();t.validate()}).on("click.bv",this.options.submitButtons,function(){t.$submitButton=e(this);t._submitIfValid=true}).find("[name], [data-bv-field]").each(function(){var r=e(this),i=r.attr("name")||r.attr("data-bv-field"),s=t._parseOptions(r);if(s){r.attr("data-bv-field",i);n.fields[i]=e.extend({},s,n.fields[i])}});this.options=e.extend(true,this.options,n);this.$hiddenButton=e("<button/>").attr("type","submit").prependTo(this.$form).addClass("bv-hidden-submit").css({display:"none",width:0,height:0});this.$form.on("click.bv",'[type="submit"]',function(n){var r=e(n.target).eq(0);if(t.options.submitButtons&&!r.is(t.options.submitButtons)&&!r.is(t.$hiddenButton)){t.$form.off("submit.bv").submit()}});for(var r in this.options.fields){this._initField(r)}this.$form.trigger(e.Event(this.options.events.formInit),{bv:this,options:this.options});if(this.options.onSuccess){this.$form.on(this.options.events.formSuccess,function(n){e.fn.bootstrapValidator.helpers.call(t.options.onSuccess,[n])})}if(this.options.onError){this.$form.on(this.options.events.formError,function(n){e.fn.bootstrapValidator.helpers.call(t.options.onError,[n])})}},_parseOptions:function(t){var n=t.attr("name")||t.attr("data-bv-field"),r={},i,s,o,u,a,f,l;for(s in e.fn.bootstrapValidator.validators){i=e.fn.bootstrapValidator.validators[s];o=t.attr("data-bv-"+s.toLowerCase())+"";l="function"===typeof i.enableByHtml5?i.enableByHtml5(t):null;if(l&&o!=="false"||l!==true&&(""===o||"true"===o)){i.html5Attributes=e.extend({},{message:"message",onerror:"onError",onsuccess:"onSuccess"},i.html5Attributes);r[s]=e.extend({},l===true?{}:l,r[s]);for(f in i.html5Attributes){u=i.html5Attributes[f];a=t.attr("data-bv-"+s.toLowerCase()+"-"+f);if(a){if("true"===a){a=true}else if("false"===a){a=false}r[s][u]=a}}}}var c={excluded:t.attr("data-bv-excluded"),feedbackIcons:t.attr("data-bv-feedbackicons"),trigger:t.attr("data-bv-trigger"),message:t.attr("data-bv-message"),container:t.attr("data-bv-container"),group:t.attr("data-bv-group"),selector:t.attr("data-bv-selector"),threshold:t.attr("data-bv-threshold"),onStatus:t.attr("data-bv-onstatus"),onSuccess:t.attr("data-bv-onsuccess"),onError:t.attr("data-bv-onerror"),validators:r},h=e.isEmptyObject(c),p=e.isEmptyObject(r);if(!p||!h&&this.options.fields&&this.options.fields[n]){c.validators=r;return c}else{return null}},_initField:function(t){var n=e([]);switch(typeof t){case"object":n=t;t=t.attr("data-bv-field");break;case"string":n=this.getFieldElements(t);n.attr("data-bv-field",t);break;default:break}if(this.options.fields[t]===null||this.options.fields[t].validators===null){return}if(n.length===0){delete this.options.fields[t];return}var r;for(r in this.options.fields[t].validators){if(!e.fn.bootstrapValidator.validators[r]){delete this.options.fields[t].validators[r]}}if(this.options.fields[t].enabled===null){this.options.fields[t].enabled=true}var i=this,s=n.length,o=n.attr("type"),u=s===1||"radio"===o||"checkbox"===o,a="radio"===o||"checkbox"===o||"file"===o||"SELECT"===n.eq(0).get(0).tagName?"change":this._changeEvent,f=(this.options.fields[t].trigger||this.options.trigger||a).split(" "),l=e.map(f,function(e){return e+".update.bv"}).join(" ");for(var c=0;c<s;c++){var h=n.eq(c),p=this.options.fields[t].group||this.options.group,d=h.parents(p),v=this.options.fields[t].container||this.options.container,m=v&&v!=="tooltip"&&v!=="popover"?e(v):this._getMessageContainer(h,p);if(v&&v!=="tooltip"&&v!=="popover"){m.addClass("has-error")}m.find('.help-block[data-bv-validator][data-bv-for="'+t+'"]').remove();d.find('i[data-bv-icon-for="'+t+'"]').remove();h.off(l).on(l,function(){i.updateStatus(e(this),i.STATUS_NOT_VALIDATED)});h.data("bv.messages",m);for(r in this.options.fields[t].validators){h.data("bv.result."+r,this.STATUS_NOT_VALIDATED);if(!u||c===s-1){e("<small/>").css("display","none").addClass("help-block").attr("data-bv-validator",r).attr("data-bv-for",t).attr("data-bv-result",this.STATUS_NOT_VALIDATED).html(this._getMessage(t,r)).appendTo(m)}if(this.options.fields[t].validators[r].onSuccess){h.on(this.options.events.validatorSuccess,function(n,s){e.fn.bootstrapValidator.helpers.call(i.options.fields[t].validators[r].onSuccess,[n,s])})}if(this.options.fields[t].validators[r].onError){h.on(this.options.events.validatorError,function(n,s){e.fn.bootstrapValidator.helpers.call(i.options.fields[t].validators[r].onError,[n,s])})}}if(this.options.fields[t].feedbackIcons!==false&&this.options.fields[t].feedbackIcons!=="false"&&this.options.feedbackIcons&&this.options.feedbackIcons.validating&&this.options.feedbackIcons.invalid&&this.options.feedbackIcons.valid&&(!u||c===s-1)){d.removeClass("has-success").removeClass("has-error").addClass("has-feedback");var g=e("<i/>").css("display","none").addClass("form-control-feedback").attr("data-bv-icon-for",t).insertAfter(h);if("checkbox"===o||"radio"===o){var y=h.parent();if(y.hasClass(o)){g.insertAfter(y)}else if(y.parent().hasClass(o)){g.insertAfter(y.parent())}}if(d.find("label").length===0){g.css("top",0)}if(d.find(".input-group").length!==0){g.css({top:0,"z-index":100}).insertAfter(d.find(".input-group").eq(0))}}}if(this.options.fields[t].onSuccess){n.on(this.options.events.fieldSuccess,function(n,r){e.fn.bootstrapValidator.helpers.call(i.options.fields[t].onSuccess,[n,r])})}if(this.options.fields[t].onError){n.on(this.options.events.fieldError,function(n,r){e.fn.bootstrapValidator.helpers.call(i.options.fields[t].onError,[n,r])})}if(this.options.fields[t].onStatus){n.on(this.options.events.fieldStatus,function(n,r){e.fn.bootstrapValidator.helpers.call(i.options.fields[t].onStatus,[n,r])})}l=e.map(f,function(e){return e+".live.bv"}).join(" ");switch(this.options.live){case"submitted":break;case"disabled":n.off(l);break;case"enabled":default:n.off(l).on(l,function(){if(i._exceedThreshold(e(this))){i.validateField(e(this))}});break}n.trigger(e.Event(this.options.events.fieldInit),{bv:this,field:t,element:n})},_getMessage:function(t,n){if(!this.options.fields[t]||!e.fn.bootstrapValidator.validators[n]||!this.options.fields[t].validators||!this.options.fields[t].validators[n]){return""}var r=this.options.fields[t].validators[n];switch(true){case!!r.message:return r.message;case!!this.options.fields[t].message:return this.options.fields[t].message;case!!e.fn.bootstrapValidator.i18n[n]:return e.fn.bootstrapValidator.i18n[n]["default"];default:return this.options.message}},_getMessageContainer:function(e,t){var n=e.parent();if(n.is(t)){return n}var r=n.attr("class");if(!r){return this._getMessageContainer(n,t)}r=r.split(" ");var i=r.length;for(var s=0;s<i;s++){if(/^col-(xs|sm|md|lg)-\d+$/.test(r[s])||/^col-(xs|sm|md|lg)-offset-\d+$/.test(r[s])){return n}}return this._getMessageContainer(n,t)},_submit:function(){var t=this.isValid(),n=t?this.options.events.formSuccess:this.options.events.formError,r=e.Event(n);this.$form.trigger(r);if(this.$submitButton){t?this._onSuccess(r):this._onError(r)}},_isExcluded:function(t){var n=t.attr("data-bv-excluded"),r=t.attr("data-bv-field")||t.attr("name");switch(true){case!!r&&this.options.fields&&this.options.fields[r]&&(this.options.fields[r].excluded==="true"||this.options.fields[r].excluded===true):case n==="true":case n==="":return true;case!!r&&this.options.fields&&this.options.fields[r]&&(this.options.fields[r].excluded==="false"||this.options.fields[r].excluded===false):case n==="false":return false;default:if(this.options.excluded){if("string"===typeof this.options.excluded){this.options.excluded=e.map(this.options.excluded.split(","),function(t){return e.trim(t)})}var i=this.options.excluded.length;for(var s=0;s<i;s++){if("string"===typeof this.options.excluded[s]&&t.is(this.options.excluded[s])||"function"===typeof this.options.excluded[s]&&this.options.excluded[s].call(this,t,this)===true){return true}}}return false}},_exceedThreshold:function(t){var n=t.attr("data-bv-field"),r=this.options.fields[n].threshold||this.options.threshold;if(!r){return true}var i=e.inArray(t.attr("type"),["button","checkbox","file","hidden","image","radio","reset","submit"])!==-1;return i||t.val().length>=r},_onError:function(t){if(t.isDefaultPrevented()){return}if("submitted"===this.options.live){this.options.live="enabled";var n=this;for(var r in this.options.fields){(function(t){var i=n.getFieldElements(t);if(i.length){var s=e(i[0]).attr("type"),o="radio"===s||"checkbox"===s||"file"===s||"SELECT"===e(i[0]).get(0).tagName?"change":n._changeEvent,u=n.options.fields[r].trigger||n.options.trigger||o,a=e.map(u.split(" "),function(e){return e+".live.bv"}).join(" ");i.off(a).on(a,function(){if(n._exceedThreshold(e(this))){n.validateField(e(this))}})}})(r)}}var i=this.$invalidFields.eq(0);if(i){var s=i.parents(".tab-pane"),o;if(s&&(o=s.attr("id"))){e('a[href="#'+o+'"][data-toggle="tab"]').tab("show")}i.focus()}},_onSuccess:function(e){if(e.isDefaultPrevented()){return}this.disableSubmitButtons(true).defaultSubmit()},_onFieldValidated:function(t,n){var r=t.attr("data-bv-field"),i=this.options.fields[r].validators,s={},o=0,u={bv:this,field:r,element:t,validator:n};if(n){switch(t.data("bv.result."+n)){case this.STATUS_INVALID:t.trigger(e.Event(this.options.events.validatorError),u);break;case this.STATUS_VALID:t.trigger(e.Event(this.options.events.validatorSuccess),u);break;default:break}}s[this.STATUS_NOT_VALIDATED]=0;s[this.STATUS_VALIDATING]=0;s[this.STATUS_INVALID]=0;s[this.STATUS_VALID]=0;for(var a in i){if(i[a].enabled===false){continue}o++;var f=t.data("bv.result."+a);if(f){s[f]++}}if(s[this.STATUS_VALID]===o){this.$invalidFields=this.$invalidFields.not(t);t.trigger(e.Event(this.options.events.fieldSuccess),u)}else if(s[this.STATUS_NOT_VALIDATED]===0&&s[this.STATUS_VALIDATING]===0&&s[this.STATUS_INVALID]>0){this.$invalidFields=this.$invalidFields.add(t);t.trigger(e.Event(this.options.events.fieldError),u)}},getFieldElements:function(t){if(!this._cacheFields[t]){this._cacheFields[t]=this.options.fields[t]&&this.options.fields[t].selector?e(this.options.fields[t].selector):this.$form.find('[name="'+t+'"]')}return this._cacheFields[t]},disableSubmitButtons:function(e){if(!e){this.$form.find(this.options.submitButtons).removeAttr("disabled")}else if(this.options.live!=="disabled"){this.$form.find(this.options.submitButtons).attr("disabled","disabled")}return this},validate:function(){if(!this.options.fields){return this}this.disableSubmitButtons(true);for(var e in this.options.fields){this.validateField(e)}this._submit();return this},validateField:function(t){var n=e([]);switch(typeof t){case"object":n=t;t=t.attr("data-bv-field");break;case"string":n=this.getFieldElements(t);break;default:break}if(this.options.fields[t]&&this.options.fields[t].enabled===false){return this}var r=this,i=n.attr("type"),s="radio"===i||"checkbox"===i?1:n.length,o="radio"===i||"checkbox"===i,u=this.options.fields[t].validators,a,f;for(var l=0;l<s;l++){var c=n.eq(l);if(this._isExcluded(c)){continue}for(a in u){if(c.data("bv.dfs."+a)){c.data("bv.dfs."+a).reject()}var h=c.data("bv.result."+a);if(h===this.STATUS_VALID||h===this.STATUS_INVALID||u[a].enabled===false){this._onFieldValidated(c,a);continue}c.data("bv.result."+a,this.STATUS_VALIDATING);f=e.fn.bootstrapValidator.validators[a].validate(this,c,u[a]);if("object"===typeof f&&f.resolve){this.updateStatus(o?t:c,this.STATUS_VALIDATING,a);c.data("bv.dfs."+a,f);f.done(function(e,t,n,i){e.removeData("bv.dfs."+t);if(i){r.updateMessage(e,t,i)}r.updateStatus(o?e.attr("data-bv-field"):e,n?r.STATUS_VALID:r.STATUS_INVALID,t);if(n&&r._submitIfValid===true){r._submit()}})}else if("object"===typeof f&&f.valid!==undefined&&f.message!==undefined){this.updateMessage(o?t:c,a,f.message);this.updateStatus(o?t:c,f.valid?this.STATUS_VALID:this.STATUS_INVALID,a)}else if("boolean"===typeof f){this.updateStatus(o?t:c,f?this.STATUS_VALID:this.STATUS_INVALID,a)}}}return this},updateMessage:function(t,n,r){var i=e([]);switch(typeof t){case"object":i=t;t=t.attr("data-bv-field");break;case"string":i=this.getFieldElements(t);break;default:break}i.each(function(){e(this).data("bv.messages").find('.help-block[data-bv-validator="'+n+'"][data-bv-for="'+t+'"]').html(r)})},updateStatus:function(t,n,r){var i=e([]);switch(typeof t){case"object":i=t;t=t.attr("data-bv-field");break;case"string":i=this.getFieldElements(t);break;default:break}if(n===this.STATUS_NOT_VALIDATED){this._submitIfValid=false}var s=this,o=i.attr("type"),u=this.options.fields[t].group||this.options.group,a="radio"===o||"checkbox"===o?1:i.length;for(var f=0;f<a;f++){var l=i.eq(f);if(this._isExcluded(l)){continue}var c=l.parents(u),h=l.data("bv.messages"),p=h.find('.help-block[data-bv-validator][data-bv-for="'+t+'"]'),d=r?p.filter('[data-bv-validator="'+r+'"]'):p,v=c.find('.form-control-feedback[data-bv-icon-for="'+t+'"]'),m=this.options.fields[t].container||this.options.container,g=null;if(r){l.data("bv.result."+r,n)}else{for(var y in this.options.fields[t].validators){l.data("bv.result."+y,n)}}d.attr("data-bv-result",n);var b=l.parents(".tab-pane"),w,E;if(b&&(w=b.attr("id"))){E=e('a[href="#'+w+'"][data-toggle="tab"]').parent()}switch(n){case this.STATUS_VALIDATING:g=null;this.disableSubmitButtons(true);c.removeClass("has-success").removeClass("has-error");if(v){v.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show()}if(E){E.removeClass("bv-tab-success").removeClass("bv-tab-error")}break;case this.STATUS_INVALID:g=false;this.disableSubmitButtons(true);c.removeClass("has-success").addClass("has-error");if(v){v.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show()}if(E){E.removeClass("bv-tab-success").addClass("bv-tab-error")}break;case this.STATUS_VALID:g=p.filter('[data-bv-result="'+this.STATUS_NOT_VALIDATED+'"]').length===0?p.filter('[data-bv-result="'+this.STATUS_VALID+'"]').length===p.length:null;if(g!==null){this.disableSubmitButtons(this.$submitButton?!this.isValid():!g);if(v){v.removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid).addClass(g?this.options.feedbackIcons.valid:this.options.feedbackIcons.invalid).show()}}c.removeClass("has-error has-success").addClass(this.isValidContainer(c)?"has-success":"has-error");if(E){E.removeClass("bv-tab-success").removeClass("bv-tab-error").addClass(this.isValidContainer(b)?"bv-tab-success":"bv-tab-error")}break;case this.STATUS_NOT_VALIDATED:default:g=null;this.disableSubmitButtons(false);c.removeClass("has-success").removeClass("has-error");if(v){v.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide()}if(E){E.removeClass("bv-tab-success").removeClass("bv-tab-error")}break}switch(true){case v&&"tooltip"===m:g===false?v.css("cursor","pointer").tooltip("destroy").tooltip({html:true,placement:"top",title:p.filter('[data-bv-result="'+s.STATUS_INVALID+'"]').eq(0).html()}):v.css("cursor","").tooltip("destroy");break;case v&&"popover"===m:g===false?v.css("cursor","pointer").popover("destroy").popover({content:p.filter('[data-bv-result="'+s.STATUS_INVALID+'"]').eq(0).html(),html:true,placement:"top",trigger:"hover click"}):v.css("cursor","").popover("destroy");break;default:n===this.STATUS_INVALID?d.show():d.hide();break}l.trigger(e.Event(this.options.events.fieldStatus),{bv:this,field:t,element:l,status:n});this._onFieldValidated(l,r)}return this},isValid:function(){for(var e in this.options.fields){if(!this.isValidField(e)){return false}}return true},isValidField:function(t){var n=e([]);switch(typeof t){case"object":n=t;t=t.attr("data-bv-field");break;case"string":n=this.getFieldElements(t);break;default:break}if(n.length===0||this.options.fields[t]===null||this.options.fields[t].enabled===false){return true}var r=n.attr("type"),i="radio"===r||"checkbox"===r?1:n.length,s,o,u;for(var a=0;a<i;a++){s=n.eq(a);if(this._isExcluded(s)){continue}for(o in this.options.fields[t].validators){if(this.options.fields[t].validators[o].enabled===false){continue}u=s.data("bv.result."+o);if(u!==this.STATUS_VALID){return false}}}return true},isValidContainer:function(t){var n=this,r={},i="string"===typeof t?e(t):t;if(i.length===0){return true}i.find("[data-bv-field]").each(function(){var t=e(this),i=t.attr("data-bv-field");if(!n._isExcluded(t)&&!r[i]){r[i]=t}});for(var s in r){var o=r[s];if(o.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="'+s+'"]').filter(function(){var t=e(this).attr("data-bv-validator"),r=e(this).attr("data-bv-for");return n.options.fields[r].validators[t].enabled!==false&&o.data("bv.result."+t)&&o.data("bv.result."+t)!==n.STATUS_VALID}).length!==0){return false}}return true},defaultSubmit:function(){if(this.$submitButton){e("<input/>").attr("type","hidden").attr("data-bv-submit-hidden","").attr("name",this.$submitButton.attr("name")).val(this.$submitButton.val()).appendTo(this.$form)}this.$form.off("submit.bv").submit()},getInvalidFields:function(){return this.$invalidFields},getSubmitButton:function(){return this.$submitButton},getMessages:function(t,n){var r=this,i=[],s=e([]);switch(true){case t&&"object"===typeof t:s=t;break;case t&&"string"===typeof t:var o=this.getFieldElements(t);if(o.length>0){var u=o.attr("type");s="radio"===u||"checkbox"===u?o.eq(0):o}break;default:s=this.$invalidFields;break}var a=n?'[data-bv-validator="'+n+'"]':"";s.each(function(){i=i.concat(e(this).data("bv.messages").find('.help-block[data-bv-for="'+e(this).attr("data-bv-field")+'"][data-bv-result="'+r.STATUS_INVALID+'"]'+a).map(function(){var t=e(this).attr("data-bv-validator"),n=e(this).attr("data-bv-for");return r.options.fields[n].validators[t].enabled===false?"":e(this).html()}).get())});return i},getOptions:function(e,t,n){if(!e){return this.options}if("object"===typeof e){e=e.attr("data-bv-field")}if(!this.options.fields[e]){return null}var r=this.options.fields[e];if(!t){return r}if(!r.validators||!r.validators[t]){return null}return n?r.validators[t][n]:r.validators[t]},updateOption:function(e,t,n,r){if("object"===typeof e){e=e.attr("data-bv-field")}if(this.options.fields[e]&&this.options.fields[e].validators[t]){this.options.fields[e].validators[t][n]=r;this.updateStatus(e,this.STATUS_NOT_VALIDATED,t)}return this},addField:function(t,n){var r=e([]);switch(typeof t){case"object":r=t;t=t.attr("data-bv-field")||t.attr("name");break;case"string":delete this._cacheFields[t];r=this.getFieldElements(t);break;default:break}r.attr("data-bv-field",t);var i=r.attr("type"),s="radio"===i||"checkbox"===i?1:r.length;for(var o=0;o<s;o++){var u=r.eq(o);var a=this._parseOptions(u);a=a===null?n:e.extend(true,n,a);this.options.fields[t]=e.extend(true,this.options.fields[t],a);this._cacheFields[t]=this._cacheFields[t]?this._cacheFields[t].add(u):u;this._initField("checkbox"===i||"radio"===i?t:u)}this.disableSubmitButtons(false);this.$form.trigger(e.Event(this.options.events.fieldAdded),{field:t,element:r,options:this.options.fields[t]});return this},removeField:function(t){var n=e([]);switch(typeof t){case"object":n=t;t=t.attr("data-bv-field")||t.attr("name");n.attr("data-bv-field",t);break;case"string":n=this.getFieldElements(t);break;default:break}if(n.length===0){return this}var r=n.attr("type"),i="radio"===r||"checkbox"===r?1:n.length;for(var s=0;s<i;s++){var o=n.eq(s);this.$invalidFields=this.$invalidFields.not(o);this._cacheFields[t]=this._cacheFields[t].not(o)}if(!this._cacheFields[t]||this._cacheFields[t].length===0){delete this.options.fields[t]}if("checkbox"===r||"radio"===r){this._initField(t)}this.disableSubmitButtons(false);this.$form.trigger(e.Event(this.options.events.fieldRemoved),{field:t,element:n});return this},resetField:function(t,n){var r=e([]);switch(typeof t){case"object":r=t;t=t.attr("data-bv-field");break;case"string":r=this.getFieldElements(t);break;default:break}var i=r.length;if(this.options.fields[t]){for(var s=0;s<i;s++){for(var o in this.options.fields[t].validators){r.eq(s).removeData("bv.dfs."+o)}}}this.updateStatus(t,this.STATUS_NOT_VALIDATED);if(n){var u=r.attr("type");"radio"===u||"checkbox"===u?r.removeAttr("checked").removeAttr("selected"):r.val("")}return this},resetForm:function(t){for(var n in this.options.fields){this.resetField(n,t)}this.$invalidFields=e([]);this.$submitButton=null;this.disableSubmitButtons(false);return this},revalidateField:function(e){this.updateStatus(e,this.STATUS_NOT_VALIDATED).validateField(e);return this},enableFieldValidators:function(e,t,n){var r=this.options.fields[e].validators;if(n&&r&&r[n]&&r[n].enabled!==t){this.options.fields[e].validators[n].enabled=t;this.updateStatus(e,this.STATUS_NOT_VALIDATED,n)}else if(!n&&this.options.fields[e].enabled!==t){this.options.fields[e].enabled=t;for(var i in r){this.enableFieldValidators(e,t,i)}}return this},getDynamicOption:function(t,n){var r="string"===typeof t?this.getFieldElements(t):t,i=r.val();if("function"===typeof n){return e.fn.bootstrapValidator.helpers.call(n,[i,this,r])}else if("string"===typeof n){var s=this.getFieldElements(n);if(s.length){return s.val()}else{return e.fn.bootstrapValidator.helpers.call(n,[i,this,r])||n}}return null},destroy:function(){var e,t,n,r,i,s,o;for(e in this.options.fields){t=this.getFieldElements(e);s=this.options.fields[e].container||this.options.container,o=this.options.fields[e].group||this.options.group;for(var u=0;u<t.length;u++){n=t.eq(u);n.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="'+e+'"]').remove().end().end().removeData("bv.messages").parents(o).removeClass("has-feedback has-error has-success").end().off(".bv").removeAttr("data-bv-field");i=n.parents(o).find('i[data-bv-icon-for="'+e+'"]');if(i){switch(s){case"tooltip":i.tooltip("destroy").remove();break;case"popover":i.popover("destroy").remove();break;default:i.remove();break}}for(r in this.options.fields[e].validators){if(n.data("bv.dfs."+r)){n.data("bv.dfs."+r).reject()}n.removeData("bv.result."+r).removeData("bv.dfs."+r)}}}this.disableSubmitButtons(false);this.$hiddenButton.remove();this.$form.removeClass(this.options.elementClass).off(".bv").removeData("bootstrapValidator").find("[data-bv-submit-hidden]").remove().end().find('[type="submit"]').off("click.bv")}};e.fn.bootstrapValidator=function(n){var r=arguments;return this.each(function(){var i=e(this),s=i.data("bootstrapValidator"),o="object"===typeof n&&n;if(!s){s=new t(this,o);i.data("bootstrapValidator",s)}if("string"===typeof n){s[n].apply(s,Array.prototype.slice.call(r,1))}})};e.fn.bootstrapValidator.DEFAULT_OPTIONS={elementClass:"bv-form",message:"This value is not valid",group:".form-group",container:null,threshold:null,excluded:[":disabled",":hidden",":not(:visible)"],feedbackIcons:{valid:null,invalid:null,validating:null},submitButtons:'[type="submit"]',live:"enabled",fields:null,events:{formInit:"init.form.bv",formError:"error.form.bv",formSuccess:"success.form.bv",fieldAdded:"added.field.bv",fieldRemoved:"removed.field.bv",fieldInit:"init.field.bv",fieldError:"error.field.bv",fieldSuccess:"success.field.bv",fieldStatus:"status.field.bv",validatorError:"error.validator.bv",validatorSuccess:"success.validator.bv"}};e.fn.bootstrapValidator.validators={};e.fn.bootstrapValidator.i18n={};e.fn.bootstrapValidator.Constructor=t;e.fn.bootstrapValidator.helpers={call:function(e,t){if("function"===typeof e){return e.apply(this,t)}else if("string"===typeof e){if("()"===e.substring(e.length-2)){e=e.substring(0,e.length-2)}var n=e.split("."),r=n.pop(),i=window;for(var s=0;s<n.length;s++){i=i[n[s]]}return typeof i[r]==="undefined"?null:i[r].apply(this,t)}},format:function(t,n){if(!e.isArray(n)){n=[n]}for(var r in n){t=t.replace("%s",n[r])}return t},date:function(e,t,n,r){if(isNaN(e)||isNaN(t)||isNaN(n)){return false}if(n.length>2||t.length>2||e.length>4){return false}n=parseInt(n,10);t=parseInt(t,10);e=parseInt(e,10);if(e<1e3||e>9999||t<=0||t>12){return false}var i=[31,28,31,30,31,30,31,31,30,31,30,31];if(e%400===0||e%100!==0&&e%4===0){i[1]=29}if(n<=0||n>i[t-1]){return false}if(r===true){var s=new Date,o=s.getFullYear(),u=s.getMonth(),a=s.getDate();return e<o||e===o&&t-1<u||e===o&&t-1===u&&n<a}return true},luhn:function(e){var t=e.length,n=0,r=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],i=0;while(t--){i+=r[n][parseInt(e.charAt(t),10)];n^=1}return i%10===0&&i>0},mod11And10:function(e){var t=5,n=e.length;for(var r=0;r<n;r++){t=((t||10)*2%11+parseInt(e.charAt(r),10))%10}return t===1},mod37And36:function(e,t){t=t||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";var n=t.length,r=e.length,i=Math.floor(n/2);for(var s=0;s<r;s++){i=((i||n)*2%(n+1)+t.indexOf(e.charAt(s)))%n}return i===1}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.base64=e.extend(e.fn.bootstrapValidator.i18n.base64||{},{"default":"Please enter a valid base 64 encoded"});e.fn.bootstrapValidator.validators.base64={validate:function(e,t,n){var r=t.val();if(r===""){return true}return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(r)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.between=e.extend(e.fn.bootstrapValidator.i18n.between||{},{"default":"Please enter a value between %s and %s",notInclusive:"Please enter a value between %s and %s strictly"});e.fn.bootstrapValidator.validators.between={html5Attributes:{message:"message",min:"min",max:"max",inclusive:"inclusive"},enableByHtml5:function(e){if("range"===e.attr("type")){return{min:e.attr("min"),max:e.attr("max")}}return false},validate:function(t,n,r){var i=n.val();if(i===""){return true}if(!e.isNumeric(i)){return false}var s=e.isNumeric(r.min)?r.min:t.getDynamicOption(n,r.min),o=e.isNumeric(r.max)?r.max:t.getDynamicOption(n,r.max);i=parseFloat(i);return r.inclusive===true||r.inclusive===undefined?{valid:i>=s&&i<=o,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.between["default"],[s,o])}:{valid:i>s&&i<o,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.between.notInclusive,[s,o])}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.callback=e.extend(e.fn.bootstrapValidator.i18n.callback||{},{"default":"Please enter a valid value"});e.fn.bootstrapValidator.validators.callback={html5Attributes:{message:"message",callback:"callback"},validate:function(t,n,r){var i=n.val();if(r.callback){var s=new e.Deferred,o=e.fn.bootstrapValidator.helpers.call(r.callback,[i,t,n]);s.resolve(n,"callback","boolean"===typeof o?o:o.valid,"object"===typeof o&&o.message?o.message:null);return s}return true}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.choice=e.extend(e.fn.bootstrapValidator.i18n.choice||{},{"default":"Please enter a valid value",less:"Please choose %s options at minimum",more:"Please choose %s options at maximum",between:"Please choose %s - %s options"});e.fn.bootstrapValidator.validators.choice={html5Attributes:{message:"message",min:"min",max:"max"},validate:function(t,n,r){var i=n.is("select")?t.getFieldElements(n.attr("data-bv-field")).find("option").filter(":selected").length:t.getFieldElements(n.attr("data-bv-field")).filter(":checked").length,s=r.min?e.isNumeric(r.min)?r.min:t.getDynamicOption(n,r.min):null,o=r.max?e.isNumeric(r.max)?r.max:t.getDynamicOption(n,r.max):null,u=true,a=r.message||e.fn.bootstrapValidator.i18n.choice["default"];if(s&&i<parseInt(s,10)||o&&i>parseInt(o,10)){u=false}switch(true){case!!s&&!!o:a=e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.choice.between,[parseInt(s,10),parseInt(o,10)]);break;case!!s:a=e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.choice.less,parseInt(s,10));break;case!!o:a=e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.choice.more,parseInt(o,10));break;default:break}return{valid:u,message:a}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.creditCard=e.extend(e.fn.bootstrapValidator.i18n.creditCard||{},{"default":"Please enter a valid credit card number"});e.fn.bootstrapValidator.validators.creditCard={validate:function(t,n,r){var i=n.val();if(i===""){return true}if(/[^0-9-\s]+/.test(i)){return false}i=i.replace(/\D/g,"");if(!e.fn.bootstrapValidator.helpers.luhn(i)){return false}var s={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA:{length:[16],prefix:["4"]}};var o,u;for(o in s){for(u in s[o].prefix){if(i.substr(0,s[o].prefix[u].length)===s[o].prefix[u]&&e.inArray(i.length,s[o].length)!==-1){return true}}}return false}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.cusip=e.extend(e.fn.bootstrapValidator.i18n.cusip||{},{"default":"Please enter a valid CUSIP number"});e.fn.bootstrapValidator.validators.cusip={validate:function(t,n,r){var i=n.val();if(i===""){return true}i=i.toUpperCase();if(!/^[0-9A-Z]{9}$/.test(i)){return false}var s=e.map(i.split(""),function(e){var t=e.charCodeAt(0);return t>="A".charCodeAt(0)&&t<="Z".charCodeAt(0)?t-"A".charCodeAt(0)+10:e}),o=s.length,u=0;for(var a=0;a<o-1;a++){var f=parseInt(s[a],10);if(a%2!==0){f*=2}if(f>9){f-=9}u+=f}u=(10-u%10)%10;return u===s[o-1]}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.cvv=e.extend(e.fn.bootstrapValidator.i18n.cvv||{},{"default":"Please enter a valid CVV number"});e.fn.bootstrapValidator.validators.cvv={html5Attributes:{message:"message",ccfield:"creditCardField"},validate:function(t,n,r){var i=n.val();if(i===""){return true}if(!/^[0-9]{3,4}$/.test(i)){return false}if(!r.creditCardField){return true}var s=t.getFieldElements(r.creditCardField).val();if(s===""){return true}s=s.replace(/\D/g,"");var o={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA:{length:[16],prefix:["4"]}};
var u,a,f=null;for(u in o){for(a in o[u].prefix){if(s.substr(0,o[u].prefix[a].length)===o[u].prefix[a]&&e.inArray(s.length,o[u].length)!==-1){f=u;break}}}return f===null?false:"AMERICAN_EXPRESS"===f?i.length===4:i.length===3}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.date=e.extend(e.fn.bootstrapValidator.i18n.date||{},{"default":"Please enter a valid date"});e.fn.bootstrapValidator.validators.date={html5Attributes:{message:"message",format:"format",separator:"separator"},validate:function(t,n,r){var i=n.val();if(i===""){return true}r.format=r.format||"MM/DD/YYYY";if(n.attr("type")==="date"){r.format="YYYY-MM-DD"}var s=r.format.split(" "),o=s[0],u=s.length>1?s[1]:null,a=s.length>2?s[2]:null,f=i.split(" "),l=f[0],c=f.length>1?f[1]:null;if(s.length!==f.length){return false}var h=r.separator;if(!h){h=l.indexOf("/")!==-1?"/":l.indexOf("-")!==-1?"-":null}if(h===null||l.indexOf(h)===-1){return false}l=l.split(h);o=o.split(h);if(l.length!==o.length){return false}var p=l[e.inArray("YYYY",o)],d=l[e.inArray("MM",o)],v=l[e.inArray("DD",o)];if(!p||!d||!v||p.length!==4){return false}var m=null,g=null,y=null;if(u){u=u.split(":");c=c.split(":");if(u.length!==c.length){return false}g=c.length>0?c[0]:null;m=c.length>1?c[1]:null;y=c.length>2?c[2]:null;if(y){if(isNaN(y)||y.length>2){return false}y=parseInt(y,10);if(y<0||y>60){return false}}if(g){if(isNaN(g)||g.length>2){return false}g=parseInt(g,10);if(g<0||g>=24||a&&g>12){return false}}if(m){if(isNaN(m)||m.length>2){return false}m=parseInt(m,10);if(m<0||m>59){return false}}}return e.fn.bootstrapValidator.helpers.date(p,d,v)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.different=e.extend(e.fn.bootstrapValidator.i18n.different||{},{"default":"Please enter a different value"});e.fn.bootstrapValidator.validators.different={html5Attributes:{message:"message",field:"field"},validate:function(e,t,n){var r=t.val();if(r===""){return true}var i=e.getFieldElements(n.field);if(i===null||i.length===0){return true}if(r!==i.val()){e.updateStatus(n.field,e.STATUS_VALID,"different");return true}else{return false}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.digits=e.extend(e.fn.bootstrapValidator.i18n.digits||{},{"default":"Please enter only digits"});e.fn.bootstrapValidator.validators.digits={validate:function(e,t,n){var r=t.val();if(r===""){return true}return/^\d+$/.test(r)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.ean=e.extend(e.fn.bootstrapValidator.i18n.ean||{},{"default":"Please enter a valid EAN number"});e.fn.bootstrapValidator.validators.ean={validate:function(e,t,n){var r=t.val();if(r===""){return true}if(!/^(\d{8}|\d{12}|\d{13})$/.test(r)){return false}var i=r.length,s=0,o=i===8?[3,1]:[1,3];for(var u=0;u<i-1;u++){s+=parseInt(r.charAt(u),10)*o[u%2]}s=(10-s%10)%10;return s+""===r.charAt(i-1)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.emailAddress=e.extend(e.fn.bootstrapValidator.i18n.emailAddress||{},{"default":"Please enter a valid email address"});e.fn.bootstrapValidator.validators.emailAddress={enableByHtml5:function(e){return"email"===e.attr("type")},validate:function(e,t,n){var r=t.val();if(r===""){return true}var i=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return i.test(r)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.file=e.extend(e.fn.bootstrapValidator.i18n.file||{},{"default":"Please choose a valid file"});e.fn.bootstrapValidator.validators.file={html5Attributes:{extension:"extension",maxsize:"maxSize",message:"message",type:"type"},validate:function(t,n,r){var i=n.val();if(i===""){return true}var s,o=r.extension?r.extension.toLowerCase().split(","):null,u=r.type?r.type.toLowerCase().split(","):null,a=window.File&&window.FileList&&window.FileReader;if(a){var f=n.get(0).files,l=f.length;for(var c=0;c<l;c++){if(r.maxSize&&f[c].size>parseInt(r.maxSize,10)){return false}s=f[c].name.substr(f[c].name.lastIndexOf(".")+1);if(o&&e.inArray(s.toLowerCase(),o)===-1){return false}if(f[c].type&&u&&e.inArray(f[c].type.toLowerCase(),u)===-1){return false}}}else{s=i.substr(i.lastIndexOf(".")+1);if(o&&e.inArray(s.toLowerCase(),o)===-1){return false}}return true}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.greaterThan=e.extend(e.fn.bootstrapValidator.i18n.greaterThan||{},{"default":"Please enter a value greater than or equal to %s",notInclusive:"Please enter a value greater than %s"});e.fn.bootstrapValidator.validators.greaterThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(e){var t=e.attr("type"),n=e.attr("min");if(n&&t!=="date"){return{value:n}}return false},validate:function(t,n,r){var i=n.val();if(i===""){return true}if(!e.isNumeric(i)){return false}var s=e.isNumeric(r.value)?r.value:t.getDynamicOption(n,r.value);i=parseFloat(i);return r.inclusive===true||r.inclusive===undefined?{valid:i>=s,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.greaterThan["default"],s)}:{valid:i>s,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.greaterThan.notInclusive,s)}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.grid=e.extend(e.fn.bootstrapValidator.i18n.grid||{},{"default":"Please enter a valid GRId number"});e.fn.bootstrapValidator.validators.grid={validate:function(t,n,r){var i=n.val();if(i===""){return true}i=i.toUpperCase();if(!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(i)){return false}i=i.replace(/\s/g,"").replace(/-/g,"");if("GRID:"===i.substr(0,5)){i=i.substr(5)}return e.fn.bootstrapValidator.helpers.mod37And36(i)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.hex=e.extend(e.fn.bootstrapValidator.i18n.hex||{},{"default":"Please enter a valid hexadecimal number"});e.fn.bootstrapValidator.validators.hex={validate:function(e,t,n){var r=t.val();if(r===""){return true}return/^[0-9a-fA-F]+$/.test(r)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.hexColor=e.extend(e.fn.bootstrapValidator.i18n.hexColor||{},{"default":"Please enter a valid hex color"});e.fn.bootstrapValidator.validators.hexColor={enableByHtml5:function(e){return"color"===e.attr("type")},validate:function(e,t,n){var r=t.val();if(r===""){return true}return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.iban=e.extend(e.fn.bootstrapValidator.i18n.iban||{},{"default":"Please enter a valid IBAN number",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid IBAN number in %s",countries:{AD:"Andorra",AE:"United Arab Emirates",AL:"Albania",AO:"Angola",AT:"Austria",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BR:"Brazil",CH:"Switzerland",CI:"Ivory Coast",CM:"Cameroon",CR:"Costa Rica",CV:"Cape Verde",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",DO:"Dominican Republic",DZ:"Algeria",EE:"Estonia",ES:"Spain",FI:"Finland",FO:"Faroe Islands",FR:"France",GB:"United Kingdom",GE:"Georgia",GI:"Gibraltar",GL:"Greenland",GR:"Greece",GT:"Guatemala",HR:"Croatia",HU:"Hungary",IE:"Ireland",IL:"Israel",IR:"Iran",IS:"Iceland",IT:"Italy",JO:"Jordan",KW:"Kuwait",KZ:"Kazakhstan",LB:"Lebanon",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MG:"Madagascar",MK:"Macedonia",ML:"Mali",MR:"Mauritania",MT:"Malta",MU:"Mauritius",MZ:"Mozambique",NL:"Netherlands",NO:"Norway",PK:"Pakistan",PL:"Poland",PS:"Palestinian",PT:"Portugal",QA:"Qatar",RO:"Romania",RS:"Serbia",SA:"Saudi Arabia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",SM:"San Marino",SN:"Senegal",TN:"Tunisia",TR:"Turkey",VG:"Virgin Islands, British"}});e.fn.bootstrapValidator.validators.iban={html5Attributes:{message:"message",country:"country"},REGEX:{AD:"AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",AE:"AE[0-9]{2}[0-9]{3}[0-9]{16}",AL:"AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",AO:"AO[0-9]{2}[0-9]{21}",AT:"AT[0-9]{2}[0-9]{5}[0-9]{11}",AZ:"AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",BA:"BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",BE:"BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",BF:"BF[0-9]{2}[0-9]{23}",BG:"BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",BH:"BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",BI:"BI[0-9]{2}[0-9]{12}",BJ:"BJ[0-9]{2}[A-Z]{1}[0-9]{23}",BR:"BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",CH:"CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",CI:"CI[0-9]{2}[A-Z]{1}[0-9]{23}",CM:"CM[0-9]{2}[0-9]{23}",CR:"CR[0-9]{2}[0-9]{3}[0-9]{14}",CV:"CV[0-9]{2}[0-9]{21}",CY:"CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",CZ:"CZ[0-9]{2}[0-9]{20}",DE:"DE[0-9]{2}[0-9]{8}[0-9]{10}",DK:"DK[0-9]{2}[0-9]{14}",DO:"DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",DZ:"DZ[0-9]{2}[0-9]{20}",EE:"EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",ES:"ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",FI:"FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",FO:"FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",FR:"FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",GB:"GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",GE:"GE[0-9]{2}[A-Z]{2}[0-9]{16}",GI:"GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",GL:"GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",GR:"GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",GT:"GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",HR:"HR[0-9]{2}[0-9]{7}[0-9]{10}",HU:"HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",IE:"IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",IL:"IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",IR:"IR[0-9]{2}[0-9]{22}",IS:"IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",IT:"IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",JO:"JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",KW:"KW[0-9]{2}[A-Z]{4}[0-9]{22}",KZ:"KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LB:"LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",LI:"LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",LT:"LT[0-9]{2}[0-9]{5}[0-9]{11}",LU:"LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LV:"LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",MC:"MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",MD:"MD[0-9]{2}[A-Z0-9]{20}",ME:"ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",MG:"MG[0-9]{2}[0-9]{23}",MK:"MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",ML:"ML[0-9]{2}[A-Z]{1}[0-9]{23}",MR:"MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",MT:"MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",MU:"MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",MZ:"MZ[0-9]{2}[0-9]{21}",NL:"NL[0-9]{2}[A-Z]{4}[0-9]{10}",NO:"NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",PK:"PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",PL:"PL[0-9]{2}[0-9]{8}[0-9]{16}",PS:"PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",PT:"PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",QA:"QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",RO:"RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",RS:"RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",SA:"SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",SE:"SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",SI:"SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",SK:"SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",SM:"SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",SN:"SN[0-9]{2}[A-Z]{1}[0-9]{23}",TN:"TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",TR:"TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",VG:"VG[0-9]{2}[A-Z]{4}[0-9]{16}"},validate:function(t,n,r){var i=n.val();if(i===""){return true}i=i.replace(/[^a-zA-Z0-9]/g,"").toUpperCase();var s=r.country;if(!s){s=i.substr(0,2)}else if(typeof s!=="string"||!this.REGEX[s]){s=t.getDynamicOption(n,s)}if(!this.REGEX[s]){return{valid:false,message:e.fn.bootstrapValidator.helpers.format(e.fn.bootstrapValidator.i18n.iban.countryNotSupported,s)}}if(!(new RegExp("^"+this.REGEX[s]+"$")).test(i)){return{valid:false,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.iban.country,e.fn.bootstrapValidator.i18n.iban.countries[s])}}i=i.substr(4)+i.substr(0,4);i=e.map(i.split(""),function(e){var t=e.charCodeAt(0);return t>="A".charCodeAt(0)&&t<="Z".charCodeAt(0)?t-"A".charCodeAt(0)+10:e});i=i.join("");var o=parseInt(i.substr(0,1),10),u=i.length;for(var a=1;a<u;++a){o=(o*10+parseInt(i.substr(a,1),10))%97}return{valid:o===1,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.iban.country,e.fn.bootstrapValidator.i18n.iban.countries[s])}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.id=e.extend(e.fn.bootstrapValidator.i18n.id||{},{"default":"Please enter a valid identification number",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid %s identification number",countries:{BA:"Bosnia and Herzegovina",BG:"Bulgarian",BR:"Brazilian",CH:"Swiss",CL:"Chilean",CZ:"Czech",DK:"Danish",EE:"Estonian",ES:"Spanish",FI:"Finnish",HR:"Croatian",IE:"Irish",IS:"Iceland",LT:"Lithuanian",LV:"Latvian",ME:"Montenegro",MK:"Macedonian",NL:"Dutch",RO:"Romanian",RS:"Serbian",SE:"Swedish",SI:"Slovenian",SK:"Slovak",SM:"San Marino",ZA:"South African"}});e.fn.bootstrapValidator.validators.id={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["BA","BG","BR","CH","CL","CZ","DK","EE","ES","FI","HR","IE","IS","LT","LV","ME","MK","NL","RO","RS","SE","SI","SK","SM","ZA"],validate:function(t,n,r){var i=n.val();if(i===""){return true}var s=r.country;if(!s){s=i.substr(0,2)}else if(typeof s!=="string"||e.inArray(s.toUpperCase(),this.COUNTRY_CODES)===-1){s=t.getDynamicOption(n,s)}if(e.inArray(s,this.COUNTRY_CODES)===-1){return{valid:false,message:e.fn.bootstrapValidator.helpers.format(e.fn.bootstrapValidator.i18n.id.countryNotSupported,s)}}var o=["_",s.toLowerCase()].join("");return this[o](i)?true:{valid:false,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.id.country,e.fn.bootstrapValidator.i18n.id.countries[s.toUpperCase()])}},_validateJMBG:function(e,t){if(!/^\d{13}$/.test(e)){return false}var n=parseInt(e.substr(0,2),10),r=parseInt(e.substr(2,2),10),i=parseInt(e.substr(4,3),10),s=parseInt(e.substr(7,2),10),o=parseInt(e.substr(12,1),10);if(n>31||r>12){return false}var u=0;for(var a=0;a<6;a++){u+=(7-a)*(parseInt(e.charAt(a),10)+parseInt(e.charAt(a+6),10))}u=11-u%11;if(u===10||u===11){u=0}if(u!==o){return false}switch(t.toUpperCase()){case"BA":return 10<=s&&s<=19;case"MK":return 41<=s&&s<=49;case"ME":return 20<=s&&s<=29;case"RS":return 70<=s&&s<=99;case"SI":return 50<=s&&s<=59;default:return true}},_ba:function(e){return this._validateJMBG(e,"BA")},_mk:function(e){return this._validateJMBG(e,"MK")},_me:function(e){return this._validateJMBG(e,"ME")},_rs:function(e){return this._validateJMBG(e,"RS")},_si:function(e){return this._validateJMBG(e,"SI")},_bg:function(t){if(!/^\d{10}$/.test(t)&&!/^\d{6}\s\d{3}\s\d{1}$/.test(t)){return false}t=t.replace(/\s/g,"");var n=parseInt(t.substr(0,2),10)+1900,r=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);if(r>40){n+=100;r-=40}else if(r>20){n-=100;r-=20}if(!e.fn.bootstrapValidator.helpers.date(n,r,i)){return false}var s=0,o=[2,4,8,5,10,9,7,3,6];for(var u=0;u<9;u++){s+=parseInt(t.charAt(u),10)*o[u]}s=s%11%10;return s+""===t.substr(9,1)},_br:function(e){if(/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(e)){return false}if(!/^\d{11}$/.test(e)&&!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(e)){return false}e=e.replace(/\./g,"").replace(/-/g,"");var t=0;for(var n=0;n<9;n++){t+=(10-n)*parseInt(e.charAt(n),10)}t=11-t%11;if(t===10||t===11){t=0}if(t+""!==e.charAt(9)){return false}var r=0;for(n=0;n<10;n++){r+=(11-n)*parseInt(e.charAt(n),10)}r=11-r%11;if(r===10||r===11){r=0}return r+""===e.charAt(10)},_ch:function(e){if(!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(e)){return false}e=e.replace(/\D/g,"").substr(3);var t=e.length,n=0,r=t===8?[3,1]:[1,3];for(var i=0;i<t-1;i++){n+=parseInt(e.charAt(i),10)*r[i%2]}n=10-n%10;return n+""===e.charAt(t-1)},_cl:function(e){if(!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(e)){return false}e=e.replace(/\-/g,"");while(e.length<9){e="0"+e}var t=0,n=[3,2,7,6,5,4,3,2];for(var r=0;r<8;r++){t+=parseInt(e.charAt(r),10)*n[r]}t=11-t%11;if(t===11){t=0}else if(t===10){t="K"}return t+""===e.charAt(8).toUpperCase()},_cz:function(t){if(!/^\d{9,10}$/.test(t)){return false}var n=1900+parseInt(t.substr(0,2),10),r=parseInt(t.substr(2,2),10)%50%20,i=parseInt(t.substr(4,2),10);if(t.length===9){if(n>=1980){n-=100}if(n>1953){return false}}else if(n<1954){n+=100}if(!e.fn.bootstrapValidator.helpers.date(n,r,i)){return false}if(t.length===10){var s=parseInt(t.substr(0,9),10)%11;if(n<1985){s=s%10}return s+""===t.substr(9,1)}return true},_dk:function(t){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t)){return false}t=t.replace(/-/g,"");var n=parseInt(t.substr(0,2),10),r=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);switch(true){case"5678".indexOf(t.charAt(6))!==-1&&i>=58:i+=1800;break;case"0123".indexOf(t.charAt(6))!==-1:case"49".indexOf(t.charAt(6))!==-1&&i>=37:i+=1900;break;default:i+=2e3;break}return e.fn.bootstrapValidator.helpers.date(i,r,n)},_ee:function(e){return this._lt(e)},_es:function(e){if(!/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(e)&&!/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(e)){return false}e=e.replace(/-/g,"");var t="XYZ".indexOf(e.charAt(0));if(t!==-1){e=t+e.substr(1)+""}var n=parseInt(e.substr(0,8),10);n="TRWAGMYFPDXBNJZSQVHLCKE"[n%23];return n===e.substr(8,1)},_fi:function(t){if(!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(t)){return false}var n=parseInt(t.substr(0,2),10),r=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10),s={"+":1800,"-":1900,A:2e3};i=s[t.charAt(6)]+i;if(!e.fn.bootstrapValidator.helpers.date(i,r,n)){return false}var o=parseInt(t.substr(7,3),10);if(o<2){return false}var u=t.substr(0,6)+t.substr(7,3)+"";u=parseInt(u,10);return"0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(u%31)===t.charAt(10)},_hr:function(t){if(!/^[0-9]{11}$/.test(t)){return false}return e.fn.bootstrapValidator.helpers.mod11And10(t)},_ie:function(e){if(!/^\d{7}[A-W][AHWTX]?$/.test(e)){return false}var t=function(e){while(e.length<7){e="0"+e}var t="WABCDEFGHIJKLMNOPQRSTUV",n=0;for(var r=0;r<7;r++){n+=parseInt(e.charAt(r),10)*(8-r)}n+=9*t.indexOf(e.substr(7));return t[n%23]};if(e.length===9&&("A"===e.charAt(8)||"H"===e.charAt(8))){return e.charAt(7)===t(e.substr(0,7)+e.substr(8)+"")}else{return e.charAt(7)===t(e.substr(0,7))}},_is:function(t){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t)){return false}t=t.replace(/-/g,"");var n=parseInt(t.substr(0,2),10),r=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10),s=parseInt(t.charAt(9),10);i=s===9?1900+i:(20+s)*100+i;if(!e.fn.bootstrapValidator.helpers.date(i,r,n,true)){return false}var o=0,u=[3,2,7,6,5,4,3,2];for(var a=0;a<8;a++){o+=parseInt(t.charAt(a),10)*u[a]}o=11-o%11;return o+""===t.charAt(8)},_lt:function(t){if(!/^[0-9]{11}$/.test(t)){return false}var n=parseInt(t.charAt(0),10),r=parseInt(t.substr(1,2),10),i=parseInt(t.substr(3,2),10),s=parseInt(t.substr(5,2),10),o=n%2===0?17+n/2:17+(n+1)/2;r=o*100+r;if(!e.fn.bootstrapValidator.helpers.date(r,i,s,true)){return false}var u=0,a=[1,2,3,4,5,6,7,8,9,1];for(var f=0;f<10;f++){u+=parseInt(t.charAt(f),10)*a[f]}u=u%11;if(u!==10){return u+""===t.charAt(10)}u=0;a=[3,4,5,6,7,8,9,1,2,3];for(f=0;f<10;f++){u+=parseInt(t.charAt(f),10)*a[f]}u=u%11;if(u===10){u=0}return u+""===t.charAt(10)},_lv:function(t){if(!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(t)){return false}t=t.replace(/\D/g,"");var n=parseInt(t.substr(0,2),10),r=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);i=i+1800+parseInt(t.charAt(6),10)*100;if(!e.fn.bootstrapValidator.helpers.date(i,r,n,true)){return false}var s=0,o=[10,5,8,4,2,1,6,3,7,9];for(var u=0;u<10;u++){s+=parseInt(t.charAt(u),10)*o[u]}s=(s+1)%11%10;return s+""===t.charAt(10)},_nl:function(e){while(e.length<9){e="0"+e}if(!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(e)){return false}e=e.replace(/\./g,"");if(parseInt(e,10)===0){return false}var t=0,n=e.length;for(var r=0;r<n-1;r++){t+=(9-r)*parseInt(e.charAt(r),10)}t=t%11;if(t===10){t=0}return t+""===e.charAt(n-1)},_ro:function(t){if(!/^[0-9]{13}$/.test(t)){return false}var n=parseInt(t.charAt(0),10);if(n===0||n===7||n===8){return false}var r=parseInt(t.substr(1,2),10),i=parseInt(t.substr(3,2),10),s=parseInt(t.substr(5,2),10),o={1:1900,2:1900,3:1800,4:1800,5:2e3,6:2e3};if(s>31&&i>12){return false}if(n!==9){r=o[n+""]+r;if(!e.fn.bootstrapValidator.helpers.date(r,i,s)){return false}}var u=0,a=[2,7,9,1,4,6,3,5,8,2,7,9],f=t.length;for(var l=0;l<f-1;l++){u+=parseInt(t.charAt(l),10)*a[l]}u=u%11;if(u===10){u=1}return u+""===t.charAt(f-1)},_se:function(t){if(!/^[0-9]{10}$/.test(t)&&!/^[0-9]{6}[-|+][0-9]{4}$/.test(t)){return false}t=t.replace(/[^0-9]/g,"");var n=parseInt(t.substr(0,2),10)+1900,r=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);if(!e.fn.bootstrapValidator.helpers.date(n,r,i)){return false}return e.fn.bootstrapValidator.helpers.luhn(t)},_sk:function(e){return this._cz(e)},_sm:function(e){return/^\d{5}$/.test(e)},_za:function(t){if(!/^[0-9]{10}[0|1][8|9][0-9]$/.test(t)){return false}var n=parseInt(t.substr(0,2),10),r=(new Date).getFullYear()%100,i=parseInt(t.substr(2,2),10),s=parseInt(t.substr(4,2),10);n=n>=r?n+1900:n+2e3;if(!e.fn.bootstrapValidator.helpers.date(n,i,s)){return false}return e.fn.bootstrapValidator.helpers.luhn(t)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.identical=e.extend(e.fn.bootstrapValidator.i18n.identical||{},{"default":"Please enter the same value"});e.fn.bootstrapValidator.validators.identical={html5Attributes:{message:"message",field:"field"},validate:function(e,t,n){var r=t.val();if(r===""){return true}var i=e.getFieldElements(n.field);if(i===null||i.length===0){return true}if(r===i.val()){e.updateStatus(n.field,e.STATUS_VALID,"identical");return true}else{return false}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.imei=e.extend(e.fn.bootstrapValidator.i18n.imei||{},{"default":"Please enter a valid IMEI number"});e.fn.bootstrapValidator.validators.imei={validate:function(t,n,r){var i=n.val();if(i===""){return true}switch(true){case/^\d{15}$/.test(i):case/^\d{2}-\d{6}-\d{6}-\d{1}$/.test(i):case/^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(i):i=i.replace(/[^0-9]/g,"");return e.fn.bootstrapValidator.helpers.luhn(i);case/^\d{14}$/.test(i):case/^\d{16}$/.test(i):case/^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(i):case/^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(i):return true;default:return false}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.imo=e.extend(e.fn.bootstrapValidator.i18n.imo||{},{"default":"Please enter a valid IMO number"});e.fn.bootstrapValidator.validators.imo={validate:function(e,t,n){var r=t.val();if(r===""){return true}if(!/^IMO \d{7}$/i.test(r)){return false}var i=0,s=r.replace(/^.*(\d{7})$/,"$1");for(var o=6;o>=1;o--){i+=s.slice(6-o,-o)*(o+1)}return i%10===parseInt(s.charAt(6),10)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.integer=e.extend(e.fn.bootstrapValidator.i18n.integer||{},{"default":"Please enter a valid number"});e.fn.bootstrapValidator.validators.integer={enableByHtml5:function(e){return"number"===e.attr("type")&&(e.attr("step")===undefined||e.attr("step")%1===0)},validate:function(e,t,n){if(this.enableByHtml5(t)&&t.get(0).validity&&t.get(0).validity.badInput===true){return false}var r=t.val();if(r===""){return true}return/^(?:-?(?:0|[1-9][0-9]*))$/.test(r)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.ip=e.extend(e.fn.bootstrapValidator.i18n.ip||{},{"default":"Please enter a valid IP address",ipv4:"Please enter a valid IPv4 address",ipv6:"Please enter a valid IPv6 address"});e.fn.bootstrapValidator.validators.ip={html5Attributes:{message:"message",ipv4:"ipv4",ipv6:"ipv6"},validate:function(t,n,r){var i=n.val();if(i===""){return true}r=e.extend({},{ipv4:true,ipv6:true},r);var s=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,o=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,u=false,a;switch(true){case r.ipv4&&!r.ipv6:u=s.test(i);a=r.message||e.fn.bootstrapValidator.i18n.ip.ipv4;break;case!r.ipv4&&r.ipv6:u=o.test(i);a=r.message||e.fn.bootstrapValidator.i18n.ip.ipv6;break;case r.ipv4&&r.ipv6:default:u=s.test(i)&&o.test(i);a=r.message||e.fn.bootstrapValidator.i18n.ip["default"];break}return{valid:u,message:a}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.isbn=e.extend(e.fn.bootstrapValidator.i18n.isbn||{},{"default":"Please enter a valid ISBN number"});e.fn.bootstrapValidator.validators.isbn={validate:function(e,t,n){var r=t.val();if(r===""){return true}var i;switch(true){case/^\d{9}[\dX]$/.test(r):case r.length===13&&/^(\d+)-(\d+)-(\d+)-([\dX])$/.test(r):case r.length===13&&/^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(r):i="ISBN10";break;case/^(978|979)\d{9}[\dX]$/.test(r):case r.length===17&&/^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(r):case r.length===17&&/^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(r):i="ISBN13";break;default:return false}r=r.replace(/[^0-9X]/gi,"");var s=r.split(""),o=s.length,u=0,a,f;switch(i){case"ISBN10":u=0;for(a=0;a<o-1;a++){u+=parseInt(s[a],10)*(10-a)}f=11-u%11;if(f===11){f=0}else if(f===10){f="X"}return f+""===s[o-1];case"ISBN13":u=0;for(a=0;a<o-1;a++){u+=a%2===0?parseInt(s[a],10):parseInt(s[a],10)*3}f=10-u%10;if(f===10){f="0"}return f+""===s[o-1];default:return false}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.isin=e.extend(e.fn.bootstrapValidator.i18n.isin||{},{"default":"Please enter a valid ISIN number"});e.fn.bootstrapValidator.validators.isin={COUNTRY_CODES:"AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",validate:function(e,t,n){var r=t.val();if(r===""){return true}r=r.toUpperCase();var i=new RegExp("^("+this.COUNTRY_CODES+")[0-9A-Z]{10}$");if(!i.test(r)){return false}var s="",o=r.length;for(var u=0;u<o-1;u++){var a=r.charCodeAt(u);s+=a>57?(a-55).toString():r.charAt(u)}var f="",l=s.length,c=l%2!==0?0:1;for(u=0;u<l;u++){f+=parseInt(s[u],10)*(u%2===c?2:1)+""}var h=0;for(u=0;u<f.length;u++){h+=parseInt(f.charAt(u),10)}h=(10-h%10)%10;return h+""===r.charAt(o-1)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.ismn=e.extend(e.fn.bootstrapValidator.i18n.ismn||{},{"default":"Please enter a valid ISMN number"});e.fn.bootstrapValidator.validators.ismn={validate:function(e,t,n){var r=t.val();if(r===""){return true}var i;switch(true){case/^M\d{9}$/.test(r):case/^M-\d{4}-\d{4}-\d{1}$/.test(r):case/^M\s\d{4}\s\d{4}\s\d{1}$/.test(r):i="ISMN10";break;case/^9790\d{9}$/.test(r):case/^979-0-\d{4}-\d{4}-\d{1}$/.test(r):case/^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(r):i="ISMN13";break;default:return false}if("ISMN10"===i){r="9790"+r.substr(1)}r=r.replace(/[^0-9]/gi,"");var s=r.length,o=0,u=[1,3];for(var a=0;a<s-1;a++){o+=parseInt(r.charAt(a),10)*u[a%2]}o=10-o%10;return o+""===r.charAt(s-1)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.issn=e.extend(e.fn.bootstrapValidator.i18n.issn||{},{"default":"Please enter a valid ISSN number"});e.fn.bootstrapValidator.validators.issn={validate:function(e,t,n){var r=t.val();if(r===""){return true}if(!/^\d{4}\-\d{3}[\dX]$/.test(r)){return false}r=r.replace(/[^0-9X]/gi,"");var i=r.split(""),s=i.length,o=0;if(i[7]==="X"){i[7]=10}for(var u=0;u<s;u++){o+=parseInt(i[u],10)*(8-u)}return o%11===0}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.lessThan=e.extend(e.fn.bootstrapValidator.i18n.lessThan||{},{"default":"Please enter a value less than or equal to %s",notInclusive:"Please enter a value less than %s"});e.fn.bootstrapValidator.validators.lessThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(e){var t=e.attr("type"),n=e.attr("max");if(n&&t!=="date"){return{value:n}}return false},validate:function(t,n,r){var i=n.val();if(i===""){return true}if(!e.isNumeric(i)){return false}var s=e.isNumeric(r.value)?r.value:t.getDynamicOption(n,r.value);i=parseFloat(i);return r.inclusive===true||r.inclusive===undefined?{valid:i<=s,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.lessThan["default"],s)}:{valid:i<s,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.lessThan.notInclusive,s)}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.mac=e.extend(e.fn.bootstrapValidator.i18n.mac||{},{"default":"Please enter a valid MAC address"});e.fn.bootstrapValidator.validators.mac={validate:function(e,t,n){var r=t.val();if(r===""){return true}return/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(r)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.meid=e.extend(e.fn.bootstrapValidator.i18n.meid||{},{"default":"Please enter a valid MEID number"});e.fn.bootstrapValidator.validators.meid={validate:function(t,n,r){var i=n.val();if(i===""){return true}switch(true){case/^[0-9A-F]{15}$/i.test(i):case/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(i):case/^\d{19}$/.test(i):case/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(i):var s=i.charAt(i.length-1);i=i.replace(/[- ]/g,"");if(i.match(/^\d*$/i)){return e.fn.bootstrapValidator.helpers.luhn(i)}i=i.slice(0,-1);var o="";for(var u=1;u<=13;u+=2){o+=(parseInt(i.charAt(u),16)*2).toString(16)}var a=0;for(u=0;u<o.length;u++){a+=parseInt(o.charAt(u),16)}return a%10===0?s==="0":s===((Math.floor((a+10)/10)*10-a)*2).toString(16);case/^[0-9A-F]{14}$/i.test(i):case/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(i):case/^\d{18}$/.test(i):case/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(i):return true;default:return false}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.notEmpty=e.extend(e.fn.bootstrapValidator.i18n.notEmpty||{},{"default":"Please enter a value"});e.fn.bootstrapValidator.validators.notEmpty={enableByHtml5:function(e){var t=e.attr("required")+"";return"required"===t||"true"===t},validate:function(t,n,r){var i=n.attr("type");if("radio"===i||"checkbox"===i){return t.getFieldElements(n.attr("data-bv-field")).filter(":checked").length>0}return e.trim(n.val())!==""}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.numeric=e.extend(e.fn.bootstrapValidator.i18n.numeric||{},{"default":"Please enter a valid float number"});e.fn.bootstrapValidator.validators.numeric={html5Attributes:{message:"message",separator:"separator"},enableByHtml5:function(e){return"number"===e.attr("type")&&e.attr("step")!==undefined&&e.attr("step")%1!==0},validate:function(e,t,n){if(this.enableByHtml5(t)&&t.get(0).validity&&t.get(0).validity.badInput===true){return false}var r=t.val();if(r===""){return true}var i=n.separator||".";if(i!=="."){r=r.replace(i,".")}return!isNaN(parseFloat(r))&&isFinite(r)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.phone=e.extend(e.fn.bootstrapValidator.i18n.phone||{},{"default":"Please enter a valid phone number",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid phone number in %s",countries:{BR:"Brazil",ES:"Spain",FR:"France",GB:"United Kingdom",MA:"Morocco",PK:"Pakistan",US:"USA",NL:"Netherlands"}});e.fn.bootstrapValidator.validators.phone={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["BR","ES","FR","GB","MA","PK","US","NL"],validate:function(t,n,r){var i=n.val();if(i===""){return true}var s=r.country;if(typeof s!=="string"||e.inArray(s,this.COUNTRY_CODES)===-1){s=t.getDynamicOption(n,s)}if(!s||e.inArray(s.toUpperCase(),this.COUNTRY_CODES)===-1){return{valid:false,message:e.fn.bootstrapValidator.helpers.format(e.fn.bootstrapValidator.i18n.phone.countryNotSupported,s)}}var o=true;switch(s.toUpperCase()){case"BR":i=e.trim(i);o=/^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(i);break;case"ES":i=e.trim(i);o=/^(?:(?:(?:\+|00)34\D?))?(?:9|6)(?:\d\D?){8}$/.test(i);break;case"FR":i=e.trim(i);o=/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(i);break;case"GB":i=e.trim(i);o=/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(i);break;case"MA":i=e.trim(i);o=/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(i);break;case"PK":i=e.trim(i);o=/^0?3[0-9]{2}[0-9]{7}$/.test(i);break;case"NL":i=e.trim(i);o=/^(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)$/.test(i);break;case"US":default:i=i.replace(/\D/g,"");o=/^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(i)&&i.length===10;break}return{valid:o,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.phone.country,e.fn.bootstrapValidator.i18n.phone.countries[s])}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.regexp=e.extend(e.fn.bootstrapValidator.i18n.regexp||{},{"default":"Please enter a value matching the pattern"});e.fn.bootstrapValidator.validators.regexp={html5Attributes:{message:"message",regexp:"regexp"},enableByHtml5:function(e){var t=e.attr("pattern");if(t){return{regexp:t}}return false},validate:function(e,t,n){var r=t.val();if(r===""){return true}var i="string"===typeof n.regexp?new RegExp(n.regexp):n.regexp;return i.test(r)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.remote=e.extend(e.fn.bootstrapValidator.i18n.remote||{},{"default":"Please enter a valid value"});e.fn.bootstrapValidator.validators.remote={html5Attributes:{message:"message",name:"name",type:"type",url:"url"},validate:function(t,n,r){var i=n.val();if(i===""){return true}var s=n.attr("data-bv-field"),o=r.data||{},u=r.url,a=r.type||"POST",f=r.headers||{};if("function"===typeof o){o=o.call(this,t)}if("function"===typeof u){u=u.call(this,t)}o[r.name||s]=i;var l=new e.Deferred;var c=e.ajax({type:a,headers:f,url:u,dataType:"json",data:o});c.then(function(e){l.resolve(n,"remote",e.valid===true||e.valid==="true",e.message?e.message:null)});l.fail(function(){c.abort()});return l}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.rtn=e.extend(e.fn.bootstrapValidator.i18n.rtn||{},{"default":"Please enter a valid RTN number"});e.fn.bootstrapValidator.validators.rtn={validate:function(e,t,n){var r=t.val();if(r===""){return true}if(!/^\d{9}$/.test(r)){return false}var i=0;for(var s=0;s<r.length;s+=3){i+=parseInt(r.charAt(s),10)*3+parseInt(r.charAt(s+1),10)*7+parseInt(r.charAt(s+2),10)}return i!==0&&i%10===0}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.sedol=e.extend(e.fn.bootstrapValidator.i18n.sedol||{},{"default":"Please enter a valid SEDOL number"});e.fn.bootstrapValidator.validators.sedol={validate:function(e,t,n){var r=t.val();if(r===""){return true}r=r.toUpperCase();if(!/^[0-9A-Z]{7}$/.test(r)){return false}var i=0,s=[1,3,1,7,3,9,1],o=r.length;for(var u=0;u<o-1;u++){i+=s[u]*parseInt(r.charAt(u),36)}i=(10-i%10)%10;return i+""===r.charAt(o-1)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.siren=e.extend(e.fn.bootstrapValidator.i18n.siren||{},{"default":"Please enter a valid SIREN number"});e.fn.bootstrapValidator.validators.siren={validate:function(t,n,r){var i=n.val();if(i===""){return true}if(!/^\d{9}$/.test(i)){return false}return e.fn.bootstrapValidator.helpers.luhn(i)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.siret=e.extend(e.fn.bootstrapValidator.i18n.siret||{},{"default":"Please enter a valid SIRET number"});e.fn.bootstrapValidator.validators.siret={validate:function(e,t,n){var r=t.val();if(r===""){return true}var i=0,s=r.length,o;for(var u=0;u<s;u++){o=parseInt(r.charAt(u),10);if(u%2===0){o=o*2;if(o>9){o-=9}}i+=o}return i%10===0}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.step=e.extend(e.fn.bootstrapValidator.i18n.step||{},{"default":"Please enter a valid step of %s"});e.fn.bootstrapValidator.validators.step={html5Attributes:{message:"message",base:"baseValue",step:"step"},validate:function(t,n,r){var i=n.val();if(i===""){return true}r=e.extend({},{baseValue:0,step:1},r);i=parseFloat(i);if(!e.isNumeric(i)){return false}var s=function(e,t){var n=Math.pow(10,t);e=e*n;var r=e>0|-(e<0),i=e%1===.5*r;if(i){return(Math.floor(e)+(r>0))/n}else{return Math.round(e)/n}},o=function(e,t){if(t===0){return 1}var n=(e+"").split("."),r=(t+"").split("."),i=(n.length===1?0:n[1].length)+(r.length===1?0:r[1].length);return s(e-t*Math.floor(e/t),i)};var u=o(i-r.baseValue,r.step);return{valid:u===0||u===r.step,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.step["default"],[r.step])}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.stringCase=e.extend(e.fn.bootstrapValidator.i18n.stringCase||{},{"default":"Please enter only lowercase characters",upper:"Please enter only uppercase characters"});e.fn.bootstrapValidator.validators.stringCase={html5Attributes:{message:"message","case":"case"},validate:function(t,n,r){var i=n.val();if(i===""){return true}var s=(r["case"]||"lower").toLowerCase();return{valid:"upper"===s?i===i.toUpperCase():i===i.toLowerCase(),message:r.message||("upper"===s?e.fn.bootstrapValidator.i18n.stringCase.upper:e.fn.bootstrapValidator.i18n.stringCase["default"])}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.stringLength=e.extend(e.fn.bootstrapValidator.i18n.stringLength||{},{"default":"Please enter a value with valid length",less:"Please enter less than %s characters",more:"Please enter more than %s characters",between:"Please enter value between %s and %s characters long"});e.fn.bootstrapValidator.validators.stringLength={html5Attributes:{message:"message",min:"min",max:"max"},enableByHtml5:function(e){var t=e.attr("maxlength");if(t){return{max:parseInt(t,10)}}return false},validate:function(t,n,r){var i=n.val();if(i===""){return true}var s=e.isNumeric(r.min)?r.min:t.getDynamicOption(n,r.min),o=e.isNumeric(r.max)?r.max:t.getDynamicOption(n,r.max),u=i.length,a=true,f=r.message||e.fn.bootstrapValidator.i18n.stringLength["default"];if(s&&u<parseInt(s,10)||o&&u>parseInt(o,10)){a=false}switch(true){case!!s&&!!o:f=e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.stringLength.between,[parseInt(s,10),parseInt(o,10)]);break;case!!s:f=e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.stringLength.more,parseInt(s,10));break;case!!o:f=e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.stringLength.less,parseInt(o,10));break;default:break}return{valid:a,message:f}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.uri=e.extend(e.fn.bootstrapValidator.i18n.uri||{},{"default":"Please enter a valid URI"});e.fn.bootstrapValidator.validators.uri={html5Attributes:{message:"message",allowlocal:"allowLocal"},enableByHtml5:function(e){return"url"===e.attr("type")},validate:function(e,t,n){var r=t.val();if(r===""){return true}var i=n.allowLocal===true||n.allowLocal==="true",s=new RegExp("^"+"(?:(?:https?|ftp)://)"+"(?:\\S+(?::\\S*)?@)?"+"(?:"+(i?"":"(?!(?:10|127)(?:\\.\\d{1,3}){3})"+"(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})"+"(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")+"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])"+"(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}"+"(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))"+"|"+"(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)"+"(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*"+"(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))"+(i?"?":"")+")"+"(?::\\d{2,5})?"+"(?:/[^\\s]*)?"+"$","i");return s.test(r)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.uuid=e.extend(e.fn.bootstrapValidator.i18n.uuid||{},{"default":"Please enter a valid UUID number",version:"Please enter a valid UUID version %s number"});e.fn.bootstrapValidator.validators.uuid={html5Attributes:{message:"message",version:"version"},validate:function(t,n,r){var i=n.val();if(i===""){return true}var s={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},o=r.version?r.version+"":"all";return{valid:null===s[o]?true:s[o].test(i),message:r.version?e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.uuid.version,r.version):r.message||e.fn.bootstrapValidator.i18n.uuid["default"]}}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.vat=e.extend(e.fn.bootstrapValidator.i18n.vat||{},{"default":"Please enter a valid VAT number",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid %s VAT number",countries:{AT:"Austrian",BE:"Belgian",BG:"Bulgarian",BR:"Brazilian",CH:"Swiss",CY:"Cypriot",CZ:"Czech",DE:"German",DK:"Danish",EE:"Estonian",ES:"Spanish",FI:"Finnish",FR:"French",GB:"United Kingdom",GR:"Greek",EL:"Greek",HU:"Hungarian",HR:"Croatian",IE:"Irish",IS:"Iceland",IT:"Italian",LT:"Lithuanian",LU:"Luxembourg",LV:"Latvian",MT:"Maltese",NL:"Dutch",NO:"Norwegian",PL:"Polish",PT:"Portuguese",RO:"Romanian",RU:"Russian",RS:"Serbian",SE:"Swedish",SI:"Slovenian",SK:"Slovak",ZA:"South African"}});e.fn.bootstrapValidator.validators.vat={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["AT","BE","BG","BR","CH","CY","CZ","DE","DK","EE","EL","ES","FI","FR","GB","GR","HR","HU","IE","IS","IT","LT","LU","LV","MT","NL","NO","PL","PT","RO","RU","RS","SE","SK","SI","ZA"],validate:function(t,n,r){var i=n.val();if(i===""){return true}var s=r.country;if(!s){s=i.substr(0,2)}else if(typeof s!=="string"||e.inArray(s.toUpperCase(),this.COUNTRY_CODES)===-1){s=t.getDynamicOption(n,s)}if(e.inArray(s,this.COUNTRY_CODES)===-1){return{valid:false,message:e.fn.bootstrapValidator.helpers.format(e.fn.bootstrapValidator.i18n.vat.countryNotSupported,s)}}var o=["_",s.toLowerCase()].join("");return this[o](i)?true:{valid:false,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.vat.country,e.fn.bootstrapValidator.i18n.vat.countries[s.toUpperCase()])}},_at:function(e){if(!/^ATU[0-9]{8}$/.test(e)){return false}e=e.substr(3);var t=0,n=[1,2,1,2,1,2,1],r=0;for(var i=0;i<7;i++){r=parseInt(e.charAt(i),10)*n[i];if(r>9){r=Math.floor(r/10)+r%10}t+=r}t=10-(t+4)%10;if(t===10){t=0}return t+""===e.substr(7,1)},_be:function(e){if(!/^BE[0]{0,1}[0-9]{9}$/.test(e)){return false}e=e.substr(2);if(e.length===9){e="0"+e}if(e.substr(1,1)==="0"){return false}var t=parseInt(e.substr(0,8),10)+parseInt(e.substr(8,2),10);return t%97===0},_bg:function(t){if(!/^BG[0-9]{9,10}$/.test(t)){return false}t=t.substr(2);var n=0,r=0;if(t.length===9){for(r=0;r<8;r++){n+=parseInt(t.charAt(r),10)*(r+1)}n=n%11;if(n===10){n=0;for(r=0;r<8;r++){n+=parseInt(t.charAt(r),10)*(r+3)}}n=n%10;return n+""===t.substr(8)}else if(t.length===10){var i=function(t){var n=parseInt(t.substr(0,2),10)+1900,r=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);if(r>40){n+=100;r-=40}else if(r>20){n-=100;r-=20}if(!e.fn.bootstrapValidator.helpers.date(n,r,i)){return false}var s=0,o=[2,4,8,5,10,9,7,3,6];for(var u=0;u<9;u++){s+=parseInt(t.charAt(u),10)*o[u]}s=s%11%10;return s+""===t.substr(9,1)},s=function(e){var t=0,n=[21,19,17,13,11,9,7,3,1];for(var r=0;r<9;r++){t+=parseInt(e.charAt(r),10)*n[r]}t=t%10;return t+""===e.substr(9,1)},o=function(e){var t=0,n=[4,3,2,7,6,5,4,3,2];for(var r=0;r<9;r++){t+=parseInt(e.charAt(r),10)*n[r]}t=11-t%11;if(t===10){return false}if(t===11){t=0}return t+""===e.substr(9,1)};return i(t)||s(t)||o(t)}return false},_br:function(e){if(e===""){return true}var t=e.replace(/[^\d]+/g,"");if(t===""||t.length!==14){return false}if(t==="00000000000000"||t==="11111111111111"||t==="22222222222222"||t==="33333333333333"||t==="44444444444444"||t==="55555555555555"||t==="66666666666666"||t==="77777777777777"||t==="88888888888888"||t==="99999999999999"){return false}var n=t.length-2,r=t.substring(0,n),i=t.substring(n),s=0,o=n-7;for(var u=n;u>=1;u--){s+=parseInt(r.charAt(n-u),10)*o--;if(o<2){o=9}}var a=s%11<2?0:11-s%11;if(a!==parseInt(i.charAt(0),10)){return false}n=n+1;r=t.substring(0,n);s=0;o=n-7;for(u=n;u>=1;u--){s+=parseInt(r.charAt(n-u),10)*o--;if(o<2){o=9}}a=s%11<2?0:11-s%11;return a===parseInt(i.charAt(1),10)},_ch:function(e){if(!/^CHE[0-9]{9}(MWST)?$/.test(e)){return false}e=e.substr(3);var t=0,n=[5,4,3,2,7,6,5,4];for(var r=0;r<8;r++){t+=parseInt(e.charAt(r),10)*n[r]}t=11-t%11;if(t===10){return false}if(t===11){t=0}return t+""===e.substr(8,1)},_cy:function(e){if(!/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(e)){return false}e=e.substr(2);if(e.substr(0,2)==="12"){return false}var t=0,n={0:1,1:0,2:5,3:7,4:9,5:13,6:15,7:17,8:19,9:21};for(var r=0;r<8;r++){var i=parseInt(e.charAt(r),10);if(r%2===0){i=n[i+""]}t+=i}t="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[t%26];return t+""===e.substr(8,1)},_cz:function(t){if(!/^CZ[0-9]{8,10}$/.test(t)){return false}t=t.substr(2);var n=0,r=0;if(t.length===8){if(t.charAt(0)+""==="9"){return false}n=0;for(r=0;r<7;r++){n+=parseInt(t.charAt(r),10)*(8-r)}n=11-n%11;if(n===10){n=0}if(n===11){n=1}return n+""===t.substr(7,1)}else if(t.length===9&&t.charAt(0)+""==="6"){n=0;for(r=0;r<7;r++){n+=parseInt(t.charAt(r+1),10)*(8-r)}n=11-n%11;if(n===10){n=0}if(n===11){n=1}n=[8,7,6,5,4,3,2,1,0,9,10][n-1];return n+""===t.substr(8,1)}else if(t.length===9||t.length===10){var i=1900+parseInt(t.substr(0,2),10),s=parseInt(t.substr(2,2),10)%50%20,o=parseInt(t.substr(4,2),10);if(t.length===9){if(i>=1980){i-=100}if(i>1953){return false}}else if(i<1954){i+=100}if(!e.fn.bootstrapValidator.helpers.date(i,s,o)){return false}if(t.length===10){var u=parseInt(t.substr(0,9),10)%11;if(i<1985){u=u%10}return u+""===t.substr(9,1)}return true}return false},_de:function(t){if(!/^DE[0-9]{9}$/.test(t)){return false}t=t.substr(2);return e.fn.bootstrapValidator.helpers.mod11And10(t)},_dk:function(e){if(!/^DK[0-9]{8}$/.test(e)){return false}e=e.substr(2);var t=0,n=[2,7,6,5,4,3,2,1];for(var r=0;r<8;r++){t+=parseInt(e.charAt(r),10)*n[r]}return t%11===0},_ee:function(e){if(!/^EE[0-9]{9}$/.test(e)){return false}e=e.substr(2);var t=0,n=[3,7,1,3,7,1,3,7,1];for(var r=0;r<9;r++){t+=parseInt(e.charAt(r),10)*n[r]}return t%10===0},_es:function(e){if(!/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(e)){return false}e=e.substr(2);var t=function(e){var t=parseInt(e.substr(0,8),10);t="TRWAGMYFPDXBNJZSQVHLCKE"[t%23];return t+""===e.substr(8,1)},n=function(e){var t=["XYZ".indexOf(e.charAt(0)),e.substr(1)].join("");t=parseInt(t,10);t="TRWAGMYFPDXBNJZSQVHLCKE"[t%23];return t+""===e.substr(8,1)},r=function(e){var t=e.charAt(0),n;if("KLM".indexOf(t)!==-1){n=parseInt(e.substr(1,8),10);n="TRWAGMYFPDXBNJZSQVHLCKE"[n%23];return n+""===e.substr(8,1)}else if("ABCDEFGHJNPQRSUVW".indexOf(t)!==-1){var r=0,i=[2,1,2,1,2,1,2],s=0;for(var o=0;o<7;o++){s=parseInt(e.charAt(o+1),10)*i[o];if(s>9){s=Math.floor(s/10)+s%10}r+=s}r=10-r%10;return r+""===e.substr(8,1)||"JABCDEFGHI"[r]===e.substr(8,1)}return false};var i=e.charAt(0);if(/^[0-9]$/.test(i)){return t(e)}else if(/^[XYZ]$/.test(i)){return n(e)}else{return r(e)}},_fi:function(e){if(!/^FI[0-9]{8}$/.test(e)){return false}e=e.substr(2);var t=0,n=[7,9,10,5,8,4,2,1];for(var r=0;r<8;r++){t+=parseInt(e.charAt(r),10)*n[r]}return t%11===0},_fr:function(t){if(!/^FR[0-9A-Z]{2}[0-9]{9}$/.test(t)){return false}t=t.substr(2);if(!e.fn.bootstrapValidator.helpers.luhn(t.substr(2))){return false}if(/^[0-9]{2}$/.test(t.substr(0,2))){return t.substr(0,2)===parseInt(t.substr(2)+"12",10)%97+""}else{var n="0123456789ABCDEFGHJKLMNPQRSTUVWXYZ",r;if(/^[0-9]{1}$/.test(t.charAt(0))){r=n.indexOf(t.charAt(0))*24+n.indexOf(t.charAt(1))-10}else{r=n.indexOf(t.charAt(0))*34+n.indexOf(t.charAt(1))-100}return(parseInt(t.substr(2),10)+1+Math.floor(r/11))%11===r%11}},_gb:function(e){if(!/^GB[0-9]{9}$/.test(e)&&!/^GB[0-9]{12}$/.test(e)&&!/^GBGD[0-9]{3}$/.test(e)&&!/^GBHA[0-9]{3}$/.test(e)&&!/^GB(GD|HA)8888[0-9]{5}$/.test(e)){return false}e=e.substr(2);var t=e.length;if(t===5){var n=e.substr(0,2),r=parseInt(e.substr(2),10);return"GD"===n&&r<500||"HA"===n&&r>=500}else if(t===11&&("GD8888"===e.substr(0,6)||"HA8888"===e.substr(0,6))){if("GD"===e.substr(0,2)&&parseInt(e.substr(6,3),10)>=500||"HA"===e.substr(0,2)&&parseInt(e.substr(6,3),10)<500){return false}return parseInt(e.substr(6,3),10)%97===parseInt(e.substr(9,2),10)}else if(t===9||t===12){var i=0,s=[8,7,6,5,4,3,2,10,1];for(var o=0;o<9;o++){i+=parseInt(e.charAt(o),10)*s[o]}i=i%97;if(parseInt(e.substr(0,3),10)>=100){return i===0||i===42||i===55}else{return i===0}}return true},_gr:function(e){if(!/^GR[0-9]{9}$/.test(e)){return false}e=e.substr(2);if(e.length===8){e="0"+e}var t=0,n=[256,128,64,32,16,8,4,2];for(var r=0;r<8;r++){t+=parseInt(e.charAt(r),10)*n[r]}t=t%11%10;return t+""===e.substr(8,1)},_el:function(e){if(!/^EL[0-9]{9}$/.test(e)){return false}e="GR"+e.substr(2);return this._gr(e)},_hu:function(e){if(!/^HU[0-9]{8}$/.test(e)){return false}e=e.substr(2);var t=0,n=[9,7,3,1,9,7,3,1];for(var r=0;r<8;r++){t+=parseInt(e.charAt(r),10)*n[r]}return t%10===0},_hr:function(t){if(!/^HR[0-9]{11}$/.test(t)){return false}t=t.substr(2);return e.fn.bootstrapValidator.helpers.mod11And10(t)},_ie:function(e){if(!/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(e)){return false}e=e.substr(2);var t=function(e){while(e.length<7){e="0"+e}var t="WABCDEFGHIJKLMNOPQRSTUV",n=0;for(var r=0;r<7;r++){n+=parseInt(e.charAt(r),10)*(8-r)}n+=9*t.indexOf(e.substr(7));return t[n%23]};if(/^[0-9]+$/.test(e.substr(0,7))){return e.charAt(7)===t(e.substr(0,7)+e.substr(8)+"")}else if("ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(e.charAt(1))!==-1){return e.charAt(7)===t(e.substr(2,5)+e.substr(0,1)+"")}return true},_is:function(e){return/^IS\d{5,6}$/.test(e)},_it:function(t){if(!/^IT[0-9]{11}$/.test(t)){return false}t=t.substr(2);if(parseInt(t.substr(0,7),10)===0){return false}var n=parseInt(t.substr(7,3),10);if(n<1||n>201&&n!==999&&n!==888){return false}return e.fn.bootstrapValidator.helpers.luhn(t)},_lt:function(e){if(!/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(e)){return false}e=e.substr(2);var t=e.length,n=0,r;for(r=0;r<t-1;r++){n+=parseInt(e.charAt(r),10)*(1+r%9)}var i=n%11;if(i===10){n=0;for(r=0;r<t-1;r++){n+=parseInt(e.charAt(r),10)*(1+(r+2)%9)}}i=i%11%10;return i+""===e.charAt(t-1)},_lu:function(e){if(!/^LU[0-9]{8}$/.test(e)){return false}e=e.substr(2);return parseInt(e.substr(0,6),10)%89+""===e.substr(6,2)},_lv:function(t){if(!/^LV[0-9]{11}$/.test(t)){return false}t=t.substr(2);var n=parseInt(t.charAt(0),10),r=0,i=[],s,o=t.length;if(n>3){r=0;i=[9,1,4,8,3,10,2,5,7,6,1];for(s=0;s<o;s++){r+=parseInt(t.charAt(s),10)*i[s]}r=r%11;return r===3}else{var u=parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10),f=parseInt(t.substr(4,2),10);f=f+1800+parseInt(t.charAt(6),10)*100;if(!e.fn.bootstrapValidator.helpers.date(f,a,u)){return false}r=0;i=[10,5,8,4,2,1,6,3,7,9];for(s=0;s<o-1;s++){r+=parseInt(t.charAt(s),10)*i[s]}r=(r+1)%11%10;return r+""===t.charAt(o-1)}},_mt:function(e){if(!/^MT[0-9]{8}$/.test(e)){return false}e=e.substr(2);var t=0,n=[3,4,6,7,8,9,10,1];for(var r=0;r<8;r++){t+=parseInt(e.charAt(r),10)*n[r]}return t%37===0},_nl:function(e){if(!/^NL[0-9]{9}B[0-9]{2}$/.test(e)){return false}e=e.substr(2);var t=0,n=[9,8,7,6,5,4,3,2];for(var r=0;r<8;r++){t+=parseInt(e.charAt(r),10)*n[r]}t=t%11;if(t>9){t=0}return t+""===e.substr(8,1)},_no:function(e){if(!/^NO[0-9]{9}$/.test(e)){return false}e=e.substr(2);var t=0,n=[3,2,7,6,5,4,3,2];for(var r=0;r<8;r++){t+=parseInt(e.charAt(r),10)*n[r]}t=11-t%11;if(t===11){t=0}return t+""===e.substr(8,1)},_pl:function(e){if(!/^PL[0-9]{10}$/.test(e)){return false}e=e.substr(2);var t=0,n=[6,5,7,2,3,4,5,6,7,-1];for(var r=0;r<10;r++){t+=parseInt(e.charAt(r),10)*n[r]}return t%11===0},_pt:function(e){if(!/^PT[0-9]{9}$/.test(e)){return false}e=e.substr(2);var t=0,n=[9,8,7,6,5,4,3,2];for(var r=0;r<8;r++){t+=parseInt(e.charAt(r),10)*n[r]}t=11-t%11;if(t>9){t=0}return t+""===e.substr(8,1)},_ro:function(e){if(!/^RO[1-9][0-9]{1,9}$/.test(e)){return false}e=e.substr(2);var t=e.length,n=[7,5,3,2,1,7,5,3,2].slice(10-t),r=0;for(var i=0;i<t-1;i++){r+=parseInt(e.charAt(i),10)*n[i]}r=10*r%11%10;return r+""===e.substr(t-1,1)},_ru:function(e){if(!/^RU([0-9]{9}|[0-9]{12})$/.test(e)){return false}e=e.substr(2);var t=0;if(e.length===10){var n=0,r=[2,4,10,3,5,9,4,6,8,0];for(t=0;t<10;t++){n+=parseInt(e.charAt(t),10)*r[t]}n=n%11;if(n>9){n=n%10}return n+""===e.substr(9,1)}else if(e.length===12){var i=0,s=[7,2,4,10,3,5,9,4,6,8,0],o=0,u=[3,7,2,4,10,3,5,9,4,6,8,0];for(t=0;t<11;t++){i+=parseInt(e.charAt(t),10)*s[t];o+=parseInt(e.charAt(t),10)*u[t]}i=i%11;if(i>9){i=i%10}o=o%11;if(o>9){o=o%10}return i+""===e.substr(10,1)&&o+""===e.substr(11,1)}return false},_rs:function(e){if(!/^RS[0-9]{9}$/.test(e)){return false}e=e.substr(2);var t=10,n=0;for(var r=0;r<8;r++){n=(parseInt(e.charAt(r),10)+t)%10;if(n===0){n=10}t=2*n%11}return(t+parseInt(e.substr(8,1),10))%10===1},_se:function(t){if(!/^SE[0-9]{10}01$/.test(t)){return false}t=t.substr(2,10);return e.fn.bootstrapValidator.helpers.luhn(t)},_si:function(e){if(!/^SI[0-9]{8}$/.test(e)){return false}e=e.substr(2);var t=0,n=[8,7,6,5,4,3,2];for(var r=0;r<7;r++){t+=parseInt(e.charAt(r),10)*n[r]}t=11-t%11;if(t===10){t=0}return t+""===e.substr(7,1)},_sk:function(e){if(!/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(e)){return false}return parseInt(e.substr(2),10)%11===0},_za:function(e){return/^ZA4\d{9}$/.test(e)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.vin=e.extend(e.fn.bootstrapValidator.i18n.vin||{},{"default":"Please enter a valid VIN number"});e.fn.bootstrapValidator.validators.vin={validate:function(e,t,n){var r=t.val();if(r===""){return true}if(!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(r)){return false}r=r.toUpperCase();var i={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:0},s=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],o=0,u=r.length;for(var a=0;a<u;a++){o+=i[r.charAt(a)+""]*s[a]}var f=o%11;if(f===10){f="X"}return f+""===r.charAt(8)}}})(window.jQuery);(function(e){e.fn.bootstrapValidator.i18n.zipCode=e.extend(e.fn.bootstrapValidator.i18n.zipCode||{},{"default":"Please enter a valid zip code",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid %s",countries:{BR:"Brazilian postal code",CA:"Canadian postal code",DK:"Danish postal code",GB:"United Kingdom postal code",IT:"Italian postal code",MA:"Moroccan postal code",NL:"Dutch postal code",SE:"Swiss postal code",SG:"Singapore postal code",US:"US zip code"}});e.fn.bootstrapValidator.validators.zipCode={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["BR","CA","DK","GB","IT","MA","NL","SE","SG","US"],validate:function(t,n,r){var i=n.val();if(i===""||!r.country){return true}var s=r.country;if(typeof s!=="string"||e.inArray(s,this.COUNTRY_CODES)===-1){s=t.getDynamicOption(n,s)}if(!s||e.inArray(s.toUpperCase(),this.COUNTRY_CODES)===-1){return{valid:false,message:e.fn.bootstrapValidator.helpers.format(e.fn.bootstrapValidator.i18n.zipCode.countryNotSupported,s)}}var o=false;s=s.toUpperCase();switch(s){case"BR":o=/^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(i);break;case"CA":o=/^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(i);break;case"DK":o=/^(DK(-|\s)?)?\d{4}$/i.test(i);break;case"GB":o=this._gb(i);break;case"IT":o=/^(I-|IT-)?\d{5}$/i.test(i);break;case"MA":o=/^[1-9][0-9]{4}$/i.test(i);break;case"NL":o=/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(i);break;case"SE":o=/^(S-)?\d{3}\s?\d{2}$/i.test(i);break;case"SG":o=/^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(i);break;case"US":default:o=/^\d{4,5}([\-]?\d{4})?$/.test(i);break}return{valid:o,message:e.fn.bootstrapValidator.helpers.format(r.message||e.fn.bootstrapValidator.i18n.zipCode.country,e.fn.bootstrapValidator.i18n.zipCode.countries[s])}},_gb:function(e){var t="[ABCDEFGHIJKLMNOPRSTUWYZ]",n="[ABCDEFGHKLMNOPQRSTUVWXY]",r="[ABCDEFGHJKPMNRSTUVWXY]",i="[ABEHMNPRVWXY]",s="[ABDEFGHJLNPQRSTUWXYZ]",o=[new RegExp("^("+t+"{1}"+n+"?[0-9]{1,2})(\\s*)([0-9]{1}"+s+"{2})$","i"),new RegExp("^("+t+"{1}[0-9]{1}"+r+"{1})(\\s*)([0-9]{1}"+s+"{2})$","i"),new RegExp("^("+t+"{1}"+n+"{1}?[0-9]{1}"+i+"{1})(\\s*)([0-9]{1}"+s+"{2})$","i"),new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$","i"),/^(GIR)(\s*)(0AA)$/i,/^(BFPO)(\s*)([0-9]{1,4})$/i,/^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,/^([A-Z]{4})(\s*)(1ZZ)$/i,/^(AI-2640)$/i];for(var u=0;u<o.length;u++){if(o[u].test(e)){return true}}return false}}})(window.jQuery);
$(function(){
		
	    $(".cookie-melding-toggle").click(function(e) {
	        e.preventDefault();
         $("#cookie-popup").css("display", "block");
	    });
	    $("#cookie-popup-close").click(function(e) {
	        e.preventDefault();
         $("#cookie-popup").css("display", "none");
	    });
 if($(".homepage-trigger").length > 0) {
     if($.trim($(".homepage-trigger").html()).length <= 0) {
         $('.homepage-trigger').remove();
     }
 }
	var _scale_height = function() {
		$("[data-scale-height]").each(function(){
		  var _this = $(this);
		  var _scale = _this.attr("data-scale-height");
		  
		  if (_scale == "match-parent") {
			_this.height(_this.parent().height());
		  } else {
			_this.height(_this.width() * _scale);
		  }
		});
		
		_center_vertical();_scale_height_youtube_taggle();
	};
	
	$(document).on("ready", _scale_height);
	$(window).on("resize", _scale_height);
	
		
	var _center_vertical = function() {
		$("[data-center-vertical]").each(function(){
		  var _this = $(this);
		  var _marginTop = (_this.parent().height() - _this.height()) / 2;
		  
		  _this.css("marginTop", _marginTop);
		});
	};
	
 var _scale_height_youtube_taggle = function () {
    $("iframe.video-iframe").each(function () {
         var _this = $(this);
         var _width = _this.width();
         var _height = _width / 16 * 9;
         var attr = _this.attr('data-url');
         _this.height(_height);
    });
};
	$(document).on("ready", _center_vertical);
	$(window).on("resize", _center_vertical);
	
		
	var _fix_uitvoering_breaks = function(){
		$("[data-separate-string]").each(function(){
		  var _this = $(this);
		  _this.text(_this.text().replace(/([^\s][\/|\-|\||\/|\_])([^\s])/g, "$1 $2"));
		});
	};
	
	$(document).on("ready", _fix_uitvoering_breaks);
	
		
	var _match_element_heights = function() {
		$("[data-match-height]").each(function(){
			var _this = $(this);
			
			if (_this.data("original-height") == undefined) {
				_this.data("original-height", parseInt(_this.outerHeight()));
			}
			
			var _margin = _this.attr("data-match-height-margin");
			var _height = parseInt($(document.getElementById(_this.attr("data-match-height"))).outerHeight());

			if (_margin != undefined) {
				_height += parseInt(_margin);
			}

			if (_height > _this.data("original-height")) {
				_this.outerHeight(_height);
			}
		});
	};
	
	$(document).on("ready", _match_element_heights);
	$(window).on("resize", _match_element_heights);

		
	var _set_active_page = function() {
		var _body = $("#body");
		
		$("[data-active-if]").each(function(){
			var _this = $(this);
			if (_body.hasClass(_this.attr("data-active-if"))){
				_this.addClass("active");
			}
		});
	};
	
	$(document).on("ready", _set_active_page);
		
		
	var _fix_image_dimensions = function(){
		var _imageWidth = $(".photo-a .photo-img:first").width();

		$(".photo-a:not(.auto-caroussel)").css({
			height: (_imageWidth * _image_dimensions) + "px" 
		});
 var _maxHeight = 0;
 var _advertisements = $(".advertisement.gallery-view > div");
 _advertisements.removeAttr("style");
 _advertisements.each(function(){
                var _this = $(this);
                $(this).find(".gal-btn-bottom").removeAttr("style");
                $(this).find(".gal-prijs-bottom").removeAttr("style");
                if (_this.height() > _maxHeight) {
                               _maxHeight = _this.height();
                }
 });

 var _advertisementsParentWidth=_advertisements.parent().width();
 var _bIsMobile= $(window).outerWidth()<=767;
 _advertisements.each(function(){
     $(this).height(_maxHeight);
    if(_advertisementsParentWidth>260 && !_bIsMobile){$(this).height(_maxHeight);$(this).find(".gal-prijs-bottom").css("position", "absolute").css("bottom", "10px"); $(this).find(".gal-btn-bottom").css("position", "absolute").css("bottom", "10px").css("right", "0px");
             if($(this).find(".gal-prijs-bottom").hasClass("col-sm-12")){$(this).find(".gal-prijs-bottom").removeClass("col-sm-12").addClass("col-sm-6")};
             if($(this).find(".gal-btn-bottom").hasClass("col-sm-12")){$(this).find(".gal-btn-bottom").removeClass("col-sm-12").addClass("col-sm-6")};
         } else {$(this).find(".gal-prijs-bottom").removeClass("col-sm-6");$(this).find(".gal-btn-bottom").removeClass("col-sm-6").css("position", "absolute").css("bottom", "10px").css("right", "0px");$(this).height(_maxHeight + $(this).find(".gal-btn-bottom").height()/2);} });
	};

     $(window).on("load", _fix_image_dimensions);
	    $(window).on("resize", _fix_image_dimensions);


if($('div.data_align_right_colum .well').length){
	var _align_right_colum = function() { 
		var e = $("#actions > .well");
		e.removeAttr("style");
		$("[data-section='fotos']").removeAttr("style");
     var _bIsMobile= $(window).outerWidth()<=767;
		if (!_bIsMobile && parseInt(e.css("marginTop")) > 0) {
			e.css("marginTop", "0px");
			var left = parseInt($("[data-section='fotos']").outerHeight());
			var right = parseInt($("[data-section='specificaties']").outerHeight()) + parseInt($("#actions").outerHeight()) + parseInt($("#belmij").outerHeight()) + parseInt($("#company-section").outerHeight());
			if ((left - right)>0) {
				e.css("marginTop", (left - right) + "px");
			} else {
				e.css("marginTop", "0px");
			    $("[data-section='fotos']").css("marginBottom", (right-left) +"px")
			}

		} else {
			e.css("marginTop", "0px");
		}
	};


	$(document).on("ready", _align_right_colum);
	$(window).on("resize", _align_right_colum);
	$(window).on("load", _align_right_colum);
	$(window).on("thumbsloaded", _align_right_colum);
}
    var _fix_image_heights_datail_thumbs = function () {
        $("#photo-thubms .thumbnail span:first").css({
            height: "auto" 
        });
        var _imageWidth = $("#photo-thubms a.thumbnail span:first").width();

        var _thumbHeight = _imageWidth * _image_dimensions;

        $("#photo-thubms .thumbnail span").each(function () {
            var _thumb = $(this);
            var bg = _thumb.css('background-image');
            
            if (_imageWidth > 150) {
                bg = bg.replace('/90/', '/320/');
                _thumb.css({
                    backgroundImage: bg, 
                    height: _thumbHeight + "px" 
                });
            } else {
                bg = bg.replace('/320/', '/90/');
                _thumb.css({
                    backgroundImage: bg, 
                    height: _thumbHeight + "px" 
                });
            }
        });

    };
$(document).on("ready", _fix_image_heights_datail_thumbs);
$(window).on("resize", _fix_image_heights_datail_thumbs);
const ICON_SIZE = 35;
const ICON_BOVAG = 55;
const DEFAULT_IMAGE_SIZE = 640;
function calculateOccasionIconOffset() {
var imageSize = $(".advertisement img.photo-img").width();
var imageScale = imageSize / DEFAULT_IMAGE_SIZE;
$(".advertisement, .auto-detail-page").each(function() {
	var self = $(this);
	var image = self.find("img.photo-img").eq(0);
	var url = image.attr("data-lazyloader-src");
 if($(".auto-detail-page").length > 0) {
     imageSize = $(".item.active img.photo-img").width();
     imageScale = imageSize / DEFAULT_IMAGE_SIZE;
     url = $(this).find(".item.active img.photo-img").attr("src");
 }
	var overlayString = readUrlParam(url, "overlay");
	if(overlayString != null) {
		var overlays = overlayString.split("%2C");
		var height = overlays.length * ICON_SIZE;
		if(hasOverlayIcon(overlays, "bog")) {
			height = (height - ICON_SIZE) + ICON_BOVAG;
		}
		height *= imageScale;
		self.find(".icons-gallery, .icons-list, .icons-detail").css("margin-top", height + "px");
	}
});
}
function hasOverlayIcon(overlays, name) {
	for(var i = 0; i < overlays.length; i++) {
		if(overlays[i] == name) {
			return true;
		}
	}
	return false;
}
function readUrlParam(url, name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
	if (results==null) {
	   return null;
	}
	return decodeURI(results[1]) || null;
}
$(window).on("load resize", function() {
 calculateOccasionIconOffset();
});

var _bShowAlwaysLargeImage = 0;_image_switch = function (){
		$("[data-image-switch='autodealers']").each(function(){
			var _this = $(this);
			var _continue = false;
			var _hasSrc = false;
			var _src = "";
			var _newSrc;
			var _preload = false;
			var _replaceFrom;
			var _replaceTo;
			var _imageWidth;
			
			if (_this.attr("src").indexOf("/320/") > -1 || _this.attr("src").indexOf("/640/") > -1) {
				_src = _this.attr("src");
				_hasSrc = true;
				if (_this.is(":visible")) {
					_preload = true;
				}
			} else if (null != _this.attr("data-lazyloader-src")) {
				_src = _this.attr("data-lazyloader-src");
			}
			
			if (_src.indexOf("/320/") > -1) {
				_imageWidth = 320;
			} else {
				_imageWidth = 640;
			}
			
			if (_this.width() > 320 && _imageWidth == 320 || _bShowAlwaysLargeImage) {
				_replaceFrom = /\/320\//g;
				_replaceTo = "/640/";
				_continue = true;
			    if (_bShowAlwaysLargeImage) {
				    _this.attr("src", _src.replace(_replaceFrom, _replaceTo));
			    }
			} 
			
			else if (_this.width() < 320 && _imageWidth == 640 && !_bShowAlwaysLargeImage) {
				_replaceFrom = /\/640\//g;
				_replaceTo = "/320/";
				_continue = true;
			}
			if (_continue) {
				if (null != _this.attr("data-lazyloader-src")) {
					_this.attr("data-lazyloader-src", _this.attr("data-lazyloader-src").replace(_replaceFrom, _replaceTo));
				}
				
				if (null != _this.attr("data-timeslider-image")) {
					_this.attr("data-timeslider-image", _this.attr("data-timeslider-image").replace(_replaceFrom, _replaceTo));
				}
				
				if (_hasSrc) {
					_newSrc = _src.replace(_replaceFrom, _replaceTo);
					
					if (_preload) {
					
						var preloadedImage = _this
							.clone()
							.attr("src", _newSrc)
							.css({
								display: "none"
							});

						_this.after(preloadedImage);
						
						preloadedImage.on("load", function(){
							preloadedImage.remove();
							_this.attr("src", _newSrc);
						});
					}
					
					else {
						_this.attr("src", _newSrc);
					}
				}
			}
		});
	};
	
	$(document).on("ready", _image_switch);
	$(window).on("resize", function(){
		$(window).data("image-switch-last-calculated-width", $(window).width());
		var t = setTimeout(function(){
			if ($(window).width() == $(window).data("image-switch-last-calculated-width") && 
			    $(window).width() != $(window).data("image-switch-last-executed-width")) {
				$(window).data("image-switch-last-executed-width", $(window).width());
				_image_switch();
			}
		}, 500);
	});
	
	
	var _lazyload = function() {
		$("[data-lazyloader]").Lazyloader({
			events: {
				afterShow: function(){
					this.TimeSlider({
						events: {
							afterNextImage: function(){
								_image_switch();
							} 
						}
					}); 
				}
			}
		});
	};
	
	$(document).on("ready", _lazyload);

	$("[data-redirect-trigger]").change(function(){
     if ($(this).find("option:selected").attr("data-redirect-target")) {
		    window.location.href = $(this).find("option:selected").attr("data-redirect-target") + '#zoekfilters';
     }
	});

	var _push_bottom = function() {
		$(".push-bottom").css("marginTop", function(){
			$(this).css("marginTop", 0);
			var _space = $(window).height() - $("html").height();
			return _space > 0 ? _space + "px" : 0;
		});
	};

	$(document).on("ready", _push_bottom);
	$(window).on("resize", _push_bottom);

	$("[data-popover-trigger]").popover({
		html: true,
		trigger: "hover",
     placement: "auto",		content: function() {
			return $(this).find("[data-popover-content]").html();
		}
	});

	$("#belmij [data-form-submit]").click(function(e){
		e.preventDefault();
		
		var _this = $(this);
		var _parent = _this.parents("[data-validate-container]:first");
		_parent.find("#belmij-tijdstip").val(_this.text());
	});

	$("[data-validate-container]").bootstrapValidator({
		live: "submitted",
		container: "popover",
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		}
	});

	function _get_default_button_class(btn) {
		if (undefined == btn.attr("data-button-type")) {
			if (btn.hasClass("btn-default")) {
				btn.attr("data-button-type", "btn-default");
			} 
			
			else if (btn.hasClass("btn-primary")) {
				btn.attr("data-button-type", "btn-primary");
			} 
			
			else {
				btn.attr("data-button-type", "");
			}
		}
		
		return btn.attr("data-button-type");
	}

	$("[data-validate-keypress]").keyup(function(){
		var _this = $(this);
		var _field = _this.attr("name");
		var _parent = _this.parents("[data-validate-container]:first");
		var _validator = _parent.data('bootstrapValidator');
		
		var _submit;
		if (_parent.find("[data-form-submit-display]:visible").length > 0) {
			_submit = _parent.find("[data-form-submit-display]:visible");
		} else {
			_submit = _parent.find("[data-form-submit]:visible");
		}
		
		var _defaultClass = _get_default_button_class(_submit);

		_validator.validateField(_field);
		if (_validator.isValidField(_field)) {
			
			_validator.validate();
			if (_validator.isValid()) {
				_submit.removeClass(_defaultClass);
				_submit.removeClass("btn-danger");
				_submit.addClass("btn-success");
			} else {
				_submit.removeClass("btn-success");
				_submit.addClass(_defaultClass);

				_validator.getInvalidFields().each(function(){
					_validator.updateStatus($(this).attr("name"), "NOT_VALIDATED");
				});
			}
		} 
		
		else {
			var _submit = _parent.find(".btn-default, .btn-success");
			_submit.removeClass("btn-success");
			_submit.addClass(_defaultClass);
			_validator.updateStatus(_field, "NOT_VALIDATED");
		}
	});

	function prevalidate(_this) {
		var _parent = _this.parents("[data-validate-container]:first");
		var _validator = _parent.data('bootstrapValidator');
		
		var _submit;
		if (_parent.find("[data-form-submit-display]:visible").length > 0) {
			_submit = _parent.find("[data-form-submit-display]:visible");
		} else {
			_submit = _parent.find("[data-form-submit]:visible");
		}
		
		var _defaultClass = _get_default_button_class(_submit);
		
		_validator.validate();
		if (_validator.isValid()) {
			_submit.removeClass(_defaultClass);
			_submit.addClass("btn-success");
		} else {
			_submit.removeClass("btn-success");
			_submit.addClass("btn-danger");
			
			if (_submit.hasClass("dropdown-toggle")) {
				_submit.dropdown("toggle");
			}
		}
	}

	$("[data-validate-prevalidate]").click(function(e){
		e.preventDefault();	
		prevalidate($(this));		
	});

!function(e){var t={namespace:"ad-html5-files",version:"1.0"},n={options:{id:t.namespace,media:{filter:null},events:{load:{onStart:null,onFileComplete:null,onComplete:null,onNoFilesSelected:null}}},_create:function(e){var t=this;t.setOptions(e),null==t.options.media.filter&&void 0!=t.element.data("media-filter")&&(t.options.media.filter=t.element.data("media-filter"))},setOptions:function(t){"object"==typeof t&&e.extend(!0,this.options,t)},getOptions:function(){return this.options},setOption:function(e,t){this.options[e]=t},getOption:function(e){return this.options.key},getVersion:function(){return t.version},load:function(e){var t=this,n=[],o=[],l=0;if(t.element[0].files.length>0){"function"==typeof t.options.events.load.onStart&&t.options.events.load.onStart.apply(t.element,[{total:n.length}]);for(i in t.element[0].files)"undefined"!=typeof t.element[0].files[i].type&&t.element[0].files[i].type.match(t.options.media.filter)&&(n[i]=t.element[0].files[i]);for(i in n){var a,s;a=new FileReader,a.onload=function(i){s=new Image,s.onload=function(i){o.push(i.target),l++,"function"==typeof t.options.events.load.onFileComplete&&t.options.events.load.onFileComplete.apply(t.element,[{total:n.length,completed:l,image:s}]),l==n.length&&("function"==typeof t.options.events.load.onComplete&&t.options.events.load.onComplete.apply(t.element,[{completed:l,images:images}]),e(t.element,o))},s.src=i.target.result},a.readAsDataURL(n[i])}}else"function"==typeof t.options.events.load.onNoFilesSelected&&t.options.events.load.onNoFilesSelected.apply(t.element)}};e.fn.html5Files=function(o){if(o instanceof String&&"_"==o.charAt(0))return this;var i=this,l=i,a=arguments;return o&&"object"!=typeof o?n[o]&&i.each(function(){var n=e.data(this,t.namespace);a=[].slice.call(a,1),l=n[o].apply(n,a)}):i.each(function(){var i=e.data(this,t.namespace);i||(i=e.data(this,t.namespace,e.extend(!0,{},new Object(n))),i.element=e(this)),l=i._create.apply(i,[o])}),l}}(jQuery);
!function(t){var e={namespace:"ad-html5-images",version:"1.0"},n={options:{id:e.namespace,maxWidth:null,maxHeight:null,crop:null,quality:.5,media:{output:"image/jpeg"},events:{files:{load:{onStart:null,onFileComplete:null,onComplete:null,onNoFilesSelected:null}}}},_create:function(t){var e=this;e.setOptions(t),null==e.options.maxWidth&&void 0!=e.element.data("max-width")&&(e.options.maxWidth=e.element.data("max-width")),null==e.options.maxHeight&&void 0!=e.element.data("min-height")&&(e.options.maxHeight=e.element.data("min-height")),null==e.options.crop&&void 0!=e.element.data("crop")&&(e.options.crop=e.element.data("crop")),null==e.options.media.output&&void 0!=e.element.data("media-output")&&(e.options.media.output=e.element.data("media-output")),e.element.html5Files({media:{filter:"image.*"},events:e.options.events.files})},setOptions:function(e){"object"==typeof e&&t.extend(!0,this.options,e)},getOptions:function(){return this.options},setOption:function(t,e){self.options[t]=e},getOption:function(t){return self.options.key},getVersion:function(){return e.version},toCanvas:function(e,n,o,a,s){var l=this;l.element.html5Files("load",function(s,p){var u,m,d,h,r=[],c="undefined"!=typeof n?n:l.options.maxWidth,f="undefined"!=typeof o?o:l.options.maxHeight,v="undefined"!=typeof a?a:l.options.crop;for(i in p)d=p[i].width,h=p[i].height,u=t("<canvas />"),u[0].width=d,u[0].height=h,m=u[0].getContext("2d"),m.drawImage(p[i],0,0,d,h),u.html5Canvas(),null!=c&&null!=f&&(u=v?u.html5Canvas("crop",c,f):u.html5Canvas("resize",c,f)),r.push(u);e(s,r)})},toDataURL:function(t,e,n,o,a){var s=this,l="undefined"!=typeof o?a:s.options.quality;s.toCanvas.apply(s,[function(e,n){var o=[];for(i in n)o.push(n[i][0].toDataURL(s.options.media.output,l));t(e,o)},e,n,o])}};t.fn.html5Images=function(i){if(i instanceof String&&"_"==i.charAt(0))return this;var o=this,a=o,s=arguments;return i&&"object"!=typeof i?n[i]&&o.each(function(){var n=t.data(this,e.namespace);s=[].slice.call(s,1),a=n[i].apply(n,s)}):o.each(function(){var o=t.data(this,e.namespace);o||(o=t.data(this,e.namespace,t.extend(!0,{},new Object(n))),o.element=t(this)),a=o._create.apply(o,[i])}),a}}(jQuery);
!function(e){var t={namespace:"ad-html5-canvas",version:"1.0"},n={options:{id:t.namespace},_create:function(e){var t=this;t.setOptions(e)},setOptions:function(t){"object"==typeof t&&e.extend(!0,this.options,t)},getOptions:function(){return this.options},setOption:function(e,t){self.options[e]=t},getOption:function(e){return self.options.key},getVersion:function(){return t.version},_getBlank:function(t,n){var i=e("<canvas />");return i[0].width=t,i[0].height=n,i.html5Canvas(),i},resize:function(e,t){var n,i,h,a,s=this;return n=Math.min(e/s.element[0].width,t/s.element[0].height),h=s.element[0].width*n,a=s.element[0].height*n,i=s._getBlank(h,a),i[0].getContext("2d").drawImage(s.element[0],0,0,h,a),i},crop:function(e,t){var n,i,n,h,a,s=this,o={width:0,height:0,x:0,y:0};if(i=Math.max(e/s.element[0].width,t/s.element[0].height),h=s.element[0].width*i,a=s.element[0].height*i,h>e||a>t)if(h>e){o.height=s.element[0].height;var r=s.element[0].height/t;o.width=r*e,o.y=0,o.x=(h-e)/2}else{o.width=s.element[0].width;var r=s.element[0].width/e;o.height=r*t,o.x=0,o.y=(s.element[0].height-o.height)/2}return n=s._getBlank(e,t),n[0].getContext("2d").drawImage(s.element[0],o.x,o.y,o.width,o.height,0,0,e,t),n}};e.fn.html5Canvas=function(i){if(i instanceof String&&"_"==i.charAt(0))return this;var h=this,a=h,s=arguments;return i&&"object"!=typeof i?n[i]&&h.each(function(){var n=e.data(this,t.namespace);s=[].slice.call(s,1),a=n[i].apply(n,s)}):h.each(function(){var h=e.data(this,t.namespace);h||(h=e.data(this,t.namespace,e.extend(!0,{},new Object(n))),h.element=e(this)),a=h._create.apply(h,[i])}),a}}(jQuery);
    var _files_preview = function (e) {

        var _previewTarget = e.data("preview-target");
        _previewTarget.empty();

        if (null != e.data("preview-loader")) {
            e.data("preview-loader").show();
        }

        e.html5Images("toCanvas", function (e, result) {
            var _previewTarget = e.data("preview-target");
            _previewTarget.empty();

            for (i in result) {
                result[i].addClass("img-thumbnail img-responsive margin-bottom-md");
                _previewTarget.append(
					$("<div>").addClass("col-xs-6 col-sm-3").append(result[i]));
            }

            if (null != e.data("preview-delete")) {
                if (result.length > 0) {
                    e.data("preview-delete").show();
                } else {
                    e.data("preview-delete").hide();
                }
            }

            if (null != e.data("preview-loader")) {
                e.data("preview-loader").hide();
            }
        }, 200, 200, true);
    };

    var _fileInputArr = $("[data-target] input[type='file']");
    _fileInputArr.each(function () {
        var _this = $(this);
        _this.html5Images({
            events: {
                files: {
                    load: {
                        onNoFilesSelected: function () {

                            if (null != this.data("preview-loader")) {
                                this.data("preview-loader").hide();
                            }
                        }
                    }
                }
            }
        });

        if (null != _this.data("preview-target")) {
            _this.data("preview-target", $(_this.data("preview-target")));

            if (null != _this.data("preview-loader")) {
                var _previewLoader = $(_this.data("preview-loader"));
                _previewLoader.hide();
                _this.data("preview-loader", _previewLoader);
            }

            if (null != _this.data("preview-delete")) {
                var _previewDelete = $(_this.data("preview-delete"));
                _previewDelete.hide();
                _previewDelete.on("click", function () {
                    _this.val("");
                    _this.data("preview-target").empty();
                    $(this).hide();
                });

                _this.data("preview-delete", _previewDelete);
            }

            _files_preview(_this);
            _this.change(function () {
                _files_preview($(this));
                if (this.files.length > 10) {alert("Let op! U heeft meer dan 10 foto's geselecteerd. Het kan zijn dat de foto's niet verstuurd kunnen worden.")}            });
        }
    });
    $("[data-form-submit]").click(function (e) {

        var _this = $(this);
        var _parent = _this.parents("[data-validate-container]:first");
        var _validator = _parent.data('bootstrapValidator');
        var _dataActive =  _this.data("active");
        if (typeof _dataActive === 'undefined') {
             _dataActive=false;
        }
        if (_dataActive) {
             alert('Het formulier wordt al verzonden!');
        } 

        prevalidate(_this);
        if (_validator.isValid() && !_dataActive) {
            _this.data("active", true);
            var _target = _parent.attr("data-target");

            if (_parent.find("[data-validate-ladda]:visible").length > 0) {
                var _laddaTrigger = _parent.find("[data-validate-ladda]:visible");
                _laddaTrigger.attr("id", "ladda-" + Math.random().toString(16).slice(2, 10));
                if (_laddaTrigger.hasClass("dropdown-toggle")) {
                    _laddaTrigger.dropdown("toggle");
                }

                var _ladda = Ladda.create(document.querySelector("#" + _laddaTrigger.attr("id")));
                _ladda.start();
            }

            if (_parent.find("[data-form-loader]").length > 0) {
                var _loader = _parent.find("[data-form-loader]");
                _loader.fadeIn();
            }

            var _post_data = _parent.find(":input").serializeArray();
            var _post = function () {
                $.ajax({
                    type: "POST",
                    url: _target,
                    data: _post_data,
                    success: function (data) {
                        if (data.status == true) {
                            if (_parent.find(".alert.alert-success").length > 0) {
                                var _alert = _parent.find(".alert.alert-success");
                                if (undefined != _alert.attr("data-replace-form") && "true" == _alert.attr("data-replace-form")) {
                                    _parent.find("[data-form-submit-display]:visible, [data-form-submit]:visible").fadeOut();
                                    _parent.find(".form-group").fadeOut(function () {
                                        _alert.fadeIn();
                                    });
                                } else {
                                    _alert.fadeIn();
                                }
                            }
                            _laddaVerzonden(_parent.data("overlay-target") ? _parent.data("overlay-target") : undefined);
                        }

                        else {
                            if (_parent.find(".alert.alert-danger").length > 0) {
                                var _alert = _parent.find(".alert.alert-danger");

                                if (data.error != undefined) {
                                    _alert.html(data.error);
                                }

                                if (undefined != _alert.attr("data-replace-form") && "true" == _alert.attr("data-replace-form")) {
                                    _parent.find("[data-form-submit-display]:visible, [data-form-submit]:visible").fadeOut();
                                    _parent.find(".form-group").fadeOut(function () {
                                        _alert.fadeIn();
                                    });
                                } else {
                                    _alert.fadeIn();
                                }
                            }
                        }

                        if (_ladda != undefined) {
                            _ladda.stop();
                        }

                        if (_loader != undefined) {
                            _loader.fadeOut();
                        }
                    },
                    error: function () {
                         _this.data("active", "false");
                        _ladda.stop();

                        if (_parent.find(".alert.alert-danger").length > 0) {
                            var _alert = _parent.find(".alert.alert-danger");
                            if (undefined != _alert.attr("data-replace-form") && "true" == _alert.attr("data-replace-form")) {
                                _parent.find("[data-form-submit-display]:visible, [data-form-submit]:visible").fadeOut();
                                _parent.find(".form-group").fadeOut(function () {
                                    _alert.fadeIn();
                                });
                            } else {
                                _alert.fadeIn();
                            }
                        }

                        if (_ladda != undefined) {
                            _ladda.stop();
                        }

                        if (_loader != undefined) {
                            _loader.fadeOut();
                        }
                    }
                });
            };

            var _fileInputArrInForm = _parent.find("input[type='file']");
            var _totalFileCountInForm = 0;

            if (null != _fileInputArrInForm) {
                _fileInputArrInForm.each(function () {
                    _totalFileCountInForm += this.files.length;
                });
            }

            if (_totalFileCountInForm > 0) {

                var _count = 0;
                var _completed = 0;

                _fileInputArrInForm.each(function () {
                    if (this.files.length > 0) {
                        _count++;
                    }
                });

                _fileInputArrInForm.each(function () {
                    $(this).html5Images("toDataURL", function (e, result) {
                        for (i in result) {
                            _post_data.push({
                                name: e[0].name + "_" + i,
                                value: result[i]
                            });
                        }

                        _completed++;
                        if (_completed == _count) {
                            _post();
                        }
                    },null,null,null,0.5);
                });
            } else {
                _post();
            }
                            try {
                                if (typeof ga !== "undefined"){
                                    var soortform = typeof _parent.attr('data-form-type') !== "undefined" ? _parent.attr("data-form-type") : "";
                                    var soortVerstuur = "";
                                    if(soortform.length == 0) {
                                        var bodyClass = $("#body").attr("class").toLowerCase();
                                        if(bodyClass.indexOf("contact") > -1) {
                                            soortform = "contactformulier";
                                            soortVerstuur = "verstuurd";
                                        } else if(bodyClass.indexOf("inkoop") > -1) {
                                            soortform = "inkoopformulier";
                                            soortVerstuur = "verstuur";
                                        }
                                    }
                                    if(soortform.length > 0) {
                                        ga('send', 'event', soortform, soortVerstuur);
                                    }
                                }
                            } catch(err) { }
        }

        return false;
    });
	$("[data-overlay-trigger]").each(function(){
		var _this = $(this);
		var _group = _this.attr("data-overlay-trigger");
		var _target = $("[data-overlay-target='"+_group+"']");
		
			_target.on("shown.bs.modal", function(){
				if (InIframe()) {
					$(window).trigger("ScrollFrameTop");
				}
				if (_this.data("values") != null) {
					var sValues = _this.data("values");
					$.each(sValues, function (key, data) {
						_target.find("input[name='" + key + "']").val(data);_target.find("select[name='" + key + "']").val(data);
					});
				}
			});
	});
	
	
	$("[data-overlay-trigger]").click(function(){
		var _this = $(this);
		var _group = _this.attr("data-overlay-trigger");
		var _target = $("[data-overlay-target='"+_group+"']");
		_target.modal();
	});
	$("[data-share-trigger]").click(function(){
		var _this = $(this);
		var _group = _this.attr("data-share-trigger");
		var _target = $("[data-share-target='"+_group+"']");
		_target.show();
	});
	$('[data-toggle="tooltip"]').tooltip();
                var _disable_toggle_triggers = function() {
                               $("[data-toggle-trigger]").each(function(){
                                               var _this = $(this);           
                                               var _group = _this.attr("data-toggle-group");
                                               var _children = $("[data-toggle-group='"+_group+"']").not(_this);
                                               
                                               if (_children.filter(":visible").length == _children.length) {
                                                               _this.hide();
                                               } else {
                                                               _this.show();
                                               }
                               });
                };
                
$(document).on("ready", _disable_toggle_triggers);
$(window).on("resize", _disable_toggle_triggers);

	$("[data-focus-trigger]").click(function(){
		var _this = $(this);
		var _group = _this.attr("data-focus-trigger");
		var _target = $("[data-focus-target='"+_group+"']");
		_target.focus();
	});

	$("[data-scroll-trigger]").click(function(){
		var _this = $(this);
		var _group = _this.attr("data-scroll-trigger");
		var _target = $("[data-scroll-target='"+_group+"']");
		
		if (InIframe()) {
			$(window).trigger('ScrollFrameTop', _target.offset().top);
		} else {
			$('html, body').animate({
				scrollTop: _target.offset().top 
			}, 500);
		}
	});

	$("[data-toggle-trigger]").click(function(){
		var _this = $(this);
		var _scrollToTrigger = _this.attr("data-toggle-scroll") != undefined;	
		var _altText = _this.attr("data-toggle-alt-text");
		var _mode = _this.attr("data-toggle-mode");
		var _group = _this.attr("data-toggle-group");
		var _children = $("[data-toggle-group='"+_group+"']").not(_this);
		
		var _hide;
		if (_mode != undefined && _mode == "recursive") {
			if (_this.attr("data-toggle-mode-hidden") == undefined) {
				_this.attr("data-toggle-mode-hidden", "true");
			}
			
			_hide = _this.attr("data-toggle-mode-hidden") == "false";
			
			var _next;
			if (_hide) {
				_next = "true";
			} else {
				_next = "false";
			}
			
			_this.attr("data-toggle-mode-hidden", _next);
		}
		
		_children.each(function(){
			var _child = $(this);
			var _initialized = _child.attr("data-toggle-initialized") == "true";
			var _visibilityClasses;
			
			if (!_initialized) {
				var _hiddenXS = "hidden-xs";
				var _hiddenSM = "hidden-sm";
				var _hiddenMD = "hidden-md";
				var _hiddenLG = "hidden-lg";
				_visibilityClasses = new Array();
				
				if (_child.hasClass(_hiddenXS)) {
					_visibilityClasses.push(_hiddenXS);
				}
				
				if (_child.hasClass(_hiddenSM)) {
					_visibilityClasses.push(_hiddenSM);
				}
				
				if (_child.hasClass(_hiddenMD)) {
					_visibilityClasses.push(_hiddenMD);
				}
				
				if (_child.hasClass(_hiddenLG)) {
					_visibilityClasses.push(_hiddenLG);
				}
				
				_child.attr("data-toggle-bootstrap-visibility", _visibilityClasses.join(" "));
				_child.attr("data-toggle-initialized", "true");
			} else {
				_visibilityClasses = _child.attr("data-toggle-bootstrap-visibility").split(" ");
			}
			
			if (_hide == undefined) {
				if (_mode == undefined || _mode == "default") {
					_hide = _child.is(":visible");
				} 
			}
			
			if (_hide) {
				_child.addClass(_visibilityClasses.join(" "));
			} else {
				_child.removeClass(_visibilityClasses.join(" "));
			}
		});
		
		if (_scrollToTrigger) {
			$('html, body').animate({
				scrollTop: _this.offset().top - ($(window).height() - (_this.height() + 20)) 
			}, 500);
		}
		
		if (_altText != undefined) {
			var _textElement;
			
				if(_this.attr("data-toggle-text") != undefined) {
					_textElement = _this;
				} else if (_this.find("[data-toggle-text]:visible").length > 0) {
					_textElement = _this.find("[data-toggle-text]:visible");
				}
				
			if (_this.attr("data-toggle-original-text") == undefined) {
				_this.attr("data-toggle-original-text", _textElement.text());
			}
			
			if (_textElement != undefined) {
				if (_textElement.text() == _altText) {
					_textElement.text(_this.attr("data-toggle-original-text"));
				} else {
					_textElement.text(_altText);
				}
			}
		}
	});
	});

(function ($) {
})(jQuery);
 !function(e){var t=function(t,n){this.element=e(t);this.picker=e('<div class="slider">'+'<div class="slider-track">'+'<div class="slider-selection"></div>'+'<div class="slider-handle"></div>'+'<div class="slider-handle"></div>'+"</div>"+'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'+"</div>").insertBefore(this.element).append(this.element);this.id=this.element.data("slider-id")||n.id;if(this.id){this.picker[0].id=this.id}if(typeof Modernizr!=="undefined"&&Modernizr.touch){this.touchCapable=true}var r=this.element.data("slider-tooltip")||n.tooltip;this.tooltip=this.picker.find(".tooltip");this.tooltipInner=this.tooltip.find("div.tooltip-inner");this.orientation=this.element.data("slider-orientation")||n.orientation;switch(this.orientation){case"vertical":this.picker.addClass("slider-vertical");this.stylePos="top";this.mousePos="pageY";this.sizePos="offsetHeight";this.tooltip.addClass("right")[0].style.left="100%";break;default:this.picker.addClass("slider-horizontal").css("width",this.element.outerWidth());this.orientation="horizontal";this.stylePos="left";this.mousePos="pageX";this.sizePos="offsetWidth";this.tooltip.addClass("top")[0].style.top=-this.tooltip.outerHeight()-14+"px";break}this.min=this.element.data("slider-min")||n.min;this.max=this.element.data("slider-max")||n.max;this.step=this.element.data("slider-step")||n.step;this.value=this.element.data("slider-value")||n.value;if(this.value[1]){this.range=true}this.selection=this.element.data("slider-selection")||n.selection;this.selectionEl=this.picker.find(".slider-selection");if(this.selection==="none"){this.selectionEl.addClass("hide")}this.selectionElStyle=this.selectionEl[0].style;this.handle1=this.picker.find(".slider-handle:first");this.handle1Stype=this.handle1[0].style;this.handle2=this.picker.find(".slider-handle:last");this.handle2Stype=this.handle2[0].style;var i=this.element.data("slider-handle")||n.handle;switch(i){case"round":this.handle1.addClass("round");this.handle2.addClass("round");break;case"triangle":this.handle1.addClass("triangle");this.handle2.addClass("triangle");break}if(this.range){this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0]));this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))}else{this.value=[Math.max(this.min,Math.min(this.max,this.value))];this.handle2.addClass("hide");if(this.selection=="after"){this.value[1]=this.max}else{this.value[1]=this.min}}this.diff=this.max-this.min;this.percentage=[(this.value[0]-this.min)*100/this.diff,(this.value[1]-this.min)*100/this.diff,this.step*100/this.diff];this.offset=this.picker.offset();this.size=this.picker[0][this.sizePos];this.formater=n.formater;this.layout();if(this.touchCapable){this.picker.on({touchstart:e.proxy(this.mousedown,this)})}else{this.picker.on({mousedown:e.proxy(this.mousedown,this)})}if(r==="show"){this.picker.on({mouseenter:e.proxy(this.showTooltip,this),mouseleave:e.proxy(this.hideTooltip,this)})}else{this.tooltip.addClass("hide")}};t.prototype={constructor:t,over:false,inDrag:false,showTooltip:function(){this.tooltip.addClass("in");this.over=true},hideTooltip:function(){if(this.inDrag===false){this.tooltip.removeClass("in")}this.over=false},layout:function(){this.handle1Stype[this.stylePos]=this.percentage[0]+"%";this.handle2Stype[this.stylePos]=this.percentage[1]+"%";if(this.orientation=="vertical"){this.selectionElStyle.top=Math.min(this.percentage[0],this.percentage[1])+"%";this.selectionElStyle.height=Math.abs(this.percentage[0]-this.percentage[1])+"%"}else{this.selectionElStyle.left=Math.min(this.percentage[0],this.percentage[1])+"%";this.selectionElStyle.width=Math.abs(this.percentage[0]-this.percentage[1])+"%"}if(this.range){this.tooltipInner.text(this.formater(this.value[0])+" : "+this.formater(this.value[1]));this.tooltip[0].style[this.stylePos]=this.size*(this.percentage[0]+(this.percentage[1]-this.percentage[0])/2)/100-(this.orientation==="vertical"?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px"}else{this.tooltipInner.text(this.formater(this.value[0]));this.tooltip[0].style[this.stylePos]=this.size*this.percentage[0]/100-(this.orientation==="vertical"?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px"}},mousedown:function(t){if(this.touchCapable&&t.type==="touchstart"){t=t.originalEvent}this.offset=this.picker.offset();this.size=this.picker[0][this.sizePos];var n=this.getPercentage(t);if(this.range){var r=Math.abs(this.percentage[0]-n);var i=Math.abs(this.percentage[1]-n);this.dragged=r<i?0:1}else{this.dragged=0}this.percentage[this.dragged]=n;this.layout();if(this.touchCapable){e(document).on({touchmove:e.proxy(this.mousemove,this),touchend:e.proxy(this.mouseup,this)})}else{e(document).on({mousemove:e.proxy(this.mousemove,this),mouseup:e.proxy(this.mouseup,this)})}this.inDrag=true;var s=this.calculateValue();this.element.trigger({type:"slideStart",value:s}).trigger({type:"slide",value:s});return false},mousemove:function(e){if(this.touchCapable&&e.type==="touchmove"){e=e.originalEvent}var t=this.getPercentage(e);if(this.range){if(this.dragged===0&&this.percentage[1]<t){this.percentage[0]=this.percentage[1];this.dragged=1}else if(this.dragged===1&&this.percentage[0]>t){this.percentage[1]=this.percentage[0];this.dragged=0}}this.percentage[this.dragged]=t;this.layout();var n=this.calculateValue();this.element.trigger({type:"slide",value:n}).data("value",n).prop("value",n);return false},mouseup:function(t){if(this.touchCapable){e(document).off({touchmove:this.mousemove,touchend:this.mouseup})}else{e(document).off({mousemove:this.mousemove,mouseup:this.mouseup})}this.inDrag=false;if(this.over==false){this.hideTooltip()}this.element;var n=this.calculateValue();this.element.trigger({type:"slideStop",value:n}).data("value",n).prop("value",n);return false},calculateValue:function(){var e;if(this.range){e=[this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step,this.min+Math.round(this.diff*this.percentage[1]/100/this.step)*this.step];this.value=e}else{e=this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step;this.value=[e,this.value[1]]}return e},getPercentage:function(e){if(this.touchCapable){e=e.touches[0]}var t=(e[this.mousePos]-this.offset[this.stylePos])*100/this.size;t=Math.round(t/this.percentage[2])*this.percentage[2];return Math.max(0,Math.min(100,t))},getValue:function(){if(this.range){return this.value}return this.value[0]},setValue:function(e){this.value=e;if(this.range){this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0]));this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))}else{this.value=[Math.max(this.min,Math.min(this.max,this.value))];this.handle2.addClass("hide");if(this.selection=="after"){this.value[1]=this.max}else{this.value[1]=this.min}}this.diff=this.max-this.min;this.percentage=[(this.value[0]-this.min)*100/this.diff,(this.value[1]-this.min)*100/this.diff,this.step*100/this.diff];this.layout()}};e.fn.slider=function(n,r){return this.each(function(){var i=e(this),s=i.data("slider"),o=typeof n==="object"&&n;if(!s){i.data("slider",s=new t(this,e.extend({},e.fn.slider.defaults,o)))}if(typeof n=="string"){s[n](r)}})};e.fn.slider.defaults={min:0,max:1e3,step:1,orientation:"horizontal",value:0,selection:"before",tooltip:"show",handle:"square",formater:function(e){return e}};e.fn.slider.Constructor=t}(window.jQuery);
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(["./spin"],b):a.Ladda=b(a.Spinner)}(this,function(a){"use strict";function b(a){if("undefined"==typeof a)return void console.warn("Ladda button target must be defined.");a.querySelector(".ladda-label")||(a.innerHTML='<span class="ladda-label">'+a.innerHTML+"</span>");var b=e(a),c=document.createElement("span");c.className="ladda-spinner",a.appendChild(c);var d,f={start:function(){return a.setAttribute("disabled",""),a.setAttribute("data-loading",""),clearTimeout(d),b.spin(c),this.setProgress(0),this},startAfter:function(a){return clearTimeout(d),d=setTimeout(function(){f.start()},a),this},stop:function(){return a.removeAttribute("disabled"),a.removeAttribute("data-loading"),clearTimeout(d),d=setTimeout(function(){b.stop()},1e3),this},toggle:function(){return this.isLoading()?this.stop():this.start(),this},setProgress:function(b){b=Math.max(Math.min(b,1),0);var c=a.querySelector(".ladda-progress");0===b&&c&&c.parentNode?c.parentNode.removeChild(c):(c||(c=document.createElement("div"),c.className="ladda-progress",a.appendChild(c)),c.style.width=(b||0)*a.offsetWidth+"px")},enable:function(){return this.stop(),this},disable:function(){return this.stop(),a.setAttribute("disabled",""),this},isLoading:function(){return a.hasAttribute("data-loading")},getTarget:function(){return a}};return g.push(f),f}function c(a,c){c=c||{};var d=[];"string"==typeof a?d=f(document.querySelectorAll(a)):"object"==typeof a&&"string"==typeof a.nodeName&&(d=[a]);for(var e=0,g=d.length;g>e;e++)!function(){var a=d[e];if("function"==typeof a.addEventListener){var f=b(a),g=-1;a.addEventListener("click",function(){f.startAfter(1),"number"==typeof c.timeout&&(clearTimeout(g),g=setTimeout(f.stop,c.timeout)),"function"==typeof c.callback&&c.callback.apply(null,[f])},!1)}}()}function d(){for(var a=0,b=g.length;b>a;a++)g[a].stop()}function e(b){var c,d=b.offsetHeight;d>32&&(d*=.8),b.hasAttribute("data-spinner-size")&&(d=parseInt(b.getAttribute("data-spinner-size"),10)),b.hasAttribute("data-spinner-color")&&(c=b.getAttribute("data-spinner-color"));var e=12,f=.2*d,g=.6*f,h=7>f?2:3;return new a({color:c||"#fff",lines:e,radius:f,length:g,width:h,zIndex:"auto",top:"50%",left:"50%",className:""})}function f(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]);return b}var g=[];return{bind:c,create:b,stopAll:d}});
  +function ($) {
  'use strict';

  if ( !$.fn.carousel ) {
    throw new Error( "carousel-swipe required bootstrap carousel" )
  }


  var CarouselSwipe = function(element) {
    this.$element    = $(element);
    this.carousel    = this.$element.data('bs.carousel');
    this.options     = $.extend({}, CarouselSwipe.DEFAULTS, this.carousel.options);
    this.startX;
    this.startY;
    this.startTime;
    this.cycling;
    this.$active;
    this.$items;
    this.$next;
    this.$prev;
    this.dx = null;

    this.$element
      .on('touchstart', $.proxy(this.touchstart,this))
      .on('touchmove', $.proxy(this.touchmove,this))
      .on('touchend', $.proxy(this.touchend,this));
  };

  CarouselSwipe.DEFAULTS = {
    swipe: 50 
  };

  CarouselSwipe.prototype.touchstart = function(e) {
    if (!this.options.swipe) return;
    var touch = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
    this.dx = 0;
    this.startX = touch.pageX;
    this.startY = touch.pageY;
    this.cycling = null;
    this.width = this.$element.width();
    this.startTime = e.timeStamp;
  };

  CarouselSwipe.prototype.touchmove = function(e) {
    if (!this.options.swipe) return;
    var touch = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
    var dx = touch.pageX - this.startX;
    var dy = touch.pageY - this.startY;
    if (Math.abs(dx) < Math.abs(dy)) return; 

    if ( this.cycling === null ) {
      this.cycling = !!this.carousel.interval;
      this.cycling && this.carousel.pause();
    }

    e.preventDefault();
    this.dx = dx / (this.width || 1) * 100;
    this.swipe(this.dx);
  };

  CarouselSwipe.prototype.touchend = function(e) {
    if (!this.options.swipe) return;
    if (!this.$active) return; 
    var all = $()
      .add(this.$active).add(this.$prev).add(this.$next)
      .carousel_transition(true);

    var dt = (e.timeStamp - this.startTime) / 1000;
    var speed = Math.abs(this.dx / dt);
    if (this.dx > 40 || (this.dx > 0 && speed > this.options.swipe)) {
      this.carousel.prev();
    } else if (this.dx < -40 || (this.dx < 0 && speed > this.options.swipe)) {
      this.carousel.next();
    } else {
      this.$active
        .one($.support.transition.end, function () {
          all.removeClass('prev next')
        })
      .emulateTransitionEnd(this.$active.css('transition-duration').slice(0, -1) * 1000);
    }

    all.css('transform', '');
    this.cycling && this.carousel.cycle();
    this.$active = null;
  };

  CarouselSwipe.prototype.swipe = function(percent) {
    var $active = this.$active || this.getActive();
    if (percent < 0) {
        this.$prev
            .css('transform', 'translate3d(0,0,0)')
            .removeClass('prev')
            .carousel_transition(true);
        if (!this.$next.length || this.$next.hasClass('active')) return
        this.$next
            .carousel_transition(false)
            .addClass('next')
            .css('transform', 'translate3d(' + (percent + 100) + '%,0,0)');
    } else {
        this.$next
            .css('transform', '')
            .removeClass('next')
            .carousel_transition(true);
        if (!this.$prev.length || this.$prev.hasClass('active')) return
        this.$prev
            .carousel_transition(false)
            .addClass('prev')
            .css('transform', 'translate3d(' + (percent - 100) + '%,0,0)');
    }

    $active
        .carousel_transition(false)
        .css('transform', 'translate3d(' + percent + '%, 0, 0)');
  };

  CarouselSwipe.prototype.getActive = function() {
    this.$active = this.$element.find('.item.active');
    this.$items = this.$active.parent().children();

    this.$next = this.$active.next();
    if (!this.$next.length && this.options.wrap) {
      this.$next = this.$items.first();
    }

    this.$prev = this.$active.prev();
    if (!this.$prev.length && this.options.wrap) {
      this.$prev = this.$items.last();
    }

    return this.$active;
  };
  var old = $.fn.carousel;
  $.fn.carousel = function() {
    old.apply(this, arguments);
    return this.each(function () {
      var $this   = $(this);
      var data    = $this.data('bs.carousel.swipe');
      if (!data) $this.data('bs.carousel.swipe', new CarouselSwipe(this));
    })
  };

  $.extend($.fn.carousel,old);

  $.fn.carousel_transition = function(enable) {
    enable = enable ? '' : 'none';
    return this.each(function() {
      $(this)
        .css('-webkit-transition', enable)
        .css('transition', enable);
    });
  };

}(jQuery);
<!--EINDE Carousel-swipe.js-->
var CountUp=function(a,t,n,e,i,r){function o(a){return"number"==typeof a&&!isNaN(a)}for(var l=0,s=["webkit","moz","ms","o"],u=0;u<s.length&&!window.requestAnimationFrame;++u)window.requestAnimationFrame=window[s[u]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[u]+"CancelAnimationFrame"]||window[s[u]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,t){var n=(new Date).getTime(),e=Math.max(0,16-(n-l)),i=window.setTimeout(function(){a(n+e)},e);return l=n+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});var m=this;if(m.version=function(){return"1.8.5"},m.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(a,t,n,e){return n*(1-Math.pow(2,-10*a/e))*1024/1023+t},formattingFn:function(a){a=a.toFixed(m.decimals);var t,n,e,i;if(t=(a+="").split("."),n=t[0],e=t.length>1?m.options.decimal+t[1]:"",i=/(\d+)(\d{3})/,m.options.useGrouping)for(;i.test(n);)n=n.replace(i,"$1"+m.options.separator+"$2");return m.options.prefix+n+e+m.options.suffix},prefix:"",suffix:""},r&&"object"==typeof r)for(var d in m.options)r.hasOwnProperty(d)&&null!==r[d]&&(m.options[d]=r[d]);""===m.options.separator&&(m.options.useGrouping=!1),m.initialize=function(){return!!m.initialized||(m.d="string"==typeof a?document.getElementById(a):a,m.d?(m.startVal=Number(t),m.endVal=Number(n),o(m.startVal)&&o(m.endVal)?(m.decimals=Math.max(0,e||0),m.dec=Math.pow(10,m.decimals),m.duration=1e3*Number(i)||2e3,m.countDown=m.startVal>m.endVal,m.frameVal=m.startVal,m.initialized=!0,!0):(console.error("[CountUp] startVal or endVal is not a number",m.startVal,m.endVal),!1)):(console.error("[CountUp] target is null or undefined",m.d),!1))},m.printValue=function(a){var t=m.options.formattingFn(a);"INPUT"===m.d.tagName?this.d.value=t:"text"===m.d.tagName||"tspan"===m.d.tagName?this.d.textContent=t:this.d.innerHTML=t},m.count=function(a){m.startTime||(m.startTime=a),m.timestamp=a;var t=a-m.startTime;m.remaining=m.duration-t,m.options.useEasing?m.countDown?m.frameVal=m.startVal-m.options.easingFn(t,0,m.startVal-m.endVal,m.duration):m.frameVal=m.options.easingFn(t,m.startVal,m.endVal-m.startVal,m.duration):m.countDown?m.frameVal=m.startVal-(m.startVal-m.endVal)*(t/m.duration):m.frameVal=m.startVal+(m.endVal-m.startVal)*(t/m.duration),m.countDown?m.frameVal=m.frameVal<m.endVal?m.endVal:m.frameVal:m.frameVal=m.frameVal>m.endVal?m.endVal:m.frameVal,m.frameVal=Math.round(m.frameVal*m.dec)/m.dec,m.printValue(m.frameVal),t<m.duration?m.rAF=requestAnimationFrame(m.count):m.callback&&m.callback()},m.start=function(a){m.initialize()&&(m.callback=a,m.rAF=requestAnimationFrame(m.count))},m.pauseResume=function(){m.paused?(m.paused=!1,delete m.startTime,m.duration=m.remaining,m.startVal=m.frameVal,requestAnimationFrame(m.count)):(m.paused=!0,cancelAnimationFrame(m.rAF))},m.reset=function(){m.paused=!1,delete m.startTime,m.initialized=!1,m.initialize()&&(cancelAnimationFrame(m.rAF),m.printValue(m.startVal))},m.update=function(a){m.initialize()&&(o(a=Number(a))?a!==m.frameVal&&(cancelAnimationFrame(m.rAF),m.paused=!1,delete m.startTime,m.startVal=m.frameVal,m.endVal=a,m.countDown=m.startVal>m.endVal,m.rAF=requestAnimationFrame(m.count)):console.error("[CountUp] update() - new endVal is not a number",a))},m.initialize()&&m.printValue(m.startVal)};
	function Cookie(){
	
     if (typeof gLifetime == 'undefined') {
		    var lifetime = 3600000;
	    } else {	
		    var lifetime = gLifetime;
	    }	
		
		this.setCookie = function(obj){
			for(i in obj){
				var v = (obj[i]!=undefined)?obj[i]:'';
				if(i != ''){
					document.cookie = i+'='+v+';expires='+time(lifetime)+';path=/';
				}else{
					return false;
				}
			}
		}
		
		this.getCookie = function(name){
			var arr = cookie2array();
			return (name != undefined) ? arr[name] : arr;
		}
		
		this.deleteCookie = function(name){
			var arr = cookie2array();
			if(name == undefined){
				for(i in arr){
					document.cookie = i+'=;expires='+time(-1)+';path=/';
				}
			}else{
				document.cookie = name+'=;expires='+time(-1)+';path=/';
			}
		}
		
		this.setLifetime = {
			'days':function(nr){
				lifetime = (nr * 86400000);
			},
			'weeks':function(nr){
				lifetime = (nr * 604800000);
			},
			'months':function(nr){
				lifetime = (nr * 2629743000);
			},
			'years':function(nr){
				lifetime = (nr * 31556926000);
			},
			'unix':function(nr){
				lifetime = (nr * 1000);
			}
		}
		
		  /////////////////////////
		 ////private functions////
		/////////////////////////
		
		function cookie2array(){
			var str = document.cookie;
			var arr = new Array();
			var length = 0;
			var cookies = str.split(';');
			for(i in cookies){
				var cookie = cookies[i].split('=');
				arr[trim(cookie[0])] = cookie[1];
				length++;
			}
			return (length>0)?arr:false;
		}
		
		function time(milisec){
			var date = new Date();
			date.setTime(date.getTime()+milisec);
			return date;
		}
		
		function trim(str){
			var string = new String(str.replace(/^\s*([\w\s]*?)\s*$/, '$1'));
			return string;
		}
	
	}

/*!
 * jQuery Plugin aTooltip
 *
 * @date 01 mrt 2013 
 * @version: 1.0
 * @author Blue7 B.V.
 *		- Pieter Verloop
 *		- Frank Bonnet
 *
 * @dependencies:
 *	jquery.min.js
 */
 
	(function ($) {

		/*
		* Plugin info
		*
		* The name of the plugin is used for the $.data
		* namespace of the selected element
		*/
		var pluginInfo = {
			namespace: 'apopup',
			version: '1.0'
		}
		
		var main = {
			status: {
				constructed: false
			},
			popup: {
				element: null,
				background: null
			},
			options : {
				id: pluginInfo.namespace,
				cssClass: null,
				triggers: {
					open: {
						elements: []
					},
					close: {
						elements: []
					}
				},
				events: {
					onOpen: null,
					onClose: null
				},
				autoOpen: true,
				animation: {
					duration: 500,
					effect: 'fade'
				},
				background: {
					opacity: 0.7,
					color: '#000000',
					id: pluginInfo.namespace + '-background'
				},
				html: 'Body',
				title: 'Title',
				padding: '10px',
				width: 'auto',
				height: 'auto',
				cookie: {
					instance: null,
					name: pluginInfo.namespace
				}
			},
			
			/*
			* Initialize the plugin. _create is only called once when the main object is created.
			*
			* @attribute this.options
			* @return    void
			*/
			_create: function (options) {
				var _self = this;
				_self.setOptions(options);
				_self._bindTriggerEvents.apply(_self);
				
				if (_self.options.autoOpen) {
					_self.open.apply(_self);
				}
				
				$(window).resize(function(){
					_self.position.apply(_self);
				});
			},
			
			/*
			 * Construct dom elements
			 *
			 * @return void
			 */
			_construct: function() {
				var _self = this;
				
				/*
				 * Construct background
				 */
				_self.popup.background = $('<div>').css({
					display: 'none',
					opacity: _self.options.background.opacity,
					background: _self.options.background.color,
					position: 'fixed',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					zIndex: 9997})
				.attr('id',
					_self.options
						 .background
						 .id)
				.appendTo(_self.element);
				
				_self.popup.background.bind('click', function(){
					_self.close.apply(_self);
				});
				 
				/*
				 * Construct html
				 */
				 _self.popup.element = $('<div>').css({
					display: 'none',
					position: 'fixed',
					width: _self.options.width,
					height: _self.options.height,
					zIndex: 9998})
				.attr('id', pluginInfo.namespace + '-popup')
				.append(
					$('<a>').css({
						position: 'absolute',
						top: 0,
						right: 0,
						zIndex: 9999})
					.attr('id', pluginInfo.namespace + '-close')
					.attr('href', '')
					.text('x')
					.bind('click', function(e){
						e.preventDefault();
						_self.close.apply(_self);
					}))
				.append(
					$('<div>').attr('id', pluginInfo.namespace + '-title')
							  .append($('<strong>').text(_self.options.title))
							  .css({
								padding: _self.options.padding
							  }))
				.append(
					$('<div>').attr('id', pluginInfo.namespace + '-body')
							  .html(_self.options.html)
							  .css({padding: _self.options.padding}))
				.appendTo(_self.element);
				
				if (_self.options.cssClass != null) {
					_self.popup.element.addClass(
						_self.options.cssClass);
				}
				
				_self.status.constructed = true;
				_self.position.apply(_self);
			},
			
			/*
			* Merge options with this.options
			* 
			* @attribute options
			* @return    void
			*/
			setOptions: function (options) {
	            if ('object' === typeof options) {
	                $.extend(true, this.options, options);
				}
	        },
			
			/*
			* Get the complete array with options
			*
			* @attribute void
			* @return	 self.options
			*/
			getOptions: function () {
				return this.options;
			},
			
			/*
	        * Override or set one option in self.options
	        *
	        * @attribute string key
	        * @attribute mix value
	        * @return void
	        */
	        setOption: function (key, value) {
	            self.options[key] = value;
	        },
			
			/*
	        * get one option in self.options
	        *
	        * @attribute string key
	        * @return self.options.key
	        */
	        getOption: function (key) {
	            return self.options.key;
	        },
			
			/*
			* Get the current plugin version
			*
			* @attribute void
			* @return    pluginInfo.version
			*/
			getVersion: function () {
				return pluginInfo.version;
			},

			/*
			* Opens the tooltip
			* 
			* @attribute void
			* @return callback this.options.events.onOpen
			*/
			open: function () {
				if (!(this.options.cookie.instance instanceof Cookie) || 
					this.options.cookie.instance.getCookie(this.options.cookie.name) != 1) {
					
					if (!this.status.constructed) {
						this._construct.apply(this);
					}
					
					this.popup.background.fadeIn(
						this.options.animation.duration);
					
					this.popup.element.fadeIn(
						this.options.animation.duration);
			
					if (this.options.cookie.instance instanceof Cookie) {
						var cookieVar = new Object();
						cookieVar[this.options.cookie.name] = 1;
						this.options.cookie.instance.setCookie(cookieVar);
					}
				}
			},
			
			/*
			* Closes the tooltip
			* 
			* @attribute void
			* @return callback this.options.events.onClose
			*/
			close: function () {
				if (this.status.constructed) {
					this.popup.background.fadeOut(
						this.options.animation.duration);
						
					this.popup.element.fadeOut(
						this.options.animation.duration);
				}
			},
			
			/*
			 * Calculate and apply the popup positions
			 *
			 * @return void
			 */
			position: function() {
				if (this.status.constructed) {
					var left = ($(window).width() - this.popup.element.outerWidth()) / 2;
					var top  = ($(window).height() - this.popup.element.outerHeight()) / 2;
					 
					this.popup.element.css({
						left: left,
						top: top
					});
				}
			},
			
			/*
			* bind eventHandlers to given elements
			* 
			* @attribute void
			* @return void
			*/
			_bindTriggerEvents: function () {
				var triggers = this.options.triggers;
				for(var i = 0; i < triggers.open.elements.length; i++) {
					triggers.open.elements[i].element.bind(
						triggers.open.elements[i].event, 
						{main:this}, 
						function(e){
							e.data.main.open(e);
						}
					);
				}
				
				for(var i = 0; i < triggers.close.elements.length; i++) {
					triggers.close.elements[i].element.bind(
						triggers.close.elements[i].event, 
						{main:this}, 
						function(e){
							e.data.main.close(e);
						}
					);
				}
			}
		}
		
		/*
		* The place where the function is called
		* There is no need to change this
		*/
		$.aPopup = function (method) {
			if (method instanceof String && '_' == method.charAt(0)) {
	            return this; // Disallow calls to private methods
			}
			
			var e = $('body');
	        var response = this;
	        var args = arguments;
	        /*
	        * Construct instance of plugin
	        *
	        * Instance is saved to $.data for retreival of instance on
	        * next call
	        */
	        if (!method || 'object' === typeof method) {
	            e.each(function () {
	                var instance = $.data(
						this, pluginInfo.namespace);
	                if (!instance) {
	                    instance = $.data(
							this, pluginInfo.namespace, $.extend(true, {}, new Object(main)));
	                    instance.element = $(this);
	                }
	                response = instance._create.apply(instance, args);
	            });
	        }
	        /*
	        * Manualy call method
	        */
	        else if (main[method]) {
	            e.each(function () {
	                var instance = $.data(
						this, pluginInfo.namespace);
	                args = [].slice.call(args, 1);
	                response = instance[method].apply(instance, args);
	            });
	        }
	        return response;
	    }
	})(jQuery);

