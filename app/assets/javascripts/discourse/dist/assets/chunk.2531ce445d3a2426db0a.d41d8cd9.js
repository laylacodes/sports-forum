"use strict";
(self["webpackChunkdiscourse"] = self["webpackChunkdiscourse"] || []).push([["discourse-markdown-it_src_index_js"],{

/***/ "../../../../discourse-markdown-it/src/engine.js":
/*!*******************************************************!*\
  !*** ../../../../discourse-markdown-it/src/engine.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ATTACHMENT_CSS_CLASS: () => (/* binding */ ATTACHMENT_CSS_CLASS),
/* harmony export */   cook: () => (/* binding */ cook),
/* harmony export */   "default": () => (/* binding */ makeEngine),
/* harmony export */   extractDataAttribute: () => (/* binding */ extractDataAttribute)
/* harmony export */ });
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-it */ "../../../../discourse-markdown-it/node_modules/markdown-it/index.mjs");
/* harmony import */ var pretty_text_allow_lister__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pretty-text/allow-lister */ "../rewritten-packages/pretty-text.eb45c813/node_modules/pretty-text/allow-lister.js");
/* harmony import */ var pretty_text_guid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pretty-text/guid */ "../rewritten-packages/pretty-text.eb45c813/node_modules/pretty-text/guid.js");
/* harmony import */ var pretty_text_sanitizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pretty-text/sanitizer */ "../rewritten-packages/pretty-text.eb45c813/node_modules/pretty-text/sanitizer.js");
/* harmony import */ var _features_text_post_process__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/text-post-process */ "../../../../discourse-markdown-it/src/features/text-post-process.js");






// note, this will mutate options due to the way the API is designed
// may need a refactor
function makeEngine(options, markdownItOptions, markdownItRules) {
  const engine = makeMarkdownIt(markdownItOptions, markdownItRules);
  const quotes = options.discourse.limitedSiteSettings.markdownTypographerQuotationMarks;
  if (quotes) {
    engine.options.quotes = quotes.split("|");
  }
  const tlds = options.discourse.limitedSiteSettings.markdownLinkifyTlds || "";
  engine.linkify.tlds(tlds.split("|"));
  setupUrlDecoding(engine);
  setupHoister(engine);
  setupImageAndPlayableMediaRenderer(engine);
  setupAttachments(engine);
  setupBlockBBCode(engine);
  setupInlineBBCode(engine);
  setupTextPostProcessRuler(engine);
  options.engine = engine;
  for (const [feature, callback] of options.pluginCallbacks) {
    if (options.discourse.features[feature]) {
      if (callback === null || callback === undefined) {
        // eslint-disable-next-line no-console
        console.log("BAD MARKDOWN CALLBACK FOUND");
        // eslint-disable-next-line no-console
        console.log(`FEATURE IS: ${feature}`);
      }
      engine.use(callback);
    }
  }

  // top level markdown it notifier
  options.markdownIt = true;
  options.setup = true;
  if (!options.discourse.sanitizer || !options.sanitizer) {
    const allowLister = new pretty_text_allow_lister__WEBPACK_IMPORTED_MODULE_1__["default"](options.discourse);
    options.allowListed.forEach(([feature, info]) => {
      allowLister.allowListFeature(feature, info);
    });
    options.sanitizer = options.discourse.sanitizer = options.discourse.sanitize ? a => (0,pretty_text_sanitizer__WEBPACK_IMPORTED_MODULE_3__.sanitize)(a, allowLister) : a => a;
  }
}
function cook(raw, options) {
  // we still have to hoist html_raw nodes so they bypass the allowlister
  // this is the case for oneboxes and also certain plugins that require
  // raw HTML rendering within markdown bbcode rules
  options.discourse.hoisted ??= {};
  const rendered = options.engine.render(raw);
  let cooked = options.discourse.sanitizer(rendered).trim();

  // opts.discourse.hoisted guid keys will be deleted within here to
  // keep the object empty
  cooked = unhoistForCooked(options.discourse.hoisted, cooked);
  return cooked;
}
function makeMarkdownIt(markdownItOptions, markdownItRules) {
  if (markdownItRules) {
    // Preset for "zero", https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js
    return (0,markdown_it__WEBPACK_IMPORTED_MODULE_0__["default"])("zero", markdownItOptions).enable(markdownItRules);
  } else {
    return (0,markdown_it__WEBPACK_IMPORTED_MODULE_0__["default"])(markdownItOptions);
  }
}
function setupUrlDecoding(engine) {
  // this fixed a subtle issue where %20 is decoded as space in
  // automatic urls
  engine.utils.lib.mdurl.decode.defaultChars = ";/?:@&=+$,# ";
}

// hoists html_raw tokens out of the render flow and replaces them
// with a GUID. this GUID is then replaced with the final raw HTML
// content in unhoistForCooked
function renderHoisted(tokens, idx, options) {
  const content = tokens[idx].content;
  if (content && content.length > 0) {
    let id = (0,pretty_text_guid__WEBPACK_IMPORTED_MODULE_2__["default"])();
    options.discourse.hoisted[id] = content;
    return id;
  } else {
    return "";
  }
}
function unhoistForCooked(hoisted, cooked) {
  const keys = Object.keys(hoisted);
  if (keys.length) {
    let found = true;
    const unhoist = function (key) {
      cooked = cooked.replace(new RegExp(key, "g"), function () {
        found = true;
        return hoisted[key];
      });
      delete hoisted[key];
    };
    while (found) {
      found = false;
      keys.forEach(unhoist);
    }
  }
  return cooked;
}

// html_raw tokens, funnily enough, render raw HTML via renderHoisted and
// unhoistForCooked
function setupHoister(engine) {
  engine.renderer.rules.html_raw = renderHoisted;
}

// exported for test only
function extractDataAttribute(str) {
  let sep = str.indexOf("=");
  if (sep === -1) {
    return null;
  }
  const key = `data-${str.slice(0, sep)}`.toLowerCase();
  if (!/^[A-Za-z]+[\w\-\:\.]*$/.test(key)) {
    return null;
  }
  const value = str.slice(sep + 1);
  return [key, value];
}

// videoHTML and audioHTML follow the same HTML syntax
// as oneboxer.rb when dealing with these formats
function videoHTML(token) {
  const src = token.attrGet("src");
  const origSrc = token.attrGet("data-orig-src");
  const dataOrigSrcAttr = origSrc !== null ? `data-orig-src="${origSrc}"` : "";
  return `<div class="video-placeholder-container" data-video-src="${src}" ${dataOrigSrcAttr}>
  </div>`;
}
function audioHTML(token) {
  const src = token.attrGet("src");
  const origSrc = token.attrGet("data-orig-src");
  const dataOrigSrcAttr = origSrc !== null ? `data-orig-src="${origSrc}"` : "";
  return `<audio preload="metadata" controls>
    <source src="${src}" ${dataOrigSrcAttr}>
    <a href="${src}">${src}</a>
  </audio>`;
}
const IMG_SIZE_REGEX = /^([1-9]+[0-9]*)x([1-9]+[0-9]*)(\s*,\s*(x?)([1-9][0-9]{0,2}?)([%x]?))?$/;
function renderImageOrPlayableMedia(tokens, idx, options, env, slf) {
  const token = tokens[idx];
  const alt = slf.renderInlineAsText(token.children, options, env);
  const split = alt.split("|");
  const altSplit = [split[0]];

  // markdown-it supports returning HTML instead of continuing to render the current token
  // see https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer
  // handles |video and |audio alt transformations for image tags
  if (split[1] === "video") {
    if (options.discourse.previewing && !options.discourse.limitedSiteSettings.enableDiffhtmlPreview) {
      return `<div class="onebox-placeholder-container">
        <span class="placeholder-icon video"></span>
      </div>`;
    } else {
      return videoHTML(token);
    }
  } else if (split[1] === "audio") {
    return audioHTML(token);
  }

  // parsing ![myimage|500x300]() or ![myimage|75%]() or ![myimage|500x300, 75%]
  for (let i = 1, match, data; i < split.length; ++i) {
    if ((match = split[i].match(IMG_SIZE_REGEX)) && match[1] && match[2]) {
      let width = match[1];
      let height = match[2];

      // calculate using percentage
      if (match[5] && match[6] && match[6] === "%") {
        let percent = parseFloat(match[5]) / 100.0;
        width = parseInt(width * percent, 10);
        height = parseInt(height * percent, 10);
      }

      // calculate using only given width
      if (match[5] && match[6] && match[6] === "x") {
        let wr = parseFloat(match[5]) / width;
        width = parseInt(match[5], 10);
        height = parseInt(height * wr, 10);
      }

      // calculate using only given height
      if (match[5] && match[4] && match[4] === "x" && !match[6]) {
        let hr = parseFloat(match[5]) / height;
        height = parseInt(match[5], 10);
        width = parseInt(width * hr, 10);
      }
      if (token.attrIndex("width") === -1) {
        token.attrs.push(["width", width]);
      }
      if (token.attrIndex("height") === -1) {
        token.attrs.push(["height", height]);
      }
      if (options.discourse.previewing && match[6] !== "x" && match[4] !== "x") {
        token.attrs.push(["class", "resizable"]);
      }
    } else if (data = extractDataAttribute(split[i])) {
      token.attrs.push(data);
    } else if (split[i] === "thumbnail") {
      token.attrs.push(["data-thumbnail", "true"]);
    } else {
      altSplit.push(split[i]);
    }
  }
  const altValue = altSplit.join("|").trim();
  if (altValue === "") {
    token.attrSet("role", "presentation");
  } else {
    token.attrSet("alt", altValue);
  }
  return slf.renderToken(tokens, idx, options);
}

// we have taken over the ![]() syntax in markdown to
// be able to render a video or audio URL as well as the
// image using |video and |audio in the text inside []
function setupImageAndPlayableMediaRenderer(engine) {
  engine.renderer.rules.image = renderImageOrPlayableMedia;
}

// discourse-encrypt wants this?
const ATTACHMENT_CSS_CLASS = "attachment";
function renderAttachment(tokens, idx, options, env, slf) {
  const linkToken = tokens[idx];
  const textToken = tokens[idx + 1];
  const split = textToken.content.split("|");
  const contentSplit = [];
  for (let i = 0, data; i < split.length; ++i) {
    if (split[i] === ATTACHMENT_CSS_CLASS) {
      linkToken.attrs.unshift(["class", split[i]]);
    } else if (data = extractDataAttribute(split[i])) {
      linkToken.attrs.push(data);
    } else {
      contentSplit.push(split[i]);
    }
  }
  if (contentSplit.length > 0) {
    textToken.content = contentSplit.join("|");
  }
  return slf.renderToken(tokens, idx, options);
}
function setupAttachments(engine) {
  engine.renderer.rules.link_open = renderAttachment;
}

// TODO we may just use a proper ruler from markdown it... this is a basic proxy
class Ruler {
  constructor() {
    this.rules = [];
  }
  getRules() {
    return this.rules;
  }
  getRuleForTag(tag) {
    this.ensureCache();
    if (this.cache.hasOwnProperty(tag)) {
      return this.cache[tag];
    }
  }
  ensureCache() {
    if (this.cache) {
      return;
    }
    this.cache = {};
    for (let i = this.rules.length - 1; i >= 0; i--) {
      let info = this.rules[i];
      this.cache[info.rule.tag] = info;
    }
  }
  push(name, rule) {
    this.rules.push({
      name,
      rule
    });
    this.cache = null;
  }
}

// block bb code ruler for parsing of quotes / code / polls
function setupBlockBBCode(engine) {
  engine.block.bbcode = {
    ruler: new Ruler()
  };
}

// inline bbcode ruler for parsing of spoiler tags, discourse-chart etc
function setupInlineBBCode(engine) {
  engine.inline.bbcode = {
    ruler: new Ruler()
  };
}

