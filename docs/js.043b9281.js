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
})({"QvaY":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function $(id) {
  return document.getElementById(id);
}

function $class(cls, value) {
  var el = document.querySelectorAll(".".concat(cls));

  for (var i = 0; i < el.length; i++) {
    el[i].innerHTML = value;
  }
}

function trigger() {
  var svg = $("svg982");
  var canvas = document.createElement("canvas");
  canvas.width = 793.7007874;
  canvas.height = 396.8503937;
  var ctx = canvas.getContext("2d");
  var data = new XMLSerializer().serializeToString(svg);
  var DOMURL = window.URL || window.webkitURL || window;
  var img = new Image();
  var svgBlob = new Blob([data], {
    type: "image/svg+xml;charset=utf-8"
  });
  var url = DOMURL.createObjectURL(svgBlob);

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    DOMURL.revokeObjectURL(url);
    var imgURI = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    triggerDownload(imgURI);
  };

  img.src = url;
}

function triggerDownload(imgURI) {
  var evt = new MouseEvent("click", {
    view: window,
    bubbles: false,
    cancelable: true
  });
  var a = document.createElement("a");
  a.setAttribute("download", "MY_COOL_IMAGE.png");
  a.setAttribute("href", imgURI);
  a.setAttribute("target", "_blank");
  a.dispatchEvent(evt);
}

var PaymentInfo = /*#__PURE__*/function () {
  function PaymentInfo() {
    _classCallCheck(this, PaymentInfo);

    // Account Information
    this.acfullname = "";
    this.acstreet = "";
    this.achousenum = "";
    this.aczipcode = "";
    this.actown = ""; // Payee Information

    this.payfullname = "";
    this.paystreet = "";
    this.payhousenum = "";
    this.payzipcode = "";
    this.paytown = ""; // General Information

    this.iban = "";
    this.account = "";
    this.reference = "";
    this.currency = "CHF";
    this.amount = 0;
    this.adinfo = "";
    reactor("acfullname", this);
    reactor("acstreet", this);
    reactor("achousenum", this);
    reactor("aczipcode", this);
    reactor("actown", this);
    reactor("payfullname", this);
    reactor("paystreet", this);
    reactor("payhousenum", this);
    reactor("payzipcode", this);
    reactor("paytown", this);
    reactor("payfullname", this);
    reactor("iban", this);
    reactor("adinfo", this);
    reactor("amount", this);
    reactor("currency", this);
    reactor("reference", this);
  }

  _createClass(PaymentInfo, [{
    key: "update",
    value: function update() {
      $class("svg-account", this.iban);
      $class("svg-acfullname", this.acfullname);
      $class("svg-acstreet", "".concat(this.acstreet, " ").concat(this.achousenum));
      $class("svg-actown", "".concat(this.actown, " ").concat(this.aczipcode));
      $class("svg-payfullname", this.payfullname);
      $class("svg-paystreet", "".concat(this.paystreet, " ").concat(this.payhousenum));
      $class("svg-paytown", "".concat(this.paytown, " ").concat(this.payzipcode));
      $class("svg-reference", this.reference);
      $class("svg-currency", this.currency);
      $class("svg-amount", this.amount);
      $class("svg-adinfo", this.adinfo);
    }
  }]);

  return PaymentInfo;
}();

function reactor(id, obj) {
  $(id).onchange = function (el) {
    obj[id] = el.target.value;
    obj.update();
  };
}

new PaymentInfo();
$("download").onclick = trigger;
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/js.043b9281.js.map