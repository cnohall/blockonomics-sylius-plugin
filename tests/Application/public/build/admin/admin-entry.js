/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/app.js":
/*!********************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/app.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/accordion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery.dirtyforms/jquery.dirtyforms'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var sylius_ui_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sylius/ui/app */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/app.js");
/* harmony import */ var sylius_ui_sylius_auto_complete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sylius/ui/sylius-auto-complete */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-auto-complete.js");
/* harmony import */ var sylius_ui_sylius_product_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sylius/ui/sylius-product-attributes */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-product-attributes.js");
/* harmony import */ var sylius_ui_sylius_product_auto_complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sylius/ui/sylius-product-auto-complete */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-product-auto-complete.js");
/* harmony import */ var sylius_ui_sylius_prototype_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sylius/ui/sylius-prototype-handler */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-prototype-handler.js");
/* harmony import */ var _sylius_catalog_promotion_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sylius-catalog-promotion-actions */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-catalog-promotion-actions.js");
/* harmony import */ var _sylius_catalog_promotion_scopes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sylius-catalog-promotion-scopes */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-catalog-promotion-scopes.js");
/* harmony import */ var _sylius_compound_form_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sylius-compound-form-errors */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-compound-form-errors.js");
/* harmony import */ var _sylius_form_collection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sylius-form-collection */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-form-collection.js");
/* harmony import */ var _sylius_lazy_choice_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sylius-lazy-choice-tree */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-lazy-choice-tree.js");
/* harmony import */ var _sylius_menu_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sylius-menu-search */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-menu-search.js");
/* harmony import */ var _sylius_move_product_variant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sylius-move-product-variant */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-move-product-variant.js");
/* harmony import */ var _sylius_move_taxon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sylius-move-taxon */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-move-taxon.js");
/* harmony import */ var _sylius_notification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sylius-notification */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-notification.js");
/* harmony import */ var _sylius_product_images_preview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sylius-product-images-preview */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-product-images-preview.js");
/* harmony import */ var _sylius_product_slug__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sylius-product-slug */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-product-slug.js");
/* harmony import */ var _sylius_taxon_slug__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sylius-taxon-slug */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-taxon-slug.js");
/* harmony import */ var _sylius_statistics__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sylius-statistics */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-statistics.js");
/* harmony import */ var _sylius_taxon_tree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sylius-taxon-tree */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-taxon-tree.js");
/* harmony import */ var _sylius_forms_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sylius-forms-list */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-forms-list.js");
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
























Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).ready(() => {
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_product_variant_pricingCalculator').handlePrototypes({
    prototypePrefix: 'sylius_product_variant_pricingCalculator',
    containerSelector: '#sylius_calculator_container'
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_customer_createUser').change(() => {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#user-form').toggle();
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.sylius-autocomplete').autoComplete();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.product-select.ui.fluid.multiple.search.selection.dropdown').productAutoComplete();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div#attributeChoice > .ui.dropdown.search').productAttributes();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('table thead th.sortable').on('click', event => {
    window.location = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget).find('a').attr('href');
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.sylius-update-product-variants').moveProductVariant(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.sylius-product-variant-position'));
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.sylius-taxon-move-up').taxonMove();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.sylius-taxon-move-down').taxonMove();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_shipping_method_calculator').handlePrototypes({
    prototypePrefix: 'sylius_shipping_method_calculator_calculators',
    containerSelector: '.configuration'
  }).change(() => {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.ui.tabular.menu .item').tab();
  });
  setTimeout(() => {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.ui.tabular.menu .item').tab();
  }, 50);
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_shipping_method_rules > a[data-form-collection="add"]').on('click', () => {
    setTimeout(() => {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('select[name^="sylius_shipping_method[rules]"][name$="[type]"]').last().change();
    }, 50);
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).setFromCollectionOnClickEventHandler('sylius_promotion_actions', 'actions');
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).setFromCollectionOnClickEventHandler('sylius_promotion_rules', 'rules');
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).on('collection-form-add', () => {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.sylius-autocomplete').each((index, element) => {
      if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).get(0), 'events') == undefined) {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).autoComplete();
      }
    });
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_catalog_promotion_scopes').length > 0) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).loadCatalogPromotionScopeConfiguration(document.querySelector('#sylius_catalog_promotion_scopes [data-form-collection="item"]:last-child'));
    }
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_catalog_promotion_actions').length > 0) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).loadCatalogPromotionActionConfiguration(document.querySelector('#sylius_catalog_promotion_actions [data-form-collection="item"]:last-child'));
    }
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).on('collection-form-update', () => {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.sylius-autocomplete').each((index, element) => {
      if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).get(0), 'events') == undefined) {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).autoComplete();
      }
    });
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.sylius-tabular-form').addTabErrors();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.ui.accordion').addAccordionErrors();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-product-taxonomy-tree').choiceTree('productTaxon', true, 1);
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).notification();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).productSlugGenerator();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).taxonSlugGenerator();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).previewUploadedImage('#sylius_product_images');
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).previewUploadedImage('#sylius_taxon_images');
  if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_catalog_promotion_actions').length > 0) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).loadCatalogPromotionActionConfiguration(document.querySelector('#sylius_catalog_promotion_actions'));
  }
  if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_catalog_promotion_scopes').length > 0) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).loadCatalogPromotionScopeConfiguration(document.querySelector('#sylius_catalog_promotion_scopes'));
  }
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).previewUploadedImage('#add-avatar');
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('body').on('DOMNodeInserted', '[data-form-collection="item"]', event => {
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.target).find('.ui.accordion').length > 0) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.target).find('.ui.accordion').accordion();
    }
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.target).find('.ui.tabular.menu').length > 0) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.target).find('.ui.tabular.menu .item').tab();
    }
  });
  const taxonomyTree = new _sylius_taxon_tree__WEBPACK_IMPORTED_MODULE_19__["default"]();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${_sylius_forms_list__WEBPACK_IMPORTED_MODULE_20__["default"]}, .check-unsaved`).dirtyForms();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#more-details').accordion({
    exclusive: false
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.variants-accordion__title').on('click', '.icon.button', function (e) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(e.delegateTarget).next('.variants-accordion__content').toggle();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this).find('.dropdown.icon').toggleClass('counterclockwise rotated');
  });
  const dashboardStatistics = new _sylius_statistics__WEBPACK_IMPORTED_MODULE_18__["default"](document.querySelector('.stats'));
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.sylius-admin-menu').searchable('.sylius-admin-menu-search-input');
});
window.$ = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
window.jQuery = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/date-object-factory.js":
/*!************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/date-object-factory.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dateObjects_year_date_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateObjects/year-date-object */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/dateObjects/year-date-object.js");
/* harmony import */ var _dateObjects_month_date_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateObjects/month-date-object */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/dateObjects/month-date-object.js");
/* harmony import */ var _dateObjects_week_date_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateObjects/week-date-object */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/dateObjects/week-date-object.js");



function DateObjectFactory() {}
DateObjectFactory.prototype.createDateObject = function (interval, date) {
  if (interval === 'month') {
    return new _dateObjects_month_date_object__WEBPACK_IMPORTED_MODULE_1__["default"](date);
  }
  if (interval === 'week') {
    return new _dateObjects_week_date_object__WEBPACK_IMPORTED_MODULE_2__["default"](date);
  }
  return new _dateObjects_year_date_object__WEBPACK_IMPORTED_MODULE_0__["default"](date);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateObjectFactory);

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/dateObjects/month-date-object.js":
/*!**********************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/dateObjects/month-date-object.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MonthDateObject)
/* harmony export */ });
class MonthDateObject {
  constructor(date) {
    const dateNow = new Date();
    this.startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    this.endDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    this.prevDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    this.nextDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    this.maxGraphDate = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0);
    this.interval = 'day';
  }
}

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/dateObjects/week-date-object.js":
/*!*********************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/dateObjects/week-date-object.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeekDateObject)
/* harmony export */ });
class WeekDateObject {
  constructor(date) {
    const weekInMilliseconds = 604800000;
    const dateNow = new Date();
    this.startDate = new Date(date.getTime() - weekInMilliseconds);
    this.endDate = new Date(date.getTime() + weekInMilliseconds);
    this.prevDate = new Date(date.getTime() - 2 * weekInMilliseconds);
    this.nextDate = new Date(date.getTime() + 3 * weekInMilliseconds);
    this.maxGraphDate = new Date(dateNow.getTime() + 2 * weekInMilliseconds);
    this.interval = 'day';
  }
}

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/dateObjects/year-date-object.js":
/*!*********************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/dateObjects/year-date-object.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YearDateObject)
/* harmony export */ });
class YearDateObject {
  constructor(date) {
    const dateNow = new Date();
    this.startDate = new Date(date.getFullYear(), 0, 1);
    this.endDate = new Date(date.getFullYear() + 1, 0, 0);
    this.prevDate = new Date(date.getFullYear() - 1, 1, 1);
    this.nextDate = new Date(date.getFullYear() + 1, 1, 1);
    this.maxGraphDate = new Date(dateNow.getFullYear() + 1, 0, 1);
    this.interval = 'month';
  }
}

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/shim/shim-jquery.js":
/*!*********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/shim/shim-jquery.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

window.$ = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
window.jQuery = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/shim/shim-semantic-ui.js":
/*!**************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/shim/shim-semantic-ui.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/accordion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/checkbox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/colorize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/dimmer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/dropdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/embed'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/modal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/nag'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/popup'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/rating'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/search'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/shape'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/sidebar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/state'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/sticky'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/tab'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/transition'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/video'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/visibility'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/visit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

























/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-catalog-promotion-actions.js":
/*!*************************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-catalog-promotion-actions.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  loadCatalogPromotionActionConfiguration(target) {
    if (target == null || target.querySelector('#sylius_catalog_promotion_actions select[name*="type"]') == null) {
      return;
    }
    target.querySelector('#sylius_catalog_promotion_actions select[name*="type"]').onchange = function () {
      const parent = this.parentElement;
      const newConfig = document.createElement('div');
      newConfig.innerHTML = this.selectedOptions[0].getAttribute('data-configuration');
      const oldConfig = parent.nextElementSibling;
      parent.parentElement.replaceChild(newConfig, oldConfig);
      const oldConfigInputName = oldConfig.querySelector('input').getAttribute('name');
      let newConfigInputs = newConfig.querySelectorAll('input');
      newConfigInputs.forEach(element => {
        let newConfigInputName = element.getAttribute('name');
        newConfigInputName = oldConfigInputName.replace(oldConfigInputName.substring(oldConfigInputName.indexOf('[configuration]') + 15), newConfigInputName.substring(newConfigInputName.indexOf('configuration') + 13));
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).attr('name', newConfigInputName);
      });
    };
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-catalog-promotion-scopes.js":
/*!************************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-catalog-promotion-scopes.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  loadCatalogPromotionScopeConfiguration(target) {
    if (target == null || target.querySelector('#sylius_catalog_promotion_scopes select[name*="type"]') == null) {
      return;
    }
    target.querySelector('#sylius_catalog_promotion_scopes select[name*="type"]').onchange = function () {
      const parent = this.parentElement;
      const newConfig = document.createElement('div');
      newConfig.innerHTML = this.selectedOptions[0].getAttribute('data-configuration');
      const oldConfig = parent.nextElementSibling;
      parent.parentElement.replaceChild(newConfig, oldConfig);
      const oldConfigInputName = oldConfig.querySelector('input').getAttribute('name');
      let newConfigInputName = newConfig.querySelector('input').getAttribute('name');
      newConfigInputName = oldConfigInputName.replace(oldConfigInputName.substring(oldConfigInputName.lastIndexOf('[') + 1, oldConfigInputName.lastIndexOf(']')), newConfigInputName.substring(newConfigInputName.indexOf('[') + 1, newConfigInputName.lastIndexOf(']')));
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(newConfig).find('input').attr('name', newConfigInputName);
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(newConfig).find('.sylius-autocomplete').autoComplete();
    };
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-chart.js":
/*!*****************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-chart.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js/auto'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

const drawChart = function drawChart(canvas, labels = [], values = [], currency) {
  return new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js/auto'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(canvas, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: 'rgba(26, 187, 156, 0.3)',
        borderColor: 'rgba(26, 187, 156, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            beginAtZero: true,
            callback(value) {
              const prefix = currency && currency.prefix ? currency.prefix : '';
              const suffix = currency && currency.suffix ? currency.suffix : '';
              return prefix + value + suffix;
            }
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      },
      layout: {
        padding: {
          left: 20,
          right: 20
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawChart);

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-compound-form-errors.js":
/*!********************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-compound-form-errors.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  addTabErrors() {
    const element = this;
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.ui.tab').each((idx, el) => {
      const errors = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el).find('.sylius-validation-error');
      if (errors.length !== 0) {
        const tabName = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el).attr('data-tab');
        const tabWithErrors = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).find(`a.item[data-tab="${tabName}"]`);
        const label = tabWithErrors.html();
        const newLabel = `${label}<span class="ui small horizontal circular label" style="background-color: #DB2828">${errors.length}</span>`;
        tabWithErrors.html(newLabel);
      }
    });
  },
  addAccordionErrors() {
    const element = this;
    const accordionElements = element.find('.ui.content');
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(accordionElements).each((idx, el) => {
      const errors = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el).find('.sylius-validation-error');
      if (errors.length !== 0) {
        const ribWithErrors = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el).closest('[data-locale]').find('.title');
        ribWithErrors.css('color', '#DB2828');
      }
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-form-collection.js":
/*!***************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-form-collection.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  setFromCollectionOnClickEventHandler(fieldsetId, typeName) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`#${fieldsetId}`).find('a[data-form-collection="add"]').on('click', event => Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).triggerChangeOnTypeField(event, typeName));
  },
  triggerChangeOnTypeField(event, typeName) {
    const name = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.target).closest('form').attr('name');
    setTimeout(() => {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`select[name^="${name}[${typeName}]"][name$="[type]"]`).last().change();
    }, 50);
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-forms-list.js":
/*!**********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-forms-list.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (['sylius_product', 'sylius_taxon', 'sylius_product_variant', 'sylius_product_generate_variants', 'sylius_inventory', 'sylius_product_attribute', 'sylius_product_option', 'sylius_product_association_type', 'sylius_customer', 'sylius_customer_group', 'sylius_promotion', 'sylius_promotion_coupon', 'sylius_promotion_coupon_generator_instruction', 'sylius_product_review', 'sylius_channel', 'sylius_country', 'sylius_zone', 'sylius_currency', 'sylius_exchange_rate', 'sylius_locale', 'sylius_payment_method', 'sylius_shipping_method', 'sylius_shipping_category', 'sylius_tax_category', 'sylius_tax_rate', 'sylius_admin_user'].map(form => `form[name="${form}"]`).join(', '));

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-lazy-choice-tree.js":
/*!****************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-lazy-choice-tree.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/checkbox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var sylius_ui_sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sylius/ui/sylius-sanitizer */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-sanitizer.js");
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */





