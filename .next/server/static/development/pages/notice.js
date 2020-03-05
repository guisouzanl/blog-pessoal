module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Notice/index.js":
/*!************************************!*\
  !*** ./components/Notice/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Notice/styles.js");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles */ "./components/styles/styles.js");
/* harmony import */ var _contexts_filterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/filterContext */ "./components/contexts/filterContext.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SingleNotice = () => {
  const {
    singlePost
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_filterContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["PostPanel"], null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["PanelImage"], null), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["PanelText"], null, __jsx("h1", null, singlePost.title))), __jsx(_styles_styles__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["PostBody"], null, __jsx("img", {
    src: "../../images/posts/post2.png",
    alt: "Post"
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["PostText"], null, __jsx("h2", null, singlePost.title), __jsx("p", null, singlePost.body), __jsx("small", null, "Escrito por: ", __jsx("b", null, singlePost.name))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleNotice);

/***/ }),

/***/ "./components/Notice/styles.js":
/*!*************************************!*\
  !*** ./components/Notice/styles.js ***!
  \*************************************/
/*! exports provided: Container, PostPanel, PanelImage, PanelText, PostBody, PostText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPanel", function() { return PostPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelImage", function() { return PanelImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelText", function() { return PanelText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostBody", function() { return PostBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostText", function() { return PostText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "qznnbx-0"
})(["display:flex;align-items:center;flex-direction:column;"]);
const PostPanel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__PostPanel",
  componentId: "qznnbx-1"
})(["width:100%;height:600px;position:relative;"]);
const PanelImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__PanelImage",
  componentId: "qznnbx-2"
})(["background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('../../images/posts/post6.png');background-position:center;background-repeat:no-repeat;background-size:cover;position:absolute;z-index:-3;top:0;right:0;bottom:0;width:100%;height:100%;"]);
const PanelText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__PanelText",
  componentId: "qznnbx-3"
})(["text-align:center;height:100%;display:flex;font-size:35px;justify-content:center;align-items:center;h1{color:white;}"]);
const PostBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__PostBody",
  componentId: "qznnbx-4"
})(["padding:50px 0 0 0;img{width:100%;}"]);
const PostText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__PostText",
  componentId: "qznnbx-5"
})(["text-align:center;height:100%;margin:60px 0 60px 0;h2{font-size:50px;margin:0 0 40px 0;}p{font-size:18px;margin:0 0 30px 0;}small{font-size:18px;}"]);

/***/ }),

/***/ "./components/contexts/filterContext.js":
/*!**********************************************!*\
  !*** ./components/contexts/filterContext.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const filterContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (filterContext);

/***/ }),

/***/ "./components/styles/styles.js":
/*!*************************************!*\
  !*** ./components/styles/styles.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FormatedBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__FormatedBody",
  componentId: "sc-14gwsot-0"
})(["max-width:1400px;margin:60px auto 0 auto;"]);
/* harmony default export */ __webpack_exports__["default"] = (FormatedBody);

/***/ }),

/***/ "./pages/notice.js":
/*!*************************!*\
  !*** ./pages/notice.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Notice_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Notice/index */ "./components/Notice/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Notice = () => __jsx(_components_Notice_index__WEBPACK_IMPORTED_MODULE_1__["default"], null);

/* harmony default export */ __webpack_exports__["default"] = (Notice);

/***/ }),

/***/ 7:
/*!*******************************!*\
  !*** multi ./pages/notice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/guisouzanl/Projetos/blog-pessoal/pages/notice.js */"./pages/notice.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=notice.js.map