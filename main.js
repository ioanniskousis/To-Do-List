!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){var o=t(3),r=t(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);n.exports=r.locals||{}},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},o=[],r=0;r<n.length;r++){var i=n[r],s=e.base?i[0]+e.base:i[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var p=c(l),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:l,updater:h(u,e),references:1}),o.push(l)}return o}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,p=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=p(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var b=null,g=0;function h(n,e){var t,o,r;if(e.singleton){var i=g++;t=b||(b=d(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=d(e),o=f.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=s(n,e),d=0;d<t.length;d++){var l=c(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),i=t(1),a=t.n(i),c=t(6),s=t(9),d=t(8),l=t(7),p=t(10),u=t(11),f=r()(!1),b=a()(c.a),g=a()(s.a),h=a()(d.a),v=a()(l.a),x=a()(p.a),m=a()(u.a);f.push([n.i,"* {\n  box-sizing: border-box;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n* ::-webkit-scrollbar {\n  display: none;\n}\n\nbody {\n  position: relative;\n  padding: 0;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #cee;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100vw;\n  height: 100vh;\n}\n\nmain {\n  background-color: rgba(255, 255, 255, 0.7);\n  margin: 10px auto;\n  width: 90%;\n  height: calc(100% - 20px);\n  border-radius: 6px;\n  border: 1px solid #ddd;\n  padding: 20px;\n  display: flex;\n}\n\n.topBar {\n  height: 60px;\n  padding: 0 20px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #ffc;\n}\n\n/* \ninput[type='button'] {\n  padding: 10px 30px;\n  border: 1px solid #ddd;\n  background-color: rgb(32, 128, 180);\n  border-radius: 4px;\n  font-size: large;\n  color: white;\n}\n\ninput[type='button']:hover {\n  background-color: rgb(50, 150, 200);\n}\n\ninput[type='button']:active {\n  color: white;\n  border: 1px solid #aaa;\n} */\n\n.button {\n  cursor: pointer;\n  display: inline-block;\n  padding: 10px 30px;\n  border: 1px solid #ddd;\n  background-color: rgb(32, 128, 180);\n  border-radius: 4px;\n  font-size: large;\n  color: white;\n}\n\n.button:hover {\n  background-color: rgb(50, 150, 200);\n}\n\n.button:active {\n  color: white;\n  border: 1px solid #aaa;\n}\n\n.backView {\n  transition: all 0.2s;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 0;\n  height: 0;\n  background-color: rgba(40, 80, 100, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n.inputContainer {\n  position: relative;\n  width: 50%;\n  height: 60%;\n  max-width: 600px;\n  max-height: 400px;\n  min-width: 400px;\n  min-height: 400px;\n  background-color: white;\n  overflow: hidden;\n  border-radius: 6px;\n}\n\n.inputContainer > h3 {\n  background-color: brown;\n  padding: 15px;\n  margin: 0 0 30px 0;\n  text-align: center;\n  font-weight: normal;\n  color: white;\n  font-size: large;\n}\n\n.inputContainer > label {\n  margin: 20px 11% 10px 11%;\n  font-size: large;\n  display: block;\n}\n\n.inputContainer > input[type='text'],\n.inputContainer > textarea {\n  margin: 10px auto;\n  padding: 10px;\n  font-size: large;\n  border: 1px solid #999;\n  border-radius: 4px;\n  width: 80%;\n  display: block;\n}\n\n.inputContainer > textarea {\n  height: 100px;\n  resize: none;\n}\n\n.inputContainer > .save {\n  display: block;\n  position: absolute;\n  bottom: 20px;\n  right: 10%;\n}\n\n.inputContainer > .delete {\n  display: block;\n  position: absolute;\n  bottom: 20px;\n  left: 10%;\n}\n\n.closeButton {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-image: url("+b+");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-position: center center;\n  cursor: pointer;\n}\n\n.closeButton:hover {\n  background-color: black;\n}\n\n.closeButton:active {\n  background-color: gray;\n}\n\n.projectRow {\n  display: flex;\n}\n\n.projectsSideBar {\n  position: relative;\n  border: 1px solid #cee;\n  border-radius: 4px;\n  flex: 1;\n  min-width: 200px;\n  padding: 60px 20px 20px 20px;\n  overflow: scroll;\n  background-color: white;\n}\n\n.projectsSideBarHeader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: rgba(32, 128, 180, 1);\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0 20px;\n  border-bottom: 1px solid #cee;\n}\n\n.projectsSideBarCaption {\n  font-size: x-large;\n  margin-right: 20px;\n  /* background-color: teal; */\n  flex: 1;\n  text-align: center;\n  color: white;\n}\n\n.addProjectButton {\n  width: 40px;\n  height: 40px;\n  background-image: url("+g+");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 32px 32px;\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.addProjectButton:hover {\n  background-image: url("+h+");\n}\n\n.projectsSideBarRow {\n  position: relative;\n  border-bottom: 1px solid #cee;\n  margin-bottom: 4px;\n  cursor: pointer;\n  color: #555;\n  background-repeat: no-repeat;\n  background-size: 20px;\n  background-position: right 10px center;\n}\n\n.projectsSideBarRow:hover {\n  color: brown;\n  background-image: url("+v+");\n}\n\n.projectRowTitle {\n  width: calc(100% - 40px);\n  padding: 10px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.projectRowEdit {\n  position: absolute;\n  right: 0;\n  top: calc(50% - 20px);\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n\n.projectRowEdit:hover {\n  background-color: rgba(100, 100, 100, 0.1);\n}\n\n.todosView {\n  position: relative;\n  display: block;\n  border: 1px solid #cee;\n  border-radius: 4px;\n  flex: 2;\n  min-width: 300px;\n  margin-left: 10px;\n  padding: 20px;\n  background-color: white;\n}\n\n.todosViewCaption {\n  position: relative;\n  border-bottom: 1px solid #cee;\n  margin-bottom: 4px;\n  color: #555;\n}\n\n.todosTable {\n  overflow: scroll;\n}\n\n.arrowLeft {\n  width: 60px;\n  height: 40px;\n  background-image: url("+x+");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 32px 32px;\n  position: absolute;\n  top: -20px;\n  left: -20px;\n  cursor: pointer;\n  border-radius: 50%;\n  visibility: hidden;\n  opacity: 0.5;\n}\n\n.arrowLeft:hover {\n  background-color: #ddd;\n}\n\n.addTodoButton {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 0px;\n  top: 10px;\n  background-image: url("+m+");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 32px 32px;\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.addTodoButton:hover {\n  background-image: url("+h+");\n}\n\n@media screen and (max-width: 768px) {\n  main {\n    flex-direction: column;\n  }\n\n  .projectsSideBar {\n    /* flex: auto; */\n  }\n\n  .todosView {\n    /* display: none; */\n    /* visibility: hidden; */\n    /* margin-left: 0;\n    margin-top: 10px;\n    flex: auto; */\n  }\n\n  .arrowLeft {\n    visibility: visible;\n  }\n}\n",""]),e.default=f},function(n,e,t){"use strict";t.r(e);t(2);function o(n){return document.getElementById(n)}function r(n){return document.createElement(n)}function i(n,e){n.appendChild(e)}var a=class{constructor(n,e,t,o){this.id=n,this.title=e,this.description=t,this.dateCreated=o}};function c(n){var e;(e=n).style.left="50%",e.style.top="50%",e.style.width="0",e.style.height="0",setTimeout(()=>{n.remove()},200)}function s(n,e){27===e.keyCode&&c(n)}function d(n,e,t,a){const d=r("div");d.className="inputContainer",i(n,d);const l=r("h3");l.textContent=a?"Edit Project":"Define New Project",i(d,l),function(n,e,t){const o=r("label");o.textContent="Title",o.setAttribute("for","projectTitle"),i(e,o);const a=r("input");a.setAttribute("type","text"),a.setAttribute("id","projectTitle"),a.setAttribute("autofocus","true"),t&&(a.value=t.title),i(e,a),a.addEventListener("keypress",e=>{s(n,e)})}(n,d,a),function(n,e,t){const o=r("label");o.textContent="Description",o.setAttribute("for","projectDescription"),i(e,o);const a=r("textarea");a.setAttribute("id","projectDescription"),t&&(a.value=t.description),i(e,a),a.addEventListener("keypress",e=>{s(n,e)})}(n,d,a);const p=r("div");if(p.className="button save",p.textContent="Save",i(d,p),p.addEventListener("click",()=>{const r=o("projectTitle").value.trim(),i=o("projectDescription").value.trim();t(r,i,e,a)&&c(n)}),a){const t=r("div");t.className="button delete",t.textContent="Delete Project",i(d,t),t.addEventListener("click",()=>{confirm("Delete project ".concat(a.title))&&(e("delete",[a.id]),c(n))})}}var l=function(n,e,t){const o=r("div");o.className="backView",i(document.body,o),o.setAttribute("tabindex","0"),o.addEventListener("keypress",n=>{s(o,n)});const a=r("div");var l;a.className="closeButton",i(o,a),a.addEventListener("click",()=>{c(o)}),d(o,n,e,t),(l=o).style.left="0",l.style.top="0",l.style.width="100%",l.style.height="100%"};function p(n,e){return e.dateCreated-n.dateCreated}var u=function(n,e){const t=o("projectsSideBar");t.innerHTML="";const a=r("div");a.className="projectsSideBarHeader";const c=r("div");c.className=" projectsSideBarCaption",c.textContent="Projects",i(a,c);const s=r("div");s.className="addProjectButton",i(a,s),s.addEventListener("click",()=>{n("newProject")}),i(t,a),e.projects.sort(p).forEach(e=>{!function(n,e,t){const o=r("div");o.className="projectsSideBarRow";const a=r("div");a.className="projectRowTitle",a.textContent=e.title,a.addEventListener("click",()=>{t("show",[e])}),i(o,a);const c=r("div");c.className="projectRowEdit",c.addEventListener("click",()=>{t("edit",[e])}),i(o,c),i(n,o)}(t,e,n)})};function f(n,e,t,o){return n.length>0?(o?t("update",[o.id,n,e]):t("create",[n,e]),!0):(alert("Project Title can not be empty"),!1)}var b=function(n,e,t){switch(n){case"newProject":!function(n){l(n,f)}(e);break;case"viewProjects":alert("projectsController: viewProjects");break;case"sideBar":u(e,t);break;case"edit":!function(n,e){l(n,f,e)}(e,t)}};var g=function(n,e){const t=o("todosView");t.innerHTML="";const a=r("div");a.className="arrowLeft",a.addEventListener("click",()=>{o("projectsSideBar").style.display="block",t.style.display="none"}),i(t,a),function(n,e,t){const a=r("div");a.className="todosViewCaption",0===e.offsetTop&&(o("projectsSideBar").style.display="none",e.style.display="block");const c=r("div");c.className="projectRowTitle",c.style.color="brown",c.textContent=t.title,i(a,c);const s=r("div");s.className="projectRowTitle",s.textContent=t.description,i(a,s);const d=r("div");d.className="addTodoButton",i(a,d),d.addEventListener("click",()=>{n("create",[t])}),i(e,a)}(n,t,e)};var h=function(n,e,t){switch(n){case"show":g(e,t)}};const v=(()=>{const n=[],e=()=>{localStorage.setItem("todolist-projectsDB",JSON.stringify(n))},t=()=>0===n.length?1:n[n.length-1].id+1,o=t=>{n.push(t),e()},r=()=>{const e=JSON.parse(localStorage.getItem("todolist-projectsDB"));e&&e.forEach(e=>{n.push(new a(e.id,e.title,e.description,e.dateCreated))})},i=e=>{for(let t=0;t<n.length;t+=1){if(n[t].id===e)return t}return-1};return r(),{projects:n,length:()=>n.length,load:r,add:o,create:n=>{const e=n[0],r=n[1],i=Date.now();o(new a(t(),e,r,i))},update:t=>{const o=i(t[0]);return-1!==o&&(n[o].title=t[1],n[o].description=t[2],n[o].dateCreated=Date.now(),e(),!0)},remove:t=>{const o=i(t);return-1!==o&&(n.splice(o,1),e(),!0)},newID:t}})();function x(n,e){switch(n){case"create":alert("create Todo for : "+e[0].title)}}function m(){window.innerWidth>768?(o("projectsSideBar").style.display="block",o("todosView").style.display="block"):(o("projectsSideBar").style.display="block",o("todosView").style.display="none")}!function(){const n=r("main");n.id="main";const e=r("div");e.id="projectsSideBar",e.className="projectsSideBar";const t=r("div");t.id="todosView",t.className="todosView",i(n,e),i(n,t),i(document.body,n)}(),b("sideBar",(function n(e,t){switch(e){case"create":v.create(t),b("sideBar",n,v);break;case"update":v.update(t),b("sideBar",n,v);break;case"edit":b(e,n,t[0]);break;case"delete":v.remove(t[0]),b("sideBar",n,v);break;case"show":h(e,x,t[0]);break;case"newProject":b(e,n)}}),v),window.addEventListener("resize",()=>{m()}),window.addEventListener("load",()=>{m()})},function(n,e,t){"use strict";e.a=t.p+"9b846054b437b085937a28436e290995.png"},function(n,e,t){"use strict";e.a=t.p+"d8a6665d0204793c1099331086e7fcaa.png"},function(n,e,t){"use strict";e.a=t.p+"598fcb1dcea07aba87632886c72de02e.png"},function(n,e,t){"use strict";e.a=t.p+"6a323b250f68a0de113c75e15b3b559d.png"},function(n,e,t){"use strict";e.a=t.p+"f4cdbea64157e60fe74985a2d030d190.png"},function(n,e,t){"use strict";e.a=t.p+"11d2818abc931741d2a6ba120d1b1450.png"}]);