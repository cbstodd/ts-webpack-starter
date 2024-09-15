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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst users_1 = __webpack_require__(/*! ./users */ \"./src/users.ts\");\nconst allUsers = users_1.users;\nconsole.table(allUsers);\n\n\n//# sourceURL=webpack://ts-webpack-starter/./src/index.ts?");

/***/ }),

/***/ "./src/users.ts":
/*!**********************!*\
  !*** ./src/users.ts ***!
  \**********************/
/***/ ((module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.users = exports.User = void 0;\nclass User {\n    constructor(firstName, lastName, age, updatedAt) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n        this.age = age;\n        this.updatedAt = updatedAt;\n    }\n}\nexports.User = User;\nconst currentDate = Date.now();\nfunction createRandomDate(maxNum = 100) {\n    return (Date.now() - Math.floor((Math.random() * maxNum) + 1));\n}\nexports.users = [\n    {\n        firstName: \"Colin\",\n        lastName: \"Stodd\",\n        age: 41,\n        updatedAt: currentDate\n    },\n    {\n        firstName: \"Henry\",\n        lastName: \"Rothchild\",\n        age: 40,\n        updatedAt: createRandomDate()\n    },\n    {\n        firstName: \"Gunner\",\n        lastName: \"Hathaway\",\n        age: 69,\n        updatedAt: createRandomDate(1000)\n    },\n];\nmodule.exports = { User, users: exports.users };\n\n\n//# sourceURL=webpack://ts-webpack-starter/./src/users.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;