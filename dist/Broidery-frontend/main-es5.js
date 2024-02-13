function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about-us/about-us.component.ts":
  /*!************************************************!*\
    !*** ./src/app/about-us/about-us.component.ts ***!
    \************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
      return new (t || AboutUsComponent)();
    };

    AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutUsComponent,
      selectors: [["app-about-us"]],
      decls: 9,
      vars: 0,
      template: function AboutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-us',
          templateUrl: './about-us.component.html',
          styleUrls: ['./about-us.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _products_product_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./products/product/product.component */
    "./src/app/products/product/product.component.ts");
    /* harmony import */


    var _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./catalogue/catalogue.component */
    "./src/app/catalogue/catalogue.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-in/sign-in.component */
    "./src/app/sign-in/sign-in.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/about-us/about-us.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./carousel/carousel.component */
    "./src/app/carousel/carousel.component.ts");

    var routes = [{
      path: '',
      component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]
    }, {
      path: 'product/:id',
      component: _products_product_product_component__WEBPACK_IMPORTED_MODULE_0__["ProductComponent"]
    }, {
      path: 'about_us',
      component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"]
    }, {
      path: 'sign_in',
      component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"]
    }, {
      path: 'auth',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]
    }, {
      path: 'catalogue',
      component: _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_1__["CatalogueComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Broidery-frontend';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: initConfig, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initConfig", function () {
      return initConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./carousel/carousel.component */
    "./src/app/carousel/carousel.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/about-us/about-us.component.ts");
    /* harmony import */


    var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sign-in/sign-in.component */
    "./src/app/sign-in/sign-in.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./catalogue/catalogue.component */
    "./src/app/catalogue/catalogue.component.ts");
    /* harmony import */


    var _products_product_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./products/product/product.component */
    "./src/app/products/product/product.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _services_AppConfigService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/AppConfigService */
    "./src/app/services/AppConfigService.ts"); // Asegúrate de que la ruta sea correcta


    function initConfig(appConfig) {
      return function () {
        return appConfig.loadConfig();
      };
    }

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_0__["ProductService"], _services_AppConfigService__WEBPACK_IMPORTED_MODULE_17__["AppConfigService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
        useFactory: initConfig,
        deps: [_services_AppConfigService__WEBPACK_IMPORTED_MODULE_17__["AppConfigService"]],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"], _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_13__["CatalogueComponent"], _products_product_product_component__WEBPACK_IMPORTED_MODULE_14__["ProductComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"], _catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_13__["CatalogueComponent"], _products_product_product_component__WEBPACK_IMPORTED_MODULE_14__["ProductComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]],
          providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_0__["ProductService"], _services_AppConfigService__WEBPACK_IMPORTED_MODULE_17__["AppConfigService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
            useFactory: initConfig,
            deps: [_services_AppConfigService__WEBPACK_IMPORTED_MODULE_17__["AppConfigService"]],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent(authService) {
        _classCallCheck(this, AuthComponent);

        this.authService = authService;
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          if (!form.valid) {
            return;
          }

          var email = form.value.email;
          var password = form.value.password;
          form.reset();
          this.authService.onLogin(email, password).subscribe(function (responseData) {
            console.log(responseData);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ɵfac = function AuthComponent_Factory(t) {
      return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthComponent,
      selectors: [["app-auth"]],
      decls: 14,
      vars: 0,
      consts: [["id", "parent", 1, "row"], ["id", "container", 1, "col-xs-18"], [1, "form-group"], ["for", "email"], ["name", "email", "size", "30", "type", "email", "id", "email", 1, "form-control"], ["for", "password"], ["name", "password", "size", "20", "type", "password", "id", "password", 1, "form-control"], [1, "btn", "btn-success"]],
      template: function AuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Registrarse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["#parent[_ngcontent-%COMP%] {\n  padding: 80px;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n#container[_ngcontent-%COMP%] {\n  padding: 40px;\n  border: 1px solid #28a745;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  max-width: 900px;\n  margin: 50px auto 30px;\n  padding: 60px;\n  border-radius: 10px;\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.35);\n}\n.form-group[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFyZW50IHtcbiAgcGFkZGluZzogODBweDtcbn1cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMzBweDtcbn1cbiNjb250YWluZXIge1xuICBwYWRkaW5nOiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjhhNzQ1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0byAzMHB4O1xuICBwYWRkaW5nOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth',
          templateUrl: './auth.component.html',
          styleUrls: ['./auth.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/carousel/carousel.component.ts":
  /*!************************************************!*\
    !*** ./src/app/carousel/carousel.component.ts ***!
    \************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../products/products.component */
    "./src/app/products/products.component.ts");

    function CarouselComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CarouselComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CarouselComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent() {
        _classCallCheck(this, CarouselComponent);

        this.images = ['../../assets/images/broidery_1.jpeg', '../../assets/images/broidery_2.jpeg', '../../assets/images/broidery_3.jpeg'];
      }

      _createClass(CarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)();
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["app-carousel"]],
      decls: 5,
      vars: 0,
      consts: [[1, "max1"], ["ngbSlide", ""], [1, "picsum-img-wrapper", 2, "max-height", "600px"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], ["alt", "Random second slide", 3, "src"], [1, "picsum-img-wrapper", 2, "max-height", "600px", "max-width", "400px"], ["alt", "Random third slide", 3, "src"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_template_1_Template, 3, 1, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ng_template_2_Template, 3, 1, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_ng_template_3_Template, 3, 1, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-products");
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]],
      styles: [".search-sec[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.search-slt[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #55595c;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  height: calc(3rem + 2px) !important;\n  border-radius: 0;\n}\n.wrn-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 16px;\n  font-weight: 400;\n  text-transform: capitalize;\n  height: calc(3rem + 2px) !important;\n  border-radius: 0;\n}\n@media (min-width: 992px) {\n  .search-sec[_ngcontent-%COMP%] {\n    position: relative;\n    top: -114px;\n    background: rgba(26, 70, 104, 0.51);\n  }\n}\n@media (max-width: 992px) {\n  .search-sec[_ngcontent-%COMP%] {\n    background: #1a4668;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1DQUFtQztFQUNyQztBQUNGO0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtc2VjIHtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5zZWFyY2gtc2x0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzU1NTk1YztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgaGVpZ2h0OiBjYWxjKDNyZW0gKyAycHgpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ud3JuLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBoZWlnaHQ6IGNhbGMoM3JlbSArIDJweCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuc2VhcmNoLXNlYyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTExNHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjYsIDcwLCAxMDQsIDAuNTEpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2VhcmNoLXNlYyB7XG4gICAgYmFja2dyb3VuZDogIzFhNDY2ODtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carousel',
          templateUrl: './carousel.component.html',
          styleUrls: ['./carousel.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/catalogue/catalogue.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/catalogue/catalogue.component.ts ***!
    \**************************************************/

  /*! exports provided: CatalogueComponent */

  /***/
  function srcAppCatalogueCatalogueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogueComponent", function () {
      return CatalogueComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CatalogueComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/product/" + product_r2.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r2.price, " por metro");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.composition);
      }
    }

    var CatalogueComponent = /*#__PURE__*/function () {
      function CatalogueComponent(productService, route) {
        _classCallCheck(this, CatalogueComponent);

        this.productService = productService;
        this.route = route;
      }

      _createClass(CatalogueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.products$ = this.productService.onDisplayAllProducts();
        }
      }, {
        key: "onDisplayAllProducts",
        value: function onDisplayAllProducts() {
          this.products$ = this.productService.onDisplayAllProducts();
        }
      }]);

      return CatalogueComponent;
    }();

    CatalogueComponent.ɵfac = function CatalogueComponent_Factory(t) {
      return new (t || CatalogueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    CatalogueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CatalogueComponent,
      selectors: [["app-catalogue"]],
      decls: 15,
      vars: 3,
      consts: [["href", "https://fonts.googleapis.com/css2?family=Oswald&display=swap", "rel", "stylesheet"], [2, "padding", "50px", "text-align", "center"], [2, "padding", "5px"], [1, "container"], [2, "font-family", "'Oswald', sans-serif", "color", "forestgreen", "text-align", "center", "padding", "20px"], ["id", "buttons"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "parent"], ["productId", ""], ["id", "wide", "class", "card", 4, "ngFor", "ngForOf"], ["id", "wide", 1, "card"], [3, "routerLink"], [3, "src"], [1, "price"]],
      template: function CatalogueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Productos destacados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Cat\xE1logo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nuevo producto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CatalogueComponent_div_13_Template, 9, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 1, ctx.products$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["#parent[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: 'Oswald', sans-serif;\n  max-width: 100%;\n  max-height: 100%;\n  padding: 10;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n#wide[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  max-height: -moz-max-content;\n  max-height: max-content;\n  max-width: 250px;\n  min-width: 250px;\n}\nimg[_ngcontent-%COMP%] {\n  min-height: 230px;\n  width: 100%;\n  border: 1px solid #e6e6e6;\n}\n#wide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZ3VlL2NhdGFsb2d1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYiw0QkFBdUI7RUFBdkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY2F0YWxvZ3VlL2NhdGFsb2d1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhcmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiN3aWRlIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIG1pbi13aWR0aDogMjUwcHg7XG59XG5pbWcge1xuICBtaW4taGVpZ2h0OiAyMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG4jd2lkZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-catalogue',
          templateUrl: './catalogue.component.html',
          styleUrls: ['./catalogue.component.css']
        }]
      }], function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.logo = '../../assets/images/broidery.png';
        this.title = '../../assets/images/title.png';
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 19,
      vars: 1,
      consts: [["id", "dir"], ["alt", "", 3, "src"], ["href", "mailto:broidery.ventas@gmail.com?subject=Consulta%20web", 2, "color", "black"], ["onclick", "track()", "href", "https://api.whatsapp.com/send?phone=+5491130695435"], ["id", "icon-whatsapp"], ["src", "https://static.volandoviajes.com/common/images/whatsapp.png"], [2, "margin-right", "10px"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Direcci\xF3n: Viamonte 2622 | CABA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Telefono: 11-3069-5435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "broidery.ventas@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cont\xE1ctanos por ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Whatsapp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["#dir[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  padding: 10px;\n  float: right;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 150px;\n  float: right; \n  margin-right: 50px;\n  padding-right: 50px;\n  padding-bottom: 50px;\n}\n#icon-whatsapp[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  float: left;\n  padding: 20px;\n}\n#foot[_ngcontent-%COMP%] {\n  background-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpciB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgZmxvYXQ6IHJpZ2h0OyBcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbiNpY29uLXdoYXRzYXBwIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuI2Zvb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.btnContainer = document.getElementById('menu');
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 20,
      vars: 2,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["id", "header"], [1, "container"], ["id", "logo", 1, "pull-left"], ["src", "../../assets/images/broidery.png", "alt", "", 2, "float", "left", "margin-right", "8px", "margin-top", "-5px", "max-height", "40px"], ["href", "", 1, "scrollto"], ["id", "nav-menu-container"], ["id", "menu", 1, "nav-menu"], ["role", "presentation", "routerLinkActive", "menu-active", 3, "routerLinkActiveOptions"], ["routerLink", "/"], ["role", "presentation", "routerLinkActive", "menu-active"], ["routerLink", "/about_us"], ["routerLink", "/catalogue"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Broidery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Catalogo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["#header.header-scrolled[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px 0;\n  height: 72px;\n  transition: all 0.5s;\n}\n#header[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  height: 92px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  transition: all 0.5s;\n  z-index: 997;\n  background-color: #fff;\n  box-shadow: 5px 0px 15px #c3c3c3;\n}\n#header[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 34px;\n  margin: 0;\n  padding: 0;\n  line-height: 1;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  letter-spacing: 3px;\n}\n#header[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #header[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #000;\n  padding-left: 10px;\n  \n}\n#nav-menu-container[_ngcontent-%COMP%] {\n  float: right;\n  margin: 0;\n}\n.nav-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.nav-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  float: left;\n}\n.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  white-space: nowrap;\n}\n.nav-menu[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.header-scrolled[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .header-scrolled[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]    > .menu-active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #18d26e;\n}\n.header-scrolled[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]    > .menu-active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #18d26e;\n}\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 8px 10px 8px;\n  text-decoration: none;\n  display: inline-block;\n  color: #000;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  font-size: 13px;\n  text-transform: uppercase;\n  outline: none;\n}\n#mobile-nav-toggle[_ngcontent-%COMP%] {\n  display: inline;\n}\n#mobile-nav-toggle[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  margin: 20px 20px 0 0;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  display: none;\n  transition: all 0.4s;\n  outline: none;\n  cursor: pointer;\n}\n#mobile-body-overly[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 997;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.7);\n  display: none;\n}\nbody.mobile-nav-active[_ngcontent-%COMP%]   #mobile-nav[_ngcontent-%COMP%] {\n  left: 0;\n}\n#mobile-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  padding-top: 18px;\n  bottom: 0;\n  z-index: 998;\n  background: rgba(0, 0, 0, 0.8);\n  left: -260px;\n  width: 260px;\n  overflow-y: auto;\n  transition: 0.4s;\n}\n#mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n#mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n}\n#mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 13px;\n  text-transform: uppercase;\n  overflow: hidden;\n  padding: 10px 22px 10px 15px;\n  position: relative;\n  text-decoration: none;\n  width: 100%;\n  display: block;\n  outline: none;\n  font-weight: 700;\n  font-family: 'Montserrat', sans-serif;\n}\n#mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .menu-has-children[_ngcontent-%COMP%]   i.fa-chevron-up[_ngcontent-%COMP%] {\n  color: #18d26e;\n}\n#mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .menu-has-children[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 99;\n  padding: 15px;\n  cursor: pointer;\n  color: #fff;\n}\n#mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .menu-item-active[_ngcontent-%COMP%] {\n  color: #18d26e;\n}\n#mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n.menu-has-children[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n}\n.sf-arrows[_ngcontent-%COMP%]   .sf-with-ul[_ngcontent-%COMP%] {\n  padding-right: 30px;\n}\n.sf-arrows[_ngcontent-%COMP%]   .sf-with-ul[_ngcontent-%COMP%]:after {\n  content: '\\f107';\n  position: absolute;\n  right: 15px;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  color: black;\n}\n.sf-arrows[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .sf-with-ul[_ngcontent-%COMP%]:after {\n  content: '\\f105';\n}\n.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]   li.sfHover[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  display: block;\n}\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  padding: 10px;\n  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\n  background: #fff;\n}\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  top: 100%;\n  left: 0;\n  z-index: 99;\n}\n.sf-arrows[_ngcontent-%COMP%]   .sf-with-ul[_ngcontent-%COMP%] {\n  padding-right: 30px;\n}\n.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  #nav-menu-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #mobile-nav-toggle[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFFBQVE7RUFDUixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsTUFBTTtFQUNOLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtEQUFrRDtFQUNsRCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0FBQ2I7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyLmhlYWRlci1zY3JvbGxlZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgaGVpZ2h0OiA3MnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbiNoZWFkZXIge1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIGhlaWdodDogOTJweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgei1pbmRleDogOTk3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiA1cHggMHB4IDE1cHggI2MzYzNjMztcbn1cbiNoZWFkZXIgI2xvZ28gaDEge1xuICBmb250LXNpemU6IDM0cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG4jaGVhZGVyICNsb2dvIGgxIGEsXG4jaGVhZGVyICNsb2dvIGgxIGE6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAvKiBib3JkZXItbGVmdDogNHB4IHNvbGlkIGdyZXk7ICovXG59XG4jbmF2LW1lbnUtY29udGFpbmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDA7XG59XG4ubmF2LW1lbnUgPiBsaSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm5hdi1tZW51ID4gbGkge1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXYtbWVudSBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5uYXYtbWVudSxcbi5uYXYtbWVudSAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmhlYWRlci1zY3JvbGxlZCAubmF2LW1lbnUgbGk6aG92ZXIgPiBhLFxuLmhlYWRlci1zY3JvbGxlZCAubmF2LW1lbnUgPiAubWVudS1hY3RpdmUgPiBhIHtcbiAgY29sb3I6ICMxOGQyNmU7XG59XG4uaGVhZGVyLXNjcm9sbGVkIC5uYXYtbWVudSBhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm5hdi1tZW51IGxpOmhvdmVyID4gYSxcbi5uYXYtbWVudSA+IC5tZW51LWFjdGl2ZSA+IGEge1xuICBjb2xvcjogIzE4ZDI2ZTtcbn1cbi5uYXYtbWVudSBhIHtcbiAgcGFkZGluZzogMCA4cHggMTBweCA4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvdXRsaW5lOiBub25lO1xufVxuI21vYmlsZS1uYXYtdG9nZ2xlIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuI21vYmlsZS1uYXYtdG9nZ2xlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIG1hcmdpbjogMjBweCAyMHB4IDAgMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbW9iaWxlLWJvZHktb3Zlcmx5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogOTk3O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBub25lO1xufVxuYm9keS5tb2JpbGUtbmF2LWFjdGl2ZSAjbW9iaWxlLW5hdiB7XG4gIGxlZnQ6IDA7XG59XG4jbW9iaWxlLW5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgbGVmdDogLTI2MHB4O1xuICB3aWR0aDogMjYwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4jbW9iaWxlLW5hdiB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbiNtb2JpbGUtbmF2IHVsIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI21vYmlsZS1uYXYgdWwgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHggMjJweCAxMHB4IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG4jbW9iaWxlLW5hdiB1bCAubWVudS1oYXMtY2hpbGRyZW4gaS5mYS1jaGV2cm9uLXVwIHtcbiAgY29sb3I6ICMxOGQyNmU7XG59XG4jbW9iaWxlLW5hdiB1bCAubWVudS1oYXMtY2hpbGRyZW4gaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5O1xuICBwYWRkaW5nOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuI21vYmlsZS1uYXYgdWwgLm1lbnUtaXRlbS1hY3RpdmUge1xuICBjb2xvcjogIzE4ZDI2ZTtcbn1cbiNtb2JpbGUtbmF2IHVsIGxpIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4ubWVudS1oYXMtY2hpbGRyZW4gdWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2YtYXJyb3dzIC5zZi13aXRoLXVsIHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLnNmLWFycm93cyAuc2Ytd2l0aC11bDphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXGYxMDcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2YtYXJyb3dzIHVsIC5zZi13aXRoLXVsOmFmdGVyIHtcbiAgY29udGVudDogJ1xcZjEwNSc7XG59XG5cbi5uYXYtbWVudSBsaTpob3ZlciA+IHVsLFxuLm5hdi1tZW51IGxpLnNmSG92ZXIgPiB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5hdi1tZW51IHVsIHtcbiAgbWFyZ2luOiA0cHggMCAwIDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCByZ2JhKDEyNywgMTM3LCAxNjEsIDAuMjUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLm5hdi1tZW51IHVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uc2YtYXJyb3dzIC5zZi13aXRoLXVsIHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbi5uYXYtbWVudSBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNuYXYtbWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjbW9iaWxlLW5hdi10b2dnbGUge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/product/product.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/products/product/product.component.ts ***!
    \*******************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "btn-success": a0,
        "btn-danger": a1
      };
    };

    function ProductComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_0_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var product_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onEditProductState(product_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductComponent_div_0_Template_form_ngSubmit_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onEditProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Url de Imagen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Precio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Descripci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Composici\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Guardar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r1.price, " por metro");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.composition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, !product_r1.isActive, product_r1.isActive));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.isActive ? "Desactivar" : "Activar", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Editar producto n\xBA", product_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(productService, route) {
        _classCallCheck(this, ProductComponent);

        this.productService = productService;
        this.route = route;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          composition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          isActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.reloadData();
        }
      }, {
        key: "onEditProductState",
        value: function onEditProductState(id) {
          var _this = this;

          this.productService.onEditProductState(id).subscribe(function (data) {
            _this.reloadData();
          });
        }
      }, {
        key: "reloadData",
        value: function reloadData() {
          var _this2 = this;

          this.route.params.subscribe(function (params) {
            _this2.id = params.id;
            _this2.product$ = _this2.productService.onDisplayProductById(_this2.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
              _this2.form.controls.id.setValue(+_this2.id);

              _this2.form.controls.price.setValue(res.price);

              _this2.form.controls.image.setValue(res.image);

              _this2.form.controls.description.setValue(res.description);

              _this2.form.controls.composition.setValue(res.composition);

              _this2.form.controls.isActive.setValue(res.isActive);

              return res;
            }));
          });
        }
      }, {
        key: "onEditProduct",
        value: function onEditProduct() {
          var _this3 = this;

          if (this.form.valid) {
            this.productService.onEditProduct(this.form.value).subscribe(function (data) {
              _this3.reloadData();
            });
          }
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      decls: 2,
      vars: 3,
      consts: [["id", "parent", 4, "ngIf"], ["id", "parent"], ["id", "wide", 1, "card"], [3, "src"], [1, "price"], ["id", "activate", 1, "btn", 3, "ngClass", "click"], ["id", "edit", 1, "card", 3, "formGroup", "ngSubmit"], [2, "padding", "10px", "padding-bottom", "10px"], [2, "size", "1000"], [2, "float", "right", "max-width", "200px", 3, "src"], ["type", "text", "placeholder", "Ingrese la url de la imagen", "formControlName", "image", 1, "form-control"], ["type", "number", "placeholder", "Ingrese el precio", "formControlName", "price", 1, "form-control", 2, "width", "70px"], ["type", "text", "placeholder", "Ingrese la descripci\xF3n", "formControlName", "description", 1, "form-control"], ["type", "text", "placeholder", "Ingrese la composici\xF3n", "formControlName", "composition", 1, "form-control"], ["id", "buttons"], ["type", "submit", 1, "btn", "btn-primary"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductComponent_div_0_Template, 35, 12, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.product$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["#parent[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n}\n#wide[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  max-height: -moz-max-content;\n  max-height: max-content;\n  max-width: 250px;\n  min-width: 300px;\n}\nimg[_ngcontent-%COMP%] {\n  min-height: 230px;\n  width: 100%;\n  border: 1px solid #e6e6e6;\n}\nh1[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: left;\n}\n#edit[_ngcontent-%COMP%] {\n  padding: 10px;\n  flex-grow: 1;\n  max-width: 80%;\n  padding-right: 100px;\n}\ninput[_ngcontent-%COMP%] {\n  float: right;\n  display: inline-flex;\n  max-width: 50%;\n  margin-bottom: 20px;\n}\n#activate[_ngcontent-%COMP%] {\n  float: right;\n  bottom: 0;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 140px;\n  text-align: left;\n}\nbutton[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsNEJBQXVCO0VBQXZCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYXJlbnQge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbn1cbiN3aWRlIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5pbWcge1xuICBtaW4taGVpZ2h0OiAyMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG5oMSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNlZGl0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XG59XG5pbnB1dCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuI2FjdGl2YXRlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3R0b206IDA7XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE0MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.component.ts":
  /*!************************************************!*\
    !*** ./src/app/products/products.component.ts ***!
    \************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductsComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r2.price, " por metro");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.composition);
      }
    }

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(productService) {
        _classCallCheck(this, ProductsComponent);

        this.productService = productService;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.products$ = this.productService.onShowProducts();
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 9,
      vars: 3,
      consts: [["href", "https://fonts.googleapis.com/css2?family=Oswald&display=swap", "rel", "stylesheet"], [2, "padding", "50px", "text-align", "center"], [2, "padding", "30px"], ["id", "parent", "RouterLinkActive", "active"], ["productId", ""], ["id", "wide", "class", "card", 4, "ngFor", "ngForOf"], ["id", "wide", 1, "card"], [3, "src"], ["type", "currency", 1, "price"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Productos de entrega inmediata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductsComponent_div_7_Template, 9, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.products$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["#parent[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: 'Oswald', sans-serif;\n  max-width: 100%;\n  max-height: 100%;\n  padding: 10;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  cursor: pointer;\n}\n#wide[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  max-height: -moz-max-content;\n  max-height: max-content;\n  max-width: 250px;\n  min-width: 250px;\n}\n#wide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\nimg[_ngcontent-%COMP%] {\n  min-height: 230px;\n  width: 100%;\n  border: 1px solid #e6e6e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYiw0QkFBdUI7RUFBdkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYXJlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN3aWRlIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIG1pbi13aWR0aDogMjUwcHg7XG59XG4jd2lkZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5pbWcge1xuICBtaW4taGVpZ2h0OiAyMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/AppConfigService.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/AppConfigService.ts ***!
    \**********************************************/

  /*! exports provided: AppConfigService */

  /***/
  function srcAppServicesAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfigService", function () {
      return AppConfigService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); //AppConfigService.ts


    var AppConfigService = /*#__PURE__*/function () {
      function AppConfigService(http) {
        _classCallCheck(this, AppConfigService);

        this.http = http;
        this.loaded = false;
      }

      _createClass(AppConfigService, [{
        key: "loadConfig",
        value: function loadConfig() {
          var _this4 = this;

          return this.http.get('../../assets/app.config.json').toPromise().then(function (data) {
            _this4.config = data;
            _this4.loaded = true;
          });
        }
      }, {
        key: "getConfig",
        value: function getConfig() {
          return this.config;
        }
      }]);

      return AppConfigService;
    }();

    AppConfigService.ɵfac = function AppConfigService_Factory(t) {
      return new (t || AppConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AppConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppConfigService,
      factory: AppConfigService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "onLogin",
        value: function onLogin(Email, Password) {
          return this.http.post('https://broidery-backend.k3s/api/login', {
            email: Email,
            password: Password
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _AppConfigService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./AppConfigService */
    "./src/app/services/AppConfigService.ts");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http, appConfigService) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.appConfigService = appConfigService;
        this.products = [];
        this.source = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.products$ = this.source.asObservable();
        this.BroideryBackendUrl = this.appConfigService.getConfig().BroideryBackendUrl;
      }

      _createClass(ProductService, [{
        key: "onDisplayAllProducts",
        value: function onDisplayAllProducts() {
          return this.http.get("".concat(this.BroideryBackendUrl, "/api/all-products"));
        }
      }, {
        key: "onShowProducts",
        value: function onShowProducts() {
          return this.http.get("".concat(this.BroideryBackendUrl, "/api/all-active-products"));
        }
      }, {
        key: "onEditProductState",
        value: function onEditProductState(productId) {
          return this.http.put("".concat(this.BroideryBackendUrl, "/api/product-edit-state"), {
            id: productId
          });
        }
      }, {
        key: "onDisplayProductById",
        value: function onDisplayProductById(productId) {
          return this.http.get("".concat(this.BroideryBackendUrl, "/api/product-by-id"), {
            params: {
              id: "".concat(productId)
            }
          });
        }
      }, {
        key: "onEditProduct",
        value: function onEditProduct(product) {
          return this.http.put("".concat(this.BroideryBackendUrl, "/api/product-edit"), product, {
            params: {
              id: "".concat(product.id)
            }
          });
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_AppConfigService__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _AppConfigService__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sign-in/sign-in.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sign-in/sign-in.component.ts ***!
    \**********************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SignInComponent = /*#__PURE__*/function () {
      function SignInComponent() {
        _classCallCheck(this, SignInComponent);
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignInComponent;
    }();

    SignInComponent.ɵfac = function SignInComponent_Factory(t) {
      return new (t || SignInComponent)();
    };

    SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["app-sign-in"]],
      decls: 0,
      vars: 0,
      template: function SignInComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-in',
          templateUrl: './sign-in.component.html',
          styleUrls: ['./sign-in.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/lucas/Documents/broidery/Broidery-frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map