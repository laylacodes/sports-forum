define("discourse/plugins/discourse-presence/acceptance/discourse-presence-test", ["@ember/test-helpers", "qunit", "discourse/models/user", "discourse/tests/helpers/presence-pretender", "discourse/tests/helpers/qunit-helpers", "discourse/tests/helpers/select-kit-helper"], function (_testHelpers, _qunit, _user, _presencePretender, _qunitHelpers, _selectKitHelper) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Discourse Presence Plugin", function (needs) {
    needs.user({
      whisperer: true
    });
    (0, _qunit.test)("Doesn't break topic creation", async function (assert) {
      await (0, _testHelpers.visit)("/");
      await (0, _testHelpers.click)("#create-topic");
      const categoryChooser = (0, _selectKitHelper.default)(".category-chooser");
      await categoryChooser.expand();
      await categoryChooser.selectRowByValue(2);
      await (0, _testHelpers.fillIn)("#reply-title", "Internationalization Localization");
      await (0, _testHelpers.fillIn)(".d-editor-input", "this is the *content* of a new topic post");
      await (0, _testHelpers.click)("#reply-control button.create");
      assert.strictEqual((0, _testHelpers.currentURL)(), "/t/internationalization-localization/280", "it transitions to the newly created topic URL");
    });
    (0, _qunit.test)("Publishes own reply presence", async function (assert) {
      await (0, _testHelpers.visit)("/t/internationalization-localization/280");
      await (0, _testHelpers.click)("#topic-footer-buttons .btn.create");
      assert.ok((0, _qunitHelpers.exists)(".d-editor-input"), "the composer input is visible");
      assert.deepEqual((0, _presencePretender.presentUserIds)("/discourse-presence/reply/280"), [], "does not publish presence for open composer");
      await (0, _testHelpers.fillIn)(".d-editor-input", "this is the content of my reply");
      assert.deepEqual((0, _presencePretender.presentUserIds)("/discourse-presence/reply/280"), [_user.default.current().id], "publishes presence when typing");
      await (0, _testHelpers.click)("#reply-control button.create");
      assert.deepEqual((0, _presencePretender.presentUserIds)("/discourse-presence/reply/280"), [], "leaves channel when composer closes");
    });
    (0, _qunit.test)("Uses whisper channel for whispers", async function (assert) {
      await (0, _testHelpers.visit)("/t/internationalization-localization/280");
      await (0, _testHelpers.click)("#topic-footer-buttons .btn.create");
      assert.ok((0, _qunitHelpers.exists)(".d-editor-input"), "the composer input is visible");
      await (0, _testHelpers.fillIn)(".d-editor-input", "this is the content of my reply");
      assert.deepEqual((0, _presencePretender.presentUserIds)("/discourse-presence/reply/280"), [_user.default.current().id], "publishes reply presence when typing");
      const menu = (0, _selectKitHelper.default)(".toolbar-popup-menu-options");
      await menu.expand();
      await menu.selectRowByValue("toggleWhisper");
      assert.strictEqual((0, _qunitHelpers.count)(".composer-actions svg.d-icon-far-eye-slash"), 1, "it sets the post type to whisper");
      assert.deepEqual((0, _presencePretender.presentUserIds)("/discourse-presence/reply/280"), [], "removes reply presence");
      assert.deepEqual((0, _presencePretender.presentUserIds)("/discourse-presence/whisper/280"), [_user.default.current().id], "adds whisper presence");
      await (0, _testHelpers.click)("#reply-control button.create");
      assert.deepEqual((0, _presencePretender.presentUserIds)("/discourse-presence/whisper/280"), [], "leaves whisper channel when composer closes");
    });
    (0, _qunit.test)("Uses the edit channel for editing", async function (assert) {
      await (0, _testHelpers.visit)("/t/internationalization-localization/280");
      await (0, _testHelpers.click)(".topic-post:nth-of-type(1) button.show-more-actions");
      await (0, _testHelpers.click)(".topic-post:nth-of-type(1) button.edit");
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, (0, _qunitHelpers.query)(".topic-post:nth-of-type(1) .cooked > p").innerText, "composer has contents of post to be edited");
      assert.deepEqual((0, _presencePretender.presentUserIds)("/discourse-presence/edit/398"), [], "is not present when composer first opened");
      await (0, _testHelpers.fillIn)(".d-editor-input", "some edited content");
      assert.deepEqual((0, _presencePretender.presentUserIds)("/discourse-presence/edit/398"), [_user.default.current().id], "becomes present in the edit channel");
      assert.deepEqual((0, _presencePretender.presentUserIds)("/discourse-presence/reply/280"), [], "is not made present in the reply channel");
      assert.deepEqual((0, _presencePretender.presentUserIds)("/discourse-presence/whisper/280"), [], "is not made present in the whisper channel");
    });
    (0, _qunit.test)("Displays replying and whispering presence at bottom of topic", async function (assert) {
      await (0, _testHelpers.visit)("/t/internationalization-localization/280");
      const avatarSelector = ".topic-above-footer-buttons-outlet.presence .presence-avatars .avatar";
      assert.ok((0, _qunitHelpers.exists)(".topic-above-footer-buttons-outlet.presence"), "includes the presence component");
      assert.strictEqual((0, _qunitHelpers.count)(avatarSelector), 0, "no avatars displayed");
      await (0, _presencePretender.joinChannel)("/discourse-presence/reply/280", {
        id: 123,
        avatar_template: "/images/avatar.png",
        username: "my-username"
      });
      assert.strictEqual((0, _qunitHelpers.count)(avatarSelector), 1, "avatar displayed");
      await (0, _presencePretender.joinChannel)("/discourse-presence/whisper/280", {
        id: 124,
        avatar_template: "/images/avatar.png",
        username: "my-username2"
      });
      assert.strictEqual((0, _qunitHelpers.count)(avatarSelector), 2, "whisper avatar displayed");
      await (0, _presencePretender.leaveChannel)("/discourse-presence/reply/280", {
        id: 123
      });
      assert.strictEqual((0, _qunitHelpers.count)(avatarSelector), 1, "reply avatar removed");
      await (0, _presencePretender.leaveChannel)("/discourse-presence/whisper/280", {
        id: 124
      });
      assert.strictEqual((0, _qunitHelpers.count)(avatarSelector), 0, "whisper avatar removed");
    });
    (0, _qunit.test)("Displays replying and whispering presence in composer", async function (assert) {
      await (0, _testHelpers.visit)("/t/internationalization-localization/280");
      await (0, _testHelpers.click)("#topic-footer-buttons .btn.create");
      assert.ok((0, _qunitHelpers.exists)(".d-editor-input"), "the composer input is visible");
      const avatarSelector = ".reply-to .presence-avatars .avatar";
      assert.strictEqual((0, _qunitHelpers.count)(avatarSelector), 0, "no avatars displayed");
      await (0, _presencePretender.joinChannel)("/discourse-presence/reply/280", {
        id: 123,
        avatar_template: "/images/avatar.png",
        username: "my-username"
      });
      assert.strictEqual((0, _qunitHelpers.count)(avatarSelector), 1, "avatar displayed");
      await (0, _presencePretender.joinChannel)("/discourse-presence/whisper/280", {
        id: 124,
        avatar_template: "/images/avatar.png",
        username: "my-username2"
      });
      assert.strictEqual((0, _qunitHelpers.count)(avatarSelector), 2, "whisper avatar displayed");
      await (0, _presencePretender.leaveChannel)("/discourse-presence/reply/280", {
        id: 123
      });
      assert.strictEqual((0, _qunitHelpers.count)(avatarSelector), 1, "reply avatar removed");
      await (0, _presencePretender.leaveChannel)("/discourse-presence/whisper/280", {
        id: 124
      });
      assert.strictEqual((0, _qunitHelpers.count)(avatarSelector), 0, "whisper avatar removed");
    });
  });
});//# sourceMappingURL=discourse-presence_tests.map
