define("discourse/plugins/poll/discourse/components/modal/poll-breakdown", ["exports", "@ember/component", "@ember/object", "@ember/service", "@ember/string", "@ember/template", "discourse/lib/ajax", "discourse/lib/ajax-error", "discourse/lib/load-script", "discourse-common/utils/decorators", "discourse-i18n", "@ember/template-factory"], function (_exports, _component, _object, _service, _string, _template, _ajax, _ajaxError, _loadScript, _decorators, _discourseI18n, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! template-lint-disable no-invalid-interactive }}
  <DModal
    @title={{i18n "poll.breakdown.title"}}
    @closeModal={{@closeModal}}
    class="poll-breakdown has-tabs"
  >
    <:headerBelowTitle>
      <ul class="modal-tabs">
        <li
          class={{concat-class
            "modal-tab percentage"
            (if (eq this.displayMode "percentage") "is-active")
          }}
          {{on "click" (fn (mut this.displayMode) "percentage")}}
        >{{i18n "poll.breakdown.percentage"}}</li>
        <li
          class={{concat-class
            "modal-tab count"
            (if (eq this.displayMode "count") "is-active")
          }}
          {{on "click" (fn (mut this.displayMode) "count")}}
        >{{i18n "poll.breakdown.count"}}</li>
      </ul>
    </:headerBelowTitle>
    <:body>
      <div class="poll-breakdown-sidebar">
        <p class="poll-breakdown-title">
          {{this.title}}
        </p>
  
        <div class="poll-breakdown-total-votes">{{i18n
            "poll.breakdown.votes"
            count=this.model.poll.voters
          }}</div>
  
        <ul class="poll-breakdown-options">
          {{#each this.model.poll.options as |option index|}}
            <PollBreakdownOption
              @option={{option}}
              @index={{index}}
              @totalVotes={{this.totalVotes}}
              @optionsCount={{this.model.poll.options.length}}
              @displayMode={{this.displayMode}}
              @highlightedOption={{this.highlightedOption}}
              @onMouseOver={{fn (mut this.highlightedOption) index}}
              @onMouseOut={{fn (mut this.highlightedOption) null}}
            />
          {{/each}}
        </ul>
      </div>
  
      <div class="poll-breakdown-body">
        <div class="poll-breakdown-body-header">
          <label class="poll-breakdown-body-header-label">{{i18n
              "poll.breakdown.breakdown"
            }}</label>
  
          <ComboBox
            @content={{this.groupableUserFields}}
            @value={{this.groupedBy}}
            @nameProperty="label"
            @onChange={{action this.setGrouping}}
            class="poll-breakdown-dropdown"
          />
        </div>
  
        <div class="poll-breakdown-charts">
          {{#each this.charts as |chart|}}
            <PollBreakdownChart
              @group={{get chart "group"}}
              @options={{get chart "options"}}
              @displayMode={{this.displayMode}}
              @highlightedOption={{this.highlightedOption}}
              @setHighlightedOption={{fn (mut this.highlightedOption)}}
            />
          {{/each}}
        </div>
      </div>
    </:body>
  </DModal>
  */
  {
    "id": "6D02y51O",
    "block": "[[[8,[39,0],[[24,0,\"poll-breakdown has-tabs\"]],[[\"@title\",\"@closeModal\"],[[28,[37,1],[\"poll.breakdown.title\"],null],[30,1]]],[[\"headerBelowTitle\",\"body\"],[[[[1,\"\\n    \"],[10,\"ul\"],[14,0,\"modal-tabs\"],[12],[1,\"\\n      \"],[11,\"li\"],[16,0,[28,[37,2],[\"modal-tab percentage\",[52,[28,[37,4],[[30,0,[\"displayMode\"]],\"percentage\"],null],\"is-active\"]],null]],[4,[38,5],[\"click\",[28,[37,6],[[28,[37,7],[[30,0,[\"displayMode\"]]],null],\"percentage\"],null]],null],[12],[1,[28,[35,1],[\"poll.breakdown.percentage\"],null]],[13],[1,\"\\n      \"],[11,\"li\"],[16,0,[28,[37,2],[\"modal-tab count\",[52,[28,[37,4],[[30,0,[\"displayMode\"]],\"count\"],null],\"is-active\"]],null]],[4,[38,5],[\"click\",[28,[37,6],[[28,[37,7],[[30,0,[\"displayMode\"]]],null],\"count\"],null]],null],[12],[1,[28,[35,1],[\"poll.breakdown.count\"],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,0],[14,0,\"poll-breakdown-sidebar\"],[12],[1,\"\\n      \"],[10,2],[14,0,\"poll-breakdown-title\"],[12],[1,\"\\n        \"],[1,[30,0,[\"title\"]]],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"poll-breakdown-total-votes\"],[12],[1,[28,[35,1],[\"poll.breakdown.votes\"],[[\"count\"],[[30,0,[\"model\",\"poll\",\"voters\"]]]]]],[13],[1,\"\\n\\n      \"],[10,\"ul\"],[14,0,\"poll-breakdown-options\"],[12],[1,\"\\n\"],[42,[28,[37,9],[[28,[37,9],[[30,0,[\"model\",\"poll\",\"options\"]]],null]],null],null,[[[1,\"          \"],[8,[39,10],null,[[\"@option\",\"@index\",\"@totalVotes\",\"@optionsCount\",\"@displayMode\",\"@highlightedOption\",\"@onMouseOver\",\"@onMouseOut\"],[[30,2],[30,3],[30,0,[\"totalVotes\"]],[30,0,[\"model\",\"poll\",\"options\",\"length\"]],[30,0,[\"displayMode\"]],[30,0,[\"highlightedOption\"]],[28,[37,6],[[28,[37,7],[[30,0,[\"highlightedOption\"]]],null],[30,3]],null],[28,[37,6],[[28,[37,7],[[30,0,[\"highlightedOption\"]]],null],null],null]]],null],[1,\"\\n\"]],[2,3]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"poll-breakdown-body\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"poll-breakdown-body-header\"],[12],[1,\"\\n        \"],[10,\"label\"],[14,0,\"poll-breakdown-body-header-label\"],[12],[1,[28,[35,1],[\"poll.breakdown.breakdown\"],null]],[13],[1,\"\\n\\n        \"],[8,[39,11],[[24,0,\"poll-breakdown-dropdown\"]],[[\"@content\",\"@value\",\"@nameProperty\",\"@onChange\"],[[30,0,[\"groupableUserFields\"]],[30,0,[\"groupedBy\"]],\"label\",[28,[37,12],[[30,0],[30,0,[\"setGrouping\"]]],null]]],null],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"poll-breakdown-charts\"],[12],[1,\"\\n\"],[42,[28,[37,9],[[28,[37,9],[[30,0,[\"charts\"]]],null]],null],null,[[[1,\"          \"],[8,[39,13],null,[[\"@group\",\"@options\",\"@displayMode\",\"@highlightedOption\",\"@setHighlightedOption\"],[[28,[37,14],[[30,4],\"group\"],null],[28,[37,14],[[30,4],\"options\"],null],[30,0,[\"displayMode\"]],[30,0,[\"highlightedOption\"]],[28,[37,6],[[28,[37,7],[[30,0,[\"highlightedOption\"]]],null]],null]]],null],[1,\"\\n\"]],[4]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]]],[\"@closeModal\",\"option\",\"index\",\"chart\"],false,[\"d-modal\",\"i18n\",\"concat-class\",\"if\",\"eq\",\"on\",\"fn\",\"mut\",\"each\",\"-track-array\",\"poll-breakdown-option\",\"combo-box\",\"action\",\"poll-breakdown-chart\",\"get\"]]",
    "moduleName": "discourse/plugins/poll/discourse/components/modal/poll-breakdown.hbs",
    "isStrictMode": false
  });
  let PollBreakdownModal = _exports.default = (_dec = (0, _decorators.default)("model.poll.title", "model.post.topic.title"), _dec2 = (0, _decorators.default)("model.groupableUserFields"), _dec3 = (0, _decorators.default)("model.poll.options"), (_class = class PollBreakdownModal extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "dialog", _descriptor, this);
      _defineProperty(this, "model", null);
      _defineProperty(this, "charts", null);
      _defineProperty(this, "groupedBy", null);
      _defineProperty(this, "highlightedOption", null);
      _defineProperty(this, "displayMode", "percentage");
    }
    init() {
      this.set("groupedBy", this.model.groupableUserFields[0]);
      (0, _loadScript.default)("/javascripts/Chart.min.js").then(() => (0, _loadScript.default)("/javascripts/chartjs-plugin-datalabels.min.js")).then(() => {
        this.fetchGroupedPollData();
      });
      super.init(...arguments);
    }
    title(pollTitle, topicTitle) {
      return pollTitle ? (0, _template.htmlSafe)(pollTitle) : topicTitle;
    }
    groupableUserFields(fields) {
      return fields.map(field => {
        const transformed = field.split("_").filter(Boolean);
        if (transformed.length > 1) {
          transformed[0] = (0, _string.classify)(transformed[0]);
        }
        return {
          id: field,
          label: transformed.join(" ")
        };
      });
    }
    totalVotes(options) {
      return options.reduce((sum, option) => sum + option.votes, 0);
    }
    fetchGroupedPollData() {
      return (0, _ajax.ajax)("/polls/grouped_poll_results.json", {
        data: {
          post_id: this.model.post.id,
          poll_name: this.model.poll.name,
          user_field_name: this.groupedBy
        }
      }).catch(error => {
        if (error) {
          (0, _ajaxError.popupAjaxError)(error);
        } else {
          this.dialog.alert(_discourseI18n.default.t("poll.error_while_fetching_voters"));
        }
      }).then(result => {
        if (this.isDestroying || this.isDestroyed) {
          return;
        }
        this.set("charts", result.grouped_results);
      });
    }
    setGrouping(value) {
      this.set("groupedBy", value);
      this.fetchGroupedPollData();
    }
    onSelectPanel(panel) {
      this.set("displayMode", panel.id);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dialog", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "title", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "title"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "groupableUserFields", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "groupableUserFields"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "totalVotes", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "totalVotes"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setGrouping", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setGrouping"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onSelectPanel", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onSelectPanel"), _class.prototype)), _class));
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, PollBreakdownModal);
});
define("discourse/plugins/poll/discourse/components/modal/poll-ui-builder", ["exports", "@ember/component", "@ember/object", "@ember/object/computed", "@ember/service", "@ember-decorators/object", "discourse-common/utils/decorators", "discourse-i18n", "@ember/template-factory"], function (_exports, _component, _object, _computed, _service, _object2, _decorators, _discourseI18n, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.REGULAR_POLL_TYPE = _exports.PIE_CHART_TYPE = _exports.NUMBER_POLL_TYPE = _exports.MULTIPLE_POLL_TYPE = _exports.BAR_CHART_TYPE = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _descriptor, _descriptor2, _descriptor3;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <DModal
    @title={{i18n "poll.ui_builder.title"}}
    @closeModal={{@closeModal}}
    @inline={{@inline}}
    class="poll-ui-builder"
  >
    <:body>
      <div class="input-group poll-type">
        <a
          href
          {{on "click" (fn this.updatePollType "regular")}}
          class="poll-type-value poll-type-value-regular
            {{if this.isRegular 'active'}}"
        >
          {{i18n "poll.ui_builder.poll_type.regular"}}
        </a>
  
        <a
          href
          {{on "click" (fn this.updatePollType "multiple")}}
          class="poll-type-value poll-type-value-multiple
            {{if this.isMultiple 'active'}}"
        >
          {{i18n "poll.ui_builder.poll_type.multiple"}}
        </a>
  
        {{#if this.showNumber}}
          <a
            href
            {{on "click" (fn this.updatePollType "number")}}
            class="poll-type-value poll-type-value-number
              {{if this.isNumber 'active'}}"
          >
            {{i18n "poll.ui_builder.poll_type.number"}}
          </a>
        {{/if}}
      </div>
  
      {{#if this.showAdvanced}}
        <div class="input-group poll-title">
          <label class="input-group-label">{{i18n
              "poll.ui_builder.poll_title.label"
            }}</label>
          <Input @value={{this.pollTitle}} />
        </div>
      {{/if}}
  
      {{#unless this.isNumber}}
        <div class="poll-options">
          {{#if this.showAdvanced}}
            <label class="input-group-label">{{i18n
                "poll.ui_builder.poll_options.label"
              }}</label>
            <Textarea
              @value={{this.pollOptionsText}}
              {{on "input" this.onOptionsTextChange}}
            />
            {{#if this.showMinNumOfOptionsValidation}}
              {{#unless this.minNumOfOptionsValidation.ok}}
                <InputTip @validation={{this.minNumOfOptionsValidation}} />
              {{/unless}}
            {{/if}}
          {{else}}
            {{#each this.pollOptions as |option index|}}
              <div class="input-group poll-option-value">
                <input
                  type="text"
                  value={{option.value}}
                  {{auto-focus}}
                  {{on "input" (fn this.updateValue option)}}
                  {{on "keydown" (fn this.onInputKeydown index)}}
                />
                {{#if this.canRemoveOption}}
                  <DButton
                    @icon="trash-alt"
                    @action={{fn this.removeOption option}}
                  />
                {{/if}}
              </div>
            {{/each}}
  
            <div class="poll-option-controls">
              <DButton
                @icon="plus"
                @label="poll.ui_builder.poll_options.add"
                @action={{fn this.addOption -1}}
                class="btn-default poll-option-add"
              />
              {{#if
                (and
                  this.showMinNumOfOptionsValidation
                  (not this.minNumOfOptionsValidation.ok)
                )
              }}
                <InputTip @validation={{this.minNumOfOptionsValidation}} />
              {{/if}}
            </div>
          {{/if}}
        </div>
      {{/unless}}
  
      {{#unless this.isRegular}}
        <div class="options">
          <div class="input-group poll-number">
            <label class="input-group-label">{{i18n
                "poll.ui_builder.poll_config.min"
              }}</label>
            <Input
              @type="number"
              @value={{this.pollMin}}
              class="poll-options-min"
              min="1"
            />
          </div>
  
          <div class="input-group poll-number">
            <label class="input-group-label">{{i18n
                "poll.ui_builder.poll_config.max"
              }}</label>
            <Input
              @type="number"
              @value={{this.pollMax}}
              class="poll-options-max"
              min="1"
            />
          </div>
  
          {{#if this.isNumber}}
            <div class="input-group poll-number">
              <label class="input-group-label">{{i18n
                  "poll.ui_builder.poll_config.step"
                }}</label>
              <Input
                @type="number"
                @value={{this.pollStep}}
                min="1"
                class="poll-options-step"
              />
            </div>
          {{/if}}
        </div>
  
        {{#unless this.minMaxValueValidation.ok}}
          <InputTip @validation={{this.minMaxValueValidation}} />
        {{/unless}}
      {{/unless}}
  
      <div class="input-group poll-public">
        <DToggleSwitch
          @state={{this.publicPoll}}
          @label="poll.ui_builder.poll_public.label"
          class="poll-toggle-public"
          {{on "click" this.togglePublic}}
        />
      </div>
  
      {{#if this.showAdvanced}}
        <div class="input-group poll-allowed-groups">
          <label class="input-group-label">{{i18n
              "poll.ui_builder.poll_groups.label"
            }}</label>
          <GroupChooser
            @content={{this.siteGroups}}
            @value={{this.pollGroups}}
            @onChange={{action (mut this.pollGroups)}}
            @labelProperty="name"
            @valueProperty="name"
          />
        </div>
  
        <div class="input-group poll-date">
          <label class="input-group-label">{{i18n
              "poll.ui_builder.automatic_close.label"
            }}</label>
          <DateTimeInput
            @date={{this.pollAutoClose}}
            @onChange={{action (mut this.pollAutoClose)}}
            @clearable={{true}}
            @useGlobalPickerContainer={{true}}
          />
        </div>
  
        <div class="input-group poll-select">
          <label class="input-group-label">{{i18n
              "poll.ui_builder.poll_result.label"
            }}</label>
          <ComboBox
            @content={{this.pollResults}}
            @value={{this.pollResult}}
            @valueProperty="value"
            @onChange={{action (mut this.pollResult)}}
            class="poll-result"
          />
        </div>
  
        {{#unless this.isNumber}}
          <div class="input-group poll-select column">
            <label class="input-group-label">{{i18n
                "poll.ui_builder.poll_chart_type.label"
              }}</label>
  
            <div class="radio-group">
              <RadioButton
                @id="poll-chart-type-bar"
                @name="poll-chart-type"
                @value="bar"
                @selection={{this.chartType}}
              />
              <label for="poll-chart-type-bar">{{d-icon "chart-bar"}}
                {{i18n "poll.ui_builder.poll_chart_type.bar"}}</label>
            </div>
  
            <div class="radio-group">
              <RadioButton
                @id="poll-chart-type-pie"
                @name="poll-chart-type"
                @value="pie"
                @selection={{this.chartType}}
              />
              <label for="poll-chart-type-pie">{{d-icon "chart-pie"}}
                {{i18n "poll.ui_builder.poll_chart_type.pie"}}</label>
            </div>
          </div>
        {{/unless}}
      {{/if}}
    </:body>
    <:footer>
      <DButton
        @action={{this.insertPoll}}
        @icon="chart-bar"
        @label="poll.ui_builder.insert"
        @disabled={{this.disableInsert}}
        class="btn-primary insert-poll"
      />
  
      <DButton @label="cancel" @action={{@closeModal}} class="btn-flat" />
  
      <DButton
        @action={{this.toggleAdvanced}}
        @icon="cog"
        @title={{if
          this.showAdvanced
          "poll.ui_builder.hide_advanced"
          "poll.ui_builder.show_advanced"
        }}
        class="btn-default show-advanced"
      />
  
    </:footer>
  </DModal>
  */
  {
    "id": "dEpF9Aro",
    "block": "[[[8,[39,0],[[24,0,\"poll-ui-builder\"]],[[\"@title\",\"@closeModal\",\"@inline\"],[[28,[37,1],[\"poll.ui_builder.title\"],null],[30,1],[30,2]]],[[\"body\",\"footer\"],[[[[1,\"\\n    \"],[10,0],[14,0,\"input-group poll-type\"],[12],[1,\"\\n      \"],[11,3],[24,6,\"\"],[16,0,[29,[\"poll-type-value poll-type-value-regular\\n          \",[52,[30,0,[\"isRegular\"]],\"active\"]]]],[4,[38,3],[\"click\",[28,[37,4],[[30,0,[\"updatePollType\"]],\"regular\"],null]],null],[12],[1,\"\\n        \"],[1,[28,[35,1],[\"poll.ui_builder.poll_type.regular\"],null]],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[11,3],[24,6,\"\"],[16,0,[29,[\"poll-type-value poll-type-value-multiple\\n          \",[52,[30,0,[\"isMultiple\"]],\"active\"]]]],[4,[38,3],[\"click\",[28,[37,4],[[30,0,[\"updatePollType\"]],\"multiple\"],null]],null],[12],[1,\"\\n        \"],[1,[28,[35,1],[\"poll.ui_builder.poll_type.multiple\"],null]],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"showNumber\"]],[[[1,\"        \"],[11,3],[24,6,\"\"],[16,0,[29,[\"poll-type-value poll-type-value-number\\n            \",[52,[30,0,[\"isNumber\"]],\"active\"]]]],[4,[38,3],[\"click\",[28,[37,4],[[30,0,[\"updatePollType\"]],\"number\"],null]],null],[12],[1,\"\\n          \"],[1,[28,[35,1],[\"poll.ui_builder.poll_type.number\"],null]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"showAdvanced\"]],[[[1,\"      \"],[10,0],[14,0,\"input-group poll-title\"],[12],[1,\"\\n        \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,1],[\"poll.ui_builder.poll_title.label\"],null]],[13],[1,\"\\n        \"],[8,[39,5],null,[[\"@value\"],[[30,0,[\"pollTitle\"]]]],null],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[51,[30,0,[\"isNumber\"]]],[[[1,\"      \"],[10,0],[14,0,\"poll-options\"],[12],[1,\"\\n\"],[41,[30,0,[\"showAdvanced\"]],[[[1,\"          \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,1],[\"poll.ui_builder.poll_options.label\"],null]],[13],[1,\"\\n          \"],[8,[39,7],[[4,[38,3],[\"input\",[30,0,[\"onOptionsTextChange\"]]],null]],[[\"@value\"],[[30,0,[\"pollOptionsText\"]]]],null],[1,\"\"],[41,[30,0,[\"showMinNumOfOptionsValidation\"]],[[[41,[51,[30,0,[\"minNumOfOptionsValidation\",\"ok\"]]],[[[1,\"              \"],[8,[39,8],null,[[\"@validation\"],[[30,0,[\"minNumOfOptionsValidation\"]]]],null],[1,\"\\n\"]],[]],null]],[]],null]],[]],[[[42,[28,[37,10],[[28,[37,10],[[30,0,[\"pollOptions\"]]],null]],null],null,[[[1,\"            \"],[10,0],[14,0,\"input-group poll-option-value\"],[12],[1,\"\\n              \"],[11,\"input\"],[16,2,[30,3,[\"value\"]]],[24,4,\"text\"],[4,[38,11],null,null],[4,[38,3],[\"input\",[28,[37,4],[[30,0,[\"updateValue\"]],[30,3]],null]],null],[4,[38,3],[\"keydown\",[28,[37,4],[[30,0,[\"onInputKeydown\"]],[30,4]],null]],null],[12],[13],[1,\"\\n\"],[41,[30,0,[\"canRemoveOption\"]],[[[1,\"                \"],[8,[39,12],null,[[\"@icon\",\"@action\"],[\"trash-alt\",[28,[37,4],[[30,0,[\"removeOption\"]],[30,3]],null]]],null],[1,\"\\n\"]],[]],null],[1,\"            \"],[13],[1,\"\\n\"]],[3,4]],null],[1,\"\\n          \"],[10,0],[14,0,\"poll-option-controls\"],[12],[1,\"\\n            \"],[8,[39,12],[[24,0,\"btn-default poll-option-add\"]],[[\"@icon\",\"@label\",\"@action\"],[\"plus\",\"poll.ui_builder.poll_options.add\",[28,[37,4],[[30,0,[\"addOption\"]],-1],null]]],null],[1,\"\\n\"],[41,[28,[37,13],[[30,0,[\"showMinNumOfOptionsValidation\"]],[28,[37,14],[[30,0,[\"minNumOfOptionsValidation\",\"ok\"]]],null]],null],[[[1,\"              \"],[8,[39,8],null,[[\"@validation\"],[[30,0,[\"minNumOfOptionsValidation\"]]]],null],[1,\"\\n\"]],[]],null],[1,\"          \"],[13],[1,\"\\n\"]],[]]],[1,\"      \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[51,[30,0,[\"isRegular\"]]],[[[1,\"      \"],[10,0],[14,0,\"options\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"input-group poll-number\"],[12],[1,\"\\n          \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,1],[\"poll.ui_builder.poll_config.min\"],null]],[13],[1,\"\\n          \"],[8,[39,5],[[24,0,\"poll-options-min\"],[24,\"min\",\"1\"]],[[\"@type\",\"@value\"],[\"number\",[30,0,[\"pollMin\"]]]],null],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"input-group poll-number\"],[12],[1,\"\\n          \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,1],[\"poll.ui_builder.poll_config.max\"],null]],[13],[1,\"\\n          \"],[8,[39,5],[[24,0,\"poll-options-max\"],[24,\"min\",\"1\"]],[[\"@type\",\"@value\"],[\"number\",[30,0,[\"pollMax\"]]]],null],[1,\"\\n        \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"isNumber\"]],[[[1,\"          \"],[10,0],[14,0,\"input-group poll-number\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,1],[\"poll.ui_builder.poll_config.step\"],null]],[13],[1,\"\\n            \"],[8,[39,5],[[24,\"min\",\"1\"],[24,0,\"poll-options-step\"]],[[\"@type\",\"@value\"],[\"number\",[30,0,[\"pollStep\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n\\n\"],[41,[51,[30,0,[\"minMaxValueValidation\",\"ok\"]]],[[[1,\"        \"],[8,[39,8],null,[[\"@validation\"],[[30,0,[\"minMaxValueValidation\"]]]],null],[1,\"\\n\"]],[]],null]],[]],null],[1,\"\\n    \"],[10,0],[14,0,\"input-group poll-public\"],[12],[1,\"\\n      \"],[8,[39,15],[[24,0,\"poll-toggle-public\"],[4,[38,3],[\"click\",[30,0,[\"togglePublic\"]]],null]],[[\"@state\",\"@label\"],[[30,0,[\"publicPoll\"]],\"poll.ui_builder.poll_public.label\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"showAdvanced\"]],[[[1,\"      \"],[10,0],[14,0,\"input-group poll-allowed-groups\"],[12],[1,\"\\n        \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,1],[\"poll.ui_builder.poll_groups.label\"],null]],[13],[1,\"\\n        \"],[8,[39,16],null,[[\"@content\",\"@value\",\"@onChange\",\"@labelProperty\",\"@valueProperty\"],[[30,0,[\"siteGroups\"]],[30,0,[\"pollGroups\"]],[28,[37,17],[[30,0],[28,[37,18],[[30,0,[\"pollGroups\"]]],null]],null],\"name\",\"name\"]],null],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"input-group poll-date\"],[12],[1,\"\\n        \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,1],[\"poll.ui_builder.automatic_close.label\"],null]],[13],[1,\"\\n        \"],[8,[39,19],null,[[\"@date\",\"@onChange\",\"@clearable\",\"@useGlobalPickerContainer\"],[[30,0,[\"pollAutoClose\"]],[28,[37,17],[[30,0],[28,[37,18],[[30,0,[\"pollAutoClose\"]]],null]],null],true,true]],null],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"input-group poll-select\"],[12],[1,\"\\n        \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,1],[\"poll.ui_builder.poll_result.label\"],null]],[13],[1,\"\\n        \"],[8,[39,20],[[24,0,\"poll-result\"]],[[\"@content\",\"@value\",\"@valueProperty\",\"@onChange\"],[[30,0,[\"pollResults\"]],[30,0,[\"pollResult\"]],\"value\",[28,[37,17],[[30,0],[28,[37,18],[[30,0,[\"pollResult\"]]],null]],null]]],null],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[41,[51,[30,0,[\"isNumber\"]]],[[[1,\"        \"],[10,0],[14,0,\"input-group poll-select column\"],[12],[1,\"\\n          \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,1],[\"poll.ui_builder.poll_chart_type.label\"],null]],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"radio-group\"],[12],[1,\"\\n            \"],[8,[39,21],null,[[\"@id\",\"@name\",\"@value\",\"@selection\"],[\"poll-chart-type-bar\",\"poll-chart-type\",\"bar\",[30,0,[\"chartType\"]]]],null],[1,\"\\n            \"],[10,\"label\"],[14,\"for\",\"poll-chart-type-bar\"],[12],[1,[28,[35,22],[\"chart-bar\"],null]],[1,\"\\n              \"],[1,[28,[35,1],[\"poll.ui_builder.poll_chart_type.bar\"],null]],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"radio-group\"],[12],[1,\"\\n            \"],[8,[39,21],null,[[\"@id\",\"@name\",\"@value\",\"@selection\"],[\"poll-chart-type-pie\",\"poll-chart-type\",\"pie\",[30,0,[\"chartType\"]]]],null],[1,\"\\n            \"],[10,\"label\"],[14,\"for\",\"poll-chart-type-pie\"],[12],[1,[28,[35,22],[\"chart-pie\"],null]],[1,\"\\n              \"],[1,[28,[35,1],[\"poll.ui_builder.poll_chart_type.pie\"],null]],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null]],[]],null],[1,\"  \"]],[]],[[[1,\"\\n    \"],[8,[39,12],[[24,0,\"btn-primary insert-poll\"]],[[\"@action\",\"@icon\",\"@label\",\"@disabled\"],[[30,0,[\"insertPoll\"]],\"chart-bar\",\"poll.ui_builder.insert\",[30,0,[\"disableInsert\"]]]],null],[1,\"\\n\\n    \"],[8,[39,12],[[24,0,\"btn-flat\"]],[[\"@label\",\"@action\"],[\"cancel\",[30,1]]],null],[1,\"\\n\\n    \"],[8,[39,12],[[24,0,\"btn-default show-advanced\"]],[[\"@action\",\"@icon\",\"@title\"],[[30,0,[\"toggleAdvanced\"]],\"cog\",[52,[30,0,[\"showAdvanced\"]],\"poll.ui_builder.hide_advanced\",\"poll.ui_builder.show_advanced\"]]],null],[1,\"\\n\\n  \"]],[]]]]]],[\"@closeModal\",\"@inline\",\"option\",\"index\"],false,[\"d-modal\",\"i18n\",\"if\",\"on\",\"fn\",\"input\",\"unless\",\"textarea\",\"input-tip\",\"each\",\"-track-array\",\"auto-focus\",\"d-button\",\"and\",\"not\",\"d-toggle-switch\",\"group-chooser\",\"action\",\"mut\",\"date-time-input\",\"combo-box\",\"radio-button\",\"d-icon\"]]",
    "moduleName": "discourse/plugins/poll/discourse/components/modal/poll-ui-builder.hbs",
    "isStrictMode": false
  });
  const BAR_CHART_TYPE = _exports.BAR_CHART_TYPE = "bar";
  const PIE_CHART_TYPE = _exports.PIE_CHART_TYPE = "pie";
  const REGULAR_POLL_TYPE = _exports.REGULAR_POLL_TYPE = "regular";
  const NUMBER_POLL_TYPE = _exports.NUMBER_POLL_TYPE = "number";
  const MULTIPLE_POLL_TYPE = _exports.MULTIPLE_POLL_TYPE = "multiple";
  const ALWAYS_POLL_RESULT = "always";
  const VOTE_POLL_RESULT = "on_vote";
  const CLOSED_POLL_RESULT = "on_close";
  const STAFF_POLL_RESULT = "staff_only";
  let PollUiBuilderModal = _exports.default = (_dec = (0, _computed.or)("showAdvanced", "isNumber"), _dec2 = (0, _computed.gt)("pollOptions.length", 1), _dec3 = (0, _decorators.default)("currentUser.staff"), _dec4 = (0, _decorators.default)("pollType"), _dec5 = (0, _decorators.default)("pollType"), _dec6 = (0, _decorators.default)("pollType"), _dec7 = (0, _decorators.default)("pollOptions.@each.value"), _dec8 = (0, _decorators.default)("site.groups"), _dec9 = (0, _decorators.default)("chartType", "pollType"), _dec10 = (0, _object2.observes)("pollType", "pollOptionsCount"), _dec11 = (0, _decorators.default)("pollType", "pollResult", "publicPoll", "pollTitle", "pollOptions.@each.value", "pollMin", "pollMax", "pollStep", "pollGroups", "pollAutoClose", "chartType"), _dec12 = (0, _decorators.default)("isNumber", "pollOptionsCount"), _dec13 = (0, _decorators.default)("pollOptions.@each.value"), _dec14 = (0, _decorators.default)("isMultiple", "pollOptionsCount", "isNumber", "pollMin", "pollMax", "pollStep"), _dec15 = (0, _decorators.default)("minMaxValueValidation", "minNumOfOptionsValidation"), (_class = class PollUiBuilderModal extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "siteSettings", _descriptor, this);
      _defineProperty(this, "showAdvanced", false);
      _defineProperty(this, "pollType", REGULAR_POLL_TYPE);
      _defineProperty(this, "pollTitle", void 0);
      _defineProperty(this, "pollOptions", [_object.default.create({
        value: ""
      })]);
      _defineProperty(this, "pollOptionsText", "");
      _defineProperty(this, "pollMin", 1);
      _defineProperty(this, "pollMax", 2);
      _defineProperty(this, "pollStep", 1);
      _defineProperty(this, "pollGroups", void 0);
      _defineProperty(this, "pollAutoClose", void 0);
      _defineProperty(this, "pollResult", ALWAYS_POLL_RESULT);
      _defineProperty(this, "chartType", BAR_CHART_TYPE);
      _defineProperty(this, "publicPoll", this.siteSettings.poll_default_public);
      _initializerDefineProperty(this, "showNumber", _descriptor2, this);
      _initializerDefineProperty(this, "canRemoveOption", _descriptor3, this);
    }
    pollResults(staff) {
      const options = [{
        name: _discourseI18n.default.t("poll.ui_builder.poll_result.always"),
        value: ALWAYS_POLL_RESULT
      }, {
        name: _discourseI18n.default.t("poll.ui_builder.poll_result.vote"),
        value: VOTE_POLL_RESULT
      }, {
        name: _discourseI18n.default.t("poll.ui_builder.poll_result.closed"),
        value: CLOSED_POLL_RESULT
      }];
      if (staff) {
        options.push({
          name: _discourseI18n.default.t("poll.ui_builder.poll_result.staff"),
          value: STAFF_POLL_RESULT
        });
      }
      return options;
    }
    isRegular(pollType) {
      return pollType === REGULAR_POLL_TYPE;
    }
    isNumber(pollType) {
      return pollType === NUMBER_POLL_TYPE;
    }
    isMultiple(pollType) {
      return pollType === MULTIPLE_POLL_TYPE;
    }
    pollOptionsCount(pollOptions) {
      return (pollOptions || []).filter(option => option.value.length > 0).length;
    }
    siteGroups(groups) {
      // prevents group "everyone" to be listed
      return groups.filter(g => g.id !== 0);
    }
    isPie(chartType, pollType) {
      return pollType !== NUMBER_POLL_TYPE && chartType === PIE_CHART_TYPE;
    }
    _setPollMinMax() {
      if (this.isMultiple) {
        if (this.pollMin <= 0 || this.pollMin >= this.pollMax || this.pollMin >= this.pollOptionsCount) {
          this.set("pollMin", this.pollOptionsCount > 0 ? 1 : 0);
        }
        if (this.pollMax <= 0 || this.pollMin >= this.pollMax || this.pollMax > this.pollOptionsCount) {
          this.set("pollMax", this.pollOptionsCount);
        }
      } else if (this.isNumber) {
        this.set("pollMax", this.siteSettings.poll_maximum_options);
      }
    }
    pollOutput(pollType, pollResult, publicPoll, pollTitle, pollOptions, pollMin, pollMax, pollStep, pollGroups, pollAutoClose, chartType) {
      let pollHeader = "[poll";
      let output = "";
      const match = this.model.toolbarEvent.getText().match(/\[poll(\s+name=[^\s\]]+)*.*\]/gim);
      if (match) {
        pollHeader += ` name=poll${match.length + 1}`;
      }
      let step = pollStep;
      if (step < 1) {
        step = 1;
      }
      if (pollType) {
        pollHeader += ` type=${pollType}`;
      }
      if (pollResult) {
        pollHeader += ` results=${pollResult}`;
      }
      if (pollMin && pollType !== REGULAR_POLL_TYPE) {
        pollHeader += ` min=${pollMin}`;
      }
      if (pollMax && pollType !== REGULAR_POLL_TYPE) {
        pollHeader += ` max=${pollMax}`;
      }
      if (pollType === NUMBER_POLL_TYPE) {
        pollHeader += ` step=${step}`;
      }
      pollHeader += ` public=${publicPoll ? "true" : "false"}`;
      if (chartType && pollType !== NUMBER_POLL_TYPE) {
        pollHeader += ` chartType=${chartType}`;
      }
      if (pollGroups && pollGroups.length > 0) {
        pollHeader += ` groups=${pollGroups}`;
      }
      if (pollAutoClose) {
        pollHeader += ` close=${pollAutoClose.toISOString()}`;
      }
      pollHeader += "]";
      output += `${pollHeader}\n`;
      if (pollTitle) {
        output += `# ${pollTitle.trim()}\n`;
      }
      if (pollOptions.length > 0 && pollType !== NUMBER_POLL_TYPE) {
        pollOptions.forEach(option => {
          if (option.value.length > 0) {
            output += `* ${option.value.trim()}\n`;
          }
        });
      }
      output += "[/poll]\n";
      return output;
    }
    minNumOfOptionsValidation(isNumber, pollOptionsCount) {
      let options = {
        ok: true
      };
      if (!isNumber) {
        if (pollOptionsCount < 1) {
          return _object.default.create({
            failed: true,
            reason: _discourseI18n.default.t("poll.ui_builder.help.options_min_count")
          });
        }
        if (pollOptionsCount > this.siteSettings.poll_maximum_options) {
          return _object.default.create({
            failed: true,
            reason: _discourseI18n.default.t("poll.ui_builder.help.options_max_count", {
              count: this.siteSettings.poll_maximum_options
            })
          });
        }
      }
      return _object.default.create(options);
    }
    showMinNumOfOptionsValidation(pollOptions) {
      return pollOptions.length !== 1 || pollOptions[0].value !== "";
    }
    minMaxValueValidation(isMultiple, pollOptionsCount, isNumber, pollMin, pollMax, pollStep) {
      pollMin = parseInt(pollMin, 10) || 0;
      pollMax = parseInt(pollMax, 10) || 0;
      pollStep = parseInt(pollStep, 10) || 0;
      if (pollMin < 0) {
        return _object.default.create({
          failed: true,
          reason: _discourseI18n.default.t("poll.ui_builder.help.invalid_min_value")
        });
      }
      if (pollMax < 0 || isMultiple && pollMax > pollOptionsCount) {
        return _object.default.create({
          failed: true,
          reason: _discourseI18n.default.t("poll.ui_builder.help.invalid_max_value")
        });
      }
      if (pollMin > pollMax) {
        return _object.default.create({
          failed: true,
          reason: _discourseI18n.default.t("poll.ui_builder.help.invalid_values")
        });
      }
      if (isNumber) {
        if (pollStep < 1) {
          return _object.default.create({
            failed: true,
            reason: _discourseI18n.default.t("poll.ui_builder.help.min_step_value")
          });
        }
        const optionsCount = (pollMax - pollMin + 1) / pollStep;
        if (optionsCount < 1) {
          return _object.default.create({
            failed: true,
            reason: _discourseI18n.default.t("poll.ui_builder.help.options_min_count")
          });
        }
        if (optionsCount > this.siteSettings.poll_maximum_options) {
          return _object.default.create({
            failed: true,
            reason: _discourseI18n.default.t("poll.ui_builder.help.options_max_count", {
              count: this.siteSettings.poll_maximum_options
            })
          });
        }
      }
      return _object.default.create({
        ok: true
      });
    }
    disableInsert(minMaxValueValidation, minNumOfOptionsValidation) {
      return !minMaxValueValidation.ok || !minNumOfOptionsValidation.ok;
    }
    _comboboxOptions(startIndex, endIndex) {
      return [...Array(endIndex - startIndex).keys()].map(number => ({
        value: number + startIndex,
        name: number + startIndex
      }));
    }
    onOptionsTextChange(e) {
      this.set("pollOptions", e.target.value.split("\n").map(value => _object.default.create({
        value
      })));
    }
    insertPoll() {
      this.model.toolbarEvent.addText(this.pollOutput);
      this.closeModal();
    }
    toggleAdvanced() {
      this.toggleProperty("showAdvanced");
      if (this.showAdvanced) {
        this.set("pollOptionsText", this.pollOptions.map(x => x.value).join("\n"));
      }
    }
    updateValue(option, event) {
      option.set("value", event.target.value);
    }
    onInputKeydown(index, event) {
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        if (event.target.value !== "") {
          this.addOption(index + 1);
        }
      }
    }
    addOption(atIndex) {
      if (atIndex === -1) {
        atIndex = this.pollOptions.length;
      }
      const option = _object.default.create({
        value: ""
      });
      this.pollOptions.insertAt(atIndex, option);
    }
    removeOption(option) {
      this.pollOptions.removeObject(option);
    }
    updatePollType(pollType, event) {
      event?.preventDefault();
      this.set("pollType", pollType);
    }
    togglePublic() {
      this.set("publicPoll", !this.publicPoll);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "siteSettings", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "showNumber", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "canRemoveOption", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "pollResults", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "pollResults"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isRegular", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "isRegular"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isNumber", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "isNumber"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isMultiple", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "isMultiple"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "pollOptionsCount", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "pollOptionsCount"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "siteGroups", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "siteGroups"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isPie", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "isPie"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_setPollMinMax", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "_setPollMinMax"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "pollOutput", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, "pollOutput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "minNumOfOptionsValidation", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "minNumOfOptionsValidation"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showMinNumOfOptionsValidation", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, "showMinNumOfOptionsValidation"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "minMaxValueValidation", [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, "minMaxValueValidation"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "disableInsert", [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, "disableInsert"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onOptionsTextChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onOptionsTextChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "insertPoll", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "insertPoll"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleAdvanced", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleAdvanced"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateValue", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onInputKeydown", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onInputKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addOption", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addOption"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeOption", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeOption"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updatePollType", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updatePollType"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "togglePublic", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "togglePublic"), _class.prototype)), _class));
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, PollUiBuilderModal);
});
define("discourse/plugins/poll/discourse/components/poll-breakdown-chart", ["exports", "@ember/component", "@ember/object/computed", "@ember/runloop", "@ember/template", "@ember-decorators/component", "discourse-common/utils/decorators", "discourse-i18n", "discourse/plugins/poll/lib/chart-colors", "discourse/plugins/poll/discourse/components/modal/poll-ui-builder", "@ember/template-factory"], function (_exports, _component, _computed, _runloop, _template, _component2, _decorators, _discourseI18n, _chartColors, _pollUiBuilder, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <label class="poll-breakdown-chart-label">{{@group}}</label>
  <canvas class="poll-breakdown-chart-chart"></canvas>
  */
  {
    "id": "oqA5wA7R",
    "block": "[[[10,\"label\"],[14,0,\"poll-breakdown-chart-label\"],[12],[1,[30,1]],[13],[1,\"\\n\"],[10,\"canvas\"],[14,0,\"poll-breakdown-chart-chart\"],[12],[13]],[\"@group\"],false,[]]",
    "moduleName": "discourse/plugins/poll/discourse/components/poll-breakdown-chart.hbs",
    "isStrictMode": false
  });
  let PollBreakdownChart = _exports.default = (_dec = (0, _component2.classNames)("poll-breakdown-chart-container"), _dec2 = (0, _computed.mapBy)("options", "votes"), _dec3 = (0, _decorators.default)("optionColors", "index"), _dec4 = (0, _decorators.default)("data", "displayMode"), _dec(_class = (_class2 = class PollBreakdownChart extends _component.default {
    constructor(...args) {
      super(...args);
      // Arguments:
      _defineProperty(this, "group", null);
      _defineProperty(this, "options", null);
      _defineProperty(this, "displayMode", null);
      _defineProperty(this, "highlightedOption", null);
      _defineProperty(this, "setHighlightedOption", null);
      _initializerDefineProperty(this, "data", _descriptor, this);
      _defineProperty(this, "_optionToSlice", null);
      _defineProperty(this, "_previousHighlightedSliceIndex", null);
      _defineProperty(this, "_previousDisplayMode", null);
    }
    init() {
      super.init(...arguments);
      this._optionToSlice = {};
    }
    didInsertElement() {
      super.didInsertElement(...arguments);
      const canvas = this.element.querySelector("canvas");
      this._chart = new window.Chart(canvas.getContext("2d"), this.chartConfig);
    }
    didReceiveAttrs() {
      super.didReceiveAttrs(...arguments);
      if (this._chart) {
        this._updateDisplayMode();
        this._updateHighlight();
      }
    }
    willDestroy() {
      super.willDestroy(...arguments);
      if (this._chart) {
        this._chart.destroy();
      }
    }
    colorStyle(optionColors, index) {
      return (0, _template.htmlSafe)(`background: ${optionColors[index]};`);
    }
    chartConfig(data, displayMode) {
      const transformedData = [];
      let counter = 0;
      this._optionToSlice = {};
      data.forEach((votes, index) => {
        if (votes > 0) {
          transformedData.push(votes);
          this._optionToSlice[index] = counter++;
        }
      });
      const totalVotes = transformedData.reduce((sum, votes) => sum + votes, 0);
      const colors = (0, _chartColors.getColors)(data.length).filter((color, index) => data[index] > 0);
      return {
        type: _pollUiBuilder.PIE_CHART_TYPE,
        plugins: [window.ChartDataLabels],
        data: {
          datasets: [{
            data: transformedData,
            backgroundColor: colors,
            // TODO: It's a workaround for Chart.js' terrible hover styling.
            // It will break on non-white backgrounds.
            // Should be updated after #10341 lands
            hoverBorderColor: "#fff"
          }]
        },
        options: {
          plugins: {
            tooltip: false,
            datalabels: {
              color: "#333",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: 2,
              font: {
                family: getComputedStyle(document.body).fontFamily,
                size: 16
              },
              padding: {
                top: 2,
                right: 6,
                bottom: 2,
                left: 6
              },
              formatter(votes) {
                if (displayMode !== "percentage") {
                  return votes;
                }
                const percent = _discourseI18n.default.toNumber(votes / totalVotes * 100.0, {
                  precision: 1
                });
                return `${percent}%`;
              }
            }
          },
          responsive: true,
          aspectRatio: 1.1,
          animation: {
            duration: 0
          },
          // wrapping setHighlightedOption in next block as hover can create many events
          // prevents two sets to happen in the same computation
          onHover: (event, activeElements) => {
            if (!activeElements.length) {
              (0, _runloop.next)(() => {
                this.setHighlightedOption(null);
              });
              return;
            }
            const sliceIndex = activeElements[0].index;
            const optionIndex = Object.keys(this._optionToSlice).find(option => this._optionToSlice[option] === sliceIndex);
            (0, _runloop.next)(() => {
              this.setHighlightedOption(Number(optionIndex));
            });
          }
        }
      };
    }
    _updateDisplayMode() {
      if (this.displayMode !== this._previousDisplayMode) {
        const config = this.chartConfig;
        this._chart.data.datasets = config.data.datasets;
        this._chart.options = config.options;
        this._chart.update();
        this._previousDisplayMode = this.displayMode;
      }
    }
    _updateHighlight() {
      const activeElements = [];
      if (this.highlightedOption) {
        const index = this._optionToSlice[this.highlightedOption];
        if (index !== undefined) {
          activeElements.push({
            datasetIndex: 0,
            index
          });
        }
      }
      this._chart.setActiveElements(activeElements);
      this._chart.update();
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "data", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, "colorStyle", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "colorStyle"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "chartConfig", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "chartConfig"), _class2.prototype)), _class2)) || _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, PollBreakdownChart);
});
define("discourse/plugins/poll/discourse/components/poll-breakdown-option", ["exports", "@ember/component", "@ember/object/computed", "@ember/template", "@ember-decorators/component", "discourse/lib/computed", "discourse-common/utils/decorators", "discourse-i18n", "discourse/plugins/poll/lib/chart-colors", "@ember/template-factory"], function (_exports, _component, _computed, _template, _component2, _computed2, _decorators, _discourseI18n, _chartColors, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <li
    class="poll-breakdown-option"
    style={{this.colorBackgroundStyle}}
    {{on "mouseover" @onMouseOver}}
    {{on "mouseout" @onMouseOut}}
    role="button"
  >
    <span
      class="poll-breakdown-option-color"
      style={{this.colorPreviewStyle}}
    ></span>
  
    <span class="poll-breakdown-option-count">
      {{#if this.showPercentage}}
        {{this.percent}}%
      {{else}}
        {{@option.votes}}
      {{/if}}
    </span>
    <span class="poll-breakdown-option-text">{{html-safe @option.html}}</span>
  </li>
  */
  {
    "id": "NTR1m1S2",
    "block": "[[[11,\"li\"],[24,0,\"poll-breakdown-option\"],[16,5,[30,0,[\"colorBackgroundStyle\"]]],[24,\"role\",\"button\"],[4,[38,0],[\"mouseover\",[30,1]],null],[4,[38,0],[\"mouseout\",[30,2]],null],[12],[1,\"\\n  \"],[10,1],[14,0,\"poll-breakdown-option-color\"],[15,5,[30,0,[\"colorPreviewStyle\"]]],[12],[13],[1,\"\\n\\n  \"],[10,1],[14,0,\"poll-breakdown-option-count\"],[12],[1,\"\\n\"],[41,[30,0,[\"showPercentage\"]],[[[1,\"      \"],[1,[30,0,[\"percent\"]]],[1,\"%\\n\"]],[]],[[[1,\"      \"],[1,[30,3,[\"votes\"]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n  \"],[10,1],[14,0,\"poll-breakdown-option-text\"],[12],[1,[28,[35,2],[[30,3,[\"html\"]]],null]],[13],[1,\"\\n\"],[13]],[\"@onMouseOver\",\"@onMouseOut\",\"@option\"],false,[\"on\",\"if\",\"html-safe\"]]",
    "moduleName": "discourse/plugins/poll/discourse/components/poll-breakdown-option.hbs",
    "isStrictMode": false
  });
  let PollBreakdownOption = _exports.default = (_dec = (0, _component2.tagName)(""), _dec2 = (0, _computed2.propertyEqual)("highlightedOption", "index"), _dec3 = (0, _computed.equal)("displayMode", "percentage"), _dec4 = (0, _decorators.default)("option.votes", "totalVotes"), _dec5 = (0, _decorators.default)("optionsCount"), _dec6 = (0, _decorators.default)("highlighted"), _dec7 = (0, _decorators.default)("highlighted", "optionColors", "index"), _dec(_class = (_class2 = class PollBreakdownOption extends _component.default {
    constructor(...args) {
      super(...args);
      // Arguments:
      _defineProperty(this, "option", null);
      _defineProperty(this, "index", null);
      _defineProperty(this, "totalVotes", null);
      _defineProperty(this, "optionsCount", null);
      _defineProperty(this, "displayMode", null);
      _defineProperty(this, "highlightedOption", null);
      _defineProperty(this, "onMouseOver", null);
      _defineProperty(this, "onMouseOut", null);
      _initializerDefineProperty(this, "highlighted", _descriptor, this);
      _initializerDefineProperty(this, "showPercentage", _descriptor2, this);
    }
    percent(votes, total) {
      return _discourseI18n.default.toNumber(votes / total * 100.0, {
        precision: 1
      });
    }
    optionColors(optionsCount) {
      return (0, _chartColors.getColors)(optionsCount);
    }
    colorBackgroundStyle(highlighted) {
      if (highlighted) {
        // TODO: Use CSS variables (#10341)
        return (0, _template.htmlSafe)("background: rgba(0, 0, 0, 0.1);");
      }
    }
    colorPreviewStyle(highlighted, optionColors, index) {
      const color = highlighted ? window.Chart.helpers.getHoverColor(optionColors[index]) : optionColors[index];
      return (0, _template.htmlSafe)(`background: ${color};`);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "highlighted", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "showPercentage", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, "percent", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "percent"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "optionColors", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "optionColors"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorBackgroundStyle", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "colorBackgroundStyle"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorPreviewStyle", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "colorPreviewStyle"), _class2.prototype)), _class2)) || _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, PollBreakdownOption);
});
define("discourse/plugins/poll/discourse/initializers/add-poll-ui-builder", ["exports", "discourse/lib/plugin-api", "discourse/plugins/poll/discourse/components/modal/poll-ui-builder"], function (_exports, _pluginApi, _pollUiBuilder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function initializePollUIBuilder(api) {
    api.addComposerToolbarPopupMenuOption({
      action: toolbarEvent => {
        api.container.lookup("service:modal").show(_pollUiBuilder.default, {
          model: {
            toolbarEvent
          }
        });
      },
      icon: "chart-bar",
      label: "poll.ui_builder.title",
      condition: composer => {
        const siteSettings = api.container.lookup("service:site-settings");
        const currentUser = api.getCurrentUser();
        return siteSettings.poll_enabled && (composer.model.topic?.pm_with_non_human_user || currentUser && (currentUser.staff || currentUser.trust_level >= siteSettings.poll_minimum_trust_level_to_create));
      }
    });
  }
  var _default = _exports.default = {
    name: "add-poll-ui-builder",
    initialize() {
      (0, _pluginApi.withPluginApi)("1.14.0", initializePollUIBuilder);
    }
  };
});
define("discourse/plugins/poll/discourse/initializers/extend-for-poll", ["exports", "@ember/object", "discourse/lib/plugin-api", "discourse/widgets/glue", "discourse-common/lib/get-owner", "discourse-common/utils/decorators"], function (_exports, _object, _pluginApi, _glue, _getOwner, _decorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  const PLUGIN_ID = "discourse-poll";
  let _glued = [];
  let _interval = null;
  function rerender() {
    _glued.forEach(g => g.queueRerender());
  }
  function cleanUpPolls() {
    if (_interval) {
      clearInterval(_interval);
      _interval = null;
    }
    _glued.forEach(g => g.cleanUp());
    _glued = [];
  }
  function initializePolls(api) {
    var _obj, _dec, _obj2;
    const register = (0, _getOwner.getRegister)(api),
      pollGroupableUserFields = api.container.lookup("service:site-settings").poll_groupable_user_fields;
    cleanUpPolls();
    api.modifyClass("controller:topic", (_obj = {
      pluginId: PLUGIN_ID,
      subscribe() {
        this._super(...arguments);
        this.messageBus.subscribe(`/polls/${this.model.id}`, this._onPollMessage);
      },
      unsubscribe() {
        this.messageBus.unsubscribe("/polls/*", this._onPollMessage);
        this._super(...arguments);
      },
      _onPollMessage(msg) {
        const post = this.get("model.postStream").findLoadedPost(msg.post_id);
        post?.set("polls", msg.polls);
      }
    }, (_applyDecoratedDescriptor(_obj, "_onPollMessage", [_decorators.bind], Object.getOwnPropertyDescriptor(_obj, "_onPollMessage"), _obj)), _obj));
    api.modifyClass("model:post", (_dec = (0, _decorators.observes)("polls"), (_obj2 = {
      pluginId: PLUGIN_ID,
      _polls: null,
      pollsObject: null,
      pollsChanged() {
        const polls = this.polls;
        if (polls) {
          this._polls = this._polls || {};
          polls.forEach(p => {
            const existing = this._polls[p.name];
            if (existing) {
              this._polls[p.name].setProperties(p);
            } else {
              this._polls[p.name] = _object.default.create(p);
            }
          });
          this.set("pollsObject", this._polls);
          rerender();
        }
      }
    }, (_applyDecoratedDescriptor(_obj2, "pollsChanged", [_dec], Object.getOwnPropertyDescriptor(_obj2, "pollsChanged"), _obj2)), _obj2)));
    function attachPolls(elem, helper) {
      let pollNodes = [...elem.querySelectorAll(".poll")];
      pollNodes = pollNodes.filter(node => node.parentNode.tagName !== "BLOCKQUOTE");
      if (!pollNodes.length || !helper) {
        return;
      }
      const post = helper.getModel();
      api.preventCloak(post.id);
      post.pollsChanged();
      const polls = post.pollsObject || {};
      const votes = post.polls_votes || {};
      _interval = _interval || setInterval(rerender, 30000);
      pollNodes.forEach(pollNode => {
        const pollName = pollNode.dataset.pollName;
        let poll = polls[pollName];
        let pollPost = post;
        let vote = votes[pollName] || [];
        const quotedId = pollNode.closest(".expanded-quote")?.dataset.postId;
        if (quotedId && post.quoted[quotedId]) {
          pollPost = post.quoted[quotedId];
          pollPost = _object.default.create(pollPost);
          poll = _object.default.create(pollPost.polls.findBy("name", pollName));
          vote = pollPost.polls_votes || {};
          vote = vote[pollName] || [];
        }
        if (poll) {
          const titleElement = pollNode.querySelector(".poll-title");
          const attrs = {
            id: `${pollName}-${pollPost.id}`,
            post: pollPost,
            poll,
            vote,
            hasSavedVote: vote.length > 0,
            titleHTML: titleElement?.outerHTML,
            groupableUserFields: (pollGroupableUserFields || "").split("|").filter(Boolean)
          };
          const glue = new _glue.default("discourse-poll", register, attrs);
          glue.appendTo(pollNode);
          _glued.push(glue);
        }
      });
    }
    api.includePostAttributes("polls", "polls_votes");
    api.decorateCookedElement(attachPolls, {
      onlyStream: true
    });
    api.cleanupStream(cleanUpPolls);
    const siteSettings = api.container.lookup("site-settings:main");
    if (siteSettings.poll_enabled) {
      api.addSearchSuggestion("in:polls");
    }
  }
  var _default = _exports.default = {
    name: "extend-for-poll",
    initialize() {
      (0, _pluginApi.withPluginApi)("0.8.7", initializePolls);
    }
  };
});
define("discourse/plugins/poll/discourse/widgets/discourse-poll", ["exports", "@ember/application", "virtual-dom", "discourse/lib/ajax", "discourse/lib/ajax-error", "discourse/lib/formatter", "discourse/lib/load-script", "discourse/lib/local-dates", "discourse/lib/round", "discourse/widgets/post", "discourse/widgets/raw-html", "discourse/widgets/widget", "discourse-common/lib/icon-library", "discourse-i18n", "discourse/plugins/poll/lib/chart-colors", "discourse/plugins/poll/lib/even-round", "discourse/plugins/poll/discourse/components/modal/poll-breakdown", "discourse/plugins/poll/discourse/components/modal/poll-ui-builder"], function (_exports, _application, _virtualDom, _ajax, _ajaxError, _formatter, _loadScript, _localDates, _round, _post, _rawHtml, _widget, _iconLibrary, _discourseI18n, _chartColors, _evenRound, _pollBreakdown, _pollUiBuilder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const FETCH_VOTERS_COUNT = 25;
  const buttonOptionsMap = {
    exportResults: {
      className: "btn-default export-results",
      label: "poll.export-results.label",
      title: "poll.export-results.title",
      icon: "download",
      action: "exportResults"
    },
    showBreakdown: {
      className: "btn-default show-breakdown",
      label: "poll.breakdown.breakdown",
      icon: "chart-pie",
      action: "showBreakdown"
    },
    openPoll: {
      className: "btn-default toggle-status",
      label: "poll.open.label",
      title: "poll.open.title",
      icon: "unlock-alt",
      action: "toggleStatus"
    },
    closePoll: {
      className: "btn-default toggle-status",
      label: "poll.close.label",
      title: "poll.close.title",
      icon: "lock",
      action: "toggleStatus"
    }
  };
  function optionHtml(option, siteSettings = {}) {
    const el = document.createElement("span");
    el.innerHTML = option.html;
    (0, _localDates.applyLocalDates)(el.querySelectorAll(".discourse-local-date"), siteSettings);
    return new _rawHtml.default({
      html: `<span>${el.innerHTML}</span>`
    });
  }
  function checkUserGroups(user, poll) {
    const pollGroups = poll && poll.groups && poll.groups.split(",").map(g => g.toLowerCase());
    if (!pollGroups) {
      return true;
    }
    const userGroups = user && user.groups && user.groups.map(g => g.name.toLowerCase());
    return userGroups && pollGroups.some(g => userGroups.includes(g));
  }
  (0, _widget.createWidget)("discourse-poll-option", {
    tagName: "li",
    buildAttributes(attrs) {
      return {
        tabindex: 0,
        "data-poll-option-id": attrs.option.id
      };
    },
    html(attrs) {
      const contents = [];
      const {
        option,
        vote
      } = attrs;
      const chosen = vote.includes(option.id);
      if (attrs.isMultiple) {
        contents.push((0, _iconLibrary.iconNode)(chosen ? "far-check-square" : "far-square"));
      } else {
        contents.push((0, _iconLibrary.iconNode)(chosen ? "circle" : "far-circle"));
      }
      contents.push(" ");
      contents.push(optionHtml(option, this.siteSettings));
      return contents;
    },
    click(e) {
      if (!e.target.closest("a")) {
        this.sendWidgetAction("toggleOption", this.attrs.option);
      }
    },
    keyDown(e) {
      if (e.key === "Enter") {
        this.click(e);
      }
    }
  });
  (0, _widget.createWidget)("discourse-poll-load-more", {
    tagName: "div.poll-voters-toggle-expand",
    buildKey: attrs => `load-more-${attrs.optionId}`,
    defaultState() {
      return {
        loading: false
      };
    },
    html(attrs, state) {
      return state.loading ? (0, _virtualDom.h)("div.spinner.small") : (0, _virtualDom.h)("a", (0, _iconLibrary.iconNode)("chevron-down"));
    },
    click() {
      const {
        state,
        attrs
      } = this;
      if (state.loading) {
        return;
      }
      state.loading = true;
      return this.sendWidgetAction("fetchVoters", attrs.optionId).finally(() => state.loading = false);
    }
  });
  (0, _widget.createWidget)("discourse-poll-voters", {
    tagName: "ul.poll-voters-list",
    buildKey: attrs => `poll-voters-${attrs.optionId}`,
    html(attrs) {
      const contents = attrs.voters.map(user => (0, _virtualDom.h)("li", [(0, _post.avatarFor)("tiny", {
        username: user.username,
        template: user.avatar_template
      }), " "]));
      if (attrs.voters.length < attrs.totalVotes) {
        contents.push(this.attach("discourse-poll-load-more", attrs));
      }
      return (0, _virtualDom.h)("div.poll-voters", contents);
    }
  });
  (0, _widget.createWidget)("discourse-poll-standard-results", {
    tagName: "ul.results",
    buildKey: attrs => `poll-standard-results-${attrs.id}`,
    html(attrs) {
      const {
        poll
      } = attrs;
      const options = poll.options;
      if (options) {
        const voters = poll.voters;
        const isPublic = poll.public;
        const ordered = [...options].sort((a, b) => {
          if (a.votes < b.votes) {
            return 1;
          } else if (a.votes === b.votes) {
            if (a.html < b.html) {
              return -1;
            } else {
              return 1;
            }
          } else {
            return -1;
          }
        });
        const percentages = voters === 0 ? Array(ordered.length).fill(0) : ordered.map(o => 100 * o.votes / voters);
        const rounded = attrs.isMultiple ? percentages.map(Math.floor) : (0, _evenRound.default)(percentages);
        return ordered.map((option, idx) => {
          const contents = [];
          const per = rounded[idx].toString();
          const chosen = (attrs.vote || []).includes(option.id);
          contents.push((0, _virtualDom.h)("div.option", (0, _virtualDom.h)("p", [(0, _virtualDom.h)("span.percentage", `${per}%`), optionHtml(option, this.siteSettings)])));
          contents.push((0, _virtualDom.h)("div.bar-back", (0, _virtualDom.h)("div.bar", {
            attributes: {
              style: `width:${per}%`
            }
          })));
          if (isPublic) {
            contents.push(this.attach("discourse-poll-voters", {
              postId: attrs.post.id,
              optionId: option.id,
              pollName: poll.name,
              totalVotes: option.votes,
              voters: attrs.voters && attrs.voters[option.id] || []
            }));
          }
          return (0, _virtualDom.h)("li", {
            className: `${chosen ? "chosen" : ""}`
          }, contents);
        });
      }
    }
  });
  (0, _widget.createWidget)("discourse-poll-number-results", {
    buildKey: attrs => `poll-number-results-${attrs.id}`,
    html(attrs) {
      const {
        poll
      } = attrs;
      const totalScore = poll.options.reduce((total, o) => {
        return total + parseInt(o.html, 10) * parseInt(o.votes, 10);
      }, 0);
      const voters = poll.voters;
      const average = voters === 0 ? 0 : (0, _round.default)(totalScore / voters, -2);
      const averageRating = _discourseI18n.default.t("poll.average_rating", {
        average
      });
      const contents = [(0, _virtualDom.h)("div.poll-results-number-rating", new _rawHtml.default({
        html: `<span>${averageRating}</span>`
      }))];
      if (poll.public) {
        contents.push(this.attach("discourse-poll-voters", {
          totalVotes: poll.voters,
          voters: attrs.voters || [],
          postId: attrs.post.id,
          pollName: poll.name,
          pollType: poll.type
        }));
      }
      return contents;
    }
  });
  (0, _widget.createWidget)("discourse-poll-container", {
    tagName: "div.poll-container",
    buildKey: attrs => `poll-container-${attrs.id}`,
    services: ["dialog"],
    defaultState() {
      return {
        voters: []
      };
    },
    html(attrs, state) {
      const {
        poll
      } = attrs;
      const options = poll.options;
      if (attrs.showResults) {
        const contents = [];
        if (attrs.titleHTML) {
          contents.push(new _rawHtml.default({
            html: attrs.titleHTML
          }));
        }
        if (poll.public) {
          state.voters = poll.preloaded_voters;
        }
        const type = poll.type === "number" ? "number" : "standard";
        const resultsWidget = type === "number" || attrs.poll.chart_type !== _pollUiBuilder.PIE_CHART_TYPE ? `discourse-poll-${type}-results` : "discourse-poll-pie-chart";
        contents.push(this.attach(resultsWidget, {
          ...attrs,
          voters: state.voters
        }));
        return contents;
      } else if (options) {
        const contents = [];
        if (attrs.titleHTML) {
          contents.push(new _rawHtml.default({
            html: attrs.titleHTML
          }));
        }
        if (!checkUserGroups(this.currentUser, poll)) {
          contents.push((0, _virtualDom.h)("div.alert.alert-danger", _discourseI18n.default.t("poll.results.groups.title", {
            groups: poll.groups
          })));
        }
        contents.push((0, _virtualDom.h)("ul", options.map(option => {
          return this.attach("discourse-poll-option", {
            option,
            isMultiple: attrs.isMultiple,
            vote: attrs.vote
          });
        })));
        return contents;
      }
    },
    fetchVoters(optionId) {
      const {
        attrs,
        state
      } = this;
      let votersCount;
      if (optionId) {
        if (!state.voters) {
          state.voters = {};
        }
        if (!state.voters[optionId]) {
          state.voters[optionId] = [];
        }
        votersCount = state.voters[optionId].length;
      } else {
        if (!state.voters) {
          state.voters = [];
        }
        votersCount = state.voters.length;
      }
      return (0, _ajax.ajax)("/polls/voters.json", {
        data: {
          post_id: attrs.post.id,
          poll_name: attrs.poll.name,
          option_id: optionId,
          page: Math.floor(votersCount / FETCH_VOTERS_COUNT) + 1,
          limit: FETCH_VOTERS_COUNT
        }
      }).then(result => {
        const voters = optionId ? state.voters[optionId] : state.voters;
        const newVoters = optionId ? result.voters[optionId] : result.voters;
        const votersSet = new Set(voters.map(voter => voter.username));
        newVoters.forEach(voter => {
          if (!votersSet.has(voter.username)) {
            votersSet.add(voter.username);
            voters.push(voter);
          }
        });

        // remove users who changed their vote
        if (attrs.poll.type === "regular") {
          Object.keys(state.voters).forEach(otherOptionId => {
            if (optionId !== otherOptionId) {
              state.voters[otherOptionId] = state.voters[otherOptionId].filter(voter => !votersSet.has(voter.username));
            }
          });
        }
        this.scheduleRerender();
      }).catch(error => {
        if (error) {
          (0, _ajaxError.popupAjaxError)(error);
        } else {
          this.dialog.alert(_discourseI18n.default.t("poll.error_while_fetching_voters"));
        }
      });
    }
  });
  (0, _widget.createWidget)("discourse-poll-info", {
    tagName: "div.poll-info",
    multipleHelpText(min, max, options) {
      if (max > 0) {
        if (min === max) {
          if (min > 1) {
            return _discourseI18n.default.t("poll.multiple.help.x_options", {
              count: min
            });
          }
        } else if (min > 1) {
          if (max < options) {
            return _discourseI18n.default.t("poll.multiple.help.between_min_and_max_options", {
              min,
              max
            });
          } else {
            return _discourseI18n.default.t("poll.multiple.help.at_least_min_options", {
              count: min
            });
          }
        } else if (max <= options) {
          return _discourseI18n.default.t("poll.multiple.help.up_to_max_options", {
            count: max
          });
        }
      }
    },
    html(attrs) {
      const {
        poll,
        post
      } = attrs;
      const closed = attrs.isClosed;
      const isStaff = this.currentUser && this.currentUser.staff;
      const isMe = this.currentUser && post.user_id === this.currentUser.id;
      const count = poll.voters;
      const contents = [(0, _virtualDom.h)("div.poll-info_counts-count", [(0, _virtualDom.h)("span.info-number", count.toString()), (0, _virtualDom.h)("span.info-label", _discourseI18n.default.t("poll.voters", {
        count
      }))])];
      const instructions = [];
      if (attrs.isMultiple) {
        if (attrs.showResults || attrs.isClosed) {
          const totalVotes = poll.options.reduce((total, o) => {
            return total + parseInt(o.votes, 10);
          }, 0);
          contents.push((0, _virtualDom.h)("div.poll-info_counts-count", [(0, _virtualDom.h)("span.info-number", totalVotes.toString()), (0, _virtualDom.h)("span.info-label", _discourseI18n.default.t("poll.total_votes", {
            count: totalVotes
          }))]));
        } else {
          const help = this.multipleHelpText(attrs.min, attrs.max, poll.options.length);
          if (help) {
            instructions.push(new _rawHtml.default({
              html: `<li>
                      ${(0, _iconLibrary.iconHTML)("list-ul")}
                      <span>${help}</span>
                     </li>`
            }));
          }
        }
      }
      if (poll.close) {
        const closeDate = moment.utc(poll.close, "YYYY-MM-DD HH:mm:ss Z");
        if (closeDate.isValid()) {
          const title = closeDate.format("LLL");
          let label;
          let icon;
          if (attrs.isAutomaticallyClosed) {
            const age = (0, _formatter.relativeAge)(closeDate.toDate(), {
              addAgo: true
            });
            label = _discourseI18n.default.t("poll.automatic_close.age", {
              age
            });
            icon = "lock";
          } else {
            const timeLeft = moment().to(closeDate, true);
            label = _discourseI18n.default.t("poll.automatic_close.closes_in", {
              timeLeft
            });
            icon = "far-clock";
          }
          instructions.push(new _rawHtml.default({
            html: `<li title="${title}">
                    ${(0, _iconLibrary.iconHTML)(icon)}
                    <span>${label}</span>
                   </li>`
          }));
        }
      }
      let infoText;
      if (poll.results === "on_vote" && !attrs.hasVoted && !isMe) {
        infoText = new _rawHtml.default({
          html: `<li>
                ${(0, _iconLibrary.iconHTML)("check")}
                <span>${_discourseI18n.default.t("poll.results.vote.title")}</span>
               </li>`
        });
      } else if (poll.results === "on_close" && !closed) {
        infoText = new _rawHtml.default({
          html: `<li>
                ${(0, _iconLibrary.iconHTML)("lock")}
                <span>${_discourseI18n.default.t("poll.results.closed.title")}</span>
               </li>`
        });
      } else if (poll.results === "staff_only" && !isStaff) {
        infoText = new _rawHtml.default({
          html: `<li>
                ${(0, _iconLibrary.iconHTML)("shield-alt")}
                <span>${_discourseI18n.default.t("poll.results.staff.title")}</span>
               </li>`
        });
      }
      if (infoText) {
        instructions.push(infoText);
      }
      if (!attrs.isClosed && !attrs.showResults && poll.public && poll.results !== "staff_only") {
        instructions.push(new _rawHtml.default({
          html: `<li>
                  ${(0, _iconLibrary.iconHTML)("far-eye")}
                  <span>${_discourseI18n.default.t("poll.public.title")}</span>
                 </li>`
        }));
      }
      return [(0, _virtualDom.h)("div.poll-info_counts", contents), (0, _virtualDom.h)("ul.poll-info_instructions", instructions)];
    }
  });
  function clearPieChart(id) {
    let el = document.querySelector(`#poll-results-chart-${id}`);
    el && el.parentNode.removeChild(el);
  }
  (0, _widget.createWidget)("discourse-poll-pie-canvas", {
    tagName: "canvas.poll-results-canvas",
    init(attrs) {
      (0, _loadScript.default)("/javascripts/Chart.min.js").then(() => {
        const data = attrs.poll.options.mapBy("votes");
        const labels = attrs.poll.options.mapBy("html");
        const config = pieChartConfig(data, labels, {
          legendContainerId: `poll-results-legend-${attrs.id}`
        });
        const el = document.getElementById(`poll-results-chart-${attrs.id}`);
        // eslint-disable-next-line no-undef
        this._chart = new Chart(el.getContext("2d"), config);
      });
    },
    willRerenderWidget() {
      this._chart?.destroy();
    },
    buildAttributes(attrs) {
      return {
        id: `poll-results-chart-${attrs.id}`
      };
    }
  });
  (0, _widget.createWidget)("discourse-poll-pie-chart", {
    tagName: "div.poll-results-chart",
    html(attrs) {
      const contents = [];
      if (!attrs.showResults) {
        clearPieChart(attrs.id);
        return contents;
      }
      const chart = this.attach("discourse-poll-pie-canvas", attrs);
      contents.push(chart);
      contents.push((0, _virtualDom.h)(`ul#poll-results-legend-${attrs.id}.pie-chart-legends`));
      return contents;
    }
  });
  const htmlLegendPlugin = {
    id: "htmlLegend",
    afterUpdate(chart, args, options) {
      const ul = document.getElementById(options.containerID);
      ul.innerHTML = "";
      const items = chart.options.plugins.legend.labels.generateLabels(chart);
      items.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("legend");
        li.onclick = () => {
          chart.toggleDataVisibility(item.index);
          chart.update();
        };
        const boxSpan = document.createElement("span");
        boxSpan.classList.add("swatch");
        boxSpan.style.background = item.fillStyle;
        const textContainer = document.createElement("span");
        textContainer.style.color = item.fontColor;
        textContainer.innerHTML = item.text;
        if (!chart.getDataVisibility(item.index)) {
          li.style.opacity = 0.2;
        } else {
          li.style.opacity = 1.0;
        }
        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
      });
    }
  };
  function pieChartConfig(data, labels, opts = {}) {
    const aspectRatio = "aspectRatio" in opts ? opts.aspectRatio : 2.2;
    const strippedLabels = labels.map(l => stripHtml(l));
    return {
      type: _pollUiBuilder.PIE_CHART_TYPE,
      data: {
        datasets: [{
          data,
          backgroundColor: (0, _chartColors.getColors)(data.length)
        }],
        labels: strippedLabels
      },
      plugins: [htmlLegendPlugin],
      options: {
        responsive: true,
        aspectRatio,
        animation: {
          duration: 0
        },
        plugins: {
          legend: {
            labels: {
              generateLabels() {
                return labels.map((text, index) => {
                  return {
                    fillStyle: (0, _chartColors.getColors)(data.length)[index],
                    text,
                    index
                  };
                });
              }
            },
            display: false
          },
          htmlLegend: {
            containerID: opts?.legendContainerId
          }
        }
      }
    };
  }
  function stripHtml(html) {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  (0, _widget.createWidget)("discourse-poll-buttons-dropdown", {
    tagName: "div.poll-buttons-dropdown",
    buildId(attrs) {
      return `poll-buttons-dropdown-${attrs.id}`;
    },
    transform(attrs) {
      return {
        content: this._buildContent(attrs),
        onChange: item => this.sendWidgetAction(item.id, item.param)
      };
    },
    template: function (attrs, state) {
      var _r = [];
      _r.push("\n  ");
      _r.push(this.attach("widget-dropdown", {
        "id": this.attrs.id,
        "icon": "cog",
        "label": "poll.options.label",
        "content": this.transformed.content,
        "onChange": this.transformed.onChange,
        "options": this.transformed.options
      }, undefined, undefined));
      _r.push("\n");
      return _r;
    },
    optionsCount(attrs) {
      return this._buildContent(attrs).length;
    },
    _buildContent(attrs) {
      const contents = [];
      const isAdmin = this.currentUser && this.currentUser.admin;
      const dataExplorerEnabled = this.siteSettings.data_explorer_enabled;
      const exportQueryID = this.siteSettings.poll_export_data_explorer_query_id;
      const {
        poll,
        post
      } = attrs;
      const closed = attrs.isClosed;
      const isStaff = this.currentUser && this.currentUser.staff;
      const topicArchived = post.get("topic.archived");
      if (attrs.groupableUserFields.length && poll.voters > 0) {
        const option = {
          ...buttonOptionsMap.showBreakdown
        };
        option.id = option.action;
        contents.push(option);
      }
      if (isAdmin && dataExplorerEnabled && poll.voters > 0 && exportQueryID) {
        const option = {
          ...buttonOptionsMap.exportResults
        };
        option.id = option.action;
        contents.push(option);
      }
      if (this.currentUser && (this.currentUser.id === post.user_id || isStaff) && !topicArchived) {
        if (closed) {
          if (!attrs.isAutomaticallyClosed) {
            const option = {
              ...buttonOptionsMap.openPoll
            };
            option.id = option.action;
            contents.push(option);
          }
        } else {
          const option = {
            ...buttonOptionsMap.closePoll
          };
          option.id = option.action;
          contents.push(option);
        }
      }
      return contents;
    }
  });
  (0, _widget.createWidget)("discourse-poll-buttons", {
    tagName: "div.poll-buttons",
    html(attrs) {
      const contents = [];
      const {
        poll,
        post
      } = attrs;
      const topicArchived = post.get("topic.archived");
      const closed = attrs.isClosed;
      const staffOnly = poll.results === "staff_only";
      const isStaff = this.currentUser && this.currentUser.staff;
      const isMe = this.currentUser && post.user_id === this.currentUser.id;
      const hideResultsDisabled = !staffOnly && (closed || topicArchived);
      const dropdown = this.attach("discourse-poll-buttons-dropdown", attrs);
      const dropdownOptionsCount = dropdown.optionsCount(attrs);
      if (attrs.isMultiple && !hideResultsDisabled && !attrs.showResults) {
        const castVotesDisabled = !attrs.canCastVotes;
        contents.push(this.attach("button", {
          className: `cast-votes ${castVotesDisabled ? "btn-default" : "btn-primary"}`,
          label: "poll.cast-votes.label",
          title: "poll.cast-votes.title",
          icon: castVotesDisabled ? "far-square" : "check",
          disabled: castVotesDisabled,
          action: "castVotes"
        }));
      }
      if (attrs.showResults && !hideResultsDisabled) {
        contents.push(this.attach("button", {
          className: "btn-default toggle-results",
          label: "poll.hide-results.label",
          title: "poll.hide-results.title",
          icon: "chevron-left",
          action: "toggleResults"
        }));
      }
      if (!attrs.showResults && !hideResultsDisabled) {
        let showResultsButton;
        if (!(poll.results === "on_vote" && !attrs.hasVoted && !isMe) && !(poll.results === "on_close" && !closed) && !(poll.results === "staff_only" && !isStaff) && poll.voters > 0) {
          showResultsButton = this.attach("button", {
            className: "btn-default toggle-results",
            label: "poll.show-results.label",
            title: "poll.show-results.title",
            icon: "chart-bar",
            action: "toggleResults"
          });
        }
        if (attrs.hasSavedVote) {
          contents.push(this.attach("button", {
            className: "btn-default remove-vote",
            label: "poll.remove-vote.label",
            title: "poll.remove-vote.title",
            icon: "undo",
            action: "removeVote"
          }));
        }
        if (showResultsButton) {
          contents.push(showResultsButton);
        }
      }

      // only show the dropdown if there's more than 1 button
      // otherwise just show the button
      if (dropdownOptionsCount > 1) {
        contents.push(dropdown);
      } else if (dropdownOptionsCount === 1) {
        const singleOptionId = dropdown._buildContent(attrs)[0].id;
        let singleOption = buttonOptionsMap[singleOptionId];
        if (singleOptionId === "toggleStatus") {
          singleOption = closed ? buttonOptionsMap.openPoll : buttonOptionsMap.closePoll;
        }
        contents.push(this.attach("button", singleOption));
      }
      return [contents];
    }
  });
  var _default = _exports.default = (0, _widget.createWidget)("discourse-poll", {
    tagName: "div",
    buildKey: attrs => `poll-${attrs.id}`,
    services: ["dialog"],
    buildAttributes(attrs) {
      let cssClasses = "poll";
      if (attrs.poll.chart_type === _pollUiBuilder.PIE_CHART_TYPE) {
        cssClasses += " pie";
      }
      return {
        class: cssClasses,
        "data-poll-name": attrs.poll.name,
        "data-poll-type": attrs.poll.type
      };
    },
    defaultState(attrs) {
      const {
        poll
      } = attrs;
      const staffOnly = attrs.poll.results === "staff_only";
      const showResults = poll.results !== "on_close" && this.hasVoted() && !staffOnly;
      return {
        loading: false,
        showResults
      };
    },
    html(attrs, state) {
      const staffOnly = attrs.poll.results === "staff_only";
      const showResults = state.showResults || attrs.post.get("topic.archived") && !staffOnly || this.isClosed() && !staffOnly;
      const newAttrs = {
        ...attrs,
        canCastVotes: this.canCastVotes(),
        hasVoted: this.hasVoted(),
        isAutomaticallyClosed: this.isAutomaticallyClosed(),
        isClosed: this.isClosed(),
        isMultiple: this.isMultiple(),
        max: this.max(),
        min: this.min(),
        showResults
      };
      return [this.attach("discourse-poll-container", newAttrs), this.attach("discourse-poll-info", newAttrs), this.attach("discourse-poll-buttons", newAttrs)];
    },
    min() {
      let min = parseInt(this.attrs.poll.min, 10);
      if (isNaN(min) || min < 0) {
        min = 1;
      }
      return min;
    },
    max() {
      let max = parseInt(this.attrs.poll.max, 10);
      const numOptions = this.attrs.poll.options.length;
      if (isNaN(max) || max > numOptions) {
        max = numOptions;
      }
      return max;
    },
    isAutomaticallyClosed() {
      const {
        poll
      } = this.attrs;
      return poll.close && moment.utc(poll.close, "YYYY-MM-DD HH:mm:ss Z") <= moment();
    },
    isClosed() {
      const {
        poll
      } = this.attrs;
      return poll.status === "closed" || this.isAutomaticallyClosed();
    },
    isMultiple() {
      const {
        poll
      } = this.attrs;
      return poll.type === "multiple";
    },
    hasVoted() {
      const {
        vote
      } = this.attrs;
      return vote && vote.length > 0;
    },
    canCastVotes() {
      const {
        state,
        attrs
      } = this;
      if (this.isClosed() || state.showResults || state.loading) {
        return false;
      }
      const selectedOptionCount = attrs.vote.length;
      if (this.isMultiple()) {
        return selectedOptionCount >= this.min() && selectedOptionCount <= this.max();
      }
      return selectedOptionCount > 0;
    },
    toggleStatus() {
      const {
        state,
        attrs
      } = this;
      const {
        post,
        poll
      } = attrs;
      if (this.isAutomaticallyClosed()) {
        return;
      }
      this.dialog.yesNoConfirm({
        message: _discourseI18n.default.t(this.isClosed() ? "poll.open.confirm" : "poll.close.confirm"),
        didConfirm: () => {
          state.loading = true;
          const status = this.isClosed() ? "open" : "closed";
          (0, _ajax.ajax)("/polls/toggle_status", {
            type: "PUT",
            data: {
              post_id: post.id,
              poll_name: poll.name,
              status
            }
          }).then(() => {
            poll.set("status", status);
            if (poll.results === "on_close") {
              state.showResults = status === "closed";
            }
            this.scheduleRerender();
          }).catch(error => {
            if (error) {
              (0, _ajaxError.popupAjaxError)(error);
            } else {
              this.dialog.alert(_discourseI18n.default.t("poll.error_while_toggling_status"));
            }
          }).finally(() => {
            state.loading = false;
          });
        }
      });
    },
    toggleResults() {
      this.state.showResults = !this.state.showResults;
    },
    removeVote() {
      const {
        attrs,
        state
      } = this;
      state.loading = true;
      return (0, _ajax.ajax)("/polls/vote", {
        type: "DELETE",
        data: {
          post_id: attrs.post.id,
          poll_name: attrs.poll.name
        }
      }).then(({
        poll
      }) => {
        attrs.poll.setProperties(poll);
        attrs.vote.length = 0;
        attrs.hasSavedVote = false;
        this.appEvents.trigger("poll:voted", poll, attrs.post, attrs.vote);
      }).catch(error => (0, _ajaxError.popupAjaxError)(error)).finally(() => {
        state.loading = false;
      });
    },
    exportResults() {
      const {
        attrs
      } = this;
      const queryID = this.siteSettings.poll_export_data_explorer_query_id;

      // This uses the Data Explorer plugin export as CSV route
      // There is detection to check if the plugin is enabled before showing the button
      (0, _ajax.ajax)(`/admin/plugins/explorer/queries/${queryID}/run.csv`, {
        type: "POST",
        data: {
          // needed for data-explorer route compatibility
          params: JSON.stringify({
            poll_name: attrs.poll.name,
            post_id: attrs.post.id.toString() // needed for data-explorer route compatibility
          }),
          explain: false,
          limit: 1000000,
          download: 1
        }
      }).then(csvContent => {
        const downloadLink = document.createElement("a");
        const blob = new Blob([csvContent], {
          type: "text/csv;charset=utf-8;"
        });
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.setAttribute("download", `poll-export-${attrs.poll.name}-${attrs.post.id}.csv`);
        downloadLink.click();
        downloadLink.remove();
      }).catch(error => {
        if (error) {
          (0, _ajaxError.popupAjaxError)(error);
        } else {
          this.dialog.alert(_discourseI18n.default.t("poll.error_while_exporting_results"));
        }
      });
    },
    showLogin() {
      this.register.lookup("route:application").send("showLogin");
    },
    _toggleOption(option) {
      const {
        vote
      } = this.attrs;
      const chosenIdx = vote.indexOf(option.id);
      if (chosenIdx !== -1) {
        vote.splice(chosenIdx, 1);
      } else {
        vote.push(option.id);
      }
    },
    toggleOption(option) {
      const {
        attrs
      } = this;
      if (this.isClosed()) {
        return;
      }
      if (!this.currentUser) {
        return this.showLogin();
      }
      if (!checkUserGroups(this.currentUser, this.attrs.poll)) {
        return;
      }
      const {
        vote
      } = attrs;
      if (!this.isMultiple() && vote.length === 1 && vote[0] === option.id) {
        return this.removeVote();
      }
      if (!this.isMultiple()) {
        vote.length = 0;
      }
      this._toggleOption(option);
      if (!this.isMultiple()) {
        return this.castVotes().catch(() => this._toggleOption(option));
      }
    },
    castVotes() {
      if (!this.canCastVotes()) {
        return;
      }
      if (!this.currentUser) {
        return this.showLogin();
      }
      const {
        attrs,
        state
      } = this;
      state.loading = true;
      return (0, _ajax.ajax)("/polls/vote", {
        type: "PUT",
        data: {
          post_id: attrs.post.id,
          poll_name: attrs.poll.name,
          options: attrs.vote
        }
      }).then(({
        poll
      }) => {
        attrs.hasSavedVote = true;
        attrs.poll.setProperties(poll);
        this.appEvents.trigger("poll:voted", poll, attrs.post, attrs.vote);
        if (attrs.poll.results !== "on_close") {
          state.showResults = true;
        }
        if (attrs.poll.results === "staff_only") {
          if (this.currentUser && this.currentUser.staff) {
            state.showResults = true;
          } else {
            state.showResults = false;
          }
        }
      }).catch(error => {
        if (error) {
          (0, _ajaxError.popupAjaxError)(error);
        } else {
          this.dialog.alert(_discourseI18n.default.t("poll.error_while_casting_votes"));
        }
      }).finally(() => {
        state.loading = false;
      });
    },
    showBreakdown() {
      (0, _application.getOwner)(this).lookup("service:modal").show(_pollBreakdown.default, {
        model: this.attrs
      });
    }
  });
});
define("discourse/plugins/poll/lib/chart-colors", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getColors = getColors;
  function getColors(count, palette) {
    palette = palette || "cool";
    let gradient;
    switch (palette) {
      case "cool":
        gradient = {
          0: [255, 255, 255],
          25: [220, 237, 200],
          50: [66, 179, 213],
          75: [26, 39, 62],
          100: [0, 0, 0]
        };
        break;
      case "warm":
        gradient = {
          0: [255, 255, 255],
          25: [254, 235, 101],
          50: [228, 82, 27],
          75: [77, 52, 47],
          100: [0, 0, 0]
        };
        break;
    }
    let gradientKeys = Object.keys(gradient);
    let colors = [];
    let currentGradientValue;
    let previousGradientIndex;
    for (let colorIndex = 0; colorIndex < count; colorIndex++) {
      currentGradientValue = (colorIndex + 1) * (100 / (count + 1));
      previousGradientIndex = previousGradientIndex || 0;
      let baseGradientKeyIndex;
      for (let y = previousGradientIndex; y < gradientKeys.length; y++) {
        if (!gradientKeys[y + 1]) {
          baseGradientKeyIndex = y - 1;
          break;
        } else if (currentGradientValue >= gradientKeys[y] && currentGradientValue < gradientKeys[y + 1]) {
          baseGradientKeyIndex = y;
          break;
        }
      }
      let differenceMultiplier = (currentGradientValue - gradientKeys[baseGradientKeyIndex]) / (gradientKeys[baseGradientKeyIndex + 1] - gradientKeys[baseGradientKeyIndex]);
      let color = [];
      for (let k = 0; k < 3; k++) {
        color.push(Math.round(gradient[gradientKeys[baseGradientKeyIndex]][k] - (gradient[gradientKeys[baseGradientKeyIndex]][k] - gradient[gradientKeys[baseGradientKeyIndex + 1]][k]) * differenceMultiplier));
      }
      colors.push(`rgb(${color.toString()})`);
      previousGradientIndex = baseGradientKeyIndex;
    }
    return colors;
  }
});
define("discourse/plugins/poll/lib/discourse-markdown/poll", ["exports", "discourse-i18n"], function (_exports, _discourseI18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  /*eslint no-bitwise:0 */

  const DATA_PREFIX = "data-poll-";
  const DEFAULT_POLL_NAME = "poll";
  const ALLOWED_ATTRIBUTES = ["close", "max", "min", "name", "order", "public", "results", "chartType", "groups", "status", "step", "type"];
  function replaceToken(tokens, target, list) {
    let pos = tokens.indexOf(target);
    let level = tokens[pos].level;
    tokens.splice(pos, 1, ...list);
    list[0].map = target.map;

    // resequence levels
    for (; pos < tokens.length; pos++) {
      let nesting = tokens[pos].nesting;
      if (nesting < 0) {
        level--;
      }
      tokens[pos].level = level;
      if (nesting > 0) {
        level++;
      }
    }
  }

  // analyzes the block to that we have poll options
  function getListItems(tokens, startToken) {
    let i = tokens.length - 1;
    let listItems = [];
    let buffer = [];
    for (; tokens[i] !== startToken; i--) {
      if (i === 0) {
        return;
      }
      let token = tokens[i];
      if (token.level === 0) {
        if (token.tag !== "ol" && token.tag !== "ul") {
          return;
        }
      }
      if (token.level === 1 && token.nesting === 1) {
        if (token.tag === "li") {
          listItems.push([token, buffer.reverse().join(" ")]);
        } else {
          return;
        }
      }
      if (token.level === 1 && token.nesting === 1 && token.tag === "li") {
        buffer = [];
      } else {
        if (token.type === "text" || token.type === "inline") {
          buffer.push(token.content);
        }
      }
    }
    return listItems.reverse();
  }
  function invalidPoll(state, tag) {
    let token = state.push("text", "", 0);
    token.content = "[/" + tag + "]";
  }
  function getTitle(tokens, startToken) {
    const startIndex = tokens.indexOf(startToken);
    if (startIndex === -1) {
      return;
    }
    const pollTokens = tokens.slice(startIndex);
    const open = pollTokens.findIndex(token => token.type === "heading_open");
    const close = pollTokens.findIndex(token => token.type === "heading_close");
    if (open === -1 || close === -1) {
      return;
    }
    const titleTokens = pollTokens.slice(open + 1, close);

    // Remove the heading element
    tokens.splice(startIndex + open, close - open + 1);
    return titleTokens;
  }
  const rule = {
    tag: "poll",
    before(state, tagInfo, raw) {
      let token = state.push("text", "", 0);
      token.content = raw;
      token.bbcode_attrs = tagInfo.attrs;
      token.bbcode_type = "poll_open";
    },
    after(state, openToken, raw) {
      const titleTokens = getTitle(state.tokens, openToken);
      let items = getListItems(state.tokens, openToken);
      if (!items) {
        return invalidPoll(state, raw);
      }
      const attrs = openToken.bbcode_attrs;

      // default poll attributes
      const attributes = [["class", "poll"]];
      if (!attrs["status"]) {
        attributes.push([DATA_PREFIX + "status", "open"]);
      }
      ALLOWED_ATTRIBUTES.forEach(name => {
        if (attrs[name]) {
          attributes.push([DATA_PREFIX + name, attrs[name]]);
        }
      });
      if (!attrs.name) {
        attributes.push([DATA_PREFIX + "name", DEFAULT_POLL_NAME]);
      }

      // we might need these values later...
      let min = parseInt(attrs["min"], 10);
      let max = parseInt(attrs["max"], 10);
      let step = parseInt(attrs["step"], 10);

      // infinite loop if step < 1
      if (step < 1) {
        step = 1;
      }
      let header = [];
      let token = new state.Token("poll_open", "div", 1);
      token.block = true;
      token.attrs = attributes;
      header.push(token);
      token = new state.Token("poll_open", "div", 1);
      token.attrs = [["class", "poll-container"]];
      header.push(token);
      if (titleTokens) {
        token = new state.Token("title_open", "div", 1);
        token.attrs = [["class", "poll-title"]];
        header.push(token);
        header.push(...titleTokens);
        token = new state.Token("title_close", "div", -1);
        header.push(token);
      }

      // generate the options when the type is "number"
      if (attrs["type"] === "number") {
        // default values
        if (isNaN(min)) {
          min = 1;
        }
        if (isNaN(max)) {
          max = state.md.options.discourse.pollMaximumOptions;
        }
        if (isNaN(step)) {
          step = 1;
        }
        if (items.length > 0) {
          return invalidPoll(state, raw);
        }

        // dynamically generate options
        token = new state.Token("bullet_list_open", "ul", 1);
        header.push(token);
        for (let o = min; o <= max; o += step) {
          token = new state.Token("list_item_open", "li", 1);
          items.push([token, String(o)]);
          header.push(token);
          token = new state.Token("text", "", 0);
          token.content = String(o);
          header.push(token);
          token = new state.Token("list_item_close", "li", -1);
          header.push(token);
        }
        token = new state.Token("bullet_item_close", "", -1);
        header.push(token);
      }

      // flag items so we add hashes
      for (let o = 0; o < items.length; o++) {
        token = items[o][0];
        let text = items[o][1];
        token.attrs = token.attrs || [];
        let md5Hash = md5(JSON.stringify([text]));
        token.attrs.push([DATA_PREFIX + "option-id", md5Hash]);
      }
      replaceToken(state.tokens, openToken, header);

      // we got to correct the level on the state
      // we just resequenced
      state.level = state.tokens[state.tokens.length - 1].level;
      state.push("poll_close", "div", -1);
      token = state.push("poll_open", "div", 1);
      token.attrs = [["class", "poll-info"]];
      token = state.push("poll_open", "div", 1);
      token.attrs = [["class", "poll-info_counts"]];
      token = state.push("poll_open", "div", 1);
      token.attrs = [["class", "poll-info_counts-count"]];
      token = state.push("span_open", "span", 1);
      token.block = false;
      token.attrs = [["class", "info-number"]];
      token = state.push("text", "", 0);
      token.content = "0";
      state.push("span_close", "span", -1);
      token = state.push("span_open", "span", 1);
      token.block = false;
      token.attrs = [["class", "info-label"]];
      token = state.push("text", "", 0);
      token.content = _discourseI18n.default.t("poll.voters", {
        count: 0
      });
      state.push("span_close", "span", -1);
      state.push("poll_close", "div", -1);
      state.push("poll_close", "div", -1);
      state.push("poll_close", "div", -1);
      state.push("poll_close", "div", -1);
    }
  };
  function newApiInit(helper) {
    helper.registerOptions((opts, siteSettings) => {
      if (!siteSettings.poll_enabled) {
        opts.features.poll = false;
      }
      opts.pollMaximumOptions = siteSettings.poll_maximum_options;
    });
    helper.registerPlugin(md => {
      md.block.bbcode.ruler.push("poll", rule);
    });
  }
  function setup(helper) {
    helper.allowList(["div.poll", "div.poll-info", "div.poll-info_counts", "div.poll-info_counts-count", "div.poll-container", "div.poll-title", "div.poll-buttons", "div[data-*]", "span.info-number", "span.info-text", "span.info-label", "a.button.cast-votes", "a.button.toggle-results", "li[data-*]"]);
    newApiInit(helper);
  }

  /*!
   * Joseph Myer's md5() algorithm wrapped in a self-invoked function to prevent
   * global namespace pollution, modified to hash unicode characters as UTF-8.
   *
   * Copyright 1999-2010, Joseph Myers, Paul Johnston, Greg Holt, Will Bond <will@wbond.net>
   * http://www.myersdaily.org/joseph/javascript/md5-text.html
   * http://pajhome.org.uk/crypt/md5
   *
   * Released under the BSD license
   * http://www.opensource.org/licenses/bsd-license
   */
  function md5cycle(x, k) {
    let a = x[0],
      b = x[1],
      c = x[2],
      d = x[3];
    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);
    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);
    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);
    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);
    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
  }
  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32(a << s | a >>> 32 - s, b);
  }
  function ff(a, b, c, d, x, s, t) {
    return cmn(b & c | ~b & d, a, b, x, s, t);
  }
  function gg(a, b, c, d, x, s, t) {
    return cmn(b & d | c & ~d, a, b, x, s, t);
  }
  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  function md51(s) {
    // Converts the string to UTF-8 "bytes"
    s = unescape(encodeURI(s));
    let n = s.length,
      state = [1732584193, -271733879, -1732584194, 271733878],
      i;
    for (i = 64; i <= s.length; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    let tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < s.length; i++) {
      tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    }
    tail[i >> 2] |= 0x80 << (i % 4 << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i++) {
        tail[i] = 0;
      }
    }
    tail[14] = n * 8;
    md5cycle(state, tail);
    return state;
  }
  function md5blk(s) {
    /* I figured global was faster.   */
    let md5blks = [],
      i; /* Andy King said do it this way. */
    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }
  let hex_chr = "0123456789abcdef".split("");
  function rhex(n) {
    let s = "",
      j = 0;
    for (; j < 4; j++) {
      s += hex_chr[n >> j * 8 + 4 & 0x0f] + hex_chr[n >> j * 8 & 0x0f];
    }
    return s;
  }
  function hex(x) {
    for (let i = 0; i < x.length; i++) {
      x[i] = rhex(x[i]);
    }
    return x.join("");
  }
  function add32(a, b) {
    return a + b & 0xffffffff;
  }
  function md5(s) {
    return hex(md51(s));
  }
});
define("discourse/plugins/poll/lib/even-round", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  // works as described on http://stackoverflow.com/a/13483710
  function sumsUpTo100(percentages) {
    return percentages.map(p => Math.floor(p)).reduce((a, b) => a + b) === 100;
  }
  function _default(percentages) {
    let decimals = percentages.map(a => a % 1);
    const sumOfDecimals = Math.ceil(decimals.reduce((a, b) => a + b));
    // compensate error by adding 1 to n items with the greatest decimal part
    for (let i = 0, max = decimals.length; i < sumOfDecimals && i < max; i++) {
      // find the greatest item in the decimals array, set it to 0,
      // and increase the corresponding item in the percentages array by 1
      let greatest = 0;
      let index = 0;
      for (let j = 0; j < decimals.length; j++) {
        if (decimals[j] > greatest) {
          index = j;
          greatest = decimals[j];
        }
      }
      ++percentages[index];
      decimals[index] = 0;
      // quit early when there is a rounding issue
      if (sumsUpTo100(percentages)) {
        break;
      }
    }
    return percentages.map(p => Math.floor(p));
  }
});//# sourceMappingURL=poll.map
