"use strict";
(self["webpackChunkdiscourse"] = self["webpackChunkdiscourse"] || []).push([["vendors-assets__route__wizard_js"],{

/***/ "./static/wizard/components/fields/checkbox.hbs":
/*!******************************************************!*\
  !*** ./static/wizard/components/fields/checkbox.hbs ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__.createTemplateFactory)(
/*
  <label class="wizard-container__label">
  <PluginOutlet
    @name="wizard-checkbox"
    @outletArgs={{hash disabled=this.field.disabled}}
  >
    <Input
      @type="checkbox"
      disabled={{this.field.disabled}}
      class="wizard-container__checkbox"
      @checked={{this.field.value}}
    />
    <span class="wizard-container__checkbox-slider"></span>
    {{#if this.field.icon}}
      {{d-icon this.field.icon}}
    {{/if}}
    <span class="wizard-container__checkbox-label">
      {{this.field.placeholder}}
    </span>
  </PluginOutlet>

  <PluginOutlet
    @name="below-wizard-checkbox"
    @outletArgs={{hash disabled=this.field.disabled}}
  />
</label>
*/
{
  "id": "vU/0HPGU",
  "block": "[[[10,\"label\"],[14,0,\"wizard-container__label\"],[12],[1,\"\\n  \"],[8,[39,0],null,[[\"@name\",\"@outletArgs\"],[\"wizard-checkbox\",[28,[37,1],null,[[\"disabled\"],[[30,0,[\"field\",\"disabled\"]]]]]]],[[\"default\"],[[[[1,\"\\n    \"],[8,[39,2],[[16,\"disabled\",[30,0,[\"field\",\"disabled\"]]],[24,0,\"wizard-container__checkbox\"]],[[\"@type\",\"@checked\"],[\"checkbox\",[30,0,[\"field\",\"value\"]]]],null],[1,\"\\n    \"],[10,1],[14,0,\"wizard-container__checkbox-slider\"],[12],[13],[1,\"\\n\"],[41,[30,0,[\"field\",\"icon\"]],[[[1,\"      \"],[1,[28,[35,4],[[30,0,[\"field\",\"icon\"]]],null]],[1,\"\\n\"]],[]],null],[1,\"    \"],[10,1],[14,0,\"wizard-container__checkbox-label\"],[12],[1,\"\\n      \"],[1,[30,0,[\"field\",\"placeholder\"]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,0],null,[[\"@name\",\"@outletArgs\"],[\"below-wizard-checkbox\",[28,[37,1],null,[[\"disabled\"],[[30,0,[\"field\",\"disabled\"]]]]]]],null],[1,\"\\n\"],[13]],[],false,[\"plugin-outlet\",\"hash\",\"input\",\"if\",\"d-icon\"]]",
  "moduleName": "discourse/static/wizard/components/fields/checkbox.hbs",
  "isStrictMode": false
}));

/***/ }),

/***/ "./static/wizard/components/fields/checkboxes.hbs":
/*!********************************************************!*\
  !*** ./static/wizard/components/fields/checkboxes.hbs ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__.createTemplateFactory)(
/*
  {{#each this.field.choices as |c|}}
  <div class="checkbox-field-choice {{this.fieldClass}}">
    <label id={{c.id}} value={{c.label}}>
      <Input
        @type="checkbox"
        class="wizard-container__checkbox"
        @checked={{c.checked}}
        {{on "click" (action "changed")}}
      />
      {{#if c.icon}}
        {{d-icon c.icon}}
      {{/if}}
      {{c.label}}
    </label>
  </div>
{{/each}}
*/
{
  "id": "W25lg9FS",
  "block": "[[[42,[28,[37,1],[[28,[37,1],[[30,0,[\"field\",\"choices\"]]],null]],null],null,[[[1,\"  \"],[10,0],[15,0,[29,[\"checkbox-field-choice \",[30,0,[\"fieldClass\"]]]]],[12],[1,\"\\n    \"],[10,\"label\"],[15,1,[30,1,[\"id\"]]],[15,2,[30,1,[\"label\"]]],[12],[1,\"\\n      \"],[8,[39,2],[[24,0,\"wizard-container__checkbox\"],[4,[38,3],[\"click\",[28,[37,4],[[30,0],\"changed\"],null]],null]],[[\"@type\",\"@checked\"],[\"checkbox\",[30,1,[\"checked\"]]]],null],[1,\"\\n\"],[41,[30,1,[\"icon\"]],[[[1,\"        \"],[1,[28,[35,6],[[30,1,[\"icon\"]]],null]],[1,\"\\n\"]],[]],null],[1,\"      \"],[1,[30,1,[\"label\"]]],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[1]],null]],[\"c\"],false,[\"each\",\"-track-array\",\"input\",\"on\",\"action\",\"if\",\"d-icon\"]]",
  "moduleName": "discourse/static/wizard/components/fields/checkboxes.hbs",
  "isStrictMode": false
}));

/***/ }),

/***/ "./static/wizard/components/fields/dropdown.hbs":
/*!******************************************************!*\
  !*** ./static/wizard/components/fields/dropdown.hbs ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__.createTemplateFactory)(
/*
  {{component
  this.component
  class="wizard-container__dropdown"
  value=this.field.value
  content=this.field.choices
  nameProperty="label"
  tabindex="9"
  onChange=(action "onChangeValue")
  options=(hash translatedNone=false)
}}
*/
{
  "id": "85bUKKwK",
  "block": "[[[46,[30,0,[\"component\"]],null,[[\"class\",\"value\",\"content\",\"nameProperty\",\"tabindex\",\"onChange\",\"options\"],[\"wizard-container__dropdown\",[30,0,[\"field\",\"value\"]],[30,0,[\"field\",\"choices\"]],\"label\",\"9\",[28,[37,1],[[30,0],\"onChangeValue\"],null],[28,[37,2],null,[[\"translatedNone\"],[false]]]]],null]],[],false,[\"component\",\"action\",\"hash\"]]",
  "moduleName": "discourse/static/wizard/components/fields/dropdown.hbs",
  "isStrictMode": false
}));

/***/ }),

/***/ "./static/wizard/components/fields/image-previews/generic.hbs":
/*!********************************************************************!*\
  !*** ./static/wizard/components/fields/image-previews/generic.hbs ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__.createTemplateFactory)(
/*
  <img src={{this.field.value}} class={{this.fieldClass}} />
*/
{
  "id": "LWPedE5M",
  "block": "[[[10,\"img\"],[15,\"src\",[30,0,[\"field\",\"value\"]]],[15,0,[30,0,[\"fieldClass\"]]],[12],[13]],[],false,[]]",
  "moduleName": "discourse/static/wizard/components/fields/image-previews/generic.hbs",
  "isStrictMode": false
}));

/***/ }),

/***/ "./static/wizard/components/fields/image.hbs":
/*!***************************************************!*\
  !*** ./static/wizard/components/fields/image.hbs ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__.createTemplateFactory)(
/*
  <label
  class="wizard-container__button wizard-container__button-upload
    {{if this.uploading 'disabled'}}"
>
  {{#if this.uploading}}
    {{i18n "wizard.uploading"}}
  {{else}}
    {{i18n "wizard.upload"}}
  {{/if}}

  <input
    class="wizard-hidden-upload-field"
    disabled={{this.uploading}}
    type="file"
    accept="image/*"
  />
</label>

{{#if this.field.value}}
  {{component
    this.previewComponent
    field=this.field
    fieldClass=this.fieldClass
    wizard=this.wizard
  }}
{{/if}}
*/
{
  "id": "yUv52JFg",
  "block": "[[[10,\"label\"],[15,0,[29,[\"wizard-container__button wizard-container__button-upload\\n    \",[52,[30,0,[\"uploading\"]],\"disabled\"]]]],[12],[1,\"\\n\"],[41,[30,0,[\"uploading\"]],[[[1,\"    \"],[1,[28,[35,1],[\"wizard.uploading\"],null]],[1,\"\\n\"]],[]],[[[1,\"    \"],[1,[28,[35,1],[\"wizard.upload\"],null]],[1,\"\\n\"]],[]]],[1,\"\\n  \"],[10,\"input\"],[14,0,\"wizard-hidden-upload-field\"],[15,\"disabled\",[30,0,[\"uploading\"]]],[14,\"accept\",\"image/*\"],[14,4,\"file\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"field\",\"value\"]],[[[1,\"  \"],[46,[30,0,[\"previewComponent\"]],null,[[\"field\",\"fieldClass\",\"wizard\"],[[30,0,[\"field\"]],[30,0,[\"fieldClass\"]],[30,0,[\"wizard\"]]]],null],[1,\"\\n\"]],[]],null]],[],false,[\"if\",\"i18n\",\"component\"]]",
  "moduleName": "discourse/static/wizard/components/fields/image.hbs",
  "isStrictMode": false
}));

/***/ }),

/***/ "./static/wizard/components/fields/styling-preview/-preview-base.hbs":
/*!***************************************************************************!*\
  !*** ./static/wizard/components/fields/styling-preview/-preview-base.hbs ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__.createTemplateFactory)(
/*
  <div class="wizard-container__preview">
  <canvas
    width={{this.elementWidth}}
    height={{this.elementHeight}}
    style={{this.canvasStyle}}
  >
  </canvas>
</div>
*/
{
  "id": "7bUbKpzk",
  "block": "[[[10,0],[14,0,\"wizard-container__preview\"],[12],[1,\"\\n  \"],[10,\"canvas\"],[15,\"width\",[30,0,[\"elementWidth\"]]],[15,\"height\",[30,0,[\"elementHeight\"]]],[15,5,[30,0,[\"canvasStyle\"]]],[12],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[]]",
  "moduleName": "discourse/static/wizard/components/fields/styling-preview/-preview-base.hbs",
  "isStrictMode": false
}));

/***/ }),

/***/ "./static/wizard/components/fields/styling-preview/index.hbs":
/*!*******************************************************************!*\
  !*** ./static/wizard/components/fields/styling-preview/index.hbs ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__.createTemplateFactory)(
/*
  <div class="previews {{if this.draggingActive 'dragging'}}">
  <div class="wizard-container__preview topic-preview">
    <canvas
      width={{this.elementWidth}}
      height={{this.elementHeight}}
      style={{this.canvasStyle}}
    >
    </canvas>
  </div>
  <div class="wizard-container__preview homepage-preview">
    <this.HomepagePreview @wizard={{this.wizard}} @step={{this.step}} />
  </div>
</div>

<div class="preview-nav">
  <a
    href
    class="preview-nav-button {{if this.previewTopic 'active'}}"
    {{on "click" this.setPreviewTopic}}
  >
    {{i18n "wizard.previews.topic_preview"}}
  </a>
  <a
    href
    class="preview-nav-button {{unless this.previewTopic 'active'}}"
    {{on "click" this.setPreviewHomepage}}
  >
    {{i18n "wizard.previews.homepage_preview"}}
  </a>
</div>
*/
{
  "id": "iXnsNtfW",
  "block": "[[[10,0],[15,0,[29,[\"previews \",[52,[30,0,[\"draggingActive\"]],\"dragging\"]]]],[12],[1,\"\\n  \"],[10,0],[14,0,\"wizard-container__preview topic-preview\"],[12],[1,\"\\n    \"],[10,\"canvas\"],[15,\"width\",[30,0,[\"elementWidth\"]]],[15,\"height\",[30,0,[\"elementHeight\"]]],[15,5,[30,0,[\"canvasStyle\"]]],[12],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"wizard-container__preview homepage-preview\"],[12],[1,\"\\n    \"],[8,[30,0,[\"HomepagePreview\"]],null,[[\"@wizard\",\"@step\"],[[30,0,[\"wizard\"]],[30,0,[\"step\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"preview-nav\"],[12],[1,\"\\n  \"],[11,3],[24,6,\"\"],[16,0,[29,[\"preview-nav-button \",[52,[30,0,[\"previewTopic\"]],\"active\"]]]],[4,[38,1],[\"click\",[30,0,[\"setPreviewTopic\"]]],null],[12],[1,\"\\n    \"],[1,[28,[35,2],[\"wizard.previews.topic_preview\"],null]],[1,\"\\n  \"],[13],[1,\"\\n  \"],[11,3],[24,6,\"\"],[16,0,[29,[\"preview-nav-button \",[52,[51,[30,0,[\"previewTopic\"]]],\"active\"]]]],[4,[38,1],[\"click\",[30,0,[\"setPreviewHomepage\"]]],null],[12],[1,\"\\n    \"],[1,[28,[35,2],[\"wizard.previews.homepage_preview\"],null]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"if\",\"on\",\"i18n\",\"unless\"]]",
  "moduleName": "discourse/static/wizard/components/fields/styling-preview/index.hbs",
  "isStrictMode": false
}));

/***/ }),

/***/ "./static/wizard/components/fields/text.hbs":
/*!**************************************************!*\
  !*** ./static/wizard/components/fields/text.hbs ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__.createTemplateFactory)(
/*
  <Input
  id={{this.field.id}}
  @value={{this.field.value}}
  class="wizard-container__text-input"
  placeholder={{this.field.placeholder}}
  tabindex="9"
/>
*/
{
  "id": "3QQhfb9R",
  "block": "[[[8,[39,0],[[16,1,[30,0,[\"field\",\"id\"]]],[24,0,\"wizard-container__text-input\"],[16,\"placeholder\",[30,0,[\"field\",\"placeholder\"]]],[24,\"tabindex\",\"9\"]],[[\"@value\"],[[30,0,[\"field\",\"value\"]]]],null]],[],false,[\"input\"]]",
  "moduleName": "discourse/static/wizard/components/fields/text.hbs",
  "isStrictMode": false
}));

/***/ }),

/***/ "./assets/_route_/wizard.js":
/*!**********************************!*\
  !*** ./assets/_route_/wizard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_embroider_macros_src_addon_es_compat2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/@embroider/macros/src/addon/es-compat2 */ "../../../../node_modules/@embroider/macros/src/addon/es-compat2.js");

let d = window.define;
d("discourse/templates/wizard", function () {
  return (0,_node_modules_embroider_macros_src_addon_es_compat2__WEBPACK_IMPORTED_MODULE_0__["default"])(__webpack_require__(/*! discourse/templates/wizard.js */ "./templates/wizard.js"));
});
d("discourse/routes/wizard", function () {
  return (0,_node_modules_embroider_macros_src_addon_es_compat2__WEBPACK_IMPORTED_MODULE_0__["default"])(__webpack_require__(/*! discourse/routes/wizard.js */ "./routes/wizard.js"));
});
d("discourse/routes/wizard/index", function () {
  return (0,_node_modules_embroider_macros_src_addon_es_compat2__WEBPACK_IMPORTED_MODULE_0__["default"])(__webpack_require__(/*! discourse/routes/wizard/index.js */ "./routes/wizard/index.js"));
});
d("discourse/templates/wizard/step", function () {
  return (0,_node_modules_embroider_macros_src_addon_es_compat2__WEBPACK_IMPORTED_MODULE_0__["default"])(__webpack_require__(/*! discourse/templates/wizard/step.js */ "./templates/wizard/step.js"));
});
d("discourse/routes/wizard/step", function () {
  return (0,_node_modules_embroider_macros_src_addon_es_compat2__WEBPACK_IMPORTED_MODULE_0__["default"])(__webpack_require__(/*! discourse/routes/wizard/step.js */ "./routes/wizard/step.js"));
});

/***/ }),

/***/ "./routes/wizard.js":
/*!**************************!*\
  !*** ./routes/wizard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WizardRoute)
/* harmony export */ });
/* harmony import */ var _ember_routing_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/routing/route */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Frouting%2Froute&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_routing_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_routing_route__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var discourse_mixins_disable_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! discourse/mixins/disable-sidebar */ "./mixins/disable-sidebar.js");
/* harmony import */ var discourse_static_wizard_models_wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! discourse/static/wizard/models/wizard */ "./static/wizard/models/wizard.js");



class WizardRoute extends _ember_routing_route__WEBPACK_IMPORTED_MODULE_0___default().extend(discourse_mixins_disable_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"]) {
  model() {
    return discourse_static_wizard_models_wizard__WEBPACK_IMPORTED_MODULE_2__["default"].load();
  }
  activate() {
    super.activate(...arguments);
    document.body.classList.add("wizard");
    this.controllerFor("application").setProperties({
      showTop: false,
      showSiteHeader: false
    });
  }
  deactivate() {
    super.deactivate(...arguments);
    document.body.classList.remove("wizard");
    this.controllerFor("application").setProperties({
      showTop: true,
      showSiteHeader: true
    });
  }
}

/***/ }),

/***/ "./routes/wizard/index.js":
/*!********************************!*\
  !*** ./routes/wizard/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WizardIndexRoute)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js */ "../../../../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerWarningHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js */ "../../../../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var _ember_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ember/service */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fservice&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_service__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ember_service__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var discourse_routes_discourse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! discourse/routes/discourse */ "./routes/discourse.js");




var _class, _descriptor;


let WizardIndexRoute = (_class = class WizardIndexRoute extends discourse_routes_discourse__WEBPACK_IMPORTED_MODULE_5__["default"] {
  constructor(...args) {
    super(...args);
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", _descriptor, this);
  }
  beforeModel() {
    const wizard = this.modelFor("wizard");
    this.router.replaceWith("wizard.step", wizard.start);
  }
}, (_descriptor = (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "router", [_ember_service__WEBPACK_IMPORTED_MODULE_4__.inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class);


/***/ }),

/***/ "./routes/wizard/step.js":
/*!*******************************!*\
  !*** ./routes/wizard/step.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WizardStepRoute)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js */ "../../../../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerWarningHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js */ "../../../../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var _ember_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ember/service */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fservice&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_service__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ember_service__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var discourse_routes_discourse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! discourse/routes/discourse */ "./routes/discourse.js");




