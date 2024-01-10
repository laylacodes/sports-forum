define("discourse/plugins/discourse-presence/discourse/components/composer-presence-display", ["exports", "@ember/component", "@ember/object/computed", "@ember/service", "discourse-common/utils/decorators", "@ember/template-factory"], function (_exports, _component, _computed, _service, _decorators, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _obj;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if this.shouldDisplay}}
    <div class="presence-users">
      <div class="presence-avatars">
        {{#each this.presenceUsers as |user|}}
          {{avatar user imageSize="small"}}
        {{/each}}
      </div>
      <span class="presence-text">
        <span class="description">
          {{~#if this.isReply~}}
            {{i18n "presence.replying" count=this.presenceUsers.length}}
          {{~else~}}
            {{i18n "presence.editing" count=this.presenceUsers.length}}
          {{~/if~}}
        </span>
        <span class="wave">
          <span class="dot">.</span>
          <span class="dot">.</span>
          <span class="dot">.</span>
        </span>
      </span>
    </div>
  {{/if}}
  */
  {
    "id": "fKramLOc",
    "block": "[[[41,[30,0,[\"shouldDisplay\"]],[[[1,\"  \"],[10,0],[14,0,\"presence-users\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"presence-avatars\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"presenceUsers\"]]],null]],null],null,[[[1,\"        \"],[1,[28,[35,3],[[30,1]],[[\"imageSize\"],[\"small\"]]]],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n    \"],[10,1],[14,0,\"presence-text\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"description\"],[12],[41,[30,0,[\"isReply\"]],[[[1,[28,[35,4],[\"presence.replying\"],[[\"count\"],[[30,0,[\"presenceUsers\",\"length\"]]]]]]],[]],[[[1,[28,[35,4],[\"presence.editing\"],[[\"count\"],[[30,0,[\"presenceUsers\",\"length\"]]]]]]],[]]],[13],[1,\"\\n      \"],[10,1],[14,0,\"wave\"],[12],[1,\"\\n        \"],[10,1],[14,0,\"dot\"],[12],[1,\".\"],[13],[1,\"\\n        \"],[10,1],[14,0,\"dot\"],[12],[1,\".\"],[13],[1,\"\\n        \"],[10,1],[14,0,\"dot\"],[12],[1,\".\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null]],[\"user\"],false,[\"if\",\"each\",\"-track-array\",\"avatar\",\"i18n\"]]",
    "moduleName": "discourse/plugins/discourse-presence/discourse/components/composer-presence-display.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, _component.default.extend((_dec = (0, _decorators.default)("model.replyingToTopic", "model.editingPost", "model.whisper", "model.composerOpened"), _dec2 = (0, _decorators.default)("model.topic.id", "isReply", "isWhisper"), _dec3 = (0, _decorators.default)("model.topic.id", "isReply", "isWhisper"), _dec4 = (0, _decorators.default)("isEdit", "model.post.id"), _dec5 = (0, _decorators.observes)("replyChannelName", "whisperChannelName", "editChannelName"), _dec6 = (0, _decorators.default)("isReply", "replyingUsers.[]", "editingUsers.[]"), _dec7 = (0, _decorators.on)("didInsertElement"), _dec8 = (0, _decorators.observes)("model.reply", "state", "model.post.id", "model.topic.id"), _dec9 = (0, _decorators.on)("willDestroyElement"), (_obj = {
    tagName: "",
    presence: (0, _service.inject)(),
    composerPresenceManager: (0, _service.inject)(),
    state(replyingToTopic, editingPost, whisper, composerOpen) {
      if (!composerOpen) {
        return;
      } else if (editingPost) {
        return "edit";
      } else if (whisper) {
        return "whisper";
      } else if (replyingToTopic) {
        return "reply";
      }
    },
    isReply: (0, _computed.equal)("state", "reply"),
    isEdit: (0, _computed.equal)("state", "edit"),
    isWhisper: (0, _computed.equal)("state", "whisper"),
    replyChannelName(topicId, isReply, isWhisper) {
      if (topicId && (isReply || isWhisper)) {
        return `/discourse-presence/reply/${topicId}`;
      }
    },
    whisperChannelName(topicId, isReply, isWhisper) {
      if (topicId && this.currentUser.whisperer && (isReply || isWhisper)) {
        return `/discourse-presence/whisper/${topicId}`;
      }
    },
    editChannelName(isEdit, postId) {
      if (isEdit) {
        return `/discourse-presence/edit/${postId}`;
      }
    },
    _setupChannel(channelKey, name) {
      if (this[channelKey]?.name !== name) {
        this[channelKey]?.unsubscribe();
        if (name) {
          this.set(channelKey, this.presence.getChannel(name));
          this[channelKey].subscribe();
        } else if (this[channelKey]) {
          this.set(channelKey, null);
        }
      }
    },
    _setupChannels() {
      this._setupChannel("replyChannel", this.replyChannelName);
      this._setupChannel("whisperChannel", this.whisperChannelName);
      this._setupChannel("editChannel", this.editChannelName);
    },
    _cleanupChannels() {
      this._setupChannel("replyChannel", null);
      this._setupChannel("whisperChannel", null);
      this._setupChannel("editChannel", null);
    },
    replyingUsers: (0, _computed.union)("replyChannel.users", "whisperChannel.users"),
    editingUsers: (0, _computed.readOnly)("editChannel.users"),
    presenceUsers(isReply, replyingUsers, editingUsers) {
      const users = isReply ? replyingUsers : editingUsers;
      return users?.filter(u => u.id !== this.currentUser.id)?.slice(0, this.siteSettings.presence_max_users_shown);
    },
    shouldDisplay: (0, _computed.gt)("presenceUsers.length", 0),
    subscribe() {
      this._setupChannels();
    },
    _contentChanged() {
      if (this.model.reply === "") {
        return;
      }
      const entity = this.state === "edit" ? this.model?.post : this.model?.topic;
      this.composerPresenceManager.notifyState(this.state, entity?.id);
    },
    closeComposer() {
      this._cleanupChannels();
      this.composerPresenceManager.leave();
    }
  }, (_applyDecoratedDescriptor(_obj, "state", [_dec], Object.getOwnPropertyDescriptor(_obj, "state"), _obj), _applyDecoratedDescriptor(_obj, "replyChannelName", [_dec2], Object.getOwnPropertyDescriptor(_obj, "replyChannelName"), _obj), _applyDecoratedDescriptor(_obj, "whisperChannelName", [_dec3], Object.getOwnPropertyDescriptor(_obj, "whisperChannelName"), _obj), _applyDecoratedDescriptor(_obj, "editChannelName", [_dec4], Object.getOwnPropertyDescriptor(_obj, "editChannelName"), _obj), _applyDecoratedDescriptor(_obj, "_setupChannels", [_dec5], Object.getOwnPropertyDescriptor(_obj, "_setupChannels"), _obj), _applyDecoratedDescriptor(_obj, "presenceUsers", [_dec6], Object.getOwnPropertyDescriptor(_obj, "presenceUsers"), _obj), _applyDecoratedDescriptor(_obj, "subscribe", [_dec7], Object.getOwnPropertyDescriptor(_obj, "subscribe"), _obj), _applyDecoratedDescriptor(_obj, "_contentChanged", [_dec8], Object.getOwnPropertyDescriptor(_obj, "_contentChanged"), _obj), _applyDecoratedDescriptor(_obj, "closeComposer", [_dec9], Object.getOwnPropertyDescriptor(_obj, "closeComposer"), _obj)), _obj))));
});
define("discourse/plugins/discourse-presence/discourse/components/topic-presence-display", ["exports", "@ember/component", "@ember/object/computed", "@ember/service", "discourse-common/utils/decorators", "@ember/template-factory"], function (_exports, _component, _computed, _service, _decorators, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _obj;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if this.shouldDisplay}}
    <div class="presence-users">
      <div class="presence-avatars">
        {{#each this.users as |user|}}
          <UserLink @user={{user}}>
            {{avatar user imageSize="small"}}
          </UserLink>
        {{/each}}
      </div>
      <span class="presence-text">
        <span class="description">
          {{i18n "presence.replying_to_topic" count=this.users.length}}
        </span>
        <span class="wave">
          <span class="dot">.</span>
          <span class="dot">.</span>
          <span class="dot">.</span>
        </span>
      </span>
    </div>
  {{/if}}
  */
  {
    "id": "4V683/rb",
    "block": "[[[41,[30,0,[\"shouldDisplay\"]],[[[1,\"  \"],[10,0],[14,0,\"presence-users\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"presence-avatars\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"users\"]]],null]],null],null,[[[1,\"        \"],[8,[39,3],null,[[\"@user\"],[[30,1]]],[[\"default\"],[[[[1,\"\\n          \"],[1,[28,[35,4],[[30,1]],[[\"imageSize\"],[\"small\"]]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n    \"],[10,1],[14,0,\"presence-text\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"description\"],[12],[1,\"\\n        \"],[1,[28,[35,5],[\"presence.replying_to_topic\"],[[\"count\"],[[30,0,[\"users\",\"length\"]]]]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,1],[14,0,\"wave\"],[12],[1,\"\\n        \"],[10,1],[14,0,\"dot\"],[12],[1,\".\"],[13],[1,\"\\n        \"],[10,1],[14,0,\"dot\"],[12],[1,\".\"],[13],[1,\"\\n        \"],[10,1],[14,0,\"dot\"],[12],[1,\".\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null]],[\"user\"],false,[\"if\",\"each\",\"-track-array\",\"user-link\",\"avatar\",\"i18n\"]]",
    "moduleName": "discourse/plugins/discourse-presence/discourse/components/topic-presence-display.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, _component.default.extend((_dec = (0, _decorators.default)("replyChannel.users.[]"), _dec2 = (0, _decorators.default)("whisperChannel.users.[]"), _dec3 = (0, _decorators.default)("topic.id"), _dec4 = (0, _decorators.default)("topic.id"), _dec5 = (0, _decorators.on)("willDestroyElement"), (_obj = {
    topic: null,
    presence: (0, _service.inject)(),
    replyChannel: null,
    whisperChannel: null,
    replyUsers(users) {
      return users?.filter(u => u.id !== this.currentUser.id);
    },
    whisperUsers(users) {
      return users?.filter(u => u.id !== this.currentUser.id);
    },
    users: (0, _computed.union)("replyUsers", "whisperUsers"),
    replyChannelName(id) {
      return `/discourse-presence/reply/${id}`;
    },
    whisperChannelName(id) {
      return `/discourse-presence/whisper/${id}`;
    },
    shouldDisplay: (0, _computed.gt)("users.length", 0),
    didReceiveAttrs() {
      this._super(...arguments);
      if (this.replyChannel?.name !== this.replyChannelName) {
        this.replyChannel?.unsubscribe();
        this.set("replyChannel", this.presence.getChannel(this.replyChannelName));
        this.replyChannel.subscribe();
      }
      if (this.currentUser.staff && this.whisperChannel?.name !== this.whisperChannelName) {
        this.whisperChannel?.unsubscribe();
        this.set("whisperChannel", this.presence.getChannel(this.whisperChannelName));
        this.whisperChannel.subscribe();
      }
    },
    _destroyed() {
      this.replyChannel?.unsubscribe();
      this.whisperChannel?.unsubscribe();
    }
  }, (_applyDecoratedDescriptor(_obj, "replyUsers", [_dec], Object.getOwnPropertyDescriptor(_obj, "replyUsers"), _obj), _applyDecoratedDescriptor(_obj, "whisperUsers", [_dec2], Object.getOwnPropertyDescriptor(_obj, "whisperUsers"), _obj), _applyDecoratedDescriptor(_obj, "replyChannelName", [_dec3], Object.getOwnPropertyDescriptor(_obj, "replyChannelName"), _obj), _applyDecoratedDescriptor(_obj, "whisperChannelName", [_dec4], Object.getOwnPropertyDescriptor(_obj, "whisperChannelName"), _obj), _applyDecoratedDescriptor(_obj, "_destroyed", [_dec5], Object.getOwnPropertyDescriptor(_obj, "_destroyed"), _obj)), _obj))));
});
define("discourse/plugins/discourse-presence/discourse/services/composer-presence-manager", ["exports", "@ember/runloop", "@ember/service", "discourse-common/config/environment"], function (_exports, _runloop, _service, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const PRESENCE_CHANNEL_PREFIX = "/discourse-presence";
  const KEEP_ALIVE_DURATION_SECONDS = 10;
  let ComposerPresenceManager = _exports.default = (_class = class ComposerPresenceManager extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "presence", _descriptor, this);
    }
    notifyState(intent, id) {
      if (this.siteSettings.allow_users_to_hide_profile && this.currentUser.user_option.hide_profile_and_presence) {
        return;
      }
      if (intent === undefined) {
        return this.leave();
      }
      if (!["reply", "whisper", "edit"].includes(intent)) {
        throw `Unknown intent ${intent}`;
      }
      const state = `${intent}/${id}`;
      if (this._state !== state) {
        this._enter(intent, id);
        this._state = state;
      }
      if (!(0, _environment.isTesting)()) {
        this._autoLeaveTimer = (0, _runloop.debounce)(this, this.leave, KEEP_ALIVE_DURATION_SECONDS * 1000);
      }
    }
    leave() {
      this._presentChannel?.leave();
      this._presentChannel = null;
      this._state = null;
      if (this._autoLeaveTimer) {
        (0, _runloop.cancel)(this._autoLeaveTimer);
        this._autoLeaveTimer = null;
      }
    }
    _enter(intent, id) {
      this.leave();
      let channelName = `${PRESENCE_CHANNEL_PREFIX}/${intent}/${id}`;
      this._presentChannel = this.presence.getChannel(channelName);
      this._presentChannel.enter();
    }
    willDestroy() {
      this.leave();
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "presence", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
define("discourse/plugins/discourse-presence/discourse/templates/connectors/before-composer-controls/presence", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <ComposerPresenceDisplay @model={{this.model}} />
  */
  {
    "id": "G/OxL/Vj",
    "block": "[[[8,[39,0],null,[[\"@model\"],[[30,0,[\"model\"]]]],null]],[],false,[\"composer-presence-display\"]]",
    "moduleName": "discourse/plugins/discourse-presence/discourse/templates/connectors/before-composer-controls/presence.hbs",
    "isStrictMode": false
  });
});
define("discourse/plugins/discourse-presence/discourse/templates/connectors/topic-above-footer-buttons/presence", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Note: the topic-above-footer-buttons outlet is only rendered for logged-in users }}
  <TopicPresenceDisplay @topic={{this.model}} />
  */
  {
    "id": "CmudhbhK",
    "block": "[[[8,[39,0],null,[[\"@topic\"],[[30,0,[\"model\"]]]],null]],[],false,[\"topic-presence-display\"]]",
    "moduleName": "discourse/plugins/discourse-presence/discourse/templates/connectors/topic-above-footer-buttons/presence.hbs",
    "isStrictMode": false
  });
});//# sourceMappingURL=discourse-presence.map
