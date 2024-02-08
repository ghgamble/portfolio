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




jquery__WEBPACK_IMPORTED_MODULE_0__(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0__('.most_recent_widget').slick();
  if (wp.customize && wp.customize.selectiveRefresh) {
    wp.customize.selectiveRefresh.bind('partial-content-rendered', function (placement) {
      if (placement.partial.widgetIdParts && placement.partial.widgetIdParts.idBase === '_themename_most_recent_widget') {
        placement.container.find('.most_recent_widget').slick();
      }
    });
  }
});

// let x = 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCLENBQUNDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxVQUFDQyxTQUFTLEVBQUs7TUFDMUUsSUFBR0EsU0FBUyxDQUFDQyxPQUFPLENBQUNDLGFBQWEsSUFBSUYsU0FBUyxDQUFDQyxPQUFPLENBQUNDLGFBQWEsQ0FBQ0MsTUFBTSxLQUFLLCtCQUErQixFQUFFO1FBQzlHSCxTQUFTLENBQUNJLFNBQVMsQ0FBQ3JCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDWSxLQUFLLENBQUMsQ0FBQztNQUMzRDtJQUNKLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQyxDQUFDOztBQUdGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9iaWxlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL2J1bmRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm1lbnUtdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKCcubWFpbi1tb2JpbGUtbWVudScpLmhhc0NsYXNzKCdjbG9zZScpKSB7XG4gICAgICAgICAgICAkKCcubWFpbi1tb2JpbGUtbWVudScpLnJlbW92ZUNsYXNzKCdjbG9zZScpO1xuICAgICAgICAgICAgJCgnLm1haW4tbW9iaWxlLW1lbnUnKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLm1haW4tbW9iaWxlLW1lbnUnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnLm1haW4tbW9iaWxlLW1lbnUnKS5hZGRDbGFzcygnY2xvc2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kKCcuYy1uYXZpZ2F0aW9uJykub24oJ21vdXNlZW50ZXInLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xuICAgIGlmKCEkKGUuY3VycmVudFRhcmdldCkucGFyZW50cygnLnN1Yi1tZW51JykubGVuZ3RoKSB7XG4gICAgICAgICQoJy5tZW51ID4gLm1lbnUtaXRlbS5vcGVuJykuZmluZCgnPiBhID4gLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdvcGVuJyk7XG59KS5vbignbW91c2VsZWF2ZScsICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicsIChlKSA9PiB7XG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG59KVxuXG4kKCcuYy1uYXZpZ2F0aW9uJykub24oJ2NsaWNrJywgJy5tZW51IC5tZW51LWJ1dHRvbicsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IG1lbnVfYnV0dG9uID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGxldCBtZW51X2xpbmsgPSBtZW51X2J1dHRvbi5wYXJlbnQoKTtcbiAgICBsZXQgbWVudV9pdGVtID0gbWVudV9saW5rLnBhcmVudCgpO1xuICAgIGlmKG1lbnVfaXRlbS5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgIG1lbnVfaXRlbS5hZGQobWVudV9pdGVtLmZpbmQoJy5tZW51LWl0ZW0ub3BlbicpKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICBtZW51X2xpbmsuYWRkKG1lbnVfaXRlbS5maW5kKCdhJykpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZW51X2l0ZW0uc2libGluZ3MoJy5vcGVuJykuZmluZCgnPmE+Lm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgbWVudV9pdGVtLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgIG1lbnVfbGluay5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICB9XG59KTtcblxuJChkb2N1bWVudCkuY2xpY2soKGUpID0+IHtcbiAgICBpZigkKCcubWVudS1pdGVtLm9wZW4nKS5sZW5ndGgpIHtcbiAgICAgICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4gPiBhID4gLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyLmpzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbW9iaWxlLmpzJztcblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgICQoJy5tb3N0X3JlY2VudF93aWRnZXQnKS5zbGljaygpO1xuICAgIGlmKHdwLmN1c3RvbWl6ZSAmJiB3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaCkge1xuICAgICAgICB3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaC5iaW5kKCdwYXJ0aWFsLWNvbnRlbnQtcmVuZGVyZWQnLCAocGxhY2VtZW50KSA9PiB7XG4gICAgICAgICAgICBpZihwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzICYmIHBsYWNlbWVudC5wYXJ0aWFsLndpZGdldElkUGFydHMuaWRCYXNlID09PSAnX3RoZW1lbmFtZV9tb3N0X3JlY2VudF93aWRnZXQnKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50LmNvbnRhaW5lci5maW5kKCcubW9zdF9yZWNlbnRfd2lkZ2V0Jykuc2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSlcblxuXG4vLyBsZXQgeCA9IDA7XG5cbi8vIGNvbnNvbGUubG9nKHgpO1xuXG4vLyAkKCdib2R5Jykub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuLy8gICAgIGFsZXJ0KHRydWUpO1xuLy8gfSApO1xuXG4vLyAkKCdib2R5JykuY2xpY2soKCkgPT4ge1xuLy8gICAgIGFsZXJ0KHRydWUpO1xuLy8gfSlcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRzIiwibGVuZ3RoIiwiZmluZCIsInRyaWdnZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwicGFyZW50IiwibWVudV9pdGVtIiwiYWRkIiwiYXR0ciIsInNpYmxpbmdzIiwiY2xpY2siLCJzbGljayIsIndwIiwiY3VzdG9taXplIiwic2VsZWN0aXZlUmVmcmVzaCIsImJpbmQiLCJwbGFjZW1lbnQiLCJwYXJ0aWFsIiwid2lkZ2V0SWRQYXJ0cyIsImlkQmFzZSIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=