var _class, _descriptor;


let WizardStepRoute = (_class = class WizardStepRoute extends discourse_routes_discourse__WEBPACK_IMPORTED_MODULE_5__["default"] {
  constructor(...args) {
    super(...args);
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", _descriptor, this);
  }
  model(params) {
    const wizard = this.modelFor("wizard");
    const step = wizard.findStep(params.step_id);
    if (!step) {
      this.router.transitionTo("wizard.step", wizard.start);
    }
    return {
      wizard,
      step
    };
  }
}, (_descriptor = (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "router", [_ember_service__WEBPACK_IMPORTED_MODULE_4__.inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class);


/***/ }),

/***/ "./static/wizard/components/discourse-logo.js":
/*!****************************************************!*\
  !*** ./static/wizard/components/discourse-logo.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ember_component_template_only__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ember/component/template-only */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent%2Ftemplate-only&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component_template_only__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ember_component_template_only__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_component__WEBPACK_IMPORTED_MODULE_1__.setComponentTemplate)((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_0__.createTemplateFactory)(
/*
  
  {{! prettier-ignore }}
  <div class="discourse-logo">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 104">
      <g id="discourse-logo-large" fill="none" fill-rule="nonzero">
        <path class="logo-contour" fill="var(--primary)"
          d="M117.4 22.22c1.649399-.0222812 3.233299.6446239 4.37 1.84 1.192379 1.1784439 1.850092 2.7938161 1.82 4.47.02983 1.6575188-.620685 3.2548933-1.8 4.42-1.119242 1.1834351-2.681214 1.8466391-4.31 1.83-1.662331.023056-3.258247-.6515814-4.4-1.86-1.195146-1.1971019-1.852129-2.8287301-1.82-4.52-.000018-3.3998017 2.750216-6.1589796 6.15-6.17l-.01-.01zm-4.84 21.05h9.68v40.36h-9.68V43.27zm42.1 6.39l-6 6C146.22 53.22 144 52 142 52c-.902316-.0524313-1.79724.1897247-2.55.69-.573152.3850847-.91784 1.0295007-.92 1.72.003314.536265.210697 1.0511472.58 1.44.861614.7548917 1.836939 1.3691103 2.89 1.82l3.55 1.77c3.733333 1.8466667 6.3 3.7266667 7.7 5.64 3.339481 4.8109001 2.622713 11.3471474-1.68 15.32-2.52 2.2933333-5.896667 3.44-10.13 3.44-5.290881.1460857-10.315591-2.3176674-13.44-6.59l6-6.49c1.120876 1.3107131 2.47767 2.3995407 4 3.21 1.21567.7242383 2.587439 1.1460572 4 1.23 1.104873.0554814 2.195409-.2692091 3.09-.92.709238-.481083 1.144441-1.2733748 1.17-2.13 0-1.4933333-1.406667-2.9466667-4.22-4.36l-3.26-1.63c-6.24-3.1466667-9.36-7.0833333-9.36-11.81-.023382-2.9974288 1.266494-5.8548879 3.53-7.82 2.467571-2.2051994 5.69282-3.3698724 9-3.25 5.010194-.0274064 9.731027 2.3441612 12.7 6.38h.01zm45.1 2.41l-8.06 4.43c-1.254605-1.396184-2.782926-2.5194486-4.49-3.3-1.65594-.6457398-3.423024-.9583778-5.2-.92-3.245832-.1417919-6.412693 1.0255155-8.79 3.24-2.246347 2.1649992-3.467702 5.1820368-3.36 8.3-.097501 3.0024572 1.075175 5.9069195 3.23 8 2.288229 2.1569486 5.347819 3.3029432 8.49 3.18 4.333333 0 7.706667-1.4766667 10.12-4.43l7.64 5.23c-4.14 5.38-9.98 8.07-17.52 8.07-6.786667 0-12.1-2-15.94-6-4.48358-4.5067211-6.564271-10.8726791-5.60785-17.1574451C161.22857 54.4277889 165.108765 48.968963 170.73 46c3.46735-1.8431696 7.343542-2.7821229 11.27-2.73 3.572088-.0575569 7.107523.7269532 10.32 2.29 2.995764 1.4982625 5.557329 3.739632 7.44 6.51zm23.85-8.8c3.604029-.010417 7.146863.9313491 10.27 2.73 6.327234 3.5564862 10.231011 10.261796 10.2 17.52.015895 3.5831575-.919258 7.106371-2.71 10.21-1.735583 3.1031601-4.283385 5.6751605-7.37 7.44-3.142134 1.7910684-6.703421 2.7158986-10.32 2.68-5.33854.0803277-10.470647-2.0601629-14.17-5.91-3.845791-3.7732443-5.968786-8.9631898-5.87-14.35-.050183-11.1185605 8.882044-20.1937022 20-20.32h-.03zm.16 9.12c-2.835339-.0656442-5.565196 1.0757341-7.51 3.14-2.022565 2.1625471-3.101902 5.0407776-3 8-.123784 3.0105402.955639 5.946572 3 8.16 1.941671 2.0665463 4.675583 3.202339 7.51 3.12 2.859128.0777168 5.61469-1.0725573 7.57-3.16 2.041067-2.199383 3.120812-5.1218929 3-8.12.116275-2.9824439-.963763-5.8877463-3-8.07-1.971249-2.0543004-4.724691-3.1709538-7.57-3.07zM250 44.27h9.79v18.58c-.125272 2.5360436.124076 5.0766997.74 7.54.433835 1.3191993 1.273923 2.467319 2.4 3.28 1.199326.8094698 2.623894 1.2189893 4.07 1.17 1.455597.0478904 2.890629-.3536395 4.11-1.15 1.176822-.8333654 2.056319-2.0212119 2.51-3.39.4-1.1133333.6-3.49.6-7.13v-18.9h9.68v16.35c0 6.74-.533333 11.35-1.6 13.83-1.155092 2.8668191-3.162099 5.3101316-5.75 7-2.915931 1.72144-6.266549 2.5651706-9.65 2.43-4.233333 0-7.656667-.9466667-10.27-2.84-2.656958-1.9585935-4.593682-4.7388994-5.51-7.91-.746667-2.36-1.12-6.6266667-1.12-12.8V44.27zm40.31 0h8.3v4.86c.767489-1.7562415 2.006682-3.2654259 3.58-4.36 1.442665-.9779714 3.147113-1.4973227 4.89-1.49 1.372409.0285016 2.720114.3705587 3.94 1l-3 8.34c-.858779-.4874025-1.815195-.7777428-2.8-.85-1.493333 0-2.753333.9233333-3.78 2.77-1.026667 1.8466667-1.54 5.4633333-1.54 10.85v17.47h-9.61l.02-38.59zm48.12 5.39l-6 6c-2.433333-2.44-4.643333-3.66-6.63-3.66-.902316-.0524313-1.79724.1897247-2.55.69-.573152.3850847-.91784 1.0295007-.92 1.72.003314.536265.210697 1.0511472.58 1.44.86418.7436068 1.839282 1.3475632 2.89 1.79l3.55 1.77c3.733333 1.8466667 6.3 3.7266667 7.7 5.64 3.334996 4.8120386 2.618581 11.3450638-1.68 15.32-2.52 2.2933333-5.896667 3.44-10.13 3.44-5.306684.1570903-10.34968-2.3120323-13.48-6.6l6-6.49c1.120544 1.311055 2.477408 2.3999384 4 3.21 1.234508.7295857 2.627813 1.1482637 4.06 1.22 1.104873.0554814 2.195409-.2692091 3.09-.92.665094-.487764 1.067432-1.2555276 1.09-2.08 0-1.4933333-1.406667-2.9466667-4.22-4.36l-3.26-1.63c-6.24-3.1466667-9.36-7.0833333-9.36-11.81-.023382-2.9974288 1.266494-5.8548879 3.53-7.82 2.468114-2.2042903 5.692983-3.3688266 9-3.25 5.010194-.0274064 9.731027 2.3441612 12.7 6.38h.04zm45.99 16.7h-31.1c.344633 2.5519358 1.628201 4.8837517 3.6 6.54 2.119278 1.6772588 4.769524 2.5393871 7.47 2.43 3.495035.0528887 6.861918-1.3147949 9.33-3.79l8.16 3.83c-1.849704 2.7229701-4.366447 4.9264112-7.31 6.4-3.168167 1.4515868-6.626273 2.1596264-10.11 2.07-6.053333 0-10.983333-1.91-14.79-5.73-3.778418-3.794868-5.828939-8.9772248-5.67-14.33-.169883-5.4590569 1.883549-10.7532295 5.69-14.67 3.730211-3.86226 8.912541-5.978015 14.28-5.83 6.073333 0 11.016667 1.9433333 14.83 5.83s5.716667 9.0233333 5.71 15.41l-.09 1.84zm-9.68-7.63c-.614521-2.121145-1.933733-3.9694522-3.74-5.24-1.914891-1.3466635-4.209472-2.0472991-6.55-2-2.555466-.0480087-5.055132.7500564-7.11 2.27-1.575496 1.3502917-2.794648 3.0674061-3.55 5l20.95-.03zM51.87 0C23.71 0 0 22.83 0 51v52.81l51.86-.05c28.16 0 51-23.71 51-51.87C102.86 23.73 80 0 51.87 0z">
        </path>
        <path fill="#FFF9AE"
          d="M52.37 19.74c-11.1380058.0065739-21.451097 5.8725864-27.1495582 15.4424743C19.5219805 44.7523623 19.2787009 56.6145192 24.58 66.41l-5.72 18.4 20.54-4.64c11.7619991 5.29926 25.5640682 2.9191757 34.8718647-6.0134445 9.3077965-8.9326201 12.2534008-22.6251484 7.4422692-34.5951021C76.9030023 27.5914997 65.3006488 19.7462906 52.4 19.74h-.03z">
        </path>
        <path fill="#00AEEF"
          d="M77.0874282 70.9138623C68.1087341 82.2404672 52.5895354 86.0314364 39.4 80.12l-20.54 4.7 20.91-2.47c13.8618885 8.120188 31.6101861 4.5474373 41.2505109-8.3037707C90.6608357 61.1950214 89.1246004 43.1559917 77.45 32.12c8.7654246 11.4924434 8.6161222 27.4672575-.3625718 38.7938623z">
        </path>
        <path fill="#00A94F"
          d="M75.3191226 64.9088434C67.572355 77.1106513 52.5344195 82.5013605 38.8 78l-19.94 6.82 20.54-4.65c14.6285181 6.6078894 31.8869319 1.1988304 40.1270438-12.5764482C87.7671557 53.8182732 84.370682 36.05385 71.63 26.29c9.9167741 10.5144718 11.4358902 26.4170355 3.6891226 38.6188434z">
        </path>
        <path fill="#F15D22"
          d="M26.47 67.11c-5.7247169-13.7992006-1.0069753-29.722128 11.3108878-38.1755635C50.0987509 20.4810011 66.6529755 21.8055203 77.47 32.11c-10.0181769-13.1470907-28.4736729-16.3561915-42.3417564-7.3625203C21.26016 33.7411508 16.6624984 51.9005882 24.58 66.41l-5.72 18.4 7.61-17.7z">
        </path>
        <path fill="#D0232B"
          d="M24.58 66.41c-7.1032817-13.1205259-4.0652056-29.4212778 7.2876929-39.1020065C43.2205913 17.6272648 59.7966078 17.2028861 71.63 26.29c-11.3513195-11.9524832-29.9818586-13.1756566-42.7984647-2.8098996C16.0149293 33.8458575 13.3153477 52.3203102 22.63 65.92l-3.76 18.9 5.71-18.41z">
        </path>
      </g>
    </svg>
  </div>

*/
{
  "id": "2/ZPobo0",
  "block": "[[[1,\"\\n\"],[1,\"  \"],[10,0],[14,0,\"discourse-logo\"],[12],[1,\"\\n    \"],[10,\"svg\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[14,\"viewBox\",\"0 0 385 104\"],[12],[1,\"\\n      \"],[10,\"g\"],[14,1,\"discourse-logo-large\"],[14,\"fill\",\"none\"],[14,\"fill-rule\",\"nonzero\"],[12],[1,\"\\n        \"],[10,\"path\"],[14,0,\"logo-contour\"],[14,\"fill\",\"var(--primary)\"],[14,\"d\",\"M117.4 22.22c1.649399-.0222812 3.233299.6446239 4.37 1.84 1.192379 1.1784439 1.850092 2.7938161 1.82 4.47.02983 1.6575188-.620685 3.2548933-1.8 4.42-1.119242 1.1834351-2.681214 1.8466391-4.31 1.83-1.662331.023056-3.258247-.6515814-4.4-1.86-1.195146-1.1971019-1.852129-2.8287301-1.82-4.52-.000018-3.3998017 2.750216-6.1589796 6.15-6.17l-.01-.01zm-4.84 21.05h9.68v40.36h-9.68V43.27zm42.1 6.39l-6 6C146.22 53.22 144 52 142 52c-.902316-.0524313-1.79724.1897247-2.55.69-.573152.3850847-.91784 1.0295007-.92 1.72.003314.536265.210697 1.0511472.58 1.44.861614.7548917 1.836939 1.3691103 2.89 1.82l3.55 1.77c3.733333 1.8466667 6.3 3.7266667 7.7 5.64 3.339481 4.8109001 2.622713 11.3471474-1.68 15.32-2.52 2.2933333-5.896667 3.44-10.13 3.44-5.290881.1460857-10.315591-2.3176674-13.44-6.59l6-6.49c1.120876 1.3107131 2.47767 2.3995407 4 3.21 1.21567.7242383 2.587439 1.1460572 4 1.23 1.104873.0554814 2.195409-.2692091 3.09-.92.709238-.481083 1.144441-1.2733748 1.17-2.13 0-1.4933333-1.406667-2.9466667-4.22-4.36l-3.26-1.63c-6.24-3.1466667-9.36-7.0833333-9.36-11.81-.023382-2.9974288 1.266494-5.8548879 3.53-7.82 2.467571-2.2051994 5.69282-3.3698724 9-3.25 5.010194-.0274064 9.731027 2.3441612 12.7 6.38h.01zm45.1 2.41l-8.06 4.43c-1.254605-1.396184-2.782926-2.5194486-4.49-3.3-1.65594-.6457398-3.423024-.9583778-5.2-.92-3.245832-.1417919-6.412693 1.0255155-8.79 3.24-2.246347 2.1649992-3.467702 5.1820368-3.36 8.3-.097501 3.0024572 1.075175 5.9069195 3.23 8 2.288229 2.1569486 5.347819 3.3029432 8.49 3.18 4.333333 0 7.706667-1.4766667 10.12-4.43l7.64 5.23c-4.14 5.38-9.98 8.07-17.52 8.07-6.786667 0-12.1-2-15.94-6-4.48358-4.5067211-6.564271-10.8726791-5.60785-17.1574451C161.22857 54.4277889 165.108765 48.968963 170.73 46c3.46735-1.8431696 7.343542-2.7821229 11.27-2.73 3.572088-.0575569 7.107523.7269532 10.32 2.29 2.995764 1.4982625 5.557329 3.739632 7.44 6.51zm23.85-8.8c3.604029-.010417 7.146863.9313491 10.27 2.73 6.327234 3.5564862 10.231011 10.261796 10.2 17.52.015895 3.5831575-.919258 7.106371-2.71 10.21-1.735583 3.1031601-4.283385 5.6751605-7.37 7.44-3.142134 1.7910684-6.703421 2.7158986-10.32 2.68-5.33854.0803277-10.470647-2.0601629-14.17-5.91-3.845791-3.7732443-5.968786-8.9631898-5.87-14.35-.050183-11.1185605 8.882044-20.1937022 20-20.32h-.03zm.16 9.12c-2.835339-.0656442-5.565196 1.0757341-7.51 3.14-2.022565 2.1625471-3.101902 5.0407776-3 8-.123784 3.0105402.955639 5.946572 3 8.16 1.941671 2.0665463 4.675583 3.202339 7.51 3.12 2.859128.0777168 5.61469-1.0725573 7.57-3.16 2.041067-2.199383 3.120812-5.1218929 3-8.12.116275-2.9824439-.963763-5.8877463-3-8.07-1.971249-2.0543004-4.724691-3.1709538-7.57-3.07zM250 44.27h9.79v18.58c-.125272 2.5360436.124076 5.0766997.74 7.54.433835 1.3191993 1.273923 2.467319 2.4 3.28 1.199326.8094698 2.623894 1.2189893 4.07 1.17 1.455597.0478904 2.890629-.3536395 4.11-1.15 1.176822-.8333654 2.056319-2.0212119 2.51-3.39.4-1.1133333.6-3.49.6-7.13v-18.9h9.68v16.35c0 6.74-.533333 11.35-1.6 13.83-1.155092 2.8668191-3.162099 5.3101316-5.75 7-2.915931 1.72144-6.266549 2.5651706-9.65 2.43-4.233333 0-7.656667-.9466667-10.27-2.84-2.656958-1.9585935-4.593682-4.7388994-5.51-7.91-.746667-2.36-1.12-6.6266667-1.12-12.8V44.27zm40.31 0h8.3v4.86c.767489-1.7562415 2.006682-3.2654259 3.58-4.36 1.442665-.9779714 3.147113-1.4973227 4.89-1.49 1.372409.0285016 2.720114.3705587 3.94 1l-3 8.34c-.858779-.4874025-1.815195-.7777428-2.8-.85-1.493333 0-2.753333.9233333-3.78 2.77-1.026667 1.8466667-1.54 5.4633333-1.54 10.85v17.47h-9.61l.02-38.59zm48.12 5.39l-6 6c-2.433333-2.44-4.643333-3.66-6.63-3.66-.902316-.0524313-1.79724.1897247-2.55.69-.573152.3850847-.91784 1.0295007-.92 1.72.003314.536265.210697 1.0511472.58 1.44.86418.7436068 1.839282 1.3475632 2.89 1.79l3.55 1.77c3.733333 1.8466667 6.3 3.7266667 7.7 5.64 3.334996 4.8120386 2.618581 11.3450638-1.68 15.32-2.52 2.2933333-5.896667 3.44-10.13 3.44-5.306684.1570903-10.34968-2.3120323-13.48-6.6l6-6.49c1.120544 1.311055 2.477408 2.3999384 4 3.21 1.234508.7295857 2.627813 1.1482637 4.06 1.22 1.104873.0554814 2.195409-.2692091 3.09-.92.665094-.487764 1.067432-1.2555276 1.09-2.08 0-1.4933333-1.406667-2.9466667-4.22-4.36l-3.26-1.63c-6.24-3.1466667-9.36-7.0833333-9.36-11.81-.023382-2.9974288 1.266494-5.8548879 3.53-7.82 2.468114-2.2042903 5.692983-3.3688266 9-3.25 5.010194-.0274064 9.731027 2.3441612 12.7 6.38h.04zm45.99 16.7h-31.1c.344633 2.5519358 1.628201 4.8837517 3.6 6.54 2.119278 1.6772588 4.769524 2.5393871 7.47 2.43 3.495035.0528887 6.861918-1.3147949 9.33-3.79l8.16 3.83c-1.849704 2.7229701-4.366447 4.9264112-7.31 6.4-3.168167 1.4515868-6.626273 2.1596264-10.11 2.07-6.053333 0-10.983333-1.91-14.79-5.73-3.778418-3.794868-5.828939-8.9772248-5.67-14.33-.169883-5.4590569 1.883549-10.7532295 5.69-14.67 3.730211-3.86226 8.912541-5.978015 14.28-5.83 6.073333 0 11.016667 1.9433333 14.83 5.83s5.716667 9.0233333 5.71 15.41l-.09 1.84zm-9.68-7.63c-.614521-2.121145-1.933733-3.9694522-3.74-5.24-1.914891-1.3466635-4.209472-2.0472991-6.55-2-2.555466-.0480087-5.055132.7500564-7.11 2.27-1.575496 1.3502917-2.794648 3.0674061-3.55 5l20.95-.03zM51.87 0C23.71 0 0 22.83 0 51v52.81l51.86-.05c28.16 0 51-23.71 51-51.87C102.86 23.73 80 0 51.87 0z\"],[12],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"path\"],[14,\"fill\",\"#FFF9AE\"],[14,\"d\",\"M52.37 19.74c-11.1380058.0065739-21.451097 5.8725864-27.1495582 15.4424743C19.5219805 44.7523623 19.2787009 56.6145192 24.58 66.41l-5.72 18.4 20.54-4.64c11.7619991 5.29926 25.5640682 2.9191757 34.8718647-6.0134445 9.3077965-8.9326201 12.2534008-22.6251484 7.4422692-34.5951021C76.9030023 27.5914997 65.3006488 19.7462906 52.4 19.74h-.03z\"],[12],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"path\"],[14,\"fill\",\"#00AEEF\"],[14,\"d\",\"M77.0874282 70.9138623C68.1087341 82.2404672 52.5895354 86.0314364 39.4 80.12l-20.54 4.7 20.91-2.47c13.8618885 8.120188 31.6101861 4.5474373 41.2505109-8.3037707C90.6608357 61.1950214 89.1246004 43.1559917 77.45 32.12c8.7654246 11.4924434 8.6161222 27.4672575-.3625718 38.7938623z\"],[12],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"path\"],[14,\"fill\",\"#00A94F\"],[14,\"d\",\"M75.3191226 64.9088434C67.572355 77.1106513 52.5344195 82.5013605 38.8 78l-19.94 6.82 20.54-4.65c14.6285181 6.6078894 31.8869319 1.1988304 40.1270438-12.5764482C87.7671557 53.8182732 84.370682 36.05385 71.63 26.29c9.9167741 10.5144718 11.4358902 26.4170355 3.6891226 38.6188434z\"],[12],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"path\"],[14,\"fill\",\"#F15D22\"],[14,\"d\",\"M26.47 67.11c-5.7247169-13.7992006-1.0069753-29.722128 11.3108878-38.1755635C50.0987509 20.4810011 66.6529755 21.8055203 77.47 32.11c-10.0181769-13.1470907-28.4736729-16.3561915-42.3417564-7.3625203C21.26016 33.7411508 16.6624984 51.9005882 24.58 66.41l-5.72 18.4 7.61-17.7z\"],[12],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"path\"],[14,\"fill\",\"#D0232B\"],[14,\"d\",\"M24.58 66.41c-7.1032817-13.1205259-4.0652056-29.4212778 7.2876929-39.1020065C43.2205913 17.6272648 59.7966078 17.2028861 71.63 26.29c-11.3513195-11.9524832-29.9818586-13.1756566-42.7984647-2.8098996C16.0149293 33.8458575 13.3153477 52.3203102 22.63 65.92l-3.76 18.9 5.71-18.41z\"],[12],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[],false,[]]",
  "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/static/wizard/components/discourse-logo.js",
  "isStrictMode": true
}), _ember_component_template_only__WEBPACK_IMPORTED_MODULE_2___default()()));

