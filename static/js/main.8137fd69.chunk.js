(this["webpackJsonpunit-converter"]=this["webpackJsonpunit-converter"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(13),r=n.n(a),c=n(27),s=n(15),u=n(4),l=n(11),d=[{categoryId:"length",categoryName:"Length",categoryIcon:l.e,units:[{unitId:"meters",unitName:"Meters",conversionFactor:1},{unitId:"centimeters",unitName:"Centimeters",conversionFactor:100},{unitId:"miles",unitName:"Miles",conversionFactor:621371e-9},{unitId:"feet",unitName:"Feet",conversionFactor:3.281},{unitId:"yard",unitName:"Yards",conversionFactor:1.094},{unitId:"inches",unitName:"Inches",conversionFactor:39.370078740157}]},{categoryId:"mass",categoryName:"Mass",categoryIcon:l.f,units:[{unitId:"kilograms",unitName:"Kilograms",conversionFactor:1},{unitId:"grams",unitName:"Grams",conversionFactor:1e3},{unitId:"pounds",unitName:"Pounds",conversionFactor:2.20462},{unitId:"ounce",unitName:"Ounces",conversionFactor:35.274}]},{categoryId:"volume",categoryName:"Volume",categoryIcon:l.d,units:[{unitId:"liters",unitName:"Liters",conversionFactor:1},{unitId:"gallons",unitName:"Gallons",conversionFactor:.264172},{unitId:"quart",unitName:"Quarts",conversionFactor:1.05669},{unitId:"pint",unitName:"Pints",conversionFactor:2.11338},{unitId:"cup",unitName:"Cups",conversionFactor:4.16667},{unitId:"ounce",unitName:"Ounces",conversionFactor:33.814}]}],j=n(12),h=n(16),v=n(1),m=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("hr",{className:"mb-1"}),Object(v.jsx)("div",{className:"d-flex justify-content-center fs-4",children:Object(v.jsx)("a",{href:"https://github.com/tg2648/unit-converter",rel:"noreferrer",target:"_blank",children:Object(v.jsx)(l.c,{})})})]})},g=function(){return Object(v.jsxs)("div",{className:"mt-2 col-sm-6 col-lg-4 mx-auto",children:[Object(v.jsxs)("div",{className:"d-grid gap-2",children:[Object(v.jsx)("h1",{className:"display-5",children:"Unit Converter"}),d.map((function(e,t){return Object(v.jsx)(h.LinkContainer,{to:"/"+e.categoryId,children:Object(v.jsx)(j.a,{variant:"primary",size:"lg",children:Object(v.jsxs)("div",{className:"row justify-content-center",children:[Object(v.jsx)("div",{className:"col-sm-auto",children:Object(v.jsx)(e.categoryIcon,{})}),Object(v.jsx)("div",{className:"col-4 text-sm-start",children:e.categoryName})]})})},t)}))]}),Object(v.jsx)(m,{})]})},f=n(17),b=n(22),x=n(29),p=n(28),O=n(26),N=function(e){return Object(v.jsxs)(O.a,{children:[Object(v.jsx)(p.a,{id:e.id,inputMode:"decimal",value:e.value,onChange:e.handleChange}),Object(v.jsx)(j.a,{variant:"outline-primary",onClick:e.handleCopy,children:Object(v.jsx)(l.b,{})})]})},y=function(e,t){var n=t.find((function(t){return t.unitId===e}));return n?n.conversionFactor:0},I=function(e){var t={};e.data.units.forEach((function(e){t[e.unitId]={numValue:void 0,displayValue:""}}));var n=Object(o.useState)(t),i=Object(f.a)(n,2),a=i[0],r=i[1];return Object(v.jsx)(v.Fragment,{children:e.data.units.map((function(n,o){return Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:n.unitId,className:"col-4 fs-5",children:n.unitName}),Object(v.jsx)("div",{className:"col-8",children:Object(v.jsx)(N,{value:a[n.unitId].displayValue,id:n.unitId,handleChange:function(o){return function(n,o){var i=Object(x.a)({},t),a=Number(o.target.value.replaceAll(",","")),c=a.toLocaleString();if("."===o.target.value[o.target.value.length-1]&&(c+="."),o.target.value){var s=1/y(n,e.data.units)*a;for(var u in i)if(u===n)i[u].numValue=a,i[u].displayValue=c;else{var l=s*y(u,e.data.units);i[u].numValue=l,i[u].displayValue=l.toLocaleString()}}r(i)}(n.unitId,o)},handleCopy:function(t){return function(t,n){var o=a[t].numValue;if(o){var i=o%10?parseFloat(o.toFixed(3)).toString():o.toFixed(0).toString();navigator.clipboard.writeText(i).then((function(){console.log("Copied to clipboard!"),e.showToast()}),(function(e){console.log("Copy failed: ",e)}))}}(n.unitId)}})})]},o)}))})},w=function(e){var t=Object(o.useState)(!1),n=Object(f.a)(t,2),i=n[0],a=n[1];return Object(v.jsxs)("div",{className:"mt-2 d-grid gap-2 col-lg-5 mx-auto",children:[Object(v.jsx)(h.LinkContainer,{exact:!0,to:"/",children:Object(v.jsxs)(j.a,{variant:"primary",size:"lg",children:[Object(v.jsx)(l.a,{})," ","Back"]})}),Object(v.jsx)(I,{data:e.data,showToast:function(){return a(!0)}}),Object(v.jsx)("div",{style:{position:"absolute",bottom:10,left:"50%",transform:"translateX(-50%)"},children:Object(v.jsx)(b.a,{show:i,onClose:function(){return a(!1)},autohide:!0,delay:1500,className:"bg-success text-white",children:Object(v.jsx)(b.a.Body,{children:"Copied to clipboard"})})})]})};function F(){return Object(v.jsx)(c.a,{children:Object(v.jsx)(s.BrowserRouter,{basename:"/unit-converter",children:Object(v.jsxs)(u.g,{children:[Object(v.jsx)(u.d,{exact:!0,path:"/",children:Object(v.jsx)(g,{})}),d.map((function(e,t){return Object(v.jsx)(u.d,{path:"/"+e.categoryId,children:Object(v.jsx)(w,{data:e})},t)}))]})})})}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),a(e),r(e)}))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(44);r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/unit-converter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/unit-converter","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):S(t,e)}))}}(),k()}},[[45,1,2]]]);
//# sourceMappingURL=main.8137fd69.chunk.js.map