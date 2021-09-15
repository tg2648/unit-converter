(this["webpackJsonpunit-converter"]=this["webpackJsonpunit-converter"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(13),a=n.n(r),c=n(27),s=n(15),l=n(4),u=n(11),d=[{categoryId:"length",categoryName:"Length",categoryIcon:u.e,units:[{unitId:"kilometers",unitName:"Kilometers",conversionFactor:.001},{unitId:"meters",unitName:"Meters",conversionFactor:1},{unitId:"centimeters",unitName:"Centimeters",conversionFactor:100},{unitId:"millimeters",unitName:"Millimeters",conversionFactor:1e3},{unitId:"miles",unitName:"Miles",conversionFactor:621371e-9},{unitId:"feet",unitName:"Feet",conversionFactor:3.281},{unitId:"yard",unitName:"Yards",conversionFactor:1.094},{unitId:"inches",unitName:"Inches",conversionFactor:39.370078740157}]},{categoryId:"mass",categoryName:"Mass",categoryIcon:u.f,units:[{unitId:"kilograms",unitName:"Kilograms",conversionFactor:1},{unitId:"grams",unitName:"Grams",conversionFactor:1e3},{unitId:"pounds",unitName:"Pounds",conversionFactor:2.20462},{unitId:"ounce",unitName:"Ounces",conversionFactor:35.274}]},{categoryId:"volume",categoryName:"Volume",categoryIcon:u.d,units:[{unitId:"liters",unitName:"Liters",conversionFactor:1},{unitId:"milliliter",unitName:"Milliliter",conversionFactor:1e3},{unitId:"gallons",unitName:"Gallons",conversionFactor:.264172},{unitId:"quart",unitName:"Quarts",conversionFactor:1.05669},{unitId:"pint",unitName:"Pints",conversionFactor:2.11338},{unitId:"cup",unitName:"Cups",conversionFactor:4.22675},{unitId:"ounce",unitName:"Ounces",conversionFactor:33.814}]}],j=n(12),m=n(16),h=n(1),v=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("hr",{className:"mb-1"}),Object(h.jsx)("div",{className:"d-flex justify-content-center fs-4",children:Object(h.jsx)("a",{href:"https://github.com/tg2648/unit-converter",rel:"noreferrer",target:"_blank",children:Object(h.jsx)(u.c,{})})})]})},g=function(){return Object(h.jsxs)("div",{className:"mt-2 col-sm-6 col-lg-4 mx-auto",children:[Object(h.jsxs)("div",{className:"d-grid gap-2",children:[Object(h.jsx)("h1",{className:"display-5",children:"Unit Converter"}),d.map((function(e,t){return Object(h.jsx)(m.LinkContainer,{to:"/"+e.categoryId,children:Object(h.jsx)(j.a,{variant:"primary",size:"lg",children:Object(h.jsxs)("div",{className:"row justify-content-center",children:[Object(h.jsx)("div",{className:"col-sm-auto",children:Object(h.jsx)(e.categoryIcon,{})}),Object(h.jsx)("div",{className:"col-4 text-sm-start",children:e.categoryName})]})})},t)}))]}),Object(h.jsx)(v,{})]})},f=n(17),b=n(22),x=n(29),p=n(28),O=n(26),N=function(e){return Object(h.jsxs)(O.a,{children:[Object(h.jsx)(p.a,{id:e.id,inputMode:"decimal",value:e.value,onChange:e.handleChange}),Object(h.jsx)(j.a,{variant:"outline-primary",onClick:e.handleCopy,children:Object(h.jsx)(u.b,{})})]})},I=function(e,t){var n=t.find((function(t){return t.unitId===e}));return n?n.conversionFactor:0},y=function(e){var t={};e.data.units.forEach((function(e){t[e.unitId]={numValue:void 0,displayValue:""}}));var n=Object(i.useState)(t),o=Object(f.a)(n,2),r=o[0],a=o[1];return Object(h.jsx)(h.Fragment,{children:e.data.units.map((function(n,i){return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("label",{htmlFor:n.unitId,className:"col-4 fs-5",children:n.unitName}),Object(h.jsx)("div",{className:"col-8",children:Object(h.jsx)(N,{value:r[n.unitId].displayValue,id:n.unitId,handleChange:function(i){return function(n,i){var o=Object(x.a)({},t),r=Number(i.target.value.replaceAll(",","")),c=r.toLocaleString();if("."===i.target.value[i.target.value.length-1]&&(c+="."),i.target.value){var s=1/I(n,e.data.units)*r;for(var l in o)if(l===n)o[l].numValue=r,o[l].displayValue=c;else{var u=s*I(l,e.data.units);o[l].numValue=u,o[l].displayValue=u.toLocaleString()}}a(o)}(n.unitId,i)},handleCopy:function(t){return function(t,n){var i=r[t].numValue;if(i){var o=i%10?parseFloat(i.toFixed(3)).toString():i.toFixed(0).toString();navigator.clipboard.writeText(o).then((function(){console.log("Copied to clipboard!"),e.showToast()}),(function(e){console.log("Copy failed: ",e)}))}}(n.unitId)}})})]},i)}))})},w=function(e){var t=Object(i.useState)(!1),n=Object(f.a)(t,2),o=n[0],r=n[1];return Object(h.jsxs)("div",{className:"mt-2 d-grid gap-2 col-lg-5 mx-auto",children:[Object(h.jsx)(m.LinkContainer,{exact:!0,to:"/",children:Object(h.jsxs)(j.a,{variant:"primary",size:"lg",children:[Object(h.jsx)(u.a,{})," ","Back"]})}),Object(h.jsx)(y,{data:e.data,showToast:function(){return r(!0)}}),Object(h.jsx)("div",{style:{position:"absolute",bottom:10,left:"50%",transform:"translateX(-50%)"},children:Object(h.jsx)(b.a,{show:o,onClose:function(){return r(!1)},autohide:!0,delay:1500,className:"bg-success text-white",children:Object(h.jsx)(b.a.Body,{children:"Copied to clipboard"})})})]})};function F(){return Object(h.jsx)(c.a,{children:Object(h.jsx)(s.BrowserRouter,{basename:"/unit-converter",children:Object(h.jsxs)(l.g,{children:[Object(h.jsx)(l.d,{exact:!0,path:"/",children:Object(h.jsx)(g,{})}),d.map((function(e,t){return Object(h.jsx)(l.d,{path:"/"+e.categoryId,children:Object(h.jsx)(w,{data:e})},t)}))]})})})}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),r(e),a(e)}))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(44);a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/unit-converter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/unit-converter","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):S(t,e)}))}}(),k()}},[[45,1,2]]]);
//# sourceMappingURL=main.3ea5f0f7.chunk.js.map