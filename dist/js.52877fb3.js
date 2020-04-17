// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/lib/multiplicationsArr.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ["2 * 1", "2 * 2", "2 * 3", "2 * 4", "2 * 5", "2 * 6", "2 * 7", "2 * 8", "2 * 9", "2 * 10", "2 * 11", "2 * 12", "3 * 1", "3 * 2", "3 * 3", "3 * 4", "3 * 5", "3 * 6", "3 * 7", "3 * 8", "3 * 9", "3 * 10", "3 * 11", "3 * 12", "4 * 1", "4 * 2", "4 * 3", "4 * 4", "4 * 5", "4 * 6", "4 * 7", "4 * 8", "4 * 9", "4 * 10", "4 * 11", "4 * 12", "5 * 1", "5 * 2", "5 * 3", "5 * 4", "5 * 5", "5 * 6", "5 * 7", "5 * 8", "5 * 9", "5 * 10", "5 * 11", "5 * 12", "6 * 1", "6 * 2", "6 * 3", "6 * 4", "6 * 5", "6 * 6", "6 * 7", "6 * 8", "6 * 9", "6 * 10", "6 * 11", "6 * 12", "7 * 1", "7 * 2", "7 * 3", "7 * 4", "7 * 5", "7 * 6", "7 * 7", "7 * 8", "7 * 9", "7 * 10", "7 * 11", "7 * 12", "8 * 1", "8 * 2", "8 * 3", "8 * 4", "8 * 5", "8 * 6", "8 * 7", "8 * 8", "8 * 9", "8 * 10", "8 * 11", "8 * 12", "9 * 1", "9 * 2", "9 * 3", "9 * 4", "9 * 5", "9 * 6", "9 * 7", "9 * 8", "9 * 9", "9 * 10", "9 * 11", "9 * 12", "10 * 1", "10 * 2", "10 * 3", "10 * 4", "10 * 5", "10 * 6", "10 * 7", "10 * 8", "10 * 9", "10 * 10", "10 * 11", "10 * 12", "11 * 1", "11 * 2", "11 * 3", "11 * 4", "11 * 5", "11 * 6", "11 * 7", "11 * 8", "11 * 9", "11 * 10", "11 * 11", "11 * 12", "12 * 1", "12 * 2", "12 * 3", "12 * 4", "12 * 5", "12 * 6", "12 * 7", "12 * 8", "12 * 9", "12 * 10", "12 * 11", "12 * 12", "0 * 1", "0 * 2", "0 * 3", "0 * 4", "0 * 5", "0 * 6", "0 * 7", "0 * 8", "0 * 9", "0 * 10", "0 * 11", "0 * 12", "1 * 1", "1 * 2", "1 * 3", "1 * 4", "1 * 5", "1 * 6", "1 * 7", "1 * 8", "1 * 9", "1 * 10", "1 * 11", "1 * 12"];
},{}],"js/models/Trainer.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var multiplicationsArr_1 = __importDefault(require("../lib/multiplicationsArr"));

var Trainer =
/** @class */
function () {
  function Trainer() {}

  Object.defineProperty(Trainer, "randomExpression", {
    get: function get() {
      return multiplicationsArr_1.default[Math.ceil(Math.random() * multiplicationsArr_1.default.length)];
    },
    enumerable: true,
    configurable: true
  });
  return Trainer;
}();

exports.default = Trainer;
},{"../lib/multiplicationsArr":"js/lib/multiplicationsArr.ts"}],"js/models/Calculator.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Calculator =
/** @class */
function () {
  function Calculator() {}

  Calculator.calculateFromString = function (string) {
    return eval(string);
  };

  return Calculator;
}();

exports.default = Calculator;
},{}],"js/models/Modal.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Modal =
/** @class */
function () {
  function Modal(_a) {
    var container = _a.container,
        onClose = _a.onClose;
    this.container = container;
    this.modal = null;
    this.onClose = onClose;
  }

  Modal.prototype.generete = function (content) {
    var _a;

    var container = document.createElement("div");
    container.classList.add("modal-container");
    (_a = document.querySelector(this.container)) === null || _a === void 0 ? void 0 : _a.appendChild(container);
    container.appendChild(content);
    this.modal = container;
  };

  Modal.prototype.close = function () {
    if (!this.modal) return;
    this.modal.remove();
    this.onClose();
  };

  return Modal;
}();

