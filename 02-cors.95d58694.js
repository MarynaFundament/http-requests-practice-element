function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};document.querySelector(".js-holdersearch-form");const n=document.querySelector(".secondbtn-holdersprimary"),r=document.querySelector(".js-holder-container"),o=new class{fetchResult(){return fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${this.count}&_page=${this.page}`).then((e=>e.json()))}constructor(){e(t)(this,"page",1),e(t)(this,"count",2)}};function c(e){const t=e.map((({url:e,title:t,id:n})=>`<li>\n          <article>\n            <img src="${e}" alt="not found" width="480">\n            <h2>${t}</h2>\n            <p>ID ${n}</p>\n          </article>\n      </li>`));r.insertAdjacentHTML("beforeend",t)}o.fetchResult().then(c),n.addEventListener("click",(function(){o.page+=1,o.fetchResult().then(c)}));
//# sourceMappingURL=02-cors.95d58694.js.map
