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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fnt/Montserrat-Regular.otf */ \"./src/fnt/Montserrat-Regular.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fnt/Montserrat-Light.otf */ \"./src/fnt/Montserrat-Light.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    font-family: 'mont', 'montlite', 'monospace';\n    background-color: #000;\n    color: antiquewhite;\n}\n\n@font-face {\n    font-family: 'mont';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n    font-family: 'montlite';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n\n#content {\n    background-color: #000;\n    color: aqua;\n}\n\n.project-container {\n    background-color: #111;\n}\n\n.details-container {\n    background-color: #111;\n    padding: 2px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dash.js":
/*!*********************!*\
  !*** ./src/dash.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectContainer: () => (/* binding */ createProjectContainer),\n/* harmony export */   editItem: () => (/* binding */ editItem),\n/* harmony export */   loadDashboard: () => (/* binding */ loadDashboard),\n/* harmony export */   renderTodoItem: () => (/* binding */ renderTodoItem)\n/* harmony export */ });\n/* harmony import */ var _pmnger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pmnger.js */ \"./src/pmnger.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n// dash.js\n// Dashboard/UI Controller Module\n\n\n\n\n\nfunction editItem(project) {\n    console.log('Editing Item...');\n\n    if (!project) {\n        console.error('Error: No project provided for editing');\n        return;\n    }\n\n    // Create a container for the editable fields\n    const editContainer = document.createElement('div');\n\n    // Function to create an editable field\n    function createEditableField(label, value, callback) {\n        const fieldContainer = document.createElement('div');\n        const nameLabel = document.createElement('label');\n        nameLabel.textContent = `${label}: `;\n        \n        let inputField;\n    \n        if (typeof value === 'string' || value instanceof String) {\n            // If the value is a string, create a text input\n            inputField = document.createElement('input');\n            inputField.type = 'text';\n            inputField.value = value;\n        } else if (typeof value === 'number' && !isNaN(value)) {\n            // If the value is a number, create a number input\n            inputField = document.createElement('input');\n            inputField.type = 'number';\n            inputField.value = value;\n        } else {\n            // If the value has another type, create a generic input\n            inputField = document.createElement('input');\n            inputField.type = 'text';\n            inputField.value = value;\n        }\n    \n        const saveButton = document.createElement('button');\n        saveButton.textContent = 'Save';\n        saveButton.addEventListener('click', () => {\n            callback(inputField.value);\n        });\n    \n        fieldContainer.appendChild(nameLabel);\n        fieldContainer.appendChild(inputField);\n        fieldContainer.appendChild(saveButton);\n        console.log('generating field item...');\n    \n        return fieldContainer;\n    }\n\n    if (project instanceof _project_js__WEBPACK_IMPORTED_MODULE_1__.Project) {\n        console.log('Project detected...');\n\n        // Render editable fields for Project\n        editContainer.appendChild(createEditableField('Name', project.name, (value) => {\n            project.name = value;\n            project.todos.forEach((todo) => {\n                // Update Todo details when the project name is edited\n                todo.projectName = value;\n            });\n            _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.saveProjects();\n            loadDashboard();\n        }));\n    \n        // Iterate through Todo items in the project\n        project.todos.forEach((todo) => {\n            editContainer.appendChild(createEditableField('Title', todo.title, (value) => {\n                todo.title = value;\n                _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.saveProjects();\n                loadDashboard();\n            }));\n\n           // Add other Todo fields as needed\n            editContainer.appendChild(createEditableField('Description', todo.description, (value) => {\n                todo.description = value;\n                _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.saveProjects();\n                loadDashboard();\n            }));\n\n            editContainer.appendChild(createEditableField('Due Date', todo.dueDate, (value) => {\n                const dueDateInput = document.createElement('input');\n                dueDateInput.type = 'date';\n                dueDateInput.value = value;\n                _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.saveProjects();\n                    loadDashboard();\n            }));\n\n            editContainer.appendChild(createEditableField('Priority', todo.priority, (value) => {\n                todo.priority = value;\n                _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.saveProjects();\n                loadDashboard();\n            }));\n\n            editContainer.appendChild(createEditableField('Notes', todo.notes, (value) => {\n                todo.notes = value;\n                _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.saveProjects();\n                loadDashboard();\n            }));\n\n            // Assuming checklist is an array, you can create a text input for it\n            editContainer.appendChild(createEditableField('Checklist', todo.checklist.join(', '), (value) => {\n                // Convert the comma-separated string back to an array\n                todo.checklist = value.split(',').map(item => item.trim());\n                _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.saveProjects();\n                loadDashboard();\n            }));\n        });\n    }\n\n    // Append the editContainer to the project container\n    const projectContainer = document.getElementById('content');\n    projectContainer.innerHTML = ''; // Clear existing content\n    projectContainer.appendChild(editContainer);\n    console.log('edit mode active...');\n}\n\nfunction loadDashboard(project) {\n    console.log('loadDashboard functioning...');\n\n    const content = document.getElementById('content');\n    content.innerHTML = ''; // Clear existing content\n\n    // Add UI elements specific to the dashboard\n    const pmngrHead = document.createElement('h2');\n    pmngrHead.innerHTML = 'Project Manager';\n    content.appendChild(pmngrHead);\n\n    const newProjectBtn = document.createElement('button');\n    newProjectBtn.innerHTML = 'New Project';\n    content.appendChild(newProjectBtn);\n    \n    // Render any existing projects from localStorage\n    _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.loadProjects(); // Load projects from localStorage\n\n    const existingProjects = _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.getProjects();\n\n    existingProjects.forEach((existingProject) => {\n        const projectContainer = createProjectContainer(existingProject);\n\n        const editBtn = document.createElement('button');\n        editBtn.innerHTML = 'Update';\n        editBtn.addEventListener('click', () => {\n            editItem(existingProject);\n        });\n\n        content.appendChild(projectContainer);\n        projectContainer.appendChild(editBtn);\n    });\n  \n    // Event listener for creating a new project\n    newProjectBtn.addEventListener('click', () => {\n        console.log('Creating new project...');\n\n        const newProjectForm = document.createElement('div');\n        newProjectForm.classList.add('new-project-form');\n\n        // Function to create an input field within the form\n        function createInputField(label, type) {\n            const inputContainer = document.createElement('div');\n            const nameLabel = document.createElement('label');\n            nameLabel.textContent = `${label}: `;\n            const inputField = document.createElement('input');\n            inputField.type = type;\n            inputContainer.appendChild(nameLabel);\n            inputContainer.appendChild(inputField);\n            return inputContainer;\n        }\n\n\n        // Create input fields for the new project form\n        const projectNameField = createInputField('Project Name', 'text');\n        const todoTitleField = createInputField('Todo Title', 'text');\n        const todoDescriptionField = createInputField('Todo Description', 'text');\n        const todoDueDateField = createInputField('Todo Due Date', 'date'); // You might want to use 'date' type for date input\n        const todoPriorityField = createInputField('Todo Priority', 'text');\n        const todoNotesField = createInputField('Todo Notes', 'text');\n\n        // Create a button to submit the new project form\n        const submitButton = document.createElement('button');\n        submitButton.textContent = 'Create Project';\n\n        submitButton.addEventListener('click', () => {\n            // Get values from the form fields\n            const projectName = projectNameField.querySelector('input').value;\n            const todoTitle = todoTitleField.querySelector('input').value;\n            const todoDescription = todoDescriptionField.querySelector('input').value;\n            const todoDueDate = todoDueDateField.querySelector('input').value;\n            const todoPriority = todoPriorityField.querySelector('input').value;\n            const todoNotes = todoNotesField.querySelector('input').value;\n\n            // Add the new todo to the project\n            const newTodo = _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.createTodo(\n                todoTitle,\n                todoDescription,\n                todoDueDate,\n                todoPriority,\n                todoNotes\n            );\n\n            // Creates new project with the collected details\n            const newProject = _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.createProject(projectName);\n            newProject.todos.push(newTodo);\n            _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.saveProjects(); // Save projects after creating a new project\n            loadDashboard();\n\n            // Remove the form from the container\n            newProjectForm.innerHTML = '';\n        });\n\n        // Append input fields and submit button to the form container\n        newProjectForm.appendChild(projectNameField);\n        newProjectForm.appendChild(todoTitleField);\n        newProjectForm.appendChild(todoDescriptionField);\n        newProjectForm.appendChild(todoDueDateField);\n        newProjectForm.appendChild(todoPriorityField);\n        newProjectForm.appendChild(todoNotesField);\n        newProjectForm.appendChild(submitButton);\n\n        // Append the form container to the content\n        const content = document.getElementById('content');\n        content.insertBefore(newProjectForm, newProjectBtn.nextSibling);\n    });\n\n    console.log('loadDashboard functioned');\n\n}\n\nfunction createProjectContainer(project) {\n    console.log('Debug: project object', project);\n\n    if (!project || !project.name || !project.todos) {\n        console.error('Error: Invalid project object');\n        return;\n    }\n\n    const projectContainer = document.createElement('div');\n    projectContainer.classList.add('project-container');\n\n    const projectName = document.createElement('h3');\n    projectName.innerHTML = project.name;\n\n    // Add delete button to each project card\n    const deleteBtn = document.createElement('button');\n    deleteBtn.innerHTML = 'Remove';\n    deleteBtn.addEventListener('click', () => {\n        // Directly call deleteProject from projectManager\n        _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.deleteProject(project);\n        // Reload the dashboard after deletion\n        loadDashboard();\n    });\n\n    projectContainer.appendChild(projectName);\n    projectContainer.appendChild(deleteBtn);\n\n    if (project.todos && Array.isArray(project.todos)) {\n        project.todos.forEach((todo) => {\n            projectContainer.appendChild(renderTodoItem(todo));\n        });\n    }\n\n    return projectContainer;\n}\n\nfunction renderTodoItem(todo) {\n    console.log('Rendering Todo');\n\n    let showDetails = false;\n\n    // Container for todo details\n    const detailsContainer = document.createElement('div');\n    detailsContainer.classList.add('details-container');\n\n    // Create a toggle button to show/hide details\n    const toggleButton = document.createElement('button');\n    toggleButton.innerHTML = 'More';\n\n    // Declare label variables outside the updateDetailsVisibility function\n    const descriptionLabel = 'Description:';\n    const priorityLabel = 'Priority:';\n    const notesLabel = 'Notes:';\n    const checklistLabel = 'Checklist:';\n    const dueDateLabel = 'Due Date:';\n\n    // Function to toggle the visibility of todo details\n    const toggleDetails = () => {\n        showDetails = !showDetails;\n        updateDetailsVisibility();\n\n        // Update the toggle button text\n        toggleButton.innerHTML = showDetails ? 'Less' : 'More';\n    };\n\n    toggleButton.addEventListener('click', toggleDetails);\n\n    const todoItem = document.createElement('div');\n\n    // Initially set the Todo Title and Due Date outside the updateDetailsVisibility function\n    todoItem.innerHTML = `\n        <strong>Title:</strong> ${todo.title}<br>\n        <strong>Due Date:</strong> ${todo.dueDate}<br>\n    `;\n\n    todoItem.appendChild(detailsContainer);\n    todoItem.appendChild(toggleButton);\n\n\n    // Function to update the visibility of todo details\n    function updateDetailsVisibility() {\n        console.log('showing/hiding details');\n\n        detailsContainer.innerHTML = `\n            ${showDetails ? `<strong>${descriptionLabel}</strong> ${todo.description}<br>` : ''}\n            ${showDetails ? `<strong>${priorityLabel}</strong> ${todo.priority}<br>` : ''}\n            ${showDetails ? `<strong>${notesLabel}</strong> ${todo.notes}<br>` : ''}\n            ${showDetails ? `<strong>${checklistLabel}</strong> ${todo.checklist.join(', ')}<br>` : ''}\n        `;\n    }\n\n    return todoItem;\n}\n\n//# sourceURL=webpack://todo/./src/dash.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage),\n/* harmony export */   loadApp: () => (/* binding */ loadApp)\n/* harmony export */ });\n/* harmony import */ var _pmnger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pmnger.js */ \"./src/pmnger.js\");\n/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.js */ \"./src/info.js\");\n/* harmony import */ var _dash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dash.js */ \"./src/dash.js\");\n// Home.js\n// Home page\n\n\n\n\n\nfunction homePage() {\n    console.log('loading home...')\n\n    const content = document.getElementById('content');\n    content.innerHTML = ''; // Clear existing content\n  \n    // Tggle the Info page overlay and create access button\n  const toggleInfoButton = document.createElement('button');\n  toggleInfoButton.innerHTML = 'About';\n  toggleInfoButton.addEventListener('click', _info_js__WEBPACK_IMPORTED_MODULE_1__.toggleInfoOverlay);\n\n  const accessBtn = document.createElement('button');\n    accessBtn.innerHTML = 'Access';\n    accessBtn.addEventListener('click', () => {\n        loadApp(); // Load the app using the uiengine\n    });\n\n  content.appendChild(accessBtn);\n  content.appendChild(toggleInfoButton);\n\n  console.log('home page loaded')\n}\n\nfunction loadApp() {\n  console.log('loadApp functioning...')\n\n  const content = document.getElementById('content');\n  content.innerHTML = 'Loading...'; // Clear existing content\n\n  // Call loadDashboard to render the dashboard\n  (0,_dash_js__WEBPACK_IMPORTED_MODULE_2__.loadDashboard)(content);\n  console.log('loadApp functioned')\n}    \n\n\n\n//# sourceURL=webpack://todo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n// Index.js file\n\n\n\n\n\nfunction pageEngine() {\n    console.log('loading index.js...')\n    const content = document.getElementById('content');\n\n    console.log('index.js loaded')\n    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homePage)()\n}\n\npageEngine()\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleInfoOverlay: () => (/* binding */ toggleInfoOverlay)\n/* harmony export */ });\n// Info.js\n// Info overlay module\n\nfunction toggleInfoOverlay() {\n    console.log('Loading info...');\n    const infoPage = document.getElementById('info-page-overlay');\n  \n    if (!infoPage) {\n      // Create and append the Info page overlay\n      const overlay = document.createElement('div');\n      overlay.id = 'info-page-overlay';\n  \n      const closeBtn = document.createElement('button');\n      closeBtn.innerHTML = 'Close';\n      closeBtn.addEventListener('click', () => overlay.remove());\n  \n      overlay.appendChild(closeBtn);\n  \n      const infoContent = document.createElement('div');\n      infoContent.innerHTML = `\n      <h3>About the App</h3>\n      <p>This application helps you manage your tasks and projects efficiently.</p>\n      <p>Developed by Esau @ Cursebreakers for The Odin Project: JavaScript Course.</p>\n      <p>Feel free to explore and organize your tasks!</p>\n    `;\n  \n      overlay.appendChild(infoContent);\n  \n      document.body.appendChild(overlay);\n    } else {\n      // Remove the Info page overlay\n      infoPage.remove();\n      console.log('Hiding info...');\n    }\n  }\n\n//# sourceURL=webpack://todo/./src/info.js?");