// rule for text replacement via regex, used for @mentions, category hashtags, etc.
function setupTextPostProcessRuler(engine) {
  engine.core.textPostProcess = {
    ruler: new _features_text_post_process__WEBPACK_IMPORTED_MODULE_4__.TextPostProcessRuler()
  };
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/anchor.js":
/*!****************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/anchor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
function setup(helper) {
  if (helper.getOptions().previewing) {
    return;
  }
  helper.registerPlugin(md => {
    md.core.ruler.push("anchor", state => {
      for (let idx = 0, lvl = 0, headingId = 0; idx < state.tokens.length; idx++) {
        if (state.tokens[idx].type === "blockquote_open" || state.tokens[idx].type === "bbcode_open" && state.tokens[idx].tag === "aside") {
          ++lvl;
        } else if (state.tokens[idx].type === "blockquote_close" || state.tokens[idx].type === "bbcode_close" && state.tokens[idx].tag === "aside") {
          --lvl;
        }
        if (lvl > 0 || state.tokens[idx].type !== "heading_open") {
          continue;
        }
        const linkOpen = new state.Token("link_open", "a", 1);
        const linkClose = new state.Token("link_close", "a", -1);
        let slug = state.tokens[idx + 1].content.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        if (slug.match(/^[^a-z]/)) {
          slug = `h-${slug}`;
        }
        slug = `${slug || "h"}-${++headingId}`;
        linkOpen.attrSet("name", slug);
        linkOpen.attrSet("class", "anchor");
        linkOpen.attrSet("href", "#" + slug);
        state.tokens[idx + 1].children.unshift(linkClose);
        state.tokens[idx + 1].children.unshift(linkOpen);
      }
    });
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/bbcode-block.js":
/*!**********************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/bbcode-block.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseBBCodeTag: () => (/* binding */ parseBBCodeTag),
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
let isWhiteSpace;
function trailingSpaceOnly(src, start, max) {
  let i;
  for (i = start; i < max; i++) {
    let code = src.charCodeAt(i);
    if (code === 0x0a) {
      return true;
    }
    if (!isWhiteSpace(code)) {
      return false;
    }
  }
  return true;
}
const ATTR_REGEX = /^\s*=(.+)$|((([a-z0-9]*)\s*)=)([“”"][^“”"]*[“”"]|['][^']*[']|[^"'“”]\S*)/gi;

// parse a tag [test a=1 b=2] to a data structure
// {tag: "test", attrs={a: "1", b: "2"}
function parseBBCodeTag(src, start, max, multiline) {
  let i;
  let tag;
  let attrs = {};
  let closed = false;
  let length = 0;
  let closingTag = false;

  // closing tag
  if (src.charCodeAt(start + 1) === 47) {
    closingTag = true;
    start += 1;
  }
  for (i = start + 1; i < max; i++) {
    let letter = src[i];
    if (!(letter >= "a" && letter <= "z" || letter >= "A" && letter <= "Z")) {
      break;
    }
  }
  tag = src.slice(start + 1, i);
  if (!tag) {
    return;
  }
  if (closingTag) {
    if (src[i] === "]") {
      if (multiline && !trailingSpaceOnly(src, i + 1, max)) {
        return;
      }
      tag = tag.toLowerCase();
      return {
        tag,
        length: tag.length + 3,
        closing: true
      };
    }
    return;
  }
  for (; i < max; i++) {
    let letter = src[i];
    if (letter === "]") {
      closed = true;
      break;
    }
  }
  if (closed) {
    length = i - start + 1;
    let raw = src.slice(start + tag.length + 1, i);

    // trivial parser that is going to have to be rewritten at some point
    if (raw) {
      let match, key, val;
      while (match = ATTR_REGEX.exec(raw)) {
        if (match[1]) {
          key = "_default";
        } else {
          key = match[4];
        }
        val = match[1] || match[5];
        if (val) {
          val = val.trim();
          val = val.replace(/^["'“”](.*)["'“”]$/, "$1");
          attrs[key] = val;
        }
      }
    }
    if (multiline && !trailingSpaceOnly(src, start + length, max)) {
      return;
    }
    tag = tag.toLowerCase();
    return {
      tag,
      attrs,
      length
    };
  }
}
function findBlockCloseTag(state, openTag, startLine, endLine) {
  let nesting = 0,
    line = startLine - 1,
    start,
    closeTag,
    max;
  for (;;) {
    line++;
    if (line >= endLine) {
      // unclosed bbcode block should not be autoclosed by end of document.
      return;
    }
    start = state.bMarks[line] + state.tShift[line];
    max = state.eMarks[line];
    if (start < max && state.sCount[line] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }

    // bbcode close [ === 91
    if (91 !== state.src.charCodeAt(start)) {
      continue;
    }
    if (state.sCount[line] - state.blkIndent >= 4) {
      // closing bbcode less than 4 spaces
      continue;
    }
    closeTag = parseBBCodeTag(state.src, start, max, true);
    if (closeTag && closeTag.closing && closeTag.tag === openTag.tag) {
      if (nesting === 0) {
        closeTag.line = line;
        closeTag.block = true;
        break;
      }
      nesting--;
    }
    if (closeTag && !closeTag.closing && closeTag.tag === openTag.tag) {
      nesting++;
    }
    closeTag = null;
  }
  return closeTag;
}
function findInlineCloseTag(state, openTag, start, max) {
  let closeTag;
  let possibleTag = false;
  for (let j = max - 1; j > start; j--) {
    if (!possibleTag) {
      if (state.src.charCodeAt(j) === 93 /* ] */) {
        possibleTag = true;
        continue;
      }
      if (!isWhiteSpace(state.src.charCodeAt(j))) {
        break;
      }
    } else {
      if (state.src.charCodeAt(j) === 91 /* [ */) {
        closeTag = parseBBCodeTag(state.src, j, max);
        if (!closeTag || closeTag.tag !== openTag.tag || !closeTag.closing) {
          closeTag = null;
        } else {
          closeTag.start = j;
          break;
        }
      }
    }
  }
  return closeTag;
}
function applyBBCode(state, startLine, endLine, silent, md) {
  let nextLine,
    oldParent,
    oldLineMax,
    rule,
    start = state.bMarks[startLine] + state.tShift[startLine],
    initial = start,
    max = state.eMarks[startLine];

  // [ === 91
  if (91 !== state.src.charCodeAt(start)) {
    return false;
  }
  let info = parseBBCodeTag(state.src, start, max);
  if (!info || info.closing) {
    return false;
  }
  let ruleInfo = md.block.bbcode.ruler.getRuleForTag(info.tag);
  if (!ruleInfo) {
    return false;
  }
  rule = ruleInfo.rule;

  // Since start is found, we can report success here in validation mode
  if (silent) {
    return true;
  }

  // Search for the end of the block
  nextLine = startLine;

  // We might have a single inline bbcode

  let closeTag = findInlineCloseTag(state, info, start + info.length, max);
  if (!closeTag) {
    if (!trailingSpaceOnly(state.src, start + info.length, max)) {
      return false;
    }
    closeTag = findBlockCloseTag(state, info, nextLine + 1, endLine);
  }
  if (!closeTag) {
    return false;
  }
  nextLine = closeTag.line || startLine;
  oldParent = state.parentType;
  oldLineMax = state.lineMax;

  // this will prevent lazy continuations from ever going past our end marker
  // which can happen if we are parsing a bbcode block
  state.lineMax = nextLine;
  if (rule.replace) {
    let content;
    if (startLine === nextLine) {
      content = state.src.slice(start + info.length, closeTag.start);
    } else {
      content = state.src.slice(state.bMarks[startLine + 1], state.eMarks[nextLine - 1]);
    }
    if (!rule.replace.call(this, state, info, content)) {
      return false;
    }
  } else {
    if (rule.before) {
      rule.before.call(this, state, info, state.src.slice(initial, initial + info.length + 1));
    }
    let wrapTag;
    if (rule.wrap) {
      let token;
      if (typeof rule.wrap === "function") {
        token = new state.Token("wrap_bbcode", "div", 1);
        token.level = state.level + 1;
        if (!rule.wrap(token, info)) {
          return false;
        }
        state.tokens.push(token);
        state.level = token.level;
        wrapTag = token.tag;
      } else {
        let split = rule.wrap.split(".");
        wrapTag = split[0];
        let className = split.slice(1).join(" ");
        token = state.push("wrap_bbcode", wrapTag, 1);
        if (className) {
          token.attrs = [["class", className]];
        }
      }
    }
    let lastToken = state.tokens[state.tokens.length - 1];
    lastToken.map = [startLine, nextLine];
    if (closeTag.block) {
      state.md.block.tokenize(state, startLine + 1, nextLine);
    } else {
      let token = state.push("paragraph_open", "p", 1);
      token.map = [startLine, startLine];
      token = state.push("inline", "", 0);
      token.children = [];
      token.map = [startLine, startLine];
      token.content = state.src.slice(start + info.length, closeTag.start);
      state.push("paragraph_close", "p", -1);
    }
    if (rule.wrap) {
      state.push("wrap_bbcode", wrapTag, -1);
    }
    if (rule.after) {
      rule.after.call(this, state, lastToken, state.src.slice(start - 2, start + closeTag.length - 1));
    }
  }
  state.parentType = oldParent;
  state.lineMax = oldLineMax;
  state.line = nextLine + 1;
  return true;
}
function setup(helper) {
  helper.registerPlugin(md => {
    const ruler = md.block.bbcode.ruler;
    ruler.push("excerpt", {
      tag: "excerpt",
      wrap: "div.excerpt"
    });
    ruler.push("code", {
      tag: "code",
      replace(state, tagInfo, content) {
        let token;
        token = state.push("fence", "code", 0);
        token.content = content;
        return true;
      }
    });
    isWhiteSpace = md.utils.isWhiteSpace;
    md.block.ruler.after("fence", "bbcode", (state, startLine, endLine, silent) => {
      return applyBBCode(state, startLine, endLine, silent, md);
    }, {
      alt: ["paragraph", "reference", "blockquote", "list"]
    });
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/bbcode-inline.js":
/*!***********************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/bbcode-inline.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var _bbcode_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbcode-block */ "../../../../discourse-markdown-it/src/features/bbcode-block.js");

function tokenizeBBCode(state, silent, ruler) {
  let pos = state.pos;

  // 91 = [
  if (silent || state.src.charCodeAt(pos) !== 91) {
    return false;
  }
  const tagInfo = (0,_bbcode_block__WEBPACK_IMPORTED_MODULE_0__.parseBBCodeTag)(state.src, pos, state.posMax);
  if (!tagInfo) {
    return false;
  }
  let rule, i;
  let ruleInfo = ruler.getRuleForTag(tagInfo.tag);
  if (!ruleInfo) {
    return false;
  }
  rule = ruleInfo.rule;
  if (rule.replace) {
    // special handling for replace
    // we pass raw contents to callback so we simply need to greedy match to end tag
    if (tagInfo.closing) {
      return false;
    }
    let closeTag = "[/" + tagInfo.tag + "]";
    let found = false;
    for (i = state.pos + tagInfo.length; i <= state.posMax - closeTag.length; i++) {
      if (state.src.charCodeAt(pos) === 91 && state.src.slice(i, i + closeTag.length).toLowerCase() === closeTag) {
        found = true;
        break;
      }
    }
    if (!found) {
      return false;
    }
    let content = state.src.slice(state.pos + tagInfo.length, i);
    if (rule.replace(state, tagInfo, content)) {
      state.pos = i + closeTag.length;
      return true;
    } else {
      return false;
    }
  } else {
    tagInfo.rule = rule;
    if (tagInfo.closing && state.tokens.at(-1)?.meta === "bbcode") {
      state.push("text", "", 0);
    }
    let token = state.push("text", "", 0);
    token.content = state.src.slice(pos, pos + tagInfo.length);
    token.meta = "bbcode";
    state.delimiters.push({
      bbInfo: tagInfo,
      marker: "bb" + tagInfo.tag,
      open: !tagInfo.closing,
      close: !!tagInfo.closing,
      token: state.tokens.length - 1,
      level: state.level,
      end: -1
    });
    state.pos = pos + tagInfo.length;
    return true;
  }
}
function processBBCode(state, silent) {
  let i,
    startDelim,
    endDelim,
    tagInfo,
    delimiters = state.delimiters,
    max = delimiters.length;
  if (silent) {
    return;
  }
  for (i = 0; i < max - 1; i++) {
    startDelim = delimiters[i];
    tagInfo = startDelim.bbInfo;
    if (!tagInfo) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    endDelim = delimiters[startDelim.end];
    let tag, className;
    const startToken = state.tokens[startDelim.token];
    const endToken = state.tokens[endDelim.token];
    if (typeof tagInfo.rule.wrap === "function") {
      let content = "";
      for (let j = startDelim.token + 1; j < endDelim.token; j++) {
        let inner = state.tokens[j];
        if (inner.type === "text" && inner.meta !== "bbcode") {
          content += inner.content;
        }
      }
      tagInfo.rule.wrap(startToken, endToken, tagInfo, content, state);
      continue;
    } else {
      let split = tagInfo.rule.wrap.split(".");
      tag = split[0];
      className = split.slice(1).join(" ");
    }
    startToken.type = "bbcode_" + tagInfo.tag + "_open";
    startToken.tag = tag;
    if (className) {
      startToken.attrs = [["class", className]];
    }
    startToken.nesting = 1;
    startToken.markup = startToken.content;
    startToken.content = "";
    endToken.type = "bbcode_" + tagInfo.tag + "_close";
    endToken.tag = tag;
    endToken.nesting = -1;
    endToken.markup = startToken.content;
    endToken.content = "";
  }
  return false;
}
function setup(helper) {
  helper.allowList(["span.bbcode-b", "span.bbcode-i", "span.bbcode-u", "span.bbcode-s"]);
  helper.registerOptions(opts => {
    opts.features["bbcode-inline"] = true;
  });
  helper.registerPlugin(md => {
    const ruler = md.inline.bbcode.ruler;
    md.inline.ruler.push("bbcode-inline", (state, silent) => tokenizeBBCode(state, silent, ruler));
    md.inline.ruler2.before("fragments_join", "bbcode-inline", processBBCode);
    ruler.push("code", {
      tag: "code",
      replace(state, tagInfo, content) {
        let token;
        token = state.push("code_inline", "code", 0);
        token.content = content;
        return true;
      }
    });
    const simpleUrlRegex = /^https?:\/\//;
    ruler.push("url", {
      tag: "url",
      replace(state, tagInfo, content) {
        let token;

        // we need to tokenize the content and reinsert tokens in the stream
        // this is because we need to support nested bbcode
        let tokens = [];
        md.inline.parse(content, state.md, state.env, tokens);
        let url = tagInfo.attrs["_default"];
        if (!url) {
          // try to find the actual url in the tokens
          for (let i = 0; i < tokens.length; i++) {
            token = tokens[i];
            // nested linkify or link, just pick it
            if (token.type === "link_open") {
              for (let j = 0; j < token.attrs.length; j++) {
                if (token.attrs[j][0] === "href") {
                  url = token.attrs[j][1];
                  break;
                }
              }
              if (url) {
                break;
              }
            }
            if (token.type === "text") {
              url = token.content;
              break;
            }
          }
        }
        if (md.linkify) {
          let match = null;

          // linkify has trouble with strings containing spaces, so just ban
          // them outright
          if (url && !url.includes(" ")) {
            match = md.linkify.matchAtStart(url);
            if (!match) {
              match = md.linkify.matchAtStart("https://" + url);
            }
          }
          if (match) {
            url = match.url;
          } else {
            url = null;
          }
        } else if (!url.match(simpleUrlRegex)) {
          url = "https://" + url;
        }
        if (url) {
          token = state.push("link_open", "a", 0);
          token.attrs = ["href", url];
          token.attrs = [["href", url], ["data-bbcode", "true"]];
          token.content = "";
          token.nesting = 1;
        }
        for (let i = 0; i < tokens.length; i++) {
          token = tokens[i];
          if (token.type === "link_open" || token.type === "link_close") {
            // linkify nested tokens, do nothing
          } else {
            state.tokens.push(token);
          }
        }
        if (url) {
          token = state.push("link_close", "a", 0);
          token.nesting = -1;
          token.content = "";
        }
        return true;
      }
    });
    ruler.push("email", {
      tag: "email",
      replace(state, tagInfo, content) {
        let token;
        const email = tagInfo.attrs["_default"] || content;
        token = state.push("link_open", "a", 1);
        token.attrs = [["href", "mailto:" + email], ["data-bbcode", "true"]];
        token = state.push("text", "", 0);
        token.content = content;
        state.push("link_close", "a", -1);
        return true;
      }
    });
    ruler.push("image", {
      tag: "img",
      replace(state, tagInfo, content) {
        let token = state.push("image", "img", 0);
        token.attrs = [["src", content], ["alt", ""]];
        token.children = [];
        return true;
      }
    });
    ruler.push("bold", {
      tag: "b",
      wrap: "span.bbcode-b"
    });
    ruler.push("italic", {
      tag: "i",
      wrap: "span.bbcode-i"
    });
    ruler.push("underline", {
      tag: "u",
      wrap: "span.bbcode-u"
    });
    ruler.push("strike", {
      tag: "s",
      wrap: "span.bbcode-s"
    });
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/censored.js":
/*!******************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/censored.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var pretty_text_censored_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pretty-text/censored-words */ "../rewritten-packages/pretty-text.eb45c813/node_modules/pretty-text/censored-words.js");

function recurse(tokens, apply) {
  let i;
  for (i = 0; i < tokens.length; i++) {
    if (tokens[i].type === "html_raw" && tokens[i].onebox) {
      continue;
    }
    apply(tokens[i]);
    if (tokens[i].children) {
      recurse(tokens[i].children, apply);
    }
  }
}
function censorTree(state, censor) {
  if (!state.tokens) {
    return;
  }
  recurse(state.tokens, token => {
    if (token.content) {
      token.content = censor(token.content);
    }
  });
}
function setup(helper) {
  helper.registerPlugin(md => {
    const censoredRegexps = md.options.discourse.censoredRegexp;
    if (Array.isArray(censoredRegexps) && censoredRegexps.length > 0) {
      const replacement = String.fromCharCode(9632);
      const censor = (0,pretty_text_censored_words__WEBPACK_IMPORTED_MODULE_0__.censorFn)(censoredRegexps, replacement);
      md.core.ruler.push("censored", state => censorTree(state, censor));
    }
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/code.js":
/*!**************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/code.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
// we need a custom renderer for code blocks cause we have a slightly non compliant
// format with special handling for text and so on
const TEXT_CODE_CLASSES = ["text", "pre", "plain"];
function extractTokenInfo(info, md) {
  if (!info) {
    return;
  }
  info = info.trim();
  const matches = info.match(/(^\s*\S*)\s*(.*)/i);
  if (!matches) {
    return;
  }

  // ensure the token has only valid chars
  // c++, strucuted-text and p91, are all valid
  if (!/^[\w+-]*$/i.test(matches[1])) {
    return;
  }
  const ASCII_REGEX = /[^\x00-\x7F]/;
  const tag = md.utils.unescapeAll(matches[1].replace(ASCII_REGEX, ""));
  const extractedData = {
    tag,
    attributes: {}
  };
  if (matches[2]?.length) {
    md.utils.unescapeAll(matches[2].replace(ASCII_REGEX, "")).split(",").forEach(potentialPair => {
      const [key, value] = potentialPair.trim().split(/\s+/g)[0].split("=");

      // invalid pairs would get caught here and not used, eg `foo=`
      if (key && value) {
        extractedData.attributes[key] = value;
      }
    });
  }
  return extractedData;
}
function render(tokens, idx, options, env, slf, md) {
  const token = tokens[idx];
  const escapedContent = md.utils.escapeHtml(token.content);
  const tokenInfo = extractTokenInfo(token.info, md);
  const tag = tokenInfo?.tag || md.options.discourse.defaultCodeLang;
  const attributes = tokenInfo?.attributes || {};
  let className;
  if (TEXT_CODE_CLASSES.includes(tag)) {
    className = "lang-plaintext";
  } else if (tag === "auto") {
    className = "lang-auto";
  } else {
    className = `lang-${md.utils.escapeHtml(tag)}`;
    attributes["wrap"] = tag;
  }
  const dataAttributes = Object.keys(attributes).map(key => {
    const value = md.utils.escapeHtml(attributes[key]);
    key = md.utils.escapeHtml(key);
    return `data-code-${key}="${value}"`;
  }).join(" ");
  return `<pre${dataAttributes ? ` ${dataAttributes}` : ""}><code${className ? ` class="${className}"` : ""}>${escapedContent}</code></pre>\n`;
}
function setup(helper) {
  helper.registerOptions((opts, siteSettings) => {
    opts.defaultCodeLang = siteSettings.default_code_lang;
  });
  helper.allowList(["pre[data-code-*]"]);
  helper.allowList({
    custom(tag, name, value) {
      if (tag === "code" && name === "class") {
        return /^lang\-.+$/.test(value);
      }
    }
  });
  helper.registerPlugin(md => {
    md.renderer.rules.fence = (tokens, idx, options, env, slf) => render(tokens, idx, options, env, slf, md);
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/custom-typographer-replacements.js":
/*!*****************************************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/custom-typographer-replacements.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
// Simple typographic replacements
//
// (tm) (TM) → ™
// +- → ±
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
// --> <-- -> <- <-> <--> to → ← → ← ↔ ↔
// (pa) (PA) → ¶
//
// Disabled replacements:
//
// (c) (C) → ©
// (r) (R) → ®
// (p) (P) -> §

let RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--|-->|<--|->|<-|<->|<-->/;
let SCOPED_ABBR_RE = /\((tm|pa)\)/gi;
let SCOPED_ABBR = {
  pa: "¶",
  tm: "™"
};
function replaceFn(match, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}
function replaceScoped(inlineTokens) {
  let i, token;
  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];
    if (token.type === "text") {
      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
    }
  }
}
function replaceRare(inlineTokens) {
  let i,
    token,
    inside_autolink = 0;
  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];
    if (token.type === "text" && !inside_autolink) {
      if (RARE_RE.test(token.content)) {
        token.content = token.content.replace(/\+-/g, "±")
        // Custom arrows
        .replace(/(^|\s)-{1,2}>(\s|$)/gm, "\u0020\u2192\u0020").replace(/(^|\s)<-{1,2}(\s|$)/gm, "\u0020\u2190\u0020").replace(/(^|\s)<-{1,2}>(\s|$)/gm, "\u0020\u2194\u0020")
        // .., ..., ....... -> …
        // but ?..... & !..... -> ?.. & !..
        .replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",")
        // em-dash
        .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014")
        // en-dash
        .replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1\u2013");
      }
    }
    if (token.type === "link_open" && token.info === "auto") {
      inside_autolink--;
    }
    if (token.type === "link_close" && token.info === "auto") {
      inside_autolink++;
    }
  }
}
function replace(state) {
  let blkIdx;
  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline") {
      continue;
    }
    if (SCOPED_ABBR_RE.test(state.tokens[blkIdx].content)) {
      replaceScoped(state.tokens[blkIdx].children);
    }
    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replaceRare(state.tokens[blkIdx].children);
    }
  }
}
function setup(helper) {
  helper.registerPlugin(md => {
    if (md.options.typographer) {
      md.core.ruler.at("replacements", replace);
    }
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/d-wrap.js":
/*!****************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/d-wrap.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var _bbcode_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbcode-block */ "../../../../discourse-markdown-it/src/features/bbcode-block.js");

const WRAP_CLASS = "d-wrap";
function parseAttributes(tagInfo) {
  const attributes = tagInfo.attrs._default || "";
  return (0,_bbcode_block__WEBPACK_IMPORTED_MODULE_0__.parseBBCodeTag)(`[wrap wrap=${attributes}]`, 0, attributes.length + 12).attrs || {};
}
function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}
function applyDataAttributes(token, state, attributes) {
  Object.keys(attributes).forEach(tag => {
    const value = state.md.utils.escapeHtml(attributes[tag]);
    tag = camelCaseToDash(state.md.utils.escapeHtml(tag.replace(/[^A-Za-z\-0-9]/g, "")));
    if (value && tag && tag.length > 1) {
      token.attrs.push([`data-${tag}`, value]);
    }
  });
}
const blockRule = {
  tag: "wrap",
  before(state, tagInfo) {
    let token = state.push("wrap_open", "div", 1);
    token.attrs = [["class", WRAP_CLASS]];
    applyDataAttributes(token, state, parseAttributes(tagInfo));
  },
  after(state) {
    state.push("wrap_close", "div", -1);
  }
};
const inlineRule = {
  tag: "wrap",
  replace(state, tagInfo, content) {
    let token = state.push("wrap_open", "span", 1);
    token.attrs = [["class", WRAP_CLASS]];
    applyDataAttributes(token, state, parseAttributes(tagInfo));
    if (content) {
      token = state.push("text", "", 0);
      token.content = content;
    }
    state.push("wrap_close", "span", -1);
    return true;
  }
};
function setup(helper) {
  helper.registerPlugin(md => {
    md.inline.bbcode.ruler.push("inline-wrap", inlineRule);
    md.block.bbcode.ruler.push("block-wrap", blockRule);
  });
  helper.allowList([`div.${WRAP_CLASS}`, `span.${WRAP_CLASS}`, "span[data-*]"]);
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/emoji.js":
/*!***************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/emoji.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetTranslationTree: () => (/* binding */ resetTranslationTree),
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var pretty_text_emoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pretty-text/emoji */ "../rewritten-packages/pretty-text.eb45c813/node_modules/pretty-text/emoji.js");
/* harmony import */ var pretty_text_emoji_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pretty-text/emoji/data */ "../rewritten-packages/pretty-text.eb45c813/node_modules/pretty-text/emoji/data.js");


const MAX_NAME_LENGTH = 60;
let translationTree = null;
function resetTranslationTree() {
  translationTree = null;
}

// This allows us to efficiently search for aliases
// We build a data structure that allows us to quickly
// search through our N next chars to see if any match
// one of our alias emojis.
function buildTranslationTree(customEmojiTranslation) {
  let tree = [];
  let lastNode;
  const allTranslations = Object.assign({}, pretty_text_emoji_data__WEBPACK_IMPORTED_MODULE_1__.translations, customEmojiTranslation || {});
  Object.keys(allTranslations).forEach(key => {
    let node = tree;
    for (let i = 0; i < key.length; i++) {
      let code = key.charCodeAt(i);
      let found = false;
      for (let j = 0; j < node.length; j++) {
        if (node[j][0] === code) {
          node = node[j][1];
          found = true;
          break;
        }
      }
      if (!found) {
        // code, children, value
        let tmp = [code, []];
        node.push(tmp);
        lastNode = tmp;
        node = tmp[1];
      }
    }
    lastNode[2] = allTranslations[key];
  });
  return tree;
}
function imageFor(code, opts) {
  code = code.toLowerCase();
  const url = (0,pretty_text_emoji__WEBPACK_IMPORTED_MODULE_0__.buildEmojiUrl)(code, opts);
  if (url) {
    const title = `:${code}:`;
    const classes = (0,pretty_text_emoji__WEBPACK_IMPORTED_MODULE_0__.isCustomEmoji)(code, opts) ? "emoji emoji-custom" : "emoji";
    return {
      url,
      title,
      classes
    };
  }
}
function getEmojiName(content, pos, state, inlineEmoji) {
  if (content.charCodeAt(pos) !== 58) {
    return;
  }
  if (pos > 0) {
    let prev = content.charCodeAt(pos - 1);
    if (!inlineEmoji && !state.md.utils.isSpace(prev) && !state.md.utils.isPunctChar(String.fromCharCode(prev))) {
      return;
    }
  }
  pos++;
  if (content.charCodeAt(pos) === 58) {
    return;
  }
  let length = 0;
  while (length < MAX_NAME_LENGTH) {
    length++;
    if (content.charCodeAt(pos + length) === 58) {
      // check for t2-t6
      if (content.slice(pos + length + 1, pos + length + 4).match(/t[2-6]:/)) {
        length += 3;
      }
      break;
    }
    if (pos + length > content.length) {
      return;
    }
  }
  if (length === MAX_NAME_LENGTH) {
    return;
  }
  return content.slice(pos, pos + length);
}

// straight forward :smile: to emoji image
function getEmojiTokenByName(name, state) {
  let info;
  if (info = imageFor(name, state.md.options.discourse)) {
    let token = new state.Token("emoji", "img", 0);
    token.attrs = [["src", info.url], ["title", info.title], ["class", info.classes], ["alt", info.title], ["loading", "lazy"], ["width", "20"], ["height", "20"]];
    return token;
  }
}
function getEmojiTokenByTranslation(content, pos, state, customEmojiTranslation) {
  translationTree = translationTree || buildTranslationTree(customEmojiTranslation);
  let t = translationTree;
  let start = pos;
  let found = null;
  while (t.length > 0 && pos < content.length) {
    let matched = false;
    let code = content.charCodeAt(pos);
    for (let i = 0; i < t.length; i++) {
      if (t[i][0] === code) {
        matched = true;
        found = t[i][2];
        t = t[i][1];
        break;
      }
    }
    if (!matched) {
      return;
    }
    pos++;
  }
  if (!found) {
    return;
  }

  // quick boundary check
  if (start > 0) {
    let leading = content.charAt(start - 1);
    if (!state.md.utils.isSpace(leading.charCodeAt(0)) && !state.md.utils.isPunctChar(leading)) {
      return;
    }
  }

  // check trailing for punct or space
  if (pos < content.length) {
    let trailing = content.charCodeAt(pos);
    if (!state.md.utils.isSpace(trailing)) {
      return;
    }
  }
  let token = getEmojiTokenByName(found, state);
  if (token) {
    return {
      pos,
      token
    };
  }
}
function applyEmoji(content, state, emojiUnicodeReplacer, enableShortcuts, inlineEmoji, customEmojiTranslation, watchedWordsReplacer, emojiDenyList) {
  let result = null;
  let start = 0;
  if (emojiUnicodeReplacer) {
    content = emojiUnicodeReplacer(content);
  }
  if (watchedWordsReplacer) {
    const watchedWordRegex = Object.keys(watchedWordsReplacer);
    watchedWordRegex.forEach(watchedWord => {
      if (content?.match(watchedWord)) {
        const regex = new RegExp(watchedWord, "g");
        const matches = content.match(regex);
        const replacement = watchedWordsReplacer[watchedWord].replacement;
        matches.forEach(() => {
          const matchingRegex = regex.exec(content);
          if (matchingRegex) {
            content = content.replace(matchingRegex[1], replacement);
          }
        });
      }
    });
  }

  // prevent denied emoji and aliases from being rendered
  if (emojiDenyList?.length > 0) {
    emojiDenyList.forEach(emoji => {
      if (content?.match(emoji)) {
        const regex = new RegExp(`:${emoji}:`, "g");
        content = content.replace(regex, "");
      }
    });
  }
  let end = content.length;
  for (let i = 0; i < content.length - 1; i++) {
    let offset = 0;
    let token = null;
    const name = getEmojiName(content, i, state, inlineEmoji);
    if (name) {
      token = getEmojiTokenByName(name, state);
      if (token) {
        offset = name.length + 2;
      }
    }
    if (enableShortcuts && !token) {
      // handle aliases (note: we can't do this in inline cause ; is not a split point)
      const info = getEmojiTokenByTranslation(content, i, state, customEmojiTranslation);
      if (info) {
        offset = info.pos - i;
        token = info.token;
      }
    }
    if (token) {
      result = result || [];
      if (i - start > 0) {
        let text = new state.Token("text", "", 0);
        text.content = content.slice(start, i);
        result.push(text);
      }
      result.push(token);
      end = start = i + offset;
      i += offset - 1;
    }
  }
  if (end < content.length) {
    let text = new state.Token("text", "", 0);
    text.content = content.slice(end);
    result.push(text);
  }

  // we check for a result <= 5 because we support maximum 3 large emojis
  // EMOJI SPACE EMOJI SPACE EMOJI => 5 tokens
  if (result && result.length > 0 && result.length <= 5) {
    // we ensure line starts and ends with an emoji
    // and has no more than 3 emojis
    if (result[0].type === "emoji" && result[result.length - 1].type === "emoji" && result.filter(r => r.type === "emoji").length <= 3) {
      let onlyEmojiLine = true;
      let index = 0;
      const checkNextToken = t => {
        if (!t) {
          return;
        }
        if (!["emoji", "text"].includes(t.type)) {
          onlyEmojiLine = false;
        }

        // a text token should always have an emoji before
        // and be a space
        if (t.type === "text" && (result[index - 1] && result[index - 1].type !== "emoji" || t.content !== " ")) {
          onlyEmojiLine = false;
        }

        // exit as soon as possible
        if (onlyEmojiLine) {
          index += 1;
          checkNextToken(result[index]);
        }
      };
      checkNextToken(result[index]);
      if (onlyEmojiLine) {
        result.forEach(r => {
          if (r.type === "emoji") {
            applyOnlyEmojiClass(r);
          }
        });
      }
    }
  }
  return result;
}
function applyOnlyEmojiClass(token) {
  token.attrs.forEach(attr => {
    if (attr[0] === "class") {
      attr[1] = `${attr[1]} only-emoji`;
    }
  });
}
function setup(helper) {
  helper.registerOptions((opts, siteSettings, state) => {
    opts.features.emoji = !state.disableEmojis && !!siteSettings.enable_emoji;
    opts.features.emojiShortcuts = !!siteSettings.enable_emoji_shortcuts;
    opts.features.inlineEmoji = !!siteSettings.enable_inline_emoji_translation;
    opts.emojiSet = siteSettings.emoji_set || "";
    opts.customEmoji = state.customEmoji;
    opts.emojiCDNUrl = siteSettings.external_emoji_url;
    opts.emojiDenyList = state.emojiDenyList;
  });
  helper.registerPlugin(md => {
    md.core.ruler.push("emoji", state => md.options.discourse.helpers.textReplace(state, (c, s) => applyEmoji(c, s, md.options.discourse.emojiUnicodeReplacer, md.options.discourse.features.emojiShortcuts, md.options.discourse.features.inlineEmoji, md.options.discourse.customEmojiTranslation, md.options.discourse.watchedWordsReplace, md.options.discourse.emojiDenyList)));
  });
  helper.allowList(["img[class=emoji]", "img[class=emoji emoji-custom]", "img[class=emoji emoji-custom only-emoji]", "img[class=emoji only-emoji]", "img[loading=lazy]", "img[width=20]", "img[height=20]"]);
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/hashtag-autocomplete.js":
/*!******************************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/hashtag-autocomplete.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
// NOTE: For future maintainers, the hashtag lookup here does not take
// into account mixed contexts -- for instance, a chat quote inside a post
// or a post quote inside a chat message, so hashtagTypesInPriorityOrder may
// not provide an accurate lookup for hashtags without a ::type suffix in those
// cases if there are conflcting types of resources with the same slug.

function addHashtag(buffer, matches, state) {
  const options = state.md.options.discourse;
  const slug = matches[1];
  const hashtagLookup = options.hashtagLookup;

  // NOTE: The lookup function is only run when cooking
  // server-side, and will only return a single result based on the
  // slug lookup.
  const result = hashtagLookup && hashtagLookup(slug, options.userId, options.hashtagTypesInPriorityOrder);

  // NOTE: When changing the HTML structure here, you must also change
  // it in the placeholder HTML code inside lib/hashtag-autocomplete, and vice-versa.
  let token;
  if (result) {
    token = new state.Token("link_open", "a", 1);

    // Data attributes here are used later on for things like quoting
    // HTML-to-markdown
    token.attrs = [["class", "hashtag-cooked"], ["href", result.relative_url], ["data-type", result.type], ["data-slug", result.slug], ["data-id", result.id]];

    // Most cases these will be the exact same, one standout is categories
    // which have a parent:child reference.
    if (result.slug !== result.ref) {
      token.attrs.push(["data-ref", result.ref]);
    }
    token.block = false;
    buffer.push(token);
    addIconPlaceholder(buffer, state);
    token = new state.Token("span_open", "span", 1);
    token.block = false;
    buffer.push(token);
    token = new state.Token("text", "", 0);
    token.content = result.text;
    buffer.push(token);
    buffer.push(new state.Token("span_close", "span", -1));
    buffer.push(new state.Token("link_close", "a", -1));
  } else {
    token = new state.Token("span_open", "span", 1);
    token.attrs = [["class", "hashtag-raw"]];
    buffer.push(token);
    token = new state.Token("span_open", "span", 1);
    token = new state.Token("text", "", 0);
    token.content = matches[0];
    buffer.push(token);
    token = new state.Token("span_close", "span", -1);
    token = new state.Token("span_close", "span", -1);
    buffer.push(token);
  }
}

// The svg icon is not baked into the HTML because we want
// to be able to use icon replacement via renderIcon, and
// because different hashtag types may render icons/CSS
// classes differently.
//
// Instead, the UI will dynamically replace these where hashtags
// are rendered, like within posts, using decorateCooked* APIs.
function addIconPlaceholder(buffer, state) {
  let token = new state.Token("span_open", "span", 1);
  token.block = false;
  token.attrs = [["class", "hashtag-icon-placeholder"]];
  buffer.push(token);
  token = new state.Token("svg_open", "svg", 1);
  token.block = false;
  token.attrs = [["class", `fa d-icon d-icon-square-full svg-icon svg-node`]];
  buffer.push(token);
  token = new state.Token("use_open", "use", 1);
  token.block = false;
  token.attrs = [["href", "#square-full"]];
  buffer.push(token);
  buffer.push(new state.Token("use_close", "use", -1));
  buffer.push(new state.Token("svg_close", "svg", -1));
  buffer.push(new state.Token("span_close", "span", -1));
}
function setup(helper) {
  helper.registerPlugin(md => {
    const rule = {
      matcher: /#([\u00C0-\u1FFF\u2C00-\uD7FF\w:-]{1,101})/,
      onMatch: addHashtag
    };
    md.core.textPostProcess.ruler.push("hashtag-autocomplete", rule);
  });
  helper.allowList(["a.hashtag-cooked", "span.hashtag-raw", "span.hashtag-icon-placeholder", "svg[class=fa d-icon d-icon-square-full svg-icon svg-node]", "use[href=#square-full]", "a[data-type]", "a[data-slug]", "a[data-ref]", "a[data-id]"]);
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/html-img.js":
/*!******************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/html-img.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
// special handling for IMG tags on a line by themselves
// we always have to handle it as so it is an inline
// see: https://talk.commonmark.org/t/newline-and-img-tags/2511

const REGEX = /^<img.*\\?>\s*$/i;
function rule(state, startLine, endLine) {
  let nextLine,
    token,
    lineText,
    pos = state.bMarks[startLine] + state.tShift[startLine],
    max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (!state.md.options.html) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 0x3c /* < */) {
    return false;
  }
  let pos1 = state.src.charCodeAt(pos + 1);
  if (pos1 !== 73 /* I */ && pos1 !== 105 /* i */) {
    return false;
  }
  lineText = state.src.slice(pos, max);
  if (!REGEX.test(lineText)) {
    return false;
  }
  let lines = [];
  lines.push(lineText);
  nextLine = startLine + 1;
  for (; nextLine < endLine; nextLine++) {
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    lineText = state.src.slice(pos, max);
    if (lineText.trim() === "") {
      break;
    }
    if (!REGEX.test(lineText)) {
      break;
    }
    lines.push(lineText);
  }
  state.line = nextLine;
  let oldParentType = state.parentType;
  state.parentType = "paragraph";
  token = state.push("paragraph_open", "p", 1);
  token.map = [startLine, state.line];
  token = state.push("inline", "", 0);
  token.content = lines.join("\n");
  token.map = [startLine, state.line];
  token.children = [];
  state.push("paragraph_close", "p", -1);
  state.parentType = oldParentType;
  return true;
}
function setup(helper) {
  helper.registerPlugin(md => {
    md.block.ruler.before("html_block", "html_img", rule, {
      alt: ["fence"]
    });
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/image-controls.js":
/*!************************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/image-controls.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   priority: () => (/* binding */ priority),
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var discourse_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! discourse-i18n */ "../../../../discourse-i18n/src/index.js");

const SCALES = ["100", "75", "50"];
function isUpload(token) {
  return token.content.includes("upload://");
}
function hasMetadata(token) {
  return token.content.match(/(\d{1,4}x\d{1,4})/);
}
function appendMetaData(index, token) {
  const sizePart = token.content.split("|").find(x => x.match(/\d{1,4}x\d{1,4}(,\s*\d{1,3}%)?/));
  let selectedScale = sizePart && sizePart.split(",").pop().trim().replace("%", "");
  const overwriteScale = !SCALES.find(scale => scale === selectedScale);
  if (overwriteScale) {
    selectedScale = "100";
  }
  token.attrs.push(["index-image", index]);
  token.attrs.push(["scale", selectedScale]);
}
function rule(state) {
  let currentIndex = 0;
  for (let i = 0; i < state.tokens.length; i++) {
    let blockToken = state.tokens[i];
    const blockTokenImage = blockToken.tag === "img";
    if (blockTokenImage && isUpload(blockToken) && hasMetadata(blockToken)) {
      appendMetaData(currentIndex, blockToken);
      currentIndex++;
    }
    if (!blockToken.children) {
      continue;
    }
    for (let j = 0; j < blockToken.children.length; j++) {
      let token = blockToken.children[j];
      const childrenImage = token.tag === "img";
      if (childrenImage && isUpload(blockToken) && hasMetadata(token)) {
        appendMetaData(currentIndex, token);
        currentIndex++;
      }
    }
  }
}
function buildScaleButton(selectedScale, scale) {
  const activeScaleClass = selectedScale === scale ? " active" : "";
  return "<span class='scale-btn" + activeScaleClass + "' data-scale='" + scale + "'>" + scale + "%</span>";
}
function buildImageShowAltTextControls(altText) {
  return `
  <span class="alt-text-readonly-container">
  <span class="alt-text-edit-btn">
  <svg aria-hidden="true" class="fa d-icon d-icon-pencil svg-icon svg-string"><use href="#pencil-alt"></use></svg>
</span>

  <span class="alt-text" aria-label="${discourse_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("composer.image_alt_text.aria_label")}">${altText}</span>
  </span>
  `;
}
function buildImageEditAltTextControls(altText) {
  return `
  <span class="alt-text-edit-container" hidden="true">
    <input class="alt-text-input" type="text" value="${altText}" />
    <button class="alt-text-edit-ok btn btn-primary">
        <svg class="fa d-icon d-icon-check svg-icon svg-string"><use href="#check"></use></svg>
    </button>
    <button class="alt-text-edit-cancel btn btn-default">
        <svg class="fa d-icon d-icon-times svg-icon svg-string"><use href="#times"></use></svg>
    </button>
  </span>
  `;
}
function buildImageDeleteButton() {
  return `
  <span class="delete-image-button" aria-label="${discourse_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("composer.delete_image_button")}">
  <svg class="fa d-icon d-icon-trash-alt svg-icon svg-string" xmlns="http://www.w3.org/2000/svg">
  <use href="#far-trash-alt"></use>
  </svg>
   </span>
  `;
}
function buildImageGalleryControl(imageCount) {
  return `
  <span class="wrap-image-grid-button" title="${discourse_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("composer.toggle_image_grid")}" data-image-count="${imageCount}">
    <svg class="fa d-icon d-icon-th svg-icon svg-string" xmlns="http://www.w3.org/2000/svg">
    <use href="#th"></use>
    </svg>
  </span>
  `;
}

// We need this to load after `upload-protocol` which is priority 0
const priority = 1;
function ruleWithImageControls(oldRule) {
  return function (tokens, idx, options, env, slf) {
    const token = tokens[idx];
    const scaleIndex = token.attrIndex("scale");
    const imageIndex = token.attrIndex("index-image");
    if (scaleIndex !== -1) {
      let selectedScale = token.attrs[scaleIndex][1];
      let index = token.attrs[imageIndex][1];
      let result = `<span class="image-wrapper">`;
      result += oldRule(tokens, idx, options, env, slf);
      result += `<span class="button-wrapper" data-image-index="${index}">`;
      if (idx === 0) {
        const imageCount = tokens.filter(x => x.type === "image").length;
        if (imageCount > 1) {
          result += buildImageGalleryControl(imageCount);
        }
      }
      result += buildImageShowAltTextControls(token.attrs[token.attrIndex("alt")][1]);
      result += buildImageEditAltTextControls(token.attrs[token.attrIndex("alt")][1]);
      result += `<span class="scale-btn-container">`;
      result += SCALES.map(scale => buildScaleButton(selectedScale, scale)).join("");
      result += `</span>`;
      result += buildImageDeleteButton();
      result += "</span></span>";
      return result;
    } else {
      return oldRule(tokens, idx, options, env, slf);
    }
  };
}
function setup(helper) {
  const opts = helper.getOptions();
  if (opts.previewing) {
    helper.allowList(["span.image-wrapper", "span.button-wrapper", "span[class=scale-btn-container]", "span[class=scale-btn]", "span[class=scale-btn active]", "span.separator", "span.scale-btn[data-scale]", "span.button-wrapper[data-image-index]", "span[aria-label]", "span[class=delete-image-button]", "span.alt-text-container", "span.alt-text-readonly-container", "span.alt-text-readonly-container.alt-text", "span.alt-text-readonly-container.alt-text-edit-btn", "svg[class=fa d-icon d-icon-pencil svg-icon svg-string]", "use[href=#pencil-alt]", "use[href=#far-trash-alt]", "span.alt-text-edit-container", "span.delete-image-button", "span[hidden=true]", "input[type=text]", "input[class=alt-text-input]", "button[class=alt-text-edit-ok btn btn-primary]", "svg[class=fa d-icon d-icon-check svg-icon svg-string]", "use[href=#check]", "button[class=alt-text-edit-cancel btn btn-default]", "svg[class=fa d-icon d-icon-times svg-icon svg-string]", "svg[class=fa d-icon d-icon-trash-alt svg-icon svg-string]", "use[href=#times]", "span.wrap-image-grid-button", "span.wrap-image-grid-button[data-image-count]", "svg[class=fa d-icon d-icon-th svg-icon svg-string]", "use[href=#th]"]);
    helper.registerPlugin(md => {
      const oldRule = md.renderer.rules.image;
      md.renderer.rules.image = ruleWithImageControls(oldRule);
      md.core.ruler.after("upload-protocol", "resize-controls", rule);
    });
  }
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/image-grid.js":
/*!********************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/image-grid.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
const gridRule = {
  tag: "grid",
  before(state) {
    let token = state.push("bbcode_open", "div", 1);
    token.attrs = [["class", "d-image-grid"]];
  },
  after(state) {
    state.push("bbcode_close", "div", -1);
  }
};
function setup(helper) {
  helper.allowList(["div.d-image-grid"]);
  helper.registerPlugin(md => {
    md.block.bbcode.ruler.push("grid", gridRule);
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/index.js":
/*!***************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchor */ "../../../../discourse-markdown-it/src/features/anchor.js");
/* harmony import */ var _bbcode_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbcode-block */ "../../../../discourse-markdown-it/src/features/bbcode-block.js");
/* harmony import */ var _bbcode_inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bbcode-inline */ "../../../../discourse-markdown-it/src/features/bbcode-inline.js");
/* harmony import */ var _censored__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./censored */ "../../../../discourse-markdown-it/src/features/censored.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "../../../../discourse-markdown-it/src/features/code.js");
/* harmony import */ var _custom_typographer_replacements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-typographer-replacements */ "../../../../discourse-markdown-it/src/features/custom-typographer-replacements.js");
/* harmony import */ var _d_wrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./d-wrap */ "../../../../discourse-markdown-it/src/features/d-wrap.js");
/* harmony import */ var _emoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emoji */ "../../../../discourse-markdown-it/src/features/emoji.js");
/* harmony import */ var _hashtag_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hashtag-autocomplete */ "../../../../discourse-markdown-it/src/features/hashtag-autocomplete.js");
/* harmony import */ var _html_img__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./html-img */ "../../../../discourse-markdown-it/src/features/html-img.js");
/* harmony import */ var _image_controls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-controls */ "../../../../discourse-markdown-it/src/features/image-controls.js");
/* harmony import */ var _image_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./image-grid */ "../../../../discourse-markdown-it/src/features/image-grid.js");
/* harmony import */ var _mentions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mentions */ "../../../../discourse-markdown-it/src/features/mentions.js");
/* harmony import */ var _newline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./newline */ "../../../../discourse-markdown-it/src/features/newline.js");
/* harmony import */ var _onebox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./onebox */ "../../../../discourse-markdown-it/src/features/onebox.js");
/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./paragraph */ "../../../../discourse-markdown-it/src/features/paragraph.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./quotes */ "../../../../discourse-markdown-it/src/features/quotes.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./table */ "../../../../discourse-markdown-it/src/features/table.js");
/* harmony import */ var _text_post_process__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./text-post-process */ "../../../../discourse-markdown-it/src/features/text-post-process.js");
/* harmony import */ var _upload_protocol__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./upload-protocol */ "../../../../discourse-markdown-it/src/features/upload-protocol.js");
/* harmony import */ var _watched_words__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./watched-words */ "../../../../discourse-markdown-it/src/features/watched-words.js");





















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([feature("watched-words", _watched_words__WEBPACK_IMPORTED_MODULE_20__), feature("upload-protocol", _upload_protocol__WEBPACK_IMPORTED_MODULE_19__), feature("text-post-process", _text_post_process__WEBPACK_IMPORTED_MODULE_18__), feature("table", _table__WEBPACK_IMPORTED_MODULE_17__), feature("quotes", _quotes__WEBPACK_IMPORTED_MODULE_16__), feature("paragraph", _paragraph__WEBPACK_IMPORTED_MODULE_15__), feature("onebox", _onebox__WEBPACK_IMPORTED_MODULE_14__), feature("newline", _newline__WEBPACK_IMPORTED_MODULE_13__), feature("mentions", _mentions__WEBPACK_IMPORTED_MODULE_12__), feature("image-grid", _image_grid__WEBPACK_IMPORTED_MODULE_11__), feature("image-controls", _image_controls__WEBPACK_IMPORTED_MODULE_10__), feature("html-img", _html_img__WEBPACK_IMPORTED_MODULE_9__), feature("hashtag-autocomplete", _hashtag_autocomplete__WEBPACK_IMPORTED_MODULE_8__), feature("emoji", _emoji__WEBPACK_IMPORTED_MODULE_7__), feature("d-wrap", _d_wrap__WEBPACK_IMPORTED_MODULE_6__), feature("custom-typographer-replacements", _custom_typographer_replacements__WEBPACK_IMPORTED_MODULE_5__), feature("code", _code__WEBPACK_IMPORTED_MODULE_4__), feature("censored", _censored__WEBPACK_IMPORTED_MODULE_3__), feature("bbcode-inline", _bbcode_inline__WEBPACK_IMPORTED_MODULE_2__), feature("bbcode-block", _bbcode_block__WEBPACK_IMPORTED_MODULE_1__), feature("anchor", _anchor__WEBPACK_IMPORTED_MODULE_0__)]);
function feature(id, {
  setup,
  priority = 0
}) {
  return {
    id,
    setup,
    priority
  };
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/mentions.js":
/*!******************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/mentions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var pretty_text_mentions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pretty-text/mentions */ "../rewritten-packages/pretty-text.eb45c813/node_modules/pretty-text/mentions.js");

