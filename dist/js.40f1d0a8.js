parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"t4Ap":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=["2 * 1","2 * 2","2 * 3","2 * 4","2 * 5","2 * 6","2 * 7","2 * 8","2 * 9","2 * 10","2 * 11","2 * 12","3 * 1","3 * 2","3 * 3","3 * 4","3 * 5","3 * 6","3 * 7","3 * 8","3 * 9","3 * 10","3 * 11","3 * 12","4 * 1","4 * 2","4 * 3","4 * 4","4 * 5","4 * 6","4 * 7","4 * 8","4 * 9","4 * 10","4 * 11","4 * 12","5 * 1","5 * 2","5 * 3","5 * 4","5 * 5","5 * 6","5 * 7","5 * 8","5 * 9","5 * 10","5 * 11","5 * 12","6 * 1","6 * 2","6 * 3","6 * 4","6 * 5","6 * 6","6 * 7","6 * 8","6 * 9","6 * 10","6 * 11","6 * 12","7 * 1","7 * 2","7 * 3","7 * 4","7 * 5","7 * 6","7 * 7","7 * 8","7 * 9","7 * 10","7 * 11","7 * 12","8 * 1","8 * 2","8 * 3","8 * 4","8 * 5","8 * 6","8 * 7","8 * 8","8 * 9","8 * 10","8 * 11","8 * 12","9 * 1","9 * 2","9 * 3","9 * 4","9 * 5","9 * 6","9 * 7","9 * 8","9 * 9","9 * 10","9 * 11","9 * 12","10 * 1","10 * 2","10 * 3","10 * 4","10 * 5","10 * 6","10 * 7","10 * 8","10 * 9","10 * 10","10 * 11","10 * 12","11 * 1","11 * 2","11 * 3","11 * 4","11 * 5","11 * 6","11 * 7","11 * 8","11 * 9","11 * 10","11 * 11","11 * 12","12 * 1","12 * 2","12 * 3","12 * 4","12 * 5","12 * 6","12 * 7","12 * 8","12 * 9","12 * 10","12 * 11","12 * 12","0 * 1","0 * 2","0 * 3","0 * 4","0 * 5","0 * 6","0 * 7","0 * 8","0 * 9","0 * 10","0 * 11","0 * 12","1 * 1","1 * 2","1 * 3","1 * 4","1 * 5","1 * 6","1 * 7","1 * 8","1 * 9","1 * 10","1 * 11","1 * 12"];
},{}],"QIc9":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("../lib/multiplicationsArr")),r=function(){function e(){}return Object.defineProperty(e,"randomExpression",{get:function(){return t.default[Math.ceil(Math.random()*t.default.length)]},enumerable:!0,configurable:!0}),e}();exports.default=r;
},{"../lib/multiplicationsArr":"t4Ap"}],"noHZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Calculator=function(){function Calculator(){}return Calculator.calculateFromString=function(string){return eval(string)},Calculator}();exports.default=Calculator;
},{}],"q9Vc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e){var t=e.container,o=e.onClose;this.container=t,this.modal=null,this.onClose=o}return e.prototype.generete=function(e){var t,o=document.createElement("div");o.classList.add("modal-container"),null===(t=document.querySelector(this.container))||void 0===t||t.appendChild(o),o.appendChild(e),this.modal=o},e.prototype.close=function(){this.modal&&(this.modal.remove(),this.onClose())},e}();exports.default=e;
},{}],"taep":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t){var o=t.onCount,n=t.duration,e=t.onComplete;this.onCount=o,this.duration=n,this.currentCount=this.duration,this.time="",this.interval=0,this.onComplete=e}return t.prototype.start=function(){var t=this;this.interval=setInterval(function(){t.currentCount-=1,t.time=t.secondsToHms(t.currentCount),t.onCount(t.time),0===t.currentCount&&t.stop()},1e3)},t.prototype.stop=function(){this.onComplete(),clearInterval(this.interval)},t.prototype.secondsToHms=function(t){var o=Math.floor(t/3600),n=Math.floor(t%3600/60);t=Math.floor(t%3600%60);return o?o+":"+n+":"+(t<10?"0"+t:t)+":":n+":"+(t<10?"0"+t:t)},t}();exports.default=t;
},{}],"vbti":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e){var t=e.by,r=e.onIncrement;this.score=0,this.by=t,this.onIncrement=r}return Object.defineProperty(e,"bestScore",{get:function(){var e=localStorage.getItem("bestScore");return e?+e:0},enumerable:!0,configurable:!0}),e.prototype.setBestScore=function(){localStorage.setItem("bestScore",JSON.stringify(this.score))},e.prototype.reset=function(){this.score=0},e.prototype.increment=function(){this.score+=this.by,this.onIncrement(this.score)},e}();exports.default=e;
},{}],"YN0T":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t){var e=t.text,n=t.buttonText,o=t.onClose;this.text=e,this.buttonText=n,this.onClose=o}return t.prototype.generate=function(){var t=document.createElement("h2"),e=document.createElement("button"),n=new DocumentFragment;return t.textContent=this.text,e.textContent=this.buttonText,n.appendChild(t),n.appendChild(e),e.addEventListener("click",this.onClose),n},t}();exports.default=t;
},{}],"Rgmk":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./models/Trainer")),n=e(require("./models/Calculator")),r=e(require("./models/Modal")),o=e(require("./models/Timer")),u=e(require("./models/Score")),l=e(require("./models/GameModal")),i=!1,s=document.getElementById("js-expression"),a=document.getElementById("js-answer-form"),c="";a.addEventListener("submit",q);var d=function(){new o.default({duration:60,onCount:function(e){return f(e)},onComplete:function(){return v()}}).start()},f=function(e){var t=document.getElementById("js-timer"),n=null==t?void 0:t.querySelector("span");n&&(n.textContent=e)};function m(e){var t=e.text,n=new r.default({container:"body",onClose:function(){return y()}}),o=new l.default({text:t,buttonText:"Start",onClose:function(){return n.close()}}).generate();n.generete(o)}function v(){p.score>u.default.bestScore&&p.setBestScore(),x(),i=!1,m({text:"Your score is "+p.score})}function y(){i=!0,p.reset(),S(p.score),c=t.default.randomExpression,s.textContent=c,d()}var p=new u.default({by:10,onIncrement:function(e){return S(e)}}),x=function(){document.getElementById("js-best-score").textContent=u.default.bestScore.toString()},S=function(e){var t=document.getElementById("js-score");t&&(t.textContent=e.toString())};function q(e){if(e.preventDefault(),i){var t=this.querySelector("input[name='answer']"),r=n.default.calculateFromString(c);+t.value===r?(L(),setTimeout(function(){w(t),b(),g(),p.increment()},500)):(C(),setTimeout(function(){b(),w(t)},500))}}function g(){c=t.default.randomExpression,s.textContent=c}function w(e){e.value=""}function C(){var e;b(),null==s||s.classList.add("fail"),null===(e=null==a?void 0:a.querySelector("input[name='answer']"))||void 0===e||e.classList.add("fail")}function L(){var e;b(),null==s||s.classList.add("correct"),null===(e=null==a?void 0:a.querySelector("input[name='answer']"))||void 0===e||e.classList.add("correct")}function b(){var e,t;null==s||s.classList.remove("fail"),null===(e=null==a?void 0:a.querySelector("input[name='answer']"))||void 0===e||e.classList.remove("fail"),null==s||s.classList.remove("correct"),null===(t=null==a?void 0:a.querySelector("input[name='answer']"))||void 0===t||t.classList.remove("correct")}m({text:"Are you ready?"}),x();
},{"./models/Trainer":"QIc9","./models/Calculator":"noHZ","./models/Modal":"q9Vc","./models/Timer":"taep","./models/Score":"vbti","./models/GameModal":"YN0T"}]},{},["Rgmk"], null)
//# sourceMappingURL=/MultiTrainer/dist/js.40f1d0a8.js.map