/***/ }),

/***/ "./src/pmnger.js":
/*!***********************!*\
  !*** ./src/pmnger.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectManager: () => (/* binding */ projectManager)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _dash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dash.js */ \"./src/dash.js\");\n// Pmnger.js\n// Project manager module\n\n\n\n\n\nconst projectManager = (function () {\n    const projects = [];\n          \n    function createProject(name) {\n      const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(name);\n      projects.push(project);\n      saveProjects();\n      return project;\n    }\n\n    function createTodo(title, description, dueDate, priority, notes = '', checklist = []) {\n      return new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, dueDate, priority, notes, checklist);\n    }\n\n    function saveProjects() {\n      // Save projects to localStorage\n      localStorage.setItem('projects', JSON.stringify(projects));\n    }\n\n    function loadProjects() {\n        // Load projects from localStorage\n        const savedProjects = JSON.parse(localStorage.getItem('projects'));\n        if (savedProjects) {\n            // Clear existing projects before loading from localStorage\n            projects.length = 0;\n            \n            savedProjects.forEach((project) => {\n                projects.push(Object.assign(new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(), project));\n          });\n        }\n    }\n\n      function deleteProject(projectToDelete) {\n        const index = projects.findIndex((project) => project === projectToDelete);\n\n        if (index !== -1) {\n            projects.splice(index, 1);\n            saveProjects();\n        }\n    }\n\n    return {\n        createProject,\n        createTodo,\n        saveProjects,\n        loadProjects,\n        getProjects: () => projects,\n        deleteProject,\n        editItem: _dash_js__WEBPACK_IMPORTED_MODULE_2__.editItem,\n      };\n  })();\n\n//# sourceURL=webpack://todo/./src/pmnger.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n// Project.js\n// Project factory/class module\n\nclass Project {\nconstructor(name) {\n  this.name = name;\n  this.todos = [];\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _pmnger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pmnger.js */ \"./src/pmnger.js\");\n// Todo.js file\n// Subtask and project items module\n\n\n\nclass Todo {\n    constructor(title, description, dueDate, priority, notes = '', checklist = []) {\n      this.title = title;\n      this.description = description;\n      this.dueDate = dueDate;\n      this.priority = priority;\n      this.notes = notes;\n      this.checklist = checklist;\n    }\n  }\n\nconsole.log('todo engine functioning...')\n\n\n//# sourceURL=webpack://todo/./src/todo.js?");

/***/ }),

/***/ "./src/fnt/Montserrat-Light.otf":
/*!**************************************!*\
  !*** ./src/fnt/Montserrat-Light.otf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c76b7212dc892314701.otf\";\n\n//# sourceURL=webpack://todo/./src/fnt/Montserrat-Light.otf?");

/***/ }),

/***/ "./src/fnt/Montserrat-Regular.otf":
/*!****************************************!*\
  !*** ./src/fnt/Montserrat-Regular.otf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"65bc44fbf8204991497c.otf\";\n\n//# sourceURL=webpack://todo/./src/fnt/Montserrat-Regular.otf?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;