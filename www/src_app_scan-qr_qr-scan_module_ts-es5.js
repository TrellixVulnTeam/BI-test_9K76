(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_scan-qr_qr-scan_module_ts"], {
    /***/
    7160:
    /*!*************************************************************************!*\
      !*** ./node_modules/@ionic-native/qr-scanner/__ivy_ngcc__/ngx/index.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QRScanner": function QRScanner() {
          return (
            /* binding */
            _QRScanner
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/core */
      60399);

      var _QRScanner =
      /** @class */
      function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(QRScanner, _super);

        function QRScanner() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        QRScanner.prototype.prepare = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "prepare", {
            "callbackStyle": "node"
          }, arguments);
        };

        QRScanner.prototype.scan = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "scan", {
            "callbackStyle": "node",
            "observable": true,
            "clearFunction": "cancelScan"
          }, arguments);
        };

        QRScanner.prototype.show = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "show", {}, arguments);
        };

        QRScanner.prototype.hide = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hide", {}, arguments);
        };

        QRScanner.prototype.enableLight = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "enableLight", {
            "callbackStyle": "node"
          }, arguments);
        };

        QRScanner.prototype.destroy = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "destroy", {}, arguments);
        };

        QRScanner.prototype.disableLight = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "disableLight", {
            "callbackStyle": "node"
          }, arguments);
        };

        QRScanner.prototype.useFrontCamera = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "useFrontCamera", {
            "callbackStyle": "node"
          }, arguments);
        };

        QRScanner.prototype.useBackCamera = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "useBackCamera", {
            "callbackStyle": "node"
          }, arguments);
        };

        QRScanner.prototype.useCamera = function (camera) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "useCamera", {
            "callbackStyle": "node"
          }, arguments);
        };

        QRScanner.prototype.pausePreview = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "pausePreview", {}, arguments);
        };

        QRScanner.prototype.resumePreview = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "resumePreview", {}, arguments);
        };

        QRScanner.prototype.getStatus = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getStatus", {}, arguments);
        };

        QRScanner.prototype.openSettings = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "openSettings", {
            "sync": true
          }, arguments);
        };

        QRScanner.pluginName = "QRScanner";
        QRScanner.plugin = "cordova-plugin-qrscanner";
        QRScanner.pluginRef = "QRScanner";
        QRScanner.repo = "https://github.com/bitpay/cordova-plugin-qrscanner";
        QRScanner.platforms = ["Android", "Browser", "iOS", "Windows"];

        QRScanner.ɵfac = /*@__PURE__*/function () {
          var ɵQRScanner_BaseFactory;
          return function QRScanner_Factory(t) {
            return (ɵQRScanner_BaseFactory || (ɵQRScanner_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](QRScanner)))(t || QRScanner);
          };
        }();

        QRScanner.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
          token: QRScanner,
          factory: function factory(t) {
            return QRScanner.ɵfac(t);
          }
        });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QRScanner, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
          }], null, null);
        })();

        return QRScanner;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvcXItc2Nhbm5lci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUNsQztBQUdTLElBNkdzQiw2QkFBaUI7QUFBQztBQUU5QjtBQUdoQjtBQUFNLElBR1AsMkJBQU87QUFLOEIsSUFRckMsd0JBQUk7QUFLdUYsSUFJM0Ysd0JBQUk7QUFLSyxJQUlULHdCQUFJO0FBS0ssSUFNVCwrQkFBVztBQU1MLElBR04sMkJBQU87QUFLSyxJQU1aLGdDQUFZO0FBTVEsSUFLcEIsa0NBQWM7QUFNUyxJQUt2QixpQ0FBYTtBQU1FLElBTWYsNkJBQVMsYUFBQyxNQUFjO0FBS0csSUFJM0IsZ0NBQVk7QUFLSyxJQUlqQixpQ0FBYTtBQUtLLElBSWxCLDZCQUFTO0FBS0ssSUFLZCxnQ0FBWTtBQUUyRDtBQUF3QztBQUFtRDtBQUF1QztBQUEyRTs2Q0FoSnJSLFVBQVU7Ozs7MEJBQ0w7QUFBQyxvQkFuSFA7QUFBRSxFQW1INkIsaUJBQWlCO0FBQy9DLFNBRFksU0FBUztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUVJTY2FubmVyU3RhdHVzIHtcbiAgLyoqXG4gICAqIE9uIGlPUyBhbmQgQW5kcm9pZCA2LjArLCBjYW1lcmEgYWNjZXNzIGlzIGdyYW50ZWQgYXQgcnVudGltZSBieSB0aGUgdXNlciAoYnkgY2xpY2tpbmcgXCJBbGxvd1wiIGF0IHRoZSBkaWFsb2cpLlxuICAgKiBUaGUgYXV0aG9yaXplZCBwcm9wZXJ0eSBpcyBhIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBvbmx5IHdoZW4gdGhlIHVzZXIgaGFzIGFsbG93ZWQgY2FtZXJhIGFjY2VzcyB0byB5b3VyIGFwcCAoQVZBdXRob3JpemF0aW9uU3RhdHVzLkF1dGhvcml6ZWQpLlxuICAgKiBPbiBwbGF0Zm9ybXMgd2l0aCBwZXJtaXNzaW9ucyBncmFudGVkIGF0IGluc3RhbGwgKEFuZHJvaWQgcHJlLTYuMCwgV2luZG93cyBQaG9uZSkgdGhpcyBwcm9wZXJ0eSBpcyBhbHdheXMgdHJ1ZS5cbiAgICovXG4gIGF1dGhvcml6ZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBpZiB0aGUgdXNlciBwZXJtYW5lbnRseSBkZW5pZWQgY2FtZXJhIGFjY2VzcyB0byB0aGUgYXBwIChBVkF1dGhvcml6YXRpb25TdGF0dXMuRGVuaWVkKS5cbiAgICogT25jZSBkZW5pZWQsIGNhbWVyYSBhY2Nlc3MgY2FuIG9ubHkgYmUgZ2FpbmVkIGJ5IHJlcXVlc3RpbmcgdGhlIHVzZXIgY2hhbmdlIHRoZWlyIGRlY2lzaW9uIChjb25zaWRlciBvZmZlcmluZyBhIGxpbmsgdG8gdGhlIHNldHRpbmcgdmlhIG9wZW5TZXR0aW5ncygpKS5cbiAgICovXG4gIGRlbmllZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIGlmIHRoZSB1c2VyIGlzIHVuYWJsZSB0byBncmFudCBwZXJtaXNzaW9ucyBkdWUgdG8gcGFyZW50YWwgY29udHJvbHMsIG9yZ2FuaXphdGlvbiBzZWN1cml0eSBjb25maWd1cmF0aW9uIHByb2ZpbGVzLCBvciBzaW1pbGFyIHJlYXNvbnMuXG4gICAqL1xuICByZXN0cmljdGVkOiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgaWYgUVJTY2FubmVyIGlzIHByZXBhcmVkIHRvIGNhcHR1cmUgdmlkZW8gYW5kIHJlbmRlciBpdCB0byB0aGUgdmlldy5cbiAgICovXG4gIHByZXBhcmVkOiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgd2hlbiB0aGUgcHJldmlldyBsYXllciBpcyB2aXNpYmxlIChhbmQgb24gYWxsIHBsYXRmb3JtcyBidXQgYnJvd3NlciwgdGhlIG5hdGl2ZSB3ZWJ2aWV3IGJhY2tncm91bmQgaXMgdHJhbnNwYXJlbnQpLlxuICAgKi9cbiAgc2hvd2luZzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIGlmIFFSU2Nhbm5lciBpcyBhY3RpdmVseSBzY2FubmluZyBmb3IgYSBRUiBjb2RlLlxuICAgKi9cbiAgc2Nhbm5pbmc6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBpZiBRUlNjYW5uZXIgaXMgZGlzcGxheWluZyBhIGxpdmUgcHJldmlldyBmcm9tIHRoZSBkZXZpY2UncyBjYW1lcmEuIFNldCB0byBmYWxzZSB3aGVuIHRoZSBwcmV2aWV3IGlzIHBhdXNlZC5cbiAgICovXG4gIHByZXZpZXdpbmc6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBpZiB0aGUgbGlnaHQgaXMgZW5hYmxlZC5cbiAgICovXG4gIGxpZ2h0RW5hYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIG9ubHkgaWYgdGhlIHVzZXJzJyBvcGVyYXRpbmcgc3lzdGVtIGlzIGFibGUgdG8gUVJTY2FubmVyLm9wZW5TZXR0aW5ncygpLlxuICAgKi9cbiAgY2FuT3BlblNldHRpbmdzOiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgb25seSBpZiB0aGUgdXNlcnMnIGRldmljZSBjYW4gZW5hYmxlIGEgbGlnaHQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgY3VycmVudENhbWVyYS5cbiAgICovXG4gIGNhbkVuYWJsZUxpZ2h0OiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgb25seSBpZiB0aGUgY3VycmVudCBkZXZpY2UgXCJzaG91bGRcIiBoYXZlIGEgZnJvbnQgY2FtZXJhLlxuICAgKiBUaGUgY2FtZXJhIG1heSBzdGlsbCBub3QgYmUgY2FwdHVyYWJsZSwgd2hpY2ggd291bGQgZW1pdCBlcnJvciBjb2RlIDMsIDQsIG9yIDUgd2hlbiB0aGUgc3dpdGNoIGlzIGF0dGVtcHRlZC5cbiAgICogKE9uIHRoZSBicm93c2VyIHBsYXRmb3JtLCB0aGlzIHZhbHVlIGlzIGZhbHNlIHVudGlsIHRoZSBwcmVwYXJlIG1ldGhvZCBpcyBjYWxsZWQuKVxuICAgKi9cbiAgY2FuQ2hhbmdlQ2FtZXJhOiBib29sZWFuO1xuICAvKipcbiAgICogQSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudENhbWVyYS4gMCBpcyB0aGUgYmFjayBjYW1lcmEsIDEgaXMgdGhlIGZyb250LlxuICAgKi9cbiAgY3VycmVudENhbWVyYTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIFFSIFNjYW5uZXJcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIGZhc3QsIGVuZXJneSBlZmZpY2llbnQsIGhpZ2hseS1jb25maWd1cmFibGUgUVIgY29kZSBzY2FubmVyIGZvciBDb3Jkb3ZhIGFwcHMuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1xcnNjYW5uZXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbUVIgU2Nhbm5lciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2JpdHBheS9jb3Jkb3ZhLXBsdWdpbi1xcnNjYW5uZXIpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUVJTY2FubmVyLCBRUlNjYW5uZXJTdGF0dXMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3FyLXNjYW5uZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBxclNjYW5uZXI6IFFSU2Nhbm5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gT3B0aW9uYWxseSByZXF1ZXN0IHRoZSBwZXJtaXNzaW9uIGVhcmx5XG4gKiB0aGlzLnFyU2Nhbm5lci5wcmVwYXJlKClcbiAqICAgLnRoZW4oKHN0YXR1czogUVJTY2FubmVyU3RhdHVzKSA9PiB7XG4gKiAgICAgIGlmIChzdGF0dXMuYXV0aG9yaXplZCkge1xuICogICAgICAgIC8vIGNhbWVyYSBwZXJtaXNzaW9uIHdhcyBncmFudGVkXG4gKlxuICpcbiAqICAgICAgICAvLyBzdGFydCBzY2FubmluZ1xuICogICAgICAgIGxldCBzY2FuU3ViID0gdGhpcy5xclNjYW5uZXIuc2NhbigpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gKiAgICAgICAgICBjb25zb2xlLmxvZygnU2Nhbm5lZCBzb21ldGhpbmcnLCB0ZXh0KTtcbiAqXG4gKiAgICAgICAgICB0aGlzLnFyU2Nhbm5lci5oaWRlKCk7IC8vIGhpZGUgY2FtZXJhIHByZXZpZXdcbiAqICAgICAgICAgIHNjYW5TdWIudW5zdWJzY3JpYmUoKTsgLy8gc3RvcCBzY2FubmluZ1xuICogICAgICAgIH0pO1xuICpcbiAqICAgICAgfSBlbHNlIGlmIChzdGF0dXMuZGVuaWVkKSB7XG4gKiAgICAgICAgLy8gY2FtZXJhIHBlcm1pc3Npb24gd2FzIHBlcm1hbmVudGx5IGRlbmllZFxuICogICAgICAgIC8vIHlvdSBtdXN0IHVzZSBRUlNjYW5uZXIub3BlblNldHRpbmdzKCkgbWV0aG9kIHRvIGd1aWRlIHRoZSB1c2VyIHRvIHRoZSBzZXR0aW5ncyBwYWdlXG4gKiAgICAgICAgLy8gdGhlbiB0aGV5IGNhbiBncmFudCB0aGUgcGVybWlzc2lvbiBmcm9tIHRoZXJlXG4gKiAgICAgIH0gZWxzZSB7XG4gKiAgICAgICAgLy8gcGVybWlzc2lvbiB3YXMgZGVuaWVkLCBidXQgbm90IHBlcm1hbmVudGx5LiBZb3UgY2FuIGFzayBmb3IgcGVybWlzc2lvbiBhZ2FpbiBhdCBhIGxhdGVyIHRpbWUuXG4gKiAgICAgIH1cbiAqICAgfSlcbiAqICAgLmNhdGNoKChlOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBpcycsIGUpKTtcbiAqXG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogUVJTY2FubmVyU3RhdHVzXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUVJTY2FubmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcXJzY2FubmVyJyxcbiAgcGx1Z2luUmVmOiAnUVJTY2FubmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iaXRwYXkvY29yZG92YS1wbHVnaW4tcXJzY2FubmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRUlNjYW5uZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb24gdG8gdXNlIFFSIHNjYW5uZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gIH0pXG4gIHByZXBhcmUoKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCB0aGlzIG1ldGhvZCB0byBlbmFibGUgc2Nhbm5pbmcuIFlvdSBtdXN0IHRoZW4gY2FsbCB0aGUgYHNob3dgIG1ldGhvZCB0byBtYWtlIHRoZSBjYW1lcmEgcHJldmlldyB2aXNpYmxlLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPHN0cmluZz59IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBzY2FubmVkIHRleHQuIFVuc3Vic2NyaWJlIGZyb20gdGhlIG9ic2VydmFibGUgdG8gc3RvcCBzY2FubmluZy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnY2FuY2VsU2NhbicsXG4gIH0pXG4gIHNjYW4oKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgbmF0aXZlIHdlYnZpZXcgdG8gaGF2ZSBhIHRyYW5zcGFyZW50IGJhY2tncm91bmQsIHRoZW4gc2V0cyB0aGUgYmFja2dyb3VuZCBvZiB0aGUgPGJvZHk+IGFuZCA8aHRtbD4gRE9NIGVsZW1lbnRzIHRvIHRyYW5zcGFyZW50LCBhbGxvd2luZyB0aGUgd2VidmlldyB0byByZS1yZW5kZXIgd2l0aCB0aGUgdHJhbnNwYXJlbnQgYmFja2dyb3VuZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvdygpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBuYXRpdmUgd2VidmlldyB0byBiZSBvcGFxdWUgd2l0aCBhIHdoaXRlIGJhY2tncm91bmQsIGNvdmVyaW5nIHRoZSB2aWRlbyBwcmV2aWV3LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoaWRlKCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUgZGV2aWNlJ3MgbGlnaHQgKGZvciBzY2FubmluZyBpbiBsb3ctbGlnaHQgZW52aXJvbm1lbnRzKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gIH0pXG4gIGVuYWJsZUxpZ2h0KCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHNjYW5uZXIgaW5zdGFuY2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlc3Ryb3koKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgZGV2aWNlJ3MgbGlnaHQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gIH0pXG4gIGRpc2FibGVMaWdodCgpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgZnJvbnQgY2FtZXJhXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gIH0pXG4gIHVzZUZyb250Q2FtZXJhKCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSBiYWNrIGNhbWVyYVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnLFxuICB9KVxuICB1c2VCYWNrQ2FtZXJhKCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjYW1lcmEgdG8gYmUgdXNlZC5cbiAgICogQHBhcmFtIGNhbWVyYSB7bnVtYmVyfSBQcm92aWRlIGAwYCBmb3IgYmFjayBjYW1lcmEsIGFuZCBgMWAgZm9yIGZyb250IGNhbWVyYS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdub2RlJyxcbiAgfSlcbiAgdXNlQ2FtZXJhKGNhbWVyYTogbnVtYmVyKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGF1c2VzIHRoZSB2aWRlbyBwcmV2aWV3IG9uIHRoZSBjdXJyZW50IGZyYW1lIGFuZCBwYXVzZXMgc2Nhbm5pbmcuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF1c2VQcmV2aWV3KCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3Vtc2UgdGhlIHZpZGVvIHByZXZpZXcgYW5kIHJlc3VtZXMgc2Nhbm5pbmcuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzdW1lUHJldmlldygpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHBlcm1pc3Npb24gc3RhdHVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3RhdHVzKCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHNldHRpbmdzIHRvIGVkaXQgYXBwIHBlcm1pc3Npb25zLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG9wZW5TZXR0aW5ncygpOiB2b2lkIHt9XG59XG4iXX0=

      /***/

    },

    /***/
    35982:
    /*!***************************************************!*\
      !*** ./src/app/scan-qr/qr-scan-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QrScanRoutingModule": function QrScanRoutingModule() {
          return (
            /* binding */
            _QrScanRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _qr_scan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./qr-scan */
      90287);

      var routes = [{
        path: '',
        component: _qr_scan__WEBPACK_IMPORTED_MODULE_0__.QrScan
      }];

      var _QrScanRoutingModule = function QrScanRoutingModule() {
        _classCallCheck(this, QrScanRoutingModule);
      };

      _QrScanRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _QrScanRoutingModule);
      /***/
    },

    /***/
    83614:
    /*!*******************************************!*\
      !*** ./src/app/scan-qr/qr-scan.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _qr_scan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./qr-scan */
      90287);
      /* harmony import */


      var _qr_scan_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./qr-scan-routing.module */
      35982);

      var _HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _qr_scan_routing_module__WEBPACK_IMPORTED_MODULE_1__.QrScanRoutingModule],
        declarations: [_qr_scan__WEBPACK_IMPORTED_MODULE_0__.QrScan]
      })], _HomePageModule);
      /***/
    },

    /***/
    90287:
    /*!************************************!*\
      !*** ./src/app/scan-qr/qr-scan.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QrScan": function QrScan() {
          return (
            /* binding */
            _QrScan
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_qr_scan_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./qr-scan.html */
      36271);
      /* harmony import */


      var _qr_scan_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./qr-scan.scss */
      63525);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/qr-scanner/ngx */
      7160);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _service_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/http */
      11356);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _QrScan = /*#__PURE__*/function () {
        function QrScan(qrScanner, httpRequest, camera) {
          _classCallCheck(this, QrScan);

          this.qrScanner = qrScanner;
          this.httpRequest = httpRequest;
          this.camera = camera;
          this.showScanBtn = true;
          this.showTakePic = false;
          this.basicUrl = '';
          this.status = '';
          this.uploadImageName = '';
          this.username = '';
          this.password = '';
        }

        _createClass(QrScan, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('on init');
          }
        }, {
          key: "scan",
          value: function scan() {
            var _this = this;

            this.qrScanner.prepare().then(function (status) {
              if (status.authorized) {
                // start scanning, from ionic document
                var scanSub = _this.qrScanner.scan().subscribe(function (text) {
                  if (text && typeof text.result === 'string') {
                    var tempArr = text.result.split(';');
                    _this.basicUrl = 'https:' + tempArr[0].split(':')[2];
                    _this.username = tempArr[1].split(':')[1];
                    _this.password = tempArr[2].split(':')[1];

                    _this.httpRequest.get("".concat(_this.basicUrl, "api/v1.0/status"), {}, function (res) {
                      _this.status = res.status;

                      if (res.status === 'ok') {
                        _this.showScanBtn = false; // switch show btn

                        _this.showTakePic = true;
                      } else {
                        _this.showTakePic = false;
                      }
                    });

                    _this.qrScanner.hide(); // hide camera preview


                    scanSub.unsubscribe(); // stop scanning
                  }
                });
              } else if (status.denied) {// camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
              } else {// permission was denied, but not permanently. You can ask for permission again at a later time.
              }
            })["catch"](function (e) {
              return console.log('Error is', e);
            });
          }
        }, {
          key: "checkStatus",
          value: function checkStatus() {
            var _this2 = this;

            this.httpRequest.get("".concat(this.basicUrl, "api/v1.0/status"), function (res) {
              _this2.showScanBtn = false; // switch show btn

              _this2.status = res.status;

              if (res.status === 'ok') {
                _this2.showTakePic = true;
              } else {
                _this2.showTakePic = false;
              }
            });
          }
        }, {
          key: "takePic",
          value: function takePic() {
            var _this3 = this;

            var options = {
              quality: 50,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              var base64Image = "data:image/jpeg;base64,".concat(imageData);
              var url = "".concat(_this3.basicUrl, "/api/v1.0/ranking");
              var param = {
                "picture": base64Image
              };
              var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                  'Content-type': 'application/json;charset=utf-8',
                  // set auth, but seems doesn't work on browser
                  'Authorization': 'Basic ' + btoa("".concat(_this3.username, ":").concat(_this3.password))
                })
              }; // no idea how to limit pic size on ionic

              _this3.httpRequest.post(url, param, httpOptions, function (res) {
                if (res) {
                  _this3.uploadImageName = "".concat(_this3.basicUrl, "/api/v1.0/image/").concat(res.file);
                }
              });
            }, function (err) {});
          }
        }]);

        return QrScan;
      }();

      _QrScan.ctorParameters = function () {
        return [{
          type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.QRScanner
        }, {
          type: _service_http__WEBPACK_IMPORTED_MODULE_4__.HttpRequest
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera
        }];
      };

      _QrScan = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_qr_scan_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.QRScanner, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera, _service_http__WEBPACK_IMPORTED_MODULE_4__.HttpRequest],
        styles: [_qr_scan_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _QrScan);
      /***/
    },

    /***/
    11356:
    /*!*****************************!*\
      !*** ./src/service/http.ts ***!
      \*****************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpRequest": function HttpRequest() {
          return (
            /* binding */
            _HttpRequest
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _HttpRequest = /*#__PURE__*/function () {
        function HttpRequest(Http) {
          _classCallCheck(this, HttpRequest);

          this.http = Http;
        }

        _createClass(HttpRequest, [{
          key: "get",
          value: function get(url, params, callback) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
            var vm = this;

            if (params) {
              for (var key in params) {
                if (params[key] === false || params[key]) {
                  httpParams = httpParams.set(key, params[key]);
                }
              }
            }

            vm.http.get(url, {
              params: httpParams
            }).subscribe(function (data) {
              callback(data);
            });
          }
        }, {
          key: "post",
          value: function post(url, data, options, callback) {
            var vm = this;
            vm.http.post(url, data, options).subscribe(function (res) {
              callback(res);
            });
          }
        }]);

        return HttpRequest;
      }();

      _HttpRequest.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _HttpRequest = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _HttpRequest);
      /***/
    },

    /***/
    63525:
    /*!**************************************!*\
      !*** ./src/app/scan-qr/qr-scan.scss ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLXNjYW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRiIsImZpbGUiOiJxci1zY2FuLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";
      /***/
    },

    /***/
    36271:
    /*!****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scan-qr/qr-scan.html ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <ion-header *ngIf=\"uploadImageName && uploadImageName !== ''\">\n    <ion-toolbar>\n      <ion-title size=\"small\">Your uploaded picture</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content [fullscreen]=\"true\">\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <div id=\"container\">\n    <div *ngIf=\"showScanBtn\">\n      <ion-button color=\"dark\" style=\"width: 80%;\" (click)=\"scan()\">SCAN QR Code</ion-button>\n    </div>\n    <div class=\"\" *ngIf=\"!showScanBtn\">\n      <div *ngIf=\"uploadImageName === ''\">\n        <ion-button *ngIf=\"status !== 'ok'\" color=\"dark\" style=\"width: 80%;\" (click)=\"checkStatus()\">CHECK SERVE STATUS</ion-button>\n        <div>Status: {{status}}</div>\n        <ion-button color=\"dark\" style=\"width: 80%;\" (click)=\"takePic()\">TAKE PICTURE</ion-button>\n      </div>\n      <div *ngIf=\"uploadImageName && uploadImageName !== ''\" class=\"image\" >\n        <img [src]=\"uploadImageName\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_scan-qr_qr-scan_module_ts-es5.js.map