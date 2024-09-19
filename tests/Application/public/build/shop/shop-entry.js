/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/app.js":
/*!*******************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/app.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/popup'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/components/rating'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'slick-carousel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var sylius_ui_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sylius/ui/app */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/app.js");
/* harmony import */ var sylius_ui_sylius_api_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sylius/ui/sylius-api-login */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-api-login.js");
/* harmony import */ var sylius_ui_sylius_api_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sylius/ui/sylius-api-toggle */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-api-toggle.js");
/* harmony import */ var _sylius_add_to_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sylius-add-to-cart */ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-add-to-cart.js");
/* harmony import */ var _sylius_address_book__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sylius-address-book */ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-address-book.js");
/* harmony import */ var _sylius_province_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sylius-province-field */ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-province-field.js");
/* harmony import */ var _sylius_variant_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sylius-variant-images */ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-variant-images.js");
/* harmony import */ var _sylius_variants_prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sylius-variants-prices */ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-variants-prices.js");
/*
 * This file is part of the Sylius package.
 *
 * (c) Sylius Sp. z o.o.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */













Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).ready(() => {
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.popup-js').popup();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.cart.button').popup({
    popup: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.cart.popup'),
    on: 'click',
    onUnplaceable() {
      window.location.href = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-go-to-cart').attr('href');
    },
    silent: true
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.star.rating').rating({
    fireOnInit: true,
    onRate(value) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[name="sylius_product_review[rating]"]:checked').removeAttr('checked');
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`#sylius_product_review_rating_${value - 1}`).attr('checked', 'checked');
    }
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_checkout_address_customer_email').apiToggle({
    dataType: 'json',
    method: 'GET',
    throttle: 1500,
    beforeSend(settings) {
      const email = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_checkout_address_customer_email').val();
      if (email.length < 3) {
        return false;
      }

      /* eslint-disable-next-line no-param-reassign */
      settings.data = {
        email
      };
      return settings;
    },
    successTest(response) {
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius_checkout_address_customer_email').val() === response.username;
    }
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-api-login-form'));
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-api-login').apiLogin({
    method: 'POST',
    throttle: 500
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-product-adding-to-cart').addToCart();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-shipping-address').addressBook();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-billing-address').addressBook();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).provinceField();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).variantPrices();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).variantImages();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('body').find('input[autocomplete="off"]').prop('autocomplete', 'disable');
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.carousel-left'),
    nextArrow: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.carousel-right'),
    appendArrows: false
  });
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/shim/shim-jquery.js":
/*!********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/shim/shim-jquery.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

window.$ = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
window.jQuery = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/shim/shim-lightbox.js":
/*!**********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/shim/shim-lightbox.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lightbox2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

window.lightbox = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lightbox2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/shim/shim-semantic-ui.js":
/*!*************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/shim/shim-semantic-ui.js ***!
  \*************************************************************************************************************/
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

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-add-to-cart.js":
/*!**********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-add-to-cart.js ***!
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
  addToCart() {
    const element = this;
    const url = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).attr('action');
    const redirectUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).data('redirect');
    const validationElement = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-cart-validation-error');
    element.api({
      method: 'POST',
      on: 'submit',
      cache: false,
      url,
      beforeSend(settings) {
        /* eslint-disable-next-line no-param-reassign */
        settings.data = element.serialize();
        return settings;
      },
      onSuccess() {
        validationElement.addClass('hidden');
        window.location.href = redirectUrl;
      },
      onFailure(response) {
        validationElement.removeClass('hidden');
        let validationMessage = '';
        Object.entries(response.errors.errors).forEach(([, message]) => {
          validationMessage += message;
        });
        validationElement.html(validationMessage);
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).removeClass('loading');
      }
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-address-book.js":
/*!***********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-address-book.js ***!
  \***********************************************************************************************************/
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



const parseKey = function parseKey(key) {
  return key.replace(/(_\w)/g, words => words[1].toUpperCase());
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  addressBook() {
    const element = this;
    const select = element.find('.address-book-select');
    const findByName = function findByName(name) {
      return element.find(`[name*="[${parseKey(name)}]"]`);
    };
    select.dropdown({
      forceSelection: false,
      onChange(name, text, choice) {
        const {
          provinceCode,
          provinceName
        } = choice.data();
        const provinceContainer = select.parent().find('.province-container').get(0);
        element.find('input:not([type="radio"]):not([type="checkbox"]), select').each((index, input) => {
          Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(input).val('');
        });
        Object.entries(choice.data()).forEach(([property, value]) => {
          const field = findByName(property);
          if (property.indexOf('countryCode') !== -1) {
            field.val(value).change();
            const exists = setInterval(() => {
              const provinceCodeField = findByName('provinceCode');
              const provinceNameField = findByName('provinceName');
              if (!provinceContainer.hasAttribute('data-loading')) {
                if (provinceCodeField.length !== 0 && (provinceCode !== '' || provinceCode != undefined)) {
                  provinceCodeField.val(provinceCode);
                  clearInterval(exists);
                } else if (provinceNameField.length !== 0 && (provinceName !== '' || provinceName != undefined)) {
                  provinceNameField.val(provinceName);
                  clearInterval(exists);
                }
              }
            }, 100);
          } else if (field.is('[type="radio"]') || field.is('[type="checkbox"]')) {
            field.prop('checked', false);
            field.filter(`[value="${value}"]`).prop('checked', true);
          } else {
            field.val(value);
          }
        });
      }
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-province-field.js":
/*!*************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-province-field.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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



const getProvinceInputValue = function getProvinceInputValue(valueSelector) {
  return valueSelector == undefined ? '' : `value="${(0,sylius_ui_sylius_sanitizer__WEBPACK_IMPORTED_MODULE_1__.sanitizeInput)(valueSelector)}"`;
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  provinceField() {
    const countrySelect = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('select[name$="[countryCode]"]');
    countrySelect.on('change', event => {
      const select = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget);
      const provinceContainer = select.parents('.field').next('div.province-container');
      const provinceSelectFieldName = select.attr('name').replace('country', 'province');
      const provinceInputFieldName = select.attr('name').replace('countryCode', 'provinceName');
      const provinceSelectFieldId = select.attr('id').replace('country', 'province');
      const provinceInputFieldId = select.attr('id').replace('countryCode', 'provinceName');
      const form = select.parents('form');
      if (select.val() === '' || select.val() == undefined) {
        provinceContainer.fadeOut('slow', () => {
          provinceContainer.html('');
        });
        return;
      }
      provinceContainer.attr('data-loading', true);
      form.addClass('loading');
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(provinceContainer.attr('data-url'), {
        countryCode: select.val()
      }, response => {
        if (!response.content) {
          provinceContainer.fadeOut('slow', () => {
            provinceContainer.html('');
            provinceContainer.removeAttr('data-loading');
            form.removeClass('loading');
          });
        } else if (response.content.indexOf('select') !== -1) {
          provinceContainer.fadeOut('slow', () => {
            const provinceSelectValue = getProvinceInputValue(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(provinceContainer).find('select > option[selected$="selected"]').val());
            provinceContainer.html(response.content.replace('name="sylius_address_province"', `name="${provinceSelectFieldName}"${provinceSelectValue}`).replace('id="sylius_address_province"', `id="${provinceSelectFieldId}"`).replace('option value="" selected="selected"', 'option value=""').replace(`option ${provinceSelectValue}`, `option ${provinceSelectValue}" selected="selected"`));
            provinceContainer.addClass('required');
            provinceContainer.removeAttr('data-loading');
            provinceContainer.fadeIn('fast', () => {
              form.removeClass('loading');
            });
          });
        } else {
          provinceContainer.fadeOut('slow', () => {
            const provinceInputValue = getProvinceInputValue(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(provinceContainer).find('input').val());
            provinceContainer.html(response.content.replace('name="sylius_address_province"', `name="${provinceInputFieldName}"${provinceInputValue}`).replace('id="sylius_address_province"', `id="${provinceInputFieldId}"`));
            provinceContainer.removeAttr('data-loading');
            provinceContainer.fadeIn('fast', () => {
              form.removeClass('loading');
            });
          });
        }
      });
    });
    if (countrySelect.val() !== '') {
      countrySelect.trigger('change');
    }
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div.province-container').text()) === '') {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('select.country-select').trigger('change');
    }
    const shippingAddressCheckbox = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('input[type="checkbox"][name$="[differentShippingAddress]"]');
    const shippingAddressContainer = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-shipping-address-container');
    const toggleShippingAddress = function toggleShippingAddress() {
      shippingAddressContainer.toggle(shippingAddressCheckbox.prop('checked'));
    };
    toggleShippingAddress();
    shippingAddressCheckbox.on('change', toggleShippingAddress);
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-variant-images.js":
/*!*************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-variant-images.js ***!
  \*************************************************************************************************************/
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


const changeMainImage = function changeMainImage(newImageDiv) {
  const mainImageLink = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('a.ui.fluid.image');
  const mainImage = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('a.ui.fluid.image > img');
  const newImage = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(newImageDiv).find('img');
  const newImageLink = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(newImageDiv).find('a');
  if (newImage.length === 0 && newImageLink.length === 0) {
    mainImage.attr('src', Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div[data-product-image]').attr('data-product-image'));
    newImageLink.attr('href', Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div[data-product-link]').attr('data-product-link'));
    return;
  }
  mainImageLink.attr('href', newImageLink.attr('href'));
  mainImage.attr('src', newImage.attr('data-large-thumbnail'));
};
const handleProductOptionImages = function handleProductOptionImages() {
  let options = '';
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-product-adding-to-cart select').each((index, select) => {
    options += `${Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(select).find('option:selected').val()} `;
  });
  const imagesWithOptions = [];
  const optionsArray = options.trim().split(' ');
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[data-variant-options]').each((index, element) => {
    const imageOptions = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).attr('data-variant-options');
    const imageHasOptions = optionsArray.every(option => imageOptions.indexOf(option) > -1);
    if (imageHasOptions) {
      imagesWithOptions.push(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).closest('div.ui.image'));
    }
  });
  changeMainImage(imagesWithOptions.shift());
};
const handleProductOptionChange = function handleProductOptionChange() {
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[name*="sylius_add_to_cart[cartItem][variant]"]').on('change', () => {
    handleProductOptionImages();
  });
};
const handleProductVariantImages = function handleProductVariantImages(variantElement) {
  const variantCode = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(variantElement).attr('value');
  const imagesWithVariantCode = [];
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`[data-variant-code*="${variantCode}"]`).each((index, element) => {
    imagesWithVariantCode.push(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element).closest('div.ui.image'));
  });
  changeMainImage(imagesWithVariantCode.shift());
};
const handleProductVariantChange = function handleProductVariantChange() {
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[name="sylius_add_to_cart[cartItem][variant]"]').on('change', event => {
    handleProductVariantImages(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget));
  });
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  variantImages() {
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[data-variant-options]').length > 0) {
      handleProductOptionImages();
      handleProductOptionChange();
    } else if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[data-variant-code]').length > 0) {
      handleProductVariantImages(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[name="sylius_add_to_cart[cartItem][variant]"]'));
      handleProductVariantChange();
    }
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-variants-prices.js":
/*!**************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/sylius-variants-prices.js ***!
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


function formatAppliedPromotions(appliedPromotions) {
  let appliedPromotionsElement = '';
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#appliedPromotions').html('');
  if (appliedPromotions !== '[]') {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(appliedPromotions, (index, promotion) => {
      appliedPromotionsElement += `<div style="margin-top: 20px;">
        <div class="ui label promotion_label">
          <div class="row ui small sylius_catalog_promotion">${promotion.label}</div>
        </div>
        <span class="text-teal">${promotion.description}</span>
      </div>`;
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#appliedPromotions').html(appliedPromotionsElement);
  }
}
const handleProductOptionsChange = function handleProductOptionsChange() {
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[name*="sylius_add_to_cart[cartItem][variant]"]').on('change', () => {
    let selector = '';
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-product-adding-to-cart select[data-option]').each((index, element) => {
      const select = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(element);
      const option = select.find('option:selected').val();
      selector += `[data-${select.attr('data-option')}="${option}"]`;
    });
    const price = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-variants-pricing').find(selector).attr('data-value');
    const originalPrice = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-variants-pricing').find(selector).attr('data-original-price');
    let appliedPromotions = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-variants-pricing').find(selector).attr('data-applied_promotions');
    if (appliedPromotions !== undefined) {
      appliedPromotions = JSON.parse(appliedPromotions);
    }
    if (price !== undefined) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#product-price').text(price);
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('button[type=submit]').removeAttr('disabled');
      if (originalPrice !== undefined) {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#product-original-price').css('display', 'inline').html(`<del>${originalPrice}</del>`);
      } else {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#product-original-price').css('display', 'none');
      }
      formatAppliedPromotions(appliedPromotions);
    } else {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#product-price').text(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-variants-pricing').attr('data-unavailable-text'));
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('button[type=submit]').attr('disabled', 'disabled');
    }
    const lowestPriceBeforeDiscount = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-variants-pricing').find(selector).attr('data-lowest-price-before-discount');
    if (lowestPriceBeforeDiscount !== undefined) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#lowest-price-before-discount').html(lowestPriceBeforeDiscount).css({
        'white-space': 'nowrap',
        display: 'inline'
      });
    } else {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#lowest-price-before-discount').css('display', 'none');
    }
  });
};
const handleProductVariantsChange = function handleProductVariantsChange() {
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[name="sylius_add_to_cart[cartItem][variant]"]').on('change', event => {
    const priceRow = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.currentTarget).parents('tr').find('.sylius-product-variant-price');
    const price = priceRow.text();
    const originalPrice = priceRow.attr('data-original-price');
    let appliedPromotions = priceRow.attr('data-applied-promotions');
    if (appliedPromotions !== '[]') {
      appliedPromotions = JSON.parse(appliedPromotions);
    }
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#product-price').text(price);
    formatAppliedPromotions(appliedPromotions);
    if (originalPrice !== undefined) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#product-original-price').css('display', 'inline').html(`<del>${originalPrice}</del>`);
    } else {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#product-original-price').css('display', 'none');
    }
    const lowestPriceBeforeDiscount = priceRow.attr('data-lowest-price-before-discount');
    if (lowestPriceBeforeDiscount !== undefined) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#lowest-price-before-discount').html(lowestPriceBeforeDiscount).css({
        'white-space': 'nowrap',
        display: 'inline'
      });
    } else {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#lowest-price-before-discount').css('display', 'none');
    }
  });
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).extend({
  variantPrices() {
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-variants-pricing').length > 0) {
      handleProductOptionsChange();
    } else if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#sylius-product-variants').length > 0) {
      handleProductVariantsChange();
    }
  }
});

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

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-api-login.js":
/*!******************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-api-login.js ***!
  \******************************************************************************************************/
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
  apiLogin({
    method,
    dataType = 'json',
    throttle = 0,
    debug = false
  }) {
    const element = this;
    const passwordField = element.find('input[type="password"]');
    const emailField = element.find('input[type="email"]');
    const csrfTokenField = element.find('input[type="hidden"]');
    const signInButton = element.find('.button');
    const validationField = element.find('.red.label');
    signInButton.api({
      method,
      dataType,
      throttle,
      debug,
      beforeSend(settings) {
        /* eslint-disable-next-line no-param-reassign */
        settings.data = {
          _username: emailField.val(),
          _password: passwordField.val(),
          [csrfTokenField.attr('name')]: csrfTokenField.val()
        };
        return settings;
      },
      successTest(response) {
        return response.success;
      },
      onSuccess() {
        element.remove();
        window.location.reload();
      },
      onFailure(response) {
        validationField.removeClass('hidden');
        validationField.html(response.message);
      }
    });
  }
});

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-api-toggle.js":
/*!*******************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/sylius-api-toggle.js ***!
  \*******************************************************************************************************/
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
  apiToggle({
    method,
    dataType = 'json',
    throttle = 0,
    debug = false,
    beforeSend,
    successTest
  }, toggleableElement, isHidden = true) {
    const element = this;
    if (isHidden) {
      toggleableElement.hide();
    }
    element.api({
      method,
      dataType,
      throttle,
      debug,
      beforeSend,
      successTest,
      onSuccess() {
        toggleableElement.show();
      },
      onFailure() {
        toggleableElement.hide();
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

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/scss/style.scss":
/*!*************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/scss/style.scss ***!
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

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/img/homepage-banner.jpg":
/*!*********************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/img/homepage-banner.jpg ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/homepage-banner.bffc2afc.jpg";

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/img/sylius-plus-banner.png":
/*!************************************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/img/sylius-plus-banner.png ***!
  \************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/sylius-plus-banner.fff4fe72.png";

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/200x200.png":
/*!***********************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/200x200.png ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/200x200.a25ae7d9.png";

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/400x300.png":
/*!***********************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/400x300.png ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/400x300.6e985b5a.png";

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/50x50.png":
/*!*********************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/50x50.png ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/50x50.e32f09cc.png";

/***/ }),

/***/ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/avatar.png":
/*!**********************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/avatar.png ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/avatar.fa261429.png";

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
/******/ 		__webpack_require__.p = "/build/shop/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************************************************************************!*\
  !*** ../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/entry.js ***!
  \******************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_shim_shim_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/shim/shim-jquery */ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/shim/shim-jquery.js");
/* harmony import */ var _js_shim_shim_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/shim/shim-lightbox */ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/shim/shim-lightbox.js");
/* harmony import */ var _js_shim_shim_semantic_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/shim/shim-semantic-ui */ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/shim/shim-semantic-ui.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'semantic-ui-css/semantic.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lightbox2/dist/css/lightbox.min.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'slick-carousel/slick/slick.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var sylius_ui_resources_js_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sylius/ui-resources/js/app */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/js/app.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/app */ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/js/app.js");
/* harmony import */ var sylius_ui_resources_sass_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sylius/ui-resources/sass/main.scss */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/sass/main.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scss/style.scss */ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/scss/style.scss");
/* harmony import */ var sylius_ui_resources_img_avatar_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sylius/ui-resources/img/avatar.png */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/avatar.png");
/* harmony import */ var sylius_ui_resources_img_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sylius/ui-resources/img/logo.png */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/logo.png");
/* harmony import */ var sylius_ui_resources_img_50x50_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sylius/ui-resources/img/50x50.png */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/50x50.png");
/* harmony import */ var sylius_ui_resources_img_200x200_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sylius/ui-resources/img/200x200.png */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/200x200.png");
/* harmony import */ var sylius_ui_resources_img_400x300_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sylius/ui-resources/img/400x300.png */ "../../vendor/sylius/sylius/src/Sylius/Bundle/UiBundle/Resources/private/img/400x300.png");
/* harmony import */ var _img_homepage_banner_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/homepage-banner.jpg */ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/img/homepage-banner.jpg");
/* harmony import */ var _img_sylius_plus_banner_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/sylius-plus-banner.png */ "../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/img/sylius-plus-banner.png");

















