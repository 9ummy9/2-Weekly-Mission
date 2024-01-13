"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/InputPage",{

/***/ "./src/components/ui-input/Input.tsx":
/*!*******************************************!*\
  !*** ./src/components/ui-input/Input.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Input: function() { return /* binding */ Input; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input.module.scss */ \"./src/components/ui-input/Input.module.scss\");\n/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Input_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default()));\nconst Input = ({ password })=>{\n    _s();\n    const inputType = password ? \"password\" : \"email\";\n    // 타입별 placeholder\n    const setPlaceholder = ()=>{\n        if (inputType === \"password\") {\n            return \"비밀번호를 입력해 주세요\";\n        } else if (inputType === \"email\") {\n            return \"codeit@codeit.com\";\n        }\n    };\n    const placeholder = setPlaceholder();\n    // focus 시 파란 테두리\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // 빨간색 테두리와 에러메세지\n    const [isErrored, setIsErrored] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const errorMessage = \"hi\";\n    const handleError = (e)=>{\n        if (!e.target.value) ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: cx(\"input\", {\n                    focused: isFocused,\n                    error: isErrored\n                }),\n                type: inputType,\n                placeholder: placeholder,\n                onClick: handleError,\n                onFocus: ()=>setIsFocused(true),\n                onBlur: ()=>setIsFocused(false)\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/components/ui-input/Input.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: cx(\"error-message\"),\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/components/ui-input/Input.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Input, \"PlbsDqwu+Iwa7MRXA0gyfjDguAo=\");\n_c = Input;\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS1pbnB1dC9JbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDQTtBQUNSO0FBSWpDLE1BQU1HLEtBQUtGLDJEQUFlLENBQUNELDJEQUFNQTtBQU0xQixNQUFNSyxRQUFhLENBQUMsRUFBRUMsUUFBUSxFQUFjOztJQUNqRCxNQUFNQyxZQUFZRCxXQUFXLGFBQWE7SUFFMUMsa0JBQWtCO0lBQ2xCLE1BQU1FLGlCQUFzQjtRQUMxQixJQUFJRCxjQUFjLFlBQVk7WUFDNUIsT0FBTztRQUNULE9BQU8sSUFBSUEsY0FBYyxTQUFTO1lBQ2hDLE9BQU87UUFDVDtJQUNGO0lBRUEsTUFBTUUsY0FBY0Q7SUFFcEIsaUJBQWlCO0lBQ2pCLE1BQU0sQ0FBQ0UsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQyxpQkFBaUI7SUFDakIsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1ZLGVBQWU7SUFFckIsTUFBTUMsY0FBYyxDQUFDQztRQUNuQixJQUFJLENBQUNBLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUNyQjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQ0NDLFdBQVdqQixHQUFHLFNBQVM7b0JBQUVrQixTQUFTWDtvQkFBV1ksT0FBT1Y7Z0JBQVU7Z0JBQzlEVyxNQUFNaEI7Z0JBQ05FLGFBQWFBO2dCQUNiZSxTQUFTVDtnQkFDVFUsU0FBUyxJQUFNZCxhQUFhO2dCQUM1QmUsUUFBUSxJQUFNZixhQUFhOzs7Ozs7MEJBRTdCLDhEQUFDZ0I7Z0JBQUVQLFdBQVdqQixHQUFHOzBCQUFtQlc7Ozs7Ozs7O0FBRzFDLEVBQUU7R0F0Q1dUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VpLWlucHV0L0lucHV0LnRzeD9lZWY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSW5wdXQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc0Vycm9yZWQgfSBmcm9tIFwic3RyZWFtXCI7XG5pbXBvcnQgeyBpc0Vycm9yIH0gZnJvbSBcInV0aWxcIjtcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQoc3R5bGVzKTtcblxudHlwZSBJbnB1dFByb3BzID0ge1xuICBwYXNzd29yZDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBJbnB1dDogYW55ID0gKHsgcGFzc3dvcmQgfTogSW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCBpbnB1dFR5cGUgPSBwYXNzd29yZCA/IFwicGFzc3dvcmRcIiA6IFwiZW1haWxcIjtcblxuICAvLyDtg4DsnoXrs4QgcGxhY2Vob2xkZXJcbiAgY29uc3Qgc2V0UGxhY2Vob2xkZXI6IGFueSA9ICgpID0+IHtcbiAgICBpZiAoaW5wdXRUeXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgIHJldHVybiBcIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbQg7KO87IS47JqUXCI7XG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09IFwiZW1haWxcIikge1xuICAgICAgcmV0dXJuIFwiY29kZWl0QGNvZGVpdC5jb21cIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBzZXRQbGFjZWhvbGRlcigpO1xuXG4gIC8vIGZvY3VzIOyLnCDtjIzrnoAg7YWM65GQ66asXG4gIGNvbnN0IFtpc0ZvY3VzZWQsIHNldElzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8g67mo6rCE7IOJIO2FjOuRkOumrOyZgCDsl5Drn6zrqZTshLjsp4BcbiAgY29uc3QgW2lzRXJyb3JlZCwgc2V0SXNFcnJvcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gXCJoaVwiO1xuXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKGU6IGFueSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2N4KFwiaW5wdXRcIiwgeyBmb2N1c2VkOiBpc0ZvY3VzZWQsIGVycm9yOiBpc0Vycm9yZWQgfSl9XG4gICAgICAgIHR5cGU9e2lucHV0VHlwZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVFcnJvcn1cbiAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0SXNGb2N1c2VkKHRydWUpfVxuICAgICAgICBvbkJsdXI9eygpID0+IHNldElzRm9jdXNlZChmYWxzZSl9XG4gICAgICAvPlxuICAgICAgPHAgY2xhc3NOYW1lPXtjeChcImVycm9yLW1lc3NhZ2VcIil9PntlcnJvck1lc3NhZ2V9PC9wPlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwidXNlU3RhdGUiLCJjeCIsImJpbmQiLCJJbnB1dCIsInBhc3N3b3JkIiwiaW5wdXRUeXBlIiwic2V0UGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlciIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsImlzRXJyb3JlZCIsInNldElzRXJyb3JlZCIsImVycm9yTWVzc2FnZSIsImhhbmRsZUVycm9yIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXQiLCJjbGFzc05hbWUiLCJmb2N1c2VkIiwiZXJyb3IiLCJ0eXBlIiwib25DbGljayIsIm9uRm9jdXMiLCJvbkJsdXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ui-input/Input.tsx\n"));

/***/ })

});