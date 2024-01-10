define("discourse/plugins/footnote/acceptance/footnote-test", ["@ember/test-helpers", "qunit", "discourse/tests/fixtures/topic", "discourse/tests/helpers/qunit-helpers", "discourse-common/lib/object"], function (_testHelpers, _qunit, _topic, _qunitHelpers, _object) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Discourse Foonote Plugin", function (needs) {
    needs.user();
    needs.settings({
      display_footnotes_inline: true
    });
    needs.pretender((server, helper) => {
      server.get("/t/45.json", () => {
        let topic = (0, _object.cloneJSON)(_topic.default["/t/28830/1.json"]);
        topic["post_stream"]["posts"][0]["cooked"] = `
        <p>Lorem ipsum dolor sit amet<sup class="footnote-ref"><a href="#footnote-17-1" id="footnote-ref-17-1">[1]</a></sup></p>
        <p class="second">Second reference should also work. <sup class="footnote-ref"><a href="#footnote-17-1" id="footnote-ref-17-0">[1]</a></sup></p>
        <hr class="footnotes-sep">
        <ol class="footnotes-list">
          <li id="footnote-17-1" class="footnote-item">
          <p>consectetur adipiscing elit <a href="#footnote-ref-17-1" class="footnote-backref">↩︎</a></p>
          </li>
        </ol>
      `;
        return helper.response(topic);
      });
    });
    (0, _qunit.test)("displays the foonote on click", async function (assert) {
      await (0, _testHelpers.visit)("/t/45");
      const tooltip = document.getElementById("footnote-tooltip");
      assert.ok((0, _qunitHelpers.exists)(tooltip));
      await (0, _testHelpers.click)(".expand-footnote");
      assert.equal(tooltip.querySelector(".footnote-tooltip-content").textContent.trim(), "consectetur adipiscing elit ↩︎");
    });
    (0, _qunit.test)("clicking a second footnote with same name works", async function (assert) {
      await (0, _testHelpers.visit)("/t/45");
      const tooltip = document.getElementById("footnote-tooltip");
      assert.ok((0, _qunitHelpers.exists)(tooltip));
      await (0, _testHelpers.click)(".second .expand-footnote");
      assert.equal(tooltip.querySelector(".footnote-tooltip-content").textContent.trim(), "consectetur adipiscing elit ↩︎");
    });
  });
});//# sourceMappingURL=footnote_tests.map
