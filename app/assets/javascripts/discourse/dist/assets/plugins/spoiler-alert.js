define("discourse/plugins/spoiler-alert/initializers/spoiler-alert", ["exports", "discourse/lib/plugin-api", "discourse/lib/to-markdown", "discourse/plugins/spoiler-alert/lib/apply-spoiler"], function (_exports, _pluginApi, _toMarkdown, _applySpoiler) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initializeSpoiler = initializeSpoiler;
  function spoil(element) {
    element.querySelectorAll(".spoiler").forEach(spoiler => {
      spoiler.classList.remove("spoiler");
      spoiler.classList.add("spoiled");
      (0, _applySpoiler.default)(spoiler);
    });
  }
  function initializeSpoiler(api) {
    api.decorateCookedElement(spoil, {
      id: "spoiler-alert"
    });
    api.addComposerToolbarPopupMenuOption({
      icon: "magic",
      label: "spoiler.title",
      action: toolbarEvent => {
        toolbarEvent.applySurround("[spoiler]", "[/spoiler]", "spoiler_text", {
          multiline: false,
          useBlockMode: true
        });
      }
    });
    (0, _toMarkdown.addTagDecorateCallback)(function () {
      if (this.element.attributes.class === "spoiled") {
        this.prefix = "[spoiler]";
        this.suffix = "[/spoiler]";
      }
    });
    (0, _toMarkdown.addBlockDecorateCallback)(function (text) {
      const {
        name,
        attributes
      } = this.element;
      if (name === "div" && attributes.class === "spoiled") {
        this.prefix = "[spoiler]";
        this.suffix = "[/spoiler]";
        return text.trim();
      }
    });
  }
  var _default = _exports.default = {
    name: "spoiler-alert",
    initialize(container) {
      const siteSettings = container.lookup("site-settings:main");
      if (siteSettings.spoiler_enabled) {
        (0, _pluginApi.withPluginApi)("1.15.0", initializeSpoiler);
      }
    }
  };
});
define("discourse/plugins/spoiler-alert/lib/apply-spoiler", ["exports", "discourse-i18n"], function (_exports, _discourseI18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = applySpoiler;
  const INTERACTIVE_SELECTOR = ["a", "area", "audio", "button", "details", "embed", "iframe", "img.animated", "input", "map", "object", "option", "portal", "select", "textarea", "track", "video", ".lightbox"].join(", ");
  function isInteractive(event) {
    return event.defaultPrevented || event.target.closest(INTERACTIVE_SELECTOR);
  }
  function noTextSelected() {
    return window.getSelection() + "" === "";
  }
  function setAttributes(element, attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      if (value === null) {
        element.removeAttribute(key);
      } else {
        element.setAttribute(key, value);
      }
    });
  }
  function _setSpoilerHidden(element) {
    const spoilerHiddenAttributes = {
      role: "button",
      tabindex: "0",
      "data-spoiler-state": "blurred",
      "aria-expanded": false,
      "aria-label": _discourseI18n.default.t("spoiler.label.show"),
      "aria-live": "polite"
    };

    // Set default attributes & classes on spoiler
    setAttributes(element, spoilerHiddenAttributes);
    element.classList.add("spoiler-blurred");

    // Set aria-hidden for all children of the spoiler
    Array.from(element.children).forEach(e => {
      e.setAttribute("aria-hidden", true);
    });
  }
  function _setSpoilerVisible(element) {
    const spoilerVisibleAttributes = {
      "data-spoiler-state": "revealed",
      "aria-expanded": true,
      "aria-label": null,
      role: null
    };

    // Set attributes & classes for when spoiler is visible
    setAttributes(element, spoilerVisibleAttributes);
    element.classList.remove("spoiler-blurred");

    // Remove aria-hidden for all children of the spoiler when visible
    Array.from(element.children).forEach(e => {
      e.removeAttribute("aria-hidden");
    });
  }
  function toggleSpoiler(event, element) {
    if (element.getAttribute("data-spoiler-state") === "blurred") {
      _setSpoilerVisible(element);
      event.preventDefault();
    } else if (!isInteractive(event) && noTextSelected()) {
      _setSpoilerHidden(element);
    }
  }
  function applySpoiler(element) {
    _setSpoilerHidden(element);
    element.addEventListener("click", event => {
      toggleSpoiler(event, element);
    });
    element.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        toggleSpoiler(event, element);
      }
    });
  }
});
define("discourse/plugins/spoiler-alert/lib/discourse-markdown/spoiler-alert", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  const CONTAINS_BLOCK_REGEX = /\n|<img|!\[[^\]]*\][(\[]/;
  function insertSpoiler(_, spoiler) {
    const element = CONTAINS_BLOCK_REGEX.test(spoiler) ? "div" : "span";
    return `<${element} class='spoiler'>${spoiler}</${element}>`;
  }
  function replaceSpoilers(text) {
    text ||= "";
    let previousText;
    do {
      previousText = text;
      text = text.replace(/\[spoiler\]((?:(?!\[spoiler\]|\[\/spoiler\])[\S\s])*)\[\/spoiler\]/gi, insertSpoiler);
    } while (text !== previousText);
    return text;
  }
  function setupMarkdownIt(helper) {
    helper.registerOptions((opts, siteSettings) => {
      opts.features["spoiler-alert"] = !!siteSettings.spoiler_enabled;
    });
    helper.registerPlugin(md => {
      md.inline.bbcode.ruler.push("spoiler", {
        tag: "spoiler",
        wrap: "span.spoiler"
      });
      md.block.bbcode.ruler.push("spoiler", {
        tag: "spoiler",
        wrap: "div.spoiler"
      });
    });
  }
  function setup(helper) {
    helper.allowList(["span.spoiler", "div.spoiler"]);
    if (helper.markdownIt) {
      setupMarkdownIt(helper);
    } else {
      helper.addPreProcessor(replaceSpoilers);
    }
  }
});//# sourceMappingURL=spoiler-alert.map
