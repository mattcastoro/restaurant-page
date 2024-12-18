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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background-color: #559ca1;\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    box-sizing: border-box;\n    display: grid;\n    gap: 25px;\n    justify-content: center;\n    justify-items: center;\n    font-size: 25px;\n    color: #f8cfaa;\n    margin: 50px;\n\n}\n\nnav {\n    overflow: hidden;\n    background-color: #559ca1;\n    border-bottom: 5px solid #aad6dc;\n    /* border-radius: 10px 0 10px 0; */\n}\n\nnav .tab {\n    font-size: 1em;\n    color: #63475d;\n    background-color: inherit;\n    float: left;\n    border: none;\n    border-radius: 25px 25px 0 0;\n    outline: none;\n    cursor: pointer;\n    padding: 14px 16px;\n}\n\nnav button:hover {\n    background-color: #86C5CD;\n}\n\nnav button.active {\n    background-color: #aad6dc;\n}\n\n#main {\n    display: grid;\n    justify-items: center;\n    gap: 4em;\n}\n\n.content {\n    display: grid;\n    justify-items: center;\n    gap: 1em;\n}\n\n.title {\n    font-size: 2.5em;\n    color: #f8cfaa;\n    background-color: #63475d;\n    padding: 10px 250px;\n    border-radius: 50px;\n}\n\n.heading {\n    font-size: 1.5em;\n    color: #63475d;\n    background-color: #aad6dc;\n    padding: 5px 25px;\n    border-radius: 25px;\n}\n\n.body {\n    font-size: 1em;\n    width: 500px;\n    text-align: center;\n}\n\n.listContainer {\n    margin: 0;\n    padding: 0;\n    display: grid;\n    justify-items: center;\n}\n\n.listItem {\n    list-style-type: none;\n}\n\n.img {\n    width: 500px;\n    border-radius: 50px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateAbout: () => (/* binding */ generateAbout)\n/* harmony export */ });\nfunction generateAbout() {\n    const contentAbout = document.querySelector(\"#main\");\n\n    const titleAbout = document.createElement(\"div\");\n    contentAbout.appendChild(titleAbout);\n    titleAbout.textContent = \"It's a funny story\";\n    titleAbout.classList.add(\"title\");\n\n    const contentStory = document.createElement(\"div\");\n    contentAbout.appendChild(contentStory);\n    contentStory.classList.add(\"content\");\n\n    const headingStory = document.createElement(\"div\");\n    contentStory.appendChild(headingStory);\n    headingStory.textContent = \"...the story\";\n    headingStory.classList.add(\"heading\");\n\n    const bodyStory = document.createElement(\"div\");\n    contentStory.appendChild(bodyStory);\n    bodyStory.textContent = \"Our family has been eating wraps for years.  Friends have always applauded our specialty, so we thought that we should take our family's receipes and try to make a profit off of them.  Here we are, 10 years later, barely making a profit, working nearly 24 hours a day to keep the shop open.  But it's all good, because we have made a bunch of new friends and we get to argue within our family and the customers all day long.  It's perfect and we wouldn't want it any other way.  Hope you enjoy our wraps!\";\n    bodyStory.classList.add(\"body\")\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHome: () => (/* binding */ generateHome)\n/* harmony export */ });\n/* harmony import */ var _images_wraps_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/wraps.jpg */ \"./src/images/wraps.jpg\");\n\n\nfunction generateHome() {\n    const contentHome = document.querySelector(\"#main\");\n\n    const titleHome = document.createElement(\"div\");\n    contentHome.appendChild(titleHome);\n    titleHome.textContent = \"Rafa's Wraps\";\n    titleHome.classList.add(\"title\");\n\n    const image = document.createElement(\"img\");\n    image.src = _images_wraps_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    contentHome.appendChild(image);\n    image.classList.add(\"img\");\n\n    const contentBackground = document.createElement(\"div\");\n    contentHome.appendChild(contentBackground);\n    contentBackground.classList.add(\"content\");\n\n    const headingBackground = document.createElement(\"div\");\n    contentBackground.appendChild(headingBackground);\n    headingBackground.textContent = \"Our Specialty\";\n    headingBackground.classList.add(\"heading\");\n\n    const bodyBackground = document.createElement(\"div\");\n    contentBackground.appendChild(bodyBackground);\n    bodyBackground.textContent = \"We specialize in wraps.  Any sandwich you can think of, we can wrap it.  Peanut butter and jelly, wrap it. Sardines and pickles, wrap it.  Whatever you desire, we'll wrap it for you.  It's what we do!!!\";\n    bodyBackground.classList.add(\"body\")\n\n    const contentHoursOfOp = document.createElement(\"div\");\n    contentHome.appendChild(contentHoursOfOp);\n    contentHoursOfOp.classList.add(\"content\");\n\n    const headingHoursOfOp = document.createElement(\"div\");\n    contentHoursOfOp.appendChild(headingHoursOfOp);\n    headingHoursOfOp.textContent = \"Hours of Operation\";\n    headingHoursOfOp.classList.add(\"heading\");\n\n    const listHoursOfOp = document.createElement(\"ul\");\n    contentHoursOfOp.appendChild(listHoursOfOp);\n    listHoursOfOp.classList.add(\"listContainer\");\n\n    const monday = document.createElement(\"li\");\n    listHoursOfOp.appendChild(monday);\n    monday.textContent = \"Monday 6am - 3pm\";\n    monday.classList.add(\"listItem\");\n    const tuesday = document.createElement(\"li\");\n    listHoursOfOp.appendChild(tuesday);\n    tuesday.textContent = \"Tuesday 6am - 3pm\";\n    tuesday.classList.add(\"listItem\");\n    const wednesday = document.createElement(\"li\");\n    listHoursOfOp.appendChild(wednesday);\n    wednesday.textContent = \"Wednesday 6am - 3pm\";\n    wednesday.classList.add(\"listItem\");\n    const thursday = document.createElement(\"li\");\n    listHoursOfOp.appendChild(thursday);\n    thursday.textContent = \"Thursday 6am - 3pm\";\n    thursday.classList.add(\"listItem\");\n    const friday = document.createElement(\"li\");\n    listHoursOfOp.appendChild(friday);\n    friday.textContent = \"Friday 6am - 6pm\";\n    friday.classList.add(\"listItem\");\n    const saturday = document.createElement(\"li\");\n    listHoursOfOp.appendChild(saturday);\n    saturday.textContent = \"Saturday 7am - 6pm\";\n    saturday.classList.add(\"listItem\");\n    const sunday = document.createElement(\"li\");\n    listHoursOfOp.appendChild(sunday);\n    sunday.textContent = \"Sunday 7am - 6pm\";\n    sunday.classList.add(\"listItem\");\n\n    const contentLocation = document.createElement(\"div\");\n    contentHome.appendChild(contentLocation);\n    contentLocation.classList.add(\"content\");\n\n    const headingLocation = document.createElement(\"div\");\n    contentLocation.appendChild(headingLocation); \n    headingLocation.textContent = \"Location\";\n    headingLocation.classList.add(\"heading\");\n\n    const bodyLocation = document.createElement(\"div\");\n    contentLocation.appendChild(bodyLocation);\n    bodyLocation.textContent = \"123 Any Road, Anywhere, CO\";\n    bodyLocation.classList.add(\"body\");\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _setTabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setTabs.js */ \"./src/setTabs.js\");\n\n\n\n\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.generateHome)();\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    const myTabs = document.querySelectorAll(\".tab\");\n        myTabs.forEach(function(tab) {\n            tab.addEventListener(\"click\", function(e) {\n\n                const content = document.querySelector(\"#main\");\n                content.textContent = \"\";\n\n                if (this.id === \"tabHome\") {\n                    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.generateHome)();\n                    (0,_setTabs_js__WEBPACK_IMPORTED_MODULE_4__.setTabs)(e);\n                } else if (this.id === \"tabMenu\") {\n                    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.generateMenu)();\n                    (0,_setTabs_js__WEBPACK_IMPORTED_MODULE_4__.setTabs)(e);\n                } else if (this.id === \"tabAbout\") {\n                    (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.generateAbout)();\n                    (0,_setTabs_js__WEBPACK_IMPORTED_MODULE_4__.setTabs)(e);\n                }\n\n            });\n        });\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMenu: () => (/* binding */ generateMenu)\n/* harmony export */ });\nfunction generateMenu() {\n    const contentMenu = document.querySelector(\"#main\");\n\n    const titleMenu = document.createElement(\"div\");\n    contentMenu.appendChild(titleMenu);\n    titleMenu.textContent = \"Offerings\";\n    titleMenu.classList.add(\"title\");\n\n    const contentMains = document.createElement(\"div\");\n    contentMenu.appendChild(contentMains);\n    contentMains.classList.add(\"content\");\n\n    const headingMains = document.createElement(\"div\");\n    contentMains.appendChild(headingMains);\n    headingMains.textContent = \"Mains\";\n    headingMains.classList.add(\"heading\");\n\n    const listMains = document.createElement(\"ul\");\n    contentMains.appendChild(listMains);\n    listMains.classList.add(\"listContainer\");\n\n    const tuna = document.createElement(\"li\");\n    listMains.appendChild(tuna);\n    tuna.textContent = \"Tuna Fish Salad - $9\";\n    tuna.classList.add(\"listItem\");\n    const smokedSalmon = document.createElement(\"li\");\n    listMains.appendChild(smokedSalmon);\n    smokedSalmon.textContent = \"Smoked Salmon - $10\";\n    smokedSalmon.classList.add(\"listItem\");\n    const italian = document.createElement(\"li\");\n    listMains.appendChild(italian);\n    italian.textContent = \"Italian - $8\";\n    italian.classList.add(\"listItem\");\n    const hamCheese = document.createElement(\"li\");\n    listMains.appendChild(hamCheese);\n    hamCheese.textContent = \"Ham & Cheese - $8\";\n    hamCheese.classList.add(\"listItem\");\n    const turkey = document.createElement(\"li\");\n    listMains.appendChild(turkey);\n    turkey.textContent = \"Turkey & Swiss - $8\";\n    turkey.classList.add(\"listItem\");\n    const custom = document.createElement(\"li\");\n    listMains.appendChild(custom);\n    custom.textContent = \"Custom - $11\";\n    custom.classList.add(\"listItem\");\n\n    const contentSides = document.createElement(\"div\");\n    contentMenu.appendChild(contentSides);\n    contentSides.classList.add(\"content\");\n\n    const headingSides = document.createElement(\"div\");\n    contentSides.appendChild(headingSides);\n    headingSides.textContent = \"Sides\";\n    headingSides.classList.add(\"heading\");\n\n    const listSides = document.createElement(\"ul\");\n    contentSides.appendChild(listSides);\n    listSides.classList.add(\"listContainer\");\n\n    const chips = document.createElement(\"li\");\n    listSides.appendChild(chips);\n    chips.textContent = \"Chips - $2\";\n    chips.classList.add(\"listItem\");\n    const salad = document.createElement(\"li\");\n    listSides.appendChild(salad);\n    salad.textContent = \"Salad - $3\";\n    salad.classList.add(\"listItem\");\n    const pickles = document.createElement(\"li\");\n    listSides.appendChild(pickles);\n    pickles.textContent = \"Homemade Assorted Pickles - $2.50\";\n    pickles.classList.add(\"listItem\");\n\n    const contentDrinks = document.createElement(\"div\");\n    contentMenu.appendChild(contentDrinks);\n    contentDrinks.classList.add(\"content\");\n\n    const headingDrinks = document.createElement(\"div\");\n    contentDrinks.appendChild(headingDrinks);\n    headingDrinks.textContent = \"Drinks\";\n    headingDrinks.classList.add(\"heading\");\n\n    const listDrinks = document.createElement(\"ul\");\n    contentDrinks.appendChild(listDrinks);\n    listDrinks.classList.add(\"listContainer\");\n\n    const fountain = document.createElement(\"li\");\n    listDrinks.appendChild(fountain);\n    fountain.textContent = \"Fountain Soda - $1.50\";\n    fountain.classList.add(\"listItem\");\n    const mexican = document.createElement(\"li\");\n    listDrinks.appendChild(mexican);\n    mexican.textContent = \"Mexican Coke - $3\";\n    mexican.classList.add(\"listItem\");\n    const water = document.createElement(\"li\");\n    listDrinks.appendChild(water);\n    water.textContent = \"Bottled Water - $1,000\";\n    water.classList.add(\"listItem\");\n    const coffee = document.createElement(\"li\");\n    listDrinks.appendChild(coffee);\n    coffee.textContent = \"Coffee - $1\";\n    coffee.classList.add(\"listItem\");\n    const tea = document.createElement(\"li\");\n    listDrinks.appendChild(tea);\n    tea.textContent = \"Tea - $1\";\n    tea.classList.add(\"listItem\");\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/setTabs.js":
/*!************************!*\
  !*** ./src/setTabs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setTabs: () => (/* binding */ setTabs)\n/* harmony export */ });\nfunction setTabs(e) {\n    const tabs = document.getElementsByClassName(\"tab\");\n    for (let i = 0; i < tabs.length; i++) {\n        tabs[i].className = tabs[i].className.replace(\" active\", \"\");\n    }\n    e.currentTarget.className += \" active\";\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/setTabs.js?");

/***/ }),

/***/ "./src/images/wraps.jpg":
/*!******************************!*\
  !*** ./src/images/wraps.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ffee7fd6dd58df52c168.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/wraps.jpg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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