const createRootContainer = function createRootContainer() {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('<div class="ui list"></div>');
};
const createLeafContainerElement = function createLeafContainerElement() {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('<div class="list"></div>');
};
const createLeafIconElement = function createLeafIconElement() {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('<i class="folder icon"></i>');
};
const createLeafTitleElement = function createLeafTitleElement() {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('<div class="header"></div>');
};
const createLeafTitleSpan = function createLeafTitleSpan(displayName) {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`<span style="margin-right: 5px; cursor: pointer;">${displayName}</span>`);
};
const createLeafContentElement = function createLeafContentElement() {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('<div class="content"></div>');
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  choiceTree(type, multiple, defaultLevel) {
    const tree = this;
    const loader = tree.find('.dimmer');
    const loadedLeafs = [];
    const $input = tree.find('input[type="hidden"]');
    const createCheckboxElement = function createCheckboxElement(name, code, multi) {
      const chosenNodes = $input.val().split(',');
      let checked = '';
      if (chosenNodes.some(chosenCode => chosenCode === code)) {
        checked = 'checked="checked"';
      }
      if (multi) {
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`<div class="ui checkbox" data-value="${code}"><input ${checked} type="checkbox" name="${type}"></div>`);
      }
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`<div class="ui radio checkbox" data-value="${code}"><input ${checked} type="radio" name="${type}"></div>`);
    };
    const isLeafLoaded = function isLeafLoaded(code) {
      return loadedLeafs.some(leafCode => leafCode === code);
    };
    let createLeafFunc;
    const loadLeafAction = function loadLeafAction(parentCode, expandButton, content, icon, leafContainerElement) {
      icon.toggleClass('open');
      if (!isLeafLoaded(parentCode)) {
        expandButton.api({
          on: 'now',
          url: tree.data('tree-leafs-url') || tree.data('taxon-leafs-url'),
          method: 'GET',
          cache: false,
          data: {
            parentCode
          },
          beforeSend(settings) {
            loader.addClass('active');
            return settings;
          },
          onSuccess(response) {
            response.forEach(leafNode => {
              leafContainerElement.append(createLeafFunc((0,sylius_ui_sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__.sanitizeInput)(leafNode.name), (0,sylius_ui_sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__.sanitizeInput)(leafNode.code), leafNode.hasChildren, multiple, leafNode.level));
            });
            content.append(leafContainerElement);
            loader.removeClass('active');
            loadedLeafs.push(parentCode);
            leafContainerElement.toggle();
          }
        });
      }
      leafContainerElement.toggle();
    };
    const bindExpandLeafAction = function bindExpandLeafAction(parentCode, expandButton, content, icon, level) {
      const leafContainerElement = createLeafContainerElement();
      if (defaultLevel > level) {
        loadLeafAction(parentCode, expandButton, content, icon, leafContainerElement);
      }
      expandButton.click(() => {
        loadLeafAction(parentCode, expandButton, content, icon, leafContainerElement);
      });
    };
    const bindCheckboxAction = function bindCheckboxAction(checkboxElement) {
      checkboxElement.checkbox({
        onChecked() {
          const {
            value
          } = checkboxElement[0].dataset;
          const checkedValues = $input.val().split(',').filter(Boolean);
          checkedValues.push(value);
          $input.val(checkedValues.join());
        },
        onUnchecked() {
          const {
            value
          } = checkboxElement[0].dataset;
          const checkedValues = $input.val().split(',').filter(Boolean);
          const i = checkedValues.indexOf(value);
          if (i !== -1) {
            checkedValues.splice(i, 1);
          }
          $input.val(checkedValues.join());
        }
      });
    };
    const createLeaf = function createLeaf(name, code, hasChildren, multipleChoice, level) {
      const displayNameElement = createLeafTitleSpan(name);
      const titleElement = createLeafTitleElement();
      const iconElement = createLeafIconElement();
      const checkboxElement = createCheckboxElement(name, code, multipleChoice);
      bindCheckboxAction(checkboxElement);
      const leafElement = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('<div class="item"></div>');
      const leafContentElement = createLeafContentElement();
      leafElement.append(iconElement);
      titleElement.append(displayNameElement);
      titleElement.append(checkboxElement);
      leafContentElement.append(titleElement);
      if (!hasChildren) {
        iconElement.addClass('outline');
      }
      if (hasChildren) {
        bindExpandLeafAction(code, displayNameElement, leafContentElement, iconElement, level);
      }
      leafElement.append(leafContentElement);
      return leafElement;
    };
    createLeafFunc = createLeaf;
    tree.api({
      on: 'now',
      method: 'GET',
      url: tree.data('tree-root-nodes-url') || tree.data('taxon-root-nodes-url'),
      cache: false,
      beforeSend(settings) {
        loader.addClass('active');
        return settings;
      },
      onSuccess(response) {
        const rootContainer = createRootContainer();
        response.forEach(rootNode => {
          rootContainer.append(createLeaf((0,sylius_ui_sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__.sanitizeInput)(rootNode.name), (0,sylius_ui_sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__.sanitizeInput)(rootNode.code), rootNode.hasChildren, multiple, rootNode.level));
        });
        tree.append(rootContainer);
        loader.removeClass('active');
      }
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-menu-search.js":
/*!***********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-menu-search.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  searchable(searchInputSelector) {
    const searchInput = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(searchInputSelector);
    const menu = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    searchInput.on('input', function (e) {
      const phrase = searchInput.val();
      const regex = new RegExp(phrase.replace(' ', '.*'), 'i');
      const foundItems = menu.find('.item').hide()
      // either filter by header if it has one or by text
      .filter(function () {
        const item = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
        const header = item.find('.header');
        if (header.length !== 0) {
          return regex.test(header.first().text());
        }
        return regex.test(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this).text());
      }).show();

      // show children if any
      foundItems.find('.item').show();

      // show parents if any
      foundItems.parentsUntil(menu, '.item').show();
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-move-product-variant.js":
/*!********************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-move-product-variant.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  moveProductVariant(positionInput) {
    const productVariantRows = [];
    const element = this;
    element.api({
      method: 'PUT',
      beforeSend(settings) {
        /* eslint-disable-next-line no-param-reassign */
        settings.data = {
          productVariants: productVariantRows,
          _csrf_token: element.data('csrf-token')
        };
        return settings;
      },
      onSuccess() {
        window.location.reload();
      }
    });
    positionInput.on('input', event => {
      const input = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget);
      const productVariantId = input.data('id');
      const row = productVariantRows.find(({
        id
      }) => id === productVariantId);
      if (!row) {
        productVariantRows.push({
          id: productVariantId,
          position: input.val()
        });
      } else {
        row.position = input.val();
      }
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-move-taxon.js":
/*!**********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-move-taxon.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/api'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  taxonMove() {
    const element = this;
    element.api({
      method: 'PUT',
      on: 'click',
      onSuccess() {
        window.location.reload();
      }
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-notification.js":
/*!************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-notification.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


const HUB_REQUEST_TIME = 'hub_request_time';
const LAST_SYLIUS_VERSION = 'last_sylius_version';
const SYLIUS_VERSION_DISMISSED = 'sylius_version_dismissed';
const MILISECONDS_MULTIPLIER = 1000;
const store = function store(key, value) {
  localStorage.setItem(key, value);
};
const retrieve = function retrieve(key) {
  return localStorage.getItem(key);
};
const milisecondsSinceLastRequest = function milisecondsSinceLastRequest() {
  return new Date().getTime() - parseInt(retrieve(HUB_REQUEST_TIME), 10);
};
const getDismissedSyliusVersion = function getDismissedSyliusVersion() {
  return retrieve(SYLIUS_VERSION_DISMISSED);
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  notification() {
    const notificationMenu = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-version-notification');
    if (0 === notificationMenu.length) {
      return;
    }
    const askFrequency = notificationMenu.attr('data-frequency') * MILISECONDS_MULTIPLIER;
    const getCurrentSyliusVersion = function getCurrentSyliusVersion() {
      return notificationMenu.data('current-version');
    };
    const getLatestSyliusVersion = function getLatestSyliusVersion() {
      if (retrieve(HUB_REQUEST_TIME) !== undefined && milisecondsSinceLastRequest() < askFrequency) {
        return retrieve(LAST_SYLIUS_VERSION);
      }
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        type: 'GET',
        url: notificationMenu.attr('data-url'),
        accept: 'application/json',
        success(response) {
          if (undefined !== response && undefined !== response.version && response.version !== retrieve(LAST_SYLIUS_VERSION)) {
            store(LAST_SYLIUS_VERSION, response.version.toString());
          }
        },
        complete() {
          store(HUB_REQUEST_TIME, new Date().getTime().toString());
        }
      });
      return retrieve(LAST_SYLIUS_VERSION);
    };
    const isLatest = function isLatest() {
      return getCurrentSyliusVersion() === getLatestSyliusVersion();
    };
    const isDismissed = function isDismissed() {
      return getLatestSyliusVersion() === getDismissedSyliusVersion();
    };
    const showNotification = function showNotification() {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#notifications').css('display', 'block');
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#no-notifications').css('display', 'none');
      notificationMenu.find('.bell.icon').removeClass('outline').addClass('yellow');
    };
    const hideNotification = function hideNotification() {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#notifications').css('display', 'none');
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#no-notifications').css('display', 'block');
      notificationMenu.find('.bell.icon').removeClass('yellow').addClass('outline');
    };
    const updateNotification = function updateNotification() {
      if (isLatest() || isDismissed()) {
        hideNotification();
        return;
      }
      showNotification();
    };
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(notificationMenu).find('i[data-dismiss]').on('click', () => {
      store(SYLIUS_VERSION_DISMISSED, getLatestSyliusVersion());
      updateNotification();
    });
    updateNotification();
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-product-images-preview.js":
/*!**********************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-product-images-preview.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


const displayUploadedImage = function displayUploadedImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = event => {
      const image = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(input).parent().siblings('.image');
      if (image.length > 0) {
        image.attr('src', event.target.result);
      } else {
        const img = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('<img class="ui small bordered image"/>');
        img.attr('src', event.target.result);
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(input).parent().before(img);
      }
    };
    reader.readAsDataURL(input.files[0]);
  }
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  previewUploadedImage(root) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(root).on('change', 'input[type="file"]', function () {
      displayUploadedImage(this);
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-product-slug.js":
/*!************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-product-slug.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


const updateSlug = function updateSlug(element) {
  const slugInput = element.parents('.content').find('[name*="[slug]"]');
  const loadableParent = slugInput.parents('.field.loadable');
  if (slugInput.attr('readonly') === 'readonly') {
    return;
  }
  loadableParent.addClass('loading');
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    type: 'GET',
    url: slugInput.attr('data-url'),
    data: {
      name: element.val()
    },
    dataType: 'json',
    accept: 'application/json',
    success(response) {
      slugInput.val(response.slug);
      if (slugInput.parents('.field').hasClass('error')) {
        slugInput.parents('.field').removeClass('error');
        slugInput.parents('.field').find('.sylius-validation-error').remove();
      }
      loadableParent.removeClass('loading');
    }
  });
};
const toggleSlugModification = function toggleSlugModification(button, slugInput) {
  if (slugInput.attr('readonly')) {
    slugInput.removeAttr('readonly');
    button.html('<i class="unlock icon"></i>');
  } else {
    slugInput.attr('readonly', 'readonly');
    button.html('<i class="lock icon"></i>');
  }
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  productSlugGenerator() {
    let timeout;
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[name*="sylius_product[translations]"][name*="[name]"]').on('input', event => {
      clearTimeout(timeout);
      const element = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget);
      timeout = setTimeout(() => {
        updateSlug(element);
      }, 1000);
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.toggle-product-slug-modification').on('click', event => {
      event.preventDefault();
      toggleSlugModification(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget).siblings('input'));
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-statistics.js":
/*!**********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-statistics.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _sylius_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sylius-chart */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-chart.js");
/* harmony import */ var _date_object_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-object-factory */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/date-object-factory.js");



class StatisticsComponent {
  constructor(wrapper) {
    if (!wrapper) return;
    this.weekInMilliseconds = 604800000;
    this.wrapper = wrapper;
    this.chart = null;
    this.chartCanvas = this.wrapper.querySelector('#stats-graph');
    this.summaryBoxes = this.wrapper.querySelectorAll('[data-stats-summary]');
    this.buttons = this.wrapper.querySelectorAll('[data-stats-button]');
    this.loader = this.wrapper.querySelector('.stats-loader');
    this.DateObjectFactory = new _date_object_factory__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.init();
  }
  init() {
    const defaultInterval = 'year';
    this.buttons.forEach(button => {
      button.addEventListener('click', this.fetchData.bind(this));
      if (button.getAttribute('data-stats-button') === defaultInterval) {
        button.classList.add('active');
      }
    });
    this.initializeNavButtons(defaultInterval);
    const labels = this.chartCanvas.getAttribute('data-labels') || '[]';
    const values = this.chartCanvas.getAttribute('data-values') || '[]';
    const currency = this.chartCanvas.getAttribute('data-currency') || '';
    this.chart = (0,_sylius_chart__WEBPACK_IMPORTED_MODULE_1__["default"])(this.chartCanvas, JSON.parse(labels), JSON.parse(values), {
      prefix: currency
    });
  }
  initializeNavButtons(defaultInterval) {
    this.prevButton = document.getElementById('navigation-prev');
    this.nextButton = document.getElementById('navigation-next');
    this.prevButton.addEventListener('click', this.fetchData.bind(this));
    this.nextButton.addEventListener('click', this.fetchData.bind(this));
    const DateObject = this.DateObjectFactory.createDateObject(defaultInterval, new Date());
    this.updateNavButtons(defaultInterval, DateObject.prevDate, DateObject.nextDate, DateObject.maxGraphDate);
  }
  fetchData(e) {
    let date = new Date();
    if (e.target.getAttribute('date')) {
      date = new Date(e.target.getAttribute('date'));
    }
    const interval = e.target.getAttribute('data-stats-button') || e.target.getAttribute('interval');
    const DateObject = this.DateObjectFactory.createDateObject(interval, date);
    this.updateNavButtons(interval, DateObject.prevDate, DateObject.nextDate, DateObject.maxGraphDate);
    const url = `${e.target.getAttribute('data-stats-url')}&interval=${DateObject.interval}&startDate=${this.formatDate(DateObject.startDate)}&endDate=${this.formatDate(DateObject.endDate)}`;
    if (url) {
      this.toggleLoadingState(true);
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        type: 'GET',
        url,
        dataType: 'json',
        accept: 'application/json'
      }).done(response => {
        this.updateSummaryValues(response.statistics);
        this.updateButtonsState(e.target);
        this.updateGraph(response.sales_summary);
      }).always(() => {
        this.toggleLoadingState(false);
      });
    }
  }
  updateSummaryValues(data) {
    this.summaryBoxes.forEach(box => {
      const name = box.getAttribute('data-stats-summary');
      if (name in data) {
        box.innerHTML = data[name];
      }
    });
  }
  updateGraph(data) {
    this.chart.data.labels = data.intervals;
    this.chart.data.datasets[0].data = data.sales;
    this.chart.update();
  }
  updateButtonsState(activeButton) {
    const interval = activeButton.getAttribute('data-stats-button') ? activeButton.getAttribute('data-stats-button') : activeButton.getAttribute('interval');
    this.buttons.forEach(button => {
      button.classList.remove('active');
      if (button.getAttribute('data-stats-button') === interval) {
        button.classList.add('active');
      }
    });
  }
  toggleLoadingState(loading) {
    if (loading) {
      this.loader.classList.add('active');
    } else {
      this.loader.classList.remove('active');
    }
  }
  formatDate(date) {
    let month = `${date.getMonth() + 1}`;
    let day = `${date.getDate()}`;
    const year = `${date.getFullYear()}`;
    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;
    return [year, month, day].join('-');
  }
  setInterval(element, interval) {
    element.setAttribute('interval', interval);
  }
  updateNavButtons(interval, prevDate, nextDate, maxGraphDate) {
    this.nextButton.disabled = false;
    this.nextButton.style.visibility = 'visible';
    if (nextDate > maxGraphDate) {
      this.nextButton.disabled = true;
      this.nextButton.style.visibility = 'hidden';
    }
    this.prevButton.setAttribute('interval', interval);
    this.nextButton.setAttribute('interval', interval);
    this.prevButton.setAttribute('date', this.formatDate(prevDate));
    this.nextButton.setAttribute('date', this.formatDate(nextDate));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatisticsComponent);

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-taxon-slug.js":
/*!**********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-taxon-slug.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


const updateSlug = function updateSlug(element) {
  const slugInput = element.parents('.content').find('[name*="[slug]"]');
  if (slugInput.attr('readonly') === 'readonly') {
    return;
  }
  const loadableParent = slugInput.parents('.field.loadable');
  const parentTaxonInput = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_taxon_parent');
  loadableParent.addClass('loading');
  let data;
  if (parentTaxonInput.length > 0 && parentTaxonInput.val() !== '') {
    data = {
      name: element.val(),
      locale: element.closest('[data-locale]').data('locale'),
      parentCode: parentTaxonInput.val()
    };
  } else {
    data = {
      name: element.val(),
      locale: element.closest('[data-locale]').data('locale')
    };
  }
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    type: 'GET',
    url: slugInput.attr('data-url'),
    data,
    dataType: 'json',
    accept: 'application/json',
    success(response) {
      slugInput.val(response.slug);
      if (slugInput.parents('.field').hasClass('error')) {
        slugInput.parents('.field').removeClass('error');
        slugInput.parents('.field').find('.sylius-validation-error').remove();
      }
    },
    error() {
      slugInput.val('');
    },
    complete() {
      loadableParent.removeClass('loading');
    }
  });
};
const toggleSlugModification = function toggleSlugModification(button, slugInput) {
  if (slugInput.attr('readonly')) {
    slugInput.removeAttr('readonly');
    button.html('<i class="unlock icon"></i>');
  } else {
    slugInput.attr('readonly', 'readonly');
    button.html('<i class="lock icon"></i>');
  }
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  taxonSlugGenerator() {
    let timeout;
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[name*="sylius_taxon[translations]"][name*="[name]"]').on('input', event => {
      clearTimeout(timeout);
      const element = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget);
      timeout = setTimeout(() => {
        updateSlug(element);
      }, 1000);
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_taxon_parent').parent().on('change', () => {
      const nameInput = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[data-locale]').find('.content.active [name*="sylius_taxon[translations]"][name*="[name]"]');
      if (nameInput.val() === '') {
        return;
      }
      updateSlug(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(nameInput));
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.toggle-taxon-slug-modification').on('click', event => {
      event.preventDefault();
      toggleSlugModification(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget).siblings('input'));
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-taxon-tree.js":
/*!**********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/sylius-taxon-tree.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class SyliusTaxonomyTree {
  constructor() {
    this.attr = {
      tree: 'data-sylius-js-tree',
      parent: 'data-sylius-js-tree-parent',
      trigger: 'data-sylius-js-tree-trigger',
      storageName: 'sylius:taxonomy:hidden'
    };
    this.tree = document.querySelector(`[${this.attr.tree}]`);
    if (!this.tree) return;
    this.hiddenItems = this.getMapFromStorage();
    this.renderMap();
    this.tree.classList.remove('hidden');
    this.tree.querySelectorAll(`[${this.attr.trigger}]`).forEach(trigger => {
      trigger.addEventListener('click', this.handleTrigger.bind(this, trigger));
    });
  }
  handleTrigger(trigger, e) {
    e.preventDefault();
    const id = trigger.getAttribute(this.attr.trigger) || null;
    const parent = this.tree.querySelector(`[${this.attr.parent}="${id}"]`) || this.tree;
    const toRemove = this.hiddenItems.indexOf(id) === -1;
    this.hiddenItems = !id && this.hiddenItems.length ? [] : this.toggle(toRemove, this.getIDs(parent, toRemove));
    this.saveMapToStorage(this.hiddenItems);
    this.renderMap();
  }

  /**
   * Adding or removing the given array of items ID from the hiddenItems array
   * @param {boolean} action - true: add, false: remove from array
   * @param {Array} ids - array of items ID
   * @return {Array}
   */
  toggle(action, ids) {
    const newMap = [...this.hiddenItems];
    ids.forEach(item => {
      const index = newMap.indexOf(item);
      if (action && index === -1) newMap.push(item);
      if (!action && index !== -1) newMap.splice(index, 1);
    });
    return newMap;
  }

  /**
   * Return ID of given Node element (if has one) and optional IDs of children
   * @param {Node} parent
   * @param {boolean} withChildren
   * @return {Array}
   */
  getIDs(parent, withChildren = true) {
    const arr = parent.hasAttribute(this.attr.parent) ? [parent] : [];
    const children = withChildren ? [].slice.call(parent.querySelectorAll(`[${this.attr.parent}]`)) : [];
    return [...arr, ...children].map((child, i) => child.getAttribute(this.attr.parent));
  }

  /**
   * Hides elements if their ID is in the hiddenItems array
   */
  renderMap() {
    this.tree.querySelectorAll(`[${this.attr.parent}]`).forEach(parent => {
      const id = parent.getAttribute(this.attr.parent);
      const state = this.hiddenItems.indexOf(id) !== -1;
      parent.classList.toggle('hide', state);
    });
  }

  /**
   * Get items from local storage
   * @return {Array}
   */
  getMapFromStorage() {
    const items = localStorage.getItem(this.attr.storageName);
    return items ? JSON.parse(items) : [];
  }

  /**
   * Save items to local storage
   * @param {Array} items
   */
  saveMapToStorage(items) {
    window.localStorage.setItem(this.attr.storageName, JSON.stringify(items));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyliusTaxonomyTree);

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/app.js":
/*!*****************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/app.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/accordion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/checkbox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/dimmer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/dropdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/rating'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/sidebar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/tab'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/transition'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _sylius_bulk_action_require_confirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sylius-bulk-action-require-confirmation */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-bulk-action-require-confirmation.js");
/* harmony import */ var _sylius_form_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sylius-form-collection */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-form-collection.js");
/* harmony import */ var _sylius_require_confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sylius-require-confirmation */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-require-confirmation.js");
/* harmony import */ var _sylius_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sylius-toggle */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-toggle.js");
/* harmony import */ var _sylius_check_all__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sylius-check-all */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-check-all.js");
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */















Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).ready(() => {
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sidebar').addClass('visible');
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sidebar').sidebar('attach events', '#sidebar-toggle', 'toggle');
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sidebar').sidebar('setting', {
    dimPage: false,
    closable: false
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.ui.checkbox').checkbox();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.ui.accordion').accordion();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.ui.menu .dropdown').dropdown({
    action: 'hide'
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.ui.inline.dropdown').dropdown();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.link.ui.dropdown').dropdown({
    action: 'hide'
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.button.ui.dropdown').dropdown({
    action: 'hide'
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.ui.fluid.search.selection.ui.dropdown').dropdown();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.ui.tabular.menu .item, .sylius-tabular-form .menu .item').tab();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.ui.card .dimmable.image, .ui.cards .card .dimmable.image').dimmer({
    on: 'hover'
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.ui.rating').rating('disable');
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form.loadable button[type=submit]').on('click', event => {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget).closest('form').addClass('loading');
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.loadable.button').on('click', event => {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget).addClass('loading');
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.message .close').on('click', event => {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget).closest('.message').transition('fade');
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[data-requires-confirmation]').requireConfirmation();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[data-bulk-action-requires-confirmation]').bulkActionRequireConfirmation();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[data-toggles]').toggleElement();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[data-js-bulk-checkboxes]').checkAll();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.special.cards .image').dimmer({
    on: 'hover'
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[data-form-type="collection"]').CollectionForm();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[data-js-disable]').on('click', e => {
    const $current = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(e.currentTarget);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).find($current.attr('data-js-disable')).addClass('disabled');
  });
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-auto-complete.js":
/*!**********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-auto-complete.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/dropdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sylius-sanitizer */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-sanitizer.js");
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */




Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  autoComplete() {
    this.each((idx, el) => {
      const element = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el);
      const criteriaName = element.data('criteria-name');
      const choiceName = element.data('choice-name');
      const choiceValue = element.data('choice-value');
      const autocompleteValue = element.find('input.autocomplete').val();
      const loadForEditUrl = element.data('load-edit-url');
      element.dropdown({
        delay: {
          search: 250
        },
        forceSelection: false,
        saveRemoteData: false,
        apiSettings: {
          dataType: 'JSON',
          cache: false,
          beforeSend(settings) {
            /* eslint-disable-next-line no-param-reassign */
            settings.data[criteriaName] = settings.urlData.query;
            return settings;
          },
          onResponse(response) {
            let results = response.map(item => ({
              name: (0,_sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__.sanitizeInput)(item[choiceName]),
              value: (0,_sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__.sanitizeInput)(item[choiceValue])
            }));
            if (!element.hasClass('multiple')) {
              results.unshift({
                name: '&nbsp;',
                value: ''
              });
            }
            return {
              success: true,
              results: results
            };
          }
        }
      });
      if (autocompleteValue.split(',').filter(String).length > 0) {
        const menuElement = element.find('div.menu');
        menuElement.api({
          on: 'now',
          method: 'GET',
          url: loadForEditUrl,
          beforeSend(settings) {
            /* eslint-disable-next-line no-param-reassign */
            settings.data[choiceValue] = autocompleteValue.split(',').filter(String);
            return settings;
          },
          onSuccess(response) {
            response.forEach(item => {
              menuElement.append(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`<div class="item" data-value="${item[choiceValue]}">${(0,_sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__.sanitizeInput)(item[choiceName])}</div>`));
            });
            element.dropdown('refresh');
            element.dropdown('set selected', element.find('input.autocomplete').val().split(',').filter(String));
          }
        });
      }
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-bulk-action-require-confirmation.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-bulk-action-require-confirmation.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/modal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  bulkActionRequireConfirmation() {
    this.each((idx, el) => {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el).on('click', evt => {
        evt.preventDefault();
        const actionButton = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(evt.currentTarget);
        if (actionButton.is('a')) {
          Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#confirmation-button').on('click', event => {
            event.preventDefault();
            window.location.href = actionButton.attr('href');
          });
        }
        if (actionButton.is('button')) {
          Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#confirmation-button').on('click', event => {
            event.preventDefault();
            const form = actionButton.closest('form');
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('input.bulk-select-checkbox:checked').each((index, element) => {
              Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`<input type="hidden" name="ids[]" value="${element.value}">`).appendTo(form);
            });
            form.submit();
          });
        }
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#confirmation-modal').modal('show');
      });
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-check-all.js":
/*!******************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-check-all.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  checkAll() {
    this.each((idx, el) => {
      const $checkboxAll = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el);
      const $checkboxes = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())($checkboxAll.attr('data-js-bulk-checkboxes'));
      const $buttons = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())($checkboxAll.attr('data-js-bulk-buttons'));
      const isAnyChecked = () => {
        let checked = false;
        $checkboxes.each((i, checkbox) => {
          if (checkbox.checked) checked = true;
        });
        return checked;
      };
      const buttonsPropRefresh = () => {
        $buttons.find('button').prop('disabled', !isAnyChecked());
      };
      $checkboxAll.on('change', () => {
        $checkboxes.prop('checked', Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this).is(':checked'));
        buttonsPropRefresh();
      });
      $checkboxes.on('change', () => {
        $checkboxAll.prop('checked', isAnyChecked());
        buttonsPropRefresh();
      });
      buttonsPropRefresh();
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-form-collection.js":
/*!************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-form-collection.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



/**
 * Collection Form plugin
 *
 * @param element
 * @constructor
 */
class CollectionForm {
  constructor(element) {
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.constructor.deleteItem;
    this.updatePrototype = this.updatePrototype.bind(this);
    this.$element = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element);
    this.$list = this.$element.find('[data-form-collection="list"]:first');
    this.count = this.$list.children().length;
    this.lastChoice = null;
    this.$element.on('click', '[data-form-collection="add"]:last', this.addItem);
    this.$element.on('click', '[data-form-collection="delete"]', this.deleteItem);
    this.$element.on('change', '[data-form-collection="update"]', this.updateItem);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).on('change', '[data-form-prototype="update"]', this.updatePrototype);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).on('collection-form-add', (event, addedElement) => {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(addedElement).find('[data-form-type="collection"]').CollectionForm();
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).trigger('dom-node-inserted', [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(addedElement)]);
    });
  }

  /**
   * Add a item to the collection.
   * @param event
   */
  addItem(event) {
    event.preventDefault();
    let prototype = this.$element.data('prototype');
    let prototypeName = new RegExp(this.$element.data('prototype-name'), 'g');
    prototype = prototype.replace(prototypeName, this.count);
    this.$list.append(prototype);
    this.count = this.count + 1;
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).trigger('collection-form-add', [this.$list.children().last()]);
  }

  /**
   * Update item from the collection
   */
  updateItem(event) {
    event.preventDefault();
    const $element = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget);
    const url = $element.data('form-url');
    const value = $element.val();
    const $container = $element.closest('[data-form-collection="item"]');
    const index = $container.data('form-collection-index');
    const position = $container.data('form-collection-index');
    if (url) {
      $container.load(url, {
        id: value,
        position
      });
    } else {
      let $prototype = this.$element.find(`[data-form-prototype="${value}"]`);
      let prototypeName = new RegExp($prototype.data('subprototype-name'), 'g');
      let prototype = $prototype.val().replace(prototypeName, index);
      $container.replaceWith(prototype);
    }
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).trigger('collection-form-update', [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget)]);
  }

  /**
   * Delete item from the collection
   * @param event
   */
  static deleteItem(event) {
    event.preventDefault();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget).closest('[data-form-collection="item"]').remove();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).trigger('collection-form-delete', [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget)]);
  }

  /**
   * Update the prototype
   * @param event
   */
  updatePrototype(event) {
    const $target = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget);
    let prototypeName = $target.val();
    if ($target.data('form-prototype-prefix') !== undefined) {
      prototypeName = $target.data('form-prototype-prefix') + prototypeName;
    }
    if (this.lastChoice !== null && this.lastChoice !== prototypeName) {
      this.$list.html('');
    }
    this.lastChoice = prototypeName;
    this.$element.data('prototype', this.$element.find(`[data-form-prototype="${prototypeName}"]`).val());
  }
}

/*
 * Plugin definition
 */

Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CollectionForm = function CollectionFormPlugin(option) {
  this.each((idx, el) => {
    const $element = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el);
    const data = $element.data('collectionForm');
    const options = typeof option === 'object' && option;
    if (!data) {
      $element.data('collectionForm', new CollectionForm(el, options));
    }
  });
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CollectionForm.Constructor = CollectionForm;

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-product-attributes.js":
/*!***************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-product-attributes.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/dropdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



const getNextIndex = function getNextIndex() {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#attributesContainer').attr('data-count');
};
const addAttributesNumber = function addAttributesNumber(number) {
  const currentIndex = parseInt(getNextIndex(), 10);
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#attributesContainer').attr('data-count', currentIndex + number);
};
const controlAttributesList = function controlAttributesList() {
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#attributesContainer .attribute').each((index, element) => {
    const value = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).attr('data-id');
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_product_attribute_choice').dropdown('set selected', value);
  });
};
const modifyAttributesListOnSelectorElementDelete = function modifyAttributesListOnSelectorElementDelete(removedValue) {
  // Once the enter key pressed on any field in the product page cause an attribute deletion.
  // When this bug occurs, the value of pageX is equal to 0. So if pageX is not equal to 0, it means the user clicked
  // on the delete button, so the remove method should be called.
  if (event.pageX != 0) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`#attributesContainer .attributes-group[data-attribute-code="${removedValue}"]`).remove();
  }
};
const modifySelectorOnAttributesListElementDelete = function modifySelectorOnAttributesListElementDelete() {
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.attributes-group button[data-attribute="delete"]').off('click').on('click', event => {
    const attributeId = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget).parents('.attributes-group').attr('data-attribute-code');
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div#attributeChoice > .ui.dropdown.search').dropdown('remove selected', attributeId);
    modifyAttributesListOnSelectorElementDelete(attributeId);
  });
};
const modifyAttributeFormElements = function modifyAttributeFormElements($response) {
  $response.find('input,select,textarea').each((index, element) => {
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).attr('data-name') != null) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).attr('name', Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).attr('data-name'));
    }
  });
  return $response;
};
const isInTheAttributesContainer = function isInTheAttributesContainer(attributeId) {
  let result = false;
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#attributesContainer .attribute').each((index, element) => {
    const dataId = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).attr('data-id');
    if (dataId === attributeId) {
      result = true;
    }
  });
  return result;
};
const copyValueToAllLanguages = function copyValueToAllLanguages() {
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#attributesContainer').on('click', '.attribute [data-attribute="copy"]', event => {
    event.preventDefault();
    const $attributesContainer = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#attributesContainer');
    const $masterAttribute = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget).closest('.attribute');
    const attributeID = $masterAttribute.attr('data-id');
    const $attributeCollection = $attributesContainer.find(`[data-id="${attributeID}"]`);
    const $masterAttributeInputs = $masterAttribute.find('input:visible, select, textarea');
    $attributeCollection.each((index, attr) => {
      const $inputs = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(attr).find('input:visible, select, textarea');
      $inputs.each((i, input) => {
        if (input.getAttribute('type') === 'checkbox') {
          input.checked = $masterAttributeInputs[i].checked;
        } else if (input.nodeName === 'SELECT') {
          for (let x = 0; x < $inputs[i].length; x++) {
            const masterOption = Array.from($masterAttributeInputs[i].options).find(option => option.value === input[x].value);
            input[x].selected = masterOption ? masterOption.selected : false;
          }
        } else {
          input.value = $masterAttributeInputs[i].value;
        }
      });
    });
  });
};
const setAttributeChoiceListener = function setAttributeChoiceListener() {
  const $attributeChoice = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#attributeChoice');
  $attributeChoice.find('button').on('click', event => {
    event.preventDefault();
    const $attributeChoiceSelect = $attributeChoice.find('select');
    let queryData = '';
    const $newAttributes = $attributeChoiceSelect.val();
    if ($newAttributes != null) {
      $attributeChoiceSelect.val().forEach(item => {
        if (!isInTheAttributesContainer(item)) {
          queryData += `${$attributeChoiceSelect.prop('name')}=${item}&`;
        }
      });
    }
    queryData += `count=${getNextIndex()}`;
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form').addClass('loading');
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      type: 'GET',
      url: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget).parent().attr('data-action'),
      data: queryData,
      dataType: 'html',
      error() {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form').removeClass('loading');
      },
      success(response) {
        const attributeFormElements = modifyAttributeFormElements(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(response));
        attributeFormElements.each((index, element) => {
          const localeCode = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).find('input[type="hidden"]').last().val();
          Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`#attributesContainer > div`).append(element);
        });
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_product_attribute_choice').val('');
        addAttributesNumber(attributeFormElements.find('.attribute').length);
        modifySelectorOnAttributesListElementDelete();
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form').removeClass('loading');
      }
    });
  });
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  productAttributes() {
    setAttributeChoiceListener();
    this.dropdown({
      onRemove(removedValue) {
        modifyAttributesListOnSelectorElementDelete(removedValue);
      },
      forceSelection: false
    });
    controlAttributesList();
    modifySelectorOnAttributesListElementDelete();
    copyValueToAllLanguages();
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-product-auto-complete.js":
/*!******************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-product-auto-complete.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/dropdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sylius-sanitizer */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-sanitizer.js");
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */




Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  productAutoComplete() {
    this.each((index, element) => {
      const $element = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element);
      $element.dropdown('set selected', $element.find('input[name*="[associations]"]').val().split(',').filter(String));
    });
    this.dropdown({
      delay: {
        search: 250
      },
      forceSelection: false,
      apiSettings: {
        dataType: 'JSON',
        cache: false,
        data: {
          criteria: {
            search: {
              type: 'contains',
              value: ''
            }
          }
        },
        beforeSend(settings) {
          /* eslint-disable-next-line no-param-reassign */
          settings.data.criteria.search.value = settings.urlData.query;
          return settings;
        },
        onResponse(response) {
          return {
            success: true,
            results: response._embedded.items.map(item => ({
              name: (0,_sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__.sanitizeInput)(item.name),
              value: (0,_sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__.sanitizeInput)(item.code)
            }))
          };
        }
      },
      onAdd(addedValue, addedText, $addedChoice) {
        const inputAssociation = $addedChoice.parents('.product-select').find('input[name*="[associations]"]');
        const associatedProductCodes = inputAssociation.val().length > 0 ? inputAssociation.val().split(',').filter(String) : [];
        associatedProductCodes.push(addedValue);
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(associatedProductCodes.sort());
        inputAssociation.attr('value', associatedProductCodes.join());
      },
      onRemove(removedValue, removedText, $removedChoice) {
        const inputAssociation = $removedChoice.parents('.product-select').find('input[name*="[associations]"]');
        const associatedProductCodes = inputAssociation.val().length > 0 ? inputAssociation.val().split(',').filter(String) : [];
        associatedProductCodes.splice(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(removedValue, associatedProductCodes), 1);
        inputAssociation.attr('value', associatedProductCodes.join());
      }
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-prototype-handler.js":
/*!**************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-prototype-handler.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


const methods = {
  init(options) {
    const settings = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      prototypePrefix: false,
      containerSelector: false
    }, options);
    const show = function show(element, replace) {
      const selectedValue = element.val();
      let prototypePrefix = element.attr('id');
      if (settings.prototypePrefix != false) {
        ({
          prototypePrefix
        } = settings);
      }
      const prototypeElement = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`#${prototypePrefix}_${selectedValue}`);
      let container;
      if (settings.containerSelector) {
        container = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(settings.containerSelector);
      } else {
        container = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(prototypeElement.data('container'));
      }
      if (!container.length) {
        return;
      }
      if (!prototypeElement.length) {
        container.empty();
        return;
      }
      if (replace || !container.html().trim()) {
        container.html(prototypeElement.data('prototype'));
      }
    };
    return this.each((index, element) => {
      show(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element), false);
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).change(event => {
        show(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget), true);
      });
    });
  }
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).handlePrototypes = function handlePrototypes(method, ...args) {
  if (methods[method]) {
    return methods[method].apply(this, args);
  } else if (typeof method === 'object' || !method) {
    return methods.init.apply(this, [method, ...args]);
  }
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`Method ${method} does not exist on jQuery.handlePrototypes`);
  return undefined;
};

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-require-confirmation.js":
/*!*****************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-require-confirmation.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/modal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  requireConfirmation() {
    this.each((idx, el) => {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el).on('click', evt => {
        evt.preventDefault();
        const actionButton = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(evt.currentTarget);
        if (actionButton.is('a')) {
          Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#confirmation-button').on('click', event => {
            event.preventDefault();
            window.location.href = actionButton.attr('href');
          });
        }
        if (actionButton.is('button')) {
          Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#confirmation-button').on('click', event => {
            event.preventDefault();
            actionButton.closest('form').submit();
          });
        }
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#confirmation-modal').modal('show');
      });
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-sanitizer.js":
/*!******************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-sanitizer.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sanitizeInput: () => (/* binding */ sanitizeInput)
/* harmony export */ });
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML; // Converts text content to plain HTML, stripping any scripts
}

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-toggle.js":
/*!***************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-toggle.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  toggleElement() {
    this.each((idx, el) => {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el).on('change', event => {
        event.preventDefault();
        const toggle = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget);
        const targetElement = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`#${toggle.data('toggles')}`);
        if (toggle.is(':checked')) {
          targetElement.show();
        } else {
          targetElement.hide();
        }
      });
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el).trigger('change');
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/sass/main.scss":
/*!*************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/sass/main.scss ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/sass/main.scss":
/*!**********************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/sass/main.scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/img/admin-logo.svg":
/*!*****************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/img/admin-logo.svg ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/admin-logo.36187e06.svg";

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/200x200.png":
/*!***********************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/200x200.png ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/200x200.a25ae7d9.png";

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/50x50.png":
/*!*********************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/50x50.png ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/50x50.e32f09cc.png";

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/logo.png":
/*!********************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/logo.png ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.72a9465e.png";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/build/admin/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/entry.js ***!
  \*******************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_shim_shim_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/shim/shim-jquery */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/shim/shim-jquery.js");
