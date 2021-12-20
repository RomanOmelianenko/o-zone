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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack://o-zone/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nconst cart = () => {\r\n  const cartBtn = document.getElementById(\"cart\");\r\n  // console.dir(cart);\r\n  const cartModal = document.querySelector(\".cart\");\r\n  const cartCloseBtn = cartModal.querySelector(\".cart-close\");\r\n  const goodsContainer = document.querySelector(\".goods\");\r\n  const cartTotalPrice = cartModal.querySelector(\".cart-total > span\");\r\n  const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n  const cartSendBtn = cartModal.querySelector(\".cart-confirm\");\r\n\r\n  const openCart = () => {\r\n    const cartLocalStorage = JSON.parse(localStorage.getItem(\"cart\"));\r\n    const cart = localStorage.getItem(\"cart\") ? cartLocalStorage : [];\r\n\r\n    cartModal.style.display = \"flex\";\r\n\r\n    (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n\r\n    // Считаем сумму в корзине\r\n    cartTotalPrice.textContent = cart.reduce((sum, goodItem) => {\r\n      return sum + goodItem.price;\r\n    }, 0);\r\n  };\r\n\r\n  // Закрытие по нажатию на кнопку и esc\r\n  const closeCart = (e) => {\r\n    e.key === \"Escape\"\r\n      ? (cartModal.style.display = \"\")\r\n      : (cartModal.style.display = \"\");\r\n  };\r\n\r\n  cartBtn.addEventListener(\"click\", openCart);\r\n  cartCloseBtn.addEventListener(\"click\", closeCart);\r\n  window.addEventListener(\"keydown\", closeCart);\r\n\r\n  // Делегирование\r\n  goodsContainer.addEventListener(\"click\", (e) => {\r\n    // console.log(e.target);\r\n    if (e.target.classList.contains(\"btn-primary\")) {\r\n      // console.log(\"кнопка\");\r\n      const card = e.target.closest(\".card\");\r\n      const key = card.dataset.key; // получаем id карточки\r\n\r\n      //получаем весь массив goods из localStorage\r\n      const goods = JSON.parse(localStorage.getItem(\"goods\"));\r\n\r\n      const cartLocalStorage = JSON.parse(localStorage.getItem(\"cart\"));\r\n      const cart = localStorage.getItem(\"cart\") ? cartLocalStorage : [];\r\n\r\n      // С массива goods достаём необходимый обьект и записываем его в массив cart и сохранить массив cart в localStorage с ключём 'cart'\r\n      const goodItem = goods.find((item) => {\r\n        return item.id === +key;\r\n      });\r\n\r\n      cart.push(goodItem);\r\n\r\n      localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n    }\r\n  });\r\n\r\n  // Делегирование (удаляем карточку с корзины товаров)\r\n  cartWrapper.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"btn-primary\")) {\r\n      const cartLocalStorage = JSON.parse(localStorage.getItem(\"cart\"));\r\n      const cart = localStorage.getItem(\"cart\") ? cartLocalStorage : [];\r\n\r\n      // Получаем элемент по которому кликнули и удаляем его\r\n      const card = e.target.closest(\".card\");\r\n      const key = card.dataset.key;\r\n      // console.log(key);\r\n\r\n      // перед тем как удалить элемент с массива нужно узнать его индекс\r\n      const index = cart.findIndex((item) => {\r\n        return item.id === +key;\r\n      });\r\n\r\n      cart.splice(index, 1);\r\n\r\n      // После удаления карточки снова записать в localStorage массив данных\r\n      localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n\r\n      (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n\r\n      // Считаем сумму в корзине\r\n      cartTotalPrice.textContent = cart.reduce((sum, goodItem) => {\r\n        return sum + goodItem.price;\r\n      }, 0);\r\n    }\r\n  });\r\n\r\n  // Отправка данных с корзины\r\n  cartSendBtn.addEventListener(\"click\", () => {\r\n    const cartLocalStorage = JSON.parse(localStorage.getItem(\"cart\"));\r\n    const cart = localStorage.getItem(\"cart\") ? cartLocalStorage : [];\r\n\r\n    // отправляем данные корзины на сервер \"https://jsonplaceholder.typicode.com/posts\", очищаем корзину и отрисовуем её (используем метод then())\r\n    (0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n      localStorage.removeItem(\"cart\");\r\n\r\n      (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\r\n\r\n      cartTotalPrice.textContent = 0;\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n  const catalogBtn = document.querySelector(\".catalog-button > button\");\r\n  const catalogModal = document.querySelector(\".catalog\");\r\n  const catalogModalItems = document.querySelectorAll(\".catalog li\");\r\n\r\n  // Делаем небольшой костыль, чтобы закрывать каталог\r\n  let isOpen = false;\r\n\r\n  catalogBtn.addEventListener(\"click\", () => {\r\n    isOpen = !isOpen;\r\n\r\n    if (isOpen) {\r\n      catalogModal.style.display = \"block\";\r\n    } else {\r\n      catalogModal.style.display = \"\";\r\n    }\r\n  });\r\n\r\n  catalogModalItems.forEach((item) => {\r\n    item.addEventListener(\"click\", () => {\r\n      const text = item.textContent;\r\n      // console.log(text);\r\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text)));\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n// фильтрация по цене\r\nconst filter = () => {\r\n  const minInput = document.getElementById(\"min\");\r\n  const maxInput = document.getElementById(\"max\");\r\n  const checkboxInput = document.getElementById(\"discount-checkbox\");\r\n  const checkboxSpan = document.querySelector(\".filter-check_checkmark\");\r\n\r\n  minInput.addEventListener(\"input\", () => {\r\n    // console.log(minInput.value);\r\n    // console.log(maxInput.value);\r\n\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      // renderGoods(priceFilter(data, minInput.value, maxInput.value));\r\n      // Меняем data на hotSaleFilter(data, checkboxInput.checked) для обьеденения двух фильтров (min-max и checkbox)\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked),\r\n          minInput.value,\r\n          maxInput.value\r\n        )\r\n      );\r\n    });\r\n  });\r\n\r\n  maxInput.addEventListener(\"input\", () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked),\r\n          minInput.value,\r\n          maxInput.value\r\n        )\r\n      );\r\n    });\r\n  });\r\n\r\n  checkboxInput.addEventListener(\"change\", () => {\r\n    // console.log(checkboxInput.checked); true или false checkbox\r\n\r\n    if (checkboxInput.checked) {\r\n      checkboxSpan.classList.add(\"checked\");\r\n    } else {\r\n      checkboxSpan.classList.remove(\"checked\");\r\n    }\r\n\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      // renderGoods(hotSaleFilter(data, checkboxInput.checked));\r\n      // Обьеденение двух фильтров\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked),\r\n          minInput.value,\r\n          maxInput.value\r\n        )\r\n      );\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"hotSaleFilter\": () => (/* binding */ hotSaleFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.title.toLowerCase().includes(value.toLowerCase());\r\n  });\r\n};\r\n\r\nconst categoryFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.category === value;\r\n  });\r\n};\r\n\r\n// Фильтрация для цены\r\nconst priceFilter = (goods, minValue, maxValue) => {\r\n  return goods.filter((goodsItem) => {\r\n    if (minValue === \"\" && maxValue === \"\") {\r\n      return goodsItem;\r\n    } else if (minValue !== \"\" && maxValue !== \"\") {\r\n      return goodsItem.price >= +minValue && goodsItem.price <= +maxValue;\r\n    } else if (minValue !== \"\" && maxValue === \"\") {\r\n      return goodsItem.price >= +minValue;\r\n    } else if (minValue === \"\" && maxValue !== \"\") {\r\n      return goodsItem.price <= +maxValue;\r\n    }\r\n  });\r\n};\r\n\r\n// Фильтрация для checkbox\r\nconst hotSaleFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    if (value) {\r\n      return goodsItem.sale === true;\r\n    } else {\r\n      return goodsItem;\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/filters.js?");

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

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// сохраняет данные в базу\r\n\r\nconst postData = (cart) => {\r\n  // const url = \"http://localhost:3000/goods\";\r\n  const url = \"https://jsonplaceholder.typicode.com/posts\";\r\n  return fetch(url, {\r\n    method: \"POST\",\r\n    body: JSON.stringify(cart),\r\n    headers: {\r\n      \"Content-type\": \"application/json; charset=UTF-8\",\r\n    },\r\n  }).then((res) => res.json());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n  // console.log(goods);\r\n  const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n\r\n  // поскольку insertAdjacentHTML не перезаписывает верстку, а дополняет её, нужно очистить вёрстку\r\n  cartWrapper.innerHTML = \"\";\r\n\r\n  if (goods.length === 0) {\r\n    cartWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `<div id=\"cart-empty\">\r\n\t\t\t\t\tВаша корзина пока пуста\r\n\t\t\t</div>`\r\n    );\r\n  } else {\r\n    // перебираем массив обьектов\r\n    goods.forEach((goodsItem) => {\r\n      // console.log(goodsItem);\r\n\r\n      // на каждой итерации forEach отрисовуем карточку товара\r\n      // insertAdjacentHTML - размещает верстку внутри контейнера\r\n      // Добавляем аттрибут (21 строка) data-key=\"${goodsItem.id}\" для того, чтобы знать по какой кнопке карточки кликнули (берём id карточки)\r\n      cartWrapper.insertAdjacentHTML(\r\n        \"beforeend\",\r\n        `<div class=\"card\" data-key=\"${goodsItem.id}\"> \r\n          ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : \"\"}\r\n          <div class=\"card-img-wrapper\">\r\n            <span\r\n              class=\"card-img-top\"\r\n              style=\"background-image: url('${goodsItem.img}')\"\r\n            ></span>\r\n          </div>\r\n          <div class=\"card-body justify-content-between\">\r\n            <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n            <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n            <button class=\"btn btn-primary\">Удалить</button>\r\n          </div>\r\n      </div>`\r\n      );\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n  // console.log(goods);\r\n  const goodsContainer = document.querySelector(\".goods\");\r\n\r\n  // сохраняем в данные в localStorage\r\n  localStorage.setItem(\"goods\", JSON.stringify(goods));\r\n\r\n  // поскольку insertAdjacentHTML не перезаписывает верстку, а дополняет её, нужно очистить вёрстку\r\n  goodsContainer.innerHTML = \"\";\r\n\r\n  // перебираем массив обьектов\r\n  goods.forEach((goodsItem) => {\r\n    // console.log(goodsItem);\r\n\r\n    // на каждой итерации forEach отрисовуем карточку товара\r\n    // insertAdjacentHTML - размещает верстку внутри контейнера\r\n    // Добавляем аттрибут (21 строка) data-key=\"${goodsItem.id}\" для того, чтобы знать по какой кнопке карточки кликнули (берём id карточки)\r\n    goodsContainer.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `<div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\" data-key=\"${goodsItem.id}\"> \r\n          ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : \"\"}\r\n          <div class=\"card-img-wrapper\">\r\n            <span\r\n              class=\"card-img-top\"\r\n              style=\"background-image: url('${goodsItem.img}')\"\r\n            ></span>\r\n          </div>\r\n          <div class=\"card-body justify-content-between\">\r\n            <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n            <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n            <button class=\"btn btn-primary\">В корзину</button>\r\n          </div>\r\n        </div>\r\n      </div>`\r\n    );\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/renderGoods.js?");

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