/***/ }),

/***/ "./static/wizard/components/fields/checkbox.js":
/*!*****************************************************!*\
  !*** ./static/wizard/components/fields/checkbox.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkbox_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.hbs */ "./static/wizard/components/fields/checkbox.hbs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_component__WEBPACK_IMPORTED_MODULE_0__.setComponentTemplate)(_checkbox_hbs__WEBPACK_IMPORTED_MODULE_1__["default"], _ember_component__WEBPACK_IMPORTED_MODULE_0___default().extend({
  tagName: ""
})));

/***/ }),

/***/ "./static/wizard/components/fields/checkboxes.js":
/*!*******************************************************!*\
  !*** ./static/wizard/components/fields/checkboxes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ember/object */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fobject&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ember_object__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _checkboxes_hbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkboxes.hbs */ "./static/wizard/components/fields/checkboxes.hbs");

var _obj;



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_component__WEBPACK_IMPORTED_MODULE_1__.setComponentTemplate)(_checkboxes_hbs__WEBPACK_IMPORTED_MODULE_3__["default"], _ember_component__WEBPACK_IMPORTED_MODULE_1___default().extend((_obj = {
  init(...args) {
    this._super(...args);
    this.set("field.value", this.field.value || []);
    for (let choice of this.field.choices) {
      if (this.field.value.includes(choice.id)) {
        (0,_ember_object__WEBPACK_IMPORTED_MODULE_2__.set)(choice, "checked", true);
      }
    }
  },
  changed(checkbox) {
    let newFieldValue = this.field.value;
    const checkboxValue = checkbox.parentElement.getAttribute("value").toLowerCase();
    if (checkbox.checked) {
      newFieldValue.push(checkboxValue);
    } else {
      const index = newFieldValue.indexOf(checkboxValue);
      if (index > -1) {
        newFieldValue.splice(index, 1);
      }
    }
    this.set("field.value", newFieldValue);
  }
}, ((0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "changed", [_ember_object__WEBPACK_IMPORTED_MODULE_2__.action], Object.getOwnPropertyDescriptor(_obj, "changed"), _obj)), _obj))));

/***/ }),

/***/ "./static/wizard/components/fields/dropdown.js":
/*!*****************************************************!*\
  !*** ./static/wizard/components/fields/dropdown.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ember/object */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fobject&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ember_object__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! discourse-common/utils/decorators */ "../rewritten-packages/discourse-common.d19c518e/node_modules/discourse-common/utils/decorators.js");
/* harmony import */ var select_kit_components_color_palettes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! select-kit/components/color-palettes */ "../rewritten-packages/select-kit.bafea972/node_modules/select-kit/components/color-palettes.js");
/* harmony import */ var select_kit_components_combo_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! select-kit/components/combo-box */ "../rewritten-packages/select-kit.bafea972/node_modules/select-kit/components/combo-box.js");
/* harmony import */ var _dropdown_hbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown.hbs */ "./static/wizard/components/fields/dropdown.hbs");

var _dec, _obj;






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_component__WEBPACK_IMPORTED_MODULE_1__.setComponentTemplate)(_dropdown_hbs__WEBPACK_IMPORTED_MODULE_6__["default"], _ember_component__WEBPACK_IMPORTED_MODULE_1___default().extend((_dec = (0,discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_3__["default"])("field.id"), (_obj = {
  init() {
    this._super(...arguments);
    if (this.field.id === "color_scheme") {
      for (let choice of this.field.choices) {
        if (choice?.data?.colors) {
          (0,_ember_object__WEBPACK_IMPORTED_MODULE_2__.set)(choice, "colors", choice.data.colors);
        }
      }
    }
  },
  component(id) {
    return id === "color_scheme" ? select_kit_components_color_palettes__WEBPACK_IMPORTED_MODULE_4__["default"] : select_kit_components_combo_box__WEBPACK_IMPORTED_MODULE_5__["default"];
  },
  keyPress(e) {
    e.stopPropagation();
  },
  onChangeValue(value) {
    this.set("field.value", value);
  }
}, ((0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "component", [_dec], Object.getOwnPropertyDescriptor(_obj, "component"), _obj), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "onChangeValue", [_ember_object__WEBPACK_IMPORTED_MODULE_2__.action], Object.getOwnPropertyDescriptor(_obj, "onChangeValue"), _obj)), _obj)))));

/***/ }),

/***/ "./static/wizard/components/fields/image-previews/generic.js":
/*!*******************************************************************!*\
  !*** ./static/wizard/components/fields/image-previews/generic.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generic_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic.hbs */ "./static/wizard/components/fields/image-previews/generic.hbs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_component__WEBPACK_IMPORTED_MODULE_0__.setComponentTemplate)(_generic_hbs__WEBPACK_IMPORTED_MODULE_1__["default"], _ember_component__WEBPACK_IMPORTED_MODULE_0___default().extend({
  classNameBindings: [":wizard-image-preview", "fieldClass"]
})));

/***/ }),

/***/ "./static/wizard/components/fields/image-previews/index.js":
/*!*****************************************************************!*\
  !*** ./static/wizard/components/fields/image-previews/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic */ "./static/wizard/components/fields/image-previews/generic.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ "./static/wizard/components/fields/image-previews/logo.js");
/* harmony import */ var _logo_small__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo-small */ "./static/wizard/components/fields/image-previews/logo-small.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  generic: _generic__WEBPACK_IMPORTED_MODULE_0__["default"],
  logo: _logo__WEBPACK_IMPORTED_MODULE_1__["default"],
  "logo-small": _logo_small__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./static/wizard/components/fields/image-previews/logo-small.js":
/*!**********************************************************************!*\
  !*** ./static/wizard/components/fields/image-previews/logo-small.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ember/object */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fobject&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ember_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/preview */ "./static/wizard/lib/preview.js");
/* harmony import */ var _styling_preview_preview_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styling-preview/-preview-base */ "./static/wizard/components/fields/styling-preview/-preview-base.js");

var _obj;



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_styling_preview_preview_base__WEBPACK_IMPORTED_MODULE_3__["default"].extend((_obj = {
  width: 375,
  height: 100,
  image: null,
  didInsertElement() {
    this._super(...arguments);
    this.field.addListener(this.imageChanged);
  },
  willDestroyElement() {
    this._super(...arguments);
    this.field.removeListener(this.imageChanged);
  },
  imageChanged() {
    this.reload();
  },
  images() {
    return {
      image: this.field.value
    };
  },
  paint(options) {
    const {
      ctx,
      colors,
      font,
      headingFont,
      width,
      height
    } = options;
    const headerHeight = height / 2;
    (0,_lib_preview__WEBPACK_IMPORTED_MODULE_2__.drawHeader)(ctx, colors, width, headerHeight);
    const image = this.image;
    const headerMargin = headerHeight * 0.2;
    const maxWidth = headerHeight - headerMargin * 2.0;
    let imageWidth = image.width;
    let ratio = 1.0;
    if (imageWidth > maxWidth) {
      ratio = maxWidth / imageWidth;
      imageWidth = maxWidth;
    }
    this.scaleImage(image, headerMargin, headerMargin, imageWidth, image.height * ratio);
    const afterLogo = headerMargin * 1.7 + imageWidth;
    const fontSize = Math.round(headerHeight * 0.4);
    ctx.font = `Bold ${fontSize}px '${headingFont}'`;
    ctx.fillStyle = colors.primary;
    const title = _lib_preview__WEBPACK_IMPORTED_MODULE_2__.LOREM.substring(0, 27);
    ctx.fillText(title, headerMargin + imageWidth, headerHeight - fontSize * 1.1);
    const category = this.categories()[0];
    const badgeSize = height / 13.0;
    ctx.beginPath();
    ctx.fillStyle = category.color;
    ctx.rect(afterLogo, headerHeight * 0.7, badgeSize, badgeSize);
    ctx.fill();
    ctx.font = `Bold ${badgeSize * 1.2}px '${font}'`;
    ctx.fillStyle = colors.primary;
    ctx.fillText(category.name, afterLogo + badgeSize * 1.5, headerHeight * 0.7 + badgeSize * 0.9);
    const LINE_HEIGHT = 12;
    ctx.font = `${LINE_HEIGHT}px '${font}'`;
    const lines = _lib_preview__WEBPACK_IMPORTED_MODULE_2__.LOREM.split("\n");
    for (let i = 0; i < 10; i++) {
      const line = height * 0.55 + i * (LINE_HEIGHT * 1.5);
      ctx.fillText(lines[i], afterLogo, line);
    }
  }
}, ((0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "imageChanged", [_ember_object__WEBPACK_IMPORTED_MODULE_1__.action], Object.getOwnPropertyDescriptor(_obj, "imageChanged"), _obj)), _obj)));

/***/ }),

/***/ "./static/wizard/components/fields/image-previews/logo.js":
/*!****************************************************************!*\
  !*** ./static/wizard/components/fields/image-previews/logo.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ember/object */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fobject&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ember_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/preview */ "./static/wizard/lib/preview.js");
/* harmony import */ var _styling_preview_preview_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styling-preview/-preview-base */ "./static/wizard/components/fields/styling-preview/-preview-base.js");

var _obj;



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_styling_preview_preview_base__WEBPACK_IMPORTED_MODULE_3__["default"].extend((_obj = {
  width: 400,
  height: 100,
  image: null,
  didInsertElement() {
    this._super(...arguments);
    this.field.addListener(this.imageChanged);
  },
  willDestroyElement() {
    this._super(...arguments);
    this.field.removeListener(this.imageChanged);
  },
  imageChanged() {
    this.reload();
  },
  images() {
    return {
      image: this.field.value
    };
  },
  paint({
    ctx,
    colors,
    font,
    width,
    height
  }) {
    const headerHeight = height / 2;
    (0,_lib_preview__WEBPACK_IMPORTED_MODULE_2__.drawHeader)(ctx, colors, width, headerHeight);
    const image = this.image;
    const headerMargin = headerHeight * 0.2;
    const imageHeight = headerHeight - headerMargin * 2;
    const ratio = imageHeight / image.height;
    this.scaleImage(image, headerMargin, headerMargin, image.width * ratio, imageHeight);
    this.drawPills(colors, font, height / 2);
  }
}, ((0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "imageChanged", [_ember_object__WEBPACK_IMPORTED_MODULE_1__.action], Object.getOwnPropertyDescriptor(_obj, "imageChanged"), _obj)), _obj)));

/***/ }),

/***/ "./static/wizard/components/fields/image.js":
/*!**************************************************!*\
  !*** ./static/wizard/components/fields/image.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ember_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ember/debug */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fdebug&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ember_debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ember_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ember/service */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fservice&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ember_service__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ember_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ember/string */ "../rewritten-packages/@ember/string.782e18cd/node_modules/@ember/string/index.js");
/* harmony import */ var _uppy_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uppy/core */ "../../../../node_modules/@uppy/core/lib/index.js");
/* harmony import */ var _uppy_drop_target__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uppy/drop-target */ "../../../../node_modules/@uppy/drop-target/lib/index.js");
/* harmony import */ var _uppy_xhr_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @uppy/xhr-upload */ "../../../../node_modules/@uppy/xhr-upload/lib/index.js");
/* harmony import */ var discourse_common_lib_get_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! discourse-common/lib/get-url */ "../rewritten-packages/discourse-common.d19c518e/node_modules/discourse-common/lib/get-url.js");
/* harmony import */ var discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! discourse-common/utils/decorators */ "../rewritten-packages/discourse-common.d19c518e/node_modules/discourse-common/utils/decorators.js");
/* harmony import */ var discourse_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! discourse-i18n */ "../../../../discourse-i18n/src/index.js");
/* harmony import */ var _image_previews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./image-previews */ "./static/wizard/components/fields/image-previews/index.js");
/* harmony import */ var _image_hbs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image.hbs */ "./static/wizard/components/fields/image.hbs");

