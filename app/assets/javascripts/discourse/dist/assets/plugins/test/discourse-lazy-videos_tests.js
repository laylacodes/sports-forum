define("discourse/plugins/discourse-lazy-videos/components/lazy-video-test", ["@ember/test-helpers", "qunit", "discourse/tests/helpers/component-test", "@ember/template-factory"], function (_testHelpers, _qunit, _componentTest, _templateFactory) {
  "use strict";

  (0, _qunit.module)("Discourse Lazy Videos | Component | lazy-video", function (hooks) {
    (0, _componentTest.setupRenderingTest)(hooks);
    this.attributes = {
      url: "https://www.youtube.com/watch?v=kPRA0W1kECg",
      thumbnail: "thumbnail.jpeg",
      title: "15 Sorting Algorithms in 6 Minutes",
      providerName: "youtube",
      id: "kPRA0W1kECg",
      dominantColor: "00ffff",
      startTime: 234
    };
    (0, _qunit.test)("displays the correct video title", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <LazyVideo @videoAttributes={{this.attributes}} />
      */
      {
        "id": "B8tqv5h1",
        "block": "[[[8,[39,0],null,[[\"@videoAttributes\"],[[30,0,[\"attributes\"]]]],null]],[],false,[\"lazy-video\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/discourse-lazy-videos/components/lazy-video-test.js",
        "isStrictMode": false
      }));
      assert.dom(".title-link").hasText(this.attributes.title);
    });
    (0, _qunit.test)("uses the correct video start time", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <LazyVideo @videoAttributes={{this.attributes}} />
      */
      {
        "id": "B8tqv5h1",
        "block": "[[[8,[39,0],null,[[\"@videoAttributes\"],[[30,0,[\"attributes\"]]]],null]],[],false,[\"lazy-video\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/discourse-lazy-videos/components/lazy-video-test.js",
        "isStrictMode": false
      }));
      assert.dom(".youtube-onebox").hasAttribute("data-video-start-time", "234");
    });
    (0, _qunit.test)("displays the correct provider icon", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <LazyVideo @videoAttributes={{this.attributes}} />
      */
      {
        "id": "B8tqv5h1",
        "block": "[[[8,[39,0],null,[[\"@videoAttributes\"],[[30,0,[\"attributes\"]]]],null]],[],false,[\"lazy-video\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/discourse-lazy-videos/components/lazy-video-test.js",
        "isStrictMode": false
      }));
      assert.dom(".icon.youtube-icon").exists();
    });
    (0, _qunit.test)("uses tthe dominant color from the dom", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <LazyVideo @videoAttributes={{this.attributes}} />
      */
      {
        "id": "B8tqv5h1",
        "block": "[[[8,[39,0],null,[[\"@videoAttributes\"],[[30,0,[\"attributes\"]]]],null]],[],false,[\"lazy-video\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/discourse-lazy-videos/components/lazy-video-test.js",
        "isStrictMode": false
      }));
      assert.dom(".video-thumbnail").hasAttribute("style", "background-color: #00ffff;");
    });
    (0, _qunit.test)("loads the iframe when clicked", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <LazyVideo @videoAttributes={{this.attributes}}/>
      */
      {
        "id": "B8tqv5h1",
        "block": "[[[8,[39,0],null,[[\"@videoAttributes\"],[[30,0,[\"attributes\"]]]],null]],[],false,[\"lazy-video\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/discourse-lazy-videos/components/lazy-video-test.js",
        "isStrictMode": false
      }));
      assert.dom(".lazy-video-container.video-loaded").doesNotExist();
      await (0, _testHelpers.click)(".video-thumbnail.youtube");
      assert.dom(".lazy-video-container.video-loaded iframe").exists();
    });
    (0, _qunit.test)("accepts an optional onLoadedVideo callback function", async function (assert) {
      this.set("foo", 1);
      this.set("onLoadedVideo", () => this.set("foo", 2));
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <LazyVideo @videoAttributes={{this.attributes}} @onLoadedVideo={{this.onLoadedVideo}} />
      */
      {
        "id": "oJScdikz",
        "block": "[[[8,[39,0],null,[[\"@videoAttributes\",\"@onLoadedVideo\"],[[30,0,[\"attributes\"]],[30,0,[\"onLoadedVideo\"]]]],null]],[],false,[\"lazy-video\"]]",
        "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/discourse-lazy-videos/components/lazy-video-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual(this.foo, 1);
      await (0, _testHelpers.click)(".video-thumbnail.youtube");
      assert.strictEqual(this.foo, 2);
    });
  });
});//# sourceMappingURL=discourse-lazy-videos_tests.map
