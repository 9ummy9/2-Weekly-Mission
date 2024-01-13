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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FolderToolBar: function() { return /* binding */ FolderToolBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FolderToolBar_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FolderToolBar.module.scss */ \"./src/folder/feature-folder-tool-bar/FolderToolBar.module.scss\");\n/* harmony import */ var _FolderToolBar_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_FolderToolBar_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var folder_ui_add_folder_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! folder/ui-add-folder-button */ \"./src/folder/ui-add-folder-button/index.js\");\n/* harmony import */ var folder_ui_folder_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! folder/ui-folder-button */ \"./src/folder/ui-folder-button/index.js\");\n/* harmony import */ var sharing_ui_icon_and_text_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sharing/ui-icon-and-text-button */ \"./src/sharing/ui-icon-and-text-button/index.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constant */ \"./src/folder/feature-folder-tool-bar/constant.js\");\n/* harmony import */ var link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! link/data-access-link/constant */ \"./src/link/data-access-link/constant.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var sharing_ui_input_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sharing/ui-input-modal */ \"./src/sharing/ui-input-modal/index.js\");\n/* harmony import */ var sharing_ui_alert_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sharing/ui-alert-modal */ \"./src/sharing/ui-alert-modal/index.js\");\n/* harmony import */ var sharing_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sharing/util */ \"./src/sharing/util/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_FolderToolBar_module_scss__WEBPACK_IMPORTED_MODULE_11___default()));\nconst FolderToolBar = ({ folders, selectedFolderId, onFolderClick })=>{\n    _s();\n    const { shareKakao } = (0,sharing_util__WEBPACK_IMPORTED_MODULE_10__.useKakaoSdk)();\n    const [currentModal, setCurrentModal] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const folderName = link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_6__.ALL_LINKS_ID === selectedFolderId ? _constant__WEBPACK_IMPORTED_MODULE_5__.ALL_LINKS_TEXT : folders?.find(({ id })=>id === selectedFolderId)?.name ?? \"\";\n    // const shareLink = `${window.location.origin}/shared?user=1&folder=${selectedFolderId}`;\n    const closeModal = ()=>setCurrentModal(null);\n    const handleKeyDown = (event)=>{\n        if (event.key === \"Escape\") {\n            closeModal();\n        }\n    };\n    // const handleKakaoClick = () => {\n    //   shareKakao({ url: shareLink, ...KAKAO_SHARE_DATA });\n    // };\n    // const handleFacebookClick = () =>\n    //   window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);\n    // const handleLinkCopyClick = () => copyToClipboard(shareLink);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: cx(\"container\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cx(\"folders\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(folder_ui_folder_button__WEBPACK_IMPORTED_MODULE_3__.FolderButton, {\n                        text: _constant__WEBPACK_IMPORTED_MODULE_5__.ALL_LINKS_TEXT,\n                        onClick: ()=>onFolderClick(link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_6__.ALL_LINKS_ID),\n                        isSelected: link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_6__.ALL_LINKS_ID === selectedFolderId\n                    }, link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_6__.ALL_LINKS_ID, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    folders?.map(({ id, name })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(folder_ui_folder_button__WEBPACK_IMPORTED_MODULE_3__.FolderButton, {\n                            text: name,\n                            onClick: ()=>onFolderClick(id),\n                            isSelected: id === selectedFolderId\n                        }, id, false, {\n                            fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cx(\"add-button\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(folder_ui_add_folder_button__WEBPACK_IMPORTED_MODULE_2__.AddFolderButton, {\n                        onClick: ()=>setCurrentModal(_constant__WEBPACK_IMPORTED_MODULE_5__.MODALS_ID.addFolder)\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sharing_ui_input_modal__WEBPACK_IMPORTED_MODULE_8__.InputModal, {\n                        isOpen: currentModal === _constant__WEBPACK_IMPORTED_MODULE_5__.MODALS_ID.addFolder,\n                        title: \"폴더 추가\",\n                        placeholder: \"내용 입력\",\n                        buttonText: \"추가하기\",\n                        onCloseClick: closeModal,\n                        onKeyDown: handleKeyDown,\n                        value: inputValue,\n                        onChange: (event)=>setInputValue(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: cx(\"folder-name\"),\n                children: folderName\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            selectedFolderId !== link_data_access_link_constant__WEBPACK_IMPORTED_MODULE_6__.ALL_LINKS_ID && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cx(\"buttons\"),\n                children: [\n                    _constant__WEBPACK_IMPORTED_MODULE_5__.BUTTONS.map(({ text, iconSource, modalId })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sharing_ui_icon_and_text_button__WEBPACK_IMPORTED_MODULE_4__.IconAndTextButton, {\n                            text: text,\n                            iconSource: iconSource,\n                            onClick: ()=>setCurrentModal(modalId)\n                        }, text, false, {\n                            fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sharing_ui_input_modal__WEBPACK_IMPORTED_MODULE_8__.InputModal, {\n                        isOpen: currentModal === _constant__WEBPACK_IMPORTED_MODULE_5__.MODALS_ID.rename,\n                        title: \"폴더 이름 변경\",\n                        placeholder: \"내용 입력\",\n                        buttonText: \"변경하기\",\n                        onCloseClick: closeModal,\n                        onKeyDown: handleKeyDown,\n                        value: inputValue,\n                        onChange: (event)=>setInputValue(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sharing_ui_alert_modal__WEBPACK_IMPORTED_MODULE_9__.AlertModal, {\n                        isOpen: currentModal === _constant__WEBPACK_IMPORTED_MODULE_5__.MODALS_ID.delete,\n                        title: \"폴더 삭제\",\n                        description: folderName,\n                        buttonText: \"삭제하기\",\n                        onCloseClick: closeModal,\n                        onKeyDown: handleKeyDown,\n                        onClick: ()=>{}\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/folder/feature-folder-tool-bar/FolderToolBar.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FolderToolBar, \"+IHPRmPuJ+Zm73V0BS3GXD96yc0=\", false, function() {\n    return [\n        sharing_util__WEBPACK_IMPORTED_MODULE_10__.useKakaoSdk\n    ];\n});\n_c = FolderToolBar;\nvar _c;\n$RefreshReg$(_c, \"FolderToolBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9sZGVyL2ZlYXR1cmUtZm9sZGVyLXRvb2wtYmFyL0ZvbGRlclRvb2xCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDUjtBQUNxQjtBQUNQO0FBQ2E7QUFNaEQ7QUFDMEM7QUFDZDtBQUVJO0FBQ0E7QUFFUTtBQUU1RCxNQUFNYSxLQUFLWiwyREFBZSxDQUFDRCxvRUFBTUE7QUFRMUIsTUFBTWUsZ0JBQWdCLENBQUMsRUFDNUJDLE9BQU8sRUFDUEMsZ0JBQWdCLEVBQ2hCQyxhQUFhLEVBQ007O0lBQ25CLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdQLDBEQUFXQTtJQUNsQyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBZ0I7SUFDaEUsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFTO0lBRXJELE1BQU1lLGFBQ0poQix3RUFBWUEsS0FBS1MsbUJBQ2JaLHFEQUFjQSxHQUNkVyxTQUFTUyxLQUFLLENBQUMsRUFBRUMsRUFBRSxFQUFFLEdBQUtBLE9BQU9ULG1CQUFtQlUsUUFBUTtJQUNsRSwwRkFBMEY7SUFFMUYsTUFBTUMsYUFBYSxJQUFNUCxnQkFBZ0I7SUFDekMsTUFBTVEsZ0JBQWdCLENBQUNDO1FBQ3JCLElBQUlBLE1BQU1DLEdBQUcsS0FBSyxVQUFVO1lBQzFCSDtRQUNGO0lBQ0Y7SUFDQSxtQ0FBbUM7SUFDbkMseURBQXlEO0lBQ3pELEtBQUs7SUFDTCxvQ0FBb0M7SUFDcEMsc0VBQXNFO0lBQ3RFLGdFQUFnRTtJQUVoRSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBV3BCLEdBQUc7OzBCQUNqQiw4REFBQ21CO2dCQUFJQyxXQUFXcEIsR0FBRzs7a0NBQ2pCLDhEQUFDVixpRUFBWUE7d0JBRVgrQixNQUFNN0IscURBQWNBO3dCQUNwQjhCLFNBQVMsSUFBTWpCLGNBQWNWLHdFQUFZQTt3QkFDekM0QixZQUFZNUIsd0VBQVlBLEtBQUtTO3VCQUh4QlQsd0VBQVlBOzs7OztvQkFLbEJRLFNBQVNxQixJQUFJLENBQUMsRUFBRVgsRUFBRSxFQUFFQyxJQUFJLEVBQUUsaUJBQ3pCLDhEQUFDeEIsaUVBQVlBOzRCQUVYK0IsTUFBTVA7NEJBQ05RLFNBQVMsSUFBTWpCLGNBQWNROzRCQUM3QlUsWUFBWVYsT0FBT1Q7MkJBSGRTOzs7Ozs7Ozs7OzswQkFPWCw4REFBQ007Z0JBQUlDLFdBQVdwQixHQUFHOztrQ0FDakIsOERBQUNYLHdFQUFlQTt3QkFBQ2lDLFNBQVMsSUFBTWQsZ0JBQWdCZCxnREFBU0EsQ0FBQytCLFNBQVM7Ozs7OztrQ0FDbkUsOERBQUM1Qiw4REFBVUE7d0JBQ1Q2QixRQUFRbkIsaUJBQWlCYixnREFBU0EsQ0FBQytCLFNBQVM7d0JBQzVDRSxPQUFNO3dCQUNOQyxhQUFZO3dCQUNaQyxZQUFXO3dCQUNYQyxjQUFjZjt3QkFDZGdCLFdBQVdmO3dCQUNYZ0IsT0FBT3ZCO3dCQUNQd0IsVUFBVSxDQUFDaEIsUUFBVVAsY0FBY08sTUFBTWlCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUd6RCw4REFBQ0c7Z0JBQUdmLFdBQVdwQixHQUFHOzBCQUFpQlc7Ozs7OztZQUNsQ1AscUJBQXFCVCx3RUFBWUEsa0JBQ2hDLDhEQUFDd0I7Z0JBQUlDLFdBQVdwQixHQUFHOztvQkFDaEJQLDhDQUFPQSxDQUFDK0IsR0FBRyxDQUFDLENBQUMsRUFBRUgsSUFBSSxFQUFFZSxVQUFVLEVBQUVDLE9BQU8sRUFBRSxpQkFDekMsOERBQUM5Qyw4RUFBaUJBOzRCQUVoQjhCLE1BQU1BOzRCQUNOZSxZQUFZQTs0QkFDWmQsU0FBUyxJQUFNZCxnQkFBZ0I2QjsyQkFIMUJoQjs7Ozs7a0NBZVQsOERBQUN4Qiw4REFBVUE7d0JBQ1Q2QixRQUFRbkIsaUJBQWlCYixnREFBU0EsQ0FBQzRDLE1BQU07d0JBQ3pDWCxPQUFNO3dCQUNOQyxhQUFZO3dCQUNaQyxZQUFXO3dCQUNYQyxjQUFjZjt3QkFDZGdCLFdBQVdmO3dCQUNYZ0IsT0FBT3ZCO3dCQUNQd0IsVUFBVSxDQUFDaEIsUUFBVVAsY0FBY08sTUFBTWlCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O2tDQUV2RCw4REFBQ2xDLDhEQUFVQTt3QkFDVDRCLFFBQVFuQixpQkFBaUJiLGdEQUFTQSxDQUFDNkMsTUFBTTt3QkFDekNaLE9BQU07d0JBQ05hLGFBQWE3Qjt3QkFDYmtCLFlBQVc7d0JBQ1hDLGNBQWNmO3dCQUNkZ0IsV0FBV2Y7d0JBQ1hNLFNBQVMsS0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCLEVBQUU7R0F0R1dwQjs7UUFLWUgsc0RBQVdBOzs7S0FMdkJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mb2xkZXIvZmVhdHVyZS1mb2xkZXItdG9vbC1iYXIvRm9sZGVyVG9vbEJhci50c3g/MzM0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0ZvbGRlclRvb2xCYXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcbmltcG9ydCB7IEFkZEZvbGRlckJ1dHRvbiB9IGZyb20gXCJmb2xkZXIvdWktYWRkLWZvbGRlci1idXR0b25cIjtcbmltcG9ydCB7IEZvbGRlckJ1dHRvbiB9IGZyb20gXCJmb2xkZXIvdWktZm9sZGVyLWJ1dHRvblwiO1xuaW1wb3J0IHsgSWNvbkFuZFRleHRCdXR0b24gfSBmcm9tIFwic2hhcmluZy91aS1pY29uLWFuZC10ZXh0LWJ1dHRvblwiO1xuaW1wb3J0IHtcbiAgQUxMX0xJTktTX1RFWFQsXG4gIEJVVFRPTlMsXG4gIEtBS0FPX1NIQVJFX0RBVEEsXG4gIE1PREFMU19JRCxcbn0gZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCB7IEFMTF9MSU5LU19JRCB9IGZyb20gXCJsaW5rL2RhdGEtYWNjZXNzLWxpbmsvY29uc3RhbnRcIjtcbmltcG9ydCB7IEtleWJvYXJkRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTaGFyZU1vZGFsIH0gZnJvbSBcImZvbGRlci91aS1zaGFyZS1tb2RhbFwiO1xuaW1wb3J0IHsgSW5wdXRNb2RhbCB9IGZyb20gXCJzaGFyaW5nL3VpLWlucHV0LW1vZGFsXCI7XG5pbXBvcnQgeyBBbGVydE1vZGFsIH0gZnJvbSBcInNoYXJpbmcvdWktYWxlcnQtbW9kYWxcIjtcbmltcG9ydCB7IEZvbGRlciwgU2VsZWN0ZWRGb2xkZXJJZCB9IGZyb20gXCJmb2xkZXIvdHlwZVwiO1xuaW1wb3J0IHsgY29weVRvQ2xpcGJvYXJkLCB1c2VLYWthb1NkayB9IGZyb20gXCJzaGFyaW5nL3V0aWxcIjtcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQoc3R5bGVzKTtcblxudHlwZSBGb2xkZXJUb29sQmFyUHJvcHMgPSB7XG4gIGZvbGRlcnM6IEZvbGRlcltdO1xuICBzZWxlY3RlZEZvbGRlcklkOiBTZWxlY3RlZEZvbGRlcklkO1xuICBvbkZvbGRlckNsaWNrOiAoZm9sZGVySWQ6IFNlbGVjdGVkRm9sZGVySWQpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgRm9sZGVyVG9vbEJhciA9ICh7XG4gIGZvbGRlcnMsXG4gIHNlbGVjdGVkRm9sZGVySWQsXG4gIG9uRm9sZGVyQ2xpY2ssXG59OiBGb2xkZXJUb29sQmFyUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaGFyZUtha2FvIH0gPSB1c2VLYWthb1NkaygpO1xuICBjb25zdCBbY3VycmVudE1vZGFsLCBzZXRDdXJyZW50TW9kYWxdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgY29uc3QgZm9sZGVyTmFtZSA9XG4gICAgQUxMX0xJTktTX0lEID09PSBzZWxlY3RlZEZvbGRlcklkXG4gICAgICA/IEFMTF9MSU5LU19URVhUXG4gICAgICA6IGZvbGRlcnM/LmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHNlbGVjdGVkRm9sZGVySWQpPy5uYW1lID8/IFwiXCI7XG4gIC8vIGNvbnN0IHNoYXJlTGluayA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3NoYXJlZD91c2VyPTEmZm9sZGVyPSR7c2VsZWN0ZWRGb2xkZXJJZH1gO1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiBzZXRDdXJyZW50TW9kYWwobnVsbCk7XG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfTtcbiAgLy8gY29uc3QgaGFuZGxlS2FrYW9DbGljayA9ICgpID0+IHtcbiAgLy8gICBzaGFyZUtha2FvKHsgdXJsOiBzaGFyZUxpbmssIC4uLktBS0FPX1NIQVJFX0RBVEEgfSk7XG4gIC8vIH07XG4gIC8vIGNvbnN0IGhhbmRsZUZhY2Vib29rQ2xpY2sgPSAoKSA9PlxuICAvLyAgIHdpbmRvdy5vcGVuKGBodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwP3U9JHtzaGFyZUxpbmt9YCk7XG4gIC8vIGNvbnN0IGhhbmRsZUxpbmtDb3B5Q2xpY2sgPSAoKSA9PiBjb3B5VG9DbGlwYm9hcmQoc2hhcmVMaW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcImNvbnRhaW5lclwiKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJmb2xkZXJzXCIpfT5cbiAgICAgICAgPEZvbGRlckJ1dHRvblxuICAgICAgICAgIGtleT17QUxMX0xJTktTX0lEfVxuICAgICAgICAgIHRleHQ9e0FMTF9MSU5LU19URVhUfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRm9sZGVyQ2xpY2soQUxMX0xJTktTX0lEKX1cbiAgICAgICAgICBpc1NlbGVjdGVkPXtBTExfTElOS1NfSUQgPT09IHNlbGVjdGVkRm9sZGVySWR9XG4gICAgICAgIC8+XG4gICAgICAgIHtmb2xkZXJzPy5tYXAoKHsgaWQsIG5hbWUgfSkgPT4gKFxuICAgICAgICAgIDxGb2xkZXJCdXR0b25cbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICB0ZXh0PXtuYW1lfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Gb2xkZXJDbGljayhpZCl9XG4gICAgICAgICAgICBpc1NlbGVjdGVkPXtpZCA9PT0gc2VsZWN0ZWRGb2xkZXJJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwiYWRkLWJ1dHRvblwiKX0+XG4gICAgICAgIDxBZGRGb2xkZXJCdXR0b24gb25DbGljaz17KCkgPT4gc2V0Q3VycmVudE1vZGFsKE1PREFMU19JRC5hZGRGb2xkZXIpfSAvPlxuICAgICAgICA8SW5wdXRNb2RhbFxuICAgICAgICAgIGlzT3Blbj17Y3VycmVudE1vZGFsID09PSBNT0RBTFNfSUQuYWRkRm9sZGVyfVxuICAgICAgICAgIHRpdGxlPVwi7Y+0642UIOy2lOqwgFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLrgrTsmqkg7J6F66ClXCJcbiAgICAgICAgICBidXR0b25UZXh0PVwi7LaU6rCA7ZWY6riwXCJcbiAgICAgICAgICBvbkNsb3NlQ2xpY2s9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldElucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT17Y3goXCJmb2xkZXItbmFtZVwiKX0+e2ZvbGRlck5hbWV9PC9oMj5cbiAgICAgIHtzZWxlY3RlZEZvbGRlcklkICE9PSBBTExfTElOS1NfSUQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJidXR0b25zXCIpfT5cbiAgICAgICAgICB7QlVUVE9OUy5tYXAoKHsgdGV4dCwgaWNvblNvdXJjZSwgbW9kYWxJZCB9KSA9PiAoXG4gICAgICAgICAgICA8SWNvbkFuZFRleHRCdXR0b25cbiAgICAgICAgICAgICAga2V5PXt0ZXh0fVxuICAgICAgICAgICAgICB0ZXh0PXt0ZXh0fVxuICAgICAgICAgICAgICBpY29uU291cmNlPXtpY29uU291cmNlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50TW9kYWwobW9kYWxJZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHsvKiA8U2hhcmVNb2RhbFxuICAgICAgICAgICAgaXNPcGVuPXtjdXJyZW50TW9kYWwgPT09IE1PREFMU19JRC5zaGFyZX1cbiAgICAgICAgICAgIGZvbGRlck5hbWU9e2ZvbGRlck5hbWV9XG4gICAgICAgICAgICBvbktha2FvQ2xpY2s9e2hhbmRsZUtha2FvQ2xpY2t9XG4gICAgICAgICAgICBvbkZhY2Vib29rQ2xpY2s9e2hhbmRsZUZhY2Vib29rQ2xpY2t9XG4gICAgICAgICAgICBvbkxpbmtDb3B5Q2xpY2s9e2hhbmRsZUxpbmtDb3B5Q2xpY2t9XG4gICAgICAgICAgICBvbkNsb3NlQ2xpY2s9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgICAgLz4gKi99XG4gICAgICAgICAgPElucHV0TW9kYWxcbiAgICAgICAgICAgIGlzT3Blbj17Y3VycmVudE1vZGFsID09PSBNT0RBTFNfSUQucmVuYW1lfVxuICAgICAgICAgICAgdGl0bGU9XCLtj7TrjZQg7J2066aEIOuzgOqyvVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuCtOyaqSDsnoXroKVcIlxuICAgICAgICAgICAgYnV0dG9uVGV4dD1cIuuzgOqyve2VmOq4sFwiXG4gICAgICAgICAgICBvbkNsb3NlQ2xpY2s9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldElucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBbGVydE1vZGFsXG4gICAgICAgICAgICBpc09wZW49e2N1cnJlbnRNb2RhbCA9PT0gTU9EQUxTX0lELmRlbGV0ZX1cbiAgICAgICAgICAgIHRpdGxlPVwi7Y+0642UIOyCreygnFwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17Zm9sZGVyTmFtZX1cbiAgICAgICAgICAgIGJ1dHRvblRleHQ9XCLsgq3soJztlZjquLBcIlxuICAgICAgICAgICAgb25DbG9zZUNsaWNrPXtjbG9zZU1vZGFsfVxuICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwiQWRkRm9sZGVyQnV0dG9uIiwiRm9sZGVyQnV0dG9uIiwiSWNvbkFuZFRleHRCdXR0b24iLCJBTExfTElOS1NfVEVYVCIsIkJVVFRPTlMiLCJNT0RBTFNfSUQiLCJBTExfTElOS1NfSUQiLCJ1c2VTdGF0ZSIsIklucHV0TW9kYWwiLCJBbGVydE1vZGFsIiwidXNlS2FrYW9TZGsiLCJjeCIsImJpbmQiLCJGb2xkZXJUb29sQmFyIiwiZm9sZGVycyIsInNlbGVjdGVkRm9sZGVySWQiLCJvbkZvbGRlckNsaWNrIiwic2hhcmVLYWthbyIsImN1cnJlbnRNb2RhbCIsInNldEN1cnJlbnRNb2RhbCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiZm9sZGVyTmFtZSIsImZpbmQiLCJpZCIsIm5hbWUiLCJjbG9zZU1vZGFsIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwiZGl2IiwiY2xhc3NOYW1lIiwidGV4dCIsIm9uQ2xpY2siLCJpc1NlbGVjdGVkIiwibWFwIiwiYWRkRm9sZGVyIiwiaXNPcGVuIiwidGl0bGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvblRleHQiLCJvbkNsb3NlQ2xpY2siLCJvbktleURvd24iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiaDIiLCJpY29uU291cmNlIiwibW9kYWxJZCIsInJlbmFtZSIsImRlbGV0ZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/folder/feature-folder-tool-bar/FolderToolBar.tsx\n"));

/***/ })

});