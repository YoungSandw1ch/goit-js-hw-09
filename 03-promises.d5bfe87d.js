!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var i=o("h6c0i");function r(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3&&n({position:e,delay:t}),o({position:e,delay:t})}),t)}))}function a(e){var t=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"),{timeout:5e3})}function u(e){var t=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"),{timeout:5e3})}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var t=+e.target.delay.value,n=+e.target.step.value,o=+e.target.amount.value,i=1;i<=o;i+=1)1!==i&&(t+=n),r(i,t).then(a).catch(u)}))}();
//# sourceMappingURL=03-promises.d5bfe87d.js.map