var _dec, _obj;












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_component__WEBPACK_IMPORTED_MODULE_1__.setComponentTemplate)(_image_hbs__WEBPACK_IMPORTED_MODULE_12__["default"], _ember_component__WEBPACK_IMPORTED_MODULE_1___default().extend((_dec = (0,discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_9__["default"])("field.id"), (_obj = {
  classNames: ["wizard-container__image-upload"],
  dialog: (0,_ember_service__WEBPACK_IMPORTED_MODULE_3__.inject)(),
  uploading: false,
  previewComponent(id) {
    return _image_previews__WEBPACK_IMPORTED_MODULE_11__["default"][(0,_ember_string__WEBPACK_IMPORTED_MODULE_4__.dasherize)(id)] ?? _image_previews__WEBPACK_IMPORTED_MODULE_11__["default"].generic;
  },
  didInsertElement() {
    this._super(...arguments);
    this.setupUploads();
  },
  setupUploads() {
    const id = this.field.id;
    this._uppyInstance = new _uppy_core__WEBPACK_IMPORTED_MODULE_5__["default"]({
      id: `wizard-field-image-${id}`,
      meta: {
        upload_type: `wizard_${id}`
      },
      autoProceed: true
    });
    this._uppyInstance.use(_uppy_xhr_upload__WEBPACK_IMPORTED_MODULE_7__["default"], {
      endpoint: (0,discourse_common_lib_get_url__WEBPACK_IMPORTED_MODULE_8__["default"])("/uploads.json"),
      headers: {
        "X-CSRF-Token": this.session.csrfToken
      }
    });
    this._uppyInstance.use(_uppy_drop_target__WEBPACK_IMPORTED_MODULE_6__["default"], {
      target: this.element
    });
    this._uppyInstance.on("upload", () => {
      this.set("uploading", true);
    });
    this._uppyInstance.on("upload-success", (file, response) => {
      this.set("field.value", response.body.url);
      this.set("uploading", false);
    });
    this._uppyInstance.on("upload-error", (file, error, response) => {
      let message = discourse_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t("wizard.upload_error");
      if (response.body.errors) {
        message = response.body.errors.join("\n");
      }
      this.dialog.alert(message);
      this.set("uploading", false);
    });
    this.element.querySelector(".wizard-hidden-upload-field").addEventListener("change", event => {
      const files = Array.from(event.target.files);
      files.forEach(file => {
        try {
          this._uppyInstance.addFile({
            source: `${this.id} file input`,
            name: file.name,
            type: file.type,
            data: file
          });
        } catch (err) {
          ( true && (0,_ember_debug__WEBPACK_IMPORTED_MODULE_2__.warn)(`error adding files to uppy: ${err}`, {
            id: "discourse.upload.uppy-add-files-error"
          }));
        }
      });
    });
  }
}, ((0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "previewComponent", [_dec], Object.getOwnPropertyDescriptor(_obj, "previewComponent"), _obj)), _obj)))));

/***/ }),

/***/ "./static/wizard/components/fields/index.js":
/*!**************************************************!*\
  !*** ./static/wizard/components/fields/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox */ "./static/wizard/components/fields/checkbox.js");
/* harmony import */ var _checkboxes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkboxes */ "./static/wizard/components/fields/checkboxes.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown */ "./static/wizard/components/fields/dropdown.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./static/wizard/components/fields/image.js");
/* harmony import */ var _styling_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styling-preview */ "./static/wizard/components/fields/styling-preview/index.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ "./static/wizard/components/fields/text.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  checkbox: _checkbox__WEBPACK_IMPORTED_MODULE_0__["default"],
  checkboxes: _checkboxes__WEBPACK_IMPORTED_MODULE_1__["default"],
  "styling-preview": _styling_preview__WEBPACK_IMPORTED_MODULE_4__["default"],
  dropdown: _dropdown__WEBPACK_IMPORTED_MODULE_2__["default"],
  image: _image__WEBPACK_IMPORTED_MODULE_3__["default"],
  text: _text__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./static/wizard/components/fields/styling-preview/-homepage-preview.js":
/*!******************************************************************************!*\
  !*** ./static/wizard/components/fields/styling-preview/-homepage-preview.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/preview */ "./static/wizard/lib/preview.js");
/* harmony import */ var _preview_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./-preview-base */ "./static/wizard/components/fields/styling-preview/-preview-base.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_preview_base__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
  width: 628,
  height: 322,
  logo: null,
  avatar: null,
  didUpdateAttrs() {
    this._super(...arguments);
    this.triggerRepaint();
  },
  images() {
    return {
      logo: this.wizard.logoUrl,
      avatar: "/images/wizard/trout.png"
    };
  },
  paint({
    ctx,
    colors,
    font,
    width,
    height
  }) {
    this.drawFullHeader(colors, font, this.logo);
    const homepageStyle = this.getHomepageStyle();
    if (homepageStyle === "latest") {
      this.drawPills(colors, font, height * 0.15);
      this.renderLatest(ctx, colors, font, width, height);
    } else if (["categories_only", "categories_with_featured_topics"].includes(homepageStyle)) {
      this.drawPills(colors, font, height * 0.15, {
        categories: true
      });
      this.renderCategories(ctx, colors, font, width, height);
    } else if (["categories_boxes", "categories_boxes_with_topics"].includes(homepageStyle)) {
      this.drawPills(colors, font, height * 0.15, {
        categories: true
      });
      const topics = homepageStyle === "categories_boxes_with_topics";
      this.renderCategoriesBoxes(ctx, colors, font, width, height, {
        topics
      });
    } else {
      this.drawPills(colors, font, height * 0.15, {
        categories: true
      });
      this.renderCategoriesWithTopics(ctx, colors, font, width, height);
    }
  },
  renderCategoriesBoxes(ctx, colors, font, width, height, opts) {
    opts = opts || {};
    const borderColor = (0,_lib_preview__WEBPACK_IMPORTED_MODULE_0__.darkLightDiff)(colors.primary, colors.secondary, 90, -75);
    const textColor = (0,_lib_preview__WEBPACK_IMPORTED_MODULE_0__.darkLightDiff)(colors.primary, colors.secondary, 50, 50);
    const margin = height * 0.03;
    const bodyFontSize = height / 440.0;
    const boxHeight = height * 0.7 - margin * 2;
    const descriptions = this.getDescriptions();
    const boxesSpacing = 15;
    const boxWidth = (width - margin * 2 - boxesSpacing * 2) / 3;
    this.categories().forEach((category, index) => {
      const boxStartX = margin + index * boxWidth + index * boxesSpacing;
      const boxStartY = height * 0.33;
      this.drawSquare(ctx, {
        x: boxStartX,
        y: boxStartY
      }, {
        x: boxStartX + boxWidth,
        y: boxStartY + boxHeight
      }, [{
        color: borderColor
      }, {
        color: borderColor
      }, {
        color: borderColor
      }, {
        color: category.color,
        width: 5
      }]);
      ctx.font = `Bold ${bodyFontSize * 1.3}em '${font}'`;
      ctx.fillStyle = colors.primary;
      ctx.textAlign = "center";
      ctx.fillText(category.name, boxStartX + boxWidth / 2, boxStartY + 25);
      ctx.textAlign = "left";
      if (opts.topics) {
        let startY = boxStartY + 60;
        this.getTitles().forEach(title => {
          ctx.font = `${bodyFontSize * 1}em '${font}'`;
          ctx.fillStyle = colors.tertiary;
          startY += this.fillTextMultiLine(ctx, title.split("\n").join(" "), boxStartX + 10, startY, 13, boxWidth * 0.95) + 8;
        });
      } else {
        ctx.font = `${bodyFontSize * 1}em '${font}'`;
        ctx.fillStyle = textColor;
        ctx.textAlign = "center";
        this.fillTextMultiLine(ctx, descriptions[index], boxStartX + boxWidth / 2, boxStartY + 60, 13, boxWidth * 0.8);
        ctx.textAlign = "left";
      }
    });
  },
  renderCategories(ctx, colors, font, width, height) {
    const textColor = (0,_lib_preview__WEBPACK_IMPORTED_MODULE_0__.darkLightDiff)(colors.primary, colors.secondary, 50, 50);
    const margin = height * 0.03;
    const bodyFontSize = height / 440.0;
    const titles = this.getTitles();
    let categoryHeight = height / 6;
    const drawLine = (x, y) => {
      ctx.beginPath();
      ctx.strokeStyle = (0,_lib_preview__WEBPACK_IMPORTED_MODULE_0__.darkLightDiff)(colors.primary, colors.secondary, 90, -75);
      ctx.moveTo(margin + x, y);
      ctx.lineTo(width - margin, y);
      ctx.stroke();
    };
    const cols = [0.025, 0.45, 0.53, 0.58, 0.94, 0.96].map(c => c * width);
    const headingY = height * 0.33;
    ctx.font = `${bodyFontSize * 0.9}em '${font}'`;
    ctx.fillStyle = textColor;
    ctx.fillText("Category", cols[0], headingY);
    const homepageStyle = this.getHomepageStyle();
    if (homepageStyle === "categories_only") {
      ctx.fillText("Topics", cols[4], headingY);
    } else {
      ctx.fillText("Topics", cols[1], headingY);
      ctx.fillText("Latest", cols[2], headingY);
      categoryHeight = height / 5;
    }
    let y = headingY + bodyFontSize * 12;
    ctx.lineWidth = 2;
    drawLine(0, y);
    drawLine(width / 2, y);

    // Categories
    this.categories().forEach(category => {
      const textPos = y + categoryHeight * 0.35;
      ctx.font = `Bold ${bodyFontSize * 1.1}em '${font}'`;
      ctx.fillStyle = colors.primary;
      ctx.fillText(category.name, cols[0], textPos);
      ctx.font = `${bodyFontSize * 0.8}em '${font}'`;
      ctx.fillStyle = textColor;
      ctx.fillText(titles[0], cols[0] - margin * 0.25, textPos + categoryHeight * 0.36);
      ctx.beginPath();
      ctx.moveTo(margin, y);
      ctx.strokeStyle = category.color;
      ctx.lineWidth = 3.5;
      ctx.lineTo(margin, y + categoryHeight);
      ctx.stroke();
      if (homepageStyle === "categories_with_featured_topics") {
        ctx.font = `${bodyFontSize}em '${font}'`;
        ctx.fillText(Math.floor(Math.random() * 90) + 10, cols[1] + 15, textPos);
      } else {
        ctx.font = `${bodyFontSize}em '${font}'`;
        ctx.fillText(Math.floor(Math.random() * 90) + 10, cols[5], textPos);
      }
      y += categoryHeight;
      ctx.lineWidth = 1;
      drawLine(0, y);
    });

    // Featured Topics
    if (homepageStyle === "categories_with_featured_topics") {
      const topicHeight = height / 15;
      y = headingY + bodyFontSize * 22;
      ctx.lineWidth = 1;
      ctx.fillStyle = colors.tertiary;
      titles.forEach(title => {
        ctx.font = `${bodyFontSize}em '${font}'`;
        const textPos = y + topicHeight * 0.35;
        ctx.fillStyle = colors.tertiary;
        ctx.fillText(`${title}`, cols[2], textPos);
        y += topicHeight;
      });
    }
  },
  renderCategoriesWithTopics(ctx, colors, font, width, height) {
    const textColor = (0,_lib_preview__WEBPACK_IMPORTED_MODULE_0__.darkLightDiff)(colors.primary, colors.secondary, 50, 50);
    const margin = height * 0.03;
    const bodyFontSize = height / 440.0;
    const drawLine = (x, y) => {
      ctx.beginPath();
      ctx.strokeStyle = (0,_lib_preview__WEBPACK_IMPORTED_MODULE_0__.darkLightDiff)(colors.primary, colors.secondary, 90, -75);
      ctx.moveTo(margin + x, y);
      ctx.lineTo(margin + x + width * 0.9 / 2, y);
      ctx.stroke();
    };
    const cols = [0.025, 0.42, 0.53, 0.58, 0.94].map(c => c * width);
    const headingY = height * 0.33;
    ctx.font = `${bodyFontSize * 0.9}em '${font}'`;
    ctx.fillStyle = textColor;
    ctx.fillText("Category", cols[0], headingY);
    ctx.fillText("Topics", cols[1], headingY);
    if (this.getHomepageStyle() === "categories_and_latest_topics") {
      ctx.fillText("Latest", cols[2], headingY);
    } else {
      ctx.fillText("Top", cols[2], headingY);
    }
    let y = headingY + bodyFontSize * 12;
    ctx.lineWidth = 2;
    drawLine(0, y);
    drawLine(width / 2, y);
    const categoryHeight = height / 6;
    const titles = this.getTitles();

    // Categories
    this.categories().forEach(category => {
      const textPos = y + categoryHeight * 0.35;
      ctx.font = `Bold ${bodyFontSize * 1.1}em '${font}'`;
      ctx.fillStyle = colors.primary;
      ctx.fillText(category.name, cols[0], textPos);
      ctx.font = `${bodyFontSize * 0.8}em '${font}'`;
      ctx.fillStyle = textColor;
      ctx.fillText(titles[0], cols[0] - margin * 0.25, textPos + categoryHeight * 0.36);
      ctx.beginPath();
      ctx.moveTo(margin, y);
      ctx.strokeStyle = category.color;
      ctx.lineWidth = 3.5;
      ctx.lineTo(margin, y + categoryHeight);
      ctx.stroke();
      ctx.font = `${bodyFontSize}em '${font}'`;
      ctx.fillText(Math.floor(Math.random() * 90) + 10, cols[1] + 15, textPos);
      y += categoryHeight;
      ctx.lineWidth = 1;
      drawLine(0, y);
    });

    // Latest/Top Topics
    const topicHeight = height / 8;
    const avatarSize = topicHeight * 0.7;
    y = headingY + bodyFontSize * 12;
    ctx.lineWidth = 1;
    ctx.fillStyle = textColor;
    titles.forEach(title => {
      const category = this.categories()[0];
      ctx.font = `${bodyFontSize}em '${font}'`;
      const textPos = y + topicHeight * 0.45;
      ctx.fillStyle = textColor;
      this.scaleImage(this.avatar, cols[2], y + margin * 0.6, avatarSize, avatarSize);
      ctx.fillText(title, cols[3], textPos);
      ctx.font = `Bold ${bodyFontSize}em '${font}'`;
      ctx.fillText(Math.floor(Math.random() * 90) + 10, cols[4], textPos);
      ctx.font = `${bodyFontSize}em '${font}'`;
      ctx.fillText(`1h`, cols[4], textPos + topicHeight * 0.4);
      ctx.beginPath();
      ctx.fillStyle = category.color;
      const badgeSize = topicHeight * 0.1;
      ctx.font = `Bold ${bodyFontSize * 0.5}em '${font}'`;
      ctx.rect(cols[3] + margin * 0.5, y + topicHeight * 0.65, badgeSize, badgeSize);
      ctx.fill();
      ctx.fillStyle = colors.primary;
      ctx.fillText(category.name, cols[3] + badgeSize * 3, y + topicHeight * 0.76);
      y += topicHeight;
      drawLine(width / 2, y);
    });
  },
  getHomepageStyle() {
    return this.step.valueFor("homepage_style");
  },
  getTitles() {
    return _lib_preview__WEBPACK_IMPORTED_MODULE_0__.LOREM.split(".").slice(0, 8).map(t => t.substring(0, 40));
  },
  getDescriptions() {
    return _lib_preview__WEBPACK_IMPORTED_MODULE_0__.LOREM.split(".");
  },
  renderLatest(ctx, colors, font, width, height) {
    const rowHeight = height / 6.6;
    // accounts for hard-set color variables in solarized themes
    const textColor = colors.primary_medium || (0,_lib_preview__WEBPACK_IMPORTED_MODULE_0__.darkLightDiff)(colors.primary, colors.secondary, 50, 50);
    const bodyFontSize = height / 440.0;
    ctx.font = `${bodyFontSize}em '${font}'`;
    const margin = height * 0.03;
    const drawLine = y => {
      ctx.beginPath();
      // accounts for hard-set color variables in solarized themes
      ctx.strokeStyle = colors.primary_low || (0,_lib_preview__WEBPACK_IMPORTED_MODULE_0__.darkLightDiff)(colors.primary, colors.secondary, 90, -75);
      ctx.moveTo(margin, y);
      ctx.lineTo(width - margin, y);
      ctx.stroke();
    };
    const cols = [0.02, 0.66, 0.8, 0.87, 0.93].map(c => c * width);

    // Headings
    const headingY = height * 0.33;
    ctx.fillStyle = textColor;
    ctx.font = `${bodyFontSize * 0.9}em '${font}'`;
    ctx.fillText("Topic", cols[0], headingY);
    ctx.fillText("Replies", cols[2], headingY);
    ctx.fillText("Views", cols[3], headingY);
    ctx.fillText("Activity", cols[4], headingY);

    // Topics
    let y = headingY + rowHeight / 2.6;
    ctx.lineWidth = 2;
    drawLine(y);
    ctx.font = `${bodyFontSize}em '${font}'`;
    ctx.lineWidth = 1;
    this.getTitles().forEach(title => {
      const textPos = y + rowHeight * 0.4;
      ctx.fillStyle = textColor;
      ctx.fillText(title, cols[0], textPos);
      const category = this.categories()[0];
      ctx.beginPath();
      ctx.fillStyle = category.color;
      const badgeSize = rowHeight * 0.15;
      ctx.font = `Bold ${bodyFontSize * 0.75}em '${font}'`;
      ctx.rect(cols[0] + 4, y + rowHeight * 0.6, badgeSize, badgeSize);
      ctx.fill();
      ctx.fillStyle = colors.primary;
      ctx.fillText(category.name, cols[0] + badgeSize * 2, y + rowHeight * 0.73);
      this.scaleImage(this.avatar, cols[1], y + rowHeight * 0.25, rowHeight * 0.5, rowHeight * 0.5);
      ctx.fillStyle = textColor;
      ctx.font = `${bodyFontSize}em '${font}'`;
      for (let j = 2; j <= 4; j++) {
        ctx.fillText(j === 4 ? "1h" : Math.floor(Math.random() * 90) + 10, cols[j] + margin, y + rowHeight * 0.6);
      }
      drawLine(y + rowHeight * 1);
      y += rowHeight;
    });
  },
  fillTextMultiLine(ctx, text, x, y, lineHeight, maxWidth) {
    const words = text.split(" ").filter(f => f);
    let line = "";
    let totalHeight = 0;
    words.forEach(word => {
      if (ctx.measureText(`${line} ${word} `).width >= maxWidth) {
        ctx.fillText(line, x, y + totalHeight);
        totalHeight += lineHeight;
        line = word.trim();
      } else {
        line = `${line} ${word}`.trim();
      }
    });
    ctx.fillText(line, x, y + totalHeight);
    totalHeight += lineHeight;
    return totalHeight;
  },
  // Edges expected in this order: NW to NE -> NE to SE -> SE to SW -> SW to NW
  drawSquare(ctx, from, to, edges = []) {
    const edgeConfiguration = index => {
      const edge = edges[index] || {};
      return {
        width: edge.width || 1,
        color: edge.color || "#333"
      };
    };
    [{
      from: {
        x: from.x,
        y: from.y
      },
      to: {
        x: to.x,
        y: from.y
      }
    }, {
      from: {
        x: to.x,
        y: from.y
      },
      to: {
        x: to.x,
        y: to.y
      }
    }, {
      from: {
        x: to.x,
        y: to.y
      },
      to: {
        x: from.x,
        y: to.y
      }
    }, {
      from: {
        x: from.x,
        y: to.y
      },
      to: {
        x: from.x,
        y: from.y
      }
    }].forEach((path, index) => {
      const configuration = edgeConfiguration(index);
      ctx.beginPath();
      ctx.moveTo(path.from.x, path.from.y);
      ctx.strokeStyle = configuration.color;
      ctx.lineWidth = configuration.width;
      ctx.lineTo(path.to.x, path.to.y);
      ctx.stroke();
    });
  }
}));

