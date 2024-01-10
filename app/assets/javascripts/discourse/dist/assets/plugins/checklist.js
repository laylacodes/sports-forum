define("discourse/plugins/checklist/discourse/initializers/checklist", ["exports", "discourse/lib/ajax", "discourse/lib/plugin-api", "discourse-common/lib/icon-library", "discourse-i18n"], function (_exports, _ajax, _pluginApi, _iconLibrary, _discourseI18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.checklistSyntax = checklistSyntax;
  _exports.default = void 0;
  function initializePlugin(api) {
    const siteSettings = api.container.lookup("site-settings:main");
    if (siteSettings.checklist_enabled) {
      api.decorateCookedElement(checklistSyntax);
    }
  }
  function removeReadonlyClass(boxes) {
    boxes.forEach(e => e.classList.remove("readonly"));
  }
  function isWhitespaceNode(node) {
    return node.nodeType === 3 && node.nodeValue.match(/^\s*$/);
  }
  function hasPrecedingContent(node) {
    let sibling = node.previousSibling;
    while (sibling) {
      if (!isWhitespaceNode(sibling)) {
        return true;
      }
      sibling = sibling.previousSibling;
    }
    return false;
  }
  function addUlClasses(boxes) {
    boxes.forEach(val => {
      let parent = val.parentElement;
      if (parent.nodeName === "P" && parent.parentElement.firstElementChild === parent) {
        parent = parent.parentElement;
      }
      if (parent.nodeName === "LI" && parent.parentElement.nodeName === "UL" && !hasPrecedingContent(val)) {
        parent.classList.add("has-checkbox");
        val.classList.add("list-item-checkbox");
        if (!val.nextSibling) {
          val.insertAdjacentHTML("afterend", "&#8203;"); // Ensure otherwise empty <li> does not collapse height
        }
      }
    });
  }
  function checklistSyntax(elem, postDecorator) {
    const boxes = [...elem.getElementsByClassName("chcklst-box")];
    addUlClasses(boxes);
    if (!postDecorator) {
      return;
    }
    const postWidget = postDecorator.widget;
    const postModel = postDecorator.getModel();
    if (!postModel.can_edit) {
      return;
    }
    boxes.forEach((val, idx) => {
      val.onclick = async event => {
        const box = event.currentTarget;
        const classList = box.classList;
        if (classList.contains("permanent") || classList.contains("readonly")) {
          return;
        }
        const newValue = classList.contains("checked") ? "[ ]" : "[x]";
        const template = document.createElement("template");
        template.innerHTML = (0, _iconLibrary.iconHTML)("spinner", {
          class: "fa-spin"
        });
        box.insertAdjacentElement("afterend", template.content.firstChild);
        box.classList.add("hidden");
        boxes.forEach(e => e.classList.add("readonly"));
        try {
          const post = await (0, _ajax.ajax)(`/posts/${postModel.id}`);
          const blocks = [];

          // Computing offsets where checkbox are not evaluated (i.e. inside
          // code blocks).
          [
          // inline code
          /`[^`\n]*\n?[^`\n]*`/gm,
          // multi-line code
          /^```[^]*?^```/gm,
          // bbcode
          /\[code\][^]*?\[\/code\]/gm,
          // italic/bold
          /_(?=\S).*?\S_/gm,
          // strikethrough
          /~~(?=\S).*?\S~~/gm].forEach(regex => {
            let match;
            while ((match = regex.exec(post.raw)) != null) {
              blocks.push([match.index, match.index + match[0].length]);
            }
          });
          [
          // italic/bold
          /([^\[\n]|^)\*\S.+?\S\*(?=[^\]\n]|$)/gm].forEach(regex => {
            let match;
            while ((match = regex.exec(post.raw)) != null) {
              // Simulate lookbehind - skip the first character
              blocks.push([match.index + 1, match.index + match[0].length]);
            }
          });

          // make the first run go to index = 0
          let nth = -1;
          let found = false;
          const newRaw = post.raw.replace(/\[(\s|\_|\-|\x|\\?\*)?\]/gi, (match, ignored, off) => {
            if (found) {
              return match;
            }
            nth += blocks.every(b => b[0] >= off + match.length || off > b[1]);
            if (nth === idx) {
              found = true; // Do not replace any further matches
              return newValue;
            }
            return match;
          });
          await postModel.save({
            raw: newRaw,
            edit_reason: _discourseI18n.default.t("checklist.edit_reason")
          });
          postWidget.attrs.isSaving = false;
          postWidget.scheduleRerender();
        } finally {
          removeReadonlyClass(boxes);
        }
      };
    });
  }
  var _default = _exports.default = {
    name: "checklist",
    initialize() {
      (0, _pluginApi.withPluginApi)("0.1", api => initializePlugin(api));
    }
  };
});
define("discourse/plugins/checklist/lib/discourse-markdown/checklist", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  const REGEX = /\[(\s?|x|X)\]/g;
  function getClasses(str) {
    switch (str) {
      case "x":
        return "checked fa fa-check-square-o fa-fw";
      case "X":
        return "checked permanent fa fa-check-square fa-fw";
      default:
        return "fa fa-square-o fa-fw";
    }
  }
  function addCheckbox(result, content, match, state) {
    const classes = getClasses(match[1]);
    const checkOpenToken = new state.Token("check_open", "span", 1);
    checkOpenToken.attrs = [["class", `chcklst-box ${classes}`]];
    result.push(checkOpenToken);
    const checkCloseToken = new state.Token("check_close", "span", -1);
    result.push(checkCloseToken);
  }
  function applyCheckboxes(content, state) {
    let match;
    let result = null;
    let pos = 0;
    while (match = REGEX.exec(content)) {
      if (match.index > pos) {
        result = result || [];
        const token = new state.Token("text", "", 0);
        token.content = content.slice(pos, match.index);
        result.push(token);
      }
      pos = match.index + match[0].length;
      result = result || [];
      addCheckbox(result, content, match, state);
    }
    if (result && pos < content.length) {
      const token = new state.Token("text", "", 0);
      token.content = content.slice(pos);
      result.push(token);
    }
    return result;
  }
  function processChecklist(state) {
    let i,
      j,
      l,
      tokens,
      token,
      blockTokens = state.tokens,
      nesting = 0;
    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== "inline") {
        continue;
      }
      tokens = blockTokens[j].children;

      // We scan from the end, to keep position when new tags are added.
      // Use reversed logic in links start/end match
      for (i = tokens.length - 1; i >= 0; i--) {
        token = tokens[i];
        nesting += token.nesting;
        if (token.type === "text" && nesting === 0) {
          const processed = applyCheckboxes(token.content, state);
          if (processed) {
            blockTokens[j].children = tokens = state.md.utils.arrayReplaceAt(tokens, i, processed);
          }
        }
      }
    }
  }
  function setup(helper) {
    helper.registerOptions((opts, siteSettings) => {
      opts.features["checklist"] = !!siteSettings.checklist_enabled;
    });
    helper.allowList(["span.chcklst-stroked", "span.chcklst-box fa fa-square-o fa-fw", "span.chcklst-box checked fa fa-check-square-o fa-fw", "span.chcklst-box checked permanent fa fa-check-square fa-fw"]);
    helper.registerPlugin(md => md.core.ruler.push("checklist", processChecklist));
  }
});//# sourceMappingURL=checklist.map