function addMention(buffer, matches, state) {
  let username = matches[1] || matches[2];
  let tag = "span";
  let className = "mention";
  let token = new state.Token("mention_open", tag, 1);
  token.attrs = [["class", className]];
  buffer.push(token);
  token = new state.Token("text", "", 0);
  token.content = "@" + username;
  buffer.push(token);
  token = new state.Token("mention_close", tag, -1);
  buffer.push(token);
}
function setup(helper) {
  helper.registerOptions((opts, siteSettings) => {
    opts.features.mentions = !!siteSettings.enable_mentions;
    opts.features.unicodeUsernames = !!siteSettings.unicode_usernames;
  });
  helper.registerPlugin(md => {
    const rule = {
      matcher: (0,pretty_text_mentions__WEBPACK_IMPORTED_MODULE_0__.mentionRegex)(md.options.discourse.features.unicodeUsernames),
      onMatch: addMention
    };
    md.core.textPostProcess.ruler.push("mentions", rule);
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/newline.js":
/*!*****************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/newline.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
// see: https://github.com/markdown-it/markdown-it/issues/375
//
// we use a custom paragraph rule cause we have to signal when a
// link starts with a space, so we can bypass a onebox
// this is a freedom patch, so careful, may break on updates

function newline(state, silent) {
  let token,
    pmax,
    max,
    ws,
    pos = state.pos;
  if (state.src.charCodeAt(pos) !== 0x0a /* \n */) {
    return false;
  }
  pmax = state.pending.length - 1;
  max = state.posMax;

  // '  \n' -> hardbreak
  // Lookup in pending chars is bad practice! Don't copy to other rules!
  // Pending string is stored in concat mode, indexed lookups will cause
  // conversion to flat mode.
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
        // Find whitespaces tail of pending chars.
        ws = pmax - 1;
        while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 0x20) {
          ws--;
        }
        state.pending = state.pending.slice(0, ws);
        token = state.push("hardbreak", "br", 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        token = state.push("softbreak", "br", 0);
      }
    } else {
      token = state.push("softbreak", "br", 0);
    }
  }
  pos++;

  // skip heading spaces for next line
  while (pos < max && state.md.utils.isSpace(state.src.charCodeAt(pos))) {
    if (token) {
      token.leading_space = true;
    }
    pos++;
  }
  state.pos = pos;
  return true;
}
function setup(helper) {
  helper.registerPlugin(md => {
    md.inline.ruler.at("newline", newline);
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/onebox.js":
/*!****************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/onebox.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var pretty_text_inline_oneboxer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pretty-text/inline-oneboxer */ "../rewritten-packages/pretty-text.eb45c813/node_modules/pretty-text/inline-oneboxer.js");
/* harmony import */ var pretty_text_oneboxer_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pretty-text/oneboxer-cache */ "../rewritten-packages/pretty-text.eb45c813/node_modules/pretty-text/oneboxer-cache.js");


const ONEBOX = 1;
const INLINE = 2;
function isTopLevel(href) {
  let split = href.split(/https?:\/\/[^\/]+[\/?]/i);
  let hasExtra = split && split[1] && split[1].length > 0;
  return !hasExtra;
}
function applyOnebox(state, silent) {
  if (silent || !state.tokens) {
    return;
  }
  for (let i = 1; i < state.tokens.length; i++) {
    let token = state.tokens[i];
    let prev = state.tokens[i - 1];
    let mode = prev.type === "paragraph_open" && prev.level === 0 ? ONEBOX : INLINE;
    if (token.type === "inline") {
      let children = token.children;
      for (let j = 0; j < children.length - 2; j++) {
        let child = children[j];
        if (child.type === "link_open" && child.markup === "linkify" && child.info === "auto") {
          if (j > children.length - 3) {
            continue;
          }
          if (j === 0 && token.leading_space) {
            mode = INLINE;
          } else if (j > 0) {
            let prevSibling = children[j - 1];
            if (prevSibling.tag !== "br" || prevSibling.leading_space) {
              mode = INLINE;
            }
          }

          // look ahead for soft or hard break
          let text = children[j + 1];
          let close = children[j + 2];
          let lookahead = children[j + 3];
          if (lookahead && lookahead.tag !== "br") {
            mode = INLINE;
          }

          // check attrs only include a href
          let attrs = child.attrs;
          if (!attrs || attrs.length !== 1 || attrs[0][0] !== "href") {
            continue;
          }
          let href = attrs[0][1];

          // edge case ... what if this is not http or protocolless?
          if (!/^http|^\/\//i.test(href)) {
            continue;
          }

          // we already know text matches cause it is an auto link
          if (!close || close.type !== "link_close") {
            continue;
          }
          if (mode === ONEBOX) {
            // we already determined earlier that 0 0 was href
            let cached = (0,pretty_text_oneboxer_cache__WEBPACK_IMPORTED_MODULE_1__.lookupCache)(attrs[0][1]);
            if (cached) {
              // replace link with 2 blank text nodes and inline html for onebox
              child.type = "html_raw";
              child.content = cached;
              child.inline = true;
              child.onebox = true;
              text.type = "html_raw";
              text.content = "";
              text.inline = true;
              close.type = "html_raw";
              close.content = "";
              close.inline = true;
            } else {
              // decorate...
              attrs.push(["class", "onebox"]);
              attrs.push(["target", "_blank"]);
            }
          } else if (mode === INLINE && !isTopLevel(href)) {
            const onebox = (0,pretty_text_inline_oneboxer__WEBPACK_IMPORTED_MODULE_0__.cachedInlineOnebox)(href);
            if (onebox && onebox.title) {
              text.content = onebox.title;
              attrs.push(["class", "inline-onebox"]);
            } else if (!onebox) {
              attrs.push(["class", "inline-onebox-loading"]);
            }
          }
        }
      }
    }
  }
}
function setup(helper) {
  helper.registerPlugin(md => {
    md.core.ruler.after("linkify", "onebox", applyOnebox);
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/paragraph.js":
/*!*******************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/paragraph.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
// see: https://github.com/markdown-it/markdown-it/issues/375
//
// we use a custom paragraph rule cause we have to signal when a
// link starts with a space, so we can bypass a onebox
// this is a freedom patch, so careful, may break on updates
function paragraph(state, startLine /*, endLine*/) {
  let content,
    terminate,
    i,
    l,
    token,
    oldParentType,
    nextLine = startLine + 1,
    terminatorRules = state.md.block.ruler.getRules("paragraph"),
    endLine = state.lineMax,
    hasLeadingSpace = false;
  oldParentType = state.parentType;
  state.parentType = "paragraph";

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) {
      continue;
    }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }

  // START CUSTOM CODE
  content = state.getLines(startLine, nextLine, state.blkIndent, false);
  i = 0;
  let contentLength = content.length;
  while (i < contentLength) {
    let chr = content.charCodeAt(i);
    if (chr === 0x0a) {
      hasLeadingSpace = false;
    } else if (state.md.utils.isWhiteSpace(chr)) {
      hasLeadingSpace = true;
    } else {
      break;
    }
    i++;
  }
  content = content.trim();
  // END CUSTOM CODE

  state.line = nextLine;
  token = state.push("paragraph_open", "p", 1);
  token.map = [startLine, state.line];
  // CUSTOM
  token.leading_space = hasLeadingSpace;
  token = state.push("inline", "", 0);
  token.content = content;
  token.map = [startLine, state.line];
  token.children = [];
  // CUSTOM
  token.leading_space = hasLeadingSpace;
  state.push("paragraph_close", "p", -1);
  state.parentType = oldParentType;
  return true;
}
function setup(helper) {
  helper.registerPlugin(md => {
    md.block.ruler.at("paragraph", paragraph);
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/quotes.js":
/*!****************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/quotes.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var pretty_text_emoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pretty-text/emoji */ "../rewritten-packages/pretty-text.eb45c813/node_modules/pretty-text/emoji.js");

const rule = {
  tag: "quote",
  before(state, tagInfo) {
    const attrs = tagInfo.attrs;
    let options = state.md.options.discourse;
    let quoteInfo = attrs["_default"];
    let username, postNumber, topicId, avatarImg, primaryGroupName, full, displayName;
    if (quoteInfo) {
      let split = quoteInfo.split(/\,\s*/);
      username = split[0];
      let i;
      for (i = 1; i < split.length; i++) {
        if (split[i].startsWith("post:")) {
          postNumber = parseInt(split[i].slice(5), 10);
          continue;
        }
        if (split[i].startsWith("topic:")) {
          topicId = parseInt(split[i].slice(6), 10);
          continue;
        }
        if (/full:\s*true/.test(split[i])) {
          full = true;
          continue;
        }

        // if we have the additional attribute of username: because we are prioritizing full name
        // then assign the name to be the displayName
        if (split[i].startsWith("username:")) {
          // return users name by selecting all values from the first index to the post
          // this protects us from when a user has a `,` in their name
          displayName = split.slice(0, split.indexOf(`post:${postNumber}`));

          // preserve `,` in a users name if they exist
          if (displayName.length > 1) {
            displayName = displayName.join(", ");
          }

          // strip key of 'username:' and return username
          username = split[i].slice(9);
          continue;
        }
      }
    }
    if (options.lookupAvatarByPostNumber) {
      // client-side, we can retrieve the avatar from the post
      avatarImg = options.lookupAvatarByPostNumber(postNumber, topicId);
    } else if (options.lookupAvatar) {
      // server-side, we need to lookup the avatar from the username
      avatarImg = options.lookupAvatar(username);
    }
    if (options.lookupPrimaryUserGroupByPostNumber) {
      // client-side, we can retrieve the primary user group from the post
      primaryGroupName = options.lookupPrimaryUserGroupByPostNumber(postNumber, topicId);
    } else if (options.lookupPrimaryUserGroup) {
      // server-side, we need to lookup the primary user group from the username
      primaryGroupName = options.lookupPrimaryUserGroup(username);
    }
    if (options.formatUsername) {
      displayName = displayName || options.formatUsername(username);
    } else {
      displayName = displayName || username;
    }
    let token = state.push("bbcode_open", "aside", 1);
    token.attrs = [];
    if (primaryGroupName && primaryGroupName.length !== 0) {
      token.attrs.push(["class", `quote group-${primaryGroupName}`]);
    } else {
      token.attrs.push(["class", "quote no-group"]);
    }
    if (username) {
      token.attrs.push(["data-username", username]);
    }
    if (postNumber) {
      token.attrs.push(["data-post", postNumber]);
    }
    if (topicId) {
      token.attrs.push(["data-topic", topicId]);
    }
    if (full) {
      token.attrs.push(["data-full", "true"]);
    }
    if (username) {
      let forOtherTopic = options.topicId && topicId !== options.topicId;
      let offTopicQuote = postNumber && options.getTopicInfo && (forOtherTopic || options.forceQuoteLink);

      // on topic quote
      token = state.push("quote_header_open", "div", 1);
      token.attrs = [["class", "title"]];
      token = state.push("quote_controls_open", "div", 1);
      token.attrs = [["class", "quote-controls"]];
      state.push("quote_controls_close", "div", -1);
      if (avatarImg) {
        token = state.push("html_inline", "", 0);
        token.content = avatarImg;
      }
      if (offTopicQuote) {
        const topicInfo = options.getTopicInfo(topicId);
        if (topicInfo) {
          let href = topicInfo.href;
          if (postNumber > 0) {
            href += "/" + postNumber;
          }
          let title = topicInfo.title;
          if (options.enableEmoji) {
            title = (0,pretty_text_emoji__WEBPACK_IMPORTED_MODULE_0__.performEmojiUnescape)(topicInfo.title, {
              getURL: options.getURL,
              emojiSet: options.emojiSet,
              emojiCDNUrl: options.emojiCDNUrl,
              enableEmojiShortcuts: options.enableEmojiShortcuts,
              inlineEmoji: options.inlineEmoji,
              lazy: true
            });
          }
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", href]];
          token.block = false;
          token = state.push("html_inline", "", 0);
          token.content = title;
          token = state.push("link_close", "a", -1);
          token.block = false;
        }
      } else {
        token = state.push("text", "", 0);
        token.content = ` ${displayName}:`;
      }
      state.push("quote_header_close", "div", -1);
    }
    state.push("bbcode_open", "blockquote", 1);
  },
  after(state) {
    state.push("bbcode_close", "blockquote", -1);
    state.push("bbcode_close", "aside", -1);
  }
};
function setup(helper) {
  helper.registerOptions((opts, siteSettings) => {
    opts.enableEmoji = siteSettings.enable_emoji;
    opts.emojiSet = siteSettings.emoji_set;
    opts.emojiCDNUrl = siteSettings.external_emoji_url;
    opts.enableEmojiShortcuts = siteSettings.enable_emoji_shortcuts;
    opts.inlineEmoji = siteSettings.enable_inline_emoji_translation;
  });
  helper.registerPlugin(md => {
    md.block.bbcode.ruler.push("quotes", rule);
  });
  helper.allowList(["img[class=avatar]", "img[loading=lazy]"]);
  helper.allowList({
    custom(tag, name, value) {
      if (tag === "aside" && name === "class") {
        return value === "quote no-group" || !!/^quote group\-(.+)$/.exec(value);
      }
    }
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/table.js":
/*!***************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/table.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
function setup(helper) {
  helper.registerPlugin(md => {
    md.renderer.rules.table_open = function () {
      return '<div class="md-table">\n<table>\n';
    };
    md.renderer.rules.table_close = function () {
      return "</table>\n</div>";
    };
  });

  // we need a custom callback for style handling
  helper.allowList({
    custom(tag, attr, val) {
      if (tag !== "th" && tag !== "td") {
        return false;
      }
      if (attr !== "style") {
        return false;
      }
      return val === "text-align:right" || val === "text-align:left" || val === "text-align:center";
    }
  });
  helper.allowList(["table", "tbody", "thead", "tr", "th", "td", "div.md-table"]);
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/text-post-process.js":
/*!***************************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/text-post-process.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextPostProcessRuler: () => (/* binding */ TextPostProcessRuler),
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
class TextPostProcessRuler {
  constructor() {
    this.rules = [];
  }
  getRules() {
    return this.rules;
  }

  // TODO error handling
  getMatcher() {
    if (this.matcher) {
      return this.matcher;
    }
    this.matcherIndex = [];
    const rules = [];
    const flags = new Set("g");
    this.rules.forEach(r => {
      const matcher = r.rule.matcher;
      rules.push(`(${matcher.source})`);
      matcher.flags.split("").forEach(f => flags.add(f));
    });
    let i;
    let regexString = "";
    let last = 1;

    // this code is a bit tricky, our matcher may have multiple capture groups
    // we want to dynamically determine how many
    for (i = 0; i < rules.length; i++) {
      this.matcherIndex[i] = last;
      if (i === rules.length - 1) {
        break;
      }
      if (i > 0) {
        regexString = regexString + "|";
      }
      regexString = regexString + rules[i];
      let regex = new RegExp(regexString + "|(x)");
      last = "x".match(regex).length - 1;
    }
    this.matcher = new RegExp(rules.join("|"), [...flags].join(""));
    return this.matcher;
  }
  applyRule(buffer, match, state) {
    let i;
    for (i = 0; i < this.rules.length; i++) {
      let index = this.matcherIndex[i];
      if (match[index]) {
        this.rules[i].rule.onMatch(buffer, match.slice(index, this.matcherIndex[i + 1]), state);
        break;
      }
    }
  }

  // TODO validate inputs
  push(name, rule) {
    this.rules.push({
      name,
      rule
    });
    this.matcher = null;
  }
}
function allowedBoundary(content, index, utils) {
  let code = content.charCodeAt(index);
  return utils.isWhiteSpace(code) || utils.isPunctChar(String.fromCharCode(code));
}
function textPostProcess(content, state, ruler) {
  let result = null;
  let match;
  let pos = 0;
  const matcher = ruler.getMatcher();
  while (match = matcher.exec(content)) {
    // something is wrong
    if (match.index < pos) {
      break;
    }

    // check boundary
    if (match.index > 0) {
      if (!allowedBoundary(content, match.index - 1, state.md.utils)) {
        continue;
      }
    }

    // check forward boundary as well
    if (match.index + match[0].length < content.length) {
      if (!allowedBoundary(content, match.index + match[0].length, state.md.utils)) {
        continue;
      }
    }
    result = result || [];
    if (match.index > pos) {
      let token = new state.Token("text", "", 0);
      token.content = content.slice(pos, match.index);
      result.push(token);
    }
    ruler.applyRule(result, match, state);
    pos = match.index + match[0].length;
  }
  if (result && pos < content.length) {
    let token = new state.Token("text", "", 0);
    token.content = content.slice(pos);
    result.push(token);
  }
  return result;
}
function setup(helper) {
  helper.registerPlugin(md => {
    const ruler = md.core.textPostProcess.ruler;
    const replacer = (content, state) => textPostProcess(content, state, ruler);
    md.core.ruler.push("text-post-process", state => md.options.discourse.helpers.textReplace(state, replacer, true));
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/upload-protocol.js":
/*!*************************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/upload-protocol.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xss */ "../../../../node_modules/xss/lib/index.js");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_0__);

const HTML_TYPES = ["html_block", "html_inline"];

// add image to array if src has an upload
function addImage(uploads, token) {
  if (token.attrs) {
    for (let i = 0; i < token.attrs.length; i++) {
      const value = token.attrs[i][1];
      if (value?.startsWith("upload://")) {
        uploads.push({
          token,
          srcIndex: i,
          origSrc: value
        });
        break;
      }
    }
  }
}
function attr(name, value) {
  if (value) {
    return `${name}="${xss__WEBPACK_IMPORTED_MODULE_0___default().escapeAttrValue(value)}"`;
  }
  return name;
}
function uploadLocatorString(url) {
  return `___REPLACE_UPLOAD_SRC_${url}___`;
}
function findUploadsInHtml(uploads, blockToken) {
  // Slightly misusing our HTML sanitizer to look for upload://
  // image src attributes, and replace them with a placeholder.
  // Note that we can't use browser DOM APIs because this needs
  // to run in mini-racer.
  let foundImage = false;
  let allowList;
  const filter = new (xss__WEBPACK_IMPORTED_MODULE_0___default().FilterXSS)({
    allowList: [],
    allowCommentTag: true,
    onTag(tag, html, info) {
      // We're not using this for sanitizing, so allow all tags through
      info.isWhite = true;
      allowList[tag] = [];
    },
    onTagAttr(tag, name, value) {
      if (tag === "img" && name === "src" && value.startsWith("upload://")) {
        uploads.push({
          token: blockToken,
          srcIndex: null,
          origSrc: value
        });
        foundImage = true;
        return uploadLocatorString(value);
      }
      return attr(name, value);
    }
  });
  allowList = filter.options.whiteList;
  const newContent = filter.process(blockToken.content);
  if (foundImage) {
    blockToken.content = newContent;
  }
}
function processToken(uploads, token) {
  if (token.tag === "img" || token.tag === "a") {
    addImage(uploads, token);
  } else if (HTML_TYPES.includes(token.type)) {
    findUploadsInHtml(uploads, token);
  }
  if (token.children) {
    for (let j = 0; j < token.children.length; j++) {
      const childToken = token.children[j];
      processToken(uploads, childToken);
    }
  }
}
function rule(state) {
  let uploads = [];
  for (let i = 0; i < state.tokens.length; i++) {
    let blockToken = state.tokens[i];
    processToken(uploads, blockToken);
  }
  if (uploads.length > 0) {
    let srcList = uploads.map(u => u.origSrc);

    // In client-side cooking, this lookup returns nothing
    // This means we set data-orig-src, and let decorateCooked
    // lookup the image URLs asynchronously
    let lookup = state.md.options.discourse.lookupUploadUrls;
    let longUrls = lookup && lookup(srcList) || {};
    uploads.forEach(({
      token,
      srcIndex,
      origSrc
    }) => {
      let mapped = longUrls[origSrc];
      if (HTML_TYPES.includes(token.type)) {
        const locator = uploadLocatorString(origSrc);
        let attrs = [];
        if (mapped) {
          attrs.push(attr("src", mapped.url), attr("data-base62-sha1", mapped.base62_sha1));
        } else {
          attrs.push(attr("src", state.md.options.discourse.getURL("/images/transparent.png")), attr("data-orig-src", origSrc));
        }
        token.content = token.content.replace(locator, attrs.join(" "));
      } else if (token.tag === "img") {
        if (mapped) {
          token.attrs[srcIndex][1] = mapped.url;
          token.attrs.push(["data-base62-sha1", mapped.base62_sha1]);
        } else {
          // no point putting a transparent .png for audio/video
          if (token.content.match(/\|video|\|audio/)) {
            token.attrs[srcIndex][1] = state.md.options.discourse.getURL("/404");
          } else {
            token.attrs[srcIndex][1] = state.md.options.discourse.getURL("/images/transparent.png");
          }
          token.attrs.push(["data-orig-src", origSrc]);
        }
      } else if (token.tag === "a") {
        if (mapped) {
          // when secure uploads is enabled we want the full /secure-media-uploads or /secure-uploads
          // url to take advantage of access control security
          if (state.md.options.discourse.limitedSiteSettings.secureUploads && (mapped.url.includes("secure-media-uploads") || mapped.url.includes("secure-uploads"))) {
            token.attrs[srcIndex][1] = mapped.url;
          } else {
            token.attrs[srcIndex][1] = mapped.short_path;
          }
        } else {
          token.attrs[srcIndex][1] = state.md.options.discourse.getURL("/404");
          token.attrs.push(["data-orig-href", origSrc]);
        }
      }
    });
  }
}
function setup(helper) {
  const opts = helper.getOptions();
  if (opts.previewing) {
    helper.allowList(["img.resizable"]);
  }
  helper.allowList(["img[data-orig-src]", "img[data-base62-sha1]", "a[data-orig-href]"]);
  helper.registerPlugin(md => {
    md.core.ruler.push("upload-protocol", rule);
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/features/watched-words.js":
/*!***********************************************************************!*\
  !*** ../../../../discourse-markdown-it/src/features/watched-words.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   priority: () => (/* binding */ priority),
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var discourse_common_utils_watched_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! discourse-common/utils/watched-words */ "../rewritten-packages/discourse-common.d19c518e/node_modules/discourse-common/utils/watched-words.js");

const MAX_MATCHES = 100;
function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}
function findAllMatches(text, matchers) {
  const matches = [];
  for (const {
    word,
    pattern,
    replacement,
    link
  } of matchers) {
    if (matches.length >= MAX_MATCHES) {
      break;
    }
    if (word.test(text)) {
      for (const match of text.matchAll(pattern)) {
        matches.push({
          index: match.index + match[0].indexOf(match[1]),
          text: match[1],
          replacement,
          link
        });
        if (matches.length >= MAX_MATCHES) {
          break;
        }
      }
    }
  }
  return matches.sort((a, b) => a.index - b.index);
}

// We need this to load after mentions and hashtags which are priority 0
const priority = 1;
const NONE = 0;
const MENTION = 1;
const HASHTAG_LINK = 2;
const HASHTAG_SPAN = 3;
const HASHTAG_ICON_SPAN = 4;
function setup(helper) {
  const opts = helper.getOptions();
  helper.registerPlugin(md => {
    const matchers = [];
    if (md.options.discourse.watchedWordsReplace) {
      Object.entries(md.options.discourse.watchedWordsReplace).forEach(([regexpString, options]) => {
        const word = (0,discourse_common_utils_watched_words__WEBPACK_IMPORTED_MODULE_0__.toWatchedWord)({
          [regexpString]: options
        });
        matchers.push({
          word: new RegExp(options.regexp, options.case_sensitive ? "" : "i"),
          pattern: (0,discourse_common_utils_watched_words__WEBPACK_IMPORTED_MODULE_0__.createWatchedWordRegExp)(word),
          replacement: options.replacement,
          link: false
        });
      });
    }
    if (md.options.discourse.watchedWordsLink) {
      Object.entries(md.options.discourse.watchedWordsLink).forEach(([regexpString, options]) => {
        const word = (0,discourse_common_utils_watched_words__WEBPACK_IMPORTED_MODULE_0__.toWatchedWord)({
          [regexpString]: options
        });
        matchers.push({
          word: new RegExp(options.regexp, options.case_sensitive ? "" : "i"),
          pattern: (0,discourse_common_utils_watched_words__WEBPACK_IMPORTED_MODULE_0__.createWatchedWordRegExp)(word),
          replacement: options.replacement,
          link: true
        });
      });
    }
    if (matchers.length === 0) {
      return;
    }
    const cache = new Map();
    md.core.ruler.push("watched-words", state => {
      for (let j = 0, l = state.tokens.length; j < l; j++) {
        if (state.tokens[j].type !== "inline") {
          continue;
        }
        let tokens = state.tokens[j].children;
        let htmlLinkLevel = 0;

        // We scan once to mark tokens that must be skipped because they are
        // mentions or hashtags
        let lastType = NONE;
        let currentType = NONE;
        for (let i = 0; i < tokens.length; ++i) {
          const currentToken = tokens[i];
          if (currentToken.type === "mention_open") {
            lastType = MENTION;
          } else if ((currentToken.type === "link_open" || currentToken.type === "span_open") && currentToken.attrs && currentToken.attrs.some(attr => attr[0] === "class" && (attr[1] === "hashtag" || attr[1] === "hashtag-cooked" || attr[1] === "hashtag-raw"))) {
            lastType = currentToken.type === "link_open" ? HASHTAG_LINK : HASHTAG_SPAN;
          }
          if (currentToken.type === "span_open" && currentToken.attrs && currentToken.attrs.some(attr => attr[0] === "class" && attr[1] === "hashtag-icon-placeholder")) {
            currentType = HASHTAG_ICON_SPAN;
          }
          if (lastType !== NONE) {
            currentToken.skipReplace = true;
          }
          if (lastType === MENTION && currentToken.type === "mention_close" || lastType === HASHTAG_LINK && currentToken.type === "link_close" || lastType === HASHTAG_SPAN && currentToken.type === "span_close" && currentType !== HASHTAG_ICON_SPAN) {
            lastType = NONE;
          }
        }

        // We scan from the end, to keep position when new tags added.
        // Use reversed logic in links start/end match
        for (let i = tokens.length - 1; i >= 0; i--) {
          const currentToken = tokens[i];

          // Skip content of markdown links
          if (currentToken.type === "link_close") {
            i--;
            while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
              i--;
            }
            continue;
          }

          // Skip content of html tag links
          if (currentToken.type === "html_inline") {
            if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
              htmlLinkLevel--;
            }
            if (isLinkClose(currentToken.content)) {
              htmlLinkLevel++;
            }
          }

          // Skip content of mentions or hashtags
          if (currentToken.skipReplace) {
            continue;
          }
          if (currentToken.type === "text") {
            const text = currentToken.content;
            let matches;
            if (cache.has(text)) {
              matches = cache.get(text);
            } else {
              matches = findAllMatches(text, matchers);
              cache.set(text, matches);
            }

            // Now split string to nodes
            const nodes = [];
            let level = currentToken.level;
            let lastPos = 0;
            let token;
            for (let ln = 0; ln < matches.length; ln++) {
              if (matches[ln].index < lastPos) {
                continue;
              }
              if (matches[ln].index > lastPos) {
                token = new state.Token("text", "", 0);
                token.content = text.slice(lastPos, matches[ln].index);
                token.level = level;
                nodes.push(token);
              }
              if (matches[ln].link) {
                const url = state.md.normalizeLink(matches[ln].replacement);
                if (htmlLinkLevel === 0 && state.md.validateLink(url)) {
                  token = new state.Token("link_open", "a", 1);
                  token.attrs = [["href", url]];
                  if (opts.discourse.previewing) {
                    token.attrs.push(["data-word", ""]);
                  }
                  token.level = level++;
                  token.markup = "linkify";
                  token.info = "auto";
                  nodes.push(token);
                  token = new state.Token("text", "", 0);
                  token.content = matches[ln].text;
                  token.level = level;
                  nodes.push(token);
                  token = new state.Token("link_close", "a", -1);
                  token.level = --level;
                  token.markup = "linkify";
                  token.info = "auto";
                  nodes.push(token);
                }
              } else {
                token = new state.Token("text", "", 0);
                token.content = matches[ln].replacement;
                token.level = level;
                nodes.push(token);
              }
              lastPos = matches[ln].index + matches[ln].text.length;
            }
            if (lastPos < text.length) {
              token = new state.Token("text", "", 0);
              token.content = text.slice(lastPos);
              token.level = level;
              nodes.push(token);
            }

            // replace current node
            state.tokens[j].children = tokens = md.utils.arrayReplaceAt(tokens, i, nodes);
          }
        }
      }
    });
  });
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/index.js":
/*!******************************************************!*\
  !*** ../../../../discourse-markdown-it/src/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscourseMarkdownIt)
/* harmony export */ });
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "../../../../discourse-markdown-it/src/engine.js");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features */ "../../../../discourse-markdown-it/src/features/index.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "../../../../discourse-markdown-it/src/options.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup */ "../../../../discourse-markdown-it/src/setup.js");




function NOOP(ident) {
  return ident;
}
class DiscourseMarkdownIt {
  static withDefaultFeatures() {
    return this.withFeatures(_features__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
  static withCustomFeatures(features) {
    return this.withFeatures([..._features__WEBPACK_IMPORTED_MODULE_1__["default"], ...features]);
  }
  static withFeatures(features) {
    const withOptions = options => this.withOptions(features, options);
    return {
      withOptions
    };
  }
  static withOptions(features, rawOptions) {
    const {
      options,
      siteSettings,
      state
    } = (0,_options__WEBPACK_IMPORTED_MODULE_2__["default"])(rawOptions);

    // note, this will mutate options due to the way the API is designed
    // may need a refactor
    (0,_setup__WEBPACK_IMPORTED_MODULE_3__["default"])(features, options, siteSettings, state);
    return new DiscourseMarkdownIt(options);
  }
  static minimal() {
    return this.withFeatures([]).withOptions({
      siteSettings: {}
    });
  }
  constructor(options) {
    if (!options.setup) {
      throw new Error("Cannot construct DiscourseMarkdownIt from raw options, " + "use DiscourseMarkdownIt.withOptions() instead");
    }
    this.options = options;
  }
  disableSanitizer() {
    this.options.sanitizer = this.options.discourse.sanitizer = NOOP;
  }
  cook(raw) {
    if (!raw || raw.length === 0) {
      return "";
    }
    let result;
    result = (0,_engine__WEBPACK_IMPORTED_MODULE_0__.cook)(raw, this.options);
    return result ? result : "";
  }
  parse(markdown, env = {}) {
    return this.options.engine.parse(markdown, env);
  }
  sanitize(html) {
    return this.options.sanitizer(html).trim();
  }
  get linkify() {
    return this.options.engine.linkify;
  }
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/options.js":
/*!********************************************************!*\
  !*** ../../../../discourse-markdown-it/src/options.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildOptions)
/* harmony export */ });
/* harmony import */ var discourse_common_lib_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! discourse-common/lib/object */ "../rewritten-packages/discourse-common.d19c518e/node_modules/discourse-common/lib/object.js");


// the options are passed here and must be explicitly allowed with
// the const options & state below
function buildOptions(state) {
  const {
    siteSettings,
    getURL,
    lookupAvatar,
    lookupPrimaryUserGroup,
    getTopicInfo,
    topicId,
    forceQuoteLink,
    userId,
    getCurrentUser,
    currentUser,
    lookupAvatarByPostNumber,
    lookupPrimaryUserGroupByPostNumber,
    formatUsername,
    emojiUnicodeReplacer,
    lookupUploadUrls,
    previewing,
    censoredRegexp,
    disableEmojis,
    customEmojiTranslation,
    watchedWordsReplace,
    watchedWordsLink,
    emojiDenyList,
    featuresOverride,
    markdownItRules,
    additionalOptions,
    hashtagTypesInPriorityOrder,
    hashtagIcons,
    hashtagLookup
  } = state;
  let features = {};
  if (state.features) {
    features = (0,discourse_common_lib_object__WEBPACK_IMPORTED_MODULE_0__.deepMerge)(features, state.features);
  }
  const options = {
    sanitize: true,
    getURL,
    features,
    lookupAvatar,
    lookupPrimaryUserGroup,
    getTopicInfo,
    topicId,
    forceQuoteLink,
    userId,
    getCurrentUser,
    currentUser,
    lookupAvatarByPostNumber,
    lookupPrimaryUserGroupByPostNumber,
    formatUsername,
    emojiUnicodeReplacer,
    lookupUploadUrls,
    censoredRegexp,
    customEmojiTranslation,
    allowedHrefSchemes: siteSettings.allowed_href_schemes ? siteSettings.allowed_href_schemes.split("|") : null,
    allowedIframes: siteSettings.allowed_iframes ? siteSettings.allowed_iframes.split("|") : [],
    markdownIt: true,
    previewing,
    disableEmojis,
    watchedWordsReplace,
    watchedWordsLink,
    emojiDenyList,
    featuresOverride,
    markdownItRules,
    additionalOptions,
    hashtagTypesInPriorityOrder,
    hashtagIcons,
    hashtagLookup
  };
  return {
    options,
    siteSettings,
    state
  };
}

/***/ }),

