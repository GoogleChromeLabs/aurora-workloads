"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/article/article-map.jsx":
/*!************************************************!*\
  !*** ./src/components/article/article-map.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArticleMap; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_third_parties_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next/third-parties/google */ \"../../../node_modules/.pnpm/@next+third-parties@14.2.3_next@13.5.1_react@18.2.0/node_modules/@next/third-parties/dist/google/index.js\");\n/* harmony import */ var _next_third_parties_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_third_parties_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _article_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-text */ \"./src/components/article/article-text.jsx\");\n/* harmony import */ var _article_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article-tag */ \"./src/components/article/article-tag.jsx\");\n/* harmony import */ var news_site_css_dist_article_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! news-site-css/dist/article.module.css */ \"../../../packages/styles/news-site-css/dist/article.module.css\");\n/* harmony import */ var news_site_css_dist_article_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(news_site_css_dist_article_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"../../../node_modules/.pnpm/next@13.5.1_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\nfunction ArticleMap(param) {\n    let { map, mapClass, meta } = param;\n    if (!map) return null;\n    document.body.style.setProperty(\"--map-aspect-ratio\", map.width / map.height);\n    console.log(\"env\", process.env);\n    console.log(\"api\", \"123\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: mapClass,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_next_third_parties_google__WEBPACK_IMPORTED_MODULE_1__.GoogleMapsEmbed, {\n                        apiKey: \"AIzaSyCFj8Vni52FfC9L1zpzxqH3ViUPmioa-Dw\",\n                        width: \"100%\",\n                        mode: map.mode,\n                        q: map.q\n                    }, void 0, false, {\n                        fileName: \"/Users/thorstenk/Desktop/Workspace/aurora-workloads/apps/aurora/news-site-next-tpc/src/components/article/article-map.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_article_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        tag: meta === null || meta === void 0 ? void 0 : meta.tag\n                    }, void 0, false, {\n                        fileName: \"/Users/thorstenk/Desktop/Workspace/aurora-workloads/apps/aurora/news-site-next-tpc/src/components/article/article-map.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thorstenk/Desktop/Workspace/aurora-workloads/apps/aurora/news-site-next-tpc/src/components/article/article-map.jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_article_text__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                textClass: (news_site_css_dist_article_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"article-map-captions\"]),\n                text: meta === null || meta === void 0 ? void 0 : meta.captions\n            }, void 0, false, {\n                fileName: \"/Users/thorstenk/Desktop/Workspace/aurora-workloads/apps/aurora/news-site-next-tpc/src/components/article/article-map.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = ArticleMap;\nvar _c;\n$RefreshReg$(_c, \"ArticleMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUtbWFwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2RDtBQUVwQjtBQUNGO0FBRW9CO0FBRTVDLFNBQVNJLFdBQVcsS0FBdUI7UUFBdkIsRUFBRUMsR0FBRyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRSxHQUF2QjtJQUMvQixJQUFJLENBQUNGLEtBQ0QsT0FBTztJQUVYRyxTQUFTQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLHNCQUFzQk4sSUFBSU8sS0FBSyxHQUFHUCxJQUFJUSxNQUFNO0lBRTVFQyxRQUFRQyxHQUFHLENBQUMsT0FBT0MsT0FBT0EsQ0FBQ0MsR0FBRztJQUM5QkgsUUFBUUMsR0FBRyxDQUFDLE9BQU9DLEtBQXNDO0lBRXpELHFCQUNJOzswQkFDSSw4REFBQ0c7Z0JBQUlDLFdBQVdkOztrQ0FDWiw4REFBQ04sdUVBQWVBO3dCQUFDcUIsUUFBTzt3QkFBMENULE9BQU07d0JBQU9VLE1BQU1qQixJQUFJaUIsSUFBSTt3QkFBRUMsR0FBR2xCLElBQUlrQixDQUFDOzs7Ozs7a0NBQ3ZHLDhEQUFDckIsb0RBQVVBO3dCQUFDc0IsR0FBRyxFQUFFakIsaUJBQUFBLDJCQUFBQSxLQUFNaUIsR0FBRzs7Ozs7Ozs7Ozs7OzBCQUU5Qiw4REFBQ3ZCLHFEQUFXQTtnQkFBQ3dCLFdBQVd0QixzR0FBOEI7Z0JBQUV1QixJQUFJLEVBQUVuQixpQkFBQUEsMkJBQUFBLEtBQU1vQixRQUFROzs7Ozs7OztBQUd4RjtLQWxCd0J2QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUtbWFwLmpzeD81ZmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZU1hcHNFbWJlZCB9IGZyb20gXCJAbmV4dC90aGlyZC1wYXJ0aWVzL2dvb2dsZVwiO1xuXG5pbXBvcnQgQXJ0aWNsZVRleHQgZnJvbSBcIi4vYXJ0aWNsZS10ZXh0XCI7XG5pbXBvcnQgQXJ0aWNsZVRhZyBmcm9tIFwiLi9hcnRpY2xlLXRhZ1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJuZXdzLXNpdGUtY3NzL2Rpc3QvYXJ0aWNsZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGVNYXAoeyBtYXAsIG1hcENsYXNzLCBtZXRhIH0pIHtcbiAgICBpZiAoIW1hcClcbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1tYXAtYXNwZWN0LXJhdGlvXCIsIG1hcC53aWR0aCAvIG1hcC5oZWlnaHQpO1xuXG4gICAgY29uc29sZS5sb2coXCJlbnZcIiwgcHJvY2Vzcy5lbnYpO1xuICAgIGNvbnNvbGUubG9nKFwiYXBpXCIsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BUElfS0VZKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFwQ2xhc3N9PlxuICAgICAgICAgICAgICAgIDxHb29nbGVNYXBzRW1iZWQgYXBpS2V5PVwiQUl6YVN5Q0ZqOFZuaTUyRmZDOUwxenB6eHFIM1ZpVVBtaW9hLUR3XCIgd2lkdGg9XCIxMDAlXCIgbW9kZT17bWFwLm1vZGV9IHE9e21hcC5xfS8+XG4gICAgICAgICAgICAgICAgPEFydGljbGVUYWcgdGFnPXttZXRhPy50YWd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxBcnRpY2xlVGV4dCB0ZXh0Q2xhc3M9e3N0eWxlc1tcImFydGljbGUtbWFwLWNhcHRpb25zXCJdfSB0ZXh0PXttZXRhPy5jYXB0aW9uc30gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJHb29nbGVNYXBzRW1iZWQiLCJBcnRpY2xlVGV4dCIsIkFydGljbGVUYWciLCJzdHlsZXMiLCJBcnRpY2xlTWFwIiwibWFwIiwibWFwQ2xhc3MiLCJtZXRhIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsIndpZHRoIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfQVBJX0tFWSIsImRpdiIsImNsYXNzTmFtZSIsImFwaUtleSIsIm1vZGUiLCJxIiwidGFnIiwidGV4dENsYXNzIiwidGV4dCIsImNhcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/article/article-map.jsx\n"));

/***/ })

});