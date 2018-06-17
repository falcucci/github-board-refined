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
  return __webpack_require__(__webpack_require__.s = 7);
})({
  7: function(module, exports, __webpack_require__) {
    "use strict";
    var settings = [ "gitlo.suggest-label-branch-type-active", "gitlo.suggested-labels", "gitlo.hub-command-active", "gitlo.hub-command-default-branch", "gitlo.max-branch-name-length" ];
    var settingsObject = {
      "gitlo.suggest-label-branch-type-active": true,
      "gitlo.suggested-labels": [ {
        orig: "feature",
        sugg: "feature"
      }, {
        orig: "enhancement",
        sugg: "enhancement"
      }, {
        orig: "bug",
        sugg: "bug"
      }, {
        orig: "chore",
        sugg: "chore"
      }, {
        orig: "hotfix",
        sugg: "hotfix"
      } ],
      "gitlo.hub-command-active": true,
      "gitlo.hub-command-default-branch": "hml",
      "gitlo.max-branch-name-length": 50
    };
    chrome.storage.sync.get(settings, function(items) {
      $.each(items, function(key, value) {
        if (typeof value !== "undefined") {
          if (key == "gitlo.suggested-labels") {
            settingsObject[key] = jQuery.parseJSON(value);
          } else {
            settingsObject[key] = value;
          }
        }
      });
    });
    var cardClasses = "a[class^='h5 d-block lh-condensed mb-1 mr-5']";
    var urlBase = "https://github.com";
    var cardCommandsSelector = "#partial-discussion-header";
    var cardModal = '<div class="modal" style="display: none"></div>';
    var wasDoubleClicked = false;
    var currentHash = false;
    var gitHubCommand = "hub pull-request -i [ticketId] -b [ORIGINAL_AUTHOR]:[ORIGINAL_AUTHOR_BRANCH] -h [FROM_USER]:[FROM_BRANCH]";
    var createBranchCommand = "git checkout -b ";
    function getCardInformation(url, isIssue) {
      var card = $(".modal");
      $.ajax(urlBase + url).done(function(result) {
        if (wasDoubleClicked) return false;
        card.empty();
        var content = $(result).find("[type='text/css'], .issues-listing");
        var css = false;
        if ($(result).find("[type='text/css']").length > 0) {
          localStorage.setItem("gitlo.cardCSS", $(result).find("[type='text/css']").html());
        } else {
          css = localStorage.getItem("gitlo.cardCSS");
        }
        content.find(".tabnav").remove();
        content.find(".discussion-timeline").attr("style", "width:70% !important;");
        content.find(".discussion-sidebar").attr("style", "width:25% !important;");
        if (css !== false && css !== null) {
          card.append('<style type="text/css" >' + css + "</style>");
        }
        content.appendTo(card);
        if (settingsObject["gitlo.suggest-label-branch-type-active"]) {
          appendBranchName();
        }
        if (settingsObject["gitlo.hub-command-active"]) {
          appendGitHubCommand();
        }
        card.modal();
      });
    }
    function getBranchNamePrefix() {
      var suggestedName = "";
      if (settingsObject["gitlo.suggest-label-branch-type-active"]) {
        $(".labels").find("a").each(function() {
          var name = $(this).text().toLowerCase();
          settingsObject["gitlo.suggested-labels"].forEach(function(item) {
            if (item.orig === name) {
              suggestedName = item.sugg;
            }
          });
        });
        return suggestedName + "/";
      }
      return suggestedName;
    }
    function getOriginalAuthor() {
      return window.location.pathname.split("/")[2];
    }
    function getGitHubCommand() {
      return '<dl class="form-group"><p></strong><input class="form-control" style="width: 37%" type="text" value="' + gitHubCommand.replace("[ticketId]", getTicketNumber()).replace("[ORIGINAL_AUTHOR]", getOriginalAuthor()).replace("[ORIGINAL_AUTHOR_BRANCH]", settingsObject["gitlo.hub-command-default-branch"]).replace("[FROM_USER]", getOriginalAuthor()).replace("[FROM_BRANCH]", getBranchNamePrefix() + getBranchName()) + '"></p></dl>';
    }
    function appendGitHubCommand() {
      $(getGitHubCommand()).appendTo(cardCommandsSelector);
    }
    function urlHasHash() {
      return window.location.hash ? true : false;
    }
    function getUrlHash() {
      return window.location.hash;
    }
    function getTicketNumber() {
      return getUrlHash().replace("#", "");
    }
    function getBranchName() {
      if (urlHasHash()) return "issue-" + getTicketNumber(); else return false;
    }
    function appendBranchName() {
      var branchName = '<dl class="form-group"><p><input class="form-control" style="width: 18%; float: left;" type="text" value="' + createBranchCommand + getBranchNamePrefix() + getBranchName() + '"></p></dl>';
      if (branchName !== false) {
        $(branchName).appendTo(cardCommandsSelector);
      }
    }
    function triggerCard() {
      var withCardId = $("div[id='" + getTicketNumber() + "'] > h5 > a");
      var withTicketId = $("a[href$='" + getTicketNumber() + "']");
      if (withTicketId.length > 0 || withCardId.length > 0) {
        withCardId.trigger("click");
        withTicketId.trigger("click");
      } else {
        setTimeout(triggerCard, 100);
      }
    }
    function removeHash() {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    $(document).ready(function() {
      $(cardModal).appendTo("body");
      var body = $("body");
      body.on("click", cardClasses, function(event) {
        event.preventDefault();
        var url = $(this).attr("href");
        var urlParts = url.split("/");
        var isIssue = urlParts[urlParts.length - 2] === "issues";
        var ticketId = urlParts[urlParts.length - 1];
        window.location.href = "#" + ticketId;
        currentHash = getUrlHash();
        if (isIssue) {
          getCardInformation(url);
        }
      });
      body.on("dblclick", cardClasses, function(event) {
        wasDoubleClicked = true;
        event.preventDefault();
        window.location.href = $(this).attr("href");
      });
      body.on("click", ".close-modal", function() {
        removeHash();
      });
      if (urlHasHash()) {
        triggerCard();
      }
      $(window).on("hashchange", function() {
        if (currentHash !== false && currentHash !== window.location.hash) {
          triggerCard();
        }
      });
    });
  }
});