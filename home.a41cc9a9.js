parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"OQs8":[function(require,module,exports) {
module.exports={root:"_root_1kfoo_1",button:"_button_1kfoo_9",caption:"_caption_1kfoo_19"};
},{}],"3K4G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("react")),t=l(require("prop-types")),a=l(require("classnames")),r=l(require("./action-button.scss"));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(t){var l=t.caption,s=t.className,u=t.href,n=t.label;return e.default.createElement("div",{className:(0,a.default)(r.default.root,s)},e.default.createElement("a",{className:r.default.button,href:u},n),l&&e.default.createElement("p",{className:r.default.caption},l))};s.displayName="ActionButton",s.propTypes={caption:t.default.string,className:t.default.string,href:t.default.string.isRequired,label:t.default.string.isRequired},s.defaultProps={caption:null,className:null};var u=s;exports.default=u;
},{"react":"ccIB","prop-types":"3/B0","classnames":"kpqe","./action-button.scss":"OQs8"}],"YssS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"ActionButton",{enumerable:!0,get:function(){return e.default}});var e=t(require("./action-button.js"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./action-button.js":"3K4G"}],"HTzQ":[function(require,module,exports) {
module.exports={root:"_root_4b5d6_1"};
},{}],"fFQ4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("react")),r=s(require("prop-types")),a=s(require("classnames")),l=s(require("./box.scss"));function s(e){return e&&e.__esModule?e:{default:e}}var t=function(r){var s=r.children,t=r.className;return e.default.createElement("div",{className:(0,a.default)(l.default.root,t)},s)};t.displayName="Box",t.propTypes={children:r.default.node,className:r.default.string},t.defaultProps={children:null,className:null};var u=t;exports.default=u;
},{"react":"ccIB","prop-types":"3/B0","classnames":"kpqe","./box.scss":"HTzQ"}],"7huR":[function(require,module,exports) {
module.exports={root:"_root_w1ghf_1"};
},{}],"ykAg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("react")),r=s(require("prop-types")),a=s(require("classnames")),l=s(require("./box-header.scss"));function s(e){return e&&e.__esModule?e:{default:e}}var t=function(r){var s=r.children,t=r.className;return e.default.createElement("h2",{className:(0,a.default)(l.default.root,t)},s)};t.displayName="BoxHeader",t.propTypes={children:r.default.node,className:r.default.string},t.defaultProps={children:null,className:null};var u=t;exports.default=u;
},{"react":"ccIB","prop-types":"3/B0","classnames":"kpqe","./box-header.scss":"7huR"}],"YrMD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"BoxHeader",{enumerable:!0,get:function(){return e.default}});var e=r(require("./box-header.js"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./box-header.js":"ykAg"}],"YFDy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Box",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"BoxHeader",{enumerable:!0,get:function(){return r.BoxHeader}});var e=t(require("./box.js")),r=require("./box-header");function t(e){return e&&e.__esModule?e:{default:e}}
},{"./box.js":"fFQ4","./box-header":"YrMD"}],"Uugj":[function(require,module,exports) {
module.exports={root:"_root_1nepg_1",boxes:"_boxes_1nepg_6",buttons:"_buttons_1nepg_16",headerImage:"_headerImage_1nepg_23",spacingAbove:"_spacingAbove_1nepg_39"};
},{"./../../assets/images/tom-ezzatkhah-223453-unsplash.jpg":[["tom-ezzatkhah-223453-unsplash.408da68f.jpg","eItM"],"eItM"]}],"tOt1":[function(require,module,exports) {
module.exports={root:"_root_9g1ra_1",technologiesHeader:"_technologiesHeader_9g1ra_23",technologiesHeading:"_technologiesHeading_9g1ra_30",technologiesItems:"_technologiesItems_9g1ra_37"};
},{}],"BWvK":[function(require,module,exports) {
module.exports={root:"_root_1yyy0_1",active:"_active_1yyy0_6"};
},{}],"MFxg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("react")),t=n(require("prop-types")),r=n(require("classnames")),a=n(require("./item.scss"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(){},u=function(t){var n=t.active,l=t.className,u=t.label,i=t.onPointerEnter,s=t.onPointerLeave;return e.default.createElement("li",{className:(0,r.default)(a.default.root,o({},a.default.active,n),l),onPointerEnter:i,onPointerLeave:s},u)};u.displayName="Item",u.propTypes={active:t.default.bool,className:t.default.string,label:t.default.string.isRequired,onPointerEnter:t.default.func,onPointerLeave:t.default.func},u.defaultProps={active:!1,className:null,onPointerEnter:l,onPointerLeave:l};var i=u;exports.default=i;
},{"react":"ccIB","prop-types":"3/B0","classnames":"kpqe","./item.scss":"BWvK"}],"DpaE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Item",{enumerable:!0,get:function(){return e.default}});var e=t(require("./item.js"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./item.js":"MFxg"}],"yERC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=c(require("react")),a=o(require("prop-types")),r=o(require("classnames")),t=o(require("./technologies.scss")),l=require("../heading"),n=require("./item");function o(e){return e&&e.__esModule?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};t.get||t.set?Object.defineProperty(a,r,t):a[r]=e[r]}return a.default=e,a}function i(e,a){return g(e)||s(e,a)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(e,a){var r=[],t=!0,l=!1,n=void 0;try{for(var o,c=e[Symbol.iterator]();!(t=(o=c.next()).done)&&(r.push(o.value),!a||r.length!==a);t=!0);}catch(i){l=!0,n=i}finally{try{t||null==c.return||c.return()}finally{if(l)throw n}}return r}function g(e){if(Array.isArray(e))return e}function b(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(a){f(e,a,r[a])})}return e}function f(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}var d=[{label:"AngularJS",categories:["backend","framework","interface"]},{label:"Ansible",categories:["infrastructure"]},{label:"Bash",categories:["infrastructure","language"]},{label:"Batch",categories:["infrastructure","language"]},{label:"Build-Scripts",categories:["backend","infrastructure","tool"]},{label:"C#",categories:["language"]},{label:"CLI-Tools",categories:["interface","tool"]},{label:"CSS",categories:["language","interface"]},{label:"Capybara",categories:["tool"]},{label:"Chai",categories:["framework"]},{label:"Code Climate",categories:["infrastructure"]},{label:"Continuous Delivery (CD)",categories:["infrastructure"]},{label:"Continuous Integration (CI)",categories:["infrastructure"]},{label:"Coveralls",categories:["infrastructure"]},{label:"Cucumber",categories:["tool"]},{label:"CycleJS",categories:["framework","interface"]},{label:"Docker",categories:["infrastructure"]},{label:"ESLint",categories:["infrastructure","tool"]},{label:"ElasticSearch",categories:["database"]},{label:"Electron",categories:["backend","framework","interface","tool"]},{label:"Express.js",categories:["backend","infrastructure"]},{label:"Flow",categories:["language"]},{label:"Go",categories:["language"]},{label:"Google Adwords API",categories:["backend","tool"]},{label:"Google Maps API",categories:["backend","interface","tool"]},{label:"Google Sheets API",categories:["backend","tool"]},{label:"Gulp",categories:["framework","infrastructure"]},{label:"Hugo",categories:["framework","infrastructure","tool"]},{label:"JSX",categories:["interface","language"]},{label:"Jasmine",categories:["backend","framework","tool"]},{label:"Java",categories:["language"]},{label:"JavaScript",categories:["language"]},{label:"Jenkins",categories:["infrastructure"]},{label:"Jest",categories:["backend","framework","interface","tool"]},{label:"Karma",categories:["backend","framework","tool"]},{label:"Kotlin",categories:["language"]},{label:"Kubernetes",categories:["infrastructure"]},{label:"Lerna",categories:["infrastructure","tool"]},{label:"LowDB",categories:["database"]},{label:"MariaDB",categories:["database"]},{label:"Mocha",categories:["framework","tool"]},{label:"MongoDB",categories:["database"]},{label:"MySQL",categories:["database"]},{label:"NPM",categories:["infrastructure"]},{label:"Neo4j",categories:["database"]},{label:"NodeJS",categories:["backend","infrastructure"]},{label:"Perl",categories:["language","tool"]},{label:"PixiJS",categories:["framework","interface"]},{label:"PostgreSQL",categories:["database"]},{label:"Prettier",categories:["infrastructure","tool"]},{label:"Puppeteer",categories:["backend","framework","tool"]},{label:"REST APIs",categories:["backend"]},{label:"Rails",categories:["backend","framework"]},{label:"React",categories:["interface"]},{label:"Redis",categories:["database"]},{label:"Redux",categories:["backend","framework"]},{label:"Rollup",categories:["infrastructure"]},{label:"RSpec",categories:["tool"]},{label:"Ruby",categories:["language"]},{label:"Rust",categories:["language"]},{label:"SASS/SCSS",categories:["language","interface"]},{label:"Scala",categories:["language"]},{label:"ScalaJS",categories:["interface","language"]},{label:"Server side rendering (SSR)",categories:["backend","infrastructure"]},{label:"Single Page Applications (SPAs)",categories:["backend","interface"]},{label:"Sinon",categories:["framework"]},{label:"SockJS",categories:["framework"]},{label:"SocketIO",categories:["framework"]},{label:"Storybook",categories:["infrastructure","interface","tool"]},{label:"TCL",categories:["language"]},{label:"TK",categories:["framework"]},{label:"Travis",categories:["infrastructure"]},{label:"TypeScript",categories:["language"]},{label:"Unexpected",categories:["framework"]},{label:"Vert.x",categories:["backend","framework"]},{label:"VueJS",categories:["backend","framework","interface"]},{label:"Webpack",categories:["infrastructure"]},{label:"Youtube API",categories:["backend","tool"]}],m=d.reduce(function(e,a){return b({},e,a.categories.reduce(function(e,a){return b({},e,f({},a,!1))},{}))},{}),k=function(a){var o=a.className,c=i((0,e.useState)(null),2),u=c[0],s=c[1],g=i((0,e.useState)(m),2),k=g[0],p=g[1];return e.default.createElement("div",{className:(0,r.default)(t.default.root,o)},e.default.createElement("div",{className:t.default.technologiesHeader},e.default.createElement(l.Heading,{className:t.default.technologiesHeading},"Technologien"),e.default.createElement("ul",null,e.default.createElement(n.Item,{active:k.backend,label:"Backend",onPointerEnter:function(){return p(b({},m,{backend:!0}))},onPointerLeave:function(){return p(b({},k,{backend:!1}))}}),e.default.createElement(n.Item,{active:k.database,label:"Datenbanken",onPointerEnter:function(){return p(b({},m,{database:!0}))},onPointerLeave:function(){return p(b({},k,{database:!1}))}}),e.default.createElement(n.Item,{active:k.framework,label:"Frameworks / Libs",onPointerEnter:function(){return p(b({},m,{framework:!0}))},onPointerLeave:function(){return p(b({},k,{framework:!1}))}}),e.default.createElement(n.Item,{active:k.infrastructure,label:"Infrastruktur",onPointerEnter:function(){return p(b({},m,{infrastructure:!0}))},onPointerLeave:function(){return p(b({},k,{infrastructure:!1}))}}),e.default.createElement(n.Item,{active:k.interface,label:"Interface / Frontend",onPointerEnter:function(){return p(b({},m,{interface:!0}))},onPointerLeave:function(){return p(b({},k,{interface:!1}))}}),e.default.createElement(n.Item,{active:k.language,label:"Programmiersprachen",onPointerEnter:function(){return p(b({},m,{language:!0}))},onPointerLeave:function(){return p(b({},k,{language:!1}))}}),e.default.createElement(n.Item,{active:k.tool,label:"Tools",onPointerEnter:function(){return p(b({},m,{tool:!0}))},onPointerLeave:function(){return p(b({},k,{tool:!1}))}}))),e.default.createElement("div",{className:t.default.technologiesItems},e.default.createElement("ul",null,d.map(function(a){var r=a.categories,t=a.label;return e.default.createElement(n.Item,{key:t,active:u===t||null===u&&Object.keys(k).some(function(e){return k[e]&&r.includes(e)}),label:t,onPointerEnter:function(){p(b({},m,r.reduce(function(e,a){return b({},e,f({},a,!0))},{}))),s(t)},onPointerLeave:function(){p(m),s(null)}})}))))};k.displayName="Technologies",k.propTypes={children:a.default.node,className:a.default.string},k.defaultProps={children:null,className:null};var p=k;exports.default=p;
},{"react":"ccIB","prop-types":"3/B0","classnames":"kpqe","./technologies.scss":"tOt1","../heading":"bIjF","./item":"DpaE"}],"KJzY":[function(require,module,exports) {
module.exports={root:"_root_ctjv5_1",logo:"_logo_ctjv5_5"};
},{}],"kgUN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("react")),r=l(require("prop-types")),a=l(require("classnames")),t=l(require("./partner.scss"));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(r){var l=r.className,s=r.link,u=r.logo,n=r.name;return e.default.createElement("div",{className:(0,a.default)(t.default.root,l)},e.default.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},e.default.createElement("img",{src:u,alt:n,className:t.default.logo})))};s.displayName="Partner",s.propTypes={className:r.default.string,link:r.default.string.isRequired,logo:r.default.string.isRequired,name:r.default.string.isRequired},s.defaultProps={className:null};var u=s;exports.default=u;
},{"react":"ccIB","prop-types":"3/B0","classnames":"kpqe","./partner.scss":"KJzY"}],"Qq/D":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Partner",{enumerable:!0,get:function(){return e.default}});var e=r(require("./partner.js"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./partner.js":"kgUN"}],"9D4V":[function(require,module,exports) {
module.exports={root:"_root_40nkb_1"};
},{}],"9AmH":[function(require,module,exports) {
module.exports="/gdn_logo.9bb2d706.png";
},{}],"UxKP":[function(require,module,exports) {
module.exports="/innkubator_logo.e74c0e70.png";
},{}],"hiiH":[function(require,module,exports) {
module.exports="/yc_sus.b47940d9.png";
},{}],"NA46":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("react")),r=i(require("prop-types")),a=i(require("classnames")),t=require("./partner"),n=i(require("./partner-grid.scss")),s=i(require("../../assets/images/partners/gdn_logo.png")),l=i(require("../../assets/images/partners/innkubator_logo.png")),u=i(require("../../assets/images/partners/yc_sus.png"));function i(e){return e&&e.__esModule?e:{default:e}}var o=[{link:"https://www.gruenderzentrum-digitalisierung-niederbayern.de/",logo:s.default,name:"Gründerzentrum Digitalisierung Niederbayern"},{link:"https://www.innkubator.de/",logo:l.default,name:"INN.Kubator"},{link:"https://www.startupschool.org/companies/vki-fHGba2Z5rA",logo:u.default,name:"YC StartupSchool"}],d=function(r){var s=r.className;return e.default.createElement("div",{className:(0,a.default)(n.default.root,s)},o.map(function(r,a){var n=r.link,s=r.logo,l=r.name;return e.default.createElement(t.Partner,{key:a,link:n,logo:s,name:l})}))};d.displayName="PartnerGrid",d.propTypes={children:r.default.node,className:r.default.string},d.defaultProps={children:null,className:null};var p=d;exports.default=p;
},{"react":"ccIB","prop-types":"3/B0","classnames":"kpqe","./partner":"Qq/D","./partner-grid.scss":"9D4V","../../assets/images/partners/gdn_logo.png":"9AmH","../../assets/images/partners/innkubator_logo.png":"UxKP","../../assets/images/partners/yc_sus.png":"hiiH"}],"EOD9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=d(require("react")),n=require("../../components/section"),t=require("../../components/heading"),r=require("../../components/action-button"),l=require("../../components/box"),a=d(require("./home.scss")),i=require("../../service/use-title"),u=d(require("../../components/technologies/technologies")),s=d(require("../../components/partner-grid/partner-grid"));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(){return(0,i.useTitle)("compose.us - Euer Digitalisierungspartner"),e.default.createElement("div",{className:a.default.root},e.default.createElement("header",{className:a.default.headerImage},"Ihr pflanzt die Idee, wir ziehen sie groß."),e.default.createElement(n.Section,null,e.default.createElement(t.Heading,null,"Was findet Ihr bei uns?"),e.default.createElement("p",null,"Automatisierer, Mitdenker und Softwareentwickler. Wir sehen uns nicht als Kunde und Dienstleister, sondern als Partner. Wir möchten Euch Mehrwerte bieten und denken mit."),e.default.createElement("div",{className:a.default.boxes},e.default.createElement(l.Box,null,e.default.createElement(l.BoxHeader,null,"Verstehen"),"Wir hören Euch zu. Ihr bringt Eure Ideen ein oder zeigt Eure Probleme auf und wir helfen Euch, sinnvolle Lösungskonzepte zu erarbeiten."),e.default.createElement(l.Box,null,e.default.createElement(l.BoxHeader,null,"Umsetzen"),"Wir liefern Qualität. Ihr möchtet unsere Resultate nutzen, daher sorgen wir für einfache Bedienbarkeit."),e.default.createElement(l.Box,null,e.default.createElement(l.BoxHeader,null,"Erweitern"),"Wir sind langfristig orientiert. Sollten sich Eure Anforderungen ändern, werden wir Euch weiterhelfen.")),e.default.createElement("p",{className:a.default.spacingAbove},"Ihr sucht einen Digitalisierungspartner für Euer nächstes Projekt?"),e.default.createElement(r.ActionButton,{href:"#",label:"Kontaktiert uns per Mail!",caption:"Lasst uns einen Termin vereinbaren und über Eure Ideen sprechen."})),e.default.createElement(n.Section,null,e.default.createElement(t.Heading,null,"Was können wir?"),e.default.createElement("p",null,"Dies ist ein kleiner Auszug von Technologien, die wir uns näher angesehen haben. Unser Team ist mit Absicht sehr breit aufgestellt, damit wir für jede Aufgabenstellung passende Werkzeuge verwenden können."),e.default.createElement("p",null,"Sollten wir einmal tiefgehendes Spezialwissen brauchen, so finden wir Unterstützung in unserem Netzwerk."),e.default.createElement(u.default,null),e.default.createElement("p",{className:a.default.spacingAbove},"Ihr benötigt Unterstützung bei einer oder mehrerer dieser Technologien?"),e.default.createElement(r.ActionButton,{href:"#",label:"Kontaktiert uns per Mail!",caption:"Lasst uns einen Termin vereinbaren und über Eure Ideen sprechen."})),e.default.createElement(n.Section,{anchor:"contact"},e.default.createElement(t.Heading,null,"Wie erreicht man uns?"),e.default.createElement("p",null,"Wir sind ein Remote-Team und arbeiten von verschiedenen Orten aus - im Bedarfsfall auch bei Kunden vor Ort. Am besten erreicht Ihr uns per E-Mail oder via Telefon. Telefonisch sind wir in der Regel tagsüber erreichbar.",e.default.createElement("strong",null," Euer Ansprechpartner ist Jörn"),"."),e.default.createElement("div",{className:a.default.buttons},e.default.createElement(r.ActionButton,{href:"#",label:"Kontaktiert uns per Mail!",caption:"Schreibt uns am besten gleich ein paar Hintergrundinfos mit dazu."}),e.default.createElement(r.ActionButton,{href:"#",label:"Telefoniert mit uns!",caption:"Die Nummer ist +49 1522 2893 769 und geht ins Mobilfunknetz."}))),e.default.createElement(n.Section,null,e.default.createElement(t.Heading,null,"Partner"),e.default.createElement(s.default,null)))};c.displayName="Home";var o=c;exports.default=o;
},{"react":"ccIB","../../components/section":"r2Wv","../../components/heading":"bIjF","../../components/action-button":"YssS","../../components/box":"YFDy","./home.scss":"Uugj","../../service/use-title":"5CQU","../../components/technologies/technologies":"yERC","../../components/partner-grid/partner-grid":"NA46"}],"ARet":[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],"yU0Q":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"ARet"}],0:[function(require,module,exports) {
var b=require("yU0Q");b.load([]).then(function(){require("EOD9");});
},{}]},{},[0], null)
//# sourceMappingURL=/home.1994ca5e.map