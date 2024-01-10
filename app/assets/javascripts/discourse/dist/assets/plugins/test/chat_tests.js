define("discourse/plugins/chat/acceptance/chat-composer-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/helpers/chat-pretenders"], function (_testHelpers, _qunit, _qunitHelpers, _chatPretenders) {
  "use strict";

  const GROUP_NAME = "group1";
  (0, _qunitHelpers.acceptance)("Discourse Chat - Composer", function (needs) {
    needs.user({
      has_chat_enabled: true
    });
    needs.settings({
      chat_enabled: true,
      enable_rich_text_paste: true
    });
    needs.pretender((server, helper) => {
      (0, _chatPretenders.baseChatPretenders)(server, helper);
      (0, _chatPretenders.chatChannelPretender)(server, helper);
      server.get("/chat/:id/messages.json", () => helper.response({
        chat_messages: [],
        meta: {}
      }));
      server.get("/chat/emojis.json", () => helper.response({
        favorites: [{
          name: "grinning"
        }]
      }));
      server.post("/chat/drafts", () => {
        return helper.response([]);
      });
      server.get("/chat/api/mentions/groups.json", () => {
        return helper.response({
          unreachable: [GROUP_NAME],
          over_members_limit: [],
          invalid: []
        });
      });
    });
    needs.hooks.beforeEach(function () {
      Object.defineProperty(this, "chatService", {
        get: () => this.container.lookup("service:chat")
      });
    });
    (0, _qunit.skip)("when pasting html in composer", async function (assert) {
      await (0, _testHelpers.visit)("/chat/c/another-category/11");
      const clipboardEvent = new Event("paste", {
        bubbles: true
      });
      clipboardEvent.clipboardData = {
        types: ["text/html"],
        getData: type => {
          if (type === "text/html") {
            return "<a href>Foo</a>";
          }
        }
      };
      document.querySelector(".chat-composer__input").dispatchEvent(clipboardEvent);
      await (0, _testHelpers.settled)();
      assert.equal(document.querySelector(".chat-composer__input").value, "Foo");
    });
  });
  let sendAttempt = 0;
  (0, _qunitHelpers.acceptance)("Discourse Chat - Composer - unreliable network", function (needs) {
    needs.user({
      id: 1,
      has_chat_enabled: true
    });
    needs.settings({
      chat_enabled: true
    });
    needs.pretender((server, helper) => {
      (0, _chatPretenders.chatChannelPretender)(server, helper);
      server.get("/chat/:id/messages.json", () => helper.response({
        chat_messages: [],
        meta: {}
      }));
      server.post("/chat/drafts", () => helper.response(500, {}));
      server.post("/chat/:id.json", () => {
        sendAttempt += 1;
        return sendAttempt === 1 ? helper.response(500, {}) : helper.response({
          success: true
        });
      });
    });
    needs.hooks.beforeEach(function () {
      Object.defineProperty(this, "chatService", {
        get: () => this.container.lookup("service:chat")
      });
    });
    needs.hooks.afterEach(function () {
      sendAttempt = 0;
    });
    (0, _qunit.skip)("Sending a message with unreliable network", async function (assert) {
      await (0, _testHelpers.visit)("/chat/c/-/11");
      await (0, _testHelpers.fillIn)(".chat-composer__input", "network-error-message");
      await (0, _testHelpers.click)(".chat-composer-button.-send");
      assert.ok((0, _qunitHelpers.exists)(".chat-message-container[data-id='1'] .retry-staged-message-btn"), "it adds a retry button");
      await (0, _testHelpers.fillIn)(".chat-composer__input", "network-error-message");
      await (0, _testHelpers.click)(".chat-composer-button.-send");
      await (0, _qunitHelpers.publishToMessageBus)(`/chat/11`, {
        type: "sent",
        staged_id: 1,
        chat_message: {
          cooked: "network-error-message",
          id: 175,
          user: {
            id: 1
          }
        }
      });
      assert.notOk((0, _qunitHelpers.exists)(".chat-message-container[data-id='1'] .retry-staged-message-btn"), "it removes the staged message");
      assert.ok((0, _qunitHelpers.exists)(".chat-message-container[data-id='175']"), "it sends the message");
      assert.strictEqual((0, _qunitHelpers.query)(".chat-composer__input").value, "", "it clears the input");
    });
    (0, _qunit.skip)("Draft with unreliable network", async function (assert) {
      await (0, _testHelpers.visit)("/chat/c/-/11");
      this.chatService.set("isNetworkUnreliable", true);
      await (0, _testHelpers.settled)();
      assert.ok((0, _qunitHelpers.exists)(".chat-composer__unreliable-network"), "it displays a network error icon");
    });
  });
});
define("discourse/plugins/chat/acceptance/chat-live-pane-collapse-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers"], function (_testHelpers, _qunit, _qunitHelpers) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Discourse Chat - Chat live pane collapse", function (needs) {
    needs.user({
      username: "eviltrout",
      id: 1,
      can_chat: true,
      has_chat_enabled: true
    });
    needs.settings({
      chat_enabled: true
    });
    needs.pretender((server, helper) => {
      server.get("/chat/:chatChannelId/messages.json", () => helper.response({
        meta: {
          can_chat: true,
          user_silenced: false
        },
        chat_messages: [{
          id: 1,
          message: "https://www.youtube.com/watch?v=aOWkVdU4NH0",
          cooked: '<div class="youtube-onebox lazy-video-container" data-video-id="aOWkVdU4NH0" data-video-title="Picnic with my cat (shaved ice &amp; lemonade)" data-provider-name="youtube"> <a href="https://www.youtube.com/watch?v=aOWkVdU4NH0" target="_blank" rel="nofollow ugc noopener"> <img class="youtube-thumbnail" src="https://img.youtube.com/vi/aOWkVdU4NH0/maxresdefault.jpg" title="Picnic with my cat (shaved ice &amp; lemonade)"> </a> </div>',
          excerpt: '<a href="https://www.youtube.com/watch?v=aOWkVdU4NH0">[Picnic with my cat (shaved ice &amp; lemonade&hellip;</a>',
          created_at: "2021-07-20T08:14:16.950Z",
          flag_count: 0,
          user: {
            avatar_template: "/letter_avatar_proxy/v4/letter/t/a9a28c/{size}.png",
            id: 1,
            name: "Tomtom",
            username: "tomtom"
          }
        }, {
          id: 2,
          message: "",
          cooked: "",
          excerpt: "",
          uploads: [{
            id: 4,
            url: "/images/avatar.png",
            original_filename: "tomtom.jpeg",
            filesize: 93815,
            width: 480,
            height: 640,
            thumbnail_width: 375,
            thumbnail_height: 500,
            extension: "jpeg",
            retain_hours: null,
            human_filesize: "91.6 KB"
          }],
          user: {
            avatar_template: "/letter_avatar_proxy/v4/letter/t/a9a28c/{size}.png",
            id: 1,
            name: "Tomtom",
            username: "tomtom"
          }
        }]
      }));
      server.get("/chat/chat_channels.json", () => helper.response({
        public_channels: [],
        direct_message_channels: [],
        message_bus_last_ids: {
          channel_metadata: 0,
          channel_edits: 0,
          channel_status: 0,
          new_channel: 0,
          user_tracking_state: 0
        }
      }));
      server.get("/chat/chat_channels/:chatChannelId", () => helper.response({
        id: 1,
        title: "something"
      }));
      server.post("/uploads/lookup-urls", () => helper.response([200, {
        "Content-Type": "application/json"
      }, [{
        url: "/images/avatar.png"
      }]]));
    });
    (0, _qunit.skip)("can collapse and expand videos in chat", async function (assert) {
      const videoContainer = ".chat-message-container[data-id='1'] .lazy-video-container";
      const expandImage = ".chat-message-container[data-id='1'] .chat-message-collapser-closed";
      const collapseImage = ".chat-message-container[data-id='1'] .chat-message-collapser-opened";
      await (0, _testHelpers.visit)("/chat/c/cat/1");
      assert.ok((0, _qunitHelpers.visible)(videoContainer));
      assert.ok((0, _qunitHelpers.visible)(collapseImage), "the open arrow is shown");
      assert.notOk((0, _qunitHelpers.exists)(expandImage), "the close arrow is hidden");
      await (0, _testHelpers.click)(collapseImage);
      assert.notOk((0, _qunitHelpers.visible)(videoContainer));
      assert.ok((0, _qunitHelpers.visible)(expandImage), "the close arrow is shown");
      assert.notOk((0, _qunitHelpers.exists)(collapseImage), "the open arrow is hidden");
      await (0, _testHelpers.click)(expandImage);
      assert.ok((0, _qunitHelpers.visible)(videoContainer));
      assert.ok((0, _qunitHelpers.visible)(collapseImage), "the open arrow is shown again");
      assert.notOk((0, _qunitHelpers.exists)(expandImage), "the close arrow is hidden again");
    });
    (0, _qunit.skip)("lightbox shows up before and after expand and collapse", async function (assert) {
      const lightboxImage = ".mfp-img";
      const image = ".chat-message-container[data-id='2'] .chat-img-upload";
      const expandImage = ".chat-message-container[data-id='2'] .chat-message-collapser-closed";
      const collapseImage = ".chat-message-container[data-id='2'] .chat-message-collapser-opened";
      await (0, _testHelpers.visit)("/chat/c/cat/1");
      await (0, _testHelpers.click)(image);
      assert.ok((0, _qunitHelpers.exists)(document.querySelector(lightboxImage)), "can see lightbox");
      await (0, _testHelpers.click)(document.querySelector(".mfp-container"));
      await (0, _testHelpers.click)(collapseImage);
      await (0, _testHelpers.click)(expandImage);
      await (0, _testHelpers.click)(image);
      assert.ok((0, _qunitHelpers.exists)(document.querySelector(lightboxImage)), "can see lightbox after collapse expand");
      await (0, _testHelpers.click)(document.querySelector(".mfp-container"));
    });
  });
});
define("discourse/plugins/chat/acceptance/chat-live-pane-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers"], function (_testHelpers, _qunit, _qunitHelpers) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Discourse Chat - Chat live pane - handling 429 errors", function (needs) {
    needs.user({
      username: "eviltrout",
      id: 1,
      has_chat_enabled: true
    });
    needs.settings({
      chat_enabled: true,
      navigation_menu: "legacy"
    });
    needs.pretender((server, helper) => {
      server.get("/chat/:chatChannelId/messages.json", () => {
        return helper.response(429);
      });
      server.get("/chat/chat_channels.json", () => helper.response({
        public_channels: [{
          id: 1,
          title: "something",
          current_user_membership: {
            following: true
          },
          message_bus_last_ids: {
            new_mentions: 0,
            new_messages: 0
          }
        }],
        direct_message_channels: [],
        message_bus_last_ids: {
          channel_metadata: 0,
          channel_edits: 0,
          channel_status: 0,
          new_channel: 0,
          user_tracking_state: 0
        }
      }));
      server.get("/chat/chat_channels/:chatChannelId", () => helper.response({
        id: 1,
        title: "something"
      }));
      server.post("/chat/drafts", () => {
        return helper.response([]);
      });
      server.post("/chat/:chatChannelId.json", () => {
        return helper.response({
          success: "OK"
        });
      });
    });
    (0, _qunit.skip)("Handles 429 errors by displaying an alert", async function (assert) {
      await (0, _testHelpers.visit)("/chat/c/cat/1");
      assert.ok((0, _qunitHelpers.exists)(".dialog-content"), "We displayed a 429 error");
      await (0, _testHelpers.click)(".dialog-footer .btn-primary");
    });
  });
});
define("discourse/plugins/chat/acceptance/hashtag-css-generator-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers"], function (_testHelpers, _qunit, _qunitHelpers) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Chat | Hashtag CSS Generator", function (needs) {
    const category1 = {
      id: 1,
      color: "ff0000",
      name: "category1"
    };
    const category2 = {
      id: 2,
      color: "333",
      name: "category2"
    };
    const category3 = {
      id: 4,
      color: "2B81AF",
      parentCategory: {
        id: 1
      },
      name: "category3"
    };
    needs.settings({
      chat_enabled: true
    });
    needs.user({
      has_chat_enabled: true,
      chat_channels: {
        public_channels: [{
          id: 44,
          chatable_id: 1,
          chatable_type: "Category",
          meta: {
            message_bus_last_ids: {}
          },
          current_user_membership: {
            following: true
          },
          chatable: category1
        }, {
          id: 74,
          chatable_id: 2,
          chatable_type: "Category",
          meta: {
            message_bus_last_ids: {}
          },
          current_user_membership: {
            following: true
          },
          chatable: category2
        }, {
          id: 88,
          chatable_id: 4,
          chatable_type: "Category",
          meta: {
            message_bus_last_ids: {}
          },
          current_user_membership: {
            following: true
          },
          chatable: category3
        }],
        direct_message_channels: [],
        meta: {
          message_bus_last_ids: {}
        },
        tracking: {
          channel_tracking: {
            44: {
              unread_count: 0,
              mention_count: 0
            },
            74: {
              unread_count: 0,
              mention_count: 0
            },
            88: {
              unread_count: 0,
              mention_count: 0
            }
          },
          thread_tracking: {}
        }
      }
    });
    needs.site({
      categories: [category1, category2, category3]
    });
    (0, _qunit.test)("hashtag CSS classes are generated", async function (assert) {
      await (0, _testHelpers.visit)("/");
      const cssTag = document.querySelector("style#hashtag-css-generator");
      assert.equal(cssTag.innerHTML, ".hashtag-color--category-1 {\n  background: linear-gradient(-90deg, var(--category-1-color) 50%, var(--category-1-color) 50%);\n}\n.hashtag-color--category-2 {\n  background: linear-gradient(-90deg, var(--category-2-color) 50%, var(--category-2-color) 50%);\n}\n.hashtag-color--category-4 {\n  background: linear-gradient(-90deg, var(--category-4-color) 50%, var(--category-1-color) 50%);\n}\n.d-icon.hashtag-color--channel-44 { color: var(--category-1-color); }\n.d-icon.hashtag-color--channel-74 { color: var(--category-2-color); }\n.d-icon.hashtag-color--channel-88 { color: var(--category-4-color); }");
    });
  });
});
define("discourse/plugins/chat/acceptance/mentions-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/create-pretender", "discourse/tests/helpers/qunit-helpers"], function (_testHelpers, _qunit, _createPretender, _qunitHelpers) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Chat | Mentions", function (needs) {
    const channelId = 1;
    const actingUser = {
      id: 1,
      username: "acting_user"
    };
    const channel = {
      id: channelId,
      chatable_id: 1,
      chatable_type: "Category",
      meta: {
        message_bus_last_ids: {},
        can_delete_self: true
      },
      current_user_membership: {
        following: true
      },
      allow_channel_wide_mentions: false,
      chatable: {
        id: 1
      },
      title: "Some title"
    };
    needs.settings({
      chat_enabled: true
    });
    needs.user({
      ...actingUser,
      has_chat_enabled: true,
      chat_channels: {
        public_channels: [channel],
        direct_message_channels: [],
        meta: {
          message_bus_last_ids: {}
        },
        tracking: {}
      }
    });
    needs.hooks.beforeEach(function () {
      _createPretender.default.post(`/chat/drafts`, () => (0, _createPretender.response)({}));
      _createPretender.default.get(`/chat/api/channels/${channelId}/messages`, () => (0, _createPretender.response)({
        messages: [],
        meta: {
          can_load_more_future: false
        }
      }));
      _createPretender.default.get("/chat/api/mentions/groups.json", () => (0, _createPretender.response)({
        unreachable: [],
        over_members_limit: [],
        invalid: ["and"]
      }));
    });
    (0, _qunit.test)("shows warning when mention limit exceeded", async function (assert) {
      this.siteSettings.max_mentions_per_chat_message = 2;
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await (0, _testHelpers.fillIn)(".chat-composer__input", `Hey @user1 @user2 @user3`);
      assert.dom(".chat-mention-warnings").exists();
    });
    (0, _qunit.test)("shows warning for @here mentions when channel-wide mentions are disabled", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await (0, _testHelpers.fillIn)(".chat-composer__input", `Hey @here`);
      assert.dom(".chat-mention-warnings").exists();
    });
    (0, _qunit.test)("shows warning for @all mention when channel-wide mentions are disabled", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await (0, _testHelpers.fillIn)(".chat-composer__input", `Hey @all`);
      assert.dom(".chat-mention-warnings").exists();
    });
    (0, _qunit.test)("ignores duplicates when counting mentions", async function (assert) {
      this.siteSettings.max_mentions_per_chat_message = 2;
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      const mention = `@user1`;
      await (0, _testHelpers.fillIn)(".chat-composer__input", `Hey ${mention} ${mention} ${mention}`);
      assert.dom(".chat-mention-warnings").doesNotExist();
    });
    (0, _qunit.test)("doesn't consider code-blocks when counting mentions", async function (assert) {
      this.siteSettings.max_mentions_per_chat_message = 2;
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      // since @bar is inside a code-block it shouldn't be considered a mention
      const message = `Hey @user1 @user2
    \`\`\`
      def foo
        @bar = true
      end
    \`\`\`
    `;
      await (0, _testHelpers.fillIn)(".chat-composer__input", message);
      assert.dom(".chat-mention-warnings").doesNotExist();
    });
  });
});
define("discourse/plugins/chat/acceptance/user-status-on-mentions-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/create-pretender", "discourse/tests/helpers/qunit-helpers"], function (_testHelpers, _qunit, _createPretender, _qunitHelpers) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Chat | User status on mentions", function (needs) {
    const channelId = 1;
    const messageId = 1;
    const actingUser = {
      id: 1,
      username: "acting_user"
    };
    const mentionedUser1 = {
      id: 1000,
      username: "user1",
      status: {
        description: "surfing",
        emoji: "surfing_man"
      }
    };
    const mentionedUser2 = {
      id: 2000,
      username: "user2",
      status: {
        description: "vacation",
        emoji: "desert_island"
      }
    };
    const mentionedUser3 = {
      id: 3000,
      username: "user3",
      status: {
        description: "off to dentist",
        emoji: "tooth"
      }
    };
    const message = {
      id: messageId,
      message: `Hey @${mentionedUser1.username}`,
      cooked: `<p>Hey <a class="mention" href="/u/${mentionedUser1.username}">@${mentionedUser1.username}</a></p>`,
      mentioned_users: [mentionedUser1],
      user: actingUser,
      created_at: "2020-08-04T15:00:00.000Z"
    };
    const newStatus = {
      description: "working remotely",
      emoji: "house"
    };
    const channel = {
      id: channelId,
      chatable_id: 1,
      chatable_type: "Category",
      title: "A category channel",
      meta: {
        message_bus_last_ids: {},
        can_delete_self: true
      },
      current_user_membership: {
        following: true
      },
      chatable: {
        id: 1
      }
    };
    needs.settings({
      chat_enabled: true
    });
    needs.user({
      ...actingUser,
      has_chat_enabled: true,
      chat_channels: {
        public_channels: [channel],
        direct_message_channels: [],
        meta: {
          message_bus_last_ids: {}
        },
        tracking: {}
      }
    });
    needs.hooks.beforeEach(function () {
      _createPretender.default.post(`/chat/1`, () => (0, _createPretender.response)({}));
      _createPretender.default.put(`/chat/1/edit/${messageId}`, () => (0, _createPretender.response)({}));
      _createPretender.default.post(`/chat/drafts`, () => (0, _createPretender.response)({}));
      _createPretender.default.put(`/chat/api/channels/1/read/1`, () => (0, _createPretender.response)({}));
      _createPretender.default.get(`/chat/api/channels/1/messages`, () => (0, _createPretender.response)({
        messages: [message],
        meta: {
          can_load_more_future: false
        }
      }));
      _createPretender.default.delete(`/chat/api/channels/1/messages/${messageId}`, () => (0, _createPretender.response)({}));
      _createPretender.default.put(`/chat/api/channels/1/messages/${messageId}/restore`, () => (0, _createPretender.response)({}));
      _createPretender.default.get("/u/search/users", () => (0, _createPretender.response)({
        users: [mentionedUser2, mentionedUser3]
      }));
      _createPretender.default.get("/chat/api/mentions/groups.json", () => (0, _createPretender.response)({
        unreachable: [],
        over_members_limit: [],
        invalid: ["and"]
      }));
    });
    (0, _qunit.skip)("just posted messages | it shows status on mentions ", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await typeWithAutocompleteAndSend(`mentioning @${mentionedUser2.username}`);
      assertStatusIsRendered(assert, statusSelector(mentionedUser2.username), mentionedUser2.status);
    });
    (0, _qunit.skip)("just posted messages | it updates status on mentions", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await typeWithAutocompleteAndSend(`mentioning @${mentionedUser2.username}`);
      (0, _qunitHelpers.loggedInUser)().appEvents.trigger("user-status:changed", {
        [mentionedUser2.id]: newStatus
      });
      const selector = statusSelector(mentionedUser2.username);
      await (0, _testHelpers.waitFor)(selector);
      assertStatusIsRendered(assert, selector, newStatus);
    });
    (0, _qunit.skip)("just posted messages | it deletes status on mentions", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await typeWithAutocompleteAndSend(`mentioning @${mentionedUser2.username}`);
      (0, _qunitHelpers.loggedInUser)().appEvents.trigger("user-status:changed", {
        [mentionedUser2.id]: null
      });
      const selector = statusSelector(mentionedUser2.username);
      await (0, _testHelpers.waitFor)(selector, {
        count: 0
      });
      assert.dom(selector).doesNotExist("status is deleted");
    });
    (0, _qunit.skip)("edited messages | it shows status on mentions", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await editMessage(".chat-message-content", `mentioning @${mentionedUser3.username}`);
      assertStatusIsRendered(assert, statusSelector(mentionedUser3.username), mentionedUser3.status);
    });
    (0, _qunit.skip)("edited messages | it updates status on mentions", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await editMessage(".chat-message-content", `mentioning @${mentionedUser3.username}`);
      (0, _qunitHelpers.loggedInUser)().appEvents.trigger("user-status:changed", {
        [mentionedUser3.id]: newStatus
      });
      const selector = statusSelector(mentionedUser3.username);
      await (0, _testHelpers.waitFor)(selector);
      assertStatusIsRendered(assert, selector, newStatus);
    });
    (0, _qunit.skip)("edited messages | it deletes status on mentions", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await editMessage(".chat-message-content", `mentioning @${mentionedUser3.username}`);
      (0, _qunitHelpers.loggedInUser)().appEvents.trigger("user-status:changed", {
        [mentionedUser3.id]: null
      });
      const selector = statusSelector(mentionedUser3.username);
      await (0, _testHelpers.waitFor)(selector, {
        count: 0
      });
      assert.dom(selector).doesNotExist("status is deleted");
    });
    (0, _qunit.test)("deleted messages | it shows status on mentions", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await deleteMessage(".chat-message-content");
      await (0, _testHelpers.click)(".chat-message-expand");
      assertStatusIsRendered(assert, statusSelector(mentionedUser1.username), mentionedUser1.status);
    });
    (0, _qunit.test)("deleted messages | it updates status on mentions", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await deleteMessage(".chat-message-content");
      await (0, _testHelpers.click)(".chat-message-expand");
      (0, _qunitHelpers.loggedInUser)().appEvents.trigger("user-status:changed", {
        [mentionedUser1.id]: newStatus
      });
      const selector = statusSelector(mentionedUser1.username);
      await (0, _testHelpers.waitFor)(selector);
      assertStatusIsRendered(assert, selector, newStatus);
    });
    (0, _qunit.test)("deleted messages | it deletes status on mentions", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await deleteMessage(".chat-message-content");
      await (0, _testHelpers.click)(".chat-message-expand");
      (0, _qunitHelpers.loggedInUser)().appEvents.trigger("user-status:changed", {
        [mentionedUser1.id]: null
      });
      const selector = statusSelector(mentionedUser1.username);
      await (0, _testHelpers.waitFor)(selector, {
        count: 0
      });
      assert.dom(selector).doesNotExist("status is deleted");
    });
    (0, _qunit.test)("restored messages | it shows status on mentions", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await deleteMessage(".chat-message-content");
      await restoreMessage(".chat-message-text.-deleted");
      assertStatusIsRendered(assert, statusSelector(mentionedUser1.username), mentionedUser1.status);
    });
    (0, _qunit.test)("restored messages | it updates status on mentions", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await deleteMessage(".chat-message-content");
      await restoreMessage(".chat-message-text.-deleted");
      (0, _qunitHelpers.loggedInUser)().appEvents.trigger("user-status:changed", {
        [mentionedUser1.id]: newStatus
      });
      const selector = statusSelector(mentionedUser1.username);
      await (0, _testHelpers.waitFor)(selector);
      assertStatusIsRendered(assert, selector, newStatus);
    });
    (0, _qunit.test)("restored messages | it deletes status on mentions", async function (assert) {
      await (0, _testHelpers.visit)(`/chat/c/-/${channelId}`);
      await deleteMessage(".chat-message-content");
      await restoreMessage(".chat-message-text.-deleted");
      (0, _qunitHelpers.loggedInUser)().appEvents.trigger("user-status:changed", {
        [mentionedUser1.id]: null
      });
      const selector = statusSelector(mentionedUser1.username);
      await (0, _testHelpers.waitFor)(selector, {
        count: 0
      });
      assert.dom(selector).doesNotExist("status is deleted");
    });
    function assertStatusIsRendered(assert, selector, status) {
      assert.dom(selector).exists("status is rendered").hasAttribute("src", new RegExp(`${status.emoji}.png`), "status emoji is updated");
    }
    async function deleteMessage(messageSelector) {
      await (0, _testHelpers.triggerEvent)((0, _qunitHelpers.query)(messageSelector), "mouseenter");
      await (0, _testHelpers.click)(".more-buttons .select-kit-header-wrapper");
      await (0, _testHelpers.click)(".select-kit-collection .select-kit-row[data-value='delete']");
      await (0, _qunitHelpers.publishToMessageBus)(`/chat/${channelId}`, {
        type: "delete",
        deleted_id: messageId,
        deleted_at: "2022-01-01T08:00:00.000Z"
      });
    }
    async function editMessage(messageSelector, text) {
      await (0, _testHelpers.triggerEvent)((0, _qunitHelpers.query)(messageSelector), "mouseenter");
      await (0, _testHelpers.click)(".more-buttons .select-kit-header-wrapper");
      await (0, _testHelpers.click)(".select-kit-collection .select-kit-row[data-value='edit']");
      await typeWithAutocompleteAndSend(text);
    }
    async function restoreMessage(messageSelector) {
      await (0, _testHelpers.triggerEvent)((0, _qunitHelpers.query)(messageSelector), "mouseenter");
      await (0, _testHelpers.click)(".more-buttons .select-kit-header-wrapper");
      await (0, _testHelpers.click)(".select-kit-collection .select-kit-row[data-value='restore']");
      await (0, _qunitHelpers.publishToMessageBus)(`/chat/${channelId}`, {
        type: "restore",
        chat_message: message
      });
    }
    async function typeWithAutocompleteAndSend(text) {
      await (0, _qunitHelpers.emulateAutocomplete)(".chat-composer__input", text);
      await (0, _testHelpers.click)(".autocomplete.ac-user .selected");
      await (0, _testHelpers.click)(".chat-composer-button.-send");
    }
    function statusSelector(username) {
      return `.mention[href='/u/${username}'] .user-status-message img`;
    }
  });
});
define("discourse/plugins/chat/chat-fixtures", ["exports", "discourse-common/lib/object"], function (_exports, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.directMessageChannels = _exports.chatChannels = void 0;
  _exports.generateChatView = generateChatView;
  _exports.messageContents = void 0;
  const messageContents = _exports.messageContents = ["Hello world", "What up", "heyo!"];
  const directMessageChannels = _exports.directMessageChannels = [{
    chat_channel: {
      chatable: {
        users: [{
          id: 1,
          username: "markvanlan",
          avatar_template: "/letter_avatar_proxy/v4/letter/t/f9ae1b/{size}.png"
        }, {
          id: 2,
          username: "hawk",
          avatar_template: "/letter_avatar_proxy/v4/letter/t/f9ae1b/{size}.png"
        }]
      },
      chatable_id: 58,
      chatable_type: "DirectMessage",
      chatable_url: null,
      id: 75,
      title: "@hawk",
      current_user_membership: {
        muted: false,
        following: true
      },
      allow_channel_wide_mentions: true,
      last_message: {
        id: 333,
        created_at: "2021-07-02T08:14:16.950Z"
      },
      message_bus_last_ids: {
        new_mentions: 0,
        new_messages: 0
      }
    }
  }, {
    chat_channel: {
      chatable: {
        users: [{
          id: 1,
          username: "markvanlan",
          avatar_template: "/letter_avatar_proxy/v4/letter/t/f9ae1b/{size}.png"
        }, {
          id: 3,
          username: "eviltrout",
          avatar_template: "/letter_avatar_proxy/v4/letter/t/f9ae1b/{size}.png"
        }]
      },
      chatable_id: 59,
      chatable_type: "DirectMessage",
      chatable_url: null,
      id: 76,
      title: "@eviltrout, @markvanlan",
      current_user_membership: {
        muted: false,
        following: true
      },
      allow_channel_wide_mentions: true,
      last_message: {
        id: 333,
        created_at: "2021-07-02T08:14:16.950Z"
      },
      message_bus_last_ids: {
        new_mentions: 0,
        new_messages: 0
      }
    }
  }];
  const chatables = {
    1: {
      id: 1,
      name: "Bug",
      color: "0088CC",
      text_color: "FFFFFF",
      slug: "bug"
    },
    8: {
      id: 8,
      name: "Public category",
      slug: "public-category",
      posts_count: 1
    },
    12: {
      id: 12,
      name: "Another category",
      slug: "another-category",
      posts_count: 100
    }
  };
  const chatChannels = _exports.chatChannels = {
    public_channels: [{
      id: 9,
      chatable_id: 1,
      chatable_type: "Category",
      chatable_url: "/c/bug/1",
      title: "Site",
      status: "open",
      chatable: chatables[1],
      allow_channel_wide_mentions: true,
      last_message: {
        id: 333,
        created_at: "2021-07-02T08:14:16.950Z"
      },
      current_user_membership: {
        muted: false,
        following: true
      },
      message_bus_last_ids: {
        new_mentions: 0,
        new_messages: 0
      }
    }, {
      id: 7,
      chatable_id: 1,
      chatable_type: "Category",
      chatable_url: "/c/bug/1",
      title: "Bug",
      status: "open",
      chatable: chatables[1],
      allow_channel_wide_mentions: true,
      last_message: {
        id: 333,
        created_at: "2021-07-02T08:14:16.950Z"
      },
      current_user_membership: {
        muted: false,
        following: true
      },
      message_bus_last_ids: {
        new_mentions: 0,
        new_messages: 0
      }
    }, {
      id: 4,
      chatable_id: 8,
      chatable_type: "Category",
      chatable_url: "/c/public-category/8",
      title: "Public category",
      status: "open",
      chatable: chatables[8],
      allow_channel_wide_mentions: true,
      last_message: {
        id: 333,
        created_at: "2021-07-02T08:14:16.950Z"
      },
      current_user_membership: {
        muted: false,
        following: true
      },
      message_bus_last_ids: {
        new_mentions: 0,
        new_messages: 0
      }
    }, {
      id: 5,
      chatable_id: 8,
      chatable_type: "Category",
      chatable_url: "/c/public-category/8",
      title: "Public category (read-only)",
      status: "read_only",
      chatable: chatables[8],
      allow_channel_wide_mentions: true,
      last_message: {
        id: 333,
        created_at: "2021-07-02T08:14:16.950Z"
      },
      current_user_membership: {
        muted: false,
        following: true
      },
      message_bus_last_ids: {
        new_mentions: 0,
        new_messages: 0
      }
    }, {
      id: 6,
      chatable_id: 8,
      chatable_type: "Category",
      chatable_url: "/c/public-category/8",
      title: "Public category (closed)",
      status: "closed",
      chatable: chatables[8],
      allow_channel_wide_mentions: true,
      last_message: {
        id: 333,
        created_at: "2021-07-02T08:14:16.950Z"
      },
      current_user_membership: {
        muted: false,
        following: true
      },
      message_bus_last_ids: {
        new_mentions: 0,
        new_messages: 0
      }
    }, {
      id: 10,
      chatable_id: 8,
      chatable_type: "Category",
      chatable_url: "/c/public-category/8",
      title: "Public category (archived)",
      status: "archived",
      chatable: chatables[8],
      allow_channel_wide_mentions: true,
      last_message: {
        id: 333,
        created_at: "2021-07-02T08:14:16.950Z"
      },
      current_user_membership: {
        muted: false,
        following: true
      },
      message_bus_last_ids: {
        new_mentions: 0,
        new_messages: 0
      }
    }, {
      id: 11,
      chatable_id: 12,
      chatable_type: "Category",
      chatable_url: "/c/another-category/12",
      title: "Another Category",
      status: "open",
      chatable: chatables[12],
      allow_channel_wide_mentions: true,
      last_message: {
        id: 333,
        created_at: "2021-07-02T08:14:16.950Z"
      },
      current_user_membership: {
        muted: false,
        following: true
      },
      message_bus_last_ids: {
        new_mentions: 0,
        new_messages: 0
      }
    }],
    tracking: {
      channel_tracking: {
        4: {
          unread_count: 0,
          mention_count: 0
        },
        5: {
          unread_count: 0,
          mention_count: 0
        },
        6: {
          unread_count: 0,
          mention_count: 0
        },
        7: {
          unread_count: 0,
          mention_count: 0
        },
        9: {
          unread_count: 0,
          mention_count: 0
        },
        10: {
          unread_count: 0,
          mention_count: 0
        },
        11: {
          unread_count: 0,
          mention_count: 0
        },
        75: {
          unread_count: 0,
          mention_count: 0
        },
        76: {
          unread_count: 0,
          mention_count: 0
        }
      },
      thread_tracking: {}
    },
    direct_message_channels: directMessageChannels.mapBy("chat_channel"),
    message_bus_last_ids: {
      channel_metadata: 0,
      channel_edits: 0,
      channel_status: 0,
      new_channel: 0,
      user_tracking_state: 0
    }
  };
  const message0 = {
    id: 174,
    message: messageContents[0],
    cooked: messageContents[0],
    excerpt: messageContents[0],
    created_at: "2021-07-20T08:14:16.950Z",
    flag_count: 0,
    user: {
      id: 1,
      username: "markvanlan",
      name: null,
      avatar_template: "/letter_avatar_proxy/v4/letter/m/48db29/{size}.png"
    },
    available_flags: ["spam"]
  };
  const message1 = {
    id: 175,
    message: messageContents[1],
    cooked: messageContents[1],
    excerpt: messageContents[1],
    created_at: "2021-07-20T08:14:22.043Z",
    flag_count: 0,
    user: {
      id: 2,
      username: "hawk",
      name: null,
      avatar_template: "/letter_avatar_proxy/v4/letter/m/48db29/{size}.png"
    },
    in_reply_to: message0,
    uploads: [{
      extension: "pdf",
      filesize: 861550,
      height: null,
      human_filesize: "841 KB",
      id: 38,
      original_filename: "Chat message PDF!",
      retain_hours: null,
      short_path: "/uploads/short-url/vYozObYao54I6G3x8wvOf73epfX.pdf",
      short_url: "upload://vYozObYao54I6G3x8wvOf73epfX.pdf",
      thumbnail_height: null,
      thumbnail_width: null,
      url: "/images/avatar.png",
      width: null
    }],
    available_flags: ["spam"]
  };
  const message2 = {
    id: 176,
    message: messageContents[2],
    cooked: messageContents[2],
    excerpt: messageContents[2],
    created_at: "2021-07-20T08:14:25.043Z",
    flag_count: 0,
    user: {
      id: 2,
      username: "hawk",
      name: null,
      avatar_template: "/letter_avatar_proxy/v4/letter/m/48db29/{size}.png"
    },
    in_reply_to: message0,
    uploads: [{
      extension: "png",
      filesize: 50419,
      height: 393,
      human_filesize: "49.2 KB",
      id: 37,
      original_filename: "image.png",
      retain_hours: null,
      short_path: "/uploads/short-url/2LbadI7uOM7JsXyVoc12dHUjJYo.png",
      short_url: "upload://2LbadI7uOM7JsXyVoc12dHUjJYo.png",
      thumbnail_height: 224,
      thumbnail_width: 689,
      url: "/images/avatar.png",
      width: 1209
    }],
    reactions: {
      heart: {
        count: 1,
        reacted: false,
        users: [{
          id: 99,
          username: "im-penar"
        }]
      },
      kiwi_fruit: {
        count: 2,
        reacted: true,
        users: [{
          id: 99,
          username: "im-penar"
        }]
      },
      tada: {
        count: 1,
        reacted: true,
        users: []
      }
    },
    available_flags: ["spam"]
  };
  const message3 = {
    id: 177,
    message: "gg @osama @mark @here",
    cooked: '<p>gg <a class="mention" href="/u/osama">@osama</a> <a class="mention" href="/u/mark">@mark</a> <a class="mention" href="/u/here">@here</a></p>',
    excerpt: '<p>gg <a class="mention" href="/u/osama">@osama</a> <a class="mention" href="/u/mark">@mark</a> <a class="mention" href="/u/here">@here</a></p>',
    created_at: "2021-07-22T08:14:16.950Z",
    flag_count: 0,
    user: {
      id: 1,
      username: "markvanlan",
      name: null,
      avatar_template: "/letter_avatar_proxy/v4/letter/m/48db29/{size}.png"
    },
    available_flags: ["spam"]
  };
  function generateChatView(loggedInUser, metaOverrides = {}) {
    const metaDefaults = {
      can_flag: true,
      user_silenced: false,
      can_moderate: loggedInUser.staff,
      can_delete_self: true,
      can_delete_others: loggedInUser.staff
    };
    return {
      meta: (0, _object.deepMerge)(metaDefaults, metaOverrides),
      chat_messages: [message0, message1, message2, message3]
    };
  }
});
define("discourse/plugins/chat/components/channel-title-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "discourse/plugins/chat/discourse/models/chat-channel", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _fabricators, _chatChannel, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | <ChannelTitle />", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("category channel", async function (assert) {
      this.channel = _fabricators.default.channel();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChannelTitle @channel={{this.channel}} />
      */
      {
        "id": "PzL+OUb2",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"channel-title\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/channel-title-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-channel-title__category-badge").getAttribute("style"), `color: #${this.channel.chatable.color}`);
      assert.strictEqual((0, _qunitHelpers.query)(".chat-channel-title__name").innerText, this.channel.title);
    });
    (0, _qunit.test)("category channel - escapes title", async function (assert) {
      this.channel = _fabricators.default.channel({
        chatable_type: _chatChannel.CHATABLE_TYPES.categoryChannel,
        title: "<div class='xss'>evil</div>"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChannelTitle @channel={{this.channel}} />
      */
      {
        "id": "PzL+OUb2",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"channel-title\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/channel-title-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.exists)(".xss"));
    });
    (0, _qunit.test)("category channel - read restricted", async function (assert) {
      this.channel = _fabricators.default.channel({
        chatable: _fabricators.default.category({
          read_restricted: true
        })
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChannelTitle @channel={{this.channel}} />
      */
      {
        "id": "PzL+OUb2",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"channel-title\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/channel-title-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".d-icon-lock"));
    });
    (0, _qunit.test)("category channel - not read restricted", async function (assert) {
      this.channel = _fabricators.default.channel({
        chatable: _fabricators.default.category({
          read_restricted: false
        })
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChannelTitle @channel={{this.channel}} />
      */
      {
        "id": "PzL+OUb2",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"channel-title\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/channel-title-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.exists)(".d-icon-lock"));
    });
    (0, _qunit.test)("direct message channel - one user", async function (assert) {
      this.channel = _fabricators.default.directMessageChannel({
        chatable: _fabricators.default.directMessage({
          users: [_fabricators.default.user()]
        })
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChannelTitle @channel={{this.channel}} />
      */
      {
        "id": "PzL+OUb2",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"channel-title\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/channel-title-test.js",
        "isStrictMode": false
      }));
      const user = this.channel.chatable.users[0];
      assert.true((0, _qunitHelpers.exists)(`.chat-user-avatar .avatar[title="${user.username}"]`));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-channel-title__name").innerText.trim(), user.username);
    });
    (0, _qunit.test)("direct message channel - multiple users", async function (assert) {
      this.channel = _fabricators.default.directMessageChannel({
        users: [_fabricators.default.user(), _fabricators.default.user(), _fabricators.default.user()]
      });
      this.channel.chatable.group = true;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChannelTitle @channel={{this.channel}} />
      */
      {
        "id": "PzL+OUb2",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"channel-title\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/channel-title-test.js",
        "isStrictMode": false
      }));
      const users = this.channel.chatable.users;
      assert.strictEqual(parseInt((0, _qunitHelpers.query)(".chat-channel-title__users-count").innerText.trim(), 10), users.length);
      assert.strictEqual((0, _qunitHelpers.query)(".chat-channel-title__name").innerText.trim(), users.mapBy("username").join(", "));
    });
  });
});
define("discourse/plugins/chat/components/chat-channel-card-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse-i18n", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _discourseI18n, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-channel-card", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.channel = _fabricators.default.channel();
      this.channel.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    });
    (0, _qunit.test)("escapes channel title", async function (assert) {
      this.channel.title = "<div class='xss'>evil</div>";
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.exists)(".xss"));
    });
    (0, _qunit.test)("escapes channel description", async function (assert) {
      this.channel.description = "<div class='xss'>evil</div>";
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.exists)(".xss"));
    });
    (0, _qunit.test)("Closed channel", async function (assert) {
      this.channel.status = "closed";
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".chat-channel-card.-closed"));
    });
    (0, _qunit.test)("Archived channel", async function (assert) {
      this.channel.status = "archived";
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".chat-channel-card.-archived"));
    });
    (0, _qunit.test)("Muted channel", async function (assert) {
      this.channel.currentUserMembership.muted = true;
      this.channel.currentUserMembership.following = true;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-channel-card__tag.-muted").textContent.trim(), _discourseI18n.default.t("chat.muted"));
    });
    (0, _qunit.test)("Joined channel", async function (assert) {
      this.channel.currentUserMembership.following = true;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-channel-card__tag.-joined").textContent.trim(), _discourseI18n.default.t("chat.joined"));
      assert.true((0, _qunitHelpers.exists)(".toggle-channel-membership-button.-leave"));
    });
    (0, _qunit.test)("Joinable channel", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".chat-channel-card__join-btn"));
    });
    (0, _qunit.test)("Memberships count", async function (assert) {
      this.channel.membershipsCount = 4;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-channel-card__members").textContent.trim(), _discourseI18n.default.t("chat.channel.memberships_count", {
        count: 4
      }));
    });
    (0, _qunit.test)("No description", async function (assert) {
      this.channel.description = null;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.exists)(".chat-channel-card__description"));
    });
    (0, _qunit.test)("Description", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-channel-card__description").textContent.trim(), this.channel.description);
    });
    (0, _qunit.test)("Name", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-channel-card__name").innerText.trim(), this.channel.title);
    });
    (0, _qunit.test)("Settings button", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".chat-channel-card__setting"));
    });
    (0, _qunit.test)("Read restricted chatable", async function (assert) {
      this.channel.chatable.read_restricted = true;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelCard @channel={{this.channel}} />
      */
      {
        "id": "euWZOZh/",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-card-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".d-icon-lock"));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-channel-card").style.borderLeftColor, "rgb(213, 99, 83)");
    });
  });
});
define("discourse/plugins/chat/components/chat-channel-leave-btn-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/create-pretender", "discourse/tests/helpers/qunit-helpers", "discourse-i18n", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _createPretender, _qunitHelpers, _discourseI18n, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-channel-leave-btn", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("accepts an optional onLeaveChannel callback", async function (assert) {
      this.foo = 1;
      this.onLeaveChannel = () => this.foo = 2;
      this.channel = _fabricators.default.directMessageChannel();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelLeaveBtn @channel={{this.channel}} @onLeaveChannel={{this.onLeaveChannel}} />
      */
      {
        "id": "UBTclhlU",
        "block": "[[[8,[39,0],null,[[\"@channel\",\"@onLeaveChannel\"],[[30,0,[\"channel\"]],[30,0,[\"onLeaveChannel\"]]]],null]],[],false,[\"chat-channel-leave-btn\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-leave-btn-test.js",
        "isStrictMode": false
      }));
      _createPretender.default.post("/chat/chat_channels/:chatChannelId/unfollow", () => {
        return [200, {
          current_user_membership: {
            following: false
          }
        }, {}];
      });
      assert.strictEqual(this.foo, 1);
      await (0, _testHelpers.click)(".chat-channel-leave-btn");
      assert.strictEqual(this.foo, 2);
    });
    (0, _qunit.test)("has a specific title for direct message channel", async function (assert) {
      this.channel = _fabricators.default.directMessageChannel();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelLeaveBtn @channel={{this.channel}} />
      */
      {
        "id": "XP4b7FyG",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-leave-btn\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-leave-btn-test.js",
        "isStrictMode": false
      }));
      const btn = (0, _qunitHelpers.query)(".chat-channel-leave-btn");
      assert.strictEqual(btn.title, _discourseI18n.default.t("chat.direct_messages.leave"));
    });
    (0, _qunit.test)("has a specific title for message channel", async function (assert) {
      this.channel = _fabricators.default.channel();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelLeaveBtn @channel={{this.channel}} />
      */
      {
        "id": "XP4b7FyG",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-leave-btn\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-leave-btn-test.js",
        "isStrictMode": false
      }));
      const btn = (0, _qunitHelpers.query)(".chat-channel-leave-btn");
      assert.strictEqual(btn.title, _discourseI18n.default.t("chat.leave"));
    });
    (0, _qunit.test)("is not visible on mobile", async function (assert) {
      this.site.mobileView = true;
      this.channel = _fabricators.default.channel();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelLeaveBtn @channel={{this.channel}} />
      */
      {
        "id": "XP4b7FyG",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-leave-btn\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-leave-btn-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.exists)(".chat-channel-leave-btn"));
    });
  });
});
define("discourse/plugins/chat/components/chat-channel-metadata-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-channel-metadata", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("displays last message created at", async function (assert) {
      let lastMessageSentAt = moment().subtract(1, "day").format();
      this.channel = _fabricators.default.directMessageChannel();
      this.channel.lastMessage = _fabricators.default.message({
        channel: this.channel,
        created_at: lastMessageSentAt
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelMetadata @channel={{this.channel}} />
      */
      {
        "id": "vrieOILC",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-metadata\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-metadata-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-metadata__date").hasText("Yesterday");
      lastMessageSentAt = moment();
      this.channel.lastMessage.createdAt = lastMessageSentAt;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelMetadata @channel={{this.channel}} />
      */
      {
        "id": "vrieOILC",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-metadata\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-metadata-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-metadata__date").hasText(lastMessageSentAt.format("LT"));
    });
    (0, _qunit.test)("unreadIndicator", async function (assert) {
      this.channel = _fabricators.default.directMessageChannel();
      this.channel.tracking.unreadCount = 1;
      this.unreadIndicator = true;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelMetadata @channel={{this.channel}} @unreadIndicator={{this.unreadIndicator}}/>
      */
      {
        "id": "xYF0K843",
        "block": "[[[8,[39,0],null,[[\"@channel\",\"@unreadIndicator\"],[[30,0,[\"channel\"]],[30,0,[\"unreadIndicator\"]]]],null]],[],false,[\"chat-channel-metadata\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-metadata-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".chat-channel-unread-indicator"));
      this.unreadIndicator = false;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelMetadata @channel={{this.channel}} @unreadIndicator={{this.unreadIndicator}}/>
      */
      {
        "id": "xYF0K843",
        "block": "[[[8,[39,0],null,[[\"@channel\",\"@unreadIndicator\"],[[30,0,[\"channel\"]],[30,0,[\"unreadIndicator\"]]]],null]],[],false,[\"chat-channel-metadata\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-metadata-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.exists)(".chat-channel-unread-indicator"));
    });
  });
});
define("discourse/plugins/chat/components/chat-channel-preview-card-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-channel-preview-card", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.set("channel", _fabricators.default.channel({
        chatable_type: "Category"
      }));
      this.channel.description = "Important stuff is announced here.";
      this.channel.title = "announcements";
      this.channel.meta = {
        can_join_chat_channel: true
      };
      this.currentUser.set("has_chat_enabled", true);
      this.siteSettings.chat_enabled = true;
    });
    (0, _qunit.test)("channel title", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelPreviewCard @channel={{this.channel}} />
      */
      {
        "id": "MZSigRtl",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-preview-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-preview-card-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-channel-title__name").innerText, this.channel.title, "it shows the channel title");
      assert.true((0, _qunitHelpers.exists)((0, _qunitHelpers.query)(".chat-channel-title__category-badge")), "it shows the category hashtag badge");
    });
    (0, _qunit.test)("channel description", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelPreviewCard @channel={{this.channel}} />
      */
      {
        "id": "MZSigRtl",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-preview-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-preview-card-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-channel-preview-card__description").innerText, this.channel.description, "the channel description is shown");
    });
    (0, _qunit.test)("no channel description", async function (assert) {
      this.channel.description = null;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelPreviewCard @channel={{this.channel}} />
      */
      {
        "id": "MZSigRtl",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-preview-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-preview-card-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.exists)(".chat-channel-preview-card__description"), "no line is left for the channel description if there is none");
      assert.true((0, _qunitHelpers.exists)(".chat-channel-preview-card.-no-description"), "it adds a modifier class for styling");
    });
    (0, _qunit.test)("join", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelPreviewCard @channel={{this.channel}} />
      */
      {
        "id": "MZSigRtl",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-preview-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-preview-card-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".toggle-channel-membership-button.-join"), "it shows the join channel button");
    });
    (0, _qunit.test)("browse all", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelPreviewCard @channel={{this.channel}} />
      */
      {
        "id": "MZSigRtl",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-preview-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-preview-card-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".chat-channel-preview-card__browse-all"), "it shows a link to browse all channels");
    });
    (0, _qunit.test)("closed channel", async function (assert) {
      this.channel.status = "closed";
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelPreviewCard @channel={{this.channel}} />
      */
      {
        "id": "MZSigRtl",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-preview-card\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-preview-card-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.exists)(".chat-channel-preview-card__join-channel-btn"), "it does not show the join channel button");
    });
  });
});
define("discourse/plugins/chat/components/chat-channel-row-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-channel-row", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.categoryChatChannel = _fabricators.default.channel();
      this.directMessageChannel = _fabricators.default.directMessageChannel();
    });
    (0, _qunit.test)("links to correct channel", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").hasAttribute("href", `/chat/c/${this.categoryChatChannel.slugifiedTitle}/${this.categoryChatChannel.id}`);
    });
    (0, _qunit.test)("allows tabbing", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").hasAttribute("tabindex", "0");
    });
    (0, _qunit.test)("channel data attrite tabbing", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").hasAttribute("data-chat-channel-id", this.categoryChatChannel.id.toString());
    });
    (0, _qunit.test)("renders correct channel title", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-title").hasText(this.categoryChatChannel.title);
    });
    (0, _qunit.test)("renders correct channel metadata", async function (assert) {
      this.categoryChatChannel.lastMessage = _fabricators.default.message({
        created_at: moment().toISOString()
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-metadata").hasText(moment(this.categoryChatChannel.lastMessage.createdAt).format("h:mm A"));
    });
    (0, _qunit.test)("renders membership toggling button when necessary", async function (assert) {
      this.site.desktopView = false;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}}/>
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".toggle-channel-membership-button").doesNotExist();
      this.categoryChatChannel.currentUserMembership.following = true;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".toggle-channel-membership-button").doesNotExist();
      this.site.desktopView = true;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} @options={{hash leaveButton=true}}/>
      */
      {
        "id": "EC1wuf9a",
        "block": "[[[8,[39,0],null,[[\"@channel\",\"@options\"],[[30,0,[\"categoryChatChannel\"]],[28,[37,1],null,[[\"leaveButton\"],[true]]]]],null]],[],false,[\"chat-channel-row\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".toggle-channel-membership-button").exists();
    });
    (0, _qunit.test)("focused channel has correct class", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").doesNotHaveClass("focused");
      this.categoryChatChannel.focused = true;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").hasClass("focused");
    });
    (0, _qunit.test)("muted channel has correct class", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").doesNotHaveClass("muted");
      this.categoryChatChannel.currentUserMembership.muted = true;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").hasClass("muted");
    });
    (0, _qunit.test)("leaveButton options adds correct class", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").doesNotHaveClass("can-leave");
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} @options={{hash leaveButton=true}} />
      */
      {
        "id": "EC1wuf9a",
        "block": "[[[8,[39,0],null,[[\"@channel\",\"@options\"],[[30,0,[\"categoryChatChannel\"]],[28,[37,1],null,[[\"leaveButton\"],[true]]]]],null]],[],false,[\"chat-channel-row\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").hasClass("can-leave");
    });
    (0, _qunit.test)("active channel adds correct class", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").doesNotHaveClass("active");
      this.owner.lookup("service:chat").set("activeChannel", {
        id: this.categoryChatChannel.id
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").hasClass("active");
    });
    (0, _qunit.test)("unreads adds correct class", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").doesNotHaveClass("has-unread");
      this.categoryChatChannel.tracking.unreadCount = 1;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-row").hasClass("has-unread");
    });
    (0, _qunit.test)("user status with category channel", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.categoryChatChannel}} />
      */
      {
        "id": "Jcvg0dm6",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"categoryChatChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".user-status-message").doesNotExist();
    });
    (0, _qunit.test)("user status with direct message channel", async function (assert) {
      this.directMessageChannel.chatable = _fabricators.default.directMessage({
        users: [_fabricators.default.user()]
      });
      const status = {
        description: "Off to dentist",
        emoji: "tooth"
      };
      this.directMessageChannel.chatable.users[0].status = status;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.directMessageChannel}} />
      */
      {
        "id": "Xk6GuGRH",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"directMessageChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".user-status-message").exists();
    });
    (0, _qunit.test)("user status with direct message channel and multiple users", async function (assert) {
      const status = {
        description: "Off to dentist",
        emoji: "tooth"
      };
      this.directMessageChannel.chatable.users[0].status = status;
      this.directMessageChannel.chatable.users.push({
        id: 2,
        username: "bill",
        name: null,
        avatar_template: "/letter_avatar_proxy/v3/letter/t/31188e/{size}.png"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelRow @channel={{this.directMessageChannel}} />
      */
      {
        "id": "Xk6GuGRH",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"directMessageChannel\"]]]],null]],[],false,[\"chat-channel-row\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-row-test.js",
        "isStrictMode": false
      }));
      assert.dom(".user-status-message").doesNotExist();
    });
  });
});
define("discourse/plugins/chat/components/chat-channel-status-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse-i18n", "discourse/plugins/chat/discourse/lib/fabricators", "discourse/plugins/chat/discourse/models/chat-channel", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _discourseI18n, _fabricators, _chatChannel, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-channel-status", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("renders nothing when channel is opened", async function (assert) {
      this.channel = _fabricators.default.channel();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelStatus @channel={{this.channel}} />
      */
      {
        "id": "NZD19/T7",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-status\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-status-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-status").doesNotExist();
    });
    (0, _qunit.test)("defaults to long format", async function (assert) {
      this.channel = _fabricators.default.channel({
        status: _chatChannel.CHANNEL_STATUSES.closed
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelStatus @channel={{this.channel}} />
      */
      {
        "id": "NZD19/T7",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-status\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-status-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-status").hasText(_discourseI18n.default.t("chat.channel_status.closed_header"));
    });
    (0, _qunit.test)("accepts a format argument", async function (assert) {
      this.channel = _fabricators.default.channel({
        status: _chatChannel.CHANNEL_STATUSES.archived
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelStatus @channel={{this.channel}} @format="short" />
      */
      {
        "id": "3bEqFcxj",
        "block": "[[[8,[39,0],null,[[\"@channel\",\"@format\"],[[30,0,[\"channel\"]],\"short\"]],null]],[],false,[\"chat-channel-status\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-status-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-status").hasText(_discourseI18n.default.t("chat.channel_status.archived"));
    });
    (0, _qunit.test)("renders the correct icon", async function (assert) {
      this.channel = _fabricators.default.channel({
        status: _chatChannel.CHANNEL_STATUSES.archived
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelStatus @channel={{this.channel}} />
      */
      {
        "id": "NZD19/T7",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-status\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-status-test.js",
        "isStrictMode": false
      }));
      assert.dom(`.d-icon-${(0, _chatChannel.channelStatusIcon)(this.channel.status)}`).exists();
    });
    (0, _qunit.test)("renders archive status", async function (assert) {
      this.currentUser.admin = true;
      this.channel = _fabricators.default.channel({
        status: _chatChannel.CHANNEL_STATUSES.archived,
        archive_failed: true
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannelStatus @channel={{this.channel}} />
      */
      {
        "id": "NZD19/T7",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel-status\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-status-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-channel-retry-archive").exists();
    });
  });
});
define("discourse/plugins/chat/components/chat-channel-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/create-pretender", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _createPretender, _qunitHelpers, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-channel | status on mentions", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    const channelId = 1;
    const actingUser = {
      id: 1,
      username: "acting_user"
    };
    const mentionedUser = {
      id: 1000,
      username: "user1",
      status: {
        description: "surfing",
        emoji: "surfing_man"
      }
    };
    const mentionedUser2 = {
      id: 2000,
      username: "user2",
      status: {
        description: "vacation",
        emoji: "desert_island"
      }
    };
    const message = {
      id: 1891,
      message: `Hey @${mentionedUser.username}`,
      cooked: `<p>Hey <a class="mention" href="/u/${mentionedUser.username}">@${mentionedUser.username}</a></p>`,
      mentioned_users: [mentionedUser],
      created_at: "2020-08-04T15:00:00.000Z",
      user: {
        id: 1,
        username: "jesse"
      }
    };
    hooks.beforeEach(function () {
      _createPretender.default.get(`/chat/api/channels/1/messages`, () => (0, _createPretender.response)({
        messages: [message],
        meta: {
          can_delete_self: true
        }
      }));
      this.channel = _fabricators.default.channel({
        id: channelId,
        currentUserMembership: {
          following: true
        },
        meta: {
          can_join_chat_channel: false
        }
      });
      this.appEvents = this.container.lookup("service:app-events");
    });
    (0, _qunit.test)("it shows status on mentions", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannel @channel={{this.channel}} />
      */
      {
        "id": "9pyUnBuV",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-test.js",
        "isStrictMode": false
      }));
      assertStatusIsRendered(assert, statusSelector(mentionedUser.username), mentionedUser.status);
    });
    (0, _qunit.test)("it updates status on mentions", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannel @channel={{this.channel}} />
      */
      {
        "id": "9pyUnBuV",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-test.js",
        "isStrictMode": false
      }));
      const newStatus = {
        description: "off to dentist",
        emoji: "tooth"
      };
      this.appEvents.trigger("user-status:changed", {
        [mentionedUser.id]: newStatus
      });
      const selector = statusSelector(mentionedUser.username);
      await (0, _testHelpers.waitFor)(selector);
      assertStatusIsRendered(assert, statusSelector(mentionedUser.username), newStatus);
    });
    (0, _qunit.test)("it deletes status on mentions", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannel @channel={{this.channel}} />
      */
      {
        "id": "9pyUnBuV",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-test.js",
        "isStrictMode": false
      }));
      this.appEvents.trigger("user-status:changed", {
        [mentionedUser.id]: null
      });
      const selector = statusSelector(mentionedUser.username);
      await (0, _testHelpers.waitFor)(selector, {
        count: 0
      });
      assert.dom(selector).doesNotExist("status is deleted");
    });
    (0, _qunit.test)("it shows status on mentions on messages that came from Message Bus", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannel @channel={{this.channel}} />
      */
      {
        "id": "9pyUnBuV",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-test.js",
        "isStrictMode": false
      }));
      await receiveChatMessageViaMessageBus();
      assertStatusIsRendered(assert, statusSelector(mentionedUser2.username), mentionedUser2.status);
    });
    (0, _qunit.test)("it updates status on mentions on messages that came from Message Bus", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannel @channel={{this.channel}} />
      */
      {
        "id": "9pyUnBuV",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-test.js",
        "isStrictMode": false
      }));
      await receiveChatMessageViaMessageBus();
      const newStatus = {
        description: "off to meeting",
        emoji: "calendar"
      };
      this.appEvents.trigger("user-status:changed", {
        [mentionedUser2.id]: newStatus
      });
      const selector = statusSelector(mentionedUser2.username);
      await (0, _testHelpers.waitFor)(selector);
      assertStatusIsRendered(assert, statusSelector(mentionedUser2.username), newStatus);
    });
    (0, _qunit.test)("it deletes status on mentions on messages that came from Message Bus", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannel @channel={{this.channel}} />
      */
      {
        "id": "9pyUnBuV",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-channel\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-test.js",
        "isStrictMode": false
      }));
      await receiveChatMessageViaMessageBus();
      this.appEvents.trigger("user-status:changed", {
        [mentionedUser2.id]: null
      });
      const selector = statusSelector(mentionedUser2.username);
      await (0, _testHelpers.waitFor)(selector, {
        count: 0
      });
      assert.dom(selector).doesNotExist("status is deleted");
    });
    (0, _qunit.test)("it shows status tooltip", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatChannel @channel={{this.channel}} /><DInlineTooltip />
      */
      {
        "id": "ULdQjcMV",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null],[8,[39,1],null,null,null]],[],false,[\"chat-channel\",\"d-inline-tooltip\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-channel-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.triggerEvent)(statusSelector(mentionedUser.username), "mousemove");
      assert.equal(document.querySelector(".user-status-tooltip-description").textContent.trim(), mentionedUser.status.description, "status description is correct");
      assert.ok(document.querySelector(`.user-status-message-tooltip img[alt='${mentionedUser.status.emoji}']`), "status emoji is correct");
    });
    function assertStatusIsRendered(assert, selector, status) {
      assert.dom(selector).exists("status is rendered").hasAttribute("src", new RegExp(`${status.emoji}.png`), "status emoji is updated");
    }
    async function receiveChatMessageViaMessageBus() {
      await (0, _qunitHelpers.publishToMessageBus)(`/chat/${channelId}`, {
        chat_message: {
          id: 2138,
          message: `Hey @${mentionedUser2.username}`,
          cooked: `<p>Hey <a class="mention" href="/u/${mentionedUser2.username}">@${mentionedUser2.username}</a></p>`,
          created_at: "2023-05-18T16:07:59.588Z",
          excerpt: `Hey @${mentionedUser2.username}`,
          available_flags: [],
          chat_channel_id: 7,
          mentioned_users: [mentionedUser2],
          user: actingUser,
          chat_webhook_event: null,
          uploads: []
        },
        type: "sent"
      });
    }
    function statusSelector(username) {
      return `.mention[href='/u/${username}'] .user-status-message img`;
    }
  });
});
define("discourse/plugins/chat/components/chat-composer-dropdown-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-composer-dropdown", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("buttons", async function (assert) {
      this.set("buttons", [{
        id: "foo",
        icon: "times",
        action: () => {}
      }]);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerDropdown @buttons={{this.buttons}} />
      */
      {
        "id": "kbxFhlT3",
        "block": "[[[8,[39,0],null,[[\"@buttons\"],[[30,0,[\"buttons\"]]]],null]],[],false,[\"chat-composer-dropdown\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-dropdown-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(".chat-composer-dropdown__trigger-btn");
      assert.true((0, _qunitHelpers.exists)(".chat-composer-dropdown__item.foo"));
      assert.true((0, _qunitHelpers.exists)(".chat-composer-dropdown__action-btn.foo .d-icon-times"));
    });
  });
});
define("discourse/plugins/chat/components/chat-composer-message-details-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-composer-message-details", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("data-id attribute", async function (assert) {
      this.message = _fabricators.default.message();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerMessageDetails @message={{this.message}} />
      */
      {
        "id": "6qLZ88Ex",
        "block": "[[[8,[39,0],null,[[\"@message\"],[[30,0,[\"message\"]]]],null]],[],false,[\"chat-composer-message-details\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-message-details-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-composer-message-details").hasAttribute("data-id", this.message.id.toString());
    });
    (0, _qunit.test)("editing a message has the pencil icon", async function (assert) {
      this.message = _fabricators.default.message({
        editing: true
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerMessageDetails @message={{this.message}} />
      */
      {
        "id": "6qLZ88Ex",
        "block": "[[[8,[39,0],null,[[\"@message\"],[[30,0,[\"message\"]]]],null]],[],false,[\"chat-composer-message-details\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-message-details-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-composer-message-details .d-icon-pencil-alt").exists();
    });
    (0, _qunit.test)("replying to a message has the reply icon", async function (assert) {
      const firstMessage = _fabricators.default.message();
      this.message = _fabricators.default.message({
        inReplyTo: firstMessage
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerMessageDetails @message={{this.message}} />
      */
      {
        "id": "6qLZ88Ex",
        "block": "[[[8,[39,0],null,[[\"@message\"],[[30,0,[\"message\"]]]],null]],[],false,[\"chat-composer-message-details\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-message-details-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-composer-message-details .d-icon-reply").exists();
    });
    (0, _qunit.test)("displays user avatar", async function (assert) {
      this.message = _fabricators.default.message();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerMessageDetails @message={{this.message}} />
      */
      {
        "id": "6qLZ88Ex",
        "block": "[[[8,[39,0],null,[[\"@message\"],[[30,0,[\"message\"]]]],null]],[],false,[\"chat-composer-message-details\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-message-details-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-composer-message-details .chat-user-avatar .avatar").hasAttribute("title", this.message.user.username);
    });
    (0, _qunit.test)("displays message excerpt", async function (assert) {
      this.message = _fabricators.default.message();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerMessageDetails @message={{this.message}} />
      */
      {
        "id": "6qLZ88Ex",
        "block": "[[[8,[39,0],null,[[\"@message\"],[[30,0,[\"message\"]]]],null]],[],false,[\"chat-composer-message-details\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-message-details-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-reply__excerpt").hasText(this.message.excerpt);
    });
    (0, _qunit.test)("displays user’s username", async function (assert) {
      this.message = _fabricators.default.message();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerMessageDetails @message={{this.message}} />
      */
      {
        "id": "6qLZ88Ex",
        "block": "[[[8,[39,0],null,[[\"@message\"],[[30,0,[\"message\"]]]],null]],[],false,[\"chat-composer-message-details\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-message-details-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-reply__username").hasText(this.message.user.username);
    });
  });
});
define("discourse/plugins/chat/components/chat-composer-placeholder-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/create-pretender", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/models/chat-channel", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _createPretender, _qunitHelpers, _chatChannel, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-composer placeholder", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("direct message to self shows Jot something down", async function (assert) {
      _createPretender.default.get("/chat/emojis.json", () => [200, [], {}]);
      this.currentUser.set("id", 1);
      this.channel = _chatChannel.default.create({
        chatable_type: "DirectMessage",
        chatable: {
          users: [{
            id: 1
          }]
        }
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::Composer::Channel @channel={{this.channel}} />
      */
      {
        "id": "3p0y+c7x",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat/composer/channel\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-placeholder-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-composer__input").placeholder, "Jot something down");
    });
    (0, _qunit.test)("direct message to multiple folks shows their names", async function (assert) {
      _createPretender.default.get("/chat/emojis.json", () => [200, [], {}]);
      this.channel = _chatChannel.default.create({
        chatable_type: "DirectMessage",
        chatable: {
          group: true,
          users: [{
            name: "Tomtom"
          }, {
            name: "Steaky"
          }, {
            username: "zorro"
          }]
        }
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::Composer::Channel @channel={{this.channel}} />
      */
      {
        "id": "3p0y+c7x",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat/composer/channel\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-placeholder-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-composer__input").placeholder, "Chat with Tomtom, Steaky, @zorro");
    });
    (0, _qunit.test)("message to channel shows send message to channel name", async function (assert) {
      _createPretender.default.get("/chat/emojis.json", () => [200, [], {}]);
      this.channel = _chatChannel.default.create({
        chatable_type: "Category",
        title: "just-cats"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::Composer::Channel @channel={{this.channel}} />
      */
      {
        "id": "3p0y+c7x",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat/composer/channel\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-placeholder-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-composer__input").placeholder, "Chat in #just-cats");
    });
  });
});
define("discourse/plugins/chat/components/chat-composer-upload-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse-i18n", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _discourseI18n, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-composer-upload", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("file - uploading in progress", async function (assert) {
      this.set("upload", {
        progress: 50,
        extension: ".pdf",
        fileName: "test.pdf"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerUpload @upload={{this.upload}} />
      */
      {
        "id": "WzCOEtr+",
        "block": "[[[8,[39,0],null,[[\"@upload\"],[[30,0,[\"upload\"]]]],null]],[],false,[\"chat-composer-upload\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-upload-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".upload-progress[value=50]"));
      assert.strictEqual((0, _qunitHelpers.query)(".uploading").innerText.trim(), _discourseI18n.default.t("uploading"));
    });
    (0, _qunit.test)("image - uploading in progress", async function (assert) {
      this.set("upload", {
        extension: ".png",
        progress: 78,
        fileName: "test.png"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerUpload @upload={{this.upload}} />
      */
      {
        "id": "WzCOEtr+",
        "block": "[[[8,[39,0],null,[[\"@upload\"],[[30,0,[\"upload\"]]]],null]],[],false,[\"chat-composer-upload\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-upload-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".d-icon-far-image"));
      assert.true((0, _qunitHelpers.exists)(".upload-progress[value=78]"));
      assert.strictEqual((0, _qunitHelpers.query)(".uploading").innerText.trim(), _discourseI18n.default.t("uploading"));
    });
    (0, _qunit.test)("image - preprocessing upload in progress", async function (assert) {
      this.set("upload", {
        extension: ".png",
        progress: 78,
        fileName: "test.png",
        processing: true
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerUpload @upload={{this.upload}} />
      */
      {
        "id": "WzCOEtr+",
        "block": "[[[8,[39,0],null,[[\"@upload\"],[[30,0,[\"upload\"]]]],null]],[],false,[\"chat-composer-upload\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-upload-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".processing").innerText.trim(), _discourseI18n.default.t("processing"));
    });
    (0, _qunit.test)("file - upload complete", async function (assert) {
      this.set("upload", {
        type: ".pdf",
        original_filename: "some file.pdf",
        extension: "pdf"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerUpload @isDone={{true}} @upload={{this.upload}} />
      */
      {
        "id": "rBDACIPY",
        "block": "[[[8,[39,0],null,[[\"@isDone\",\"@upload\"],[true,[30,0,[\"upload\"]]]],null]],[],false,[\"chat-composer-upload\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-upload-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".d-icon-file-alt"));
      assert.strictEqual((0, _qunitHelpers.query)(".file-name").innerText.trim(), "some file.pdf");
      assert.strictEqual((0, _qunitHelpers.query)(".extension-pill").innerText.trim(), "pdf");
    });
    (0, _qunit.test)("image - upload complete", async function (assert) {
      this.set("upload", {
        type: ".png",
        original_filename: "bar_image.png",
        extension: "png",
        short_path: "/images/avatar.png"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerUpload @isDone={{true}} @upload={{this.upload}} />
      */
      {
        "id": "rBDACIPY",
        "block": "[[[8,[39,0],null,[[\"@isDone\",\"@upload\"],[true,[30,0,[\"upload\"]]]],null]],[],false,[\"chat-composer-upload\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-upload-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)("img.preview-img[src='/images/avatar.png']"));
    });
    (0, _qunit.test)("removing completed upload", async function (assert) {
      this.set("uploadRemoved", false);
      this.set("removeUpload", () => {
        this.set("uploadRemoved", true);
      });
      this.set("upload", {
        type: ".png",
        original_filename: "bar_image.png",
        extension: "png",
        short_path: "/images/avatar.png"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerUpload @isDone={{true}} @upload={{this.upload}} @onCancel={{fn this.removeUpload this.upload}} />
      */
      {
        "id": "1R+RAVPR",
        "block": "[[[8,[39,0],null,[[\"@isDone\",\"@upload\",\"@onCancel\"],[true,[30,0,[\"upload\"]],[28,[37,1],[[30,0,[\"removeUpload\"]],[30,0,[\"upload\"]]],null]]],null]],[],false,[\"chat-composer-upload\",\"fn\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-upload-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(".chat-composer-upload__remove-btn");
      assert.strictEqual(this.uploadRemoved, true);
    });
    (0, _qunit.test)("cancelling in progress upload", async function (assert) {
      this.set("uploadRemoved", false);
      this.set("removeUpload", () => {
        this.set("uploadRemoved", true);
      });
      this.set("upload", {
        type: ".png",
        original_filename: "bar_image.png",
        extension: "png",
        short_path: "/images/avatar.png"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatComposerUpload @upload={{this.upload}} @onCancel={{fn this.removeUpload this.upload}} />
      */
      {
        "id": "6aEp0h5d",
        "block": "[[[8,[39,0],null,[[\"@upload\",\"@onCancel\"],[[30,0,[\"upload\"]],[28,[37,1],[[30,0,[\"removeUpload\"]],[30,0,[\"upload\"]]],null]]],null]],[],false,[\"chat-composer-upload\",\"fn\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-upload-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(".chat-composer-upload__remove-btn");
      assert.strictEqual(this.uploadRemoved, true);
    });
  });
});
define("discourse/plugins/chat/components/chat-composer-uploads-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/create-pretender", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _createPretender, _qunitHelpers, _templateFactory) {
  "use strict";

  const fakeUpload = {
    type: ".png",
    extension: "png",
    name: "myfile.png",
    short_path: "/images/avatar.png"
  };
  const mockUploadResponse = {
    extension: "jpeg",
    filesize: 126177,
    height: 800,
    human_filesize: "123 KB",
    id: 202,
    original_filename: "avatar.PNG.jpg",
    retain_hours: null,
    short_path: "/images/avatar.png",
    short_url: "upload://yoj8pf9DdIeHRRULyw7i57GAYdz.jpeg",
    thumbnail_height: 320,
    thumbnail_width: 690,
    url: "/images/avatar.png",
    width: 1920
  };
  function setupUploadPretender() {
    _createPretender.default.post("/uploads.json", () => {
      return [200, {
        "Content-Type": "application/json"
      }, mockUploadResponse];
    }, 500 // this delay is important to slow down the uploads a bit so we can click elements in the UI like the cancel button
    );
  }
  (0, _qunit.module)("Discourse Chat | Component | chat-composer-uploads", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("loading uploads from an outside source (e.g. draft or editing message)", async function (assert) {
      this.existingUploads = [fakeUpload];
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ChatComposerUploads @existingUploads={{this.existingUploads}} @fileUploadElementId="chat-widget-uploader" />
          
      */
      {
        "id": "u569F1d3",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@existingUploads\",\"@fileUploadElementId\"],[[30,0,[\"existingUploads\"]],\"chat-widget-uploader\"]],null],[1,\"\\n    \"]],[],false,[\"chat-composer-uploads\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-uploads-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.count)(".chat-composer-upload"), 1);
      assert.strictEqual((0, _qunitHelpers.exists)(".chat-composer-upload"), true);
    });
    (0, _qunit.test)("upload starts and completes", async function (assert) {
      setupUploadPretender();
      this.set("onUploadChanged", () => {});
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ChatComposerUploads @fileUploadElementId="chat-widget-uploader" @onUploadChanged={{this.onUploadChanged}} />
          
      */
      {
        "id": "vQOIpN3Y",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@fileUploadElementId\",\"@onUploadChanged\"],[\"chat-widget-uploader\",[30,0,[\"onUploadChanged\"]]]],null],[1,\"\\n    \"]],[],false,[\"chat-composer-uploads\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-uploads-test.js",
        "isStrictMode": false
      }));
      const done = assert.async();
      this.appEvents = this.container.lookup("service:app-events");
      this.appEvents.on("upload-mixin:chat-composer-uploader:upload-success", (fileName, upload) => {
        assert.strictEqual(fileName, "avatar.png");
        assert.deepEqual(upload, mockUploadResponse);
        done();
      });
      this.appEvents.trigger("upload-mixin:chat-composer-uploader:add-files", (0, _qunitHelpers.createFile)("avatar.png"));
      await (0, _testHelpers.waitFor)(".chat-composer-upload");
      assert.dom(".chat-composer-upload").exists({
        count: 1
      });
    });
    (0, _qunit.test)("removing a completed upload", async function (assert) {
      this.set("changedUploads", null);
      this.set("onUploadChanged", () => {});
      this.existingUploads = [fakeUpload];
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ChatComposerUploads @existingUploads={{this.existingUploads}} @fileUploadElementId="chat-widget-uploader" @onUploadChanged={{this.onUploadChanged}} />
          
      */
      {
        "id": "hoHtJQLc",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@existingUploads\",\"@fileUploadElementId\",\"@onUploadChanged\"],[[30,0,[\"existingUploads\"]],\"chat-widget-uploader\",[30,0,[\"onUploadChanged\"]]]],null],[1,\"\\n    \"]],[],false,[\"chat-composer-uploads\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-uploads-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-composer-upload").exists({
        count: 1
      });
      await (0, _testHelpers.click)(".chat-composer-upload__remove-btn");
      assert.dom(".chat-composer-upload").exists({
        count: 0
      });
    });
    (0, _qunit.test)("cancelling in progress upload", async function (assert) {
      setupUploadPretender();
      this.set("changedUploads", null);
      this.set("onUploadChanged", uploads => {
        this.set("changedUploads", uploads);
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ChatComposerUploads @fileUploadElementId="chat-widget-uploader" @onUploadChanged={{this.onUploadChanged}} />
          
      */
      {
        "id": "vQOIpN3Y",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@fileUploadElementId\",\"@onUploadChanged\"],[\"chat-widget-uploader\",[30,0,[\"onUploadChanged\"]]]],null],[1,\"\\n    \"]],[],false,[\"chat-composer-uploads\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-composer-uploads-test.js",
        "isStrictMode": false
      }));
      const image = (0, _qunitHelpers.createFile)("avatar.png");
      const done = assert.async();
      this.appEvents = this.container.lookup("service:app-events");
      this.appEvents.on(`upload-mixin:chat-composer-uploader:upload-cancelled`, fileId => {
        assert.strictEqual(fileId.includes("uppy-avatar/"), true, "upload was cancelled");
        done();
      });
      this.appEvents.trigger("upload-mixin:chat-composer-uploader:add-files", image);
      await (0, _testHelpers.waitFor)(".chat-composer-upload");
      assert.strictEqual((0, _qunitHelpers.count)(".chat-composer-upload"), 1);
      await (0, _testHelpers.click)(".chat-composer-upload__remove-btn");
      assert.strictEqual((0, _qunitHelpers.count)(".chat-composer-upload"), 0);
    });
  });
});
define("discourse/plugins/chat/components/chat-emoji-avatar-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-emoji-avatar", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("uses an emoji as avatar", async function (assert) {
      this.set("emoji", ":otter:");
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiAvatar @emoji={{this.emoji}} />
      */
      {
        "id": "8U/sMPzf",
        "block": "[[[8,[39,0],null,[[\"@emoji\"],[[30,0,[\"emoji\"]]]],null]],[],false,[\"chat-emoji-avatar\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-avatar-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(`.chat-emoji-avatar .chat-emoji-avatar-container .emoji[title=otter]`));
    });
  });
});
define("discourse/plugins/chat/components/chat-emoji-picker-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/create-pretender", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _createPretender, _qunitHelpers, _templateFactory) {
  "use strict";

  function emojisResponse() {
    return {
      favorites: [{
        name: "grinning",
        tonable: false,
        url: "/images/emoji/twitter/grinning.png?v=12",
        group: "smileys_\u0026_emotion",
        search_aliases: ["smiley_cat", "star_struck"]
      }],
      "smileys_&_emotion": [{
        name: "grinning",
        tonable: false,
        url: "/images/emoji/twitter/grinning.png?v=12",
        group: "smileys_\u0026_emotion",
        search_aliases: ["smiley_cat", "star_struck"]
      }],
      "people_&_body": [{
        name: "raised_hands",
        tonable: true,
        url: "/images/emoji/twitter/raised_hands.png?v=12",
        group: "people_&_body",
        search_aliases: []
      }, {
        name: "man_rowing_boat",
        tonable: true,
        url: "/images/emoji/twitter/man_rowing_boat.png?v=12",
        group: "people_&_body",
        search_aliases: []
      }],
      objects: [{
        name: "womans_clothes",
        tonable: false,
        url: "/images/emoji/twitter/womans_clothes.png?v=12",
        group: "objects",
        search_aliases: []
      }]
    };
  }
  (0, _qunit.module)("Discourse Chat | Component | chat-emoji-picker", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    hooks.afterEach(function () {
      this.emojiReactionStore.diversity = 1;
    });
    hooks.beforeEach(function () {
      _createPretender.default.get("/chat/emojis.json", () => {
        return [200, {}, emojisResponse()];
      });
      this.chatEmojiPickerManager = this.container.lookup("service:chat-emoji-picker-manager");
      this.chatEmojiPickerManager.open(() => {});
      this.chatEmojiPickerManager.addVisibleSections(["smileys_&_emotion", "people_&_body", "objects"]);
      this.emojiReactionStore = this.container.lookup("service:chat-emoji-reaction-store");
    });
    (0, _qunit.test)("When displaying navigation", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiPicker />
      */
      {
        "id": "fR4pNC6V",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat-emoji-picker\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-picker-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(`.chat-emoji-picker__section-btn.active[data-section="favorites"]`), "it renders first section as active");
      assert.true((0, _qunitHelpers.exists)(`.chat-emoji-picker__section-btn[data-section="smileys_&_emotion"]`));
      assert.true((0, _qunitHelpers.exists)(`.chat-emoji-picker__section-btn[data-section="people_&_body"]`));
      assert.true((0, _qunitHelpers.exists)(`.chat-emoji-picker__section-btn[data-section="objects"]`));
    });
    (0, _qunit.test)("When changing tone scale", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiPicker />
      */
      {
        "id": "fR4pNC6V",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat-emoji-picker\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-picker-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(".chat-emoji-picker__fitzpatrick-modifier-btn.current.t1");
      await (0, _testHelpers.click)(".chat-emoji-picker__fitzpatrick-modifier-btn.t6");
      assert.true((0, _qunitHelpers.exists)(`img[src="/images/emoji/twitter/raised_hands/6.png"]`), "it applies the tone to emojis");
      assert.true((0, _qunitHelpers.exists)(".chat-emoji-picker__fitzpatrick-modifier-btn.current.t6"), "it changes the current scale to t6");
    });
    (0, _qunit.test)("When requesting section", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiPicker />
      */
      {
        "id": "fR4pNC6V",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat-emoji-picker\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-picker-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual(document.querySelector("#ember-testing-container").scrollTop, 0);
      await (0, _testHelpers.click)(`.chat-emoji-picker__section-btn[data-section="objects"]`);
      assert.true(document.querySelector(".chat-emoji-picker__scrollable-content").scrollTop > 0, "it scrolls to the section");
    });
    (0, _qunit.test)("When filtering emojis", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiPicker />
      */
      {
        "id": "fR4pNC6V",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat-emoji-picker\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-picker-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.fillIn)(".dc-filter-input", "grinning");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".chat-emoji-picker__section.filtered > img").length, 1, "it filters the emojis list");
      assert.true((0, _qunitHelpers.exists)('.chat-emoji-picker__section.filtered > img[alt="grinning"]'), "it filters the correct emoji");
      await (0, _testHelpers.fillIn)(".dc-filter-input", "Grinning");
      assert.true((0, _qunitHelpers.exists)('.chat-emoji-picker__section.filtered > img[alt="grinning"]'), "it is case insensitive");
      await (0, _testHelpers.fillIn)(".dc-filter-input", "smiley_cat");
      assert.true((0, _qunitHelpers.exists)('.chat-emoji-picker__section.filtered > img[alt="grinning"]'), "it filters the correct emoji using search alias");
    });
    (0, _qunit.test)("When selecting an emoji", async function (assert) {
      let selection;
      this.didSelectEmoji = emoji => {
        selection = emoji;
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiPicker @didSelectEmoji={{this.didSelectEmoji}} />
      */
      {
        "id": "KO2B29D4",
        "block": "[[[8,[39,0],null,[[\"@didSelectEmoji\"],[[30,0,[\"didSelectEmoji\"]]]],null]],[],false,[\"chat-emoji-picker\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-picker-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('img.emoji[data-emoji="grinning"]');
      assert.strictEqual(selection, "grinning");
    });
    (0, _qunit.test)("When navigating sections", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiPicker />
      */
      {
        "id": "fR4pNC6V",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat-emoji-picker\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-picker-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.triggerKeyEvent)(document.activeElement, "keydown", "ArrowDown");
      assert.strictEqual(document.activeElement.dataset.emoji, "grinning", "ArrowDown focuses on the first favorite emoji");
      await (0, _testHelpers.triggerKeyEvent)(document.activeElement, "keydown", "ArrowDown");
      await (0, _testHelpers.triggerKeyEvent)(document.activeElement, "keydown", "ArrowDown");
      assert.strictEqual(document.activeElement.dataset.emoji, "raised_hands", "ArrowDown focuses on the first emoji form the third section");
      await (0, _testHelpers.triggerKeyEvent)(document.activeElement, "keydown", "ArrowRight");
      assert.strictEqual(document.activeElement.dataset.emoji, "man_rowing_boat", "ArrowRight focuses on the emoji at the right");
      await (0, _testHelpers.triggerKeyEvent)(document.activeElement, "keydown", "ArrowLeft");
      assert.strictEqual(document.activeElement.dataset.emoji, "raised_hands", "ArrowLeft focuses on the emoji at the left");
      await (0, _testHelpers.triggerKeyEvent)(document.activeElement, "keydown", "ArrowUp");
      assert.strictEqual(document.activeElement.dataset.emoji, "grinning", "ArrowUp focuses on the first emoji form the second section");
    });
    (0, _qunit.test)("When navigating filtered emojis", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiPicker />
      */
      {
        "id": "fR4pNC6V",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat-emoji-picker\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-picker-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.fillIn)(".dc-filter-input", "man");
      await (0, _testHelpers.triggerKeyEvent)(document.activeElement, "keydown", "ArrowDown");
      assert.strictEqual(document.activeElement.dataset.emoji, "man_rowing_boat", "ArrowDown focuses on the first filtered emoji");
      await (0, _testHelpers.triggerKeyEvent)(document.activeElement, "keydown", "ArrowRight");
      assert.strictEqual(document.activeElement.dataset.emoji, "womans_clothes", "ArrowRight focuses on the emoji at the right");
      await (0, _testHelpers.triggerKeyEvent)(document.activeElement, "keydown", "ArrowLeft");
      assert.strictEqual(document.activeElement.dataset.emoji, "man_rowing_boat", "ArrowLeft focuses on the emoji at the left");
    });
    (0, _qunit.test)("When selecting a toned an emoji", async function (assert) {
      let selection;
      this.didSelectEmoji = emoji => {
        selection = emoji;
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiPicker @didSelectEmoji={{this.didSelectEmoji}} />
      */
      {
        "id": "KO2B29D4",
        "block": "[[[8,[39,0],null,[[\"@didSelectEmoji\"],[[30,0,[\"didSelectEmoji\"]]]],null]],[],false,[\"chat-emoji-picker\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-picker-test.js",
        "isStrictMode": false
      }));
      this.emojiReactionStore.diversity = 1;
      await (0, _testHelpers.click)('img.emoji[data-emoji="man_rowing_boat"]');
      assert.strictEqual(selection, "man_rowing_boat");
      this.emojiReactionStore.diversity = 2;
      await (0, _testHelpers.click)('img.emoji[data-emoji="man_rowing_boat"]');
      assert.strictEqual(selection, "man_rowing_boat:t2");
    });
    (0, _qunit.test)("When opening the picker", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiPicker />
      */
      {
        "id": "fR4pNC6V",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat-emoji-picker\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-picker-test.js",
        "isStrictMode": false
      }));
      assert.true(document.activeElement.classList.contains("dc-filter-input"));
    });
    (0, _qunit.test)("When hovering an emoji", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiPicker />
      */
      {
        "id": "fR4pNC6V",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat-emoji-picker\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-picker-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)('.chat-emoji-picker__section[data-section="people_&_body"] img.emoji:nth-child(1)').title, ":raised_hands:", "first emoji has a title");
      assert.strictEqual((0, _qunitHelpers.query)('.chat-emoji-picker__section[data-section="people_&_body"] img.emoji:nth-child(2)').title, ":man_rowing_boat:", "second emoji has a title");
      await (0, _testHelpers.fillIn)(".dc-filter-input", "grinning");
      assert.strictEqual((0, _qunitHelpers.query)('img.emoji[data-emoji="grinning"]').title, ":grinning:", "filtered emoji have a title");
      this.emojiReactionStore.diversity = 1;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiPicker />
      */
      {
        "id": "fR4pNC6V",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat-emoji-picker\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-picker-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)('img.emoji[data-emoji="man_rowing_boat"]').title, ":man_rowing_boat:", "it has a title without the scale as diversity value is 1");
      this.emojiReactionStore.diversity = 2;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatEmojiPicker />
      */
      {
        "id": "fR4pNC6V",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat-emoji-picker\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-emoji-picker-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)('img.emoji[data-emoji="man_rowing_boat"]').title, ":man_rowing_boat:t2:", "it has a title with the scale");
    });
  });
});
define("discourse/plugins/chat/components/chat-header-icon-test", ["@ember/test-helpers", "qunit", "sinon", "discourse/tests/helpers/component-test", "discourse-i18n", "discourse/plugins/chat/discourse/controllers/preferences-chat", "@ember/template-factory"], function (_testHelpers, _qunit, _sinon, _componentTest, _discourseI18n, _preferencesChat, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-header-icon", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {});
    (0, _qunit.test)("full page - never separated sidebar mode", async function (assert) {
      this.currentUser.user_option.chat_separate_sidebar_mode = "never";
      _sinon.default.stub(this.owner.lookup("service:chat-state-manager"), "isFullPageActive").value(true);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::Header::Icon />
      */
      {
        "id": "w378IFKs",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat/header/icon\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-header-icon-test.js",
        "isStrictMode": false
      }));
      assert.dom(".icon.btn-flat").hasAttribute("title", _discourseI18n.default.t("chat.title_capitalized")).hasAttribute("href", "/chat");
      assert.dom(".d-icon-d-chat").exists();
    });
    (0, _qunit.test)("full page - always separated mode", async function (assert) {
      this.currentUser.user_option.chat_separate_sidebar_mode = "always";
      _sinon.default.stub(this.owner.lookup("service:chat-state-manager"), "isFullPageActive").value(true);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::Header::Icon />
      */
      {
        "id": "w378IFKs",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat/header/icon\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-header-icon-test.js",
        "isStrictMode": false
      }));
      assert.dom(".icon.btn-flat").hasAttribute("title", _discourseI18n.default.t("sidebar.panels.forum.label")).hasAttribute("href", "/latest");
      assert.dom(".d-icon-random").exists();
    });
    (0, _qunit.test)("mobile", async function (assert) {
      this.site.mobileView = true;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::Header::Icon />
      */
      {
        "id": "w378IFKs",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"chat/header/icon\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-header-icon-test.js",
        "isStrictMode": false
      }));
      assert.dom(".icon.btn-flat").hasAttribute("title", _discourseI18n.default.t("chat.title_capitalized")).hasAttribute("href", "/chat");
      assert.dom(".d-icon-d-chat").exists();
    });
    (0, _qunit.test)("full page - with unread", async function (assert) {
      this.currentUser.user_option.chat_separate_sidebar_mode = "always";
      this.currentUser.user_option.chat_header_indicator_preference = _preferencesChat.HEADER_INDICATOR_PREFERENCE_ALL_NEW;
      _sinon.default.stub(this.owner.lookup("service:chat-state-manager"), "isFullPageActive").value(true);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::Header::Icon @urgentCount={{1}} />
      */
      {
        "id": "5e1T83hv",
        "block": "[[[8,[39,0],null,[[\"@urgentCount\"],[1]],null]],[],false,[\"chat/header/icon\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-header-icon-test.js",
        "isStrictMode": false
      }));
      assert.dom(".icon.btn-flat").hasAttribute("title", _discourseI18n.default.t("sidebar.panels.forum.label")).hasAttribute("href", "/latest");
      assert.dom(".d-icon-random").exists();
      assert.dom(".chat-channel-unread-indicator__number").doesNotExist();
    });
    (0, _qunit.test)("drawer - with unread", async function (assert) {
      this.currentUser.user_option.chat_separate_sidebar_mode = "always";
      this.currentUser.user_option.chat_header_indicator_preference = _preferencesChat.HEADER_INDICATOR_PREFERENCE_ALL_NEW;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::Header::Icon @urgentCount={{1}} />
      */
      {
        "id": "5e1T83hv",
        "block": "[[[8,[39,0],null,[[\"@urgentCount\"],[1]],null]],[],false,[\"chat/header/icon\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-header-icon-test.js",
        "isStrictMode": false
      }));
      assert.dom(".icon.btn-flat").hasAttribute("title", _discourseI18n.default.t("sidebar.panels.chat.label")).hasAttribute("href", "/chat");
      assert.dom(".d-icon-d-chat").exists();
      assert.dom(".chat-channel-unread-indicator__number").exists().containsText("1");
    });
  });
});
define("discourse/plugins/chat/components/chat-message-avatar-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "discourse/plugins/chat/discourse/models/chat-message", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _fabricators, _chatMessage, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-message-avatar", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("chat_webhook_event", async function (assert) {
      this.message = _chatMessage.default.create(_fabricators.default.channel(), {
        chat_webhook_event: {
          emoji: ":heart:"
        }
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::Message::Avatar @message={{this.message}} />
      */
      {
        "id": "2a93SvNr",
        "block": "[[[8,[39,0],null,[[\"@message\"],[[30,0,[\"message\"]]]],null]],[],false,[\"chat/message/avatar\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-avatar-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-emoji-avatar .emoji").title, "heart");
    });
    (0, _qunit.test)("user", async function (assert) {
      this.message = _chatMessage.default.create(_fabricators.default.channel(), {
        user: {
          username: "discobot"
        }
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::Message::Avatar @message={{this.message}} />
      */
      {
        "id": "2a93SvNr",
        "block": "[[[8,[39,0],null,[[\"@message\"],[[30,0,[\"message\"]]]],null]],[],false,[\"chat/message/avatar\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-avatar-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)('.chat-user-avatar [data-user-card="discobot"]'));
    });
  });
});
define("discourse/plugins/chat/components/chat-message-collapser-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _templateFactory) {
  "use strict";

  const youtubeCooked = "<p>written text</p>" + '<div class="youtube-onebox lazy-video-container" data-video-id="ytId1" data-video-title="Cats are great" data-provider-name="youtube"> <a href="https://www.youtube.com/watch?v=ytId1"></a>Vid 1</div>' + "<p>more written text</p>" + '<div class="youtube-onebox lazy-video-container" data-video-id="ytId2" data-video-title="Kittens are great" data-provider-name="youtube"> <a href="https://www.youtube.com/watch?v=ytId2"></a>Vid 2</div>' + "<p>and even more</p>";
  const animatedImageCooked = "<p>written text</p>" + '<p><img src="/images/avatar.png" class="animated onebox"></img></p>' + "<p>more written text</p>" + '<p><img src="/images/d-logo-sketch-small.png" class="animated onebox"></img></p>' + "<p>and even more</p>";
  const externalImageCooked = "<p>written text</p>" + '<p><a href="http://cat1.com" class="onebox"><img src=""></img></a></p>' + "<p>more written text</p>" + '<p><a href="http://cat2.com" class="onebox"><img src=""></img></a></p>' + "<p>and even more</p>";
  const imageCooked = "<p>written text</p>" + '<p><img src="/images/avatar.png" alt="shows alt"></p>' + "<p>more written text</p>" + '<p><img src="/images/d-logo-sketch-small.png" alt=""></p>' + "<p>and even more</p>" + '<p><img src="/images/d-logo-sketch.png" class="emoji"></p>';
  const galleryCooked = "<p>written text</p>" + '<div class="onebox imgur-album">' + '<a href="https://imgur.com/gallery/yyVx5lJ">' + '<span class="outer-box"><span><span class="album-title">Le tomtom album</span></span></span>' + '<img src="/images/avatar.png" title="Solution" height="315" width="600">' + "</a>" + "</div>" + "<p>more written text</p>";
  const evilString = "<script>someeviltitle</script>";
  const evilStringEscaped = "&lt;script&gt;someeviltitle&lt;/script&gt;";
  (0, _qunit.module)("Discourse Chat | Component | chat message collapser", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("escapes uploads header", async function (assert) {
      this.set("uploads", [{
        original_filename: evilString
      }]);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @uploads={{this.uploads}} />
      */
      {
        "id": "kWeHUsxZ",
        "block": "[[[8,[39,0],null,[[\"@uploads\"],[[30,0,[\"uploads\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.query)(".chat-message-collapser-link-small").innerHTML.includes(evilStringEscaped));
    });
  });
  (0, _qunit.module)("Discourse Chat | Component | chat message collapser youtube", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("escapes youtube header", async function (assert) {
      this.set("cooked", youtubeCooked.replace("https://www.youtube.com/watch?v=ytId1", `https://www.youtube.com/watch?v=${evilString}`));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.query)(".chat-message-collapser-link").href.includes("%3Cscript%3Esomeeviltitle%3C/script%3E"));
    });
    (0, _qunit.test)("shows youtube link in header", async function (assert) {
      this.set("cooked", youtubeCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const link = (0, _qunitHelpers.queryAll)(".chat-message-collapser-link");
      assert.strictEqual(link.length, 2, "two youtube links rendered");
      assert.strictEqual(link[0].href, "https://www.youtube.com/watch?v=ytId1");
      assert.strictEqual(link[1].href, "https://www.youtube.com/watch?v=ytId2");
    });
    (0, _qunit.test)("shows all user written text", async function (assert) {
      youtubeCooked.youtubeid;
      this.set("cooked", youtubeCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const text = (0, _qunitHelpers.queryAll)(".chat-message-collapser p");
      assert.strictEqual(text.length, 3, "shows all written text");
      assert.strictEqual(text[0].innerText, "written text", "first line of written text");
      assert.strictEqual(text[1].innerText, "more written text", "third line of written text");
      assert.strictEqual(text[2].innerText, "and even more", "fifth line of written text");
    });
    (0, _qunit.test)("collapses and expands cooked youtube", async function (assert) {
      this.set("cooked", youtubeCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const youtubeDivs = (0, _qunitHelpers.queryAll)(".youtube-onebox");
      assert.strictEqual(youtubeDivs.length, 2, "two youtube previews rendered");
      await (0, _testHelpers.click)((0, _qunitHelpers.queryAll)(".chat-message-collapser-opened")[0], "close first preview");
      assert.false((0, _qunitHelpers.visible)(".youtube-onebox[data-video-id='ytId1']"), "first youtube preview hidden");
      assert.true((0, _qunitHelpers.visible)(".youtube-onebox[data-video-id='ytId2']"), "second youtube preview still visible");
      await (0, _testHelpers.click)(".chat-message-collapser-closed");
      assert.strictEqual(youtubeDivs.length, 2, "two youtube previews rendered");
      await (0, _testHelpers.click)((0, _qunitHelpers.queryAll)(".chat-message-collapser-opened")[1], "close second preview");
      assert.true((0, _qunitHelpers.visible)(".youtube-onebox[data-video-id='ytId1']"), "first youtube preview still visible");
      assert.false((0, _qunitHelpers.visible)(".youtube-onebox[data-video-id='ytId2']"), "second youtube preview hidden");
      await (0, _testHelpers.click)(".chat-message-collapser-closed");
      assert.strictEqual(youtubeDivs.length, 2, "two youtube previews rendered");
    });
  });
  (0, _qunit.module)("Discourse Chat | Component | chat message collapser images", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    const imageTextCooked = "<p>A picture of Tomtom</p>";
    (0, _qunit.test)("shows filename for one image", async function (assert) {
      this.set("cooked", imageTextCooked);
      this.set("uploads", [{
        original_filename: "tomtom.jpeg"
      }]);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} @uploads={{this.uploads}} />
      */
      {
        "id": "K9VKIiqS",
        "block": "[[[8,[39,0],null,[[\"@cooked\",\"@uploads\"],[[30,0,[\"cooked\"]],[30,0,[\"uploads\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.query)(".chat-message-collapser-link-small").innerText.includes("tomtom.jpeg"));
    });
    (0, _qunit.test)("shows number of files for multiple images", async function (assert) {
      this.set("cooked", imageTextCooked);
      this.set("uploads", [{}, {}]);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} @uploads={{this.uploads}} />
      */
      {
        "id": "K9VKIiqS",
        "block": "[[[8,[39,0],null,[[\"@cooked\",\"@uploads\"],[[30,0,[\"cooked\"]],[30,0,[\"uploads\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.query)(".chat-message-collapser-link-small").innerText.includes("2 files"));
    });
    (0, _qunit.test)("collapses and expands images", async function (assert) {
      this.set("cooked", imageTextCooked);
      this.set("uploads", [{
        original_filename: "tomtom.png"
      }]);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} @uploads={{this.uploads}} />
      */
      {
        "id": "K9VKIiqS",
        "block": "[[[8,[39,0],null,[[\"@cooked\",\"@uploads\"],[[30,0,[\"cooked\"]],[30,0,[\"uploads\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const uploads = ".chat-uploads";
      const chatImageUpload = ".chat-img-upload";
      assert.true((0, _qunitHelpers.visible)(uploads));
      assert.true((0, _qunitHelpers.visible)(chatImageUpload));
      await (0, _testHelpers.click)(".chat-message-collapser-opened");
      assert.false((0, _qunitHelpers.visible)(uploads));
      assert.false((0, _qunitHelpers.visible)(chatImageUpload));
      await (0, _testHelpers.click)(".chat-message-collapser-closed");
      assert.true((0, _qunitHelpers.visible)(uploads));
      assert.true((0, _qunitHelpers.visible)(chatImageUpload));
    });
  });
  (0, _qunit.module)("Discourse Chat | Component | chat message collapser animated image", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("shows links for animated image", async function (assert) {
      this.set("cooked", animatedImageCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const links = (0, _qunitHelpers.queryAll)("a.chat-message-collapser-link-small");
      assert.true(links[0].innerText.trim().includes("avatar.png"));
      assert.true(links[0].href.includes("avatar.png"));
      assert.true(links[1].innerText.trim().includes("d-logo-sketch-small.png"));
      assert.true(links[1].href.includes("d-logo-sketch-small.png"));
    });
    (0, _qunit.test)("shows all user written text", async function (assert) {
      this.set("cooked", animatedImageCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const text = (0, _qunitHelpers.queryAll)(".chat-message-collapser p");
      assert.strictEqual(text.length, 5, "shows all written text");
      assert.strictEqual(text[0].innerText, "written text");
      assert.strictEqual(text[2].innerText, "more written text");
      assert.strictEqual(text[4].innerText, "and even more");
    });
    (0, _qunit.test)("collapses and expands animated image onebox", async function (assert) {
      this.set("cooked", animatedImageCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const animatedOneboxes = (0, _qunitHelpers.queryAll)(".animated.onebox");
      assert.strictEqual(animatedOneboxes.length, 2, "two oneboxes rendered");
      await (0, _testHelpers.click)((0, _qunitHelpers.queryAll)(".chat-message-collapser-opened")[0], "close first preview");
      assert.false((0, _qunitHelpers.visible)(".onebox[src='/images/avatar.png']"), "first onebox hidden");
      assert.true((0, _qunitHelpers.visible)(".onebox[src='/images/d-logo-sketch-small.png']"), "second onebox still visible");
      await (0, _testHelpers.click)(".chat-message-collapser-closed");
      assert.strictEqual(animatedOneboxes.length, 2, "two oneboxes rendered");
      await (0, _testHelpers.click)((0, _qunitHelpers.queryAll)(".chat-message-collapser-opened")[1], "close second preview");
      assert.true((0, _qunitHelpers.visible)(".onebox[src='/images/avatar.png']"), "first onebox still visible");
      assert.false((0, _qunitHelpers.visible)(".onebox[src='/images/d-logo-sketch-small.png']"), "second onebox hidden");
      await (0, _testHelpers.click)(".chat-message-collapser-closed");
      assert.strictEqual(animatedOneboxes.length, 2, "two oneboxes rendered");
    });
  });
  (0, _qunit.module)("Discourse Chat | Component | chat message collapser external image onebox", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("shows links for animated image", async function (assert) {
      this.set("cooked", externalImageCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const links = (0, _qunitHelpers.queryAll)("a.chat-message-collapser-link-small");
      assert.true(links[0].innerText.trim().includes("http://cat1.com"));
      assert.true(links[0].href.includes("http://cat1.com"));
      assert.true(links[1].innerText.trim().includes("http://cat2.com"));
      assert.true(links[1].href.includes("http://cat2.com"));
    });
    (0, _qunit.test)("shows all user written text", async function (assert) {
      this.set("cooked", externalImageCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const text = (0, _qunitHelpers.queryAll)(".chat-message-collapser p");
      assert.strictEqual(text.length, 5, "shows all written text");
      assert.strictEqual(text[0].innerText, "written text");
      assert.strictEqual(text[2].innerText, "more written text");
      assert.strictEqual(text[4].innerText, "and even more");
    });
    (0, _qunit.test)("collapses and expands image oneboxes", async function (assert) {
      this.set("cooked", externalImageCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const imageOneboxes = (0, _qunitHelpers.queryAll)(".onebox");
      assert.strictEqual(imageOneboxes.length, 2, "two oneboxes rendered");
      await (0, _testHelpers.click)((0, _qunitHelpers.queryAll)(".chat-message-collapser-opened")[0], "close first preview");
      assert.false((0, _qunitHelpers.visible)(".onebox[href='http://cat1.com']"), "first onebox hidden");
      assert.true((0, _qunitHelpers.visible)(".onebox[href='http://cat2.com']"), "second onebox still visible");
      await (0, _testHelpers.click)(".chat-message-collapser-closed");
      assert.strictEqual(imageOneboxes.length, 2, "two oneboxes rendered");
      await (0, _testHelpers.click)((0, _qunitHelpers.queryAll)(".chat-message-collapser-opened")[1], "close second preview");
      assert.true((0, _qunitHelpers.visible)(".onebox[href='http://cat1.com']"), "first onebox still visible");
      assert.false((0, _qunitHelpers.visible)(".onebox[href='http://cat2.com']"), "second onebox hidden");
      await (0, _testHelpers.click)(".chat-message-collapser-closed");
      assert.strictEqual(imageOneboxes.length, 2, "two oneboxes rendered");
    });
  });
  (0, _qunit.module)("Discourse Chat | Component | chat message collapser images", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.skip)("escapes link", async function (assert) {
      this.set("cooked", imageCooked.replace("shows alt", evilString).replace("/images/d-logo-sketch-small.png", evilString));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.queryAll)(".chat-message-collapser-link-small")[0].innerHTML.includes(evilStringEscaped));
      assert.true((0, _qunitHelpers.queryAll)(".chat-message-collapser-link-small")[1].innerHTML.includes("&lt;script&gt;someeviltitle&lt;/script&gt;"));
    });
    (0, _qunit.test)("shows alt or links (if no alt) for linked image", async function (assert) {
      this.set("cooked", imageCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const links = (0, _qunitHelpers.queryAll)("a.chat-message-collapser-link-small");
      assert.true(links[0].innerText.trim().includes("shows alt"));
      assert.true(links[0].href.includes("/images/avatar.png"));
      assert.true(links[1].innerText.trim().includes("/images/d-logo-sketch-small.png"));
      assert.true(links[1].href.includes("/images/d-logo-sketch-small.png"));
    });
    (0, _qunit.test)("shows all user written text", async function (assert) {
      this.set("cooked", imageCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const text = (0, _qunitHelpers.queryAll)(".chat-message-collapser p");
      assert.strictEqual(text.length, 6, "shows all written text");
      assert.strictEqual(text[0].innerText, "written text");
      assert.strictEqual(text[2].innerText, "more written text");
      assert.strictEqual(text[4].innerText, "and even more");
    });
    (0, _qunit.test)("collapses and expands images", async function (assert) {
      this.set("cooked", imageCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const images = (0, _qunitHelpers.queryAll)("img");
      assert.strictEqual(images.length, 3);
      await (0, _testHelpers.click)((0, _qunitHelpers.queryAll)(".chat-message-collapser-opened")[0], "close first preview");
      assert.false((0, _qunitHelpers.visible)("img[src='/images/avatar.png']"), "first image hidden");
      assert.true((0, _qunitHelpers.visible)("img[src='/images/d-logo-sketch-small.png']"), "second image still visible");
      await (0, _testHelpers.click)(".chat-message-collapser-closed");
      assert.strictEqual(images.length, 3);
      await (0, _testHelpers.click)((0, _qunitHelpers.queryAll)(".chat-message-collapser-opened")[1], "close second preview");
      assert.true((0, _qunitHelpers.visible)("img[src='/images/avatar.png']"), "first image still visible");
      assert.false((0, _qunitHelpers.visible)("img[src='/images/d-logo-sketch-small.png']"), "second image hidden");
      await (0, _testHelpers.click)(".chat-message-collapser-closed");
      assert.strictEqual(images.length, 3);
    });
    (0, _qunit.test)("does not show collapser for emoji images", async function (assert) {
      this.set("cooked", imageCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const links = (0, _qunitHelpers.queryAll)("a.chat-message-collapser-link-small");
      const images = (0, _qunitHelpers.queryAll)("img");
      const collapser = (0, _qunitHelpers.queryAll)(".chat-message-collapser-opened");
      assert.strictEqual(links.length, 2);
      assert.strictEqual(images.length, 3, "shows images and emoji");
      assert.strictEqual(collapser.length, 2);
    });
  });
  (0, _qunit.module)("Discourse Chat | Component | chat message collapser galleries", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("escapes title/link", async function (assert) {
      this.set("cooked", galleryCooked.replace("https://imgur.com/gallery/yyVx5lJ", evilString).replace("Le tomtom album", evilString));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.query)(".chat-message-collapser-link-small").href.includes("%3Cscript%3Esomeeviltitle%3C/script%3E"));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-message-collapser-link-small").innerHTML.trim(), "someeviltitle");
    });
    (0, _qunit.test)("removes album title overlay", async function (assert) {
      this.set("cooked", galleryCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.visible)(".album-title"), "album title removed");
    });
    (0, _qunit.test)("shows gallery link", async function (assert) {
      this.set("cooked", galleryCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.query)(".chat-message-collapser-link-small").innerText.includes("Le tomtom album"));
    });
    (0, _qunit.test)("shows all user written text", async function (assert) {
      this.set("cooked", galleryCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      const text = (0, _qunitHelpers.queryAll)(".chat-message-collapser p");
      assert.strictEqual(text.length, 2, "shows all written text");
      assert.strictEqual(text[0].innerText, "written text");
      assert.strictEqual(text[1].innerText, "more written text");
    });
    (0, _qunit.test)("collapses and expands images", async function (assert) {
      this.set("cooked", galleryCooked);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageCollapser @cooked={{this.cooked}} />
      */
      {
        "id": "dVxZq5vw",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-collapser-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.visible)("img"), "image visible initially");
      await (0, _testHelpers.click)((0, _qunitHelpers.queryAll)(".chat-message-collapser-opened")[0], "close preview");
      assert.false((0, _qunitHelpers.visible)("img"), "image hidden");
      await (0, _testHelpers.click)(".chat-message-collapser-closed");
      assert.true((0, _qunitHelpers.visible)("img"), "image visible initially");
    });
  });
});
define("discourse/plugins/chat/components/chat-message-info-test", ["@ember/test-helpers", "qunit", "discourse/models/bookmark", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse-i18n", "discourse/plugins/chat/discourse/lib/fabricators", "discourse/plugins/chat/discourse/models/chat-message", "@ember/template-factory"], function (_testHelpers, _qunit, _bookmark, _componentTest, _qunitHelpers, _discourseI18n, _fabricators, _chatMessage, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-message-info", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    const template = (0, _templateFactory.createTemplateFactory)(
    /*
      
        <Chat::Message::Info @message={{this.message}} @show={{true}} />
      
    */
    {
      "id": "sqMuOJIK",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@message\",\"@show\"],[[30,0,[\"message\"]],true]],null],[1,\"\\n  \"]],[],false,[\"chat/message/info\"]]",
      "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-info-test.js",
      "isStrictMode": false
    });
    (0, _qunit.test)("chat_webhook_event", async function (assert) {
      this.message = _fabricators.default.message({
        chat_webhook_event: {
          username: "discobot"
        }
      });
      await (0, _testHelpers.render)(template);
      assert.strictEqual((0, _qunitHelpers.query)(".chat-message-info__username").innerText.trim(), this.message.chatWebhookEvent.username);
      assert.strictEqual((0, _qunitHelpers.query)(".chat-message-info__bot-indicator").textContent.trim(), _discourseI18n.default.t("chat.bot"));
    });
    (0, _qunit.test)("user", async function (assert) {
      this.message = _fabricators.default.message({
        user: {
          username: "discobot"
        }
      });
      await (0, _testHelpers.render)(template);
      assert.strictEqual((0, _qunitHelpers.query)(".chat-message-info__username").innerText.trim(), this.message.user.username);
    });
    (0, _qunit.test)("date", async function (assert) {
      this.message = _fabricators.default.message({
        user: {
          username: "discobot"
        },
        created_at: moment()
      });
      await (0, _testHelpers.render)(template);
      assert.true((0, _qunitHelpers.exists)(".chat-message-info__date"));
    });
    (0, _qunit.test)("bookmark (with reminder)", async function (assert) {
      this.message = _fabricators.default.message({
        user: {
          username: "discobot"
        },
        bookmark: _bookmark.default.create({
          reminder_at: moment(),
          name: "some name"
        })
      });
      await (0, _testHelpers.render)(template);
      assert.true((0, _qunitHelpers.exists)(".chat-message-info__bookmark .d-icon-discourse-bookmark-clock"));
    });
    (0, _qunit.test)("bookmark (no reminder)", async function (assert) {
      this.message = _chatMessage.default.create(_fabricators.default.channel(), {
        user: {
          username: "discobot"
        },
        bookmark: _bookmark.default.create({
          name: "some name"
        })
      });
      await (0, _testHelpers.render)(template);
      assert.true((0, _qunitHelpers.exists)(".chat-message-info__bookmark .d-icon-bookmark"));
    });
    (0, _qunit.test)("user status", async function (assert) {
      const status = {
        description: "off to dentist",
        emoji: "tooth"
      };
      this.message = _fabricators.default.message({
        user: {
          status
        }
      });
      await (0, _testHelpers.render)(template);
      assert.true((0, _qunitHelpers.exists)(".chat-message-info__status .user-status-message"));
    });
    (0, _qunit.test)("flag status", async function (assert) {
      this.message = _fabricators.default.message({
        user: {
          username: "discobot"
        },
        user_flag_status: 0
      });
      await (0, _testHelpers.render)(template);
      assert.dom(".chat-message-info__flag > .svg-icon-title").hasAttribute("title", _discourseI18n.default.t("chat.you_flagged"));
    });
    (0, _qunit.test)("reviewable", async function (assert) {
      this.message = _fabricators.default.message({
        user: {
          username: "discobot"
        },
        user_flag_status: 0
      });
      await (0, _testHelpers.render)(template);
      assert.dom(".chat-message-info__flag > .svg-icon-title").hasAttribute("title", _discourseI18n.default.t("chat.you_flagged"));
    });
    (0, _qunit.test)("with username classes", async function (assert) {
      this.message = _fabricators.default.message({
        user: {
          username: "discobot",
          admin: true,
          moderator: true,
          new_user: true,
          primary_group_name: "foo"
        }
      });
      await (0, _testHelpers.render)(template);
      assert.dom(".chat-message-info__username.is-staff").exists();
      assert.dom(".chat-message-info__username.is-admin").exists();
      assert.dom(".chat-message-info__username.is-moderator").exists();
      assert.dom(".chat-message-info__username.is-new-user").exists();
      assert.dom(".chat-message-info__username.group--foo").exists();
    });
    (0, _qunit.test)("without username classes", async function (assert) {
      this.message = _fabricators.default.message({
        user: {
          username: "discobot"
        }
      });
      await (0, _testHelpers.render)(template);
      assert.dom(".chat-message-info__username.is-staff").doesNotExist();
      assert.dom(".chat-message-info__username.is-admin").doesNotExist();
      assert.dom(".chat-message-info__username.is-moderator").doesNotExist();
      assert.dom(".chat-message-info__username.is-new-user").doesNotExist();
      assert.dom(".chat-message-info__username.group--foo").doesNotExist();
    });
  });
});
define("discourse/plugins/chat/components/chat-message-left-gutter-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse-i18n", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _discourseI18n, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | Chat::Message::LeftGutter", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    const template = (0, _templateFactory.createTemplateFactory)(
    /*
      
          <Chat::Message::LeftGutter @message={{this.message}} />
        
    */
    {
      "id": "jdPrmNS6",
      "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@message\"],[[30,0,[\"message\"]]]],null],[1,\"\\n    \"]],[],false,[\"chat/message/left-gutter\"]]",
      "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-left-gutter-test.js",
      "isStrictMode": false
    });
    (0, _qunit.test)("default", async function (assert) {
      this.message = _fabricators.default.message();
      await (0, _testHelpers.render)(template);
      assert.dom(".chat-message-left-gutter__date").exists();
    });
    (0, _qunit.test)("with reviewable", async function (assert) {
      this.message = _fabricators.default.message({
        reviewable_id: 1
      });
      await (0, _testHelpers.render)(template);
      assert.dom(".chat-message-left-gutter__flag .svg-icon-title").hasAttribute("title", _discourseI18n.default.t("chat.flagged"));
    });
    (0, _qunit.test)("with flag status", async function (assert) {
      this.message = _fabricators.default.message({
        user_flag_status: 0
      });
      await (0, _testHelpers.render)(template);
      assert.dom(".chat-message-left-gutter__flag .svg-icon-title").hasAttribute("title", _discourseI18n.default.t("chat.you_flagged"));
    });
    (0, _qunit.test)("bookmark", async function (assert) {
      this.message = _fabricators.default.message({
        bookmark: _fabricators.default.bookmark()
      });
      await (0, _testHelpers.render)(template);
      assert.dom(".chat-message-left-gutter__date").exists();
      assert.dom(".chat-message-left-gutter__bookmark").exists();
    });
  });
});
define("discourse/plugins/chat/components/chat-message-reaction-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-message-reaction", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("adds reacted class when user reacted", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ChatMessageReaction @reaction={{hash emoji="heart" reacted=true}} />
          
      */
      {
        "id": "fk7lw5im",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@reaction\"],[[28,[37,1],null,[[\"emoji\",\"reacted\"],[\"heart\",true]]]]],null],[1,\"\\n    \"]],[],false,[\"chat-message-reaction\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-reaction-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".chat-message-reaction.reacted"));
    });
    (0, _qunit.test)("adds reaction name as class", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageReaction @reaction={{hash emoji="heart"}} />
      */
      {
        "id": "HATvPhs2",
        "block": "[[[8,[39,0],null,[[\"@reaction\"],[[28,[37,1],null,[[\"emoji\"],[\"heart\"]]]]],null]],[],false,[\"chat-message-reaction\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-reaction-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(`.chat-message-reaction[data-emoji-name="heart"]`));
    });
    (0, _qunit.test)("title/alt attributes", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageReaction @reaction={{hash emoji="heart"}} />
      */
      {
        "id": "HATvPhs2",
        "block": "[[[8,[39,0],null,[[\"@reaction\"],[[28,[37,1],null,[[\"emoji\"],[\"heart\"]]]]],null]],[],false,[\"chat-message-reaction\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-reaction-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-message-reaction").title, ":heart:");
      assert.strictEqual((0, _qunitHelpers.query)(".chat-message-reaction img").alt, ":heart:");
    });
    (0, _qunit.test)("count of reactions", async function (assert) {
      this.set("count", 0);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ChatMessageReaction @reaction={{hash emoji="heart" count=this.count}} />
          
      */
      {
        "id": "xQJNWdS/",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@reaction\"],[[28,[37,1],null,[[\"emoji\",\"count\"],[\"heart\",[30,0,[\"count\"]]]]]]],null],[1,\"\\n    \"]],[],false,[\"chat-message-reaction\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-reaction-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.exists)(".chat-message-reaction .count"));
      this.set("count", 2);
      assert.strictEqual((0, _qunitHelpers.query)(".chat-message-reaction .count").innerText, "2");
    });
    (0, _qunit.test)("reaction’s image", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageReaction @reaction={{hash emoji="heart"}} />
      */
      {
        "id": "HATvPhs2",
        "block": "[[[8,[39,0],null,[[\"@reaction\"],[[28,[37,1],null,[[\"emoji\"],[\"heart\"]]]]],null]],[],false,[\"chat-message-reaction\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-reaction-test.js",
        "isStrictMode": false
      }));
      const src = (0, _qunitHelpers.query)(".chat-message-reaction img").src;
      assert.true(/heart\.png/.test(src));
    });
    (0, _qunit.test)("click action", async function (assert) {
      this.set("count", 0);
      this.set("react", () => {
        this.set("count", 1);
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ChatMessageReaction class="show" @reaction={{hash emoji="heart" count=this.count}} @onReaction={{this.react}} />
          
      */
      {
        "id": "vyqVwpy5",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"show\"]],[[\"@reaction\",\"@onReaction\"],[[28,[37,1],null,[[\"emoji\",\"count\"],[\"heart\",[30,0,[\"count\"]]]]],[30,0,[\"react\"]]]],null],[1,\"\\n    \"]],[],false,[\"chat-message-reaction\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-reaction-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.exists)(".chat-message-reaction .count"));
      await (0, _testHelpers.click)(".chat-message-reaction");
      assert.strictEqual((0, _qunitHelpers.query)(".chat-message-reaction .count").innerText, "1");
    });
  });
});
define("discourse/plugins/chat/components/chat-message-separator-date-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-message-separator-date", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("first message of the day", async function (assert) {
      this.set("date", moment().format("LLL"));
      this.set("message", {
        formattedFirstMessageDate: this.date
      });
      this.set("fetchMessagesByDate", () => {});
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageSeparatorDate @message={{this.message}} @fetchMessagesByDate={{this.fetchMessagesByDate}} />
      */
      {
        "id": "Qyd93EBh",
        "block": "[[[8,[39,0],null,[[\"@message\",\"@fetchMessagesByDate\"],[[30,0,[\"message\"]],[30,0,[\"fetchMessagesByDate\"]]]],null]],[],false,[\"chat-message-separator-date\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-separator-date-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-message-separator-date").innerText.trim(), this.date);
    });
  });
});
define("discourse/plugins/chat/components/chat-message-separator-new-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse-i18n", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _discourseI18n, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-message-separator-new", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("newest message", async function (assert) {
      this.set("message", {
        newest: true
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageSeparatorNew @message={{this.message}} />
      */
      {
        "id": "zYDZueum",
        "block": "[[[8,[39,0],null,[[\"@message\"],[[30,0,[\"message\"]]]],null]],[],false,[\"chat-message-separator-new\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-separator-new-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.query)(".chat-message-separator-new").innerText.trim(), _discourseI18n.default.t("chat.last_visit"));
    });
  });
});
define("discourse/plugins/chat/components/chat-message-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-message", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    const template = (0, _templateFactory.createTemplateFactory)(
    /*
      
        <ChatMessage @message={{this.message}} />
      
    */
    {
      "id": "+SnKGnUx",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@message\"],[[30,0,[\"message\"]]]],null],[1,\"\\n  \"]],[],false,[\"chat-message\"]]",
      "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-test.js",
      "isStrictMode": false
    });
    (0, _qunit.test)("Message with edits", async function (assert) {
      this.message = _fabricators.default.message({
        edited: true
      });
      await (0, _testHelpers.render)(template);
      assert.true((0, _qunitHelpers.exists)(".chat-message-edited"), "has the correct css class");
    });
    (0, _qunit.test)("Deleted message", async function (assert) {
      this.message = _fabricators.default.message({
        user: this.currentUser,
        deleted_at: moment()
      });
      await (0, _testHelpers.render)(template);
      assert.true((0, _qunitHelpers.exists)(".chat-message-text.-deleted .chat-message-expand"), "has the correct css class and expand button within");
    });
    (0, _qunit.test)("Hidden message", async function (assert) {
      this.message = _fabricators.default.message({
        hidden: true
      });
      await (0, _testHelpers.render)(template);
      assert.true((0, _qunitHelpers.exists)(".chat-message-text.-hidden .chat-message-expand"), "has the correct css class and expand button within");
    });
    (0, _qunit.test)("Message with reply", async function (assert) {
      this.message = _fabricators.default.message({
        inReplyTo: _fabricators.default.message()
      });
      await (0, _testHelpers.render)(template);
      assert.true((0, _qunitHelpers.exists)(".chat-message-container.has-reply"), "has the correct css class");
    });
  });
});
define("discourse/plugins/chat/components/chat-message-text-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-message-text", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("yields", async function (assert) {
      this.set("cooked", "<p></p>");
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ChatMessageText @cooked={{this.cooked}} @uploads={{this.uploads}}>
              <div class="yield-me"></div>
            </ChatMessageText>
          
      */
      {
        "id": "+ZeZR6Nb",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@cooked\",\"@uploads\"],[[30,0,[\"cooked\"]],[30,0,[\"uploads\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"yield-me\"],[12],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"chat-message-text\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-text-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".yield-me"));
    });
    (0, _qunit.test)("shows collapsed", async function (assert) {
      this.set("cooked", '<div class="youtube-onebox lazy-video-container" data-video-id="WaT_rLGuUr8" data-video-title="Japanese Katsu Curry (Pork Cutlet)" data-provider-name="youtube"/>');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageText @cooked={{this.cooked}} @uploads={{this.uploads}} />
      */
      {
        "id": "2xu1kI/6",
        "block": "[[[8,[39,0],null,[[\"@cooked\",\"@uploads\"],[[30,0,[\"cooked\"]],[30,0,[\"uploads\"]]]],null]],[],false,[\"chat-message-text\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-text-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".chat-message-collapser"));
    });
    (0, _qunit.test)("does not collapse a non-image onebox", async function (assert) {
      this.set("cooked", '<p><a href="http://cat1.com" class="onebox"></a></p>');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageText @cooked={{this.cooked}} />
      */
      {
        "id": "16bNWvSH",
        "block": "[[[8,[39,0],null,[[\"@cooked\"],[[30,0,[\"cooked\"]]]],null]],[],false,[\"chat-message-text\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-text-test.js",
        "isStrictMode": false
      }));
      assert.false((0, _qunitHelpers.exists)(".chat-message-collapser"));
    });
    (0, _qunit.test)("shows edits - regular message", async function (assert) {
      this.set("cooked", "<p></p>");
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageText @cooked={{this.cooked}} @edited={{true}} />
      */
      {
        "id": "BtKWL0DT",
        "block": "[[[8,[39,0],null,[[\"@cooked\",\"@edited\"],[[30,0,[\"cooked\"]],true]],null]],[],false,[\"chat-message-text\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-text-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".chat-message-edited"));
    });
    (0, _qunit.test)("shows edits - collapsible message", async function (assert) {
      this.set("cooked", '<div class="youtube-onebox lazy-video-container"></div>');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatMessageText @cooked={{this.cooked}} @edited={{true}} />
      */
      {
        "id": "BtKWL0DT",
        "block": "[[[8,[39,0],null,[[\"@cooked\",\"@edited\"],[[30,0,[\"cooked\"]],true]],null]],[],false,[\"chat-message-text\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-message-text-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".chat-message-edited"));
    });
  });
});
define("discourse/plugins/chat/components/chat-modal-archive-channel-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | <Chat::Modal::ArchiveChannel>", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("channel title is escaped in instructions correctly", async function (assert) {
      this.channel = _fabricators.default.channel({
        title: `<script>someeviltitle</script>`
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::Modal::ArchiveChannel @inline={{true}} @model={{hash channel=this.channel}} />
      */
      {
        "id": "1oUbvwOK",
        "block": "[[[8,[39,0],null,[[\"@inline\",\"@model\"],[true,[28,[37,1],null,[[\"channel\"],[[30,0,[\"channel\"]]]]]]],null]],[],false,[\"chat/modal/archive-channel\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-modal-archive-channel-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.query)(".chat-modal-archive-channel").innerHTML.includes("&lt;script&gt;someeviltitle&lt;/script&gt;"));
    });
  });
});
define("discourse/plugins/chat/components/chat-modal-delete-channel-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | <Chat::Modal::DeleteChannel />", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("channel title is escaped in instructions correctly", async function (assert) {
      this.channel = _fabricators.default.channel({
        title: `<script>someeviltitle</script>`
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::Modal::DeleteChannel @inline={{true}} @model={{hash channel=this.channel}} />
      */
      {
        "id": "g7o7qAvV",
        "block": "[[[8,[39,0],null,[[\"@inline\",\"@model\"],[true,[28,[37,1],null,[[\"channel\"],[[30,0,[\"channel\"]]]]]]],null]],[],false,[\"chat/modal/delete-channel\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-modal-delete-channel-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.query)(".chat-modal-delete-channel__instructions").innerHTML.includes("&lt;script&gt;someeviltitle&lt;/script&gt;"));
    });
  });
});
define("discourse/plugins/chat/components/chat-modal-move-message-to-channel-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | <Chat::Modal::MoveMessageToChannel />", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("channel title is escaped in instructions correctly", async function (assert) {
      this.channel = _fabricators.default.channel({
        title: "<script>someeviltitle</script>"
      });
      this.selectedMessageIds = [this.channel.id];
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
              <Chat::Modal::MoveMessageToChannel
                @inline={{true}}
                @model={{hash sourceChannel=this.channel selectedMessageIds=this.selectedMessageIds}}
              />
            
      */
      {
        "id": "GULOkMS6",
        "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@inline\",\"@model\"],[true,[28,[37,1],null,[[\"sourceChannel\",\"selectedMessageIds\"],[[30,0,[\"channel\"]],[30,0,[\"selectedMessageIds\"]]]]]]],null],[1,\"\\n      \"]],[],false,[\"chat/modal/move-message-to-channel\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-modal-move-message-to-channel-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.query)(".chat-modal-move-message-to-channel").innerHTML.includes("&lt;script&gt;someeviltitle&lt;/script&gt;"));
    });
  });
});
define("discourse/plugins/chat/components/chat-notices-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/create-pretender", "discourse/tests/helpers/qunit-helpers", "discourse-i18n", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _createPretender, _qunitHelpers, _discourseI18n, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-notice", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("displays all notices for a channel", async function (assert) {
      this.channel = _fabricators.default.channel();
      this.manager = this.container.lookup("service:chat-channel-notices-manager");
      this.manager.handleNotice({
        channel_id: this.channel.id,
        text_content: "hello"
      });
      this.manager.handleNotice({
        channel_id: this.channel.id,
        text_content: "goodbye"
      });
      this.manager.handleNotice({
        channel_id: this.channel.id + 1,
        text_content: "N/A"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatNotices @channel={{this.channel}} />
      */
      {
        "id": "Gb5suZmk",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-notices\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-notices-test.js",
        "isStrictMode": false
      }));
      const notices = (0, _qunitHelpers.queryAll)(".chat-notices .chat-notices__notice");
      assert.strictEqual(notices.length, 2, "Two notices are rendered");
      assert.true(notices[0].innerText.includes("hello"));
      assert.true(notices[1].innerText.includes("goodbye"));
    });
    (0, _qunit.test)("Notices can be cleared", async function (assert) {
      this.channel = _fabricators.default.channel();
      this.manager = this.container.lookup("service:chat-channel-notices-manager");
      this.manager.handleNotice({
        channel_id: this.channel.id,
        text_content: "hello"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatNotices @channel={{this.channel}} />
      */
      {
        "id": "Gb5suZmk",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-notices\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-notices-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.queryAll)(".chat-notices .chat-notices__notice").length, 1, "Notice is present");
      await (0, _testHelpers.click)((0, _qunitHelpers.query)(".chat-notices__notice__clear"), "Clear the notice");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".chat-notices .chat-notices__notice").length, 0, "Notice was cleared");
    });
    (0, _qunit.test)("MentionWithoutMembership notice renders", async function (assert) {
      this.channel = _fabricators.default.channel();
      this.manager = this.container.lookup("service:chat-channel-notices-manager");
      const text = "Joffrey can't chat, hermano";
      this.manager.handleNotice({
        channel_id: this.channel.id,
        notice_type: "mention_without_membership",
        data: {
          user_ids: [1],
          message_id: 1,
          text
        }
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatNotices @channel={{this.channel}} />
      */
      {
        "id": "Gb5suZmk",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-notices\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-notices-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual((0, _qunitHelpers.queryAll)(".chat-notices .chat-notices__notice .mention-without-membership-notice").length, 1, "Notice is present");
      assert.dom(".mention-without-membership-notice__body__text").hasText(text);
      assert.dom(".mention-without-membership-notice__body__link").hasText(_discourseI18n.default.t("chat.mention_warning.invite"));
      _createPretender.default.post(`/chat/api/channels/${this.channel.id}/invites`, () => {
        return [200, {
          "Content-Type": "application/json"
        }, {}];
      });
      await (0, _testHelpers.click)((0, _qunitHelpers.query)(".mention-without-membership-notice__body__link"), "Invites the user");

      // I would love to test that the invitation sent text is present here but
      // dismiss is called right away instead of waiting 3 seconds.. Not much we can
      // do about this - at least we are testing that nothing broke all the way through
      // clearing the notice
      assert.strictEqual((0, _qunitHelpers.queryAll)(".chat-notices .chat-notices__notice .mention-without-membership-notice").length, 0, "Notice has been cleared");
    });
  });
});
define("discourse/plugins/chat/components/chat-replying-indicator-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/presence-pretender", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _presencePretender, _qunitHelpers, _fabricators, _templateFactory) {
  "use strict";

  async function addUser(id, username, channelName = "/chat-reply/1") {
    await (0, _presencePretender.joinChannel)(channelName, {
      id,
      avatar_template: "/images/avatar.png",
      username
    });
  }
  async function removeUser(id, channelName = "/chat-reply/1") {
    await (0, _presencePretender.leaveChannel)(channelName, {
      id
    });
  }
  (0, _qunit.module)("Discourse Chat | Component | chat-replying-indicator", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("not displayed when no one is replying", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatReplyingIndicator @presenceChannelName="/chat-reply/1" />
      */
      {
        "id": "4ECVTMdo",
        "block": "[[[8,[39,0],null,[[\"@presenceChannelName\"],[\"/chat-reply/1\"]],null]],[],false,[\"chat-replying-indicator\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-replying-indicator-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-replying-indicator__text").doesNotExist();
    });
    (0, _qunit.test)("working for thread", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatReplyingIndicator @presenceChannelName="/chat-reply/1/thread/1" />
      */
      {
        "id": "hqZ9EAqb",
        "block": "[[[8,[39,0],null,[[\"@presenceChannelName\"],[\"/chat-reply/1/thread/1\"]],null]],[],false,[\"chat-replying-indicator\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-replying-indicator-test.js",
        "isStrictMode": false
      }));
      await addUser(1, "sam", "/chat-reply/1/thread/1");
      assert.strictEqual((0, _qunitHelpers.query)(".chat-replying-indicator__text").innerText, "sam is typing");
    });
    (0, _qunit.test)("doesn’t leak in other indicators", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
                <div class="channel"><ChatReplyingIndicator @presenceChannelName="/chat-reply/1" /></div>
                <div class="thread"><ChatReplyingIndicator @presenceChannelName="/chat-reply/1/thread/1" /></div>
              
      */
      {
        "id": "g+1WPds1",
        "block": "[[[1,\"\\n          \"],[10,0],[14,0,\"channel\"],[12],[8,[39,0],null,[[\"@presenceChannelName\"],[\"/chat-reply/1\"]],null],[13],[1,\"\\n          \"],[10,0],[14,0,\"thread\"],[12],[8,[39,0],null,[[\"@presenceChannelName\"],[\"/chat-reply/1/thread/1\"]],null],[13],[1,\"\\n        \"]],[],false,[\"chat-replying-indicator\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-replying-indicator-test.js",
        "isStrictMode": false
      }));
      await addUser(1, "sam");
      assert.dom(".channel .chat-replying-indicator__text").hasText("sam is typing");
      assert.dom(".thread .chat-replying-indicator__text").doesNotExist();
      await addUser(2, "mark", "/chat-reply/1/thread/1");
      await removeUser(1);
      assert.dom(".channel .chat-replying-indicator__text").doesNotExist();
      assert.dom(".thread .chat-replying-indicator__text").hasText("mark is typing");
    });
    (0, _qunit.test)("displays indicator when user is replying", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatReplyingIndicator @presenceChannelName="/chat-reply/1" />
      */
      {
        "id": "4ECVTMdo",
        "block": "[[[8,[39,0],null,[[\"@presenceChannelName\"],[\"/chat-reply/1\"]],null]],[],false,[\"chat-replying-indicator\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-replying-indicator-test.js",
        "isStrictMode": false
      }));
      await addUser(1, "sam");
      assert.strictEqual((0, _qunitHelpers.query)(".chat-replying-indicator__text").innerText, `sam is typing`);
    });
    (0, _qunit.test)("displays indicator when 2 or 3 users are replying", async function (assert) {
      this.channel = _fabricators.default.channel();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatReplyingIndicator @presenceChannelName="/chat-reply/1" />
      */
      {
        "id": "4ECVTMdo",
        "block": "[[[8,[39,0],null,[[\"@presenceChannelName\"],[\"/chat-reply/1\"]],null]],[],false,[\"chat-replying-indicator\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-replying-indicator-test.js",
        "isStrictMode": false
      }));
      await addUser(1, "sam");
      await addUser(2, "mark");
      assert.dom(".chat-replying-indicator__text").hasText("sam and mark are typing");
    });
    (0, _qunit.test)("displays indicator when 3 users are replying", async function (assert) {
      this.channel = _fabricators.default.channel();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatReplyingIndicator @presenceChannelName="/chat-reply/1" />
      */
      {
        "id": "4ECVTMdo",
        "block": "[[[8,[39,0],null,[[\"@presenceChannelName\"],[\"/chat-reply/1\"]],null]],[],false,[\"chat-replying-indicator\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-replying-indicator-test.js",
        "isStrictMode": false
      }));
      await addUser(1, "sam");
      await addUser(2, "mark");
      await addUser(3, "joffrey");
      assert.dom(".chat-replying-indicator__text").hasText("sam, mark and joffrey are typing");
    });
    (0, _qunit.test)("displays indicator when more than 3 users are replying", async function (assert) {
      this.channel = _fabricators.default.channel();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatReplyingIndicator  @presenceChannelName="/chat-reply/1" />
      */
      {
        "id": "4ECVTMdo",
        "block": "[[[8,[39,0],null,[[\"@presenceChannelName\"],[\"/chat-reply/1\"]],null]],[],false,[\"chat-replying-indicator\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-replying-indicator-test.js",
        "isStrictMode": false
      }));
      await addUser(1, "sam");
      await addUser(2, "mark");
      await addUser(3, "joffrey");
      await addUser(4, "taylor");
      assert.dom(".chat-replying-indicator__text").hasText("sam, mark and 2 others are typing");
    });
    (0, _qunit.test)("filters current user from list of repliers", async function (assert) {
      this.channel = _fabricators.default.channel();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatReplyingIndicator  @presenceChannelName="/chat-reply/1" />
      */
      {
        "id": "4ECVTMdo",
        "block": "[[[8,[39,0],null,[[\"@presenceChannelName\"],[\"/chat-reply/1\"]],null]],[],false,[\"chat-replying-indicator\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-replying-indicator-test.js",
        "isStrictMode": false
      }));
      await addUser(1, "sam");
      await addUser(this.currentUser.id, this.currentUser.username);
      assert.dom(".chat-replying-indicator__text").hasText("sam is typing");
    });
    (0, _qunit.test)("resets presence when channel changes", async function (assert) {
      this.set("presenceChannelName", "/chat-reply/1");
      await addUser(1, "sam");
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatReplyingIndicator @presenceChannelName={{this.presenceChannelName}} />
      */
      {
        "id": "CE3nYBH2",
        "block": "[[[8,[39,0],null,[[\"@presenceChannelName\"],[[30,0,[\"presenceChannelName\"]]]],null]],[],false,[\"chat-replying-indicator\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-replying-indicator-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-replying-indicator__text").hasText("sam is typing");
      this.set("presenceChannelName", "/chat-reply/2");
      assert.dom(".chat-replying-indicator__text").doesNotExist();
    });
  });
});
define("discourse/plugins/chat/components/chat-retention-reminder-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse-i18n", "discourse/plugins/chat/discourse/models/chat-channel", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _discourseI18n, _chatChannel, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-retention-reminder", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("display retention info", async function (assert) {
      this.channel = _chatChannel.default.create({
        chatable_type: "Category"
      });
      this.currentUser.set("needs_channel_retention_reminder", true);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatRetentionReminder @channel={{this.channel}} />
      */
      {
        "id": "EPz6ltPI",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-retention-reminder\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-retention-reminder-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-retention-reminder").includesText(_discourseI18n.default.t("chat.retention_reminders.long", {
        count: this.siteSettings.chat_channel_retention_days
      }));
    });
    (0, _qunit.test)("@type=short", async function (assert) {
      this.channel = _chatChannel.default.create({
        chatable_type: "Category"
      });
      this.currentUser.set("needs_channel_retention_reminder", true);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatRetentionReminder @channel={{this.channel}} @type="short" />
      */
      {
        "id": "CyYEFDvP",
        "block": "[[[8,[39,0],null,[[\"@channel\",\"@type\"],[[30,0,[\"channel\"]],\"short\"]],null]],[],false,[\"chat-retention-reminder\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-retention-reminder-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-retention-reminder").includesText(_discourseI18n.default.t("chat.retention_reminders.short", {
        count: this.siteSettings.chat_channel_retention_days
      }));
    });
  });
});
define("discourse/plugins/chat/components/chat-retention-reminder-text-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse-i18n", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _discourseI18n, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-retention-reminder-text", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("when setting is set on 0", async function (assert) {
      this.channel = _fabricators.default.channel();
      this.siteSettings.chat_channel_retention_days = 0;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatRetentionReminderText @channel={{this.channel}} />
      */
      {
        "id": "bK6lOQ1E",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-retention-reminder-text\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-retention-reminder-text-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-retention-reminder-text").includesText(_discourseI18n.default.t("chat.retention_reminders.indefinitely_long"));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatRetentionReminderText @channel={{this.channel}} @type="short" />
      */
      {
        "id": "WKp9340L",
        "block": "[[[8,[39,0],null,[[\"@channel\",\"@type\"],[[30,0,[\"channel\"]],\"short\"]],null]],[],false,[\"chat-retention-reminder-text\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-retention-reminder-text-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-retention-reminder-text").includesText(_discourseI18n.default.t("chat.retention_reminders.indefinitely_short"));
    });
    (0, _qunit.test)("when channel is a public channel", async function (assert) {
      const count = 10;
      this.channel = _fabricators.default.channel();
      this.siteSettings.chat_channel_retention_days = count;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatRetentionReminderText @channel={{this.channel}} />
      */
      {
        "id": "bK6lOQ1E",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-retention-reminder-text\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-retention-reminder-text-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-retention-reminder-text").includesText(_discourseI18n.default.t("chat.retention_reminders.long", {
        count
      }));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatRetentionReminderText @channel={{this.channel}} @type="short" />
      */
      {
        "id": "WKp9340L",
        "block": "[[[8,[39,0],null,[[\"@channel\",\"@type\"],[[30,0,[\"channel\"]],\"short\"]],null]],[],false,[\"chat-retention-reminder-text\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-retention-reminder-text-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-retention-reminder-text").includesText(_discourseI18n.default.t("chat.retention_reminders.short", {
        count
      }));
    });
    (0, _qunit.test)("when channel is a DM channel", async function (assert) {
      const count = 10;
      this.channel = _fabricators.default.directMessageChannel();
      this.siteSettings.chat_dm_retention_days = count;
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatRetentionReminderText @channel={{this.channel}} />
      */
      {
        "id": "bK6lOQ1E",
        "block": "[[[8,[39,0],null,[[\"@channel\"],[[30,0,[\"channel\"]]]],null]],[],false,[\"chat-retention-reminder-text\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-retention-reminder-text-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-retention-reminder-text").includesText(_discourseI18n.default.t("chat.retention_reminders.long", {
        count
      }));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatRetentionReminderText @channel={{this.channel}} @type="short" />
      */
      {
        "id": "WKp9340L",
        "block": "[[[8,[39,0],null,[[\"@channel\",\"@type\"],[[30,0,[\"channel\"]],\"short\"]],null]],[],false,[\"chat-retention-reminder-text\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-retention-reminder-text-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-retention-reminder-text").includesText(_discourseI18n.default.t("chat.retention_reminders.short", {
        count
      }));
    });
  });
});
define("discourse/plugins/chat/components/chat-thread-header-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-thread-header", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("it safely renders title", async function (assert) {
      const title = "<style>body { background: red;}</style>";
      this.thread = _fabricators.default.thread({
        title
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Chat::Thread::Header @thread={{this.thread}} @channel={{this.thread.channel}} />
          
      */
      {
        "id": "YSbBrs2Q",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@thread\",\"@channel\"],[[30,0,[\"thread\"]],[30,0,[\"thread\",\"channel\"]]]],null],[1,\"\\n    \"]],[],false,[\"chat/thread/header\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-thread-header-test.js",
        "isStrictMode": false
      }));
      assert.ok((0, _qunitHelpers.query)(".c-navbar__title").innerHTML.trim().includes("&lt;style&gt;body { background: red;}&lt;/style&gt;"));
    });
  });
});
define("discourse/plugins/chat/components/chat-thread-list-item-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-thread-list-item", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("it safely renders title", async function (assert) {
      const title = "<style>body { background: red;}</style>";
      this.thread = _fabricators.default.thread({
        title
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Chat::ThreadList::Item @thread={{this.thread}} />
          
      */
      {
        "id": "Kr/MxAlu",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@thread\"],[[30,0,[\"thread\"]]]],null],[1,\"\\n    \"]],[],false,[\"chat/thread-list/item\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-thread-list-item-test.js",
        "isStrictMode": false
      }));
      assert.equal((0, _qunitHelpers.query)(".chat-thread-list-item__title").innerHTML.trim(), "&lt;style&gt;body { background: red;}&lt;/style&gt;");
    });
  });
});
define("discourse/plugins/chat/components/chat-thread-participants-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | <ChatThreadParticipants />", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("no participants", async function (assert) {
      this.thread = _fabricators.default.thread();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatThreadParticipants @thread={{this.thread}} />
      */
      {
        "id": "mPPdjSaI",
        "block": "[[[8,[39,0],null,[[\"@thread\"],[[30,0,[\"thread\"]]]],null]],[],false,[\"chat-thread-participants\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-thread-participants-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-thread-participants").doesNotExist();
    });
    (0, _qunit.test)("@includeOriginalMessageUser=true", async function (assert) {
      const originalMessageUser = _fabricators.default.user({
        username: "bob"
      });
      this.thread = _fabricators.default.thread({
        original_message: _fabricators.default.message({
          user: originalMessageUser
        }),
        preview: _fabricators.default.threadPreview({
          channel: this.channel,
          participant_users: [originalMessageUser, _fabricators.default.user({
            username: "alice"
          })]
        })
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatThreadParticipants @thread={{this.thread}} />
      */
      {
        "id": "mPPdjSaI",
        "block": "[[[8,[39,0],null,[[\"@thread\"],[[30,0,[\"thread\"]]]],null]],[],false,[\"chat-thread-participants\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-thread-participants-test.js",
        "isStrictMode": false
      }));
      assert.dom(".chat-user-avatar[data-username]").exists({
        count: 2
      });
    });
    (0, _qunit.test)("@includeOriginalMessageUser=false", async function (assert) {
      const originalMessageUser = _fabricators.default.user({
        username: "bob"
      });
      this.thread = _fabricators.default.thread({
        original_message: _fabricators.default.message({
          user: originalMessageUser
        }),
        preview: _fabricators.default.threadPreview({
          channel: this.channel,
          participant_users: [originalMessageUser, _fabricators.default.user({
            username: "alice"
          })]
        })
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatThreadParticipants @thread={{this.thread}} @includeOriginalMessageUser={{false}} />
      */
      {
        "id": "O1cNg6AN",
        "block": "[[[8,[39,0],null,[[\"@thread\",\"@includeOriginalMessageUser\"],[[30,0,[\"thread\"]],false]],null]],[],false,[\"chat-thread-participants\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-thread-participants-test.js",
        "isStrictMode": false
      }));
      assert.dom('.chat-user-avatar[data-username="bob"]').doesNotExist();
      assert.dom('.chat-user-avatar[data-username="alice"]').exists();
    });
  });
});
define("discourse/plugins/chat/components/chat-upload-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _templateFactory) {
  "use strict";

  const IMAGE_FIXTURE = {
    id: 290,
    url: null,
    // Nulled out to avoid actually setting the img src - avoids an HTTP request
    original_filename: "image.jpg",
    filesize: 172214,
    width: 1024,
    height: 768,
    thumbnail_width: 666,
    thumbnail_height: 500,
    extension: "jpeg",
    short_url: "upload://mnCnqY5tunCFw2qMgtPnu1mu1C9.jpeg",
    short_path: "/uploads/short-url/mnCnqY5tunCFw2qMgtPnu1mu1C9.jpeg",
    retain_hours: null,
    human_filesize: "168 KB",
    dominant_color: "788370" // rgb(120, 131, 112)
  };
  const VIDEO_FIXTURE = {
    id: 290,
    url: null,
    // Nulled out to avoid actually setting the src - avoids an HTTP request
    original_filename: "video.mp4",
    filesize: 172214,
    width: 1024,
    height: 768,
    thumbnail_width: 666,
    thumbnail_height: 500,
    extension: "mp4",
    short_url: "upload://mnCnqY5tunCFw2qMgtPnu1mu1C9.mp4",
    short_path: "/uploads/short-url/mnCnqY5tunCFw2qMgtPnu1mu1C9.mp4",
    retain_hours: null,
    human_filesize: "168 KB"
  };
  const AUDIO_FIXTURE = {
    id: 290,
    url: null,
    // Nulled out to avoid actually setting the src - avoids an HTTP request
    original_filename: "song.mp3",
    filesize: 172214,
    width: 1024,
    height: 768,
    thumbnail_width: 666,
    thumbnail_height: 500,
    extension: "mp3",
    short_url: "upload://mnCnqY5tunCFw2qMgtPnu1mu1C9.mp3",
    short_path: "/uploads/short-url/mnCnqY5tunCFw2qMgtPnu1mu1C9.mp3",
    retain_hours: null,
    human_filesize: "168 KB"
  };
  const TXT_FIXTURE = {
    id: 290,
    url: "https://example.com/file.txt",
    original_filename: "file.txt",
    filesize: 172214,
    extension: "txt",
    short_url: "upload://mnCnqY5tunCFw2qMgtPnu1mu1C9.jpeg",
    short_path: "/uploads/short-url/mnCnqY5tunCFw2qMgtPnu1mu1C9.jpeg",
    retain_hours: null,
    human_filesize: "168 KB"
  };
  (0, _qunit.module)("Discourse Chat | Component | chat-upload", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("with an image", async function (assert) {
      this.set("upload", IMAGE_FIXTURE);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUpload @upload={{this.upload}} />
      */
      {
        "id": "bRuNXoH4",
        "block": "[[[8,[39,0],null,[[\"@upload\"],[[30,0,[\"upload\"]]]],null]],[],false,[\"chat-upload\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-upload-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)("img.chat-img-upload"), "displays as an image");
      const image = (0, _qunitHelpers.query)("img.chat-img-upload");
      assert.strictEqual(image.loading, "lazy", "is lazy loading");
      assert.strictEqual(image.style.backgroundColor, "rgb(120, 131, 112)", "sets background to dominant color");
      image.dispatchEvent(new Event("load")); // Fake that the image has loaded
      await (0, _testHelpers.settled)();
      assert.strictEqual(image.style.backgroundColor, "", "removes the background color once the image has loaded");
    });
    (0, _qunit.test)("with a video", async function (assert) {
      this.set("upload", VIDEO_FIXTURE);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUpload @upload={{this.upload}} />
      */
      {
        "id": "bRuNXoH4",
        "block": "[[[8,[39,0],null,[[\"@upload\"],[[30,0,[\"upload\"]]]],null]],[],false,[\"chat-upload\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-upload-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)("video.chat-video-upload"), "displays as an video");
      const video = (0, _qunitHelpers.query)("video.chat-video-upload");
      assert.true(video.hasAttribute("controls"), "has video controls");
      assert.strictEqual(video.getAttribute("preload"), "metadata", "video has correct preload settings");
    });
    (0, _qunit.test)("with a audio", async function (assert) {
      this.set("upload", AUDIO_FIXTURE);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUpload @upload={{this.upload}} />
      */
      {
        "id": "bRuNXoH4",
        "block": "[[[8,[39,0],null,[[\"@upload\"],[[30,0,[\"upload\"]]]],null]],[],false,[\"chat-upload\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-upload-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)("audio.chat-audio-upload"), "displays as an audio");
      const audio = (0, _qunitHelpers.query)("audio.chat-audio-upload");
      assert.true(audio.hasAttribute("controls"), "has audio controls");
      assert.strictEqual(audio.getAttribute("preload"), "metadata", "audio has correct preload settings");
    });
    (0, _qunit.test)("non image upload", async function (assert) {
      this.set("upload", TXT_FIXTURE);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUpload @upload={{this.upload}} />
      */
      {
        "id": "bRuNXoH4",
        "block": "[[[8,[39,0],null,[[\"@upload\"],[[30,0,[\"upload\"]]]],null]],[],false,[\"chat-upload\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-upload-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)("a.chat-other-upload"), "displays as a link");
      const link = (0, _qunitHelpers.query)("a.chat-other-upload");
      assert.strictEqual(link.href, TXT_FIXTURE.url, "has the correct URL");
    });
  });
});
define("discourse/plugins/chat/components/chat-user-avatar-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _fabricators, _templateFactory) {
  "use strict";

  function containerSelector(user, options = {}) {
    let onlineSelector = ":not(.is-online)";
    if (options.online) {
      onlineSelector = ".is-online";
    }
    return `.chat-user-avatar${onlineSelector} .chat-user-avatar__container[data-user-card=${user.username}] .avatar[title=${user.username}]`;
  }
  (0, _qunit.module)("Discourse Chat | Component | <ChatUserAvatar />", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("when user is not online", async function (assert) {
      this.user = _fabricators.default.user();
      this.chat = {
        presenceChannel: {
          users: []
        }
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUserAvatar @chat={{this.chat}} @user={{this.user}} />
      */
      {
        "id": "Sj1WLKZw",
        "block": "[[[8,[39,0],null,[[\"@chat\",\"@user\"],[[30,0,[\"chat\"]],[30,0,[\"user\"]]]],null]],[],false,[\"chat-user-avatar\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-avatar-test.js",
        "isStrictMode": false
      }));
      assert.dom(containerSelector(this.user, {
        online: false
      })).exists();
    });
    (0, _qunit.test)("user is online", async function (assert) {
      this.user = _fabricators.default.user();
      this.chat = {
        presenceChannel: {
          users: [{
            id: this.user.id
          }]
        }
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUserAvatar @chat={{this.chat}} @user={{this.user}} />
      */
      {
        "id": "Sj1WLKZw",
        "block": "[[[8,[39,0],null,[[\"@chat\",\"@user\"],[[30,0,[\"chat\"]],[30,0,[\"user\"]]]],null]],[],false,[\"chat-user-avatar\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-avatar-test.js",
        "isStrictMode": false
      }));
      assert.dom(containerSelector(this.user, {
        online: true
      })).exists();
    });
    (0, _qunit.test)("@showPresence=false", async function (assert) {
      this.user = _fabricators.default.user();
      this.chat = {
        presenceChannel: {
          users: [{
            id: this.user.id
          }]
        }
      };
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUserAvatar @showPresence={{false}} @chat={{this.chat}} @user={{this.user}} />
      */
      {
        "id": "NFvj6rCM",
        "block": "[[[8,[39,0],null,[[\"@showPresence\",\"@chat\",\"@user\"],[false,[30,0,[\"chat\"]],[30,0,[\"user\"]]]],null]],[],false,[\"chat-user-avatar\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-avatar-test.js",
        "isStrictMode": false
      }));
      assert.dom(containerSelector(this.user, {
        online: false
      })).exists();
    });
    (0, _qunit.test)("@interactive=true", async function (assert) {
      this.user = _fabricators.default.user();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUserAvatar @interactive={{false}}  @user={{this.user}} />
      */
      {
        "id": "6l4Q9i3e",
        "block": "[[[8,[39,0],null,[[\"@interactive\",\"@user\"],[false,[30,0,[\"user\"]]]],null]],[],false,[\"chat-user-avatar\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-avatar-test.js",
        "isStrictMode": false
      }));
      assert.dom(".clickable").doesNotExist();
    });
  });
});
define("discourse/plugins/chat/components/chat-user-card-button-test", ["@ember/test-helpers", "qunit", "sinon", "discourse/tests/helpers/component-test", "discourse/plugins/chat/discourse/lib/fabricators", "ember-this-fallback/deprecations-helper", "@ember/template-factory"], function (_testHelpers, _qunit, _sinon, _componentTest, _fabricators, _deprecationsHelper, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | <Chat::UserCardButton />", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("when current user can send direct messages", async function (assert) {
      _sinon.default.stub(this.owner.lookup("service:chat"), "userCanDirectMessage").value(true);
      this.user = _fabricators.default.user();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::UserCardButton @user={{user}} />
      */
      {
        "id": "raOiWzYi",
        "block": "[[[8,[39,0],null,[[\"@user\"],[[30,0,[\"user\"]]]],null],[1,[28,[32,0],[\"[[\\\"The `user` property path was used in the `/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-card-button-test.js` template without using `this`. This fallback behavior has been deprecated, all properties must be looked up on `this` when used in the template: {{this.user}}\\\",false,{\\\"id\\\":\\\"ember-this-fallback.this-property-fallback\\\",\\\"until\\\":\\\"n/a\\\",\\\"for\\\":\\\"ember-this-fallback\\\",\\\"url\\\":\\\"https://deprecations.emberjs.com/v3.x#toc_this-property-fallback\\\",\\\"since\\\":{\\\"available\\\":\\\"0.2.0\\\"}}]]\"],null]]],[],false,[\"chat/user-card-button\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-card-button-test.js",
        "scope": () => [_deprecationsHelper.default],
        "isStrictMode": false
      }));
      assert.dom(".chat-user-card-btn").exists("it shows the chat button");
    });
    (0, _qunit.test)("when current user can’t send direct messages", async function (assert) {
      _sinon.default.stub(this.owner.lookup("service:chat"), "userCanDirectMessage").value(false);
      this.user = _fabricators.default.user();
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::UserCardButton @user={{user}} />
      */
      {
        "id": "raOiWzYi",
        "block": "[[[8,[39,0],null,[[\"@user\"],[[30,0,[\"user\"]]]],null],[1,[28,[32,0],[\"[[\\\"The `user` property path was used in the `/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-card-button-test.js` template without using `this`. This fallback behavior has been deprecated, all properties must be looked up on `this` when used in the template: {{this.user}}\\\",false,{\\\"id\\\":\\\"ember-this-fallback.this-property-fallback\\\",\\\"until\\\":\\\"n/a\\\",\\\"for\\\":\\\"ember-this-fallback\\\",\\\"url\\\":\\\"https://deprecations.emberjs.com/v3.x#toc_this-property-fallback\\\",\\\"since\\\":{\\\"available\\\":\\\"0.2.0\\\"}}]]\"],null]]],[],false,[\"chat/user-card-button\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-card-button-test.js",
        "scope": () => [_deprecationsHelper.default],
        "isStrictMode": false
      }));
      assert.dom(".chat-user-card-btn").doesNotExist("it doesn’t show the chat button");
    });
    (0, _qunit.test)("when displayed user is suspended", async function (assert) {
      _sinon.default.stub(this.owner.lookup("service:chat"), "userCanDirectMessage").value(true);
      this.user = _fabricators.default.user({
        suspended_till: moment().add(1, "year").toDate()
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Chat::UserCardButton @user={{user}}/>
      */
      {
        "id": "raOiWzYi",
        "block": "[[[8,[39,0],null,[[\"@user\"],[[30,0,[\"user\"]]]],null],[1,[28,[32,0],[\"[[\\\"The `user` property path was used in the `/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-card-button-test.js` template without using `this`. This fallback behavior has been deprecated, all properties must be looked up on `this` when used in the template: {{this.user}}\\\",false,{\\\"id\\\":\\\"ember-this-fallback.this-property-fallback\\\",\\\"until\\\":\\\"n/a\\\",\\\"for\\\":\\\"ember-this-fallback\\\",\\\"url\\\":\\\"https://deprecations.emberjs.com/v3.x#toc_this-property-fallback\\\",\\\"since\\\":{\\\"available\\\":\\\"0.2.0\\\"}}]]\"],null]]],[],false,[\"chat/user-card-button\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-card-button-test.js",
        "scope": () => [_deprecationsHelper.default],
        "isStrictMode": false
      }));
      assert.dom(".chat-user-card-btn").doesNotExist("it doesn’t show the chat button");
    });
  });
});
define("discourse/plugins/chat/components/chat-user-display-name-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _templateFactory) {
  "use strict";

  function displayName() {
    return (0, _qunitHelpers.query)(".chat-user-display-name").innerText.trim();
  }
  (0, _qunit.module)("Discourse Chat | Component | chat-user-display-name | prioritize username in UX", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("username and no name", async function (assert) {
      this.siteSettings.prioritize_username_in_ux = true;
      this.set("user", {
        username: "bob",
        name: null
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUserDisplayName @user={{this.user}} />
      */
      {
        "id": "A9eSdKlw",
        "block": "[[[8,[39,0],null,[[\"@user\"],[[30,0,[\"user\"]]]],null]],[],false,[\"chat-user-display-name\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-display-name-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual(displayName(), "bob");
    });
    (0, _qunit.test)("username and name", async function (assert) {
      this.siteSettings.prioritize_username_in_ux = true;
      this.set("user", {
        username: "bob",
        name: "Bobcat"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUserDisplayName @user={{this.user}} />
      */
      {
        "id": "A9eSdKlw",
        "block": "[[[8,[39,0],null,[[\"@user\"],[[30,0,[\"user\"]]]],null]],[],false,[\"chat-user-display-name\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-display-name-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual(displayName(), "bob — Bobcat");
    });
  });
  (0, _qunit.module)("Discourse Chat | Component | chat-user-display-name | prioritize name in UX", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("no name", async function (assert) {
      this.siteSettings.prioritize_username_in_ux = false;
      this.set("user", {
        username: "bob",
        name: null
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUserDisplayName @user={{this.user}} />
      */
      {
        "id": "A9eSdKlw",
        "block": "[[[8,[39,0],null,[[\"@user\"],[[30,0,[\"user\"]]]],null]],[],false,[\"chat-user-display-name\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-display-name-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual(displayName(), "bob");
    });
    (0, _qunit.test)("name and username", async function (assert) {
      this.siteSettings.prioritize_username_in_ux = false;
      this.set("user", {
        username: "bob",
        name: "Bobcat"
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUserDisplayName @user={{this.user}} />
      */
      {
        "id": "A9eSdKlw",
        "block": "[[[8,[39,0],null,[[\"@user\"],[[30,0,[\"user\"]]]],null]],[],false,[\"chat-user-display-name\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-display-name-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual(displayName(), "Bobcat — bob");
    });
  });
});
define("discourse/plugins/chat/components/chat-user-info-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | chat-user-info", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("avatar and name", async function (assert) {
      this.set("user", this.currentUser);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ChatUserInfo @user={{this.user}} />
      */
      {
        "id": "WZjk3swb",
        "block": "[[[8,[39,0],null,[[\"@user\"],[[30,0,[\"user\"]]]],null]],[],false,[\"chat-user-info\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/chat-user-info-test.js",
        "isStrictMode": false
      }));
      assert.dom().containsText(this.user.username);
      assert.dom().containsText(this.user.name);
    });
  });
});
define("discourse/plugins/chat/components/collapser-test", ["@ember/template", "@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_template, _testHelpers, _qunit, _componentTest, _qunitHelpers, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | collapser", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("renders header", async function (assert) {
      this.set("header", (0, _template.htmlSafe)(`<div class="cat">tomtom</div>`));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Collapser @header={{this.header}} />
      */
      {
        "id": "O+1SK+ah",
        "block": "[[[8,[39,0],null,[[\"@header\"],[[30,0,[\"header\"]]]],null]],[],false,[\"collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/collapser-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".cat"));
    });
    (0, _qunit.test)("collapses and expands yielded body", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Collapser>
              <div class="cat">body text</div>
            </Collapser>
          
      */
      {
        "id": "8SQlRYCI",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"cat\"],[12],[1,\"body text\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"collapser\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/collapser-test.js",
        "isStrictMode": false
      }));
      const openButton = ".chat-message-collapser-closed";
      const closeButton = ".chat-message-collapser-opened";
      const body = ".cat";
      assert.true((0, _qunitHelpers.visible)(body));
      await (0, _testHelpers.click)(closeButton);
      assert.false((0, _qunitHelpers.visible)(body));
      await (0, _testHelpers.click)(openButton);
      assert.true((0, _qunitHelpers.visible)(body));
    });
  });
});
define("discourse/plugins/chat/components/dc-filter-input-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Component | dc-filter-input", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("Left icon", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DcFilterInput @icons={{hash left="bell"}} />
      */
      {
        "id": "vPSPriS6",
        "block": "[[[8,[39,0],null,[[\"@icons\"],[[28,[37,1],null,[[\"left\"],[\"bell\"]]]]],null]],[],false,[\"dc-filter-input\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/dc-filter-input-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".d-icon-bell.-left"));
    });
    (0, _qunit.test)("Right icon", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DcFilterInput @icons={{hash right="bell"}} />
      */
      {
        "id": "biJcUzF/",
        "block": "[[[8,[39,0],null,[[\"@icons\"],[[28,[37,1],null,[[\"right\"],[\"bell\"]]]]],null]],[],false,[\"dc-filter-input\",\"hash\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/dc-filter-input-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".d-icon-bell.-right"));
    });
    (0, _qunit.test)("containerClass argument", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DcFilterInput @containerClass="foo" />
      */
      {
        "id": "T6yfAvyM",
        "block": "[[[8,[39,0],null,[[\"@containerClass\"],[\"foo\"]],null]],[],false,[\"dc-filter-input\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/dc-filter-input-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)(".dc-filter-input-container.foo"));
    });
    (0, _qunit.test)("Html attributes", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DcFilterInput data-foo="1" placeholder="bar" />
      */
      {
        "id": "Q9WD/L0i",
        "block": "[[[8,[39,0],[[24,\"data-foo\",\"1\"],[24,\"placeholder\",\"bar\"]],null,null]],[],false,[\"dc-filter-input\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/dc-filter-input-test.js",
        "isStrictMode": false
      }));
      assert.true((0, _qunitHelpers.exists)('.dc-filter-input[data-foo="1"]'));
      assert.true((0, _qunitHelpers.exists)('.dc-filter-input[placeholder="bar"]'));
    });
    (0, _qunit.test)("Filter action", async function (assert) {
      this.set("value", null);
      this.set("action", event => {
        this.set("value", event.target.value);
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DcFilterInput @filterAction={{this.action}} />
      */
      {
        "id": "yt46/o+8",
        "block": "[[[8,[39,0],null,[[\"@filterAction\"],[[30,0,[\"action\"]]]],null]],[],false,[\"dc-filter-input\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/dc-filter-input-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.fillIn)(".dc-filter-input", "foo");
      assert.strictEqual(this.value, "foo");
    });
    (0, _qunit.test)("Focused state", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DcFilterInput @filterAction={{this.action}} />
      */
      {
        "id": "yt46/o+8",
        "block": "[[[8,[39,0],null,[[\"@filterAction\"],[[30,0,[\"action\"]]]],null]],[],false,[\"dc-filter-input\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/components/dc-filter-input-test.js",
        "isStrictMode": false
      }));
      await (0, _testHelpers.triggerEvent)(".dc-filter-input", "focusin");
      assert.true((0, _qunitHelpers.exists)(".dc-filter-input-container.is-focused"));
      await (0, _testHelpers.triggerEvent)(".dc-filter-input", "focusout");
      assert.false((0, _qunitHelpers.exists)(".dc-filter-input-container.is-focused"));
    });
  });
});
define("discourse/plugins/chat/helpers/chat-default-pretender", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = applyDefaultHandlers;
  function applyDefaultHandlers(helpers) {
    this.post("/chat/api/channels/:channel_id/drafts", () => helpers.response({}));
    this.post("/chat/api/channels/:channel_id/threads/:thread_id/drafts", () => helpers.response({}));
  }
});
define("discourse/plugins/chat/helpers/chat-pretenders", ["exports", "discourse/models/user", "discourse-common/lib/object", "discourse/plugins/chat/chat-fixtures"], function (_exports, _user, _object, _chatFixtures) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.baseChatPretenders = baseChatPretenders;
  _exports.chatChannelPretender = chatChannelPretender;
  _exports.directMessageChannelPretender = directMessageChannelPretender;
  function baseChatPretenders(server, helper) {
    server.get("/chat/:chatChannelId/messages.json", () => helper.response((0, _chatFixtures.generateChatView)(_user.default.current())));
    server.post("/chat/:chatChannelId.json", () => {
      return helper.response({
        success: "OK"
      });
    });
    server.get("/notifications", () => {
      return helper.response({
        notifications: [{
          id: 42,
          user_id: 1,
          notification_type: 29,
          read: false,
          high_priority: true,
          created_at: "2021-01-01 12:00:00 UTC",
          fancy_title: "First notification",
          post_number: null,
          topic_id: null,
          slug: null,
          data: {
            chat_message_id: 174,
            chat_channel_id: 9,
            chat_channel_title: "Site",
            mentioned_by_username: "hawk"
          }
        }, {
          id: 43,
          user_id: 1,
          notification_type: 29,
          read: false,
          high_priority: true,
          created_at: "2021-01-01 12:00:00 UTC",
          fancy_title: "Second notification",
          post_number: null,
          topic_id: null,
          slug: null,
          data: {
            identifier: "engineers",
            is_group: true,
            chat_message_id: 174,
            chat_channel_id: 9,
            chat_channel_title: "Site",
            mentioned_by_username: "hawk"
          }
        }, {
          id: 44,
          user_id: 1,
          notification_type: 29,
          read: false,
          high_priority: true,
          created_at: "2021-01-01 12:00:00 UTC",
          fancy_title: "Third notification",
          post_number: null,
          topic_id: null,
          slug: null,
          data: {
            identifier: "all",
            chat_message_id: 174,
            chat_channel_id: 9,
            chat_channel_title: "Site",
            mentioned_by_username: "hawk"
          }
        }, {
          id: 45,
          user_id: 1,
          notification_type: 31,
          read: false,
          high_priority: true,
          created_at: "2021-01-01 12:00:00 UTC",
          fancy_title: "Fourth notification",
          post_number: null,
          topic_id: null,
          slug: null,
          data: {
            message: "chat.invitation_notification",
            chat_message_id: 174,
            chat_channel_id: 9,
            chat_channel_title: "Site",
            invited_by_username: "hawk"
          }
        }, {
          id: 46,
          user_id: 1,
          notification_type: 29,
          read: false,
          high_priority: true,
          created_at: "2021-01-01 12:00:00 UTC",
          fancy_title: "Fifth notification",
          post_number: null,
          topic_id: null,
          slug: null,
          data: {
            chat_message_id: 174,
            chat_channel_id: 9,
            chat_channel_title: "Site",
            is_direct_message_channel: true,
            mentioned_by_username: "hawk"
          }
        }],
        seen_notification_id: null
      });
    });
    server.get("/chat/lookup/:messageId.json", () => helper.response((0, _chatFixtures.generateChatView)(_user.default.current())));
    server.post("/uploads/lookup-urls", () => {
      return helper.response([]);
    });
    server.get("/chat/api/category-chatables/:categoryId/permissions.json", () => helper.response({
      allowed_groups: ["@everyone"],
      private: false
    }));
  }
  function directMessageChannelPretender(server, helper, opts = {
    unread_count: 0,
    muted: false
  }) {
    let copy = (0, _object.cloneJSON)(_chatFixtures.directMessageChannels[0]);
    copy.chat_channel.currentUserMembership.muted = opts.muted;
    server.get("/chat/chat_channels/75.json", () => helper.response(copy));
  }
  function chatChannelPretender(server, helper, changes = []) {
    // changes is [{ id: X, unread_count: Y, muted: true}]
    let copy = (0, _object.cloneJSON)(_chatFixtures.chatChannels);
    changes.forEach(change => {
      let found;
      found = copy.public_channels.find(c => c.id === change.id);
      if (found) {
        found.currentUserMembership.muted = change.muted;
      }
      if (!found) {
        found = copy.direct_message_channels.find(c => c.id === change.id);
        if (found) {
          found.currentUserMembership.muted = change.muted;
        }
      }
    });
    server.get("/chat/chat_channels.json", () => helper.response(copy));
  }
});
define("discourse/plugins/chat/integration/components/user-menu/chat-notifications-list-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/create-pretender", "discourse/tests/helpers/qunit-helpers", "discourse-i18n", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _createPretender, _qunitHelpers, _discourseI18n, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Integration | Component | user-menu | chat-notifications-list", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    hooks.beforeEach(() => {
      _createPretender.default.get("/notifications", () => {
        return (0, _createPretender.response)({
          notifications: []
        });
      });
    });
    const template = (0, _templateFactory.createTemplateFactory)(
    /*
      <UserMenu::ChatNotificationsList/>
    */
    {
      "id": "uMkPEaHK",
      "block": "[[[8,[39,0],null,null,null]],[],false,[\"user-menu/chat-notifications-list\"]]",
      "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/integration/components/user-menu/chat-notifications-list-test.js",
      "isStrictMode": false
    });
    (0, _qunit.test)("empty state when there are no notifications", async function (assert) {
      await (0, _testHelpers.render)(template);
      assert.true((0, _qunitHelpers.exists)(".empty-state .empty-state-body"));
      assert.strictEqual((0, _qunitHelpers.query)(".empty-state .empty-state-title").textContent.trim(), _discourseI18n.default.t("user_menu.no_chat_notifications_title"));
    });
  });
});
define("discourse/plugins/chat/unit/helpers/format-chat-date-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _fabricators, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Unit | Helpers | format-chat-date", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("link to chat message", async function (assert) {
      const channel = _fabricators.default.channel();
      this.message = _fabricators.default.message({
        channel
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{format-chat-date this.message}}
      */
      {
        "id": "m4M1itgb",
        "block": "[[[1,[28,[35,0],[[30,0,[\"message\"]]],null]]],[],false,[\"format-chat-date\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/unit/helpers/format-chat-date-test.js",
        "isStrictMode": false
      }));
      assert.equal((0, _qunitHelpers.query)(".chat-time").getAttribute("href"), `/chat/c/-/${channel.id}/${this.message.id}`);
    });
  });
});
define("discourse/plugins/chat/unit/helpers/tonable-emoji-title-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Unit | Helpers | tonable-emoji-title", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("When emoji is not tonable", async function (assert) {
      this.set("emoji", {
        name: "foo",
        tonable: false
      });
      this.set("diversity", 1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{tonable-emoji-title this.emoji this.diversity}}
      */
      {
        "id": "8TuLZ/PG",
        "block": "[[[1,[28,[35,0],[[30,0,[\"emoji\"]],[30,0,[\"diversity\"]]],null]]],[],false,[\"tonable-emoji-title\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/unit/helpers/tonable-emoji-title-test.js",
        "isStrictMode": false
      }));
      assert.equal(document.querySelector("#ember-testing").innerText.trim(), ":foo:");
    });
    (0, _qunit.test)("When emoji is tonable and diversity is 1", async function (assert) {
      this.set("emoji", {
        name: "foo",
        tonable: true
      });
      this.set("diversity", 1);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{tonable-emoji-title this.emoji this.diversity}}
      */
      {
        "id": "8TuLZ/PG",
        "block": "[[[1,[28,[35,0],[[30,0,[\"emoji\"]],[30,0,[\"diversity\"]]],null]]],[],false,[\"tonable-emoji-title\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/unit/helpers/tonable-emoji-title-test.js",
        "isStrictMode": false
      }));
      assert.equal(document.querySelector("#ember-testing").innerText.trim(), ":foo:");
    });
    (0, _qunit.test)("When emoji is tonable and diversity is greater than 1", async function (assert) {
      this.set("emoji", {
        name: "foo",
        tonable: true
      });
      this.set("diversity", 2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{tonable-emoji-title this.emoji this.diversity}}
      */
      {
        "id": "8TuLZ/PG",
        "block": "[[[1,[28,[35,0],[[30,0,[\"emoji\"]],[30,0,[\"diversity\"]]],null]]],[],false,[\"tonable-emoji-title\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/chat/unit/helpers/tonable-emoji-title-test.js",
        "isStrictMode": false
      }));
      assert.equal(document.querySelector("#ember-testing").innerText.trim(), ":foo:t2:");
    });
  });
});
define("discourse/plugins/chat/unit/lib/chat-composer-buttons-test", ["qunit", "discourse/plugins/chat/discourse/lib/chat-composer-buttons"], function (_qunit, _chatComposerButtons) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Unit | chat-composer-buttons", function (hooks) {
    hooks.beforeEach(function () {
      (0, _chatComposerButtons.registerChatComposerButton)({
        id: "foo",
        icon: "times",
        dependentKeys: ["test"]
      });
      (0, _chatComposerButtons.registerChatComposerButton)({
        id: "bar",
        translatedLabel() {
          return this.baz;
        }
      });
    });
    hooks.afterEach(function () {
      (0, _chatComposerButtons.clearChatComposerButtons)();
    });
    (0, _qunit.test)("chatComposerButtons", function (assert) {
      const button = (0, _chatComposerButtons.chatComposerButtons)({
        baz: "fooz"
      }, "inline")[1];
      assert.equal(button.id, "bar");
      assert.equal(button.label, "fooz");
    });
    (0, _qunit.test)("chatComposerButtonsDependentKeys", function (assert) {
      assert.deepEqual((0, _chatComposerButtons.chatComposerButtonsDependentKeys)(), ["test"]);
    });
  });
});
define("discourse/plugins/chat/unit/lib/chat-emoji-reaction-store-test", ["@ember/application", "ember-qunit", "qunit"], function (_application, _emberQunit, _qunit) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Unit | chat-emoji-reaction-store", function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      this.siteSettings = (0, _application.getOwner)(this).lookup("service:site-settings");
      this.chatEmojiReactionStore = (0, _application.getOwner)(this).lookup("service:chat-emoji-reaction-store");
      this.chatEmojiReactionStore.siteSettings = this.siteSettings;
      this.chatEmojiReactionStore.reset();
    });
    hooks.afterEach(function () {
      this.chatEmojiReactionStore.reset();
    });
    (0, _qunit.test)("defaults", function (assert) {
      assert.deepEqual(this.chatEmojiReactionStore.favorites, this.siteSettings.default_emoji_reactions.split("|").filter(val => val));
    });
    (0, _qunit.test)("diversity", function (assert) {
      assert.strictEqual(this.chatEmojiReactionStore.diversity, 1);
      this.chatEmojiReactionStore.diversity = 2;
      assert.strictEqual(this.chatEmojiReactionStore.diversity, 2);
    });
    (0, _qunit.test)("#favorites with defaults", function (assert) {
      this.siteSettings.default_emoji_reactions = "smile|heart|tada";
      assert.deepEqual(this.chatEmojiReactionStore.favorites, ["smile", "heart", "tada"]);
    });
    (0, _qunit.test)("#favorites", function (assert) {
      this.chatEmojiReactionStore.storedFavorites = ["grinning"];
      assert.deepEqual(this.chatEmojiReactionStore.favorites, ["grinning"]);
    });
    (0, _qunit.test)("#favorites when tracking multiple times the same emoji", function (assert) {
      this.chatEmojiReactionStore.storedFavorites = ["grinning", "yum", "not_yum", "yum"];
      assert.deepEqual(this.chatEmojiReactionStore.favorites, ["yum", "grinning", "not_yum"], "it favors count over order");
    });
    (0, _qunit.test)("#favorites when reaching displayed limit", function (assert) {
      this.chatEmojiReactionStore.storedFavorites = [];
      [...Array(this.chatEmojiReactionStore.MAX_TRACKED_EMOJIS)].forEach((_, index) => {
        this.chatEmojiReactionStore.track("yum" + index);
      });
      this.chatEmojiReactionStore.track("grinning");
      assert.strictEqual(this.chatEmojiReactionStore.favorites.length, this.chatEmojiReactionStore.MAX_DISPLAYED_EMOJIS, "it enforces the max length");
    });
    (0, _qunit.test)("#storedFavorites", function (assert) {
      this.chatEmojiReactionStore.storedFavorites = [];
      this.chatEmojiReactionStore.track("yum");
      assert.deepEqual(this.chatEmojiReactionStore.storedFavorites, ["yum"].concat(this.siteSettings.default_emoji_reactions.split("|")));
    });
    (0, _qunit.test)("#storedFavorites when tracking different emojis", function (assert) {
      this.chatEmojiReactionStore.storedFavorites = [];
      this.chatEmojiReactionStore.track("yum");
      this.chatEmojiReactionStore.track("not_yum");
      this.chatEmojiReactionStore.track("yum");
      this.chatEmojiReactionStore.track("grinning");
      assert.deepEqual(this.chatEmojiReactionStore.storedFavorites, ["grinning", "yum", "not_yum", "yum"].concat(this.siteSettings.default_emoji_reactions.split("|")), "it ensures last in is first");
    });
    (0, _qunit.test)("#storedFavorites when tracking an emoji after reaching the limit", function (assert) {
      this.chatEmojiReactionStore.storedFavorites = [];
      [...Array(this.chatEmojiReactionStore.MAX_TRACKED_EMOJIS)].forEach(() => {
        this.chatEmojiReactionStore.track("yum");
      });
      this.chatEmojiReactionStore.track("grinning");
      assert.strictEqual(this.chatEmojiReactionStore.storedFavorites.length, this.chatEmojiReactionStore.MAX_TRACKED_EMOJIS, "it enforces the max length");
      assert.strictEqual(this.chatEmojiReactionStore.storedFavorites.firstObject, "grinning", "it correctly stores the last tracked emoji");
    });
  });
});
define("discourse/plugins/chat/unit/lib/get-reaction-text-test", ["qunit", "discourse/plugins/chat/discourse/lib/fabricators", "discourse/plugins/chat/discourse/lib/get-reaction-text"], function (_qunit, _fabricators, _getReactionText) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Unit | get-reaction-text", function () {
    (0, _qunit.test)("no reaction ", function (assert) {
      const reaction = _fabricators.default.reaction({
        count: 0,
        users: []
      });
      const currentUser = _fabricators.default.user();
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, currentUser), undefined);
    });
    (0, _qunit.test)("current user reacted - one reaction", function (assert) {
      const currentUser = _fabricators.default.user();
      const reaction = _fabricators.default.reaction({
        count: 1,
        users: [currentUser],
        reacted: true
      });
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, currentUser), "<span>You reacted with </span>:heart:");
    });
    (0, _qunit.test)("current user reacted - two reactions", function (assert) {
      const currentUser = _fabricators.default.user();
      const secondUser = _fabricators.default.user({
        username: "martin"
      });
      const reaction = _fabricators.default.reaction({
        count: 2,
        users: [currentUser, secondUser],
        reacted: true
      });
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, currentUser), "<span>You and martin reacted with </span>:heart:");
    });
    (0, _qunit.test)("current user reacted - more than display limit reactions", function (assert) {
      const currentUser = _fabricators.default.user();
      const otherUsers = Array.from(Array(_getReactionText.MAX_DISPLAYED_USERNAMES + 1)).map((_, i) => _fabricators.default.user({
        username: "user" + i
      }));
      const reaction = _fabricators.default.reaction({
        count: [currentUser].concat(otherUsers).length,
        users: [currentUser].concat(otherUsers),
        reacted: true
      });
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, currentUser), "<span>You, user0, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14 and 1 other reacted with </span>:heart:");
    });
    (0, _qunit.test)("current user reacted - less or equal than display limit reactions", function (assert) {
      const currentUser = _fabricators.default.user();
      const otherUsers = Array.from(Array(_getReactionText.MAX_DISPLAYED_USERNAMES - 2)).map((_, i) => _fabricators.default.user({
        username: "user" + i
      }));
      const reaction = _fabricators.default.reaction({
        count: [currentUser].concat(otherUsers).length,
        users: [currentUser].concat(otherUsers),
        reacted: true
      });
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, currentUser), "<span>You, user0, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11 and user12 reacted with </span>:heart:");
    });
    (0, _qunit.test)("current user reacted - one reaction", function (assert) {
      const currentUser = _fabricators.default.user();
      const reaction = _fabricators.default.reaction({
        count: 1,
        users: [currentUser],
        reacted: true
      });
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, currentUser), "<span>You reacted with </span>:heart:");
    });
    (0, _qunit.test)("current user reacted - two reactions", function (assert) {
      const currentUser = _fabricators.default.user();
      const secondUser = _fabricators.default.user({
        username: "martin"
      });
      const reaction = _fabricators.default.reaction({
        count: 2,
        users: [currentUser, secondUser],
        reacted: true
      });
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, currentUser), "<span>You and martin reacted with </span>:heart:");
    });
    (0, _qunit.test)("current user reacted - more than display limit reactions", function (assert) {
      const currentUser = _fabricators.default.user();
      const otherUsers = Array.from(Array(_getReactionText.MAX_DISPLAYED_USERNAMES + 1)).map((_, i) => _fabricators.default.user({
        username: "user" + i
      }));
      const reaction = _fabricators.default.reaction({
        count: [currentUser].concat(otherUsers).length,
        users: [currentUser].concat(otherUsers),
        reacted: true
      });
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, currentUser), "<span>You, user0, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14 and 1 other reacted with </span>:heart:");
    });
    (0, _qunit.test)("current user reacted - less or equal than display limit reactions", function (assert) {
      const currentUser = _fabricators.default.user();
      const otherUsers = Array.from(Array(_getReactionText.MAX_DISPLAYED_USERNAMES - 2)).map((_, i) => _fabricators.default.user({
        username: "user" + i
      }));
      const reaction = _fabricators.default.reaction({
        count: [currentUser].concat(otherUsers).length,
        users: [currentUser].concat(otherUsers),
        reacted: true
      });
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, currentUser), "<span>You, user0, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11 and user12 reacted with </span>:heart:");
    });
    (0, _qunit.test)("current user didn't react - one reaction", function (assert) {
      const user = _fabricators.default.user({
        username: "martin"
      });
      const reaction = _fabricators.default.reaction({
        count: 1,
        users: [user]
      });
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, _fabricators.default.user()), "<span>martin reacted with </span>:heart:");
    });
    (0, _qunit.test)("current user didn't react - two reactions", function (assert) {
      const firstUser = _fabricators.default.user({
        username: "claude"
      });
      const secondUser = _fabricators.default.user({
        username: "martin"
      });
      const reaction = _fabricators.default.reaction({
        count: 2,
        users: [firstUser, secondUser]
      });
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, _fabricators.default.user()), "<span>claude and martin reacted with </span>:heart:");
    });
    (0, _qunit.test)("current user didn't react - more than display limit reactions", function (assert) {
      const users = Array.from(Array(_getReactionText.MAX_DISPLAYED_USERNAMES + 1)).map((_, i) => _fabricators.default.user({
        username: "user" + i
      }));
      const reaction = _fabricators.default.reaction({
        count: users.length,
        users
      });
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, _fabricators.default.user()), "<span>user0, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14 and 1 other reacted with </span>:heart:");
    });
    (0, _qunit.test)("current user didn't react - less or equal than display limit reactions", function (assert) {
      const users = Array.from(Array(_getReactionText.MAX_DISPLAYED_USERNAMES - 1)).map((_, i) => _fabricators.default.user({
        username: "user" + i
      }));
      const reaction = _fabricators.default.reaction({
        count: users.length,
        users
      });
      assert.strictEqual((0, _getReactionText.getReactionText)(reaction, _fabricators.default.user()), "<span>user0, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12 and user13 reacted with </span>:heart:");
    });
  });
});
define("discourse/plugins/chat/unit/lib/slugify-channel-test", ["qunit", "discourse/plugins/chat/discourse/lib/slugify-channel"], function (_qunit, _slugifyChannel) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Unit | slugify-channel", function () {
    (0, _qunit.test)("defaults for title", function (assert) {
      assert.equal((0, _slugifyChannel.default)({
        title: "Foo bar"
      }), "foo-bar");
    });
    (0, _qunit.test)("a very long name for the title", function (assert) {
      const string = "xAq8l5ca2CtEToeMLe2pEr2VUGQBx3HPlxbkDExKrJHp4f7jCVw9id1EQv1N1lYMRdAIiZNnn94Kr0uU0iiEeVO4XkBVmpW8Mknmd";
      assert.equal((0, _slugifyChannel.default)({
        title: string
      }), string.toLowerCase().slice(0, -1));
    });
    (0, _qunit.test)("a cyrillic name for the title", function (assert) {
      const string = "Русская литература и фольклор";
      assert.equal((0, _slugifyChannel.default)({
        title: string
      }), "русская-литература-и-фольклор");
    });
    (0, _qunit.test)("channel has escapedTitle", function (assert) {
      assert.equal((0, _slugifyChannel.default)({
        escapedTitle: "Foo bar"
      }), "foo-bar");
    });
    (0, _qunit.test)("channel has slug and title", function (assert) {
      assert.equal((0, _slugifyChannel.default)({
        title: "Foo bar",
        slug: "some-other-thing"
      }), "some-other-thing", "slug takes priority");
    });
  });
});
define("discourse/plugins/chat/unit/models/chat-message-test", ["qunit", "discourse/plugins/chat/discourse/lib/fabricators", "discourse/plugins/chat/discourse/models/chat-message"], function (_qunit, _fabricators, _chatMessage) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Unit |  Models | chat-message", function () {
    (0, _qunit.test)(".persisted", function (assert) {
      const channel = _fabricators.default.channel();
      let message = _chatMessage.default.create(channel, {
        id: null
      });
      assert.strictEqual(message.persisted, false);
      message = _chatMessage.default.create(channel, {
        id: 1,
        staged: true
      });
      assert.strictEqual(message.persisted, false);
      message = _chatMessage.default.create(channel, {
        id: 1,
        staged: false
      });
      assert.strictEqual(message.persisted, true);
    });
  });
});
define("discourse/plugins/chat/unit/services/chat-channel-info-route-origin-manager-test", ["@ember/application", "ember-qunit", "qunit", "discourse/plugins/chat/discourse/services/chat-channel-info-route-origin-manager"], function (_application, _emberQunit, _qunit, _chatChannelInfoRouteOriginManager) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Unit | Service | chat-channel-info-route-origin-manager", function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      this.manager = (0, _application.getOwner)(this).lookup("service:chat-channel-info-route-origin-manager");
    });
    hooks.afterEach(function () {
      this.manager.origin = null;
    });
    (0, _qunit.test)(".origin", function (assert) {
      this.manager.origin = _chatChannelInfoRouteOriginManager.ORIGINS.channnel;
      assert.strictEqual(this.manager.origin, _chatChannelInfoRouteOriginManager.ORIGINS.channnel);
    });
    (0, _qunit.test)(".isBrowse", function (assert) {
      this.manager.origin = _chatChannelInfoRouteOriginManager.ORIGINS.browse;
      assert.strictEqual(this.manager.isBrowse, true);
      this.manager.origin = null;
      assert.strictEqual(this.manager.isBrowse, false);
      this.manager.origin = _chatChannelInfoRouteOriginManager.ORIGINS.channel;
      assert.strictEqual(this.manager.isBrowse, false);
    });
    (0, _qunit.test)(".isChannel", function (assert) {
      this.manager.origin = _chatChannelInfoRouteOriginManager.ORIGINS.channnel;
      assert.strictEqual(this.manager.isChannel, true);
      this.manager.origin = _chatChannelInfoRouteOriginManager.ORIGINS.browse;
      assert.strictEqual(this.manager.isChannel, false);
      this.manager.origin = null;
      assert.strictEqual(this.manager.isChannel, true);
    });
  });
});
define("discourse/plugins/chat/unit/services/chat-drafts-manager-test", ["@ember/application", "ember-qunit", "qunit", "discourse/plugins/chat/discourse/lib/fabricators"], function (_application, _emberQunit, _qunit, _fabricators) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Unit | Service | chat-drafts-manager", function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      this.subject = (0, _application.getOwner)(this).lookup("service:chat-drafts-manager");
    });
    (0, _qunit.test)("storing and retrieving message", async function (assert) {
      const message1 = _fabricators.default.message();
      await this.subject.add(message1, message1.channel.id);
      assert.strictEqual(this.subject.get(message1.channel.id), message1);
      const message2 = _fabricators.default.message();
      await this.subject.add(message2, message2.channel.id);
      assert.strictEqual(this.subject.get(message2.channel.id), message2);
    });
    (0, _qunit.test)("#reset", async function (assert) {
      const message = _fabricators.default.message();
      await this.subject.add(message, message.channel.id);
      assert.strictEqual(Object.keys(this.subject.drafts).length, 1);
      this.subject.reset();
      assert.strictEqual(Object.keys(this.subject.drafts).length, 0);
    });
  });
});
define("discourse/plugins/chat/unit/services/chat-drawer-size-test", ["@ember/application", "ember-qunit", "qunit"], function (_application, _emberQunit, _qunit) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Unit | Service | chat-drawer-size", function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      this.subject = (0, _application.getOwner)(this).lookup("service:chat-drawer-size");
    });
    (0, _qunit.test)("get size (with default)", async function (assert) {
      assert.deepEqual(this.subject.size, {
        width: 400,
        height: 530
      });
    });
    (0, _qunit.test)("set size", async function (assert) {
      this.subject.size = {
        width: 400,
        height: 500
      };
      assert.deepEqual(this.subject.size, {
        width: 400,
        height: 500
      });
    });
    (0, _qunit.test)("min size", async function (assert) {
      this.subject.size = {
        width: 100,
        height: 100
      };
      assert.deepEqual(this.subject.size, {
        width: 250,
        height: 300
      });
    });
  });
});
define("discourse/plugins/chat/unit/services/chat-emoji-picker-manager-test", ["@ember/application", "@ember/test-helpers", "ember-qunit", "qunit", "discourse/tests/helpers/create-pretender"], function (_application, _testHelpers, _emberQunit, _qunit, _createPretender) {
  "use strict";

  function emojisResponse() {
    return {
      favorites: [{
        name: "sad"
      }]
    };
  }
  (0, _qunit.module)("Discourse Chat | Unit | Service | chat-emoji-picker-manager", function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      _createPretender.default.get("/chat/emojis.json", () => {
        return [200, {}, emojisResponse()];
      });
      this.manager = (0, _application.getOwner)(this).lookup("service:chat-emoji-picker-manager");
    });
    hooks.afterEach(function () {
      this.manager.close();
    });
    (0, _qunit.test)("addVisibleSections", async function (assert) {
      this.manager.addVisibleSections(["favorites", "objects"]);
      assert.deepEqual(this.manager.visibleSections, ["favorites", "smileys_&_emotion", "objects"]);
    });
    (0, _qunit.test)("sections", async function (assert) {
      assert.deepEqual(this.manager.sections, []);
      this.manager.open({});
      assert.deepEqual(this.manager.sections, []);
      await (0, _testHelpers.settled)();
      assert.deepEqual(this.manager.sections, ["favorites"]);
    });
    (0, _qunit.test)("open", async function (assert) {
      this.manager.open({
        context: "chat-composer"
      });
      assert.ok(this.manager.loading);
      assert.ok(this.manager.picker);
      assert.strictEqual(this.manager.picker.context, "chat-composer");
      assert.deepEqual(this.manager.visibleSections, ["favorites", "smileys_&_emotion"]);
      assert.strictEqual(this.manager.lastVisibleSection, "favorites");
      await (0, _testHelpers.settled)();
      assert.deepEqual(this.manager.emojis, emojisResponse());
      assert.strictEqual(this.manager.loading, false);
    });
    (0, _qunit.test)("closeExisting", async function (assert) {
      this.manager.open({
        context: "channel-composer",
        trigger: "foo"
      });
      this.manager.addVisibleSections("objects");
      this.manager.lastVisibleSection = "objects";
      this.manager.open({
        context: "thread-composer",
        trigger: "bar"
      });
      assert.strictEqual(this.manager.picker.context, "thread-composer", "it resets the picker to latest picker");
      assert.deepEqual(this.manager.visibleSections, ["favorites", "smileys_&_emotion"], "it resets sections");
      assert.strictEqual(this.manager.lastVisibleSection, "favorites", "it resets last visible section");
    });
    (0, _qunit.test)("close", async function (assert) {
      this.manager.open({
        context: "channel-composer"
      });
      assert.ok(this.manager.picker);
      this.manager.addVisibleSections("objects");
      this.manager.lastVisibleSection = "objects";
      this.manager.close();
      assert.ok(this.manager.closing);
      assert.ok(this.manager.picker);
      await (0, _testHelpers.settled)();
      assert.notOk(this.manager.picker);
      assert.notOk(this.manager.closing);
      assert.deepEqual(this.manager.visibleSections, ["favorites", "smileys_&_emotion"], "it resets visible sections");
      assert.strictEqual(this.manager.lastVisibleSection, "favorites", "it resets last visible section");
    });
  });
});
define("discourse/plugins/chat/unit/services/chat-guardian-test", ["@ember/object", "qunit", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/fabricators"], function (_object, _qunit, _qunitHelpers, _fabricators) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Discourse Chat | Unit | Service | chat-guardian", function (needs) {
    needs.hooks.beforeEach(function () {
      Object.defineProperty(this, "chatGuardian", {
        get: () => this.container.lookup("service:chat-guardian")
      });
      Object.defineProperty(this, "siteSettings", {
        get: () => this.container.lookup("service:site-settings")
      });
      Object.defineProperty(this, "currentUser", {
        get: () => this.container.lookup("service:current-user")
      });
    });
    needs.user();
    needs.settings();
    (0, _qunit.test)("#canEditChatChannel", async function (assert) {
      (0, _object.set)(this.currentUser, "has_chat_enabled", false);
      (0, _object.set)(this.currentUser, "admin", false);
      (0, _object.set)(this.currentUser, "moderator", false);
      this.siteSettings.chat_enabled = false;
      assert.notOk(this.chatGuardian.canEditChatChannel());
      (0, _object.set)(this.currentUser, "has_chat_enabled", true);
      (0, _object.set)(this.currentUser, "admin", true);
      this.siteSettings.chat_enabled = false;
      assert.notOk(this.chatGuardian.canEditChatChannel());
      (0, _object.set)(this.currentUser, "has_chat_enabled", false);
      (0, _object.set)(this.currentUser, "admin", false);
      (0, _object.set)(this.currentUser, "moderator", false);
      this.siteSettings.chat_enabled = true;
      assert.notOk(this.chatGuardian.canEditChatChannel());
      (0, _object.set)(this.currentUser, "has_chat_enabled", false);
      (0, _object.set)(this.currentUser, "admin", true);
      this.siteSettings.chat_enabled = true;
      assert.notOk(this.chatGuardian.canEditChatChannel());
      (0, _object.set)(this.currentUser, "has_chat_enabled", true);
      (0, _object.set)(this.currentUser, "admin", false);
      (0, _object.set)(this.currentUser, "moderator", false);
      this.siteSettings.chat_enabled = true;
      assert.notOk(this.chatGuardian.canEditChatChannel());
      (0, _object.set)(this.currentUser, "has_chat_enabled", true);
      (0, _object.set)(this.currentUser, "admin", true);
      this.siteSettings.chat_enabled = true;
      assert.ok(this.chatGuardian.canEditChatChannel());
    });
    (0, _qunit.test)("#canUseChat", async function (assert) {
      (0, _object.set)(this.currentUser, "has_chat_enabled", false);
      this.siteSettings.chat_enabled = true;
      assert.notOk(this.chatGuardian.canUseChat());
      (0, _object.set)(this.currentUser, "has_chat_enabled", true);
      this.siteSettings.chat_enabled = false;
      assert.notOk(this.chatGuardian.canUseChat());
      (0, _object.set)(this.currentUser, "has_chat_enabled", true);
      this.siteSettings.chat_enabled = true;
      assert.ok(this.chatGuardian.canUseChat());
    });
    (0, _qunit.test)("#canArchiveChannel", async function (assert) {
      const channel = _fabricators.default.channel();
      (0, _object.set)(this.currentUser, "has_chat_enabled", true);
      (0, _object.set)(this.currentUser, "admin", true);
      this.siteSettings.chat_enabled = true;
      this.siteSettings.chat_allow_archiving_channels = true;
      assert.ok(this.chatGuardian.canArchiveChannel(channel));
      (0, _object.set)(this.currentUser, "admin", false);
      (0, _object.set)(this.currentUser, "moderator", false);
      assert.notOk(this.chatGuardian.canArchiveChannel(channel));
      (0, _object.set)(this.currentUser, "admin", true);
      (0, _object.set)(this.currentUser, "moderator", true);
      channel.status = "read_only";
      assert.notOk(this.chatGuardian.canArchiveChannel(channel));
      channel.status = "open";
      channel.status = "archived";
      assert.notOk(this.chatGuardian.canArchiveChannel(channel));
      channel.status = "open";
    });
  });
});
define("discourse/plugins/chat/unit/services/chat-state-manager-test", ["@ember/application", "ember-qunit", "qunit", "sinon", "discourse/models/site", "discourse/plugins/chat/discourse/services/chat-state-manager"], function (_application, _emberQunit, _qunit, _sinon, _site, _chatStateManager) {
  "use strict";

  (0, _qunit.module)("Discourse Chat | Unit | Service | chat-state-manager", function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      this.subject = (0, _application.getOwner)(this).lookup("service:chat-state-manager");
    });
    hooks.afterEach(function () {
      this.subject.reset();
    });
    (0, _qunit.test)("isFullPagePreferred", function (assert) {
      assert.notOk(this.subject.isFullPagePreferred);
      this.subject.prefersFullPage();
      assert.ok(this.subject.isFullPagePreferred);
      this.subject.prefersDrawer();
      assert.notOk(this.subject.isFullPagePreferred);
      this.subject.prefersDrawer();
      _site.default.currentProp("mobileView", true);
      assert.ok(this.subject.isFullPagePreferred);
    });
    (0, _qunit.test)("isDrawerPreferred", function (assert) {
      assert.ok(this.subject.isDrawerPreferred);
      this.subject.prefersFullPage();
      assert.notOk(this.subject.isDrawerPreferred);
      this.subject.prefersDrawer();
      assert.ok(this.subject.isDrawerPreferred);
    });
    (0, _qunit.test)("lastKnownChatURL", function (assert) {
      assert.strictEqual(this.subject.lastKnownChatURL, "/chat");
      this.subject.storeChatURL("/bar");
      assert.strictEqual(this.subject.lastKnownChatURL, "/bar");
    });
    (0, _qunit.test)("lastKnownAppURL", function (assert) {
      assert.strictEqual(this.subject.lastKnownAppURL, "/latest");
      _sinon.default.stub(this.subject.router, "currentURL").value("/foo");
      this.subject.storeAppURL();
      assert.strictEqual(this.subject.lastKnownAppURL, "/foo");
      this.subject.storeAppURL("/bar");
      assert.strictEqual(this.subject.lastKnownAppURL, "/bar");
    });
    (0, _qunit.test)("isFullPageActive", function (assert) {
      _sinon.default.stub(this.subject.router, "currentRouteName").value("foo");
      assert.notOk(this.subject.isFullPageActive);
      _sinon.default.stub(this.subject.router, "currentRouteName").value("chat");
      assert.ok(this.subject.isFullPageActive);
    });
    (0, _qunit.test)("didCollapseDrawer", function (assert) {
      this.subject.didCollapseDrawer();
      assert.strictEqual(this.subject.isDrawerExpanded, false);
      assert.strictEqual(this.subject.isDrawerActive, true);
    });
    (0, _qunit.test)("didExpandDrawer", function (assert) {
      const stub = _sinon.default.stub(this.owner.lookup("service:chat"), "updatePresence");
      this.subject.didExpandDrawer();
      assert.strictEqual(this.subject.isDrawerExpanded, true);
      assert.strictEqual(this.subject.isDrawerActive, true);
      _sinon.default.assert.calledOnce(stub);
    });
    (0, _qunit.test)("didCloseDrawer", function (assert) {
      const stub = _sinon.default.stub(this.owner.lookup("service:chat"), "updatePresence");
      this.subject.didCloseDrawer();
      assert.strictEqual(this.subject.isDrawerExpanded, false);
      assert.strictEqual(this.subject.isDrawerActive, false);
      _sinon.default.assert.calledOnce(stub);
    });
    (0, _qunit.test)("didOpenDrawer", function (assert) {
      const stub = _sinon.default.stub(this.owner.lookup("service:chat"), "updatePresence");
      this.subject.didOpenDrawer();
      assert.strictEqual(this.subject.isDrawerExpanded, true);
      assert.strictEqual(this.subject.isDrawerActive, true);
      assert.strictEqual(this.subject.lastKnownChatURL, "/chat");
      this.subject.didOpenDrawer("/foo");
      assert.strictEqual(this.subject.lastKnownChatURL, "/foo");
      _sinon.default.assert.calledTwice(stub);
    });
    (0, _qunit.test)("callbacks", function (assert) {
      this.state = null;
      (0, _chatStateManager.addChatDrawerStateCallback)(state => {
        this.state = state;
      });
      this.subject.didOpenDrawer();
      assert.strictEqual(this.state.isDrawerActive, true);
      assert.strictEqual(this.state.isDrawerExpanded, true);
      this.subject.didCloseDrawer();
      assert.strictEqual(this.state.isDrawerActive, false);
      assert.strictEqual(this.state.isDrawerExpanded, false);
      (0, _chatStateManager.resetChatDrawerStateCallbacks)();
    });
  });
});
define("discourse/plugins/chat/unit/utility/plugin-api-test", ["@ember/application", "ember-qunit", "qunit", "discourse/lib/plugin-api", "discourse/models/user", "discourse/tests/helpers/create-pretender", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/chat/discourse/lib/chat-message-interactor", "discourse/plugins/chat/discourse/lib/fabricators"], function (_application, _emberQunit, _qunit, _pluginApi, _user, _createPretender, _qunitHelpers, _chatMessageInteractor, _fabricators) {
  "use strict";

  (0, _qunit.module)("Chat | Unit | Utility | plugin-api", function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)("#sendChatMessage", async function (assert) {
      const done = assert.async();
      _createPretender.default.post("/chat/1", request => {
        assert.strictEqual(request.url, "/chat/1");
        assert.strictEqual(request.requestBody, "thread_id=2&message=hello");
        done();
        return [200, {}, {}];
      });
      (0, _pluginApi.withPluginApi)("1.1.0", async api => {
        await api.sendChatMessage(1, {
          message: "hello",
          threadId: 2
        });
      });
    });
    (0, _qunit.test)("#removeChatComposerSecondaryActions", async function (assert) {
      (0, _pluginApi.withPluginApi)("1.1.0", async api => {
        // assert that the api method is defined
        assert.equal(typeof api.removeChatComposerSecondaryActions, "function");
        (0, _qunitHelpers.logIn)();
        const currentUser = _user.default.current();
        (0, _application.getOwner)(this).unregister("service:current-user");
        (0, _application.getOwner)(this).register("service:current-user", currentUser, {
          instantiate: false
        });
        const message = _fabricators.default.message({
          user: currentUser
        });
        const context = "channel";
        const interactor = new _chatMessageInteractor.default((0, _application.getOwner)(this), message, context);

        // assert that the initial secondary actions are present
        const secondaryActions = interactor.secondaryActions;
        assert.ok(secondaryActions.length > 0);
        try {
          // remove the first secondary action listed
          api.removeChatComposerSecondaryActions(secondaryActions[0].id);
          const updatedSecondaryActions = interactor.secondaryActions;

          // assert that the secondary action was removed
          assert.ok(updatedSecondaryActions.length < secondaryActions.length, "the updated secondary actions must contain less items than the original");
          assert.notOk(updatedSecondaryActions.map(v => v.id).includes(secondaryActions[0]), "the updated secondary actions must not include the removed action");
        } finally {
          // reset the secondary actions removed to prevent leakage to other tests
          (0, _chatMessageInteractor.resetRemovedChatComposerSecondaryActions)();
        }
      });
    });
  });
});//# sourceMappingURL=chat_tests.map
