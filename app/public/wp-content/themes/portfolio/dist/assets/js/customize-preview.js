/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

/***/ }),

/***/ "./src/assets/js/helpers/strip-tags.js":
/*!*********************************************!*\
  !*** ./src/assets/js/helpers/strip-tags.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var strip_tags = function strip_tags(input, allowed) {
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strip_tags);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./src/assets/js/customize-preview.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var _helpers_strip_tags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/strip-tags.js */ "./src/assets/js/helpers/strip-tags.js");


wp.customize('blogname', function (value) {
  value.bind(function (to) {
    jquery__WEBPACK_IMPORTED_MODULE_0__('.c-header__blogname').html(to);
  });
});
wp.customize('_themename_display_author_info', function (value) {
  value.bind(function (to) {
    if (to) {
      jquery__WEBPACK_IMPORTED_MODULE_0__('.c-post-author').show();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0__('.c-post-author').hide();
    }
  });
});
wp.customize('_themename_display_author_info', function (value) {
  value.bind(function (to) {
    if (to) {
      jquery__WEBPACK_IMPORTED_MODULE_0__('.c-post-author').show();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0__('.c-post-author').hide();
    }
  });
});
wp.customize('_themename_accent_colour', function (value) {
  value.bind(function (to) {
    var inline_css = "";
    var inline_css_obj = _themename['inline-css'];
    for (var selector in inline_css_obj) {
      inline_css += "".concat(selector, " {");
      for (var prop in inline_css_obj[selector]) {
        var val = inline_css_obj[selector][prop];
        inline_css += "".concat(prop, ": ").concat(wp.customize(val).get());
      }
      inline_css += "}";
    }
    jquery__WEBPACK_IMPORTED_MODULE_0__('#_themename-stylesheet-inline-css').html(inline_css);
  });
});
wp.customize('_themename_header_colour', function (value) {
  value.bind(function (to) {
    var inline_css = "";
    var inline_css_obj = _themename['inline-css'];
    for (var selector in inline_css_obj) {
      inline_css += "".concat(selector, " {");
      for (var prop in inline_css_obj[selector]) {
        var val = inline_css_obj[selector][prop];
        inline_css += "".concat(prop, ": ").concat(wp.customize(val).get());
      }
      inline_css += "}";
    }
    jquery__WEBPACK_IMPORTED_MODULE_0__('#_themename-stylesheet-inline-css').html(inline_css);
  });
});
wp.customize('_themename_site_info', function (value) {
  value.bind(function (to) {
    jquery__WEBPACK_IMPORTED_MODULE_0__('.c-site-info__text').html((0,_helpers_strip_tags_js__WEBPACK_IMPORTED_MODULE_1__["default"])(to, '<a>'));
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBVCxtQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUNNLElBQUksQ0FBQ0csVUFBVSxDQUFDO0VBQzNELENBQUUsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGUixFQUFFLENBQUNDLFNBQVMsQ0FBRSxzQkFBc0IsRUFBRSxVQUFDQyxLQUFLLEVBQUs7RUFDN0NBLEtBQUssQ0FBQ0MsSUFBSSxDQUFFLFVBQUNDLEVBQUUsRUFBSztJQUNoQkwsbUNBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDTSxJQUFJLENBQUNsQixrRUFBVSxDQUFDaUIsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ3ZELENBQUUsQ0FBQztBQUNQLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIHZhciBcImpRdWVyeVwiIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvaGVscGVycy9zdHJpcC10YWdzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvY3VzdG9taXplLXByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiY29uc3Qgc3RyaXBfdGFncyA9IChpbnB1dCwgYWxsb3dlZCkgPT4ge1xuICAgIGFsbG93ZWQgPSAoKChhbGxvd2VkIHx8ICcnKSArICcnKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLm1hdGNoKC88W2Etel1bYS16MC05XSo+L2cpIHx8IFtdKVxuICAgIC5qb2luKCcnKTsgLy8gbWFraW5nIHN1cmUgdGhlIGFsbG93ZWQgYXJnIGlzIGEgc3RyaW5nIGNvbnRhaW5pbmcgb25seSB0YWdzIGluIGxvd2VyY2FzZSAoPGE+PGI+PGM+KVxuICAgIHZhciB0YWdzID0gLzxcXC8/KFthLXpdW2EtejAtOV0qKVxcYltePl0qPi9naSxcbiAgICBjb21tZW50c0FuZFBocFRhZ3MgPSAvPCEtLVtcXHNcXFNdKj8tLT58PFxcPyg/OnBocCk/W1xcc1xcU10qP1xcPz4vZ2k7XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoY29tbWVudHNBbmRQaHBUYWdzLCAnJylcbiAgICAucmVwbGFjZSh0YWdzLCBmdW5jdGlvbigkMCwgJDEpIHtcbiAgICAgIHJldHVybiBhbGxvd2VkLmluZGV4T2YoJzwnICsgJDEudG9Mb3dlckNhc2UoKSArICc+JykgPiAtMSA/ICQwIDogJyc7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlwX3RhZ3M7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHN0cmlwX3RhZ3MgZnJvbSAnLi9oZWxwZXJzL3N0cmlwLXRhZ3MuanMnO1xuXG5cbndwLmN1c3RvbWl6ZSggJ2Jsb2duYW1lJywgKHZhbHVlKSA9PiB7XG4gICAgdmFsdWUuYmluZCggKHRvKSA9PiB7XG4gICAgICAgICQoJy5jLWhlYWRlcl9fYmxvZ25hbWUnKS5odG1sKHRvKTtcbiAgICB9IClcbn0pXG5cbndwLmN1c3RvbWl6ZSggJ190aGVtZW5hbWVfZGlzcGxheV9hdXRob3JfaW5mbycsICh2YWx1ZSkgPT4ge1xuICAgIHZhbHVlLmJpbmQoICh0bykgPT4ge1xuICAgICAgICBpZih0bykge1xuICAgICAgICAgICAgJCgnLmMtcG9zdC1hdXRob3InKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuYy1wb3N0LWF1dGhvcicpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0gKVxufSlcblxud3AuY3VzdG9taXplKCAnX3RoZW1lbmFtZV9kaXNwbGF5X2F1dGhvcl9pbmZvJywgKHZhbHVlKSA9PiB7XG4gICAgdmFsdWUuYmluZCggKHRvKSA9PiB7XG4gICAgICAgIGlmKHRvKSB7XG4gICAgICAgICAgICAkKCcuYy1wb3N0LWF1dGhvcicpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5jLXBvc3QtYXV0aG9yJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSApXG59KVxuXG53cC5jdXN0b21pemUoICdfdGhlbWVuYW1lX2FjY2VudF9jb2xvdXInLCAodmFsdWUpID0+IHtcbiAgICB2YWx1ZS5iaW5kKCAodG8pID0+IHtcbiAgICAgICAgbGV0IGlubGluZV9jc3MgPSBgYDtcbiAgICAgICAgbGV0IGlubGluZV9jc3Nfb2JqID0gX3RoZW1lbmFtZVsnaW5saW5lLWNzcyddO1xuICAgICAgICBmb3IobGV0IHNlbGVjdG9yIGluIGlubGluZV9jc3Nfb2JqKSB7XG4gICAgICAgICAgICBpbmxpbmVfY3NzICs9IGAke3NlbGVjdG9yfSB7YDtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHByb3AgaW4gaW5saW5lX2Nzc19vYmpbc2VsZWN0b3JdKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBpbmxpbmVfY3NzX29ialtzZWxlY3Rvcl1bcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIGlubGluZV9jc3MgKz0gYCR7cHJvcH06ICR7d3AuY3VzdG9taXplKHZhbCkuZ2V0KCl9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmxpbmVfY3NzICs9IGB9YDtcbiAgICAgICAgfVxuICAgICAgICAkKCcjX3RoZW1lbmFtZS1zdHlsZXNoZWV0LWlubGluZS1jc3MnKS5odG1sKGlubGluZV9jc3MpO1xuICAgIH0gKVxufSlcblxud3AuY3VzdG9taXplKCAnX3RoZW1lbmFtZV9oZWFkZXJfY29sb3VyJywgKHZhbHVlKSA9PiB7XG4gICAgdmFsdWUuYmluZCggKHRvKSA9PiB7XG4gICAgICAgIGxldCBpbmxpbmVfY3NzID0gYGA7XG4gICAgICAgIGxldCBpbmxpbmVfY3NzX29iaiA9IF90aGVtZW5hbWVbJ2lubGluZS1jc3MnXTtcbiAgICAgICAgZm9yKGxldCBzZWxlY3RvciBpbiBpbmxpbmVfY3NzX29iaikge1xuICAgICAgICAgICAgaW5saW5lX2NzcyArPSBgJHtzZWxlY3Rvcn0ge2A7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wIGluIGlubGluZV9jc3Nfb2JqW3NlbGVjdG9yXSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gaW5saW5lX2Nzc19vYmpbc2VsZWN0b3JdW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICBpbmxpbmVfY3NzICs9IGAke3Byb3B9OiAke3dwLmN1c3RvbWl6ZSh2YWwpLmdldCgpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5saW5lX2NzcyArPSBgfWA7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI190aGVtZW5hbWUtc3R5bGVzaGVldC1pbmxpbmUtY3NzJykuaHRtbChpbmxpbmVfY3NzKTtcbiAgICB9IClcbn0pXG5cbndwLmN1c3RvbWl6ZSggJ190aGVtZW5hbWVfc2l0ZV9pbmZvJywgKHZhbHVlKSA9PiB7XG4gICAgdmFsdWUuYmluZCggKHRvKSA9PiB7XG4gICAgICAgICQoJy5jLXNpdGUtaW5mb19fdGV4dCcpLmh0bWwoc3RyaXBfdGFncyh0bywgJzxhPicpKTtcbiAgICB9IClcbn0pIl0sIm5hbWVzIjpbInN0cmlwX3RhZ3MiLCJpbnB1dCIsImFsbG93ZWQiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiam9pbiIsInRhZ3MiLCJjb21tZW50c0FuZFBocFRhZ3MiLCJyZXBsYWNlIiwiJDAiLCIkMSIsImluZGV4T2YiLCIkIiwid3AiLCJjdXN0b21pemUiLCJ2YWx1ZSIsImJpbmQiLCJ0byIsImh0bWwiLCJzaG93IiwiaGlkZSIsImlubGluZV9jc3MiLCJpbmxpbmVfY3NzX29iaiIsIl90aGVtZW5hbWUiLCJzZWxlY3RvciIsImNvbmNhdCIsInByb3AiLCJ2YWwiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9