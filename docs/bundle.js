(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]),i.push([r.id,"* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n}\r\n\r\n.heading {\r\n  margin-bottom: 5rem;\r\n  margin-left: 2rem;\r\n  margin-top: 2rem;\r\n  font-size: 2rem;\r\n}\r\n\r\n.scores {\r\n  flex: 1;\r\n  width: 10vw;\r\n  margin-left: 50px;\r\n  margin-right: 50px;\r\n}\r\n\r\nh1,\r\nh2 {\r\n  font-family: 'Comic Neue', sans-serif;\r\n}\r\n\r\n.inputs {\r\n  flex: 1;\r\n  margin-left: 10rem;\r\n  margin-right: 10rem;\r\n}\r\n\r\n.flex-container {\r\n  display: flex;\r\n}\r\n\r\n.scores-head {\r\n  justify-content: space-between;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.scores-head-button {\r\n  border: 4px solid black;\r\n}\r\n\r\n.inputs-head {\r\n  margin-bottom: 1.5rem;\r\n  padding-left: 2rem;\r\n}\r\n\r\n.inputs-name {\r\n  margin-bottom: 1.5rem;\r\n  padding-left: 2rem;\r\n  width: 10px;\r\n}\r\n\r\n.solid-border {\r\n  border: 2px solid black;\r\n}\r\n\r\n.inputs-score {\r\n  margin-bottom: 1.5rem;\r\n  padding-left: 2rem;\r\n  width: 10px;\r\n}\r\n\r\n.inputs-button {\r\n  margin-top: 1.5rem;\r\n  text-align: right;\r\n  padding-right: 7.5rem;\r\n}\r\n\r\n.scores-body {\r\n  align-items: flex-start;\r\n}\r\n\r\n.scores-body .flex-container {\r\n  flex-direction: column;\r\n}\r\n\r\n.scores-body > ul > li {\r\n  list-style: none;\r\n  text-align: start;\r\n}\r\n\r\n.scores-body > ul {\r\n  align-items: flex-start;\r\n}\r\n",""]);const s=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],s=0;s<r.length;s++){var c=r[s],l=t.base?c[0]+t.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=e(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,t);t.byIndex=s,n.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var s=e(a[i]);n[s].references--}for(var c=t(r,o),l=0;l<a.length;l++){var d=e(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),a=e(569),i=e.n(a),s=e(565),c=e.n(s),l=e(216),d=e.n(l),u=e(589),p=e.n(u),m=e(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.querySelector(".scores-body ul"),v=[{name:"Sumair",score:100},{name:"John",score:200},{name:"Allen",score:123},{name:"Alice",score:140},{name:"Rodger",score:65}];window.addEventListener("DOMContentLoaded",(()=>{v.forEach((r=>{const n=document.createElement("li");n.innerHTML=` <li>\n  <p>${r.name}: ${r.score}</p>\n</li>`,h.appendChild(n)}))}))})()})();