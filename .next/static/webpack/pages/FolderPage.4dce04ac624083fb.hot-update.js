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

/***/ "./src/folder/feature-folder-tool-bar/FolderToolBar.tsx":
/*!**************************************************************!*\
  !*** ./src/folder/feature-folder-tool-bar/FolderToolBar.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FolderToolBar: function() { return /* binding */ FolderToolBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FolderToolBar_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FolderToolBar.module.scss */ \"./src/folder/feature-folder-tool-bar/FolderToolBar.module.scss\");\n/* harmony import */ var _FolderToolBar_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_FolderToolBar_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var folder_ui_folder_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! folder/ui-folder-button */ \"./src/folder/ui-folder-button/index.js\");\n/* harmony import */ var sharing_ui_icon_and_text_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sharing/ui-icon-and-text-button */ \"./src/sharing/ui-icon-and-text-button/index.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ \"./src/folder/feature-folder-tool-bar/constant.js\");\n/* harmony import */ var link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! link/data-access-link/constant */ \"./src/link/data-access-link/constant.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var folder_ui_share_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! folder/ui-share-modal */ \"./src/folder/ui-share-modal/index.js\");\n/* harmony import */ var sharing_ui_input_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sharing/ui-input-modal */ \"./src/sharing/ui-input-modal/index.js\");\n/* harmony import */ var sharing_ui_alert_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sharing/ui-alert-modal */ \"./src/sharing/ui-alert-modal/index.js\");\n/* harmony import */ var sharing_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sharing/util */ \"./src/sharing/util/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_FolderToolBar_module_scss__WEBPACK_IMPORTED_MODULE_11___default()));\nconst FolderToolBar = ({ folders, selectedFolderId, onFolderClick })=>{\n    _s();\n    const { shareKakao } = (0,sharing_util__WEBPACK_IMPORTED_MODULE_10__.useKakaoSdk)();\n    const [currentModal, setCurrentModal] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const folderName = link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_5__.ALL_LINKS_ID === selectedFolderId ? _constant__WEBPACK_IMPORTED_MODULE_4__.ALL_LINKS_TEXT : folders?.find(({ id })=>id === selectedFolderId)?.name ?? \"\";\n    // const shareLink = `${window.location.origin}/shared?user=1&folder=${selectedFolderId}`;\n    const closeModal = ()=>setCurrentModal(null);\n    const handleKeyDown = (event)=>{\n        if (event.key === \"Escape\") {\n            closeModal();\n        }\n    };\n    // const handleKakaoClick = () => {\n    //   shareKakao({ url: shareLink, ...KAKAO_SHARE_DATA });\n    // };\n    // const handleFacebookClick = () =>\n    //   window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);\n    // const handleLinkCopyClick = () => copyToClipboard(shareLink);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: cx(\"container\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cx(\"folders\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(folder_ui_folder_button__WEBPACK_IMPORTED_MODULE_2__.FolderButton, {\n                        text: _constant__WEBPACK_IMPORTED_MODULE_4__.ALL_LINKS_TEXT,\n                        onClick: ()=>onFolderClick(link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_5__.ALL_LINKS_ID),\n                        isSelected: link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_5__.ALL_LINKS_ID === selectedFolderId\n                    }, link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_5__.ALL_LINKS_ID, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    folders?.map(({ id, name })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(folder_ui_folder_button__WEBPACK_IMPORTED_MODULE_2__.FolderButton, {\n                            text: name,\n                            onClick: ()=>onFolderClick(id),\n                            isSelected: id === selectedFolderId\n                        }, id, false, {\n                            fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: cx(\"folder-name\"),\n                children: folderName\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            selectedFolderId !== link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_5__.ALL_LINKS_ID && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cx(\"buttons\"),\n                children: [\n                    _constant__WEBPACK_IMPORTED_MODULE_4__.BUTTONS.map(({ text, iconSource, modalId })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sharing_ui_icon_and_text_button__WEBPACK_IMPORTED_MODULE_3__.IconAndTextButton, {\n                            text: text,\n                            iconSource: iconSource,\n                            onClick: ()=>setCurrentModal(modalId)\n                        }, text, false, {\n                            fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(folder_ui_share_modal__WEBPACK_IMPORTED_MODULE_7__.ShareModal, {\n                        isOpen: currentModal === _constant__WEBPACK_IMPORTED_MODULE_4__.MODALS_ID.share,\n                        folderName: folderName,\n                        onKakaoClick: handleKakaoClick,\n                        onFacebookClick: handleFacebookClick,\n                        onLinkCopyClick: handleLinkCopyClick,\n                        onCloseClick: closeModal,\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sharing_ui_input_modal__WEBPACK_IMPORTED_MODULE_8__.InputModal, {\n                        isOpen: currentModal === _constant__WEBPACK_IMPORTED_MODULE_4__.MODALS_ID.rename,\n                        title: \"폴더 이름 변경\",\n                        placeholder: \"내용 입력\",\n                        buttonText: \"변경하기\",\n                        onCloseClick: closeModal,\n                        onKeyDown: handleKeyDown,\n                        value: inputValue,\n                        onChange: (event)=>setInputValue(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sharing_ui_alert_modal__WEBPACK_IMPORTED_MODULE_9__.AlertModal, {\n                        isOpen: currentModal === _constant__WEBPACK_IMPORTED_MODULE_4__.MODALS_ID.delete,\n                        title: \"폴더 삭제\",\n                        description: folderName,\n                        buttonText: \"삭제하기\",\n                        onCloseClick: closeModal,\n                        onKeyDown: handleKeyDown,\n                        onClick: ()=>{}\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FolderToolBar, \"+IHPRmPuJ+Zm73V0BS3GXD96yc0=\", false, function() {\n    return [\n        sharing_util__WEBPACK_IMPORTED_MODULE_10__.useKakaoSdk\n    ];\n});\n_c = FolderToolBar;\nvar _c;\n$RefreshReg$(_c, \"FolderToolBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9sZGVyL2ZlYXR1cmUtZm9sZGVyLXRvb2wtYmFyL0ZvbGRlclRvb2xCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDUjtBQUVjO0FBQ2E7QUFNaEQ7QUFDMEM7QUFDZDtBQUNHO0FBQ0M7QUFDQTtBQUVRO0FBRTVELE1BQU1hLEtBQUtaLDJEQUFlLENBQUNELG9FQUFNQTtBQVExQixNQUFNZSxnQkFBZ0IsQ0FBQyxFQUM1QkMsT0FBTyxFQUNQQyxnQkFBZ0IsRUFDaEJDLGFBQWEsRUFDTTs7SUFDbkIsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR1AsMERBQVdBO0lBQ2xDLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFnQjtJQUNoRSxNQUFNLENBQUNjLFlBQVlDLGNBQWMsR0FBR2YsK0NBQVFBLENBQVM7SUFFckQsTUFBTWdCLGFBQ0pqQix3RUFBWUEsS0FBS1UsbUJBQ2JiLHFEQUFjQSxHQUNkWSxTQUFTUyxLQUFLLENBQUMsRUFBRUMsRUFBRSxFQUFFLEdBQUtBLE9BQU9ULG1CQUFtQlUsUUFBUTtJQUNsRSwwRkFBMEY7SUFFMUYsTUFBTUMsYUFBYSxJQUFNUCxnQkFBZ0I7SUFDekMsTUFBTVEsZ0JBQWdCLENBQUNDO1FBQ3JCLElBQUlBLE1BQU1DLEdBQUcsS0FBSyxVQUFVO1lBQzFCSDtRQUNGO0lBQ0Y7SUFDQSxtQ0FBbUM7SUFDbkMseURBQXlEO0lBQ3pELEtBQUs7SUFDTCxvQ0FBb0M7SUFDcEMsc0VBQXNFO0lBQ3RFLGdFQUFnRTtJQUVoRSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBV3BCLEdBQUc7OzBCQUNqQiw4REFBQ21CO2dCQUFJQyxXQUFXcEIsR0FBRzs7a0NBQ2pCLDhEQUFDWCxpRUFBWUE7d0JBRVhnQyxNQUFNOUIscURBQWNBO3dCQUNwQitCLFNBQVMsSUFBTWpCLGNBQWNYLHdFQUFZQTt3QkFDekM2QixZQUFZN0Isd0VBQVlBLEtBQUtVO3VCQUh4QlYsd0VBQVlBOzs7OztvQkFLbEJTLFNBQVNxQixJQUFJLENBQUMsRUFBRVgsRUFBRSxFQUFFQyxJQUFJLEVBQUUsaUJBQ3pCLDhEQUFDekIsaUVBQVlBOzRCQUVYZ0MsTUFBTVA7NEJBQ05RLFNBQVMsSUFBTWpCLGNBQWNROzRCQUM3QlUsWUFBWVYsT0FBT1Q7MkJBSGRTOzs7Ozs7Ozs7OzswQkFvQlgsOERBQUNZO2dCQUFHTCxXQUFXcEIsR0FBRzswQkFBaUJXOzs7Ozs7WUFDbENQLHFCQUFxQlYsd0VBQVlBLGtCQUNoQyw4REFBQ3lCO2dCQUFJQyxXQUFXcEIsR0FBRzs7b0JBQ2hCUiw4Q0FBT0EsQ0FBQ2dDLEdBQUcsQ0FBQyxDQUFDLEVBQUVILElBQUksRUFBRUssVUFBVSxFQUFFQyxPQUFPLEVBQUUsaUJBQ3pDLDhEQUFDckMsOEVBQWlCQTs0QkFFaEIrQixNQUFNQTs0QkFDTkssWUFBWUE7NEJBQ1pKLFNBQVMsSUFBTWQsZ0JBQWdCbUI7MkJBSDFCTjs7Ozs7a0NBTVQsOERBQUN6Qiw2REFBVUE7d0JBQ1RnQyxRQUFRckIsaUJBQWlCZCxnREFBU0EsQ0FBQ29DLEtBQUs7d0JBQ3hDbEIsWUFBWUE7d0JBQ1ptQixjQUFjQzt3QkFDZEMsaUJBQWlCQzt3QkFDakJDLGlCQUFpQkM7d0JBQ2pCQyxjQUFjckI7d0JBQ2RzQixXQUFXckI7Ozs7OztrQ0FFYiw4REFBQ25CLDhEQUFVQTt3QkFDVCtCLFFBQVFyQixpQkFBaUJkLGdEQUFTQSxDQUFDNkMsTUFBTTt3QkFDekNDLE9BQU07d0JBQ05DLGFBQVk7d0JBQ1pDLFlBQVc7d0JBQ1hMLGNBQWNyQjt3QkFDZHNCLFdBQVdyQjt3QkFDWDBCLE9BQU9qQzt3QkFDUGtDLFVBQVUsQ0FBQzFCLFFBQVVQLGNBQWNPLE1BQU0yQixNQUFNLENBQUNGLEtBQUs7Ozs7OztrQ0FFdkQsOERBQUM1Qyw4REFBVUE7d0JBQ1Q4QixRQUFRckIsaUJBQWlCZCxnREFBU0EsQ0FBQ29ELE1BQU07d0JBQ3pDTixPQUFNO3dCQUNOTyxhQUFhbkM7d0JBQ2I4QixZQUFXO3dCQUNYTCxjQUFjckI7d0JBQ2RzQixXQUFXckI7d0JBQ1hNLFNBQVMsS0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCLEVBQUU7R0F0R1dwQjs7UUFLWUgsc0RBQVdBOzs7S0FMdkJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mb2xkZXIvZmVhdHVyZS1mb2xkZXItdG9vbC1iYXIvRm9sZGVyVG9vbEJhci50c3g/MzM0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0ZvbGRlclRvb2xCYXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcbmltcG9ydCB7IEFkZEZvbGRlckJ1dHRvbiB9IGZyb20gXCJmb2xkZXIvdWktYWRkLWZvbGRlci1idXR0b25cIjtcbmltcG9ydCB7IEZvbGRlckJ1dHRvbiB9IGZyb20gXCJmb2xkZXIvdWktZm9sZGVyLWJ1dHRvblwiO1xuaW1wb3J0IHsgSWNvbkFuZFRleHRCdXR0b24gfSBmcm9tIFwic2hhcmluZy91aS1pY29uLWFuZC10ZXh0LWJ1dHRvblwiO1xuaW1wb3J0IHtcbiAgQUxMX0xJTktTX1RFWFQsXG4gIEJVVFRPTlMsXG4gIEtBS0FPX1NIQVJFX0RBVEEsXG4gIE1PREFMU19JRCxcbn0gZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCB7IEFMTF9MSU5LU19JRCB9IGZyb20gXCJsaW5rL2RhdGEtYWNjZXNzLWxpbmsvY29uc3RhbnRcIjtcbmltcG9ydCB7IEtleWJvYXJkRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTaGFyZU1vZGFsIH0gZnJvbSBcImZvbGRlci91aS1zaGFyZS1tb2RhbFwiO1xuaW1wb3J0IHsgSW5wdXRNb2RhbCB9IGZyb20gXCJzaGFyaW5nL3VpLWlucHV0LW1vZGFsXCI7XG5pbXBvcnQgeyBBbGVydE1vZGFsIH0gZnJvbSBcInNoYXJpbmcvdWktYWxlcnQtbW9kYWxcIjtcbmltcG9ydCB7IEZvbGRlciwgU2VsZWN0ZWRGb2xkZXJJZCB9IGZyb20gXCJmb2xkZXIvdHlwZVwiO1xuaW1wb3J0IHsgY29weVRvQ2xpcGJvYXJkLCB1c2VLYWthb1NkayB9IGZyb20gXCJzaGFyaW5nL3V0aWxcIjtcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQoc3R5bGVzKTtcblxudHlwZSBGb2xkZXJUb29sQmFyUHJvcHMgPSB7XG4gIGZvbGRlcnM6IEZvbGRlcltdO1xuICBzZWxlY3RlZEZvbGRlcklkOiBTZWxlY3RlZEZvbGRlcklkO1xuICBvbkZvbGRlckNsaWNrOiAoZm9sZGVySWQ6IFNlbGVjdGVkRm9sZGVySWQpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgRm9sZGVyVG9vbEJhciA9ICh7XG4gIGZvbGRlcnMsXG4gIHNlbGVjdGVkRm9sZGVySWQsXG4gIG9uRm9sZGVyQ2xpY2ssXG59OiBGb2xkZXJUb29sQmFyUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaGFyZUtha2FvIH0gPSB1c2VLYWthb1NkaygpO1xuICBjb25zdCBbY3VycmVudE1vZGFsLCBzZXRDdXJyZW50TW9kYWxdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgY29uc3QgZm9sZGVyTmFtZSA9XG4gICAgQUxMX0xJTktTX0lEID09PSBzZWxlY3RlZEZvbGRlcklkXG4gICAgICA/IEFMTF9MSU5LU19URVhUXG4gICAgICA6IGZvbGRlcnM/LmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHNlbGVjdGVkRm9sZGVySWQpPy5uYW1lID8/IFwiXCI7XG4gIC8vIGNvbnN0IHNoYXJlTGluayA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3NoYXJlZD91c2VyPTEmZm9sZGVyPSR7c2VsZWN0ZWRGb2xkZXJJZH1gO1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiBzZXRDdXJyZW50TW9kYWwobnVsbCk7XG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfTtcbiAgLy8gY29uc3QgaGFuZGxlS2FrYW9DbGljayA9ICgpID0+IHtcbiAgLy8gICBzaGFyZUtha2FvKHsgdXJsOiBzaGFyZUxpbmssIC4uLktBS0FPX1NIQVJFX0RBVEEgfSk7XG4gIC8vIH07XG4gIC8vIGNvbnN0IGhhbmRsZUZhY2Vib29rQ2xpY2sgPSAoKSA9PlxuICAvLyAgIHdpbmRvdy5vcGVuKGBodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwP3U9JHtzaGFyZUxpbmt9YCk7XG4gIC8vIGNvbnN0IGhhbmRsZUxpbmtDb3B5Q2xpY2sgPSAoKSA9PiBjb3B5VG9DbGlwYm9hcmQoc2hhcmVMaW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcImNvbnRhaW5lclwiKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJmb2xkZXJzXCIpfT5cbiAgICAgICAgPEZvbGRlckJ1dHRvblxuICAgICAgICAgIGtleT17QUxMX0xJTktTX0lEfVxuICAgICAgICAgIHRleHQ9e0FMTF9MSU5LU19URVhUfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRm9sZGVyQ2xpY2soQUxMX0xJTktTX0lEKX1cbiAgICAgICAgICBpc1NlbGVjdGVkPXtBTExfTElOS1NfSUQgPT09IHNlbGVjdGVkRm9sZGVySWR9XG4gICAgICAgIC8+XG4gICAgICAgIHtmb2xkZXJzPy5tYXAoKHsgaWQsIG5hbWUgfSkgPT4gKFxuICAgICAgICAgIDxGb2xkZXJCdXR0b25cbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICB0ZXh0PXtuYW1lfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Gb2xkZXJDbGljayhpZCl9XG4gICAgICAgICAgICBpc1NlbGVjdGVkPXtpZCA9PT0gc2VsZWN0ZWRGb2xkZXJJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjeChcImFkZC1idXR0b25cIil9PlxuICAgICAgICA8QWRkRm9sZGVyQnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRNb2RhbChNT0RBTFNfSUQuYWRkRm9sZGVyKX0gLz5cbiAgICAgICAgPElucHV0TW9kYWxcbiAgICAgICAgICBpc09wZW49e2N1cnJlbnRNb2RhbCA9PT0gTU9EQUxTX0lELmFkZEZvbGRlcn1cbiAgICAgICAgICB0aXRsZT1cIu2PtOuNlCDstpTqsIBcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64K07JqpIOyeheugpVwiXG4gICAgICAgICAgYnV0dG9uVGV4dD1cIuy2lOqwgO2VmOq4sFwiXG4gICAgICAgICAgb25DbG9zZUNsaWNrPXtjbG9zZU1vZGFsfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8aDIgY2xhc3NOYW1lPXtjeChcImZvbGRlci1uYW1lXCIpfT57Zm9sZGVyTmFtZX08L2gyPlxuICAgICAge3NlbGVjdGVkRm9sZGVySWQgIT09IEFMTF9MSU5LU19JRCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcImJ1dHRvbnNcIil9PlxuICAgICAgICAgIHtCVVRUT05TLm1hcCgoeyB0ZXh0LCBpY29uU291cmNlLCBtb2RhbElkIH0pID0+IChcbiAgICAgICAgICAgIDxJY29uQW5kVGV4dEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e3RleHR9XG4gICAgICAgICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgIGljb25Tb3VyY2U9e2ljb25Tb3VyY2V9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRNb2RhbChtb2RhbElkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFNoYXJlTW9kYWxcbiAgICAgICAgICAgIGlzT3Blbj17Y3VycmVudE1vZGFsID09PSBNT0RBTFNfSUQuc2hhcmV9XG4gICAgICAgICAgICBmb2xkZXJOYW1lPXtmb2xkZXJOYW1lfVxuICAgICAgICAgICAgb25LYWthb0NsaWNrPXtoYW5kbGVLYWthb0NsaWNrfVxuICAgICAgICAgICAgb25GYWNlYm9va0NsaWNrPXtoYW5kbGVGYWNlYm9va0NsaWNrfVxuICAgICAgICAgICAgb25MaW5rQ29weUNsaWNrPXtoYW5kbGVMaW5rQ29weUNsaWNrfVxuICAgICAgICAgICAgb25DbG9zZUNsaWNrPXtjbG9zZU1vZGFsfVxuICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPElucHV0TW9kYWxcbiAgICAgICAgICAgIGlzT3Blbj17Y3VycmVudE1vZGFsID09PSBNT0RBTFNfSUQucmVuYW1lfVxuICAgICAgICAgICAgdGl0bGU9XCLtj7TrjZQg7J2066aEIOuzgOqyvVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuCtOyaqSDsnoXroKVcIlxuICAgICAgICAgICAgYnV0dG9uVGV4dD1cIuuzgOqyve2VmOq4sFwiXG4gICAgICAgICAgICBvbkNsb3NlQ2xpY2s9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldElucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBbGVydE1vZGFsXG4gICAgICAgICAgICBpc09wZW49e2N1cnJlbnRNb2RhbCA9PT0gTU9EQUxTX0lELmRlbGV0ZX1cbiAgICAgICAgICAgIHRpdGxlPVwi7Y+0642UIOyCreygnFwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17Zm9sZGVyTmFtZX1cbiAgICAgICAgICAgIGJ1dHRvblRleHQ9XCLsgq3soJztlZjquLBcIlxuICAgICAgICAgICAgb25DbG9zZUNsaWNrPXtjbG9zZU1vZGFsfVxuICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwiRm9sZGVyQnV0dG9uIiwiSWNvbkFuZFRleHRCdXR0b24iLCJBTExfTElOS1NfVEVYVCIsIkJVVFRPTlMiLCJNT0RBTFNfSUQiLCJBTExfTElOS1NfSUQiLCJ1c2VTdGF0ZSIsIlNoYXJlTW9kYWwiLCJJbnB1dE1vZGFsIiwiQWxlcnRNb2RhbCIsInVzZUtha2FvU2RrIiwiY3giLCJiaW5kIiwiRm9sZGVyVG9vbEJhciIsImZvbGRlcnMiLCJzZWxlY3RlZEZvbGRlcklkIiwib25Gb2xkZXJDbGljayIsInNoYXJlS2FrYW8iLCJjdXJyZW50TW9kYWwiLCJzZXRDdXJyZW50TW9kYWwiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImZvbGRlck5hbWUiLCJmaW5kIiwiaWQiLCJuYW1lIiwiY2xvc2VNb2RhbCIsImhhbmRsZUtleURvd24iLCJldmVudCIsImtleSIsImRpdiIsImNsYXNzTmFtZSIsInRleHQiLCJvbkNsaWNrIiwiaXNTZWxlY3RlZCIsIm1hcCIsImgyIiwiaWNvblNvdXJjZSIsIm1vZGFsSWQiLCJpc09wZW4iLCJzaGFyZSIsIm9uS2FrYW9DbGljayIsImhhbmRsZUtha2FvQ2xpY2siLCJvbkZhY2Vib29rQ2xpY2siLCJoYW5kbGVGYWNlYm9va0NsaWNrIiwib25MaW5rQ29weUNsaWNrIiwiaGFuZGxlTGlua0NvcHlDbGljayIsIm9uQ2xvc2VDbGljayIsIm9uS2V5RG93biIsInJlbmFtZSIsInRpdGxlIiwicGxhY2Vob2xkZXIiLCJidXR0b25UZXh0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImRlbGV0ZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/folder/feature-folder-tool-bar/FolderToolBar.tsx\n"));

/***/ })

});