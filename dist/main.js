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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\n\n//# sourceURL=webpack://o-zone/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\r\n  const cartBtn = document.getElementById(\"cart\");\r\n  // console.dir(cart);\r\n  const cartModal = document.querySelector(\".cart\");\r\n  const cartCloseBtn = cartModal.querySelector(\".cart-close\");\r\n\r\n  const openCart = () => {\r\n    cartModal.style.display = \"flex\";\r\n  };\r\n\r\n  // Закрытие по нажатию на кнопку и esc\r\n  const closeCart = (e) => {\r\n    e.key === \"Escape\"\r\n      ? (cartModal.style.display = \"\")\r\n      : (cartModal.style.display = \"\");\r\n  };\r\n\r\n  cartBtn.addEventListener(\"click\", openCart);\r\n  cartCloseBtn.addEventListener(\"click\", closeCart);\r\n  window.addEventListener(\"keydown\", closeCart);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n  const catalogBtn = document.querySelector(\".catalog-button > button\");\r\n  const catalogModal = document.querySelector(\".catalog\");\r\n  const catalogModalItems = document.querySelectorAll(\".catalog li\");\r\n\r\n  // Делаем небольшой костыль, чтобы закрывать каталог\r\n  let isOpen = false;\r\n\r\n  catalogBtn.addEventListener(\"click\", () => {\r\n    isOpen = !isOpen;\r\n\r\n    if (isOpen) {\r\n      catalogModal.style.display = \"block\";\r\n    } else {\r\n      catalogModal.style.display = \"\";\r\n    }\r\n  });\r\n\r\n  catalogModalItems.forEach((item) => {\r\n    item.addEventListener(\"click\", () => {\r\n      const text = item.textContent;\r\n      // console.log(text);\r\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text)));\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n  // console.log(goods);\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.title.toLowerCase().includes(value.toLowerCase());\r\n  });\r\n};\r\n\r\nconst categoryFilter = (goods, value) => {\r\n  // console.log(goods);\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.category === value;\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Получаем данные\r\n\r\nconst getData = (string) => {\r\n  // const url = `https://o-zone-project-default-rtdb.firebaseio.com/goods.json?${\r\n  //   string ? `search=${string}` : \"\"\r\n  // }`;\r\n\r\n  const url = \"https://o-zone-project-default-rtdb.firebaseio.com/goods.json\";\r\n\r\n  return fetch(url).then((response) => {\r\n    return response.json();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n// import postData from \"./postData\";\r\n// import deleteData from \"./deleteData\";\r\n\r\n// данный модуль отрабатывает сразу после загрузки (показует первую страницу)\r\nconst load = () => {\r\n  // получение данных\r\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n  // console.log(goods);\r\n  const goodsContainer = document.querySelector(\".goods\");\r\n\r\n  // поскольку insertAdjacentHTML не перезаписывает верстку, а дополняет её, нужно очистить вёрстку\r\n  goodsContainer.innerHTML = \"\";\r\n\r\n  // перебираем массив обьектов\r\n  goods.forEach((goodsItem) => {\r\n    // console.log(goodsItem);\r\n\r\n    // на каждой итерации forEach отрисовуем карточку товара\r\n    // insertAdjacentHTML - размещает верстку внутри контейнера\r\n    goodsContainer.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `<div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n          ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : \"\"}\r\n          <div class=\"card-img-wrapper\">\r\n            <span\r\n              class=\"card-img-top\"\r\n              style=\"background-image: url('${goodsItem.img}')\"\r\n            ></span>\r\n          </div>\r\n          <div class=\"card-body justify-content-between\">\r\n            <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n            <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n            <button class=\"btn btn-primary\">В корзину</button>\r\n          </div>\r\n        </div>\r\n      </div>`\r\n    );\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n  const searchInput = document.querySelector(\".search-wrapper_input\");\r\n  searchInput.addEventListener(\"input\", (e) => {\r\n    // console.log(e.target.value);\r\n    const value = e.target.value;\r\n\r\n    // getData(value).then((data) => renderGoods(data));\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value)));\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/search.js?");

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