/***/ "../../../../discourse-markdown-it/src/setup.js":
/*!******************************************************!*\
  !*** ../../../../discourse-markdown-it/src/setup.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupIt)
/* harmony export */ });
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ "../../../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js */ "../../../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var pretty_text_text_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pretty-text/text-replace */ "../rewritten-packages/pretty-text.eb45c813/node_modules/pretty-text/text-replace.js");
/* harmony import */ var discourse_common_lib_deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! discourse-common/lib/deprecated */ "../rewritten-packages/discourse-common.d19c518e/node_modules/discourse-common/lib/deprecated.js");
/* harmony import */ var discourse_common_lib_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! discourse-common/lib/object */ "../rewritten-packages/discourse-common.d19c518e/node_modules/discourse-common/lib/object.js");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine */ "../../../../discourse-markdown-it/src/engine.js");


function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





// note, this will mutate options due to the way the API is designed
// may need a refactor
function setupIt(features, options, siteSettings, state) {
  Setup.run(features, options, siteSettings, state);
}
var _context = /*#__PURE__*/new WeakMap();
var _options = /*#__PURE__*/new WeakMap();
var _allowListed = /*#__PURE__*/new WeakMap();
var _customMarkdownCookFunctionCallbacks = /*#__PURE__*/new WeakMap();
var _loadedFeatures = /*#__PURE__*/new WeakMap();
var _optionCallbacks = /*#__PURE__*/new WeakMap();
var _pluginCallbacks = /*#__PURE__*/new WeakMap();
var _setupFeature = /*#__PURE__*/new WeakSet();
var _runOptionsCallbacks = /*#__PURE__*/new WeakSet();
var _enableMarkdownFeatures = /*#__PURE__*/new WeakSet();
var _finalizeGetOptions = /*#__PURE__*/new WeakSet();
var _makeEngine = /*#__PURE__*/new WeakSet();
var _buildCookFunctions = /*#__PURE__*/new WeakSet();
var _buildCookFunction = /*#__PURE__*/new WeakSet();
var _drain = /*#__PURE__*/new WeakSet();
class Setup {
  static run(features, options, siteSettings, state) {
    if (options.setup) {
      // Already setup
      return;
    }
    const setup = new Setup(options);
    features.sort((a, b) => a.priority - b.priority);
    for (const feature of features) {
      _classPrivateMethodGet(setup, _setupFeature, _setupFeature2).call(setup, feature.id, feature.setup);
    }
    for (const entry of Object.entries(state.allowListed ?? {})) {
      setup.allowList(entry);
    }
    _classPrivateMethodGet(setup, _runOptionsCallbacks, _runOptionsCallbacks2).call(setup, siteSettings, state);
    _classPrivateMethodGet(setup, _enableMarkdownFeatures, _enableMarkdownFeatures2).call(setup);
    _classPrivateMethodGet(setup, _finalizeGetOptions, _finalizeGetOptions2).call(setup, siteSettings);
    _classPrivateMethodGet(setup, _makeEngine, _makeEngine2).call(setup);
    _classPrivateMethodGet(setup, _buildCookFunctions, _buildCookFunctions2).call(setup);
  }
  constructor(_options2) {
    _classPrivateMethodInitSpec(this, _drain);
    _classPrivateMethodInitSpec(this, _buildCookFunction);
    _classPrivateMethodInitSpec(this, _buildCookFunctions);
    _classPrivateMethodInitSpec(this, _makeEngine);
    _classPrivateMethodInitSpec(this, _finalizeGetOptions);
    _classPrivateMethodInitSpec(this, _enableMarkdownFeatures);
    _classPrivateMethodInitSpec(this, _runOptionsCallbacks);
    _classPrivateMethodInitSpec(this, _setupFeature);
    _classPrivateFieldInitSpec(this, _context, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _allowListed, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _customMarkdownCookFunctionCallbacks, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _loadedFeatures, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _optionCallbacks, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _pluginCallbacks, {
      writable: true,
      value: []
    });
    _options2.markdownIt = true;
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _options, _options2);

