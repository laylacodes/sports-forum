define("discourse/plugins/poll/acceptance/poll-breakdown-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers"], function (_testHelpers, _qunit, _qunitHelpers) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Poll breakdown", function (needs) {
    needs.user();
    needs.settings({
      poll_enabled: true,
      poll_groupable_user_fields: "something"
    });
    needs.pretender((server, helper) => {
      server.get("/polls/grouped_poll_results.json", () => helper.response({
        grouped_results: [{
          group: "Engineering",
          options: [{
            digest: "687a1ccf3c6a260f9aeeb7f68a1d463c",
            html: "This Is",
            votes: 1
          }, {
            digest: "9377906763a1221d31d656ea0c4a4495",
            html: "A test for sure",
            votes: 1
          }, {
            digest: "ecf47c65a85a0bb20029072b1b721977",
            html: "Why not give it some more",
            votes: 1
          }]
        }, {
          group: "Marketing",
          options: [{
            digest: "687a1ccf3c6a260f9aeeb7f68a1d463c",
            html: "This Is",
            votes: 1
          }, {
            digest: "9377906763a1221d31d656ea0c4a4495",
            html: "A test for sure",
            votes: 1
          }, {
            digest: "ecf47c65a85a0bb20029072b1b721977",
            html: "Why not give it some more",
            votes: 1
          }]
        }]
      }));
    });
    (0, _qunit.test)("Displaying the poll breakdown modal", async function (assert) {
      await (0, _testHelpers.visit)("/t/-/topic_with_pie_chart_poll");
      await (0, _testHelpers.click)(".widget-dropdown-header");
      assert.ok((0, _qunitHelpers.exists)(".item-showBreakdown"), "shows the breakdown button when poll_groupable_user_fields is non-empty");
      await (0, _testHelpers.click)(".item-showBreakdown");
      assert.ok((0, _qunitHelpers.exists)(".poll-breakdown-total-votes"), "displays the vote count");
      assert.strictEqual((0, _qunitHelpers.count)(".poll-breakdown-chart-container"), 2, "renders a chart for each of the groups in group_results response");
      assert.ok((0, _qunitHelpers.query)(".poll-breakdown-chart-container > canvas").$chartjs, "$chartjs is defined on the pie charts");
    });
    (0, _qunit.test)("Changing the display mode from percentage to count", async function (assert) {
      await (0, _testHelpers.visit)("/t/-/topic_with_pie_chart_poll");
      await (0, _testHelpers.click)(".widget-dropdown-header");
      await (0, _testHelpers.click)(".item-showBreakdown");
      assert.strictEqual((0, _qunitHelpers.query)(".poll-breakdown-option-count").textContent.trim(), "40.0%", "displays the correct vote percentage");
      await (0, _testHelpers.click)(".modal-tabs .count");
      assert.strictEqual((0, _qunitHelpers.query)(".poll-breakdown-option-count").textContent.trim(), "2", "displays the correct vote count");
      await (0, _testHelpers.click)(".modal-tabs .percentage");
      assert.strictEqual((0, _qunitHelpers.query)(".poll-breakdown-option-count").textContent.trim(), "40.0%", "displays the percentage again");
    });
  });
});
define("discourse/plugins/poll/acceptance/poll-builder-disabled-test", ["qunit", "discourse/tests/helpers/qunit-helpers", "discourse/plugins/poll/helpers/display-poll-builder-button"], function (_qunit, _qunitHelpers, _displayPollBuilderButton) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Poll Builder - polls are disabled", function (needs) {
    needs.user();
    needs.settings({
      poll_enabled: false,
      poll_minimum_trust_level_to_create: 2
    });
    (0, _qunit.test)("regular user - sufficient trust level", async function (assert) {
      (0, _qunitHelpers.updateCurrentUser)({
        moderator: false,
        admin: false,
        trust_level: 3
      });
      await (0, _displayPollBuilderButton.displayPollBuilderButton)();
      assert.ok(!(0, _qunitHelpers.exists)(".select-kit-row[data-value='showPollBuilder']"), "it hides the builder button");
    });
    (0, _qunit.test)("regular user - insufficient trust level", async function (assert) {
      (0, _qunitHelpers.updateCurrentUser)({
        moderator: false,
        admin: false,
        trust_level: 1
      });
      await (0, _displayPollBuilderButton.displayPollBuilderButton)();
      assert.ok(!(0, _qunitHelpers.exists)(".select-kit-row[data-value='showPollBuilder']"), "it hides the builder button");
    });
    (0, _qunit.test)("staff", async function (assert) {
      (0, _qunitHelpers.updateCurrentUser)({
        moderator: true
      });
      await (0, _displayPollBuilderButton.displayPollBuilderButton)();
      assert.ok(!(0, _qunitHelpers.exists)(".select-kit-row[data-value='showPollBuilder']"), "it hides the builder button");
    });
  });
});
define("discourse/plugins/poll/acceptance/poll-builder-enabled-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers", "discourse-i18n", "discourse/plugins/poll/helpers/display-poll-builder-button"], function (_testHelpers, _qunit, _qunitHelpers, _discourseI18n, _displayPollBuilderButton) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Poll Builder - polls are enabled", function (needs) {
    needs.user();
    needs.settings({
      poll_enabled: true,
      poll_minimum_trust_level_to_create: 1
    });
    (0, _qunit.test)("regular user - sufficient trust level", async function (assert) {
      (0, _qunitHelpers.updateCurrentUser)({
        moderator: false,
        admin: false,
        trust_level: 1
      });
      await (0, _displayPollBuilderButton.displayPollBuilderButton)();
      const pollBuilderButtonSelector = `.select-kit-row[data-name='${_discourseI18n.default.t("poll.ui_builder.title")}']`;
      assert.dom(pollBuilderButtonSelector).exists("it shows the builder button");
      await (0, _testHelpers.click)(pollBuilderButtonSelector);
      assert.true((0, _qunitHelpers.exists)(".poll-type-value-regular.active"), "regular type is active");
      await (0, _testHelpers.click)(".poll-type-value-multiple");
      assert.true((0, _qunitHelpers.exists)(".poll-type-value-multiple.active"), "multiple type is active");
      await (0, _testHelpers.click)(".poll-type-value-regular");
      assert.true((0, _qunitHelpers.exists)(".poll-type-value-regular.active"), "regular type is active");
    });
    (0, _qunit.test)("regular user - insufficient trust level", async function (assert) {
      (0, _qunitHelpers.updateCurrentUser)({
        moderator: false,
        admin: false,
        trust_level: 0
      });
      await (0, _displayPollBuilderButton.displayPollBuilderButton)();
      assert.ok(!(0, _qunitHelpers.exists)(".select-kit-row[data-value='showPollBuilder]"), "it hides the builder button");
    });
    (0, _qunit.test)("staff - with insufficient trust level", async function (assert) {
      (0, _qunitHelpers.updateCurrentUser)({
        moderator: true,
        trust_level: 0
      });
      await (0, _displayPollBuilderButton.displayPollBuilderButton)();
      assert.dom(`.select-kit-row[data-name='${_discourseI18n.default.t("poll.ui_builder.title")}']`).exists("it shows the builder button");
    });
  });
});
define("discourse/plugins/poll/acceptance/poll-in-reply-history-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers"], function (_testHelpers, _qunit, _qunitHelpers) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Poll in a post reply history", function (needs) {
    needs.user();
    needs.settings({
      poll_enabled: true
    });
    needs.pretender((server, helper) => {
      server.get("/t/topic_with_poll_in_post_reply_history.json", () => {
        return helper.response({
          post_stream: {
            posts: [{
              id: 82,
              name: null,
              username: "admin1",
              avatar_template: "/letter_avatar_proxy/v4/letter/a/bbce88/{size}.png",
              created_at: "2021-01-25T13:08:27.385Z",
              cooked: "<p>A reply to the poll.</p>",
              post_number: 4,
              post_type: 1,
              updated_at: "2021-01-25T13:08:27.385Z",
              reply_count: 0,
              reply_to_post_number: 2,
              quote_count: 0,
              incoming_link_count: 0,
              reads: 1,
              readers_count: 0,
              score: 0.2,
              yours: true,
              topic_id: 25,
              topic_slug: "topic-with-a-poll-in-a-post-reply-history",
              display_username: null,
              primary_group_name: null,
              flair_url: null,
              flair_bg_color: null,
              flair_color: null,
              version: 1,
              can_edit: true,
              can_delete: true,
              can_recover: false,
              can_wiki: true,
              read: true,
              user_title: null,
              reply_to_user: {
                username: "admin1",
                avatar_template: "/letter_avatar_proxy/v4/letter/a/bbce88/{size}.png"
              },
              bookmarked: false,
              bookmarks: [],
              actions_summary: [{
                id: 3,
                can_act: true
              }, {
                id: 4,
                can_act: true
              }, {
                id: 8,
                can_act: true
              }, {
                id: 7,
                can_act: true
              }],
              moderator: false,
              admin: true,
              staff: true,
              user_id: 3,
              hidden: false,
              trust_level: 1,
              deleted_at: null,
              user_deleted: false,
              edit_reason: null,
              can_view_edit_history: true,
              wiki: false,
              reviewable_id: 0,
              reviewable_score_count: 0,
              reviewable_score_pending_count: 0
            }],
            stream: [82]
          },
          timeline_lookup: [[1, 0]],
          suggested_topics: [{
            id: 7,
            title: "Welcome to Discourse",
            fancy_title: "Welcome to Discourse",
            slug: "welcome-to-discourse",
            posts_count: 1,
            reply_count: 0,
            highest_post_number: 1,
            image_url: null,
            created_at: "2021-01-07T15:36:44.707Z",
            last_posted_at: "2021-01-07T15:36:44.750Z",
            bumped: true,
            bumped_at: "2021-01-07T15:36:44.750Z",
            archetype: "regular",
            unseen: false,
            pinned: true,
            unpinned: null,
            excerpt: "The first paragraph of this pinned topic will be visible as a welcome message to all new visitors on your homepage. It’s important! Edit this into a brief description of your community: Who is it for? What can they fi&hellip;",
            visible: true,
            closed: false,
            archived: false,
            bookmarked: null,
            liked: null,
            like_count: 0,
            views: 1,
            category_id: 1,
            featured_link: null,
            posters: [{
              extras: "latest single",
              description: "Original Poster, Most Recent Poster",
              user: {
                id: -1,
                username: "system",
                name: "system",
                avatar_template: "http://localhost:3000/images/discourse-logo-sketch-small.png"
              }
            }]
          }, {
            id: 20,
            title: "Polls testing. Just one poll in the comment",
            fancy_title: "Polls testing. Just one poll in the comment",
            slug: "polls-testing-just-one-poll-in-the-comment",
            posts_count: 3,
            reply_count: 1,
            highest_post_number: 3,
            image_url: null,
            created_at: "2021-01-21T09:21:35.102Z",
            last_posted_at: "2021-01-22T09:35:33.543Z",
            bumped: true,
            bumped_at: "2021-01-22T09:35:33.543Z",
            archetype: "regular",
            unseen: false,
            last_read_post_number: 3,
            unread_posts: 0,
            pinned: false,
            unpinned: null,
            visible: true,
            closed: false,
            archived: false,
            notification_level: 2,
            bookmarked: false,
            bookmarks: [],
            liked: false,
            like_count: 0,
            views: 3,
            category_id: 1,
            featured_link: null,
            posters: [{
              extras: null,
              description: "Original Poster",
              user: {
                id: 2,
                username: "andrey1",
                name: "andrey1",
                avatar_template: "/letter_avatar_proxy/v4/letter/a/c0e974/{size}.png"
              }
            }, {
              extras: "latest",
              description: "Most Recent Poster",
              user: {
                id: 3,
                username: "admin1",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/a/bbce88/{size}.png"
              }
            }]
          }, {
            id: 22,
            title: "Polls testing. The whole test",
            fancy_title: "Polls testing. The whole test",
            slug: "polls-testing-the-whole-test",
            posts_count: 12,
            reply_count: 8,
            highest_post_number: 12,
            image_url: null,
            created_at: "2021-01-21T09:55:20.135Z",
            last_posted_at: "2021-01-22T11:59:31.561Z",
            bumped: true,
            bumped_at: "2021-01-22T11:59:31.561Z",
            archetype: "regular",
            unseen: false,
            last_read_post_number: 12,
            unread_posts: 0,
            pinned: false,
            unpinned: null,
            visible: true,
            closed: false,
            archived: false,
            notification_level: 2,
            bookmarked: false,
            bookmarks: [],
            liked: false,
            like_count: 0,
            views: 4,
            category_id: 1,
            featured_link: null,
            posters: [{
              extras: null,
              description: "Original Poster",
              user: {
                id: 2,
                username: "andrey1",
                name: "andrey1",
                avatar_template: "/letter_avatar_proxy/v4/letter/a/c0e974/{size}.png"
              }
            }, {
              extras: "latest",
              description: "Most Recent Poster",
              user: {
                id: 3,
                username: "admin1",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/a/bbce88/{size}.png"
              }
            }]
          }],
          id: 25,
          title: "Topic with a poll in a post reply history",
          fancy_title: "Topic with a poll in a post reply history",
          posts_count: 4,
          created_at: "2021-01-25T13:07:31.670Z",
          views: 2,
          reply_count: 2,
          like_count: 0,
          last_posted_at: "2021-01-25T13:08:27.385Z",
          visible: true,
          closed: false,
          archived: false,
          has_summary: false,
          archetype: "regular",
          slug: "topic-with-a-poll-in-a-post-reply-history",
          category_id: 1,
          word_count: 25,
          deleted_at: null,
          user_id: 3,
          featured_link: null,
          pinned_globally: false,
          pinned_at: null,
          pinned_until: null,
          image_url: null,
          slow_mode_seconds: 0,
          draft: null,
          draft_key: "topic_25",
          draft_sequence: 4,
          posted: true,
          unpinned: null,
          pinned: false,
          current_post_number: 4,
          highest_post_number: 4,
          last_read_post_number: 4,
          last_read_post_id: 82,
          deleted_by: null,
          has_deleted: false,
          actions_summary: [{
            id: 4,
            count: 0,
            hidden: false,
            can_act: true
          }, {
            id: 8,
            count: 0,
            hidden: false,
            can_act: true
          }, {
            id: 7,
            count: 0,
            hidden: false,
            can_act: true
          }],
          chunk_size: 20,
          bookmarked: false,
          bookmarks: [],
          topic_timer: null,
          message_bus_last_id: 4,
          participant_count: 1,
          show_read_indicator: false,
          thumbnails: null,
          details: {
            can_edit: true,
            notification_level: 3,
            notifications_reason_id: 1,
            can_move_posts: true,
            can_delete: true,
            can_remove_allowed_users: true,
            can_invite_to: true,
            can_invite_via_email: true,
            can_create_post: true,
            can_reply_as_new_topic: true,
            can_flag_topic: true,
            can_convert_topic: true,
            can_review_topic: true,
            can_close_topic: true,
            can_archive_topic: true,
            can_split_merge_topic: true,
            can_edit_staff_notes: true,
            can_toggle_topic_visibility: true,
            can_moderate_category: true,
            can_remove_self_id: 3,
            participants: [{
              id: 3,
              username: "admin1",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/a/bbce88/{size}.png",
              post_count: 4,
              primary_group_name: null,
              flair_url: null,
              flair_color: null,
              flair_bg_color: null
            }],
            created_by: {
              id: 3,
              username: "admin1",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/a/bbce88/{size}.png"
            },
            last_poster: {
              id: 3,
              username: "admin1",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/a/bbce88/{size}.png"
            }
          }
        });
      });
      server.get("/posts/82/reply-history", () => {
        return helper.response([{
          id: 80,
          name: null,
          username: "admin1",
          avatar_template: "/letter_avatar_proxy/v4/letter/a/bbce88/{size}.png",
          created_at: "2021-01-25T13:07:58.995Z",
          cooked: '<p>The poll:</p>\n<div class="poll" data-poll-status="open" data-poll-name="poll">\n<div>\n<div class="poll-container">\n<ul>\n<li data-poll-option-id="5b8ee5ba2a43e258f93dbef9264bf1ad">Option A</li>\n<li data-poll-option-id="6872645f5d8ef2311883617a3a7d381b">Option B</li>\n</ul>\n</div>\n<div class="poll-info">\n<p>\n<span class="info-number">0</span>\n<span class="info-label">voters</span>\n</p>\n</div>\n</div>\n</div>',
          post_number: 2,
          post_type: 1,
          updated_at: "2021-01-25T13:07:58.995Z",
          reply_count: 2,
          reply_to_post_number: null,
          quote_count: 0,
          incoming_link_count: 0,
          reads: 1,
          readers_count: 0,
          score: 10.2,
          yours: false,
          topic_id: 25,
          topic_slug: "topic-with-a-poll-in-a-post-reply-history",
          display_username: null,
          primary_group_name: null,
          flair_url: null,
          flair_bg_color: null,
          flair_color: null,
          version: 1,
          can_edit: false,
          can_delete: false,
          can_recover: false,
          can_wiki: false,
          user_title: null,
          bookmarked: false,
          bookmarks: [],
          actions_summary: [],
          moderator: false,
          admin: true,
          staff: true,
          user_id: 3,
          hidden: false,
          trust_level: 1,
          deleted_at: null,
          user_deleted: false,
          edit_reason: null,
          can_view_edit_history: true,
          wiki: false,
          polls: [{
            name: "poll",
            type: "regular",
            status: "open",
            results: "always",
            options: [{
              id: "5b8ee5ba2a43e258f93dbef9264bf1ad",
              html: "Option A",
              votes: 0
            }, {
              id: "6872645f5d8ef2311883617a3a7d381b",
              html: "Option B",
              votes: 0
            }],
            voters: 0,
            chart_type: "bar",
            title: null
          }]
        }]);
      });
    });
    (0, _qunit.test)("renders and extends", async function (assert) {
      await (0, _testHelpers.visit)("/t/-/topic_with_poll_in_post_reply_history");
      await (0, _testHelpers.click)(".reply-to-tab");
      assert.ok((0, _qunitHelpers.exists)(".poll"), "poll is rendered");
      assert.ok((0, _qunitHelpers.exists)(".poll-buttons"), "poll is extended");
    });
  });
});
define("discourse/plugins/poll/acceptance/poll-pie-chart-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers"], function (_testHelpers, _qunit, _qunitHelpers) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Rendering polls with pie charts", function (needs) {
    needs.user();
    needs.settings({
      poll_enabled: true,
      poll_groupable_user_fields: "something"
    });
    (0, _qunit.test)("Displays the pie chart", async function (assert) {
      await (0, _testHelpers.visit)("/t/-/topic_with_pie_chart_poll");
      const poll = (0, _qunitHelpers.query)(".poll");
      assert.strictEqual((0, _qunitHelpers.query)(".info-number", poll).innerHTML, "2", "it should display the right number of voters");
      assert.strictEqual(poll.querySelectorAll(".info-number")[1].innerHTML, "5", "it should display the right number of votes");
      assert.strictEqual(poll.classList.contains("pie"), true, "pie class is present on poll div");
      assert.strictEqual((0, _qunitHelpers.count)(".poll-results-chart", poll), 1, "Renders the chart div instead of bar container");
    });
  });
});
define("discourse/plugins/poll/acceptance/poll-quote-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers"], function (_testHelpers, _qunit, _qunitHelpers) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Poll quote", function (needs) {
    needs.user();
    needs.settings({
      poll_enabled: true
    });
    needs.pretender((server, helper) => {
      server.get("/posts/by_number/130/1", () => {
        return helper.response({
          id: 133,
          name: null,
          username: "bianca",
          avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
          created_at: "2020-08-17T12:05:24.577Z",
          cooked: '<div class="poll" data-poll-status="open" data-poll-name="poll1" data-poll-results="always" data-poll-charttype="bar" data-poll-type="regular">\n<div>\n<div class="poll-container">\n<ul>\n<li data-poll-option-id="bf48cd4958a17180e2a298e246988f94">Alpha</li>\n<li data-poll-option-id="c19aa835729ab0413a84a2c9850c4005">Beta</li>\n</ul>\n</div>\n<div class="poll-info">\n<p>\n<span class="info-number">0</span>\n<span class="info-label">voters</span>\n</p>\n</div>\n</div>\n</div>\n<div class="poll" data-poll-status="open" data-poll-name="poll2" data-poll-results="always" data-poll-charttype="bar" data-poll-type="regular">\n<div>\n<div class="poll-container">\n<ul>\n<li data-poll-option-id="def034c6770c6fd3754c054ef9ec4721">First</li>\n<li data-poll-option-id="e0f55d1a981683789bec2a0b05eb70ef">Second</li>\n</ul>\n</div>\n<div class="poll-info">\n<p>\n<span class="info-number">0</span>\n<span class="info-label">voters</span>\n</p>\n</div>\n</div>\n</div>',
          post_number: 1,
          post_type: 1,
          updated_at: "2020-08-17T12:05:24.577Z",
          reply_count: 0,
          reply_to_post_number: null,
          quote_count: 0,
          incoming_link_count: 0,
          reads: 1,
          readers_count: 0,
          score: 0.2,
          yours: true,
          topic_id: 130,
          topic_slug: "topic-with-two-polls",
          display_username: null,
          primary_group_name: null,
          flair_url: null,
          flair_bg_color: null,
          flair_color: null,
          version: 1,
          can_edit: true,
          can_delete: false,
          can_recover: false,
          can_wiki: true,
          user_title: "Tester",
          title_is_group: false,
          bookmarked: false,
          bookmarks: [],
          raw: "[poll name=poll1 type=regular results=always chartType=bar]\n* Alpha\n* Beta\n[/poll]\n\n[poll name=poll2 type=regular results=always chartType=bar]\n* First\n* Second\n[/poll]",
          actions_summary: [{
            id: 3,
            can_act: true
          }, {
            id: 4,
            can_act: true
          }, {
            id: 8,
            can_act: true
          }, {
            id: 7,
            can_act: true
          }],
          moderator: false,
          admin: true,
          staff: true,
          user_id: 1,
          hidden: false,
          trust_level: 0,
          deleted_at: null,
          user_deleted: false,
          edit_reason: null,
          can_view_edit_history: true,
          wiki: false,
          reviewable_id: null,
          reviewable_score_count: 0,
          reviewable_score_pending_count: 0,
          calendar_details: [],
          polls: [{
            name: "poll1",
            type: "regular",
            status: "open",
            results: "always",
            options: [{
              id: "bf48cd4958a17180e2a298e246988f94",
              html: "Alpha",
              votes: 0
            }, {
              id: "c19aa835729ab0413a84a2c9850c4005",
              html: "Beta",
              votes: 0
            }],
            voters: 0,
            chart_type: "bar"
          }, {
            name: "poll2",
            type: "regular",
            status: "open",
            results: "always",
            options: [{
              id: "def034c6770c6fd3754c054ef9ec4721",
              html: "First",
              votes: 0
            }, {
              id: "e0f55d1a981683789bec2a0b05eb70ef",
              html: "Second",
              votes: 0
            }],
            voters: 0,
            chart_type: "bar"
          }]
        });
      });
      server.get("/t/topic_with_two_quoted_polls.json", () => {
        return helper.response({
          post_stream: {
            posts: [{
              id: 134,
              name: null,
              username: "bianca",
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
              created_at: "2020-08-17T12:08:24.043Z",
              cooked: '<aside class="quote quote-modified" data-post="1" data-topic="130">\n  <div class="title">\n    <div class="quote-controls"></div>\n    <img alt="" width="20" height="20" src="/letter_avatar_proxy/v4/letter/b/3be4f8/40.png" class="avatar">\n    <a href="//forum.example.com/t/topic-with-two-polls/130">Topic with two polls</a> \n  </div>\n  <blockquote>\n    <a href="/t/topic-with-two-polls/130/1">poll</a>\n<a href="/t/topic-with-two-polls/130/1">poll</a>\n  </blockquote>\n</aside>\n',
              post_number: 1,
              post_type: 1,
              updated_at: "2020-08-17T12:08:24.043Z",
              reply_count: 0,
              reply_to_post_number: null,
              quote_count: 0,
              incoming_link_count: 0,
              reads: 1,
              readers_count: 0,
              score: 0,
              yours: true,
              topic_id: 131,
              topic_slug: "topic-with-two-quoted-polls",
              display_username: null,
              primary_group_name: null,
              flair_url: null,
              flair_bg_color: null,
              flair_color: null,
              version: 1,
              can_edit: true,
              can_delete: false,
              can_recover: false,
              can_wiki: true,
              link_counts: [{
                url: "http://forum.example.com/t/topic-with-two-polls/130",
                internal: true,
                reflection: false,
                title: "Topic with two polls",
                clicks: 0
              }],
              read: true,
              user_title: "Tester",
              title_is_group: false,
              bookmarked: false,
              bookmarks: [],
              actions_summary: [{
                id: 3,
                can_act: true
              }, {
                id: 4,
                can_act: true
              }, {
                id: 8,
                can_act: true
              }, {
                id: 7,
                can_act: true
              }],
              moderator: false,
              admin: true,
              staff: true,
              user_id: 1,
              hidden: false,
              trust_level: 0,
              deleted_at: null,
              user_deleted: false,
              edit_reason: null,
              can_view_edit_history: true,
              wiki: false,
              reviewable_id: 0,
              reviewable_score_count: 0,
              reviewable_score_pending_count: 0,
              calendar_details: []
            }],
            stream: [134]
          },
          timeline_lookup: [[1, 0]],
          suggested_topics: [{
            id: 7,
            title: "Welcome to Discourse",
            fancy_title: "Welcome to Discourse",
            slug: "welcome-to-discourse",
            posts_count: 1,
            reply_count: 0,
            highest_post_number: 1,
            image_url: null,
            created_at: "2020-08-11T12:43:04.894Z",
            last_posted_at: "2020-08-11T12:43:04.959Z",
            bumped: true,
            bumped_at: "2020-08-11T12:43:04.959Z",
            archetype: "regular",
            unseen: false,
            last_read_post_number: 1,
            unread_posts: 0,
            pinned: false,
            unpinned: true,
            visible: true,
            closed: false,
            archived: false,
            notification_level: 1,
            bookmarked: false,
            bookmarks: [],
            liked: false,
            tags: [],
            like_count: 0,
            views: 1,
            category_id: 1,
            featured_link: null,
            posters: [{
              extras: "latest single",
              description: "Original Poster, Most Recent Poster",
              user: {
                id: 5,
                username: "foo2",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/f/8edcca/{size}.png"
              }
            }]
          }, {
            id: 130,
            title: "Topic with two polls",
            fancy_title: "Topic with two polls",
            slug: "topic-with-two-polls",
            posts_count: 1,
            reply_count: 0,
            highest_post_number: 1,
            image_url: null,
            created_at: "2020-08-17T12:05:24.500Z",
            last_posted_at: "2020-08-17T12:05:24.577Z",
            bumped: true,
            bumped_at: "2020-08-17T12:05:24.577Z",
            archetype: "regular",
            unseen: false,
            last_read_post_number: 1,
            unread_posts: 0,
            pinned: false,
            unpinned: null,
            visible: true,
            closed: false,
            archived: false,
            notification_level: 3,
            bookmarked: false,
            bookmarks: [],
            liked: false,
            tags: [],
            like_count: 0,
            views: 1,
            category_id: 1,
            featured_link: null,
            posters: [{
              extras: "latest single",
              description: "Original Poster, Most Recent Poster",
              user: {
                id: 1,
                username: "bianca",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
              }
            }]
          }],
          tags: [],
          id: 131,
          title: "Topic with two quoted polls",
          fancy_title: "Topic with two quoted polls",
          posts_count: 1,
          created_at: "2020-08-17T12:08:23.918Z",
          views: 1,
          reply_count: 0,
          like_count: 0,
          last_posted_at: "2020-08-17T12:08:24.043Z",
          visible: true,
          closed: false,
          archived: false,
          has_summary: false,
          archetype: "regular",
          slug: "topic-with-two-quoted-polls",
          category_id: 1,
          word_count: 9,
          deleted_at: null,
          user_id: 1,
          featured_link: null,
          pinned_globally: false,
          pinned_at: null,
          pinned_until: null,
          image_url: null,
          draft: null,
          draft_key: "topic_131",
          draft_sequence: 0,
          posted: true,
          unpinned: null,
          pinned: false,
          current_post_number: 1,
          highest_post_number: 1,
          last_read_post_number: 1,
          last_read_post_id: 134,
          deleted_by: null,
          has_deleted: false,
          actions_summary: [{
            id: 4,
            count: 0,
            hidden: false,
            can_act: true
          }, {
            id: 8,
            count: 0,
            hidden: false,
            can_act: true
          }, {
            id: 7,
            count: 0,
            hidden: false,
            can_act: true
          }],
          chunk_size: 20,
          bookmarked: false,
          bookmarks: [],
          topic_timer: null,
          message_bus_last_id: 2,
          participant_count: 1,
          queued_posts_count: 0,
          show_read_indicator: false,
          thumbnails: null,
          can_vote: false,
          vote_count: null,
          user_voted: false,
          details: {
            notification_level: 3,
            notifications_reason_id: 1,
            can_move_posts: true,
            can_edit: true,
            can_delete: true,
            can_remove_allowed_users: true,
            can_invite_to: true,
            can_invite_via_email: true,
            can_create_post: true,
            can_reply_as_new_topic: true,
            can_flag_topic: true,
            can_convert_topic: true,
            can_review_topic: true,
            can_close_topic: true,
            can_archive_topic: true,
            can_split_merge_topic: true,
            can_edit_staff_notes: true,
            can_remove_self_id: 1,
            participants: [{
              id: 1,
              username: "bianca",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
              post_count: 1,
              primary_group_name: null,
              flair_url: null,
              flair_color: null,
              flair_bg_color: null
            }],
            created_by: {
              id: 1,
              username: "bianca",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
            },
            last_poster: {
              id: 1,
              username: "bianca",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
            }
          },
          pending_posts: []
        });
      });
    });
    (0, _qunit.test)("renders and extends", async function (assert) {
      await (0, _testHelpers.visit)("/t/-/topic_with_two_quoted_polls");
      await (0, _testHelpers.click)(".quote-controls");
      assert.strictEqual((0, _qunitHelpers.count)(".poll"), 2, "polls are rendered");
      assert.strictEqual((0, _qunitHelpers.count)(".poll-buttons"), 2, "polls are extended");
    });
  });
});
define("discourse/plugins/poll/acceptance/poll-results-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers"], function (_testHelpers, _qunit, _qunitHelpers) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Poll results", function (needs) {
    needs.user();
    needs.settings({
      poll_enabled: true
    });
    needs.pretender((server, helper) => {
      server.get("/posts/by_number/134/1", () => {
        return helper.response({
          id: 156,
          name: null,
          username: "bianca",
          avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
          created_at: "2021-06-08T21:56:55.166Z",
          cooked: '\u003cdiv class="poll" data-poll-status="open" data-poll-public="true" data-poll-results="always" data-poll-charttype="bar" data-poll-type="regular" data-poll-name="poll"\u003e\n\u003cdiv\u003e\n\u003cdiv class="poll-container"\u003e\n\u003cul\u003e\n\u003cli data-poll-option-id="db753fe0bc4e72869ac1ad8765341764"\u003eOption \u003cspan class="hashtag"\u003e#1\u003c/span\u003e\n\u003c/li\u003e\n\u003cli data-poll-option-id="d8c22ff912e03740d9bc19e133e581e0"\u003eOption \u003cspan class="hashtag"\u003e#2\u003c/span\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/div\u003e\n\u003cdiv class="poll-info"\u003e\n\u003cp\u003e\n\u003cspan class="info-number"\u003e0\u003c/span\u003e\n\u003cspan class="info-label"\u003evoters\u003c/span\u003e\n\u003c/p\u003e\n\u003c/div\u003e\n\u003c/div\u003e\n\u003c/div\u003e',
          post_number: 1,
          post_type: 1,
          updated_at: "2021-06-08T21:59:16.444Z",
          reply_count: 0,
          reply_to_post_number: null,
          quote_count: 0,
          incoming_link_count: 0,
          reads: 2,
          readers_count: 1,
          score: 0,
          yours: true,
          topic_id: 134,
          topic_slug: "load-more-poll-voters",
          display_username: null,
          primary_group_name: null,
          flair_url: null,
          flair_bg_color: null,
          flair_color: null,
          version: 1,
          can_edit: true,
          can_delete: false,
          can_recover: false,
          can_wiki: true,
          title_is_group: false,
          bookmarked: false,
          bookmarks: [],
          raw: "[poll type=regular results=always public=true chartType=bar]\n* Option #1\n* Option #2\n[/poll]",
          actions_summary: [{
            id: 3,
            can_act: true
          }, {
            id: 4,
            can_act: true
          }, {
            id: 8,
            can_act: true
          }, {
            id: 7,
            can_act: true
          }],
          moderator: false,
          admin: true,
          staff: true,
          user_id: 1,
          hidden: false,
          trust_level: 0,
          deleted_at: null,
          user_deleted: false,
          edit_reason: null,
          can_view_edit_history: true,
          wiki: false,
          reviewable_id: null,
          reviewable_score_count: 0,
          reviewable_score_pending_count: 0,
          calendar_details: [],
          can_accept_answer: false,
          can_unaccept_answer: false,
          accepted_answer: false,
          polls: [{
            name: "poll",
            type: "regular",
            status: "open",
            public: true,
            results: "always",
            options: [{
              id: "db753fe0bc4e72869ac1ad8765341764",
              html: 'Option \u003cspan class="hashtag"\u003e#1\u003c/span\u003e',
              votes: 1
            }, {
              id: "d8c22ff912e03740d9bc19e133e581e0",
              html: 'Option \u003cspan class="hashtag"\u003e#2\u003c/span\u003e',
              votes: 0
            }],
            voters: 1,
            preloaded_voters: {
              db753fe0bc4e72869ac1ad8765341764: [{
                id: 1,
                username: "bianca",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
              }]
            },
            chart_type: "bar",
            title: null
          }],
          polls_votes: {
            poll: ["db753fe0bc4e72869ac1ad8765341764"]
          }
        });
      });
      server.get("/t/134.json", () => {
        return helper.response({
          post_stream: {
            posts: [{
              id: 156,
              name: null,
              username: "bianca",
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
              created_at: "2021-06-08T21:56:55.166Z",
              cooked: '\u003cdiv class="poll" data-poll-status="open" data-poll-public="true" data-poll-results="always" data-poll-charttype="bar" data-poll-type="regular" data-poll-name="poll"\u003e\n\u003cdiv\u003e\n\u003cdiv class="poll-container"\u003e\n\u003cul\u003e\n\u003cli data-poll-option-id="db753fe0bc4e72869ac1ad8765341764"\u003eOption \u003cspan class="hashtag"\u003e#1\u003c/span\u003e\n\u003c/li\u003e\n\u003cli data-poll-option-id="d8c22ff912e03740d9bc19e133e581e0"\u003eOption \u003cspan class="hashtag"\u003e#2\u003c/span\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/div\u003e\n\u003cdiv class="poll-info"\u003e\n\u003cp\u003e\n\u003cspan class="info-number"\u003e0\u003c/span\u003e\n\u003cspan class="info-label"\u003evoters\u003c/span\u003e\n\u003c/p\u003e\n\u003c/div\u003e\n\u003c/div\u003e\n\u003c/div\u003e',
              post_number: 1,
              post_type: 1,
              updated_at: "2021-06-08T21:59:16.444Z",
              reply_count: 0,
              reply_to_post_number: null,
              quote_count: 0,
              incoming_link_count: 0,
              reads: 2,
              readers_count: 1,
              score: 0,
              yours: true,
              topic_id: 134,
              topic_slug: "load-more-poll-voters",
              display_username: null,
              primary_group_name: null,
              flair_url: null,
              flair_bg_color: null,
              flair_color: null,
              version: 1,
              can_edit: true,
              can_delete: false,
              can_recover: false,
              can_wiki: true,
              read: true,
              title_is_group: false,
              bookmarked: false,
              bookmarks: [],
              actions_summary: [{
                id: 3,
                can_act: true
              }, {
                id: 4,
                can_act: true
              }, {
                id: 8,
                can_act: true
              }, {
                id: 7,
                can_act: true
              }],
              moderator: false,
              admin: true,
              staff: true,
              user_id: 1,
              hidden: false,
              trust_level: 0,
              deleted_at: null,
              user_deleted: false,
              edit_reason: null,
              can_view_edit_history: true,
              wiki: false,
              reviewable_id: 0,
              reviewable_score_count: 0,
              reviewable_score_pending_count: 0,
              calendar_details: [],
              can_accept_answer: false,
              can_unaccept_answer: false,
              accepted_answer: false,
              polls: [{
                name: "poll",
                type: "regular",
                status: "open",
                public: true,
                results: "always",
                options: [{
                  id: "db753fe0bc4e72869ac1ad8765341764",
                  html: 'Option \u003cspan class="hashtag"\u003e#1\u003c/span\u003e',
                  votes: 1
                }, {
                  id: "d8c22ff912e03740d9bc19e133e581e0",
                  html: 'Option \u003cspan class="hashtag"\u003e#2\u003c/span\u003e',
                  votes: 0
                }],
                voters: 1,
                preloaded_voters: {
                  db753fe0bc4e72869ac1ad8765341764: [{
                    id: 1,
                    username: "bianca",
                    name: null,
                    avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
                  }]
                },
                chart_type: "bar",
                title: null
              }],
              polls_votes: {
                poll: ["db753fe0bc4e72869ac1ad8765341764"]
              }
            }],
            stream: [156]
          },
          timeline_lookup: [[1, 0]],
          suggested_topics: [{
            id: 7,
            title: "Welcome to Discourse",
            fancy_title: "Welcome to Discourse",
            slug: "welcome-to-discourse",
            posts_count: 9,
            reply_count: 0,
            highest_post_number: 9,
            image_url: "//localhost:3000/uploads/default/original/1X/ba1a510603f5112dcaf06cf42c2eb671bff83681.png",
            created_at: "2021-06-02T16:21:38.347Z",
            last_posted_at: "2021-06-08T20:36:29.235Z",
            bumped: true,
            bumped_at: "2021-06-08T20:36:29.235Z",
            archetype: "regular",
            unseen: false,
            last_read_post_number: 9,
            unread_posts: 0,
            pinned: false,
            unpinned: true,
            visible: true,
            closed: false,
            archived: false,
            notification_level: 2,
            bookmarked: false,
            bookmarks: [],
            liked: false,
            tags: [],
            like_count: 0,
            views: 2,
            category_id: 1,
            featured_link: null,
            has_accepted_answer: false,
            posters: [{
              extras: null,
              description: "Original Poster",
              user: {
                id: -1,
                username: "system",
                name: "system",
                avatar_template: "/images/discourse-logo-sketch-small.png"
              }
            }, {
              extras: "latest",
              description: "Most Recent Poster",
              user: {
                id: 1,
                username: "bianca",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
              }
            }]
          }, {
            id: 129,
            title: "This is another test topic",
            fancy_title: "This is another test topic",
            slug: "this-is-another-test-topic",
            posts_count: 1,
            reply_count: 0,
            highest_post_number: 1,
            image_url: null,
            created_at: "2021-06-03T15:48:27.262Z",
            last_posted_at: "2021-06-03T15:48:27.537Z",
            bumped: true,
            bumped_at: "2021-06-08T12:52:36.650Z",
            archetype: "regular",
            unseen: false,
            last_read_post_number: 1,
            unread_posts: 0,
            pinned: false,
            unpinned: null,
            visible: true,
            closed: false,
            archived: false,
            notification_level: 2,
            bookmarked: false,
            bookmarks: [],
            liked: false,
            tags: [],
            like_count: 0,
            views: 7,
            category_id: 1,
            featured_link: null,
            has_accepted_answer: false,
            posters: [{
              extras: "latest single",
              description: "Original Poster, Most Recent Poster",
              user: {
                id: 12,
                username: "bar",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/b/b77776/{size}.png"
              }
            }]
          }, {
            id: 131,
            title: "Welcome to Discourse — thanks for starting a new conversation!",
            fancy_title: "Welcome to Discourse — thanks for starting a new conversation!",
            slug: "welcome-to-discourse-thanks-for-starting-a-new-conversation",
            posts_count: 1,
            reply_count: 0,
            highest_post_number: 1,
            image_url: null,
            created_at: "2021-06-04T08:51:19.807Z",
            last_posted_at: "2021-06-04T08:51:19.928Z",
            bumped: true,
            bumped_at: "2021-06-04T14:37:46.939Z",
            archetype: "regular",
            unseen: false,
            last_read_post_number: 1,
            unread_posts: 0,
            pinned: false,
            unpinned: null,
            visible: true,
            closed: false,
            archived: false,
            notification_level: 3,
            bookmarked: false,
            bookmarks: [],
            liked: false,
            tags: ["abc", "e", "b"],
            like_count: 0,
            views: 3,
            category_id: 1,
            featured_link: null,
            has_accepted_answer: false,
            posters: [{
              extras: "latest single",
              description: "Original Poster, Most Recent Poster",
              user: {
                id: 1,
                username: "bianca",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
              }
            }]
          }, {
            id: 133,
            title: "This is a new topic",
            fancy_title: "This is a new topic",
            slug: "this-is-a-new-topic",
            posts_count: 12,
            reply_count: 0,
            highest_post_number: 12,
            image_url: null,
            created_at: "2021-06-08T14:44:03.664Z",
            last_posted_at: "2021-06-08T19:57:35.853Z",
            bumped: true,
            bumped_at: "2021-06-08T19:57:35.853Z",
            archetype: "regular",
            unseen: false,
            last_read_post_number: 12,
            unread_posts: 0,
            pinned: false,
            unpinned: null,
            visible: true,
            closed: false,
            archived: false,
            notification_level: 3,
            bookmarked: false,
            bookmarks: [],
            liked: false,
            tags: [],
            like_count: 0,
            views: 1,
            category_id: 1,
            featured_link: null,
            has_accepted_answer: false,
            posters: [{
              extras: "latest single",
              description: "Original Poster, Most Recent Poster",
              user: {
                id: 1,
                username: "bianca",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
              }
            }]
          }],
          tags: [],
          id: 134,
          title: "Load more poll voters",
          fancy_title: "Load more poll voters",
          posts_count: 1,
          created_at: "2021-06-08T21:56:55.073Z",
          views: 4,
          reply_count: 0,
          like_count: 0,
          last_posted_at: "2021-06-08T21:56:55.166Z",
          visible: true,
          closed: false,
          archived: false,
          has_summary: false,
          archetype: "regular",
          slug: "load-more-poll-voters",
          category_id: 1,
          word_count: 14,
          deleted_at: null,
          user_id: 1,
          featured_link: null,
          pinned_globally: false,
          pinned_at: null,
          pinned_until: null,
          image_url: null,
          slow_mode_seconds: 0,
          draft: null,
          draft_key: "topic_134",
          draft_sequence: 7,
          posted: true,
          unpinned: null,
          pinned: false,
          current_post_number: 1,
          highest_post_number: 1,
          last_read_post_number: 1,
          last_read_post_id: 156,
          deleted_by: null,
          has_deleted: false,
          actions_summary: [{
            id: 4,
            count: 0,
            hidden: false,
            can_act: true
          }, {
            id: 8,
            count: 0,
            hidden: false,
            can_act: true
          }, {
            id: 7,
            count: 0,
            hidden: false,
            can_act: true
          }],
          chunk_size: 20,
          bookmarked: false,
          bookmarks: [],
          topic_timer: null,
          message_bus_last_id: 5,
          participant_count: 1,
          queued_posts_count: 0,
          show_read_indicator: false,
          thumbnails: null,
          slow_mode_enabled_until: null,
          details: {
            can_edit: true,
            notification_level: 3,
            notifications_reason_id: 1,
            can_move_posts: true,
            can_delete: true,
            can_remove_allowed_users: true,
            can_invite_to: true,
            can_invite_via_email: true,
            can_create_post: true,
            can_reply_as_new_topic: true,
            can_flag_topic: true,
            can_convert_topic: true,
            can_review_topic: true,
            can_close_topic: true,
            can_archive_topic: true,
            can_split_merge_topic: true,
            can_edit_staff_notes: true,
            can_toggle_topic_visibility: true,
            can_pin_unpin_topic: true,
            can_moderate_category: true,
            can_remove_self_id: 1,
            participants: [{
              id: 1,
              username: "bianca",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
              post_count: 1,
              primary_group_name: null,
              flair_url: null,
              flair_color: null,
              flair_bg_color: null,
              admin: true,
              trust_level: 0
            }],
            created_by: {
              id: 1,
              username: "bianca",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
            },
            last_poster: {
              id: 1,
              username: "bianca",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
            }
          },
          pending_posts: []
        });
      });
      server.get("/polls/voters.json", request => {
        if (request.queryParams.option_id === "d8c22ff912e03740d9bc19e133e581e0") {
          return helper.response({
            voters: {
              d8c22ff912e03740d9bc19e133e581e0: [{
                id: 1,
                username: "bianca",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
                title: null
              }]
            }
          });
        } else {
          return helper.response({
            voters: {
              [request.queryParams.option_id]: []
            }
          });
        }
      });
      server.delete("/polls/vote", () => helper.response({
        success: "OK"
      }));
    });
    (0, _qunit.test)("can load more voters", async function (assert) {
      await (0, _testHelpers.visit)("/t/load-more-poll-voters/134");
      assert.strictEqual((0, _qunitHelpers.count)(".poll-container .results li:nth-child(1) .poll-voters li"), 1);
      assert.strictEqual((0, _qunitHelpers.count)(".poll-container .results li:nth-child(2) .poll-voters li"), 0);
      await (0, _qunitHelpers.publishToMessageBus)("/polls/134", {
        post_id: "156",
        polls: [{
          name: "poll",
          type: "regular",
          status: "open",
          public: true,
          results: "always",
          options: [{
            id: "db753fe0bc4e72869ac1ad8765341764",
            html: 'Option <span class="hashtag">#1</span>',
            votes: 1
          }, {
            id: "d8c22ff912e03740d9bc19e133e581e0",
            html: 'Option <span class="hashtag">#2</span>',
            votes: 2
          }],
          voters: 3,
          preloaded_voters: {
            db753fe0bc4e72869ac1ad8765341764: [{
              id: 1,
              username: "bianca",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
            }],
            d8c22ff912e03740d9bc19e133e581e0: [{
              id: 7,
              username: "foo",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/f/b19c9b/{size}.png",
              title: null
            }]
          },
          chart_type: "bar",
          title: null
        }]
      });
      assert.strictEqual((0, _qunitHelpers.count)(".poll-container .results li:nth-child(1) .poll-voters li"), 1);
      assert.strictEqual((0, _qunitHelpers.count)(".poll-container .results li:nth-child(2) .poll-voters li"), 1);
      await (0, _testHelpers.click)(".poll-voters-toggle-expand a");
      await (0, _testHelpers.visit)("/t/load-more-poll-voters/134");
      assert.strictEqual((0, _qunitHelpers.count)(".poll-container .results li:nth-child(1) .poll-voters li"), 2);
      assert.strictEqual((0, _qunitHelpers.count)(".poll-container .results li:nth-child(2) .poll-voters li"), 0);
    });
    (0, _qunit.test)("can unvote", async function (assert) {
      await (0, _testHelpers.visit)("/t/load-more-poll-voters/134");
      await (0, _testHelpers.click)(".toggle-results");
      assert.strictEqual((0, _qunitHelpers.count)(".poll-container .d-icon-circle"), 1);
      assert.strictEqual((0, _qunitHelpers.count)(".poll-container .d-icon-far-circle"), 1);
      await (0, _testHelpers.click)(".remove-vote");
      assert.strictEqual((0, _qunitHelpers.count)(".poll-container .d-icon-circle"), 0);
      assert.strictEqual((0, _qunitHelpers.count)(".poll-container .d-icon-far-circle"), 2);
    });
  });
  (0, _qunitHelpers.acceptance)("Poll results - no voters", function (needs) {
    needs.user();
    needs.settings({
      poll_enabled: true
    });
    needs.pretender((server, helper) => {
      server.get("/posts/by_number/134/1", () => {
        return helper.response({
          id: 156,
          name: null,
          username: "bianca",
          avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
          created_at: "2021-06-08T21:56:55.166Z",
          cooked: '\u003cdiv class="poll" data-poll-status="open" data-poll-public="true" data-poll-results="always" data-poll-charttype="bar" data-poll-type="regular" data-poll-name="poll"\u003e\n\u003cdiv\u003e\n\u003cdiv class="poll-container"\u003e\n\u003cul\u003e\n\u003cli data-poll-option-id="db753fe0bc4e72869ac1ad8765341764"\u003eOption \u003cspan class="hashtag"\u003e#1\u003c/span\u003e\n\u003c/li\u003e\n\u003cli data-poll-option-id="d8c22ff912e03740d9bc19e133e581e0"\u003eOption \u003cspan class="hashtag"\u003e#2\u003c/span\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/div\u003e\n\u003cdiv class="poll-info"\u003e\n\u003cp\u003e\n\u003cspan class="info-number"\u003e0\u003c/span\u003e\n\u003cspan class="info-label"\u003evoters\u003c/span\u003e\n\u003c/p\u003e\n\u003c/div\u003e\n\u003c/div\u003e\n\u003c/div\u003e',
          post_number: 1,
          post_type: 1,
          updated_at: "2021-06-08T21:59:16.444Z",
          reply_count: 0,
          reply_to_post_number: null,
          quote_count: 0,
          incoming_link_count: 0,
          reads: 2,
          readers_count: 1,
          score: 0,
          yours: true,
          topic_id: 134,
          topic_slug: "load-more-poll-voters",
          display_username: null,
          primary_group_name: null,
          flair_url: null,
          flair_bg_color: null,
          flair_color: null,
          version: 1,
          can_edit: true,
          can_delete: false,
          can_recover: false,
          can_wiki: true,
          title_is_group: false,
          bookmarked: false,
          bookmarks: [],
          raw: "[poll type=regular results=always public=true chartType=bar]\n* Option #1\n* Option #2\n[/poll]",
          actions_summary: [{
            id: 3,
            can_act: true
          }, {
            id: 4,
            can_act: true
          }, {
            id: 8,
            can_act: true
          }, {
            id: 7,
            can_act: true
          }],
          moderator: false,
          admin: true,
          staff: true,
          user_id: 1,
          hidden: false,
          trust_level: 0,
          deleted_at: null,
          user_deleted: false,
          edit_reason: null,
          can_view_edit_history: true,
          wiki: false,
          reviewable_id: null,
          reviewable_score_count: 0,
          reviewable_score_pending_count: 0,
          calendar_details: [],
          can_accept_answer: false,
          can_unaccept_answer: false,
          accepted_answer: false,
          polls: [{
            name: "poll",
            type: "regular",
            status: "open",
            public: true,
            results: "always",
            options: [{
              id: "db753fe0bc4e72869ac1ad8765341764",
              html: 'Option \u003cspan class="hashtag"\u003e#1\u003c/span\u003e',
              votes: 0
            }, {
              id: "d8c22ff912e03740d9bc19e133e581e0",
              html: 'Option \u003cspan class="hashtag"\u003e#2\u003c/span\u003e',
              votes: 0
            }],
            voters: 0,
            preloaded_voters: {},
            chart_type: "bar",
            title: null
          }]
        });
      });
      server.get("/t/134.json", () => {
        return helper.response({
          post_stream: {
            posts: [{
              id: 156,
              name: null,
              username: "bianca",
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
              created_at: "2021-06-08T21:56:55.166Z",
              cooked: '\u003cdiv class="poll" data-poll-status="open" data-poll-public="true" data-poll-results="always" data-poll-charttype="bar" data-poll-type="regular" data-poll-name="poll"\u003e\n\u003cdiv\u003e\n\u003cdiv class="poll-container"\u003e\n\u003cul\u003e\n\u003cli data-poll-option-id="db753fe0bc4e72869ac1ad8765341764"\u003eOption \u003cspan class="hashtag"\u003e#1\u003c/span\u003e\n\u003c/li\u003e\n\u003cli data-poll-option-id="d8c22ff912e03740d9bc19e133e581e0"\u003eOption \u003cspan class="hashtag"\u003e#2\u003c/span\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/div\u003e\n\u003cdiv class="poll-info"\u003e\n\u003cp\u003e\n\u003cspan class="info-number"\u003e0\u003c/span\u003e\n\u003cspan class="info-label"\u003evoters\u003c/span\u003e\n\u003c/p\u003e\n\u003c/div\u003e\n\u003c/div\u003e\n\u003c/div\u003e',
              post_number: 1,
              post_type: 1,
              updated_at: "2021-06-08T21:59:16.444Z",
              reply_count: 0,
              reply_to_post_number: null,
              quote_count: 0,
              incoming_link_count: 0,
              reads: 2,
              readers_count: 1,
              score: 0,
              yours: true,
              topic_id: 134,
              topic_slug: "load-more-poll-voters",
              display_username: null,
              primary_group_name: null,
              flair_url: null,
              flair_bg_color: null,
              flair_color: null,
              version: 1,
              can_edit: true,
              can_delete: false,
              can_recover: false,
              can_wiki: true,
              read: true,
              title_is_group: false,
              bookmarked: false,
              bookmarks: [],
              actions_summary: [{
                id: 3,
                can_act: true
              }, {
                id: 4,
                can_act: true
              }, {
                id: 8,
                can_act: true
              }, {
                id: 7,
                can_act: true
              }],
              moderator: false,
              admin: true,
              staff: true,
              user_id: 1,
              hidden: false,
              trust_level: 0,
              deleted_at: null,
              user_deleted: false,
              edit_reason: null,
              can_view_edit_history: true,
              wiki: false,
              reviewable_id: 0,
              reviewable_score_count: 0,
              reviewable_score_pending_count: 0,
              calendar_details: [],
              can_accept_answer: false,
              can_unaccept_answer: false,
              accepted_answer: false,
              polls: [{
                name: "poll",
                type: "regular",
                status: "open",
                public: true,
                results: "always",
                options: [{
                  id: "db753fe0bc4e72869ac1ad8765341764",
                  html: 'Option \u003cspan class="hashtag"\u003e#1\u003c/span\u003e',
                  votes: 0
                }, {
                  id: "d8c22ff912e03740d9bc19e133e581e0",
                  html: 'Option \u003cspan class="hashtag"\u003e#2\u003c/span\u003e',
                  votes: 0
                }],
                voters: 0,
                preloaded_voters: {},
                chart_type: "bar",
                title: null
              }]
            }],
            stream: [156]
          },
          timeline_lookup: [[1, 0]],
          suggested_topics: [{
            id: 7,
            title: "Welcome to Discourse",
            fancy_title: "Welcome to Discourse",
            slug: "welcome-to-discourse",
            posts_count: 9,
            reply_count: 0,
            highest_post_number: 9,
            image_url: "//localhost:3000/uploads/default/original/1X/ba1a510603f5112dcaf06cf42c2eb671bff83681.png",
            created_at: "2021-06-02T16:21:38.347Z",
            last_posted_at: "2021-06-08T20:36:29.235Z",
            bumped: true,
            bumped_at: "2021-06-08T20:36:29.235Z",
            archetype: "regular",
            unseen: false,
            last_read_post_number: 9,
            unread_posts: 0,
            pinned: false,
            unpinned: true,
            visible: true,
            closed: false,
            archived: false,
            notification_level: 2,
            bookmarked: false,
            bookmarks: [],
            liked: false,
            tags: [],
            like_count: 0,
            views: 2,
            category_id: 1,
            featured_link: null,
            has_accepted_answer: false,
            posters: [{
              extras: null,
              description: "Original Poster",
              user: {
                id: -1,
                username: "system",
                name: "system",
                avatar_template: "/images/discourse-logo-sketch-small.png"
              }
            }, {
              extras: "latest",
              description: "Most Recent Poster",
              user: {
                id: 1,
                username: "bianca",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
              }
            }]
          }, {
            id: 129,
            title: "This is another test topic",
            fancy_title: "This is another test topic",
            slug: "this-is-another-test-topic",
            posts_count: 1,
            reply_count: 0,
            highest_post_number: 1,
            image_url: null,
            created_at: "2021-06-03T15:48:27.262Z",
            last_posted_at: "2021-06-03T15:48:27.537Z",
            bumped: true,
            bumped_at: "2021-06-08T12:52:36.650Z",
            archetype: "regular",
            unseen: false,
            last_read_post_number: 1,
            unread_posts: 0,
            pinned: false,
            unpinned: null,
            visible: true,
            closed: false,
            archived: false,
            notification_level: 2,
            bookmarked: false,
            bookmarks: [],
            liked: false,
            tags: [],
            like_count: 0,
            views: 7,
            category_id: 1,
            featured_link: null,
            has_accepted_answer: false,
            posters: [{
              extras: "latest single",
              description: "Original Poster, Most Recent Poster",
              user: {
                id: 12,
                username: "bar",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/b/b77776/{size}.png"
              }
            }]
          }, {
            id: 131,
            title: "Welcome to Discourse — thanks for starting a new conversation!",
            fancy_title: "Welcome to Discourse — thanks for starting a new conversation!",
            slug: "welcome-to-discourse-thanks-for-starting-a-new-conversation",
            posts_count: 1,
            reply_count: 0,
            highest_post_number: 1,
            image_url: null,
            created_at: "2021-06-04T08:51:19.807Z",
            last_posted_at: "2021-06-04T08:51:19.928Z",
            bumped: true,
            bumped_at: "2021-06-04T14:37:46.939Z",
            archetype: "regular",
            unseen: false,
            last_read_post_number: 1,
            unread_posts: 0,
            pinned: false,
            unpinned: null,
            visible: true,
            closed: false,
            archived: false,
            notification_level: 3,
            bookmarked: false,
            bookmarks: [],
            liked: false,
            tags: ["abc", "e", "b"],
            like_count: 0,
            views: 3,
            category_id: 1,
            featured_link: null,
            has_accepted_answer: false,
            posters: [{
              extras: "latest single",
              description: "Original Poster, Most Recent Poster",
              user: {
                id: 1,
                username: "bianca",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
              }
            }]
          }, {
            id: 133,
            title: "This is a new topic",
            fancy_title: "This is a new topic",
            slug: "this-is-a-new-topic",
            posts_count: 12,
            reply_count: 0,
            highest_post_number: 12,
            image_url: null,
            created_at: "2021-06-08T14:44:03.664Z",
            last_posted_at: "2021-06-08T19:57:35.853Z",
            bumped: true,
            bumped_at: "2021-06-08T19:57:35.853Z",
            archetype: "regular",
            unseen: false,
            last_read_post_number: 12,
            unread_posts: 0,
            pinned: false,
            unpinned: null,
            visible: true,
            closed: false,
            archived: false,
            notification_level: 3,
            bookmarked: false,
            bookmarks: [],
            liked: false,
            tags: [],
            like_count: 0,
            views: 1,
            category_id: 1,
            featured_link: null,
            has_accepted_answer: false,
            posters: [{
              extras: "latest single",
              description: "Original Poster, Most Recent Poster",
              user: {
                id: 1,
                username: "bianca",
                name: null,
                avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
              }
            }]
          }],
          tags: [],
          id: 134,
          title: "Load more poll voters",
          fancy_title: "Load more poll voters",
          posts_count: 1,
          created_at: "2021-06-08T21:56:55.073Z",
          views: 4,
          reply_count: 0,
          like_count: 0,
          last_posted_at: "2021-06-08T21:56:55.166Z",
          visible: true,
          closed: false,
          archived: false,
          has_summary: false,
          archetype: "regular",
          slug: "load-more-poll-voters",
          category_id: 1,
          word_count: 14,
          deleted_at: null,
          user_id: 1,
          featured_link: null,
          pinned_globally: false,
          pinned_at: null,
          pinned_until: null,
          image_url: null,
          slow_mode_seconds: 0,
          draft: null,
          draft_key: "topic_134",
          draft_sequence: 7,
          posted: true,
          unpinned: null,
          pinned: false,
          current_post_number: 1,
          highest_post_number: 1,
          last_read_post_number: 1,
          last_read_post_id: 156,
          deleted_by: null,
          has_deleted: false,
          actions_summary: [{
            id: 4,
            count: 0,
            hidden: false,
            can_act: true
          }, {
            id: 8,
            count: 0,
            hidden: false,
            can_act: true
          }, {
            id: 7,
            count: 0,
            hidden: false,
            can_act: true
          }],
          chunk_size: 20,
          bookmarked: false,
          bookmarks: [],
          topic_timer: null,
          message_bus_last_id: 5,
          participant_count: 1,
          queued_posts_count: 0,
          show_read_indicator: false,
          thumbnails: null,
          slow_mode_enabled_until: null,
          details: {
            can_edit: true,
            notification_level: 3,
            notifications_reason_id: 1,
            can_move_posts: true,
            can_delete: true,
            can_remove_allowed_users: true,
            can_invite_to: true,
            can_invite_via_email: true,
            can_create_post: true,
            can_reply_as_new_topic: true,
            can_flag_topic: true,
            can_convert_topic: true,
            can_review_topic: true,
            can_close_topic: true,
            can_archive_topic: true,
            can_split_merge_topic: true,
            can_edit_staff_notes: true,
            can_toggle_topic_visibility: true,
            can_pin_unpin_topic: true,
            can_moderate_category: true,
            can_remove_self_id: 1,
            participants: [{
              id: 1,
              username: "bianca",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png",
              post_count: 1,
              primary_group_name: null,
              flair_url: null,
              flair_color: null,
              flair_bg_color: null,
              admin: true,
              trust_level: 0
            }],
            created_by: {
              id: 1,
              username: "bianca",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
            },
            last_poster: {
              id: 1,
              username: "bianca",
              name: null,
              avatar_template: "/letter_avatar_proxy/v4/letter/b/3be4f8/{size}.png"
            }
          },
          pending_posts: []
        });
      });
    });
    (0, _qunit.test)("does not show results button", async function (assert) {
      await (0, _testHelpers.visit)("/t/load-more-poll-voters/134");
      assert.ok(!(0, _qunitHelpers.exists)(".toggle-results"));
    });
  });
});
define("discourse/plugins/poll/acceptance/polls-bar-chart-test-desktop", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers"], function (_testHelpers, _qunit, _qunitHelpers) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Rendering polls with bar charts - desktop", function (needs) {
    needs.user();
    needs.settings({
      poll_enabled: true
    });
    needs.pretender((server, helper) => {
      server.get("/polls/voters.json", request => {
        let body = {};
        if (request.queryParams.option_id === "68b434ff88aeae7054e42cd05a4d9056") {
          body = {
            voters: {
              "68b434ff88aeae7054e42cd05a4d9056": [{
                id: 777,
                username: "bruce777",
                avatar_template: "/images/avatar.png",
                name: "Bruce Wayne"
              }]
            }
          };
        } else {
          body = {
            voters: Array.from(new Array(5), (_, i) => ({
              id: 600 + i,
              username: `bruce${600 + i}`,
              avatar_template: "/images/avatar.png",
              name: "Bruce Wayne"
            }))
          };
        }
        return helper.response(body);
      });
    });
    (0, _qunit.test)("Polls", async function (assert) {
      await (0, _testHelpers.visit)("/t/-/15");
      const polls = (0, _qunitHelpers.queryAll)(".poll");
      assert.strictEqual(polls.length, 2, "it should render the polls correctly");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".info-number", polls[0]).text(), "2", "it should display the right number of votes");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".info-number", polls[1]).text(), "3", "it should display the right number of votes");
    });
    (0, _qunit.test)("Public poll", async function (assert) {
      await (0, _testHelpers.visit)("/t/-/14");
      const polls = (0, _qunitHelpers.queryAll)(".poll");
      assert.strictEqual(polls.length, 1, "it should render the poll correctly");
      await (0, _testHelpers.click)("button.toggle-results");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".poll-voters:nth-of-type(1) li").length, 25, "it should display the right number of voters");
      await (0, _testHelpers.click)(".poll-voters-toggle-expand:nth-of-type(1) a");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".poll-voters:nth-of-type(1) li").length, 26, "it should display the right number of voters");
    });
    (0, _qunit.test)("Public number poll", async function (assert) {
      await (0, _testHelpers.visit)("/t/-/13");
      const polls = (0, _qunitHelpers.queryAll)(".poll");
      assert.strictEqual(polls.length, 1, "it should render the poll correctly");
      await (0, _testHelpers.click)("button.toggle-results");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".poll-voters:nth-of-type(1) li").length, 25, "it should display the right number of voters");
      assert.notOk((0, _qunitHelpers.queryAll)(".poll-voters:nth-of-type(1) li:nth-of-type(1) a").attr("href"), "user URL does not exist");
      await (0, _testHelpers.click)(".poll-voters-toggle-expand:nth-of-type(1) a");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".poll-voters:nth-of-type(1) li").length, 30, "it should display the right number of voters");
    });
  });
});
define("discourse/plugins/poll/acceptance/polls-bar-chart-test-mobile", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/qunit-helpers"], function (_testHelpers, _qunit, _qunitHelpers) {
  "use strict";

  (0, _qunitHelpers.acceptance)("Rendering polls with bar charts - mobile", function (needs) {
    needs.user();
    needs.mobileView();
    needs.settings({
      poll_enabled: true
    });
    needs.pretender((server, helper) => {
      server.get("/polls/voters.json", () => {
        return helper.response({
          voters: Array.from(new Array(10), (_, i) => ({
            id: 500 + i,
            username: `bruce${500 + i}`,
            avatar_template: "/images/avatar.png",
            name: "Bruce Wayne"
          }))
        });
      });
    });
    (0, _qunit.test)("Public number poll", async function (assert) {
      await (0, _testHelpers.visit)("/t/-/13");
      const polls = (0, _qunitHelpers.queryAll)(".poll");
      assert.strictEqual(polls.length, 1, "it should render the poll correctly");
      await (0, _testHelpers.click)("button.toggle-results");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".poll-voters:nth-of-type(1) li").length, 25, "it should display the right number of voters");
      assert.notOk((0, _qunitHelpers.queryAll)(".poll-voters:nth-of-type(1) li:nth-of-type(1) a").attr("href"), "user URL does not exist");
      await (0, _testHelpers.click)(".poll-voters-toggle-expand:nth-of-type(1) a");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".poll-voters:nth-of-type(1) li").length, 35, "it should display the right number of voters");
    });
  });
});
define("discourse/plugins/poll/component/poll-ui-builder-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/select-kit-helper", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _selectKitHelper, _templateFactory) {
  "use strict";

  async function setupBuilder(context) {
    const results = [];
    const model = {
      toolbarEvent: {
        getText: () => "",
        addText: t => results.push(t)
      }
    };
    context.model = model;
    await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
    /*
      <Modal::PollUiBuilder @inline={{true}} @model={{this.model}} @closeModal={{fn (mut this.closeCalled) true}} />
    */
    {
      "id": "Ykfz+lP1",
      "block": "[[[8,[39,0],null,[[\"@inline\",\"@model\",\"@closeModal\"],[true,[30,0,[\"model\"]],[28,[37,1],[[28,[37,2],[[30,0,[\"closeCalled\"]]],null],true],null]]],null]],[],false,[\"modal/poll-ui-builder\",\"fn\",\"mut\"]]",
      "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/poll/component/poll-ui-builder-test.js",
      "isStrictMode": false
    }));
    return results;
  }
  (0, _qunit.module)("Poll | Component | poll-ui-builder", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    (0, _qunit.test)("Can switch poll type", async function (assert) {
      await setupBuilder(this);
      assert.dom(".poll-type-value-regular").hasClass("active");
      await (0, _testHelpers.click)(".poll-type-value-multiple");
      assert.dom(".poll-type-value-multiple").hasClass("active", "can switch to 'multiple' type");
      assert.dom(".poll-type-value-number").doesNotExist("number type is hidden by default");
      await (0, _testHelpers.click)(".show-advanced");
      assert.dom(".poll-type-value-number").exists("number type appears in advanced mode");
      await (0, _testHelpers.click)(".poll-type-value-number");
      assert.dom(".poll-type-value-number").hasClass("active", "can switch to 'number' type");
    });
    (0, _qunit.test)("Automatically updates min/max when number of options change", async function (assert) {
      await setupBuilder(this);
      await (0, _testHelpers.click)(".poll-type-value-multiple");
      assert.dom(".poll-options-min").hasValue("0");
      assert.dom(".poll-options-max").hasValue("0");
      await (0, _testHelpers.fillIn)(".poll-option-value input", "a");
      assert.dom(".poll-options-min").hasValue("1");
      assert.dom(".poll-options-max").hasValue("1");
      await (0, _testHelpers.click)(".poll-option-add");
      await (0, _testHelpers.fillIn)(".poll-option-value:nth-of-type(2) input", "b");
      assert.dom(".poll-options-min").hasValue("1");
      assert.dom(".poll-options-max").hasValue("2");
    });
    (0, _qunit.test)("disables save button", async function (assert) {
      this.siteSettings.poll_maximum_options = 3;
      await setupBuilder(this);
      assert.dom(".insert-poll").isDisabled("Insert button disabled when no options specified");
      await (0, _testHelpers.fillIn)(".poll-option-value input", "a");
      assert.dom(".insert-poll").isEnabled("Insert button enabled once an option is specified");
      await (0, _testHelpers.click)(".poll-option-add");
      await (0, _testHelpers.fillIn)(".poll-option-value:nth-of-type(2) input", "b");
      await (0, _testHelpers.click)(".poll-option-add");
      await (0, _testHelpers.fillIn)(".poll-option-value:nth-of-type(3) input", "c");
      await (0, _testHelpers.click)(".poll-option-add");
      await (0, _testHelpers.fillIn)(".poll-option-value:nth-of-type(4) input", "d");
      assert.dom(".insert-poll").isDisabled("Insert button disabled when too many options");
    });
    (0, _qunit.test)("number mode", async function (assert) {
      const results = await setupBuilder(this);
      await (0, _testHelpers.click)(".show-advanced");
      await (0, _testHelpers.click)(".poll-type-value-number");
      await (0, _testHelpers.click)(".insert-poll");
      assert.strictEqual(results[results.length - 1], "[poll type=number results=always min=1 max=20 step=1 public=true]\n[/poll]\n");
      await (0, _testHelpers.fillIn)(".poll-options-step", "2");
      await (0, _testHelpers.click)(".insert-poll");
      assert.strictEqual(results[results.length - 1], "[poll type=number results=always min=1 max=20 step=2 public=true]\n[/poll]\n", "includes step value");
      await (0, _testHelpers.click)(".poll-toggle-public");
      await (0, _testHelpers.click)(".insert-poll");
      assert.strictEqual(results[results.length - 1], "[poll type=number results=always min=1 max=20 step=2 public=false]\n[/poll]\n", "can be set to private");
      await (0, _testHelpers.fillIn)(".poll-options-step", "0");
      assert.dom(".insert-poll").isDisabled("Insert button disabled when step is 0");
    });
    (0, _qunit.test)("regular mode", async function (assert) {
      const results = await setupBuilder(this);
      await (0, _testHelpers.fillIn)(".poll-option-value input", "a");
      await (0, _testHelpers.click)(".poll-option-add");
      await (0, _testHelpers.fillIn)(".poll-option-value:nth-of-type(2) input", "b");
      await (0, _testHelpers.click)(".insert-poll");
      assert.strictEqual(results[results.length - 1], "[poll type=regular results=always public=true chartType=bar]\n* a\n* b\n[/poll]\n", "has correct output");
      await (0, _testHelpers.click)(".show-advanced");
      await (0, _testHelpers.click)(".poll-toggle-public");
      await (0, _testHelpers.click)(".insert-poll");
      assert.strictEqual(results[results.length - 1], "[poll type=regular results=always public=false chartType=bar]\n* a\n* b\n[/poll]\n", "can be set to private");
      const groupChooser = (0, _selectKitHelper.default)(".group-chooser");
      await groupChooser.expand();
      await groupChooser.selectRowByName("custom_group");
      await groupChooser.collapse();
      await (0, _testHelpers.click)(".insert-poll");
      assert.strictEqual(results[results.length - 1], "[poll type=regular results=always public=false chartType=bar groups=custom_group]\n* a\n* b\n[/poll]\n", "has groups");
    });
    (0, _qunit.test)("multi-choice mode", async function (assert) {
      const results = await setupBuilder(this);
      await (0, _testHelpers.click)(".poll-type-value-multiple");
      await (0, _testHelpers.fillIn)(".poll-option-value input", "a");
      await (0, _testHelpers.click)(".poll-option-add");
      await (0, _testHelpers.fillIn)(".poll-option-value:nth-of-type(2) input", "b");
      await (0, _testHelpers.click)(".insert-poll");
      assert.strictEqual(results[results.length - 1], "[poll type=multiple results=always min=1 max=2 public=true chartType=bar]\n* a\n* b\n[/poll]\n", "has correct output");
      await (0, _testHelpers.click)(".show-advanced");
      await (0, _testHelpers.click)(".poll-toggle-public");
      await (0, _testHelpers.click)(".insert-poll");
      assert.strictEqual(results[results.length - 1], "[poll type=multiple results=always min=1 max=2 public=false chartType=bar]\n* a\n* b\n[/poll]\n", "can be set to private boolean");
    });
    (0, _qunit.test)("staff_only option is not present for non-staff", async function (assert) {
      await setupBuilder(this);
      await (0, _testHelpers.click)(".show-advanced");
      const resultVisibility = (0, _selectKitHelper.default)(".poll-result");
      assert.strictEqual(resultVisibility.header().value(), "always");
      await resultVisibility.expand();
      assert.false(resultVisibility.rowByValue("staff_only").exists(), "staff_only is not visible to normal users");
      await resultVisibility.collapse();
      this.currentUser.setProperties({
        admin: true
      });
      await resultVisibility.expand();
      assert.true(resultVisibility.rowByValue("staff_only").exists(), "staff_only is visible to staff");
      await resultVisibility.collapse();
    });
    (0, _qunit.test)("default public value can be controlled with site setting", async function (assert) {
      this.siteSettings.poll_default_public = false;
      const results = await setupBuilder(this);
      await (0, _testHelpers.fillIn)(".poll-option-value input", "a");
      await (0, _testHelpers.click)(".poll-option-add");
      await (0, _testHelpers.fillIn)(".poll-option-value:nth-of-type(2) input", "b");
      await (0, _testHelpers.click)(".insert-poll");
      assert.strictEqual(results[results.length - 1], "[poll type=regular results=always public=false chartType=bar]\n* a\n* b\n[/poll]\n", "can be set to private boolean");
    });
  });
});
define("discourse/plugins/poll/helpers/display-poll-builder-button", ["exports", "@ember/test-helpers", "discourse/tests/helpers/select-kit-helper"], function (_exports, _testHelpers, _selectKitHelper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.displayPollBuilderButton = displayPollBuilderButton;
  async function displayPollBuilderButton() {
    await (0, _testHelpers.visit)("/");
    await (0, _testHelpers.click)("#create-topic");
    await (0, _testHelpers.click)(".d-editor-button-bar .options");
    await (0, _selectKitHelper.default)(".toolbar-popup-menu-options").expand();
  }
});
define("discourse/plugins/poll/widgets/discourse-poll-option-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _qunitHelpers, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Integration | Component | Widget | discourse-poll-option", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    const template = (0, _templateFactory.createTemplateFactory)(
    /*
      
          <MountWidget
            @widget="discourse-poll-option"
            @args={{hash
              option=this.option
              isMultiple=this.isMultiple
              vote=this.vote
            }}
          />
        
    */
    {
      "id": "I5ChpuAZ",
      "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@widget\",\"@args\"],[\"discourse-poll-option\",[28,[37,1],null,[[\"option\",\"isMultiple\",\"vote\"],[[30,0,[\"option\"]],[30,0,[\"isMultiple\"]],[30,0,[\"vote\"]]]]]]],null],[1,\"\\n    \"]],[],false,[\"mount-widget\",\"hash\"]]",
      "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/poll/widgets/discourse-poll-option-test.js",
      "isStrictMode": false
    });
    (0, _qunit.test)("single, not selected", async function (assert) {
      this.set("option", {
        id: "opt-id"
      });
      this.set("vote", []);
      await (0, _testHelpers.render)(template);
      assert.strictEqual((0, _qunitHelpers.count)("li .d-icon-far-circle:nth-of-type(1)"), 1);
    });
    (0, _qunit.test)("single, selected", async function (assert) {
      this.set("option", {
        id: "opt-id"
      });
      this.set("vote", ["opt-id"]);
      await (0, _testHelpers.render)(template);
      assert.strictEqual((0, _qunitHelpers.count)("li .d-icon-circle:nth-of-type(1)"), 1);
    });
    (0, _qunit.test)("multi, not selected", async function (assert) {
      this.setProperties({
        option: {
          id: "opt-id"
        },
        isMultiple: true,
        vote: []
      });
      await (0, _testHelpers.render)(template);
      assert.strictEqual((0, _qunitHelpers.count)("li .d-icon-far-square:nth-of-type(1)"), 1);
    });
    (0, _qunit.test)("multi, selected", async function (assert) {
      this.setProperties({
        option: {
          id: "opt-id"
        },
        isMultiple: true,
        vote: ["opt-id"]
      });
      await (0, _testHelpers.render)(template);
      assert.strictEqual((0, _qunitHelpers.count)("li .d-icon-far-check-square:nth-of-type(1)"), 1);
    });
  });
});
define("discourse/plugins/poll/widgets/discourse-poll-standard-results-test", ["@ember/object", "@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/qunit-helpers", "@ember/template-factory"], function (_object, _testHelpers, _qunit, _componentTest, _qunitHelpers, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Integration | Component | Widget | discourse-poll-standard-results", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    const template = (0, _templateFactory.createTemplateFactory)(
    /*
      
          <MountWidget
            @widget="discourse-poll-standard-results"
            @args={{hash poll=this.poll isMultiple=this.isMultiple}}
          />
        
    */
    {
      "id": "jWVcnzzI",
      "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@widget\",\"@args\"],[\"discourse-poll-standard-results\",[28,[37,1],null,[[\"poll\",\"isMultiple\"],[[30,0,[\"poll\"]],[30,0,[\"isMultiple\"]]]]]]],null],[1,\"\\n    \"]],[],false,[\"mount-widget\",\"hash\"]]",
      "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/poll/widgets/discourse-poll-standard-results-test.js",
      "isStrictMode": false
    });
    (0, _qunit.test)("options in descending order", async function (assert) {
      this.set("poll", _object.default.create({
        options: [{
          votes: 5
        }, {
          votes: 4
        }],
        voters: 9
      }));
      await (0, _testHelpers.render)(template);
      assert.strictEqual((0, _qunitHelpers.queryAll)(".option .percentage")[0].innerText, "56%");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".option .percentage")[1].innerText, "44%");
    });
    (0, _qunit.test)("options in ascending order", async function (assert) {
      this.set("poll", _object.default.create({
        options: [{
          votes: 4
        }, {
          votes: 5
        }],
        voters: 9
      }));
      await (0, _testHelpers.render)(template);
      assert.strictEqual((0, _qunitHelpers.queryAll)(".option .percentage")[0].innerText, "56%");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".option .percentage")[1].innerText, "44%");
    });
    (0, _qunit.test)("multiple options in descending order", async function (assert) {
      this.set("isMultiple", true);
      this.set("poll", _object.default.create({
        type: "multiple",
        options: [{
          votes: 5,
          html: "a"
        }, {
          votes: 2,
          html: "b"
        }, {
          votes: 4,
          html: "c"
        }, {
          votes: 1,
          html: "b"
        }, {
          votes: 1,
          html: "a"
        }],
        voters: 12
      }));
      await (0, _testHelpers.render)(template);
      let percentages = (0, _qunitHelpers.queryAll)(".option .percentage");
      assert.strictEqual(percentages[0].innerText, "41%");
      assert.strictEqual(percentages[1].innerText, "33%");
      assert.strictEqual(percentages[2].innerText, "16%");
      assert.strictEqual(percentages[3].innerText, "8%");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".option")[3].querySelectorAll("span")[1].innerText, "a");
      assert.strictEqual(percentages[4].innerText, "8%");
      assert.strictEqual((0, _qunitHelpers.queryAll)(".option")[4].querySelectorAll("span")[1].innerText, "b");
    });
  });
});
define("discourse/plugins/poll/widgets/discourse-poll-test", ["@ember/object", "@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "discourse/tests/helpers/create-pretender", "discourse/tests/helpers/qunit-helpers", "discourse-i18n", "@ember/template-factory"], function (_object, _testHelpers, _qunit, _componentTest, _createPretender, _qunitHelpers, _discourseI18n, _templateFactory) {
  "use strict";

  let requests = 0;
  (0, _qunit.module)("Integration | Component | Widget | discourse-poll", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      _createPretender.default.put("/polls/vote", () => {
        ++requests;
        return (0, _createPretender.response)({
          poll: {
            name: "poll",
            type: "regular",
            status: "open",
            results: "always",
            options: [{
              id: "1f972d1df351de3ce35a787c89faad29",
              html: "yes",
              votes: 1
            }, {
              id: "d7ebc3a9beea2e680815a1e4f57d6db6",
              html: "no",
              votes: 0
            }],
            voters: 1,
            chart_type: "bar"
          },
          vote: ["1f972d1df351de3ce35a787c89faad29"]
        });
      });
    });
    (0, _qunit.test)("can vote", async function (assert) {
      this.set("args", _object.default.create({
        post: _object.default.create({
          id: 42,
          topic: {
            archived: false
          }
        }),
        poll: _object.default.create({
          name: "poll",
          type: "regular",
          status: "open",
          results: "always",
          options: [{
            id: "1f972d1df351de3ce35a787c89faad29",
            html: "yes",
            votes: 0
          }, {
            id: "d7ebc3a9beea2e680815a1e4f57d6db6",
            html: "no",
            votes: 0
          }],
          voters: 0,
          chart_type: "bar"
        }),
        vote: [],
        groupableUserFields: []
      }));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <MountWidget @widget="discourse-poll" @args={{this.args}} />
      */
      {
        "id": "snDg9bxh",
        "block": "[[[8,[39,0],null,[[\"@widget\",\"@args\"],[\"discourse-poll\",[30,0,[\"args\"]]]],null]],[],false,[\"mount-widget\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/poll/widgets/discourse-poll-test.js",
        "isStrictMode": false
      }));
      requests = 0;
      await (0, _testHelpers.click)("li[data-poll-option-id='1f972d1df351de3ce35a787c89faad29']");
      assert.strictEqual(requests, 1);
      assert.strictEqual((0, _qunitHelpers.count)(".chosen"), 1);
      assert.deepEqual(Array.from((0, _qunitHelpers.queryAll)(".chosen span")).map(span => span.innerText), ["100%", "yes"]);
      await (0, _testHelpers.click)(".toggle-results");
      assert.strictEqual((0, _qunitHelpers.count)("li[data-poll-option-id='1f972d1df351de3ce35a787c89faad29']"), 1);
    });
    (0, _qunit.test)("cannot vote if not member of the right group", async function (assert) {
      this.set("args", _object.default.create({
        post: _object.default.create({
          id: 42,
          topic: {
            archived: false
          }
        }),
        poll: _object.default.create({
          name: "poll",
          type: "regular",
          status: "open",
          results: "always",
          options: [{
            id: "1f972d1df351de3ce35a787c89faad29",
            html: "yes",
            votes: 0
          }, {
            id: "d7ebc3a9beea2e680815a1e4f57d6db6",
            html: "no",
            votes: 0
          }],
          voters: 0,
          chart_type: "bar",
          groups: "foo"
        }),
        vote: [],
        groupableUserFields: []
      }));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <MountWidget @widget="discourse-poll" @args={{this.args}} />
      */
      {
        "id": "snDg9bxh",
        "block": "[[[8,[39,0],null,[[\"@widget\",\"@args\"],[\"discourse-poll\",[30,0,[\"args\"]]]],null]],[],false,[\"mount-widget\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/poll/widgets/discourse-poll-test.js",
        "isStrictMode": false
      }));
      requests = 0;
      await (0, _testHelpers.click)("li[data-poll-option-id='1f972d1df351de3ce35a787c89faad29']");
      assert.strictEqual((0, _qunitHelpers.query)(".poll-container .alert").innerText, _discourseI18n.default.t("poll.results.groups.title", {
        groups: "foo"
      }));
      assert.strictEqual(requests, 0);
      assert.ok(!(0, _qunitHelpers.exists)(".chosen"));
    });
    (0, _qunit.test)("voting on a multiple poll with no min attribute", async function (assert) {
      this.set("args", _object.default.create({
        post: _object.default.create({
          id: 42,
          topic: {
            archived: false
          }
        }),
        poll: _object.default.create({
          name: "poll",
          type: "multiple",
          status: "open",
          results: "always",
          max: 2,
          options: [{
            id: "1f972d1df351de3ce35a787c89faad29",
            html: "yes",
            votes: 0
          }, {
            id: "d7ebc3a9beea2e680815a1e4f57d6db6",
            html: "no",
            votes: 0
          }],
          voters: 0,
          chart_type: "bar"
        }),
        vote: [],
        groupableUserFields: []
      }));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <MountWidget @widget="discourse-poll" @args={{this.args}} />
      */
      {
        "id": "snDg9bxh",
        "block": "[[[8,[39,0],null,[[\"@widget\",\"@args\"],[\"discourse-poll\",[30,0,[\"args\"]]]],null]],[],false,[\"mount-widget\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/poll/widgets/discourse-poll-test.js",
        "isStrictMode": false
      }));
      assert.ok((0, _qunitHelpers.exists)(".poll-buttons .cast-votes[disabled=true]"));
      await (0, _testHelpers.click)("li[data-poll-option-id='1f972d1df351de3ce35a787c89faad29']");
      await (0, _testHelpers.click)(".poll-buttons .cast-votes");
      assert.ok((0, _qunitHelpers.exists)(".chosen"));
    });
  });
});//# sourceMappingURL=poll_tests.map