/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC1lbnRyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBDO0FBQ0M7QUFDcEI7QUFDQztBQUVEO0FBQ2E7QUFDQztBQUVQO0FBQ0M7QUFDRTtBQUNBO0FBQ0M7QUFFbENBLHFJQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsTUFBTTtFQUN0QkYscUlBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7RUFFdEJILHFJQUFDLENBQUMsY0FBYyxDQUFDLENBQUNHLEtBQUssQ0FBQztJQUN0QkEsS0FBSyxFQUFFSCxxSUFBQyxDQUFDLGFBQWEsQ0FBQztJQUN2QkksRUFBRSxFQUFFLE9BQU87SUFDWEMsYUFBYUEsQ0FBQSxFQUFHO01BQ2RDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUdSLHFJQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ1MsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3RCxDQUFDO0lBQ0RDLE1BQU0sRUFBRTtFQUNWLENBQUMsQ0FBQztFQUVGVixxSUFBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDVyxNQUFNLENBQUM7SUFDdkJDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxNQUFNQSxDQUFDQyxLQUFLLEVBQUU7TUFDWmQscUlBQUMsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDZSxVQUFVLENBQUMsU0FBUyxDQUFDO01BQ3pFZixxSUFBQyxDQUFDLGlDQUFpQ2MsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUNMLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO0lBQzVFO0VBQ0YsQ0FBQyxDQUFDO0VBRUZULHFJQUFDLENBQUMseUNBQXlDLENBQUMsQ0FBQ2dCLFNBQVMsQ0FBQztJQUNyREMsUUFBUSxFQUFFLE1BQU07SUFDaEJDLE1BQU0sRUFBRSxLQUFLO0lBQ2JDLFFBQVEsRUFBRSxJQUFJO0lBRWRDLFVBQVVBLENBQUNDLFFBQVEsRUFBRTtNQUNuQixNQUFNQyxLQUFLLEdBQUd0QixxSUFBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUN1QixHQUFHLENBQUMsQ0FBQztNQUVoRSxJQUFJRCxLQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxLQUFLO01BQ2Q7O01BRUE7TUFDQUgsUUFBUSxDQUFDSSxJQUFJLEdBQUc7UUFDZEg7TUFDRixDQUFDO01BRUQsT0FBT0QsUUFBUTtJQUNqQixDQUFDO0lBRURLLFdBQVdBLENBQUNDLFFBQVEsRUFBRTtNQUNwQixPQUFPM0IscUlBQUMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDdUIsR0FBRyxDQUFDLENBQUMsS0FBS0ksUUFBUSxDQUFDQyxRQUFRO0lBQ2pGO0VBQ0YsQ0FBQyxFQUFFNUIscUlBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0VBRS9CQSxxSUFBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM2QixRQUFRLENBQUM7SUFDOUJYLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLFFBQVEsRUFBRTtFQUNaLENBQUMsQ0FBQztFQUVGbkIscUlBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDOEIsU0FBUyxDQUFDLENBQUM7RUFFL0M5QixxSUFBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMrQixXQUFXLENBQUMsQ0FBQztFQUMzQy9CLHFJQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQytCLFdBQVcsQ0FBQyxDQUFDO0VBQzFDL0IscUlBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUMrQixhQUFhLENBQUMsQ0FBQztFQUMzQmhDLHFJQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDZ0MsYUFBYSxDQUFDLENBQUM7RUFDM0JqQyxxSUFBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ2lDLGFBQWEsQ0FBQyxDQUFDO0VBRTNCbEMscUlBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ21DLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDQyxJQUFJLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQztFQUUzRXBDLHFJQUFDLENBQUMsV0FBVyxDQUFDLENBQUNxQyxLQUFLLENBQUM7SUFDbkJDLFFBQVEsRUFBRSxJQUFJO0lBQ2RDLFlBQVksRUFBRSxDQUFDO0lBQ2ZDLGNBQWMsRUFBRSxDQUFDO0lBQ2pCQyxTQUFTLEVBQUV6QyxxSUFBQyxDQUFDLGdCQUFnQixDQUFDO0lBQzlCMEMsU0FBUyxFQUFFMUMscUlBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUMvQjJDLFlBQVksRUFBRTtFQUNoQixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzVGcUI7QUFFdkJyQyxNQUFNLENBQUNOLENBQUMsR0FBR0EscUlBQUM7QUFDWk0sTUFBTSxDQUFDc0MsTUFBTSxHQUFHNUMscUlBQUM7Ozs7Ozs7Ozs7OztBQ0hnQjtBQUVqQ00sTUFBTSxDQUFDdUMsUUFBUSxHQUFHQSx3SUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGb0I7QUFDTjtBQUNLO0FBQ0E7QUFDRjtBQUNFO0FBQ0g7QUFDRDtBQUNDO0FBQ0Y7QUFDRTtBQUNHO0FBQ0Y7QUFDQTtBQUNEO0FBQ0U7QUFDSDtBQUNDO0FBQ0M7QUFDSDtBQUNPO0FBQ0w7QUFDSzs7Ozs7Ozs7Ozs7Ozs7QUN0Qi9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdDO0FBQ2pCO0FBRXZCN0MscUlBQUksQ0FBQytDLE1BQU0sQ0FBQztFQUNWakIsU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsTUFBTWtCLE9BQU8sR0FBRyxJQUFJO0lBQ3BCLE1BQU1DLEdBQUcsR0FBR2pELHFJQUFDLENBQUNnRCxPQUFPLENBQUMsQ0FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsTUFBTXlDLFdBQVcsR0FBR2xELHFJQUFDLENBQUNnRCxPQUFPLENBQUMsQ0FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDL0MsTUFBTTBCLGlCQUFpQixHQUFHbkQscUlBQUMsQ0FBQywrQkFBK0IsQ0FBQztJQUU1RGdELE9BQU8sQ0FBQ0ksR0FBRyxDQUFDO01BQ1ZsQyxNQUFNLEVBQUUsTUFBTTtNQUNkZCxFQUFFLEVBQUUsUUFBUTtNQUNaaUQsS0FBSyxFQUFFLEtBQUs7TUFDWkosR0FBRztNQUNIN0IsVUFBVUEsQ0FBQ0MsUUFBUSxFQUFFO1FBQ25CO1FBQ0FBLFFBQVEsQ0FBQ0ksSUFBSSxHQUFHdUIsT0FBTyxDQUFDTSxTQUFTLENBQUMsQ0FBQztRQUVuQyxPQUFPakMsUUFBUTtNQUNqQixDQUFDO01BQ0RrQyxTQUFTQSxDQUFBLEVBQUc7UUFDVkosaUJBQWlCLENBQUNLLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDcENsRCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHMEMsV0FBVztNQUNwQyxDQUFDO01BQ0RPLFNBQVNBLENBQUM5QixRQUFRLEVBQUU7UUFDbEJ3QixpQkFBaUIsQ0FBQ08sV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUN2QyxJQUFJQyxpQkFBaUIsR0FBRyxFQUFFO1FBRTFCQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ2xDLFFBQVEsQ0FBQ21DLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDLEdBQUdDLE9BQU8sQ0FBQyxLQUFLO1VBQzlETCxpQkFBaUIsSUFBSUssT0FBTztRQUM5QixDQUFDLENBQUM7UUFDRmIsaUJBQWlCLENBQUNjLElBQUksQ0FBQ04saUJBQWlCLENBQUM7UUFDekMzRCxxSUFBQyxDQUFDZ0QsT0FBTyxDQUFDLENBQUNVLFdBQVcsQ0FBQyxTQUFTLENBQUM7TUFDbkM7SUFDRixDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2QztBQUN0QjtBQUV2QixNQUFNUSxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQ0MsR0FBRyxFQUFFO0VBQ3RDLE9BQU9BLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsRUFBRUMsS0FBSyxJQUFJQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUVEdEUscUlBQUksQ0FBQytDLE1BQU0sQ0FBQztFQUNWaEIsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osTUFBTWlCLE9BQU8sR0FBRyxJQUFJO0lBQ3BCLE1BQU11QixNQUFNLEdBQUd2QixPQUFPLENBQUNiLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNuRCxNQUFNcUMsVUFBVSxHQUFHLFNBQVNBLFVBQVVBLENBQUNDLElBQUksRUFBRTtNQUMzQyxPQUFPekIsT0FBTyxDQUFDYixJQUFJLENBQUMsWUFBWStCLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0RCxDQUFDO0lBRURGLE1BQU0sQ0FBQ0csUUFBUSxDQUFDO01BQ2RDLGNBQWMsRUFBRSxLQUFLO01BRXJCQyxRQUFRQSxDQUFDSCxJQUFJLEVBQUVJLElBQUksRUFBRUMsTUFBTSxFQUFFO1FBQzNCLE1BQU07VUFBRUMsWUFBWTtVQUFFQztRQUFhLENBQUMsR0FBR0YsTUFBTSxDQUFDckQsSUFBSSxDQUFDLENBQUM7UUFDcEQsTUFBTXdELGlCQUFpQixHQUFHVixNQUFNLENBQUNXLE1BQU0sQ0FBQyxDQUFDLENBQUMvQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQ2dELEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFNUVuQyxPQUFPLENBQUNiLElBQUksQ0FBQywwREFBMEQsQ0FBQyxDQUFDaUQsSUFBSSxDQUFDLENBQUNDLEtBQUssRUFBRUMsS0FBSyxLQUFLO1VBQzlGdEYscUlBQUMsQ0FBQ3NGLEtBQUssQ0FBQyxDQUFDL0QsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUM7UUFFRnFDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDaUIsTUFBTSxDQUFDckQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDc0MsT0FBTyxDQUFDLENBQUMsQ0FBQ3dCLFFBQVEsRUFBRXpFLEtBQUssQ0FBQyxLQUFLO1VBQzNELE1BQU0wRSxLQUFLLEdBQUdoQixVQUFVLENBQUNlLFFBQVEsQ0FBQztVQUVsQyxJQUFJQSxRQUFRLENBQUNFLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMxQ0QsS0FBSyxDQUFDakUsR0FBRyxDQUFDVCxLQUFLLENBQUMsQ0FBQzRFLE1BQU0sQ0FBQyxDQUFDO1lBRXpCLE1BQU1DLE1BQU0sR0FBR0MsV0FBVyxDQUFDLE1BQU07Y0FDL0IsTUFBTUMsaUJBQWlCLEdBQUdyQixVQUFVLENBQUMsY0FBYyxDQUFDO2NBQ3BELE1BQU1zQixpQkFBaUIsR0FBR3RCLFVBQVUsQ0FBQyxjQUFjLENBQUM7Y0FFcEQsSUFBSSxDQUFDUyxpQkFBaUIsQ0FBQ2MsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNuRCxJQUFJRixpQkFBaUIsQ0FBQ3JFLE1BQU0sS0FBSyxDQUFDLEtBQUt1RCxZQUFZLEtBQUssRUFBRSxJQUFJQSxZQUFZLElBQUlpQixTQUFTLENBQUMsRUFBRTtrQkFDeEZILGlCQUFpQixDQUFDdEUsR0FBRyxDQUFDd0QsWUFBWSxDQUFDO2tCQUVuQ2tCLGFBQWEsQ0FBQ04sTUFBTSxDQUFDO2dCQUN2QixDQUFDLE1BQU0sSUFBSUcsaUJBQWlCLENBQUN0RSxNQUFNLEtBQUssQ0FBQyxLQUFLd0QsWUFBWSxLQUFLLEVBQUUsSUFBSUEsWUFBWSxJQUFJZ0IsU0FBUyxDQUFDLEVBQUU7a0JBQy9GRixpQkFBaUIsQ0FBQ3ZFLEdBQUcsQ0FBQ3lELFlBQVksQ0FBQztrQkFFbkNpQixhQUFhLENBQUNOLE1BQU0sQ0FBQztnQkFDdkI7Y0FDRjtZQUNGLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDVCxDQUFDLE1BQU0sSUFBSUgsS0FBSyxDQUFDVSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSVYsS0FBSyxDQUFDVSxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUN0RVYsS0FBSyxDQUFDcEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDNUJvRCxLQUFLLENBQUNXLE1BQU0sQ0FBQyxXQUFXckYsS0FBSyxJQUFJLENBQUMsQ0FBQ3NCLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO1VBQzFELENBQUMsTUFBTTtZQUNMb0QsS0FBSyxDQUFDakUsR0FBRyxDQUFDVCxLQUFLLENBQUM7VUFDbEI7UUFDRixDQUFDLENBQUM7TUFDSjtJQUNGLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbkVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCO0FBQ29DO0FBRTNELE1BQU11RixxQkFBcUIsR0FBRyxTQUFTQSxxQkFBcUJBLENBQUNDLGFBQWEsRUFBRTtFQUMxRSxPQUFPQSxhQUFhLElBQUlOLFNBQVMsR0FBRyxFQUFFLEdBQUcsVUFBVUkseUVBQWEsQ0FBQ0UsYUFBYSxDQUFDLEdBQUc7QUFDcEYsQ0FBQztBQUVEdEcscUlBQUksQ0FBQytDLE1BQU0sQ0FBQztFQUNWZixhQUFhQSxDQUFBLEVBQUc7SUFDZCxNQUFNdUUsYUFBYSxHQUFHdkcscUlBQUMsQ0FBQywrQkFBK0IsQ0FBQztJQUV4RHVHLGFBQWEsQ0FBQ25HLEVBQUUsQ0FBQyxRQUFRLEVBQUdvRyxLQUFLLElBQUs7TUFDcEMsTUFBTWpDLE1BQU0sR0FBR3ZFLHFJQUFDLENBQUN3RyxLQUFLLENBQUNDLGFBQWEsQ0FBQztNQUNyQyxNQUFNeEIsaUJBQWlCLEdBQUdWLE1BQU0sQ0FBQ21DLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDO01BRWpGLE1BQU1DLHVCQUF1QixHQUFHckMsTUFBTSxDQUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDMkQsT0FBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7TUFDbEYsTUFBTXlDLHNCQUFzQixHQUFHdEMsTUFBTSxDQUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDMkQsT0FBTyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7TUFFekYsTUFBTTBDLHFCQUFxQixHQUFHdkMsTUFBTSxDQUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDMkQsT0FBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7TUFDOUUsTUFBTTJDLG9CQUFvQixHQUFHeEMsTUFBTSxDQUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDMkQsT0FBTyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7TUFFckYsTUFBTTRDLElBQUksR0FBR3pDLE1BQU0sQ0FBQ21DLE9BQU8sQ0FBQyxNQUFNLENBQUM7TUFFbkMsSUFBSW5DLE1BQU0sQ0FBQ2hELEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJZ0QsTUFBTSxDQUFDaEQsR0FBRyxDQUFDLENBQUMsSUFBSXlFLFNBQVMsRUFBRTtRQUNwRGYsaUJBQWlCLENBQUNnQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU07VUFDdENoQyxpQkFBaUIsQ0FBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1FBRUY7TUFDRjtNQUVBZ0IsaUJBQWlCLENBQUN4RSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQztNQUM1Q3VHLElBQUksQ0FBQ3hELFFBQVEsQ0FBQyxTQUFTLENBQUM7TUFFeEJ4RCxxSUFBSyxDQUFDaUYsaUJBQWlCLENBQUN4RSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRXlHLFdBQVcsRUFBRTNDLE1BQU0sQ0FBQ2hELEdBQUcsQ0FBQztNQUFFLENBQUMsRUFBR0ksUUFBUSxJQUFLO1FBQ3JGLElBQUksQ0FBQ0EsUUFBUSxDQUFDd0YsT0FBTyxFQUFFO1VBQ3JCbEMsaUJBQWlCLENBQUNnQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU07WUFDdENoQyxpQkFBaUIsQ0FBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFMUJnQixpQkFBaUIsQ0FBQ2xFLFVBQVUsQ0FBQyxjQUFjLENBQUM7WUFDNUNpRyxJQUFJLENBQUN0RCxXQUFXLENBQUMsU0FBUyxDQUFDO1VBQzdCLENBQUMsQ0FBQztRQUNKLENBQUMsTUFBTSxJQUFJL0IsUUFBUSxDQUFDd0YsT0FBTyxDQUFDMUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1VBQ3BEUixpQkFBaUIsQ0FBQ2dDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTTtZQUN0QyxNQUFNRyxtQkFBbUIsR0FBR2YscUJBQXFCLENBQy9DckcscUlBQUMsQ0FBQ2lGLGlCQUFpQixDQUFDLENBQUM5QyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQ1osR0FBRyxDQUFDLENBQ3hFLENBQUM7WUFFRjBELGlCQUFpQixDQUFDaEIsSUFBSSxDQUNwQnRDLFFBQVEsQ0FBQ3dGLE9BQU8sQ0FDYi9DLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxTQUFTd0MsdUJBQXVCLElBQUlRLG1CQUFtQixFQUFFLENBQUMsQ0FDcEdoRCxPQUFPLENBQUMsOEJBQThCLEVBQUUsT0FBTzBDLHFCQUFxQixHQUFHLENBQUMsQ0FDeEUxQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsaUJBQWlCLENBQUMsQ0FDakVBLE9BQU8sQ0FBQyxVQUFVZ0QsbUJBQW1CLEVBQUUsRUFBRSxVQUFVQSxtQkFBbUIsdUJBQXVCLENBQ2pHLENBQUM7WUFDRm5DLGlCQUFpQixDQUFDekIsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN0Q3lCLGlCQUFpQixDQUFDbEUsVUFBVSxDQUFDLGNBQWMsQ0FBQztZQUU1Q2tFLGlCQUFpQixDQUFDb0MsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNO2NBQ3JDTCxJQUFJLENBQUN0RCxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQzdCLENBQUMsQ0FBQztVQUNKLENBQUMsQ0FBQztRQUNKLENBQUMsTUFBTTtVQUNMdUIsaUJBQWlCLENBQUNnQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU07WUFDdEMsTUFBTUssa0JBQWtCLEdBQUdqQixxQkFBcUIsQ0FBQ3JHLHFJQUFDLENBQUNpRixpQkFBaUIsQ0FBQyxDQUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTFGMEQsaUJBQWlCLENBQUNoQixJQUFJLENBQ3BCdEMsUUFBUSxDQUFDd0YsT0FBTyxDQUNiL0MsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLFNBQVN5QyxzQkFBc0IsSUFBSVMsa0JBQWtCLEVBQUUsQ0FBQyxDQUNsR2xELE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxPQUFPMkMsb0JBQW9CLEdBQUcsQ0FDMUUsQ0FBQztZQUVGOUIsaUJBQWlCLENBQUNsRSxVQUFVLENBQUMsY0FBYyxDQUFDO1lBRTVDa0UsaUJBQWlCLENBQUNvQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU07Y0FDckNMLElBQUksQ0FBQ3RELFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFDN0IsQ0FBQyxDQUFDO1VBQ0osQ0FBQyxDQUFDO1FBQ0o7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRixJQUFJNkMsYUFBYSxDQUFDaEYsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7TUFDOUJnRixhQUFhLENBQUNnQixPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2pDO0lBRUEsSUFBSXZILHFJQUFNLENBQUNBLHFJQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQzZFLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7TUFDckQ3RSxxSUFBQyxDQUFDLHVCQUF1QixDQUFDLENBQUN1SCxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzlDO0lBRUEsTUFBTUUsdUJBQXVCLEdBQUd6SCxxSUFBQyxDQUFDLDREQUE0RCxDQUFDO0lBQy9GLE1BQU0wSCx3QkFBd0IsR0FBRzFILHFJQUFDLENBQUMsb0NBQW9DLENBQUM7SUFDeEUsTUFBTTJILHFCQUFxQixHQUFHLFNBQVNBLHFCQUFxQkEsQ0FBQSxFQUFHO01BQzdERCx3QkFBd0IsQ0FBQ0UsTUFBTSxDQUFDSCx1QkFBdUIsQ0FBQ3JGLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0R1RixxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZCRix1QkFBdUIsQ0FBQ3JILEVBQUUsQ0FBQyxRQUFRLEVBQUV1SCxxQkFBcUIsQ0FBQztFQUM3RDtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDM0dGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCO0FBRXZCLE1BQU1FLGVBQWUsR0FBRyxTQUFTQSxlQUFlQSxDQUFDQyxXQUFXLEVBQUU7RUFDNUQsTUFBTUMsYUFBYSxHQUFHL0gscUlBQUMsQ0FBQyxrQkFBa0IsQ0FBQztFQUMzQyxNQUFNZ0ksU0FBUyxHQUFHaEkscUlBQUMsQ0FBQyx3QkFBd0IsQ0FBQztFQUU3QyxNQUFNaUksUUFBUSxHQUFHakkscUlBQUMsQ0FBQzhILFdBQVcsQ0FBQyxDQUFDM0YsSUFBSSxDQUFDLEtBQUssQ0FBQztFQUMzQyxNQUFNK0YsWUFBWSxHQUFHbEkscUlBQUMsQ0FBQzhILFdBQVcsQ0FBQyxDQUFDM0YsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUU3QyxJQUFJOEYsUUFBUSxDQUFDekcsTUFBTSxLQUFLLENBQUMsSUFBSTBHLFlBQVksQ0FBQzFHLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDdER3RyxTQUFTLENBQUN2SCxJQUFJLENBQUMsS0FBSyxFQUFFVCxxSUFBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNTLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlFeUgsWUFBWSxDQUFDekgsSUFBSSxDQUFDLE1BQU0sRUFBRVQscUlBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDUyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUVoRjtFQUNGO0VBRUFzSCxhQUFhLENBQUN0SCxJQUFJLENBQUMsTUFBTSxFQUFFeUgsWUFBWSxDQUFDekgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3JEdUgsU0FBUyxDQUFDdkgsSUFBSSxDQUFDLEtBQUssRUFBRXdILFFBQVEsQ0FBQ3hILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFFRCxNQUFNMEgseUJBQXlCLEdBQUcsU0FBU0EseUJBQXlCQSxDQUFBLEVBQUc7RUFDckUsSUFBSUMsT0FBTyxHQUFHLEVBQUU7RUFFaEJwSSxxSUFBQyxDQUFDLHVDQUF1QyxDQUFDLENBQUNvRixJQUFJLENBQUMsQ0FBQ0MsS0FBSyxFQUFFZCxNQUFNLEtBQUs7SUFDakU2RCxPQUFPLElBQUksR0FBR3BJLHFJQUFDLENBQUN1RSxNQUFNLENBQUMsQ0FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDWixHQUFHLENBQUMsQ0FBQyxHQUFHO0VBQzFELENBQUMsQ0FBQztFQUVGLE1BQU04RyxpQkFBaUIsR0FBRyxFQUFFO0VBQzVCLE1BQU1DLFlBQVksR0FBR0YsT0FBTyxDQUFDWixJQUFJLENBQUMsQ0FBQyxDQUFDZSxLQUFLLENBQUMsR0FBRyxDQUFDO0VBRTlDdkkscUlBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDb0YsSUFBSSxDQUFDLENBQUNDLEtBQUssRUFBRXJDLE9BQU8sS0FBSztJQUNuRCxNQUFNd0YsWUFBWSxHQUFHeEkscUlBQUMsQ0FBQ2dELE9BQU8sQ0FBQyxDQUFDdkMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQzVELE1BQU1nSSxlQUFlLEdBQUdILFlBQVksQ0FBQ0ksS0FBSyxDQUFDQyxNQUFNLElBQUlILFlBQVksQ0FBQy9DLE9BQU8sQ0FBQ2tELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXZGLElBQUlGLGVBQWUsRUFBRTtNQUNuQkosaUJBQWlCLENBQUNPLElBQUksQ0FBQzVJLHFJQUFDLENBQUNnRCxPQUFPLENBQUMsQ0FBQzZGLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RDtFQUNGLENBQUMsQ0FBQztFQUVGaEIsZUFBZSxDQUFDUSxpQkFBaUIsQ0FBQ1MsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsTUFBTUMseUJBQXlCLEdBQUcsU0FBU0EseUJBQXlCQSxDQUFBLEVBQUc7RUFDckUvSSxxSUFBQyxDQUFDLGlEQUFpRCxDQUFDLENBQUNJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTTtJQUN0RStILHlCQUF5QixDQUFDLENBQUM7RUFDN0IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU1hLDBCQUEwQixHQUFHLFNBQVNBLDBCQUEwQkEsQ0FBQ0MsY0FBYyxFQUFFO0VBQ3JGLE1BQU1DLFdBQVcsR0FBR2xKLHFJQUFDLENBQUNpSixjQUFjLENBQUMsQ0FBQ3hJLElBQUksQ0FBQyxPQUFPLENBQUM7RUFDbkQsTUFBTTBJLHFCQUFxQixHQUFHLEVBQUU7RUFFaENuSixxSUFBQyxDQUFDLHdCQUF3QmtKLFdBQVcsSUFBSSxDQUFDLENBQUM5RCxJQUFJLENBQUMsQ0FBQ0MsS0FBSyxFQUFFckMsT0FBTyxLQUFLO0lBQ2xFbUcscUJBQXFCLENBQUNQLElBQUksQ0FBQzVJLHFJQUFDLENBQUNnRCxPQUFPLENBQUMsQ0FBQzZGLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztFQUNoRSxDQUFDLENBQUM7RUFFRmhCLGVBQWUsQ0FBQ3NCLHFCQUFxQixDQUFDTCxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFFRCxNQUFNTSwwQkFBMEIsR0FBRyxTQUFTQSwwQkFBMEJBLENBQUEsRUFBRztFQUN2RXBKLHFJQUFDLENBQUMsZ0RBQWdELENBQUMsQ0FBQ0ksRUFBRSxDQUFDLFFBQVEsRUFBR29HLEtBQUssSUFBSztJQUMxRXdDLDBCQUEwQixDQUFDaEoscUlBQUMsQ0FBQ3dHLEtBQUssQ0FBQ0MsYUFBYSxDQUFDLENBQUM7RUFDcEQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVEekcscUlBQUksQ0FBQytDLE1BQU0sQ0FBQztFQUNWYixhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJbEMscUlBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDd0IsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUMxQzJHLHlCQUF5QixDQUFDLENBQUM7TUFDM0JZLHlCQUF5QixDQUFDLENBQUM7SUFDN0IsQ0FBQyxNQUFNLElBQUkvSSxxSUFBQyxDQUFDLHFCQUFxQixDQUFDLENBQUN3QixNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzlDd0gsMEJBQTBCLENBQUNoSixxSUFBQyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7TUFDL0VvSiwwQkFBMEIsQ0FBQyxDQUFDO0lBQzlCO0VBQ0Y7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3BGRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1QjtBQUV2QixTQUFTQyx1QkFBdUJBLENBQUNDLGlCQUFpQixFQUFFO0VBQ2xELElBQUlDLHdCQUF3QixHQUFHLEVBQUU7RUFDakN2SixxSUFBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNpRSxJQUFJLENBQUMsRUFBRSxDQUFDO0VBRWhDLElBQUlxRixpQkFBaUIsS0FBSyxJQUFJLEVBQUU7SUFDOUJ0SixxSUFBTSxDQUFDc0osaUJBQWlCLEVBQUUsQ0FBQ2pFLEtBQUssRUFBRW1FLFNBQVMsS0FBSztNQUM5Q0Qsd0JBQXdCLElBQUk7QUFDbEM7QUFDQSwrREFBK0RDLFNBQVMsQ0FBQ0MsS0FBSztBQUM5RTtBQUNBLGtDQUFrQ0QsU0FBUyxDQUFDRSxXQUFXO0FBQ3ZELGFBQWE7SUFDVCxDQUFDLENBQUM7SUFDRjFKLHFJQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ2lFLElBQUksQ0FBQ3NGLHdCQUF3QixDQUFDO0VBQ3hEO0FBQ0Y7QUFFQSxNQUFNSSwwQkFBMEIsR0FBRyxTQUFTQSwwQkFBMEJBLENBQUEsRUFBRztFQUN2RTNKLHFJQUFDLENBQUMsaURBQWlELENBQUMsQ0FBQ0ksRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNO0lBQ3RFLElBQUl3SixRQUFRLEdBQUcsRUFBRTtJQUVqQjVKLHFJQUFDLENBQUMsb0RBQW9ELENBQUMsQ0FBQ29GLElBQUksQ0FBQyxDQUFDQyxLQUFLLEVBQUVyQyxPQUFPLEtBQUs7TUFDL0UsTUFBTXVCLE1BQU0sR0FBR3ZFLHFJQUFDLENBQUNnRCxPQUFPLENBQUM7TUFDekIsTUFBTTJGLE1BQU0sR0FBR3BFLE1BQU0sQ0FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDWixHQUFHLENBQUMsQ0FBQztNQUNuRHFJLFFBQVEsSUFBSSxTQUFTckYsTUFBTSxDQUFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLa0ksTUFBTSxJQUFJO0lBQ2hFLENBQUMsQ0FBQztJQUVGLE1BQU1rQixLQUFLLEdBQUc3SixxSUFBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNtQyxJQUFJLENBQUN5SCxRQUFRLENBQUMsQ0FBQ25KLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0UsTUFBTXFKLGFBQWEsR0FBRzlKLHFJQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ21DLElBQUksQ0FBQ3lILFFBQVEsQ0FBQyxDQUFDbkosSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzlGLElBQUk2SSxpQkFBaUIsR0FBR3RKLHFJQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ21DLElBQUksQ0FBQ3lILFFBQVEsQ0FBQyxDQUFDbkosSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3BHLElBQUk2SSxpQkFBaUIsS0FBS3RELFNBQVMsRUFBRTtNQUNuQ3NELGlCQUFpQixHQUFHUyxJQUFJLENBQUNDLEtBQUssQ0FBQ1YsaUJBQWlCLENBQUM7SUFDbkQ7SUFFQSxJQUFJTyxLQUFLLEtBQUs3RCxTQUFTLEVBQUU7TUFDdkJoRyxxSUFBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM2RSxJQUFJLENBQUNnRixLQUFLLENBQUM7TUFDL0I3SixxSUFBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNlLFVBQVUsQ0FBQyxVQUFVLENBQUM7TUFFL0MsSUFBSStJLGFBQWEsS0FBSzlELFNBQVMsRUFBRTtRQUMvQmhHLHFJQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2lLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUNoRyxJQUFJLENBQUMsUUFBUTZGLGFBQWEsUUFBUSxDQUFDO01BQzNGLENBQUMsTUFBTTtRQUNMOUoscUlBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDaUssR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7TUFDckQ7TUFFQVosdUJBQXVCLENBQUNDLGlCQUFpQixDQUFDO0lBQzVDLENBQUMsTUFBTTtNQUNMdEoscUlBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDNkUsSUFBSSxDQUFDN0UscUlBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDUyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztNQUNyRlQscUlBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDUyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztJQUN2RDtJQUVBLE1BQU15Six5QkFBeUIsR0FBR2xLLHFJQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ21DLElBQUksQ0FBQ3lILFFBQVEsQ0FBQyxDQUFDbkosSUFBSSxDQUFDLG1DQUFtQyxDQUFDO0lBRXhILElBQUl5Six5QkFBeUIsS0FBS2xFLFNBQVMsRUFBRTtNQUMzQ2hHLHFJQUFDLENBQUMsK0JBQStCLENBQUMsQ0FDL0JpRSxJQUFJLENBQUNpRyx5QkFBeUIsQ0FBQyxDQUMvQkQsR0FBRyxDQUFDO1FBQUUsYUFBYSxFQUFFLFFBQVE7UUFBRUUsT0FBTyxFQUFFO01BQVMsQ0FBQyxDQUFDO0lBQ3hELENBQUMsTUFBTTtNQUNMbksscUlBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDaUssR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7SUFDM0Q7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTUcsMkJBQTJCLEdBQUcsU0FBU0EsMkJBQTJCQSxDQUFBLEVBQUc7RUFDekVwSyxxSUFBQyxDQUFDLGdEQUFnRCxDQUFDLENBQUNJLEVBQUUsQ0FBQyxRQUFRLEVBQUdvRyxLQUFLLElBQUs7SUFDMUUsTUFBTTZELFFBQVEsR0FBR3JLLHFJQUFDLENBQUN3RyxLQUFLLENBQUNDLGFBQWEsQ0FBQyxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUN2RSxJQUFJLENBQUMsK0JBQStCLENBQUM7SUFDM0YsTUFBTTBILEtBQUssR0FBR1EsUUFBUSxDQUFDeEYsSUFBSSxDQUFDLENBQUM7SUFDN0IsTUFBTWlGLGFBQWEsR0FBR08sUUFBUSxDQUFDNUosSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzFELElBQUk2SSxpQkFBaUIsR0FBR2UsUUFBUSxDQUFDNUosSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ2hFLElBQUk2SSxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7TUFDOUJBLGlCQUFpQixHQUFHUyxJQUFJLENBQUNDLEtBQUssQ0FBQ1YsaUJBQWlCLENBQUM7SUFDbkQ7SUFFQXRKLHFJQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzZFLElBQUksQ0FBQ2dGLEtBQUssQ0FBQztJQUMvQlIsdUJBQXVCLENBQUNDLGlCQUFpQixDQUFDO0lBRTFDLElBQUlRLGFBQWEsS0FBSzlELFNBQVMsRUFBRTtNQUMvQmhHLHFJQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2lLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUNoRyxJQUFJLENBQUMsUUFBUTZGLGFBQWEsUUFBUSxDQUFDO0lBQzNGLENBQUMsTUFBTTtNQUNMOUoscUlBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDaUssR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7SUFDckQ7SUFFQSxNQUFNQyx5QkFBeUIsR0FBR0csUUFBUSxDQUFDNUosSUFBSSxDQUFDLG1DQUFtQyxDQUFDO0lBRXBGLElBQUl5Six5QkFBeUIsS0FBS2xFLFNBQVMsRUFBRTtNQUMzQ2hHLHFJQUFDLENBQUMsK0JBQStCLENBQUMsQ0FDL0JpRSxJQUFJLENBQUNpRyx5QkFBeUIsQ0FBQyxDQUMvQkQsR0FBRyxDQUFDO1FBQUUsYUFBYSxFQUFFLFFBQVE7UUFBRUUsT0FBTyxFQUFFO01BQVMsQ0FBQyxDQUFDO0lBQ3hELENBQUMsTUFBTTtNQUNMbksscUlBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDaUssR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7SUFDM0Q7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDO0FBRURqSyxxSUFBSSxDQUFDK0MsTUFBTSxDQUFDO0VBQ1ZkLGFBQWFBLENBQUEsRUFBRztJQUNkLElBQUlqQyxxSUFBQyxDQUFDLDBCQUEwQixDQUFDLENBQUN3QixNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzVDbUksMEJBQTBCLENBQUMsQ0FBQztJQUM5QixDQUFDLE1BQU0sSUFBSTNKLHFJQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ3dCLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDbkQ0SSwyQkFBMkIsQ0FBQyxDQUFDO0lBQy9CO0VBQ0Y7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEM7QUFDRDtBQUNGO0FBQ0U7QUFDRjtBQUNDO0FBQ0o7QUFDTztBQUN4QjtBQUU0QjtBQUNqQjtBQUNLO0FBQ2Q7QUFDRztBQUU1QnBLLHFJQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsTUFBTTtFQUN0QkYscUlBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQ3dELFFBQVEsQ0FBQyxTQUFTLENBQUM7RUFDakN4RCxxSUFBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDc0ssT0FBTyxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUM7RUFDbkV0SyxxSUFBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDc0ssT0FBTyxDQUFDLFNBQVMsRUFBRTtJQUMvQkMsT0FBTyxFQUFFLEtBQUs7SUFDZEMsUUFBUSxFQUFFO0VBQ1osQ0FBQyxDQUFDO0VBRUZ4SyxxSUFBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDeUssUUFBUSxDQUFDLENBQUM7RUFDNUJ6SyxxSUFBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDMEssU0FBUyxDQUFDLENBQUM7RUFDOUIxSyxxSUFBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMwRSxRQUFRLENBQUM7SUFBRWlHLE1BQU0sRUFBRTtFQUFPLENBQUMsQ0FBQztFQUNwRDNLLHFJQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQzBFLFFBQVEsQ0FBQyxDQUFDO0VBQ25DMUUscUlBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDMEUsUUFBUSxDQUFDO0lBQUVpRyxNQUFNLEVBQUU7RUFBTyxDQUFDLENBQUM7RUFDbkQzSyxxSUFBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMwRSxRQUFRLENBQUM7SUFBRWlHLE1BQU0sRUFBRTtFQUFPLENBQUMsQ0FBQztFQUNyRDNLLHFJQUFDLENBQUMsd0NBQXdDLENBQUMsQ0FBQzBFLFFBQVEsQ0FBQyxDQUFDO0VBQ3REMUUscUlBQUMsQ0FBQywwREFBMEQsQ0FBQyxDQUFDNEssR0FBRyxDQUFDLENBQUM7RUFDbkU1SyxxSUFBQyxDQUFDLDJEQUEyRCxDQUFDLENBQUM2SyxNQUFNLENBQUM7SUFBRXpLLEVBQUUsRUFBRTtFQUFRLENBQUMsQ0FBQztFQUN0RkoscUlBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ1csTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUVqQ1gscUlBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDSSxFQUFFLENBQUMsT0FBTyxFQUFHb0csS0FBSyxJQUFLO0lBQzVEeEcscUlBQUMsQ0FBQ3dHLEtBQUssQ0FBQ0MsYUFBYSxDQUFDLENBQUNvQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUNyRixRQUFRLENBQUMsU0FBUyxDQUFDO0VBQzVELENBQUMsQ0FBQztFQUNGeEQscUlBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDSSxFQUFFLENBQUMsT0FBTyxFQUFHb0csS0FBSyxJQUFLO0lBQzNDeEcscUlBQUMsQ0FBQ3dHLEtBQUssQ0FBQ0MsYUFBYSxDQUFDLENBQUNqRCxRQUFRLENBQUMsU0FBUyxDQUFDO0VBQzVDLENBQUMsQ0FBQztFQUNGeEQscUlBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDSSxFQUFFLENBQUMsT0FBTyxFQUFHb0csS0FBSyxJQUFLO0lBQzFDeEcscUlBQUMsQ0FBQ3dHLEtBQUssQ0FBQ0MsYUFBYSxDQUFDLENBQUNvQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUNpQyxVQUFVLENBQUMsTUFBTSxDQUFDO0VBQy9ELENBQUMsQ0FBQztFQUVGOUsscUlBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDK0ssbUJBQW1CLENBQUMsQ0FBQztFQUN2RC9LLHFJQUFDLENBQUMsMENBQTBDLENBQUMsQ0FBQ2dMLDZCQUE2QixDQUFDLENBQUM7RUFDN0VoTCxxSUFBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNpTCxhQUFhLENBQUMsQ0FBQztFQUNuQ2pMLHFJQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ2tMLFFBQVEsQ0FBQyxDQUFDO0VBRXpDbEwscUlBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDNkssTUFBTSxDQUFDO0lBQ2hDekssRUFBRSxFQUFFO0VBQ04sQ0FBQyxDQUFDO0VBRUZKLHFJQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQ21MLGNBQWMsQ0FBQyxDQUFDO0VBRW5EbkwscUlBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDSSxFQUFFLENBQUMsT0FBTyxFQUFHZ0wsQ0FBQyxJQUFLO0lBQ3hDLE1BQU1DLFFBQVEsR0FBR3JMLHFJQUFDLENBQUNvTCxDQUFDLENBQUMzRSxhQUFhLENBQUM7SUFDbkN6RyxxSUFBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ2tDLElBQUksQ0FBQ2tKLFFBQVEsQ0FBQzVLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMrQyxRQUFRLENBQUMsVUFBVSxDQUFDO0VBQ3pFLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3QztBQUNqQjtBQUV2QnhELHFJQUFJLENBQUMrQyxNQUFNLENBQUM7RUFDVmxCLFFBQVFBLENBQUM7SUFDUFgsTUFBTTtJQUNORCxRQUFRLEdBQUcsTUFBTTtJQUNqQkUsUUFBUSxHQUFHLENBQUM7SUFDWm1LLEtBQUssR0FBRztFQUNWLENBQUMsRUFBRTtJQUNELE1BQU10SSxPQUFPLEdBQUcsSUFBSTtJQUNwQixNQUFNdUksYUFBYSxHQUFHdkksT0FBTyxDQUFDYixJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDNUQsTUFBTXFKLFVBQVUsR0FBR3hJLE9BQU8sQ0FBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3RELE1BQU1zSixjQUFjLEdBQUd6SSxPQUFPLENBQUNiLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUMzRCxNQUFNdUosWUFBWSxHQUFHMUksT0FBTyxDQUFDYixJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzVDLE1BQU13SixlQUFlLEdBQUczSSxPQUFPLENBQUNiLElBQUksQ0FBQyxZQUFZLENBQUM7SUFFbER1SixZQUFZLENBQUN0SSxHQUFHLENBQUM7TUFDZmxDLE1BQU07TUFDTkQsUUFBUTtNQUNSRSxRQUFRO01BQ1JtSyxLQUFLO01BRUxsSyxVQUFVQSxDQUFDQyxRQUFRLEVBQUU7UUFDbkI7UUFDQUEsUUFBUSxDQUFDSSxJQUFJLEdBQUc7VUFDZG1LLFNBQVMsRUFBRUosVUFBVSxDQUFDakssR0FBRyxDQUFDLENBQUM7VUFDM0JzSyxTQUFTLEVBQUVOLGFBQWEsQ0FBQ2hLLEdBQUcsQ0FBQyxDQUFDO1VBQzlCLENBQUNrSyxjQUFjLENBQUNoTCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUdnTCxjQUFjLENBQUNsSyxHQUFHLENBQUM7UUFDcEQsQ0FBQztRQUVELE9BQU9GLFFBQVE7TUFDakIsQ0FBQztNQUVESyxXQUFXQSxDQUFDQyxRQUFRLEVBQUU7UUFDcEIsT0FBT0EsUUFBUSxDQUFDbUssT0FBTztNQUN6QixDQUFDO01BRUR2SSxTQUFTQSxDQUFBLEVBQUc7UUFDVlAsT0FBTyxDQUFDK0ksTUFBTSxDQUFDLENBQUM7UUFDaEJ6TCxNQUFNLENBQUNDLFFBQVEsQ0FBQ3lMLE1BQU0sQ0FBQyxDQUFDO01BQzFCLENBQUM7TUFFRHZJLFNBQVNBLENBQUM5QixRQUFRLEVBQUU7UUFDbEJnSyxlQUFlLENBQUNqSSxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3JDaUksZUFBZSxDQUFDMUgsSUFBSSxDQUFDdEMsUUFBUSxDQUFDcUMsT0FBTyxDQUFDO01BQ3hDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMxREY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0M7QUFDakI7QUFFdkJoRSxxSUFBSSxDQUFDK0MsTUFBTSxDQUFDO0VBQ1YvQixTQUFTQSxDQUFDO0lBQ1JFLE1BQU07SUFDTkQsUUFBUSxHQUFHLE1BQU07SUFDakJFLFFBQVEsR0FBRyxDQUFDO0lBQ1ptSyxLQUFLLEdBQUcsS0FBSztJQUNibEssVUFBVTtJQUNWTTtFQUNGLENBQUMsRUFBRXVLLGlCQUFpQixFQUFFQyxRQUFRLEdBQUcsSUFBSSxFQUFFO0lBQ3JDLE1BQU1sSixPQUFPLEdBQUcsSUFBSTtJQUVwQixJQUFJa0osUUFBUSxFQUFFO01BQ1pELGlCQUFpQixDQUFDRSxJQUFJLENBQUMsQ0FBQztJQUMxQjtJQUVBbkosT0FBTyxDQUFDSSxHQUFHLENBQUM7TUFDVmxDLE1BQU07TUFDTkQsUUFBUTtNQUNSRSxRQUFRO01BQ1JtSyxLQUFLO01BRUxsSyxVQUFVO01BQ1ZNLFdBQVc7TUFFWDZCLFNBQVNBLENBQUEsRUFBRztRQUNWMEksaUJBQWlCLENBQUNHLElBQUksQ0FBQyxDQUFDO01BQzFCLENBQUM7TUFFRDNJLFNBQVNBLENBQUEsRUFBRztRQUNWd0ksaUJBQWlCLENBQUNFLElBQUksQ0FBQyxDQUFDO01BQzFCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3Q0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEM7QUFDbkI7QUFFdkJuTSxxSUFBSSxDQUFDK0MsTUFBTSxDQUFDO0VBQ1ZpSSw2QkFBNkJBLENBQUEsRUFBRztJQUM5QixJQUFJLENBQUM1RixJQUFJLENBQUMsQ0FBQ2lILEdBQUcsRUFBRUMsRUFBRSxLQUFLO01BQ3JCdE0scUlBQUMsQ0FBQ3NNLEVBQUUsQ0FBQyxDQUFDbE0sRUFBRSxDQUFDLE9BQU8sRUFBR21NLEdBQUcsSUFBSztRQUN6QkEsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQztRQUVwQixNQUFNQyxZQUFZLEdBQUd6TSxxSUFBQyxDQUFDdU0sR0FBRyxDQUFDOUYsYUFBYSxDQUFDO1FBRXpDLElBQUlnRyxZQUFZLENBQUN2RyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7VUFDeEJsRyxxSUFBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUdvRyxLQUFLLElBQUs7WUFDL0NBLEtBQUssQ0FBQ2dHLGNBQWMsQ0FBQyxDQUFDO1lBRXRCbE0sTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBR2lNLFlBQVksQ0FBQ2hNLElBQUksQ0FBQyxNQUFNLENBQUM7VUFDbEQsQ0FBQyxDQUFDO1FBQ0o7UUFFQSxJQUFJZ00sWUFBWSxDQUFDdkcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1VBQzdCbEcscUlBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDSSxFQUFFLENBQUMsT0FBTyxFQUFHb0csS0FBSyxJQUFLO1lBQy9DQSxLQUFLLENBQUNnRyxjQUFjLENBQUMsQ0FBQztZQUV0QixNQUFNeEYsSUFBSSxHQUFHeUYsWUFBWSxDQUFDNUQsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN6QzdJLHFJQUFDLENBQUMsb0NBQW9DLENBQUMsQ0FBQ29GLElBQUksQ0FBQyxDQUFDQyxLQUFLLEVBQUVyQyxPQUFPLEtBQUs7Y0FDL0RoRCxxSUFBQyxDQUFDLDRDQUE0Q2dELE9BQU8sQ0FBQ2xDLEtBQUssSUFBSSxDQUFDLENBQUM0TCxRQUFRLENBQUMxRixJQUFJLENBQUM7WUFDakYsQ0FBQyxDQUFDO1lBRUZBLElBQUksQ0FBQzJGLE1BQU0sQ0FBQyxDQUFDO1VBQ2YsQ0FBQyxDQUFDO1FBQ0o7UUFFQTNNLHFJQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQzRNLEtBQUssQ0FBQyxNQUFNLENBQUM7TUFDeEMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzdDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1QjtBQUV2QjVNLHFJQUFJLENBQUMrQyxNQUFNLENBQUM7RUFDVm1JLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQzlGLElBQUksQ0FBQyxDQUFDaUgsR0FBRyxFQUFFQyxFQUFFLEtBQUs7TUFDckIsTUFBTU8sWUFBWSxHQUFHN00scUlBQUMsQ0FBQ3NNLEVBQUUsQ0FBQztNQUMxQixNQUFNUSxXQUFXLEdBQUc5TSxxSUFBQyxDQUFDNk0sWUFBWSxDQUFDcE0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7TUFDbkUsTUFBTXNNLFFBQVEsR0FBRy9NLHFJQUFDLENBQUM2TSxZQUFZLENBQUNwTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztNQUU3RCxNQUFNdU0sWUFBWSxHQUFHQSxDQUFBLEtBQU07UUFDekIsSUFBSUMsT0FBTyxHQUFHLEtBQUs7UUFDbkJILFdBQVcsQ0FBQzFILElBQUksQ0FBQyxDQUFDOEgsQ0FBQyxFQUFFekMsUUFBUSxLQUFLO1VBQ2hDLElBQUlBLFFBQVEsQ0FBQ3dDLE9BQU8sRUFBRUEsT0FBTyxHQUFHLElBQUk7UUFDdEMsQ0FBQyxDQUFDO1FBQ0YsT0FBT0EsT0FBTztNQUNoQixDQUFDO01BRUQsTUFBTUUsa0JBQWtCLEdBQUdBLENBQUEsS0FBTTtRQUMvQkosUUFBUSxDQUFDNUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM0SyxZQUFZLENBQUMsQ0FBQyxDQUFDO01BQzNELENBQUM7TUFFREgsWUFBWSxDQUFDek0sRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNO1FBQzlCME0sV0FBVyxDQUFDMUssSUFBSSxDQUFDLFNBQVMsRUFBRXBDLHFJQUFDLENBQUMsSUFBSSxDQUFDLENBQUNrRyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkRpSCxrQkFBa0IsQ0FBQyxDQUFDO01BQ3RCLENBQUMsQ0FBQztNQUVGTCxXQUFXLENBQUMxTSxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU07UUFDN0J5TSxZQUFZLENBQUN6SyxJQUFJLENBQUMsU0FBUyxFQUFFNEssWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM1Q0csa0JBQWtCLENBQUMsQ0FBQztNQUN0QixDQUFDLENBQUM7TUFFRkEsa0JBQWtCLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDM0NGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNaEMsY0FBYyxDQUFDO0VBQ25CaUMsV0FBV0EsQ0FBQ3BLLE9BQU8sRUFBRTtJQUNuQixJQUFJLENBQUNxSyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdEMsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDQSxVQUFVLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUM7SUFDNUMsSUFBSSxDQUFDRSxVQUFVLEdBQUcsSUFBSSxDQUFDSixXQUFXLENBQUNJLFVBQVU7SUFDN0MsSUFBSSxDQUFDQyxlQUFlLEdBQUcsSUFBSSxDQUFDQSxlQUFlLENBQUNILElBQUksQ0FBQyxJQUFJLENBQUM7SUFFdEQsSUFBSSxDQUFDSSxRQUFRLEdBQUcxTixxSUFBQyxDQUFDZ0QsT0FBTyxDQUFDO0lBQzFCLElBQUksQ0FBQzJLLEtBQUssR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQ3ZMLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQztJQUN0RSxJQUFJLENBQUN5TCxLQUFLLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUNFLFFBQVEsQ0FBQyxDQUFDLENBQUNyTSxNQUFNO0lBQ3pDLElBQUksQ0FBQ3NNLFVBQVUsR0FBRyxJQUFJO0lBQ3RCLElBQUksQ0FBQ0osUUFBUSxDQUFDdE4sRUFBRSxDQUFDLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxJQUFJLENBQUNpTixPQUFPLENBQUM7SUFDNUUsSUFBSSxDQUFDSyxRQUFRLENBQUN0TixFQUFFLENBQUMsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLElBQUksQ0FBQ29OLFVBQVUsQ0FBQztJQUM3RSxJQUFJLENBQUNFLFFBQVEsQ0FBQ3ROLEVBQUUsQ0FBQyxRQUFRLEVBQUUsaUNBQWlDLEVBQUUsSUFBSSxDQUFDbU4sVUFBVSxDQUFDO0lBQzlFdk4scUlBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDcU4sZUFBZSxDQUFDO0lBQ2hGek4scUlBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDb0csS0FBSyxFQUFFdUgsWUFBWSxLQUFLO01BQzdEL04scUlBQUMsQ0FBQytOLFlBQVksQ0FBQyxDQUFDNUwsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUNnSixjQUFjLENBQUMsQ0FBQztNQUN0RW5MLHFJQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDc0gsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUN2SCxxSUFBQyxDQUFDK04sWUFBWSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUM7RUFDSjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtFQUNFVixPQUFPQSxDQUFDN0csS0FBSyxFQUFFO0lBQ2JBLEtBQUssQ0FBQ2dHLGNBQWMsQ0FBQyxDQUFDO0lBRXRCLElBQUl3QixTQUFTLEdBQUcsSUFBSSxDQUFDTixRQUFRLENBQUNqTSxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQy9DLElBQUl3TSxhQUFhLEdBQUcsSUFBSUMsTUFBTSxDQUFDLElBQUksQ0FBQ1IsUUFBUSxDQUFDak0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBRXpFdU0sU0FBUyxHQUFHQSxTQUFTLENBQUM1SixPQUFPLENBQUM2SixhQUFhLEVBQUUsSUFBSSxDQUFDTCxLQUFLLENBQUM7SUFFeEQsSUFBSSxDQUFDRCxLQUFLLENBQUNRLE1BQU0sQ0FBQ0gsU0FBUyxDQUFDO0lBQzVCLElBQUksQ0FBQ0osS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSyxHQUFHLENBQUM7SUFFM0I1TixxSUFBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ3NILE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQ29HLEtBQUssQ0FBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQ08sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzVFOztFQUVBO0FBQ0Y7QUFDQTtFQUNFYixVQUFVQSxDQUFDL0csS0FBSyxFQUFFO0lBQ2hCQSxLQUFLLENBQUNnRyxjQUFjLENBQUMsQ0FBQztJQUN0QixNQUFNa0IsUUFBUSxHQUFHMU4scUlBQUMsQ0FBQ3dHLEtBQUssQ0FBQ0MsYUFBYSxDQUFDO0lBQ3ZDLE1BQU14RCxHQUFHLEdBQUd5SyxRQUFRLENBQUNqTSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3JDLE1BQU1YLEtBQUssR0FBRzRNLFFBQVEsQ0FBQ25NLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE1BQU04TSxVQUFVLEdBQUdYLFFBQVEsQ0FBQzdFLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUNwRSxNQUFNeEQsS0FBSyxHQUFHZ0osVUFBVSxDQUFDNU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RELE1BQU02TSxRQUFRLEdBQUdELFVBQVUsQ0FBQzVNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUV6RCxJQUFJd0IsR0FBRyxFQUFFO01BQ1BvTCxVQUFVLENBQUNFLElBQUksQ0FBQ3RMLEdBQUcsRUFBRTtRQUFFdUwsRUFBRSxFQUFFMU4sS0FBSztRQUFFd047TUFBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQyxNQUFNO01BQ0wsSUFBSUcsVUFBVSxHQUFHLElBQUksQ0FBQ2YsUUFBUSxDQUFDdkwsSUFBSSxDQUFDLHlCQUF5QnJCLEtBQUssSUFBSSxDQUFDO01BQ3ZFLElBQUltTixhQUFhLEdBQUcsSUFBSUMsTUFBTSxDQUFDTyxVQUFVLENBQUNoTixJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxHQUFHLENBQUM7TUFFekUsSUFBSXVNLFNBQVMsR0FBR1MsVUFBVSxDQUFDbE4sR0FBRyxDQUFDLENBQUMsQ0FBQzZDLE9BQU8sQ0FBQzZKLGFBQWEsRUFBRTVJLEtBQUssQ0FBQztNQUU5RGdKLFVBQVUsQ0FBQ0ssV0FBVyxDQUFDVixTQUFTLENBQUM7SUFDbkM7SUFDQWhPLHFJQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDc0gsT0FBTyxDQUFDLHdCQUF3QixFQUFFLENBQUN2SCxxSUFBQyxDQUFDd0csS0FBSyxDQUFDQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0VBQ3pFOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0VBQ0UsT0FBTytHLFVBQVVBLENBQUNoSCxLQUFLLEVBQUU7SUFDdkJBLEtBQUssQ0FBQ2dHLGNBQWMsQ0FBQyxDQUFDO0lBRXRCeE0scUlBQUMsQ0FBQ3dHLEtBQUssQ0FBQ0MsYUFBYSxDQUFDLENBQ25Cb0MsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQ3hDa0QsTUFBTSxDQUFDLENBQUM7SUFFWC9MLHFJQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDc0gsT0FBTyxDQUFDLHdCQUF3QixFQUFFLENBQUN2SCxxSUFBQyxDQUFDd0csS0FBSyxDQUFDQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0VBQ3pFOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0VBQ0VnSCxlQUFlQSxDQUFDakgsS0FBSyxFQUFFO0lBQ3JCLE1BQU1tSSxPQUFPLEdBQUczTyxxSUFBQyxDQUFDd0csS0FBSyxDQUFDQyxhQUFhLENBQUM7SUFDdEMsSUFBSXdILGFBQWEsR0FBR1UsT0FBTyxDQUFDcE4sR0FBRyxDQUFDLENBQUM7SUFFakMsSUFBSW9OLE9BQU8sQ0FBQ2xOLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLdUUsU0FBUyxFQUFFO01BQ3ZEaUksYUFBYSxHQUFHVSxPQUFPLENBQUNsTixJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBR3dNLGFBQWE7SUFDdkU7SUFFQSxJQUFJLElBQUksQ0FBQ0gsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUNBLFVBQVUsS0FBS0csYUFBYSxFQUFFO01BQ2pFLElBQUksQ0FBQ04sS0FBSyxDQUFDMUosSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNyQjtJQUVBLElBQUksQ0FBQzZKLFVBQVUsR0FBR0csYUFBYTtJQUUvQixJQUFJLENBQUNQLFFBQVEsQ0FBQ2pNLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDaU0sUUFBUSxDQUFDdkwsSUFBSSxDQUFDLHlCQUF5QjhMLGFBQWEsSUFBSSxDQUFDLENBQUMxTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ3ZHO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBdkIscUlBQUksQ0FBQ21MLGNBQWMsR0FBRyxTQUFTeUQsb0JBQW9CQSxDQUFDakcsTUFBTSxFQUFFO0VBQzFELElBQUksQ0FBQ3ZELElBQUksQ0FBQyxDQUFDaUgsR0FBRyxFQUFFQyxFQUFFLEtBQUs7SUFDckIsTUFBTW9CLFFBQVEsR0FBRzFOLHFJQUFDLENBQUNzTSxFQUFFLENBQUM7SUFDdEIsTUFBTTdLLElBQUksR0FBR2lNLFFBQVEsQ0FBQ2pNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1QyxNQUFNMkcsT0FBTyxHQUFHLE9BQU9PLE1BQU0sS0FBSyxRQUFRLElBQUlBLE1BQU07SUFFcEQsSUFBSSxDQUFDbEgsSUFBSSxFQUFFO01BQ1RpTSxRQUFRLENBQUNqTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSTBKLGNBQWMsQ0FBQ21CLEVBQUUsRUFBRWxFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xFO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVEcEkscUlBQUksQ0FBQ21MLGNBQWMsQ0FBQzBELFdBQVcsR0FBRzFELGNBQWM7Ozs7Ozs7Ozs7Ozs7QUNySWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBDO0FBQ25CO0FBRXZCbkwscUlBQUksQ0FBQytDLE1BQU0sQ0FBQztFQUNWZ0ksbUJBQW1CQSxDQUFBLEVBQUc7SUFDcEIsSUFBSSxDQUFDM0YsSUFBSSxDQUFDLENBQUNpSCxHQUFHLEVBQUVDLEVBQUUsS0FBSztNQUNyQnRNLHFJQUFDLENBQUNzTSxFQUFFLENBQUMsQ0FBQ2xNLEVBQUUsQ0FBQyxPQUFPLEVBQUdtTSxHQUFHLElBQUs7UUFDekJBLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFFcEIsTUFBTUMsWUFBWSxHQUFHek0scUlBQUMsQ0FBQ3VNLEdBQUcsQ0FBQzlGLGFBQWEsQ0FBQztRQUV6QyxJQUFJZ0csWUFBWSxDQUFDdkcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1VBQ3hCbEcscUlBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDSSxFQUFFLENBQUMsT0FBTyxFQUFHb0csS0FBSyxJQUFLO1lBQy9DQSxLQUFLLENBQUNnRyxjQUFjLENBQUMsQ0FBQztZQUV0QmxNLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUdpTSxZQUFZLENBQUNoTSxJQUFJLENBQUMsTUFBTSxDQUFDO1VBQ2xELENBQUMsQ0FBQztRQUNKO1FBRUEsSUFBSWdNLFlBQVksQ0FBQ3ZHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtVQUM3QmxHLHFJQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLE9BQU8sRUFBR29HLEtBQUssSUFBSztZQUMvQ0EsS0FBSyxDQUFDZ0csY0FBYyxDQUFDLENBQUM7WUFFdEJDLFlBQVksQ0FBQzVELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzhELE1BQU0sQ0FBQyxDQUFDO1VBQ3ZDLENBQUMsQ0FBQztRQUNKO1FBRUEzTSxxSUFBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM0TSxLQUFLLENBQUMsTUFBTSxDQUFDO01BQ3hDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3hDSyxTQUFTeEcsYUFBYUEsQ0FBQ2QsS0FBSyxFQUFFO0VBQ25DLE1BQU13SixHQUFHLEdBQUc3TyxRQUFRLENBQUM4TyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3pDRCxHQUFHLENBQUNFLFdBQVcsR0FBRzFKLEtBQUs7RUFDdkIsT0FBT3dKLEdBQUcsQ0FBQ0csU0FBUyxDQUFDLENBQUM7QUFDeEI7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCO0FBRXZCalAscUlBQUksQ0FBQytDLE1BQU0sQ0FBQztFQUNWa0ksYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDN0YsSUFBSSxDQUFDLENBQUNpSCxHQUFHLEVBQUVDLEVBQUUsS0FBSztNQUNyQnRNLHFJQUFDLENBQUNzTSxFQUFFLENBQUMsQ0FBQ2xNLEVBQUUsQ0FBQyxRQUFRLEVBQUdvRyxLQUFLLElBQUs7UUFDNUJBLEtBQUssQ0FBQ2dHLGNBQWMsQ0FBQyxDQUFDO1FBRXRCLE1BQU01RSxNQUFNLEdBQUc1SCxxSUFBQyxDQUFDd0csS0FBSyxDQUFDQyxhQUFhLENBQUM7UUFDckMsTUFBTXlJLGFBQWEsR0FBR2xQLHFJQUFDLENBQUMsSUFBSTRILE1BQU0sQ0FBQ25HLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1FBRXJELElBQUltRyxNQUFNLENBQUMxQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7VUFDekJnSixhQUFhLENBQUM5QyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLE1BQU07VUFDTDhDLGFBQWEsQ0FBQy9DLElBQUksQ0FBQyxDQUFDO1FBQ3RCO01BQ0YsQ0FBQyxDQUFDO01BRUZuTSxxSUFBQyxDQUFDc00sRUFBRSxDQUFDLENBQUMvRSxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQzlCRjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ0U7QUFDRztBQUVFO0FBQ087QUFDTDtBQUVKO0FBQ2xCO0FBRTBCO0FBQ2pCO0FBRWlCO0FBQ0Y7QUFDQztBQUNFO0FBQ0E7QUFFViIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi8uLi92ZW5kb3Ivc3lsaXVzL3N5bGl1cy9zcmMvU3lsaXVzL0J1bmRsZS9TaG9wQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvU2hvcEJ1bmRsZS9SZXNvdXJjZXMvcHJpdmF0ZS9qcy9zaGltL3NoaW0tanF1ZXJ5LmpzIiwid2VicGFjazovLy8uLi8uLi92ZW5kb3Ivc3lsaXVzL3N5bGl1cy9zcmMvU3lsaXVzL0J1bmRsZS9TaG9wQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3NoaW0vc2hpbS1saWdodGJveC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvU2hvcEJ1bmRsZS9SZXNvdXJjZXMvcHJpdmF0ZS9qcy9zaGltL3NoaW0tc2VtYW50aWMtdWkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1Nob3BCdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uLi8uLi92ZW5kb3Ivc3lsaXVzL3N5bGl1cy9zcmMvU3lsaXVzL0J1bmRsZS9TaG9wQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1hZGRyZXNzLWJvb2suanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1Nob3BCdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLXByb3ZpbmNlLWZpZWxkLmpzIiwid2VicGFjazovLy8uLi8uLi92ZW5kb3Ivc3lsaXVzL3N5bGl1cy9zcmMvU3lsaXVzL0J1bmRsZS9TaG9wQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy12YXJpYW50LWltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvU2hvcEJ1bmRsZS9SZXNvdXJjZXMvcHJpdmF0ZS9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy8uLi8uLi92ZW5kb3Ivc3lsaXVzL3N5bGl1cy9zcmMvU3lsaXVzL0J1bmRsZS9VaUJ1bmRsZS9SZXNvdXJjZXMvcHJpdmF0ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1VpQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1VpQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1hcGktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uLi8uLi92ZW5kb3Ivc3lsaXVzL3N5bGl1cy9zcmMvU3lsaXVzL0J1bmRsZS9VaUJ1bmRsZS9SZXNvdXJjZXMvcHJpdmF0ZS9qcy9zeWxpdXMtYnVsay1hY3Rpb24tcmVxdWlyZS1jb25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1VpQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1jaGVjay1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1VpQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1mb3JtLWNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1VpQnVuZGxlL1Jlc291cmNlcy9wcml2YXRlL2pzL3N5bGl1cy1yZXF1aXJlLWNvbmZpcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvVWlCdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLXNhbml0aXplci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvVWlCdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvanMvc3lsaXVzLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvU2hvcEJ1bmRsZS9SZXNvdXJjZXMvcHJpdmF0ZS9zY3NzL3N0eWxlLnNjc3M/NjZjYSIsIndlYnBhY2s6Ly8vLi4vLi4vdmVuZG9yL3N5bGl1cy9zeWxpdXMvc3JjL1N5bGl1cy9CdW5kbGUvVWlCdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvc2Fzcy9tYWluLnNjc3M/YjU5NiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vLy4uLy4uL3ZlbmRvci9zeWxpdXMvc3lsaXVzL3NyYy9TeWxpdXMvQnVuZGxlL1Nob3BCdW5kbGUvUmVzb3VyY2VzL3ByaXZhdGUvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgU3lsaXVzIFNwLiB6IG8uby5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9wb3B1cCc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL3JhdGluZyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG5cbmltcG9ydCAnc3lsaXVzL3VpL2FwcCc7XG5pbXBvcnQgJ3N5bGl1cy91aS9zeWxpdXMtYXBpLWxvZ2luJztcbmltcG9ydCAnc3lsaXVzL3VpL3N5bGl1cy1hcGktdG9nZ2xlJztcblxuaW1wb3J0ICcuL3N5bGl1cy1hZGQtdG8tY2FydCc7XG5pbXBvcnQgJy4vc3lsaXVzLWFkZHJlc3MtYm9vayc7XG5pbXBvcnQgJy4vc3lsaXVzLXByb3ZpbmNlLWZpZWxkJztcbmltcG9ydCAnLi9zeWxpdXMtdmFyaWFudC1pbWFnZXMnO1xuaW1wb3J0ICcuL3N5bGl1cy12YXJpYW50cy1wcmljZXMnO1xuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICQoJy5wb3B1cC1qcycpLnBvcHVwKCk7XG5cbiAgJCgnLmNhcnQuYnV0dG9uJykucG9wdXAoe1xuICAgIHBvcHVwOiAkKCcuY2FydC5wb3B1cCcpLFxuICAgIG9uOiAnY2xpY2snLFxuICAgIG9uVW5wbGFjZWFibGUoKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICQoJyNzeWxpdXMtZ28tdG8tY2FydCcpLmF0dHIoJ2hyZWYnKTtcbiAgICB9LFxuICAgIHNpbGVudDogdHJ1ZSxcbiAgfSk7XG5cbiAgJCgnLnN0YXIucmF0aW5nJykucmF0aW5nKHtcbiAgICBmaXJlT25Jbml0OiB0cnVlLFxuICAgIG9uUmF0ZSh2YWx1ZSkge1xuICAgICAgJCgnW25hbWU9XCJzeWxpdXNfcHJvZHVjdF9yZXZpZXdbcmF0aW5nXVwiXTpjaGVja2VkJykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICAgJChgI3N5bGl1c19wcm9kdWN0X3Jldmlld19yYXRpbmdfJHt2YWx1ZSAtIDF9YCkuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfSxcbiAgfSk7XG5cbiAgJCgnI3N5bGl1c19jaGVja291dF9hZGRyZXNzX2N1c3RvbWVyX2VtYWlsJykuYXBpVG9nZ2xlKHtcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgdGhyb3R0bGU6IDE1MDAsXG5cbiAgICBiZWZvcmVTZW5kKHNldHRpbmdzKSB7XG4gICAgICBjb25zdCBlbWFpbCA9ICQoJyNzeWxpdXNfY2hlY2tvdXRfYWRkcmVzc19jdXN0b21lcl9lbWFpbCcpLnZhbCgpO1xuXG4gICAgICBpZiAoZW1haWwubGVuZ3RoIDwgMykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgICAgc2V0dGluZ3MuZGF0YSA9IHtcbiAgICAgICAgZW1haWwsXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gc2V0dGluZ3M7XG4gICAgfSxcblxuICAgIHN1Y2Nlc3NUZXN0KHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gJCgnI3N5bGl1c19jaGVja291dF9hZGRyZXNzX2N1c3RvbWVyX2VtYWlsJykudmFsKCkgPT09IHJlc3BvbnNlLnVzZXJuYW1lO1xuICAgIH0sXG4gIH0sICQoJyNzeWxpdXMtYXBpLWxvZ2luLWZvcm0nKSk7XG5cbiAgJCgnI3N5bGl1cy1hcGktbG9naW4nKS5hcGlMb2dpbih7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgdGhyb3R0bGU6IDUwMCxcbiAgfSk7XG5cbiAgJCgnI3N5bGl1cy1wcm9kdWN0LWFkZGluZy10by1jYXJ0JykuYWRkVG9DYXJ0KCk7XG5cbiAgJCgnI3N5bGl1cy1zaGlwcGluZy1hZGRyZXNzJykuYWRkcmVzc0Jvb2soKTtcbiAgJCgnI3N5bGl1cy1iaWxsaW5nLWFkZHJlc3MnKS5hZGRyZXNzQm9vaygpO1xuICAkKGRvY3VtZW50KS5wcm92aW5jZUZpZWxkKCk7XG4gICQoZG9jdW1lbnQpLnZhcmlhbnRQcmljZXMoKTtcbiAgJChkb2N1bWVudCkudmFyaWFudEltYWdlcygpO1xuXG4gICQoJ2JvZHknKS5maW5kKCdpbnB1dFthdXRvY29tcGxldGU9XCJvZmZcIl0nKS5wcm9wKCdhdXRvY29tcGxldGUnLCAnZGlzYWJsZScpO1xuXG4gICQoJy5jYXJvdXNlbCcpLnNsaWNrKHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcHJldkFycm93OiAkKCcuY2Fyb3VzZWwtbGVmdCcpLFxuICAgIG5leHRBcnJvdzogJCgnLmNhcm91c2VsLXJpZ2h0JyksXG4gICAgYXBwZW5kQXJyb3dzOiBmYWxzZSxcbiAgfSk7XG59KTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbndpbmRvdy4kID0gJDtcbndpbmRvdy5qUXVlcnkgPSAkO1xuIiwiaW1wb3J0IGxpZ2h0Ym94IGZyb20gJ2xpZ2h0Ym94Mic7XG5cbndpbmRvdy5saWdodGJveCA9IGxpZ2h0Ym94O1xuIiwiaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9hY2NvcmRpb24nO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9hcGknO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9jaGVja2JveCc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2NvbG9yaXplJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvZGltbWVyJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvZHJvcGRvd24nO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9lbWJlZCc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9tb2RhbCc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL25hZyc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL3BvcHVwJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvcHJvZ3Jlc3MnO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9yYXRpbmcnO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9zZWFyY2gnO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9zaGFwZSc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL3NpZGViYXInO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9zaXRlJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvc3RhdGUnO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9zdGlja3knO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy90YWInO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy90cmFuc2l0aW9uJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvdmlkZW8nO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy92aXNpYmlsaXR5JztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvdmlzaXQnO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgU3lsaXVzIFNwLiB6IG8uby5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9hcGknO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJC5mbi5leHRlbmQoe1xuICBhZGRUb0NhcnQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7XG4gICAgY29uc3QgdXJsID0gJChlbGVtZW50KS5hdHRyKCdhY3Rpb24nKTtcbiAgICBjb25zdCByZWRpcmVjdFVybCA9ICQoZWxlbWVudCkuZGF0YSgncmVkaXJlY3QnKTtcbiAgICBjb25zdCB2YWxpZGF0aW9uRWxlbWVudCA9ICQoJyNzeWxpdXMtY2FydC12YWxpZGF0aW9uLWVycm9yJyk7XG5cbiAgICBlbGVtZW50LmFwaSh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG9uOiAnc3VibWl0JyxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIHVybCxcbiAgICAgIGJlZm9yZVNlbmQoc2V0dGluZ3MpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgIHNldHRpbmdzLmRhdGEgPSBlbGVtZW50LnNlcmlhbGl6ZSgpO1xuXG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcbiAgICAgIH0sXG4gICAgICBvblN1Y2Nlc3MoKSB7XG4gICAgICAgIHZhbGlkYXRpb25FbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdFVybDtcbiAgICAgIH0sXG4gICAgICBvbkZhaWx1cmUocmVzcG9uc2UpIHtcbiAgICAgICAgdmFsaWRhdGlvbkVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcblxuICAgICAgICBPYmplY3QuZW50cmllcyhyZXNwb25zZS5lcnJvcnMuZXJyb3JzKS5mb3JFYWNoKChbLCBtZXNzYWdlXSkgPT4ge1xuICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICs9IG1lc3NhZ2U7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZGF0aW9uRWxlbWVudC5odG1sKHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbn0pO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgU3lsaXVzIFNwLiB6IG8uby5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9kcm9wZG93bic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBwYXJzZUtleSA9IGZ1bmN0aW9uIHBhcnNlS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoLyhfXFx3KS9nLCB3b3JkcyA9PiB3b3Jkc1sxXS50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbiQuZm4uZXh0ZW5kKHtcbiAgYWRkcmVzc0Jvb2soKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7XG4gICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudC5maW5kKCcuYWRkcmVzcy1ib29rLXNlbGVjdCcpO1xuICAgIGNvbnN0IGZpbmRCeU5hbWUgPSBmdW5jdGlvbiBmaW5kQnlOYW1lKG5hbWUpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmZpbmQoYFtuYW1lKj1cIlske3BhcnNlS2V5KG5hbWUpfV1cIl1gKTtcbiAgICB9O1xuXG4gICAgc2VsZWN0LmRyb3Bkb3duKHtcbiAgICAgIGZvcmNlU2VsZWN0aW9uOiBmYWxzZSxcblxuICAgICAgb25DaGFuZ2UobmFtZSwgdGV4dCwgY2hvaWNlKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvdmluY2VDb2RlLCBwcm92aW5jZU5hbWUgfSA9IGNob2ljZS5kYXRhKCk7XG4gICAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LnBhcmVudCgpLmZpbmQoJy5wcm92aW5jZS1jb250YWluZXInKS5nZXQoMCk7XG5cbiAgICAgICAgZWxlbWVudC5maW5kKCdpbnB1dDpub3QoW3R5cGU9XCJyYWRpb1wiXSk6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pLCBzZWxlY3QnKS5lYWNoKChpbmRleCwgaW5wdXQpID0+IHtcbiAgICAgICAgICAkKGlucHV0KS52YWwoJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhjaG9pY2UuZGF0YSgpKS5mb3JFYWNoKChbcHJvcGVydHksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmluZEJ5TmFtZShwcm9wZXJ0eSk7XG5cbiAgICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignY291bnRyeUNvZGUnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGZpZWxkLnZhbCh2YWx1ZSkuY2hhbmdlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4aXN0cyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJvdmluY2VDb2RlRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZUNvZGUnKTtcbiAgICAgICAgICAgICAgY29uc3QgcHJvdmluY2VOYW1lRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgICAgICAgICBpZiAoIXByb3ZpbmNlQ29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvdmluY2VDb2RlRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZUNvZGUgIT09ICcnIHx8IHByb3ZpbmNlQ29kZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgICBwcm92aW5jZUNvZGVGaWVsZC52YWwocHJvdmluY2VDb2RlKTtcblxuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvdmluY2VOYW1lRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZU5hbWUgIT09ICcnIHx8IHByb3ZpbmNlTmFtZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgICBwcm92aW5jZU5hbWVGaWVsZC52YWwocHJvdmluY2VOYW1lKTtcblxuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmlzKCdbdHlwZT1cInJhZGlvXCJdJykgfHwgZmllbGQuaXMoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKSkge1xuICAgICAgICAgICAgZmllbGQucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIGZpZWxkLmZpbHRlcihgW3ZhbHVlPVwiJHt2YWx1ZX1cIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZWxkLnZhbCh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG59KTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFN5bGl1cyBTcC4geiBvLm8uXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBzYW5pdGl6ZUlucHV0IH0gZnJvbSAnc3lsaXVzL3VpL3N5bGl1cy1zYW5pdGl6ZXInO1xuXG5jb25zdCBnZXRQcm92aW5jZUlucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRQcm92aW5jZUlucHV0VmFsdWUodmFsdWVTZWxlY3Rvcikge1xuICByZXR1cm4gdmFsdWVTZWxlY3RvciA9PSB1bmRlZmluZWQgPyAnJyA6IGB2YWx1ZT1cIiR7c2FuaXRpemVJbnB1dCh2YWx1ZVNlbGVjdG9yKX1cImA7XG59O1xuXG4kLmZuLmV4dGVuZCh7XG4gIHByb3ZpbmNlRmllbGQoKSB7XG4gICAgY29uc3QgY291bnRyeVNlbGVjdCA9ICQoJ3NlbGVjdFtuYW1lJD1cIltjb3VudHJ5Q29kZV1cIl0nKTtcblxuICAgIGNvdW50cnlTZWxlY3Qub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LnBhcmVudHMoJy5maWVsZCcpLm5leHQoJ2Rpdi5wcm92aW5jZS1jb250YWluZXInKTtcblxuICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RGaWVsZE5hbWUgPSBzZWxlY3QuYXR0cignbmFtZScpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZE5hbWUgPSBzZWxlY3QuYXR0cignbmFtZScpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkSWQgPSBzZWxlY3QuYXR0cignaWQnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGRJZCA9IHNlbGVjdC5hdHRyKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBjb25zdCBmb3JtID0gc2VsZWN0LnBhcmVudHMoJ2Zvcm0nKTtcblxuICAgICAgaWYgKHNlbGVjdC52YWwoKSA9PT0gJycgfHwgc2VsZWN0LnZhbCgpID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5mYWRlT3V0KCdzbG93JywgKCkgPT4ge1xuICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmh0bWwoJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmF0dHIoJ2RhdGEtbG9hZGluZycsIHRydWUpO1xuICAgICAgZm9ybS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAkLmdldChwcm92aW5jZUNvbnRhaW5lci5hdHRyKCdkYXRhLXVybCcpLCB7IGNvdW50cnlDb2RlOiBzZWxlY3QudmFsKCkgfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2UuY29udGVudCkge1xuICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmZhZGVPdXQoJ3Nsb3cnLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5odG1sKCcnKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cignZGF0YS1sb2FkaW5nJyk7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuY29udGVudC5pbmRleE9mKCdzZWxlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5mYWRlT3V0KCdzbG93JywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VTZWxlY3RWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZSgoXG4gICAgICAgICAgICAgICQocHJvdmluY2VDb250YWluZXIpLmZpbmQoJ3NlbGVjdCA+IG9wdGlvbltzZWxlY3RlZCQ9XCJzZWxlY3RlZFwiXScpLnZhbCgpXG4gICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaHRtbCgoXG4gICAgICAgICAgICAgIHJlc3BvbnNlLmNvbnRlbnRcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VTZWxlY3RGaWVsZE5hbWV9XCIke3Byb3ZpbmNlU2VsZWN0VmFsdWV9YClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnaWQ9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYGlkPVwiJHtwcm92aW5jZVNlbGVjdEZpZWxkSWR9XCJgKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCInLCAnb3B0aW9uIHZhbHVlPVwiXCInKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfWAsIGBvcHRpb24gJHtwcm92aW5jZVNlbGVjdFZhbHVlfVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcImApXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmFkZENsYXNzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucmVtb3ZlQXR0cignZGF0YS1sb2FkaW5nJyk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmZhZGVJbignZmFzdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgZm9ybS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvdmluY2VDb250YWluZXIuZmFkZU91dCgnc2xvdycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRWYWx1ZSA9IGdldFByb3ZpbmNlSW5wdXRWYWx1ZSgkKHByb3ZpbmNlQ29udGFpbmVyKS5maW5kKCdpbnB1dCcpLnZhbCgpKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaHRtbCgoXG4gICAgICAgICAgICAgIHJlc3BvbnNlLmNvbnRlbnRcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VJbnB1dEZpZWxkTmFtZX1cIiR7cHJvdmluY2VJbnB1dFZhbHVlfWApXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2lkPVwic3lsaXVzX2FkZHJlc3NfcHJvdmluY2VcIicsIGBpZD1cIiR7cHJvdmluY2VJbnB1dEZpZWxkSWR9XCJgKVxuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnJlbW92ZUF0dHIoJ2RhdGEtbG9hZGluZycpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5mYWRlSW4oJ2Zhc3QnLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGZvcm0ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChjb3VudHJ5U2VsZWN0LnZhbCgpICE9PSAnJykge1xuICAgICAgY291bnRyeVNlbGVjdC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9XG5cbiAgICBpZiAoJC50cmltKCQoJ2Rpdi5wcm92aW5jZS1jb250YWluZXInKS50ZXh0KCkpID09PSAnJykge1xuICAgICAgJCgnc2VsZWN0LmNvdW50cnktc2VsZWN0JykudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcHBpbmdBZGRyZXNzQ2hlY2tib3ggPSAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1bbmFtZSQ9XCJbZGlmZmVyZW50U2hpcHBpbmdBZGRyZXNzXVwiXScpO1xuICAgIGNvbnN0IHNoaXBwaW5nQWRkcmVzc0NvbnRhaW5lciA9ICQoJyNzeWxpdXMtc2hpcHBpbmctYWRkcmVzcy1jb250YWluZXInKTtcbiAgICBjb25zdCB0b2dnbGVTaGlwcGluZ0FkZHJlc3MgPSBmdW5jdGlvbiB0b2dnbGVTaGlwcGluZ0FkZHJlc3MoKSB7XG4gICAgICBzaGlwcGluZ0FkZHJlc3NDb250YWluZXIudG9nZ2xlKHNoaXBwaW5nQWRkcmVzc0NoZWNrYm94LnByb3AoJ2NoZWNrZWQnKSk7XG4gICAgfTtcbiAgICB0b2dnbGVTaGlwcGluZ0FkZHJlc3MoKTtcbiAgICBzaGlwcGluZ0FkZHJlc3NDaGVja2JveC5vbignY2hhbmdlJywgdG9nZ2xlU2hpcHBpbmdBZGRyZXNzKTtcbiAgfSxcbn0pO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgU3lsaXVzIFNwLiB6IG8uby5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgY2hhbmdlTWFpbkltYWdlID0gZnVuY3Rpb24gY2hhbmdlTWFpbkltYWdlKG5ld0ltYWdlRGl2KSB7XG4gIGNvbnN0IG1haW5JbWFnZUxpbmsgPSAkKCdhLnVpLmZsdWlkLmltYWdlJyk7XG4gIGNvbnN0IG1haW5JbWFnZSA9ICQoJ2EudWkuZmx1aWQuaW1hZ2UgPiBpbWcnKTtcblxuICBjb25zdCBuZXdJbWFnZSA9ICQobmV3SW1hZ2VEaXYpLmZpbmQoJ2ltZycpO1xuICBjb25zdCBuZXdJbWFnZUxpbmsgPSAkKG5ld0ltYWdlRGl2KS5maW5kKCdhJyk7XG5cbiAgaWYgKG5ld0ltYWdlLmxlbmd0aCA9PT0gMCAmJiBuZXdJbWFnZUxpbmsubGVuZ3RoID09PSAwKSB7XG4gICAgbWFpbkltYWdlLmF0dHIoJ3NyYycsICQoJ2RpdltkYXRhLXByb2R1Y3QtaW1hZ2VdJykuYXR0cignZGF0YS1wcm9kdWN0LWltYWdlJykpO1xuICAgIG5ld0ltYWdlTGluay5hdHRyKCdocmVmJywgJCgnZGl2W2RhdGEtcHJvZHVjdC1saW5rXScpLmF0dHIoJ2RhdGEtcHJvZHVjdC1saW5rJykpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbWFpbkltYWdlTGluay5hdHRyKCdocmVmJywgbmV3SW1hZ2VMaW5rLmF0dHIoJ2hyZWYnKSk7XG4gIG1haW5JbWFnZS5hdHRyKCdzcmMnLCBuZXdJbWFnZS5hdHRyKCdkYXRhLWxhcmdlLXRodW1ibmFpbCcpKTtcbn07XG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RPcHRpb25JbWFnZXMgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uSW1hZ2VzKCkge1xuICBsZXQgb3B0aW9ucyA9ICcnO1xuXG4gICQoJyNzeWxpdXMtcHJvZHVjdC1hZGRpbmctdG8tY2FydCBzZWxlY3QnKS5lYWNoKChpbmRleCwgc2VsZWN0KSA9PiB7XG4gICAgb3B0aW9ucyArPSBgJHskKHNlbGVjdCkuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCl9IGA7XG4gIH0pO1xuXG4gIGNvbnN0IGltYWdlc1dpdGhPcHRpb25zID0gW107XG4gIGNvbnN0IG9wdGlvbnNBcnJheSA9IG9wdGlvbnMudHJpbSgpLnNwbGl0KCcgJyk7XG5cbiAgJCgnW2RhdGEtdmFyaWFudC1vcHRpb25zXScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaW1hZ2VPcHRpb25zID0gJChlbGVtZW50KS5hdHRyKCdkYXRhLXZhcmlhbnQtb3B0aW9ucycpO1xuICAgIGNvbnN0IGltYWdlSGFzT3B0aW9ucyA9IG9wdGlvbnNBcnJheS5ldmVyeShvcHRpb24gPT4gaW1hZ2VPcHRpb25zLmluZGV4T2Yob3B0aW9uKSA+IC0xKTtcblxuICAgIGlmIChpbWFnZUhhc09wdGlvbnMpIHtcbiAgICAgIGltYWdlc1dpdGhPcHRpb25zLnB1c2goJChlbGVtZW50KS5jbG9zZXN0KCdkaXYudWkuaW1hZ2UnKSk7XG4gICAgfVxuICB9KTtcblxuICBjaGFuZ2VNYWluSW1hZ2UoaW1hZ2VzV2l0aE9wdGlvbnMuc2hpZnQoKSk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0T3B0aW9uQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdE9wdGlvbkNoYW5nZSgpIHtcbiAgJCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaGFuZGxlUHJvZHVjdE9wdGlvbkltYWdlcygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVByb2R1Y3RWYXJpYW50SW1hZ2VzID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRJbWFnZXModmFyaWFudEVsZW1lbnQpIHtcbiAgY29uc3QgdmFyaWFudENvZGUgPSAkKHZhcmlhbnRFbGVtZW50KS5hdHRyKCd2YWx1ZScpO1xuICBjb25zdCBpbWFnZXNXaXRoVmFyaWFudENvZGUgPSBbXTtcblxuICAkKGBbZGF0YS12YXJpYW50LWNvZGUqPVwiJHt2YXJpYW50Q29kZX1cIl1gKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgIGltYWdlc1dpdGhWYXJpYW50Q29kZS5wdXNoKCQoZWxlbWVudCkuY2xvc2VzdCgnZGl2LnVpLmltYWdlJykpO1xuICB9KTtcblxuICBjaGFuZ2VNYWluSW1hZ2UoaW1hZ2VzV2l0aFZhcmlhbnRDb2RlLnNoaWZ0KCkpO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0VmFyaWFudENoYW5nZSgpIHtcbiAgJCgnW25hbWU9XCJzeWxpdXNfYWRkX3RvX2NhcnRbY2FydEl0ZW1dW3ZhcmlhbnRdXCJdJykub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgIGhhbmRsZVByb2R1Y3RWYXJpYW50SW1hZ2VzKCQoZXZlbnQuY3VycmVudFRhcmdldCkpO1xuICB9KTtcbn07XG5cbiQuZm4uZXh0ZW5kKHtcbiAgdmFyaWFudEltYWdlcygpIHtcbiAgICBpZiAoJCgnW2RhdGEtdmFyaWFudC1vcHRpb25zXScpLmxlbmd0aCA+IDApIHtcbiAgICAgIGhhbmRsZVByb2R1Y3RPcHRpb25JbWFnZXMoKTtcbiAgICAgIGhhbmRsZVByb2R1Y3RPcHRpb25DaGFuZ2UoKTtcbiAgICB9IGVsc2UgaWYgKCQoJ1tkYXRhLXZhcmlhbnQtY29kZV0nKS5sZW5ndGggPiAwKSB7XG4gICAgICBoYW5kbGVQcm9kdWN0VmFyaWFudEltYWdlcygkKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKSk7XG4gICAgICBoYW5kbGVQcm9kdWN0VmFyaWFudENoYW5nZSgpO1xuICAgIH1cbiAgfSxcbn0pO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBTeWxpdXMgcGFja2FnZS5cbiAqXG4gKiAoYykgU3lsaXVzIFNwLiB6IG8uby5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZnVuY3Rpb24gZm9ybWF0QXBwbGllZFByb21vdGlvbnMoYXBwbGllZFByb21vdGlvbnMpIHtcbiAgbGV0IGFwcGxpZWRQcm9tb3Rpb25zRWxlbWVudCA9ICcnO1xuICAkKCcjYXBwbGllZFByb21vdGlvbnMnKS5odG1sKCcnKTtcblxuICBpZiAoYXBwbGllZFByb21vdGlvbnMgIT09ICdbXScpIHtcbiAgICAkLmVhY2goYXBwbGllZFByb21vdGlvbnMsIChpbmRleCwgcHJvbW90aW9uKSA9PiB7XG4gICAgICBhcHBsaWVkUHJvbW90aW9uc0VsZW1lbnQgKz0gYDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWwgcHJvbW90aW9uX2xhYmVsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB1aSBzbWFsbCBzeWxpdXNfY2F0YWxvZ19wcm9tb3Rpb25cIj4ke3Byb21vdGlvbi5sYWJlbH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC10ZWFsXCI+JHtwcm9tb3Rpb24uZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgPC9kaXY+YDtcbiAgICB9KTtcbiAgICAkKCcjYXBwbGllZFByb21vdGlvbnMnKS5odG1sKGFwcGxpZWRQcm9tb3Rpb25zRWxlbWVudCk7XG4gIH1cbn1cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgJCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgbGV0IHNlbGVjdG9yID0gJyc7XG5cbiAgICAkKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3QgPSAkKGVsZW1lbnQpO1xuICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0LmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpO1xuICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmF0dHIoJ2RhdGEtb3B0aW9uJyl9PVwiJHtvcHRpb259XCJdYDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByaWNlID0gJCgnI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZmluZChzZWxlY3RvcikuYXR0cignZGF0YS12YWx1ZScpO1xuICAgIGNvbnN0IG9yaWdpbmFsUHJpY2UgPSAkKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5maW5kKHNlbGVjdG9yKS5hdHRyKCdkYXRhLW9yaWdpbmFsLXByaWNlJyk7XG4gICAgbGV0IGFwcGxpZWRQcm9tb3Rpb25zID0gJCgnI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZmluZChzZWxlY3RvcikuYXR0cignZGF0YS1hcHBsaWVkX3Byb21vdGlvbnMnKTtcbiAgICBpZiAoYXBwbGllZFByb21vdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYXBwbGllZFByb21vdGlvbnMgPSBKU09OLnBhcnNlKGFwcGxpZWRQcm9tb3Rpb25zKTtcbiAgICB9XG5cbiAgICBpZiAocHJpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgJCgnI3Byb2R1Y3QtcHJpY2UnKS50ZXh0KHByaWNlKTtcbiAgICAgICQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuXG4gICAgICBpZiAob3JpZ2luYWxQcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICQoJyNwcm9kdWN0LW9yaWdpbmFsLXByaWNlJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZScpLmh0bWwoYDxkZWw+JHtvcmlnaW5hbFByaWNlfTwvZGVsPmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3Byb2R1Y3Qtb3JpZ2luYWwtcHJpY2UnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfVxuXG4gICAgICBmb3JtYXRBcHBsaWVkUHJvbW90aW9ucyhhcHBsaWVkUHJvbW90aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyNwcm9kdWN0LXByaWNlJykudGV4dCgkKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5hdHRyKCdkYXRhLXVuYXZhaWxhYmxlLXRleHQnKSk7XG4gICAgICAkKCdidXR0b25bdHlwZT1zdWJtaXRdJykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb3dlc3RQcmljZUJlZm9yZURpc2NvdW50ID0gJCgnI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZmluZChzZWxlY3RvcikuYXR0cignZGF0YS1sb3dlc3QtcHJpY2UtYmVmb3JlLWRpc2NvdW50Jyk7XG5cbiAgICBpZiAobG93ZXN0UHJpY2VCZWZvcmVEaXNjb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAkKCcjbG93ZXN0LXByaWNlLWJlZm9yZS1kaXNjb3VudCcpXG4gICAgICAgIC5odG1sKGxvd2VzdFByaWNlQmVmb3JlRGlzY291bnQpXG4gICAgICAgIC5jc3MoeyAnd2hpdGUtc3BhY2UnOiAnbm93cmFwJywgZGlzcGxheTogJ2lubGluZScgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyNsb3dlc3QtcHJpY2UtYmVmb3JlLWRpc2NvdW50JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCkge1xuICAkKCdbbmFtZT1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcHJpY2VSb3cgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudHMoJ3RyJykuZmluZCgnLnN5bGl1cy1wcm9kdWN0LXZhcmlhbnQtcHJpY2UnKTtcbiAgICBjb25zdCBwcmljZSA9IHByaWNlUm93LnRleHQoKTtcbiAgICBjb25zdCBvcmlnaW5hbFByaWNlID0gcHJpY2VSb3cuYXR0cignZGF0YS1vcmlnaW5hbC1wcmljZScpO1xuICAgIGxldCBhcHBsaWVkUHJvbW90aW9ucyA9IHByaWNlUm93LmF0dHIoJ2RhdGEtYXBwbGllZC1wcm9tb3Rpb25zJyk7XG4gICAgaWYgKGFwcGxpZWRQcm9tb3Rpb25zICE9PSAnW10nKSB7XG4gICAgICBhcHBsaWVkUHJvbW90aW9ucyA9IEpTT04ucGFyc2UoYXBwbGllZFByb21vdGlvbnMpO1xuICAgIH1cblxuICAgICQoJyNwcm9kdWN0LXByaWNlJykudGV4dChwcmljZSk7XG4gICAgZm9ybWF0QXBwbGllZFByb21vdGlvbnMoYXBwbGllZFByb21vdGlvbnMpO1xuXG4gICAgaWYgKG9yaWdpbmFsUHJpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgJCgnI3Byb2R1Y3Qtb3JpZ2luYWwtcHJpY2UnKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lJykuaHRtbChgPGRlbD4ke29yaWdpbmFsUHJpY2V9PC9kZWw+YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyNwcm9kdWN0LW9yaWdpbmFsLXByaWNlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb3dlc3RQcmljZUJlZm9yZURpc2NvdW50ID0gcHJpY2VSb3cuYXR0cignZGF0YS1sb3dlc3QtcHJpY2UtYmVmb3JlLWRpc2NvdW50Jyk7XG5cbiAgICBpZiAobG93ZXN0UHJpY2VCZWZvcmVEaXNjb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAkKCcjbG93ZXN0LXByaWNlLWJlZm9yZS1kaXNjb3VudCcpXG4gICAgICAgIC5odG1sKGxvd2VzdFByaWNlQmVmb3JlRGlzY291bnQpXG4gICAgICAgIC5jc3MoeyAnd2hpdGUtc3BhY2UnOiAnbm93cmFwJywgZGlzcGxheTogJ2lubGluZScgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyNsb3dlc3QtcHJpY2UtYmVmb3JlLWRpc2NvdW50JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuJC5mbi5leHRlbmQoe1xuICB2YXJpYW50UHJpY2VzKCkge1xuICAgIGlmICgkKCcjc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKS5sZW5ndGggPiAwKSB7XG4gICAgICBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpO1xuICAgIH0gZWxzZSBpZiAoJCgnI3N5bGl1cy1wcm9kdWN0LXZhcmlhbnRzJykubGVuZ3RoID4gMCkge1xuICAgICAgaGFuZGxlUHJvZHVjdFZhcmlhbnRzQ2hhbmdlKCk7XG4gICAgfVxuICB9LFxufSk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2FjY29yZGlvbic7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2NoZWNrYm94JztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvZGltbWVyJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvZHJvcGRvd24nO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9yYXRpbmcnO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvY29tcG9uZW50cy9zaWRlYmFyJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvdGFiJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvdHJhbnNpdGlvbic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgJy4vc3lsaXVzLWJ1bGstYWN0aW9uLXJlcXVpcmUtY29uZmlybWF0aW9uJztcbmltcG9ydCAnLi9zeWxpdXMtZm9ybS1jb2xsZWN0aW9uJztcbmltcG9ydCAnLi9zeWxpdXMtcmVxdWlyZS1jb25maXJtYXRpb24nO1xuaW1wb3J0ICcuL3N5bGl1cy10b2dnbGUnO1xuaW1wb3J0ICcuL3N5bGl1cy1jaGVjay1hbGwnO1xuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICQoJyNzaWRlYmFyJykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgJCgnI3NpZGViYXInKS5zaWRlYmFyKCdhdHRhY2ggZXZlbnRzJywgJyNzaWRlYmFyLXRvZ2dsZScsICd0b2dnbGUnKTtcbiAgJCgnI3NpZGViYXInKS5zaWRlYmFyKCdzZXR0aW5nJywge1xuICAgIGRpbVBhZ2U6IGZhbHNlLFxuICAgIGNsb3NhYmxlOiBmYWxzZSxcbiAgfSk7XG5cbiAgJCgnLnVpLmNoZWNrYm94JykuY2hlY2tib3goKTtcbiAgJCgnLnVpLmFjY29yZGlvbicpLmFjY29yZGlvbigpO1xuICAkKCcudWkubWVudSAuZHJvcGRvd24nKS5kcm9wZG93bih7IGFjdGlvbjogJ2hpZGUnIH0pO1xuICAkKCcudWkuaW5saW5lLmRyb3Bkb3duJykuZHJvcGRvd24oKTtcbiAgJCgnLmxpbmsudWkuZHJvcGRvd24nKS5kcm9wZG93bih7IGFjdGlvbjogJ2hpZGUnIH0pO1xuICAkKCcuYnV0dG9uLnVpLmRyb3Bkb3duJykuZHJvcGRvd24oeyBhY3Rpb246ICdoaWRlJyB9KTtcbiAgJCgnLnVpLmZsdWlkLnNlYXJjaC5zZWxlY3Rpb24udWkuZHJvcGRvd24nKS5kcm9wZG93bigpO1xuICAkKCcudWkudGFidWxhci5tZW51IC5pdGVtLCAuc3lsaXVzLXRhYnVsYXItZm9ybSAubWVudSAuaXRlbScpLnRhYigpO1xuICAkKCcudWkuY2FyZCAuZGltbWFibGUuaW1hZ2UsIC51aS5jYXJkcyAuY2FyZCAuZGltbWFibGUuaW1hZ2UnKS5kaW1tZXIoeyBvbjogJ2hvdmVyJyB9KTtcbiAgJCgnLnVpLnJhdGluZycpLnJhdGluZygnZGlzYWJsZScpO1xuXG4gICQoJ2Zvcm0ubG9hZGFibGUgYnV0dG9uW3R5cGU9c3VibWl0XScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnZm9ybScpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gIH0pO1xuICAkKCcubG9hZGFibGUuYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnbG9hZGluZycpO1xuICB9KTtcbiAgJCgnLm1lc3NhZ2UgLmNsb3NlJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCcubWVzc2FnZScpLnRyYW5zaXRpb24oJ2ZhZGUnKTtcbiAgfSk7XG5cbiAgJCgnW2RhdGEtcmVxdWlyZXMtY29uZmlybWF0aW9uXScpLnJlcXVpcmVDb25maXJtYXRpb24oKTtcbiAgJCgnW2RhdGEtYnVsay1hY3Rpb24tcmVxdWlyZXMtY29uZmlybWF0aW9uXScpLmJ1bGtBY3Rpb25SZXF1aXJlQ29uZmlybWF0aW9uKCk7XG4gICQoJ1tkYXRhLXRvZ2dsZXNdJykudG9nZ2xlRWxlbWVudCgpO1xuICAkKCdbZGF0YS1qcy1idWxrLWNoZWNrYm94ZXNdJykuY2hlY2tBbGwoKTtcblxuICAkKCcuc3BlY2lhbC5jYXJkcyAuaW1hZ2UnKS5kaW1tZXIoe1xuICAgIG9uOiAnaG92ZXInLFxuICB9KTtcblxuICAkKCdbZGF0YS1mb3JtLXR5cGU9XCJjb2xsZWN0aW9uXCJdJykuQ29sbGVjdGlvbkZvcm0oKTtcblxuICAkKCdbZGF0YS1qcy1kaXNhYmxlXScpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgJGN1cnJlbnQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgJChkb2N1bWVudCkuZmluZCgkY3VycmVudC5hdHRyKCdkYXRhLWpzLWRpc2FibGUnKSkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gIH0pO1xufSk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2FwaSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kLmZuLmV4dGVuZCh7XG4gIGFwaUxvZ2luKHtcbiAgICBtZXRob2QsXG4gICAgZGF0YVR5cGUgPSAnanNvbicsXG4gICAgdGhyb3R0bGUgPSAwLFxuICAgIGRlYnVnID0gZmFsc2UsXG4gIH0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcztcbiAgICBjb25zdCBwYXNzd29yZEZpZWxkID0gZWxlbWVudC5maW5kKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgICBjb25zdCBlbWFpbEZpZWxkID0gZWxlbWVudC5maW5kKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgICBjb25zdCBjc3JmVG9rZW5GaWVsZCA9IGVsZW1lbnQuZmluZCgnaW5wdXRbdHlwZT1cImhpZGRlblwiXScpO1xuICAgIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGVsZW1lbnQuZmluZCgnLmJ1dHRvbicpO1xuICAgIGNvbnN0IHZhbGlkYXRpb25GaWVsZCA9IGVsZW1lbnQuZmluZCgnLnJlZC5sYWJlbCcpO1xuXG4gICAgc2lnbkluQnV0dG9uLmFwaSh7XG4gICAgICBtZXRob2QsXG4gICAgICBkYXRhVHlwZSxcbiAgICAgIHRocm90dGxlLFxuICAgICAgZGVidWcsXG5cbiAgICAgIGJlZm9yZVNlbmQoc2V0dGluZ3MpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgIHNldHRpbmdzLmRhdGEgPSB7XG4gICAgICAgICAgX3VzZXJuYW1lOiBlbWFpbEZpZWxkLnZhbCgpLFxuICAgICAgICAgIF9wYXNzd29yZDogcGFzc3dvcmRGaWVsZC52YWwoKSxcbiAgICAgICAgICBbY3NyZlRva2VuRmllbGQuYXR0cignbmFtZScpXTogY3NyZlRva2VuRmllbGQudmFsKCksXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xuICAgICAgfSxcblxuICAgICAgc3VjY2Vzc1Rlc3QocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnN1Y2Nlc3M7XG4gICAgICB9LFxuXG4gICAgICBvblN1Y2Nlc3MoKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH0sXG5cbiAgICAgIG9uRmFpbHVyZShyZXNwb25zZSkge1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuaHRtbChyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG59KTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFN5bGl1cyBTcC4geiBvLm8uXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvYXBpJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQuZm4uZXh0ZW5kKHtcbiAgYXBpVG9nZ2xlKHtcbiAgICBtZXRob2QsXG4gICAgZGF0YVR5cGUgPSAnanNvbicsXG4gICAgdGhyb3R0bGUgPSAwLFxuICAgIGRlYnVnID0gZmFsc2UsXG4gICAgYmVmb3JlU2VuZCxcbiAgICBzdWNjZXNzVGVzdCxcbiAgfSwgdG9nZ2xlYWJsZUVsZW1lbnQsIGlzSGlkZGVuID0gdHJ1ZSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzO1xuXG4gICAgaWYgKGlzSGlkZGVuKSB7XG4gICAgICB0b2dnbGVhYmxlRWxlbWVudC5oaWRlKCk7XG4gICAgfVxuXG4gICAgZWxlbWVudC5hcGkoe1xuICAgICAgbWV0aG9kLFxuICAgICAgZGF0YVR5cGUsXG4gICAgICB0aHJvdHRsZSxcbiAgICAgIGRlYnVnLFxuXG4gICAgICBiZWZvcmVTZW5kLFxuICAgICAgc3VjY2Vzc1Rlc3QsXG5cbiAgICAgIG9uU3VjY2VzcygpIHtcbiAgICAgICAgdG9nZ2xlYWJsZUVsZW1lbnQuc2hvdygpO1xuICAgICAgfSxcblxuICAgICAgb25GYWlsdXJlKCkge1xuICAgICAgICB0b2dnbGVhYmxlRWxlbWVudC5oaWRlKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxufSk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQuZm4uZXh0ZW5kKHtcbiAgYnVsa0FjdGlvblJlcXVpcmVDb25maXJtYXRpb24oKSB7XG4gICAgdGhpcy5lYWNoKChpZHgsIGVsKSA9PiB7XG4gICAgICAkKGVsKS5vbignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGFjdGlvbkJ1dHRvbiA9ICQoZXZ0LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIGlmIChhY3Rpb25CdXR0b24uaXMoJ2EnKSkge1xuICAgICAgICAgICQoJyNjb25maXJtYXRpb24tYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFjdGlvbkJ1dHRvbi5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uQnV0dG9uLmlzKCdidXR0b24nKSkge1xuICAgICAgICAgICQoJyNjb25maXJtYXRpb24tYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gYWN0aW9uQnV0dG9uLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgICAgICQoJ2lucHV0LmJ1bGstc2VsZWN0LWNoZWNrYm94OmNoZWNrZWQnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAkKGA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZHNbXVwiIHZhbHVlPVwiJHtlbGVtZW50LnZhbHVlfVwiPmApLmFwcGVuZFRvKGZvcm0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcjY29uZmlybWF0aW9uLW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxufSk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBTeWxpdXMgU3AuIHogby5vLlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kLmZuLmV4dGVuZCh7XG4gIGNoZWNrQWxsKCkge1xuICAgIHRoaXMuZWFjaCgoaWR4LCBlbCkgPT4ge1xuICAgICAgY29uc3QgJGNoZWNrYm94QWxsID0gJChlbCk7XG4gICAgICBjb25zdCAkY2hlY2tib3hlcyA9ICQoJGNoZWNrYm94QWxsLmF0dHIoJ2RhdGEtanMtYnVsay1jaGVja2JveGVzJykpO1xuICAgICAgY29uc3QgJGJ1dHRvbnMgPSAkKCRjaGVja2JveEFsbC5hdHRyKCdkYXRhLWpzLWJ1bGstYnV0dG9ucycpKTtcblxuICAgICAgY29uc3QgaXNBbnlDaGVja2VkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAkY2hlY2tib3hlcy5lYWNoKChpLCBjaGVja2JveCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgYnV0dG9uc1Byb3BSZWZyZXNoID0gKCkgPT4ge1xuICAgICAgICAkYnV0dG9ucy5maW5kKCdidXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsICFpc0FueUNoZWNrZWQoKSk7XG4gICAgICB9O1xuXG4gICAgICAkY2hlY2tib3hBbGwub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgJGNoZWNrYm94ZXMucHJvcCgnY2hlY2tlZCcsICQodGhpcykuaXMoJzpjaGVja2VkJykpO1xuICAgICAgICBidXR0b25zUHJvcFJlZnJlc2goKTtcbiAgICAgIH0pO1xuXG4gICAgICAkY2hlY2tib3hlcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAkY2hlY2tib3hBbGwucHJvcCgnY2hlY2tlZCcsIGlzQW55Q2hlY2tlZCgpKTtcbiAgICAgICAgYnV0dG9uc1Byb3BSZWZyZXNoKCk7XG4gICAgICB9KTtcblxuICAgICAgYnV0dG9uc1Byb3BSZWZyZXNoKCk7XG4gICAgfSk7XG4gIH0sXG59KTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFN5bGl1cyBTcC4geiBvLm8uXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogQ29sbGVjdGlvbiBGb3JtIHBsdWdpblxuICpcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY2xhc3MgQ29sbGVjdGlvbkZvcm0ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5hZGRJdGVtID0gdGhpcy5hZGRJdGVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVJdGVtID0gdGhpcy51cGRhdGVJdGVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZWxldGVJdGVtID0gdGhpcy5jb25zdHJ1Y3Rvci5kZWxldGVJdGVtO1xuICAgIHRoaXMudXBkYXRlUHJvdG90eXBlID0gdGhpcy51cGRhdGVQcm90b3R5cGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgIHRoaXMuJGxpc3QgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLWZvcm0tY29sbGVjdGlvbj1cImxpc3RcIl06Zmlyc3QnKTtcbiAgICB0aGlzLmNvdW50ID0gdGhpcy4kbGlzdC5jaGlsZHJlbigpLmxlbmd0aDtcbiAgICB0aGlzLmxhc3RDaG9pY2UgPSBudWxsO1xuICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrJywgJ1tkYXRhLWZvcm0tY29sbGVjdGlvbj1cImFkZFwiXTpsYXN0JywgdGhpcy5hZGRJdGVtKTtcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdjbGljaycsICdbZGF0YS1mb3JtLWNvbGxlY3Rpb249XCJkZWxldGVcIl0nLCB0aGlzLmRlbGV0ZUl0ZW0pO1xuICAgIHRoaXMuJGVsZW1lbnQub24oJ2NoYW5nZScsICdbZGF0YS1mb3JtLWNvbGxlY3Rpb249XCJ1cGRhdGVcIl0nLCB0aGlzLnVwZGF0ZUl0ZW0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnW2RhdGEtZm9ybS1wcm90b3R5cGU9XCJ1cGRhdGVcIl0nLCB0aGlzLnVwZGF0ZVByb3RvdHlwZSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NvbGxlY3Rpb24tZm9ybS1hZGQnLCAoZXZlbnQsIGFkZGVkRWxlbWVudCkgPT4ge1xuICAgICAgJChhZGRlZEVsZW1lbnQpLmZpbmQoJ1tkYXRhLWZvcm0tdHlwZT1cImNvbGxlY3Rpb25cIl0nKS5Db2xsZWN0aW9uRm9ybSgpO1xuICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignZG9tLW5vZGUtaW5zZXJ0ZWQnLCBbJChhZGRlZEVsZW1lbnQpXSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgaXRlbSB0byB0aGUgY29sbGVjdGlvbi5cbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBhZGRJdGVtKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBwcm90b3R5cGUgPSB0aGlzLiRlbGVtZW50LmRhdGEoJ3Byb3RvdHlwZScpO1xuICAgIGxldCBwcm90b3R5cGVOYW1lID0gbmV3IFJlZ0V4cCh0aGlzLiRlbGVtZW50LmRhdGEoJ3Byb3RvdHlwZS1uYW1lJyksICdnJyk7XG5cbiAgICBwcm90b3R5cGUgPSBwcm90b3R5cGUucmVwbGFjZShwcm90b3R5cGVOYW1lLCB0aGlzLmNvdW50KTtcblxuICAgIHRoaXMuJGxpc3QuYXBwZW5kKHByb3RvdHlwZSk7XG4gICAgdGhpcy5jb3VudCA9IHRoaXMuY291bnQgKyAxO1xuXG4gICAgJChkb2N1bWVudCkudHJpZ2dlcignY29sbGVjdGlvbi1mb3JtLWFkZCcsIFt0aGlzLiRsaXN0LmNoaWxkcmVuKCkubGFzdCgpXSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGl0ZW0gZnJvbSB0aGUgY29sbGVjdGlvblxuICAgKi9cbiAgdXBkYXRlSXRlbShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IHVybCA9ICRlbGVtZW50LmRhdGEoJ2Zvcm0tdXJsJyk7XG4gICAgY29uc3QgdmFsdWUgPSAkZWxlbWVudC52YWwoKTtcbiAgICBjb25zdCAkY29udGFpbmVyID0gJGVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtZm9ybS1jb2xsZWN0aW9uPVwiaXRlbVwiXScpO1xuICAgIGNvbnN0IGluZGV4ID0gJGNvbnRhaW5lci5kYXRhKCdmb3JtLWNvbGxlY3Rpb24taW5kZXgnKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9ICRjb250YWluZXIuZGF0YSgnZm9ybS1jb2xsZWN0aW9uLWluZGV4Jyk7XG5cbiAgICBpZiAodXJsKSB7XG4gICAgICAkY29udGFpbmVyLmxvYWQodXJsLCB7IGlkOiB2YWx1ZSwgcG9zaXRpb24gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCAkcHJvdG90eXBlID0gdGhpcy4kZWxlbWVudC5maW5kKGBbZGF0YS1mb3JtLXByb3RvdHlwZT1cIiR7dmFsdWV9XCJdYCk7XG4gICAgICBsZXQgcHJvdG90eXBlTmFtZSA9IG5ldyBSZWdFeHAoJHByb3RvdHlwZS5kYXRhKCdzdWJwcm90b3R5cGUtbmFtZScpLCAnZycpO1xuXG4gICAgICBsZXQgcHJvdG90eXBlID0gJHByb3RvdHlwZS52YWwoKS5yZXBsYWNlKHByb3RvdHlwZU5hbWUsIGluZGV4KTtcblxuICAgICAgJGNvbnRhaW5lci5yZXBsYWNlV2l0aChwcm90b3R5cGUpO1xuICAgIH1cbiAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdjb2xsZWN0aW9uLWZvcm0tdXBkYXRlJywgWyQoZXZlbnQuY3VycmVudFRhcmdldCldKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgaXRlbSBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgc3RhdGljIGRlbGV0ZUl0ZW0oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgLmNsb3Nlc3QoJ1tkYXRhLWZvcm0tY29sbGVjdGlvbj1cIml0ZW1cIl0nKVxuICAgICAgLnJlbW92ZSgpO1xuXG4gICAgJChkb2N1bWVudCkudHJpZ2dlcignY29sbGVjdGlvbi1mb3JtLWRlbGV0ZScsIFskKGV2ZW50LmN1cnJlbnRUYXJnZXQpXSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBwcm90b3R5cGVcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICB1cGRhdGVQcm90b3R5cGUoZXZlbnQpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBsZXQgcHJvdG90eXBlTmFtZSA9ICR0YXJnZXQudmFsKCk7XG5cbiAgICBpZiAoJHRhcmdldC5kYXRhKCdmb3JtLXByb3RvdHlwZS1wcmVmaXgnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm90b3R5cGVOYW1lID0gJHRhcmdldC5kYXRhKCdmb3JtLXByb3RvdHlwZS1wcmVmaXgnKSArIHByb3RvdHlwZU5hbWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdENob2ljZSAhPT0gbnVsbCAmJiB0aGlzLmxhc3RDaG9pY2UgIT09IHByb3RvdHlwZU5hbWUpIHtcbiAgICAgIHRoaXMuJGxpc3QuaHRtbCgnJyk7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0Q2hvaWNlID0gcHJvdG90eXBlTmFtZTtcblxuICAgIHRoaXMuJGVsZW1lbnQuZGF0YSgncHJvdG90eXBlJywgdGhpcy4kZWxlbWVudC5maW5kKGBbZGF0YS1mb3JtLXByb3RvdHlwZT1cIiR7cHJvdG90eXBlTmFtZX1cIl1gKS52YWwoKSk7XG4gIH1cbn1cblxuLypcbiAqIFBsdWdpbiBkZWZpbml0aW9uXG4gKi9cblxuJC5mbi5Db2xsZWN0aW9uRm9ybSA9IGZ1bmN0aW9uIENvbGxlY3Rpb25Gb3JtUGx1Z2luKG9wdGlvbikge1xuICB0aGlzLmVhY2goKGlkeCwgZWwpID0+IHtcbiAgICBjb25zdCAkZWxlbWVudCA9ICQoZWwpO1xuICAgIGNvbnN0IGRhdGEgPSAkZWxlbWVudC5kYXRhKCdjb2xsZWN0aW9uRm9ybScpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyAmJiBvcHRpb247XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICRlbGVtZW50LmRhdGEoJ2NvbGxlY3Rpb25Gb3JtJywgbmV3IENvbGxlY3Rpb25Gb3JtKGVsLCBvcHRpb25zKSk7XG4gICAgfVxuICB9KTtcbn07XG5cbiQuZm4uQ29sbGVjdGlvbkZvcm0uQ29uc3RydWN0b3IgPSBDb2xsZWN0aW9uRm9ybTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFN5bGl1cyBTcC4geiBvLm8uXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvbW9kYWwnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJC5mbi5leHRlbmQoe1xuICByZXF1aXJlQ29uZmlybWF0aW9uKCkge1xuICAgIHRoaXMuZWFjaCgoaWR4LCBlbCkgPT4ge1xuICAgICAgJChlbCkub24oJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBhY3Rpb25CdXR0b24gPSAkKGV2dC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICBpZiAoYWN0aW9uQnV0dG9uLmlzKCdhJykpIHtcbiAgICAgICAgICAkKCcjY29uZmlybWF0aW9uLWJ1dHRvbicpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhY3Rpb25CdXR0b24uYXR0cignaHJlZicpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbkJ1dHRvbi5pcygnYnV0dG9uJykpIHtcbiAgICAgICAgICAkKCcjY29uZmlybWF0aW9uLWJ1dHRvbicpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJyNjb25maXJtYXRpb24tbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG59KTtcbiIsImV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUlucHV0KGlucHV0KSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYudGV4dENvbnRlbnQgPSBpbnB1dDtcbiAgcmV0dXJuIGRpdi5pbm5lckhUTUw7IC8vIENvbnZlcnRzIHRleHQgY29udGVudCB0byBwbGFpbiBIVE1MLCBzdHJpcHBpbmcgYW55IHNjcmlwdHNcbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFN5bGl1cyBTcC4geiBvLm8uXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQuZm4uZXh0ZW5kKHtcbiAgdG9nZ2xlRWxlbWVudCgpIHtcbiAgICB0aGlzLmVhY2goKGlkeCwgZWwpID0+IHtcbiAgICAgICQoZWwpLm9uKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gJChgIyR7dG9nZ2xlLmRhdGEoJ3RvZ2dsZXMnKX1gKTtcblxuICAgICAgICBpZiAodG9nZ2xlLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgdGFyZ2V0RWxlbWVudC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0RWxlbWVudC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkKGVsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9zaG9wL1wiOyIsImltcG9ydCAnLi9qcy9zaGltL3NoaW0tanF1ZXJ5JztcbmltcG9ydCAnLi9qcy9zaGltL3NoaW0tbGlnaHRib3gnO1xuaW1wb3J0ICcuL2pzL3NoaW0vc2hpbS1zZW1hbnRpYy11aSc7XG5cbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLmNzcyc7XG5pbXBvcnQgJ2xpZ2h0Ym94Mi9kaXN0L2Nzcy9saWdodGJveC5taW4uY3NzJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzJztcblxuaW1wb3J0ICdzeWxpdXMvdWktcmVzb3VyY2VzL2pzL2FwcCc7XG5pbXBvcnQgJy4vanMvYXBwJztcblxuaW1wb3J0ICdzeWxpdXMvdWktcmVzb3VyY2VzL3Nhc3MvbWFpbi5zY3NzJztcbmltcG9ydCAnLi9zY3NzL3N0eWxlLnNjc3MnO1xuXG5pbXBvcnQgJ3N5bGl1cy91aS1yZXNvdXJjZXMvaW1nL2F2YXRhci5wbmcnO1xuaW1wb3J0ICdzeWxpdXMvdWktcmVzb3VyY2VzL2ltZy9sb2dvLnBuZyc7XG5pbXBvcnQgJ3N5bGl1cy91aS1yZXNvdXJjZXMvaW1nLzUweDUwLnBuZyc7XG5pbXBvcnQgJ3N5bGl1cy91aS1yZXNvdXJjZXMvaW1nLzIwMHgyMDAucG5nJztcbmltcG9ydCAnc3lsaXVzL3VpLXJlc291cmNlcy9pbWcvNDAweDMwMC5wbmcnO1xuXG5pbXBvcnQgJy4vaW1nL2hvbWVwYWdlLWJhbm5lci5qcGcnO1xuaW1wb3J0ICcuL2ltZy9zeWxpdXMtcGx1cy1iYW5uZXIucG5nJztcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInBvcHVwIiwib24iLCJvblVucGxhY2VhYmxlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYXR0ciIsInNpbGVudCIsInJhdGluZyIsImZpcmVPbkluaXQiLCJvblJhdGUiLCJ2YWx1ZSIsInJlbW92ZUF0dHIiLCJhcGlUb2dnbGUiLCJkYXRhVHlwZSIsIm1ldGhvZCIsInRocm90dGxlIiwiYmVmb3JlU2VuZCIsInNldHRpbmdzIiwiZW1haWwiLCJ2YWwiLCJsZW5ndGgiLCJkYXRhIiwic3VjY2Vzc1Rlc3QiLCJyZXNwb25zZSIsInVzZXJuYW1lIiwiYXBpTG9naW4iLCJhZGRUb0NhcnQiLCJhZGRyZXNzQm9vayIsInByb3ZpbmNlRmllbGQiLCJ2YXJpYW50UHJpY2VzIiwidmFyaWFudEltYWdlcyIsImZpbmQiLCJwcm9wIiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicHJldkFycm93IiwibmV4dEFycm93IiwiYXBwZW5kQXJyb3dzIiwialF1ZXJ5IiwibGlnaHRib3giLCJmbiIsImV4dGVuZCIsImVsZW1lbnQiLCJ1cmwiLCJyZWRpcmVjdFVybCIsInZhbGlkYXRpb25FbGVtZW50IiwiYXBpIiwiY2FjaGUiLCJzZXJpYWxpemUiLCJvblN1Y2Nlc3MiLCJhZGRDbGFzcyIsIm9uRmFpbHVyZSIsInJlbW92ZUNsYXNzIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJPYmplY3QiLCJlbnRyaWVzIiwiZXJyb3JzIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJodG1sIiwicGFyc2VLZXkiLCJrZXkiLCJyZXBsYWNlIiwid29yZHMiLCJ0b1VwcGVyQ2FzZSIsInNlbGVjdCIsImZpbmRCeU5hbWUiLCJuYW1lIiwiZHJvcGRvd24iLCJmb3JjZVNlbGVjdGlvbiIsIm9uQ2hhbmdlIiwidGV4dCIsImNob2ljZSIsInByb3ZpbmNlQ29kZSIsInByb3ZpbmNlTmFtZSIsInByb3ZpbmNlQ29udGFpbmVyIiwicGFyZW50IiwiZ2V0IiwiZWFjaCIsImluZGV4IiwiaW5wdXQiLCJwcm9wZXJ0eSIsImZpZWxkIiwiaW5kZXhPZiIsImNoYW5nZSIsImV4aXN0cyIsInNldEludGVydmFsIiwicHJvdmluY2VDb2RlRmllbGQiLCJwcm92aW5jZU5hbWVGaWVsZCIsImhhc0F0dHJpYnV0ZSIsInVuZGVmaW5lZCIsImNsZWFySW50ZXJ2YWwiLCJpcyIsImZpbHRlciIsInNhbml0aXplSW5wdXQiLCJnZXRQcm92aW5jZUlucHV0VmFsdWUiLCJ2YWx1ZVNlbGVjdG9yIiwiY291bnRyeVNlbGVjdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInBhcmVudHMiLCJuZXh0IiwicHJvdmluY2VTZWxlY3RGaWVsZE5hbWUiLCJwcm92aW5jZUlucHV0RmllbGROYW1lIiwicHJvdmluY2VTZWxlY3RGaWVsZElkIiwicHJvdmluY2VJbnB1dEZpZWxkSWQiLCJmb3JtIiwiZmFkZU91dCIsImNvdW50cnlDb2RlIiwiY29udGVudCIsInByb3ZpbmNlU2VsZWN0VmFsdWUiLCJmYWRlSW4iLCJwcm92aW5jZUlucHV0VmFsdWUiLCJ0cmlnZ2VyIiwidHJpbSIsInNoaXBwaW5nQWRkcmVzc0NoZWNrYm94Iiwic2hpcHBpbmdBZGRyZXNzQ29udGFpbmVyIiwidG9nZ2xlU2hpcHBpbmdBZGRyZXNzIiwidG9nZ2xlIiwiY2hhbmdlTWFpbkltYWdlIiwibmV3SW1hZ2VEaXYiLCJtYWluSW1hZ2VMaW5rIiwibWFpbkltYWdlIiwibmV3SW1hZ2UiLCJuZXdJbWFnZUxpbmsiLCJoYW5kbGVQcm9kdWN0T3B0aW9uSW1hZ2VzIiwib3B0aW9ucyIsImltYWdlc1dpdGhPcHRpb25zIiwib3B0aW9uc0FycmF5Iiwic3BsaXQiLCJpbWFnZU9wdGlvbnMiLCJpbWFnZUhhc09wdGlvbnMiLCJldmVyeSIsIm9wdGlvbiIsInB1c2giLCJjbG9zZXN0Iiwic2hpZnQiLCJoYW5kbGVQcm9kdWN0T3B0aW9uQ2hhbmdlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRJbWFnZXMiLCJ2YXJpYW50RWxlbWVudCIsInZhcmlhbnRDb2RlIiwiaW1hZ2VzV2l0aFZhcmlhbnRDb2RlIiwiaGFuZGxlUHJvZHVjdFZhcmlhbnRDaGFuZ2UiLCJmb3JtYXRBcHBsaWVkUHJvbW90aW9ucyIsImFwcGxpZWRQcm9tb3Rpb25zIiwiYXBwbGllZFByb21vdGlvbnNFbGVtZW50IiwicHJvbW90aW9uIiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsImhhbmRsZVByb2R1Y3RPcHRpb25zQ2hhbmdlIiwic2VsZWN0b3IiLCJwcmljZSIsIm9yaWdpbmFsUHJpY2UiLCJKU09OIiwicGFyc2UiLCJjc3MiLCJsb3dlc3RQcmljZUJlZm9yZURpc2NvdW50IiwiZGlzcGxheSIsImhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSIsInByaWNlUm93Iiwic2lkZWJhciIsImRpbVBhZ2UiLCJjbG9zYWJsZSIsImNoZWNrYm94IiwiYWNjb3JkaW9uIiwiYWN0aW9uIiwidGFiIiwiZGltbWVyIiwidHJhbnNpdGlvbiIsInJlcXVpcmVDb25maXJtYXRpb24iLCJidWxrQWN0aW9uUmVxdWlyZUNvbmZpcm1hdGlvbiIsInRvZ2dsZUVsZW1lbnQiLCJjaGVja0FsbCIsIkNvbGxlY3Rpb25Gb3JtIiwiZSIsIiRjdXJyZW50IiwiZGVidWciLCJwYXNzd29yZEZpZWxkIiwiZW1haWxGaWVsZCIsImNzcmZUb2tlbkZpZWxkIiwic2lnbkluQnV0dG9uIiwidmFsaWRhdGlvbkZpZWxkIiwiX3VzZXJuYW1lIiwiX3Bhc3N3b3JkIiwic3VjY2VzcyIsInJlbW92ZSIsInJlbG9hZCIsInRvZ2dsZWFibGVFbGVtZW50IiwiaXNIaWRkZW4iLCJoaWRlIiwic2hvdyIsImlkeCIsImVsIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJhY3Rpb25CdXR0b24iLCJhcHBlbmRUbyIsInN1Ym1pdCIsIm1vZGFsIiwiJGNoZWNrYm94QWxsIiwiJGNoZWNrYm94ZXMiLCIkYnV0dG9ucyIsImlzQW55Q2hlY2tlZCIsImNoZWNrZWQiLCJpIiwiYnV0dG9uc1Byb3BSZWZyZXNoIiwiY29uc3RydWN0b3IiLCJhZGRJdGVtIiwiYmluZCIsInVwZGF0ZUl0ZW0iLCJkZWxldGVJdGVtIiwidXBkYXRlUHJvdG90eXBlIiwiJGVsZW1lbnQiLCIkbGlzdCIsImNvdW50IiwiY2hpbGRyZW4iLCJsYXN0Q2hvaWNlIiwiYWRkZWRFbGVtZW50IiwicHJvdG90eXBlIiwicHJvdG90eXBlTmFtZSIsIlJlZ0V4cCIsImFwcGVuZCIsImxhc3QiLCIkY29udGFpbmVyIiwicG9zaXRpb24iLCJsb2FkIiwiaWQiLCIkcHJvdG90eXBlIiwicmVwbGFjZVdpdGgiLCIkdGFyZ2V0IiwiQ29sbGVjdGlvbkZvcm1QbHVnaW4iLCJDb25zdHJ1Y3RvciIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsInRhcmdldEVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9