exports.default = Modal;
},{}],"js/models/Timer.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Timer =
/** @class */
function () {
  function Timer(_a) {
    var onCount = _a.onCount,
        duration = _a.duration,
        onComplete = _a.onComplete;
    this.onCount = onCount;
    this.duration = duration;
    this.currentCount = this.duration;
    this.time = "";
    this.interval = 0;
    this.onComplete = onComplete;
  }

  Timer.prototype.start = function () {
    var _this = this;

    this.interval = setInterval(function () {
      _this.currentCount -= 1;
      _this.time = _this.secondsToHms(_this.currentCount);

      _this.onCount(_this.time);

      if (_this.currentCount === 0) _this.stop();
    }, 1000);
  };

  Timer.prototype.stop = function () {
    this.onComplete();
    clearInterval(this.interval);
  };

  Timer.prototype.secondsToHms = function (seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor(seconds % 3600 / 60);
    var seconds = Math.floor(seconds % 3600 % 60);
    return hours ? hours + ":" + minutes + ":" + (seconds < 10 ? "0" + seconds : seconds) + ":" : minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
  };

  return Timer;
}();

exports.default = Timer;
},{}],"js/models/Score.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Score =
/** @class */
function () {
  function Score(_a) {
    var by = _a.by,
        onIncrement = _a.onIncrement;
    this.score = 0;
    this.by = by;
    this.onIncrement = onIncrement;
  }

  Object.defineProperty(Score, "bestScore", {
    get: function get() {
      var bestScore = localStorage.getItem("bestScore");
      return bestScore ? +bestScore : 0;
    },
    enumerable: true,
    configurable: true
  });

  Score.prototype.setBestScore = function () {
    localStorage.setItem("bestScore", JSON.stringify(this.score));
  };

  Score.prototype.reset = function () {
    this.score = 0;
  };

  Score.prototype.increment = function () {
    this.score += this.by;
    this.onIncrement(this.score);
  };

  return Score;
}();

exports.default = Score;
},{}],"js/models/GameModal.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameModal =
/** @class */
function () {
  function GameModal(_a) {
    var text = _a.text,
        buttonText = _a.buttonText,
        onClose = _a.onClose;
    this.text = text;
    this.buttonText = buttonText;
    this.onClose = onClose;
  }

  GameModal.prototype.generate = function () {
    var textElement = document.createElement("h2");
    var button = document.createElement("button");
    var fragment = new DocumentFragment();
    textElement.textContent = this.text;
    button.textContent = this.buttonText;
    fragment.appendChild(textElement);
    fragment.appendChild(button);
    button.addEventListener("click", this.onClose);
    return fragment;
  };

  return GameModal;
}();

exports.default = GameModal;
},{}],"js/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Trainer_1 = __importDefault(require("./models/Trainer"));

var Calculator_1 = __importDefault(require("./models/Calculator"));

var Modal_1 = __importDefault(require("./models/Modal"));

var Timer_1 = __importDefault(require("./models/Timer"));

var Score_1 = __importDefault(require("./models/Score"));

var GameModal_1 = __importDefault(require("./models/GameModal"));

var isPlaying = false;
var expressionField = document.getElementById("js-expression");
var answerForm = document.getElementById("js-answer-form");
var expression = "";
answerForm.addEventListener("submit", handleSubmitAnswer);

var initTimer = function initTimer() {
  new Timer_1.default({
    duration: 120,
    onCount: function onCount(time) {
      return handleTimer(time);
    },
    onComplete: function onComplete() {
      return completeGame();
    }
  }).start();
};

