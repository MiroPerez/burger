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
})({"js/index.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
document.addEventListener("DOMContentLoaded", function () {
  // const swiper = new Swiper('.swiper-container', {
  //     // Optional parameters
  //     direction: 'vertical',
  //     loop: true,
  //     // If we need pagination
  //     pagination: {
  //       el: '.swiper-pagination',
  //     },
  //     // Navigation arrows
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     // And if we need scrollbar
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //     },
  //   })
  +function Accordion() {
    var active = "member--active";
    var items = document.querySelectorAll(".member");
    items.forEach(function (item) {
      var container = item.querySelector(".member__container");
      var content = item.querySelector(".member__content");
      var height = content.getBoundingClientRect().height;
      item.addEventListener("click", function () {
        if (item.classList.contains(active)) {
          CloseAccordion();
        } else {
          OpenAccordion();
        }
      });

      function OpenAccordion() {
        items.forEach(function (item) {
          var container = item.querySelector(".member__container");
          item.classList.remove(active);
          container.style.height = 0;
        });
        item.classList.add(active);
        container.style.height = height + "px";
      }

      function CloseAccordion() {
        item.classList.remove(active);
        container.style.height = 0;
      }
    });
  }();
  +function Modal() {
    var open = 'modal--open';
    var links = document.querySelectorAll('[data-modal]');
    var modals = document.querySelectorAll('.modal');
    links.forEach(function (link, index) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var target = link.getAttribute("href");
        var modal = document.querySelector(target);
        Open(modal);
      });
    });
    modals.forEach(function (modal, index) {
      var close = modal.querySelector(".modal__close");
      close.addEventListener("click", function (event) {
        event.preventDefault();
        Close(modal);
      });
    });

    function Open(el) {
      el.classList.add(open);
    }

    function Close(el) {
      el.classList.remove(open);
    }
  }();
  var list = document.querySelector('.menu__item__list');
  var items = list.querySelectorAll(".menu__item");
  var names = list.querySelectorAll(".trigger__name");
  list.addEventListener('click', function (event) {
    var _iterator = _createForOfIteratorHelper(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _item = _step.value;

        _item.classList.remove('item--active');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var item = event.target.closest('.menu__item');
    item.classList.add('item--active');

    if (item.classList.contains("item--active")) {}
  });
  var line = document.querySelector(".burgers__slides");
  var slider = document.querySelector(".burgers__slider");
  var slides = document.querySelectorAll(".burgers__slide");
  var right = document.querySelector(".right");
  var left = document.querySelector(".left");
  var minRight = 0;
  var step = slider.getBoundingClientRect().width;
  var currentRight = 0;
  line.style.right = currentRight;
  var maxRight = step * 2;

  var _iterator2 = _createForOfIteratorHelper(slides),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var slide = _step2.value;
      slide.style.width = slider.getBoundingClientRect().width + "px";
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  right.addEventListener("click", function () {
    if (currentRight < maxRight) {
      currentRight += step;
      line.style.right = currentRight + "px";
    }
  });
  left.addEventListener("click", function () {
    if (currentRight > minRight) {
      currentRight -= step;
      line.style.right = currentRight + "px";
    }
  });
  var burger = document.querySelector('.header__burger');
  var menu = document.querySelector('.menu');
  var firstContent = document.querySelector('.first-content');
  var container = document.querySelector('.container');
  var headButton = document.querySelector('.head-button');
  var noScroll = document.querySelector('.main');
  var logo = document.querySelector(".logo");
  var menuItems = document.querySelectorAll(".menu-item");
  burger.addEventListener("click", function () {
    menu.classList.add('menu__active');
    firstContent.classList.add('first-content__close');
    container.classList.add('container__size');
    headButton.classList.add('button__close');
    noScroll.classList.add('main__no-scroll');
  });
  logo.addEventListener("click", function () {
    menu.classList.remove('menu__active');
    firstContent.classList.remove('first-content__close');
    container.classList.remove('container__size');
    headButton.classList.remove('button__close');
    noScroll.classList.remove('main__no-scroll');
  });

  var _iterator3 = _createForOfIteratorHelper(menuItems),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var menuItem = _step3.value;
      menuItem.addEventListener("click", function () {
        menu.classList.remove('menu__active');
        firstContent.classList.remove('first-content__close');
        container.classList.remove('container__size');
        headButton.classList.remove('button__close');
        noScroll.classList.remove('main__no-scroll');
      });
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var nav = document.querySelector('.nav');
  var navItems = nav.querySelectorAll(".nav__item");
  nav.addEventListener('click', function (event) {
    var _iterator4 = _createForOfIteratorHelper(navItems),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _navItem = _step4.value;

        _navItem.classList.remove('nav__item--active');
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    var navItem = event.target.closest('.nav__item');
    navItem.classList.add('nav__item--active');
  });
  var positions = [];
  var sections = document.querySelectorAll(".section");

  function showPosition(sections) {
    sections.forEach(function (section) {
      var top = section.getBoundingClientRect().top;
      positions.push(top);
    });
  }

  showPosition(sections);
  var main = document.querySelector("main");
  main.addEventListener('scroll', function (event) {
    var top = main.scrollTop;
    var current = null;
    var stop = false;
    positions.forEach(function (position, index) {
      if (top <= position && !stop) {
        current = index;
        stop = true;
      }
    });
    setNav(navItems, current);
  });

  function setNav(items, index) {
    var current = index;
    items.forEach(function (item, index) {
      item.classList.remove("nav__item--active");

      if (current === index) {
        item.classList.add("nav__item--active");
      }
    });
  }

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [59.896170, 30.424528],
      zoom: 11
    }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Наш ресторан',
      balloonContent: ''
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-marker.png',
      // Размеры метки.
      iconImageSize: [46, 57],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    });
    myMap.geoObjects.add(myPlacemark);
  });
});
},{}],"../../Users/Miro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60223" + '/');

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
},{}]},{},["../../Users/Miro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map