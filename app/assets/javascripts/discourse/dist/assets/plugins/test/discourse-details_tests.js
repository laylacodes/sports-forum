define("discourse/plugins/discourse-details/acceptance/details-button-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers", "discourse/tests/helpers/select-kit-helper", "discourse-i18n"], function (_testHelpers, _qunit, _qunitHelpers, _selectKitHelper, _discourseI18n) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Details Button", function (needs) {
    needs.user();
    (0, _qunit.test)("details button", async function (assert) {
      const popupMenu = (0, _selectKitHelper.default)(".toolbar-popup-menu-options");
      await (0, _testHelpers.visit)("/");
      await (0, _testHelpers.click)("#create-topic");
      const categoryChooser = (0, _selectKitHelper.default)(".category-chooser");
      await categoryChooser.expand();
      await categoryChooser.selectRowByValue(2);
      await popupMenu.expand();
      await popupMenu.selectRowByName(_discourseI18n.default.t("details.title"));
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `\n[details="${_discourseI18n.default.t("composer.details_title")}"]\n${_discourseI18n.default.t("composer.details_text")}\n[/details]\n`, "it should contain the right output");
      await (0, _testHelpers.fillIn)(".d-editor-input", "This is my title");
      const textarea = (0, _qunitHelpers.query)(".d-editor-input");
      textarea.selectionStart = 0;
      textarea.selectionEnd = textarea.value.length;
      await popupMenu.expand();
      await popupMenu.selectRowByName(_discourseI18n.default.t("details.title"));
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `\n[details="${_discourseI18n.default.t("composer.details_title")}"]\nThis is my title\n[/details]\n`, "it should contain the right selected output");
      assert.strictEqual(textarea.selectionStart, 21, "it should start highlighting at the right position");
      assert.strictEqual(textarea.selectionEnd, 37, "it should end highlighting at the right position");
      await (0, _testHelpers.fillIn)(".d-editor-input", "Before some text in between After");
      textarea.selectionStart = 7;
      textarea.selectionEnd = 28;
      await popupMenu.expand();
      await popupMenu.selectRowByName(_discourseI18n.default.t("details.title"));
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `Before \n[details="${_discourseI18n.default.t("composer.details_title")}"]\nsome text in between\n[/details]\n After`, "it should contain the right output");
      assert.strictEqual(textarea.selectionStart, 28, "it should start highlighting at the right position");
      assert.strictEqual(textarea.selectionEnd, 48, "it should end highlighting at the right position");
      await (0, _testHelpers.fillIn)(".d-editor-input", "Before \nsome text in between\n After");
      textarea.selectionStart = 8;
      textarea.selectionEnd = 29;
      await popupMenu.expand();
      await popupMenu.selectRowByName(_discourseI18n.default.t("details.title"));
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `Before \n\n[details="${_discourseI18n.default.t("composer.details_title")}"]\nsome text in between\n[/details]\n\n After`, "it should contain the right output");
      assert.strictEqual(textarea.selectionStart, 29, "it should start highlighting at the right position");
      assert.strictEqual(textarea.selectionEnd, 49, "it should end highlighting at the right position");
    });
    (0, _qunit.test)("details button surrounds all selected text in a single details block", async function (assert) {
      const multilineInput = "first line\n\nsecond line\n\nthird line";
      const popupMenu = (0, _selectKitHelper.default)(".toolbar-popup-menu-options");
      await (0, _testHelpers.visit)("/");
      await (0, _testHelpers.click)("#create-topic");
      const categoryChooser = (0, _selectKitHelper.default)(".category-chooser");
      await categoryChooser.expand();
      await categoryChooser.selectRowByValue(2);
      await (0, _testHelpers.fillIn)(".d-editor-input", multilineInput);
      const textarea = (0, _qunitHelpers.query)(".d-editor-input");
      textarea.selectionStart = 0;
      textarea.selectionEnd = textarea.value.length;
      await popupMenu.expand();
      await popupMenu.selectRowByName(_discourseI18n.default.t("details.title"));
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `\n[details="${_discourseI18n.default.t("composer.details_title")}"]\n${multilineInput}\n[/details]\n`, "it should contain the right output");
    });
  });
});
define("discourse/plugins/discourse-details/lib/details-cooked-test", ["qunit", "discourse/lib/text"], function (_qunit, _text) {
  "use strict";

  const opts = {
    siteSettings: {
      enable_emoji: true,
      emoji_set: "twitter",
      highlighted_languages: "json|ruby|javascript",
      default_code_lang: "auto"
    },
    censoredWords: "shucks|whiz|whizzer",
    getURL: url => url
  };
  (0, _qunit.module)("lib:details-cooked-test", function () {
    (0, _qunit.test)("details", async function (assert) {
      const testCooked = async (input, expected, text) => {
        const cooked = (await (0, _text.cook)(input, opts)).toString();
        assert.strictEqual(cooked, expected, text);
      };
      await testCooked(`<details><summary>Info</summary>coucou</details>`, `<details><summary>Info</summary>coucou</details>`, "manual HTML for details");
      await testCooked("[details=testing]\ntest\n[/details]", `<details>
<summary>
testing</summary>
<p>test</p>
</details>`);
    });
  });
});//# sourceMappingURL=discourse-details_tests.map
