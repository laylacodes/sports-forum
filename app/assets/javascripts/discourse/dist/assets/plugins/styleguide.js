define("discourse/plugins/styleguide/discourse/components/color-example", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <section class="color-example">
    <div class="color-bg {{@color}}"></div>
    <div class="color-name">var(--{{@color}})</div>
  </section>
  */
  {
    "id": "3dT2P5BQ",
    "block": "[[[10,\"section\"],[14,0,\"color-example\"],[12],[1,\"\\n  \"],[10,0],[15,0,[29,[\"color-bg \",[30,1]]]],[12],[13],[1,\"\\n  \"],[10,0],[14,0,\"color-name\"],[12],[1,\"var(--\"],[1,[30,1]],[1,\")\"],[13],[1,\"\\n\"],[13]],[\"@color\"],false,[]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/color-example.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/dummy-component", ["exports", "@ember/template-factory", "@ember/component", "@ember/component/template-only"], function (_exports, _templateFactory, _component, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const DummyComponent = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    
    My custom component with foo: {{@model.foo}}
  
  */
  {
    "id": "ODMpV9i+",
    "block": "[[[1,\"\\n  My custom component with foo: \"],[1,[30,1,[\"foo\"]]],[1,\"\\n\"]],[\"@model\"],false,[]]",
    "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/styleguide/discourse/components/dummy-component.js",
    "isStrictMode": true
  }), (0, _templateOnly.default)());
  var _default = _exports.default = DummyComponent;
});
define("discourse/plugins/styleguide/discourse/components/sections/atoms/00-typography", ["exports", "discourse-common/helpers/i18n", "discourse/plugins/styleguide/discourse/components/styleguide-example", "@ember/template-factory", "@ember/component", "@ember/component/template-only"], function (_exports, _i18n, _styleguideExample, _templateFactory, _component, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    
    <StyleguideExample @title="h1">
      <h1>{{i18n "styleguide.sections.typography.example"}}</h1>
    </StyleguideExample>
  
    <StyleguideExample @title="h2">
      <h2>{{i18n "styleguide.sections.typography.example"}}</h2>
    </StyleguideExample>
  
    <StyleguideExample @title="h3">
      <h3>{{i18n "styleguide.sections.typography.example"}}</h3>
    </StyleguideExample>
  
    <StyleguideExample @title="h4">
      <h4>{{i18n "styleguide.sections.typography.example"}}</h4>
    </StyleguideExample>
  
    <StyleguideExample @title="h5">
      <h5>{{i18n "styleguide.sections.typography.example"}}</h5>
    </StyleguideExample>
  
    <StyleguideExample @title="h6">
      <h6>{{i18n "styleguide.sections.typography.example"}}</h6>
    </StyleguideExample>
  
    <StyleguideExample @title="p">
      <p>{{i18n "styleguide.sections.typography.paragraph"}}</p>
    </StyleguideExample>
  
  */
  {
    "id": "QiEpDwFg",
    "block": "[[[1,\"\\n  \"],[8,[32,0],null,[[\"@title\"],[\"h1\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h1\"],[12],[1,[28,[32,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[32,0],null,[[\"@title\"],[\"h2\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h2\"],[12],[1,[28,[32,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[32,0],null,[[\"@title\"],[\"h3\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h3\"],[12],[1,[28,[32,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[32,0],null,[[\"@title\"],[\"h4\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h4\"],[12],[1,[28,[32,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[32,0],null,[[\"@title\"],[\"h5\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h5\"],[12],[1,[28,[32,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[32,0],null,[[\"@title\"],[\"h6\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h6\"],[12],[1,[28,[32,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[32,0],null,[[\"@title\"],[\"p\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,2],[12],[1,[28,[32,1],[\"styleguide.sections.typography.paragraph\"],null]],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/discourse/plugins/styleguide/discourse/components/sections/atoms/00-typography.js",
    "scope": () => [_styleguideExample.default, _i18n.default],
    "isStrictMode": true
  }), (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/atoms/01-font-scale", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="section-description">
    <p>
      Discourse users can select from 4 different text sizes in their user
      settings, by default these are:
      <pre>
        Smaller: 14px Normal: 15px
        <span>(default)</span>
        Larger: 17px Largest: 19px
      </pre>
    </p>
  
    <p>
      If you'd like to increase the font size of your entire Discourse community,
      you can override the font-size of the HTML element. You can also provide
      different font sizes for the user text size settings defined above. The
      example below increases all text size options by 1px.
      <pre>
        html {
        <span class="hljs-attribute">font-size</span>: 16px;
        <span>// default font-size </span>
        &.text-size-smaller {
        <span class="hljs-attribute">font-size</span>: 15px; } &.text-size-larger
        {
        <span class="hljs-attribute">font-size</span>: 18px; } &.text-size-largest
        {
        <span class="hljs-attribute">font-size</span>: 20px; } }
      </pre>
    </p>
    <p>
      If you want to scale the fonts of a specific element, you can use
      Discourse's font scaling variables. Using the variable system ensures you're
      using a consistent set of font-sizes throughout your community.
      <p>
        Changing the font-size of a parent element will proportionately scale the
        font sizes of all its children.
      </p>
      <pre>
        .parent {
        <span class="hljs-attribute">font-size</span>: var(--font-up-3);
        <span>// Increases the relative font-size of this element and its children
          by 3 steps in the scale</span>
        .child {
        <span>// If this is set to var(--font-down-3) in Discourse's default CSS,
          the parent font-size increase above would make this equivalent to
          var(--font-0) (var(--font-down-3) + var(--font-up-3) = var(--font-0))</span>
        } }
      </pre>
    </p>
  </div>
  
  <StyleguideExample @title="var(--font-up-6), 2.296em">
    <p class="font-up-6">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-up-5), 2em">
    <p class="font-up-5">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-up-4), 1.7511em">
    <p class="font-up-4">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-up-3), 1.5157em">
    <p class="font-up-3">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-up-2), 1.3195em">
    <p class="font-up-2">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-up-1), 1.1487em">
    <p class="font-up-1">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-0), 1em — base font">
    <p class="font-0">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-down-1), 0.8706em">
    <p class="font-down-1">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-down-2), 0.7579em">
    <p class="font-down-2">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-down-3), 0.6599em">
    <p class="font-down-3">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-down-4), 0.5745em">
    <p class="font-down-4">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-down-5), 0.5em">
    <p class="font-down-5">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-down-6), 0.4355em">
    <p class="font-down-6">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  */
  {
    "id": "cQlFBEgT",
    "block": "[[[10,0],[14,0,\"section-description\"],[12],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    Discourse users can select from 4 different text sizes in their user\\n    settings, by default these are:\\n    \"],[10,\"pre\"],[12],[1,\"      Smaller: 14px Normal: 15px\\n      \"],[10,1],[12],[1,\"(default)\"],[13],[1,\"\\n      Larger: 17px Largest: 19px\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,2],[12],[1,\"\\n    If you'd like to increase the font size of your entire Discourse community,\\n    you can override the font-size of the HTML element. You can also provide\\n    different font sizes for the user text size settings defined above. The\\n    example below increases all text size options by 1px.\\n    \"],[10,\"pre\"],[12],[1,\"      html {\\n      \"],[10,1],[14,0,\"hljs-attribute\"],[12],[1,\"font-size\"],[13],[1,\": 16px;\\n      \"],[10,1],[12],[1,\"// default font-size \"],[13],[1,\"\\n      &.text-size-smaller {\\n      \"],[10,1],[14,0,\"hljs-attribute\"],[12],[1,\"font-size\"],[13],[1,\": 15px; } &.text-size-larger\\n      {\\n      \"],[10,1],[14,0,\"hljs-attribute\"],[12],[1,\"font-size\"],[13],[1,\": 18px; } &.text-size-largest\\n      {\\n      \"],[10,1],[14,0,\"hljs-attribute\"],[12],[1,\"font-size\"],[13],[1,\": 20px; } }\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    If you want to scale the fonts of a specific element, you can use\\n    Discourse's font scaling variables. Using the variable system ensures you're\\n    using a consistent set of font-sizes throughout your community.\\n    \"],[10,2],[12],[1,\"\\n      Changing the font-size of a parent element will proportionately scale the\\n      font sizes of all its children.\\n    \"],[13],[1,\"\\n    \"],[10,\"pre\"],[12],[1,\"      .parent {\\n      \"],[10,1],[14,0,\"hljs-attribute\"],[12],[1,\"font-size\"],[13],[1,\": var(--font-up-3);\\n      \"],[10,1],[12],[1,\"// Increases the relative font-size of this element and its children\\n        by 3 steps in the scale\"],[13],[1,\"\\n      .child {\\n      \"],[10,1],[12],[1,\"// If this is set to var(--font-down-3) in Discourse's default CSS,\\n        the parent font-size increase above would make this equivalent to\\n        var(--font-0) (var(--font-down-3) + var(--font-up-3) = var(--font-0))\"],[13],[1,\"\\n      } }\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-up-6), 2.296em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-up-6\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-up-5), 2em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-up-5\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-up-4), 1.7511em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-up-4\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-up-3), 1.5157em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-up-3\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-up-2), 1.3195em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-up-2\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-up-1), 1.1487em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-up-1\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-0), 1em — base font\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-0\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-down-1), 0.8706em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-down-1\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-down-2), 0.7579em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-down-2\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-down-3), 0.6599em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-down-3\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-down-4), 0.5745em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-down-4\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-down-5), 0.5em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-down-5\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-down-6), 0.4355em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-down-6\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]]],[],false,[\"styleguide-example\",\"i18n\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/atoms/01-font-scale.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/atoms/02-buttons", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title=".btn-icon - sizes (large, default, small)">
    {{#each @dummy.buttonSizes as |bs|}}
      <DButton
        @icon="times"
        @translatedTitle={{bs.text}}
        @disabled={{bs.disabled}}
        class={{bs.class}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-icon - states">
    {{#each @dummy.buttonStates as |bs|}}
      <DButton
        @icon="times"
        @translatedTitle={{bs.text}}
        @disabled={{bs.disabled}}
        class={{bs.class}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-text - sizes (large, default, small)">
    {{#each @dummy.buttonSizes as |bs|}}
      <DButton
        @translatedLabel={{bs.text}}
        @disabled={{bs.disabled}}
        class={{bs.class}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-text - states">
    {{#each @dummy.buttonStates as |bs|}}
      <DButton
        @translatedLabel={{bs.text}}
        @disabled={{bs.disabled}}
        class={{bs.class}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample
    @title=".btn-default .btn-icon-text - sizes (large, default, small)"
  >
    {{#each @dummy.buttonSizes as |bs|}}
      <DButton
        @icon="plus"
        @translatedLabel={{bs.text}}
        @disabled={{bs.disabled}}
        class={{bs.class}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-default .btn-icon-text - states">
    {{#each @dummy.buttonStates as |bs|}}
      <DButton
        @icon="plus"
        @translatedLabel={{bs.text}}
        @disabled={{bs.disabled}}
        class={{bs.class}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample
    @title=".btn-primary .btn-icon-text - sizes (large, default, small)"
  >
    {{#each @dummy.buttonSizes as |bs|}}
      <DButton
        @icon="plus"
        @translatedLabel={{bs.text}}
        @disabled={{bs.disabled}}
        class={{concat-class "btn-primary" bs.class}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-primary .btn-icon-text - states">
    {{#each @dummy.buttonStates as |bs|}}
      <DButton
        @icon="plus"
        @translatedLabel={{bs.text}}
        @disabled={{bs.disabled}}
        class={{concat-class "btn-primary" bs.class}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample
    @title=".btn-danger .btn-icon-text - sizes (large, default, small)"
  >
    {{#each @dummy.buttonSizes as |bs|}}
      <DButton
        @icon="trash-alt"
        @translatedLabel={{bs.text}}
        @disabled={{bs.disabled}}
        class={{concat-class "btn-danger" bs.class}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-danger .btn-icon-text - states">
    {{#each @dummy.buttonStates as |bs|}}
      <DButton
        @icon="trash-alt"
        @translatedLabel={{bs.text}}
        @disabled={{bs.disabled}}
        class={{concat-class "btn-danger" bs.class}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-flat - sizes (large, default, small)">
    {{#each @dummy.buttonSizes as |bs|}}
      <FlatButton
        @icon="trash-alt"
        @disabled={{bs.disabled}}
        @translatedTitle={{bs.title}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-flat - states">
    {{#each @dummy.buttonStates as |bs|}}
      <FlatButton
        @icon="trash-alt"
        @disabled={{bs.disabled}}
        @translatedTitle={{bs.title}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample
    @title="<DButton> btn-flat btn-text - sizes (large, default, small)"
  >
    {{#each @dummy.buttonSizes as |bs|}}
      <DButton
        @disabled={{bs.disabled}}
        @translatedLabel={{bs.text}}
        class={{concat-class "btn-flat" bs.class}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title="<DButton> btn-flat btn-text - states">
    {{#each @dummy.buttonStates as |bs|}}
      <DButton
        @disabled={{bs.disabled}}
        @translatedLabel={{bs.text}}
        class={{concat-class "btn-flat" bs.class}}
      />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title="<DToggleSwitch>">
    <DToggleSwitch
      @state={{@dummy.toggleSwitchState}}
      {{on
        "click"
        (fn (mut @dummy.toggleSwitchState) (not @dummy.toggleSwitchState))
      }}
    />
    <DToggleSwitch
      disabled="true"
      @state={{true}}
      title="Disabled with state=true"
    />
    <DToggleSwitch
      disabled="true"
      @state={{false}}
      title="Disabled with state=false"
    />
  </StyleguideExample>
  */
  {
    "id": "NRCPBOgc",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\".btn-icon - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],[[16,0,[30,2,[\"class\"]]]],[[\"@icon\",\"@translatedTitle\",\"@disabled\"],[\"times\",[30,2,[\"text\"]],[30,2,[\"disabled\"]]]],null],[1,\"\\n\"]],[2]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-icon - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],[[16,0,[30,3,[\"class\"]]]],[[\"@icon\",\"@translatedTitle\",\"@disabled\"],[\"times\",[30,3,[\"text\"]],[30,3,[\"disabled\"]]]],null],[1,\"\\n\"]],[3]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-text - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],[[16,0,[30,4,[\"class\"]]]],[[\"@translatedLabel\",\"@disabled\"],[[30,4,[\"text\"]],[30,4,[\"disabled\"]]]],null],[1,\"\\n\"]],[4]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-text - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],[[16,0,[30,5,[\"class\"]]]],[[\"@translatedLabel\",\"@disabled\"],[[30,5,[\"text\"]],[30,5,[\"disabled\"]]]],null],[1,\"\\n\"]],[5]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-default .btn-icon-text - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],[[16,0,[30,6,[\"class\"]]]],[[\"@icon\",\"@translatedLabel\",\"@disabled\"],[\"plus\",[30,6,[\"text\"]],[30,6,[\"disabled\"]]]],null],[1,\"\\n\"]],[6]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-default .btn-icon-text - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],[[16,0,[30,7,[\"class\"]]]],[[\"@icon\",\"@translatedLabel\",\"@disabled\"],[\"plus\",[30,7,[\"text\"]],[30,7,[\"disabled\"]]]],null],[1,\"\\n\"]],[7]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-primary .btn-icon-text - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],[[16,0,[28,[37,4],[\"btn-primary\",[30,8,[\"class\"]]],null]]],[[\"@icon\",\"@translatedLabel\",\"@disabled\"],[\"plus\",[30,8,[\"text\"]],[30,8,[\"disabled\"]]]],null],[1,\"\\n\"]],[8]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-primary .btn-icon-text - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],[[16,0,[28,[37,4],[\"btn-primary\",[30,9,[\"class\"]]],null]]],[[\"@icon\",\"@translatedLabel\",\"@disabled\"],[\"plus\",[30,9,[\"text\"]],[30,9,[\"disabled\"]]]],null],[1,\"\\n\"]],[9]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-danger .btn-icon-text - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],[[16,0,[28,[37,4],[\"btn-danger\",[30,10,[\"class\"]]],null]]],[[\"@icon\",\"@translatedLabel\",\"@disabled\"],[\"trash-alt\",[30,10,[\"text\"]],[30,10,[\"disabled\"]]]],null],[1,\"\\n\"]],[10]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-danger .btn-icon-text - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],[[16,0,[28,[37,4],[\"btn-danger\",[30,11,[\"class\"]]],null]]],[[\"@icon\",\"@translatedLabel\",\"@disabled\"],[\"trash-alt\",[30,11,[\"text\"]],[30,11,[\"disabled\"]]]],null],[1,\"\\n\"]],[11]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-flat - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,5],null,[[\"@icon\",\"@disabled\",\"@translatedTitle\"],[\"trash-alt\",[30,12,[\"disabled\"]],[30,12,[\"title\"]]]],null],[1,\"\\n\"]],[12]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-flat - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,5],null,[[\"@icon\",\"@disabled\",\"@translatedTitle\"],[\"trash-alt\",[30,13,[\"disabled\"]],[30,13,[\"title\"]]]],null],[1,\"\\n\"]],[13]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<DButton> btn-flat btn-text - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],[[16,0,[28,[37,4],[\"btn-flat\",[30,14,[\"class\"]]],null]]],[[\"@disabled\",\"@translatedLabel\"],[[30,14,[\"disabled\"]],[30,14,[\"text\"]]]],null],[1,\"\\n\"]],[14]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<DButton> btn-flat btn-text - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],[[16,0,[28,[37,4],[\"btn-flat\",[30,15,[\"class\"]]],null]]],[[\"@disabled\",\"@translatedLabel\"],[[30,15,[\"disabled\"]],[30,15,[\"text\"]]]],null],[1,\"\\n\"]],[15]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<DToggleSwitch>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,6],[[4,[38,7],[\"click\",[28,[37,8],[[28,[37,9],[[30,1,[\"toggleSwitchState\"]]],null],[28,[37,10],[[30,1,[\"toggleSwitchState\"]]],null]],null]],null]],[[\"@state\"],[[30,1,[\"toggleSwitchState\"]]]],null],[1,\"\\n  \"],[8,[39,6],[[24,\"disabled\",\"true\"],[24,\"title\",\"Disabled with state=true\"]],[[\"@state\"],[true]],null],[1,\"\\n  \"],[8,[39,6],[[24,\"disabled\",\"true\"],[24,\"title\",\"Disabled with state=false\"]],[[\"@state\"],[false]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\"],false,[\"styleguide-example\",\"each\",\"-track-array\",\"d-button\",\"concat-class\",\"flat-button\",\"d-toggle-switch\",\"on\",\"fn\",\"mut\",\"not\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/atoms/02-buttons.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/atoms/03-colors", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="primary">
    <section class="color-row">
      <ColorExample @color="primary-very-low" />
      <ColorExample @color="primary-low" />
      <ColorExample @color="primary-low-mid" />
    </section>
    <section class="color-row">
      <ColorExample @color="primary-medium" />
      <ColorExample @color="primary-high" />
      <ColorExample @color="primary" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="primary-100">
    <section class="color-row">
      <ColorExample @color="primary-50" />
      <ColorExample @color="primary-100" />
      <ColorExample @color="primary-200" />
      <ColorExample @color="primary-300" />
      <ColorExample @color="primary-400" />
      <ColorExample @color="primary-500" />
    </section>
    <section class="color-row">
      <ColorExample @color="primary-600" />
      <ColorExample @color="primary-700" />
      <ColorExample @color="primary-800" />
      <ColorExample @color="primary-900" />
      <ColorExample @color="primary" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="secondary">
    <section class="color-row">
      <ColorExample @color="secondary-low" />
      <ColorExample @color="secondary-medium" />
      <ColorExample @color="secondary-high" />
      <ColorExample @color="secondary" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="tertiary">
    <section class="color-row">
      <ColorExample @color="tertiary-low" />
      <ColorExample @color="tertiary-medium" />
      <ColorExample @color="tertiary-high" />
      <ColorExample @color="tertiary" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="tertiary-100">
    <section class="color-row">
      <ColorExample @color="tertiary-50" />
      <ColorExample @color="tertiary-100" />
      <ColorExample @color="tertiary-200" />
      <ColorExample @color="tertiary-300" />
      <ColorExample @color="tertiary-400" />
      <ColorExample @color="tertiary-500" />
    </section>
    <section class="color-row">
      <ColorExample @color="tertiary-600" />
      <ColorExample @color="tertiary-700" />
      <ColorExample @color="tertiary-800" />
      <ColorExample @color="tertiary-900" />
      <ColorExample @color="tertiary" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="quaternary">
    <section class="color-row">
      <ColorExample @color="quaternary-low" />
      <ColorExample @color="quaternary" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="highlight">
    <section class="color-row">
      <ColorExample @color="highlight-bg" />
      <ColorExample @color="highlight" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="danger">
    <section class="color-row">
      <ColorExample @color="danger-low" />
      <ColorExample @color="danger-low-mid" />
      <ColorExample @color="danger-medium" />
      <ColorExample @color="danger" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="success">
    <section class="color-row">
      <ColorExample @color="success-low" />
      <ColorExample @color="success-medium" />
      <ColorExample @color="success" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="love">
    <section class="color-row">
      <ColorExample @color="love-low" />
      <ColorExample @color="love" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="header_primary">
    <section class="color-row">
      <ColorExample @color="header_background" />
    </section>
    <section class="color-row">
      <ColorExample @color="header_primary" />
      <ColorExample @color="header_primary-very-high" />
      <ColorExample @color="header_primary-high" />
    </section>
    <section class="color-row">
      <ColorExample @color="header_primary-medium" />
      <ColorExample @color="header_primary-low-mid" />
      <ColorExample @color="header_primary-low" />
    </section>
  </StyleguideExample>
  */
  {
    "id": "o3zn/TaF",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"primary\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-very-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-low-mid\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-high\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"primary-100\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-50\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-100\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-200\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-300\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-400\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-500\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-600\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-700\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-800\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-900\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"secondary\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"secondary-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"secondary-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"secondary-high\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"secondary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"tertiary\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-high\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"tertiary-100\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-50\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-100\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-200\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-300\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-400\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-500\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-600\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-700\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-800\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-900\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"quaternary\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"quaternary-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"quaternary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"highlight\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"highlight-bg\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"highlight\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"danger\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"danger-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"danger-low-mid\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"danger-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"danger\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"success\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"success-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"success-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"success\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"love\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"love-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"love\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"header_primary\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_background\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_primary\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_primary-very-high\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_primary-high\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_primary-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_primary-low-mid\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_primary-low\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[],false,[\"styleguide-example\",\"color-example\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/atoms/03-colors.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/atoms/04-icons", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="section-description">
    <p>Discourse uses a free set of SVG icons from Font Awesome (<a
        href="https://fontawesome.com/icons?d=gallery&m=free"
      >{{i18n "styleguide.sections.icons.full_list"}}</a>).</p>
    <p>Plugins and themes can add SVG icons to the SVG spritesheet, or replace
      existing icons entirely.</p>
    <p>
      <ul>
        <li><a
            href="https://meta.discourse.org/t/introducing-font-awesome-5-and-svg-icons/101643"
          >How to use SVG icons in your plugin or theme</a></li>
        <li><a
            href="https://meta.discourse.org/t/replace-discourses-default-svg-icons-with-custom-icons-in-a-theme/115736/1"
          >How to replace Discourse's default icons in a theme</a></li>
      </ul>
    </p>
    <p>By default, all icons have the
      <pre class="pre-inline">.d-icon</pre>
      class applied along with a class containing the name of the icon (e.g.,
      <pre class="pre-inline">.d-icon-link</pre>)</p>
  </div>
  
  <StyleguideExample @title="d-icon - all available icons">
    <StyleguideIcons />
  </StyleguideExample>
  */
  {
    "id": "0C6WSs8F",
    "block": "[[[10,0],[14,0,\"section-description\"],[12],[1,\"\\n  \"],[10,2],[12],[1,\"Discourse uses a free set of SVG icons from Font Awesome (\"],[10,3],[14,6,\"https://fontawesome.com/icons?d=gallery&m=free\"],[12],[1,[28,[35,0],[\"styleguide.sections.icons.full_list\"],null]],[13],[1,\").\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"Plugins and themes can add SVG icons to the SVG spritesheet, or replace\\n    existing icons entirely.\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    \"],[10,\"ul\"],[12],[1,\"\\n      \"],[10,\"li\"],[12],[10,3],[14,6,\"https://meta.discourse.org/t/introducing-font-awesome-5-and-svg-icons/101643\"],[12],[1,\"How to use SVG icons in your plugin or theme\"],[13],[13],[1,\"\\n      \"],[10,\"li\"],[12],[10,3],[14,6,\"https://meta.discourse.org/t/replace-discourses-default-svg-icons-with-custom-icons-in-a-theme/115736/1\"],[12],[1,\"How to replace Discourse's default icons in a theme\"],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"By default, all icons have the\\n    \"],[10,\"pre\"],[14,0,\"pre-inline\"],[12],[1,\".d-icon\"],[13],[1,\"\\n    class applied along with a class containing the name of the icon (e.g.,\\n    \"],[10,\"pre\"],[14,0,\"pre-inline\"],[12],[1,\".d-icon-link\"],[13],[1,\")\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\"],[\"d-icon - all available icons\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,null,null],[1,\"\\n\"]],[]]]]]],[],false,[\"i18n\",\"styleguide-example\",\"styleguide-icons\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/atoms/04-icons.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/atoms/05-input-fields", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="text-field">
    <TextField @placeholder="Placeholder" />
  </StyleguideExample>
  
  <StyleguideExample @title="password">
    <PasswordField @type="password" @placeholder="Placeholder" />
  </StyleguideExample>
  
  <StyleguideExample @title="textarea">
    <Textarea placeholder="Placeholder" />
  </StyleguideExample>
  
  <StyleguideExample @title="inline-form">
    <div class="inline-form">
      <TextField @placeholder="Placeholder" />
      <DButton
        @icon="search"
        @translatedLabel="Submit"
        type="submit"
        class="btn-primary"
      />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="inline-form with icon button">
    <div class="inline-form">
      <TextField @placeholder="Placeholder" />
      <DButton @icon="search" type="submit" class="btn-primary" />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="full-width inline-form with single input">
    <div class="inline-form full-width">
      <TextField @placeholder="Placeholder" />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="full-width inline-form with input and icon button">
    <div class="inline-form full-width">
      <TextField @placeholder="Placeholder" />
      <DButton @icon="search" type="submit" class="btn-primary" />
    </div>
  </StyleguideExample>
  
  <StyleguideExample
    @title="inline-form with <ComboBox>"
    @initialValue={{get @dummy "options.0.name"}}
    as |value|
  >
    <div class="inline-form">
      <TextField @placeholder="Placeholder" />
      <ComboBox
        @content={{@dummy.options}}
        @value={{value}}
        @onChange={{fn (mut value)}}
      />
      <DButton
        @icon="search"
        @translatedLabel="Submit"
        type="submit"
        class="btn-primary"
      />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="inline-form with <MultiSelect>">
    <div class="inline-form">
      <TextField />
      <MultiSelect @content={{@dummy.options}} @onChange={{@dummyAction}} />
      <DButton
        @icon="search"
        @translatedLabel="Submit"
        type="submit"
        class="btn-primary"
      />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="inline-form with <MultiSelect> and label">
    <div class="inline-form">
      <label>Text:</label>
      <TextField />
      <MultiSelect @content={{@dummy.options}} @onChange={{@dummyAction}} />
      <DButton
        @icon="search"
        @translatedLabel="Submit"
        type="submit"
        class="btn-primary"
      />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="full-width inline-form with search type input">
    <div class="inline-form full-width">
      <Input placeholder="Search type input" @type="search" />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="<CategoryNotificationsButton> and regular button">
    <div class="inline-form">
      <CategoryNotificationsButton
        @category={{get @dummy.categories 0}}
        @value={{1}}
        @onChange={{@dummyAction}}
      />
      <DButton @icon="reply" @type="submit" @translatedLabel="Button" />
    </div>
  </StyleguideExample>
  */
  {
    "id": "aZGyKOPp",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"text-field\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@placeholder\"],[\"Placeholder\"]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"password\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,[[\"@type\",\"@placeholder\"],[\"password\",\"Placeholder\"]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"textarea\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,3],[[24,\"placeholder\",\"Placeholder\"]],null,null],[1,\"\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"inline-form\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@placeholder\"],[\"Placeholder\"]],null],[1,\"\\n    \"],[8,[39,4],[[24,0,\"btn-primary\"],[24,4,\"submit\"]],[[\"@icon\",\"@translatedLabel\"],[\"search\",\"Submit\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"inline-form with icon button\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@placeholder\"],[\"Placeholder\"]],null],[1,\"\\n    \"],[8,[39,4],[[24,0,\"btn-primary\"],[24,4,\"submit\"]],[[\"@icon\"],[\"search\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"full-width inline-form with single input\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form full-width\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@placeholder\"],[\"Placeholder\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"full-width inline-form with input and icon button\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form full-width\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@placeholder\"],[\"Placeholder\"]],null],[1,\"\\n    \"],[8,[39,4],[[24,0,\"btn-primary\"],[24,4,\"submit\"]],[[\"@icon\"],[\"search\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"inline-form with <ComboBox>\",[28,[37,5],[[30,1],\"options.0.name\"],null]]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@placeholder\"],[\"Placeholder\"]],null],[1,\"\\n    \"],[8,[39,6],null,[[\"@content\",\"@value\",\"@onChange\"],[[30,1,[\"options\"]],[30,2],[28,[37,7],[[28,[37,8],[[30,2]],null]],null]]],null],[1,\"\\n    \"],[8,[39,4],[[24,0,\"btn-primary\"],[24,4,\"submit\"]],[[\"@icon\",\"@translatedLabel\"],[\"search\",\"Submit\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[2]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"inline-form with <MultiSelect>\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[8,[39,1],null,null,null],[1,\"\\n    \"],[8,[39,9],null,[[\"@content\",\"@onChange\"],[[30,1,[\"options\"]],[30,3]]],null],[1,\"\\n    \"],[8,[39,4],[[24,0,\"btn-primary\"],[24,4,\"submit\"]],[[\"@icon\",\"@translatedLabel\"],[\"search\",\"Submit\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"inline-form with <MultiSelect> and label\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[10,\"label\"],[12],[1,\"Text:\"],[13],[1,\"\\n    \"],[8,[39,1],null,null,null],[1,\"\\n    \"],[8,[39,9],null,[[\"@content\",\"@onChange\"],[[30,1,[\"options\"]],[30,3]]],null],[1,\"\\n    \"],[8,[39,4],[[24,0,\"btn-primary\"],[24,4,\"submit\"]],[[\"@icon\",\"@translatedLabel\"],[\"search\",\"Submit\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"full-width inline-form with search type input\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form full-width\"],[12],[1,\"\\n    \"],[8,[39,10],[[24,\"placeholder\",\"Search type input\"]],[[\"@type\"],[\"search\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<CategoryNotificationsButton> and regular button\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[8,[39,11],null,[[\"@category\",\"@value\",\"@onChange\"],[[28,[37,5],[[30,1,[\"categories\"]],0],null],1,[30,3]]],null],[1,\"\\n    \"],[8,[39,4],null,[[\"@icon\",\"@type\",\"@translatedLabel\"],[\"reply\",\"submit\",\"Button\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@dummy\",\"value\",\"@dummyAction\"],false,[\"styleguide-example\",\"text-field\",\"password-field\",\"textarea\",\"d-button\",\"get\",\"combo-box\",\"fn\",\"mut\",\"multi-select\",\"input\",\"category-notifications-button\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/atoms/05-input-fields.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/atoms/06-spinners", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="spinner - small">
    <div class="spinner small"></div>
  </StyleguideExample>
  
  <StyleguideExample @title="spinner - regular">
    <div class="spinner"></div>
  </StyleguideExample>
  */
  {
    "id": "qfLuuSvF",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"spinner - small\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"spinner small\"],[12],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"spinner - regular\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"spinner\"],[12],[13],[1,\"\\n\"]],[]]]]]],[],false,[\"styleguide-example\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/atoms/06-spinners.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/atoms/date-time-inputs", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<TimeInput>">
    <TimeInput />
  </StyleguideExample>
  
  <StyleguideExample @title="<DateInput>">
    <DateInput />
  </StyleguideExample>
  
  <StyleguideExample @title="<DateTimeInput>">
    <DateTimeInput @clearable={{true}} />
  </StyleguideExample>
  
  <StyleguideExample @title="<DateTimeInputRange>">
    <DateTimeInputRange />
  </StyleguideExample>
  
  <StyleguideExample @title="<DateTimeInputRange>">
    <DateTimeInputRange @showFromTime={{false}} @showToTime={{false}} />
  </StyleguideExample>
  
  <StyleguideExample @title="<FutureDateInput>">
    <FutureDateInput @displayLabelIcon="far-clock" @clearable={{true}} />
  </StyleguideExample>
  
  <StyleguideExample @title="<DatePicker>">
    <DatePicker @defaultDate="YYYY-MM-DD" />
  </StyleguideExample>
  
  <Styleguide::CalendarDateTimeInput />
  */
  {
    "id": "Yarso9Lg",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<TimeInput>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,null,null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<DateInput>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,null,null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<DateTimeInput>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,3],null,[[\"@clearable\"],[true]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<DateTimeInputRange>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,4],null,null,null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<DateTimeInputRange>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,4],null,[[\"@showFromTime\",\"@showToTime\"],[false,false]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<FutureDateInput>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,5],null,[[\"@displayLabelIcon\",\"@clearable\"],[\"far-clock\",true]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<DatePicker>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,6],null,[[\"@defaultDate\"],[\"YYYY-MM-DD\"]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,7],null,null,null]],[],false,[\"styleguide-example\",\"time-input\",\"date-input\",\"date-time-input\",\"date-time-input-range\",\"future-date-input\",\"date-picker\",\"styleguide/calendar-date-time-input\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/atoms/date-time-inputs.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/atoms/dropdowns", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample
    @title="<ComboBox>"
    @initialValue={{get @dummy "options.0.name"}}
    as |value|
  >
    <ComboBox
      @content={{@dummy.options}}
      @value={{value}}
      @onChange={{fn (mut value)}}
    />
  </StyleguideExample>
  
  <StyleguideExample
    @title="filterable <ComboBox>"
    @initialValue={{get @dummy "categories.0.name"}}
    as |value|
  >
    <ComboBox
      @content={{@dummy.categories}}
      @value={{value}}
      @options={{hash filterable=true}}
      @onChange={{fn (mut value)}}
    />
  </StyleguideExample>
  
  <StyleguideExample
    @title="<ComboBox> with a default state"
    @initialValue={{get @dummy "options.0.name"}}
    as |value|
  >
    <ComboBox
      @content={{@dummy.options}}
      @value={{value}}
      @options={{hash none="category.none"}}
      @onChange={{fn (mut value)}}
    />
  </StyleguideExample>
  
  <StyleguideExample
    @title="<ComboBox> clearable"
    @initialValue={{get @dummy "options.0.name"}}
    as |value|
  >
    <ComboBox
      @content={{@dummy.options}}
      @clearable={{true}}
      @value={{value}}
      @options={{hash none="category.none"}}
      @onChange={{fn (mut value)}}
    />
  </StyleguideExample>
  
  <StyleguideExample
    @title="<TopicNotificationOptions>"
    @initialValue={{1}}
    as |value|
  >
    <TopicNotificationsOptions
      @topic={{@dummy.topic}}
      @value={{value}}
      @onChange={{fn (mut value)}}
    />
  </StyleguideExample>
  
  <StyleguideExample @title="<TopicFooterMobileDropdown>">
    <TopicFooterMobileDropdown @topic={{@dummy.topic}} />
  </StyleguideExample>
  
  <StyleguideExample
    @title="<CategoryChooser>"
    @initialValue={{get @categories "0" "name"}}
    as |value|
  >
    <CategoryChooser @value={{value}} @onChange={{fn (mut value)}} />
  </StyleguideExample>
  
  <StyleguideExample @title="<PinnedButton>">
    <PinnedButton @topic={{@dummy.pinnedTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="<PinnedOptions>">
    <PinnedOptions @topic={{@dummy.pinnedTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="<CategoriesAdminDropdown>">
    <CategoriesAdminDropdown @onChange={{@dummyAction}} />
  </StyleguideExample>
  
  <StyleguideExample @title="<CategoryNotificationsButton>">
    <CategoryNotificationsButton
      @category={{get @dummy "categories.0"}}
      @value={{1}}
      @onChange={{@dummyAction}}
    />
  </StyleguideExample>
  
  <StyleguideExample @title="<NotificationsButton>">
    <NotificationsButton
      @options={{hash i18nPrefix="groups.notifications"}}
      @value={{2}}
      @onChange={{@dummyAction}}
    />
  </StyleguideExample>
  
  <StyleguideExample @title="<DropdownSelectBox>">
    <DropdownSelectBox
      @content={{@dummy.options}}
      @onChange={{@dummyAction}}
      @options={{hash translatedNone="Something"}}
    />
  </StyleguideExample>
  
  <StyleguideExample @title="<FutureDateInputSelector>">
    <FutureDateInputSelector
      @input={{@dummy.topicTimerUpdateDate}}
      @includeWeekend={{true}}
      @includeForever={{true}}
      @options={{hash none="time_shortcut.select_timeframe"}}
    />
  </StyleguideExample>
  
  <StyleguideExample @title="<MultiSelect>">
    <MultiSelect @content={{@dummy.options}} @onChange={{@dummyAction}} />
  </StyleguideExample>
  
  <StyleguideExample @title="<MiniTagChooser>">
    <div class="inline-form">
      <MiniTagChooser
        @value={{@dummy.selectedTags}}
        @options={{hash filterable=true}}
      />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="<MiniTagChooser> with useHeaderFilter=true">
    <div class="inline-form">
      <MiniTagChooser
        @value={{@dummy.selectedTags}}
        @options={{hash
          filterable=true
          filterPlaceholder="tagging.choose_for_topic"
          useHeaderFilter=true
        }}
      />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="admin <GroupChooser>">
    <GroupChooser
      @selected={{@dummy.selectedGroups}}
      @content={{@dummy.groups}}
      @onChange={{@dummyAction}}
    />
  </StyleguideExample>
  
  <StyleguideExample @title="<ListSetting>">
    <ListSetting @settingValue={{@dummy.settings}} @onChange={{@dummyAction}} />
  </StyleguideExample>
  
  <StyleguideExample @title="<ListSetting>">
    <ListSetting
      @settingValue={{@dummy.colors}}
      @nameProperty="color"
      @onChange={{@dummyAction}}
    />
  </StyleguideExample>
  
  <StyleguideExample @title="<UserNotificationsDropdown>">
    <UserNotificationsDropdown @user={{@currentUser}} @value="changeToNormal" />
  </StyleguideExample>
  */
  {
    "id": "s1hNNqF+",
    "block": "[[[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"<ComboBox>\",[28,[37,1],[[30,1],\"options.0.name\"],null]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,[[\"@content\",\"@value\",\"@onChange\"],[[30,1,[\"options\"]],[30,2],[28,[37,3],[[28,[37,4],[[30,2]],null]],null]]],null],[1,\"\\n\"]],[2]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"filterable <ComboBox>\",[28,[37,1],[[30,1],\"categories.0.name\"],null]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,[[\"@content\",\"@value\",\"@options\",\"@onChange\"],[[30,1,[\"categories\"]],[30,3],[28,[37,5],null,[[\"filterable\"],[true]]],[28,[37,3],[[28,[37,4],[[30,3]],null]],null]]],null],[1,\"\\n\"]],[3]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"<ComboBox> with a default state\",[28,[37,1],[[30,1],\"options.0.name\"],null]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,[[\"@content\",\"@value\",\"@options\",\"@onChange\"],[[30,1,[\"options\"]],[30,4],[28,[37,5],null,[[\"none\"],[\"category.none\"]]],[28,[37,3],[[28,[37,4],[[30,4]],null]],null]]],null],[1,\"\\n\"]],[4]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"<ComboBox> clearable\",[28,[37,1],[[30,1],\"options.0.name\"],null]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,[[\"@content\",\"@clearable\",\"@value\",\"@options\",\"@onChange\"],[[30,1,[\"options\"]],true,[30,5],[28,[37,5],null,[[\"none\"],[\"category.none\"]]],[28,[37,3],[[28,[37,4],[[30,5]],null]],null]]],null],[1,\"\\n\"]],[5]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"<TopicNotificationOptions>\",1]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,6],null,[[\"@topic\",\"@value\",\"@onChange\"],[[30,1,[\"topic\"]],[30,6],[28,[37,3],[[28,[37,4],[[30,6]],null]],null]]],null],[1,\"\\n\"]],[6]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<TopicFooterMobileDropdown>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,7],null,[[\"@topic\"],[[30,1,[\"topic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"<CategoryChooser>\",[28,[37,1],[[30,7],\"0\",\"name\"],null]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,8],null,[[\"@value\",\"@onChange\"],[[30,8],[28,[37,3],[[28,[37,4],[[30,8]],null]],null]]],null],[1,\"\\n\"]],[8]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<PinnedButton>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,9],null,[[\"@topic\"],[[30,1,[\"pinnedTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<PinnedOptions>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,10],null,[[\"@topic\"],[[30,1,[\"pinnedTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<CategoriesAdminDropdown>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,11],null,[[\"@onChange\"],[[30,9]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<CategoryNotificationsButton>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,12],null,[[\"@category\",\"@value\",\"@onChange\"],[[28,[37,1],[[30,1],\"categories.0\"],null],1,[30,9]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<NotificationsButton>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,13],null,[[\"@options\",\"@value\",\"@onChange\"],[[28,[37,5],null,[[\"i18nPrefix\"],[\"groups.notifications\"]]],2,[30,9]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<DropdownSelectBox>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,14],null,[[\"@content\",\"@onChange\",\"@options\"],[[30,1,[\"options\"]],[30,9],[28,[37,5],null,[[\"translatedNone\"],[\"Something\"]]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<FutureDateInputSelector>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,15],null,[[\"@input\",\"@includeWeekend\",\"@includeForever\",\"@options\"],[[30,1,[\"topicTimerUpdateDate\"]],true,true,[28,[37,5],null,[[\"none\"],[\"time_shortcut.select_timeframe\"]]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<MultiSelect>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,16],null,[[\"@content\",\"@onChange\"],[[30,1,[\"options\"]],[30,9]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<MiniTagChooser>\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[8,[39,17],null,[[\"@value\",\"@options\"],[[30,1,[\"selectedTags\"]],[28,[37,5],null,[[\"filterable\"],[true]]]]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<MiniTagChooser> with useHeaderFilter=true\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[8,[39,17],null,[[\"@value\",\"@options\"],[[30,1,[\"selectedTags\"]],[28,[37,5],null,[[\"filterable\",\"filterPlaceholder\",\"useHeaderFilter\"],[true,\"tagging.choose_for_topic\",true]]]]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"admin <GroupChooser>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,18],null,[[\"@selected\",\"@content\",\"@onChange\"],[[30,1,[\"selectedGroups\"]],[30,1,[\"groups\"]],[30,9]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<ListSetting>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,19],null,[[\"@settingValue\",\"@onChange\"],[[30,1,[\"settings\"]],[30,9]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<ListSetting>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,19],null,[[\"@settingValue\",\"@nameProperty\",\"@onChange\"],[[30,1,[\"colors\"]],\"color\",[30,9]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<UserNotificationsDropdown>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,20],null,[[\"@user\",\"@value\"],[[30,10],\"changeToNormal\"]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\",\"value\",\"value\",\"value\",\"value\",\"value\",\"@categories\",\"value\",\"@dummyAction\",\"@currentUser\"],false,[\"styleguide-example\",\"get\",\"combo-box\",\"fn\",\"mut\",\"hash\",\"topic-notifications-options\",\"topic-footer-mobile-dropdown\",\"category-chooser\",\"pinned-button\",\"pinned-options\",\"categories-admin-dropdown\",\"category-notifications-button\",\"notifications-button\",\"dropdown-select-box\",\"future-date-input-selector\",\"multi-select\",\"mini-tag-chooser\",\"group-chooser\",\"list-setting\",\"user-notifications-dropdown\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/atoms/dropdowns.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/atoms/topic-link", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="topic-link">
    {{topic-link @dummy.topic}}
  </StyleguideExample>
  */
  {
    "id": "z6KjTgHb",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"topic-link\"]],[[\"default\"],[[[[1,\"\\n  \"],[1,[28,[35,1],[[30,1,[\"topic\"]]],null]],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"topic-link\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/atoms/topic-link.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/atoms/topic-statuses", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="invisible">
    <TopicStatus @topic={{@dummy.invisibleTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="closed">
    <TopicStatus @topic={{@dummy.closedTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="pinned">
    <TopicStatus @topic={{@dummy.pinnedTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="unpinned">
    <TopicStatus @topic={{@dummy.unpinnedTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="archived">
    <TopicStatus @topic={{@dummy.archivedTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="warning">
    <TopicStatus @topic={{@dummy.warningTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="no status">
    <TopicStatus @topic={{@dummy.topic}} />
  </StyleguideExample>
  */
  {
    "id": "MRFAuNok",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"invisible\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,1,[\"invisibleTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"closed\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,1,[\"closedTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"pinned\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,1,[\"pinnedTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"unpinned\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,1,[\"unpinnedTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"archived\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,1,[\"archivedTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"warning\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,1,[\"warningTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"no status\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,1,[\"topic\"]]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"topic-status\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/atoms/topic-statuses.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/bread-crumbs", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="category-breadcrumbs">
    <BreadCrumbs @categories={{@dummy.categories}} @showTags={{false}} />
  </StyleguideExample>
  
  {{#if @siteSettings.tagging_enabled}}
    <StyleguideExample @title="category-breadcrumbs - tags">
      <BreadCrumbs @categories={{@dummy.categories}} @showTags={{true}} />
    </StyleguideExample>
  {{/if}}
  */
  {
    "id": "PQc9D8LV",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"category-breadcrumbs\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@categories\",\"@showTags\"],[[30,1,[\"categories\"]],false]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[41,[30,2,[\"tagging_enabled\"]],[[[1,\"  \"],[8,[39,0],null,[[\"@title\"],[\"category-breadcrumbs - tags\"]],[[\"default\"],[[[[1,\"\\n    \"],[8,[39,1],null,[[\"@categories\",\"@showTags\"],[[30,1,[\"categories\"]],true]],null],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]],null]],[\"@dummy\",\"@siteSettings\"],false,[\"styleguide-example\",\"bread-crumbs\",\"if\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/bread-crumbs.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/categories", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="category-badge - bullet">
    {{#each @dummy.categories as |c|}}
      {{category-badge c categoryStyle="bullet"}}
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title="category-badge - bar">
    {{#each @dummy.categories as |c|}}
      {{category-badge c categoryStyle="bar"}}
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title="category-badge - box">
    {{#each @dummy.categories as |c|}}
      {{category-badge c categoryStyle="box"}}
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title="category-badge - none">
    {{#each @dummy.categories as |c|}}
      {{category-badge c categoryStyle="none"}}
    {{/each}}
  </StyleguideExample>
  */
  {
    "id": "iZ0Lr5FM",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"category-badge - bullet\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"categories\"]]],null]],null],null,[[[1,\"    \"],[1,[28,[35,3],[[30,2]],[[\"categoryStyle\"],[\"bullet\"]]]],[1,\"\\n\"]],[2]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"category-badge - bar\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"categories\"]]],null]],null],null,[[[1,\"    \"],[1,[28,[35,3],[[30,3]],[[\"categoryStyle\"],[\"bar\"]]]],[1,\"\\n\"]],[3]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"category-badge - box\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"categories\"]]],null]],null],null,[[[1,\"    \"],[1,[28,[35,3],[[30,4]],[[\"categoryStyle\"],[\"box\"]]]],[1,\"\\n\"]],[4]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"category-badge - none\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"categories\"]]],null]],null],null,[[[1,\"    \"],[1,[28,[35,3],[[30,5]],[[\"categoryStyle\"],[\"none\"]]]],[1,\"\\n\"]],[5]],null]],[]]]]]],[\"@dummy\",\"c\",\"c\",\"c\",\"c\"],false,[\"styleguide-example\",\"each\",\"-track-array\",\"category-badge\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/categories.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/char-counter", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<CharCounter>">
    <CharCounter @max="50" @value={{@dummy.charCounterContent}}>
      <textarea
        {{on
          "input"
          (action (mut @dummy.charCounterContent) value="target.value")
        }}
        class="styleguide--char-counter"
      ></textarea>
    </CharCounter>
  </StyleguideExample>
  */
  {
    "id": "DHx+emgt",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<CharCounter>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@max\",\"@value\"],[\"50\",[30,1,[\"charCounterContent\"]]]],[[\"default\"],[[[[1,\"\\n    \"],[11,\"textarea\"],[24,0,\"styleguide--char-counter\"],[4,[38,2],[\"input\",[28,[37,3],[[30,0],[28,[37,4],[[30,1,[\"charCounterContent\"]]],null]],[[\"value\"],[\"target.value\"]]]],null],[12],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"char-counter\",\"on\",\"action\",\"mut\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/char-counter.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/empty-state", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<EmptyState>">
    <EmptyState @title={{@dummy.sentence}} @body={{@dummy.short_sentence}} />
  </StyleguideExample>
  */
  {
    "id": "ouHFuLJD",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<EmptyState>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@title\",\"@body\"],[[30,1,[\"sentence\"]],[30,1,[\"short_sentence\"]]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"empty-state\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/empty-state.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/footer-message", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<FooterMessage> - default">
    <FooterMessage
      @education={{@dummy.sentence}}
      @message={{@dummy.short_sentence}}
    />
  </StyleguideExample>
  
  <StyleguideExample @title="<FooterMessage> - latest">
    <FooterMessage
      @education={{@dummy.sentence}}
      @message={{@dummy.short_sentence}}
      @latest={{true}}
      @canCreateTopicOnCategory={{true}}
      @createTopic={{@dummyAction}}
    />
  </StyleguideExample>
  
  <StyleguideExample @title="<FooterMessage> - top">
    <FooterMessage
      @education={{@dummy.sentence}}
      @message={{@dummy.short_sentence}}
      @top={{true}}
      @changePeriod={{@dummyAction}}
    />
  </StyleguideExample>
  */
  {
    "id": "evSwB+Fp",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<FooterMessage> - default\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@education\",\"@message\"],[[30,1,[\"sentence\"]],[30,1,[\"short_sentence\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<FooterMessage> - latest\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@education\",\"@message\",\"@latest\",\"@canCreateTopicOnCategory\",\"@createTopic\"],[[30,1,[\"sentence\"]],[30,1,[\"short_sentence\"]],true,true,[30,2]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<FooterMessage> - top\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@education\",\"@message\",\"@top\",\"@changePeriod\"],[[30,1,[\"sentence\"]],[30,1,[\"short_sentence\"]],true,[30,2]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\",\"@dummyAction\"],false,[\"styleguide-example\",\"footer-message\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/footer-message.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/header-icons", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="header-icons">
    <MountWidget @widget="header-icons" />
  </StyleguideExample>
  
  <StyleguideExample @title="header-icons - user">
    <MountWidget @widget="header-icons" @args={{hash user=@dummy.user}} />
  </StyleguideExample>
  
  <StyleguideExample @title="header-icons - notifications">
    <MountWidget
      @widget="header-icons"
      @args={{hash user=@dummy.userWithUnread flagCount=5}}
    />
  </StyleguideExample>
  */
  {
    "id": "f4eBv5pD",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"header-icons\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@widget\"],[\"header-icons\"]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"header-icons - user\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"header-icons\",[28,[37,2],null,[[\"user\"],[[30,1,[\"user\"]]]]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"header-icons - notifications\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"header-icons\",[28,[37,2],null,[[\"user\",\"flagCount\"],[[30,1,[\"userWithUnread\"]],5]]]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"mount-widget\",\"hash\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/header-icons.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/menus", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "@ember/template", "float-kit/lib/constants", "discourse/plugins/styleguide/discourse/components/dummy-component", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _service, _template, _constants, _dummyComponent, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<Dmenu />">
    <Styleguide::Component @tag="dmenu component">
      <:sample>
        <DMenu
          @label={{this.label}}
          @offset={{this.offset}}
          @arrow={{this.arrow}}
          @maxWidth={{this.maxWidth}}
          @identifier={{this.identifier}}
          @interactive={{this.interactive}}
          @triggers={{this.triggers}}
          @untriggers={{this.untriggers}}
          @content={{this.content}}
        >
          {{this.content}}
        </DMenu>
      </:sample>
    </Styleguide::Component>
  
    <Styleguide::Component @tag="dmenu component">
      <:sample>
        <DMenu
          @offset={{this.offset}}
          @arrow={{this.arrow}}
          @maxWidth={{this.maxWidth}}
          @identifier={{this.identifier}}
          @interactive={{this.interactive}}
          @triggers={{this.triggers}}
          @untriggers={{this.untriggers}}
          @content={{this.content}}
        >
          <:trigger>
            {{this.label}}
          </:trigger>
          <:content>
            {{this.content}}
          </:content>
        </DMenu>
      </:sample>
    </Styleguide::Component>
  
    <Styleguide::Component @tag="menu service">
      <:sample>
        <button
          type="button"
          class="btn btn-default"
          id="menu-instance"
        >{{this.label}}</button>
      </:sample>
      <:actions>
        <DButton @action={{this.registerMenu}}>Register</DButton>
      </:actions>
    </Styleguide::Component>
  
    <Styleguide::Component @tag="menu service">
      <:sample>
        <button
          type="button"
          class="btn btn-default"
          id="menu-instance-with-component"
        >{{this.label}}</button>
      </:sample>
      <:actions>
        <DButton @action={{this.registerMenuWithComponent}}>Register</DButton>
      </:actions>
    </Styleguide::Component>
  
    <Styleguide::Controls>
      <Styleguide::Controls::Row @name="Example label">
        <Input @value={{this.label}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@content]">
        <Input @value={{this.content}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@identifier]">
        <Input @value={{this.identifier}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@offset]">
        <Input @value={{this.offset}} @type="number" />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@triggers]">
        <Input @value={{this.triggers}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@untriggers]">
        <Input @value={{this.untriggers}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@maxWidth]">
        <Input @value={{this.maxWidth}} @type="number" />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@interactive]">
        <DToggleSwitch
          @state={{this.interactive}}
          {{on "click" this.toggleInteractive}}
        />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@arrow]">
        <DToggleSwitch @state={{this.arrow}} {{on "click" this.toggleArrow}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@inline]">
        <DToggleSwitch @state={{this.inline}} {{on "click" this.toggleInline}} />
      </Styleguide::Controls::Row>
    </Styleguide::Controls>
  </StyleguideExample>
  */
  {
    "id": "qSfm0p6H",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<Dmenu />\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"dmenu component\"]],[[\"sample\"],[[[[1,\"\\n      \"],[8,[39,2],null,[[\"@label\",\"@offset\",\"@arrow\",\"@maxWidth\",\"@identifier\",\"@interactive\",\"@triggers\",\"@untriggers\",\"@content\"],[[30,0,[\"label\"]],[30,0,[\"offset\"]],[30,0,[\"arrow\"]],[30,0,[\"maxWidth\"]],[30,0,[\"identifier\"]],[30,0,[\"interactive\"]],[30,0,[\"triggers\"]],[30,0,[\"untriggers\"]],[30,0,[\"content\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,0,[\"content\"]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"dmenu component\"]],[[\"sample\"],[[[[1,\"\\n      \"],[8,[39,2],null,[[\"@offset\",\"@arrow\",\"@maxWidth\",\"@identifier\",\"@interactive\",\"@triggers\",\"@untriggers\",\"@content\"],[[30,0,[\"offset\"]],[30,0,[\"arrow\"]],[30,0,[\"maxWidth\"]],[30,0,[\"identifier\"]],[30,0,[\"interactive\"]],[30,0,[\"triggers\"]],[30,0,[\"untriggers\"]],[30,0,[\"content\"]]]],[[\"trigger\",\"content\"],[[[[1,\"\\n          \"],[1,[30,0,[\"label\"]]],[1,\"\\n        \"]],[]],[[[1,\"\\n          \"],[1,[30,0,[\"content\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"menu service\"]],[[\"sample\",\"actions\"],[[[[1,\"\\n      \"],[10,\"button\"],[14,0,\"btn btn-default\"],[14,1,\"menu-instance\"],[14,4,\"button\"],[12],[1,[30,0,[\"label\"]]],[13],[1,\"\\n    \"]],[]],[[[1,\"\\n      \"],[8,[39,3],null,[[\"@action\"],[[30,0,[\"registerMenu\"]]]],[[\"default\"],[[[[1,\"Register\"]],[]]]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"menu service\"]],[[\"sample\",\"actions\"],[[[[1,\"\\n      \"],[10,\"button\"],[14,0,\"btn btn-default\"],[14,1,\"menu-instance-with-component\"],[14,4,\"button\"],[12],[1,[30,0,[\"label\"]]],[13],[1,\"\\n    \"]],[]],[[[1,\"\\n      \"],[8,[39,3],null,[[\"@action\"],[[30,0,[\"registerMenuWithComponent\"]]]],[[\"default\"],[[[[1,\"Register\"]],[]]]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,4],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"Example label\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\"],[[30,0,[\"label\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@content]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\"],[[30,0,[\"content\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@identifier]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\"],[[30,0,[\"identifier\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@offset]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\",\"@type\"],[[30,0,[\"offset\"]],\"number\"]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@triggers]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\"],[[30,0,[\"triggers\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@untriggers]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\"],[[30,0,[\"untriggers\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@maxWidth]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\",\"@type\"],[[30,0,[\"maxWidth\"]],\"number\"]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@interactive]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,7],[[4,[38,8],[\"click\",[30,0,[\"toggleInteractive\"]]],null]],[[\"@state\"],[[30,0,[\"interactive\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@arrow]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,7],[[4,[38,8],[\"click\",[30,0,[\"toggleArrow\"]]],null]],[[\"@state\"],[[30,0,[\"arrow\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@inline]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,7],[[4,[38,8],[\"click\",[30,0,[\"toggleInline\"]]],null]],[[\"@state\"],[[30,0,[\"inline\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]]],[],false,[\"styleguide-example\",\"styleguide/component\",\"d-menu\",\"d-button\",\"styleguide/controls\",\"styleguide/controls/row\",\"input\",\"d-toggle-switch\",\"on\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/menus.hbs",
    "isStrictMode": false
  });
  let Menus = _exports.default = (_class = class Menus extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "menu", _descriptor, this);
      _initializerDefineProperty(this, "label", _descriptor2, this);
      _initializerDefineProperty(this, "triggers", _descriptor3, this);
      _initializerDefineProperty(this, "untriggers", _descriptor4, this);
      _initializerDefineProperty(this, "arrow", _descriptor5, this);
      _initializerDefineProperty(this, "inline", _descriptor6, this);
      _initializerDefineProperty(this, "interactive", _descriptor7, this);
      _initializerDefineProperty(this, "maxWidth", _descriptor8, this);
      _initializerDefineProperty(this, "identifier", _descriptor9, this);
      _initializerDefineProperty(this, "offset", _descriptor10, this);
      _initializerDefineProperty(this, "_content", _descriptor11, this);
    }
    get content() {
      return this._content;
    }
    set content(value) {
      this._content = (0, _template.htmlSafe)(value);
    }
    get templateCode() {
      return `<DMenu
  @label={{html-safe "${this.label}"}}
  @content={{html-safe "${this.content}"}}
/>`;
    }
    get templateCodeContent() {
      return `<DMenu @maxWidth={{100}}>
  <:trigger>
     ${this.label}
  </:trigger>
  <:content>
    ${this.content}
  </:content>
</DMenu>`;
    }
    get serviceCode() {
      return `this.menu.register(
  document.queryselector(".my-element"),
  { content: htmlSafe(${this.content}) }
);`;
    }
    get serviceCodeComponent() {
      return `this.menu.register(
  document.queryselector(".my-element"),
  { component: MyComponent, data: { foo: 1 } }
);`;
    }
    toggleArrow() {
      this.arrow = !this.arrow;
    }
    toggleInteractive() {
      this.interactive = !this.interactive;
    }
    toggleInline() {
      this.inline = !this.inline;
    }
    registerMenu() {
      this.menuInstance?.destroy();
      this.menuInstance = this.menu.register(document.querySelector("#menu-instance"), this.options);
    }
    registerMenuWithComponent() {
      this.menuInstanceWithComponent?.destroy();
      this.menuInstanceWithComponent = this.menu.register(document.querySelector("#menu-instance-with-component"), {
        ...this.options,
        component: _dummyComponent.default,
        data: {
          foo: 1
        }
      });
    }
    get options() {
      return {
        offset: this.offset,
        arrow: this.arrow,
        maxWidth: this.maxWidth,
        identifier: this.identifier,
        interactive: this.interactive,
        triggers: this.triggers ?? ["click"],
        untriggers: this.untriggers ?? ["click"],
        content: this.content
      };
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "menu", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "label", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "What is this?";
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "triggers", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.MENU.options.triggers;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "untriggers", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.MENU.options.untriggers;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "arrow", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.MENU.options.arrow;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "inline", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.MENU.options.inline;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "interactive", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.MENU.options.interactive;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "maxWidth", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.MENU.options.maxWidth;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "identifier", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "offset", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.MENU.options.offset;
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "_content", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _template.htmlSafe)("<ul><li>Hello</li><li>World!</li></ul>");
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleArrow", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleArrow"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleInteractive", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleInteractive"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleInline", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleInline"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerMenu", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "registerMenu"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerMenuWithComponent", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "registerMenuWithComponent"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, Menus);
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/navigation-bar", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<NavigationBar>">
    <NavigationBar @navItems={{@dummy.navItems}} @filterMode="latest" />
  </StyleguideExample>
  
  <StyleguideExample @title=".user-main .nav-pills">
    <MobileNav @desktopClass="nav nav-pills user-nav" class="main-nav">
      {{#each @dummy.navItems as |ni|}}
        <li>
          <a href={{ni.href}} class={{if ni.styleGuideActive "active"}}>
            {{ni.displayName}}
          </a>
        </li>
      {{/each}}
    </MobileNav>
  </StyleguideExample>
  
  <StyleguideExample @title="group page <NavigationBar>">
    <MobileNav @desktopClass="nav nav-pills" class="group-nav">
      <li class="group-dropdown">
        <GroupDropdown @groups={{@dummy.groupNames}} @value="staff" />
      </li>
  
      {{#each @dummy.navItems as |ni|}}
        <li>
          <a href={{ni.href}} class={{if ni.styleGuideActive "active"}}>
            {{ni.displayName}}
          </a>
        </li>
      {{/each}}
    </MobileNav>
  </StyleguideExample>
  */
  {
    "id": "fvkvaXK6",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<NavigationBar>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@navItems\",\"@filterMode\"],[[30,1,[\"navItems\"]],\"latest\"]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".user-main .nav-pills\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],[[24,0,\"main-nav\"]],[[\"@desktopClass\"],[\"nav nav-pills user-nav\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,1,[\"navItems\"]]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[12],[1,\"\\n        \"],[10,3],[15,6,[30,2,[\"href\"]]],[15,0,[52,[30,2,[\"styleGuideActive\"]],\"active\"]],[12],[1,\"\\n          \"],[1,[30,2,[\"displayName\"]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[2]],null],[1,\"  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"group page <NavigationBar>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],[[24,0,\"group-nav\"]],[[\"@desktopClass\"],[\"nav nav-pills\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"li\"],[14,0,\"group-dropdown\"],[12],[1,\"\\n      \"],[8,[39,6],null,[[\"@groups\",\"@value\"],[[30,1,[\"groupNames\"]],\"staff\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,1,[\"navItems\"]]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[12],[1,\"\\n        \"],[10,3],[15,6,[30,3,[\"href\"]]],[15,0,[52,[30,3,[\"styleGuideActive\"]],\"active\"]],[12],[1,\"\\n          \"],[1,[30,3,[\"displayName\"]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[3]],null],[1,\"  \"]],[]]]]],[1,\"\\n\"]],[]]]]]],[\"@dummy\",\"ni\",\"ni\"],false,[\"styleguide-example\",\"navigation-bar\",\"mobile-nav\",\"each\",\"-track-array\",\"if\",\"group-dropdown\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/navigation-bar.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/navigation-stacked", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title=".nav-stacked" class="half-size">
    <MobileNav
      @desktopClass="preferences-list action-list nav-stacked"
      class="preferences-nav"
    >
      {{#each @dummy.navItems as |ni|}}
        <li>
          <a href={{ni.href}} class={{if ni.styleGuideActive "active"}}>
            {{ni.displayName}}
          </a>
        </li>
      {{/each}}
    </MobileNav>
  </StyleguideExample>
  
  <StyleguideExample @title=".user-navigation .nav-stacked" class="half-size">
    <section class="user-navigation">
      <MobileNav
        @desktopClass="preferences-list action-list nav-stacked"
        class="preferences-nav"
      >
        {{#each @dummy.navItems as |ni|}}
          <li>
            <a href={{ni.href}} class={{if ni.styleGuideActive "active"}}>
              {{ni.displayName}}
            </a>
          </li>
        {{/each}}
      </MobileNav>
    </section>
  </StyleguideExample>
  */
  {
    "id": "+79BX0Og",
    "block": "[[[8,[39,0],[[24,0,\"half-size\"]],[[\"@title\"],[\".nav-stacked\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],[[24,0,\"preferences-nav\"]],[[\"@desktopClass\"],[\"preferences-list action-list nav-stacked\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1,[\"navItems\"]]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[12],[1,\"\\n        \"],[10,3],[15,6,[30,2,[\"href\"]]],[15,0,[52,[30,2,[\"styleGuideActive\"]],\"active\"]],[12],[1,\"\\n          \"],[1,[30,2,[\"displayName\"]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[2]],null],[1,\"  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],[[24,0,\"half-size\"]],[[\"@title\"],[\".user-navigation .nav-stacked\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"user-navigation\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"preferences-nav\"]],[[\"@desktopClass\"],[\"preferences-list action-list nav-stacked\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1,[\"navItems\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[12],[1,\"\\n          \"],[10,3],[15,6,[30,3,[\"href\"]]],[15,0,[52,[30,3,[\"styleGuideActive\"]],\"active\"]],[12],[1,\"\\n            \"],[1,[30,3,[\"displayName\"]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[3]],null],[1,\"    \"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@dummy\",\"ni\",\"ni\"],false,[\"styleguide-example\",\"mobile-nav\",\"each\",\"-track-array\",\"if\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/navigation-stacked.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/post-menu", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="post-menu">
    <MountWidget @widget="post-menu" @args={{@dummy.transformedPost}} />
  </StyleguideExample>
  */
  {
    "id": "k4JXTR6l",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"post-menu\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"post-menu\",[30,1,[\"transformedPost\"]]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"mount-widget\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/post-menu.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/signup-cta", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<SignupCta>">
    <SignupCta />
  </StyleguideExample>
  */
  {
    "id": "4+rlx7mm",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<SignupCta>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,null,null],[1,\"\\n\"]],[]]]]]],[],false,[\"styleguide-example\",\"signup-cta\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/signup-cta.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/toasts", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "float-kit/lib/constants", "discourse/plugins/styleguide/discourse/components/dummy-component", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _service, _constants, _dummyComponent, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! template-lint-disable no-potential-path-strings }}
  <StyleguideExample @title="Toasts service">
    <Styleguide::Component @tag="default">
      <:actions>
        <DButton
          @translatedLabel="Show default toast"
          @action={{fn this.showToast "default"}}
        />
      </:actions>
    </Styleguide::Component>
  
    <Styleguide::Component @tag="success">
      <:actions>
        <DButton
          @translatedLabel="Show success toast"
          @action={{fn this.showToast "success"}}
        />
      </:actions>
    </Styleguide::Component>
  
    <Styleguide::Component @tag="warning">
      <:actions>
        <DButton
          @translatedLabel="Show warning toast"
          @action={{fn this.showToast "warning"}}
        />
      </:actions>
    </Styleguide::Component>
  
    <Styleguide::Component @tag="info">
      <:actions>
        <DButton
          @translatedLabel="Show info toast"
          @action={{fn this.showToast "info"}}
        />
      </:actions>
    </Styleguide::Component>
  
    <Styleguide::Component @tag="error">
      <:actions>
        <DButton
          @translatedLabel="Show error toast"
          @action={{fn this.showToast "error"}}
        />
      </:actions>
    </Styleguide::Component>
  
    <Styleguide::Component @tag="custom component">
      <:actions>
        <DButton
          @translatedLabel="Show toast"
          @action={{this.showCustomComponentToast}}
        />
      </:actions>
    </Styleguide::Component>
  
    <Styleguide::Controls>
      <Styleguide::Controls::Row @name="[@options.autoClose]">
        <DToggleSwitch
          @state={{this.autoClose}}
          {{on "click" this.toggleAutoClose}}
        />
      </Styleguide::Controls::Row>
      {{#if this.autoClose}}
        <Styleguide::Controls::Row @name="[@options.duration] ms">
          <Input @value={{this.duration}} @type="number" />
        </Styleguide::Controls::Row>
      {{/if}}
      <Styleguide::Controls::Row @name="[@options.class]">
        <Input @value={{this.class}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row>
        <b>Model props for default:</b>
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@options.data.title]">
        <Input @value={{this.title}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@options.data.message]">
        <Input @value={{this.message}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@options.data.icon]">
        <IconPicker
          @name="icon"
          @value={{this.icon}}
          @options={{hash maximum=1}}
          @onChange={{action (mut this.icon)}}
        />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="With an action">
        <DToggleSwitch @state={{this.action}} {{on "click" this.toggleAction}} />
      </Styleguide::Controls::Row>
    </Styleguide::Controls>
  </StyleguideExample>
  */
  {
    "id": "/f3sF0+U",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"Toasts service\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"default\"]],[[\"actions\"],[[[[1,\"\\n      \"],[8,[39,2],null,[[\"@translatedLabel\",\"@action\"],[\"Show default toast\",[28,[37,3],[[30,0,[\"showToast\"]],\"default\"],null]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"success\"]],[[\"actions\"],[[[[1,\"\\n      \"],[8,[39,2],null,[[\"@translatedLabel\",\"@action\"],[\"Show success toast\",[28,[37,3],[[30,0,[\"showToast\"]],\"success\"],null]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"warning\"]],[[\"actions\"],[[[[1,\"\\n      \"],[8,[39,2],null,[[\"@translatedLabel\",\"@action\"],[\"Show warning toast\",[28,[37,3],[[30,0,[\"showToast\"]],\"warning\"],null]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"info\"]],[[\"actions\"],[[[[1,\"\\n      \"],[8,[39,2],null,[[\"@translatedLabel\",\"@action\"],[\"Show info toast\",[28,[37,3],[[30,0,[\"showToast\"]],\"info\"],null]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"error\"]],[[\"actions\"],[[[[1,\"\\n      \"],[8,[39,2],null,[[\"@translatedLabel\",\"@action\"],[\"Show error toast\",[28,[37,3],[[30,0,[\"showToast\"]],\"error\"],null]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"custom component\"]],[[\"actions\"],[[[[1,\"\\n      \"],[8,[39,2],null,[[\"@translatedLabel\",\"@action\"],[\"Show toast\",[30,0,[\"showCustomComponentToast\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,4],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@options.autoClose]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],[[4,[38,7],[\"click\",[30,0,[\"toggleAutoClose\"]]],null]],[[\"@state\"],[[30,0,[\"autoClose\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n\"],[41,[30,0,[\"autoClose\"]],[[[1,\"      \"],[8,[39,5],null,[[\"@name\"],[\"[@options.duration] ms\"]],[[\"default\"],[[[[1,\"\\n        \"],[8,[39,9],null,[[\"@value\",\"@type\"],[[30,0,[\"duration\"]],\"number\"]],null],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]],null],[1,\"    \"],[8,[39,5],null,[[\"@name\"],[\"[@options.class]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,9],null,[[\"@value\"],[[30,0,[\"class\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,null,[[\"default\"],[[[[1,\"\\n      \"],[10,\"b\"],[12],[1,\"Model props for default:\"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@options.data.title]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,9],null,[[\"@value\"],[[30,0,[\"title\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@options.data.message]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,9],null,[[\"@value\"],[[30,0,[\"message\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@options.data.icon]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,10],null,[[\"@name\",\"@value\",\"@options\",\"@onChange\"],[\"icon\",[30,0,[\"icon\"]],[28,[37,11],null,[[\"maximum\"],[1]]],[28,[37,12],[[30,0],[28,[37,13],[[30,0,[\"icon\"]]],null]],null]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"With an action\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],[[4,[38,7],[\"click\",[30,0,[\"toggleAction\"]]],null]],[[\"@state\"],[[30,0,[\"action\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]]],[],false,[\"styleguide-example\",\"styleguide/component\",\"d-button\",\"fn\",\"styleguide/controls\",\"styleguide/controls/row\",\"d-toggle-switch\",\"on\",\"if\",\"input\",\"icon-picker\",\"hash\",\"action\",\"mut\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/toasts.hbs",
    "isStrictMode": false
  });
  let Toasts = _exports.default = (_class = class Toasts extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "toasts", _descriptor, this);
      _initializerDefineProperty(this, "title", _descriptor2, this);
      _initializerDefineProperty(this, "message", _descriptor3, this);
      _initializerDefineProperty(this, "duration", _descriptor4, this);
      _initializerDefineProperty(this, "autoClose", _descriptor5, this);
      _initializerDefineProperty(this, "class", _descriptor6, this);
      _initializerDefineProperty(this, "action", _descriptor7, this);
      _initializerDefineProperty(this, "icon", _descriptor8, this);
    }
    showCustomComponentToast() {
      this.toasts.show({
        duration: this.duration,
        autoClose: this.autoClose,
        class: this.class,
        component: _dummyComponent.default,
        data: {
          foo: 1
        }
      });
    }
    showToast(theme) {
      const actions = [];
      if (this.action) {
        actions.push({
          label: "Ok",
          class: "btn-primary",
          action: args => {
            // eslint-disable-next-line no-alert
            alert("Closing toast:" + args.data.title);
            args.close();
          }
        });
      }
      this.toasts[theme]({
        duration: this.duration,
        autoClose: this.autoClose,
        class: this.class,
        data: {
          title: this.title,
          message: this.message,
          icon: this.icon,
          actions
        }
      });
    }
    toggleAction() {
      this.action = !this.action;
    }
    toggleAutoClose() {
      this.autoClose = !this.autoClose;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "toasts", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "title", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "Title";
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "message", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "Message";
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "duration", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.TOAST.options.duration;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "autoClose", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.TOAST.options.autoClose;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "class", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "action", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "icon", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "showCustomComponentToast", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showCustomComponentToast"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showToast", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showToast"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleAction", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleAction"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleAutoClose", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleAutoClose"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, Toasts);
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/tooltips", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "@ember/template", "float-kit/lib/constants", "discourse/plugins/styleguide/discourse/components/dummy-component", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _service, _template, _constants, _dummyComponent, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<DTooltip />">
    <Styleguide::Component @tag="tooltip component">
      <:sample>
        <DTooltip
          @label={{this.label}}
          @offset={{this.offset}}
          @arrow={{this.arrow}}
          @maxWidth={{this.maxWidth}}
          @identifier={{this.identifier}}
          @interactive={{this.interactive}}
          @triggers={{this.triggers}}
          @untriggers={{this.untriggers}}
          @content={{this.content}}
          @inline={{this.inline}}
        />
      </:sample>
    </Styleguide::Component>
  
    <Styleguide::Component @tag="tooltip component">
      <:sample>
        <DTooltip
          @offset={{this.offset}}
          @arrow={{this.arrow}}
          @maxWidth={{this.maxWidth}}
          @identifier={{this.identifier}}
          @interactive={{this.interactive}}
          @triggers={{this.triggers}}
          @untriggers={{this.untriggers}}
          @content={{this.content}}
          @inline={{this.inline}}
        >
          <:trigger>
            {{this.label}}
          </:trigger>
          <:content>
            {{this.content}}
          </:content>
        </DTooltip>
      </:sample>
    </Styleguide::Component>
  
    <Styleguide::Component @tag="tooltip service">
      <:sample>
        <span id="tooltip-instance">{{this.label}}</span>
      </:sample>
      <:actions>
        <DButton @action={{this.registerTooltip}}>Register</DButton>
      </:actions>
    </Styleguide::Component>
  
    <Styleguide::Component @tag="tooltip service">
      <:sample>
        <span id="tooltip-instance-with-component">{{this.label}}</span>
      </:sample>
      <:actions>
        <DButton @action={{this.registerTooltipWithComponent}}>Register</DButton>
      </:actions>
    </Styleguide::Component>
  
    <Styleguide::Controls>
      <Styleguide::Controls::Row @name="Example label">
        <Input @value={{this.label}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@content]">
        <Input @value={{this.content}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@identifier]">
        <Input @value={{this.identifier}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@offset]">
        <Input @value={{this.offset}} @type="number" />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@triggers]">
        <Input @value={{this.triggers}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@untriggers]">
        <Input @value={{this.untriggers}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@maxWidth]">
        <Input @value={{this.maxWidth}} @type="number" />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@interactive]">
        <DToggleSwitch
          @state={{this.interactive}}
          {{on "click" this.toggleInteractive}}
        />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@arrow]">
        <DToggleSwitch @state={{this.arrow}} {{on "click" this.toggleArrow}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="[@inline]">
        <DToggleSwitch @state={{this.inline}} {{on "click" this.toggleInline}} />
      </Styleguide::Controls::Row>
    </Styleguide::Controls>
  </StyleguideExample>
  */
  {
    "id": "R1wsB8n2",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<DTooltip />\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"tooltip component\"]],[[\"sample\"],[[[[1,\"\\n      \"],[8,[39,2],null,[[\"@label\",\"@offset\",\"@arrow\",\"@maxWidth\",\"@identifier\",\"@interactive\",\"@triggers\",\"@untriggers\",\"@content\",\"@inline\"],[[30,0,[\"label\"]],[30,0,[\"offset\"]],[30,0,[\"arrow\"]],[30,0,[\"maxWidth\"]],[30,0,[\"identifier\"]],[30,0,[\"interactive\"]],[30,0,[\"triggers\"]],[30,0,[\"untriggers\"]],[30,0,[\"content\"]],[30,0,[\"inline\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"tooltip component\"]],[[\"sample\"],[[[[1,\"\\n      \"],[8,[39,2],null,[[\"@offset\",\"@arrow\",\"@maxWidth\",\"@identifier\",\"@interactive\",\"@triggers\",\"@untriggers\",\"@content\",\"@inline\"],[[30,0,[\"offset\"]],[30,0,[\"arrow\"]],[30,0,[\"maxWidth\"]],[30,0,[\"identifier\"]],[30,0,[\"interactive\"]],[30,0,[\"triggers\"]],[30,0,[\"untriggers\"]],[30,0,[\"content\"]],[30,0,[\"inline\"]]]],[[\"trigger\",\"content\"],[[[[1,\"\\n          \"],[1,[30,0,[\"label\"]]],[1,\"\\n        \"]],[]],[[[1,\"\\n          \"],[1,[30,0,[\"content\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"tooltip service\"]],[[\"sample\",\"actions\"],[[[[1,\"\\n      \"],[10,1],[14,1,\"tooltip-instance\"],[12],[1,[30,0,[\"label\"]]],[13],[1,\"\\n    \"]],[]],[[[1,\"\\n      \"],[8,[39,3],null,[[\"@action\"],[[30,0,[\"registerTooltip\"]]]],[[\"default\"],[[[[1,\"Register\"]],[]]]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@tag\"],[\"tooltip service\"]],[[\"sample\",\"actions\"],[[[[1,\"\\n      \"],[10,1],[14,1,\"tooltip-instance-with-component\"],[12],[1,[30,0,[\"label\"]]],[13],[1,\"\\n    \"]],[]],[[[1,\"\\n      \"],[8,[39,3],null,[[\"@action\"],[[30,0,[\"registerTooltipWithComponent\"]]]],[[\"default\"],[[[[1,\"Register\"]],[]]]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,4],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"Example label\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\"],[[30,0,[\"label\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@content]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\"],[[30,0,[\"content\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@identifier]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\"],[[30,0,[\"identifier\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@offset]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\",\"@type\"],[[30,0,[\"offset\"]],\"number\"]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@triggers]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\"],[[30,0,[\"triggers\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@untriggers]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\"],[[30,0,[\"untriggers\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@maxWidth]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@value\",\"@type\"],[[30,0,[\"maxWidth\"]],\"number\"]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@interactive]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,7],[[4,[38,8],[\"click\",[30,0,[\"toggleInteractive\"]]],null]],[[\"@state\"],[[30,0,[\"interactive\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@arrow]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,7],[[4,[38,8],[\"click\",[30,0,[\"toggleArrow\"]]],null]],[[\"@state\"],[[30,0,[\"arrow\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"[@inline]\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,7],[[4,[38,8],[\"click\",[30,0,[\"toggleInline\"]]],null]],[[\"@state\"],[[30,0,[\"inline\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]]],[],false,[\"styleguide-example\",\"styleguide/component\",\"d-tooltip\",\"d-button\",\"styleguide/controls\",\"styleguide/controls/row\",\"input\",\"d-toggle-switch\",\"on\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/tooltips.hbs",
    "isStrictMode": false
  });
  let Tooltips = _exports.default = (_class = class Tooltips extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "tooltip", _descriptor, this);
      _initializerDefineProperty(this, "label", _descriptor2, this);
      _initializerDefineProperty(this, "triggers", _descriptor3, this);
      _initializerDefineProperty(this, "untriggers", _descriptor4, this);
      _initializerDefineProperty(this, "arrow", _descriptor5, this);
      _initializerDefineProperty(this, "inline", _descriptor6, this);
      _initializerDefineProperty(this, "interactive", _descriptor7, this);
      _initializerDefineProperty(this, "maxWidth", _descriptor8, this);
      _initializerDefineProperty(this, "identifier", _descriptor9, this);
      _initializerDefineProperty(this, "offset", _descriptor10, this);
      _initializerDefineProperty(this, "_content", _descriptor11, this);
    }
    get content() {
      return this._content;
    }
    set content(value) {
      this._content = (0, _template.htmlSafe)(value);
    }
    get templateCode() {
      return `<DTooltip
  @label="${this.label}"
  @content="${this.content}"
/>`;
    }
    get templateCodeContent() {
      return `<DTooltip @maxWidth={{100}}>
  <:trigger>
     ${this.label}
  </:trigger>
  <:content>
    ${this.content}
  </:content>
</DTooltip>`;
    }
    get serviceCode() {
      return `this.tooltip.register(
  document.queryselector(".my-element"),
  { content: "${this.content}" }
);`;
    }
    get serviceCodeComponent() {
      return `this.tooltip.register(
  document.queryselector(".my-element"),
  { component: MyComponent, data: { foo: 1 } }
);`;
    }
    toggleArrow() {
      this.arrow = !this.arrow;
    }
    toggleInteractive() {
      this.interactive = !this.interactive;
    }
    toggleInline() {
      this.inline = !this.inline;
    }
    registerTooltip() {
      this.tooltipInstance?.destroy();
      this.tooltipInstance = this.tooltip.register(document.querySelector("#tooltip-instance"), this.options);
    }
    registerTooltipWithComponent() {
      this.tooltipInstanceWithComponent?.destroy();
      this.tooltipInstanceWithComponent = this.tooltip.register(document.querySelector("#tooltip-instance-with-component"), {
        ...this.options,
        component: _dummyComponent.default,
        data: {
          foo: 1
        }
      });
    }
    get options() {
      return {
        offset: this.offset,
        arrow: this.arrow,
        maxWidth: this.maxWidth,
        identifier: this.identifier,
        interactive: this.interactive,
        triggers: this.triggers,
        untriggers: this.untriggers,
        content: this.content
      };
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "tooltip", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "label", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "What is this?";
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "triggers", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.TOOLTIP.options.triggers;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "untriggers", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.TOOLTIP.options.untriggers;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "arrow", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.TOOLTIP.options.arrow;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "inline", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.TOOLTIP.options.inline;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "interactive", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.TOOLTIP.options.interactive;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "maxWidth", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.TOOLTIP.options.maxWidth;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "identifier", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "offset", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _constants.TOOLTIP.options.offset;
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "_content", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "Hello World!";
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleArrow", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleArrow"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleInteractive", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleInteractive"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleInline", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleInline"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerTooltip", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "registerTooltip"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerTooltipWithComponent", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "registerTooltipWithComponent"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, Tooltips);
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/topic-list-item", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<TopicListItem>">
    <table class="topic-list">
      <tbody>
        <TopicListItem @topic={{@dummy.topic}} @showPosters={{true}} />
      </tbody>
    </table>
  </StyleguideExample>
  
  <StyleguideExample @title="<TopicListItem> - hide category">
    <table class="topic-list">
      <tbody>
        <TopicListItem
          @topic={{@dummy.topic}}
          @hideCategory={{true}}
          @showPosters={{true}}
        />
      </tbody>
    </table>
  </StyleguideExample>
  
  <StyleguideExample @title="<TopicListItem> - show likes">
    <table class="topic-list">
      <tbody>
        <TopicListItem
          @topic={{@dummy.topic}}
          @showLikes={{true}}
          @showPosters={{true}}
        />
      </tbody>
    </table>
  </StyleguideExample>
  
  <StyleguideExample @title="<TopicListItem> - latest" class="half-size">
    <LatestTopicListItem @topic={{@dummy.topic}} />
  </StyleguideExample>
  */
  {
    "id": "nTsXIIDk",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<TopicListItem>\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"table\"],[14,0,\"topic-list\"],[12],[1,\"\\n    \"],[10,\"tbody\"],[12],[1,\"\\n      \"],[8,[39,1],null,[[\"@topic\",\"@showPosters\"],[[30,1,[\"topic\"]],true]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<TopicListItem> - hide category\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"table\"],[14,0,\"topic-list\"],[12],[1,\"\\n    \"],[10,\"tbody\"],[12],[1,\"\\n      \"],[8,[39,1],null,[[\"@topic\",\"@hideCategory\",\"@showPosters\"],[[30,1,[\"topic\"]],true,true]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<TopicListItem> - show likes\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"table\"],[14,0,\"topic-list\"],[12],[1,\"\\n    \"],[10,\"tbody\"],[12],[1,\"\\n      \"],[8,[39,1],null,[[\"@topic\",\"@showLikes\",\"@showPosters\"],[[30,1,[\"topic\"]],true,true]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],[[24,0,\"half-size\"]],[[\"@title\"],[\"<TopicListItem> - latest\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,[[\"@topic\"],[[30,1,[\"topic\"]]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"topic-list-item\",\"latest-topic-list-item\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/topic-list-item.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/topic-notifications", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<TopicNotificationsButton>">
    <TopicNotificationsButton @topic={{@dummy.topic}} />
  </StyleguideExample>
  */
  {
    "id": "/U2UL/vx",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<TopicNotificationsButton>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,1,[\"topic\"]]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"topic-notifications-button\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/topic-notifications.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/molecules/topic-timer-info", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<TopicTimerInfo>">
    <TopicTimerInfo @statusType="reminder" @executeAt={{@dummy.soon}} />
  </StyleguideExample>
  */
  {
    "id": "KPoVRv9Y",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<TopicTimerInfo>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@statusType\",\"@executeAt\"],[\"reminder\",[30,1,[\"soon\"]]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"topic-timer-info\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/molecules/topic-timer-info.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/organisms/00-post", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="post">
    <MountWidget
      @widget="post"
      @model={{@dummy.postModel}}
      @args={{@dummy.transformedPost}}
    />
  </StyleguideExample>
  */
  {
    "id": "A55JRaqg",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"post\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@widget\",\"@model\",\"@args\"],[\"post\",[30,1,[\"postModel\"]],[30,1,[\"transformedPost\"]]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"mount-widget\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/organisms/00-post.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/organisms/01-topic-map", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="topic-map">
    <MountWidget @widget="topic-map" @args={{@dummy.transformedPost}} />
  </StyleguideExample>
  */
  {
    "id": "I8Qkx/Fv",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"topic-map\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"topic-map\",[30,1,[\"transformedPost\"]]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"mount-widget\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/organisms/01-topic-map.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/organisms/03-topic-footer-buttons", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<TopicFooterButtons> - logged in">
    <TopicFooterButtons @topic={{@dummy.topic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="<TopicFooterButtons> - anonymous">
    <div id="topic-footer-buttons">
      <DButton
        @icon="reply"
        @label="topic.reply.title"
        class="btn-primary pull-right"
      />
    </div>
  </StyleguideExample>
  */
  {
    "id": "TorbvwZm",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<TopicFooterButtons> - logged in\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,1,[\"topic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<TopicFooterButtons> - anonymous\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,1,\"topic-footer-buttons\"],[12],[1,\"\\n    \"],[8,[39,2],[[24,0,\"btn-primary pull-right\"]],[[\"@icon\",\"@label\"],[\"reply\",\"topic.reply.title\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"topic-footer-buttons\",\"d-button\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/organisms/03-topic-footer-buttons.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/organisms/04-topic-list", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<TopicList>">
    <TopicList @topics={{@dummy.topics}} @showPosters={{true}} />
  </StyleguideExample>
  
  <StyleguideExample @title="<TopicList> - hide posters>">
    <TopicList @topics={{@dummy.topics}} @showPosters={{false}} />
  </StyleguideExample>
  */
  {
    "id": "5Sir5hmO",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<TopicList>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topics\",\"@showPosters\"],[[30,1,[\"topics\"]],true]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"<TopicList> - hide posters>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topics\",\"@showPosters\"],[[30,1,[\"topics\"]],false]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"topic-list\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/organisms/04-topic-list.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/organisms/basic-topic-list", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<BasicTopicList>" class="half-size">
    <BasicTopicList @topics={{@dummy.topics}} />
  </StyleguideExample>
  */
  {
    "id": "RPqhg6Nq",
    "block": "[[[8,[39,0],[[24,0,\"half-size\"]],[[\"@title\"],[\"<BasicTopicList>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topics\"],[[30,1,[\"topics\"]]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"basic-topic-list\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/organisms/basic-topic-list.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/organisms/categories-list", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<CategoriesOnly>">
    <CategoriesOnly @categories={{@dummy.categories}} />
  </StyleguideExample>
  */
  {
    "id": "tEg+Z+T9",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<CategoriesOnly>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@categories\"],[[30,1,[\"categories\"]]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"categories-only\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/organisms/categories-list.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/organisms/modal", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "discourse-i18n", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _discourseI18n, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! template-lint-disable no-potential-path-strings}}
  
  <StyleguideExample @title="<DModal>">
    <Styleguide::Component>
      <DModal
        @closeModal={{fn (mut this.inline) true}}
        @hideHeader={{this.hideHeader}}
        @inline={{this.inline}}
        @title={{this.title}}
        @subtitle={{this.subtitle}}
        @flash={{this.flash}}
        @flashType={{this.flashType}}
        @errors={{this.errors}}
        @dismissable={{this.dismissable}}
      >
        <:body>
          {{this.body}}
        </:body>
  
        <:footer>
          {{i18n "styleguide.sections.modal.footer"}}
        </:footer>
      </DModal>
    </Styleguide::Component>
  
    <Styleguide::Controls>
      <Styleguide::Controls::Row @name="@hideHeader">
        <DToggleSwitch
          @state={{this.hideHeader}}
          {{on "click" this.toggleHeader}}
        />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="@inline">
        <DToggleSwitch @state={{this.inline}} {{on "click" this.toggleInline}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="@dismissable">
        <DToggleSwitch
          @state={{this.dismissable}}
          {{on "click" this.toggleDismissable}}
        />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="@tagName">
        <ComboBox
          @value={{this.modalTagName}}
          @content={{this.modalTagNames}}
          @onChange={{fn (mut this.modalTagName)}}
          @valueProperty={{null}}
          @nameProperty={{null}}
        />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="@title">
        <Input @value={{this.title}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="@subtitle">
        <Input @value={{this.subtitle}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="<:body>">
        <Textarea @value={{this.body}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="@flash">
        <Input @value={{this.flash}} />
      </Styleguide::Controls::Row>
      <Styleguide::Controls::Row @name="@flashType">
        <ComboBox
          @value={{this.flashType}}
          @content={{this.flashTypes}}
          @onChange={{fn (mut this.flashType)}}
          @valueProperty={{null}}
          @nameProperty={{null}}
        />
      </Styleguide::Controls::Row>
    </Styleguide::Controls>
  </StyleguideExample>
  */
  {
    "id": "s+tqLZKB",
    "block": "[[[1,\"\\n\"],[8,[39,0],null,[[\"@title\"],[\"<DModal>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@closeModal\",\"@hideHeader\",\"@inline\",\"@title\",\"@subtitle\",\"@flash\",\"@flashType\",\"@errors\",\"@dismissable\"],[[28,[37,3],[[28,[37,4],[[30,0,[\"inline\"]]],null],true],null],[30,0,[\"hideHeader\"]],[30,0,[\"inline\"]],[30,0,[\"title\"]],[30,0,[\"subtitle\"]],[30,0,[\"flash\"]],[30,0,[\"flashType\"]],[30,0,[\"errors\"]],[30,0,[\"dismissable\"]]]],[[\"body\",\"footer\"],[[[[1,\"\\n        \"],[1,[30,0,[\"body\"]]],[1,\"\\n      \"]],[]],[[[1,\"\\n        \"],[1,[28,[35,5],[\"styleguide.sections.modal.footer\"],null]],[1,\"\\n      \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,6],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[39,7],null,[[\"@name\"],[\"@hideHeader\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,8],[[4,[38,9],[\"click\",[30,0,[\"toggleHeader\"]]],null]],[[\"@state\"],[[30,0,[\"hideHeader\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,7],null,[[\"@name\"],[\"@inline\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,8],[[4,[38,9],[\"click\",[30,0,[\"toggleInline\"]]],null]],[[\"@state\"],[[30,0,[\"inline\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,7],null,[[\"@name\"],[\"@dismissable\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,8],[[4,[38,9],[\"click\",[30,0,[\"toggleDismissable\"]]],null]],[[\"@state\"],[[30,0,[\"dismissable\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,7],null,[[\"@name\"],[\"@tagName\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,10],null,[[\"@value\",\"@content\",\"@onChange\",\"@valueProperty\",\"@nameProperty\"],[[30,0,[\"modalTagName\"]],[30,0,[\"modalTagNames\"]],[28,[37,3],[[28,[37,4],[[30,0,[\"modalTagName\"]]],null]],null],null,null]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,7],null,[[\"@name\"],[\"@title\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,11],null,[[\"@value\"],[[30,0,[\"title\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,7],null,[[\"@name\"],[\"@subtitle\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,11],null,[[\"@value\"],[[30,0,[\"subtitle\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,7],null,[[\"@name\"],[\"<:body>\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,12],null,[[\"@value\"],[[30,0,[\"body\"]]]],null],[1,\"    \"]],[]]]]],[1,\"\\n    \"],[8,[39,7],null,[[\"@name\"],[\"@flash\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,11],null,[[\"@value\"],[[30,0,[\"flash\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,7],null,[[\"@name\"],[\"@flashType\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,10],null,[[\"@value\",\"@content\",\"@onChange\",\"@valueProperty\",\"@nameProperty\"],[[30,0,[\"flashType\"]],[30,0,[\"flashTypes\"]],[28,[37,3],[[28,[37,4],[[30,0,[\"flashType\"]]],null]],null],null,null]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]]],[],false,[\"styleguide-example\",\"styleguide/component\",\"d-modal\",\"fn\",\"mut\",\"i18n\",\"styleguide/controls\",\"styleguide/controls/row\",\"d-toggle-switch\",\"on\",\"combo-box\",\"input\",\"textarea\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/organisms/modal.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (_class = class _class extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "inline", _descriptor, this);
      _initializerDefineProperty(this, "hideHeader", _descriptor2, this);
      _initializerDefineProperty(this, "dismissable", _descriptor3, this);
      _initializerDefineProperty(this, "modalTagName", _descriptor4, this);
      _initializerDefineProperty(this, "title", _descriptor5, this);
      _initializerDefineProperty(this, "body", _descriptor6, this);
      _initializerDefineProperty(this, "subtitle", _descriptor7, this);
      _initializerDefineProperty(this, "flash", _descriptor8, this);
      _initializerDefineProperty(this, "flashType", _descriptor9, this);
      _defineProperty(this, "flashTypes", ["success", "info", "warning", "error"]);
      _defineProperty(this, "modalTagNames", ["div", "form"]);
    }
    toggleHeader() {
      this.hideHeader = !this.hideHeader;
    }
    toggleInline() {
      this.inline = !this.inline;
      if (!this.inline) {
        // Make sure there is a way to dismiss the modal
        this.dismissable = true;
      }
    }
    toggleDismissable() {
      this.dismissable = !this.dismissable;
      if (!this.dismissable) {
        // Make sure there is a way to dismiss the modal
        this.inline = true;
      }
    }
    toggleShowFooter() {
      this.showFooter = !this.showFooter;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "inline", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "hideHeader", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "dismissable", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "modalTagName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "div";
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "title", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _discourseI18n.default.t("styleguide.sections.modal.header");
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "body", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.dummy.shortLorem;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "subtitle", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "";
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "flash", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "";
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "flashType", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "success";
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleHeader", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleHeader"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleInline", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleInline"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleDismissable", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleDismissable"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleShowFooter", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleShowFooter"), _class.prototype)), _class));
});
define("discourse/plugins/styleguide/discourse/components/sections/organisms/navigation", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="navigation">
    <div class="list-controls">
      <div class="container">
        <section class="navigation-container">
          <BreadCrumbs @categories={{@dummy.categories}} />
          <NavigationBar @navItems={{@dummy.navItems}} @filterMode="latest" />
  
          <div class="navigation-controls">
            <CategoriesAdminDropdown />
            <CreateTopicButton @canCreateTopic={{true}} />
          </div>
        </section>
      </div>
    </div>
  </StyleguideExample>
  */
  {
    "id": "INDqbct5",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"navigation\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"list-controls\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n      \"],[10,\"section\"],[14,0,\"navigation-container\"],[12],[1,\"\\n        \"],[8,[39,1],null,[[\"@categories\"],[[30,1,[\"categories\"]]]],null],[1,\"\\n        \"],[8,[39,2],null,[[\"@navItems\",\"@filterMode\"],[[30,1,[\"navItems\"]],\"latest\"]],null],[1,\"\\n\\n        \"],[10,0],[14,0,\"navigation-controls\"],[12],[1,\"\\n          \"],[8,[39,3],null,null,null],[1,\"\\n          \"],[8,[39,4],null,[[\"@canCreateTopic\"],[true]],null],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"bread-crumbs\",\"navigation-bar\",\"categories-admin-dropdown\",\"create-topic-button\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/organisms/navigation.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/organisms/site-header", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="site header - in topic - scrolled">
    <div class="d-header-wrap">
      <header class="d-header">
        <div class="wrap">
          <div class="contents">
            <MountWidget @widget="home-logo" @args={{hash minimized=true}} />
            <MountWidget @widget="header-topic-info" @args={{@dummy}} />
  
            <div class="panel clearfix">
              <MountWidget
                @widget="header-icons"
                @args={{hash user=@dummy.user}}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  </StyleguideExample>
  */
  {
    "id": "5lvYmNsH",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"site header - in topic - scrolled\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"d-header-wrap\"],[12],[1,\"\\n    \"],[10,\"header\"],[14,0,\"d-header\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"wrap\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"contents\"],[12],[1,\"\\n          \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"home-logo\",[28,[37,2],null,[[\"minimized\"],[true]]]]],null],[1,\"\\n          \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"header-topic-info\",[30,1]]],null],[1,\"\\n\\n          \"],[10,0],[14,0,\"panel clearfix\"],[12],[1,\"\\n            \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"header-icons\",[28,[37,2],null,[[\"user\"],[[30,1,[\"user\"]]]]]]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"mount-widget\",\"hash\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/organisms/site-header.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/organisms/suggested-topics", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<SuggestedTopics>">
    <SuggestedTopics @topic={{@dummy.topic}} />
  </StyleguideExample>
  */
  {
    "id": "EUS+wXqb",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<SuggestedTopics>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,1,[\"topic\"]]]],null],[1,\"\\n\"]],[]]]]]],[\"@dummy\"],false,[\"styleguide-example\",\"suggested-topics\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/organisms/suggested-topics.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/organisms/user-about", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title=".user-main .about.collapsed-info.no-background">
    <section class="user-main">
      <section class="collapsed-info about no-background">
        <div class="profile-image"></div>
  
        <div class="details">
          <div class="primary">
            {{bound-avatar @dummy.user "huge"}}
            <section class="controls">
              <ul>
                <li>
                  <a class="btn btn-primary">
                    {{d-icon "envelope"}}
                    {{i18n "user.private_message"}}
                  </a>
                </li>
                <li>
                  <a href={{@dummy.user.adminPath}} class="btn">
                    {{d-icon "wrench"}}
                    {{i18n "admin.user.show_admin_profile"}}
                  </a>
                </li>
                <li>
                  <a href="#" class="btn">
                    {{d-icon "angle-double-down"}}
                    {{i18n "user.expand_profile"}}
                  </a>
                </li>
              </ul>
            </section>
  
            <div class="primary-textual">
              <h1 class="username">
                {{@dummy.user.username}}
                {{d-icon "shield-alt"}}
              </h1>
              <h2 class="full-name">{{@dummy.user.name}}</h2>
              <h3>{{@dummy.user.title}}</h3>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
      </section>
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title=".user-main .about.collapsed-info.has-background">
    <section class="user-main">
      <section
        class="collapsed-info about has-background"
        style={{@dummy.user.profileBackground}}
      >
        <div class="profile-image"></div>
        <div class="details">
          <div class="primary">
            {{bound-avatar @dummy.user "huge"}}
            <section class="controls">
              <ul>
                <li>
                  <a class="btn btn-primary">
                    {{d-icon "envelope"}}
                    {{i18n "user.private_message"}}
                  </a>
                </li>
                <li>
                  <a href={{@dummy.user.adminPath}} class="btn">
                    {{d-icon "wrench"}}
                    {{i18n "admin.user.show_admin_profile"}}
                  </a>
                </li>
                <li>
                  <a href="#" class="btn">
                    {{d-icon "angle-double-down"}}
                    {{i18n "user.expand_profile"}}
                  </a>
                </li>
              </ul>
            </section>
  
            <div class="primary-textual">
              <h1 class="username">
                {{@dummy.user.username}}
                {{d-icon "shield-alt"}}
              </h1>
              <h2 class="full-name">{{@dummy.user.name}}</h2>
              <h3>{{@dummy.user.title}}</h3>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
      </section>
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title=".user-main .about.no-background">
    <section class="user-main">
      <section class="about no-background">
  
        <div class="staff-counters">
          <div>
            <span class="helpful-flags">
              {{@dummy.user.number_of_flags_given}}
            </span>&nbsp;{{i18n "user.staff_counters.flags_given"}}
          </div>
          <div>
            <a href="#">
              <span class="flagged-posts">
                {{@dummy.user.number_of_flagged_posts}}
              </span>&nbsp;{{i18n "user.staff_counters.flagged_posts"}}
            </a>
          </div>
          <div>
            <a href="#">
              <span class="deleted-posts">
                {{@dummy.user.number_of_deleted_posts}}
              </span>&nbsp;{{i18n "user.staff_counters.deleted_posts"}}
            </a>
          </div>
          <div>
            <span class="suspensions">
              {{@dummy.user.number_of_suspensions}}
            </span>&nbsp;{{i18n "user.staff_counters.suspensions"}}
          </div>
          <div>
            <span class="warnings-received">
              {{@dummy.user.warnings_received_count}}
            </span>&nbsp;{{i18n "user.staff_counters.warnings_received"}}
          </div>
        </div>
  
        <div class="profile-image"></div>
        <div class="details">
          <div class="primary">
            {{bound-avatar @dummy.user "huge"}}
            <section class="controls">
              <ul>
                <li>
                  <a class="btn btn-primary">
                    {{d-icon "envelope"}}
                    {{i18n "user.private_message"}}
                  </a>
                </li>
                <li>
                  <a href={{@dummy.user.adminPath}} class="btn">
                    {{d-icon "wrench"}}
                    {{i18n "admin.user.show_admin_profile"}}
                  </a>
                </li>
              </ul>
            </section>
  
            <div class="primary-textual">
              <h1 class="username">
                {{@dummy.user.username}}
                {{d-icon "shield-alt"}}
              </h1>
              <h2 class="full-name">{{@dummy.user.name}}</h2>
              <h3>{{@dummy.user.title}}</h3>
              <h3>
                {{d-icon "map-marker-alt"}}
                {{@dummy.user.location}}
                {{d-icon "globe"}}
                <a
                  href={{@dummy.user.website}}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  {{@dummy.user.website_name}}
                </a>
              </h3>
  
              <div class="bio">
                <div class="suspended">
                  {{d-icon "ban"}}
                  <b>
                    {{i18n
                      "user.suspended_notice"
                      date=@dummy.user.suspendedTillDate
                    }}
                  </b>
                  <br />
                  <b>{{i18n "user.suspended_reason"}}</b>
                  {{@dummy.user.suspend_reason}}
                </div>
                {{html-safe @dummy.user.bio_cooked}}
              </div>
  
              <div class="public-user-fields">
                {{#each @dummy.user.publicUserFields as |uf|}}
                  {{#if uf.value}}
                    <div class="public-user-field {{uf.field.dasherized_name}}">
                      <span class="user-field-name">{{uf.field.name}}
                      </span>:
                      <span class="user-field-value">{{uf.value}}
                      </span>
                    </div>
                  {{/if}}
                {{/each}}
              </div>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
  
        <div class="secondary">
          <dl>
            <dt>{{i18n "user.created"}}</dt>
            <dd>{{bound-date @dummy.user.created_at}}</dd>
            <dt>{{i18n "user.last_posted"}}</dt>
            <dd>{{bound-date @dummy.user.last_posted_at}}</dd>
            <dt>{{i18n "user.last_seen"}}</dt>
            <dd>{{bound-date @dummy.user.last_seen_at}}</dd>
            <dt>{{i18n "views"}}</dt>
            <dd>{{@dummy.user.profile_view_count}}</dd>
            <dt class="invited-by">{{i18n "user.invited_by"}}</dt>
            <dd class="invited-by">
              <a href="#">{{@dummy.user.invited_by.username}}</a>
            </dd>
            <dt class="trust-level">{{i18n "user.trust_level"}}</dt>
            <dd class="trust-level">{{@dummy.user.trustLevel.name}}</dd>
            <dt>{{i18n "user.email.title"}}</dt>
            <dd title={{@dummy.user.email}}>
              <DButton
                @icon="envelope"
                @label="admin.users.check_email.text"
                class="btn-primary"
              />
            </dd>
            <dt class="groups">
              {{i18n "groups.title" count=@dummy.user.displayGroups.length}}
            </dt>
            <dd class="groups">
              {{#each @dummy.user.displayGroups as |group|}}
                <span>
                  <a href="#" class="group-link">{{group.name}}</a>
                </span>
              {{/each}}
            </dd>
            <DButton
              @icon="exclamation-triangle"
              @label="user.admin_delete"
              class="btn-danger"
            />
          </dl>
        </div>
      </section>
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title=".user-main .about.has-background">
    <section class="user-main">
      <section
        class="about has-background"
        style={{@dummy.user.profileBackground}}
      >
        <div class="staff-counters">
          <div>
            <span class="helpful-flags">
              {{@dummy.user.number_of_flags_given}}
            </span>&nbsp;{{i18n "user.staff_counters.flags_given"}}
          </div>
          <div>
            <a href="#">
              <span class="flagged-posts">
                {{@dummy.user.number_of_flagged_posts}}
              </span>&nbsp;{{i18n "user.staff_counters.flagged_posts"}}
            </a>
          </div>
          <div>
            <a href="#">
              <span class="deleted-posts">
                {{@dummy.user.number_of_deleted_posts}}
              </span>&nbsp;{{i18n "user.staff_counters.deleted_posts"}}
            </a>
          </div>
          <div>
            <span class="suspensions">
              {{@dummy.user.number_of_suspensions}}
            </span>&nbsp;{{i18n "user.staff_counters.suspensions"}}
          </div>
          <div>
            <span class="warnings-received">
              {{@dummy.user.warnings_received_count}}
            </span>&nbsp;{{i18n "user.staff_counters.warnings_received"}}
          </div>
        </div>
  
        <div class="profile-image"></div>
        <div class="details">
          <div class="primary">
            {{bound-avatar @dummy.user "huge"}}
            <section class="controls">
              <ul>
                <li>
                  <a class="btn btn-primary">
                    {{d-icon "envelope"}}
                    {{i18n "user.private_message"}}
                  </a>
                </li>
                <li>
                  <a href={{@dummy.user.adminPath}} class="btn">
                    {{d-icon "wrench"}}
                    {{i18n "admin.user.show_admin_profile"}}
                  </a>
                </li>
              </ul>
            </section>
  
            <div class="primary-textual">
              <h1 class="username">
                {{@dummy.user.username}}
                {{d-icon "shield-alt"}}
              </h1>
              <h2 class="full-name">{{@dummy.user.name}}</h2>
              <h3>{{@dummy.user.title}}</h3>
              <h3>
                {{d-icon "map-marker-alt"}}
                {{@dummy.user.location}}
                {{d-icon "globe"}}
                <a
                  href={{@dummy.user.website}}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  {{@dummy.user.website_name}}
                </a>
              </h3>
  
              <div class="bio">
                <div class="suspended">
                  {{d-icon "ban"}}
                  <b>
                    {{i18n
                      "user.suspended_notice"
                      date=@dummy.user.suspendedTillDate
                    }}
                  </b>
                  <br />
                  <b>{{i18n "user.suspended_reason"}}</b>
                  {{@dummy.user.suspend_reason}}
                </div>
                {{html-safe @dummy.user.bio_cooked}}
              </div>
  
              <div class="public-user-fields">
                {{#each @dummy.user.publicUserFields as |uf|}}
                  {{#if uf.value}}
                    <div class="public-user-field {{uf.field.dasherized_name}}">
                      <span class="user-field-name">{{uf.field.name}}</span>:
                      <span class="user-field-value">{{uf.value}}</span>
                    </div>
                  {{/if}}
                {{/each}}
              </div>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
  
        <div class="secondary">
          <dl>
            <dt>{{i18n "user.created"}}</dt>
            <dd>{{bound-date @dummy.user.created_at}}</dd>
            <dt>{{i18n "user.last_posted"}}</dt>
            <dd>{{bound-date @dummy.user.last_posted_at}}</dd>
            <dt>{{i18n "user.last_seen"}}</dt>
            <dd>{{bound-date @dummy.user.last_seen_at}}</dd>
            <dt>{{i18n "views"}}</dt>
            <dd>{{@dummy.user.profile_view_count}}</dd>
            <dt class="invited-by">{{i18n "user.invited_by"}}</dt>
            <dd class="invited-by">
              <a href="#">{{@dummy.user.invited_by.username}}</a>
            </dd>
            <dt class="trust-level">{{i18n "user.trust_level"}}</dt>
            <dd class="trust-level">{{@dummy.user.trustLevel.name}}</dd>
            <dt>{{i18n "user.email.title"}}</dt>
            <dd title={{@dummy.user.email}}>
              <DButton
                @icon="envelope"
                @label="admin.users.check_email.text"
                class="btn-primary"
              />
            </dd>
            <dt class="groups">
              {{i18n "groups.title" count=@dummy.user.displayGroups.length}}
            </dt>
            <dd class="groups">
              {{#each @dummy.user.displayGroups as |group|}}
                <span>
                  <a href="#" class="group-link">{{group.name}}</a>
                </span>
              {{/each}}
            </dd>
            <DButton
              @icon="exclamation-triangle"
              @label="user.admin_delete"
              class="btn-danger"
            />
          </dl>
        </div>
      </section>
    </section>
  </StyleguideExample>
  */
  {
    "id": "ZY2PE7Wf",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\".user-main .about.collapsed-info.no-background\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"user-main\"],[12],[1,\"\\n    \"],[10,\"section\"],[14,0,\"collapsed-info about no-background\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"profile-image\"],[12],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"primary\"],[12],[1,\"\\n          \"],[1,[28,[35,1],[[30,1,[\"user\"]],\"huge\"],null]],[1,\"\\n          \"],[10,\"section\"],[14,0,\"controls\"],[12],[1,\"\\n            \"],[10,\"ul\"],[12],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[14,0,\"btn btn-primary\"],[12],[1,\"\\n                  \"],[1,[28,[35,2],[\"envelope\"],null]],[1,\"\\n                  \"],[1,[28,[35,3],[\"user.private_message\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[15,6,[30,1,[\"user\",\"adminPath\"]]],[14,0,\"btn\"],[12],[1,\"\\n                  \"],[1,[28,[35,2],[\"wrench\"],null]],[1,\"\\n                  \"],[1,[28,[35,3],[\"admin.user.show_admin_profile\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[14,6,\"#\"],[14,0,\"btn\"],[12],[1,\"\\n                  \"],[1,[28,[35,2],[\"angle-double-down\"],null]],[1,\"\\n                  \"],[1,[28,[35,3],[\"user.expand_profile\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"primary-textual\"],[12],[1,\"\\n            \"],[10,\"h1\"],[14,0,\"username\"],[12],[1,\"\\n              \"],[1,[30,1,[\"user\",\"username\"]]],[1,\"\\n              \"],[1,[28,[35,2],[\"shield-alt\"],null]],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"h2\"],[14,0,\"full-name\"],[12],[1,[30,1,[\"user\",\"name\"]]],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,[30,1,[\"user\",\"title\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,5,\"clear: both\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".user-main .about.collapsed-info.has-background\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"user-main\"],[12],[1,\"\\n    \"],[10,\"section\"],[14,0,\"collapsed-info about has-background\"],[15,5,[30,1,[\"user\",\"profileBackground\"]]],[12],[1,\"\\n      \"],[10,0],[14,0,\"profile-image\"],[12],[13],[1,\"\\n      \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"primary\"],[12],[1,\"\\n          \"],[1,[28,[35,1],[[30,1,[\"user\"]],\"huge\"],null]],[1,\"\\n          \"],[10,\"section\"],[14,0,\"controls\"],[12],[1,\"\\n            \"],[10,\"ul\"],[12],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[14,0,\"btn btn-primary\"],[12],[1,\"\\n                  \"],[1,[28,[35,2],[\"envelope\"],null]],[1,\"\\n                  \"],[1,[28,[35,3],[\"user.private_message\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[15,6,[30,1,[\"user\",\"adminPath\"]]],[14,0,\"btn\"],[12],[1,\"\\n                  \"],[1,[28,[35,2],[\"wrench\"],null]],[1,\"\\n                  \"],[1,[28,[35,3],[\"admin.user.show_admin_profile\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[14,6,\"#\"],[14,0,\"btn\"],[12],[1,\"\\n                  \"],[1,[28,[35,2],[\"angle-double-down\"],null]],[1,\"\\n                  \"],[1,[28,[35,3],[\"user.expand_profile\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"primary-textual\"],[12],[1,\"\\n            \"],[10,\"h1\"],[14,0,\"username\"],[12],[1,\"\\n              \"],[1,[30,1,[\"user\",\"username\"]]],[1,\"\\n              \"],[1,[28,[35,2],[\"shield-alt\"],null]],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"h2\"],[14,0,\"full-name\"],[12],[1,[30,1,[\"user\",\"name\"]]],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,[30,1,[\"user\",\"title\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,5,\"clear: both\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".user-main .about.no-background\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"user-main\"],[12],[1,\"\\n    \"],[10,\"section\"],[14,0,\"about no-background\"],[12],[1,\"\\n\\n      \"],[10,0],[14,0,\"staff-counters\"],[12],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,1],[14,0,\"helpful-flags\"],[12],[1,\"\\n            \"],[1,[30,1,[\"user\",\"number_of_flags_given\"]]],[1,\"\\n          \"],[13],[1,\" \"],[1,[28,[35,3],[\"user.staff_counters.flags_given\"],null]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,3],[14,6,\"#\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"flagged-posts\"],[12],[1,\"\\n              \"],[1,[30,1,[\"user\",\"number_of_flagged_posts\"]]],[1,\"\\n            \"],[13],[1,\" \"],[1,[28,[35,3],[\"user.staff_counters.flagged_posts\"],null]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,3],[14,6,\"#\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"deleted-posts\"],[12],[1,\"\\n              \"],[1,[30,1,[\"user\",\"number_of_deleted_posts\"]]],[1,\"\\n            \"],[13],[1,\" \"],[1,[28,[35,3],[\"user.staff_counters.deleted_posts\"],null]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,1],[14,0,\"suspensions\"],[12],[1,\"\\n            \"],[1,[30,1,[\"user\",\"number_of_suspensions\"]]],[1,\"\\n          \"],[13],[1,\" \"],[1,[28,[35,3],[\"user.staff_counters.suspensions\"],null]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,1],[14,0,\"warnings-received\"],[12],[1,\"\\n            \"],[1,[30,1,[\"user\",\"warnings_received_count\"]]],[1,\"\\n          \"],[13],[1,\" \"],[1,[28,[35,3],[\"user.staff_counters.warnings_received\"],null]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"profile-image\"],[12],[13],[1,\"\\n      \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"primary\"],[12],[1,\"\\n          \"],[1,[28,[35,1],[[30,1,[\"user\"]],\"huge\"],null]],[1,\"\\n          \"],[10,\"section\"],[14,0,\"controls\"],[12],[1,\"\\n            \"],[10,\"ul\"],[12],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[14,0,\"btn btn-primary\"],[12],[1,\"\\n                  \"],[1,[28,[35,2],[\"envelope\"],null]],[1,\"\\n                  \"],[1,[28,[35,3],[\"user.private_message\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[15,6,[30,1,[\"user\",\"adminPath\"]]],[14,0,\"btn\"],[12],[1,\"\\n                  \"],[1,[28,[35,2],[\"wrench\"],null]],[1,\"\\n                  \"],[1,[28,[35,3],[\"admin.user.show_admin_profile\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"primary-textual\"],[12],[1,\"\\n            \"],[10,\"h1\"],[14,0,\"username\"],[12],[1,\"\\n              \"],[1,[30,1,[\"user\",\"username\"]]],[1,\"\\n              \"],[1,[28,[35,2],[\"shield-alt\"],null]],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"h2\"],[14,0,\"full-name\"],[12],[1,[30,1,[\"user\",\"name\"]]],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,[30,1,[\"user\",\"title\"]]],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,\"\\n              \"],[1,[28,[35,2],[\"map-marker-alt\"],null]],[1,\"\\n              \"],[1,[30,1,[\"user\",\"location\"]]],[1,\"\\n              \"],[1,[28,[35,2],[\"globe\"],null]],[1,\"\\n              \"],[10,3],[15,6,[30,1,[\"user\",\"website\"]]],[14,\"rel\",\"nofollow noopener noreferrer\"],[14,\"target\",\"_blank\"],[12],[1,\"\\n                \"],[1,[30,1,[\"user\",\"website_name\"]]],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"bio\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"suspended\"],[12],[1,\"\\n                \"],[1,[28,[35,2],[\"ban\"],null]],[1,\"\\n                \"],[10,\"b\"],[12],[1,\"\\n                  \"],[1,[28,[35,3],[\"user.suspended_notice\"],[[\"date\"],[[30,1,[\"user\",\"suspendedTillDate\"]]]]]],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"br\"],[12],[13],[1,\"\\n                \"],[10,\"b\"],[12],[1,[28,[35,3],[\"user.suspended_reason\"],null]],[13],[1,\"\\n                \"],[1,[30,1,[\"user\",\"suspend_reason\"]]],[1,\"\\n              \"],[13],[1,\"\\n              \"],[1,[28,[35,4],[[30,1,[\"user\",\"bio_cooked\"]]],null]],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"public-user-fields\"],[12],[1,\"\\n\"],[42,[28,[37,6],[[28,[37,6],[[30,1,[\"user\",\"publicUserFields\"]]],null]],null],null,[[[41,[30,2,[\"value\"]],[[[1,\"                  \"],[10,0],[15,0,[29,[\"public-user-field \",[30,2,[\"field\",\"dasherized_name\"]]]]],[12],[1,\"\\n                    \"],[10,1],[14,0,\"user-field-name\"],[12],[1,[30,2,[\"field\",\"name\"]]],[1,\"\\n                    \"],[13],[1,\":\\n                    \"],[10,1],[14,0,\"user-field-value\"],[12],[1,[30,2,[\"value\"]]],[1,\"\\n                    \"],[13],[1,\"\\n                  \"],[13],[1,\"\\n\"]],[]],null]],[2]],null],[1,\"            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,5,\"clear: both\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"secondary\"],[12],[1,\"\\n        \"],[10,\"dl\"],[12],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,3],[\"user.created\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[12],[1,[28,[35,8],[[30,1,[\"user\",\"created_at\"]]],null]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,3],[\"user.last_posted\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[12],[1,[28,[35,8],[[30,1,[\"user\",\"last_posted_at\"]]],null]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,3],[\"user.last_seen\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[12],[1,[28,[35,8],[[30,1,[\"user\",\"last_seen_at\"]]],null]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,3],[\"views\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[12],[1,[30,1,[\"user\",\"profile_view_count\"]]],[13],[1,\"\\n          \"],[10,\"dt\"],[14,0,\"invited-by\"],[12],[1,[28,[35,3],[\"user.invited_by\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[14,0,\"invited-by\"],[12],[1,\"\\n            \"],[10,3],[14,6,\"#\"],[12],[1,[30,1,[\"user\",\"invited_by\",\"username\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"dt\"],[14,0,\"trust-level\"],[12],[1,[28,[35,3],[\"user.trust_level\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[14,0,\"trust-level\"],[12],[1,[30,1,[\"user\",\"trustLevel\",\"name\"]]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,3],[\"user.email.title\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[15,\"title\",[30,1,[\"user\",\"email\"]]],[12],[1,\"\\n            \"],[8,[39,9],[[24,0,\"btn-primary\"]],[[\"@icon\",\"@label\"],[\"envelope\",\"admin.users.check_email.text\"]],null],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"dt\"],[14,0,\"groups\"],[12],[1,\"\\n            \"],[1,[28,[35,3],[\"groups.title\"],[[\"count\"],[[30,1,[\"user\",\"displayGroups\",\"length\"]]]]]],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"dd\"],[14,0,\"groups\"],[12],[1,\"\\n\"],[42,[28,[37,6],[[28,[37,6],[[30,1,[\"user\",\"displayGroups\"]]],null]],null],null,[[[1,\"              \"],[10,1],[12],[1,\"\\n                \"],[10,3],[14,6,\"#\"],[14,0,\"group-link\"],[12],[1,[30,3,[\"name\"]]],[13],[1,\"\\n              \"],[13],[1,\"\\n\"]],[3]],null],[1,\"          \"],[13],[1,\"\\n          \"],[8,[39,9],[[24,0,\"btn-danger\"]],[[\"@icon\",\"@label\"],[\"exclamation-triangle\",\"user.admin_delete\"]],null],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".user-main .about.has-background\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"user-main\"],[12],[1,\"\\n    \"],[10,\"section\"],[14,0,\"about has-background\"],[15,5,[30,1,[\"user\",\"profileBackground\"]]],[12],[1,\"\\n      \"],[10,0],[14,0,\"staff-counters\"],[12],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,1],[14,0,\"helpful-flags\"],[12],[1,\"\\n            \"],[1,[30,1,[\"user\",\"number_of_flags_given\"]]],[1,\"\\n          \"],[13],[1,\" \"],[1,[28,[35,3],[\"user.staff_counters.flags_given\"],null]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,3],[14,6,\"#\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"flagged-posts\"],[12],[1,\"\\n              \"],[1,[30,1,[\"user\",\"number_of_flagged_posts\"]]],[1,\"\\n            \"],[13],[1,\" \"],[1,[28,[35,3],[\"user.staff_counters.flagged_posts\"],null]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,3],[14,6,\"#\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"deleted-posts\"],[12],[1,\"\\n              \"],[1,[30,1,[\"user\",\"number_of_deleted_posts\"]]],[1,\"\\n            \"],[13],[1,\" \"],[1,[28,[35,3],[\"user.staff_counters.deleted_posts\"],null]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,1],[14,0,\"suspensions\"],[12],[1,\"\\n            \"],[1,[30,1,[\"user\",\"number_of_suspensions\"]]],[1,\"\\n          \"],[13],[1,\" \"],[1,[28,[35,3],[\"user.staff_counters.suspensions\"],null]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,1],[14,0,\"warnings-received\"],[12],[1,\"\\n            \"],[1,[30,1,[\"user\",\"warnings_received_count\"]]],[1,\"\\n          \"],[13],[1,\" \"],[1,[28,[35,3],[\"user.staff_counters.warnings_received\"],null]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"profile-image\"],[12],[13],[1,\"\\n      \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"primary\"],[12],[1,\"\\n          \"],[1,[28,[35,1],[[30,1,[\"user\"]],\"huge\"],null]],[1,\"\\n          \"],[10,\"section\"],[14,0,\"controls\"],[12],[1,\"\\n            \"],[10,\"ul\"],[12],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[14,0,\"btn btn-primary\"],[12],[1,\"\\n                  \"],[1,[28,[35,2],[\"envelope\"],null]],[1,\"\\n                  \"],[1,[28,[35,3],[\"user.private_message\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[15,6,[30,1,[\"user\",\"adminPath\"]]],[14,0,\"btn\"],[12],[1,\"\\n                  \"],[1,[28,[35,2],[\"wrench\"],null]],[1,\"\\n                  \"],[1,[28,[35,3],[\"admin.user.show_admin_profile\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"primary-textual\"],[12],[1,\"\\n            \"],[10,\"h1\"],[14,0,\"username\"],[12],[1,\"\\n              \"],[1,[30,1,[\"user\",\"username\"]]],[1,\"\\n              \"],[1,[28,[35,2],[\"shield-alt\"],null]],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"h2\"],[14,0,\"full-name\"],[12],[1,[30,1,[\"user\",\"name\"]]],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,[30,1,[\"user\",\"title\"]]],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,\"\\n              \"],[1,[28,[35,2],[\"map-marker-alt\"],null]],[1,\"\\n              \"],[1,[30,1,[\"user\",\"location\"]]],[1,\"\\n              \"],[1,[28,[35,2],[\"globe\"],null]],[1,\"\\n              \"],[10,3],[15,6,[30,1,[\"user\",\"website\"]]],[14,\"rel\",\"nofollow noopener noreferrer\"],[14,\"target\",\"_blank\"],[12],[1,\"\\n                \"],[1,[30,1,[\"user\",\"website_name\"]]],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"bio\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"suspended\"],[12],[1,\"\\n                \"],[1,[28,[35,2],[\"ban\"],null]],[1,\"\\n                \"],[10,\"b\"],[12],[1,\"\\n                  \"],[1,[28,[35,3],[\"user.suspended_notice\"],[[\"date\"],[[30,1,[\"user\",\"suspendedTillDate\"]]]]]],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"br\"],[12],[13],[1,\"\\n                \"],[10,\"b\"],[12],[1,[28,[35,3],[\"user.suspended_reason\"],null]],[13],[1,\"\\n                \"],[1,[30,1,[\"user\",\"suspend_reason\"]]],[1,\"\\n              \"],[13],[1,\"\\n              \"],[1,[28,[35,4],[[30,1,[\"user\",\"bio_cooked\"]]],null]],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"public-user-fields\"],[12],[1,\"\\n\"],[42,[28,[37,6],[[28,[37,6],[[30,1,[\"user\",\"publicUserFields\"]]],null]],null],null,[[[41,[30,4,[\"value\"]],[[[1,\"                  \"],[10,0],[15,0,[29,[\"public-user-field \",[30,4,[\"field\",\"dasherized_name\"]]]]],[12],[1,\"\\n                    \"],[10,1],[14,0,\"user-field-name\"],[12],[1,[30,4,[\"field\",\"name\"]]],[13],[1,\":\\n                    \"],[10,1],[14,0,\"user-field-value\"],[12],[1,[30,4,[\"value\"]]],[13],[1,\"\\n                  \"],[13],[1,\"\\n\"]],[]],null]],[4]],null],[1,\"            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,5,\"clear: both\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"secondary\"],[12],[1,\"\\n        \"],[10,\"dl\"],[12],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,3],[\"user.created\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[12],[1,[28,[35,8],[[30,1,[\"user\",\"created_at\"]]],null]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,3],[\"user.last_posted\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[12],[1,[28,[35,8],[[30,1,[\"user\",\"last_posted_at\"]]],null]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,3],[\"user.last_seen\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[12],[1,[28,[35,8],[[30,1,[\"user\",\"last_seen_at\"]]],null]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,3],[\"views\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[12],[1,[30,1,[\"user\",\"profile_view_count\"]]],[13],[1,\"\\n          \"],[10,\"dt\"],[14,0,\"invited-by\"],[12],[1,[28,[35,3],[\"user.invited_by\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[14,0,\"invited-by\"],[12],[1,\"\\n            \"],[10,3],[14,6,\"#\"],[12],[1,[30,1,[\"user\",\"invited_by\",\"username\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"dt\"],[14,0,\"trust-level\"],[12],[1,[28,[35,3],[\"user.trust_level\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[14,0,\"trust-level\"],[12],[1,[30,1,[\"user\",\"trustLevel\",\"name\"]]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,3],[\"user.email.title\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[15,\"title\",[30,1,[\"user\",\"email\"]]],[12],[1,\"\\n            \"],[8,[39,9],[[24,0,\"btn-primary\"]],[[\"@icon\",\"@label\"],[\"envelope\",\"admin.users.check_email.text\"]],null],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"dt\"],[14,0,\"groups\"],[12],[1,\"\\n            \"],[1,[28,[35,3],[\"groups.title\"],[[\"count\"],[[30,1,[\"user\",\"displayGroups\",\"length\"]]]]]],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"dd\"],[14,0,\"groups\"],[12],[1,\"\\n\"],[42,[28,[37,6],[[28,[37,6],[[30,1,[\"user\",\"displayGroups\"]]],null]],null],null,[[[1,\"              \"],[10,1],[12],[1,\"\\n                \"],[10,3],[14,6,\"#\"],[14,0,\"group-link\"],[12],[1,[30,5,[\"name\"]]],[13],[1,\"\\n              \"],[13],[1,\"\\n\"]],[5]],null],[1,\"          \"],[13],[1,\"\\n          \"],[8,[39,9],[[24,0,\"btn-danger\"]],[[\"@icon\",\"@label\"],[\"exclamation-triangle\",\"user.admin_delete\"]],null],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@dummy\",\"uf\",\"group\",\"uf\",\"group\"],false,[\"styleguide-example\",\"bound-avatar\",\"d-icon\",\"i18n\",\"html-safe\",\"each\",\"-track-array\",\"if\",\"bound-date\",\"d-button\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/organisms/user-about.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/sections/syntax/00-bem", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="section-description">
    <p>
      The guidelines outlines below strive to bring structure and consistency to
      our classnames. Additionally, with this approach the nesting of css is
      firmly reduced. BEM stands for:
      <ul>
        <li>Block</li>
        <li>Element</li>
        <li>Modifier</li>
      </ul>
    </p>
    <p>We use a slightly modified version of the BEM classname format.</p>
    <h3>Block</h3>
    For example
    <strong><code>d-modal</code></strong>
    <p>A block is a standalone component. Blocks can be used within blocks. It
      should be a "top-level" element, which could be used in its entirety in
      another place of the app. It has no dependencies on any parent class.</p>
    <h3>Element</h3>
    For example
    <strong><code>d-modal__header</code></strong>
    <p>
      An element is a part of a block that can not be used outside that context.
      They because it depends on the parent class and can not be used standalone
      outside this context. In the example above, an element with class
      <code>d-modal__header</code>
      will only work within the d-modal block, but not when placed elsewhere.
    </p>
    <h3>Modifiers</h3>
    Examples
    <strong><code>--success</code>,
      <code>--large</code>,<code>--inline</code>,
      <code>--highlighted</code></strong>
    <p>
      A modifier is used mainly for changing the appearance, if different than the
      default. It is less than an element, and has no html structure of it own.
      Meaning, it can only exist when applied to an element (or potentially a
      block).
    </p>
    <p>In classic BEM, a modifier looks like:
      <code>d-modal__header--success</code>. This can quickly turn into very
      verbose HTML. Imagine an already long block-element name, for example:
  
      <p>
        <code>class="chat-message-creator__search-container"</code>
      </p>
  
      With classic BEM and 2 modifiers, it would look like this:
  
      <p>
        <code>class="chat-message-creator__search-container
          chat-message-creator__search-container--highlighted
          chat-message-creator__search-container--inline"</code>
      </p>
  
      To avoid this, we decouple our modifiers from the BE parts of the classnames
      and use them as separate classes. So in the previous case with 2 modifiers
      this turns into:
      <p>
        <code>class="chat-message-creator__search-container --highlighted
          --inline"</code>
      </p>
  
      which is far more readable.
    </p>
  
    <h4>Special modifiers</h4>
    Some special prefixes are useful to identify modifiers as temporary states or
    condition. These are:
    <ul>
      <li><code>is-foo</code> = example: is-open</li>
      <li><code>has-foo</code> = example: has-errors</li>
    </ul>
  
    <h3>In Code</h3>
    <p>Even though the BEM convention avoids nesting, we can use SCSS to write the
      code nested. This is to taste, but I find it easier to read and write,
      because it will keep all relevant elements and modifiers grouped together
      and avoids unnecessary repetition of the block class.</p>
  </div>
  */
  {
    "id": "kzrdquNv",
    "block": "[[[10,0],[14,0,\"section-description\"],[12],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    The guidelines outlines below strive to bring structure and consistency to\\n    our classnames. Additionally, with this approach the nesting of css is\\n    firmly reduced. BEM stands for:\\n    \"],[10,\"ul\"],[12],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"Block\"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"Element\"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"Modifier\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"We use a slightly modified version of the BEM classname format.\"],[13],[1,\"\\n  \"],[10,\"h3\"],[12],[1,\"Block\"],[13],[1,\"\\n  For example\\n  \"],[10,\"strong\"],[12],[10,\"code\"],[12],[1,\"d-modal\"],[13],[13],[1,\"\\n  \"],[10,2],[12],[1,\"A block is a standalone component. Blocks can be used within blocks. It\\n    should be a \\\"top-level\\\" element, which could be used in its entirety in\\n    another place of the app. It has no dependencies on any parent class.\"],[13],[1,\"\\n  \"],[10,\"h3\"],[12],[1,\"Element\"],[13],[1,\"\\n  For example\\n  \"],[10,\"strong\"],[12],[10,\"code\"],[12],[1,\"d-modal__header\"],[13],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    An element is a part of a block that can not be used outside that context.\\n    They because it depends on the parent class and can not be used standalone\\n    outside this context. In the example above, an element with class\\n    \"],[10,\"code\"],[12],[1,\"d-modal__header\"],[13],[1,\"\\n    will only work within the d-modal block, but not when placed elsewhere.\\n  \"],[13],[1,\"\\n  \"],[10,\"h3\"],[12],[1,\"Modifiers\"],[13],[1,\"\\n  Examples\\n  \"],[10,\"strong\"],[12],[10,\"code\"],[12],[1,\"--success\"],[13],[1,\",\\n    \"],[10,\"code\"],[12],[1,\"--large\"],[13],[1,\",\"],[10,\"code\"],[12],[1,\"--inline\"],[13],[1,\",\\n    \"],[10,\"code\"],[12],[1,\"--highlighted\"],[13],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    A modifier is used mainly for changing the appearance, if different than the\\n    default. It is less than an element, and has no html structure of it own.\\n    Meaning, it can only exist when applied to an element (or potentially a\\n    block).\\n  \"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"In classic BEM, a modifier looks like:\\n    \"],[10,\"code\"],[12],[1,\"d-modal__header--success\"],[13],[1,\". This can quickly turn into very\\n    verbose HTML. Imagine an already long block-element name, for example:\\n\\n    \"],[10,2],[12],[1,\"\\n      \"],[10,\"code\"],[12],[1,\"class=\\\"chat-message-creator__search-container\\\"\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    With classic BEM and 2 modifiers, it would look like this:\\n\\n    \"],[10,2],[12],[1,\"\\n      \"],[10,\"code\"],[12],[1,\"class=\\\"chat-message-creator__search-container\\n        chat-message-creator__search-container--highlighted\\n        chat-message-creator__search-container--inline\\\"\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    To avoid this, we decouple our modifiers from the BE parts of the classnames\\n    and use them as separate classes. So in the previous case with 2 modifiers\\n    this turns into:\\n    \"],[10,2],[12],[1,\"\\n      \"],[10,\"code\"],[12],[1,\"class=\\\"chat-message-creator__search-container --highlighted\\n        --inline\\\"\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    which is far more readable.\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"h4\"],[12],[1,\"Special modifiers\"],[13],[1,\"\\n  Some special prefixes are useful to identify modifiers as temporary states or\\n  condition. These are:\\n  \"],[10,\"ul\"],[12],[1,\"\\n    \"],[10,\"li\"],[12],[10,\"code\"],[12],[1,\"is-foo\"],[13],[1,\" = example: is-open\"],[13],[1,\"\\n    \"],[10,\"li\"],[12],[10,\"code\"],[12],[1,\"has-foo\"],[13],[1,\" = example: has-errors\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"h3\"],[12],[1,\"In Code\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"Even though the BEM convention avoids nesting, we can use SCSS to write the\\n    code nested. This is to taste, but I find it easier to read and write,\\n    because it will keep all relevant elements and modifiers grouped together\\n    and avoids unnecessary repetition of the block class.\"],[13],[1,\"\\n\"],[13]],[],false,[]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/sections/syntax/00-bem.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/styleguide-example", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _templateFactory) {
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
    <section class="styleguide-example">
    <div class="example-title">{{@title}}</div>
    <section class="rendered">{{yield this.value}}</section>
  </section>
  */
  {
    "id": "sVgBJ4xW",
    "block": "[[[10,\"section\"],[14,0,\"styleguide-example\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"example-title\"],[12],[1,[30,1]],[13],[1,\"\\n  \"],[10,\"section\"],[14,0,\"rendered\"],[12],[18,2,[[30,0,[\"value\"]]]],[13],[1,\"\\n\"],[13]],[\"@title\",\"&default\"],false,[\"yield\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/styleguide-example.hbs",
    "isStrictMode": false
  });
  let StyleguideExample = _exports.default = (_class = class StyleguideExample extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "value", _descriptor, this);
      this.value = this.args.initialValue;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "value", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  })), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, StyleguideExample);
});
define("discourse/plugins/styleguide/discourse/components/styleguide-icons", ["exports", "@ember/component", "discourse-common/lib/icon-library", "discourse-common/lib/later", "discourse-common/utils/decorators", "@ember/template-factory"], function (_exports, _component, _iconLibrary, _later, _decorators, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _obj;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#each this.iconIds as |id|}}
    <div class="styleguide-icon">
      {{d-icon id}}
      <span>{{id}}</span>
    </div>
  {{/each}}
  */
  {
    "id": "MKh00Zdb",
    "block": "[[[42,[28,[37,1],[[28,[37,1],[[30,0,[\"iconIds\"]]],null]],null],null,[[[1,\"  \"],[10,0],[14,0,\"styleguide-icon\"],[12],[1,\"\\n    \"],[1,[28,[35,2],[[30,1]],null]],[1,\"\\n    \"],[10,1],[12],[1,[30,1]],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[1]],null]],[\"id\"],false,[\"each\",\"-track-array\",\"d-icon\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/styleguide-icons.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, _component.default.extend((_obj = {
    tagName: "section",
    classNames: ["styleguide-icons"],
    iconIds: [],
    init() {
      this._super(...arguments);
      this.setIconIds();
    },
    setIconIds() {
      let symbols = document.querySelectorAll("#svg-sprites symbol");
      if (symbols.length > 0) {
        let ids = Array.from(symbols).mapBy("id");
        ids.push(...Object.keys(_iconLibrary.REPLACEMENTS));
        this.set("iconIds", [...new Set(ids.sort())]);
      } else {
        // Let's try again a short time later if there are no svgs loaded yet
        (0, _later.default)(this, this.setIconIds, 1500);
      }
    }
  }, (_applyDecoratedDescriptor(_obj, "setIconIds", [_decorators.afterRender], Object.getOwnPropertyDescriptor(_obj, "setIconIds"), _obj)), _obj)));
});
define("discourse/plugins/styleguide/discourse/components/styleguide-link", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <LinkTo
    @route="styleguide.show"
    @models={{array @section.category @section.id}}
  >
    {{section-title @section.id}}
  </LinkTo>
  */
  {
    "id": "qJITl+1/",
    "block": "[[[8,[39,0],null,[[\"@route\",\"@models\"],[\"styleguide.show\",[28,[37,1],[[30,1,[\"category\"]],[30,1,[\"id\"]]],null]]],[[\"default\"],[[[[1,\"\\n  \"],[1,[28,[35,2],[[30,1,[\"id\"]]],null]],[1,\"\\n\"]],[]]]]]],[\"@section\"],false,[\"link-to\",\"array\",\"section-title\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/styleguide-link.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/styleguide-markdown", ["exports", "@ember/component", "jquery", "discourse/lib/text"], function (_exports, _component, _jquery, _text) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    didInsertElement() {
      this._super(...arguments);
      const contents = (0, _jquery.default)(this.element).html();
      (0, _text.cook)(contents).then(cooked => (0, _jquery.default)(this.element).html(cooked.toString()));
    }
  });
});
define("discourse/plugins/styleguide/discourse/components/styleguide-section", ["exports", "@ember/component", "discourse-common/utils/decorators", "@ember/template-factory"], function (_exports, _component, _decorators, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _obj;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <h1 class="section-title">
    {{#if this.section}}
      {{section-title this.section.id}}
    {{else}}
      {{i18n this.title}}
    {{/if}}
  </h1>
  
  <div class="styleguide-section-contents">
    {{yield}}
  </div>
  */
  {
    "id": "xCbxkGmV",
    "block": "[[[10,\"h1\"],[14,0,\"section-title\"],[12],[1,\"\\n\"],[41,[30,0,[\"section\"]],[[[1,\"    \"],[1,[28,[35,1],[[30,0,[\"section\",\"id\"]]],null]],[1,\"\\n\"]],[]],[[[1,\"    \"],[1,[28,[35,2],[[30,0,[\"title\"]]],null]],[1,\"\\n\"]],[]]],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"styleguide-section-contents\"],[12],[1,\"\\n  \"],[18,1,null],[1,\"\\n\"],[13]],[\"&default\"],false,[\"if\",\"section-title\",\"i18n\",\"yield\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/styleguide-section.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, _component.default.extend((_dec = (0, _decorators.default)("section"), (_obj = {
    tagName: "section",
    classNameBindings: [":styleguide-section", "sectionClass"],
    didReceiveAttrs() {
      this._super(...arguments);
      window.scrollTo(0, 0);
    },
    sectionClass(section) {
      if (section) {
        return `${section.id}-examples`;
      }
    }
  }, (_applyDecoratedDescriptor(_obj, "sectionClass", [_dec], Object.getOwnPropertyDescriptor(_obj, "sectionClass"), _obj)), _obj))));
});
define("discourse/plugins/styleguide/discourse/components/styleguide/calendar-date-time-input", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="<CalendarDateTimeInput>">
    <Styleguide::Component>
      <CalendarDateTimeInput
        @datePickerId="styleguide"
        @date={{this.date}}
        @time={{this.time}}
        @minDate={{this.minDate}}
        @timeFormat={{this.timeFormat}}
        @dateFormat={{this.dateFormat}}
        @onChangeDate={{action this.changeDate}}
        @onChangeTime={{action this.changeTime}}
      />
    </Styleguide::Component>
  
    <Styleguide::Controls>
      <Styleguide::Controls::Row @name="Min date">
        <DatePicker @defaultDate="YYYY-MM-DD" @value={{this.minDate}} />
      </Styleguide::Controls::Row>
  
      <Styleguide::Controls::Row @name="Date">
        <DatePicker @defaultDate="YYYY-MM-DD" @value={{this.date}} />
      </Styleguide::Controls::Row>
  
      <Styleguide::Controls::Row @name="Time">
        <Input
          maxlength={{5}}
          placeholder="hh:mm"
          @type="time"
          @value={{this.time}}
          class="time-picker"
        />
      </Styleguide::Controls::Row>
    </Styleguide::Controls>
  </StyleguideExample>
  */
  {
    "id": "+6AItawN",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"<CalendarDateTimeInput>\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@datePickerId\",\"@date\",\"@time\",\"@minDate\",\"@timeFormat\",\"@dateFormat\",\"@onChangeDate\",\"@onChangeTime\"],[\"styleguide\",[30,0,[\"date\"]],[30,0,[\"time\"]],[30,0,[\"minDate\"]],[30,0,[\"timeFormat\"]],[30,0,[\"dateFormat\"]],[28,[37,3],[[30,0],[30,0,[\"changeDate\"]]],null],[28,[37,3],[[30,0],[30,0,[\"changeTime\"]]],null]]],null],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,4],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[39,5],null,[[\"@name\"],[\"Min date\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@defaultDate\",\"@value\"],[\"YYYY-MM-DD\",[30,0,[\"minDate\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[8,[39,5],null,[[\"@name\"],[\"Date\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,6],null,[[\"@defaultDate\",\"@value\"],[\"YYYY-MM-DD\",[30,0,[\"date\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[8,[39,5],null,[[\"@name\"],[\"Time\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,7],[[16,\"maxlength\",5],[24,\"placeholder\",\"hh:mm\"],[24,0,\"time-picker\"]],[[\"@type\",\"@value\"],[\"time\",[30,0,[\"time\"]]]],null],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]]],[],false,[\"styleguide-example\",\"styleguide/component\",\"calendar-date-time-input\",\"action\",\"styleguide/controls\",\"styleguide/controls/row\",\"date-picker\",\"input\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/styleguide/calendar-date-time-input.hbs",
    "isStrictMode": false
  });
  let StyleguideCalendarDateTimeInput = _exports.default = (_class = class StyleguideCalendarDateTimeInput extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "currentUser", _descriptor, this);
      _initializerDefineProperty(this, "dateFormat", _descriptor2, this);
      _initializerDefineProperty(this, "timeFormat", _descriptor3, this);
      _initializerDefineProperty(this, "date", _descriptor4, this);
      _initializerDefineProperty(this, "time", _descriptor5, this);
      _initializerDefineProperty(this, "minDate", _descriptor6, this);
    }
    changeDate(date) {
      this.date = date;
    }
    changeTime(time) {
      this.time = time;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "currentUser", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "dateFormat", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "YYYY-MM-DD";
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "timeFormat", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "HH:mm:ss";
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "date", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "time", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "minDate", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "changeDate", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeDate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeTime", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeTime"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, StyleguideCalendarDateTimeInput);
});
define("discourse/plugins/styleguide/discourse/components/styleguide/component", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="styleguide__component">
    {{#if @tag}}
      <span class="styleguide__component-tag">{{@tag}}</span>
    {{/if}}
  
    {{#if (has-block "title")}}
      <div class="styleguide__component-title">
        {{yield to="title"}}
      </div>
    {{/if}}
  
    {{#if (or (has-block) (has-block "sample"))}}
      <div class="styleguide__component-sample">
        {{#if (has-block)}}
          {{yield}}
        {{/if}}
  
        {{#if (has-block "sample")}}
          {{yield to="sample"}}
        {{/if}}
      </div>
    {{/if}}
  
    {{#if (has-block "actions")}}
      <div class="styleguide__component-actions">
        {{yield to="actions"}}
      </div>
    {{/if}}
  
    {{#if (has-block "code")}}
      <div class="styleguide__component-code">
        {{yield to="code"}}
      </div>
    {{/if}}
  </div>
  */
  {
    "id": "G1tq0gKZ",
    "block": "[[[10,0],[14,0,\"styleguide__component\"],[12],[1,\"\\n\"],[41,[30,1],[[[1,\"    \"],[10,1],[14,0,\"styleguide__component-tag\"],[12],[1,[30,1]],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[48,[30,2]],[[[1,\"    \"],[10,0],[14,0,\"styleguide__component-title\"],[12],[1,\"\\n      \"],[18,2,null],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[28,[37,3],[[48,[30,3]],[48,[30,4]]],null],[[[1,\"    \"],[10,0],[14,0,\"styleguide__component-sample\"],[12],[1,\"\\n\"],[41,[48,[30,3]],[[[1,\"        \"],[18,3,null],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[48,[30,4]],[[[1,\"        \"],[18,4,null],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[48,[30,5]],[[[1,\"    \"],[10,0],[14,0,\"styleguide__component-actions\"],[12],[1,\"\\n      \"],[18,5,null],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[48,[30,6]],[[[1,\"    \"],[10,0],[14,0,\"styleguide__component-code\"],[12],[1,\"\\n      \"],[18,6,null],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[13]],[\"@tag\",\"&title\",\"&default\",\"&sample\",\"&actions\",\"&code\"],false,[\"if\",\"has-block\",\"yield\",\"or\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/styleguide/component.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/styleguide/controls", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <table class="component-properties">
    <tbody>
      {{yield}}
    </tbody>
  </table>
  */
  {
    "id": "tys+irqo",
    "block": "[[[10,\"table\"],[14,0,\"component-properties\"],[12],[1,\"\\n  \"],[10,\"tbody\"],[12],[1,\"\\n    \"],[18,1,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/styleguide/controls.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/styleguide/controls/row", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <tr class="component-properties__row">
    {{#if @name}}
      <td class="component-properties__cell">{{@name}}</td>
    {{/if}}
    <td class="component-properties__cell">
      {{yield}}
    </td>
  </tr>
  */
  {
    "id": "oXArDJXM",
    "block": "[[[10,\"tr\"],[14,0,\"component-properties__row\"],[12],[1,\"\\n\"],[41,[30,1],[[[1,\"    \"],[10,\"td\"],[14,0,\"component-properties__cell\"],[12],[1,[30,1]],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[10,\"td\"],[14,0,\"component-properties__cell\"],[12],[1,\"\\n    \"],[18,2,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@name\",\"&default\"],false,[\"if\",\"yield\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/styleguide/controls/row.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/styleguide/controls/toggle", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <DToggleSwitch @state={{@enabled}} {{on "click" @action}} />
  */
  {
    "id": "vVeONkPX",
    "block": "[[[8,[39,0],[[4,[38,1],[\"click\",[30,2]],null]],[[\"@state\"],[[30,1]]],null]],[\"@enabled\",\"@action\"],false,[\"d-toggle-switch\",\"on\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/styleguide/controls/toggle.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
define("discourse/plugins/styleguide/discourse/components/toggle-color-mode", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "discourse/lib/color-scheme-picker", "discourse/lib/theme-selector", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _service, _colorSchemePicker, _themeSelector, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if this.shouldRender}}
    <DButton @action={{this.toggle}} class="toggle-color-mode">Toggle color</DButton>
  {{/if}}
  */
  {
    "id": "kvQ1IBY8",
    "block": "[[[41,[30,0,[\"shouldRender\"]],[[[1,\"  \"],[8,[39,1],[[24,0,\"toggle-color-mode\"]],[[\"@action\"],[[30,0,[\"toggle\"]]]],[[\"default\"],[[[[1,\"Toggle color\"]],[]]]]],[1,\"\\n\"]],[]],null]],[],false,[\"if\",\"d-button\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/components/toggle-color-mode.hbs",
    "isStrictMode": false
  });
  const DARK = "dark";
  const LIGHT = "light";
  function colorSchemeOverride(type) {
    const lightScheme = document.querySelector("link.light-scheme");
    const darkScheme = document.querySelector("link.dark-scheme") || document.querySelector("link#cs-preview-dark");
    if (!lightScheme && !darkScheme) {
      return;
    }
    switch (type) {
      case DARK:
        lightScheme.origMedia = lightScheme.media;
        lightScheme.media = "none";
        darkScheme.origMedia = darkScheme.media;
        darkScheme.media = "all";
        break;
      case LIGHT:
        lightScheme.origMedia = lightScheme.media;
        lightScheme.media = "all";
        darkScheme.origMedia = darkScheme.media;
        darkScheme.media = "none";
        break;
      default:
        if (lightScheme.origMedia) {
          lightScheme.media = lightScheme.origMedia;
          lightScheme.removeAttribute("origMedia");
        }
        if (darkScheme.origMedia) {
          darkScheme.media = darkScheme.origMedia;
          darkScheme.removeAttribute("origMedia");
        }
        break;
    }
  }
  let ToggleColorMode = _exports.default = (_class = class ToggleColorMode extends _component2.default {
    constructor() {
      super(...arguments);

      // If site has a dark color scheme set but user doesn't auto switch in dark mode
      // we need to load the stylesheet manually
      _initializerDefineProperty(this, "keyValueStore", _descriptor, this);
      _initializerDefineProperty(this, "siteSettings", _descriptor2, this);
      _initializerDefineProperty(this, "colorSchemeOverride", _descriptor3, this);
      _initializerDefineProperty(this, "shouldRender", _descriptor4, this);
      if (!document.querySelector("link.dark-scheme")) {
        if (this.siteSettings.default_dark_mode_color_scheme_id > 0) {
          (0, _colorSchemePicker.loadColorSchemeStylesheet)(this.siteSettings.default_dark_mode_color_scheme_id, (0, _themeSelector.currentThemeId)(), true);
        } else {
          // no dark color scheme available, hide button
          this.shouldRender = false;
        }
      }
    }
    get default() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK : LIGHT;
    }
    toggle() {
      this.colorSchemeOverride = this.colorSchemeOverride === DARK ? LIGHT : DARK;
      colorSchemeOverride(this.colorSchemeOverride);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "keyValueStore", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "siteSettings", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "colorSchemeOverride", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.default;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "shouldRender", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggle", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggle"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ToggleColorMode);
});
define("discourse/plugins/styleguide/discourse/controllers/styleguide-show", ["exports", "@ember/controller", "@ember/object"], function (_exports, _controller, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  let StyleguideShow = _exports.default = (_class = class StyleguideShow extends _controller.default {
    dummyAction() {}
  }, (_applyDecoratedDescriptor(_class.prototype, "dummyAction", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "dummyAction"), _class.prototype)), _class);
});
define("discourse/plugins/styleguide/discourse/controllers/styleguide", ["exports", "@ember/controller"], function (_exports, _controller) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Styleguide extends _controller.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "sections", null);
    }
  }
  _exports.default = Styleguide;
});
define("discourse/plugins/styleguide/discourse/helpers/section-title", ["exports", "@ember/component/helper", "discourse-i18n"], function (_exports, _helper, _discourseI18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _helper.default.helper(function (params) {
    return _discourseI18n.default.t(`styleguide.sections.${params[0].replace(/\-/g, "_")}.title`);
  });
});
define("discourse/plugins/styleguide/discourse/lib/dummy-data", ["exports", "discourse/models/nav-item"], function (_exports, _navItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.createData = createData;
  let topicId = 2000000;
  let userId = 1000000;
  let _data;
  function createData(store) {
    if (_data) {
      return _data;
    }
    let categories = [{
      id: 1234,
      name: "Fruit",
      description_excerpt: "All about various kinds of fruit",
      color: "ff0",
      slug: "fruit"
    }, {
      id: 2345,
      name: "Vegetables",
      description_excerpt: "Full of delicious vitamins",
      color: "f00",
      slug: "vegetables"
    }, {
      id: 3456,
      name: "Beverages",
      description_excerpt: "Thirsty?",
      color: "99f",
      slug: "beverages",
      read_restricted: true
    }].map(c => store.createRecord("category", c));
    let createUser = attrs => {
      userId++;
      let userData = {
        id: userId,
        username: `user_${userId}`,
        name: "John Doe",
        avatar_template: "/images/avatar.png",
        website: "discourse.com",
        website_name: "My Website is Discourse",
        location: "Toronto",
        suspend_reason: "Some reason",
        groups: [{
          name: "Group 1"
        }, {
          name: "Group 2"
        }],
        created_at: moment().subtract(10, "days"),
        last_posted_at: moment().subtract(3, "days"),
        last_seen_at: moment().subtract(1, "days"),
        profile_view_count: 378,
        invited_by: {
          username: "user_2"
        },
        trust_level: 1,
        publicUserFields: [{
          field: {
            dasherized_name: "puf_1",
            name: "Public User Field 1"
          },
          value: "Some value 1"
        }, {
          field: {
            dasherized_name: "puf_2",
            name: "Public User Field 2"
          },
          value: "Some value 2"
        }]
      };
      Object.assign(userData, attrs || {});
      return store.createRecord("user", userData);
    };

    // This bg image is public domain: http://hubblesite.org/image/3999/gallery
    let user = createUser({
      profile_background: "/plugins/styleguide/images/hubble-orion-nebula-bg.jpg",
      has_profile_background: true
    });
    let createTopic = attrs => {
      topicId++;
      return store.createRecord("topic", Object.assign({
        id: topicId,
        title: `Example Topic Title ${topicId}`,
        fancy_title: `Example Topic Title ${topicId}`,
        slug: `example-topic-title-${topicId}`,
        posts_count: topicId * 1234 % 100 + 1,
        views: topicId * 123 % 1000 + 1,
        like_count: topicId % 3,
        created_at: `2017-03-${topicId % 30}T12:30:00.000Z`,
        visible: true,
        posters: [{
          extras: "latest",
          user
        }, {
          user: createUser()
        }, {
          user: createUser()
        }, {
          user: createUser()
        }, {
          user: createUser()
        }]
      }, attrs || {}));
    };
    let topic = createTopic({
      tags: ["example", "apple"]
    });
    topic.details.updateFromJson({
      can_create_post: true,
      can_invite_to: false,
      can_delete: false,
      can_close_topic: false
    });
    topic.setProperties({
      category_id: categories[0].id,
      suggested_topics: [topic, topic, topic]
    });
    let invisibleTopic = createTopic({
      visible: false
    });
    let closedTopic = createTopic({
      closed: true
    });
    closedTopic.set("category_id", categories[1].id);
    let archivedTopic = createTopic({
      archived: true
    });
    let pinnedTopic = createTopic({
      pinned: true
    });
    pinnedTopic.set("clearPin", () => pinnedTopic.set("pinned", "unpinned"));
    pinnedTopic.set("rePin", () => pinnedTopic.set("pinned", "pinned"));
    pinnedTopic.set("category_id", categories[2].id);
    let unpinnedTopic = createTopic({
      unpinned: true
    });
    let warningTopic = createTopic({
      is_warning: true
    });
    const bunchOfTopics = [topic, invisibleTopic, closedTopic, archivedTopic, pinnedTopic, unpinnedTopic, warningTopic];
    let sentence = "Donec viverra lacus id sapien aliquam, tempus tincidunt urna porttitor.";
    let cooked = `<p>Lorem ipsum dolor sit amet, et nec quis viderer prompta, ex omnium ponderum insolens eos, sed discere invenire principes in. Fuisset constituto per ad. Est no scripta propriae facilisis, viderer impedit deserunt in mel. Quot debet facilisis ne vix, nam in detracto tacimates. At quidam petentium vulputate pro. Alia iudico repudiandae ad vel, erat omnis epicuri eos id. Et illum dolor graeci vel, quo feugiat consulatu ei.</p>

    <p>Case everti equidem ius ea, ubique veritus vim id. Eros omnium conclusionemque qui te, usu error alienum imperdiet ut, ex ius meis adipisci. Libris reprehendunt eos ex, mea at nisl suavitate. Altera virtute democritum pro cu, melius latine in ius.</p>`;
    let transformedPost = {
      id: 1234,
      cooked,
      created_at: moment().subtract(3, "days"),
      user_id: user.id,
      username: user.username,
      avatar_template: user.avatar_template,
      showLike: true,
      canToggleLike: true,
      canFlag: true,
      canEdit: false,
      canCreatePost: true,
      canBookmark: true,
      canManage: true,
      canDelete: true,
      createdByUsername: user.username,
      createdByAvatarTemplate: user.avatar_template,
      lastPostUsername: user.username,
      lastPostAvatarTemplate: user.avatar_template,
      topicReplyCount: 123,
      topicViews: 3456,
      participantCount: 10,
      topicLikeCount: 14,
      topicLinkLength: 5,
      topicPostsCount: 4,
      participants: [createUser(), createUser(), createUser(), createUser()],
      post_number: 1,
      topicLinks: [{
        title: "Evil Trout",
        url: "https://eviltrout.com",
        domain: "eviltrout.com",
        clicks: 1024
      }, {
        title: "Cool Site",
        url: "http://coolsite.example.com",
        domain: "coolsite.example.com",
        clicks: 512
      }]
    };
    const postModel = store.createRecord("post", {
      ...transformedPost,
      topic: createTopic()
    });
    _data = {
      options: [{
        id: 1,
        name: "Orange"
      }, {
        id: 2,
        name: "Blue"
      }, {
        id: 3,
        name: "Red"
      }, {
        id: 4,
        name: "Yellow"
      }],
      categories,
      buttonSizes: [{
        class: "btn-large",
        text: "large"
      }, {
        class: "btn-default",
        text: "default"
      }, {
        class: "btn-small",
        text: "small"
      }],
      buttonStates: [{
        class: "btn-hover",
        text: "hover"
      }, {
        class: "btn-active",
        text: "active"
      }, {
        disabled: true,
        text: "disabled"
      }],
      toggleSwitchState: true,
      navItems: ["latest", "categories", "top"].map(name => {
        let item = _navItem.default.fromText(name);

        // item.set("href", "#");

        if (name === "categories") {
          item.set("styleGuideActive", true);
        }
        return item;
      }),
      topic,
      invisibleTopic,
      closedTopic,
      archivedTopic,
      pinnedTopic,
      unpinnedTopic,
      warningTopic,
      topics: bunchOfTopics,
      sentence,
      short_sentence: "Lorem ipsum dolor sit amet.",
      soon: moment().add(2, "days"),
      transformedPost,
      postModel,
      user,
      userWithUnread: createUser({
        unread_notifications: 3,
        unread_high_priority_notifications: 7
      }),
      lorem: cooked,
      shortLorem: "Lorem ipsum dolor sit amet, et nec quis viderer prompta, ex omnium ponderum insolens eos, sed discere invenire principes in. Fuisset constituto per ad. Est no scripta propriae facilisis, viderer impedit deserunt in mel. Quot debet facilisis ne vix, nam in detracto tacimates. At quidam petentium vulputate pro. Alia iudico repudiandae ad vel, erat omnis epicuri eos id. Et illum dolor graeci vel, quo feugiat consulatu ei.",
      topicTimerUpdateDate: "2017-10-18 18:00",
      groups: [{
        name: "staff",
        id: 1,
        automatic: false
      }, {
        name: "lounge",
        id: 2,
        automatic: true
      }, {
        name: "admin",
        id: 3,
        automatic: false
      }],
      groupNames: ["staff", "lounge", "admin"],
      selectedGroups: [1, 2],
      settings: "bold|italic|strike|underline",
      colors: "f49|c89|564897",
      charCounterContent: "",
      selectedTags: ["apple", "orange", "potato"]
    };
    return _data;
  }
});
define("discourse/plugins/styleguide/discourse/lib/styleguide", ["exports", "discourse/plugins/styleguide/discourse/components/sections/atoms/00-typography", "discourse/plugins/styleguide/discourse/components/sections/atoms/01-font-scale", "discourse/plugins/styleguide/discourse/components/sections/atoms/02-buttons", "discourse/plugins/styleguide/discourse/components/sections/atoms/03-colors", "discourse/plugins/styleguide/discourse/components/sections/atoms/04-icons", "discourse/plugins/styleguide/discourse/components/sections/atoms/05-input-fields", "discourse/plugins/styleguide/discourse/components/sections/atoms/06-spinners", "discourse/plugins/styleguide/discourse/components/sections/atoms/date-time-inputs", "discourse/plugins/styleguide/discourse/components/sections/atoms/dropdowns", "discourse/plugins/styleguide/discourse/components/sections/atoms/topic-link", "discourse/plugins/styleguide/discourse/components/sections/atoms/topic-statuses", "discourse/plugins/styleguide/discourse/components/sections/molecules/bread-crumbs", "discourse/plugins/styleguide/discourse/components/sections/molecules/categories", "discourse/plugins/styleguide/discourse/components/sections/molecules/char-counter", "discourse/plugins/styleguide/discourse/components/sections/molecules/empty-state", "discourse/plugins/styleguide/discourse/components/sections/molecules/footer-message", "discourse/plugins/styleguide/discourse/components/sections/molecules/header-icons", "discourse/plugins/styleguide/discourse/components/sections/molecules/menus", "discourse/plugins/styleguide/discourse/components/sections/molecules/navigation-bar", "discourse/plugins/styleguide/discourse/components/sections/molecules/navigation-stacked", "discourse/plugins/styleguide/discourse/components/sections/molecules/post-menu", "discourse/plugins/styleguide/discourse/components/sections/molecules/signup-cta", "discourse/plugins/styleguide/discourse/components/sections/molecules/toasts", "discourse/plugins/styleguide/discourse/components/sections/molecules/tooltips", "discourse/plugins/styleguide/discourse/components/sections/molecules/topic-list-item", "discourse/plugins/styleguide/discourse/components/sections/molecules/topic-notifications", "discourse/plugins/styleguide/discourse/components/sections/molecules/topic-timer-info", "discourse/plugins/styleguide/discourse/components/sections/organisms/00-post", "discourse/plugins/styleguide/discourse/components/sections/organisms/01-topic-map", "discourse/plugins/styleguide/discourse/components/sections/organisms/03-topic-footer-buttons", "discourse/plugins/styleguide/discourse/components/sections/organisms/04-topic-list", "discourse/plugins/styleguide/discourse/components/sections/organisms/basic-topic-list", "discourse/plugins/styleguide/discourse/components/sections/organisms/categories-list", "discourse/plugins/styleguide/discourse/components/sections/organisms/modal", "discourse/plugins/styleguide/discourse/components/sections/organisms/navigation", "discourse/plugins/styleguide/discourse/components/sections/organisms/site-header", "discourse/plugins/styleguide/discourse/components/sections/organisms/suggested-topics", "discourse/plugins/styleguide/discourse/components/sections/organisms/user-about", "discourse/plugins/styleguide/discourse/components/sections/syntax/00-bem"], function (_exports, _typography, _fontScale, _buttons, _colors, _icons, _inputFields, _spinners, _dateTimeInputs, _dropdowns, _topicLink, _topicStatuses, _breadCrumbs, _categories, _charCounter, _emptyState, _footerMessage, _headerIcons, _menus, _navigationBar, _navigationStacked, _postMenu, _signupCta, _toasts, _tooltips, _topicListItem, _topicNotifications, _topicTimerInfo, _post, _topicMap, _topicFooterButtons, _topicList, _basicTopicList, _categoriesList, _modal, _navigation, _siteHeader, _suggestedTopics, _userAbout, _bem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CATEGORIES = void 0;
  _exports.addSection = addSection;
  _exports.allCategories = allCategories;
  _exports.sectionById = sectionById;
  let _allCategories = null;
  let _sectionsById = {};
  const CATEGORIES = _exports.CATEGORIES = ["syntax", "atoms", "molecules", "organisms"];
  const SECTIONS = [{
    component: _bem.default,
    category: "syntax",
    id: "bem",
    priority: 0
  }, {
    component: _typography.default,
    category: "atoms",
    id: "typography",
    priority: 0
  }, {
    component: _fontScale.default,
    category: "atoms",
    id: "font-scale",
    priority: 1
  }, {
    component: _buttons.default,
    category: "atoms",
    id: "buttons",
    priority: 2
  }, {
    component: _colors.default,
    category: "atoms",
    id: "colors",
    priority: 3
  }, {
    component: _icons.default,
    category: "atoms",
    id: "icons",
    priority: 4
  }, {
    component: _inputFields.default,
    category: "atoms",
    id: "input-fields",
    priority: 5
  }, {
    component: _spinners.default,
    category: "atoms",
    id: "spinners",
    priority: 6
  }, {
    component: _dateTimeInputs.default,
    category: "atoms",
    id: "date-time-inputs"
  }, {
    component: _dropdowns.default,
    category: "atoms",
    id: "dropdowns"
  }, {
    component: _topicLink.default,
    category: "atoms",
    id: "topic-link"
  }, {
    component: _topicStatuses.default,
    category: "atoms",
    id: "topic-statuses"
  }, {
    component: _breadCrumbs.default,
    category: "molecules",
    id: "bread-crumbs"
  }, {
    component: _categories.default,
    category: "molecules",
    id: "categories"
  }, {
    component: _charCounter.default,
    category: "molecules",
    id: "char-counter"
  }, {
    component: _emptyState.default,
    category: "molecules",
    id: "empty-state"
  }, {
    component: _footerMessage.default,
    category: "molecules",
    id: "footer-message"
  }, {
    component: _headerIcons.default,
    category: "molecules",
    id: "header-icons"
  }, {
    component: _navigationBar.default,
    category: "molecules",
    id: "navigation-bar"
  }, {
    component: _navigationStacked.default,
    category: "molecules",
    id: "navigation-stacked"
  }, {
    component: _postMenu.default,
    category: "molecules",
    id: "post-menu"
  }, {
    component: _tooltips.default,
    category: "molecules",
    id: "tooltips"
  }, {
    component: _menus.default,
    category: "molecules",
    id: "menus"
  }, {
    component: _toasts.default,
    category: "molecules",
    id: "toasts"
  }, {
    component: _signupCta.default,
    category: "molecules",
    id: "signup-cta"
  }, {
    component: _topicListItem.default,
    category: "molecules",
    id: "topic-list-item"
  }, {
    component: _topicNotifications.default,
    category: "molecules",
    id: "topic-notifications"
  }, {
    component: _topicTimerInfo.default,
    category: "molecules",
    id: "topic-timer-info"
  }, {
    component: _post.default,
    category: "organisms",
    id: "post",
    priority: 0
  }, {
    component: _topicMap.default,
    category: "organisms",
    id: "topic-map",
    priority: 1
  }, {
    component: _topicFooterButtons.default,
    category: "organisms",
    id: "topic-footer-buttons",
    priority: 3
  }, {
    component: _topicList.default,
    category: "organisms",
    id: "topic-list",
    priority: 4
  }, {
    component: _basicTopicList.default,
    category: "organisms",
    id: "basic-topic-list"
  }, {
    component: _categoriesList.default,
    category: "organisms",
    id: "categories-list"
  }, {
    component: _modal.default,
    category: "organisms",
    id: "modal"
  }, {
    component: _navigation.default,
    category: "organisms",
    id: "navigation"
  }, {
    component: _siteHeader.default,
    category: "organisms",
    id: "site-header"
  }, {
    component: _suggestedTopics.default,
    category: "organisms",
    id: "suggested-topics"
  }, {
    component: _userAbout.default,
    category: "organisms",
    id: "user-about"
  }];
  function addSection(section) {
    if (!SECTIONS.some(s => s.id === section.id)) {
      SECTIONS.push(section);
    }
  }
  function sectionById(id) {
    // prime cache
    allCategories();
    return _sectionsById[id];
  }
  function sortSections(a, b) {
    const result = a.priority - b.priority;
    if (result !== 0) {
      return result;
    }
    return a.id < b.id ? -1 : 1;
  }
  function allCategories() {
    if (_allCategories) {
      return _allCategories;
    }
    for (const section of SECTIONS) {
      section.priority ??= 100;
      _categories.default[section.category] ||= [];
      _categories.default[section.category].push(section);
      _sectionsById[section.id] = section;
    }
    _allCategories = [];
    for (const category of CATEGORIES) {
      const sections = _categories.default[category];
      if (sections) {
        _allCategories.push({
          id: category,
          sections: sections.sort(sortSections)
        });
      }
    }
    return _allCategories;
  }
});
define("discourse/plugins/styleguide/discourse/pre-initializers/styleguide-plugin-api", ["exports", "discourse/lib/plugin-api", "discourse/plugins/styleguide/discourse/lib/styleguide"], function (_exports, _pluginApi, _styleguide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /**
   * Add a section to the styleguide
   *
   * @function addStyleguideSection
   * @param {Object} section
   * @param {Component} section.component
   * @param {string} options.id
   * @param {string} options.category
   * @param {number} [options.priority]
   * @example
   *
   * import fidget from "../components/styleguide/molecules/fidget";
   *
   * api.addStyleguideSection({
   *   component: fidget,
   *   id: "fidget",
   *   category: "molecules",
   *   priority: 0,
   * });
   */
  var _default = _exports.default = {
    name: "styleguide-plugin-api",
    before: "inject-discourse-objects",
    initialize() {
      (0, _pluginApi.withPluginApi)("1.2.0", api => {
        const apiPrototype = Object.getPrototypeOf(api);
        if (!apiPrototype.hasOwnProperty("addStyleguideSection")) {
          Object.defineProperty(apiPrototype, "addStyleguideSection", {
            value(section) {
              (0, _styleguide.addSection)(section);
            }
          });
        }
      });
    }
  };
});
define("discourse/plugins/styleguide/discourse/routes/styleguide-show", ["exports", "@ember/routing/route", "discourse/plugins/styleguide/discourse/lib/dummy-data", "discourse/plugins/styleguide/discourse/lib/styleguide"], function (_exports, _route, _dummyData, _styleguide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class StyleguideShow extends _route.default {
    model(params) {
      return (0, _styleguide.sectionById)(params.section);
    }
    setupController(controller, section) {
      controller.setProperties({
        section,
        dummy: (0, _dummyData.createData)(this.store)
      });
    }
  }
  _exports.default = StyleguideShow;
});
define("discourse/plugins/styleguide/discourse/routes/styleguide", ["exports", "@ember/routing/route", "discourse/plugins/styleguide/discourse/lib/styleguide"], function (_exports, _route, _styleguide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class Styleguide extends _route.default {
    model() {
      return (0, _styleguide.allCategories)();
    }
    setupController(controller, categories) {
      controller.set("categories", categories);
    }
  }
  _exports.default = Styleguide;
});
define("discourse/plugins/styleguide/discourse/styleguide-route-map", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  function _default() {
    this.route("styleguide", function () {
      this.route("show", {
        path: ":category/:section"
      });
    });
  }
});
define("discourse/plugins/styleguide/discourse/templates/styleguide", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <section class="styleguide">
    <section class="styleguide-menu">
      <ToggleColorMode />
  
      {{#each this.categories as |c|}}
        <ul>
          <li class="styleguide-heading">
            {{i18n (concat "styleguide.categories." c.id)}}
          </li>
          {{#each c.sections as |s|}}
            <li><StyleguideLink @section={{s}} /></li>
          {{/each}}
        </ul>
      {{/each}}
    </section>
  
    <section class="styleguide-contents">
      {{outlet}}
    </section>
  </section>
  */
  {
    "id": "FvYERW+y",
    "block": "[[[10,\"section\"],[14,0,\"styleguide\"],[12],[1,\"\\n  \"],[10,\"section\"],[14,0,\"styleguide-menu\"],[12],[1,\"\\n    \"],[8,[39,0],null,null,null],[1,\"\\n\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"categories\"]]],null]],null],null,[[[1,\"      \"],[10,\"ul\"],[12],[1,\"\\n        \"],[10,\"li\"],[14,0,\"styleguide-heading\"],[12],[1,\"\\n          \"],[1,[28,[35,3],[[28,[37,4],[\"styleguide.categories.\",[30,1,[\"id\"]]],null]],null]],[1,\"\\n        \"],[13],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"sections\"]]],null]],null],null,[[[1,\"          \"],[10,\"li\"],[12],[8,[39,5],null,[[\"@section\"],[[30,2]]],null],[13],[1,\"\\n\"]],[2]],null],[1,\"      \"],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\\n  \"],[10,\"section\"],[14,0,\"styleguide-contents\"],[12],[1,\"\\n    \"],[46,[28,[37,7],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"c\",\"s\"],false,[\"toggle-color-mode\",\"each\",\"-track-array\",\"i18n\",\"concat\",\"styleguide-link\",\"component\",\"-outlet\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide.hbs",
    "isStrictMode": false
  });
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideSection @title="styleguide.title">
    <div class="description">
      {{i18n "styleguide.welcome"}}
    </div>
  </StyleguideSection>
  */
  {
    "id": "zBK9yTwg",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"styleguide.title\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"description\"],[12],[1,\"\\n    \"],[1,[28,[35,1],[\"styleguide.welcome\"],null]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[],false,[\"styleguide-section\",\"i18n\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/index.hbs",
    "isStrictMode": false
  });
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/show", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideSection @section={{this.section}}>
    {{#let this.section.component as |SectionComponent|}}
      <SectionComponent
        @dummy={{this.dummy}}
        @dummyAction={{this.dummyAction}}
        @siteSettings={{this.siteSettings}}
      />
    {{/let}}
  </StyleguideSection>
  */
  {
    "id": "aosajufV",
    "block": "[[[8,[39,0],null,[[\"@section\"],[[30,0,[\"section\"]]]],[[\"default\"],[[[[1,\"\\n\"],[44,[[30,0,[\"section\",\"component\"]]],[[[1,\"    \"],[8,[30,1],null,[[\"@dummy\",\"@dummyAction\",\"@siteSettings\"],[[30,0,[\"dummy\"]],[30,0,[\"dummyAction\"]],[30,0,[\"siteSettings\"]]]],null],[1,\"\\n\"]],[1]]]],[]]]]]],[\"SectionComponent\"],false,[\"styleguide-section\",\"let\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/show.hbs",
    "isStrictMode": false
  });
});//# sourceMappingURL=styleguide.map
