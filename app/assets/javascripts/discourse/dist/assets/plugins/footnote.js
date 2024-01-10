define("discourse/plugins/footnote/initializers/inline-footnotes", ["exports", "@popperjs/core", "discourse/lib/plugin-api", "discourse-common/lib/icon-library"], function (_exports, _core, _pluginApi, _iconLibrary) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let inlineFootnotePopper;
  function applyInlineFootnotes(elem) {
    const footnoteRefs = elem.querySelectorAll("sup.footnote-ref");
    footnoteRefs.forEach(footnoteRef => {
      const refLink = footnoteRef.querySelector("a");
      if (!refLink) {
        return;
      }
      const expandableFootnote = document.createElement("a");
      expandableFootnote.classList.add("expand-footnote");
      expandableFootnote.innerHTML = (0, _iconLibrary.iconHTML)("ellipsis-h");
      expandableFootnote.href = "";
      expandableFootnote.role = "button";
      expandableFootnote.dataset.footnoteId = refLink.getAttribute("href");
      footnoteRef.after(expandableFootnote);
    });
    if (footnoteRefs.length) {
      elem.classList.add("inline-footnotes");
    }
  }
  function buildTooltip() {
    let html = `
    <div id="footnote-tooltip" role="tooltip">
      <div class="footnote-tooltip-content"></div>
      <div id="arrow" data-popper-arrow></div>
    </div>
  `;
    let template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }
  function footNoteEventHandler(event) {
    inlineFootnotePopper?.destroy();
    const tooltip = document.getElementById("footnote-tooltip");

    // reset state by hidding tooltip, it handles "click outside"
    // allowing to hide the tooltip when you click anywhere else
    tooltip?.removeAttribute("data-show");

    // if we didn't actually click a footnote button, exit early
    if (!event.target.classList.contains("expand-footnote")) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();

    // append footnote to tooltip body
    const expandableFootnote = event.target;
    const cooked = expandableFootnote.closest(".cooked");
    const footnoteId = expandableFootnote.dataset.footnoteId;
    const footnoteContent = tooltip.querySelector(".footnote-tooltip-content");
    let newContent = cooked.querySelector(footnoteId);
    footnoteContent.innerHTML = newContent.innerHTML;

    // display tooltip
    tooltip.dataset.show = "";

    // setup popper
    inlineFootnotePopper?.destroy();
    inlineFootnotePopper = (0, _core.createPopper)(expandableFootnote, tooltip, {
      modifiers: [{
        name: "arrow",
        options: {
          element: tooltip.querySelector("#arrow")
        }
      }, {
        name: "preventOverflow",
        options: {
          altAxis: true,
          padding: 5
        }
      }, {
        name: "offset",
        options: {
          offset: [0, 12]
        }
      }]
    });
  }
  var _default = _exports.default = {
    name: "inline-footnotes",
    initialize(container) {
      if (!container.lookup("site-settings:main").display_footnotes_inline) {
        return;
      }
      document.documentElement.append(buildTooltip());
      window.addEventListener("click", footNoteEventHandler);
      (0, _pluginApi.withPluginApi)("0.8.9", api => {
        api.decorateCookedElement(elem => applyInlineFootnotes(elem), {
          onlyStream: true,
          id: "inline-footnotes"
        });
        api.onPageChange(() => {
          document.getElementById("footnote-tooltip")?.removeAttribute("data-show");
        });
      });
    },
    teardown() {
      inlineFootnotePopper?.destroy();
      window.removeEventListener("click", footNoteEventHandler);
      document.getElementById("footnote-tooltip")?.remove();
    }
  };
});
define("discourse/plugins/footnote/lib/discourse-markdown/footnotes", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  function setup(helper) {
    helper.registerOptions((opts, siteSettings) => {
      opts.features["footnotes"] = window.markdownitFootnote && !!siteSettings.enable_markdown_footnotes;
    });
    helper.allowList(["ol.footnotes-list", "hr.footnotes-sep", "li.footnote-item", "a.footnote-backref", "sup.footnote-ref"]);
    helper.allowList({
      custom(tag, name, value) {
        if ((tag === "a" || tag === "li") && name === "id") {
          return !!value.match(/^fn(ref)?\d+$/);
        }
      }
    });
    if (window.markdownitFootnote) {
      helper.registerPlugin(window.markdownitFootnote);
    }
  }
});//# sourceMappingURL=footnote.map