/***/ }),

/***/ "./static/wizard/components/fields/styling-preview/-preview-base.js":
/*!**************************************************************************!*\
  !*** ./static/wizard/components/fields/styling-preview/-preview-base.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOREM: () => (/* binding */ LOREM),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ember/object */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fobject&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ember_object__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ember_runloop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ember/runloop */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Frunloop&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_runloop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ember_runloop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ember_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ember/template */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ember_template__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rsvp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rsvp */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2Frsvp&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var rsvp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rsvp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var discourse_lib_preload_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! discourse/lib/preload-store */ "./lib/preload-store.js");
/* harmony import */ var discourse_common_lib_get_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! discourse-common/lib/get-url */ "../rewritten-packages/discourse-common.d19c518e/node_modules/discourse-common/lib/get-url.js");
/* harmony import */ var _lib_preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../lib/preview */ "./static/wizard/lib/preview.js");
/* harmony import */ var _preview_base_hbs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./-preview-base.hbs */ "./static/wizard/components/fields/styling-preview/-preview-base.hbs");

var _obj;
/*eslint no-bitwise:0 */









const LOREM = `
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Nullam eget sem non elit
tincidunt rhoncus. Fusce
velit nisl, porttitor sed
nisl ac, consectetur interdum
metus. Fusce in consequat
augue, vel facilisis felis.`;
const scaled = {};
function canvasFor(image, w, h) {
  w = Math.ceil(w);
  h = Math.ceil(h);
  const scale = window.devicePixelRatio;
  const can = document.createElement("canvas");
  can.width = w * scale;
  can.height = h * scale;
  const ctx = can.getContext("2d");
  ctx.scale(scale, scale);
  ctx.drawImage(image, 0, 0, w, h);
  return can;
}
const scale = window.devicePixelRatio;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_component__WEBPACK_IMPORTED_MODULE_1__.setComponentTemplate)(_preview_base_hbs__WEBPACK_IMPORTED_MODULE_9__["default"], _ember_component__WEBPACK_IMPORTED_MODULE_1___default().extend((_obj = {
  get elementWidth() {
    return this.width * scale;
  },
  get elementHeight() {
    return this.height * scale;
  },
  get canvasStyle() {
    return (0,_ember_template__WEBPACK_IMPORTED_MODULE_4__.htmlSafe)(`width:${this.width}px;height:${this.height}px`);
  },
  ctx: null,
  loaded: false,
  loadingFontVariants: false,
  didInsertElement() {
    this._super(...arguments);
    this.fontMap = discourse_lib_preload_store__WEBPACK_IMPORTED_MODULE_6__["default"].get("fontMap");
    this.loadedFonts = new Set();
    const c = this.element.querySelector("canvas");
    this.ctx = c.getContext("2d");
    this.ctx.scale(scale, scale);
    if (this.step) {
      this.step.findField("color_scheme")?.addListener(this.themeChanged);
      this.step.findField("homepage_style")?.addListener(this.themeChanged);
      this.step.findField("body_font")?.addListener(this.themeBodyFontChanged);
      this.step.findField("heading_font")?.addListener(this.themeHeadingFontChanged);
    }
    this.reload();
  },
  willDestroyElement() {
    this._super(...arguments);
    if (this.step) {
      this.step.findField("color_scheme")?.removeListener(this.themeChanged);
      this.step.findField("homepage_style")?.removeListener(this.themeChanged);
      this.step.findField("body_font")?.removeListener(this.themeBodyFontChanged);
      this.step.findField("heading_font")?.removeListener(this.themeHeadingFontChanged);
    }
  },
  themeChanged() {
    this.triggerRepaint();
  },
  themeBodyFontChanged() {
    if (!this.loadingFontVariants) {
      this.loadFontVariants(this.wizard.font);
    }
  },
  themeHeadingFontChanged() {
    if (!this.loadingFontVariants) {
      this.loadFontVariants(this.wizard.headingFont);
    }
  },
  loadFontVariants(font) {
    const fontVariantData = this.fontMap[font.id];

    // System font for example does not need to load from a remote source.
    if (!fontVariantData) {
      this.loadedFonts.add(font.id);
    }
    if (fontVariantData && !this.loadedFonts.has(font.id)) {
      this.loadingFontVariants = true;
      const fontFaces = fontVariantData.map(fontVariant => {
        return new FontFace(font.label, `url(${fontVariant.url})`, {
          style: "normal",
          weight: fontVariant.weight
        });
      });
      rsvp__WEBPACK_IMPORTED_MODULE_5__.Promise.all(fontFaces.map(fontFace => fontFace.load().then(loadedFont => {
        document.fonts.add(loadedFont);

        // We use our own Set because, though document.fonts.check is available,
        // it does not seem very reliable, returning false for fonts that have
        // definitely been loaded.
        this.loadedFonts.add(font.id);
      }))).then(() => {
        this.triggerRepaint();
      }).finally(() => {
        this.loadingFontVariants = false;
      });
    } else if (this.loadedFonts.has(font.id)) {
      this.triggerRepaint();
    }
  },
  images() {},
  // NOTE: This works for fonts included in a style that is actually using the
  // @font-faces on load, but for fonts that we aren't using yet we need to
  // make sure they are loaded before rendering the canvas via loadFontVariants.
  loadFonts() {
    return document.fonts.ready;
  },
  loadImages() {
    const images = this.images();
    if (images) {
      return rsvp__WEBPACK_IMPORTED_MODULE_5__.Promise.all(Object.keys(images).map(id => {
        return loadImage(images[id]).then(img => this[id] = img);
      }));
    }
    return rsvp__WEBPACK_IMPORTED_MODULE_5__.Promise.resolve();
  },
  reload() {
    rsvp__WEBPACK_IMPORTED_MODULE_5__.Promise.all([this.loadFonts(), this.loadImages()]).then(() => {
      this.loaded = true;
      this.triggerRepaint();
    });
  },
  triggerRepaint() {
    (0,_ember_runloop__WEBPACK_IMPORTED_MODULE_3__.scheduleOnce)("afterRender", this, "repaint");
  },
  repaint() {
    if (!this.loaded) {
      return false;
    }
    const colorsArray = this.wizard.currentColors;
    if (!colorsArray) {
      return;
    }
    let colors = {};
    colorsArray.forEach(function (c) {
      const name = c.name;
      colors[name] = `#${c.hex}`;
    });
    const {
      font,
      headingFont
    } = this.wizard;
    if (!font) {
      return;
    }
    const {
      ctx
    } = this;
    ctx.fillStyle = colors.secondary;
    ctx.fillRect(0, 0, this.width, this.height);
    const options = {
      ctx,
      colors,
      font: font?.label,
      headingFont: headingFont?.label,
      width: this.width,
      height: this.height
    };
    this.paint(options);
  },
  categories() {
    return [{
      name: "consecteteur",
      color: "#652D90"
    }, {
      name: "ultrices",
      color: "#3AB54A"
    }, {
      name: "placerat",
      color: "#25AAE2"
    }];
  },
  scaleImage(image, x, y, w, h) {
    w = Math.floor(w);
    h = Math.floor(h);
    const {
      ctx
    } = this;
    const key = `${image.src}-${w}-${h}`;
    if (!scaled[key]) {
      let copy = image;
      let ratio = copy.width / copy.height;
      let newH = copy.height * 0.5;
      while (newH > h) {
        copy = canvasFor(copy, ratio * newH, newH);
        newH = newH * 0.5;
      }
      scaled[key] = copy;
    }
    ctx.drawImage(scaled[key], x, y, w, h);
  },
  drawFullHeader(colors, font, logo) {
    const {
      ctx
    } = this;
    const headerHeight = this.height * 0.15;
    (0,_lib_preview__WEBPACK_IMPORTED_MODULE_8__.drawHeader)(ctx, colors, this.width, headerHeight);
    const avatarSize = this.height * 0.1;
    const headerMargin = headerHeight * 0.2;
    if (logo) {
      const logoHeight = headerHeight - headerMargin * 2;
      const ratio = logoHeight / logo.height;
      this.scaleImage(logo, headerMargin, headerMargin, logo.width * ratio, logoHeight);
      this.scaleImage(logo, this.width, headerMargin);
    }

    // Top right menu
    this.scaleImage(this.avatar, this.width - avatarSize - headerMargin, headerMargin, avatarSize, avatarSize);
    // accounts for hard-set color variables in solarized themes
    ctx.fillStyle = colors.primary_low_mid || (0,_lib_preview__WEBPACK_IMPORTED_MODULE_8__.darkLightDiff)(colors.primary, colors.secondary, 45, 55);
    const pathScale = headerHeight / 1200;
    // search icon SVG path
    const searchIcon = new Path2D("M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z");
    // hamburger icon
    const hamburgerIcon = new Path2D("M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z");
    ctx.save(); // Save the previous state for translation and scale
    ctx.translate(this.width - avatarSize * 3 - headerMargin * 0.5, avatarSize / 2);
    // need to scale paths otherwise they're too large
    ctx.scale(pathScale, pathScale);
    ctx.fill(searchIcon);
    ctx.restore();
    ctx.save();
    ctx.translate(this.width - avatarSize * 2 - headerMargin * 0.5, avatarSize / 2);
    ctx.scale(pathScale, pathScale);
    ctx.fill(hamburgerIcon);
    ctx.restore();
  },
  drawPills(colors, font, headerHeight, opts) {
    opts = opts || {};
    const {
      ctx
    } = this;
    const categoriesSize = headerHeight * 2;
    const badgeHeight = categoriesSize * 0.25;
    const headerMargin = headerHeight * 0.2;
    ctx.beginPath();
    ctx.strokeStyle = colors.primary;
    ctx.lineWidth = 0.5;
    ctx.rect(headerMargin, headerHeight + headerMargin, categoriesSize, badgeHeight);
    ctx.stroke();
    const fontSize = Math.round(badgeHeight * 0.5);
    ctx.font = `${fontSize}px '${font}'`;
    ctx.fillStyle = colors.primary;
    ctx.fillText("all categories", headerMargin * 1.5, headerHeight + headerMargin * 1.4 + fontSize);
    const pathScale = badgeHeight / 1000;
    // caret icon
    const caretIcon = new Path2D("M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z");
    ctx.save();
    ctx.translate(categoriesSize - headerMargin / 4, headerHeight + headerMargin + badgeHeight / 4);
    ctx.scale(pathScale, pathScale);
    ctx.fill(caretIcon);
    ctx.restore();
    const text = opts.categories ? "Categories" : "Latest";
    const activeWidth = categoriesSize * (opts.categories ? 0.8 : 0.55);
    ctx.beginPath();
    ctx.fillStyle = colors.quaternary;
    ctx.rect(headerMargin * 2 + categoriesSize, headerHeight + headerMargin, activeWidth, badgeHeight);
    ctx.fill();
    ctx.font = `${fontSize}px '${font}'`;
    ctx.fillStyle = colors.secondary;
    let x = headerMargin * 3.0 + categoriesSize;
    ctx.fillText(text, x - headerMargin * 0.1, headerHeight + headerMargin * 1.5 + fontSize);
    ctx.fillStyle = colors.primary;
    x += categoriesSize * (opts.categories ? 0.8 : 0.6);
    ctx.fillText("New", x, headerHeight + headerMargin * 1.5 + fontSize);
    x += categoriesSize * 0.4;
    ctx.fillText("Unread", x, headerHeight + headerMargin * 1.5 + fontSize);
    x += categoriesSize * 0.6;
    ctx.fillText("Top", x, headerHeight + headerMargin * 1.5 + fontSize);
  }
}, ((0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "themeChanged", [_ember_object__WEBPACK_IMPORTED_MODULE_2__.action], Object.getOwnPropertyDescriptor(_obj, "themeChanged"), _obj), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "themeBodyFontChanged", [_ember_object__WEBPACK_IMPORTED_MODULE_2__.action], Object.getOwnPropertyDescriptor(_obj, "themeBodyFontChanged"), _obj), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "themeHeadingFontChanged", [_ember_object__WEBPACK_IMPORTED_MODULE_2__.action], Object.getOwnPropertyDescriptor(_obj, "themeHeadingFontChanged"), _obj)), _obj))));
function loadImage(src) {
  if (!src) {
    return rsvp__WEBPACK_IMPORTED_MODULE_5__.Promise.resolve();
  }
  const img = new Image();
  img.src = (0,discourse_common_lib_get_url__WEBPACK_IMPORTED_MODULE_7__["default"])(src);
  return new rsvp__WEBPACK_IMPORTED_MODULE_5__.Promise(resolve => img.onload = () => resolve(img));
}

/***/ }),

/***/ "./static/wizard/components/fields/styling-preview/index.js":
/*!******************************************************************!*\
  !*** ./static/wizard/components/fields/styling-preview/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ember/object */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fobject&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ember_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! discourse-common/utils/decorators */ "../rewritten-packages/discourse-common.d19c518e/node_modules/discourse-common/utils/decorators.js");
/* harmony import */ var discourse_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! discourse-i18n */ "../../../../discourse-i18n/src/index.js");
/* harmony import */ var _lib_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/preview */ "./static/wizard/lib/preview.js");
/* harmony import */ var _homepage_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./-homepage-preview */ "./static/wizard/components/fields/styling-preview/-homepage-preview.js");
/* harmony import */ var _preview_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./-preview-base */ "./static/wizard/components/fields/styling-preview/-preview-base.js");
/* harmony import */ var _index_hbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.hbs */ "./static/wizard/components/fields/styling-preview/index.hbs");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_8__);

var _dec, _obj;








