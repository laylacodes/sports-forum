define("discourse/plugins/discourse-lazy-videos/discourse/components/lazy-iframe", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if @providerName}}
    <iframe
      src={{this.iframeSrc}}
      title={{@title}}
      allowFullScreen
      scrolling="no"
      frameborder="0"
      seamless="seamless"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  {{/if}}
  */
  {
    "id": "aRGjz/CC",
    "block": "[[[41,[30,1],[[[1,\"  \"],[10,\"iframe\"],[15,\"src\",[30,0,[\"iframeSrc\"]]],[15,\"title\",[30,2]],[14,\"allowFullScreen\",\"\"],[14,\"scrolling\",\"no\"],[14,\"frameborder\",\"0\"],[14,\"seamless\",\"seamless\"],[14,\"allow\",\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"],[12],[13],[1,\"\\n\"]],[]],null]],[\"@providerName\",\"@title\"],false,[\"if\"]]",
    "moduleName": "discourse/plugins/discourse-lazy-videos/discourse/components/lazy-iframe.hbs",
    "isStrictMode": false
  });
  class LazyVideo extends _component2.default {
    get iframeSrc() {
      switch (this.args.providerName) {
        case "youtube":
          let url = `https://www.youtube.com/embed/${this.args.videoId}?autoplay=1&rel=0`;
          if (this.args.startTime) {
            url += `&start=${this.convertToSeconds(this.args.startTime)}`;
          }
          return url;
        case "vimeo":
          return `https://player.vimeo.com/video/${this.args.videoId}${this.args.videoId.includes("?") ? "&" : "?"}autoplay=1`;
        case "tiktok":
          return `https://www.tiktok.com/embed/v2/${this.args.videoId}`;
      }
    }
    convertToSeconds(time) {
      const match = time.toString().match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/);
      const [hours, minutes, seconds] = match.slice(1);
      if (hours || minutes || seconds) {
        const h = parseInt(hours, 10) || 0;
        const m = parseInt(minutes, 10) || 0;
        const s = parseInt(seconds, 10) || 0;
        return h * 3600 + m * 60 + s;
      }
      return time;
    }
  }
  _exports.default = LazyVideo;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, LazyVideo);
});
define("discourse/plugins/discourse-lazy-videos/discourse/components/lazy-video", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/template", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _template, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div
    class={{concat-class
      "lazy-video-container"
      (concat @videoAttributes.providerName "-onebox")
      (if this.isLoaded "video-loaded")
    }}
    data-video-id={{@videoAttributes.id}}
    data-video-title={{@videoAttributes.title}}
    data-video-start-time={{@videoAttributes.startTime}}
    data-provider-name={{@videoAttributes.providerName}}
  >
    {{#if this.isLoaded}}
      <LazyIframe
        @providerName={{@videoAttributes.providerName}}
        @title={{@videoAttributes.title}}
        @videoId={{@videoAttributes.id}}
        @startTime={{@videoAttributes.startTime}}
      />
    {{else}}
      <div
        class={{concat-class "video-thumbnail" @videoAttributes.providerName}}
        tabindex="0"
        style={{this.thumbnailStyle}}
        {{on "click" this.loadEmbed}}
        {{on "keypress" this.loadEmbed}}
      >
        <img
          class={{concat @videoAttributes.providerName "-thumbnail"}}
          src={{@videoAttributes.thumbnail}}
          title={{@videoAttributes.title}}
          loading="lazy"
        />
        <div
          class={{concat-class
            "icon"
            (concat @videoAttributes.providerName "-icon")
          }}
        ></div>
      </div>
      <div class="title-container">
        <div class="title-wrapper">
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="title-link"
            href={{@videoAttributes.url}}
            title={{@videoAttributes.title}}
          >
            {{@videoAttributes.title}}
          </a>
        </div>
      </div>
    {{/if}}
  </div>
  */
  {
    "id": "5+HCJd+d",
    "block": "[[[10,0],[15,0,[28,[37,0],[\"lazy-video-container\",[28,[37,1],[[30,1,[\"providerName\"]],\"-onebox\"],null],[52,[30,0,[\"isLoaded\"]],\"video-loaded\"]],null]],[15,\"data-video-id\",[30,1,[\"id\"]]],[15,\"data-video-title\",[30,1,[\"title\"]]],[15,\"data-video-start-time\",[30,1,[\"startTime\"]]],[15,\"data-provider-name\",[30,1,[\"providerName\"]]],[12],[1,\"\\n\"],[41,[30,0,[\"isLoaded\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@providerName\",\"@title\",\"@videoId\",\"@startTime\"],[[30,1,[\"providerName\"]],[30,1,[\"title\"]],[30,1,[\"id\"]],[30,1,[\"startTime\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"    \"],[11,0],[16,0,[28,[37,0],[\"video-thumbnail\",[30,1,[\"providerName\"]]],null]],[24,\"tabindex\",\"0\"],[16,5,[30,0,[\"thumbnailStyle\"]]],[4,[38,4],[\"click\",[30,0,[\"loadEmbed\"]]],null],[4,[38,4],[\"keypress\",[30,0,[\"loadEmbed\"]]],null],[12],[1,\"\\n      \"],[10,\"img\"],[15,0,[28,[37,1],[[30,1,[\"providerName\"]],\"-thumbnail\"],null]],[15,\"src\",[30,1,[\"thumbnail\"]]],[15,\"title\",[30,1,[\"title\"]]],[14,\"loading\",\"lazy\"],[12],[13],[1,\"\\n      \"],[10,0],[15,0,[28,[37,0],[\"icon\",[28,[37,1],[[30,1,[\"providerName\"]],\"-icon\"],null]],null]],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"title-container\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"title-wrapper\"],[12],[1,\"\\n        \"],[10,3],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[14,0,\"title-link\"],[15,6,[30,1,[\"url\"]]],[15,\"title\",[30,1,[\"title\"]]],[12],[1,\"\\n          \"],[1,[30,1,[\"title\"]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]]],[13]],[\"@videoAttributes\"],false,[\"concat-class\",\"concat\",\"if\",\"lazy-iframe\",\"on\"]]",
    "moduleName": "discourse/plugins/discourse-lazy-videos/discourse/components/lazy-video.hbs",
    "isStrictMode": false
  });
  let LazyVideo = _exports.default = (_class = class LazyVideo extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "isLoaded", _descriptor, this);
    }
    loadEmbed() {
      if (!this.isLoaded) {
        this.isLoaded = true;
        this.args.onLoadedVideo?.();
      }
    }
    onKeyPress(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        this.loadEmbed();
      }
    }
    get thumbnailStyle() {
      const color = this.args.videoAttributes.dominantColor;
      if (color?.match(/^[0-9A-Fa-f]+$/)) {
        return (0, _template.htmlSafe)(`background-color: #${color};`);
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isLoaded", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "loadEmbed", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "loadEmbed"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onKeyPress", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onKeyPress"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, LazyVideo);
});
define("discourse/plugins/discourse-lazy-videos/initializers/lazy-videos", ["exports", "discourse/lib/plugin-api", "discourse/plugins/discourse-lazy-videos/lib/lazy-video-attributes", "@ember/template-factory"], function (_exports, _pluginApi, _lazyVideoAttributes, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function initLazyEmbed(api) {
    api.decorateCookedElement((cooked, helper) => {
      if (cooked.classList.contains("d-editor-preview")) {
        return;
      }
      const lazyContainers = cooked.querySelectorAll(".lazy-video-container");
      lazyContainers.forEach(container => {
        const siteSettings = api.container.lookup("site-settings:main");
        const videoAttributes = (0, _lazyVideoAttributes.default)(container);
        if (siteSettings[`lazy_${videoAttributes.providerName}_enabled`]) {
          const onLoadedVideo = () => {
            const postId = cooked.closest("article")?.dataset?.postId;
            if (postId) {
              api.preventCloak(parseInt(postId, 10));
            }
          };
          const lazyVideo = helper.renderGlimmer("p.lazy-video-wrapper", (0, _templateFactory.createTemplateFactory)(
          /*
            <LazyVideo @videoAttributes={{@data.param}} @onLoadedVideo={{@data.onLoadedVideo}}/>
          */
          {
            "id": "ef9uP1aY",
            "block": "[[[8,[39,0],null,[[\"@videoAttributes\",\"@onLoadedVideo\"],[[30,1,[\"param\"]],[30,1,[\"onLoadedVideo\"]]]],null]],[\"@data\"],false,[\"lazy-video\"]]",
            "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/discourse-lazy-videos/initializers/lazy-videos.js",
            "isStrictMode": false
          }), {
            param: videoAttributes,
            onLoadedVideo
          });
          container.replaceWith(lazyVideo);
        }
      });
    }, {
      onlyStream: true
    });
  }
  var _default = _exports.default = {
    name: "discourse-lazy-videos",
    initialize() {
      (0, _pluginApi.withPluginApi)("1.6.0", initLazyEmbed);
    }
  };
});
define("discourse/plugins/discourse-lazy-videos/lib/lazy-video-attributes", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = getVideoAttributes;
  function getVideoAttributes(cooked) {
    if (!cooked.classList.contains("lazy-video-container")) {
      return {};
    }
    const url = cooked.querySelector("a")?.getAttribute("href");
    const img = cooked.querySelector("img");
    const thumbnail = img?.getAttribute("src");
    const dominantColor = img?.dataset?.dominantColor;
    const title = cooked.dataset.videoTitle;
    const startTime = cooked.dataset.videoStartTime;
    const providerName = cooked.dataset.providerName;
    const id = cooked.dataset.videoId;
    return {
      url,
      thumbnail,
      title,
      providerName,
      id,
      dominantColor,
      startTime
    };
  }
});//# sourceMappingURL=discourse-lazy-videos.map
