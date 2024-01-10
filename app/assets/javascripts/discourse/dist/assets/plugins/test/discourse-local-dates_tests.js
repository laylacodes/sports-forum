define("discourse/plugins/discourse-local-dates/acceptance/download-calendar-test", ["@ember/test-helpers", "qunit", "sinon", "discourse/tests/helpers/create-pretender", "discourse/tests/helpers/qunit-helpers", "discourse-common/lib/object", "discourse-i18n"], function (_testHelpers, _qunit, _sinon, _createPretender, _qunitHelpers, _object, _discourseI18n) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Local Dates - Download calendar without default calendar option set", function (needs) {
    needs.user({
      "user_option.default_calendar": "none_selected"
    });
    needs.settings({
      discourse_local_dates_enabled: true
    });
    needs.pretender((server, helper) => {
      const response = (0, _object.cloneJSON)(_createPretender.fixturesByUrl["/t/281.json"]);
      const startDate = moment.tz("America/Lima").add(1, "days").format("YYYY-MM-DD");
      response.post_stream.posts[0].cooked = `<p><span data-date=\"${startDate}\" data-time=\"13:00:00\" class=\"discourse-local-date\" data-timezone=\"America/Lima\" data-email-preview=\"${startDate}T18:00:00Z UTC\">${startDate}T18:00:00Z</span></p>`;
      server.get("/t/281.json", () => helper.response(response));
    });
    (0, _qunit.test)("Display pick calendar modal", async function (assert) {
      await (0, _testHelpers.visit)("/t/local-dates/281");
      await (0, _testHelpers.click)(".discourse-local-date");
      await (0, _testHelpers.click)(".download-calendar");
      assert.dom("#discourse-modal-title").hasText(_discourseI18n.default.t("download_calendar.title"), "it should display modal to select calendar");
    });
  });
  (0, _qunitHelpers.acceptance)("Local Dates - Download calendar is not available for dates in the past", function (needs) {
    needs.user({
      "user_option.default_calendar": "none_selected"
    });
    needs.settings({
      discourse_local_dates_enabled: true
    });
    needs.pretender((server, helper) => {
      const response = (0, _object.cloneJSON)(_createPretender.fixturesByUrl["/t/281.json"]);
      const startDate = moment.tz("America/Lima").subtract(1, "days").format("YYYY-MM-DD");
      response.post_stream.posts[0].cooked = `<p><span data-date=\"${startDate}\" data-time=\"13:00:00\" class=\"discourse-local-date\" data-timezone=\"America/Lima\" data-email-preview=\"${startDate}T18:00:00Z UTC\">${startDate}T18:00:00Z</span></p>`;
      server.get("/t/281.json", () => helper.response(response));
    });
    (0, _qunit.test)("Does not show add to calendar button", async function (assert) {
      await (0, _testHelpers.visit)("/t/local-dates/281");
      await (0, _testHelpers.click)(".discourse-local-date");
      assert.dom(".download-calendar").doesNotExist();
    });
  });
  (0, _qunitHelpers.acceptance)("Local Dates - Download calendar with default calendar option set", function (needs) {
    needs.user({
      "user_option.default_calendar": "google"
    });
    needs.settings({
      discourse_local_dates_enabled: true
    });
    needs.pretender((server, helper) => {
      const response = (0, _object.cloneJSON)(_createPretender.fixturesByUrl["/t/281.json"]);
      const startDate = moment.tz("America/Lima").add(1, "days").format("YYYY-MM-DD");
      response.post_stream.posts[0].cooked = `<p><span data-date=\"${startDate}\" data-time=\"13:00:00\" class=\"discourse-local-date\" data-timezone=\"America/Lima\" data-email-preview=\"${startDate}T18:00:00Z UTC\">${startDate}T18:00:00Z</span></p>`;
      response.title = "   title to trim   ";
      server.get("/t/281.json", () => helper.response(response));
    });
    (0, _qunit.test)("saves into default calendar", async function (assert) {
      const startDate = moment.tz("America/Lima").add(1, "days").format("YYYYMMDD");
      await (0, _testHelpers.visit)("/t/local-dates/281");
      _sinon.default.stub(window, "open").callsFake(function () {
        assert.deepEqual([...arguments], [`https://www.google.com/calendar/event?action=TEMPLATE&text=title+to+trim&dates=${startDate}T180000Z%2F${startDate}T190000Z`, "_blank", "noopener", "noreferrer"]);
        return {
          focus() {}
        };
      });
      await (0, _testHelpers.click)(".discourse-local-date");
      await (0, _testHelpers.click)(".download-calendar");
      assert.dom("#discourse-modal-title").doesNotExist();
    });
  });
});
define("discourse/plugins/discourse-local-dates/acceptance/local-dates-composer-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers", "discourse/tests/helpers/select-kit-helper"], function (_testHelpers, _qunit, _qunitHelpers, _selectKitHelper) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Local Dates - composer", function (needs) {
    needs.user();
    needs.settings({
      discourse_local_dates_enabled: true,
      discourse_local_dates_default_formats: "LLL|LTS|LL|LLLL"
    });
    (0, _qunit.test)("composer bbcode", async function (assert) {
      const getAttr = attr => {
        return (0, _qunitHelpers.query)(".d-editor-preview .discourse-local-date.cooked-date").getAttribute(`data-${attr}`);
      };
      await (0, _testHelpers.visit)("/");
      await (0, _testHelpers.click)("#create-topic");
      const categoryChooser = (0, _selectKitHelper.default)(".category-chooser");
      await categoryChooser.expand();
      await categoryChooser.selectRowByValue(2);
      await (0, _testHelpers.fillIn)(".d-editor-input", '[date=2017-10-23 time=01:30:00 displayedTimezone="America/Chicago" format="LLLL" calendar="off" recurring="1.weeks" timezone=" Asia/Calcutta" timezones="Europe/Paris|America/Los_Angeles"]');
      assert.strictEqual(getAttr("date"), "2017-10-23", "it has the correct date");
      assert.strictEqual(getAttr("time"), "01:30:00", "it has the correct time");
      assert.strictEqual(getAttr("displayed-timezone"), "America/Chicago", "it has the correct displayed timezone");
      assert.strictEqual(getAttr("format"), "LLLL", "it has the correct format");
      assert.strictEqual(getAttr("timezones"), "Europe/Paris|America/Los_Angeles", "it has the correct timezones");
      assert.strictEqual(getAttr("recurring"), "1.weeks", "it has the correct recurring");
      assert.strictEqual(getAttr("timezone"), "Asia/Calcutta", "it has the correct timezone");
      await (0, _testHelpers.fillIn)(".d-editor-input", '[date=2017-10-24 format="LL" timezone="Asia/Calcutta" timezones="Europe/Paris|America/Los_Angeles"]');
      assert.strictEqual(getAttr("date"), "2017-10-24", "it has the correct date");
      assert.notOk(getAttr("time"), "it doesn’t have time");
    });
    (0, _qunit.test)("date modal", async function (assert) {
      await (0, _testHelpers.visit)("/");
      await (0, _testHelpers.click)("#create-topic");
      const categoryChooser = (0, _selectKitHelper.default)(".category-chooser");
      await categoryChooser.expand();
      await categoryChooser.selectRowByValue(2);
      await (0, _testHelpers.click)(".d-editor-button-bar .local-dates");
      const timezoneChooser = (0, _selectKitHelper.default)(".timezone-input");
      await timezoneChooser.expand();
      await timezoneChooser.selectRowByValue("Asia/Macau");
      assert.ok((0, _qunitHelpers.query)(".preview .discourse-local-date").textContent.includes("Macau"), "it outputs a preview date in selected timezone");
    });
    (0, _qunit.test)("date modal - controls", async function (assert) {
      await (0, _testHelpers.visit)("/");
      await (0, _testHelpers.click)("#create-topic");
      const categoryChooser = (0, _selectKitHelper.default)(".category-chooser");
      await categoryChooser.expand();
      await categoryChooser.selectRowByValue(2);
      await (0, _testHelpers.click)(".d-editor-button-bar .local-dates");
      await (0, _testHelpers.click)('.pika-table td[data-day="5"] > .pika-button');
      assert.ok((0, _qunitHelpers.query)("#from-date-time").textContent.includes("5,"), "selected FROM date works");
      await (0, _testHelpers.click)(".date-time-control.to .date-time");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".pika-table .is-disabled").length, 4, "date just before selected FROM date is disabled");
      await (0, _testHelpers.click)('.pika-table td[data-day="10"] > .pika-button');
      assert.ok((0, _qunitHelpers.query)(".date-time-control.to button").textContent.includes("10,"), "selected TO date works");
      assert.strictEqual((0, _qunitHelpers.query)(".pika-table .is-selected").textContent, "10", "selected date is the 10th");
      await (0, _testHelpers.click)(".delete-to-date");
      assert.notOk((0, _qunitHelpers.query)(".date-time-control.to.is-selected"), "deleting selected TO date works");
      await (0, _testHelpers.click)(".advanced-mode-btn");
      assert.strictEqual((0, _qunitHelpers.query)("input.format-input").value, "");
      await (0, _testHelpers.click)("ul.formats a.moment-format");
      assert.strictEqual((0, _qunitHelpers.query)("input.format-input").value, "LLL");
    });
  });
});
define("discourse/plugins/discourse-local-dates/acceptance/local-dates-quoting-test", ["@ember/test-helpers", "qunit", "discourse/tests/fixtures/topic", "discourse/tests/helpers/qunit-helpers", "discourse-common/lib/object"], function (_testHelpers, _qunit, _topic, _qunitHelpers, _object) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Local Dates - quoting", function (needs) {
    needs.user();
    needs.settings({
      discourse_local_dates_enabled: true
    });
    needs.pretender((server, helper) => {
      const topicResponse = (0, _object.cloneJSON)(_topic.default["/t/280/1.json"]);
      const firstPost = topicResponse.post_stream.posts[0];
      firstPost.cooked += `<div class='select-local-date-test'>This is a test <span data-date="2022-06-17" data-time="10:00:00" class="discourse-local-date cooked-date past" data-displayed-timezone="Australia/Perth" data-timezone="Australia/Brisbane" data-email-preview="2022-06-17T00:00:00Z UTC" aria-label="Brisbane Friday, June 17, 2022
	<br />
	<svg class='fa d-icon d-icon-clock svg-icon svg-string'
		xmlns=&quot;http://www.w3.org/2000/svg&quot;>
		<use href=&quot;#clock&quot; />
	</svg> 10:00 AM, Paris Friday, June 17, 2022
	<br />
	<svg class='fa d-icon d-icon-clock svg-icon svg-string'
		xmlns=&quot;http://www.w3.org/2000/svg&quot;>
		<use href=&quot;#clock&quot; />
	</svg> 2:00 AM, Los Angeles Thursday, June 16, 2022
	<br />
	<svg class='fa d-icon d-icon-clock svg-icon svg-string'
		xmlns=&quot;http://www.w3.org/2000/svg&quot;>
		<use href=&quot;#clock&quot; />
	</svg> 5:00 PM" data-title="This is a new topic to check on chat quote issues">
  <svg class="fa d-icon d-icon-globe-americas svg-icon" xmlns="http://www.w3.org/2000/svg">
    <use href="#globe-americas"></use>
  </svg>
  <span class="relative-time">June 17, 2022 8:00 AM (Perth)</span>
</span></div>`;
      server.get("/t/280.json", () => helper.response(topicResponse));
      server.get("/t/280/:post_number.json", () => {
        helper.response(topicResponse);
      });
    });
    (0, _qunit.test)("quoting single local dates with basic options", async function (assert) {
      await (0, _testHelpers.visit)("/t/internationalization-localization/280");
      await (0, _qunitHelpers.selectText)("#post_1 .select-local-date-test");
      await (0, _testHelpers.click)(".insert-quote");
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value.trim(), `[quote=\"uwe_keim, post:1, topic:280\"]
This is a test [date=2022-06-17 time=10:00:00 timezone="Australia/Brisbane" displayedTimezone="Australia/Perth"]
[/quote]`, "converts the date to markdown with all options correctly");
    });
  });
  (0, _qunitHelpers.acceptance)("Local Dates - quoting range", function (needs) {
    needs.user();
    needs.settings({
      discourse_local_dates_enabled: true
    });
    needs.pretender((server, helper) => {
      const topicResponse = (0, _object.cloneJSON)(_topic.default["/t/280/1.json"]);
      const firstPost = topicResponse.post_stream.posts[0];
      firstPost.cooked += `<div class='select-local-date-test'><p dir="ltr">Some text <span data-date="2022-06-17" data-time="09:30:00" class="discourse-local-date cooked-date past" data-format="LL" data-range="true" data-timezones="Africa/Accra|Australia/Brisbane|Europe/Paris" data-timezone="Australia/Brisbane" data-email-preview="2022-06-16T23:30:00Z UTC" aria-label="Brisbane Friday, June 17, 2022 9:30 AM → Saturday, June 18, 2022 10:30 AM, Accra Thursday, June 16, 2022 11:30 PM → Saturday, June 18, 2022 12:30 AM, Paris Friday, June 17, 2022 1:30 AM → Saturday, June 18, 2022 2:30 AM" data-title="This is a new topic to check on chat quote issues">
        <svg class="fa d-icon d-icon-globe-americas svg-icon" xmlns="http://www.w3.org/2000/svg">
          <use href="#globe-americas"></use>
        </svg>
        <span class="relative-time">June 17, 2022</span>
      </span>→<span data-date="2022-06-18" data-time="10:30:00" class="discourse-local-date cooked-date past" data-format="LL" data-range="true" data-timezones="Africa/Accra|Australia/Brisbane|Europe/Paris" data-timezone="Australia/Brisbane" data-email-preview="2022-06-18T00:30:00Z UTC" aria-label="Brisbane Friday, June 17, 2022 9:30 AM → Saturday, June 18, 2022 10:30 AM, Accra Thursday, June 16, 2022 11:30 PM → Saturday, June 18, 2022 12:30 AM, Paris Friday, June 17, 2022 1:30 AM → Saturday, June 18, 2022 2:30 AM" data-title="This is a new topic to check on chat quote issues">
        <svg class="fa d-icon d-icon-globe-americas svg-icon" xmlns="http://www.w3.org/2000/svg">
          <use href="#globe-americas"></use>
        </svg>
        <span class="relative-time">June 18, 2022</span>
      </span></p></div>`;
      server.get("/t/280.json", () => helper.response(topicResponse));
      server.get("/t/280/:post_number.json", () => {
        helper.response(topicResponse);
      });
    });
    (0, _qunit.test)("quoting a range of local dates", async function (assert) {
      await (0, _testHelpers.visit)("/t/internationalization-localization/280");
      await (0, _qunitHelpers.selectText)("#post_1 .select-local-date-test");
      await (0, _testHelpers.click)(".insert-quote");
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value.trim(), `[quote=\"uwe_keim, post:1, topic:280\"]
Some text [date-range from=2022-06-17T09:30:00 to=2022-06-18T10:30:00 format="LL" timezone="Australia/Brisbane" timezones="Africa/Accra|Australia/Brisbane|Europe/Paris"]
[/quote]`, "converts the date range to markdown with all options correctly");
    });
  });
  (0, _qunitHelpers.acceptance)("Local Dates - quoting with recurring and countdown", function (needs) {
    needs.user();
    needs.settings({
      discourse_local_dates_enabled: true
    });
    needs.pretender((server, helper) => {
      const topicResponse = (0, _object.cloneJSON)(_topic.default["/t/280/1.json"]);
      const firstPost = topicResponse.post_stream.posts[0];
      firstPost.cooked += `<div class='select-local-date-test'><p dir="ltr">Testing countdown <span data-date="2022-06-21" data-time="09:30:00" class="discourse-local-date cooked-date" data-format="LL" data-countdown="true" data-timezone="Australia/Brisbane" data-email-preview="2022-06-20T23:30:00Z UTC" aria-label="Brisbane Tuesday, June 21, 2022 <br /><svg class='fa d-icon d-icon-clock svg-icon svg-string' xmlns=&quot;http://www.w3.org/2000/svg&quot;><use href=&quot;#clock&quot; /></svg> 9:30 AM, Paris Tuesday, June 21, 2022 <br /><svg class='fa d-icon d-icon-clock svg-icon svg-string' xmlns=&quot;http://www.w3.org/2000/svg&quot;><use href=&quot;#clock&quot; /></svg> 1:30 AM, Los Angeles Monday, June 20, 2022 <br /><svg class='fa d-icon d-icon-clock svg-icon svg-string' xmlns=&quot;http://www.w3.org/2000/svg&quot;><use href=&quot;#clock&quot; /></svg> 4:30 PM" data-title="This is a new topic to check on chat quote issues">
        <svg class="fa d-icon d-icon-globe-americas svg-icon" xmlns="http://www.w3.org/2000/svg">
          <use href="#globe-americas"></use>
        </svg>
        <span class="relative-time">21 hours</span>
      </span></p>
      <p dir="ltr">Testing recurring <span data-date="2022-06-22" class="discourse-local-date cooked-date" data-timezone="Australia/Brisbane" data-recurring="2.weeks" data-email-preview="2022-06-21T14:00:00Z UTC" aria-label="Brisbane Wednesday, June 22, 2022 12:00 AM → Thursday, June 23, 2022 12:00 AM, Paris Tuesday, June 21, 2022 4:00 PM → Wednesday, June 22, 2022 4:00 PM, Los Angeles Tuesday, June 21, 2022 7:00 AM → Wednesday, June 22, 2022 7:00 AM" data-title="This is a new topic to check on chat quote issues">
        <svg class="fa d-icon d-icon-globe-americas svg-icon" xmlns="http://www.w3.org/2000/svg">
          <use href="#globe-americas"></use>
        </svg>
        <span class="relative-time">Wednesday</span>
      </span></p></div>`;
      server.get("/t/280.json", () => helper.response(topicResponse));
      server.get("/t/280/:post_number.json", () => {
        helper.response(topicResponse);
      });
    });
    (0, _qunit.test)("quoting single local dates with recurring and countdown options", async function (assert) {
      await (0, _testHelpers.visit)("/t/internationalization-localization/280");
      await (0, _qunitHelpers.selectText)("#post_1 .select-local-date-test");
      await (0, _testHelpers.click)(".insert-quote");
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value.trim(), `[quote=\"uwe_keim, post:1, topic:280\"]
Testing countdown [date=2022-06-21 time=09:30:00 format="LL" timezone="Australia/Brisbane" countdown="true"]

Testing recurring [date=2022-06-22 timezone="Australia/Brisbane" recurring="2.weeks"]
[/quote]`, "converts the dates to markdown with all options correctly");
    });
  });
});
define("discourse/plugins/discourse-local-dates/lib/date-with-zone-helper-test", ["qunit", "discourse/plugins/discourse-local-dates/lib/date-with-zone-helper"], function (_qunit, _dateWithZoneHelper) {
  "use strict";

  const PARIS = "Europe/Paris";
  const SYDNEY = "Australia/Sydney";
  function buildDateHelper(params = {}) {
    return new _dateWithZoneHelper.default({
      year: params.year || 2020,
      day: params.day || 22,
      month: params.month || 2,
      hour: params.hour || 10,
      minute: params.minute || 5,
      timezone: params.timezone,
      localTimezone: PARIS
    });
  }
  (0, _qunit.module)("lib:date-with-zone-helper", function () {
    (0, _qunit.test)("#format", function (assert) {
      let date = buildDateHelper({
        day: 15,
        month: 2,
        hour: 15,
        minute: 36,
        timezone: PARIS
      });
      assert.strictEqual(date.format(), "2020-03-15T15:36:00.000+01:00");
    });
    (0, _qunit.test)("#unitRepetitionsBetweenDates", function (assert) {
      let date;
      date = buildDateHelper({
        day: 15,
        month: 1,
        hour: 15,
        minute: 36,
        timezone: PARIS
      });
      assert.strictEqual(date.unitRepetitionsBetweenDates("1.hour", moment.tz("2020-02-15 15:36", SYDNEY)), 10, "it correctly finds difference between timezones");
      date = buildDateHelper({
        day: 15,
        month: 1,
        hour: 15,
        minute: 36,
        timezone: PARIS
      });
      assert.strictEqual(date.unitRepetitionsBetweenDates("1.minute", moment.tz("2020-02-15 15:36", PARIS)), 0, "it correctly finds no difference");
      date = buildDateHelper({
        day: 15,
        month: 1,
        hour: 15,
        minute: 36,
        timezone: PARIS
      });
      assert.strictEqual(date.unitRepetitionsBetweenDates("1.minute", moment.tz("2020-02-15 15:37", PARIS)), 1, "it correctly finds no difference");
      date = buildDateHelper({
        day: 15,
        month: 1,
        hour: 15,
        minute: 36,
        timezone: PARIS
      });
      assert.strictEqual(date.unitRepetitionsBetweenDates("2.minutes", moment.tz("2020-02-15 15:41", PARIS)), 6, "it correctly finds difference with a multiplicator");
    });
    (0, _qunit.test)("#add", function (assert) {
      let date;
      let futureLocalDate;
      date = buildDateHelper({
        day: 19,
        month: 2,
        hour: 15,
        minute: 36,
        timezone: PARIS
      });
      assert.notOk(date.isDST());
      futureLocalDate = date.add(8, "months");
      assert.notOk(futureLocalDate.isDST());
      assert.strictEqual(futureLocalDate.format(), "2020-11-19T15:36:00.000+01:00", "it correctly adds from a !isDST date to a !isDST date");
      date = buildDateHelper({
        day: 25,
        month: 3,
        hour: 15,
        minute: 36,
        timezone: PARIS
      });
      assert.ok(date.isDST());
      futureLocalDate = date.add(1, "year");
      assert.ok(futureLocalDate.isDST());
      assert.strictEqual(futureLocalDate.format(), "2021-04-25T15:36:00.000+02:00", "it correctly adds from a isDST date to a isDST date");
      date = buildDateHelper({
        day: 25,
        month: 2,
        hour: 15,
        minute: 36,
        timezone: PARIS
      });
      assert.notOk(date.isDST());
      futureLocalDate = date.add(1, "week");
      assert.ok(futureLocalDate.isDST());
      assert.strictEqual(futureLocalDate.format(), "2020-04-01T15:36:00.000+02:00", "it correctly adds from a !isDST date to a isDST date");
      date = buildDateHelper({
        day: 1,
        month: 3,
        hour: 15,
        minute: 36,
        timezone: PARIS
      });
      assert.ok(date.isDST());
      futureLocalDate = date.add(8, "months");
      assert.notOk(futureLocalDate.isDST());
      assert.strictEqual(futureLocalDate.format(), "2020-12-01T15:36:00.000+01:00", "it correctly adds from a isDST date to a !isDST date");
    });
  });
});
define("discourse/plugins/discourse-local-dates/unit/discourse-local-dates-test", ["ember-qunit", "qunit", "discourse/plugins/discourse-local-dates/initializers/discourse-local-dates", "discourse/plugins/discourse-local-dates/unit/local-date-builder-test"], function (_emberQunit, _qunit, _discourseLocalDates, _localDateBuilderTest) {
  "use strict";

  (0, _qunit.module)("Unit | discourse-local-dates", function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    function createElementFromHTML(htmlString) {
      const div = document.createElement("div");
      div.innerHTML = htmlString.trim();
      // we need "element", not "node", since `.dataset` isn't available on nodes
      return div.firstElementChild;
    }
    const fromElement = () => createElementFromHTML("<span " + 'data-date="2022-10-06" ' + 'data-time="17:21:00" ' + 'class="discourse-local-date" ' + 'data-range="from" ' + 'data-timezone="Asia/Singapore" ' + 'data-title="Testing dates with the local date builder">' + "</span>");
    const toElement = () => createElementFromHTML("<span " + 'data-date="2022-10-06" ' + 'data-time="22:22:00" ' + 'class="discourse-local-date" ' + 'data-range="to" ' + 'data-timezone="Asia/Singapore" ' + 'data-title="Testing dates with the local date builder">' + "</span>");
    (0, _qunit.test)("applyLocalDates sets formatted relative time", function (assert) {
      const from = fromElement();
      const to = toElement();
      const dateElements = [from, to];
      (0, _localDateBuilderTest.freezeTime)({
        date: "2022-10-07T10:10:10",
        timezone: "Asia/Singapore"
      }, () => {
        (0, _discourseLocalDates.applyLocalDates)(dateElements, {
          discourse_local_dates_enabled: true
        });
        assert.equal(from.querySelector(".relative-time").textContent, "Yesterday 5:21 PM");
        assert.equal(to.querySelector(".relative-time").textContent, "10:22 PM (Singapore)");
      });
    });
    (0, _qunit.test)("applyLocalDates does not fail when a date element has no time", function (assert) {
      const from = fromElement();
      const to = toElement();
      delete to.dataset.time;
      const dateElements = [from, to];
      (0, _localDateBuilderTest.freezeTime)({
        date: "2022-10-07T10:10:10",
        timezone: "Asia/Singapore"
      }, () => {
        (0, _discourseLocalDates.applyLocalDates)(dateElements, {
          discourse_local_dates_enabled: true
        });
        assert.equal(from.querySelector(".relative-time").textContent, "Yesterday 5:21 PM");
        assert.equal(to.querySelector(".relative-time").textContent, "Yesterday");
      });
    });
  });
});
define("discourse/plugins/discourse-local-dates/unit/local-date-builder-test", ["exports", "qunit", "sinon", "discourse-i18n", "discourse/plugins/discourse-local-dates/lib/local-date-builder"], function (_exports, _qunit, _sinon, _discourseI18n, _localDateBuilder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.freezeTime = freezeTime;
  const UTC = "Etc/UTC";
  const SYDNEY = "Australia/Sydney";
  const LOS_ANGELES = "America/Los_Angeles";
  const NEW_YORK = "America/New_York";
  const PARIS = "Europe/Paris";
  const LAGOS = "Africa/Lagos";
  const LONDON = "Europe/London";
  const SINGAPORE = "Asia/Singapore";
  function freezeTime({
    date,
    timezone
  }, cb) {
    date = date || "2020-01-22 10:34";
    const newTimezone = timezone || PARIS;
    const previousZone = moment.tz.guess();
    const now = moment.tz(date, newTimezone).valueOf();
    _sinon.default.useFakeTimers(now);
    _sinon.default.stub(moment.tz, "guess");
    moment.tz.guess.returns(newTimezone);
    moment.tz.setDefault(newTimezone);
    cb();
    moment.tz.guess.returns(previousZone);
    moment.tz.setDefault(previousZone);
    _sinon.default.restore();
  }
  _qunit.default.assert.buildsCorrectDate = function (options, expected, message) {
    const localTimezone = options.localTimezone || PARIS;
    delete options.localTimezone;
    const localDateBuilder = new _localDateBuilder.default(Object.assign({}, {
      date: "2020-03-22"
    }, options), localTimezone);
    if (expected.formatted) {
      this.test.assert.strictEqual(localDateBuilder.build().formatted, expected.formatted, message || "it formats the date correctly");
    }
    if (expected.previews) {
      this.test.assert.deepEqual(localDateBuilder.build().previews, expected.previews, message || "it formats the previews correctly");
    }
  };
  (0, _qunit.module)("Unit | Library | local-date-builder", function () {
    (0, _qunit.test)("date", function (assert) {
      freezeTime({
        date: "2020-03-11"
      }, () => {
        assert.buildsCorrectDate({
          date: "2020-03-22",
          timezone: PARIS
        }, {
          formatted: "March 22, 2020"
        }, "it displays the date without time");
      });
      freezeTime({
        date: "2022-10-11",
        timezone: "Asia/Singapore"
      }, () => {
        const localDateBuilder = new _localDateBuilder.default({
          date: "2022-10-12",
          timezone: SINGAPORE,
          localTimezone: SINGAPORE
        }, SINGAPORE);
        assert.strictEqual(localDateBuilder.build().formatted, "Tomorrow", "Displays relative day");
      });
    });
    (0, _qunit.test)("date and time", function (assert) {
      assert.buildsCorrectDate({
        date: "2020-04-11",
        time: "11:00"
      }, {
        formatted: "April 11, 2020 1:00 PM"
      }, "it displays the date with time");
      assert.buildsCorrectDate({
        date: "2020-04-11",
        time: "11:05:12",
        format: "LTS"
      }, {
        formatted: "1:05:12 PM"
      }, "it displays full time (hours, minutes, seconds)");
    });
    (0, _qunit.test)("time", function (assert) {
      assert.buildsCorrectDate({
        time: "12:22:00",
        date: "2022-10-07",
        timezone: SINGAPORE,
        localTimezone: SINGAPORE,
        sameLocalDayAsFrom: true
      }, {
        formatted: "12:22 PM (Singapore)"
      }, "it displays the time only as the date is the same local day as 'from'");
    });
    (0, _qunit.test)("option[format]", function (assert) {
      freezeTime({
        date: "2020-03-11"
      }, () => {
        assert.buildsCorrectDate({
          format: "YYYY"
        }, {
          formatted: "2020 (UTC)"
        }, "it uses custom format");
      });
    });
    (0, _qunit.test)("option[displayedTimezone]", function (assert) {
      freezeTime({}, () => {
        assert.buildsCorrectDate({
          displayedTimezone: SYDNEY
        }, {
          formatted: "March 22, 2020 (Sydney)"
        }, "it displays the timezone if the timezone is different from the date");
      });
      freezeTime({}, () => {
        assert.buildsCorrectDate({
          displayedTimezone: PARIS,
          timezone: PARIS
        }, {
          formatted: "March 22, 2020"
        }, "it doesn't display the timezone if the timezone is the same than the date");
      });
      freezeTime({}, () => {
        assert.buildsCorrectDate({
          timezone: UTC,
          displayedTimezone: UTC
        }, {
          formatted: "March 22, 2020 (UTC)"
        }, "it replaces `Etc/`");
      });
      freezeTime({}, () => {
        assert.buildsCorrectDate({
          timezone: LOS_ANGELES,
          displayedTimezone: LOS_ANGELES
        }, {
          formatted: "March 22, 2020 (Los Angeles)"
        }, "it removes prefix and replaces `_`");
      });
    });
    (0, _qunit.test)("option[timezone]", function (assert) {
      freezeTime({}, () => {
        assert.buildsCorrectDate({
          timezone: SYDNEY,
          displayedTimezone: PARIS
        }, {
          formatted: "March 21, 2020"
        }, "it correctly parses a date with the given timezone context");
      });
    });
    (0, _qunit.test)("option[recurring]", function (assert) {
      freezeTime({
        date: "2020-04-06 06:00",
        timezone: LAGOS
      }, () => {
        assert.buildsCorrectDate({
          date: "2019-11-25",
          time: "11:00",
          timezone: PARIS,
          displayedTimezone: LAGOS,
          recurring: "1.weeks"
        }, {
          formatted: "April 6, 2020 10:00 AM (Lagos)"
        }, "it correctly formats a recurring date starting from a !isDST timezone to a isDST timezone date when displayed to a user using a timezone with no DST");
      });
      freezeTime({
        date: "2020-04-06 01:00",
        timezone: SYDNEY
      }, () => {
        assert.buildsCorrectDate({
          date: "2020-03-09",
          time: "02:00",
          timezone: UTC,
          recurring: "1.weeks",
          calendar: false,
          displayedTimezone: SYDNEY
        }, {
          formatted: "April 6, 2020 12:00 PM (Sydney)"
        }, "it correctly formats a recurring date spanning over weeks");
      });
      freezeTime({
        date: "2020-04-07 22:00"
      }, () => {
        assert.buildsCorrectDate({
          date: "2019-11-25",
          time: "11:00",
          recurring: "1.weeks",
          timezone: PARIS
        }, {
          formatted: "April 13, 2020 11:00 AM"
        }, "it correctly adds from a !isDST date to a isDST date");
      });
      freezeTime({
        date: "2020-04-06 10:59"
      }, () => {
        assert.buildsCorrectDate({
          date: "2020-03-30",
          time: "11:00",
          recurring: "1.weeks",
          timezone: PARIS
        }, {
          formatted: "Today 11:00 AM"
        }, "it works to the minute");
      });
      freezeTime({
        date: "2020-04-06 11:01"
      }, () => {
        assert.buildsCorrectDate({
          date: "2020-03-30",
          time: "11:00",
          recurring: "1.weeks",
          timezone: PARIS
        }, {
          formatted: "April 13, 2020 11:00 AM"
        }, "it works to the minute");
      });
      freezeTime({
        date: "2020-12-28 09:16"
      }, () => {
        assert.buildsCorrectDate({
          date: "2021-01-24",
          time: "08:30",
          recurring: "1.weeks",
          timezone: NEW_YORK
        }, {
          formatted: "January 24, 2021 2:30 PM"
        }, "it works for a future date");
      });
      freezeTime({
        date: "2021-01-08 11:16"
      }, () => {
        assert.buildsCorrectDate({
          date: "2021-01-05",
          time: "14:00",
          recurring: "2.hours",
          timezone: NEW_YORK
        }, {
          formatted: "Today 12:00 PM"
        }, "it works with hours");
      });
    });
    (0, _qunit.test)("option[countdown]", function (assert) {
      freezeTime({
        date: "2020-03-21 23:59"
      }, () => {
        assert.buildsCorrectDate({
          countdown: true,
          timezone: PARIS
        }, {
          formatted: "a minute"
        }, "it shows the time remaining");
      });
      freezeTime({
        date: "2020-03-22 00:01"
      }, () => {
        assert.buildsCorrectDate({
          countdown: true,
          timezone: PARIS
        }, {
          formatted: _discourseI18n.default.t("discourse_local_dates.relative_dates.countdown.passed")
        }, "it shows the date has passed");
      });
    });
    (0, _qunit.test)("option[calendar]", function (assert) {
      freezeTime({
        date: "2020-03-23 23:00"
      }, () => {
        assert.buildsCorrectDate({
          date: "2020-03-22",
          time: "23:59",
          timezone: PARIS
        }, {
          formatted: "Yesterday 11:59 PM"
        }, "it drops calendar mode when event date is more than one day before current date");
      });
      freezeTime({
        date: "2020-03-20 23:59"
      }, () => assert.buildsCorrectDate({
        date: "2020-03-21",
        time: "01:00",
        timezone: PARIS
      }, {
        formatted: "Tomorrow 1:00 AM"
      }));
      freezeTime({
        date: "2020-03-20 23:59"
      }, () => assert.buildsCorrectDate({
        date: "2020-03-21",
        time: "00:00",
        timezone: PARIS
      }, {
        formatted: "Saturday"
      }, "it displays the day with no time when the time in the displayed timezone is 00:00"));
      freezeTime({
        date: "2020-03-20 23:59"
      }, () => {
        assert.buildsCorrectDate({
          date: "2020-03-21",
          time: "23:59",
          timezone: PARIS
        }, {
          formatted: "Tomorrow 11:59 PM"
        });
      });
      freezeTime({
        date: "2020-03-21 00:00"
      }, () => assert.buildsCorrectDate({
        date: "2020-03-21",
        time: "23:00",
        timezone: PARIS
      }, {
        formatted: "Today 11:00 PM"
      }));
      freezeTime({
        date: "2020-03-22 23:59"
      }, () => assert.buildsCorrectDate({
        date: "2020-03-21",
        time: "23:59",
        timezone: PARIS
      }, {
        formatted: "Yesterday 11:59 PM"
      }));
      freezeTime({
        date: "2020-03-22 23:59"
      }, () => assert.buildsCorrectDate({
        date: "2020-03-21",
        time: "23:59",
        timezone: PARIS
      }, {
        formatted: "Yesterday 11:59 PM"
      }));
      freezeTime({
        date: "2020-03-22 23:59"
      }, () => assert.buildsCorrectDate({
        calendar: false,
        date: "2020-03-21",
        time: "23:59",
        timezone: PARIS
      }, {
        formatted: "March 21, 2020 11:59 PM"
      }, "it doesn't use calendar when disabled"));
      freezeTime({
        date: "2020-03-24 01:00"
      }, () => assert.buildsCorrectDate({
        date: "2020-03-21",
        timezone: PARIS
      }, {
        formatted: "March 21, 2020"
      }, "it stops formatting out of calendar range"));
      freezeTime({
        date: "2020-05-12",
        timezone: LOS_ANGELES
      }, () => {
        assert.buildsCorrectDate({
          date: "2020-05-13",
          time: "18:00",
          localTimezone: LOS_ANGELES
        }, {
          formatted: "Tomorrow 11:00 AM"
        }, "it correctly displays a different local timezone");
      });
    });
    (0, _qunit.test)("previews", function (assert) {
      freezeTime({
        date: "2020-03-22"
      }, () => {
        assert.buildsCorrectDate({
          timezone: PARIS
        }, {
          previews: [{
            current: true,
            formatted: "Sunday, March 22, 2020 12:00 AM → Monday, March 23, 2020 12:00 AM",
            timezone: "Paris"
          }]
        });
      });
      freezeTime({
        date: "2020-03-22",
        timezone: PARIS
      }, () => {
        assert.buildsCorrectDate({
          timezone: PARIS,
          timezones: [SYDNEY]
        }, {
          previews: [{
            current: true,
            formatted: "Sunday, March 22, 2020 12:00 AM → Monday, March 23, 2020 12:00 AM",
            timezone: "Paris"
          }, {
            formatted: "Sunday, March 22, 2020 10:00 AM → Monday, March 23, 2020 10:00 AM",
            timezone: "Sydney"
          }]
        });
      });
      freezeTime({
        date: "2020-03-22",
        timezone: PARIS
      }, () => {
        assert.buildsCorrectDate({
          timezone: PARIS,
          displayedTimezone: LOS_ANGELES
        }, {
          previews: [{
            current: true,
            formatted: "Sunday, March 22, 2020 12:00 AM → Monday, March 23, 2020 12:00 AM",
            timezone: "Paris"
          }]
        });
      });
      freezeTime({
        date: "2020-03-22",
        timezone: PARIS
      }, () => {
        assert.buildsCorrectDate({
          timezone: PARIS,
          displayedTimezone: PARIS
        }, {
          previews: [{
            current: true,
            formatted: "Sunday, March 22, 2020 12:00 AM → Monday, March 23, 2020 12:00 AM",
            timezone: "Paris"
          }]
        });
      });
      freezeTime({
        date: "2020-03-22",
        timezone: PARIS
      }, () => {
        assert.buildsCorrectDate({
          timezone: PARIS,
          timezones: [PARIS]
        }, {
          previews: [{
            current: true,
            formatted: "Sunday, March 22, 2020 12:00 AM → Monday, March 23, 2020 12:00 AM",
            timezone: "Paris"
          }]
        });
      });
      freezeTime({
        date: "2020-03-22",
        timezone: PARIS
      }, () => {
        assert.buildsCorrectDate({
          duration: 90,
          timezone: PARIS,
          timezones: [PARIS]
        }, {
          previews: [{
            current: true,
            formatted: 'Sunday, March 22, 2020 <br /><svg class=\'fa d-icon d-icon-clock svg-icon svg-string\' xmlns="http://www.w3.org/2000/svg"><use href="#clock" /></svg> 12:00 AM → 1:30 AM',
            timezone: "Paris"
          }]
        });
      });
      freezeTime({
        date: "2020-03-22",
        timezone: PARIS
      }, () => {
        assert.buildsCorrectDate({
          duration: 1440,
          timezone: PARIS,
          timezones: [PARIS]
        }, {
          previews: [{
            current: true,
            formatted: "Sunday, March 22, 2020 12:00 AM → Monday, March 23, 2020 12:00 AM",
            timezone: "Paris"
          }]
        });
      });
      freezeTime({
        date: "2020-03-22",
        timezone: PARIS
      }, () => {
        assert.buildsCorrectDate({
          time: "11:34",
          timezone: PARIS,
          timezones: [PARIS]
        }, {
          previews: [{
            current: true,
            formatted: 'Sunday, March 22, 2020 <br /><svg class=\'fa d-icon d-icon-clock svg-icon svg-string\' xmlns="http://www.w3.org/2000/svg"><use href="#clock" /></svg> 11:34 AM',
            timezone: "Paris"
          }]
        });
      });
      freezeTime({
        date: "2020-04-06",
        timezone: PARIS
      }, () => {
        assert.buildsCorrectDate({
          timezone: PARIS,
          date: "2020-04-07",
          timezones: [LONDON, LAGOS, SYDNEY]
        }, {
          previews: [{
            current: true,
            formatted: "Tuesday, April 7, 2020 12:00 AM → Wednesday, April 8, 2020 12:00 AM",
            timezone: "Paris"
          }, {
            formatted: "Monday, April 6, 2020 11:00 PM → Tuesday, April 7, 2020 11:00 PM",
            timezone: "London"
          }, {
            formatted: "Monday, April 6, 2020 11:00 PM → Tuesday, April 7, 2020 11:00 PM",
            timezone: "Lagos"
          }, {
            formatted: "Tuesday, April 7, 2020 8:00 AM → Wednesday, April 8, 2020 8:00 AM",
            timezone: "Sydney"
          }]
        });
      });
      freezeTime({
        date: "2020-04-06",
        timezone: PARIS
      }, () => {
        assert.buildsCorrectDate({
          timezone: PARIS,
          date: "2020-04-07",
          time: "14:54",
          timezones: [LONDON, LAGOS, SYDNEY]
        }, {
          previews: [{
            current: true,
            formatted: 'Tuesday, April 7, 2020 <br /><svg class=\'fa d-icon d-icon-clock svg-icon svg-string\' xmlns="http://www.w3.org/2000/svg"><use href="#clock" /></svg> 2:54 PM',
            timezone: "Paris"
          }, {
            formatted: 'Tuesday, April 7, 2020 <br /><svg class=\'fa d-icon d-icon-clock svg-icon svg-string\' xmlns="http://www.w3.org/2000/svg"><use href="#clock" /></svg> 1:54 PM',
            timezone: "London"
          }, {
            formatted: 'Tuesday, April 7, 2020 <br /><svg class=\'fa d-icon d-icon-clock svg-icon svg-string\' xmlns="http://www.w3.org/2000/svg"><use href="#clock" /></svg> 1:54 PM',
            timezone: "Lagos"
          }, {
            formatted: 'Tuesday, April 7, 2020 <br /><svg class=\'fa d-icon d-icon-clock svg-icon svg-string\' xmlns="http://www.w3.org/2000/svg"><use href="#clock" /></svg> 10:54 PM',
            timezone: "Sydney"
          }]
        });
      });
      freezeTime({
        date: "2020-05-12",
        timezone: LOS_ANGELES
      }, () => {
        assert.buildsCorrectDate({
          date: "2020-05-13",
          time: "18:00",
          localTimezone: LOS_ANGELES
        }, {
          previews: [{
            current: true,
            formatted: 'Wednesday, May 13, 2020 <br /><svg class=\'fa d-icon d-icon-clock svg-icon svg-string\' xmlns="http://www.w3.org/2000/svg"><use href="#clock" /></svg> 11:00 AM',
            timezone: "Los Angeles"
          }, {
            formatted: 'Wednesday, May 13, 2020 <br /><svg class=\'fa d-icon d-icon-clock svg-icon svg-string\' xmlns="http://www.w3.org/2000/svg"><use href="#clock" /></svg> 6:00 PM',
            timezone: "UTC"
          }]
        });
      });
    });
  });
});//# sourceMappingURL=discourse-local-dates_tests.map
