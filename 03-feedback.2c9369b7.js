!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},r=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},o=document.querySelector(".feedback-form"),i="feedback-form-state",a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,g=v||m||Function("return this")(),y=Object.prototype.toString,p=Math.max,b=Math.min,h=function(){return g.Date.now()};function S(e,t,n){var r,o,i,a,l,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function m(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function g(e){return c=e,l=setTimeout(S,t),s?m(e):a}function y(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function S(){var e=h();if(y(e))return O(e);l=setTimeout(S,function(e){var n=t-(e-f);return d?b(n,i-(e-c)):n}(e))}function O(e){return l=void 0,v&&r?m(e):(r=o=void 0,a)}function w(){var e=h(),n=y(e);if(r=arguments,o=this,f=e,n){if(void 0===l)return g(f);if(d)return l=setTimeout(S,t),m(f)}return void 0===l&&(l=setTimeout(S,t)),a}return t=j(t)||0,T(n)&&(s=!!n.leading,i=(d="maxWait"in n)?p(j(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=o=l=void 0},w.flush=function(){return void 0===l?a:O(h())},w}function T(e){var n=void 0===e?"undefined":t(a)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(a)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(T(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=T(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var r=c.test(e);return r||s.test(e)?d(e.slice(2),r?2:8):f.test(e)?NaN:+e}var O,w,x,N,E,I=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(u);return T(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,maxWait:t,trailing:o})}((function(e){var t=e.currentTarget.elements,r=t.email,o=t.message;n(i,{email:r.value,message:o.value})}),500,{trailing:!1});o.addEventListener("input",I),o.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message;if(""===n.value||""===r.value)return console.log("Please fill in all the fields!");console.log("email: ".concat(n.value,", message: ").concat(r.value)),o=i,localStorage.removeItem(o),e.currentTarget.reset();var o})),O=document.querySelector("input"),w=document.querySelector("textarea"),x=r(i),N=x.email,E=x.message,O.value=N,w.value=E}();
//# sourceMappingURL=03-feedback.2c9369b7.js.map
