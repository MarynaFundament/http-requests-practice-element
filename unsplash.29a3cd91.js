!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var u={id:e,exports:{}};return r[e]=u,t.call(u.exports,u,u.exports),u.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=u),u.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),u.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),u.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),u.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){var r=l.default(e,t,"get");return i.default(e,r)};var l=s(u("1UHsN")),i=s(u("ffZzF"));function s(e){return e&&e.__esModule?e:{default:e}}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,r){d.default(e,t),t.set(e,r)};var f,d=(f=u("5k7tO"))&&f.__esModule?f:{default:f};var p={};function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,r){t&&h(e.prototype,t);r&&h(e,r);return e};var v=u("hKHmD"),_=new WeakMap,y=new WeakMap,g=function(){"use strict";function t(){e(a)(this,t),e(c)(this,_,{writable:!0,value:"oWleK0zt6aVNxCPl4-jOES6fzc_KJruN8fKwFnBBUrw"}),e(c)(this,y,{writable:!0,value:"https://api.unsplash.com"}),e(v)(this,"query",null),e(v)(this,"page",10),e(v)(this,"per_page",10)}return e(p)(t,[{key:"fetchFunc",value:function(){var t=new URLSearchParams({query:this.query,page:this.page,client_id:e(o)(this,_)});return fetch("".concat(e(o)(this,y),"/search/photos?").concat(t,"&").concat(this.per_page)).then((function(e){return e.json()})).catch((function(e){return console.error(e)}))}}]),t}(),b=document.querySelector(".js-search-unsplashform"),m=(document.querySelector(".js-search-unsplashinput"),document.querySelector(".search-unsplashbtn"),document.querySelector(".unsplash_wrapper")),w=new g;function O(e){console.log(e);var t=e.results,r="";t.forEach((function(e){var t=e.urls,n=e.alt_description,u="<li class='gallery_item'>\n            <img src=\"".concat(t.small,'" alt="').concat(n,'">\n        </li>');r+=u})),m.innerHTML=r}b.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.search_result.value.trim();console.log(t),w.query=e.target.elements.search_result.value.trim(),w.fetchFunc().then(O)}))}();
//# sourceMappingURL=unsplash.29a3cd91.js.map
