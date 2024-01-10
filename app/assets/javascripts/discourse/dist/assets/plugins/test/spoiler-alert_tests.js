define("discourse/plugins/spoiler-alert/acceptance/spoiler-button-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers", "discourse/tests/helpers/select-kit-helper", "discourse-i18n"], function (_testHelpers, _qunit, _qunitHelpers, _selectKitHelper, _discourseI18n) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Spoiler Button", function (needs) {
    needs.user();
    needs.settings({
      spoiler_enabled: true
    });
    (0, _qunit.test)("spoiler button", async assert => {
      const popUpMenu = (0, _selectKitHelper.default)(".toolbar-popup-menu-options");
      await (0, _testHelpers.visit)("/");
      assert.ok((0, _qunitHelpers.exists)("#create-topic"), "the create button is visible");
      await (0, _testHelpers.click)("#create-topic");
      const categoryChooser = (0, _selectKitHelper.default)(".category-chooser");
      await categoryChooser.expand();
      await categoryChooser.selectRowByValue(2);
      await popUpMenu.expand();
      await popUpMenu.selectRowByName(_discourseI18n.default.t("spoiler.title"));
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `[spoiler]${_discourseI18n.default.t("composer.spoiler_text")}[/spoiler]`, "it should contain the right output");
      let textarea = (0, _qunitHelpers.query)(".d-editor-input");
      assert.strictEqual(textarea.selectionStart, 9, "it should start highlighting at the right position");
      assert.strictEqual(textarea.selectionEnd, _discourseI18n.default.t("composer.spoiler_text").length + 9, "it should end highlighting at the right position");
      await (0, _testHelpers.fillIn)(".d-editor-input", "This is hidden");
      textarea.selectionStart = 0;
      textarea.selectionEnd = textarea.value.length;
      await popUpMenu.expand();
      await popUpMenu.selectRowByName(_discourseI18n.default.t("spoiler.title"));
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `[spoiler]This is hidden[/spoiler]`, "it should contain the right output");
      assert.strictEqual(textarea.selectionStart, 9, "it should start highlighting at the right position");
      assert.strictEqual(textarea.selectionEnd, 23, "it should end highlighting at the right position");
      await (0, _testHelpers.fillIn)(".d-editor-input", "Before this is hidden After");
      textarea.selectionStart = 7;
      textarea.selectionEnd = 21;
      await popUpMenu.expand();
      await popUpMenu.selectRowByName(_discourseI18n.default.t("spoiler.title"));
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `Before [spoiler]this is hidden[/spoiler] After`, "it should contain the right output");
      assert.strictEqual(textarea.selectionStart, 16, "it should start highlighting at the right position");
      assert.strictEqual(textarea.selectionEnd, 30, "it should end highlighting at the right position");
      await (0, _testHelpers.fillIn)(".d-editor-input", "Before\nthis is hidden\nAfter");
      textarea.selectionStart = 7;
      textarea.selectionEnd = 21;
      await popUpMenu.expand();
      await popUpMenu.selectRowByName(_discourseI18n.default.t("spoiler.title"));
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `Before\n[spoiler]this is hidden[/spoiler]\nAfter`, "it should contain the right output");
      assert.strictEqual(textarea.selectionStart, 16, "it should start highlighting at the right position");
      assert.strictEqual(textarea.selectionEnd, 30, "it should end highlighting at the right position");

      // enforce block mode when selected text is multiline
      await (0, _testHelpers.fillIn)(".d-editor-input", "Before\nthis is\n\nhidden\nAfter");
      textarea.selectionStart = 7;
      textarea.selectionEnd = 22;
      await popUpMenu.expand();
      await popUpMenu.selectRowByName(_discourseI18n.default.t("spoiler.title"));
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `Before\n[spoiler]\nthis is\n\nhidden\n[/spoiler]\nAfter`, "it should contain the right output");
      assert.strictEqual(textarea.selectionStart, 17, "it should start highlighting at the right position");
      assert.strictEqual(textarea.selectionEnd, 32, "it should end highlighting at the right position");
    });
  });
});
define("discourse/plugins/spoiler-alert/unit/lib/to-markdown-test", ["qunit", "discourse/lib/plugin-api", "discourse/lib/to-markdown", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/spoiler-alert/initializers/spoiler-alert"], function (_qunit, _pluginApi, _toMarkdown, _qunitHelpers, _spoilerAlert) {
  "use strict";

  (0, _qunitHelpers.discourseModule)("Spoiler Alert | Unit | to-markdown", function (hooks) {
    hooks.beforeEach(function () {
      (0, _pluginApi.withPluginApi)("0.5", _spoilerAlert.initializeSpoiler);
    });
    (0, _qunit.test)("handles spoiler tags", function (assert) {
      let html = `<div>Text with a</div><div class="spoiled">spoiled</div><div>word.</div>`;
      let markdown = `Text with a\n\n[spoiler]spoiled[/spoiler]\n\nword.`;
      assert.strictEqual((0, _toMarkdown.default)(html), markdown, "it should create block spoiler tag");
      html = `Inline <span class="spoiled">spoiled</span> word.`;
      markdown = `Inline [spoiler]spoiled[/spoiler] word.`;
      assert.strictEqual((0, _toMarkdown.default)(html), markdown, "it should create inline spoiler tag");
    });
  });
});//# sourceMappingURL=spoiler-alert_tests.map
