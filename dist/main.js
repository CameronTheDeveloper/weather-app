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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_operate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/operate.js */ \"./src/modules/operate.js\");\n\n\n(0,_modules_operate_js__WEBPACK_IMPORTED_MODULE_0__.initApp)();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/operate.js":
/*!********************************!*\
  !*** ./src/modules/operate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initApp: () => (/* binding */ initApp)\n/* harmony export */ });\n/* harmony import */ var _user_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-input */ \"./src/modules/user-input.js\");\n\n\nconst initApp = async () => {\n    try {\n        await (0,_user_input__WEBPACK_IMPORTED_MODULE_0__.registerLocationSubmit)();\n    } catch (e) {\n        console.error('Error Initializing App: ', e);\n    }\n\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/operate.js?");

/***/ }),

/***/ "./src/modules/user-input.js":
/*!***********************************!*\
  !*** ./src/modules/user-input.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLocation: () => (/* binding */ getLocation),\n/* harmony export */   registerLocationSubmit: () => (/* binding */ registerLocationSubmit)\n/* harmony export */ });\nconst weatherForm = document.querySelector('#weather-form');\nconst locationInput = document.querySelector('#location-input');\nlet location = 'london';\n\nconst setLocation = (newLocation) => {\n    location = newLocation;\n};\n\nconst getLocation = async () => {\n    return location;\n};\n\nconst getLocationInput = () => {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            const newLocation = locationInput.value;\n            resolve(newLocation);\n        }, 500);\n    })\n        .then((newLocation) => {\n            setLocation(newLocation);\n            return newLocation;\n        })\n        .catch((e) => {\n            console.log('Location Input Error: ', e);\n            throw e;\n        });\n};\n\nconst registerLocationSubmit = () => {\n    weatherForm.addEventListener('submit', (event) => {\n        event.preventDefault();\n    });\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/user-input.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;