(this["webpackJsonpunit-converter"]=this["webpackJsonpunit-converter"]||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),o=t(21),a=t.n(o),c=t(18),s=t(23),u=t(10),l=t(15),d=t(11),g=t(3),h=[{categoryId:"length",categoryName:"Length",categoryIcon:u.b,units:[{unitId:"meters",unitName:"Meters",conversionFactor:1},{unitId:"centimeters",unitName:"Centimeters",conversionFactor:100},{unitId:"inches",unitName:"Inches",conversionFactor:39.37}]},{categoryId:"weight",categoryName:"Weight",categoryIcon:u.c,units:[{unitId:"kilograms",unitName:"Kilograms",conversionFactor:1},{unitId:"grams",unitName:"Grams",conversionFactor:1e3},{unitId:"pounds",unitName:"Pounds",conversionFactor:2.205}]}],v=t(25),j=t(24),f=t(1),m=function(e){return Object(f.jsx)("input",{type:"text",className:"form-control",value:e.value,onChange:e.handleChange})},b=function(e,n){var t=n.find((function(n){return n.unitId===e}));return t?t.conversionFactor:0},p=function(e){var n={};e.data.units.forEach((function(e){n[e.unitId]=""}));var t=Object(r.useState)(n),i=Object(j.a)(t,2),o=i[0],a=i[1];return Object(f.jsx)(f.Fragment,{children:e.data.units.map((function(t,r){return Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-4 fs-5",children:t.unitName}),Object(f.jsx)("div",{className:"col-8",children:Object(f.jsx)(m,{label:t.unitName,value:o[t.unitId],id:t.unitId,handleChange:function(r){return function(t,r){var i=Object(v.a)({},n);if(r.target.value){var o=1/b(t,e.data.units)*Number.parseInt(r.target.value);for(var c in i)i[c]=c===t?r.target.value:Number(o*b(c,e.data.units)).toFixed(2).toString()}a(i)}(t.unitId,r)}})})]},r)}))})};function x(){return Object(f.jsx)(s.a,{children:Object(f.jsx)(d.BrowserRouter,{basename:"/unit-converter",children:Object(f.jsxs)(g.g,{children:[Object(f.jsx)(g.d,{exact:!0,path:"/",children:Object(f.jsxs)("div",{className:"d-grid gap-2 col-lg-5 mx-auto",children:[Object(f.jsx)("h1",{className:"display-5",children:"Unit Converter"}),h.map((function(e,n){return Object(f.jsx)(l.LinkContainer,{to:"/"+e.categoryId,children:Object(f.jsxs)(c.a,{variant:"primary",size:"lg",children:[Object(f.jsx)(e.categoryIcon,{})," ",e.categoryName]})},n)}))]})}),h.map((function(e,n){return Object(f.jsx)(g.d,{path:"/"+e.categoryId,children:Object(f.jsxs)("div",{className:"d-grid gap-2 col-lg-5 mx-auto",children:[Object(f.jsx)(l.LinkContainer,{to:"/",children:Object(f.jsxs)(c.a,{variant:"primary",size:"lg",children:[Object(f.jsx)(u.a,{})," ","Back"]})}),Object(f.jsx)(p,{data:e})]})},n)}))]})})})}var w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),o(e),a(e)}))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(37);a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/unit-converter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/unit-converter","/service-worker.js");O?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):I(n,e)}))}}(),w()}},[[38,1,2]]]);
//# sourceMappingURL=main.ed158275.chunk.js.map