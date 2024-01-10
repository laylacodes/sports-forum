define("discourse/plugins/discourse-details/initializers/apply-details", ["exports", "jquery", "discourse/lib/plugin-api", "discourse-i18n"], function (_exports, _jquery, _pluginApi, _discourseI18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function initializeDetails(api) {
    api.decorateCooked($elem => (0, _jquery.default)("details", $elem), {
      id: "discourse-details"
    });
    api.addComposerToolbarPopupMenuOption({
      action: function (toolbarEvent) {
        toolbarEvent.applySurround("\n" + `[details="${_discourseI18n.default.t("composer.details_title")}"]` + "\n", "\n[/details]\n", "details_text", {
          multiline: false
        });
      },
      icon: "caret-right",
      label: "details.title"
    });
  }
  var _default = _exports.default = {
    name: "apply-details",
    initialize() {
      (0, _pluginApi.withPluginApi)("1.14.0", initializeDetails);
    }
  };
});
define("discourse/plugins/discourse-details/lib/discourse-markdown/details", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  const rule = {
    tag: "details",
    before(state, tagInfo) {
      const attrs = tagInfo.attrs;
      state.push("bbcode_open", "details", 1);
      state.push("bbcode_open", "summary", 1);
      let token = state.push("text", "", 0);
      token.content = attrs["_default"] || "";
      state.push("bbcode_close", "summary", -1);
    },
    after(state) {
      state.push("bbcode_close", "details", -1);
    }
  };
  function setup(helper) {
    helper.allowList(["summary", "summary[title]", "details", "details[open]", "details.elided"]);
    helper.registerPlugin(md => {
      md.block.bbcode.ruler.push("details", rule);
    });
  }
});//# sourceMappingURL=discourse-details.map
