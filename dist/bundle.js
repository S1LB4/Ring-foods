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

/***/ "./src/screens/styles.css":
/*!********************************!*\
  !*** ./src/screens/styles.css ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".nav {\\n    --padding-container: 0;\\n    height: 100%;\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.nav_items {\\n    margin-left: auto;\\n    padding: 0;\\n    display: grid;\\n    grid-auto-flow: column;\\n    grid-auto-columns: max-content;\\n    gap: 2em;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pagina/./src/screens/styles.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://pagina/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pagina/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/RestaurantsNear/NearYou.ts":
/*!****************************************!*\
  !*** ./src/RestaurantsNear/NearYou.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _screens_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../screens/styles.css */ \"./src/screens/styles.css\");\n\nclass Restaurants extends HTMLElement {\n    constructor() {\n        super();\n        this.logoUrl = \"../../img/Cheers.png\";\n        this.RestCorral = \"../../img/corral.png\";\n        this.logoStartUrl = \"../../img/cuuc.jpg\";\n        //TODO: El arreglo restaurants va a estar en el STORE, no en la clase\n        this.restaurants = [\n            {\n                logo_url: \"../../img/Cheers.png\"\n            },\n            {\n                logo_url: \"../../img/corral.png\"\n            },\n            {\n                logo_url: \"../../img/cuuc.jpg\"\n            },\n            {\n                logo_url: \"../../img/martins.jpg\"\n            },\n            {\n                logo_url: \"../../img/MW.jpg\"\n            },\n            {\n                logo_url: \"../../img/santos.png\"\n            },\n        ];\n        this.attachShadow({ mode: 'open' });\n    }\n    // static get observedAttributes(){\n    //     return[]\n    // }\n    connectedCallback() {\n        this.render();\n    }\n    // attributeChangeCallback(propName, oldValue, newValue){\n    //     this[propName] = newValue;\n    //     this.render();\n    // }\n    render() {\n        var _a, _b;\n        const section_logo = this.ownerDocument.createElement('section');\n        section_logo.classList.add(\"gallery\");\n        const section_logo_list = this.ownerDocument.createElement('h2');\n        section_logo_list.classList.add(\"subtitulo\");\n        section_logo_list.innerHTML = \"Near you\";\n        section_logo === null || section_logo === void 0 ? void 0 : section_logo.appendChild(section_logo_list);\n        const section_logo_list_div = this.ownerDocument.createElement('div');\n        section_logo_list_div.classList.add(\"contenedor-galeria\");\n        this.restaurants.forEach((restaurant) => {\n            const section_logo_list_img = this.ownerDocument.createElement('img');\n            section_logo_list_img.classList.add(\"img-galeria\");\n            section_logo_list_img.src = restaurant.logo_url;\n            section_logo_list_div === null || section_logo_list_div === void 0 ? void 0 : section_logo_list_div.appendChild(section_logo_list_img);\n        });\n        section_logo === null || section_logo === void 0 ? void 0 : section_logo.appendChild(section_logo_list_div);\n        // const section_logo_list_img = this.ownerDocument.createElement('img');\n        // section_logo_list_img.classList.add(\"img-galeria\");\n        // const menu = this.ownerDocument.createElement('img');\n        // menu.setAttribute('src', this.RestCorral);\n        // div_logo_list_item?.appendChild(menu);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(section_logo);\n        const css = this.ownerDocument.createElement('style');\n        css.innerHTML = _screens_styles_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(css);\n        // /*  <section class=\"gallery\" id=\"portafolio\">\n        //   <h2 class=\"subtitulo\">RESTAURANTS NEAR YOU</h2>\n        //   <div class=\"contenedor-galeria\">\n        //   <img src=\"../img/santos.png\" alt=\"\" class=\"img-galeria\">\n        //   <img src=\"../img/corral.png\" alt=\"\" class=\"img-galeria\">\n        //   <img src=\"../img/Cheers.png\" alt=\"\" class=\"img-galeria\">\n        //   <img src=\"../img/MW.jpg\" alt=\"\" class=\"img-galeria\">\n        //   <img src=\"../img/cuuc.jpg\" alt=\"\" class=\"img-galeria\">\n        //   <img src=\"../img/martins.jpg\" alt=\"\" class=\"img-galeria\">\n        //       </div>\n        //       </section>*/\n    }\n}\ncustomElements.define(\"app-restaurants\", Restaurants);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Restaurants);\n\n\n//# sourceURL=webpack://pagina/./src/RestaurantsNear/NearYou.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/navbar */ \"./src/screens/navbar.ts\");\n/* harmony import */ var _RestaurantsNear_NearYou__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RestaurantsNear/NearYou */ \"./src/RestaurantsNear/NearYou.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        const navbar = this.ownerDocument.createElement('app-navbar');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(navbar);\n        const restaurants = this.ownerDocument.createElement('app-restaurants');\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(restaurants);\n        /* this.shadowRoot.innerHTML = `\n         <app-navbar>\n         </app-navbar>\n         <app-header>\n         </app-header>\n         <app-galle>\n         </app-galle>\n         <app-galle1>\n         </app-galle1>\n         `*/\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://pagina/./src/index.ts?");

