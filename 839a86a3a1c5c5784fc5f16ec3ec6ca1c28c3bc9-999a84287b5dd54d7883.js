(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8oxB":function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,u=[],l=!1,d=-1;function m(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=i(m);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function g(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new f(e,t)),1!==u.length||l||i(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.prependListener=g,a.prependOnceListener=g,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"8ujH":function(e,t,n){var r=n("GTTd")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var s,i,c=t.prefix||"__jp",u=t.name||c+a++,l=t.param||"callback",d=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;d&&(i=setTimeout((function(){f(),n&&n(new Error("Timeout"))}),d));function f(){s.parentNode&&s.parentNode.removeChild(s),window[u]=o,i&&clearTimeout(i)}return window[u]=function(e){r("jsonp got",e),f(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+m(u)).replace("?&","?"),r('jsonp req "%s"',e),(s=document.createElement("script")).src=e,p.parentNode.insertBefore(s,p),function(){window[u]&&f()}};var a=0;function o(){}},AB7g:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("hlFM"),s=n("ofer");t.a=function(e){var t=e.label;return a.a.createElement(o.a,{style:{backgroundColor:"#333333",color:"#FFFFFF",padding:40,marginTop:100}},a.a.createElement(s.a,{variant:"h3"},t))}},E3hX:function(e,t,n){"use strict";var r=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),o=(0,r(n("8/g6")).default)(a.default.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos");t.default=o},GTTd:function(e,t,n){(function(r){function a(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==r&&"env"in r&&(e={}.DEBUG),e}(t=e.exports=n("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=a,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(a())}).call(this,n("8oxB"))},LXLv:function(e,t,n){"use strict";var r=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),o=(0,r(n("8/g6")).default)(a.default.createElement("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");t.default=o},OD4L:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("17x9"),s=n.n(o),i=n("l1CQ"),c=n("bWLx"),u=n("5CWz"),l=n("Hk+Y"),d=n.n(l),m=d()((function(e){return{main:{position:"relative",border:"thin solid white",margin:"-60px 30px 0px",boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",borderRadius:6,background:"#FFFFFF",zIndex:3,display:"block"}}})),p=n("tRbT"),f=d()((function(e){var t,n;return{root:(t={backgroundColor:e.palette.secondary.main,border:"0",margin:"0",display:"flex",justifyContent:"space-between",alignContent:"space-between",alignItems:"center",color:"white",padding:"0",overflow:"hidden",position:"relative",maxHeight:"1000px",backgroundSize:"cover",backgroundPosition:"center center",minWidth:420},t[e.breakpoints.up("xs")]={flexDirection:"column"},t[e.breakpoints.up("sm")]={flexDirection:"row"},t[e.breakpoints.up("md")]={height:"81vh"},t[e.breakpoints.up("lg")]={},t[e.breakpoints.up("xl")]={},t),hero:(n={alignSelf:"center",textAlign:"center","& img ":{margin:"1rem 3rem",width:"100%",maxWidth:420}},n[e.breakpoints.up("xs")]={"& img ":{width:250}},n[e.breakpoints.up("md")]={"& img ":{width:"100%"}},n),headline:{flexGrow:1,alignSelf:"center"},usp:{display:"inline-block",position:"relative",fontSize:"2.5rem",fontWeight:600,lineHeight:"1.15em",marginBottom:"10px",marginTop:"20px",textShadow:"2px 2px #121212;"},sub:{margin:"10px 0 0",fontSize:"1.313rem",maxWidth:"500px",textShadow:"1px 1px #121212;"}}})),g=n("ofer"),h=n("Ji2X"),b=function(e){var t=e.classes,n=e.heroImage,r=e.backgroundImage,o=e.usp,s=e.sub;return a.a.createElement("div",{className:t.root,style:{backgroundImage:"url("+r+")",transform:"translate3d(0px, 0px, 0px)"}},a.a.createElement(h.a,null,a.a.createElement(p.a,{container:!0},a.a.createElement(p.a,{item:!0,xs:12,md:6,className:t.headline},a.a.createElement(g.a,{className:t.usp},o),a.a.createElement(g.a,{className:t.sub},s)),a.a.createElement(p.a,{item:!0,xs:12,md:6,className:t.hero},a.a.createElement("img",{src:n,alt:o})))))};b.propsTypes={classes:s.a.object.isRequired,heroImage:s.a.node.isRequired,backgroundImage:s.a.node.isRequired,usp:s.a.string,sub:s.a.string},b.defaultProps={usp:"USP Text Not Set.",sub:"SUB Text Not Set."};var v=f(b),y=d()((function(e){return{root:{backgroundColor:e.palette.secondary.main,marginTop:100,padding:"2rem 0 1.5rem"},link:{color:e.palette.primary.main}}})),w=n("k1TG"),x=n("aXB2"),E=n("FqMR"),k=n("iuhU"),T=n("H2TA"),S=r.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.component,s=void 0===o?"div":o,i=e.disableGutters,c=void 0!==i&&i,u=e.variant,l=void 0===u?"regular":u,d=Object(x.a)(e,["classes","className","component","disableGutters","variant"]);return r.createElement(s,Object(w.a)({className:Object(k.a)(n.root,n[l],a,!c&&n.gutters),ref:t},d))})),N=Object(T.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(E.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(S),I=n("Wbzz"),j=n("kmgk"),C=n.n(j),M=n("U5GE"),A=n.n(M),O=n("LXLv"),L=n.n(O),R=n("PsDL"),_=function(e,t){var n=e.classes;return void 0===t&&(t="https://www.instagram.com/compose.us/"),a.a.createElement("footer",{className:n.root},a.a.createElement(h.a,null,a.a.createElement(N,null,a.a.createElement("div",{style:{textAlign:"left"}},a.a.createElement(I.Link,{to:"/","aria-label":"compose.us logo"},a.a.createElement("img",{src:C.a,className:n.image,alt:"compose.us logo"}))),a.a.createElement("div",{style:{margin:14}},a.a.createElement(I.Link,{to:"/impressum","aria-label":"Impressum",className:n.link},"Impressum & Datenschutzerklärung")),a.a.createElement("div",{style:{width:"100%",textAlign:"right",color:"#999999"}},a.a.createElement(R.a,{edge:"start",color:"inherit","aria-label":"Instagram",href:"https://instagram.com/compose.us",target:"cs_socialmedia"},a.a.createElement(A.a,null)),a.a.createElement(R.a,{edge:"start",color:"inherit","aria-label":"Twitter",href:"https://twitter.com/compose_us",target:"cs_socialmedia"},a.a.createElement(L.a,null))))))};_.propsTypes={classes:s.a.object.isRequired};var q=y(_),F=function(e){var t=e.children,n=e.classes,r=e.heroImage,o=e.backgroundImage,s=e.usp,l=e.sub;return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,null),a.a.createElement(c.a,{theme:i.a},a.a.createElement(v,{heroImage:r,backgroundImage:o,usp:s,sub:l}),a.a.createElement("main",{className:n.main},a.a.createElement(h.a,null,t)),a.a.createElement(q,null)))};F.propsTypes={children:s.a.node.isRequired,classes:s.a.object.isRequired,heroImage:s.a.node.isRequired,backgroundImage:s.a.node.isRequired,usp:s.a.string,sub:s.a.string},F.defaultProps={usp:"USP Text Not Set.",sub:"SUB Text Not Set."};t.a=m(F)},QXP7:function(e,t){var n=1e3,r=6e4,a=60*r,o=24*a;function s(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var i,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var s=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*s;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*a;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===c&&!1===isNaN(e))return t.long?s(i=e,o,"day")||s(i,a,"hour")||s(i,r,"minute")||s(i,n,"second")||i+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=a)return Math.round(e/a)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},U5GE:function(e,t,n){"use strict";var r=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),o=(0,r(n("8/g6")).default)(a.default.createElement("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");t.default=o},bRoh:function(e,t,n){var r;function a(e){function n(){if(n.enabled){var e=n,a=+new Date,o=a-(r||a);e.diff=o,e.prev=r,e.curr=a,r=a;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;c++;var a=t.formatters[r];if("function"==typeof a){var o=s[c];n=a.call(e,o),s.splice(c,1),c--}return n})),t.formatArgs.call(e,s);var u=n.log||t.log||console.log.bind(console);u.apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,a=0;a<r;a++)n[a]&&("-"===(e=n[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("QXP7"),t.names=[],t.skips=[],t.formatters={}},c52k:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("gQrC"),s=n.n(o),i=n("ucgz"),c=Object(i.a)((function(e){return{root:{margin:"8rem 0",textAlign:"center","& input[type=email], input[type=text]":{padding:"12px 20px",margin:"8px 5px",display:"inline-block",border:"1px solid #ccc",borderRadius:4,boxSizing:"border-box"},"& button[type=submit]":{width:"75%",mixWidth:100,color:"white",padding:"12px 20px",margin:"8px 10px",border:"none",borderRadius:4,cursor:"pointer",backgroundColor:"#4CAF50"}}}})),u=n("ofer"),l=function(e){var t=e.action,n=e.classes,r=e.label;return a.a.createElement("div",{className:n.root},a.a.createElement(u.a,{variant:"h6"},r),a.a.createElement(s.a,{action:t,fields:[{name:"NAME",placeholder:"Name",type:"text",required:!0},{name:"ORT",placeholder:"Ort",type:"text",required:!0},{name:"EMAIL",placeholder:"Email",type:"email",required:!0}],messages:{success:"Wir haben Ihre Emailadresse erhalten! Wir werden uns in Kürze bei Ihnen melden.",error:"Ein unerwarteter Fehler ist passiert.Seien Sie unbesorgt. Warum rufen Sie uns nicht einfach an?",empty:"Bitte geben Sie eine funktionierende Emailadresse an",duplicate:"Sind Sie sich sicher, dass Sie das nicht schon mal gemacht haben?",button:"Kontakt aufnehmen "}}))};l.defaultProps={action:"https://compose.us7.list-manage.com/subscribe/post?u=515806199910ecc73065ec557&id=2f35862729",label:"Label Text Not Set!"};t.a=c(l)},gQrC:function(e,t,n){var r,a,o;a=[t,n("q1tI"),n("8ujH"),n("17x9")],void 0===(o="function"==typeof(r=function(e,t,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(t),o=i(n),s=i(r);function i(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.props,r=n.fields,a=(n.action+"&"+r.map((function(e){return e.name+"="+encodeURIComponent(t.state[e.name])})).join("&")).replace("/post?","/post-json?"),o=this.state.EMAIL;/^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/.test(o)?this.sendData(a):this.setState({status:"empty"})}},{key:"sendData",value:function(e){var t=this;this.setState({status:"sending"}),(0,o.default)(e,{param:"c"},(function(e,n){n.msg.includes("already subscribed")?t.setState({status:"duplicate"}):e||"success"!==n.result?t.setState({status:"error"}):t.setState({status:"success"})}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.messages,r=t.fields,o=t.styles,s=t.className,i=this.state.status;return a.default.createElement("form",{onSubmit:this.handleSubmit.bind(this),className:s},r.map((function(t){return a.default.createElement("input",{key:Math.random(),onBlur:function(n){var r,a,o,s=n.target;return e.setState((r={},a=t.name,o=s.value,a in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,r))},placeholder:t.placeholder,name:t.name,type:t.type,defaultValue:e.state[t.name]})})),a.default.createElement("button",{disabled:"sending"===i||"success"===i,type:"submit"},n.button),a.default.createElement("div",{className:"msg-alert"},"sending"===i&&a.default.createElement("p",{style:o.sendingMsg},n.sending),"success"===i&&a.default.createElement("p",{style:o.successMsg},n.success),"duplicate"===i&&a.default.createElement("p",{style:o.duplicateMsg},n.duplicate),"empty"===i&&a.default.createElement("p",{style:o.errorMsg},n.empty),"error"===i&&a.default.createElement("p",{style:o.errorMsg},n.error)))}}]),t}(a.default.Component);u.defaultProps={messages:{sending:"Sending...",success:"Thank you for subscribing!",error:"An unexpected internal error has occurred.",empty:"You must write an e-mail.",duplicate:"Too many subscribe attempts for this email address",button:"Subscribe!"},styles:{sendingMsg:{color:"#0652DD"},successMsg:{color:"#009432"},duplicateMsg:{color:"#EE5A24"},errorMsg:{color:"#ED4C67"}}},u.propTypes={action:s.default.string,messages:s.default.object,fields:s.default.array,styles:s.default.object,className:s.default.string},e.default=u})?r.apply(t,a):r)||(e.exports=o)}}]);
//# sourceMappingURL=839a86a3a1c5c5784fc5f16ec3ec6ca1c28c3bc9-999a84287b5dd54d7883.js.map