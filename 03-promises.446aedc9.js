!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("iU1Pc");function i(e,o){var n=Math.random()>.3,t={position:e,delay:o};return new Promise((function(e,o){n&&e(t),o(t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();var o=Number(e.currentTarget.delay.value),n=Number(e.currentTarget.step.value),t=Number(e.currentTarget.amount.value);console.log("delay",o),console.log("step",n),console.log("amount",t);for(var u=1;u<=t;u+=1)i(u,o).then((function(e){var o=e.position,n=e.delay;setTimeout((function(){r.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"),{useIcon:!1})}),n)})).catch((function(e){var o=e.position,n=e.delay;setTimeout((function(){r.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"),{useIcon:!1})}),n)})),o+=n}))}();
//# sourceMappingURL=03-promises.446aedc9.js.map