/* harmony import */ var _js_shim_shim_semantic_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/shim/shim-semantic-ui */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/shim/shim-semantic-ui.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/semantic.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var sylius_ui_resources_js_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sylius/ui-resources/js/app */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/app.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/app */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/js/app.js");
/* harmony import */ var sylius_ui_resources_sass_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sylius/ui-resources/sass/main.scss */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sass/main.scss */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/sass/main.scss");
/* harmony import */ var _img_admin_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/admin-logo.svg */ "../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/Resources/private/img/admin-logo.svg");
/* harmony import */ var sylius_ui_resources_img_200x200_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sylius/ui-resources/img/200x200.png */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/200x200.png");
/* harmony import */ var sylius_ui_resources_img_50x50_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sylius/ui-resources/img/50x50.png */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/50x50.png");
/* harmony import */ var sylius_ui_resources_img_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sylius/ui-resources/img/logo.png */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/logo.png");











/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXJELElBQUkvRixNQUFNLENBQUNzWSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7VUFDekJ3RixhQUFhLENBQUNoUSxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLE1BQU07VUFDTGdRLGFBQWEsQ0FBQ3RRLElBQUksQ0FBQyxDQUFDO1FBQ3RCO01BQ0YsQ0FBQyxDQUFDO01BRUZsTyxxSUFBQyxDQUFDb0ksRUFBRSxDQUFDLENBQUNzTixPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQzlCRjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ0s7QUFFRTtBQUVGO0FBQ2xCO0FBRTBCO0FBQ2xCO0FBRUk7QUFFZTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL0FkbWluQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvQWRtaW5CdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvZGF0ZS1vYmplY3QtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvQWRtaW5CdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvZGF0ZU9iamVjdHMvbW9udGgtZGF0ZS1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL0FkbWluQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL2RhdGVPYmplY3RzL3dlZWstZGF0ZS1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL0FkbWluQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL2RhdGVPYmplY3RzL3llYXItZGF0ZS1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL0FkbWluQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3NoaW0vc2hpbS1qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL0FkbWluQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3NoaW0vc2hpbS1zZW1hbnRpYy11aS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvQWRtaW5CdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLWNhdGFsb2ctcHJvbW90aW9uLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL0FkbWluQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1jYXRhbG9nLXByb21vdGlvbi1zY29wZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL0FkbWluQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvQWRtaW5CdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLWNvbXBvdW5kLWZvcm0tZXJyb3JzLmpzIiwid2VicGFjazovLy8uLi8uLi92ZW5kb3Ivc3lsaXVzL3N5bGl1cy9zcmMvU3lsaXVzL0J1bmRsZS9BZG1pbkJ1bmRsZS9SZXNvdXJjZXMvcHJpdmF0ZS9qcy9zeWxpdXMtZm9ybS1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi92ZW5kb3Ivc3lsaXVzL3N5bGl1cy9zcmMvU3lsaXVzL0J1bmRsZS9BZG1pbkJ1bmRsZS9SZXNvdXJjZXMvcHJpdmF0ZS9qcy9zeWxpdXMtZm9ybXMtbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvQWRtaW5CdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLWxhenktY2hvaWNlLXRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL0FkbWluQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1tZW51LXNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvQWRtaW5CdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLW1vdmUtcHJvZHVjdC12YXJpYW50LmpzIiwid2VicGFjazovLy8uLi8uLi92ZW5kb3Ivc3lsaXVzL3N5bGl1cy9zcmMvU3lsaXVzL0J1bmRsZS9BZG1pbkJ1bmRsZS9SZXNvdXJjZXMvcHJpdmF0ZS9qcy9zeWxpdXMtbW92ZS10YXhvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvQWRtaW5CdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLW5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvQWRtaW5CdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLXByb2R1Y3QtaW1hZ2VzLXByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL0FkbWluQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1wcm9kdWN0LXNsdWcuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL0FkbWluQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1zdGF0aXN0aWNzLmpzIiwid2VicGFjazovLy8uLi8uLi92ZW5kb3Ivc3lsaXVzL3N5bGl1cy9zcmMvU3lsaXVzL0J1bmRsZS9BZG1pbkJ1bmRsZS9SZXNvdXJjZXMvcHJpdmF0ZS9qcy9zeWxpdXMtdGF4b24tc2x1Zy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvQWRtaW5CdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLXRheG9uLXRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1VpQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvVWlCdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLWF1dG8tY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1VpQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1idWxrLWFjdGlvbi1yZXF1aXJlLWNvbmZpcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvVWlCdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLWNoZWNrLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvVWlCdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLWZvcm0tY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvVWlCdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLXByb2R1Y3QtYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvVWlCdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLXByb2R1Y3QtYXV0by1jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvVWlCdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLXByb3RvdHlwZS1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uLi8uLi92ZW5kb3Ivc3lsaXVzL3N5bGl1cy9zcmMvU3lsaXVzL0J1bmRsZS9VaUJ1bmRsZS9SZXNvdXJjZXMvcHJpdmF0ZS9qcy9zeWxpdXMtcmVxdWlyZS1jb25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1VpQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1zYW5pdGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1VpQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL0FkbWluQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL3Nhc3MvbWFpbi5zY3NzP2YxMTAiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1VpQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL3Nhc3MvbWFpbi5zY3NzP2I1OTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy8uLi8uLi92ZW5kb3Ivc3lsaXVzL3N5bGl1cy9zcmMvU3lsaXVzL0J1bmRsZS9BZG1pbkJ1bmRsZS9SZXNvdXJjZXMvcHJpdmF0ZS9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2FjY29yZGlvbic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdqcXVlcnkuZGlydHlmb3Jtcy9qcXVlcnkuZGlydHlmb3Jtcyc7XG5cbmltcG9ydCAnc3lsaXVzL3VpL2FwcCc7XG5pbXBvcnQgJ3N5bGl1cy91aS9zeWxpdXMtYXV0by1jb21wbGV0ZSc7XG5pbXBvcnQgJ3N5bGl1cy91aS9zeWxpdXMtcHJvZHVjdC1hdHRyaWJ1dGVzJztcbmltcG9ydCAnc3lsaXVzL3VpL3N5bGl1cy1wcm9kdWN0LWF1dG8tY29tcGxldGUnO1xuaW1wb3J0ICdzeWxpdXMvdWkvc3lsaXVzLXByb3RvdHlwZS1oYW5kbGVyJztcblxuaW1wb3J0ICcuL3N5bGl1cy1jYXRhbG9nLXByb21vdGlvbi1hY3Rpb25zJztcbmltcG9ydCAnLi9zeWxpdXMtY2F0YWxvZy1wcm9tb3Rpb24tc2NvcGVzJztcbmltcG9ydCAnLi9zeWxpdXMtY29tcG91bmQtZm9ybS1lcnJvcnMnO1xuaW1wb3J0ICcuL3N5bGl1cy1mb3JtLWNvbGxlY3Rpb24nO1xuaW1wb3J0ICcuL3N5bGl1cy1sYXp5LWNob2ljZS10cmVlJztcbmltcG9ydCAnLi9zeWxpdXMtbWVudS1zZWFyY2gnO1xuaW1wb3J0ICcuL3N5bGl1cy1tb3ZlLXByb2R1Y3QtdmFyaWFudCc7XG5pbXBvcnQgJy4vc3lsaXVzLW1vdmUtdGF4b24nO1xuaW1wb3J0ICcuL3N5bGl1cy1ub3RpZmljYXRpb24nO1xuaW1wb3J0ICcuL3N5bGl1cy1wcm9kdWN0LWltYWdlcy1wcmV2aWV3JztcbmltcG9ydCAnLi9zeWxpdXMtcHJvZHVjdC1zbHVnJztcbmltcG9ydCAnLi9zeWxpdXMtdGF4b24tc2x1Zyc7XG5cbmltcG9ydCBTdGF0aXN0aWNzQ29tcG9uZW50IGZyb20gJy4vc3lsaXVzLXN0YXRpc3RpY3MnO1xuaW1wb3J0IFN5bGl1c1RheG9ub215VHJlZSBmcm9tICcuL3N5bGl1cy10YXhvbi10cmVlJztcbmltcG9ydCBmb3Jtc0xpc3QgZnJvbSAnLi9zeWxpdXMtZm9ybXMtbGlzdCc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgJCgnI3N5bGl1c19wcm9kdWN0X3ZhcmlhbnRfcHJpY2luZ0NhbGN1bGF0b3InKS5oYW5kbGVQcm90b3R5cGVzKHtcbiAgICBwcm90b3R5cGVQcmVmaXg6ICdzeWxpdXNfcHJvZHVjdF92YXJpYW50X3ByaWNpbmdDYWxjdWxhdG9yJyxcbiAgICBjb250YWluZXJTZWxlY3RvcjogJyNzeWxpdXNfY2FsY3VsYXRvcl9jb250YWluZXInLFxuICB9KTtcblxuICAkKCcjc3lsaXVzX2N1c3RvbWVyX2NyZWF0ZVVzZXInKS5jaGFuZ2UoKCkgPT4ge1xuICAgICQoJyN1c2VyLWZvcm0nKS50b2dnbGUoKTtcbiAgfSk7XG5cbiAgJCgnLnN5bGl1cy1hdXRvY29tcGxldGUnKS5hdXRvQ29tcGxldGUoKTtcblxuICAkKCcucHJvZHVjdC1zZWxlY3QudWkuZmx1aWQubXVsdGlwbGUuc2VhcmNoLnNlbGVjdGlvbi5kcm9wZG93bicpLnByb2R1Y3RBdXRvQ29tcGxldGUoKTtcbiAgJCgnZGl2I2F0dHJpYnV0ZUNob2ljZSA+IC51aS5kcm9wZG93bi5zZWFyY2gnKS5wcm9kdWN0QXR0cmlidXRlcygpO1xuXG4gICQoJ3RhYmxlIHRoZWFkIHRoLnNvcnRhYmxlJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5maW5kKCdhJykuYXR0cignaHJlZicpO1xuICB9KTtcblxuICAkKCcuc3lsaXVzLXVwZGF0ZS1wcm9kdWN0LXZhcmlhbnRzJykubW92ZVByb2R1Y3RWYXJpYW50KCQoJy5zeWxpdXMtcHJvZHVjdC12YXJpYW50LXBvc2l0aW9uJykpO1xuXG4gICQoJy5zeWxpdXMtdGF4b24tbW92ZS11cCcpLnRheG9uTW92ZSgpO1xuICAkKCcuc3lsaXVzLXRheG9uLW1vdmUtZG93bicpLnRheG9uTW92ZSgpO1xuXG4gICQoJyNzeWxpdXNfc2hpcHBpbmdfbWV0aG9kX2NhbGN1bGF0b3InKS5oYW5kbGVQcm90b3R5cGVzKHtcbiAgICBwcm90b3R5cGVQcmVmaXg6ICdzeWxpdXNfc2hpcHBpbmdfbWV0aG9kX2NhbGN1bGF0b3JfY2FsY3VsYXRvcnMnLFxuICAgIGNvbnRhaW5lclNlbGVjdG9yOiAnLmNvbmZpZ3VyYXRpb24nLFxuICB9KS5jaGFuZ2UoKCkgPT4ge1xuICAgICQoJy51aS50YWJ1bGFyLm1lbnUgLml0ZW0nKS50YWIoKTtcbiAgfSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICQoJy51aS50YWJ1bGFyLm1lbnUgLml0ZW0nKS50YWIoKTtcbiAgfSwgNTApO1xuXG4gICQoJyNzeWxpdXNfc2hpcHBpbmdfbWV0aG9kX3J1bGVzID4gYVtkYXRhLWZvcm0tY29sbGVjdGlvbj1cImFkZFwiXScpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICQoJ3NlbGVjdFtuYW1lXj1cInN5bGl1c19zaGlwcGluZ19tZXRob2RbcnVsZXNdXCJdW25hbWUkPVwiW3R5cGVdXCJdJykubGFzdCgpLmNoYW5nZSgpO1xuICAgIH0sIDUwKTtcbiAgfSk7XG5cbiAgJChkb2N1bWVudCkuc2V0RnJvbUNvbGxlY3Rpb25PbkNsaWNrRXZlbnRIYW5kbGVyKCdzeWxpdXNfcHJvbW90aW9uX2FjdGlvbnMnLCAnYWN0aW9ucycpO1xuICAkKGRvY3VtZW50KS5zZXRGcm9tQ29sbGVjdGlvbk9uQ2xpY2tFdmVudEhhbmRsZXIoJ3N5bGl1c19wcm9tb3Rpb25fcnVsZXMnLCAncnVsZXMnKTtcblxuICAkKGRvY3VtZW50KS5vbignY29sbGVjdGlvbi1mb3JtLWFkZCcsICgpID0+IHtcbiAgICAkKCcuc3lsaXVzLWF1dG9jb21wbGV0ZScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoJC5fZGF0YSgkKGVsZW1lbnQpLmdldCgwKSwgJ2V2ZW50cycpID09IHVuZGVmaW5lZCkge1xuICAgICAgICAkKGVsZW1lbnQpLmF1dG9Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCQoJyNzeWxpdXNfY2F0YWxvZ19wcm9tb3Rpb25fc2NvcGVzJykubGVuZ3RoID4gMCkge1xuICAgICAgJChkb2N1bWVudCkubG9hZENhdGFsb2dQcm9tb3Rpb25TY29wZUNvbmZpZ3VyYXRpb24oXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXNfY2F0YWxvZ19wcm9tb3Rpb25fc2NvcGVzIFtkYXRhLWZvcm0tY29sbGVjdGlvbj1cIml0ZW1cIl06bGFzdC1jaGlsZCcpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICgkKCcjc3lsaXVzX2NhdGFsb2dfcHJvbW90aW9uX2FjdGlvbnMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAkKGRvY3VtZW50KS5sb2FkQ2F0YWxvZ1Byb21vdGlvbkFjdGlvbkNvbmZpZ3VyYXRpb24oXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXNfY2F0YWxvZ19wcm9tb3Rpb25fYWN0aW9ucyBbZGF0YS1mb3JtLWNvbGxlY3Rpb249XCJpdGVtXCJdOmxhc3QtY2hpbGQnKVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuICAkKGRvY3VtZW50KS5vbignY29sbGVjdGlvbi1mb3JtLXVwZGF0ZScsICgpID0+IHtcbiAgICAkKCcuc3lsaXVzLWF1dG9jb21wbGV0ZScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoJC5fZGF0YSgkKGVsZW1lbnQpLmdldCgwKSwgJ2V2ZW50cycpID09IHVuZGVmaW5lZCkge1xuICAgICAgICAkKGVsZW1lbnQpLmF1dG9Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAkKCcuc3lsaXVzLXRhYnVsYXItZm9ybScpLmFkZFRhYkVycm9ycygpO1xuICAkKCcudWkuYWNjb3JkaW9uJykuYWRkQWNjb3JkaW9uRXJyb3JzKCk7XG4gICQoJyNzeWxpdXMtcHJvZHVjdC10YXhvbm9teS10cmVlJykuY2hvaWNlVHJlZSgncHJvZHVjdFRheG9uJywgdHJ1ZSwgMSk7XG5cbiAgJChkb2N1bWVudCkubm90aWZpY2F0aW9uKCk7XG4gICQoZG9jdW1lbnQpLnByb2R1Y3RTbHVnR2VuZXJhdG9yKCk7XG4gICQoZG9jdW1lbnQpLnRheG9uU2x1Z0dlbmVyYXRvcigpO1xuICAkKGRvY3VtZW50KS5wcmV2aWV3VXBsb2FkZWRJbWFnZSgnI3N5bGl1c19wcm9kdWN0X2ltYWdlcycpO1xuICAkKGRvY3VtZW50KS5wcmV2aWV3VXBsb2FkZWRJbWFnZSgnI3N5bGl1c190YXhvbl9pbWFnZXMnKTtcbiAgaWYgKCQoJyNzeWxpdXNfY2F0YWxvZ19wcm9tb3Rpb25fYWN0aW9ucycpLmxlbmd0aCA+IDApIHtcbiAgICAkKGRvY3VtZW50KS5sb2FkQ2F0YWxvZ1Byb21vdGlvbkFjdGlvbkNvbmZpZ3VyYXRpb24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1c19jYXRhbG9nX3Byb21vdGlvbl9hY3Rpb25zJykpO1xuICB9XG4gIGlmICgkKCcjc3lsaXVzX2NhdGFsb2dfcHJvbW90aW9uX3Njb3BlcycpLmxlbmd0aCA+IDApIHtcbiAgICAkKGRvY3VtZW50KS5sb2FkQ2F0YWxvZ1Byb21vdGlvblNjb3BlQ29uZmlndXJhdGlvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzX2NhdGFsb2dfcHJvbW90aW9uX3Njb3BlcycpKTtcbiAgfVxuXG4gICQoZG9jdW1lbnQpLnByZXZpZXdVcGxvYWRlZEltYWdlKCcjYWRkLWF2YXRhcicpO1xuXG4gICQoJ2JvZHknKS5vbignRE9NTm9kZUluc2VydGVkJywgJ1tkYXRhLWZvcm0tY29sbGVjdGlvbj1cIml0ZW1cIl0nLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoJChldmVudC50YXJnZXQpLmZpbmQoJy51aS5hY2NvcmRpb24nKS5sZW5ndGggPiAwKSB7XG4gICAgICAkKGV2ZW50LnRhcmdldCkuZmluZCgnLnVpLmFjY29yZGlvbicpLmFjY29yZGlvbigpO1xuICAgIH1cbiAgICBpZiAoJChldmVudC50YXJnZXQpLmZpbmQoJy51aS50YWJ1bGFyLm1lbnUnKS5sZW5ndGggPiAwKSB7XG4gICAgICAkKGV2ZW50LnRhcmdldCkuZmluZCgnLnVpLnRhYnVsYXIubWVudSAuaXRlbScpLnRhYigpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdGF4b25vbXlUcmVlID0gbmV3IFN5bGl1c1RheG9ub215VHJlZSgpO1xuXG4gICQoYCR7Zm9ybXNMaXN0fSwgLmNoZWNrLXVuc2F2ZWRgKS5kaXJ0eUZvcm1zKCk7XG5cbiAgJCgnI21vcmUtZGV0YWlscycpLmFjY29yZGlvbih7IGV4Y2x1c2l2ZTogZmFsc2UgfSk7XG5cbiAgJCgnLnZhcmlhbnRzLWFjY29yZGlvbl9fdGl0bGUnKS5vbignY2xpY2snLCAnLmljb24uYnV0dG9uJywgZnVuY3Rpb24oZSkge1xuICAgICQoZS5kZWxlZ2F0ZVRhcmdldCkubmV4dCgnLnZhcmlhbnRzLWFjY29yZGlvbl9fY29udGVudCcpLnRvZ2dsZSgpO1xuICAgICQodGhpcykuZmluZCgnLmRyb3Bkb3duLmljb24nKS50b2dnbGVDbGFzcygnY291bnRlcmNsb2Nrd2lzZSByb3RhdGVkJyk7XG4gIH0pO1xuXG4gIGNvbnN0IGRhc2hib2FyZFN0YXRpc3RpY3MgPSBuZXcgU3RhdGlzdGljc0NvbXBvbmVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHMnKSk7XG5cbiAgJCgnLnN5bGl1cy1hZG1pbi1tZW51Jykuc2VhcmNoYWJsZSgnLnN5bGl1cy1hZG1pbi1tZW51LXNlYXJjaC1pbnB1dCcpO1xufSk7XG5cbndpbmRvdy4kID0gJDtcbndpbmRvdy5qUXVlcnkgPSAkO1xuIiwiaW1wb3J0IFllYXJEYXRlT2JqZWN0IGZyb20gJy4vZGF0ZU9iamVjdHMveWVhci1kYXRlLW9iamVjdCc7XG5pbXBvcnQgTW9udGhEYXRlT2JqZWN0IGZyb20gJy4vZGF0ZU9iamVjdHMvbW9udGgtZGF0ZS1vYmplY3QnO1xuaW1wb3J0IFdlZWtEYXRlT2JqZWN0IGZyb20gJy4vZGF0ZU9iamVjdHMvd2Vlay1kYXRlLW9iamVjdCc7XG5cbmZ1bmN0aW9uIERhdGVPYmplY3RGYWN0b3J5KCkge31cblxuRGF0ZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZURhdGVPYmplY3QgPSBmdW5jdGlvbiAoaW50ZXJ2YWwsIGRhdGUpIHtcbiAgaWYgKGludGVydmFsID09PSAnbW9udGgnKSB7XG4gICAgcmV0dXJuIG5ldyBNb250aERhdGVPYmplY3QoZGF0ZSk7XG4gIH1cblxuICBpZiAoaW50ZXJ2YWwgPT09ICd3ZWVrJykge1xuICAgIHJldHVybiBuZXcgV2Vla0RhdGVPYmplY3QoZGF0ZSk7XG4gIH1cbiAgXG4gIHJldHVybiBuZXcgWWVhckRhdGVPYmplY3QoZGF0ZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlT2JqZWN0RmFjdG9yeTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoRGF0ZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKGRhdGUpIHtcbiAgICBjb25zdCBkYXRlTm93ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKTtcbiAgICB0aGlzLmVuZERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDEpO1xuICAgIHRoaXMucHJldkRhdGUgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSAtIDEsIDEpO1xuICAgIHRoaXMubmV4dERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDEpO1xuICAgIHRoaXMubWF4R3JhcGhEYXRlID0gbmV3IERhdGUoZGF0ZU5vdy5nZXRGdWxsWWVhcigpLCBkYXRlTm93LmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgICB0aGlzLmludGVydmFsID0gJ2RheSc7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlZWtEYXRlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IoZGF0ZSkge1xuICAgIGNvbnN0IHdlZWtJbk1pbGxpc2Vjb25kcyA9IDYwNDgwMDAwMDtcbiAgICBjb25zdCBkYXRlTm93ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gd2Vla0luTWlsbGlzZWNvbmRzKTtcbiAgICB0aGlzLmVuZERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIHdlZWtJbk1pbGxpc2Vjb25kcyk7XG4gICAgdGhpcy5wcmV2RGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gKDIgKiB3ZWVrSW5NaWxsaXNlY29uZHMpKTtcbiAgICB0aGlzLm5leHREYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyAoMyAqIHdlZWtJbk1pbGxpc2Vjb25kcykpO1xuICAgIHRoaXMubWF4R3JhcGhEYXRlID0gbmV3IERhdGUoZGF0ZU5vdy5nZXRUaW1lKCkgKyAoMiAqIHdlZWtJbk1pbGxpc2Vjb25kcykpO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSAnZGF5JztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVhckRhdGVPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihkYXRlKSB7XG4gICAgY29uc3QgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5zdGFydERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICAgIHRoaXMuZW5kRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSArIDEsIDAsIDApO1xuICAgIHRoaXMucHJldkRhdGUgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCkgLSAxLCAxLCAxKTtcbiAgICB0aGlzLm5leHREYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpICsgMSwgMSwgMSk7XG4gICAgdGhpcy5tYXhHcmFwaERhdGUgPSBuZXcgRGF0ZShkYXRlTm93LmdldEZ1bGxZZWFyKCkgKyAxLCAwLCAxKTtcbiAgICB0aGlzLmludGVydmFsID0gJ21vbnRoJztcbiAgfVxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcblxud2luZG93LiQgPSAkO1xud2luZG93LmpRdWVyeSA9ICQ7XG4iLCJpbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2FjY29yZGlvbic7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2FwaSc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2NoZWNrYm94JztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvY29sb3JpemUnO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9kaW1tZXInO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9kcm9wZG93bic7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2VtYmVkJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvbmFnJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvcG9wdXAnO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9wcm9ncmVzcyc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL3JhdGluZyc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL3NlYXJjaCc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL3NoYXBlJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvc2lkZWJhcic7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL3NpdGUnO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9zdGF0ZSc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL3N0aWNreSc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL3RhYic7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL3RyYW5zaXRpb24nO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy92aWRlbyc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL3Zpc2liaWxpdHknO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy92aXNpdCc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kLmZuLmV4dGVuZCh7XG4gIGxvYWRDYXRhbG9nUHJvbW90aW9uQWN0aW9uQ29uZmlndXJhdGlvbih0YXJnZXQpIHtcbiAgICBpZiAodGFyZ2V0ID09IG51bGwgfHwgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXNfY2F0YWxvZ19wcm9tb3Rpb25fYWN0aW9ucyBzZWxlY3RbbmFtZSo9XCJ0eXBlXCJdJykgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzX2NhdGFsb2dfcHJvbW90aW9uX2FjdGlvbnMgc2VsZWN0W25hbWUqPVwidHlwZVwiXScpLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgbmV3Q29uZmlnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuZXdDb25maWcuaW5uZXJIVE1MID0gdGhpcy5zZWxlY3RlZE9wdGlvbnNbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbmZpZ3VyYXRpb24nKTtcbiAgICAgIGNvbnN0IG9sZENvbmZpZyA9IHBhcmVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdDb25maWcsIG9sZENvbmZpZyk7XG5cbiAgICAgIGNvbnN0IG9sZENvbmZpZ0lucHV0TmFtZSA9IG9sZENvbmZpZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgbGV0IG5ld0NvbmZpZ0lucHV0cyA9IG5ld0NvbmZpZy5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG4gICAgICBuZXdDb25maWdJbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IG5ld0NvbmZpZ0lucHV0TmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgICAgICAgbmV3Q29uZmlnSW5wdXROYW1lID0gb2xkQ29uZmlnSW5wdXROYW1lLnJlcGxhY2UoXG4gICAgICAgICAgb2xkQ29uZmlnSW5wdXROYW1lLnN1YnN0cmluZyhvbGRDb25maWdJbnB1dE5hbWUuaW5kZXhPZignW2NvbmZpZ3VyYXRpb25dJykgKyAxNSksXG4gICAgICAgICAgbmV3Q29uZmlnSW5wdXROYW1lLnN1YnN0cmluZyhuZXdDb25maWdJbnB1dE5hbWUuaW5kZXhPZignY29uZmlndXJhdGlvbicpICsgMTMpLFxuICAgICAgICApO1xuXG4gICAgICAgICQoZWxlbWVudCkuYXR0cignbmFtZScsIG5ld0NvbmZpZ0lucHV0TmFtZSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxufSk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kLmZuLmV4dGVuZCh7XG4gIGxvYWRDYXRhbG9nUHJvbW90aW9uU2NvcGVDb25maWd1cmF0aW9uKHRhcmdldCkge1xuICAgIGlmICh0YXJnZXQgPT0gbnVsbCB8fCB0YXJnZXQucXVlcnlTZWxlY3RvcignI3N5bGl1c19jYXRhbG9nX3Byb21vdGlvbl9zY29wZXMgc2VsZWN0W25hbWUqPVwidHlwZVwiXScpID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignI3N5bGl1c19jYXRhbG9nX3Byb21vdGlvbl9zY29wZXMgc2VsZWN0W25hbWUqPVwidHlwZVwiXScpLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgbmV3Q29uZmlnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuZXdDb25maWcuaW5uZXJIVE1MID0gdGhpcy5zZWxlY3RlZE9wdGlvbnNbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbmZpZ3VyYXRpb24nKTtcbiAgICAgIGNvbnN0IG9sZENvbmZpZyA9IHBhcmVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdDb25maWcsIG9sZENvbmZpZyk7XG5cbiAgICAgIGNvbnN0IG9sZENvbmZpZ0lucHV0TmFtZSA9IG9sZENvbmZpZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgbGV0IG5ld0NvbmZpZ0lucHV0TmFtZSA9IG5ld0NvbmZpZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXG4gICAgICBuZXdDb25maWdJbnB1dE5hbWUgPSBvbGRDb25maWdJbnB1dE5hbWUucmVwbGFjZShcbiAgICAgICAgb2xkQ29uZmlnSW5wdXROYW1lLnN1YnN0cmluZyhvbGRDb25maWdJbnB1dE5hbWUubGFzdEluZGV4T2YoJ1snKSArIDEsIG9sZENvbmZpZ0lucHV0TmFtZS5sYXN0SW5kZXhPZignXScpKSxcbiAgICAgICAgbmV3Q29uZmlnSW5wdXROYW1lLnN1YnN0cmluZyhuZXdDb25maWdJbnB1dE5hbWUuaW5kZXhPZignWycpICsgMSwgbmV3Q29uZmlnSW5wdXROYW1lLmxhc3RJbmRleE9mKCddJykpLFxuICAgICAgKTtcblxuICAgICAgJChuZXdDb25maWcpLmZpbmQoJ2lucHV0JykuYXR0cignbmFtZScsIG5ld0NvbmZpZ0lucHV0TmFtZSk7XG4gICAgICAkKG5ld0NvbmZpZykuZmluZCgnLnN5bGl1cy1hdXRvY29tcGxldGUnKS5hdXRvQ29tcGxldGUoKTtcbiAgICB9O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0byc7XG5cbmNvbnN0IGRyYXdDaGFydCA9IGZ1bmN0aW9uIGRyYXdDaGFydChjYW52YXMsIGxhYmVscyA9IFtdLCB2YWx1ZXMgPSBbXSwgY3VycmVuY3kpIHtcbiAgcmV0dXJuIG5ldyBDaGFydChjYW52YXMsIHtcbiAgICB0eXBlOiAnYmFyJyxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbHMsXG4gICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgZGF0YTogdmFsdWVzLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI2LCAxODcsIDE1NiwgMC4zKScsXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNiwgMTg3LCAxNTYsIDEpJyxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICB9XSxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgICBjYWxsYmFjayh2YWx1ZSkge1xuICAgICAgICAgICAgICBjb25zdCBwcmVmaXggPSBjdXJyZW5jeSAmJiBjdXJyZW5jeS5wcmVmaXggPyBjdXJyZW5jeS5wcmVmaXggOiAnJztcbiAgICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gY3VycmVuY3kgJiYgY3VycmVuY3kuc3VmZml4ID8gY3VycmVuY3kuc3VmZml4IDogJyc7XG4gICAgICAgICAgICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZSArIHN1ZmZpeDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfV0sXG4gICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfV0sXG4gICAgICB9LFxuICAgICAgbGF5b3V0OiB7XG4gICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICBsZWZ0OiAyMCxcbiAgICAgICAgICByaWdodDogMjAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgcGx1Z2luczoge1xuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkcmF3Q2hhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kLmZuLmV4dGVuZCh7XG4gIGFkZFRhYkVycm9ycygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcztcblxuICAgICQoJy51aS50YWInKS5lYWNoKChpZHgsIGVsKSA9PiB7XG4gICAgICBjb25zdCBlcnJvcnMgPSAkKGVsKS5maW5kKCcuc3lsaXVzLXZhbGlkYXRpb24tZXJyb3InKTtcblxuICAgICAgaWYgKGVycm9ycy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgdGFiTmFtZSA9ICQoZWwpLmF0dHIoJ2RhdGEtdGFiJyk7XG4gICAgICAgIGNvbnN0IHRhYldpdGhFcnJvcnMgPSAkKGVsZW1lbnQpLmZpbmQoYGEuaXRlbVtkYXRhLXRhYj1cIiR7dGFiTmFtZX1cIl1gKTtcblxuICAgICAgICBjb25zdCBsYWJlbCA9IHRhYldpdGhFcnJvcnMuaHRtbCgpO1xuICAgICAgICBjb25zdCBuZXdMYWJlbCA9IGAke2xhYmVsfTxzcGFuIGNsYXNzPVwidWkgc21hbGwgaG9yaXpvbnRhbCBjaXJjdWxhciBsYWJlbFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0RCMjgyOFwiPiR7ZXJyb3JzLmxlbmd0aH08L3NwYW4+YDtcblxuICAgICAgICB0YWJXaXRoRXJyb3JzLmh0bWwobmV3TGFiZWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGFkZEFjY29yZGlvbkVycm9ycygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcztcbiAgICBjb25zdCBhY2NvcmRpb25FbGVtZW50cyA9IGVsZW1lbnQuZmluZCgnLnVpLmNvbnRlbnQnKTtcblxuICAgICQoYWNjb3JkaW9uRWxlbWVudHMpLmVhY2goKGlkeCwgZWwpID0+IHtcbiAgICAgIGNvbnN0IGVycm9ycyA9ICQoZWwpLmZpbmQoJy5zeWxpdXMtdmFsaWRhdGlvbi1lcnJvcicpO1xuXG4gICAgICBpZiAoZXJyb3JzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCByaWJXaXRoRXJyb3JzID0gJChlbCkuY2xvc2VzdCgnW2RhdGEtbG9jYWxlXScpLmZpbmQoJy50aXRsZScpO1xuXG4gICAgICAgIHJpYldpdGhFcnJvcnMuY3NzKCdjb2xvcicsICcjREIyODI4Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59KTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFN5bGl1cyBTcC4geiBvLm8uXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQuZm4uZXh0ZW5kKHtcbiAgc2V0RnJvbUNvbGxlY3Rpb25PbkNsaWNrRXZlbnRIYW5kbGVyKGZpZWxkc2V0SWQsIHR5cGVOYW1lKSB7XG4gICAgJChgIyR7ZmllbGRzZXRJZH1gKVxuICAgICAgLmZpbmQoJ2FbZGF0YS1mb3JtLWNvbGxlY3Rpb249XCJhZGRcIl0nKVxuICAgICAgLm9uKCdjbGljaycsIGV2ZW50ID0+ICQoZG9jdW1lbnQpLnRyaWdnZXJDaGFuZ2VPblR5cGVGaWVsZChldmVudCwgdHlwZU5hbWUpKTtcbiAgfSxcblxuICB0cmlnZ2VyQ2hhbmdlT25UeXBlRmllbGQoZXZlbnQsIHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCdmb3JtJykuYXR0cignbmFtZScpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAkKGBzZWxlY3RbbmFtZV49XCIke25hbWV9WyR7dHlwZU5hbWV9XVwiXVtuYW1lJD1cIlt0eXBlXVwiXWApLmxhc3QoKS5jaGFuZ2UoKTtcbiAgICB9LCA1MCk7XG4gIH0sXG59KTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFN5bGl1cyBTcC4geiBvLm8uXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ3N5bGl1c19wcm9kdWN0JyxcbiAgJ3N5bGl1c190YXhvbicsXG4gICdzeWxpdXNfcHJvZHVjdF92YXJpYW50JyxcbiAgJ3N5bGl1c19wcm9kdWN0X2dlbmVyYXRlX3ZhcmlhbnRzJyxcbiAgJ3N5bGl1c19pbnZlbnRvcnknLFxuICAnc3lsaXVzX3Byb2R1Y3RfYXR0cmlidXRlJyxcbiAgJ3N5bGl1c19wcm9kdWN0X29wdGlvbicsXG4gICdzeWxpdXNfcHJvZHVjdF9hc3NvY2lhdGlvbl90eXBlJyxcbiAgJ3N5bGl1c19jdXN0b21lcicsXG4gICdzeWxpdXNfY3VzdG9tZXJfZ3JvdXAnLFxuICAnc3lsaXVzX3Byb21vdGlvbicsXG4gICdzeWxpdXNfcHJvbW90aW9uX2NvdXBvbicsXG4gICdzeWxpdXNfcHJvbW90aW9uX2NvdXBvbl9nZW5lcmF0b3JfaW5zdHJ1Y3Rpb24nLFxuICAnc3lsaXVzX3Byb2R1Y3RfcmV2aWV3JyxcbiAgJ3N5bGl1c19jaGFubmVsJyxcbiAgJ3N5bGl1c19jb3VudHJ5JyxcbiAgJ3N5bGl1c196b25lJyxcbiAgJ3N5bGl1c19jdXJyZW5jeScsXG4gICdzeWxpdXNfZXhjaGFuZ2VfcmF0ZScsXG4gICdzeWxpdXNfbG9jYWxlJyxcbiAgJ3N5bGl1c19wYXltZW50X21ldGhvZCcsXG4gICdzeWxpdXNfc2hpcHBpbmdfbWV0aG9kJyxcbiAgJ3N5bGl1c19zaGlwcGluZ19jYXRlZ29yeScsXG4gICdzeWxpdXNfdGF4X2NhdGVnb3J5JyxcbiAgJ3N5bGl1c190YXhfcmF0ZScsXG4gICdzeWxpdXNfYWRtaW5fdXNlcicsXG5dXG4gIC5tYXAoZm9ybSA9PiBgZm9ybVtuYW1lPVwiJHtmb3JtfVwiXWApXG4gIC5qb2luKCcsICcpO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgU3lsaXVzIFNwLiB6IG8uby5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9hcGknO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9jaGVja2JveCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgc2FuaXRpemVJbnB1dCB9IGZyb20gXCJzeWxpdXMvdWkvc3lsaXVzLXNhbml0aXplclwiO1xuXG5jb25zdCBjcmVhdGVSb290Q29udGFpbmVyID0gZnVuY3Rpb24gY3JlYXRlUm9vdENvbnRhaW5lcigpIHtcbiAgcmV0dXJuICQoJzxkaXYgY2xhc3M9XCJ1aSBsaXN0XCI+PC9kaXY+Jyk7XG59O1xuXG5jb25zdCBjcmVhdGVMZWFmQ29udGFpbmVyRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZDb250YWluZXJFbGVtZW50KCkge1xuICByZXR1cm4gJCgnPGRpdiBjbGFzcz1cImxpc3RcIj48L2Rpdj4nKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxlYWZJY29uRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZJY29uRWxlbWVudCgpIHtcbiAgcmV0dXJuICQoJzxpIGNsYXNzPVwiZm9sZGVyIGljb25cIj48L2k+Jyk7XG59O1xuXG5jb25zdCBjcmVhdGVMZWFmVGl0bGVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGVhZlRpdGxlRWxlbWVudCgpIHtcbiAgcmV0dXJuICQoJzxkaXYgY2xhc3M9XCJoZWFkZXJcIj48L2Rpdj4nKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxlYWZUaXRsZVNwYW4gPSBmdW5jdGlvbiBjcmVhdGVMZWFmVGl0bGVTcGFuKGRpc3BsYXlOYW1lKSB7XG4gIHJldHVybiAkKGA8c3BhbiBzdHlsZT1cIm1hcmdpbi1yaWdodDogNXB4OyBjdXJzb3I6IHBvaW50ZXI7XCI+JHtkaXNwbGF5TmFtZX08L3NwYW4+YCk7XG59O1xuXG5jb25zdCBjcmVhdGVMZWFmQ29udGVudEVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVMZWFmQ29udGVudEVsZW1lbnQoKSB7XG4gIHJldHVybiAkKCc8ZGl2IGNsYXNzPVwiY29udGVudFwiPjwvZGl2PicpO1xufTtcblxuJC5mbi5leHRlbmQoe1xuICBjaG9pY2VUcmVlKHR5cGUsIG11bHRpcGxlLCBkZWZhdWx0TGV2ZWwpIHtcbiAgICBjb25zdCB0cmVlID0gdGhpcztcbiAgICBjb25zdCBsb2FkZXIgPSB0cmVlLmZpbmQoJy5kaW1tZXInKTtcbiAgICBjb25zdCBsb2FkZWRMZWFmcyA9IFtdO1xuICAgIGNvbnN0ICRpbnB1dCA9IHRyZWUuZmluZCgnaW5wdXRbdHlwZT1cImhpZGRlblwiXScpO1xuXG4gICAgY29uc3QgY3JlYXRlQ2hlY2tib3hFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlQ2hlY2tib3hFbGVtZW50KG5hbWUsIGNvZGUsIG11bHRpKSB7XG4gICAgICBjb25zdCBjaG9zZW5Ob2RlcyA9ICRpbnB1dC52YWwoKS5zcGxpdCgnLCcpO1xuICAgICAgbGV0IGNoZWNrZWQgPSAnJztcbiAgICAgIGlmIChjaG9zZW5Ob2Rlcy5zb21lKGNob3NlbkNvZGUgPT4gY2hvc2VuQ29kZSA9PT0gY29kZSkpIHtcbiAgICAgICAgY2hlY2tlZCA9ICdjaGVja2VkPVwiY2hlY2tlZFwiJztcbiAgICAgIH1cbiAgICAgIGlmIChtdWx0aSkge1xuICAgICAgICByZXR1cm4gJChgPGRpdiBjbGFzcz1cInVpIGNoZWNrYm94XCIgZGF0YS12YWx1ZT1cIiR7Y29kZX1cIj48aW5wdXQgJHtjaGVja2VkfSB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiJHt0eXBlfVwiPjwvZGl2PmApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJChgPGRpdiBjbGFzcz1cInVpIHJhZGlvIGNoZWNrYm94XCIgZGF0YS12YWx1ZT1cIiR7Y29kZX1cIj48aW5wdXQgJHtjaGVja2VkfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwiJHt0eXBlfVwiPjwvZGl2PmApO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0xlYWZMb2FkZWQgPSBmdW5jdGlvbiBpc0xlYWZMb2FkZWQoY29kZSkge1xuICAgICAgcmV0dXJuIGxvYWRlZExlYWZzLnNvbWUobGVhZkNvZGUgPT4gbGVhZkNvZGUgPT09IGNvZGUpO1xuICAgIH07XG5cbiAgICBsZXQgY3JlYXRlTGVhZkZ1bmM7XG5cbiAgICBjb25zdCBsb2FkTGVhZkFjdGlvbiA9IGZ1bmN0aW9uIGxvYWRMZWFmQWN0aW9uKHBhcmVudENvZGUsIGV4cGFuZEJ1dHRvbiwgY29udGVudCwgaWNvbiwgbGVhZkNvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIGljb24udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgaWYgKCFpc0xlYWZMb2FkZWQocGFyZW50Q29kZSkpIHtcbiAgICAgICAgZXhwYW5kQnV0dG9uLmFwaSh7XG4gICAgICAgICAgb246ICdub3cnLFxuICAgICAgICAgIHVybDogdHJlZS5kYXRhKCd0cmVlLWxlYWZzLXVybCcpIHx8IHRyZWUuZGF0YSgndGF4b24tbGVhZnMtdXJsJyksXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcGFyZW50Q29kZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJlZm9yZVNlbmQoc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGxvYWRlci5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncztcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaCgobGVhZk5vZGUpID0+IHtcbiAgICAgICAgICAgICAgbGVhZkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKChcbiAgICAgICAgICAgICAgICBjcmVhdGVMZWFmRnVuYyhzYW5pdGl6ZUlucHV0KGxlYWZOb2RlLm5hbWUpLCBzYW5pdGl6ZUlucHV0KGxlYWZOb2RlLmNvZGUpLCBsZWFmTm9kZS5oYXNDaGlsZHJlbiwgbXVsdGlwbGUsIGxlYWZOb2RlLmxldmVsKVxuICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmQobGVhZkNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgICAgICAgbG9hZGVyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGxvYWRlZExlYWZzLnB1c2gocGFyZW50Q29kZSk7XG5cbiAgICAgICAgICAgIGxlYWZDb250YWluZXJFbGVtZW50LnRvZ2dsZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBsZWFmQ29udGFpbmVyRWxlbWVudC50b2dnbGUoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYmluZEV4cGFuZExlYWZBY3Rpb24gPSBmdW5jdGlvbiBiaW5kRXhwYW5kTGVhZkFjdGlvbihwYXJlbnRDb2RlLCBleHBhbmRCdXR0b24sIGNvbnRlbnQsIGljb24sIGxldmVsKSB7XG4gICAgICBjb25zdCBsZWFmQ29udGFpbmVyRWxlbWVudCA9IGNyZWF0ZUxlYWZDb250YWluZXJFbGVtZW50KCk7XG4gICAgICBpZiAoZGVmYXVsdExldmVsID4gbGV2ZWwpIHtcbiAgICAgICAgbG9hZExlYWZBY3Rpb24ocGFyZW50Q29kZSwgZXhwYW5kQnV0dG9uLCBjb250ZW50LCBpY29uLCBsZWFmQ29udGFpbmVyRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGV4cGFuZEJ1dHRvbi5jbGljaygoKSA9PiB7XG4gICAgICAgIGxvYWRMZWFmQWN0aW9uKHBhcmVudENvZGUsIGV4cGFuZEJ1dHRvbiwgY29udGVudCwgaWNvbiwgbGVhZkNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJpbmRDaGVja2JveEFjdGlvbiA9IGZ1bmN0aW9uIGJpbmRDaGVja2JveEFjdGlvbihjaGVja2JveEVsZW1lbnQpIHtcbiAgICAgIGNoZWNrYm94RWxlbWVudC5jaGVja2JveCh7XG4gICAgICAgIG9uQ2hlY2tlZCgpIHtcbiAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBjaGVja2JveEVsZW1lbnRbMF0uZGF0YXNldDtcbiAgICAgICAgICBjb25zdCBjaGVja2VkVmFsdWVzID0gJGlucHV0LnZhbCgpLnNwbGl0KCcsJykuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgIGNoZWNrZWRWYWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgJGlucHV0LnZhbChjaGVja2VkVmFsdWVzLmpvaW4oKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVW5jaGVja2VkKCkge1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGNoZWNrYm94RWxlbWVudFswXS5kYXRhc2V0O1xuICAgICAgICAgIGNvbnN0IGNoZWNrZWRWYWx1ZXMgPSAkaW5wdXQudmFsKCkuc3BsaXQoJywnKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgY29uc3QgaSA9IGNoZWNrZWRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICBjaGVja2VkVmFsdWVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJGlucHV0LnZhbChjaGVja2VkVmFsdWVzLmpvaW4oKSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlTGVhZiA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWYobmFtZSwgY29kZSwgaGFzQ2hpbGRyZW4sIG11bHRpcGxlQ2hvaWNlLCBsZXZlbCkge1xuICAgICAgY29uc3QgZGlzcGxheU5hbWVFbGVtZW50ID0gY3JlYXRlTGVhZlRpdGxlU3BhbihuYW1lKTtcbiAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGNyZWF0ZUxlYWZUaXRsZUVsZW1lbnQoKTtcbiAgICAgIGNvbnN0IGljb25FbGVtZW50ID0gY3JlYXRlTGVhZkljb25FbGVtZW50KCk7XG4gICAgICBjb25zdCBjaGVja2JveEVsZW1lbnQgPSBjcmVhdGVDaGVja2JveEVsZW1lbnQobmFtZSwgY29kZSwgbXVsdGlwbGVDaG9pY2UpO1xuXG4gICAgICBiaW5kQ2hlY2tib3hBY3Rpb24oY2hlY2tib3hFbGVtZW50KTtcblxuICAgICAgY29uc3QgbGVhZkVsZW1lbnQgPSAkKCc8ZGl2IGNsYXNzPVwiaXRlbVwiPjwvZGl2PicpO1xuICAgICAgY29uc3QgbGVhZkNvbnRlbnRFbGVtZW50ID0gY3JlYXRlTGVhZkNvbnRlbnRFbGVtZW50KCk7XG5cbiAgICAgIGxlYWZFbGVtZW50LmFwcGVuZChpY29uRWxlbWVudCk7XG4gICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kKGRpc3BsYXlOYW1lRWxlbWVudCk7XG4gICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kKGNoZWNrYm94RWxlbWVudCk7XG4gICAgICBsZWFmQ29udGVudEVsZW1lbnQuYXBwZW5kKHRpdGxlRWxlbWVudCk7XG5cbiAgICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgaWNvbkVsZW1lbnQuYWRkQ2xhc3MoJ291dGxpbmUnKTtcbiAgICAgIH1cbiAgICAgIGlmIChoYXNDaGlsZHJlbikge1xuICAgICAgICBiaW5kRXhwYW5kTGVhZkFjdGlvbihjb2RlLCBkaXNwbGF5TmFtZUVsZW1lbnQsIGxlYWZDb250ZW50RWxlbWVudCwgaWNvbkVsZW1lbnQsIGxldmVsKTtcbiAgICAgIH1cbiAgICAgIGxlYWZFbGVtZW50LmFwcGVuZChsZWFmQ29udGVudEVsZW1lbnQpO1xuXG4gICAgICByZXR1cm4gbGVhZkVsZW1lbnQ7XG4gICAgfTtcbiAgICBjcmVhdGVMZWFmRnVuYyA9IGNyZWF0ZUxlYWY7XG5cbiAgICB0cmVlLmFwaSh7XG4gICAgICBvbjogJ25vdycsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiB0cmVlLmRhdGEoJ3RyZWUtcm9vdC1ub2Rlcy11cmwnKSB8fCB0cmVlLmRhdGEoJ3RheG9uLXJvb3Qtbm9kZXMtdXJsJyksXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBiZWZvcmVTZW5kKHNldHRpbmdzKSB7XG4gICAgICAgIGxvYWRlci5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xuICAgICAgfSxcbiAgICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBjb25zdCByb290Q29udGFpbmVyID0gY3JlYXRlUm9vdENvbnRhaW5lcigpO1xuICAgICAgICByZXNwb25zZS5mb3JFYWNoKChyb290Tm9kZSkgPT4ge1xuICAgICAgICAgIHJvb3RDb250YWluZXIuYXBwZW5kKChcbiAgICAgICAgICAgIGNyZWF0ZUxlYWYoc2FuaXRpemVJbnB1dChyb290Tm9kZS5uYW1lKSwgc2FuaXRpemVJbnB1dChyb290Tm9kZS5jb2RlKSwgcm9vdE5vZGUuaGFzQ2hpbGRyZW4sIG11bHRpcGxlLCByb290Tm9kZS5sZXZlbClcbiAgICAgICAgICApKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyZWUuYXBwZW5kKHJvb3RDb250YWluZXIpO1xuICAgICAgICBsb2FkZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJC5mbi5leHRlbmQoe1xuICBzZWFyY2hhYmxlKHNlYXJjaElucHV0U2VsZWN0b3IpIHtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9ICQoc2VhcmNoSW5wdXRTZWxlY3Rvcik7XG4gICAgY29uc3QgbWVudSA9ICQodGhpcyk7XG5cbiAgICBzZWFyY2hJbnB1dC5vbignaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCBwaHJhc2UgPSBzZWFyY2hJbnB1dC52YWwoKTtcbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChwaHJhc2UucmVwbGFjZSgnICcsICcuKicpLCAnaScpO1xuXG4gICAgICBjb25zdCBmb3VuZEl0ZW1zID0gbWVudS5maW5kKCcuaXRlbScpXG4gICAgICAgIC5oaWRlKClcbiAgICAgICAgLy8gZWl0aGVyIGZpbHRlciBieSBoZWFkZXIgaWYgaXQgaGFzIG9uZSBvciBieSB0ZXh0XG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9ICQodGhpcyk7XG4gICAgICAgICAgY29uc3QgaGVhZGVyID0gaXRlbS5maW5kKCcuaGVhZGVyJyk7XG5cbiAgICAgICAgICBpZiAoaGVhZGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoaGVhZGVyLmZpcnN0KCkudGV4dCgpKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZWdleC50ZXN0KCQodGhpcykudGV4dCgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNob3coKVxuICAgICAgO1xuXG4gICAgICAvLyBzaG93IGNoaWxkcmVuIGlmIGFueVxuICAgICAgZm91bmRJdGVtcy5maW5kKCcuaXRlbScpLnNob3coKTtcblxuICAgICAgLy8gc2hvdyBwYXJlbnRzIGlmIGFueVxuICAgICAgZm91bmRJdGVtcy5wYXJlbnRzVW50aWwobWVudSwgJy5pdGVtJykuc2hvdygpO1xuICAgIH0pO1xuICB9XG59KTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFN5bGl1cyBTcC4geiBvLm8uXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvYXBpJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQuZm4uZXh0ZW5kKHtcbiAgbW92ZVByb2R1Y3RWYXJpYW50KHBvc2l0aW9uSW5wdXQpIHtcbiAgICBjb25zdCBwcm9kdWN0VmFyaWFudFJvd3MgPSBbXTtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcztcblxuICAgIGVsZW1lbnQuYXBpKHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBiZWZvcmVTZW5kKHNldHRpbmdzKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgICAgICBzZXR0aW5ncy5kYXRhID0ge1xuICAgICAgICAgIHByb2R1Y3RWYXJpYW50czogcHJvZHVjdFZhcmlhbnRSb3dzLFxuICAgICAgICAgIF9jc3JmX3Rva2VuOiBlbGVtZW50LmRhdGEoJ2NzcmYtdG9rZW4nKSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XG4gICAgICB9LFxuICAgICAgb25TdWNjZXNzKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcG9zaXRpb25JbnB1dC5vbignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYW50SWQgPSBpbnB1dC5kYXRhKCdpZCcpO1xuICAgICAgY29uc3Qgcm93ID0gcHJvZHVjdFZhcmlhbnRSb3dzLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHByb2R1Y3RWYXJpYW50SWQpO1xuXG4gICAgICBpZiAoIXJvdykge1xuICAgICAgICBwcm9kdWN0VmFyaWFudFJvd3MucHVzaCh7XG4gICAgICAgICAgaWQ6IHByb2R1Y3RWYXJpYW50SWQsXG4gICAgICAgICAgcG9zaXRpb246IGlucHV0LnZhbCgpLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdy5wb3NpdGlvbiA9IGlucHV0LnZhbCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufSk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2FwaSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kLmZuLmV4dGVuZCh7XG4gIHRheG9uTW92ZSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcztcblxuICAgIGVsZW1lbnQuYXBpKHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBvbjogJ2NsaWNrJyxcbiAgICAgIG9uU3VjY2VzcygpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbn0pO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgU3lsaXVzIFNwLiB6IG8uby5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgSFVCX1JFUVVFU1RfVElNRSA9ICdodWJfcmVxdWVzdF90aW1lJztcbmNvbnN0IExBU1RfU1lMSVVTX1ZFUlNJT04gPSAnbGFzdF9zeWxpdXNfdmVyc2lvbic7XG5jb25zdCBTWUxJVVNfVkVSU0lPTl9ESVNNSVNTRUQgPSAnc3lsaXVzX3ZlcnNpb25fZGlzbWlzc2VkJztcbmNvbnN0IE1JTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwO1xuXG5jb25zdCBzdG9yZSA9IGZ1bmN0aW9uIHN0b3JlKGtleSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG59O1xuXG5jb25zdCByZXRyaWV2ZSA9IGZ1bmN0aW9uIHJldHJpZXZlKGtleSkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbn07XG5cbmNvbnN0IG1pbGlzZWNvbmRzU2luY2VMYXN0UmVxdWVzdCA9IGZ1bmN0aW9uIG1pbGlzZWNvbmRzU2luY2VMYXN0UmVxdWVzdCgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gcGFyc2VJbnQocmV0cmlldmUoSFVCX1JFUVVFU1RfVElNRSksIDEwKTtcbn07XG5cbmNvbnN0IGdldERpc21pc3NlZFN5bGl1c1ZlcnNpb24gPSBmdW5jdGlvbiBnZXREaXNtaXNzZWRTeWxpdXNWZXJzaW9uKCkge1xuICByZXR1cm4gcmV0cmlldmUoU1lMSVVTX1ZFUlNJT05fRElTTUlTU0VEKTtcbn07XG5cbiQuZm4uZXh0ZW5kKHtcbiAgbm90aWZpY2F0aW9uKCkge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbk1lbnUgPSAkKCcjc3lsaXVzLXZlcnNpb24tbm90aWZpY2F0aW9uJyk7XG5cbiAgICBpZiAoMCA9PT0gbm90aWZpY2F0aW9uTWVudS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhc2tGcmVxdWVuY3kgPSBub3RpZmljYXRpb25NZW51LmF0dHIoJ2RhdGEtZnJlcXVlbmN5JykgKiBNSUxJU0VDT05EU19NVUxUSVBMSUVSO1xuXG4gICAgY29uc3QgZ2V0Q3VycmVudFN5bGl1c1ZlcnNpb24gPSBmdW5jdGlvbiBnZXRDdXJyZW50U3lsaXVzVmVyc2lvbigpIHtcbiAgICAgIHJldHVybiBub3RpZmljYXRpb25NZW51LmRhdGEoJ2N1cnJlbnQtdmVyc2lvbicpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRMYXRlc3RTeWxpdXNWZXJzaW9uID0gZnVuY3Rpb24gZ2V0TGF0ZXN0U3lsaXVzVmVyc2lvbigpIHtcbiAgICAgIGlmIChyZXRyaWV2ZShIVUJfUkVRVUVTVF9USU1FKSAhPT0gdW5kZWZpbmVkICYmIG1pbGlzZWNvbmRzU2luY2VMYXN0UmVxdWVzdCgpIDwgYXNrRnJlcXVlbmN5KSB7XG4gICAgICAgIHJldHVybiByZXRyaWV2ZShMQVNUX1NZTElVU19WRVJTSU9OKTtcbiAgICAgIH1cblxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgIHVybDogbm90aWZpY2F0aW9uTWVudS5hdHRyKCdkYXRhLXVybCcpLFxuICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAgIGlmICh1bmRlZmluZWQgIT09IHJlc3BvbnNlICYmIHVuZGVmaW5lZCAhPT0gcmVzcG9uc2UudmVyc2lvbiAmJiByZXNwb25zZS52ZXJzaW9uICE9PSByZXRyaWV2ZShMQVNUX1NZTElVU19WRVJTSU9OKSkge1xuICAgICAgICAgICAgc3RvcmUoTEFTVF9TWUxJVVNfVkVSU0lPTiwgcmVzcG9uc2UudmVyc2lvbi50b1N0cmluZygpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlKCkge1xuICAgICAgICAgIHN0b3JlKEhVQl9SRVFVRVNUX1RJTUUsIG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXRyaWV2ZShMQVNUX1NZTElVU19WRVJTSU9OKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNMYXRlc3QgPSBmdW5jdGlvbiBpc0xhdGVzdCgpIHtcbiAgICAgIHJldHVybiBnZXRDdXJyZW50U3lsaXVzVmVyc2lvbigpID09PSBnZXRMYXRlc3RTeWxpdXNWZXJzaW9uKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzRGlzbWlzc2VkID0gZnVuY3Rpb24gaXNEaXNtaXNzZWQoKSB7XG4gICAgICByZXR1cm4gZ2V0TGF0ZXN0U3lsaXVzVmVyc2lvbigpID09PSBnZXREaXNtaXNzZWRTeWxpdXNWZXJzaW9uKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dOb3RpZmljYXRpb24gPSBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKCkge1xuICAgICAgJCgnI25vdGlmaWNhdGlvbnMnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICQoJyNuby1ub3RpZmljYXRpb25zJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIG5vdGlmaWNhdGlvbk1lbnUuZmluZCgnLmJlbGwuaWNvbicpLnJlbW92ZUNsYXNzKCdvdXRsaW5lJykuYWRkQ2xhc3MoJ3llbGxvdycpO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gaGlkZU5vdGlmaWNhdGlvbigpIHtcbiAgICAgICQoJyNub3RpZmljYXRpb25zJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICQoJyNuby1ub3RpZmljYXRpb25zJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICBub3RpZmljYXRpb25NZW51LmZpbmQoJy5iZWxsLmljb24nKS5yZW1vdmVDbGFzcygneWVsbG93JykuYWRkQ2xhc3MoJ291dGxpbmUnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gdXBkYXRlTm90aWZpY2F0aW9uKCkge1xuICAgICAgaWYgKGlzTGF0ZXN0KCkgfHwgaXNEaXNtaXNzZWQoKSkge1xuICAgICAgICBoaWRlTm90aWZpY2F0aW9uKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzaG93Tm90aWZpY2F0aW9uKCk7XG4gICAgfTtcblxuICAgICQobm90aWZpY2F0aW9uTWVudSkuZmluZCgnaVtkYXRhLWRpc21pc3NdJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc3RvcmUoU1lMSVVTX1ZFUlNJT05fRElTTUlTU0VELCBnZXRMYXRlc3RTeWxpdXNWZXJzaW9uKCkpO1xuXG4gICAgICB1cGRhdGVOb3RpZmljYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZU5vdGlmaWNhdGlvbigpO1xuICB9LFxufSk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBkaXNwbGF5VXBsb2FkZWRJbWFnZSA9IGZ1bmN0aW9uIGRpc3BsYXlVcGxvYWRlZEltYWdlKGlucHV0KSB7XG4gIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9ICQoaW5wdXQpLnBhcmVudCgpLnNpYmxpbmdzKCcuaW1hZ2UnKTtcblxuICAgICAgaWYgKGltYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaW1hZ2UuYXR0cignc3JjJywgZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpbWcgPSAkKCc8aW1nIGNsYXNzPVwidWkgc21hbGwgYm9yZGVyZWQgaW1hZ2VcIi8+Jyk7XG4gICAgICAgIGltZy5hdHRyKCdzcmMnLCBldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgJChpbnB1dCkucGFyZW50KCkuYmVmb3JlKGltZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcbiAgfVxufTtcblxuJC5mbi5leHRlbmQoe1xuICBwcmV2aWV3VXBsb2FkZWRJbWFnZShyb290KSB7XG4gICAgJChyb290KS5vbignY2hhbmdlJywgJ2lucHV0W3R5cGU9XCJmaWxlXCJdJywgZnVuY3Rpb24oKSB7XG4gICAgICBkaXNwbGF5VXBsb2FkZWRJbWFnZSh0aGlzKTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgU3lsaXVzIFNwLiB6IG8uby5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgdXBkYXRlU2x1ZyA9IGZ1bmN0aW9uIHVwZGF0ZVNsdWcoZWxlbWVudCkge1xuICBjb25zdCBzbHVnSW5wdXQgPSBlbGVtZW50LnBhcmVudHMoJy5jb250ZW50JykuZmluZCgnW25hbWUqPVwiW3NsdWddXCJdJyk7XG4gIGNvbnN0IGxvYWRhYmxlUGFyZW50ID0gc2x1Z0lucHV0LnBhcmVudHMoJy5maWVsZC5sb2FkYWJsZScpO1xuXG4gIGlmIChzbHVnSW5wdXQuYXR0cigncmVhZG9ubHknKSA9PT0gJ3JlYWRvbmx5Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxvYWRhYmxlUGFyZW50LmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnR0VUJyxcbiAgICB1cmw6IHNsdWdJbnB1dC5hdHRyKCdkYXRhLXVybCcpLFxuICAgIGRhdGE6IHsgbmFtZTogZWxlbWVudC52YWwoKSB9LFxuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgc2x1Z0lucHV0LnZhbChyZXNwb25zZS5zbHVnKTtcbiAgICAgIGlmIChzbHVnSW5wdXQucGFyZW50cygnLmZpZWxkJykuaGFzQ2xhc3MoJ2Vycm9yJykpIHtcbiAgICAgICAgc2x1Z0lucHV0LnBhcmVudHMoJy5maWVsZCcpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICBzbHVnSW5wdXQucGFyZW50cygnLmZpZWxkJykuZmluZCgnLnN5bGl1cy12YWxpZGF0aW9uLWVycm9yJykucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBsb2FkYWJsZVBhcmVudC5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgIH0sXG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlU2x1Z01vZGlmaWNhdGlvbiA9IGZ1bmN0aW9uIHRvZ2dsZVNsdWdNb2RpZmljYXRpb24oYnV0dG9uLCBzbHVnSW5wdXQpIHtcbiAgaWYgKHNsdWdJbnB1dC5hdHRyKCdyZWFkb25seScpKSB7XG4gICAgc2x1Z0lucHV0LnJlbW92ZUF0dHIoJ3JlYWRvbmx5Jyk7XG4gICAgYnV0dG9uLmh0bWwoJzxpIGNsYXNzPVwidW5sb2NrIGljb25cIj48L2k+Jyk7XG4gIH0gZWxzZSB7XG4gICAgc2x1Z0lucHV0LmF0dHIoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG4gICAgYnV0dG9uLmh0bWwoJzxpIGNsYXNzPVwibG9jayBpY29uXCI+PC9pPicpO1xuICB9XG59O1xuXG4kLmZuLmV4dGVuZCh7XG4gIHByb2R1Y3RTbHVnR2VuZXJhdG9yKCkge1xuICAgIGxldCB0aW1lb3V0O1xuXG4gICAgJCgnW25hbWUqPVwic3lsaXVzX3Byb2R1Y3RbdHJhbnNsYXRpb25zXVwiXVtuYW1lKj1cIltuYW1lXVwiXScpLm9uKCdpbnB1dCcsIChldmVudCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgY29uc3QgZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdXBkYXRlU2x1ZyhlbGVtZW50KTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuXG4gICAgJCgnLnRvZ2dsZS1wcm9kdWN0LXNsdWctbW9kaWZpY2F0aW9uJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlU2x1Z01vZGlmaWNhdGlvbigkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNpYmxpbmdzKCdpbnB1dCcpKTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBkcmF3Q2hhcnQgZnJvbSAnLi9zeWxpdXMtY2hhcnQnO1xuaW1wb3J0IERhdGVPYmplY3RGYWN0b3J5IGZyb20gJy4vZGF0ZS1vYmplY3QtZmFjdG9yeSc7XG5cbmNsYXNzIFN0YXRpc3RpY3NDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih3cmFwcGVyKSB7XG4gICAgaWYgKCF3cmFwcGVyKSByZXR1cm47XG5cbiAgICB0aGlzLndlZWtJbk1pbGxpc2Vjb25kcyA9IDYwNDgwMDAwMDtcbiAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xuICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIHRoaXMuY2hhcnRDYW52YXMgPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvcignI3N0YXRzLWdyYXBoJyk7XG4gICAgdGhpcy5zdW1tYXJ5Qm94ZXMgPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3RhdHMtc3VtbWFyeV0nKTtcbiAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3RhdHMtYnV0dG9uXScpO1xuICAgIHRoaXMubG9hZGVyID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0cy1sb2FkZXInKTtcbiAgICB0aGlzLkRhdGVPYmplY3RGYWN0b3J5ID0gbmV3IERhdGVPYmplY3RGYWN0b3J5KCk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgZGVmYXVsdEludGVydmFsID0gJ3llYXInO1xuXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mZXRjaERhdGEuYmluZCh0aGlzKSk7XG4gICAgICBpZiAoYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0cy1idXR0b24nKSA9PT0gZGVmYXVsdEludGVydmFsKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZU5hdkJ1dHRvbnMoZGVmYXVsdEludGVydmFsKTtcblxuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuY2hhcnRDYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLWxhYmVscycpIHx8ICdbXSc7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5jaGFydENhbnZhcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWVzJykgfHwgJ1tdJztcbiAgICBjb25zdCBjdXJyZW5jeSA9IHRoaXMuY2hhcnRDYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbmN5JykgfHwgJyc7XG5cbiAgICB0aGlzLmNoYXJ0ID0gZHJhd0NoYXJ0KHRoaXMuY2hhcnRDYW52YXMsIEpTT04ucGFyc2UobGFiZWxzKSwgSlNPTi5wYXJzZSh2YWx1ZXMpLCB7IHByZWZpeDogY3VycmVuY3kgfSk7XG4gIH1cblxuICBpbml0aWFsaXplTmF2QnV0dG9ucyhkZWZhdWx0SW50ZXJ2YWwpIHtcbiAgICB0aGlzLnByZXZCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdGlvbi1wcmV2Jyk7XG4gICAgdGhpcy5uZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRpb24tbmV4dCcpO1xuXG4gICAgdGhpcy5wcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mZXRjaERhdGEuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5uZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mZXRjaERhdGEuYmluZCh0aGlzKSk7XG5cbiAgICBjb25zdCBEYXRlT2JqZWN0ID0gdGhpcy5EYXRlT2JqZWN0RmFjdG9yeS5jcmVhdGVEYXRlT2JqZWN0KGRlZmF1bHRJbnRlcnZhbCwgbmV3IERhdGUoKSk7XG5cbiAgICB0aGlzLnVwZGF0ZU5hdkJ1dHRvbnMoXG4gICAgICBkZWZhdWx0SW50ZXJ2YWwsXG4gICAgICBEYXRlT2JqZWN0LnByZXZEYXRlLFxuICAgICAgRGF0ZU9iamVjdC5uZXh0RGF0ZSxcbiAgICAgIERhdGVPYmplY3QubWF4R3JhcGhEYXRlLFxuICAgICk7XG4gIH1cblxuICBmZXRjaERhdGEoZSkge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRlJykpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGUnKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHMtYnV0dG9uJykgfHwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbnRlcnZhbCcpO1xuXG4gICAgY29uc3QgRGF0ZU9iamVjdCA9IHRoaXMuRGF0ZU9iamVjdEZhY3RvcnkuY3JlYXRlRGF0ZU9iamVjdChpbnRlcnZhbCwgZGF0ZSk7XG4gICAgdGhpcy51cGRhdGVOYXZCdXR0b25zKGludGVydmFsLFxuICAgICAgRGF0ZU9iamVjdC5wcmV2RGF0ZSxcbiAgICAgIERhdGVPYmplY3QubmV4dERhdGUsXG4gICAgICBEYXRlT2JqZWN0Lm1heEdyYXBoRGF0ZSk7XG5cbiAgICBjb25zdCB1cmwgPSBgJHtlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHMtdXJsJylcbiAgICB9JmludGVydmFsPSR7RGF0ZU9iamVjdC5pbnRlcnZhbFxuICAgIH0mc3RhcnREYXRlPSR7dGhpcy5mb3JtYXREYXRlKERhdGVPYmplY3Quc3RhcnREYXRlKVxuICAgIH0mZW5kRGF0ZT0ke3RoaXMuZm9ybWF0RGF0ZShEYXRlT2JqZWN0LmVuZERhdGUpfWA7XG5cbiAgICBpZiAodXJsKSB7XG4gICAgICB0aGlzLnRvZ2dsZUxvYWRpbmdTdGF0ZSh0cnVlKTtcblxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgIHVybCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9KS5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVN1bW1hcnlWYWx1ZXMocmVzcG9uc2Uuc3RhdGlzdGljcyk7XG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9uc1N0YXRlKGUudGFyZ2V0KTtcbiAgICAgICAgdGhpcy51cGRhdGVHcmFwaChyZXNwb25zZS5zYWxlc19zdW1tYXJ5KTtcbiAgICAgIH0pLmFsd2F5cygoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlTG9hZGluZ1N0YXRlKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVN1bW1hcnlWYWx1ZXMoZGF0YSkge1xuICAgIHRoaXMuc3VtbWFyeUJveGVzLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGJveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHMtc3VtbWFyeScpO1xuICAgICAgaWYgKG5hbWUgaW4gZGF0YSkge1xuICAgICAgICBib3guaW5uZXJIVE1MID0gZGF0YVtuYW1lXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUdyYXBoKGRhdGEpIHtcbiAgICB0aGlzLmNoYXJ0LmRhdGEubGFiZWxzID0gZGF0YS5pbnRlcnZhbHM7XG4gICAgdGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSBkYXRhLnNhbGVzO1xuICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGVCdXR0b25zU3RhdGUoYWN0aXZlQnV0dG9uKSB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBhY3RpdmVCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRzLWJ1dHRvbicpID8gYWN0aXZlQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0cy1idXR0b24nKVxuICAgICAgOiBhY3RpdmVCdXR0b24uZ2V0QXR0cmlidXRlKCdpbnRlcnZhbCcpO1xuXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgaWYgKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHMtYnV0dG9uJykgPT09IGludGVydmFsKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZUxvYWRpbmdTdGF0ZShsb2FkaW5nKSB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICBsZXQgbW9udGggPSBgJHsoZGF0ZS5nZXRNb250aCgpICsgMSl9YDtcbiAgICBsZXQgZGF5ID0gYCR7ZGF0ZS5nZXREYXRlKCl9YDtcbiAgICBjb25zdCB5ZWFyID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG5cbiAgICBpZiAobW9udGgubGVuZ3RoIDwgMikgbW9udGggPSBgMCR7bW9udGh9YDtcbiAgICBpZiAoZGF5Lmxlbmd0aCA8IDIpIGRheSA9IGAwJHtkYXl9YDtcblxuICAgIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbignLScpO1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwoZWxlbWVudCwgaW50ZXJ2YWwpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaW50ZXJ2YWwnLCBpbnRlcnZhbCk7XG4gIH1cblxuICB1cGRhdGVOYXZCdXR0b25zKGludGVydmFsLCBwcmV2RGF0ZSwgbmV4dERhdGUsIG1heEdyYXBoRGF0ZSkge1xuICAgIHRoaXMubmV4dEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubmV4dEJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgaWYgKG5leHREYXRlID4gbWF4R3JhcGhEYXRlKSB7XG4gICAgICB0aGlzLm5leHRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5uZXh0QnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG5cbiAgICB0aGlzLnByZXZCdXR0b24uc2V0QXR0cmlidXRlKCdpbnRlcnZhbCcsIGludGVydmFsKTtcbiAgICB0aGlzLm5leHRCdXR0b24uc2V0QXR0cmlidXRlKCdpbnRlcnZhbCcsIGludGVydmFsKTtcblxuICAgIHRoaXMucHJldkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGUnLCB0aGlzLmZvcm1hdERhdGUocHJldkRhdGUpKTtcbiAgICB0aGlzLm5leHRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRlJywgdGhpcy5mb3JtYXREYXRlKG5leHREYXRlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljc0NvbXBvbmVudDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFN5bGl1cyBTcC4geiBvLm8uXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IHVwZGF0ZVNsdWcgPSBmdW5jdGlvbiB1cGRhdGVTbHVnKGVsZW1lbnQpIHtcbiAgY29uc3Qgc2x1Z0lucHV0ID0gZWxlbWVudC5wYXJlbnRzKCcuY29udGVudCcpLmZpbmQoJ1tuYW1lKj1cIltzbHVnXVwiXScpO1xuICBpZiAoc2x1Z0lucHV0LmF0dHIoJ3JlYWRvbmx5JykgPT09ICdyZWFkb25seScpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsb2FkYWJsZVBhcmVudCA9IHNsdWdJbnB1dC5wYXJlbnRzKCcuZmllbGQubG9hZGFibGUnKTtcbiAgY29uc3QgcGFyZW50VGF4b25JbnB1dCA9ICQoJyNzeWxpdXNfdGF4b25fcGFyZW50Jyk7XG5cbiAgbG9hZGFibGVQYXJlbnQuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICBsZXQgZGF0YTtcbiAgaWYgKHBhcmVudFRheG9uSW5wdXQubGVuZ3RoID4gMCAmJiBwYXJlbnRUYXhvbklucHV0LnZhbCgpICE9PSAnJykge1xuICAgIGRhdGEgPSB7XG4gICAgICBuYW1lOiBlbGVtZW50LnZhbCgpLFxuICAgICAgbG9jYWxlOiBlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLWxvY2FsZV0nKS5kYXRhKCdsb2NhbGUnKSxcbiAgICAgIHBhcmVudENvZGU6IHBhcmVudFRheG9uSW5wdXQudmFsKCksXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhID0ge1xuICAgICAgbmFtZTogZWxlbWVudC52YWwoKSxcbiAgICAgIGxvY2FsZTogZWxlbWVudC5jbG9zZXN0KCdbZGF0YS1sb2NhbGVdJykuZGF0YSgnbG9jYWxlJyksXG4gICAgfTtcbiAgfVxuXG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiBzbHVnSW5wdXQuYXR0cignZGF0YS11cmwnKSxcbiAgICBkYXRhLFxuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgc2x1Z0lucHV0LnZhbChyZXNwb25zZS5zbHVnKTtcbiAgICAgIGlmIChzbHVnSW5wdXQucGFyZW50cygnLmZpZWxkJykuaGFzQ2xhc3MoJ2Vycm9yJykpIHtcbiAgICAgICAgc2x1Z0lucHV0LnBhcmVudHMoJy5maWVsZCcpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICBzbHVnSW5wdXQucGFyZW50cygnLmZpZWxkJykuZmluZCgnLnN5bGl1cy12YWxpZGF0aW9uLWVycm9yJykucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlcnJvcigpIHtcbiAgICAgIHNsdWdJbnB1dC52YWwoJycpO1xuICAgIH0sXG4gICAgY29tcGxldGUoKSB7XG4gICAgICBsb2FkYWJsZVBhcmVudC5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgIH0sXG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlU2x1Z01vZGlmaWNhdGlvbiA9IGZ1bmN0aW9uIHRvZ2dsZVNsdWdNb2RpZmljYXRpb24oYnV0dG9uLCBzbHVnSW5wdXQpIHtcbiAgaWYgKHNsdWdJbnB1dC5hdHRyKCdyZWFkb25seScpKSB7XG4gICAgc2x1Z0lucHV0LnJlbW92ZUF0dHIoJ3JlYWRvbmx5Jyk7XG4gICAgYnV0dG9uLmh0bWwoJzxpIGNsYXNzPVwidW5sb2NrIGljb25cIj48L2k+Jyk7XG4gIH0gZWxzZSB7XG4gICAgc2x1Z0lucHV0LmF0dHIoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG4gICAgYnV0dG9uLmh0bWwoJzxpIGNsYXNzPVwibG9jayBpY29uXCI+PC9pPicpO1xuICB9XG59O1xuXG4kLmZuLmV4dGVuZCh7XG4gIHRheG9uU2x1Z0dlbmVyYXRvcigpIHtcbiAgICBsZXQgdGltZW91dDtcblxuICAgICQoJ1tuYW1lKj1cInN5bGl1c190YXhvblt0cmFuc2xhdGlvbnNdXCJdW25hbWUqPVwiW25hbWVdXCJdJykub24oJ2lucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB1cGRhdGVTbHVnKGVsZW1lbnQpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gICAgJCgnI3N5bGl1c190YXhvbl9wYXJlbnQnKS5wYXJlbnQoKS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgbmFtZUlucHV0ID0gJCgnW2RhdGEtbG9jYWxlXScpLmZpbmQoJy5jb250ZW50LmFjdGl2ZSBbbmFtZSo9XCJzeWxpdXNfdGF4b25bdHJhbnNsYXRpb25zXVwiXVtuYW1lKj1cIltuYW1lXVwiXScpO1xuICAgICAgaWYgKG5hbWVJbnB1dC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVTbHVnKCQobmFtZUlucHV0KSk7XG4gICAgfSk7XG5cbiAgICAkKCcudG9nZ2xlLXRheG9uLXNsdWctbW9kaWZpY2F0aW9uJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlU2x1Z01vZGlmaWNhdGlvbigkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNpYmxpbmdzKCdpbnB1dCcpKTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuIiwiY2xhc3MgU3lsaXVzVGF4b25vbXlUcmVlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hdHRyID0ge1xuICAgICAgdHJlZTogJ2RhdGEtc3lsaXVzLWpzLXRyZWUnLFxuICAgICAgcGFyZW50OiAnZGF0YS1zeWxpdXMtanMtdHJlZS1wYXJlbnQnLFxuICAgICAgdHJpZ2dlcjogJ2RhdGEtc3lsaXVzLWpzLXRyZWUtdHJpZ2dlcicsXG4gICAgICBzdG9yYWdlTmFtZTogJ3N5bGl1czp0YXhvbm9teTpoaWRkZW4nLFxuICAgIH07XG5cbiAgICB0aGlzLnRyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLmF0dHIudHJlZX1dYCk7XG4gICAgaWYgKCF0aGlzLnRyZWUpIHJldHVybjtcbiAgICB0aGlzLmhpZGRlbkl0ZW1zID0gdGhpcy5nZXRNYXBGcm9tU3RvcmFnZSgpO1xuICAgIHRoaXMucmVuZGVyTWFwKCk7XG4gICAgdGhpcy50cmVlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgdGhpcy50cmVlLnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMuYXR0ci50cmlnZ2VyfV1gKS5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVUcmlnZ2VyLmJpbmQodGhpcywgdHJpZ2dlcikpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlVHJpZ2dlcih0cmlnZ2VyLCBlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgaWQgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZSh0aGlzLmF0dHIudHJpZ2dlcikgfHwgbnVsbDtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnRyZWUucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5hdHRyLnBhcmVudH09XCIke2lkfVwiXWApIHx8IHRoaXMudHJlZTtcbiAgICBjb25zdCB0b1JlbW92ZSA9IHRoaXMuaGlkZGVuSXRlbXMuaW5kZXhPZihpZCkgPT09IC0xO1xuXG4gICAgdGhpcy5oaWRkZW5JdGVtcyA9ICFpZCAmJiB0aGlzLmhpZGRlbkl0ZW1zLmxlbmd0aCA/IFtdIDogdGhpcy50b2dnbGUodG9SZW1vdmUsIHRoaXMuZ2V0SURzKHBhcmVudCwgdG9SZW1vdmUpKTtcbiAgICB0aGlzLnNhdmVNYXBUb1N0b3JhZ2UodGhpcy5oaWRkZW5JdGVtcyk7XG4gICAgdGhpcy5yZW5kZXJNYXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRpbmcgb3IgcmVtb3ZpbmcgdGhlIGdpdmVuIGFycmF5IG9mIGl0ZW1zIElEIGZyb20gdGhlIGhpZGRlbkl0ZW1zIGFycmF5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWN0aW9uIC0gdHJ1ZTogYWRkLCBmYWxzZTogcmVtb3ZlIGZyb20gYXJyYXlcbiAgICogQHBhcmFtIHtBcnJheX0gaWRzIC0gYXJyYXkgb2YgaXRlbXMgSURcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICB0b2dnbGUoYWN0aW9uLCBpZHMpIHtcbiAgICBjb25zdCBuZXdNYXAgPSBbLi4udGhpcy5oaWRkZW5JdGVtc107XG5cbiAgICBpZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBuZXdNYXAuaW5kZXhPZihpdGVtKTtcbiAgICAgIGlmIChhY3Rpb24gJiYgaW5kZXggPT09IC0xKSBuZXdNYXAucHVzaChpdGVtKTtcbiAgICAgIGlmICghYWN0aW9uICYmIGluZGV4ICE9PSAtMSkgbmV3TWFwLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3TWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBJRCBvZiBnaXZlbiBOb2RlIGVsZW1lbnQgKGlmIGhhcyBvbmUpIGFuZCBvcHRpb25hbCBJRHMgb2YgY2hpbGRyZW5cbiAgICogQHBhcmFtIHtOb2RlfSBwYXJlbnRcbiAgICogQHBhcmFtIHtib29sZWFufSB3aXRoQ2hpbGRyZW5cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBnZXRJRHMocGFyZW50LCB3aXRoQ2hpbGRyZW4gPSB0cnVlKSB7XG4gICAgY29uc3QgYXJyID0gcGFyZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmF0dHIucGFyZW50KSA/IFtwYXJlbnRdIDogW107XG4gICAgY29uc3QgY2hpbGRyZW4gPSB3aXRoQ2hpbGRyZW4gPyBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHt0aGlzLmF0dHIucGFyZW50fV1gKSkgOiBbXTtcbiAgICByZXR1cm4gWy4uLmFyciwgLi4uY2hpbGRyZW5dLm1hcCgoY2hpbGQsIGkpID0+IGNoaWxkLmdldEF0dHJpYnV0ZSh0aGlzLmF0dHIucGFyZW50KSk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgZWxlbWVudHMgaWYgdGhlaXIgSUQgaXMgaW4gdGhlIGhpZGRlbkl0ZW1zIGFycmF5XG4gICAqL1xuICByZW5kZXJNYXAoKSB7XG4gICAgdGhpcy50cmVlLnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMuYXR0ci5wYXJlbnR9XWApLmZvckVhY2gocGFyZW50ID0+IHtcbiAgICAgIGNvbnN0IGlkID0gcGFyZW50LmdldEF0dHJpYnV0ZSh0aGlzLmF0dHIucGFyZW50KTtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5oaWRkZW5JdGVtcy5pbmRleE9mKGlkKSAhPT0gLTE7XG4gICAgICBwYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIHN0YXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaXRlbXMgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZ2V0TWFwRnJvbVN0b3JhZ2UoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmF0dHIuc3RvcmFnZU5hbWUpO1xuICAgIHJldHVybiBpdGVtcyA/IEpTT04ucGFyc2UoaXRlbXMpIDogW107XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSBpdGVtcyB0byBsb2NhbCBzdG9yYWdlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gICAqL1xuICBzYXZlTWFwVG9TdG9yYWdlKGl0ZW1zKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuYXR0ci5zdG9yYWdlTmFtZSwgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUYXhvbm9teVRyZWU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2FjY29yZGlvbic7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2NoZWNrYm94JztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvZGltbWVyJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvZHJvcGRvd24nO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9yYXRpbmcnO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9zaWRlYmFyJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvdGFiJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvdHJhbnNpdGlvbic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgJy4vc3lsaXVzLWJ1bGstYWN0aW9uLXJlcXVpcmUtY29uZmlybWF0aW9uJztcbmltcG9ydCAnLi9zeWxpdXMtZm9ybS1jb2xsZWN0aW9uJztcbmltcG9ydCAnLi9zeWxpdXMtcmVxdWlyZS1jb25maXJtYXRpb24nO1xuaW1wb3J0ICcuL3N5bGl1cy10b2dnbGUnO1xuaW1wb3J0ICcuL3N5bGl1cy1jaGVjay1hbGwnO1xuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICQoJyNzaWRlYmFyJykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgJCgnI3NpZGViYXInKS5zaWRlYmFyKCdhdHRhY2ggZXZlbnRzJywgJyNzaWRlYmFyLXRvZ2dsZScsICd0b2dnbGUnKTtcbiAgJCgnI3NpZGViYXInKS5zaWRlYmFyKCdzZXR0aW5nJywge1xuICAgIGRpbVBhZ2U6IGZhbHNlLFxuICAgIGNsb3NhYmxlOiBmYWxzZSxcbiAgfSk7XG5cbiAgJCgnLnVpLmNoZWNrYm94JykuY2hlY2tib3goKTtcbiAgJCgnLnVpLmFjY29yZGlvbicpLmFjY29yZGlvbigpO1xuICAkKCcudWkubWVudSAuZHJvcGRvd24nKS5kcm9wZG93bih7IGFjdGlvbjogJ2hpZGUnIH0pO1xuICAkKCcudWkuaW5saW5lLmRyb3Bkb3duJykuZHJvcGRvd24oKTtcbiAgJCgnLmxpbmsudWkuZHJvcGRvd24nKS5kcm9wZG93bih7IGFjdGlvbjogJ2hpZGUnIH0pO1xuICAkKCcuYnV0dG9uLnVpLmRyb3Bkb3duJykuZHJvcGRvd24oeyBhY3Rpb246ICdoaWRlJyB9KTtcbiAgJCgnLnVpLmZsdWlkLnNlYXJjaC5zZWxlY3Rpb24udWkuZHJvcGRvd24nKS5kcm9wZG93bigpO1xuICAkKCcudWkudGFidWxhci5tZW51IC5pdGVtLCAuc3lsaXVzLXRhYnVsYXItZm9ybSAubWVudSAuaXRlbScpLnRhYigpO1xuICAkKCcudWkuY2FyZCAuZGltbWFibGUuaW1hZ2UsIC51aS5jYXJkcyAuY2FyZCAuZGltbWFibGUuaW1hZ2UnKS5kaW1tZXIoeyBvbjogJ2hvdmVyJyB9KTtcbiAgJCgnLnVpLnJhdGluZycpLnJhdGluZygnZGlzYWJsZScpO1xuXG4gICQoJ2Zvcm0ubG9hZGFibGUgYnV0dG9uW3R5cGU9c3VibWl0XScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnZm9ybScpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gIH0pO1xuICAkKCcubG9hZGFibGUuYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnbG9hZGluZycpO1xuICB9KTtcbiAgJCgnLm1lc3NhZ2UgLmNsb3NlJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCcubWVzc2FnZScpLnRyYW5zaXRpb24oJ2ZhZGUnKTtcbiAgfSk7XG5cbiAgJCgnW2RhdGEtcmVxdWlyZXMtY29uZmlybWF0aW9uXScpLnJlcXVpcmVDb25maXJtYXRpb24oKTtcbiAgJCgnW2RhdGEtYnVsay1hY3Rpb24tcmVxdWlyZXMtY29uZmlybWF0aW9uXScpLmJ1bGtBY3Rpb25SZXF1aXJlQ29uZmlybWF0aW9uKCk7XG4gICQoJ1tkYXRhLXRvZ2dsZXNdJykudG9nZ2xlRWxlbWVudCgpO1xuICAkKCdbZGF0YS1qcy1idWxrLWNoZWNrYm94ZXNdJykuY2hlY2tBbGwoKTtcblxuICAkKCcuc3BlY2lhbC5jYXJkcyAuaW1hZ2UnKS5kaW1tZXIoe1xuICAgIG9uOiAnaG92ZXInLFxuICB9KTtcblxuICAkKCdbZGF0YS1mb3JtLXR5cGU9XCJjb2xsZWN0aW9uXCJdJykuQ29sbGVjdGlvbkZvcm0oKTtcblxuICAkKCdbZGF0YS1qcy1kaXNhYmxlXScpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgJGN1cnJlbnQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgJChkb2N1bWVudCkuZmluZCgkY3VycmVudC5hdHRyKCdkYXRhLWpzLWRpc2FibGUnKSkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gIH0pO1xufSk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2Ryb3Bkb3duJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBzYW5pdGl6ZUlucHV0IH0gZnJvbSBcIi4vc3lsaXVzLXNhbml0aXplclwiO1xuXG4kLmZuLmV4dGVuZCh7XG4gIGF1dG9Db21wbGV0ZSgpIHtcbiAgICB0aGlzLmVhY2goKGlkeCwgZWwpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKGVsKTtcbiAgICAgIGNvbnN0IGNyaXRlcmlhTmFtZSA9IGVsZW1lbnQuZGF0YSgnY3JpdGVyaWEtbmFtZScpO1xuICAgICAgY29uc3QgY2hvaWNlTmFtZSA9IGVsZW1lbnQuZGF0YSgnY2hvaWNlLW5hbWUnKTtcbiAgICAgIGNvbnN0IGNob2ljZVZhbHVlID0gZWxlbWVudC5kYXRhKCdjaG9pY2UtdmFsdWUnKTtcbiAgICAgIGNvbnN0IGF1dG9jb21wbGV0ZVZhbHVlID0gZWxlbWVudC5maW5kKCdpbnB1dC5hdXRvY29tcGxldGUnKS52YWwoKTtcbiAgICAgIGNvbnN0IGxvYWRGb3JFZGl0VXJsID0gZWxlbWVudC5kYXRhKCdsb2FkLWVkaXQtdXJsJyk7XG5cbiAgICAgIGVsZW1lbnQuZHJvcGRvd24oe1xuICAgICAgICBkZWxheToge1xuICAgICAgICAgIHNlYXJjaDogMjUwLFxuICAgICAgICB9LFxuICAgICAgICBmb3JjZVNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIHNhdmVSZW1vdGVEYXRhOiBmYWxzZSxcbiAgICAgICAgYXBpU2V0dGluZ3M6IHtcbiAgICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICBiZWZvcmVTZW5kKHNldHRpbmdzKSB7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICAgICAgICAgIHNldHRpbmdzLmRhdGFbY3JpdGVyaWFOYW1lXSA9IHNldHRpbmdzLnVybERhdGEucXVlcnk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncztcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gcmVzcG9uc2UubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICAgbmFtZTogc2FuaXRpemVJbnB1dChpdGVtW2Nob2ljZU5hbWVdKSxcbiAgICAgICAgICAgICAgdmFsdWU6IHNhbml0aXplSW5wdXQoaXRlbVtjaG9pY2VWYWx1ZV0pLFxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuaGFzQ2xhc3MoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgICAgcmVzdWx0cy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnJm5ic3A7JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICByZXN1bHRzOiByZXN1bHRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhdXRvY29tcGxldGVWYWx1ZS5zcGxpdCgnLCcpLmZpbHRlcihTdHJpbmcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbWVudUVsZW1lbnQgPSBlbGVtZW50LmZpbmQoJ2Rpdi5tZW51Jyk7XG5cbiAgICAgICAgbWVudUVsZW1lbnQuYXBpKHtcbiAgICAgICAgICBvbjogJ25vdycsXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICB1cmw6IGxvYWRGb3JFZGl0VXJsLFxuICAgICAgICAgIGJlZm9yZVNlbmQoc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgICAgICAgICAgc2V0dGluZ3MuZGF0YVtjaG9pY2VWYWx1ZV0gPSBhdXRvY29tcGxldGVWYWx1ZS5zcGxpdCgnLCcpLmZpbHRlcihTdHJpbmcpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZ3M7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgbWVudUVsZW1lbnQuYXBwZW5kKChcbiAgICAgICAgICAgICAgICAkKGA8ZGl2IGNsYXNzPVwiaXRlbVwiIGRhdGEtdmFsdWU9XCIke2l0ZW1bY2hvaWNlVmFsdWVdfVwiPiR7c2FuaXRpemVJbnB1dChpdGVtW2Nob2ljZU5hbWVdKX08L2Rpdj5gKVxuICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlbGVtZW50LmRyb3Bkb3duKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICBlbGVtZW50LmRyb3Bkb3duKCdzZXQgc2VsZWN0ZWQnLCBlbGVtZW50LmZpbmQoJ2lucHV0LmF1dG9jb21wbGV0ZScpLnZhbCgpLnNwbGl0KCcsJykuZmlsdGVyKFN0cmluZykpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufSk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQuZm4uZXh0ZW5kKHtcbiAgYnVsa0FjdGlvblJlcXVpcmVDb25maXJtYXRpb24oKSB7XG4gICAgdGhpcy5lYWNoKChpZHgsIGVsKSA9PiB7XG4gICAgICAkKGVsKS5vbignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGFjdGlvbkJ1dHRvbiA9ICQoZXZ0LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIGlmIChhY3Rpb25CdXR0b24uaXMoJ2EnKSkge1xuICAgICAgICAgICQoJyNjb25maXJtYXRpb24tYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFjdGlvbkJ1dHRvbi5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uQnV0dG9uLmlzKCdidXR0b24nKSkge1xuICAgICAgICAgICQoJyNjb25maXJtYXRpb24tYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gYWN0aW9uQnV0dG9uLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgICAgICQoJ2lucHV0LmJ1bGstc2VsZWN0LWNoZWNrYm94OmNoZWNrZWQnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAkKGA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZHNbXVwiIHZhbHVlPVwiJHtlbGVtZW50LnZhbHVlfVwiPmApLmFwcGVuZFRvKGZvcm0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcjY29uZmlybWF0aW9uLW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxufSk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kLmZuLmV4dGVuZCh7XG4gIGNoZWNrQWxsKCkge1xuICAgIHRoaXMuZWFjaCgoaWR4LCBlbCkgPT4ge1xuICAgICAgY29uc3QgJGNoZWNrYm94QWxsID0gJChlbCk7XG4gICAgICBjb25zdCAkY2hlY2tib3hlcyA9ICQoJGNoZWNrYm94QWxsLmF0dHIoJ2RhdGEtanMtYnVsay1jaGVja2JveGVzJykpO1xuICAgICAgY29uc3QgJGJ1dHRvbnMgPSAkKCRjaGVja2JveEFsbC5hdHRyKCdkYXRhLWpzLWJ1bGstYnV0dG9ucycpKTtcblxuICAgICAgY29uc3QgaXNBbnlDaGVja2VkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAkY2hlY2tib3hlcy5lYWNoKChpLCBjaGVja2JveCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgYnV0dG9uc1Byb3BSZWZyZXNoID0gKCkgPT4ge1xuICAgICAgICAkYnV0dG9ucy5maW5kKCdidXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsICFpc0FueUNoZWNrZWQoKSk7XG4gICAgICB9O1xuXG4gICAgICAkY2hlY2tib3hBbGwub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgJGNoZWNrYm94ZXMucHJvcCgnY2hlY2tlZCcsICQodGhpcykuaXMoJzpjaGVja2VkJykpO1xuICAgICAgICBidXR0b25zUHJvcFJlZnJlc2goKTtcbiAgICAgIH0pO1xuXG4gICAgICAkY2hlY2tib3hlcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAkY2hlY2tib3hBbGwucHJvcCgnY2hlY2tlZCcsIGlzQW55Q2hlY2tlZCgpKTtcbiAgICAgICAgYnV0dG9uc1Byb3BSZWZyZXNoKCk7XG4gICAgICB9KTtcblxuICAgICAgYnV0dG9uc1Byb3BSZWZyZXNoKCk7XG4gICAgfSk7XG4gIH0sXG59KTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFN5bGl1cyBTcC4geiBvLm8uXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogQ29sbGVjdGlvbiBGb3JtIHBsdWdpblxuICpcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY2xhc3MgQ29sbGVjdGlvbkZvcm0ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5hZGRJdGVtID0gdGhpcy5hZGRJdGVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVJdGVtID0gdGhpcy51cGRhdGVJdGVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZWxldGVJdGVtID0gdGhpcy5jb25zdHJ1Y3Rvci5kZWxldGVJdGVtO1xuICAgIHRoaXMudXBkYXRlUHJvdG90eXBlID0gdGhpcy51cGRhdGVQcm90b3R5cGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgIHRoaXMuJGxpc3QgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLWZvcm0tY29sbGVjdGlvbj1cImxpc3RcIl06Zmlyc3QnKTtcbiAgICB0aGlzLmNvdW50ID0gdGhpcy4kbGlzdC5jaGlsZHJlbigpLmxlbmd0aDtcbiAgICB0aGlzLmxhc3RDaG9pY2UgPSBudWxsO1xuICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrJywgJ1tkYXRhLWZvcm0tY29sbGVjdGlvbj1cImFkZFwiXTpsYXN0JywgdGhpcy5hZGRJdGVtKTtcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdjbGljaycsICdbZGF0YS1mb3JtLWNvbGxlY3Rpb249XCJkZWxldGVcIl0nLCB0aGlzLmRlbGV0ZUl0ZW0pO1xuICAgIHRoaXMuJGVsZW1lbnQub24oJ2NoYW5nZScsICdbZGF0YS1mb3JtLWNvbGxlY3Rpb249XCJ1cGRhdGVcIl0nLCB0aGlzLnVwZGF0ZUl0ZW0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnW2RhdGEtZm9ybS1wcm90b3R5cGU9XCJ1cGRhdGVcIl0nLCB0aGlzLnVwZGF0ZVByb3RvdHlwZSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NvbGxlY3Rpb24tZm9ybS1hZGQnLCAoZXZlbnQsIGFkZGVkRWxlbWVudCkgPT4ge1xuICAgICAgJChhZGRlZEVsZW1lbnQpLmZpbmQoJ1tkYXRhLWZvcm0tdHlwZT1cImNvbGxlY3Rpb25cIl0nKS5Db2xsZWN0aW9uRm9ybSgpO1xuICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignZG9tLW5vZGUtaW5zZXJ0ZWQnLCBbJChhZGRlZEVsZW1lbnQpXSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgaXRlbSB0byB0aGUgY29sbGVjdGlvbi5cbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBhZGRJdGVtKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBwcm90b3R5cGUgPSB0aGlzLiRlbGVtZW50LmRhdGEoJ3Byb3RvdHlwZScpO1xuICAgIGxldCBwcm90b3R5cGVOYW1lID0gbmV3IFJlZ0V4cCh0aGlzLiRlbGVtZW50LmRhdGEoJ3Byb3RvdHlwZS1uYW1lJyksICdnJyk7XG5cbiAgICBwcm90b3R5cGUgPSBwcm90b3R5cGUucmVwbGFjZShwcm90b3R5cGVOYW1lLCB0aGlzLmNvdW50KTtcblxuICAgIHRoaXMuJGxpc3QuYXBwZW5kKHByb3RvdHlwZSk7XG4gICAgdGhpcy5jb3VudCA9IHRoaXMuY291bnQgKyAxO1xuXG4gICAgJChkb2N1bWVudCkudHJpZ2dlcignY29sbGVjdGlvbi1mb3JtLWFkZCcsIFt0aGlzLiRsaXN0LmNoaWxkcmVuKCkubGFzdCgpXSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGl0ZW0gZnJvbSB0aGUgY29sbGVjdGlvblxuICAgKi9cbiAgdXBkYXRlSXRlbShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IHVybCA9ICRlbGVtZW50LmRhdGEoJ2Zvcm0tdXJsJyk7XG4gICAgY29uc3QgdmFsdWUgPSAkZWxlbWVudC52YWwoKTtcbiAgICBjb25zdCAkY29udGFpbmVyID0gJGVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtZm9ybS1jb2xsZWN0aW9uPVwiaXRlbVwiXScpO1xuICAgIGNvbnN0IGluZGV4ID0gJGNvbnRhaW5lci5kYXRhKCdmb3JtLWNvbGxlY3Rpb24taW5kZXgnKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9ICRjb250YWluZXIuZGF0YSgnZm9ybS1jb2xsZWN0aW9uLWluZGV4Jyk7XG5cbiAgICBpZiAodXJsKSB7XG4gICAgICAkY29udGFpbmVyLmxvYWQodXJsLCB7IGlkOiB2YWx1ZSwgcG9zaXRpb24gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCAkcHJvdG90eXBlID0gdGhpcy4kZWxlbWVudC5maW5kKGBbZGF0YS1mb3JtLXByb3RvdHlwZT1cIiR7dmFsdWV9XCJdYCk7XG4gICAgICBsZXQgcHJvdG90eXBlTmFtZSA9IG5ldyBSZWdFeHAoJHByb3RvdHlwZS5kYXRhKCdzdWJwcm90b3R5cGUtbmFtZScpLCAnZycpO1xuXG4gICAgICBsZXQgcHJvdG90eXBlID0gJHByb3RvdHlwZS52YWwoKS5yZXBsYWNlKHByb3RvdHlwZU5hbWUsIGluZGV4KTtcblxuICAgICAgJGNvbnRhaW5lci5yZXBsYWNlV2l0aChwcm90b3R5cGUpO1xuICAgIH1cbiAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdjb2xsZWN0aW9uLWZvcm0tdXBkYXRlJywgWyQoZXZlbnQuY3VycmVudFRhcmdldCldKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgaXRlbSBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgc3RhdGljIGRlbGV0ZUl0ZW0oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgLmNsb3Nlc3QoJ1tkYXRhLWZvcm0tY29sbGVjdGlvbj1cIml0ZW1cIl0nKVxuICAgICAgLnJlbW92ZSgpO1xuXG4gICAgJChkb2N1bWVudCkudHJpZ2dlcignY29sbGVjdGlvbi1mb3JtLWRlbGV0ZScsIFskKGV2ZW50LmN1cnJlbnRUYXJnZXQpXSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBwcm90b3R5cGVcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICB1cGRhdGVQcm90b3R5cGUoZXZlbnQpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBsZXQgcHJvdG90eXBlTmFtZSA9ICR0YXJnZXQudmFsKCk7XG5cbiAgICBpZiAoJHRhcmdldC5kYXRhKCdmb3JtLXByb3RvdHlwZS1wcmVmaXgnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm90b3R5cGVOYW1lID0gJHRhcmdldC5kYXRhKCdmb3JtLXByb3RvdHlwZS1wcmVmaXgnKSArIHByb3RvdHlwZU5hbWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdENob2ljZSAhPT0gbnVsbCAmJiB0aGlzLmxhc3RDaG9pY2UgIT09IHByb3RvdHlwZU5hbWUpIHtcbiAgICAgIHRoaXMuJGxpc3QuaHRtbCgnJyk7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0Q2hvaWNlID0gcHJvdG90eXBlTmFtZTtcblxuICAgIHRoaXMuJGVsZW1lbnQuZGF0YSgncHJvdG90eXBlJywgdGhpcy4kZWxlbWVudC5maW5kKGBbZGF0YS1mb3JtLXByb3RvdHlwZT1cIiR7cHJvdG90eXBlTmFtZX1cIl1gKS52YWwoKSk7XG4gIH1cbn1cblxuLypcbiAqIFBsdWdpbiBkZWZpbml0aW9uXG4gKi9cblxuJC5mbi5Db2xsZWN0aW9uRm9ybSA9IGZ1bmN0aW9uIENvbGxlY3Rpb25Gb3JtUGx1Z2luKG9wdGlvbikge1xuICB0aGlzLmVhY2goKGlkeCwgZWwpID0+IHtcbiAgICBjb25zdCAkZWxlbWVudCA9ICQoZWwpO1xuICAgIGNvbnN0IGRhdGEgPSAkZWxlbWVudC5kYXRhKCdjb2xsZWN0aW9uRm9ybScpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyAmJiBvcHRpb247XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICRlbGVtZW50LmRhdGEoJ2NvbGxlY3Rpb25Gb3JtJywgbmV3IENvbGxlY3Rpb25Gb3JtKGVsLCBvcHRpb25zKSk7XG4gICAgfVxuICB9KTtcbn07XG5cbiQuZm4uQ29sbGVjdGlvbkZvcm0uQ29uc3RydWN0b3IgPSBDb2xsZWN0aW9uRm9ybTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFN5bGl1cyBTcC4geiBvLm8uXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvZHJvcGRvd24nO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgZ2V0TmV4dEluZGV4ID0gZnVuY3Rpb24gZ2V0TmV4dEluZGV4KCkge1xuICByZXR1cm4gJCgnI2F0dHJpYnV0ZXNDb250YWluZXInKS5hdHRyKCdkYXRhLWNvdW50Jyk7XG59O1xuXG5jb25zdCBhZGRBdHRyaWJ1dGVzTnVtYmVyID0gZnVuY3Rpb24gYWRkQXR0cmlidXRlc051bWJlcihudW1iZXIpIHtcbiAgY29uc3QgY3VycmVudEluZGV4ID0gcGFyc2VJbnQoZ2V0TmV4dEluZGV4KCksIDEwKTtcbiAgJCgnI2F0dHJpYnV0ZXNDb250YWluZXInKS5hdHRyKCdkYXRhLWNvdW50JywgY3VycmVudEluZGV4ICsgbnVtYmVyKTtcbn07XG5cbmNvbnN0IGNvbnRyb2xBdHRyaWJ1dGVzTGlzdCA9IGZ1bmN0aW9uIGNvbnRyb2xBdHRyaWJ1dGVzTGlzdCgpIHtcbiAgJCgnI2F0dHJpYnV0ZXNDb250YWluZXIgLmF0dHJpYnV0ZScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtaWQnKTtcbiAgICAkKCcjc3lsaXVzX3Byb2R1Y3RfYXR0cmlidXRlX2Nob2ljZScpLmRyb3Bkb3duKCdzZXQgc2VsZWN0ZWQnLCB2YWx1ZSk7XG4gIH0pO1xufTtcblxuY29uc3QgbW9kaWZ5QXR0cmlidXRlc0xpc3RPblNlbGVjdG9yRWxlbWVudERlbGV0ZSA9IGZ1bmN0aW9uIG1vZGlmeUF0dHJpYnV0ZXNMaXN0T25TZWxlY3RvckVsZW1lbnREZWxldGUocmVtb3ZlZFZhbHVlKSB7XG4gIC8vIE9uY2UgdGhlIGVudGVyIGtleSBwcmVzc2VkIG9uIGFueSBmaWVsZCBpbiB0aGUgcHJvZHVjdCBwYWdlIGNhdXNlIGFuIGF0dHJpYnV0ZSBkZWxldGlvbi5cbiAgLy8gV2hlbiB0aGlzIGJ1ZyBvY2N1cnMsIHRoZSB2YWx1ZSBvZiBwYWdlWCBpcyBlcXVhbCB0byAwLiBTbyBpZiBwYWdlWCBpcyBub3QgZXF1YWwgdG8gMCwgaXQgbWVhbnMgdGhlIHVzZXIgY2xpY2tlZFxuICAvLyBvbiB0aGUgZGVsZXRlIGJ1dHRvbiwgc28gdGhlIHJlbW92ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cbiAgaWYgKGV2ZW50LnBhZ2VYICE9IDApIHtcbiAgICAkKGAjYXR0cmlidXRlc0NvbnRhaW5lciAuYXR0cmlidXRlcy1ncm91cFtkYXRhLWF0dHJpYnV0ZS1jb2RlPVwiJHtyZW1vdmVkVmFsdWV9XCJdYCkucmVtb3ZlKCk7XG4gIH1cbn07XG5cbmNvbnN0IG1vZGlmeVNlbGVjdG9yT25BdHRyaWJ1dGVzTGlzdEVsZW1lbnREZWxldGUgPSBmdW5jdGlvbiBtb2RpZnlTZWxlY3Rvck9uQXR0cmlidXRlc0xpc3RFbGVtZW50RGVsZXRlKCkge1xuICAkKCcuYXR0cmlidXRlcy1ncm91cCBidXR0b25bZGF0YS1hdHRyaWJ1dGU9XCJkZWxldGVcIl0nKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYXR0cmlidXRlSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudHMoJy5hdHRyaWJ1dGVzLWdyb3VwJykuYXR0cignZGF0YS1hdHRyaWJ1dGUtY29kZScpO1xuXG4gICAgJCgnZGl2I2F0dHJpYnV0ZUNob2ljZSA+IC51aS5kcm9wZG93bi5zZWFyY2gnKS5kcm9wZG93bigncmVtb3ZlIHNlbGVjdGVkJywgYXR0cmlidXRlSWQpO1xuICAgIG1vZGlmeUF0dHJpYnV0ZXNMaXN0T25TZWxlY3RvckVsZW1lbnREZWxldGUoYXR0cmlidXRlSWQpO1xuICB9KTtcbn07XG5cbmNvbnN0IG1vZGlmeUF0dHJpYnV0ZUZvcm1FbGVtZW50cyA9IGZ1bmN0aW9uIG1vZGlmeUF0dHJpYnV0ZUZvcm1FbGVtZW50cygkcmVzcG9uc2UpIHtcbiAgJHJlc3BvbnNlLmZpbmQoJ2lucHV0LHNlbGVjdCx0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgaWYgKCQoZWxlbWVudCkuYXR0cignZGF0YS1uYW1lJykgIT0gbnVsbCkge1xuICAgICAgJChlbGVtZW50KS5hdHRyKCduYW1lJywgJChlbGVtZW50KS5hdHRyKCdkYXRhLW5hbWUnKSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gJHJlc3BvbnNlO1xufTtcblxuY29uc3QgaXNJblRoZUF0dHJpYnV0ZXNDb250YWluZXIgPSBmdW5jdGlvbiBpc0luVGhlQXR0cmlidXRlc0NvbnRhaW5lcihhdHRyaWJ1dGVJZCkge1xuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICQoJyNhdHRyaWJ1dGVzQ29udGFpbmVyIC5hdHRyaWJ1dGUnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRhdGFJZCA9ICQoZWxlbWVudCkuYXR0cignZGF0YS1pZCcpO1xuICAgIGlmIChkYXRhSWQgPT09IGF0dHJpYnV0ZUlkKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGNvcHlWYWx1ZVRvQWxsTGFuZ3VhZ2VzID0gZnVuY3Rpb24gY29weVZhbHVlVG9BbGxMYW5ndWFnZXMoKSB7XG4gICQoJyNhdHRyaWJ1dGVzQ29udGFpbmVyJykub24oJ2NsaWNrJywgJy5hdHRyaWJ1dGUgW2RhdGEtYXR0cmlidXRlPVwiY29weVwiXScsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCAkYXR0cmlidXRlc0NvbnRhaW5lciA9ICQoJyNhdHRyaWJ1dGVzQ29udGFpbmVyJyk7XG4gICAgY29uc3QgJG1hc3RlckF0dHJpYnV0ZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnLmF0dHJpYnV0ZScpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZUlEID0gJG1hc3RlckF0dHJpYnV0ZS5hdHRyKCdkYXRhLWlkJyk7XG4gICAgY29uc3QgJGF0dHJpYnV0ZUNvbGxlY3Rpb24gPSAkYXR0cmlidXRlc0NvbnRhaW5lci5maW5kKGBbZGF0YS1pZD1cIiR7YXR0cmlidXRlSUR9XCJdYCk7XG5cbiAgICBjb25zdCAkbWFzdGVyQXR0cmlidXRlSW5wdXRzID0gJG1hc3RlckF0dHJpYnV0ZS5maW5kKCdpbnB1dDp2aXNpYmxlLCBzZWxlY3QsIHRleHRhcmVhJyk7XG5cbiAgICAkYXR0cmlidXRlQ29sbGVjdGlvbi5lYWNoKChpbmRleCwgYXR0cikgPT4ge1xuICAgICAgY29uc3QgJGlucHV0cyA9ICQoYXR0cikuZmluZCgnaW5wdXQ6dmlzaWJsZSwgc2VsZWN0LCB0ZXh0YXJlYScpO1xuXG4gICAgICAkaW5wdXRzLmVhY2goKGksIGlucHV0KSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSAkbWFzdGVyQXR0cmlidXRlSW5wdXRzW2ldLmNoZWNrZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAkaW5wdXRzW2ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCBtYXN0ZXJPcHRpb24gPSBBcnJheS5mcm9tKCRtYXN0ZXJBdHRyaWJ1dGVJbnB1dHNbaV0ub3B0aW9ucykuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IGlucHV0W3hdLnZhbHVlKTtcbiAgICAgICAgICAgIGlucHV0W3hdLnNlbGVjdGVkID0gbWFzdGVyT3B0aW9uID8gbWFzdGVyT3B0aW9uLnNlbGVjdGVkIDogZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gJG1hc3RlckF0dHJpYnV0ZUlucHV0c1tpXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0QXR0cmlidXRlQ2hvaWNlTGlzdGVuZXIgPSBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVDaG9pY2VMaXN0ZW5lcigpIHtcbiAgY29uc3QgJGF0dHJpYnV0ZUNob2ljZSA9ICQoJyNhdHRyaWJ1dGVDaG9pY2UnKTtcbiAgJGF0dHJpYnV0ZUNob2ljZS5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgJGF0dHJpYnV0ZUNob2ljZVNlbGVjdCA9ICRhdHRyaWJ1dGVDaG9pY2UuZmluZCgnc2VsZWN0Jyk7XG4gICAgbGV0IHF1ZXJ5RGF0YSA9ICcnO1xuICAgIGNvbnN0ICRuZXdBdHRyaWJ1dGVzID0gJGF0dHJpYnV0ZUNob2ljZVNlbGVjdC52YWwoKTtcblxuICAgIGlmICgkbmV3QXR0cmlidXRlcyAhPSBudWxsKSB7XG4gICAgICAkYXR0cmlidXRlQ2hvaWNlU2VsZWN0LnZhbCgpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFpc0luVGhlQXR0cmlidXRlc0NvbnRhaW5lcihpdGVtKSkge1xuICAgICAgICAgIHF1ZXJ5RGF0YSArPSBgJHskYXR0cmlidXRlQ2hvaWNlU2VsZWN0LnByb3AoJ25hbWUnKX09JHtpdGVtfSZgO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcXVlcnlEYXRhICs9IGBjb3VudD0ke2dldE5leHRJbmRleCgpfWA7XG5cbiAgICAkKCdmb3JtJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIHVybDogJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5hdHRyKCdkYXRhLWFjdGlvbicpLFxuICAgICAgZGF0YTogcXVlcnlEYXRhLFxuICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgIGVycm9yKCkge1xuICAgICAgICAkKCdmb3JtJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZUZvcm1FbGVtZW50cyA9IG1vZGlmeUF0dHJpYnV0ZUZvcm1FbGVtZW50cygkKHJlc3BvbnNlKSk7XG5cbiAgICAgICAgYXR0cmlidXRlRm9ybUVsZW1lbnRzLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgbG9jYWxlQ29kZSA9ICQoZWxlbWVudCkuZmluZCgnaW5wdXRbdHlwZT1cImhpZGRlblwiXScpLmxhc3QoKS52YWwoKTtcbiAgICAgICAgICAkKGAjYXR0cmlidXRlc0NvbnRhaW5lciA+IGRpdmApLmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnI3N5bGl1c19wcm9kdWN0X2F0dHJpYnV0ZV9jaG9pY2UnKS52YWwoJycpO1xuXG4gICAgICAgIGFkZEF0dHJpYnV0ZXNOdW1iZXIoYXR0cmlidXRlRm9ybUVsZW1lbnRzLmZpbmQoJy5hdHRyaWJ1dGUnKS5sZW5ndGgpO1xuICAgICAgICBtb2RpZnlTZWxlY3Rvck9uQXR0cmlidXRlc0xpc3RFbGVtZW50RGVsZXRlKCk7XG5cbiAgICAgICAgJCgnZm9ybScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbn07XG5cbiQuZm4uZXh0ZW5kKHtcbiAgcHJvZHVjdEF0dHJpYnV0ZXMoKSB7XG4gICAgc2V0QXR0cmlidXRlQ2hvaWNlTGlzdGVuZXIoKTtcblxuICAgIHRoaXMuZHJvcGRvd24oe1xuICAgICAgb25SZW1vdmUocmVtb3ZlZFZhbHVlKSB7XG4gICAgICAgIG1vZGlmeUF0dHJpYnV0ZXNMaXN0T25TZWxlY3RvckVsZW1lbnREZWxldGUocmVtb3ZlZFZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBmb3JjZVNlbGVjdGlvbjogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBjb250cm9sQXR0cmlidXRlc0xpc3QoKTtcbiAgICBtb2RpZnlTZWxlY3Rvck9uQXR0cmlidXRlc0xpc3RFbGVtZW50RGVsZXRlKCk7XG4gICAgY29weVZhbHVlVG9BbGxMYW5ndWFnZXMoKTtcbiAgfSxcbn0pO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgU3lsaXVzIFNwLiB6IG8uby5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9kcm9wZG93bic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgc2FuaXRpemVJbnB1dCB9IGZyb20gXCIuL3N5bGl1cy1zYW5pdGl6ZXJcIjtcblxuJC5mbi5leHRlbmQoe1xuICBwcm9kdWN0QXV0b0NvbXBsZXRlKCkge1xuICAgIHRoaXMuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICRlbGVtZW50LmRyb3Bkb3duKCdzZXQgc2VsZWN0ZWQnLCAkZWxlbWVudC5maW5kKCdpbnB1dFtuYW1lKj1cIlthc3NvY2lhdGlvbnNdXCJdJykudmFsKCkuc3BsaXQoJywnKS5maWx0ZXIoU3RyaW5nKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyb3Bkb3duKHtcbiAgICAgIGRlbGF5OiB7XG4gICAgICAgIHNlYXJjaDogMjUwLFxuICAgICAgfSxcbiAgICAgIGZvcmNlU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgIGFwaVNldHRpbmdzOiB7XG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNyaXRlcmlhOiB7IHNlYXJjaDogeyB0eXBlOiAnY29udGFpbnMnLCB2YWx1ZTogJycgfSB9LFxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVTZW5kKHNldHRpbmdzKSB7XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgICAgc2V0dGluZ3MuZGF0YS5jcml0ZXJpYS5zZWFyY2gudmFsdWUgPSBzZXR0aW5ncy51cmxEYXRhLnF1ZXJ5O1xuXG4gICAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBvblJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICByZXN1bHRzOiByZXNwb25zZS5fZW1iZWRkZWQuaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICAgbmFtZTogc2FuaXRpemVJbnB1dChpdGVtLm5hbWUpLFxuICAgICAgICAgICAgICB2YWx1ZTogc2FuaXRpemVJbnB1dChpdGVtLmNvZGUpLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgb25BZGQoYWRkZWRWYWx1ZSwgYWRkZWRUZXh0LCAkYWRkZWRDaG9pY2UpIHtcbiAgICAgICAgY29uc3QgaW5wdXRBc3NvY2lhdGlvbiA9ICRhZGRlZENob2ljZS5wYXJlbnRzKCcucHJvZHVjdC1zZWxlY3QnKS5maW5kKCdpbnB1dFtuYW1lKj1cIlthc3NvY2lhdGlvbnNdXCJdJyk7XG4gICAgICAgIGNvbnN0IGFzc29jaWF0ZWRQcm9kdWN0Q29kZXMgPSBpbnB1dEFzc29jaWF0aW9uLnZhbCgpLmxlbmd0aCA+IDAgPyBpbnB1dEFzc29jaWF0aW9uLnZhbCgpLnNwbGl0KCcsJykuZmlsdGVyKFN0cmluZykgOiBbXTtcblxuICAgICAgICBhc3NvY2lhdGVkUHJvZHVjdENvZGVzLnB1c2goYWRkZWRWYWx1ZSk7XG4gICAgICAgICQudW5pcXVlKGFzc29jaWF0ZWRQcm9kdWN0Q29kZXMuc29ydCgpKTtcblxuICAgICAgICBpbnB1dEFzc29jaWF0aW9uLmF0dHIoJ3ZhbHVlJywgYXNzb2NpYXRlZFByb2R1Y3RDb2Rlcy5qb2luKCkpO1xuICAgICAgfSxcbiAgICAgIG9uUmVtb3ZlKHJlbW92ZWRWYWx1ZSwgcmVtb3ZlZFRleHQsICRyZW1vdmVkQ2hvaWNlKSB7XG4gICAgICAgIGNvbnN0IGlucHV0QXNzb2NpYXRpb24gPSAkcmVtb3ZlZENob2ljZS5wYXJlbnRzKCcucHJvZHVjdC1zZWxlY3QnKS5maW5kKCdpbnB1dFtuYW1lKj1cIlthc3NvY2lhdGlvbnNdXCJdJyk7XG4gICAgICAgIGNvbnN0IGFzc29jaWF0ZWRQcm9kdWN0Q29kZXMgPSBpbnB1dEFzc29jaWF0aW9uLnZhbCgpLmxlbmd0aCA+IDAgPyBpbnB1dEFzc29jaWF0aW9uLnZhbCgpLnNwbGl0KCcsJykuZmlsdGVyKFN0cmluZykgOiBbXTtcblxuICAgICAgICBhc3NvY2lhdGVkUHJvZHVjdENvZGVzLnNwbGljZSgkLmluQXJyYXkocmVtb3ZlZFZhbHVlLCBhc3NvY2lhdGVkUHJvZHVjdENvZGVzKSwgMSk7XG5cbiAgICAgICAgaW5wdXRBc3NvY2lhdGlvbi5hdHRyKCd2YWx1ZScsIGFzc29jaWF0ZWRQcm9kdWN0Q29kZXMuam9pbigpKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG59KTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFN5bGl1cyBTcC4geiBvLm8uXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IG1ldGhvZHMgPSB7XG4gIGluaXQob3B0aW9ucykge1xuICAgIGNvbnN0IHNldHRpbmdzID0gJC5leHRlbmQoe1xuICAgICAgcHJvdG90eXBlUHJlZml4OiBmYWxzZSxcbiAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiBmYWxzZSxcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGNvbnN0IHNob3cgPSBmdW5jdGlvbiBzaG93KGVsZW1lbnQsIHJlcGxhY2UpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBlbGVtZW50LnZhbCgpO1xuICAgICAgbGV0IHByb3RvdHlwZVByZWZpeCA9IGVsZW1lbnQuYXR0cignaWQnKTtcbiAgICAgIGlmIChzZXR0aW5ncy5wcm90b3R5cGVQcmVmaXggIT0gZmFsc2UpIHtcbiAgICAgICAgKHsgcHJvdG90eXBlUHJlZml4IH0gPSBzZXR0aW5ncyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3RvdHlwZUVsZW1lbnQgPSAkKGAjJHtwcm90b3R5cGVQcmVmaXh9XyR7c2VsZWN0ZWRWYWx1ZX1gKTtcbiAgICAgIGxldCBjb250YWluZXI7XG5cbiAgICAgIGlmIChzZXR0aW5ncy5jb250YWluZXJTZWxlY3Rvcikge1xuICAgICAgICBjb250YWluZXIgPSAkKHNldHRpbmdzLmNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lciA9ICQocHJvdG90eXBlRWxlbWVudC5kYXRhKCdjb250YWluZXInKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghcHJvdG90eXBlRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgY29udGFpbmVyLmVtcHR5KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlcGxhY2UgfHwgIWNvbnRhaW5lci5odG1sKCkudHJpbSgpKSB7XG4gICAgICAgIGNvbnRhaW5lci5odG1sKHByb3RvdHlwZUVsZW1lbnQuZGF0YSgncHJvdG90eXBlJykpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgc2hvdygkKGVsZW1lbnQpLCBmYWxzZSk7XG4gICAgICAkKGVsZW1lbnQpLmNoYW5nZSgoZXZlbnQpID0+IHtcbiAgICAgICAgc2hvdygkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxufTtcblxuJC5mbi5oYW5kbGVQcm90b3R5cGVzID0gZnVuY3Rpb24gaGFuZGxlUHJvdG90eXBlcyhtZXRob2QsIC4uLmFyZ3MpIHtcbiAgaWYgKG1ldGhvZHNbbWV0aG9kXSkge1xuICAgIHJldHVybiBtZXRob2RzW21ldGhvZF0uYXBwbHkodGhpcywgYXJncyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ29iamVjdCcgfHwgIW1ldGhvZCkge1xuICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkodGhpcywgW21ldGhvZCwgLi4uYXJnc10pO1xuICB9XG5cbiAgJC5lcnJvcihgTWV0aG9kICR7bWV0aG9kfSBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuaGFuZGxlUHJvdG90eXBlc2ApO1xuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgU3lsaXVzIFNwLiB6IG8uby5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9tb2RhbCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kLmZuLmV4dGVuZCh7XG4gIHJlcXVpcmVDb25maXJtYXRpb24oKSB7XG4gICAgdGhpcy5lYWNoKChpZHgsIGVsKSA9PiB7XG4gICAgICAkKGVsKS5vbignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGFjdGlvbkJ1dHRvbiA9ICQoZXZ0LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIGlmIChhY3Rpb25CdXR0b24uaXMoJ2EnKSkge1xuICAgICAgICAgICQoJyNjb25maXJtYXRpb24tYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFjdGlvbkJ1dHRvbi5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uQnV0dG9uLmlzKCdidXR0b24nKSkge1xuICAgICAgICAgICQoJyNjb25maXJtYXRpb24tYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBhY3Rpb25CdXR0b24uY2xvc2VzdCgnZm9ybScpLnN1Ym1pdCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnI2NvbmZpcm1hdGlvbi1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplSW5wdXQoaW5wdXQpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi50ZXh0Q29udGVudCA9IGlucHV0O1xuICByZXR1cm4gZGl2LmlubmVySFRNTDsgLy8gQ29udmVydHMgdGV4dCBjb250ZW50IHRvIHBsYWluIEhUTUwsIHN0cmlwcGluZyBhbnkgc2NyaXB0c1xufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgU3lsaXVzIFNwLiB6IG8uby5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJC5mbi5leHRlbmQoe1xuICB0b2dnbGVFbGVtZW50KCkge1xuICAgIHRoaXMuZWFjaCgoaWR4LCBlbCkgPT4ge1xuICAgICAgJChlbCkub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSAkKGAjJHt0b2dnbGUuZGF0YSgndG9nZ2xlcycpfWApO1xuXG4gICAgICAgIGlmICh0b2dnbGUuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICB0YXJnZXRFbGVtZW50LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRFbGVtZW50LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgICQoZWwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICB9LFxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL2FkbWluL1wiOyIsImltcG9ydCAnLi9qcy9zaGltL3NoaW0tanF1ZXJ5JztcbmltcG9ydCAnLi9qcy9zaGltL3NoaW0tc2VtYW50aWMtdWknO1xuXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5jc3MnO1xuXG5pbXBvcnQgJ3N5bGl1cy91aS1yZXNvdXJjZXMvanMvYXBwJztcbmltcG9ydCAnLi9qcy9hcHAnO1xuXG5pbXBvcnQgJ3N5bGl1cy91aS1yZXNvdXJjZXMvc2Fzcy9tYWluLnNjc3MnO1xuaW1wb3J0ICcuL3Nhc3MvbWFpbi5zY3NzJztcblxuaW1wb3J0ICcuL2ltZy9hZG1pbi1sb2dvLnN2Zyc7XG5cbmltcG9ydCAnc3lsaXVzL3VpLXJlc291cmNlcy9pbWcvMjAweDIwMC5wbmcnO1xuaW1wb3J0ICdzeWxpdXMvdWktcmVzb3VyY2VzL2ltZy81MHg1MC5wbmcnO1xuaW1wb3J0ICdzeWxpdXMvdWktcmVzb3VyY2VzL2ltZy9sb2dvLnBuZyc7XG4iXSwibmFtZXMiOlsiJCIsIlN0YXRpc3RpY3NDb21wb25lbnQiLCJTeWxpdXNUYXhvbm9teVRyZWUiLCJmb3Jtc0xpc3QiLCJkb2N1bWVudCIsInJlYWR5IiwiaGFuZGxlUHJvdG90eXBlcyIsInByb3RvdHlwZVByZWZpeCIsImNvbnRhaW5lclNlbGVjdG9yIiwiY2hhbmdlIiwidG9nZ2xlIiwiYXV0b0NvbXBsZXRlIiwicHJvZHVjdEF1dG9Db21wbGV0ZSIsInByb2R1Y3RBdHRyaWJ1dGVzIiwib24iLCJldmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiY3VycmVudFRhcmdldCIsImZpbmQiLCJhdHRyIiwibW92ZVByb2R1Y3RWYXJpYW50IiwidGF4b25Nb3ZlIiwidGFiIiwic2V0VGltZW91dCIsImxhc3QiLCJzZXRGcm9tQ29sbGVjdGlvbk9uQ2xpY2tFdmVudEhhbmRsZXIiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwiX2RhdGEiLCJnZXQiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJsb2FkQ2F0YWxvZ1Byb21vdGlvblNjb3BlQ29uZmlndXJhdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkQ2F0YWxvZ1Byb21vdGlvbkFjdGlvbkNvbmZpZ3VyYXRpb24iLCJhZGRUYWJFcnJvcnMiLCJhZGRBY2NvcmRpb25FcnJvcnMiLCJjaG9pY2VUcmVlIiwibm90aWZpY2F0aW9uIiwicHJvZHVjdFNsdWdHZW5lcmF0b3IiLCJ0YXhvblNsdWdHZW5lcmF0b3IiLCJwcmV2aWV3VXBsb2FkZWRJbWFnZSIsInRhcmdldCIsImFjY29yZGlvbiIsInRheG9ub215VHJlZSIsImRpcnR5Rm9ybXMiLCJleGNsdXNpdmUiLCJlIiwiZGVsZWdhdGVUYXJnZXQiLCJuZXh0IiwidG9nZ2xlQ2xhc3MiLCJkYXNoYm9hcmRTdGF0aXN0aWNzIiwic2VhcmNoYWJsZSIsImpRdWVyeSIsIlllYXJEYXRlT2JqZWN0IiwiTW9udGhEYXRlT2JqZWN0IiwiV2Vla0RhdGVPYmplY3QiLCJEYXRlT2JqZWN0RmFjdG9yeSIsInByb3RvdHlwZSIsImNyZWF0ZURhdGVPYmplY3QiLCJpbnRlcnZhbCIsImRhdGUiLCJjb25zdHJ1Y3RvciIsImRhdGVOb3ciLCJEYXRlIiwic3RhcnREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImVuZERhdGUiLCJwcmV2RGF0ZSIsIm5leHREYXRlIiwibWF4R3JhcGhEYXRlIiwid2Vla0luTWlsbGlzZWNvbmRzIiwiZ2V0VGltZSIsImZuIiwiZXh0ZW5kIiwib25jaGFuZ2UiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwibmV3Q29uZmlnIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInNlbGVjdGVkT3B0aW9ucyIsImdldEF0dHJpYnV0ZSIsIm9sZENvbmZpZyIsIm5leHRFbGVtZW50U2libGluZyIsInJlcGxhY2VDaGlsZCIsIm9sZENvbmZpZ0lucHV0TmFtZSIsIm5ld0NvbmZpZ0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibmV3Q29uZmlnSW5wdXROYW1lIiwicmVwbGFjZSIsInN1YnN0cmluZyIsImluZGV4T2YiLCJsYXN0SW5kZXhPZiIsIkNoYXJ0IiwiZHJhd0NoYXJ0IiwiY2FudmFzIiwibGFiZWxzIiwidmFsdWVzIiwiY3VycmVuY3kiLCJ0eXBlIiwiZGF0YSIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ5QXhlcyIsImdyaWRMaW5lcyIsImNvbG9yIiwidGlja3MiLCJiZWdpbkF0WmVybyIsImNhbGxiYWNrIiwidmFsdWUiLCJwcmVmaXgiLCJzdWZmaXgiLCJ4QXhlcyIsImRpc3BsYXkiLCJsYXlvdXQiLCJwYWRkaW5nIiwibGVmdCIsInJpZ2h0IiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJwbHVnaW5zIiwibGVnZW5kIiwiaWR4IiwiZWwiLCJlcnJvcnMiLCJ0YWJOYW1lIiwidGFiV2l0aEVycm9ycyIsImxhYmVsIiwiaHRtbCIsIm5ld0xhYmVsIiwiYWNjb3JkaW9uRWxlbWVudHMiLCJyaWJXaXRoRXJyb3JzIiwiY2xvc2VzdCIsImNzcyIsImZpZWxkc2V0SWQiLCJ0eXBlTmFtZSIsInRyaWdnZXJDaGFuZ2VPblR5cGVGaWVsZCIsIm5hbWUiLCJtYXAiLCJmb3JtIiwiam9pbiIsInNhbml0aXplSW5wdXQiLCJjcmVhdGVSb290Q29udGFpbmVyIiwiY3JlYXRlTGVhZkNvbnRhaW5lckVsZW1lbnQiLCJjcmVhdGVMZWFmSWNvbkVsZW1lbnQiLCJjcmVhdGVMZWFmVGl0bGVFbGVtZW50IiwiY3JlYXRlTGVhZlRpdGxlU3BhbiIsImRpc3BsYXlOYW1lIiwiY3JlYXRlTGVhZkNvbnRlbnRFbGVtZW50IiwibXVsdGlwbGUiLCJkZWZhdWx0TGV2ZWwiLCJ0cmVlIiwibG9hZGVyIiwibG9hZGVkTGVhZnMiLCIkaW5wdXQiLCJjcmVhdGVDaGVja2JveEVsZW1lbnQiLCJjb2RlIiwibXVsdGkiLCJjaG9zZW5Ob2RlcyIsInZhbCIsInNwbGl0IiwiY2hlY2tlZCIsInNvbWUiLCJjaG9zZW5Db2RlIiwiaXNMZWFmTG9hZGVkIiwibGVhZkNvZGUiLCJjcmVhdGVMZWFmRnVuYyIsImxvYWRMZWFmQWN0aW9uIiwicGFyZW50Q29kZSIsImV4cGFuZEJ1dHRvbiIsImNvbnRlbnQiLCJpY29uIiwibGVhZkNvbnRhaW5lckVsZW1lbnQiLCJhcGkiLCJ1cmwiLCJtZXRob2QiLCJjYWNoZSIsImJlZm9yZVNlbmQiLCJzZXR0aW5ncyIsImFkZENsYXNzIiwib25TdWNjZXNzIiwicmVzcG9uc2UiLCJsZWFmTm9kZSIsImFwcGVuZCIsImhhc0NoaWxkcmVuIiwibGV2ZWwiLCJyZW1vdmVDbGFzcyIsInB1c2giLCJiaW5kRXhwYW5kTGVhZkFjdGlvbiIsImNsaWNrIiwiYmluZENoZWNrYm94QWN0aW9uIiwiY2hlY2tib3hFbGVtZW50IiwiY2hlY2tib3giLCJvbkNoZWNrZWQiLCJkYXRhc2V0IiwiY2hlY2tlZFZhbHVlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJvblVuY2hlY2tlZCIsImkiLCJzcGxpY2UiLCJjcmVhdGVMZWFmIiwibXVsdGlwbGVDaG9pY2UiLCJkaXNwbGF5TmFtZUVsZW1lbnQiLCJ0aXRsZUVsZW1lbnQiLCJpY29uRWxlbWVudCIsImxlYWZFbGVtZW50IiwibGVhZkNvbnRlbnRFbGVtZW50Iiwicm9vdENvbnRhaW5lciIsInJvb3ROb2RlIiwic2VhcmNoSW5wdXRTZWxlY3RvciIsInNlYXJjaElucHV0IiwibWVudSIsInBocmFzZSIsInJlZ2V4IiwiUmVnRXhwIiwiZm91bmRJdGVtcyIsImhpZGUiLCJpdGVtIiwiaGVhZGVyIiwidGVzdCIsImZpcnN0IiwidGV4dCIsInNob3ciLCJwYXJlbnRzVW50aWwiLCJwb3NpdGlvbklucHV0IiwicHJvZHVjdFZhcmlhbnRSb3dzIiwicHJvZHVjdFZhcmlhbnRzIiwiX2NzcmZfdG9rZW4iLCJyZWxvYWQiLCJpbnB1dCIsInByb2R1Y3RWYXJpYW50SWQiLCJyb3ciLCJpZCIsInBvc2l0aW9uIiwiSFVCX1JFUVVFU1RfVElNRSIsIkxBU1RfU1lMSVVTX1ZFUlNJT04iLCJTWUxJVVNfVkVSU0lPTl9ESVNNSVNTRUQiLCJNSUxJU0VDT05EU19NVUxUSVBMSUVSIiwic3RvcmUiLCJrZXkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmV0cmlldmUiLCJnZXRJdGVtIiwibWlsaXNlY29uZHNTaW5jZUxhc3RSZXF1ZXN0IiwicGFyc2VJbnQiLCJnZXREaXNtaXNzZWRTeWxpdXNWZXJzaW9uIiwibm90aWZpY2F0aW9uTWVudSIsImFza0ZyZXF1ZW5jeSIsImdldEN1cnJlbnRTeWxpdXNWZXJzaW9uIiwiZ2V0TGF0ZXN0U3lsaXVzVmVyc2lvbiIsImFqYXgiLCJhY2NlcHQiLCJzdWNjZXNzIiwidmVyc2lvbiIsInRvU3RyaW5nIiwiY29tcGxldGUiLCJpc0xhdGVzdCIsImlzRGlzbWlzc2VkIiwic2hvd05vdGlmaWNhdGlvbiIsImhpZGVOb3RpZmljYXRpb24iLCJ1cGRhdGVOb3RpZmljYXRpb24iLCJkaXNwbGF5VXBsb2FkZWRJbWFnZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImltYWdlIiwic2libGluZ3MiLCJyZXN1bHQiLCJpbWciLCJiZWZvcmUiLCJyZWFkQXNEYXRhVVJMIiwicm9vdCIsInVwZGF0ZVNsdWciLCJzbHVnSW5wdXQiLCJwYXJlbnRzIiwibG9hZGFibGVQYXJlbnQiLCJkYXRhVHlwZSIsInNsdWciLCJoYXNDbGFzcyIsInJlbW92ZSIsInRvZ2dsZVNsdWdNb2RpZmljYXRpb24iLCJidXR0b24iLCJyZW1vdmVBdHRyIiwidGltZW91dCIsImNsZWFyVGltZW91dCIsInByZXZlbnREZWZhdWx0Iiwid3JhcHBlciIsImNoYXJ0IiwiY2hhcnRDYW52YXMiLCJzdW1tYXJ5Qm94ZXMiLCJidXR0b25zIiwiaW5pdCIsImRlZmF1bHRJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmZXRjaERhdGEiLCJiaW5kIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5pdGlhbGl6ZU5hdkJ1dHRvbnMiLCJKU09OIiwicGFyc2UiLCJwcmV2QnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0QnV0dG9uIiwiRGF0ZU9iamVjdCIsInVwZGF0ZU5hdkJ1dHRvbnMiLCJmb3JtYXREYXRlIiwidG9nZ2xlTG9hZGluZ1N0YXRlIiwiZG9uZSIsInVwZGF0ZVN1bW1hcnlWYWx1ZXMiLCJzdGF0aXN0aWNzIiwidXBkYXRlQnV0dG9uc1N0YXRlIiwidXBkYXRlR3JhcGgiLCJzYWxlc19zdW1tYXJ5IiwiYWx3YXlzIiwiYm94IiwiaW50ZXJ2YWxzIiwic2FsZXMiLCJ1cGRhdGUiLCJhY3RpdmVCdXR0b24iLCJsb2FkaW5nIiwibW9udGgiLCJkYXkiLCJnZXREYXRlIiwieWVhciIsInNldEludGVydmFsIiwic2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJwYXJlbnRUYXhvbklucHV0IiwibG9jYWxlIiwiZXJyb3IiLCJuYW1lSW5wdXQiLCJ0cmlnZ2VyIiwic3RvcmFnZU5hbWUiLCJoaWRkZW5JdGVtcyIsImdldE1hcEZyb21TdG9yYWdlIiwicmVuZGVyTWFwIiwiaGFuZGxlVHJpZ2dlciIsInRvUmVtb3ZlIiwiZ2V0SURzIiwic2F2ZU1hcFRvU3RvcmFnZSIsImFjdGlvbiIsImlkcyIsIm5ld01hcCIsIndpdGhDaGlsZHJlbiIsImFyciIsImhhc0F0dHJpYnV0ZSIsImNoaWxkcmVuIiwic2xpY2UiLCJjYWxsIiwiY2hpbGQiLCJzdGF0ZSIsIml0ZW1zIiwic3RyaW5naWZ5Iiwic2lkZWJhciIsImRpbVBhZ2UiLCJjbG9zYWJsZSIsImRyb3Bkb3duIiwiZGltbWVyIiwicmF0aW5nIiwidHJhbnNpdGlvbiIsInJlcXVpcmVDb25maXJtYXRpb24iLCJidWxrQWN0aW9uUmVxdWlyZUNvbmZpcm1hdGlvbiIsInRvZ2dsZUVsZW1lbnQiLCJjaGVja0FsbCIsIkNvbGxlY3Rpb25Gb3JtIiwiJGN1cnJlbnQiLCJjcml0ZXJpYU5hbWUiLCJjaG9pY2VOYW1lIiwiY2hvaWNlVmFsdWUiLCJhdXRvY29tcGxldGVWYWx1ZSIsImxvYWRGb3JFZGl0VXJsIiwiZGVsYXkiLCJzZWFyY2giLCJmb3JjZVNlbGVjdGlvbiIsInNhdmVSZW1vdGVEYXRhIiwiYXBpU2V0dGluZ3MiLCJ1cmxEYXRhIiwicXVlcnkiLCJvblJlc3BvbnNlIiwicmVzdWx0cyIsInVuc2hpZnQiLCJTdHJpbmciLCJtZW51RWxlbWVudCIsImV2dCIsImFjdGlvbkJ1dHRvbiIsImlzIiwiaHJlZiIsImFwcGVuZFRvIiwic3VibWl0IiwibW9kYWwiLCIkY2hlY2tib3hBbGwiLCIkY2hlY2tib3hlcyIsIiRidXR0b25zIiwiaXNBbnlDaGVja2VkIiwiYnV0dG9uc1Byb3BSZWZyZXNoIiwicHJvcCIsImFkZEl0ZW0iLCJ1cGRhdGVJdGVtIiwiZGVsZXRlSXRlbSIsInVwZGF0ZVByb3RvdHlwZSIsIiRlbGVtZW50IiwiJGxpc3QiLCJjb3VudCIsImxhc3RDaG9pY2UiLCJhZGRlZEVsZW1lbnQiLCJwcm90b3R5cGVOYW1lIiwiJGNvbnRhaW5lciIsImxvYWQiLCIkcHJvdG90eXBlIiwicmVwbGFjZVdpdGgiLCIkdGFyZ2V0IiwiQ29sbGVjdGlvbkZvcm1QbHVnaW4iLCJvcHRpb24iLCJDb25zdHJ1Y3RvciIsImdldE5leHRJbmRleCIsImFkZEF0dHJpYnV0ZXNOdW1iZXIiLCJudW1iZXIiLCJjdXJyZW50SW5kZXgiLCJjb250cm9sQXR0cmlidXRlc0xpc3QiLCJtb2RpZnlBdHRyaWJ1dGVzTGlzdE9uU2VsZWN0b3JFbGVtZW50RGVsZXRlIiwicmVtb3ZlZFZhbHVlIiwicGFnZVgiLCJtb2RpZnlTZWxlY3Rvck9uQXR0cmlidXRlc0xpc3RFbGVtZW50RGVsZXRlIiwib2ZmIiwiYXR0cmlidXRlSWQiLCJtb2RpZnlBdHRyaWJ1dGVGb3JtRWxlbWVudHMiLCIkcmVzcG9uc2UiLCJpc0luVGhlQXR0cmlidXRlc0NvbnRhaW5lciIsImRhdGFJZCIsImNvcHlWYWx1ZVRvQWxsTGFuZ3VhZ2VzIiwiJGF0dHJpYnV0ZXNDb250YWluZXIiLCIkbWFzdGVyQXR0cmlidXRlIiwiYXR0cmlidXRlSUQiLCIkYXR0cmlidXRlQ29sbGVjdGlvbiIsIiRtYXN0ZXJBdHRyaWJ1dGVJbnB1dHMiLCIkaW5wdXRzIiwibm9kZU5hbWUiLCJ4IiwibWFzdGVyT3B0aW9uIiwiQXJyYXkiLCJmcm9tIiwic2VsZWN0ZWQiLCJzZXRBdHRyaWJ1dGVDaG9pY2VMaXN0ZW5lciIsIiRhdHRyaWJ1dGVDaG9pY2UiLCIkYXR0cmlidXRlQ2hvaWNlU2VsZWN0IiwicXVlcnlEYXRhIiwiJG5ld0F0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVGb3JtRWxlbWVudHMiLCJsb2NhbGVDb2RlIiwib25SZW1vdmUiLCJjcml0ZXJpYSIsIl9lbWJlZGRlZCIsIm9uQWRkIiwiYWRkZWRWYWx1ZSIsImFkZGVkVGV4dCIsIiRhZGRlZENob2ljZSIsImlucHV0QXNzb2NpYXRpb24iLCJhc3NvY2lhdGVkUHJvZHVjdENvZGVzIiwidW5pcXVlIiwic29ydCIsInJlbW92ZWRUZXh0IiwiJHJlbW92ZWRDaG9pY2UiLCJpbkFycmF5IiwibWV0aG9kcyIsInNlbGVjdGVkVmFsdWUiLCJwcm90b3R5cGVFbGVtZW50IiwiY29udGFpbmVyIiwiZW1wdHkiLCJ0cmltIiwiYXJncyIsImFwcGx5IiwiZGl2IiwidGV4dENvbnRlbnQiLCJ0YXJnZXRFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==