const LOREM = `
Lorem ipsum dolor sit amet, consectetur adipiscing.
Nullam eget sem non elit tincidunt rhoncus. Fusce
velit nisl, porttitor sed nisl ac, consectetur interdum
metus. Fusce in consequat augue, vel facilisis felis.`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_component__WEBPACK_IMPORTED_MODULE_8__.setComponentTemplate)(_index_hbs__WEBPACK_IMPORTED_MODULE_7__["default"], _preview_base__WEBPACK_IMPORTED_MODULE_6__["default"].extend((_dec = (0,discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_2__.observes)("previewTopic"), (_obj = {
  width: 628,
  height: 322,
  logo: null,
  avatar: null,
  previewTopic: true,
  draggingActive: false,
  startX: 0,
  scrollLeft: 0,
  HomepagePreview: _homepage_preview__WEBPACK_IMPORTED_MODULE_5__["default"],
  init() {
    this._super(...arguments);
    this.step.findField("homepage_style")?.addListener(this.onHomepageStyleChange);
  },
  willDestroy() {
    this._super(...arguments);
    this.step.findField("homepage_style")?.removeListener(this.onHomepageStyleChange);
  },
  didInsertElement() {
    this._super(...arguments);
    this.element.addEventListener("mouseleave", this.handleMouseLeave);
    this.element.addEventListener("mousemove", this.handleMouseMove);
  },
  willDestroyElement() {
    this._super(...arguments);
    this.element.removeEventListener("mouseleave", this.handleMouseLeave);
    this.element.removeEventListener("mousemove", this.handleMouseMove);
  },
  mouseDown(e) {
    const slider = this.element.querySelector(".previews");
    this.setProperties({
      draggingActive: true,
      startX: e.pageX - slider.offsetLeft,
      scrollLeft: slider.scrollLeft
    });
  },
  handleMouseLeave() {
    this.set("draggingActive", false);
  },
  mouseUp() {
    this.set("draggingActive", false);
  },
  handleMouseMove(e) {
    if (!this.draggingActive) {
      return;
    }
    e.preventDefault();
    const slider = this.element.querySelector(".previews"),
      x = e.pageX - slider.offsetLeft,
      walk = (x - this.startX) * 1.5;
    slider.scrollLeft = this.scrollLeft - walk;
    if (slider.scrollLeft < 50) {
      this.set("previewTopic", true);
    }
    if (slider.scrollLeft > slider.offsetWidth - 50) {
      this.set("previewTopic", false);
    }
  },
  didUpdateAttrs() {
    this._super(...arguments);
    this.triggerRepaint();
  },
  onHomepageStyleChange() {
    this.set("previewTopic", false);
  },
  scrollPreviewArea() {
    const el = this.element.querySelector(".previews");
    el.scrollTo({
      top: 0,
      left: this.previewTopic ? 0 : el.scrollWidth - el.offsetWidth,
      behavior: "smooth"
    });
  },
  images() {
    return {
      logo: this.wizard.logoUrl,
      avatar: "/images/wizard/trout.png"
    };
  },
  paint({
    ctx,
    colors,
    font,
    headingFont,
    width,
    height
  }) {
    const headerHeight = height * 0.3;
    this.drawFullHeader(colors, headingFont, this.logo);
    const margin = 20;
    const avatarSize = height * 0.15;
    const lineHeight = height / 14;

    // Draw a fake topic
    this.scaleImage(this.avatar, margin, headerHeight + height * 0.09, avatarSize, avatarSize);
    const titleFontSize = headerHeight / 55;
    ctx.beginPath();
    ctx.fillStyle = colors.primary;
    ctx.font = `bold ${titleFontSize}em '${headingFont}'`;
    ctx.fillText(discourse_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t("wizard.previews.topic_title"), margin, height * 0.3);
    const bodyFontSize = height / 330.0;
    ctx.font = `${bodyFontSize}em '${font}'`;
    let line = 0;
    const lines = LOREM.split("\n");
    for (let i = 0; i < 5; i++) {
      line = height * 0.35 + i * lineHeight;
      ctx.fillText(lines[i], margin + avatarSize + margin, line);
    }

    // Share Button
    const shareButtonWidth = discourse_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t("wizard.previews.share_button").length * 11;
    ctx.beginPath();
    ctx.rect(margin, line + lineHeight, shareButtonWidth, height * 0.1);
    // accounts for hard-set color variables in solarized themes
    ctx.fillStyle = colors.primary_low || (0,_lib_preview__WEBPACK_IMPORTED_MODULE_4__.darkLightDiff)(colors.primary, colors.secondary, 90, 65);
    ctx.fillStyle = (0,_lib_preview__WEBPACK_IMPORTED_MODULE_4__.chooseDarker)(colors.primary, colors.secondary);
    ctx.font = `${bodyFontSize}em '${font}'`;
    ctx.fillText(discourse_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t("wizard.previews.share_button"), margin + 10, line + lineHeight * 1.9);

    // Reply Button
    const replyButtonWidth = discourse_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t("wizard.previews.reply_button").length * 11;
    ctx.beginPath();
    ctx.rect(shareButtonWidth + margin + 10, line + lineHeight, replyButtonWidth, height * 0.1);
    ctx.fillStyle = colors.tertiary;
    ctx.fill();
    ctx.fillStyle = colors.secondary;
    ctx.font = `${bodyFontSize}em '${font}'`;
    ctx.fillText(discourse_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t("wizard.previews.reply_button"), shareButtonWidth + margin + 20, line + lineHeight * 1.9);

    // Draw Timeline
    const timelineX = width * 0.86;
    ctx.beginPath();
    ctx.strokeStyle = colors.tertiary;
    ctx.lineWidth = 0.5;
    ctx.moveTo(timelineX, height * 0.3);
    ctx.lineTo(timelineX, height * 0.7);
    ctx.stroke();

    // Timeline
    ctx.beginPath();
    ctx.strokeStyle = colors.tertiary;
    ctx.lineWidth = 2;
    ctx.moveTo(timelineX, height * 0.3);
    ctx.lineTo(timelineX, height * 0.4);
    ctx.stroke();
    ctx.font = `Bold ${bodyFontSize}em ${font}`;
    ctx.fillStyle = colors.primary;
    ctx.fillText("1 / 20", timelineX + margin, height * 0.3 + margin * 1.5);
  },
  setPreviewHomepage(event) {
    event?.preventDefault();
    this.set("previewTopic", false);
  },
  setPreviewTopic(event) {
    event?.preventDefault();
    this.set("previewTopic", true);
  }
}, ((0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "handleMouseLeave", [discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_2__.bind], Object.getOwnPropertyDescriptor(_obj, "handleMouseLeave"), _obj), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "handleMouseMove", [discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_2__.bind], Object.getOwnPropertyDescriptor(_obj, "handleMouseMove"), _obj), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "onHomepageStyleChange", [discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_2__.bind], Object.getOwnPropertyDescriptor(_obj, "onHomepageStyleChange"), _obj), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "scrollPreviewArea", [_dec], Object.getOwnPropertyDescriptor(_obj, "scrollPreviewArea"), _obj), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "setPreviewHomepage", [_ember_object__WEBPACK_IMPORTED_MODULE_1__.action], Object.getOwnPropertyDescriptor(_obj, "setPreviewHomepage"), _obj), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj, "setPreviewTopic", [_ember_object__WEBPACK_IMPORTED_MODULE_1__.action], Object.getOwnPropertyDescriptor(_obj, "setPreviewTopic"), _obj)), _obj)))));

/***/ }),

/***/ "./static/wizard/components/fields/text.js":
/*!*************************************************!*\
  !*** ./static/wizard/components/fields/text.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.hbs */ "./static/wizard/components/fields/text.hbs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ember_component__WEBPACK_IMPORTED_MODULE_0__.setComponentTemplate)(_text_hbs__WEBPACK_IMPORTED_MODULE_1__["default"], _ember_component__WEBPACK_IMPORTED_MODULE_0___default().extend({})));

/***/ }),

/***/ "./static/wizard/components/wizard-canvas.js":
/*!***************************************************!*\
  !*** ./static/wizard/components/wizard-canvas.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WizardCanvasComponent)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glimmer/component */ "../rewritten-packages/@glimmer/component.7c4f5854/node_modules/@glimmer/component/index.js");
/* harmony import */ var _ember_render_modifiers_modifiers_did_insert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ember/render-modifiers/modifiers/did-insert */ "../rewritten-packages/@ember/render-modifiers.261932ed/node_modules/@ember/render-modifiers/modifiers/did-insert.js");
/* harmony import */ var _ember_render_modifiers_modifiers_will_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ember/render-modifiers/modifiers/will-destroy */ "../rewritten-packages/@ember/render-modifiers.261932ed/node_modules/@ember/render-modifiers/modifiers/will-destroy.js");
/* harmony import */ var discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! discourse-common/utils/decorators */ "../rewritten-packages/discourse-common.d19c518e/node_modules/discourse-common/utils/decorators.js");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_7__);


var _class, _class2;






const MAX_PARTICLES = 150;
const SIZE = 144;
const COLORS = ["--tertiary", "--quaternary", "--tertiary-medium", "--quaternary-low"];
let Particle = class Particle {
  constructor(width1, height1) {
    this.reset(width1, height1);
  }
  reset(width1, height1) {
    this.y = Math.random() * (height1 + SIZE) - SIZE;
    this.origX = Math.random() * (width1 + SIZE);
    this.speed = 0.5 + Math.random();
    this.ang = Math.random() * 2 * Math.PI;
    this.scale = Math.random() * 0.4 + 0.2;
    this.radius = Math.random() * 25 + 25;
    const colorVar1 = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.color = getComputedStyle(document.body).getPropertyValue(colorVar1);
    this.flipped = Math.random() > 0.5 ? 1 : -1;
  }
  move(width1, height1) {
    this.y += this.speed;
    if (this.y > height1 + SIZE) {
      this.reset(width1, height1);
      // start at the top
      this.y = -SIZE;
    }
    this.ang += this.speed / 30.0;
    if (this.ang > 2 * Math.PI) {
      this.ang = 0;
    }
    this.x = this.origX + this.radius * Math.sin(this.ang);
  }
};
let WizardCanvasComponent = (_class = (_class2 = class WizardCanvasComponent extends _glimmer_component__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(...args) {
    super(...args);
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "canvas", null);
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "particles", null);
  }
  get ready() {
    return this.canvas !== null;
  }
  get ctx() {
    return this.canvas.getContext("2d");
  }
  setup(canvas1) {
    this.canvas = canvas1;
    this.resized();
    let {
      width: width1,
      height: height1
    } = canvas1;
    this.particles = [];
    for (let i1 = 0; i1 < MAX_PARTICLES; i1++) {
      this.particles.push(new Particle(width1, height1));
    }
    this.paint(width1, height1);
    window.addEventListener("resize", this.resized);
  }
  teardown() {
    this.canvas = null;
    window.removeEventListener("resize", this.resized);
  }
  resized() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  paint() {
    if (!this.ready) {
      return;
    }
    let {
      ctx: ctx1
    } = this;
    let {
      width: width1,
      height: height1
    } = this.canvas;
    ctx1.clearRect(0, 0, width1, height1);
    for (let particle1 of this.particles) {
      particle1.move(width1, height1);
      this.drawParticle(ctx1, particle1);
    }
    window.requestAnimationFrame(this.paint);
  }
  drawParticle(c1, p1) {
    c1.save();
    c1.translate(p1.x - SIZE, p1.y - SIZE);
    c1.scale(p1.scale * p1.flipped, p1.scale);
    c1.fillStyle = p1.color;
    c1.strokeStyle = p1.color;
    c1.globalAlpha = "1.0";
    c1.lineWidth = "1";
    c1.lineCap = "butt";
    c1.lineJoin = "round";
    c1.mitterLimit = "1";
    c1.beginPath();
    c1.moveTo(97.9, 194.9);
    c1.lineTo(103.5, 162.9);
    c1.bezierCurveTo(88.7, 152, 84.2, 139.7, 90.2, 126.3);
    c1.bezierCurveTo(99.5, 105.6, 124.6, 89.6, 159.7, 100.4);
    c1.lineTo(159.7, 100.4);
    c1.bezierCurveTo(175.9, 105.4, 186.4, 111.2, 192.6, 118.5);
    c1.bezierCurveTo(200, 127.2, 201.6, 138.4, 197.5, 152.7);
    c1.bezierCurveTo(194, 165, 187.4, 173.6, 177.9, 178.3);
    c1.bezierCurveTo(165.6, 184.4, 148.4, 183.7, 129.4, 176.3);
    c1.bezierCurveTo(127.7, 175.6, 126, 174.9, 124.4, 174.2);
    c1.lineTo(97.9, 194.9);
    c1.closePath();
    c1.moveTo(138, 99.3);
    c1.bezierCurveTo(115.4, 99.3, 99.3, 111.9, 92.4, 127.3);
    c1.bezierCurveTo(86.8, 139.7, 91.2, 151.2, 105.5, 161.5);
    c1.lineTo(106.1, 161.9);
    c1.lineTo(101.2, 189.4);
    c1.lineTo(124, 171.7);
    c1.lineTo(124.6, 172);
    c1.bezierCurveTo(126.4, 172.8, 128.3, 173.6, 130.2, 174.3);
    c1.bezierCurveTo(148.6, 181.4, 165.1, 182.2, 176.8, 176.4);
    c1.bezierCurveTo(185.7, 172, 191.9, 163.9, 195.2, 152.2);
    c1.bezierCurveTo(202.4, 127.2, 191.9, 112.8, 159, 102.7);
    c1.lineTo(159, 102.7);
    c1.bezierCurveTo(151.6, 100.3, 144.5, 99.3, 138, 99.3);
    c1.closePath();
    c1.fill();
    c1.stroke();
    c1.beginPath();
    c1.moveTo(115.7, 136.2);
    c1.bezierCurveTo(115.7, 137.9, 115, 139.3, 113.3, 139.3);
    c1.bezierCurveTo(111.6, 139.3, 110.2, 137.9, 110.2, 136.2);
    c1.bezierCurveTo(110.2, 134.5, 111.6, 133.1, 113.3, 133.1);
    c1.bezierCurveTo(115, 133, 115.7, 134.4, 115.7, 136.2);
    c1.closePath();
    c1.fill();
    c1.stroke();
    c1.beginPath();
    c1.moveTo(145.8, 141.6);
    c1.bezierCurveTo(145.8, 143.3, 144.4, 144.1, 142.7, 144.1);
    c1.bezierCurveTo(141, 144.1, 139.6, 143.4, 139.6, 141.6);
    c1.bezierCurveTo(139.6, 141.6, 141, 138.5, 142.7, 138.5);
    c1.bezierCurveTo(144.4, 138.5, 145.8, 139.9, 145.8, 141.6);
    c1.closePath();
    c1.fill();
    c1.stroke();
    c1.beginPath();
    c1.moveTo(171.6, 146.8);
    c1.bezierCurveTo(171.6, 148.5, 171, 149.9, 169.2, 149.9);
    c1.bezierCurveTo(167.5, 149.9, 166.1, 148.5, 166.1, 146.8);
    c1.bezierCurveTo(166.1, 145.1, 167.5, 143.7, 169.2, 143.7);
    c1.bezierCurveTo(171, 143.6, 171.6, 145, 171.6, 146.8);
    c1.closePath();
    c1.fill();
    c1.stroke();
    c1.restore();
  }
}, (0,_ember_component__WEBPACK_IMPORTED_MODULE_7__.setComponentTemplate)((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_6__.createTemplateFactory)(
/*
  
    <canvas
      class="wizard-canvas"
      {{didInsert this.setup}}
      {{willDestroy this.teardown}}
    />
  
*/
{
  "id": "LWXPRH95",
  "block": "[[[1,\"\\n    \"],[11,\"canvas\"],[24,0,\"wizard-canvas\"],[4,[32,0],[[30,0,[\"setup\"]]],null],[4,[32,1],[[30,0,[\"teardown\"]]],null],[12],[13],[1,\"\\n  \"]],[],false,[]]",
  "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/static/wizard/components/wizard-canvas.js",
  "scope": () => [_ember_render_modifiers_modifiers_did_insert__WEBPACK_IMPORTED_MODULE_3__["default"], _ember_render_modifiers_modifiers_will_destroy__WEBPACK_IMPORTED_MODULE_4__["default"]],
  "isStrictMode": true
}), _class2), _class2), ((0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "setup", [discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_5__.bind], Object.getOwnPropertyDescriptor(_class.prototype, "setup"), _class.prototype), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "teardown", [discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_5__.bind], Object.getOwnPropertyDescriptor(_class.prototype, "teardown"), _class.prototype), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "resized", [discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_5__.bind], Object.getOwnPropertyDescriptor(_class.prototype, "resized"), _class.prototype), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class.prototype, "paint", [discourse_common_utils_decorators__WEBPACK_IMPORTED_MODULE_5__.bind], Object.getOwnPropertyDescriptor(_class.prototype, "paint"), _class.prototype)), _class);


/***/ }),

/***/ "./static/wizard/components/wizard-field.js":
/*!**************************************************!*\
  !*** ./static/wizard/components/wizard-field.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WizardFieldComponent)
/* harmony export */ });
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glimmer/component */ "../rewritten-packages/@glimmer/component.7c4f5854/node_modules/@glimmer/component/index.js");
/* harmony import */ var _ember_debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ember/debug */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fdebug&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ember_debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ember_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ember/string */ "../rewritten-packages/@ember/string.782e18cd/node_modules/@ember/string/index.js");
/* harmony import */ var _ember_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ember/template */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ember_template__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fields */ "./static/wizard/components/fields/index.js");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_6__);
var _class;