var handleTimer = function handleTimer(time) {
  var timer = document.getElementById("js-timer");
  var timerSpan = timer === null || timer === void 0 ? void 0 : timer.querySelector("span");
  if (!timerSpan) return;
  timerSpan.textContent = time;
};

function initModal(_a) {
  var text = _a.text;
  var modal = new Modal_1.default({
    container: "body",
    onClose: function onClose() {
      return startGame();
    }
  });
  var startModal = new GameModal_1.default({
    text: text,
    buttonText: "Start",
    onClose: function onClose() {
      return modal.close();
    }
  }).generate();
  modal.generete(startModal);
}

function completeGame() {
  if (score.score > Score_1.default.bestScore) score.setBestScore();
  showBestScore();
  isPlaying = false;
  initModal({
    text: "Your score is " + score.score
  });
}

function startGame() {
  isPlaying = true;
  score.reset();
  showScore(score.score);
  expression = Trainer_1.default.randomExpression;
  expressionField.textContent = expression;
  initTimer();
}

var score = new Score_1.default({
  by: 10,
  onIncrement: function onIncrement(score) {
    return showScore(score);
  }
});

var showBestScore = function showBestScore() {
  var bestScoreElement = document.getElementById("js-best-score");
  bestScoreElement.textContent = Score_1.default.bestScore.toString();
};

var showScore = function showScore(score) {
  var scoreElement = document.getElementById("js-score");
  if (!scoreElement) return;
  scoreElement.textContent = score.toString();
};

initModal({
  text: "Are you ready?"
});
showBestScore();

function handleSubmitAnswer(e) {
  e.preventDefault();
  if (!isPlaying) return;
  var inputAnswer = this.querySelector("input[name='answer']");
  var correctAnswer = Calculator_1.default.calculateFromString(expression);

  if (+inputAnswer.value === correctAnswer) {
    setSuccessStyles();
    setTimeout(function () {
      resetInput(inputAnswer);
      resetStyles();
      setNewExpression();
      score.increment();
    }, 500);
  } else {
    setFailStyles();
    setTimeout(function () {
      resetStyles();
      resetInput(inputAnswer);
    }, 500);
  }
}

function setNewExpression() {
  expression = Trainer_1.default.randomExpression;
  expressionField.textContent = expression;
}

function resetInput(input) {
  input.value = "";
}

function setFailStyles() {
  var _a;

  resetStyles();
  expressionField === null || expressionField === void 0 ? void 0 : expressionField.classList.add("fail");
  (_a = answerForm === null || answerForm === void 0 ? void 0 : answerForm.querySelector("input[name='answer']")) === null || _a === void 0 ? void 0 : _a.classList.add("fail");
}

function setSuccessStyles() {
  var _a;

  resetStyles();
  expressionField === null || expressionField === void 0 ? void 0 : expressionField.classList.add("correct");
  (_a = answerForm === null || answerForm === void 0 ? void 0 : answerForm.querySelector("input[name='answer']")) === null || _a === void 0 ? void 0 : _a.classList.add("correct");
}

function resetStyles() {
  var _a, _b;

  expressionField === null || expressionField === void 0 ? void 0 : expressionField.classList.remove("fail");
  (_a = answerForm === null || answerForm === void 0 ? void 0 : answerForm.querySelector("input[name='answer']")) === null || _a === void 0 ? void 0 : _a.classList.remove("fail");
  expressionField === null || expressionField === void 0 ? void 0 : expressionField.classList.remove("correct");
  (_b = answerForm === null || answerForm === void 0 ? void 0 : answerForm.querySelector("input[name='answer']")) === null || _b === void 0 ? void 0 : _b.classList.remove("correct");
}
},{"./models/Trainer":"js/models/Trainer.ts","./models/Calculator":"js/models/Calculator.ts","./models/Modal":"js/models/Modal.ts","./models/Timer":"js/models/Timer.ts","./models/Score":"js/models/Score.ts","./models/GameModal":"js/models/GameModal.ts"}],"C:/Users/dgolo/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52113" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/dgolo/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.ts"], null)
//# sourceMappingURL=/js.52877fb3.js.map