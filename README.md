```bash
webpack
# Inspect output, look for "unused harmony export"
code ./target/index.js
```

## Results

|  #  | Test suite                                            | Method                                             | Bundle size¹ | Tree-shaken |
| :-: | ----------------------------------------------------- | -------------------------------------------------- | ------------ | ----------- |
|  1  | Baseline                                              | `import { fromNullable } from "fp-ts/es6/Option";` | 8K           | Yes         |
|  2  | Namespace                                             | `import * as option from "fp-ts/es6/Option";`      | 8K           | Yes         |
|  3  | Facade                                                | `import { fromNullable } from './facade';`         | 8K           | Yes         |
|  4  | Facade with a single export                           | `import { fromNullable } from './facade';`         | 8K           | Yes         |
|  5  | Facade without any executed code (import/export only) | `import { fromNullable } from './facade';`         | 8K           | Yes         |
|  6  | Namespace facade import                               | `import * as facade from './facade';`              | 8K           | Yes         |

¹ Measured with `du -hs target/index.js`

## Using Webpack Bundle Analyzer

Run `yarn webpack` and navigate to http://127.0.0.1:8888/ in your browser.

## Chunking

### Chunks: named imports from `'rxjs/operators'`

Production bundle graph:

![Imgur](https://i.imgur.com/MWci6J1.jpg)

Development output contents:

<details>
<summary>switch-mapper</summary>

```js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["switch-mapper"],{

/***/ "./src/switch-mapper.js":
/*!******************************!*\
  !*** ./src/switch-mapper.js ***!
  \******************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



/* harmony default export */ __webpack_exports__["default"] = (Rx.of(1).pipe(
  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[/* map */ "a"])(value => value + 1),
  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[/* switchMap */ "c"])(rxjs__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "a"])
));


/***/ })

}]);
```


</details>

<details>
<summary>merge-mapper</summary>

```js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["merge-mapper"],{

/***/ "./src/merge-mapper.js":
/*!*****************************!*\
  !*** ./src/merge-mapper.js ***!
  \*****************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



/* harmony default export */ __webpack_exports__["default"] = (Rx.of(1).pipe(
  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[/* map */ "a"])(value => value + 1),
  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[/* mergeMap */ "b"])(rxjs__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "a"])
));


/***/ })

}]);
```

</details>

### Chunks: namespace import from the facade

Production bundle graph:

![Imgur](https://i.imgur.com/cJ7ShSh.png)

Development output contents:

<details>
<summary>switch-mapper</summary>

```js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["switch-mapper"],{

/***/ "./src/facade.js":
/*!***********************!*\
  !*** ./src/facade.js ***!
  \***********************/
/*! no static exports found */
/*! exports used: identity, map, mergeMap, of, switchMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export zip */
/* unused harmony export throwError */
/* unused harmony export bifunctor */
/* unused harmony export boundedMeetSemilattice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return switchMap; });
/* harmony import */ var fp_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fp-ts */ "./node_modules/fp-ts/es6/index.js");
/* harmony import */ var fp_ts_es6_Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fp-ts/es6/Option */ "./node_modules/fp-ts/es6/Option.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (checked) */ if(__webpack_require__.o(___WEBPACK_IMPORTED_MODULE_4__, "identity")) __webpack_require__.d(__webpack_exports__, "identity", function() { return ___WEBPACK_IMPORTED_MODULE_4__["identity"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(___WEBPACK_IMPORTED_MODULE_4__, "of")) __webpack_require__.d(__webpack_exports__, "of", function() { return ___WEBPACK_IMPORTED_MODULE_4__["of"]; });







const { zip, throwError } = rxjs__WEBPACK_IMPORTED_MODULE_2__;
const { bifunctor, boundedMeetSemilattice } = fp_ts__WEBPACK_IMPORTED_MODULE_0__;
const { map, mergeMap, switchMap } = rxjs_operators__WEBPACK_IMPORTED_MODULE_3__;






/***/ }),

/***/ "./src/switch-mapper.js":
/*!******************************!*\
  !*** ./src/switch-mapper.js ***!
  \******************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade */ "./src/facade.js");


/* harmony default export */ __webpack_exports__["default"] = (_facade__WEBPACK_IMPORTED_MODULE_0__["of"](1).pipe(
  _facade__WEBPACK_IMPORTED_MODULE_0__["map"](value => value + 1),
  _facade__WEBPACK_IMPORTED_MODULE_0__["switchMap"](_facade__WEBPACK_IMPORTED_MODULE_0__["identity"])
));


/***/ })

}]);
```

</details>

<details>
<summary>merge-mapper</summary>

```js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["merge-mapper"],{

/***/ "./src/facade.js":
/*!***********************!*\
  !*** ./src/facade.js ***!
  \***********************/
/*! no static exports found */
/*! exports used: identity, map, mergeMap, of, switchMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export zip */
/* unused harmony export throwError */
/* unused harmony export bifunctor */
/* unused harmony export boundedMeetSemilattice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return switchMap; });
/* harmony import */ var fp_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fp-ts */ "./node_modules/fp-ts/es6/index.js");
/* harmony import */ var fp_ts_es6_Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fp-ts/es6/Option */ "./node_modules/fp-ts/es6/Option.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (checked) */ if(__webpack_require__.o(___WEBPACK_IMPORTED_MODULE_4__, "identity")) __webpack_require__.d(__webpack_exports__, "identity", function() { return ___WEBPACK_IMPORTED_MODULE_4__["identity"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(___WEBPACK_IMPORTED_MODULE_4__, "of")) __webpack_require__.d(__webpack_exports__, "of", function() { return ___WEBPACK_IMPORTED_MODULE_4__["of"]; });







const { zip, throwError } = rxjs__WEBPACK_IMPORTED_MODULE_2__;
const { bifunctor, boundedMeetSemilattice } = fp_ts__WEBPACK_IMPORTED_MODULE_0__;
const { map, mergeMap, switchMap } = rxjs_operators__WEBPACK_IMPORTED_MODULE_3__;






/***/ }),

/***/ "./src/merge-mapper.js":
/*!*****************************!*\
  !*** ./src/merge-mapper.js ***!
  \*****************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade */ "./src/facade.js");


/* harmony default export */ __webpack_exports__["default"] = (_facade__WEBPACK_IMPORTED_MODULE_0__["of"](1).pipe(
  _facade__WEBPACK_IMPORTED_MODULE_0__["map"](value => value + 1),
  _facade__WEBPACK_IMPORTED_MODULE_0__["mergeMap"](_facade__WEBPACK_IMPORTED_MODULE_0__["identity"])
));


/***/ })

}]);
```

</details>
