var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("eWCmQ");function i(e,o){const t=Math.random()>.3,n={position:e,delay:o};return new Promise(((e,o)=>{t&&e(n),o(n)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();let o=Number(e.currentTarget.delay.value);const t=Number(e.currentTarget.step.value),n=Number(e.currentTarget.amount.value);console.log("delay",o),console.log("step",t),console.log("amount",n);for(let e=1;e<=n;e+=1)i(e,o).then((({position:e,delay:o})=>{setTimeout((()=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`,{useIcon:!1})}),o)})).catch((({position:e,delay:o})=>{setTimeout((()=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`,{useIcon:!1})}),o)})),o+=t}));
//# sourceMappingURL=03-promises.afd5a5ae.js.map