/***/ }),

/***/ "./src/screens/navbar.ts":
/*!*******************************!*\
  !*** ./src/screens/navbar.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/screens/styles.css\");\n\nclass NavBar extends HTMLElement {\n    static get observedAttributes() {\n        return [];\n    }\n    constructor() {\n        super();\n        this.logoUrl = \"../../img/logout.png\";\n        this.logoUserUrl = \"../../img/usuario.png\";\n        this.logoStartUrl = \"../../img/star.png\";\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    // attributeChangeCallback(propName, oldValue, newValue){\n    //     this[propName] = newValue;\n    //     this.render();\n    // }\n    render() {\n        var _a, _b;\n        const mainContent = this.ownerDocument.createElement('nav');\n        mainContent.classList.add(\"nav-container\");\n        const div_logo = this.ownerDocument.createElement('div');\n        div_logo.classList.add(\"nav-logo\");\n        const div_logo_list = this.ownerDocument.createElement('ul');\n        div_logo_list.classList.add(\"nav_link\");\n        const div_logo_list_item = this.ownerDocument.createElement('li');\n        div_logo_list_item.classList.add(\"nav_items\");\n        const div_logo_list_item_img = this.ownerDocument.createElement('img');\n        div_logo_list_item_img.classList.add(\"nav_title\");\n        div_logo_list_item_img.setAttribute('src', this.logoUrl);\n        div_logo_list_item === null || div_logo_list_item === void 0 ? void 0 : div_logo_list_item.appendChild(div_logo_list_item_img);\n        div_logo === null || div_logo === void 0 ? void 0 : div_logo.appendChild(div_logo_list_item);\n        mainContent === null || mainContent === void 0 ? void 0 : mainContent.appendChild(div_logo);\n        const userprofile = this.ownerDocument.createElement('img');\n        userprofile.setAttribute('src', this.logoUserUrl);\n        div_logo_list_item === null || div_logo_list_item === void 0 ? void 0 : div_logo_list_item.appendChild(userprofile);\n        const starurl = this.ownerDocument.createElement('img');\n        starurl.setAttribute('src', this.logoStartUrl);\n        div_logo_list_item === null || div_logo_list_item === void 0 ? void 0 : div_logo_list_item.appendChild(starurl);\n        //ESTA ES LA NAV BAR LO QUE APARECE ARRIBA DE LA PAGINA\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(mainContent);\n        const css = this.ownerDocument.createElement('style');\n        css.innerHTML = _styles_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(css);\n        /*  <section class=\"gallery\" id=\"portafolio\">\n          <h2 class=\"subtitulo\">RESTAURANTS NEAR YOU</h2>\n          <div class=\"contenedor-galeria\">\n          <img src=\"../img/santos.png\" alt=\"\" class=\"img-galeria\">\n          <img src=\"../img/corral.png\" alt=\"\" class=\"img-galeria\">\n          <img src=\"../img/Cheers.png\" alt=\"\" class=\"img-galeria\">\n          <img src=\"../img/MW.jpg\" alt=\"\" class=\"img-galeria\">\n          <img src=\"../img/cuuc.jpg\" alt=\"\" class=\"img-galeria\">\n          <img src=\"../img/martins.jpg\" alt=\"\" class=\"img-galeria\">\n              </div>\n              </section>*/\n        // this.shadowRoot.innerHTML =`\n        // <link rel=\"stylesheet\" href=\"../../../css/estilos.css\">\n        // <nav class=\"nav container\">\n        //     <div class=\"nav_logo\" class=\"navcolor\">\n        //         <li class=\"nav_items\">\n        //          <img href=\"#\" class=\"nav_title\"  src=\"../img/logout.png\">\n        //         </li>\n        //     </div>\n        //     <ul class=\"nav_link nav_link--menu\">\n        //         <li class=\"nav_items\">\n        //         <input type=\"SEARCH\">\n        //         </li>\n        //         <li class=\"nav_items\">\n        //             <img href=\"#\" src=\"../img/lupa.png\">\n        //         </li>\n        //         <li class=\"nav_items\">\n        //             <img href=\"#\" src=\"../img/food.png\">\n        //         </li>\n        //         <li class=\"nav_items\">\n        //             <img href=\"#\" src=\"../img/bell.png\">\n        //         </li>\n        //         <li class=\"nav_items\">\n        //             <img href=\"#\" src=\"../img/star.png\">\n        //         </li>\n        //         <li class=\"nav_items\">\n        //             <img href=\"#\" src=\"../img/usuario.png\">\n        //         </li>\n        //     </ul>\n        // </nav>`\n    }\n}\ncustomElements.define(\"app-navbar\", NavBar);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n\n\n//# sourceURL=webpack://pagina/./src/screens/navbar.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;