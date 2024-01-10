define("discourse/plugins/discourse-local-dates/discourse/components/modal/local-dates-create", ["exports", "@ember/component", "@ember/object", "@ember/object/computed", "@ember/runloop", "discourse/lib/computed", "discourse/lib/local-dates", "discourse/lib/text", "discourse-common/config/environment", "discourse-common/utils/decorators", "discourse-i18n", "discourse/plugins/discourse-local-dates/lib/local-date-markup-generator", "@ember/template-factory"], function (_exports, _component, _object, _computed, _runloop, _computed2, _localDates, _text, _environment, _decorators, _discourseI18n, _localDateMarkupGenerator, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _obj;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <DModal
    @title={{i18n "discourse_local_dates.title"}}
    @closeModal={{@closeModal}}
    class="discourse-local-dates-create-modal -large"
  >
    <:body>
      <div class="form">
        {{#if this.isValid}}
          {{#if this.timezoneIsDifferentFromUserTimezone}}
            <div class="preview alert alert-info">
              {{i18n "discourse_local_dates.create.form.current_timezone"}}
              <b>{{this.formattedCurrentUserTimezone}}</b>{{this.currentPreview}}
            </div>
          {{/if}}
        {{else}}
          <div class="validation-error alert alert-error">
            {{i18n "discourse_local_dates.create.form.invalid_date"}}
          </div>
        {{/if}}
  
        {{this.computeDate}}
  
        <div class="date-time-configuration">
          <div class="inputs-panel">
            <div
              class="date-time-control from
                {{if this.fromSelected 'is-selected'}}
                {{if this.fromFilled 'is-filled'}}"
            >
              {{d-icon "calendar-alt"}}
              <DButton
                @action={{this.focusFrom}}
                @translatedLabel={{this.formattedFrom}}
                id="from-date-time"
                class="date-time"
                autofocus
              />
            </div>
  
            <div
              class="date-time-control to
                {{if this.toSelected 'is-selected'}}
                {{if this.toFilled 'is-filled'}}"
            >
              {{d-icon "calendar-alt"}}
              <DButton
                @action={{this.focusTo}}
                @translatedLabel={{this.formattedTo}}
                class="date-time"
              />
              {{#if this.toFilled}}
                <DButton
                  @action={{this.eraseToDateTime}}
                  @icon="times"
                  class="delete-to-date"
                />
              {{/if}}
            </div>
  
            {{#unless this.site.mobileView}}
              <TimezoneInput
                @options={{hash icon="globe"}}
                @value={{this.timezone}}
                @onChange={{action (mut this.timezone)}}
              />
            {{/unless}}
          </div>
  
          <div class="picker-panel">
            <CalendarDateTimeInput
              @datePickerId="local-date-create-form"
              @date={{this.selectedDate}}
              @time={{this.selectedTime}}
              @minDate={{this.minDate}}
              @timeFormat={{this.timeFormat}}
              @dateFormat={{this.dateFormat}}
              @onChangeDate={{action this.changeSelectedDate}}
              @onChangeTime={{action this.changeSelectedTime}}
            />
          </div>
  
          {{#if this.site.mobileView}}
            <TimezoneInput
              @value={{this.timezone}}
              @options={{hash icon="globe"}}
              @onChange={{action (mut this.timezone)}}
            />
          {{/if}}
        </div>
  
        {{#if this.advancedMode}}
          <div class="advanced-options">
            {{#unless this.isRange}}
              <div class="control-group recurrence">
                <label class="control-label">
                  {{i18n "discourse_local_dates.create.form.recurring_title"}}
                </label>
                <p>{{html-safe
                    (i18n
                      "discourse_local_dates.create.form.recurring_description"
                    )
                  }}</p>
                <div class="controls">
                  <ComboBox
                    @content={{this.recurringOptions}}
                    @value={{this.recurring}}
                    @onChange={{action (mut this.recurring)}}
                    @options={{hash
                      none="discourse_local_dates.create.form.recurring_none"
                    }}
                    class="recurrence-input"
                  />
                </div>
              </div>
            {{/unless}}
  
            <div class="control-group timezones">
              <label>{{i18n
                  "discourse_local_dates.create.form.timezones_title"
                }}</label>
              <p>{{i18n
                  "discourse_local_dates.create.form.timezones_description"
                }}</p>
              <div class="controls">
                <MultiSelect
                  @valueProperty={{null}}
                  @nameProperty={{null}}
                  @content={{this.allTimezones}}
                  @value={{this.timezones}}
                  @options={{hash allowAny=false maximum=5}}
                  class="timezones-input"
                />
              </div>
            </div>
  
            <div class="control-group format">
              <label>{{i18n
                  "discourse_local_dates.create.form.format_title"
                }}</label>
              <p>
                {{i18n "discourse_local_dates.create.form.format_description"}}
                <a
                  target="_blank"
                  href="https://momentjs.com/docs/#/parsing/string-format/"
                  rel="noopener noreferrer"
                >
                  {{d-icon "question-circle"}}
                </a>
              </p>
              <div class="controls">
                <TextField @value={{this.format}} class="format-input" />
              </div>
            </div>
            <div class="control-group">
              <ul class="formats">
                {{#each this.previewedFormats as |previewedFormat|}}
                  <li class="format">
                    <a
                      class="moment-format"
                      href
                      {{on "click" (fn this.updateFormat previewedFormat.format)}}
                    >
                      {{previewedFormat.format}}
                    </a>
                    <span class="previewed-format">
                      {{previewedFormat.preview}}
                    </span>
                  </li>
                {{/each}}
              </ul>
            </div>
          </div>
        {{/if}}
      </div>
    </:body>
  
    <:footer>
  
      {{#if this.isValid}}
        <DButton
          @action={{this.save}}
          @label="discourse_local_dates.create.form.insert"
          class="btn-primary"
        />
      {{/if}}
  
      <DButton
        @action={{this.cancel}}
        @translatedLabel={{i18n "cancel"}}
        class="btn-flat"
      />
  
      <DButton
        @action={{this.toggleAdvancedMode}}
        @icon="cog"
        @label={{this.toggleModeBtnLabel}}
        class="btn-default advanced-mode-btn"
      />
    </:footer>
  </DModal>
  */
  {
    "id": "zZR1HtHx",
    "block": "[[[8,[39,0],[[24,0,\"discourse-local-dates-create-modal -large\"]],[[\"@title\",\"@closeModal\"],[[28,[37,1],[\"discourse_local_dates.title\"],null],[30,1]]],[[\"body\",\"footer\"],[[[[1,\"\\n    \"],[10,0],[14,0,\"form\"],[12],[1,\"\\n\"],[41,[30,0,[\"isValid\"]],[[[41,[30,0,[\"timezoneIsDifferentFromUserTimezone\"]],[[[1,\"          \"],[10,0],[14,0,\"preview alert alert-info\"],[12],[1,\"\\n            \"],[1,[28,[35,1],[\"discourse_local_dates.create.form.current_timezone\"],null]],[1,\"\\n            \"],[10,\"b\"],[12],[1,[30,0,[\"formattedCurrentUserTimezone\"]]],[13],[1,[30,0,[\"currentPreview\"]]],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],null]],[]],[[[1,\"        \"],[10,0],[14,0,\"validation-error alert alert-error\"],[12],[1,\"\\n          \"],[1,[28,[35,1],[\"discourse_local_dates.create.form.invalid_date\"],null]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]]],[1,\"\\n      \"],[1,[30,0,[\"computeDate\"]]],[1,\"\\n\\n      \"],[10,0],[14,0,\"date-time-configuration\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"inputs-panel\"],[12],[1,\"\\n          \"],[10,0],[15,0,[29,[\"date-time-control from\\n              \",[52,[30,0,[\"fromSelected\"]],\"is-selected\"],\"\\n              \",[52,[30,0,[\"fromFilled\"]],\"is-filled\"]]]],[12],[1,\"\\n            \"],[1,[28,[35,3],[\"calendar-alt\"],null]],[1,\"\\n            \"],[8,[39,4],[[24,1,\"from-date-time\"],[24,0,\"date-time\"],[24,\"autofocus\",\"\"]],[[\"@action\",\"@translatedLabel\"],[[30,0,[\"focusFrom\"]],[30,0,[\"formattedFrom\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[15,0,[29,[\"date-time-control to\\n              \",[52,[30,0,[\"toSelected\"]],\"is-selected\"],\"\\n              \",[52,[30,0,[\"toFilled\"]],\"is-filled\"]]]],[12],[1,\"\\n            \"],[1,[28,[35,3],[\"calendar-alt\"],null]],[1,\"\\n            \"],[8,[39,4],[[24,0,\"date-time\"]],[[\"@action\",\"@translatedLabel\"],[[30,0,[\"focusTo\"]],[30,0,[\"formattedTo\"]]]],null],[1,\"\\n\"],[41,[30,0,[\"toFilled\"]],[[[1,\"              \"],[8,[39,4],[[24,0,\"delete-to-date\"]],[[\"@action\",\"@icon\"],[[30,0,[\"eraseToDateTime\"]],\"times\"]],null],[1,\"\\n\"]],[]],null],[1,\"          \"],[13],[1,\"\\n\\n\"],[41,[51,[30,0,[\"site\",\"mobileView\"]]],[[[1,\"            \"],[8,[39,6],null,[[\"@options\",\"@value\",\"@onChange\"],[[28,[37,7],null,[[\"icon\"],[\"globe\"]]],[30,0,[\"timezone\"]],[28,[37,8],[[30,0],[28,[37,9],[[30,0,[\"timezone\"]]],null]],null]]],null],[1,\"\\n\"]],[]],null],[1,\"        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"picker-panel\"],[12],[1,\"\\n          \"],[8,[39,10],null,[[\"@datePickerId\",\"@date\",\"@time\",\"@minDate\",\"@timeFormat\",\"@dateFormat\",\"@onChangeDate\",\"@onChangeTime\"],[\"local-date-create-form\",[30,0,[\"selectedDate\"]],[30,0,[\"selectedTime\"]],[30,0,[\"minDate\"]],[30,0,[\"timeFormat\"]],[30,0,[\"dateFormat\"]],[28,[37,8],[[30,0],[30,0,[\"changeSelectedDate\"]]],null],[28,[37,8],[[30,0],[30,0,[\"changeSelectedTime\"]]],null]]],null],[1,\"\\n        \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"site\",\"mobileView\"]],[[[1,\"          \"],[8,[39,6],null,[[\"@value\",\"@options\",\"@onChange\"],[[30,0,[\"timezone\"]],[28,[37,7],null,[[\"icon\"],[\"globe\"]]],[28,[37,8],[[30,0],[28,[37,9],[[30,0,[\"timezone\"]]],null]],null]]],null],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"advancedMode\"]],[[[1,\"        \"],[10,0],[14,0,\"advanced-options\"],[12],[1,\"\\n\"],[41,[51,[30,0,[\"isRange\"]]],[[[1,\"            \"],[10,0],[14,0,\"control-group recurrence\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"control-label\"],[12],[1,\"\\n                \"],[1,[28,[35,1],[\"discourse_local_dates.create.form.recurring_title\"],null]],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,2],[12],[1,[28,[35,11],[[28,[37,1],[\"discourse_local_dates.create.form.recurring_description\"],null]],null]],[13],[1,\"\\n              \"],[10,0],[14,0,\"controls\"],[12],[1,\"\\n                \"],[8,[39,12],[[24,0,\"recurrence-input\"]],[[\"@content\",\"@value\",\"@onChange\",\"@options\"],[[30,0,[\"recurringOptions\"]],[30,0,[\"recurring\"]],[28,[37,8],[[30,0],[28,[37,9],[[30,0,[\"recurring\"]]],null]],null],[28,[37,7],null,[[\"none\"],[\"discourse_local_dates.create.form.recurring_none\"]]]]],null],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n          \"],[10,0],[14,0,\"control-group timezones\"],[12],[1,\"\\n            \"],[10,\"label\"],[12],[1,[28,[35,1],[\"discourse_local_dates.create.form.timezones_title\"],null]],[13],[1,\"\\n            \"],[10,2],[12],[1,[28,[35,1],[\"discourse_local_dates.create.form.timezones_description\"],null]],[13],[1,\"\\n            \"],[10,0],[14,0,\"controls\"],[12],[1,\"\\n              \"],[8,[39,13],[[24,0,\"timezones-input\"]],[[\"@valueProperty\",\"@nameProperty\",\"@content\",\"@value\",\"@options\"],[null,null,[30,0,[\"allTimezones\"]],[30,0,[\"timezones\"]],[28,[37,7],null,[[\"allowAny\",\"maximum\"],[false,5]]]]],null],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"control-group format\"],[12],[1,\"\\n            \"],[10,\"label\"],[12],[1,[28,[35,1],[\"discourse_local_dates.create.form.format_title\"],null]],[13],[1,\"\\n            \"],[10,2],[12],[1,\"\\n              \"],[1,[28,[35,1],[\"discourse_local_dates.create.form.format_description\"],null]],[1,\"\\n              \"],[10,3],[14,\"target\",\"_blank\"],[14,6,\"https://momentjs.com/docs/#/parsing/string-format/\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n                \"],[1,[28,[35,3],[\"question-circle\"],null]],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"controls\"],[12],[1,\"\\n              \"],[8,[39,14],[[24,0,\"format-input\"]],[[\"@value\"],[[30,0,[\"format\"]]]],null],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"control-group\"],[12],[1,\"\\n            \"],[10,\"ul\"],[14,0,\"formats\"],[12],[1,\"\\n\"],[42,[28,[37,16],[[28,[37,16],[[30,0,[\"previewedFormats\"]]],null]],null],null,[[[1,\"                \"],[10,\"li\"],[14,0,\"format\"],[12],[1,\"\\n                  \"],[11,3],[24,0,\"moment-format\"],[24,6,\"\"],[4,[38,17],[\"click\",[28,[37,18],[[30,0,[\"updateFormat\"]],[30,2,[\"format\"]]],null]],null],[12],[1,\"\\n                    \"],[1,[30,2,[\"format\"]]],[1,\"\\n                  \"],[13],[1,\"\\n                  \"],[10,1],[14,0,\"previewed-format\"],[12],[1,\"\\n                    \"],[1,[30,2,[\"preview\"]]],[1,\"\\n                  \"],[13],[1,\"\\n                \"],[13],[1,\"\\n\"]],[2]],null],[1,\"            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n\\n\"],[41,[30,0,[\"isValid\"]],[[[1,\"      \"],[8,[39,4],[[24,0,\"btn-primary\"]],[[\"@action\",\"@label\"],[[30,0,[\"save\"]],\"discourse_local_dates.create.form.insert\"]],null],[1,\"\\n\"]],[]],null],[1,\"\\n    \"],[8,[39,4],[[24,0,\"btn-flat\"]],[[\"@action\",\"@translatedLabel\"],[[30,0,[\"cancel\"]],[28,[37,1],[\"cancel\"],null]]],null],[1,\"\\n\\n    \"],[8,[39,4],[[24,0,\"btn-default advanced-mode-btn\"]],[[\"@action\",\"@icon\",\"@label\"],[[30,0,[\"toggleAdvancedMode\"]],\"cog\",[30,0,[\"toggleModeBtnLabel\"]]]],null],[1,\"\\n  \"]],[]]]]]],[\"@closeModal\",\"previewedFormat\"],false,[\"d-modal\",\"i18n\",\"if\",\"d-icon\",\"d-button\",\"unless\",\"timezone-input\",\"hash\",\"action\",\"mut\",\"calendar-date-time-input\",\"html-safe\",\"combo-box\",\"multi-select\",\"text-field\",\"each\",\"-track-array\",\"on\",\"fn\"]]",
    "moduleName": "discourse/plugins/discourse-local-dates/discourse/components/modal/local-dates-create.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, _component.default.extend((_dec = (0, _decorators.observes)("computedConfig.{from,to,options}", "options", "isValid", "isRange"), _dec2 = (0, _decorators.debounce)(_environment.INPUT_DELAY), _dec3 = (0, _decorators.default)("date", "toDate", "toTime"), _dec4 = (0, _decorators.default)("computedConfig", "isRange"), _dec5 = (0, _decorators.default)("date", "time", "isRange", "options.{format,timezone}"), _dec6 = (0, _decorators.default)("toDate", "toTime", "isRange", "options.{timezone,format}"), _dec7 = (0, _decorators.default)("recurring", "timezones", "timezone", "format"), _dec8 = (0, _decorators.default)("fromConfig.{date}", "toConfig.{date}", "options.{recurring,timezones,timezone,format}"), _dec9 = (0, _decorators.default)("currentUserTimezone"), _dec10 = (0, _decorators.default)("formats"), _dec11 = (0, _decorators.default)("advancedMode"), _dec12 = (0, _decorators.default)("computedConfig.{from,to,options}", "options", "isValid", "isRange"), _dec13 = (0, _decorators.default)("fromConfig.dateTime"), _dec14 = (0, _decorators.default)("toConfig.dateTime", "toSelected"), _dec15 = (0, _decorators.default)("fromSelected", "toSelected"), _dec16 = (0, _decorators.default)("fromSelected", "toSelected"), (_obj = {
    timeFormat: "HH:mm:ss",
    dateFormat: "YYYY-MM-DD",
    dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
    date: null,
    toDate: null,
    time: null,
    toTime: null,
    format: null,
    formats: null,
    recurring: null,
    advancedMode: false,
    timezone: null,
    fromSelected: null,
    fromFilled: (0, _computed.notEmpty)("date"),
    toSelected: null,
    toFilled: (0, _computed.notEmpty)("toDate"),
    init() {
      this._super(...arguments);
      this._picker = null;
      this.setProperties({
        timezones: [],
        formats: (this.siteSettings.discourse_local_dates_default_formats || "").split("|").filter(f => f),
        timezone: this.currentUserTimezone,
        date: moment().format(this.dateFormat)
      });
    },
    didInsertElement() {
      this._super(...arguments);
      this.send("focusFrom");
    },
    configChanged() {
      this._renderPreview();
    },
    async _renderPreview() {
      if (this.markup) {
        const result = await (0, _text.cook)(this.markup);
        this.set("currentPreview", result);
        (0, _runloop.schedule)("afterRender", () => {
          (0, _localDates.applyLocalDates)(document.querySelectorAll(".preview .discourse-local-date"), this.siteSettings);
        });
      }
    },
    isRange(date, toDate, toTime) {
      return date && (toDate || toTime);
    },
    isValid(config, isRange) {
      const fromConfig = config.from;
      if (!config.from.dateTime || !config.from.dateTime.isValid()) {
        return false;
      }
      if (isRange) {
        const toConfig = config.to;
        if (!toConfig.dateTime || !toConfig.dateTime.isValid() || toConfig.dateTime.diff(fromConfig.dateTime) < 0) {
          return false;
        }
      }
      return true;
    },
    fromConfig(date, time, isRange, options = {}) {
      const timeInferred = time ? false : true;
      let dateTime;
      if (!timeInferred) {
        dateTime = moment.tz(`${date} ${time}`, options.timezone);
      } else {
        dateTime = moment.tz(date, options.timezone);
      }
      if (!timeInferred) {
        time = dateTime.format(this.timeFormat);
      }
      let format = options.format;
      if (timeInferred && this.formats.includes(format)) {
        format = "LL";
      }
      return _object.default.create({
        date: dateTime.format(this.dateFormat),
        time,
        dateTime,
        format,
        range: isRange ? "start" : false
      });
    },
    toConfig(date, time, isRange, options = {}) {
      const timeInferred = time ? false : true;
      if (time && !date) {
        date = moment().format(this.dateFormat);
      }
      let dateTime;
      if (!timeInferred) {
        dateTime = moment.tz(`${date} ${time}`, options.timezone);
      } else {
        dateTime = moment.tz(date, options.timezone).endOf("day");
      }
      if (!timeInferred) {
        time = dateTime.format(this.timeFormat);
      }
      let format = options.format;
      if (timeInferred && this.formats.includes(format)) {
        format = "LL";
      }
      return _object.default.create({
        date: dateTime.format(this.dateFormat),
        time,
        dateTime,
        format,
        range: isRange ? "end" : false
      });
    },
    options(recurring, timezones, timezone, format) {
      return _object.default.create({
        recurring,
        timezones,
        timezone,
        format
      });
    },
    computedConfig(fromConfig, toConfig, options) {
      return _object.default.create({
        from: fromConfig,
        to: toConfig,
        options
      });
    },
    currentUserTimezone() {
      return this.currentUser.user_option.timezone || moment.tz.guess();
    },
    allTimezones() {
      return moment.tz.names();
    },
    timezoneIsDifferentFromUserTimezone: (0, _computed2.propertyNotEqual)("currentUserTimezone", "options.timezone"),
    formattedCurrentUserTimezone(timezone) {
      return timezone.replace("_", " ").replace("Etc/", "").replace("/", ", ");
    },
    previewedFormats(formats) {
      return formats.map(format => {
        return {
          format,
          preview: moment().format(format)
        };
      });
    },
    recurringOptions() {
      const key = "discourse_local_dates.create.form.recurring";
      return [{
        name: _discourseI18n.default.t(`${key}.every_day`),
        id: "1.days"
      }, {
        name: _discourseI18n.default.t(`${key}.every_week`),
        id: "1.weeks"
      }, {
        name: _discourseI18n.default.t(`${key}.every_two_weeks`),
        id: "2.weeks"
      }, {
        name: _discourseI18n.default.t(`${key}.every_month`),
        id: "1.months"
      }, {
        name: _discourseI18n.default.t(`${key}.every_two_months`),
        id: "2.months"
      }, {
        name: _discourseI18n.default.t(`${key}.every_three_months`),
        id: "3.months"
      }, {
        name: _discourseI18n.default.t(`${key}.every_six_months`),
        id: "6.months"
      }, {
        name: _discourseI18n.default.t(`${key}.every_year`),
        id: "1.years"
      }];
    },
    _generateDateMarkup(fromDateTime, options, isRange, toDateTime) {
      return (0, _localDateMarkupGenerator.default)(fromDateTime, options, isRange, toDateTime);
    },
    toggleModeBtnLabel(advancedMode) {
      return advancedMode ? "discourse_local_dates.create.form.simple_mode" : "discourse_local_dates.create.form.advanced_mode";
    },
    markup(config, options, isValid, isRange) {
      let text;
      if (isValid && config.from) {
        if (config.to && config.to.range) {
          text = this._generateDateMarkup(config.from, options, isRange, config.to);
        } else {
          text = this._generateDateMarkup(config.from, options, isRange);
        }
      }
      return text;
    },
    formattedFrom(dateTime) {
      return dateTime.format("LLLL");
    },
    formattedTo(dateTime, toSelected) {
      const emptyText = toSelected ? "&nbsp;" : _discourseI18n.default.t("discourse_local_dates.create.form.until");
      return dateTime.isValid() ? dateTime.format("LLLL") : emptyText;
    },
    updateFormat(format, event) {
      event?.preventDefault();
      this.set("format", format);
    },
    selectedDate(fromSelected) {
      return fromSelected ? this.date : this.toDate;
    },
    selectedTime(fromSelected) {
      return fromSelected ? this.time : this.toTime;
    },
    changeSelectedDate(date) {
      if (this.fromSelected) {
        this.set("date", date);
      } else {
        this.set("toDate", date);
      }
    },
    changeSelectedTime(time) {
      if (this.fromSelected) {
        this.set("time", time);
      } else {
        this.set("toTime", time);
      }
    },
    eraseToDateTime() {
      this.setProperties({
        toDate: null,
        toTime: null
      });
      this.focusFrom();
    },
    focusFrom() {
      this.setProperties({
        fromSelected: true,
        toSelected: false,
        minDate: null
      });
    },
    focusTo() {
      this.setProperties({
        toSelected: true,
        fromSelected: false,
        minDate: this.get("fromConfig.date")
      });
    },
    toggleAdvancedMode() {
      this.toggleProperty("advancedMode");
    },
    save() {
      const markup = this.markup;
      if (markup) {
        this.closeModal();
        this.model.insertDate(markup);
      }
    },
    cancel() {
      this.closeModal();
    }
  }, (_applyDecoratedDescriptor(_obj, "configChanged", [_dec], Object.getOwnPropertyDescriptor(_obj, "configChanged"), _obj), _applyDecoratedDescriptor(_obj, "_renderPreview", [_dec2], Object.getOwnPropertyDescriptor(_obj, "_renderPreview"), _obj), _applyDecoratedDescriptor(_obj, "isRange", [_dec3], Object.getOwnPropertyDescriptor(_obj, "isRange"), _obj), _applyDecoratedDescriptor(_obj, "isValid", [_dec4], Object.getOwnPropertyDescriptor(_obj, "isValid"), _obj), _applyDecoratedDescriptor(_obj, "fromConfig", [_dec5], Object.getOwnPropertyDescriptor(_obj, "fromConfig"), _obj), _applyDecoratedDescriptor(_obj, "toConfig", [_dec6], Object.getOwnPropertyDescriptor(_obj, "toConfig"), _obj), _applyDecoratedDescriptor(_obj, "options", [_dec7], Object.getOwnPropertyDescriptor(_obj, "options"), _obj), _applyDecoratedDescriptor(_obj, "computedConfig", [_dec8], Object.getOwnPropertyDescriptor(_obj, "computedConfig"), _obj), _applyDecoratedDescriptor(_obj, "currentUserTimezone", [_decorators.default], Object.getOwnPropertyDescriptor(_obj, "currentUserTimezone"), _obj), _applyDecoratedDescriptor(_obj, "allTimezones", [_decorators.default], Object.getOwnPropertyDescriptor(_obj, "allTimezones"), _obj), _applyDecoratedDescriptor(_obj, "formattedCurrentUserTimezone", [_dec9], Object.getOwnPropertyDescriptor(_obj, "formattedCurrentUserTimezone"), _obj), _applyDecoratedDescriptor(_obj, "previewedFormats", [_dec10], Object.getOwnPropertyDescriptor(_obj, "previewedFormats"), _obj), _applyDecoratedDescriptor(_obj, "recurringOptions", [_decorators.default], Object.getOwnPropertyDescriptor(_obj, "recurringOptions"), _obj), _applyDecoratedDescriptor(_obj, "toggleModeBtnLabel", [_dec11], Object.getOwnPropertyDescriptor(_obj, "toggleModeBtnLabel"), _obj), _applyDecoratedDescriptor(_obj, "markup", [_dec12], Object.getOwnPropertyDescriptor(_obj, "markup"), _obj), _applyDecoratedDescriptor(_obj, "formattedFrom", [_dec13], Object.getOwnPropertyDescriptor(_obj, "formattedFrom"), _obj), _applyDecoratedDescriptor(_obj, "formattedTo", [_dec14], Object.getOwnPropertyDescriptor(_obj, "formattedTo"), _obj), _applyDecoratedDescriptor(_obj, "updateFormat", [_object.action], Object.getOwnPropertyDescriptor(_obj, "updateFormat"), _obj), _applyDecoratedDescriptor(_obj, "selectedDate", [_dec15], Object.getOwnPropertyDescriptor(_obj, "selectedDate"), _obj), _applyDecoratedDescriptor(_obj, "selectedTime", [_dec16], Object.getOwnPropertyDescriptor(_obj, "selectedTime"), _obj), _applyDecoratedDescriptor(_obj, "changeSelectedDate", [_object.action], Object.getOwnPropertyDescriptor(_obj, "changeSelectedDate"), _obj), _applyDecoratedDescriptor(_obj, "changeSelectedTime", [_object.action], Object.getOwnPropertyDescriptor(_obj, "changeSelectedTime"), _obj), _applyDecoratedDescriptor(_obj, "eraseToDateTime", [_object.action], Object.getOwnPropertyDescriptor(_obj, "eraseToDateTime"), _obj), _applyDecoratedDescriptor(_obj, "focusFrom", [_object.action], Object.getOwnPropertyDescriptor(_obj, "focusFrom"), _obj), _applyDecoratedDescriptor(_obj, "focusTo", [_object.action], Object.getOwnPropertyDescriptor(_obj, "focusTo"), _obj), _applyDecoratedDescriptor(_obj, "toggleAdvancedMode", [_object.action], Object.getOwnPropertyDescriptor(_obj, "toggleAdvancedMode"), _obj), _applyDecoratedDescriptor(_obj, "save", [_object.action], Object.getOwnPropertyDescriptor(_obj, "save"), _obj), _applyDecoratedDescriptor(_obj, "cancel", [_object.action], Object.getOwnPropertyDescriptor(_obj, "cancel"), _obj)), _obj))));
});
define("discourse/plugins/discourse-local-dates/initializers/discourse-local-dates", ["exports", "@ember/service", "@ember/template", "discourse/lib/download-calendar", "discourse/lib/plugin-api", "discourse/lib/to-markdown", "discourse-common/lib/icon-library", "discourse-common/utils/decorators", "discourse-i18n", "discourse/plugins/discourse-local-dates/lib/local-date-markup-generator", "discourse/plugins/discourse-local-dates/discourse/components/modal/local-dates-create", "discourse/plugins/discourse-local-dates/lib/local-date-builder"], function (_exports, _service, _template, _downloadCalendar, _pluginApi, _toMarkdown, _iconLibrary, _decorators, _discourseI18n, _localDateMarkupGenerator, _localDatesCreate, _localDateBuilder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.applyLocalDates = applyLocalDates;
  _exports.default = void 0;
  var _obj;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  // Import applyLocalDates from discourse/lib/local-dates instead
  function applyLocalDates(dates, siteSettings) {
    if (!siteSettings.discourse_local_dates_enabled) {
      return;
    }
    const currentUserTZ = moment.tz.guess();
    dates.forEach((element, index, arr) => {
      const opts = buildOptionsFromElement(element, siteSettings);
      if (element.attributes["data-range"]?.value === "to" && index !== 0 && arr[index - 1].attributes["data-range"]?.value === "from") {
        const fromElement = arr[index - 1];
        if (_rangeIsSameLocalDay(fromElement, element)) {
          opts.sameLocalDayAsFrom = true;
        }
      }
      const localDateBuilder = new _localDateBuilder.default(opts, currentUserTZ).build();
      element.innerText = "";
      element.insertAdjacentHTML("beforeend", `
        <svg class="fa d-icon d-icon-globe-americas svg-icon" xmlns="http://www.w3.org/2000/svg">
          <use href="#globe-americas"></use>
        </svg>
        <span class="relative-time">${localDateBuilder.formatted}</span>
      `);
      element.setAttribute("aria-label", localDateBuilder.textPreview);
      const classes = ["cooked-date"];
      if (localDateBuilder.pastEvent) {
        classes.push("past");
      }
      element.classList.add(...classes);
    });
  }
  function _rangeIsSameLocalDay(fromElement, toElement) {
    if (!fromElement.attributes["data-time"] || !toElement.attributes["data-time"]) {
      return false;
    }
    const timezone = fromElement.attributes["data-timezone"].value;
    const from = moment(_getDateFromElement(fromElement)).tz(timezone);
    const to = moment(_getDateFromElement(toElement)).tz(timezone);
    return from.isSame(to, "day");
  }
  function _getDateFromElement(element) {
    return `${element.attributes["data-date"].value}T${element.attributes["data-time"].value}`;
  }
  function buildOptionsFromElement(element, siteSettings) {
    const opts = {};
    const dataset = element.dataset;
    if (_rangeElements(element).length === 2) {
      opts.duration = _calculateDuration(element);
    }
    opts.time = dataset.time;
    opts.date = dataset.date;
    opts.recurring = dataset.recurring;
    opts.timezones = (dataset.timezones || siteSettings.discourse_local_dates_default_timezones || "Etc/UTC").split("|").filter(Boolean);
    opts.timezone = dataset.timezone;
    opts.calendar = (dataset.calendar || "on") === "on";
    opts.displayedTimezone = dataset.displayedTimezone;
    opts.format = dataset.format || (opts.time ? "LLL" : "LL");
    opts.countdown = dataset.countdown;
    return opts;
  }
  function buildOptionsFromMarkdownTag(element) {
    const opts = {};

    // siteSettings defaults as used by buildOptionsFromElement are purposefully
    // ommitted to reproduce exactly what was on the original element
    opts.time = element.attributes["data-time"];
    opts.date = element.attributes["data-date"];
    opts.recurring = element.attributes["data-recurring"];
    opts.timezones = element.attributes["data-timezones"];
    opts.timezone = element.attributes["data-timezone"];
    opts.calendar = (element.attributes["data-calendar"] || "on") === "on";
    opts.displayedTimezone = element.attributes["data-displayed-timezone"];
    opts.format = element.attributes["data-format"];
    opts.countdown = element.attributes["data-countdown"];
    opts.range = element.attributes["data-range"];
    return opts;
  }
  function _rangeElements(element) {
    if (!element.parentElement) {
      return [];
    }
    if (element.dataset.range) {
      return _partitionedRanges(element).find(pair => pair.includes(element));
    }
    return [element];
  }
  function _partitionedRanges(element) {
    const partitions = [];
    const ranges = Array.from(element.parentElement.children).filter(span => span.dataset.range);
    while (ranges.length > 0) {
      partitions.push(ranges.splice(0, 2));
    }
    return partitions;
  }
  function initializeDiscourseLocalDates(api) {
    const siteSettings = api.container.lookup("service:site-settings");
    const defaultTitle = _discourseI18n.default.t("discourse_local_dates.default_title", {
      site_name: siteSettings.title
    });
    api.decorateCookedElement((elem, helper) => {
      const dates = elem.querySelectorAll(".discourse-local-date");
      applyLocalDates(dates, siteSettings);
      const topicTitle = helper?.getModel()?.topic?.title;
      dates.forEach(date => {
        date.dataset.title = date.dataset.title || topicTitle || defaultTitle;
      });
    });
    api.onToolbarCreate(toolbar => {
      toolbar.addButton({
        title: "discourse_local_dates.title",
        id: "local-dates",
        group: "extras",
        icon: "calendar-alt",
        sendAction: event => toolbar.context.send("insertDiscourseLocalDate", event)
      });
    });
    api.modifyClass("component:d-editor", {
      modal: (0, _service.inject)(),
      pluginId: "discourse-local-dates",
      actions: {
        insertDiscourseLocalDate(toolbarEvent) {
          this.modal.show(_localDatesCreate.default, {
            model: {
              insertDate: markup => {
                toolbarEvent.addText(markup);
              }
            }
          });
        }
      }
    });
    (0, _toMarkdown.addTextDecorateCallback)(function (text, nextElement, _previousElement, metadata) {
      if (metadata.discourseLocalDateStartRangeOpts && nextElement?.attributes.class?.includes("discourse-local-date") && text === "→") {
        return "";
      }
    });
    (0, _toMarkdown.addTagDecorateCallback)(function () {
      if (this.element.attributes.class?.includes("discourse-local-date")) {
        if (this.metadata.discourseLocalDateStartRangeOpts) {
          const startRangeOpts = this.metadata.discourseLocalDateStartRangeOpts;
          const endRangeOpts = buildOptionsFromMarkdownTag(this.element);
          const markup = (0, _localDateMarkupGenerator.default)({
            date: startRangeOpts.date,
            time: startRangeOpts.time,
            format: startRangeOpts.format
          }, endRangeOpts, true, {
            date: endRangeOpts.date,
            time: endRangeOpts.time,
            format: endRangeOpts.format
          });
          this.prefix = markup;
          this.metadata.discourseLocalDateStartRangeOpts = null;
          return "";
        }
        if (this.element.attributes["data-range"] === "true" || this.element.attributes["data-range"] === "from" || this.element.attributes["data-range"] === "to") {
          this.metadata.discourseLocalDateStartRangeOpts = buildOptionsFromMarkdownTag(this.element);
          return "";
        }
        const opts = buildOptionsFromMarkdownTag(this.element, siteSettings);
        const markup = (0, _localDateMarkupGenerator.default)({
          date: opts.date,
          time: opts.time,
          format: opts.format
        }, opts, false);
        this.prefix = markup;
        return "";
      }
    });
  }
  function buildHtmlPreview(element, siteSettings) {
    const opts = buildOptionsFromElement(element, siteSettings);
    const localDateBuilder = new _localDateBuilder.default(opts, moment.tz.guess()).build();
    const htmlPreviews = localDateBuilder.previews.map(preview => {
      const previewNode = document.createElement("div");
      previewNode.classList.add("preview");
      if (preview.current) {
        previewNode.classList.add("current");
      }
      const timezoneNode = document.createElement("span");
      timezoneNode.classList.add("timezone");
      timezoneNode.innerText = preview.timezone;
      previewNode.appendChild(timezoneNode);
      const dateTimeNode = document.createElement("span");
      dateTimeNode.classList.add("date-time");
      dateTimeNode.innerHTML = preview.formatted;
      previewNode.appendChild(dateTimeNode);
      return previewNode;
    });
    const previewsNode = document.createElement("div");
    previewsNode.classList.add("locale-dates-previews");
    htmlPreviews.forEach(htmlPreview => previewsNode.appendChild(htmlPreview));
    const calendarNode = _downloadCalendarNode(element);
    if (calendarNode) {
      previewsNode.appendChild(calendarNode);
    }
    return previewsNode.outerHTML;
  }
  function calculateStartAndEndDate(startDataset, endDataset) {
    let startDate, endDate;
    startDate = moment.tz(`${startDataset.date} ${startDataset.time || ""}`.trim(), startDataset.timezone);
    if (endDataset) {
      endDate = moment.tz(`${endDataset.date} ${endDataset.time || ""}`.trim(), endDataset.timezone);
    }
    return [startDate, endDate];
  }
  function _downloadCalendarNode(element) {
    const [startDataset, endDataset] = _rangeElements(element).map(dateElement => dateElement.dataset);
    const [startDate, endDate] = calculateStartAndEndDate(startDataset, endDataset);
    if (startDate < moment().tz(startDataset.timezone)) {
      return false;
    }
    const node = document.createElement("div");
    node.classList.add("download-calendar");
    node.innerHTML = `${(0, _iconLibrary.renderIcon)("string", "file")} ${_discourseI18n.default.t("download_calendar.add_to_calendar")}`;
    node.setAttribute("data-starts-at", startDate.toISOString());
    if (endDataset) {
      node.setAttribute("data-ends-at", endDate.toISOString());
    }
    if (!startDataset.time && !endDataset) {
      node.setAttribute("data-ends-at", startDate.add(24, "hours").toISOString());
    }
    node.setAttribute("data-title", startDataset.title);
    return node;
  }
  function _calculateDuration(element) {
    const [startDataset, endDataset] = _rangeElements(element).map(dateElement => dateElement.dataset);
    const startDateTime = moment(`${startDataset.date} ${startDataset.time || ""}`.trim());
    const endDateTime = moment(`${endDataset.date} ${endDataset.time || ""}`.trim());
    const duration = endDateTime.diff(startDateTime, "minutes");

    // negative duration is used when we calculate difference for end date from range
    return element.dataset === startDataset ? duration : -duration;
  }
  var _default = _exports.default = (_obj = {
    name: "discourse-local-dates",
    showDatePopover(event) {
      const tooltip = this.container.lookup("service:tooltip");
      if (event?.target?.classList?.contains("download-calendar")) {
        const dataset = event.target.dataset;
        (0, _downloadCalendar.downloadCalendar)(dataset.title, [{
          startsAt: dataset.startsAt,
          endsAt: dataset.endsAt
        }]);
        return tooltip.close();
      }
      if (!event?.target?.classList?.contains("discourse-local-date")) {
        return;
      }
      const siteSettings = this.container.lookup("service:site-settings");
      return tooltip.show(event.target, {
        content: (0, _template.htmlSafe)(buildHtmlPreview(event.target, siteSettings))
      });
    },
    initialize(container) {
      this.container = container;
      window.addEventListener("click", this.showDatePopover, {
        passive: true
      });
      const siteSettings = container.lookup("service:site-settings");
      if (siteSettings.discourse_local_dates_enabled) {
        (0, _pluginApi.withPluginApi)("0.8.8", initializeDiscourseLocalDates);
      }
    },
    teardown() {
      window.removeEventListener("click", this.showDatePopover);
    }
  }, (_applyDecoratedDescriptor(_obj, "showDatePopover", [_decorators.bind], Object.getOwnPropertyDescriptor(_obj, "showDatePopover"), _obj)), _obj);
});
define("discourse/plugins/discourse-local-dates/lib/date-with-zone-helper", ["exports", "@ember/object"], function (_exports, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /*
    DateWithZoneHelper provides a limited list of helpers
    to manipulate a moment object with timezones
  
    - add(count unit) adds a COUNT of UNITS to a date
    - subtract(count unit) subtracts a COUNT of UNITS to a date
    - format(format) formats a date with zone in a consistent way, optional moment format
    - isDST() allows to know if a date in a specified timezone is currently under DST
    - datetimeWithZone(timezone) returns a new moment object with timezone applied
    - datetime returns the moment object
    - unitRepetitionsBetweenDates(duration, date) return the number of repetitions of
    duration between two dates, eg for duration: "1.weeks", "2.months"...
  */
  class DateWithZoneHelper {
    static fromDatetime(datetime, timezone, localTimezone) {
      return new DateWithZoneHelper({
        year: datetime.year(),
        month: datetime.month(),
        day: datetime.date(),
        hour: datetime.hour(),
        minute: datetime.minute(),
        second: datetime.second(),
        timezone,
        localTimezone
      });
    }
    constructor(params = {}) {
      this.timezone = params.timezone || "UTC";
      this.localTimezone = params.localTimezone || moment.tz.guess();
      this.datetime = moment.tz((0, _object.getProperties)(params, ["year", "month", "day", "hour", "minute", "second"]), this.timezone);
    }
    isDST() {
      return this.datetime.tz(this.localTimezone).isDST();
    }
    unitRepetitionsBetweenDates(duration, date) {
      const [count, unit] = duration.split(".");
      // get the diff in the specified units with decimals
      const diff = Math.abs(this.datetime.diff(date, unit, true));
      // get integer count of duration in diff, eg: 4 hours diff is 2 for 2.hours duration
      const integer = Math.trunc(diff / count);
      // get fractional to define if we have to add one "duration"
      const fractional = diff / count % 1;
      return integer * parseInt(count, 10) + (fractional > 0 ? parseInt(count, 10) : 0);
    }
    add(count, unit) {
      return this._fromDatetime(this.datetime.clone().add(count, unit), this.timezone, this.localTimezone);
    }
    subtract(count, unit) {
      return this._fromDatetime(this.datetime.clone().subtract(count, unit), this.timezone, this.localTimezone);
    }
    datetimeWithZone(timezone) {
      return this.datetime.clone().tz(timezone);
    }
    format(format) {
      if (format) {
        return this.datetime.tz(this.localTimezone).format(format);
      }
      return this.datetime.tz(this.localTimezone).toISOString(true);
    }
    _fromDatetime(datetime, timezone, localTimezone) {
      return DateWithZoneHelper.fromDatetime(datetime, timezone, localTimezone);
    }
  }
  _exports.default = DateWithZoneHelper;
});
define("discourse/plugins/discourse-local-dates/lib/discourse-markdown/discourse-local-dates", ["exports", "pretty-text/engines/discourse-markdown/bbcode-block"], function (_exports, _bbcodeBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  const timezoneNames = moment.tz.names();
  function addSingleLocalDate(buffer, state, config) {
    let token = new state.Token("span_open", "span", 1);
    token.attrs = [["data-date", state.md.utils.escapeHtml(config.date)]];
    if (!config.date.match(/\d{4}-\d{2}-\d{2}/)) {
      closeBuffer(buffer, state, moment.invalid().format());
      return;
    }
    if (config.time && !config.time.match(/\d{2}:\d{2}(?::\d{2})?/)) {
      closeBuffer(buffer, state, moment.invalid().format());
      return;
    }
    let dateTime = config.date;
    if (config.time) {
      token.attrs.push(["data-time", state.md.utils.escapeHtml(config.time)]);
      dateTime = `${dateTime} ${config.time}`;
    }
    if (!moment(dateTime).isValid()) {
      closeBuffer(buffer, state, moment.invalid().format());
      return;
    }
    token.attrs.push(["class", "discourse-local-date"]);
    if (config.format) {
      token.attrs.push(["data-format", state.md.utils.escapeHtml(config.format)]);
    }
    if (config.countdown) {
      token.attrs.push(["data-countdown", state.md.utils.escapeHtml(config.countdown)]);
    }
    if (config.calendar) {
      token.attrs.push(["data-calendar", state.md.utils.escapeHtml(config.calendar)]);
    }
    if (config.range) {
      token.attrs.push(["data-range", config.range]);
    }
    if (config.displayedTimezone && timezoneNames.includes(config.displayedTimezone)) {
      token.attrs.push(["data-displayed-timezone", state.md.utils.escapeHtml(config.displayedTimezone)]);
    }
    if (config.timezones) {
      const timezones = config.timezones.split("|").filter(timezone => {
        return timezoneNames.includes(timezone);
      });
      token.attrs.push(["data-timezones", state.md.utils.escapeHtml(timezones.join("|"))]);
    }
    if (config.timezone && timezoneNames.includes(config.timezone)) {
      token.attrs.push(["data-timezone", state.md.utils.escapeHtml(config.timezone)]);
      dateTime = moment.tz(dateTime, config.timezone);
    } else {
      dateTime = moment.utc(dateTime);
    }
    if (config.recurring) {
      token.attrs.push(["data-recurring", state.md.utils.escapeHtml(config.recurring)]);
    }
    buffer.push(token);
    const formattedDateTime = dateTime.tz("Etc/UTC").format(state.md.options.discourse.datesEmailFormat || moment.defaultFormat);
    token.attrs.push(["data-email-preview", `${formattedDateTime} UTC`]);
    closeBuffer(buffer, state, dateTime.utc().format(config.format));
  }
  function defaultDateConfig() {
    return {
      date: null,
      time: null,
      timezone: null,
      format: null,
      timezones: null,
      displayedTimezone: null,
      countdown: null,
      range: false
    };
  }
  function parseTagAttributes(tag) {
    const matchString = tag.replace(/‘|’|„|“|«|»|”/g, '"');
    return (0, _bbcodeBlock.parseBBCodeTag)("[date date" + matchString + "]", 0, matchString.length + 12);
  }
  function addLocalDate(buffer, matches, state) {
    let config = defaultDateConfig();
    const parsed = parseTagAttributes(matches[1]);
    config.date = parsed.attrs.date;
    config.format = parsed.attrs.format;
    config.calendar = parsed.attrs.calendar;
    config.time = parsed.attrs.time;
    config.timezone = (parsed.attrs.timezone || "").trim();
    config.recurring = parsed.attrs.recurring;
    config.timezones = parsed.attrs.timezones;
    config.displayedTimezone = parsed.attrs.displayedTimezone;
    config.countdown = parsed.attrs.countdown;
    addSingleLocalDate(buffer, state, config);
  }
  function addLocalRange(buffer, matches, state) {
    let config = defaultDateConfig();
    let date, time;
    const parsed = parseTagAttributes(matches[1]);
    config.format = parsed.attrs.format;
    config.calendar = parsed.attrs.calendar;
    config.timezone = (parsed.attrs.timezone || "").trim();
    config.recurring = parsed.attrs.recurring;
    config.timezones = parsed.attrs.timezones;
    config.displayedTimezone = parsed.attrs.displayedTimezone;
    config.countdown = parsed.attrs.countdown;
    if (parsed.attrs.from) {
      [date, time] = parsed.attrs.from.split("T");
      config.date = date;
      config.time = time;
      config.range = "from";
      addSingleLocalDate(buffer, state, config);
    }
    if (config.range) {
      closeBuffer(buffer, state, "→");
    }
    if (parsed.attrs.to) {
      [date, time] = parsed.attrs.to.split("T");
      config.date = date;
      config.time = time;
      config.range = "to";
      addSingleLocalDate(buffer, state, config);
    }
  }
  function closeBuffer(buffer, state, text) {
    let token;
    token = new state.Token("text", "", 0);
    token.content = text;
    buffer.push(token);
    token = new state.Token("span_close", "span", -1);
    buffer.push(token);
  }
  function setup(helper) {
    helper.allowList(["span.discourse-local-date", "span[aria-label]", "span[data-date]", "span[data-time]", "span[data-format]", "span[data-countdown]", "span[data-calendar]", "span[data-displayed-timezone]", "span[data-timezone]", "span[data-timezones]", "span[data-recurring]", "span[data-email-preview]"]);
    helper.registerOptions((opts, siteSettings) => {
      opts.datesEmailFormat = siteSettings.discourse_local_dates_email_format;
      opts.features["discourse-local-dates"] = !!siteSettings.discourse_local_dates_enabled;
    });
    helper.registerPlugin(md => {
      const rule = {
        matcher: /\[date(=.+?)\]/,
        onMatch: addLocalDate
      };
      md.core.textPostProcess.ruler.push("discourse-local-dates", rule);
    });
    helper.registerPlugin(md => {
      const rule = {
        matcher: /\[date-range(.+?)\]/,
        onMatch: addLocalRange
      };
      md.core.textPostProcess.ruler.push("discourse-local-dates", rule);
    });
  }
});
define("discourse/plugins/discourse-local-dates/lib/local-date-builder", ["exports", "discourse-common/lib/icon-library", "discourse-i18n", "discourse/plugins/discourse-local-dates/lib/date-with-zone-helper"], function (_exports, _iconLibrary, _discourseI18n, _dateWithZoneHelper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const DATETIME_FORMAT = "LLL";
  const DATE_FORMAT = "LL";
  const FULL_DATETIME_FORMAT = "LLLL";
  const TIME_FORMAT = "h:mm A";
  const DAY_OF_THE_WEEK_FORMAT = "dddd";
  const RANGE_SEPARATOR = "→";
  const TIME_ICON = "clock";
  const SHORT_FORMAT_DAYS_PERIOD = 1;
  class LocalDateBuilder {
    constructor(params = {}, localTimezone) {
      this.time = params.time;
      this.date = params.date;
      this.recurring = params.recurring;
      this.sameLocalDayAsFrom = params.sameLocalDayAsFrom;
      this.timezones = Array.from(new Set((params.timezones || []).filter(Boolean)));
      this.timezone = params.timezone || "UTC";
      this.calendar = typeof params.calendar === "undefined" ? true : params.calendar;
      this.displayedTimezone = params.displayedTimezone;
      this.format = params.format || (this.time ? DATETIME_FORMAT : DATE_FORMAT);
      this.countdown = params.countdown;
      this.duration = params.duration;
      this.localTimezone = localTimezone;
    }
    build() {
      const [year, month, day] = this.date.split("-").map(x => parseInt(x, 10));
      const [hour, minute, second] = (this.time || "").split(":").map(x => x ? parseInt(x, 10) : undefined);
      let displayedTimezone;
      if (this.time) {
        displayedTimezone = this.displayedTimezone || this.localTimezone;
      } else {
        displayedTimezone = this.displayedTimezone || this.timezone || this.localTimezone;
      }
      let localDate = new _dateWithZoneHelper.default({
        year,
        month: month ? month - 1 : null,
        day,
        hour,
        minute,
        second,
        timezone: this.timezone,
        localTimezone: this.localTimezone
      });
      if (this.recurring && moment().isAfter(localDate.datetime)) {
        const type = this.recurring.split(".")[1];
        const repetitionsForType = localDate.unitRepetitionsBetweenDates(this.recurring, moment.tz(this.localTimezone));
        localDate = localDate.add(repetitionsForType, type);
      }
      const previews = this._generatePreviews(localDate, displayedTimezone);
      const hasTime = hour !== undefined;
      return {
        pastEvent: !this.recurring && moment.tz(this.localTimezone).isAfter(localDate.datetime),
        formatted: this._applyFormatting(localDate, displayedTimezone, hasTime),
        previews,
        textPreview: this._generateTextPreviews(previews)
      };
    }
    _generateTextPreviews(previews) {
      return previews.map(preview => {
        const formattedZone = this._zoneWithoutPrefix(preview.timezone);
        return `${formattedZone} ${preview.formatted}`;
      }).join(", ");
    }
    _generatePreviews(localDate, displayedTimezone) {
      const previewedTimezones = [];
      const timezones = this.timezones.filter(timezone => !this._isEqualZones(timezone, this.localTimezone));
      previewedTimezones.push({
        timezone: this._zoneWithoutPrefix(this.localTimezone),
        current: true,
        formatted: this._createDateTimeRange(_dateWithZoneHelper.default.fromDatetime(localDate.datetime, localDate.timezone, this.localTimezone), this.time, this.duration)
      });
      if (this.timezone && displayedTimezone === this.localTimezone && this.timezone !== displayedTimezone && !this._isEqualZones(displayedTimezone, this.timezone) && !this.timezones.any(t => this._isEqualZones(t, this.timezone))) {
        timezones.unshift(this.timezone);
      }
      timezones.forEach(timezone => {
        if (this._isEqualZones(timezone, displayedTimezone)) {
          return;
        }
        if (this._isEqualZones(timezone, this.localTimezone)) {
          timezone = this.localTimezone;
        }
        previewedTimezones.push({
          timezone: this._zoneWithoutPrefix(timezone),
          formatted: this._createDateTimeRange(_dateWithZoneHelper.default.fromDatetime(localDate.datetime, localDate.timezone, timezone), this.time, this.duration)
        });
      });
      return previewedTimezones.uniqBy("timezone");
    }
    _isEqualZones(timezoneA, timezoneB) {
      if ((timezoneA || timezoneB) && (!timezoneA || !timezoneB)) {
        return false;
      }
      if (timezoneA.includes(timezoneB) || timezoneB.includes(timezoneA)) {
        return true;
      }
      return moment.tz(timezoneA).utcOffset() === moment.tz(timezoneB).utcOffset();
    }
    _createDateTimeRange(startRange, time, duration) {
      const [startDate, endDate] = this._calculateDatesForRange(startRange, time, duration);
      let formatElements = [startDate.format(`${DAY_OF_THE_WEEK_FORMAT}, ${DATE_FORMAT}`), this._optionalTimeIcon(startDate, endDate), startDate.format(TIME_FORMAT)];
      if (endDate) {
        formatElements = formatElements.concat([RANGE_SEPARATOR, endDate.format(this._endDateFormat(startDate, endDate))]);
      }
      return formatElements.filter(Boolean).join(" ");
    }
    _shortFormat(startDate, endDate) {
      return endDate.datetime.diff(startDate.datetime, "days") < SHORT_FORMAT_DAYS_PERIOD;
    }
    _optionalTimeIcon(startDate, endDate) {
      if (!endDate || this._shortFormat(startDate, endDate)) {
        return `<br />${(0, _iconLibrary.renderIcon)("string", TIME_ICON)}`;
      }
    }
    _endDateFormat(startDate, endDate) {
      return this._shortFormat(startDate, endDate) ? TIME_FORMAT : FULL_DATETIME_FORMAT;
    }
    _calculateDatesForRange(date, time, duration) {
      // if a time has been given we do not attempt to automatically create a range
      // instead we show only one date with a format showing the time
      if (time && !duration) {
        return [date];
      }
      const dates = [date, duration ? date.add(duration, "minutes") : date.add(24, "hours")];
      return duration < 0 ? dates.reverse() : dates;
    }
    _applyFormatting(localDate, displayedTimezone, hasTime) {
      if (this.countdown) {
        const diffTime = moment.tz(this.localTimezone).diff(localDate.datetime);
        if (diffTime < 0) {
          return moment.duration(diffTime).humanize();
        } else {
          return _discourseI18n.default.t("discourse_local_dates.relative_dates.countdown.passed");
        }
      }
      const sameTimezone = this._isEqualZones(displayedTimezone, this.localTimezone);
      if (this.calendar) {
        const inCalendarRange = moment.tz(this.localTimezone).isBetween(localDate.subtract(2, "day").datetime, localDate.add(1, "day").datetime.endOf("day"));
        if (this.sameLocalDayAsFrom) {
          return this._timeOnlyFormat(localDate, displayedTimezone);
        }
        if (inCalendarRange && sameTimezone) {
          const date = localDate.datetimeWithZone(this.localTimezone);
          if (hasTime && date.hours() === 0 && date.minutes() === 0) {
            return date.format("dddd");
          }
          return date.calendar(moment.tz(localDate.timezone), this._calendarFormats(this.time ? this.time : null));
        }
      }
      if (!sameTimezone) {
        return this._formatWithZone(localDate, displayedTimezone, this.format);
      }
      return localDate.format(this.format);
    }
    _calendarFormats(time) {
      return {
        sameDay: this._translateCalendarKey(time, "today"),
        nextDay: this._translateCalendarKey(time, "tomorrow"),
        lastDay: this._translateCalendarKey(time, "yesterday"),
        sameElse: "L"
      };
    }
    _translateCalendarKey(time, key) {
      const translated = _discourseI18n.default.t(`discourse_local_dates.relative_dates.${key}`, {
        time: "LT"
      });
      if (time) {
        return translated.split("LT").map(w => `[${w}]`).join("LT");
      } else {
        return `[${translated.replace(" LT", "")}]`;
      }
    }
    _formatTimezone(timezone) {
      return timezone.replace("_", " ").replace("Etc/", "").split("/");
    }
    _zoneWithoutPrefix(timezone) {
      const [part1, part2] = this._formatTimezone(timezone);
      return part2 || part1;
    }
    _formatWithZone(localDate, displayedTimezone, format) {
      let formatted = localDate.datetimeWithZone(displayedTimezone).format(format);
      return `${formatted} (${this._zoneWithoutPrefix(displayedTimezone)})`;
    }
    _timeOnlyFormat(localTime, displayedTimezone) {
      return this._formatWithZone(localTime, displayedTimezone, "LT");
    }
  }
  _exports.default = LocalDateBuilder;
});
define("discourse/plugins/discourse-local-dates/lib/local-date-markup-generator", ["exports", "@ember/utils"], function (_exports, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = generateDateMarkup;
  function generateDateMarkup(fromDateTime, options, isRange, toDateTime) {
    let text = ``;
    if (isRange) {
      let from = [fromDateTime.date, fromDateTime.time].filter(element => !(0, _utils.isEmpty)(element)).join("T");
      let to = [toDateTime.date, toDateTime.time].filter(element => !(0, _utils.isEmpty)(element)).join("T");
      text += `[date-range from=${from} to=${to}`;
    } else {
      text += `[date=${fromDateTime.date}`;
    }
    if (fromDateTime.time && !isRange) {
      text += ` time=${fromDateTime.time}`;
    }
    if (fromDateTime.format && fromDateTime.format.length) {
      text += ` format="${fromDateTime.format}"`;
    }
    if (options.timezone) {
      text += ` timezone="${options.timezone}"`;
    }
    if (options.countdown) {
      text += ` countdown="${options.countdown}"`;
    }
    if (options.displayedTimezone) {
      text += ` displayedTimezone="${options.displayedTimezone}"`;
    }
    if (options.timezones && options.timezones.length) {
      if (Array.isArray(options.timezones)) {
        text += ` timezones="${options.timezones.join("|")}"`;
      } else {
        text += ` timezones="${options.timezones}"`;
      }
    }
    if (options.recurring && !isRange) {
      text += ` recurring="${options.recurring}"`;
    }
    text += `]`;
    return text;
  }
});//# sourceMappingURL=discourse-local-dates.map