class WizardFieldComponent extends _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get field() {
    return this.args.field;
  }
  get classes() {
    let classes1 = ["wizard-container__field"];
    let {
      type: type1,
      id: id1,
      invalid: invalid1,
      disabled: disabled1
    } = this.field;
    classes1.push(`${(0,_ember_string__WEBPACK_IMPORTED_MODULE_2__.dasherize)(type1)}-field`);
    classes1.push(`${(0,_ember_string__WEBPACK_IMPORTED_MODULE_2__.dasherize)(type1)}-${(0,_ember_string__WEBPACK_IMPORTED_MODULE_2__.dasherize)(id1)}`);
    if (invalid1) {
      classes1.push("invalid");
    }
    if (disabled1) {
      classes1.push("disabled");
    }
    return classes1.join(" ");
  }
  get fieldClass() {
    return `field-${(0,_ember_string__WEBPACK_IMPORTED_MODULE_2__.dasherize)(this.field.id)} wizard-focusable`;
  }
  get component() {
    let {
      type: type1
    } = this.field;
    ( true && !(type1 in _fields__WEBPACK_IMPORTED_MODULE_4__["default"]) && (0,_ember_debug__WEBPACK_IMPORTED_MODULE_1__.assert)(`"${type1}" is not a valid wizard field type`, type1 in _fields__WEBPACK_IMPORTED_MODULE_4__["default"]));
    return _fields__WEBPACK_IMPORTED_MODULE_4__["default"][type1];
  }
}
_class = WizardFieldComponent;
(0,_ember_component__WEBPACK_IMPORTED_MODULE_6__.setComponentTemplate)((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_5__.createTemplateFactory)(
/*
  
    <div class={{this.classes}}>
      {{#if @field.label}}
        <label for={{@field.id}}>
          <span class="wizard-container__label">
            {{@field.label}}
          </span>

          {{#if @field.required}}
            <span class="wizard-container__label required">*</span>
          {{/if}}

          {{#if @field.description}}
            <div class="wizard-container__description">
              {{htmlSafe @field.description}}
            </div>
          {{/if}}
        </label>
      {{/if}}

      <div class="wizard-container__input">
        <this.component
          @wizard={{@wizard}}
          @step={{@step}}
          @field={{@field}}
          @fieldClass={{this.fieldClass}}
        />
      </div>

      {{#if @field.errorDescription}}
        <div class="wizard-container__description error">
          {{htmlSafe this.field.errorDescription}}
        </div>
      {{/if}}

      {{#if @field.extraDescription}}
        <div class="wizard-container__description extra">
          {{htmlSafe this.field.extraDescription}}
        </div>
      {{/if}}
    </div>
  
*/
{
  "id": "PsnfoCel",
  "block": "[[[1,\"\\n    \"],[10,0],[15,0,[30,0,[\"classes\"]]],[12],[1,\"\\n\"],[41,[30,1,[\"label\"]],[[[1,\"        \"],[10,\"label\"],[15,\"for\",[30,1,[\"id\"]]],[12],[1,\"\\n          \"],[10,1],[14,0,\"wizard-container__label\"],[12],[1,\"\\n            \"],[1,[30,1,[\"label\"]]],[1,\"\\n          \"],[13],[1,\"\\n\\n\"],[41,[30,1,[\"required\"]],[[[1,\"            \"],[10,1],[14,0,\"wizard-container__label required\"],[12],[1,\"*\"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,1,[\"description\"]],[[[1,\"            \"],[10,0],[14,0,\"wizard-container__description\"],[12],[1,\"\\n              \"],[1,[28,[32,0],[[30,1,[\"description\"]]],null]],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"        \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n      \"],[10,0],[14,0,\"wizard-container__input\"],[12],[1,\"\\n        \"],[8,[30,0,[\"component\"]],null,[[\"@wizard\",\"@step\",\"@field\",\"@fieldClass\"],[[30,2],[30,3],[30,1],[30,0,[\"fieldClass\"]]]],null],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[41,[30,1,[\"errorDescription\"]],[[[1,\"        \"],[10,0],[14,0,\"wizard-container__description error\"],[12],[1,\"\\n          \"],[1,[28,[32,0],[[30,0,[\"field\",\"errorDescription\"]]],null]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,1,[\"extraDescription\"]],[[[1,\"        \"],[10,0],[14,0,\"wizard-container__description extra\"],[12],[1,\"\\n          \"],[1,[28,[32,0],[[30,0,[\"field\",\"extraDescription\"]]],null]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n  \"]],[\"@field\",\"@wizard\",\"@step\"],false,[\"if\"]]",
  "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/static/wizard/components/wizard-field.js",
  "scope": () => [_ember_template__WEBPACK_IMPORTED_MODULE_3__.htmlSafe],
  "isStrictMode": true
}), _class);

/***/ }),

/***/ "./static/wizard/components/wizard-step.js":
/*!*************************************************!*\
  !*** ./static/wizard/components/wizard-step.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WizardStepComponent)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js */ "../../../../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerWarningHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js */ "../../../../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glimmer/component */ "../rewritten-packages/@glimmer/component.7c4f5854/node_modules/@glimmer/component/index.js");
/* harmony import */ var _glimmer_tracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @glimmer/tracking */ "../rewritten-packages/@glimmer/tracking.e9eab3a2/node_modules/@glimmer/tracking/index.js");
/* harmony import */ var _ember_modifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ember/modifier */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fmodifier&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_modifier__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ember_modifier__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ember/object */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fobject&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ember_object__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ember_render_modifiers_modifiers_did_insert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ember/render-modifiers/modifiers/did-insert */ "../rewritten-packages/@ember/render-modifiers.261932ed/node_modules/@ember/render-modifiers/modifiers/did-insert.js");
/* harmony import */ var _ember_render_modifiers_modifiers_did_update__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ember/render-modifiers/modifiers/did-update */ "../rewritten-packages/@ember/render-modifiers.261932ed/node_modules/@ember/render-modifiers/modifiers/did-update.js");
/* harmony import */ var _ember_runloop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ember/runloop */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Frunloop&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_runloop__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ember_runloop__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ember_template__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ember/template */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ember_template__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var discourse_helpers_emoji__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! discourse/helpers/emoji */ "./helpers/emoji.js");
/* harmony import */ var discourse_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! discourse-i18n */ "../../../../discourse-i18n/src/index.js");
/* harmony import */ var _wizard_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wizard-field */ "./static/wizard/components/wizard-field.js");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_16__);




var _class, _descriptor, _class2;













const i18n = (...args1) => discourse_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t(...args1);
let WizardStepComponent = (_class = (_class2 = class WizardStepComponent extends _glimmer_component__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor(...args) {
    super(...args);
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "saving", _descriptor, this);
  }
  get wizard() {
    return this.args.wizard;
  }
  get step() {
    return this.args.step;
  }
  get id() {
    return this.step.id;
  }
  /**
  * Step        Back Button?     Primary Action      Secondary Action
  * ------------------------------------------------------------------
  * First            No               Next                  N/A
  * ------------------------------------------------------------------
  * ...             Yes               Next                  N/A
  * ------------------------------------------------------------------
  * Ready           Yes              Jump In          Configure More
  * ------------------------------------------------------------------
  * ...             Yes               Next              Exit Setup
  * ------------------------------------------------------------------
  * Last            Yes              Jump In                N/A
  * ------------------------------------------------------------------
  *
  * Back Button: without saving, go back to the last page
  * Next Button: save, and if successful, go to the next page
  * Configure More: re-skinned next button
  * Exit Setup: without saving, go to the home page ("finish")
  * Jump In: on the "ready" page, it exits the setup ("finish"), on the
  * last page, it saves, and if successful, go to the home page
  */
  get isFinalStep() {
    return this.step.displayIndex === this.wizard.steps.length;
  }
  get showBackButton() {
    return this.step.index > 0;
  }
  get showFinishButton() {
    const ready1 = this.wizard.findStep("ready");
    const isReady1 = ready1 && this.step.index > ready1.index;
    return isReady1 && !this.isFinalStep;
  }
  get showConfigureMore() {
    return this.id === "ready";
  }
  get showJumpInButton() {
    return this.id === "ready" || this.isFinalStep;
  }
  get includeSidebar() {
    return !!this.step.fields.find(f1 => f1.showInSidebar);
  }
  stepChanged() {
    this.saving = false;
    this.autoFocus();
  }
  onKeyUp(event1) {
    if (event1.key === "Enter") {
      if (this.showJumpInButton) {
        this.jumpIn();
      } else {
        this.nextStep();
      }
    }
  }
  autoFocus() {
    (0,_ember_runloop__WEBPACK_IMPORTED_MODULE_10__.schedule)("afterRender", () => {
      const firstInvalidElement1 = document.querySelector(".wizard-container__input.invalid:nth-of-type(1) .wizard-focusable");
      if (firstInvalidElement1) {
        return firstInvalidElement1.focus();
      }
      document.querySelector(".wizard-focusable:nth-of-type(1)")?.focus();
    });
  }
  async advance() {
    try {
      this.saving = true;
      const response1 = await this.step.save();
      this.args.goNext(response1);
    } finally {
      this.saving = false;
    }
  }
  finish(event1) {
    event1?.preventDefault();
    if (this.saving) {
      return;
    }
    this.args.goHome();
  }
  jumpIn(event1) {
    event1?.preventDefault();
    if (this.saving) {
      return;
    }
    if (this.id === "ready") {
      this.finish();
    } else {
      this.nextStep();
    }
  }
  backStep(event1) {
    event1?.preventDefault();
    if (this.saving) {
      return;
    }
    this.args.goBack();
  }
  nextStep(event1) {
    event1?.preventDefault();
    if (this.saving) {
      return;
    }
    if (this.step.validate()) {
      this.advance();
    } else {
      this.autoFocus();
    }
  }
}, (0,_ember_component__WEBPACK_IMPORTED_MODULE_16__.setComponentTemplate)((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_15__.createTemplateFactory)(
/*
  
    <div
      class="wizard-container__step {{@step.id}}"
      {{didInsert this.autoFocus}}
      {{didUpdate this.stepChanged @step.id}}
    >
      <div class="wizard-container__step-counter">
        <span class="wizard-container__step-text">
          {{i18n "wizard.step-text"}}
        </span>
        <span class="wizard-container__step-count">
          {{i18n
            "wizard.step"
            current=@step.displayIndex
            total=@wizard.totalSteps
          }}
        </span>
      </div>

      <div class="wizard-container">
        <div class="wizard-container__step-contents">
          <div class="wizard-container__step-header">
            {{#if @step.emoji}}
              <div class="wizard-container__step-header--emoji">
                {{emoji @step.emoji}}
              </div>
            {{/if}}
            {{#if @step.title}}
              <h1 class="wizard-container__step-title">{{@step.title}}</h1>
              {{#if @step.description}}
                <p class="wizard-container__step-description">
                  {{htmlSafe @step.description}}
                </p>
              {{/if}}
            {{/if}}
          </div>

          <div class="wizard-container__step-container">
            {{#if @step.fields}}
              <div class="wizard-container__step-form">
                {{#if this.includeSidebar}}
                  <div class="wizard-container__sidebar">
                    {{#each @step.fields as |field|}}
                      {{#if field.showInSidebar}}
                        <WizardField
                          @field={{field}}
                          @step={{@step}}
                          @wizard={{@wizard}}
                        />
                      {{/if}}
                    {{/each}}
                  </div>
                {{/if}}
                <div class="wizard-container__fields">
                  {{#each @step.fields as |field|}}
                    {{#unless field.showInSidebar}}
                      <WizardField
                        @field={{field}}
                        @step={{@step}}
                        @wizard={{@wizard}}
                      />
                    {{/unless}}
                  {{/each}}
                </div>
              </div>
            {{/if}}
          </div>
        </div>

        <div class="wizard-container__step-footer">
          <div class="wizard-container__buttons-left">
            {{#if this.showBackButton}}
              <button
                {{on "click" this.backStep}}
                disabled={{this.saving}}
                type="button"
                class="wizard-container__button back"
              >
                {{i18n "wizard.back"}}
              </button>
            {{/if}}
          </div>

          <div class="wizard-container__buttons-right">
            {{#if this.showFinishButton}}
              <button
                {{on "click" this.finish}}
                disabled={{this.saving}}
                type="button"
                class="wizard-container__button finish"
              >
                {{i18n "wizard.finish"}}
              </button>
            {{else if this.showConfigureMore}}
              <button
                {{on "click" this.nextStep}}
                disabled={{this.saving}}
                type="button"
                class="wizard-container__button configure-more"
              >
                {{i18n "wizard.configure_more"}}
              </button>
            {{/if}}

            {{#if this.showJumpInButton}}
              <button
                {{on "click" this.jumpIn}}
                disabled={{this.saving}}
                type="button"
                class="wizard-container__button primary jump-in"
              >
                {{i18n "wizard.jump_in"}}
              </button>
            {{else}}
              <button
                {{on "click" this.nextStep}}
                disabled={{this.saving}}
                type="button"
                class="wizard-container__button primary next"
              >
                {{i18n "wizard.next"}}
              </button>
            {{/if}}

          </div>

        </div>
      </div>
    </div>
  
*/
{
  "id": "1qYHAL0/",
  "block": "[[[1,\"\\n    \"],[11,0],[16,0,[29,[\"wizard-container__step \",[30,1,[\"id\"]]]]],[4,[32,0],[[30,0,[\"autoFocus\"]]],null],[4,[32,1],[[30,0,[\"stepChanged\"]],[30,1,[\"id\"]]],null],[12],[1,\"\\n      \"],[10,0],[14,0,\"wizard-container__step-counter\"],[12],[1,\"\\n        \"],[10,1],[14,0,\"wizard-container__step-text\"],[12],[1,\"\\n          \"],[1,[28,[32,2],[\"wizard.step-text\"],null]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,1],[14,0,\"wizard-container__step-count\"],[12],[1,\"\\n          \"],[1,[28,[32,2],[\"wizard.step\"],[[\"current\",\"total\"],[[30,1,[\"displayIndex\"]],[30,2,[\"totalSteps\"]]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"wizard-container\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"wizard-container__step-contents\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"wizard-container__step-header\"],[12],[1,\"\\n\"],[41,[30,1,[\"emoji\"]],[[[1,\"              \"],[10,0],[14,0,\"wizard-container__step-header--emoji\"],[12],[1,\"\\n                \"],[1,[28,[32,3],[[30,1,[\"emoji\"]]],null]],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]],null],[41,[30,1,[\"title\"]],[[[1,\"              \"],[10,\"h1\"],[14,0,\"wizard-container__step-title\"],[12],[1,[30,1,[\"title\"]]],[13],[1,\"\\n\"],[41,[30,1,[\"description\"]],[[[1,\"                \"],[10,2],[14,0,\"wizard-container__step-description\"],[12],[1,\"\\n                  \"],[1,[28,[32,4],[[30,1,[\"description\"]]],null]],[1,\"\\n                \"],[13],[1,\"\\n\"]],[]],null]],[]],null],[1,\"          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"wizard-container__step-container\"],[12],[1,\"\\n\"],[41,[30,1,[\"fields\"]],[[[1,\"              \"],[10,0],[14,0,\"wizard-container__step-form\"],[12],[1,\"\\n\"],[41,[30,0,[\"includeSidebar\"]],[[[1,\"                  \"],[10,0],[14,0,\"wizard-container__sidebar\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,1,[\"fields\"]]],null]],null],null,[[[41,[30,3,[\"showInSidebar\"]],[[[1,\"                        \"],[8,[32,5],null,[[\"@field\",\"@step\",\"@wizard\"],[[30,3],[30,1],[30,2]]],null],[1,\"\\n\"]],[]],null]],[3]],null],[1,\"                  \"],[13],[1,\"\\n\"]],[]],null],[1,\"                \"],[10,0],[14,0,\"wizard-container__fields\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,1,[\"fields\"]]],null]],null],null,[[[41,[51,[30,4,[\"showInSidebar\"]]],[[[1,\"                      \"],[8,[32,5],null,[[\"@field\",\"@step\",\"@wizard\"],[[30,4],[30,1],[30,2]]],null],[1,\"\\n\"]],[]],null]],[4]],null],[1,\"                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"wizard-container__step-footer\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"wizard-container__buttons-left\"],[12],[1,\"\\n\"],[41,[30,0,[\"showBackButton\"]],[[[1,\"              \"],[11,\"button\"],[16,\"disabled\",[30,0,[\"saving\"]]],[24,0,\"wizard-container__button back\"],[24,4,\"button\"],[4,[32,6],[\"click\",[30,0,[\"backStep\"]]],null],[12],[1,\"\\n                \"],[1,[28,[32,2],[\"wizard.back\"],null]],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]],null],[1,\"          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"wizard-container__buttons-right\"],[12],[1,\"\\n\"],[41,[30,0,[\"showFinishButton\"]],[[[1,\"              \"],[11,\"button\"],[16,\"disabled\",[30,0,[\"saving\"]]],[24,0,\"wizard-container__button finish\"],[24,4,\"button\"],[4,[32,6],[\"click\",[30,0,[\"finish\"]]],null],[12],[1,\"\\n                \"],[1,[28,[32,2],[\"wizard.finish\"],null]],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"showConfigureMore\"]],[[[1,\"              \"],[11,\"button\"],[16,\"disabled\",[30,0,[\"saving\"]]],[24,0,\"wizard-container__button configure-more\"],[24,4,\"button\"],[4,[32,6],[\"click\",[30,0,[\"nextStep\"]]],null],[12],[1,\"\\n                \"],[1,[28,[32,2],[\"wizard.configure_more\"],null]],[1,\"\\n              \"],[13],[1,\"\\n            \"]],[]],null]],[]]],[1,\"\\n\"],[41,[30,0,[\"showJumpInButton\"]],[[[1,\"              \"],[11,\"button\"],[16,\"disabled\",[30,0,[\"saving\"]]],[24,0,\"wizard-container__button primary jump-in\"],[24,4,\"button\"],[4,[32,6],[\"click\",[30,0,[\"jumpIn\"]]],null],[12],[1,\"\\n                \"],[1,[28,[32,2],[\"wizard.jump_in\"],null]],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]],[[[1,\"              \"],[11,\"button\"],[16,\"disabled\",[30,0,[\"saving\"]]],[24,0,\"wizard-container__button primary next\"],[24,4,\"button\"],[4,[32,6],[\"click\",[30,0,[\"nextStep\"]]],null],[12],[1,\"\\n                \"],[1,[28,[32,2],[\"wizard.next\"],null]],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]]],[1,\"\\n          \"],[13],[1,\"\\n\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[\"@step\",\"@wizard\",\"field\",\"field\"],false,[\"if\",\"each\",\"-track-array\",\"unless\"]]",
  "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/static/wizard/components/wizard-step.js",
  "scope": () => [_ember_render_modifiers_modifiers_did_insert__WEBPACK_IMPORTED_MODULE_8__["default"], _ember_render_modifiers_modifiers_did_update__WEBPACK_IMPORTED_MODULE_9__["default"], i18n, discourse_helpers_emoji__WEBPACK_IMPORTED_MODULE_12__["default"], _ember_template__WEBPACK_IMPORTED_MODULE_11__.htmlSafe, _wizard_field__WEBPACK_IMPORTED_MODULE_14__["default"], _ember_modifier__WEBPACK_IMPORTED_MODULE_6__.on],
  "isStrictMode": true
}), _class2), _class2), (_descriptor = (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "saving", [_glimmer_tracking__WEBPACK_IMPORTED_MODULE_5__.tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "stepChanged", [_ember_object__WEBPACK_IMPORTED_MODULE_7__.action], Object.getOwnPropertyDescriptor(_class.prototype, "stepChanged"), _class.prototype), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "onKeyUp", [_ember_object__WEBPACK_IMPORTED_MODULE_7__.action], Object.getOwnPropertyDescriptor(_class.prototype, "onKeyUp"), _class.prototype), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "autoFocus", [_ember_object__WEBPACK_IMPORTED_MODULE_7__.action], Object.getOwnPropertyDescriptor(_class.prototype, "autoFocus"), _class.prototype), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "finish", [_ember_object__WEBPACK_IMPORTED_MODULE_7__.action], Object.getOwnPropertyDescriptor(_class.prototype, "finish"), _class.prototype), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "jumpIn", [_ember_object__WEBPACK_IMPORTED_MODULE_7__.action], Object.getOwnPropertyDescriptor(_class.prototype, "jumpIn"), _class.prototype), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "backStep", [_ember_object__WEBPACK_IMPORTED_MODULE_7__.action], Object.getOwnPropertyDescriptor(_class.prototype, "backStep"), _class.prototype), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "nextStep", [_ember_object__WEBPACK_IMPORTED_MODULE_7__.action], Object.getOwnPropertyDescriptor(_class.prototype, "nextStep"), _class.prototype)), _class);


