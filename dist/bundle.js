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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/navbar */ \"./src/screens/navbar.ts\");\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const navbar = this.ownerDocument.createElement('app-navbar');\n        const Restaurants = this.ownerDocument.createElement('app-restaurants');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(navbar);\n        /* this.shadowRoot.innerHTML = `\n         <app-navbar>\n         </app-navbar>\n         <app-header>\n         </app-header>\n         <app-galle>\n         </app-galle>\n         <app-galle1>\n         </app-galle1>\n         `*/\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://pagina/./src/index.ts?");

/***/ }),

/***/ "./src/screens/navbar.ts":
/*!*******************************!*\
  !*** ./src/screens/navbar.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NavBar extends HTMLElement {\n    static get observedAttributes() {\n        return [];\n    }\n    constructor() {\n        super();\n        this.logoUrl = \"../../img/logout.png\";\n        this.logoUserUrl = \"../../img/usuario.png\";\n        this.logoStartUrl = \"../../img/star.png\";\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangeCallback(propName, oldValue, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    render() {\n        const mainContent = this.ownerDocument.createElement('nav');\n        mainContent.classList.add(\"nav-container\");\n        const div_logo = this.ownerDocument.createElement('div');\n        div_logo.classList.add(\"nav-logo\");\n        const div_logo_list = this.ownerDocument.createElement('ul');\n        div_logo_list.classList.add(\"nav_link\");\n        const div_logo_list_item = this.ownerDocument.createElement('li');\n        div_logo_list_item.classList.add(\"nav_items\");\n        const div_logo_list_item_img = this.ownerDocument.createElement('img');\n        div_logo_list_item_img.classList.add(\"nav_title\");\n        div_logo_list_item_img.setAttribute('src', this.logoUrl);\n        div_logo_list_item === null || div_logo_list_item === void 0 ? void 0 : div_logo_list_item.appendChild(div_logo_list_item_img);\n        div_logo === null || div_logo === void 0 ? void 0 : div_logo.appendChild(div_logo_list_item);\n        mainContent === null || mainContent === void 0 ? void 0 : mainContent.appendChild(div_logo);\n        const userprofile = this.ownerDocument.createElement('img');\n        userprofile.setAttribute('src', this.logoUserUrl);\n        div_logo_list_item === null || div_logo_list_item === void 0 ? void 0 : div_logo_list_item.appendChild(userprofile);\n        const starurl = this.ownerDocument.createElement('img');\n        starurl.setAttribute('src', this.logoStartUrl);\n        div_logo_list_item === null || div_logo_list_item === void 0 ? void 0 : div_logo_list_item.appendChild(starurl);\n        //ESTA ES LA NAV BAR LO QUE APARECE ARRIBA DE LA PAGINA\n        // this.shadowRoot.innerHTML =`\n        // <link rel=\"stylesheet\" href=\"../../../css/estilos.css\">\n        // <nav class=\"nav container\">\n        //     <div class=\"nav_logo\" class=\"navcolor\">\n        //         <li class=\"nav_items\">\n        //          <img href=\"#\" class=\"nav_title\"  src=\"../img/logout.png\">\n        //         </li>\n        //     </div>\n        //     <ul class=\"nav_link nav_link--menu\">\n        //         <li class=\"nav_items\">\n        //         <input type=\"SEARCH\">\n        //         </li>\n        //         <li class=\"nav_items\">\n        //             <img href=\"#\" src=\"../img/lupa.png\">\n        //         </li>\n        //         <li class=\"nav_items\">\n        //             <img href=\"#\" src=\"../img/food.png\">\n        //         </li>\n        //         <li class=\"nav_items\">\n        //             <img href=\"#\" src=\"../img/bell.png\">\n        //         </li>\n        //         <li class=\"nav_items\">\n        //             <img href=\"#\" src=\"../img/star.png\">\n        //         </li>\n        //         <li class=\"nav_items\">\n        //             <img href=\"#\" src=\"../img/usuario.png\">\n        //         </li>\n        //     </ul>\n        // </nav>`\n    }\n}\ncustomElements.define(\"app-navbar\", NavBar);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n\n\n//# sourceURL=webpack://pagina/./src/screens/navbar.ts?");

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
/******/ 			// no module.id needed
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