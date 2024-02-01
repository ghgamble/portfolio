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

/***/ "./src/assets/js/components/mobile.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/mobile.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");

jquery__WEBPACK_IMPORTED_MODULE_0__(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0__('.menu-toggle').on('click', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0__('.main-mobile-menu').hasClass('close')) {
      jquery__WEBPACK_IMPORTED_MODULE_0__('.main-mobile-menu').removeClass('close');
      jquery__WEBPACK_IMPORTED_MODULE_0__('.main-mobile-menu').addClass('open');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0__('.main-mobile-menu').removeClass('open');
      jquery__WEBPACK_IMPORTED_MODULE_0__('.main-mobile-menu').addClass('close');
    }
  });
});

/***/ }),

/***/ "./src/assets/js/components/navigation.js":
/*!************************************************!*\
  !*** ./src/assets/js/components/navigation.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");

jquery__WEBPACK_IMPORTED_MODULE_0__('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0__(e.currentTarget).parents('.sub-menu').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0__('.menu > .menu-item.open').find('> a > .menu-button').trigger('click');
  }
  jquery__WEBPACK_IMPORTED_MODULE_0__(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0__(e.currentTarget).removeClass('open');
});
jquery__WEBPACK_IMPORTED_MODULE_0__('.c-navigation').on('click', '.menu .menu-button', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var menu_button = jquery__WEBPACK_IMPORTED_MODULE_0__(e.currentTarget);
  var menu_link = menu_button.parent();
  var menu_item = menu_link.parent();
  if (menu_item.hasClass('open')) {
    menu_item.add(menu_item.find('.menu-item.open')).removeClass('open');
    menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
  } else {
    menu_item.siblings('.open').find('>a>.menu-button').trigger('click');
    menu_item.addClass('open');
    menu_link.attr('aria-expanded', 'true');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0__(document).click(function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0__('.menu-item.open').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0__('.menu > .menu-item.open > a > .menu-button').trigger('click');
  }
});

/***/ }),

/***/ "./src/assets/js/components/slider.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/slider.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


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
/*!*********************************!*\
  !*** ./src/assets/js/bundle.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slider.js */ "./src/assets/js/components/slider.js");
/* harmony import */ var _components_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation.js */ "./src/assets/js/components/navigation.js");
/* harmony import */ var _components_mobile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mobile.js */ "./src/assets/js/components/mobile.js");




var x = 0;

// console.log(x);

// $('body').on( 'click', function() {
//     alert(true);
// } );

// $('body').click(() => {
//     alert(true);
// })
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNwRU0sU0FBUyxDQUFDWixRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzFCVSxTQUFTLENBQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDO0lBQ3ZDTCxXQUFXLENBQUNKLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDUyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztJQUNqRUwsV0FBVyxDQUFDSixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQ1MsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7RUFDdEU7QUFDSixDQUFDLENBQUM7QUFFRnBCLG1DQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDcUIsS0FBSyxDQUFDLFVBQUNmLENBQUMsRUFBSztFQUNyQixJQUFHUCxtQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNVLE1BQU0sRUFBRTtJQUM1QlYsbUNBQUMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDWSxPQUFPLENBQUMsT0FBTyxDQUFDO0VBQ3BFO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ051QjtBQUNTO0FBQ0k7QUFDSjtBQUdoQyxJQUFJVyxDQUFDLEdBQUcsQ0FBQzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vYmlsZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5tZW51LXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCgnLm1haW4tbW9iaWxlLW1lbnUnKS5oYXNDbGFzcygnY2xvc2UnKSkge1xuICAgICAgICAgICAgJCgnLm1haW4tbW9iaWxlLW1lbnUnKS5yZW1vdmVDbGFzcygnY2xvc2UnKTtcbiAgICAgICAgICAgICQoJy5tYWluLW1vYmlsZS1tZW51JykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5tYWluLW1vYmlsZS1tZW51JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJy5tYWluLW1vYmlsZS1tZW51JykuYWRkQ2xhc3MoJ2Nsb3NlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgICBpZighJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudHMoJy5zdWItbWVudScpLmxlbmd0aCkge1xuICAgICAgICAkKCcubWVudSA+IC5tZW51LWl0ZW0ub3BlbicpLmZpbmQoJz4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnb3BlbicpO1xufSkub24oJ21vdXNlbGVhdmUnLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnb3BlbicpO1xufSlcblxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdjbGljaycsICcubWVudSAubWVudS1idXR0b24nLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBtZW51X2J1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBsZXQgbWVudV9saW5rID0gbWVudV9idXR0b24ucGFyZW50KCk7XG4gICAgbGV0IG1lbnVfaXRlbSA9IG1lbnVfbGluay5wYXJlbnQoKTtcbiAgICBpZihtZW51X2l0ZW0uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICBtZW51X2l0ZW0uYWRkKG1lbnVfaXRlbS5maW5kKCcubWVudS1pdGVtLm9wZW4nKSkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgbWVudV9saW5rLmFkZChtZW51X2l0ZW0uZmluZCgnYScpKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLWhpZGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVudV9pdGVtLnNpYmxpbmdzKCcub3BlbicpLmZpbmQoJz5hPi5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIG1lbnVfaXRlbS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICBtZW51X2xpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgfVxufSk7XG5cbiQoZG9jdW1lbnQpLmNsaWNrKChlKSA9PiB7XG4gICAgaWYoJCgnLm1lbnUtaXRlbS5vcGVuJykubGVuZ3RoKSB7XG4gICAgICAgICQoJy5tZW51ID4gLm1lbnUtaXRlbS5vcGVuID4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxufSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlci5qcyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21vYmlsZS5qcyc7XG5cblxubGV0IHggPSAwO1xuXG4vLyBjb25zb2xlLmxvZyh4KTtcblxuLy8gJCgnYm9keScpLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbi8vICAgICBhbGVydCh0cnVlKTtcbi8vIH0gKTtcblxuLy8gJCgnYm9keScpLmNsaWNrKCgpID0+IHtcbi8vICAgICBhbGVydCh0cnVlKTtcbi8vIH0pXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImUiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50cyIsImxlbmd0aCIsImZpbmQiLCJ0cmlnZ2VyIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJtZW51X2J1dHRvbiIsIm1lbnVfbGluayIsInBhcmVudCIsIm1lbnVfaXRlbSIsImFkZCIsImF0dHIiLCJzaWJsaW5ncyIsImNsaWNrIiwieCJdLCJzb3VyY2VSb290IjoiIn0=