/***/ }),

/***/ "./static/wizard/lib/preview.js":
/*!**************************************!*\
  !*** ./static/wizard/lib/preview.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOREM: () => (/* binding */ LOREM),
/* harmony export */   brightness: () => (/* binding */ brightness),
/* harmony export */   chooseBrighter: () => (/* binding */ chooseBrighter),
/* harmony export */   chooseDarker: () => (/* binding */ chooseDarker),
/* harmony export */   darkLightDiff: () => (/* binding */ darkLightDiff),
/* harmony export */   drawHeader: () => (/* binding */ drawHeader),
/* harmony export */   lighten: () => (/* binding */ lighten),
/* harmony export */   parseColor: () => (/* binding */ parseColor)
/* harmony export */ });
/*eslint no-bitwise:0 */

const LOREM = `
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Nullam eget sem non elit
tincidunt rhoncus. Fusce
velit nisl, porttitor sed
nisl ac, consectetur interdum
metus. Fusce in consequat
augue, vel facilisis felis.`;
function parseColor(color) {
  const m = color.match(/^#([0-9a-f]{6})$/i);
  if (m) {
    const c = m[1];
    return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)];
  }
  return [0, 0, 0];
}
function brightness(color) {
  return color[0] * 0.299 + color[1] * 0.587 + color[2] * 0.114;
}
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, l];
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h, s, l) {
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [r * 255, g * 255, b * 255];
}
function lighten(color, percent) {
  const hsl = rgbToHsl(color[0], color[1], color[2]);
  const scale = percent / 100.0;
  const diff = scale > 0 ? 1.0 - hsl[2] : hsl[2];
  hsl[2] = hsl[2] + diff * scale;
  color = hslToRgb(hsl[0], hsl[1], hsl[2]);
  return "#" + (0 | (1 << 8) + color[0]).toString(16).slice(1) + (0 | (1 << 8) + color[1]).toString(16).slice(1) + (0 | (1 << 8) + color[2]).toString(16).slice(1);
}
function chooseBrighter(primary, secondary) {
  const primaryCol = parseColor(primary);
  const secondaryCol = parseColor(secondary);
  return brightness(primaryCol) < brightness(secondaryCol) ? secondary : primary;
}
function chooseDarker(primary, secondary) {
  if (chooseBrighter(primary, secondary) === primary) {
    return secondary;
  } else {
    return primary;
  }
}
function darkLightDiff(adjusted, comparison, lightness, darkness) {
  const adjustedCol = parseColor(adjusted);
  const comparisonCol = parseColor(comparison);
  return lighten(adjustedCol, brightness(adjustedCol) < brightness(comparisonCol) ? lightness : darkness);
}
function drawHeader(ctx, colors, width, headerHeight) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, width, headerHeight);
  ctx.fillStyle = colors.header_background;
  ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
  ctx.shadowBlur = 2;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;
  ctx.fill();
  ctx.restore();
}

/***/ }),

/***/ "./static/wizard/models/wizard.js":
/*!****************************************!*\
  !*** ./static/wizard/models/wizard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Choice: () => (/* binding */ Choice),
/* harmony export */   Field: () => (/* binding */ Field),
/* harmony export */   Step: () => (/* binding */ Step),
/* harmony export */   "default": () => (/* binding */ Wizard)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js */ "../../../../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerWarningHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js */ "../../../../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var _glimmer_tracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glimmer/tracking */ "../rewritten-packages/@glimmer/tracking.e9eab3a2/node_modules/@glimmer/tracking/index.js");
/* harmony import */ var discourse_lib_ajax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! discourse/lib/ajax */ "./lib/ajax.js");




var _class, _descriptor, _class3, _descriptor2, _descriptor3, _descriptor4;


class Wizard {
  static async load() {
    return Wizard.parse((await (0,discourse_lib_ajax__WEBPACK_IMPORTED_MODULE_5__.ajax)({
      url: "/wizard.json"
    })).wizard);
  }
  static parse({
    current_color_scheme,
    steps,
    ...payload
  }) {
    return new Wizard({
      ...payload,
      currentColorScheme: current_color_scheme,
      steps: steps.map(step => Step.parse(step))
    });
  }
  constructor(payload) {
    safeAssign(this, payload, ["start", "completed", "steps", "currentColorScheme"]);
  }
  get totalSteps() {
    return this.steps.length;
  }
  get title() {
    return this.findStep("forum-tile")?.valueFor("title");
  }
  get logoUrl() {
    return this.findStep("logos")?.valueFor("logo");
  }
  get currentColors() {
    const step = this.findStep("styling");
    if (!step) {
      return this.currentColorScheme;
    }
    const field = step.findField("color_scheme");
    return field?.chosen?.data.colors;
  }
  get font() {
    return this.findStep("styling")?.findField("body_font").chosen;
  }
  get headingFont() {
    return this.findStep("styling")?.findField("heading_font").chosen;
  }
  findStep(id) {
    return this.steps.find(step => step.id === id);
  }
}
const ValidStates = {
  UNCHECKED: 0,
  INVALID: 1,
  VALID: 2
};
let Step = (_class = class Step {
  static parse({
    fields,
    ...payload
  }) {
    return new Step({
      ...payload,
      fields: fields.map(field => Field.parse(field))
    });
  }
  constructor(payload) {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_validState", _descriptor, this);
    safeAssign(this, payload, ["id", "next", "previous", "description", "title", "index", "banner", "emoji", "fields"]);
  }
  get valid() {
    return this._validState === ValidStates.VALID;
  }
  set valid(valid) {
    this._validState = valid ? ValidStates.VALID : ValidStates.INVALID;
  }
  get invalid() {
    return this._validState === ValidStates.INVALID;
  }
  get unchecked() {
    return this._validState === ValidStates.UNCHECKED;
  }
  get displayIndex() {
    return this.index + 1;
  }
  valueFor(id) {
    return this.findField(id)?.value;
  }
  findField(id) {
    return this.fields.find(field => field.id === id);
  }
  fieldError(id, description) {
    let field = this.findField(id);
    if (field) {
      field.errorDescription = description;
    }
  }
  validate() {
    let valid = this.fields.map(field => field.validate()).every(result => result);
    return this.valid = valid;
  }
  serialize() {
    let data = {};
    for (let field of this.fields) {
      data[field.id] = field.value;
    }
    return data;
  }
  async save() {
    try {
      return await (0,discourse_lib_ajax__WEBPACK_IMPORTED_MODULE_5__.ajax)({
        url: `/wizard/steps/${this.id}`,
        type: "PUT",
        data: {
          fields: this.serialize()
        }
      });
    } catch (error) {
      for (let err of error.jqXHR.responseJSON.errors) {
        this.fieldError(err.field, err.description);
      }
    }
  }
}, (_descriptor = (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "_validState", [_glimmer_tracking__WEBPACK_IMPORTED_MODULE_4__.tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return ValidStates.UNCHECKED;
  }
})), _class);
let Field = (_class3 = class Field {
  static parse({
    extra_description,
    show_in_sidebar,
    choices,
    ...payload
  }) {
    return new Field({
      ...payload,
      extraDescription: extra_description,
      showInSidebar: show_in_sidebar,
      choices: choices?.map(choice => Choice.parse(choice))
    });
  }
  constructor(payload) {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_value", _descriptor2, this);
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_validState", _descriptor3, this);
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_errorDescription", _descriptor4, this);
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "_listeners", []);
    safeAssign(this, payload, ["id", "type", "required", "value", "label", "placeholder", "description", "extraDescription", "icon", "disabled", "showInSidebar", "choices"]);
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    this._value = newValue;
    for (let listener of this._listeners) {
      listener();
    }
  }
  get chosen() {
    return this.choices?.find(choice => choice.id === this.value);
  }
  get valid() {
    return this._validState === ValidStates.VALID;
  }
  set valid(valid) {
    this._validState = valid ? ValidStates.VALID : ValidStates.INVALID;
    this._errorDescription = null;
  }
  get invalid() {
    return this._validState === ValidStates.INVALID;
  }
  get unchecked() {
    return this._validState === ValidStates.UNCHECKED;
  }
  get errorDescription() {
    return this._errorDescription;
  }
  set errorDescription(description) {
    this._validState = ValidStates.INVALID;
    this._errorDescription = description;
  }
  validate() {
    let valid = true;
    if (this.required) {
      valid = !!(this.value?.length > 0);
    }
    return this.valid = valid;
  }
  addListener(listener) {
    this._listeners.push(listener);
  }
  removeListener(listener) {
    this._listeners = this._listeners.filter(l => l === listener);
  }
}, (_descriptor2 = (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class3.prototype, "_value", [_glimmer_tracking__WEBPACK_IMPORTED_MODULE_4__.tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor3 = (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class3.prototype, "_validState", [_glimmer_tracking__WEBPACK_IMPORTED_MODULE_4__.tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return ValidStates.UNCHECKED;
  }
}), _descriptor4 = (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class3.prototype, "_errorDescription", [_glimmer_tracking__WEBPACK_IMPORTED_MODULE_4__.tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
})), _class3);
class Choice {
  static parse({
    extra_label,
    ...payload
  }) {
    return new Choice({
      ...payload,
      extraLabel: extra_label
    });
  }
  constructor({
    id,
    label,
    extraLabel,
    description,
    icon,
    data
  }) {
    Object.assign(this, {
      id,
      label,
      extraLabel,
      description,
      icon,
      data
    });
  }
}
function safeAssign(object, payload, permittedKeys) {
  for (const [key, value] of Object.entries(payload)) {
    if (permittedKeys.includes(key)) {
      object[key] = value;
    }
  }
}

/***/ }),

/***/ "./templates/wizard.js":
/*!*****************************!*\
  !*** ./templates/wizard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ember_route_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ember-route-template */ "../../../../node_modules/ember-route-template/dist/index.js");
/* harmony import */ var discourse_helpers_hide_application_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! discourse/helpers/hide-application-footer */ "./helpers/hide-application-footer.js");
/* harmony import */ var discourse_static_wizard_components_discourse_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! discourse/static/wizard/components/discourse-logo */ "./static/wizard/components/discourse-logo.js");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ember_component_template_only__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ember/component/template-only */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent%2Ftemplate-only&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component_template_only__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ember_component_template_only__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,ember_route_template__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_ember_component__WEBPACK_IMPORTED_MODULE_4__.setComponentTemplate)((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_3__.createTemplateFactory)(
/*
  
  {{hideApplicationFooter}}
  <div id="wizard-main">
    <DiscourseLogo />

    {{outlet}}
  </div>

*/
{
  "id": "nphpQ+es",
  "block": "[[[1,\"\\n  \"],[1,[32,0]],[1,\"\\n  \"],[10,0],[14,1,\"wizard-main\"],[12],[1,\"\\n    \"],[8,[32,1],null,null,null],[1,\"\\n\\n    \"],[46,[28,[31,1],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[],false,[\"component\",\"-outlet\"]]",
  "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/templates/wizard.js",
  "scope": () => [discourse_helpers_hide_application_footer__WEBPACK_IMPORTED_MODULE_1__["default"], discourse_static_wizard_components_discourse_logo__WEBPACK_IMPORTED_MODULE_2__["default"]],
  "isStrictMode": true
}), _ember_component_template_only__WEBPACK_IMPORTED_MODULE_5___default()())));

/***/ }),

/***/ "./templates/wizard/step.js":
/*!**********************************!*\
  !*** ./templates/wizard/step.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js */ "../../../../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "../../../../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerWarningHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js */ "../../../../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glimmer/component */ "../rewritten-packages/@glimmer/component.7c4f5854/node_modules/@glimmer/component/index.js");
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ember/object */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fobject&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_object__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ember_object__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ember_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ember/service */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fservice&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_service__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ember_service__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ember_route_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ember-route-template */ "../../../../node_modules/ember-route-template/dist/index.js");
/* harmony import */ var discourse_static_wizard_components_wizard_canvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! discourse/static/wizard/components/wizard-canvas */ "./static/wizard/components/wizard-canvas.js");
/* harmony import */ var discourse_static_wizard_components_wizard_step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! discourse/static/wizard/components/wizard-step */ "./static/wizard/components/wizard-step.js");
/* harmony import */ var discourse_common_lib_get_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! discourse-common/lib/get-url */ "../rewritten-packages/discourse-common.d19c518e/node_modules/discourse-common/lib/get-url.js");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ember/template-factory */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Ftemplate-factory&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_template_factory__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ember_template_factory__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ember/component */ "../../../../node_modules/@embroider/babel-loader-9/index.js?{\"variant\":{\"name\":\"dev\",\"runtime\":\"browser\",\"optimizeForProduction\":false},\"appBabelConfigPath\":\"/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/_babel_config_.js\",\"cacheDirectory\":\"/private/var/folders/sp/0ytqrzfd08ggy3b8wwt2tf740000gn/T/embroider/webpack-babel-loader\"}!../../../../node_modules/@embroider/webpack/src/virtual-loader.js?f=%2F%40embroider%2Fext-cjs%2F%40ember%2Fcomponent&a=%2FUsers%2Flaylaelwakhi%2Fdiscourse%2Fapp%2Fassets%2Fjavascripts%2Fdiscourse!");
/* harmony import */ var _ember_component__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ember_component__WEBPACK_IMPORTED_MODULE_12__);




var _class, _descriptor, _class2;









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,ember_route_template__WEBPACK_IMPORTED_MODULE_7__["default"])((_class = (_class2 = class _class extends _glimmer_component__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor(...args) {
    super(...args);
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", _descriptor, this);
  }
  get step() {
    return this.args.model.step;
  }
  get showCanvas() {
    return this.step.id === "ready";
  }
  goNext(response1) {
    const next1 = this.step.next;
    if (response1?.refresh_required) {
      document.location = (0,discourse_common_lib_get_url__WEBPACK_IMPORTED_MODULE_10__["default"])(`/wizard/steps/${next1}`);
    } else if (response1?.success && next1) {
      this.router.transitionTo("wizard.step", next1);
    } else if (response1?.success) {
      this.router.transitionTo("discovery.latest");
    }
  }
  goBack() {
    this.router.transitionTo("wizard.step", this.step.previous);
  }
  goHome() {
    this.router.transitionTo("discovery.latest");
  }
}, (0,_ember_component__WEBPACK_IMPORTED_MODULE_12__.setComponentTemplate)((0,_ember_template_factory__WEBPACK_IMPORTED_MODULE_11__.createTemplateFactory)(
/*
  
      {{#if this.showCanvas}}
        <WizardCanvas />
      {{/if}}

      <WizardStep
        @step={{@model.step}}
        @wizard={{@model.wizard}}
        @goNext={{this.goNext}}
        @goBack={{this.goBack}}
        @goHome={{this.goHome}}
      />
    
*/
{
  "id": "byqG5SGl",
  "block": "[[[1,\"\\n\"],[41,[30,0,[\"showCanvas\"]],[[[1,\"        \"],[8,[32,0],null,null,null],[1,\"\\n\"]],[]],null],[1,\"\\n      \"],[8,[32,1],null,[[\"@step\",\"@wizard\",\"@goNext\",\"@goBack\",\"@goHome\"],[[30,1,[\"step\"]],[30,1,[\"wizard\"]],[30,0,[\"goNext\"]],[30,0,[\"goBack\"]],[30,0,[\"goHome\"]]]],null],[1,\"\\n    \"]],[\"@model\"],false,[\"if\"]]",
  "moduleName": "/Users/laylaelwakhi/discourse/app/assets/javascripts/discourse/node_modules/.embroider/rewritten-app/templates/wizard/step.js",
  "scope": () => [discourse_static_wizard_components_wizard_canvas__WEBPACK_IMPORTED_MODULE_8__["default"], discourse_static_wizard_components_wizard_step__WEBPACK_IMPORTED_MODULE_9__["default"]],
  "isStrictMode": true
}), _class2), _class2), (_descriptor = (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "router", [_ember_service__WEBPACK_IMPORTED_MODULE_6__.inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "goNext", [_ember_object__WEBPACK_IMPORTED_MODULE_5__.action], Object.getOwnPropertyDescriptor(_class.prototype, "goNext"), _class.prototype), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "goBack", [_ember_object__WEBPACK_IMPORTED_MODULE_5__.action], Object.getOwnPropertyDescriptor(_class.prototype, "goBack"), _class.prototype), (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "goHome", [_ember_object__WEBPACK_IMPORTED_MODULE_5__.action], Object.getOwnPropertyDescriptor(_class.prototype, "goHome"), _class.prototype)), _class)));

/***/ })

}]);
//# sourceMappingURL=chunk.8e8837564fdcbe7b3ce9.d41d8cd9.js.map