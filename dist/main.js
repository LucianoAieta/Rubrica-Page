/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.sass":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.sass ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n}\\n\\nblockquote,\\nq {\\n  quotes: none;\\n}\\n\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\n/**\\n*\\n* Testing\\n*\\n**/\\n:root {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n\\nbody {\\n  display: grid;\\n  grid-template-columns: 100%;\\n  grid-template-rows: auto;\\n  gap: 2em;\\n  justify-items: center;\\n  background-color: #1f1f1f;\\n}\\n\\n.header {\\n  display: flex;\\n  height: 3em;\\n  width: 100%;\\n  align-items: center;\\n  padding: 0 1em;\\n  box-sizing: border-box;\\n}\\n.header .title {\\n  font-size: 1.2em;\\n  color: #fff;\\n  font-weight: 500;\\n}\\n@media (max-width: 1920px) and (min-width: 1441px) {\\n  .header {\\n    font-size: 22px;\\n  }\\n}\\n@media (max-width: 1440px) and (min-width: 1367px) {\\n  .header {\\n    font-size: 21px;\\n  }\\n}\\n@media (max-width: 1280px) and (min-width: 1025px) {\\n  .header {\\n    font-size: 20px;\\n  }\\n}\\n@media (max-width: 1024px) and (min-width: 769px) {\\n  .header {\\n    font-size: 18px;\\n  }\\n}\\n@media (max-width: 768px) and (min-width: 561px) {\\n  .header {\\n    font-size: 15px;\\n  }\\n}\\n@media (max-width: 720px) and (min-width: 561px) {\\n  .header {\\n    font-size: 18px;\\n  }\\n}\\n@media (max-width: 560px) and (min-width: 480px) {\\n  .header {\\n    font-size: 16px;\\n  }\\n}\\n@media (max-width: 479px) and (min-width: 360px) {\\n  .header {\\n    font-size: 14px;\\n  }\\n}\\n@media (max-width: 359px) and (min-width: 300px) {\\n  .header {\\n    font-size: 12px;\\n  }\\n}\\n@media (max-width: 299px) and (min-width: 240px) {\\n  .header {\\n    font-size: 10px;\\n  }\\n}\\n@media (max-width: 239px) {\\n  .header {\\n    font-size: 8px;\\n  }\\n}\\n\\n.card {\\n  display: flex;\\n  flex-flow: wrap column;\\n  gap: 1.5em;\\n  background-color: #323232;\\n  width: 35em;\\n  padding: 1.5em;\\n  border-radius: 1em;\\n  color: #ebebeb;\\n}\\n@media (max-width: 1920px) and (min-width: 1441px) {\\n  .card {\\n    font-size: 22px;\\n  }\\n}\\n@media (max-width: 1440px) and (min-width: 1367px) {\\n  .card {\\n    font-size: 18px;\\n  }\\n}\\n@media (max-width: 1280px) and (min-width: 1025px) {\\n  .card {\\n    font-size: 18px;\\n  }\\n}\\n@media (max-width: 1024px) and (min-width: 769px) {\\n  .card {\\n    font-size: 20px;\\n  }\\n}\\n@media (max-width: 768px) and (min-width: 769px) {\\n  .card {\\n    font-size: 18px;\\n  }\\n}\\n@media (max-width: 720px) and (min-width: 561px) {\\n  .card {\\n    font-size: 16px;\\n  }\\n}\\n@media (max-width: 560px) {\\n  .card {\\n    width: 20em;\\n  }\\n}\\n@media (max-width: 560px) and (min-width: 480px) {\\n  .card {\\n    font-size: 16px;\\n  }\\n}\\n@media (max-width: 479px) and (min-width: 360px) {\\n  .card {\\n    font-size: 14px;\\n  }\\n}\\n@media (max-width: 359px) and (min-width: 300px) {\\n  .card {\\n    font-size: 12px;\\n  }\\n}\\n@media (max-width: 299px) and (min-width: 240px) {\\n  .card {\\n    font-size: 10px;\\n  }\\n}\\n@media (max-width: 239px) {\\n  .card {\\n    font-size: 8px;\\n  }\\n}\\n.card .title {\\n  font-size: 1.3em;\\n  font-weight: 600;\\n}\\n.card .input {\\n  display: flex;\\n  flex-flow: wrap column;\\n  gap: 0.5em;\\n  width: 100%;\\n}\\n.card .input .title {\\n  font-size: 1em;\\n  font-weight: 400;\\n}\\n.card .input .form {\\n  padding: 0.8em;\\n  width: 100%;\\n  color: #fff;\\n  background-color: #414141;\\n  box-shadow: 0px 0.25em 0.25em rgba(0, 0, 0, 0.25);\\n  outline: none;\\n  border: none;\\n  border-radius: 3.125em;\\n  box-sizing: border-box;\\n  font-size: 0.9em;\\n}\\n.card .from-to {\\n  display: flex;\\n  gap: 1em;\\n}\\n@media (max-width: 560px) {\\n  .card .from-to {\\n    flex-flow: wrap column;\\n  }\\n}\\n.card .options {\\n  display: flex;\\n  flex-flow: wrap column;\\n  gap: 1em;\\n  background-color: #1f1f1f;\\n  padding: 1em;\\n  border-radius: 1em;\\n}\\n.card .options .container {\\n  display: flex;\\n  gap: 1em;\\n}\\n@media (max-width: 560px) {\\n  .card .options .container {\\n    flex-flow: wrap column;\\n  }\\n}\\n.card .typeButtons {\\n  display: flex;\\n  justify-items: space-between;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: nowrap;\\n  gap: 1em;\\n  box-sizing: border-box;\\n}\\n.card .typeButtons .radio {\\n  position: absolute;\\n  opacity: 0;\\n}\\n.card .typeButtons .typeButton {\\n  width: 100%;\\n  padding: 0.8em 0;\\n  margin: 0;\\n  user-select: none;\\n  cursor: pointer;\\n  text-align: center;\\n  background-color: #1f1f1f;\\n  flex-grow: 50%;\\n  border-radius: 1em;\\n  transition: background-color 0.2s ease;\\n}\\n@media (max-width: 559px) {\\n  .card .typeButtons .typeButton {\\n    width: 47%;\\n  }\\n}\\n.card .typeButtons .radio:checked + .typeButton {\\n  background-color: #414141;\\n}\\n.card .typeButtons .radio:focus + .typeButton {\\n  background-color: #414141;\\n}\\n.card .typeButtons .radio:hover + .typeButton {\\n  background-color: #585858;\\n}\\n@media (max-width: 559px) {\\n  .card .typeButtons {\\n    flex-wrap: wrap;\\n  }\\n}\\n.card .buttons {\\n  display: flex;\\n  gap: 1em;\\n  width: 100%;\\n}\\n.card .buttons .button {\\n  width: 100%;\\n  padding: 0.7em;\\n  font-size: 1em;\\n  border-radius: 0.5em;\\n  border: none;\\n  background-color: #30868B;\\n  color: #fff;\\n  font-weight: 600;\\n  cursor: pointer;\\n}\\n@media (max-width: 560px) {\\n  .card .buttons {\\n    flex-flow: wrap column;\\n  }\\n}\\n\\n.loading-background {\\n  display: flex;\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  z-index: 100;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  backdrop-filter: blur(0.1em);\\n  opacity: 0;\\n  visibility: hidden;\\n  transition: opacity 0.5s ease-in, visibility 0.5s ease-in;\\n  will-change: visibility, opacity;\\n}\\n.loading-background .loading-container {\\n  display: grid;\\n  grid-template-rows: auto auto;\\n  grid-column: auto;\\n  gap: 4em;\\n  text-align: center;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n.loading-background .loading {\\n  display: flex;\\n  justify-content: center;\\n  align-content: center;\\n  border-top: 0.7em solid #30868B;\\n  border-left: 0.7em solid #30868B;\\n  border-right: 0.7em solid transparent;\\n  border-bottom: 0.7em solid transparent;\\n  border-radius: 100%;\\n  align-self: center;\\n  justify-self: center;\\n  animation: loadingRotation 1s linear infinite;\\n  height: 10em;\\n  width: 10em;\\n}\\n.loading-background .loading::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  align-self: center;\\n  justify-self: center;\\n  border-top: 0.7em solid #e7e7e7;\\n  border-bottom: 0.7em solid transparent;\\n  border-right: 0.7em solid #e7e7e7;\\n  border-left: 0.7em solid transparent;\\n  border-radius: 100%;\\n  animation: loadingRotation 0.5s linear infinite reverse;\\n  height: 7em;\\n  width: 7em;\\n}\\n@keyframes loadingRotation {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n.loading-background .text {\\n  color: #efefef;\\n  animation: loadingText 1s ease-in-out infinite alternate;\\n}\\n@keyframes loadingText {\\n  0% {\\n    opacity: 1;\\n  }\\n  100% {\\n    opacity: 0.4;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://rubrica-page/./src/sass/styles.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://rubrica-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/sass/styles.sass":
/*!******************************!*\
  !*** ./src/sass/styles.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.sass\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://rubrica-page/./src/sass/styles.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://rubrica-page/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://rubrica-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://rubrica-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://rubrica-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/ts/handlers/Previsualize.handler.ts":
/*!*************************************************!*\
  !*** ./src/ts/handlers/Previsualize.handler.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.handlePrevisualizeButton = void 0;\r\nvar loading_screen_1 = __webpack_require__(/*! ../loading/loading.screen */ \"./src/ts/loading/loading.screen.ts\");\r\nvar artificialRequest = function (_a) {\r\n    var type = _a.type;\r\n    return new Promise(function (res, rej) {\r\n        var Cases = {\r\n            Correct: function () { return res(); },\r\n            Error: function () { return rej('Error!'); },\r\n        };\r\n        setTimeout(function () { return Cases[type](); }, 3000);\r\n    });\r\n};\r\nvar handlePrevisualizeButton = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var error_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                loading_screen_1.setLoadingScreen({ opacity: '1', visibility: 'visible' });\r\n                return [4 /*yield*/, artificialRequest({ type: 'Error' })];\r\n            case 1:\r\n                _a.sent();\r\n                loading_screen_1.setLoadingScreen({ opacity: '0', visibility: 'hidden' });\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                error_1 = _a.sent();\r\n                console.log(error_1);\r\n                loading_screen_1.setLoadingScreen({ opacity: '0', visibility: 'hidden' });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.handlePrevisualizeButton = handlePrevisualizeButton;\r\n\n\n//# sourceURL=webpack://rubrica-page/./src/ts/handlers/Previsualize.handler.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! ../sass/styles.sass */ \"./src/sass/styles.sass\");\r\nvar Buttons_listeners_1 = __webpack_require__(/*! ./listeners/Buttons.listeners */ \"./src/ts/listeners/Buttons.listeners.ts\");\r\nButtons_listeners_1.ButtonsListeners();\r\n\n\n//# sourceURL=webpack://rubrica-page/./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/listeners/Buttons.listeners.ts":
