window.Modernizr=function(u,f,k){function x(){d.input=function(a){for(var b=0,h=a.length;b<h;b++)v[a[b]]=a[b]in c;return v}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));d.inputtypes=function(a){for(var b=0,h,e,d,g=a.length;b<g;b++)c.setAttribute("type",e=a[b]),(h=c.type!=="text")&&(c.value=l,c.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&c.style.WebkitAppearance!==k?(i.appendChild(c),d=f.defaultView,h=d.getComputedStyle&&d.getComputedStyle(c,
null).WebkitAppearance!=="textfield"&&c.offsetHeight!==0,i.removeChild(c)):/^(search|tel)$/.test(e)||(/^(url|email)$/.test(e)?h=c.checkValidity&&c.checkValidity()===!1:/^color$/.test(e)?(i.appendChild(c),h=c.value!=l,i.removeChild(c)):h=c.value!=l)),w[a[b]]=!!h;return w}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d={},i=f.documentElement;f.head||f.getElementsByTagName("head");var m=f.createElement("modernizr"),m=m.style,c=f.createElement("input"),
l=":)",g={},w={},v={},y=[],n,q={}.hasOwnProperty,o;typeof q!==k&&typeof q.call!==k?o=function(a,b){return q.call(a,b)}:o=function(a,b){return b in a&&typeof a.constructor.prototype[b]===k};g.canvas=function(){var a=f.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")};g.geolocation=function(){return!!navigator.geolocation};g.video=function(){var a=f.createElement("video"),b=!1;try{if(b=!!a.canPlayType)b=new Boolean(b),b.ogg=a.canPlayType('video/ogg; codecs="theora"'),b.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"')||
a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'),b.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}catch(c){}return b};g.audio=function(){var a=f.createElement("audio"),b=!1;try{if(b=!!a.canPlayType)b=new Boolean(b),b.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),b.mp3=a.canPlayType("audio/mpeg;"),b.wav=a.canPlayType('audio/wav; codecs="1"'),b.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(c){}return b};g.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}};
g.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}};for(var t in g)o(g,t)&&(n=t.toLowerCase(),d[n]=g[t](),y.push((d[n]?"":"no-")+n));d.input||x();d.addTest=function(a,b){if(typeof a=="object")for(var c in a)o(a,c)&&d.addTest(c,a[c]);else{a=a.toLowerCase();if(d[a]!==k)return;b=typeof b=="boolean"?b:!!b();i.className+=" "+(b?"":"no-")+a;d[a]=b}return d};m.cssText="";m=c=null;u.attachEvent&&function(){var a=f.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==
1}()&&function(a,b){function c(a){for(var b=-1;++b<g;)a.createElement(f[b])}a.iepp=a.iepp||{};var e=a.iepp,d=e.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=d.split("|"),g=f.length,i=RegExp("(^|\\s)("+d+")","gi"),m=RegExp("<(/*)("+d+")","gi"),n=/^\s*[\{\}]\s*$/,o=RegExp("(^|[^\\n]*?\\s)("+d+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),s=b.documentElement,d=s.firstChild,
p=b.createElement("body"),r=b.createElement("style"),q=/print|all/,j;e.getCSS=function(a,b){if(a+""===k)return"";for(var c=-1,d=a.length,f,g=[];++c<d;)f=a[c],f.disabled||(b=f.media||b,q.test(b)&&g.push(e.getCSS(f.imports,b),f.cssText),b="all");return g.join("")};e.parseCSS=function(b){for(var a=[],c;(c=o.exec(b))!=null;)a.push(((n.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(i,"$1.iepp_$2")+c[4]);return a.join("\n")};e.writeHTML=function(){var a=-1;for(j=j||b.body;++a<g;)for(var c=b.getElementsByTagName(f[a]),
d=c.length,e=-1;++e<d;)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a]);l.appendChild(j);s.appendChild(p);p.className=j.className;p.id=j.id;p.innerHTML=j.innerHTML.replace(m,"<$1font")};e._beforePrint=function(){r.styleSheet.cssText=e.parseCSS(e.getCSS(b.styleSheets,"all"));e.writeHTML()};e.restoreHTML=function(){p.innerHTML="";s.removeChild(p);s.appendChild(j)};e._afterPrint=function(){e.restoreHTML();r.styleSheet.cssText=""};c(b);c(l);e.disablePP||(d.insertBefore(r,d.firstChild),
r.media="print",r.className="iepp-printshim",a.attachEvent("onbeforeprint",e._beforePrint),a.attachEvent("onafterprint",e._afterPrint))}(u,f);d._version="2.0.6";return d}(this,this.document);
(function(){var d=document.getElementsByTagName("script")[0],f=d.parentNode,g=/ded|co/,e=function(b,c){var a=document.createElement("script");a.onload=a.onreadystatechange=function(){if(!this.readyState||g.test(this.readyState))a.onload=a.onreadystatechange=null,c&&c(a),a=null};a.async=!0;a.src=b;f.insertBefore(a,d)};window.sssl=function(b,c){if(typeof b=="string")e(b,c);else{var a=b.shift();e(a,function(){b.length?window.sssl(b,c):c&&c()})}}})();
(function(c,h,o,t){var p=c.event.special,z=c([]),f=h.Modernizr,j=f.input||{},B=f.inputtypes||{},A=parseFloat(c.browser.version,10),i=h.Object;(function(){var a=f.addTest,b=c('<form action="#"><select /><input type="date" required name="a" /></form>'),d=c("input",b);a("formvalidation",function(){return!!("checkValidity"in b[0])});a("datalist",function(){return!(!j.list||!h.HTMLDataListElement)});a("validationmessage",function(){if(!f.formvalidation)return!1;b.appendTo("head");return!!d.prop("validationMessage")});
a("output",function(){return f.formvalidation&&"value"in o.createElement("output")});a("details",function(){return"open"in o.createElement("details")});f.genericDOM=!!c("<video><div></div></video>")[0].innerHTML;f.requiredSelect=!!(f.formvalidation&&"required"in c("select",b)[0]);f.bugfreeformvalidation=f.formvalidation&&f.requiredSelect&&f.validationmessage&&(!c.browser.webkit||navigator.userAgent.indexOf("hrome")!=-1&&A>534.19)&&!h.testGoodWithFix;j.valueAsNumber=!1;j.valueAsNumberSet=!1;j.valueAsDate=
!1;if(f.formvalidation){j.valueAsNumber="valueAsNumber"in d[0];if(j.valueAsNumber)d[0].valueAsNumber=0,j.valueAsNumberSet=d[0].value=="1970-01-01";j.valueAsDate="valueAsDate"in d[0];b.remove()}if(j.valueAsNumber&&!j.valueAsNumberSet)f.bugfreeformvalidation=!1;b=d=null;f.ES5base=!(!String.prototype.trim||!Date.now||!Date.prototype.toISOString);f.ES5extras=!(!Array.isArray||!i.keys||!i.create||!Function.prototype.bind||!i.defineProperties);f.ES5base&&c.each(["filter","map","every","reduce","reduceRight",
"lastIndexOf"],function(b,a){if(!Array.prototype[a])return f.ES5base=!1});var e=!(!i.create||!i.defineProperties||!i.getOwnPropertyDescriptor);!c.browser.msie&&i.defineProperty&&i.prototype.__defineGetter__&&function(){try{var b=o.createElement("foo");i.defineProperty(b,"bar",{get:function(){return!0}});e=!!b.bar}catch(a){e=!1}b=null}();f.ES5=f.ES5base&&f.ES5extras&&e;f.objectAccessor=!(!(e||i.prototype.__defineGetter__&&i.prototype.__lookupSetter__)||c.browser.opera&&!(A>=11));f.domAccessor=!!(f.objectAccessor||
i.defineProperty&&i.getOwnPropertyDescriptor);f.advancedObjectProperties=e})();c.webshims=c.sub();c.extend(c.webshims,{version:"1.7.2",cfg:{useImportantStyles:!0,waitReady:!0,extendNative:!0,loader:{sssl:function(a,b){sssl(a,b)},require:function(a,b){require([a],b)},yepnope:function(a,b){yepnope.injectJs?yepnope.injectJs(a,b):yepnope({load:a,callback:b})}}},browserVersion:A,modules:{},features:{},featureList:[],profiles:{lightweight:["es5","json-storage","canvas","geolocation","forms"]},setOptions:function(a,
b){typeof a=="string"&&b!==t?m[a]=!c.isPlainObject(b)?b:c.extend(!0,m[a]||{},b):typeof a=="object"&&c.extend(!0,m,a)},addPolyfill:function(a,b){var b=b||{},d=b.feature||a;s[d]||(s[d]=[],g.featureList.push(d),m[d]={});s[d].push(a);b.options=c.extend(m[d],b.options);y(a,b);b.methodNames&&c.each(b.methodNames,function(b,a){g.addMethodName(a)})},polyfill:function(){var a=function(b){var d,e=[],w=b,l=function(){c("html").removeClass("loading-polyfills long-loading-polyfills polyfill-remove-fouc");c(h).unbind(".lP");
clearTimeout(d)};c.isReady?g.warn("You should call $.webshims.polyfill before DOM-Ready"):(m.removeFOUC&&(m.waitReady&&(w=w.concat(["DOM"])),e.push("polyfill-remove-fouc")),e.push("loading-polyfills"),c(h).bind("load.lP polyfillloaderror.lP  error.lP",l),d=setTimeout(function(){c("html").addClass("long-loading-polyfills")},600));u(b,l);m.useImportantStyles&&e.push("polyfill-important");e[0]&&c("html").addClass(e.join(" "));q.loadCSS("styles/shim.css");a=c.noop;f.genericDOM||c(function(){v(["dom-extend"])})};
return function(b,d){if(b&&(b===!0||c.isPlainObject(b)))d=b,b=t;var e=[],b=b||g.featureList;typeof b=="string"&&(b=g.profiles[b]||b.split(" "));m.waitReady&&(c.readyWait++,u(b,function(){c.ready(!0)}));c.each(b,function(b,a){a!==s[a][0]&&u(s[a],function(){r(a,!0)});e=e.concat(s[a])});a(b);v(e,d)}}(),isReady:function(a,b){a+="Ready";if(b){if(p[a]&&p[a].add)return!0;p[a]=c.extend(p[a]||{},{add:function(b){b.handler.call(this,c.Event(a))}});c.event.trigger(a)}return!(!p[a]||!p[a].add)||!1},ready:function(a,
b,d){typeof a=="string"&&(a=a.split(" "));d||(a=c.map(c.grep(a,function(a){return!r(a)}),function(a){return a+"Ready"}));a.length?(d=a.shift(),c(o).one(d,function(){u(a,b,!0)})):b(c,g,h,o)},addMethodName:function(a){c.fn[a]&&"shim"in c.fn[a]||(c.fn[a]=function(){var b=arguments,d;this.each(function(){var e=c.prop(this,a);if(e&&e.apply&&(d=e.apply(this,b),d!==t))return!1});return d!==t?d:this})},fixHTML5:function(a){return a},capturingEvents:function(a,b){o.addEventListener&&(typeof a=="string"&&(a=
[a]),c.each(a,function(a,e){var g=function(a){a=c.event.fix(a);if(b&&!a._isPolyfilled){var d=a.isDefaultPrevented,e=a.preventDefault;a.preventDefault=function(){clearTimeout(c.data(a.target,a.type+"DefaultPrevented"));c.data(a.target,a.type+"DefaultPrevented",setTimeout(function(){c.removeData(a.target,a.type+"DefaultPrevented")},30));return e.apply(this,arguments)};a.isDefaultPrevented=function(){return!(!d.apply(this,arguments)&&!c.data(a.target,a.type+"DefaultPrevented"))};a._isPolyfilled=!0}return c.event.handle.call(this,
a)};p[e]=p[e]||{};!p[e].setup&&!p[e].teardown&&c.extend(p[e],{setup:function(){this.addEventListener(e,g,!0)},teardown:function(){this.removeEventListener(e,g,!0)}})}))},register:function(a,b){var d=n[a];if(d){if(d.noAutoCallback){var e=function(){b(c,g,h,o,t,d.options);r(a,!0)};d.dependencies?u(d.dependencies,e):e()}}else g.warn("can't find module: "+a)},loader:{basePath:function(){var a=c('meta[name="polyfill-path"]').attr("content");a||(a=c("script").filter('[src$="polyfiller.js"]'),a=a[0]||a.end()[a.end().length-
1],a=(!c.browser.msie||o.documentMode>=8?a.src:a.getAttribute("src",4)).split("?")[0],a=a.slice(0,a.lastIndexOf("/")+1)+"shims/");return a}(),addModule:function(a,b){n[a]=b;b.name=b.name||a},loadList:function(){var a=[],b=function(b,d){typeof d=="string"&&(d=[d]);c.merge(a,d);q.loadScript(b,!1,d)},d=function(b,d){if(r(b)||c.inArray(b,a)!=-1)return!0;var e=n[b];if(e)if(e=e.test&&c.isFunction(e.test)?e.test(d):e.test)r(b,!0);else return!1;return!0},e=function(a,b){if(a.dependencies&&a.dependencies.length){var e=
function(a,e){!d(e,b)&&c.inArray(e,b)==-1&&b.push(e)};c.each(a.dependencies,function(a,b){n[b]?e(a,b):s[b]&&(c.each(s[b],e),u(s[b],function(){r(b,!0)}))});if(!a.noAutoCallback)a.noAutoCallback=!0}},f=/\.\/|\/\//,l=function(d,e){var g=[],l=[],i=0,h=location,e=c.extend({seperator:",",base:"/min/f=",maxFiles:10,scriptPath:q.basePath.replace(h.protocol+"//"+h.host+"/",""),fn:function(a,b,d,e){return a+c.map(e,function(a){return b+a}).join(d)}},typeof e=="object"?e:{});c.each(d,function(d,h){if(c.inArray(h,
a)==-1){var x=n[h].src||h;x.indexOf(".")==-1&&(x+=".js");f.test(x)?b(x,h):(i++,g.push(x),l.push(h),i>=e.maxFiles&&(b(e.fn(e.base,e.scriptPath,e.seperator,g),l),g=[],l=[],i=0))}});g.length&&b(e.fn(e.base,e.scriptPath,e.seperator,g),l)};return function(a,c){for(var f,w=[],h=0;h<a.length;h++)f=n[a[h]],!f||d(f.name,a)?f||g.warn("could not find: "+a[h]):(f.css&&q.loadCSS(f.css),f.loadInit&&f.loadInit(),f.loaded=!0,e(f,a),c?w.push(f.name):b(f.src||f.name,f.name));c&&l(w,c)}}(),makePath:function(a){if(a.indexOf("//")!=
-1||a.indexOf("/")===0)return a;a.indexOf(".")==-1&&(a+=".js");m.addCacheBuster&&(a+=m.addCacheBuster);return q.basePath+a},loadCSS:function(){var a,b=[];return function(d){d=this.makePath(d);c.inArray(d,b)==-1&&(a=a||c("link, style")[0]||c("script")[0],b.push(d),c('<link rel="stylesheet" />').insertBefore(a).attr({href:d}))}}(),loadScript:function(){var a=[],b;return function(d,e,f){d=q.makePath(d);if(c.inArray(d,a)==-1){var l=z,i,j=function(){c(h).triggerHandler("polyfillloaderror");g.warn('Error: could not find "'+
d+'" | configure polyfill-path: $.webshims.loader.basePath = "path/to/shims-folder"');k()},k=function(){clearTimeout(i);l.unbind("error",j);l=j=k=null;e&&e();f&&(typeof f=="string"&&(f=f.split(" ")),c.each(f,function(a,b){n[b]&&(n[b].afterLoad&&n[b].afterLoad(),r(!n[b].noAutoCallback?b:b+"FileLoaded",!0))}))};a.push(d);b||c.each(m.loader,function(a,c){if(h[a])return b=c,!1});b?(b(d,k),g.debug!==!1&&(setTimeout(function(){l=c('script[src="'+d+'"]').bind("error",j)},0),i=setTimeout(j,15E3))):g.warn("you need to include a scriptloader")}}}()}});
var g=c.webshims,C=(location.protocol=="https:"?"https://":"http://")+"ajax.googleapis.com/ajax/libs/",D=C+"jqueryui/1.8.14/",m=g.cfg,s=g.features,r=g.isReady,u=g.ready,k=g.addPolyfill,n=g.modules,q=g.loader,v=q.loadList,y=q.addModule,E={warn:1,error:1},F={cache:!0,dataType:"text",error:function(a,b){g.warn("error with: "+this.url+" | "+b)}};g.activeLang=function(){var a,b,d=[navigator.browserLanguage||navigator.language||"",c("html").attr("lang")||""];u("webshimLocalization",function(){a&&b&&g.activeLang.apply(b,
a)});return function(c,f,g){b=this;a=arguments;if(c){if(!f||!g)c!==d[0]&&(d[0]=c);v(["dom-extend"])}return d}}();c.each(["log","error","warn","info"],function(a,b){g[b]=function(a){if((E[b]&&g.debug!==!1||g.debug)&&h.console&&console.log)return console[console[b]?b:"log"](a)}});(function(){c.isDOMReady=c.isReady;if(c.isDOMReady)r("DOM",!0);else{var a=c.ready;c.ready=function(b){if(b!==!0&&!c.isDOMReady)o.body?(c.isDOMReady=!0,r("DOM",!0),c.ready=a):setTimeout(function(){c.ready(b)},13);return a.apply(this,
arguments)}}})();(function(){var a=[];c.extend(g,{addReady:function(b){var c=function(a,c){g.ready("DOM",function(){b(a,c)})};a.push(c);c(o,z)},triggerDomUpdate:function(b){if(!b||!b.nodeType)b.jquery&&b.each(function(){g.triggerDomUpdate(this)});else{var d=b.nodeType;if(!(d!=1&&d!=9)){var e=b!==o?c(b):z;c.each(a,function(a,c){c(b,e)})}}}});c.fn.htmlWebshim=function(a){a=c.fn.html.call(this,a?g.fixHTML5(a):a);a===this&&c.isDOMReady&&this.each(function(){this.nodeType==1&&g.triggerDomUpdate(this)});
return a};if(g.fn)g.fn.html=c.fn.htmlWebshim;c.each(["after","before","append","prepend","replaceWith"],function(a,d){c.fn[d+"Webshim"]=function(a){a=c(g.fixHTML5(a));c.fn[d].call(this,a);c.isDOMReady&&a.each(function(){this.nodeType==1&&g.triggerDomUpdate(this)});return this};g.fn&&(g.fn[d]=c.fn[d+"Webshim"])});c.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(a,d){c.fn[d]=function(){return this}})})();(function(){var a=i.prototype.hasOwnProperty,b=["configurable","enumerable",
"writable"],d=function(a){for(var c=0;c<3;c++)if(a[b[c]]===t&&(b[c]!=="writable"||a.value!==t))a[b[c]]=!0},e=function(b){if(b)for(var c in b)a.call(b,c)&&d(b[c])};if(i.create)g.objectCreate=function(a,b,d){e(b);a=i.create(a,b);if(d)a.options=c.extend(!0,{},a.options||{},d),d=a.options;a._create&&c.isFunction(a._create)&&a._create(d);return a};i.defineProperty&&(g.defineProperty=function(a,b,c){d(c);return i.defineProperty(a,b,c)});if(i.defineProperties)g.defineProperties=function(a,b){e(b);return i.defineProperties(a,
b)};g.getOwnPropertyDescriptor=i.getOwnPropertyDescriptor;g.getPrototypeOf=i.getPrototypeOf})();y("jquery-ui",{src:D+"jquery-ui.min.js",test:function(){return!(!c.widget||!c.Widget)}});y("input-widgets",{src:"",test:function(){return!this.src||!(c.widget&&!c.fn.datepicker&&!c.fn.slider)}});y("swfobject",{src:C+"swfobject/2.2/swfobject.js",test:function(){return"swfobject"in h}});k("es5",{test:f.ES5});k("dom-extend",{feature:"dom-support",noAutoCallback:!0,dependencies:["es5"]});k("json-storage",{test:f.localstorage&&
"sessionStorage"in h&&"JSON"in h,loadInit:function(){v(["swfobject"])},noAutoCallback:!0});k("geolocation",{test:f.geolocation,options:{destroyWrite:!0,confirmText:""},dependencies:["json-storage"]});(function(){var a;k("canvas",{src:"excanvas",test:f.canvas,options:{type:"excanvas"},noAutoCallback:!0,loadInit:function(){var b=this.options.type;if(b&&b.indexOf("flash")!==-1&&(!h.swfobject||swfobject.hasFlashPlayerVersion("9.0.0")))h.FlashCanvasOptions=h.FlashCanvasOptions||{},a=FlashCanvasOptions,
b=="flash"?(c.extend(a,{swfPath:q.basePath+"FlashCanvas/"}),this.src="FlashCanvas/flashcanvas",b=a.swfPath+"flashcanvas.swf"):(c.extend(a,{swfPath:q.basePath+"FlashCanvasPro/"}),this.src="FlashCanvasPro/flashcanvas",b=a.swfPath+"flash10canvas.swf"),b&&c.ajax(b,F)},afterLoad:function(){g.addReady(function(a,d){c("canvas",a).add(d.filter("canvas")).each(function(){this.getContext||G_vmlCanvasManager.initElement(this)})});r("canvas",!0)},methodNames:["getContext"],dependencies:["es5","dom-support"]})})();
g.validationMessages=g.validityMessages=[];g.inputTypes={};k("form-core",{feature:"forms",dependencies:f.validationmessage?["es5"]:["es5","dom-extend"],loadInit:function(){this.options.customMessages&&f.validationmessage&&v(["dom-extend"])},options:{placeholderType:"value"},methodNames:["setCustomValidity","checkValidity"]});f.formvalidation?(g.capturingEvents(["input"]),g.capturingEvents(["invalid"],!0),k("form-extend",{feature:"forms",src:"form-native-extend",test:function(a){return f.bugfreeformvalidation&&
(n["forms-ext"].test(a)||c.inArray("forms-ext",a)==-1)&&!this.options.overrideMessages},dependencies:["form-core","dom-support"]}),k("form-native-fix",{feature:"forms",test:f.bugfreeformvalidation,dependencies:["form-extend"]}),k("form-output-datalist",{feature:"forms",test:f.output&&f.datalist&&j.list,dependencies:["dom-support"]})):k("form-extend",{feature:"forms",src:"form-shim-all",dependencies:["form-core","dom-support"]});k("forms-ext",{src:"form-number-date",uiTest:function(){return B.range&&
B.date&&!this.options.replaceUI},test:function(){return j.valueAsNumberSet&&this.uiTest()},noAutoCallback:!0,dependencies:["forms"],loadInit:function(){this.uiTest()||(v(["jquery-ui"]),n["input-widgets"].src&&v(["input-widgets"]))},options:{stepArrows:{number:1,time:1},calculateWidth:!0,slider:{},datepicker:{},langSrc:D+"i18n/jquery.ui.datepicker-",recalcWidth:!0}});k("details",{test:f.details,dependencies:["dom-support"],options:{text:"Details"}})})(jQuery,this,this.document);