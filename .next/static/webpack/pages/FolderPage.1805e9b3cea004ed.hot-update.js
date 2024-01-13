"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/FolderPage",{

/***/ "./src/pages/FolderPage.tsx":
/*!**********************************!*\
  !*** ./src/pages/FolderPage.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FolderPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var folder_data_access_folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! folder/data-access-folder */ \"./src/folder/data-access-folder/index.js\");\n/* harmony import */ var link_data_access_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! link/data-access-link */ \"./src/link/data-access-link/index.js\");\n/* harmony import */ var sharing_feature_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sharing/feature-layout */ \"./src/sharing/feature-layout/index.js\");\n/* harmony import */ var page_layout_FolderLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! page-layout/FolderLayout */ \"./src/page-layout/FolderLayout/index.js\");\n/* harmony import */ var folder_feature_folder_tool_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! folder/feature-folder-tool-bar */ \"./src/folder/feature-folder-tool-bar/index.js\");\n/* harmony import */ var link_ui_search_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! link/ui-search-bar */ \"./src/link/ui-search-bar/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! link/data-access-link/constant */ \"./src/link/data-access-link/constant.js\");\n/* harmony import */ var link_feature_link_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! link/feature-link-form */ \"./src/link/feature-link-form/index.js\");\n/* harmony import */ var link_feature_card_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! link/feature-card-list */ \"./src/link/feature-card-list/index.js\");\n/* harmony import */ var link_util_search_link_useSearchLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! link/util-search-link/useSearchLink */ \"./src/link/util-search-link/useSearchLink.ts\");\n/* harmony import */ var sharing_util_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sharing/util/useIntersectionObserver */ \"./src/sharing/util/useIntersectionObserver.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction FolderPage() {\n    _s();\n    const { data: folders } = (0,folder_data_access_folder__WEBPACK_IMPORTED_MODULE_1__.useGetFolders)();\n    const [selectedFolderId, setSelectedFolderId] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_8__.ALL_LINKS_ID);\n    const { data: links, loading } = (0,link_data_access_link__WEBPACK_IMPORTED_MODULE_2__.useGetLinks)(selectedFolderId);\n    const { searchValue, handleChange, handleCloseClick, result } = (0,link_util_search_link_useSearchLink__WEBPACK_IMPORTED_MODULE_11__.useSearchLink)(links);\n    const { ref, isIntersecting } = (0,sharing_util_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_12__.useIntersectionObserver)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sharing_feature_layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        isSticky: false,\n        footerRef: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(page_layout_FolderLayout__WEBPACK_IMPORTED_MODULE_4__.FolderLayout, {\n            linkForm: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(link_feature_link_form__WEBPACK_IMPORTED_MODULE_9__.LinkForm, {\n                hideFixedLinkForm: isIntersecting\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/pages/FolderPage.tsx\",\n                lineNumber: 27,\n                columnNumber: 19\n            }, void 0),\n            searchBar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(link_ui_search_bar__WEBPACK_IMPORTED_MODULE_6__.SearchBar, {\n                value: searchValue,\n                onChange: handleChange,\n                onCloseClick: handleCloseClick\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/pages/FolderPage.tsx\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, void 0),\n            folderToolBar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(folder_feature_folder_tool_bar__WEBPACK_IMPORTED_MODULE_5__.FolderToolBar, {\n                // folders={folders}\n                selectedFolderId: selectedFolderId,\n                onFolderClick: setSelectedFolderId\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/pages/FolderPage.tsx\",\n                lineNumber: 36,\n                columnNumber: 11\n            }, void 0),\n            cardList: loading ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(link_feature_card_list__WEBPACK_IMPORTED_MODULE_10__.CardList, {\n                links: result\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/pages/FolderPage.tsx\",\n                lineNumber: 42,\n                columnNumber: 36\n            }, void 0)\n        }, void 0, false, {\n            fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/pages/FolderPage.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/pages/FolderPage.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(FolderPage, \"7e22s4KNlu7nxZWKgGsVzYCyA90=\", false, function() {\n    return [\n        folder_data_access_folder__WEBPACK_IMPORTED_MODULE_1__.useGetFolders,\n        link_data_access_link__WEBPACK_IMPORTED_MODULE_2__.useGetLinks,\n        link_util_search_link_useSearchLink__WEBPACK_IMPORTED_MODULE_11__.useSearchLink,\n        sharing_util_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_12__.useIntersectionObserver\n    ];\n});\n_c = FolderPage;\nvar _c;\n$RefreshReg$(_c, \"FolderPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRm9sZGVyUGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ047QUFDSjtBQUNRO0FBQ087QUFDaEI7QUFDZDtBQUM2QjtBQUNaO0FBQ0E7QUFFa0I7QUFDVztBQUVoRSxTQUFTWTs7SUFDdEIsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR2Qsd0VBQWFBO0lBQ3ZDLE1BQU0sQ0FBQ2Usa0JBQWtCQyxvQkFBb0IsR0FDM0NWLCtDQUFRQSxDQUFtQkMsd0VBQVlBO0lBQ3pDLE1BQU0sRUFBRU0sTUFBTUksS0FBSyxFQUFFQyxPQUFPLEVBQUUsR0FBR2pCLGtFQUFXQSxDQUFDYztJQUM3QyxNQUFNLEVBQUVJLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxnQkFBZ0IsRUFBRUMsTUFBTSxFQUFFLEdBQzNEWixtRkFBYUEsQ0FBQ087SUFDaEIsTUFBTSxFQUFFTSxHQUFHLEVBQUVDLGNBQWMsRUFBRSxHQUFHYiw4RkFBdUJBO0lBRXZELHFCQUNFLDhEQUFDVCwwREFBTUE7UUFBQ3VCLFVBQVU7UUFBT0MsV0FBV0g7a0JBQ2xDLDRFQUFDcEIsa0VBQVlBO1lBQ1h3Qix3QkFBVSw4REFBQ25CLDREQUFRQTtnQkFBQ29CLG1CQUFtQko7Ozs7OztZQUN2Q0sseUJBQ0UsOERBQUN4Qix5REFBU0E7Z0JBQ1J5QixPQUFPWDtnQkFDUFksVUFBVVg7Z0JBQ1ZZLGNBQWNYOzs7Ozs7WUFHbEJZLDZCQUNFLDhEQUFDN0IseUVBQWFBO2dCQUNaLG9CQUFvQjtnQkFDcEJXLGtCQUFrQkE7Z0JBQ2xCbUIsZUFBZWxCOzs7Ozs7WUFHbkJtQixVQUFVakIsVUFBVSxxQkFBTyw4REFBQ1QsNkRBQVFBO2dCQUFDUSxPQUFPSzs7Ozs7Ozs7Ozs7Ozs7OztBQUlwRDtHQS9Cd0JWOztRQUNJWixvRUFBYUE7UUFHTkMsOERBQVdBO1FBRTFDUywrRUFBYUE7UUFDaUJDLDBGQUF1QkE7OztLQVBqQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0ZvbGRlclBhZ2UudHN4PzFkZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlR2V0Rm9sZGVycyB9IGZyb20gXCJmb2xkZXIvZGF0YS1hY2Nlc3MtZm9sZGVyXCI7XG5pbXBvcnQgeyB1c2VHZXRMaW5rcyB9IGZyb20gXCJsaW5rL2RhdGEtYWNjZXNzLWxpbmtcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCJzaGFyaW5nL2ZlYXR1cmUtbGF5b3V0XCI7XG5pbXBvcnQgeyBGb2xkZXJMYXlvdXQgfSBmcm9tIFwicGFnZS1sYXlvdXQvRm9sZGVyTGF5b3V0XCI7XG5pbXBvcnQgeyBGb2xkZXJUb29sQmFyIH0gZnJvbSBcImZvbGRlci9mZWF0dXJlLWZvbGRlci10b29sLWJhclwiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcImxpbmsvdWktc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFMTF9MSU5LU19JRCB9IGZyb20gXCJsaW5rL2RhdGEtYWNjZXNzLWxpbmsvY29uc3RhbnRcIjtcbmltcG9ydCB7IExpbmtGb3JtIH0gZnJvbSBcImxpbmsvZmVhdHVyZS1saW5rLWZvcm1cIjtcbmltcG9ydCB7IENhcmRMaXN0IH0gZnJvbSBcImxpbmsvZmVhdHVyZS1jYXJkLWxpc3RcIjtcbmltcG9ydCB7IFNlbGVjdGVkRm9sZGVySWQgfSBmcm9tIFwiZm9sZGVyL3R5cGVcIjtcbmltcG9ydCB7IHVzZVNlYXJjaExpbmsgfSBmcm9tIFwibGluay91dGlsLXNlYXJjaC1saW5rL3VzZVNlYXJjaExpbmtcIjtcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbk9ic2VydmVyIH0gZnJvbSBcInNoYXJpbmcvdXRpbC91c2VJbnRlcnNlY3Rpb25PYnNlcnZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb2xkZXJQYWdlKCkge1xuICBjb25zdCB7IGRhdGE6IGZvbGRlcnMgfSA9IHVzZUdldEZvbGRlcnMoKTtcbiAgY29uc3QgW3NlbGVjdGVkRm9sZGVySWQsIHNldFNlbGVjdGVkRm9sZGVySWRdID1cbiAgICB1c2VTdGF0ZTxTZWxlY3RlZEZvbGRlcklkPihBTExfTElOS1NfSUQpO1xuICBjb25zdCB7IGRhdGE6IGxpbmtzLCBsb2FkaW5nIH0gPSB1c2VHZXRMaW5rcyhzZWxlY3RlZEZvbGRlcklkKTtcbiAgY29uc3QgeyBzZWFyY2hWYWx1ZSwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVDbG9zZUNsaWNrLCByZXN1bHQgfSA9XG4gICAgdXNlU2VhcmNoTGluayhsaW5rcyk7XG4gIGNvbnN0IHsgcmVmLCBpc0ludGVyc2VjdGluZyB9ID0gdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXI8SFRNTERpdkVsZW1lbnQ+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGlzU3RpY2t5PXtmYWxzZX0gZm9vdGVyUmVmPXtyZWZ9PlxuICAgICAgPEZvbGRlckxheW91dFxuICAgICAgICBsaW5rRm9ybT17PExpbmtGb3JtIGhpZGVGaXhlZExpbmtGb3JtPXtpc0ludGVyc2VjdGluZ30gLz59XG4gICAgICAgIHNlYXJjaEJhcj17XG4gICAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG9uQ2xvc2VDbGljaz17aGFuZGxlQ2xvc2VDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICAgIGZvbGRlclRvb2xCYXI9e1xuICAgICAgICAgIDxGb2xkZXJUb29sQmFyXG4gICAgICAgICAgICAvLyBmb2xkZXJzPXtmb2xkZXJzfVxuICAgICAgICAgICAgc2VsZWN0ZWRGb2xkZXJJZD17c2VsZWN0ZWRGb2xkZXJJZH1cbiAgICAgICAgICAgIG9uRm9sZGVyQ2xpY2s9e3NldFNlbGVjdGVkRm9sZGVySWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgICBjYXJkTGlzdD17bG9hZGluZyA/IG51bGwgOiA8Q2FyZExpc3QgbGlua3M9e3Jlc3VsdH0gLz59XG4gICAgICAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUdldEZvbGRlcnMiLCJ1c2VHZXRMaW5rcyIsIkxheW91dCIsIkZvbGRlckxheW91dCIsIkZvbGRlclRvb2xCYXIiLCJTZWFyY2hCYXIiLCJ1c2VTdGF0ZSIsIkFMTF9MSU5LU19JRCIsIkxpbmtGb3JtIiwiQ2FyZExpc3QiLCJ1c2VTZWFyY2hMaW5rIiwidXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJGb2xkZXJQYWdlIiwiZGF0YSIsImZvbGRlcnMiLCJzZWxlY3RlZEZvbGRlcklkIiwic2V0U2VsZWN0ZWRGb2xkZXJJZCIsImxpbmtzIiwibG9hZGluZyIsInNlYXJjaFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQ2xvc2VDbGljayIsInJlc3VsdCIsInJlZiIsImlzSW50ZXJzZWN0aW5nIiwiaXNTdGlja3kiLCJmb290ZXJSZWYiLCJsaW5rRm9ybSIsImhpZGVGaXhlZExpbmtGb3JtIiwic2VhcmNoQmFyIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uQ2xvc2VDbGljayIsImZvbGRlclRvb2xCYXIiLCJvbkZvbGRlckNsaWNrIiwiY2FyZExpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/FolderPage.tsx\n"));

/***/ })

});