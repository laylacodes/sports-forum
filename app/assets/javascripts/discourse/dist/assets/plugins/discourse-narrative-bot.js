define("discourse/plugins/discourse-narrative-bot/initializers/new-user-narrative", ["exports", "discourse/lib/plugin-api", "discourse-common/utils/decorators"], function (_exports, _pluginApi, _decorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _obj;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  var _default = _exports.default = (_obj = {
    name: "new-user-narrative",
    initialize(container) {
      const siteSettings = container.lookup("service:site-settings");
      if (!siteSettings.discourse_narrative_bot_enabled) {
        return;
      }
      this.messageBus = container.lookup("service:message-bus");
      this.appEvents = container.lookup("service:app-events");
      (0, _pluginApi.withPluginApi)("0.8.7", api => {
        this.currentUser = api.getCurrentUser();
        if (!this.currentUser) {
          return;
        }
        api.dispatchWidgetAppEvent("site-header", "header", "header:search-context-trigger");
        api.attachWidgetAction("header", "headerSearchContextTrigger", function () {
          if (this.site.mobileView) {
            this.state.skipSearchContext = false;
          } else {
            this.state.contextEnabled = true;
            this.state.searchContextType = "topic";
          }
        });
        this.messageBus.subscribe(`/new_user_narrative/tutorial_search/${this.currentUser.id}`, this.onMessage);
      });
    },
    teardown() {
      if (this.currentUser) {
        this.messageBus?.unsubscribe(`/new_user_narrative/tutorial_search/${this.currentUser.id}`, this.onMessage);
      }
    },
    onMessage() {
      this.appEvents.trigger("header:search-context-trigger");
    }
  }, (_applyDecoratedDescriptor(_obj, "onMessage", [_decorators.bind], Object.getOwnPropertyDescriptor(_obj, "onMessage"), _obj)), _obj);
});//# sourceMappingURL=discourse-narrative-bot.map