    // hack to allow moving of getOptions – see #finalizeGetOptions
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _context, {
      options: _options2
    });
  }
  allowList(entry) {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _allowListed).push(entry);
  }
  registerOptions(entry) {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _optionCallbacks).push(entry);
  }
  registerPlugin(entry) {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _pluginCallbacks).push(entry);
  }
  buildCookFunction(entry) {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _customMarkdownCookFunctionCallbacks).push(entry);
  }
}
function _setupFeature2(featureName, callback) {
  // When we provide the API object to the setup callback, we expect them to
  // make use of it synchronously. However, it is possible that the could
  // close over the API object, intentionally or unintentionally, and cause
  // memory leaks or unexpectedly call API methods at a later time with
  // unpredictable results. This make sure to "gut" the API object after the
  // callback is executed so that it cannot leak memory or be used later.
  let loaned = this;
  const doSetup = (methodName, ...args) => {
    if (loaned === null) {
      throw new Error(`${featureName}: ${methodName} can only be called during setup()!`);
    }
    if (loaned[methodName]) {
      return loaned[methodName](...args);
    }
  };
  callback(new API(featureName, (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _context), doSetup));
  (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _loadedFeatures).push(featureName);

  // revoke access to the Setup object
  loaned = null;
}
function _runOptionsCallbacks2(siteSettings, state) {
  _classPrivateMethodGet(this, _drain, _drain2).call(this, (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _optionCallbacks), ([, callback]) => callback((0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _options), siteSettings, state));
}
function _enableMarkdownFeatures2({
  features,
  featuresOverride
} = (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _options)) {
  // TODO: `options.features` could in theory contain additional keys for
  // features that aren't loaded. The way the previous code was written
  // incidentally means we would iterate over a super set of both. To be
  // pedantic we kept that behavior here, but I'm not sure if that's really
  // necessary.
  const allFeatures = new Set([..._classPrivateMethodGet(this, _drain, _drain2).call(this, (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _loadedFeatures)), ...Object.keys(features)]);
  if (featuresOverride) {
    for (const feature of allFeatures) {
      features[feature] = featuresOverride.includes(feature);
    }
  } else {
    // enable all features by default
    for (let feature of allFeatures) {
      features[feature] ??= true;
    }
  }
}
function _finalizeGetOptions2(siteSettings) {
  // This is weird but essentially we want to remove `options.*` in-place
  // into `options.discourse.*`, then, we want to change `context.options`
  // to point at `options.discourse`. This ensures features that held onto
  // the API object during setup will continue to get the right stuff when
  // they call `getOptions()`.
  const options = (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _options);
  const discourse = {};
  for (const [key, value] of Object.entries(options)) {
    discourse[key] = value;
    delete options[key];
  }
  discourse.helpers = {
    textReplace: pretty_text_text_replace__WEBPACK_IMPORTED_MODULE_2__.textReplace
  };
  discourse.limitedSiteSettings = {
    secureUploads: siteSettings.secure_uploads,
    enableDiffhtmlPreview: siteSettings.enable_diffhtml_preview,
    traditionalMarkdownLinebreaks: siteSettings.traditional_markdown_linebreaks,
    enableMarkdownLinkify: siteSettings.enable_markdown_linkify,
    enableMarkdownTypographer: siteSettings.enable_markdown_typographer,
    markdownTypographerQuotationMarks: siteSettings.markdown_typographer_quotation_marks,
    markdownLinkifyTlds: siteSettings.markdown_linkify_tlds
  };
  (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _context).options = options.discourse = discourse;
}
function _makeEngine2() {
  const options = (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _options);
  const {
    discourse
  } = options;
  const {
    markdownItRules,
    limitedSiteSettings
  } = discourse;
  const {
    enableMarkdownLinkify,
    enableMarkdownTypographer,
    traditionalMarkdownLinebreaks
  } = limitedSiteSettings;
  options.allowListed = _classPrivateMethodGet(this, _drain, _drain2).call(this, (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _allowListed));
  options.pluginCallbacks = _classPrivateMethodGet(this, _drain, _drain2).call(this, (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _pluginCallbacks));
  const markdownItOptions = {
    discourse,
    html: true,
    breaks: !traditionalMarkdownLinebreaks,
    xhtmlOut: false,
    linkify: enableMarkdownLinkify,
    typographer: enableMarkdownTypographer
  };
  (0,_engine__WEBPACK_IMPORTED_MODULE_5__["default"])(options, markdownItOptions, markdownItRules);
}
function _buildCookFunctions2() {
  const options = (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _options);

  // the callback argument we pass to the callbacks
  let callbackArg = (engineOptions, afterBuild) => afterBuild(_classPrivateMethodGet(this, _buildCookFunction, _buildCookFunction2).call(this, engineOptions, options));
  _classPrivateMethodGet(this, _drain, _drain2).call(this, (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _customMarkdownCookFunctionCallbacks), ([, callback]) => {
    callback(options, callbackArg);
  });
}
function _buildCookFunction2(engineOptions, defaultOptions) {
  // everything except the engine for opts can just point to the other
  // opts references, they do not change and we don't need to worry about
  // mutating them. note that this may need to be updated when additional
  // opts are added to the pipeline
  const options = {};
  options.allowListed = defaultOptions.allowListed;
  options.pluginCallbacks = defaultOptions.pluginCallbacks;
  options.sanitizer = defaultOptions.sanitizer;

  // everything from the discourse part of defaultOptions can be cloned except
  // the features, because these can be a limited subset and we don't want to
  // change the original object reference
  const features = (0,discourse_common_lib_object__WEBPACK_IMPORTED_MODULE_4__.cloneJSON)(defaultOptions.discourse.features);
  options.discourse = {
    ...defaultOptions.discourse,
    features
  };
  _classPrivateMethodGet(this, _enableMarkdownFeatures, _enableMarkdownFeatures2).call(this, {
    features,
    featuresOverride: engineOptions.featuresOverride
  });
  const markdownItOptions = {
    discourse: options.discourse,
    html: defaultOptions.engine.options.html,
    breaks: defaultOptions.engine.options.breaks,
    xhtmlOut: defaultOptions.engine.options.xhtmlOut,
    linkify: defaultOptions.engine.options.linkify,
    typographer: defaultOptions.engine.options.typographer
  };
  (0,_engine__WEBPACK_IMPORTED_MODULE_5__["default"])(options, markdownItOptions, engineOptions.markdownItRules);
  return function customCookFunction(raw) {
    return (0,_engine__WEBPACK_IMPORTED_MODULE_5__.cook)(raw, options);
  };
}
function _drain2(items, callback) {
  if (callback) {
    let item = items.shift();
    while (item) {
      callback(item);
      item = items.shift();
    }
  } else {
    const cloned = [...items];
    items.length = 0;
    return cloned;
  }
}
var _name = /*#__PURE__*/new WeakMap();
var _context2 = /*#__PURE__*/new WeakMap();
var _setup = /*#__PURE__*/new WeakMap();
var _deprecate = /*#__PURE__*/new WeakMap();
class API {
  constructor(featureName, context, setup) {
    _classPrivateFieldInitSpec(this, _name, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _context2, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _setup, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _deprecate, {
      writable: true,
      value: void 0
    });
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _name, featureName);
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _context2, context);
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _setup, setup);
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _deprecate, (methodName, ...args) => {
      if (window.console && window.console.log) {
        window.console.log(featureName + ": " + methodName + " is deprecated, please use the new markdown it APIs");
      }
      return setup(methodName, ...args);
    });
  }
  get markdownIt() {
    return true;
  }

  // this the only method we expect to be called post-setup()
  getOptions() {
    return (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _context2).options;
  }
  allowList(info) {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _setup).call(this, "allowList", [(0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _name), info]);
  }
  whiteList(info) {
    (0,discourse_common_lib_deprecated__WEBPACK_IMPORTED_MODULE_3__["default"])("`whiteList` has been replaced with `allowList`", {
      since: "2.6.0.beta.4",
      dropFrom: "2.7.0",
      id: "discourse.markdown-it.whitelist"
    });
    this.allowList(info);
  }
  registerOptions(callback) {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _setup).call(this, "registerOptions", [(0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _name), callback]);
  }
  registerPlugin(callback) {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _setup).call(this, "registerPlugin", [(0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _name), callback]);
  }
  buildCookFunction(callback) {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _setup).call(this, "buildCookFunction", [(0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _name), callback]);
  }

  // deprecate methods – "deprecate" is a bit of a misnomer here since the
  // methods don't actually do anything anymore

  registerInline() {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _deprecate).call(this, "registerInline");
  }
  replaceBlock() {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _deprecate).call(this, "replaceBlock");
  }
  addPreProcessor() {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _deprecate).call(this, "addPreProcessor");
  }
  inlineReplace() {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _deprecate).call(this, "inlineReplace");
  }
  postProcessTag() {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _deprecate).call(this, "postProcessTag");
  }
  inlineRegexp() {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _deprecate).call(this, "inlineRegexp");
  }
  inlineBetween() {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _deprecate).call(this, "inlineBetween");
  }
  postProcessText() {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _deprecate).call(this, "postProcessText");
  }
  onParseNode() {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _deprecate).call(this, "onParseNode");
  }
  registerBlock() {
    (0,_Users_laylaelwakhi_discourse_app_assets_javascripts_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _deprecate).call(this, "registerBlock");
  }
}

/***/ })

}]);
//# sourceMappingURL=chunk.2531ce445d3a2426db0a.d41d8cd9.js.map