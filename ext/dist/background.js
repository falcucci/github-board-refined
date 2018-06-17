(function(modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        configurable: false,
        enumerable: true,
        get: getter
      });
    }
  };
  __webpack_require__.r = function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  };
  __webpack_require__.n = function(module) {
    var getter = module && module.__esModule ? function getDefault() {
      return module["default"];
    } : function getModuleExports() {
      return module;
    };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__(__webpack_require__.s = 33);
})({
  0: function(module, exports, __webpack_require__) {
    document.__webextContentScriptLoaded = true;
    function pingContentScript(tab) {
      return new Promise((resolve, reject) => {
        chrome.tabs.executeScript(tab.id || tab, {
          code: "document.__webextContentScriptLoaded",
          runAt: "document_start"
        }, hasScriptAlready => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve(Boolean(hasScriptAlready[0]));
          }
        });
      });
    }
    if (true) {
      module.exports = pingContentScript;
    }
  },
  3: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, "addToTab", function() {
      return addToTab;
    });
    __webpack_require__.d(__webpack_exports__, "addToFutureTabs", function() {
      return addToFutureTabs;
    });
    var webext_content_script_ping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var webext_content_script_ping__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(webext_content_script_ping__WEBPACK_IMPORTED_MODULE_0__);
    async function p(fn, ...args) {
      return new Promise((resolve, reject) => fn(...args, r => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(r);
        }
      }));
    }
    async function addToTab(tab, contentScripts) {
      if (typeof tab !== "object" && typeof tab !== "number") {
        throw new TypeError("Specify a Tab or tabId");
      }
      if (!contentScripts) {
        contentScripts = chrome.runtime.getManifest().content_scripts;
      } else if (!Array.isArray(contentScripts)) {
        contentScripts = [ contentScripts ];
      }
      try {
        const tabId = tab.id || tab;
        if (!await webext_content_script_ping__WEBPACK_IMPORTED_MODULE_0___default()(tabId)) {
          const injections = [];
          for (const group of contentScripts) {
            const allFrames = group.all_frames;
            const runAt = group.run_at;
            for (const file of group.css) {
              injections.push(p(chrome.tabs.insertCSS, tabId, {
                file: file,
                allFrames: allFrames,
                runAt: runAt
              }));
            }
            for (const file of group.js) {
              injections.push(p(chrome.tabs.executeScript, tabId, {
                file: file,
                allFrames: allFrames,
                runAt: runAt
              }));
            }
          }
          return Promise.all(injections);
        }
      } catch (err) {}
    }
    function addToFutureTabs(scripts) {
      chrome.tabs.onUpdated.addListener((tabId, {status: status}) => {
        if (status === "loading") {
          addToTab(tabId, scripts);
        }
      });
    }
    __webpack_exports__["default"] = {
      addToTab: addToTab,
      addToFutureTabs: addToFutureTabs
    };
  },
  33: function(module, exports, __webpack_require__) {
    "use strict";
    var _webextDynamicContentScripts = __webpack_require__(3);
    var _webextDynamicContentScripts2 = _interopRequireDefault(_webextDynamicContentScripts);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    _webextDynamicContentScripts2.default.addToFutureTabs();
  }
});