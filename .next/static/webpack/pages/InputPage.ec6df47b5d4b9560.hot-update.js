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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Input: function() { return /* binding */ Input; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input.module.scss */ \"./src/components/ui-input/Input.module.scss\");\n/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Input_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// @ts-expect-error\n\nvar _s = $RefreshSig$();\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default()));\nconst Input = ({ password })=>{\n    _s();\n    const inputType = password ? \"password\" : \"email\";\n    // 타입별 placeholder\n    const setPlaceholder = ()=>{\n        if (inputType === \"password\") {\n            return \"비밀번호를 입력해 주세요\";\n        } else if (inputType === \"email\") {\n            return \"codeit@codeit.com\";\n        }\n    };\n    const placeholder = setPlaceholder();\n    // focus 시 파란 테두리\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // 빨간색 테두리와 에러메세지\n    const [isErrored, setIsErrored] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleError = (e)=>{\n        if (!e.target.value) {\n            setIsErrored(true);\n            setErrorMessage(\"내용을 다시 작성해주세요\");\n        } else {\n            setIsErrored(false);\n            setErrorMessage(\"\");\n        }\n    };\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        inputRef.current?.addEventListener(\"focusout\", handleError);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: cx(\"input\", {\n                    focused: isFocused,\n                    error: isErrored\n                }),\n                type: inputType,\n                placeholder: placeholder,\n                ref: inputRef,\n                onFocus: ()=>{\n                    setIsFocused(true);\n                },\n                onBlur: ()=>{\n                    setIsFocused(false);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/components/ui-input/Input.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: cx({\n                    \"error-message\": isErrored\n                }),\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/components/ui-input/Input.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Input, \"7C9E7S+kopwCSDX/LbHfGwPlsUU=\");\n_c = Input;\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS1pbnB1dC9JbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbUJBQW1COzs7QUFFc0I7QUFDQTtBQUNXO0FBRXBELE1BQU1LLEtBQUtKLDJEQUFlLENBQUNELDJEQUFNQTtBQU0xQixNQUFNTyxRQUFhLENBQUMsRUFBRUMsUUFBUSxFQUFjOztJQUNqRCxNQUFNQyxZQUFZRCxXQUFXLGFBQWE7SUFFMUMsa0JBQWtCO0lBQ2xCLE1BQU1FLGlCQUFzQjtRQUMxQixJQUFJRCxjQUFjLFlBQVk7WUFDNUIsT0FBTztRQUNULE9BQU8sSUFBSUEsY0FBYyxTQUFTO1lBQ2hDLE9BQU87UUFDVDtJQUNGO0lBRUEsTUFBTUUsY0FBY0Q7SUFFcEIsaUJBQWlCO0lBQ2pCLE1BQU0sQ0FBQ0UsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUzQyxpQkFBaUI7SUFDakIsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2EsY0FBY0MsZ0JBQWdCLEdBQUdkLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1lLGNBQWMsQ0FBQ0M7UUFDbkIsSUFBSSxDQUFDQSxFQUFFQyxNQUFNLENBQUNDLEtBQUssRUFBRTtZQUNuQk4sYUFBYTtZQUNiRSxnQkFBZ0I7UUFDbEIsT0FBTztZQUNMRixhQUFhO1lBQ2JFLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEsTUFBTUssV0FBV2xCLDZDQUFNQTtJQUV2QkYsZ0RBQVNBLENBQUM7UUFDUm9CLFNBQVNDLE9BQU8sRUFBRUMsaUJBQWlCLFlBQVlOO0lBQ2pELEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ087Z0JBQ0NDLFdBQVdyQixHQUFHLFNBQVM7b0JBQUVzQixTQUFTZjtvQkFBV2dCLE9BQU9kO2dCQUFVO2dCQUM5RGUsTUFBTXBCO2dCQUNORSxhQUFhQTtnQkFDYm1CLEtBQUtSO2dCQUNMUyxTQUFTO29CQUNQbEIsYUFBYTtnQkFDZjtnQkFDQW1CLFFBQVE7b0JBQ05uQixhQUFhO2dCQUNmOzs7Ozs7MEJBRUYsOERBQUNvQjtnQkFBRVAsV0FBV3JCLEdBQUc7b0JBQUUsaUJBQWlCUztnQkFBVTswQkFBS0U7Ozs7Ozs7O0FBR3pELEVBQUU7R0F0RFdUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VpLWlucHV0L0lucHV0LnRzeD9lZWY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1leHBlY3QtZXJyb3JcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9JbnB1dC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHN0eWxlcyk7XG5cbnR5cGUgSW5wdXRQcm9wcyA9IHtcbiAgcGFzc3dvcmQ6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgSW5wdXQ6IGFueSA9ICh7IHBhc3N3b3JkIH06IElucHV0UHJvcHMpID0+IHtcbiAgY29uc3QgaW5wdXRUeXBlID0gcGFzc3dvcmQgPyBcInBhc3N3b3JkXCIgOiBcImVtYWlsXCI7XG5cbiAgLy8g7YOA7J6F67OEIHBsYWNlaG9sZGVyXG4gIGNvbnN0IHNldFBsYWNlaG9sZGVyOiBhbnkgPSAoKSA9PiB7XG4gICAgaWYgKGlucHV0VHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICByZXR1cm4gXCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalFwiO1xuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSBcImVtYWlsXCIpIHtcbiAgICAgIHJldHVybiBcImNvZGVpdEBjb2RlaXQuY29tXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gc2V0UGxhY2Vob2xkZXIoKTtcblxuICAvLyBmb2N1cyDsi5wg7YyM656AIO2FjOuRkOumrFxuICBjb25zdCBbaXNGb2N1c2VkLCBzZXRJc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIOu5qOqwhOyDiSDthYzrkZDrpqzsmYAg7JeQ65+s66mU7IS47KeAXG4gIGNvbnN0IFtpc0Vycm9yZWQsIHNldElzRXJyb3JlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVFcnJvciA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBzZXRJc0Vycm9yZWQodHJ1ZSk7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCLrgrTsmqnsnYQg64uk7IucIOyekeyEse2VtOyjvOyEuOyalFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNFcnJvcmVkKGZhbHNlKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlucHV0UmVmLmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVFcnJvcik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtjeChcImlucHV0XCIsIHsgZm9jdXNlZDogaXNGb2N1c2VkLCBlcnJvcjogaXNFcnJvcmVkIH0pfVxuICAgICAgICB0eXBlPXtpbnB1dFR5cGV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgb25Gb2N1cz17KCkgPT4ge1xuICAgICAgICAgIHNldElzRm9jdXNlZCh0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25CbHVyPXsoKSA9PiB7XG4gICAgICAgICAgc2V0SXNGb2N1c2VkKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8cCBjbGFzc05hbWU9e2N4KHsgXCJlcnJvci1tZXNzYWdlXCI6IGlzRXJyb3JlZCB9KX0+e2Vycm9yTWVzc2FnZX08L3A+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsImNsYXNzTmFtZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImN4IiwiYmluZCIsIklucHV0IiwicGFzc3dvcmQiLCJpbnB1dFR5cGUiLCJzZXRQbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyIiwiaXNGb2N1c2VkIiwic2V0SXNGb2N1c2VkIiwiaXNFcnJvcmVkIiwic2V0SXNFcnJvcmVkIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaGFuZGxlRXJyb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5wdXQiLCJjbGFzc05hbWUiLCJmb2N1c2VkIiwiZXJyb3IiLCJ0eXBlIiwicmVmIiwib25Gb2N1cyIsIm9uQmx1ciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ui-input/Input.tsx\n"));

/***/ })

});