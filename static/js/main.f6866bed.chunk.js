(this["webpackJsonpunit-converter"]=this["webpackJsonpunit-converter"]||[]).push([[0],{29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),o=t(15),c=t.n(o),a=t(18),s=t(17),u=t(9),l=t(2),d=t(1),h=[{categoryId:"length",categoryName:"Length",units:[{unitId:"meters",unitName:"Meters",conversionFactor:1},{unitId:"centimeters",unitName:"Centimeters",conversionFactor:100},{unitId:"inches",unitName:"Inches",conversionFactor:39.37}]}],v=function(e,n){var t=n.find((function(n){return n.unitId===e}));return t?t.conversionFactor:0};function f(){return Object(d.jsx)(u.a,{basename:"/unit-converter",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/",children:"Home"})}),h.map((function(e,n){return Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/"+e.categoryId,children:e.categoryName})},n)}))]}),Object(d.jsx)("hr",{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)("div",{children:"Home"})}),h.map((function(e,n){return Object(d.jsx)(l.a,{path:"/"+e.categoryId,children:Object(d.jsx)(g,{data:e})},n)}))]})]})})}var j=function(e){return Object(d.jsxs)("label",{children:[e.label,Object(d.jsx)("input",{type:"text",value:e.value,onChange:e.handleChange})]})},g=function(e){var n={};e.data.units.forEach((function(e){n[e.unitId]=""}));var t=Object(r.useState)(n),i=Object(s.a)(t,2),o=i[0],c=i[1];return Object(d.jsx)("div",{children:e.data.units.map((function(t,r){return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{label:t.unitName,value:o[t.unitId],id:t.unitId,handleChange:function(r){return function(t,r){console.log("onChange in ",t);var i=Object(a.a)({},n);if(r.target.value){var o=1/v(t,e.data.units)*Number.parseInt(r.target.value);for(var s in i)i[s]=s===t?r.target.value:Number(o*v(s,e.data.units)).toFixed(2).toString()}c(i)}(t.unitId,r)}}),Object(d.jsx)("br",{})]},r)}))})},b=(t(29),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),r(e),i(e),o(e),c(e)}))}),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/unit-converter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/unit-converter","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):m(n,e)}))}}(),b()}},[[30,1,2]]]);
//# sourceMappingURL=main.f6866bed.chunk.js.map