/*!***********************************************!*\
  !*** ./src/ts/listeners/Buttons.listeners.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ButtonsListeners = void 0;\r\nvar Previsualize_handler_1 = __webpack_require__(/*! ../handlers/Previsualize.handler */ \"./src/ts/handlers/Previsualize.handler.ts\");\r\nvar PrevisualizeButtonListener = function () {\r\n    var PrevisualizeButton = document.querySelector('#previsualize');\r\n    PrevisualizeButton.addEventListener('click', Previsualize_handler_1.handlePrevisualizeButton);\r\n};\r\nvar ButtonsListeners = function () {\r\n    PrevisualizeButtonListener();\r\n};\r\nexports.ButtonsListeners = ButtonsListeners;\r\n\n\n//# sourceURL=webpack://rubrica-page/./src/ts/listeners/Buttons.listeners.ts?");

/***/ }),

/***/ "./src/ts/loading/loading.screen.ts":
/*!******************************************!*\
  !*** ./src/ts/loading/loading.screen.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.setLoadingScreen = void 0;\r\nvar setLoadingScreen = function (_a) {\r\n    var _b = _a.opacity, opacity = _b === void 0 ? '0' : _b, _c = _a.visibility, visibility = _c === void 0 ? 'hidden' : _c;\r\n    var LoadingElement = document.querySelector('.loading-background');\r\n    LoadingElement.style.opacity = opacity;\r\n    LoadingElement.style.visibility = visibility;\r\n};\r\nexports.setLoadingScreen = setLoadingScreen;\r\n\n\n//# sourceURL=webpack://rubrica-page/./src/ts/loading/loading.screen.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;