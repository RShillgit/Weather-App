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

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertTime\": () => (/* binding */ convertTime)\n/* harmony export */ });\nasync function convertTime(timestamp, lat, lon, timeUnit) {\n\n    let time = \"\";\n\n    // API that gets timzeone using latitude and longitude\n    const response = await fetch(`https://api.wheretheiss.at/v1/coordinates/${lat},${lon}`, {mode: 'cors'})\n    const timezoneData = await response.json();\n\n    // Timezone from the api\n    const timezone = timezoneData.timezone_id;\n\n    // Converts date to timezone-specific date\n    function convertTZ(date) {\n        return new Date((typeof date === \"string\" ? new Date(date) : date).toLocaleString(\"en-US\", {timeZone: timezone}));   \n    }\n\n    // Date\n    const date = new Date(timestamp * 1000);\n\n    // Timezone Specific Date\n    const convertedDate = convertTZ(date);\n\n    let hours = convertedDate.getHours();\n\n    // Convert from military to regular time\n    if (timeUnit === 'regular') {\n        if (hours > 12) hours -= 12;\n    };\n\n    // If minitues are single digits, and a zero in the beginning\n    let minutes = convertedDate.getMinutes();\n    if (minutes < 10) {minutes = `0${minutes}`};\n    \n    // Format as hh:mm\n    time = `${hours}:${minutes}`;\n\n    return time;\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/helpers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/helpers.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;