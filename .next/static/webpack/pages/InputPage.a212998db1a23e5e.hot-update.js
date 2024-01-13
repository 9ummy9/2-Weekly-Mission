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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Input: function() { return /* binding */ Input; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input.module.scss */ \"./src/components/ui-input/Input.module.scss\");\n/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Input_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default()));\nconst Input = ({ password })=>{\n    _s();\n    const inputType = password ? \"password\" : \"email\";\n    // 타입별 placeholder\n    const setPlaceholder = ()=>{\n        if (inputType === \"password\") {\n            return \"비밀번호를 입력해 주세요\";\n        } else if (inputType === \"email\") {\n            return \"codeit@codeit.com\";\n        }\n    };\n    const placeholder = setPlaceholder();\n    // focus 시 파란 테두리\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // 빨간색 테두리와 에러메세지\n    const [isErrored, setIsErrored] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    let errorMessage = \"\";\n    const handleError = (e)=>{\n        if (!e.target.value) {\n            errorMessage = \"내용을 다시 작성해주세요\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: cx(\"input\", {\n                    focused: isFocused,\n                    error: isErrored\n                }),\n                type: inputType,\n                placeholder: placeholder,\n                onClick: handleError,\n                onFocus: ()=>setIsFocused(true),\n                onBlur: ()=>setIsFocused(false)\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/components/ui-input/Input.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: cx(\"error-message\"),\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/components/ui-input/Input.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Input, \"PlbsDqwu+Iwa7MRXA0gyfjDguAo=\");\n_c = Input;\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS1pbnB1dC9JbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDQTtBQUNSO0FBSWpDLE1BQU1HLEtBQUtGLDJEQUFlLENBQUNELDJEQUFNQTtBQU0xQixNQUFNSyxRQUFhLENBQUMsRUFBRUMsUUFBUSxFQUFjOztJQUNqRCxNQUFNQyxZQUFZRCxXQUFXLGFBQWE7SUFFMUMsa0JBQWtCO0lBQ2xCLE1BQU1FLGlCQUFzQjtRQUMxQixJQUFJRCxjQUFjLFlBQVk7WUFDNUIsT0FBTztRQUNULE9BQU8sSUFBSUEsY0FBYyxTQUFTO1lBQ2hDLE9BQU87UUFDVDtJQUNGO0lBRUEsTUFBTUUsY0FBY0Q7SUFFcEIsaUJBQWlCO0lBQ2pCLE1BQU0sQ0FBQ0UsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQyxpQkFBaUI7SUFDakIsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzNDLElBQUlZLGVBQWU7SUFFbkIsTUFBTUMsY0FBYyxDQUFDQztRQUNuQixJQUFJLENBQUNBLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO1lBQ25CSixlQUFlO1FBQ2pCO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNLO2dCQUNDQyxXQUFXakIsR0FBRyxTQUFTO29CQUFFa0IsU0FBU1g7b0JBQVdZLE9BQU9WO2dCQUFVO2dCQUM5RFcsTUFBTWhCO2dCQUNORSxhQUFhQTtnQkFDYmUsU0FBU1Q7Z0JBQ1RVLFNBQVMsSUFBTWQsYUFBYTtnQkFDNUJlLFFBQVEsSUFBTWYsYUFBYTs7Ozs7OzBCQUU3Qiw4REFBQ2dCO2dCQUFFUCxXQUFXakIsR0FBRzswQkFBbUJXOzs7Ozs7OztBQUcxQyxFQUFFO0dBeENXVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS1pbnB1dC9JbnB1dC50c3g/ZWVmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0lucHV0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaXNFcnJvcmVkIH0gZnJvbSBcInN0cmVhbVwiO1xuaW1wb3J0IHsgaXNFcnJvciB9IGZyb20gXCJ1dGlsXCI7XG5cbmNvbnN0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHN0eWxlcyk7XG5cbnR5cGUgSW5wdXRQcm9wcyA9IHtcbiAgcGFzc3dvcmQ6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgSW5wdXQ6IGFueSA9ICh7IHBhc3N3b3JkIH06IElucHV0UHJvcHMpID0+IHtcbiAgY29uc3QgaW5wdXRUeXBlID0gcGFzc3dvcmQgPyBcInBhc3N3b3JkXCIgOiBcImVtYWlsXCI7XG5cbiAgLy8g7YOA7J6F67OEIHBsYWNlaG9sZGVyXG4gIGNvbnN0IHNldFBsYWNlaG9sZGVyOiBhbnkgPSAoKSA9PiB7XG4gICAgaWYgKGlucHV0VHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICByZXR1cm4gXCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalFwiO1xuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSBcImVtYWlsXCIpIHtcbiAgICAgIHJldHVybiBcImNvZGVpdEBjb2RlaXQuY29tXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gc2V0UGxhY2Vob2xkZXIoKTtcblxuICAvLyBmb2N1cyDsi5wg7YyM656AIO2FjOuRkOumrFxuICBjb25zdCBbaXNGb2N1c2VkLCBzZXRJc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIOu5qOqwhOyDiSDthYzrkZDrpqzsmYAg7JeQ65+s66mU7IS47KeAXG4gIGNvbnN0IFtpc0Vycm9yZWQsIHNldElzRXJyb3JlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiO1xuXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKGU6IGFueSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwi64K07Jqp7J2EIOuLpOyLnCDsnpHshLHtlbTso7zshLjsmpRcIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17Y3goXCJpbnB1dFwiLCB7IGZvY3VzZWQ6IGlzRm9jdXNlZCwgZXJyb3I6IGlzRXJyb3JlZCB9KX1cbiAgICAgICAgdHlwZT17aW5wdXRUeXBlfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUVycm9yfVxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRJc0ZvY3VzZWQodHJ1ZSl9XG4gICAgICAgIG9uQmx1cj17KCkgPT4gc2V0SXNGb2N1c2VkKGZhbHNlKX1cbiAgICAgIC8+XG4gICAgICA8cCBjbGFzc05hbWU9e2N4KFwiZXJyb3ItbWVzc2FnZVwiKX0+e2Vycm9yTWVzc2FnZX08L3A+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsImNsYXNzTmFtZXMiLCJ1c2VTdGF0ZSIsImN4IiwiYmluZCIsIklucHV0IiwicGFzc3dvcmQiLCJpbnB1dFR5cGUiLCJzZXRQbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyIiwiaXNGb2N1c2VkIiwic2V0SXNGb2N1c2VkIiwiaXNFcnJvcmVkIiwic2V0SXNFcnJvcmVkIiwiZXJyb3JNZXNzYWdlIiwiaGFuZGxlRXJyb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dCIsImNsYXNzTmFtZSIsImZvY3VzZWQiLCJlcnJvciIsInR5cGUiLCJvbkNsaWNrIiwib25Gb2N1cyIsIm9uQmx1ciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ui-input/Input.tsx\n"));

/***/ })

});