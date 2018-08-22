webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"page-title row\">\n\t\t<h2 class=\"col-5\">About</h2>\n\t</div>\n\t<p>\n\t  El Super es un supermercado de prueba para el curso de Angular creado por <a href=\"https://github.com/RonaldLobo/\" target=\"_blank\">Ronald Lobo Barrantes</a>\n\t</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.app-nav-cont{\n\tmargin-bottom: 20px;\n\tpadding-top: 20px;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <left-nav></left-nav>\n        <div class=\"col-12\">\n            <router-outlet></router-outlet> \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes_module__ = __webpack_require__("../../../../../src/app/app.routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__productos_productos_component__ = __webpack_require__("../../../../../src/app/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__productos_producto_display_producto_display_component__ = __webpack_require__("../../../../../src/app/productos/producto-display/producto-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__productos_producto_agregar_producto_agregar_component__ = __webpack_require__("../../../../../src/app/productos/producto-agregar/producto-agregar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__usuarios_usuarios_component__ = __webpack_require__("../../../../../src/app/usuarios/usuarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__usuarios_usuario_display_usuario_display_component__ = __webpack_require__("../../../../../src/app/usuarios/usuario-display/usuario-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__usuarios_usuario_agregar_usuario_agregar_component__ = __webpack_require__("../../../../../src/app/usuarios/usuario-agregar/usuario-agregar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sucursales_sucursales_component__ = __webpack_require__("../../../../../src/app/sucursales/sucursales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sucursales_sucursal_display_sucursal_display_component__ = __webpack_require__("../../../../../src/app/sucursales/sucursal-display/sucursal-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sucursales_sucursal_agregar_sucursal_agregar_component__ = __webpack_require__("../../../../../src/app/sucursales/sucursal-agregar/sucursal-agregar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_productos_service__ = __webpack_require__("../../../../../src/app/services/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_sucursal_service__ = __webpack_require__("../../../../../src/app/services/sucursal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_inventario_service__ = __webpack_require__("../../../../../src/app/services/inventario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_text_contains_directive__ = __webpack_require__("../../../../../src/app/shared/text-contains.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ventas_ventas_component__ = __webpack_require__("../../../../../src/app/ventas/ventas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__facturas_facturas_component__ = __webpack_require__("../../../../../src/app/facturas/facturas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__contabilidad_contabilidad_component__ = __webpack_require__("../../../../../src/app/contabilidad/contabilidad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__restaurante_restaurante_component__ = __webpack_require__("../../../../../src/app/restaurante/restaurante.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__left_nav_left_nav_component__ = __webpack_require__("../../../../../src/app/left-nav/left-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__reportes_reportes_component__ = __webpack_require__("../../../../../src/app/reportes/reportes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__clientes_clientes_component__ = __webpack_require__("../../../../../src/app/clientes/clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_factura_service__ = __webpack_require__("../../../../../src/app/services/factura.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_authguard_service__ = __webpack_require__("../../../../../src/app/services/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__clientes_cliente_agregar_cliente_agregar_component__ = __webpack_require__("../../../../../src/app/clientes/cliente-agregar/cliente-agregar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__clientes_cliente_display_cliente_display_component__ = __webpack_require__("../../../../../src/app/clientes/cliente-display/cliente-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__facturas_factura_display_factura_display_component__ = __webpack_require__("../../../../../src/app/facturas/factura-display/factura-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ver_facturas_ver_facturas_component__ = __webpack_require__("../../../../../src/app/ver-facturas/ver-facturas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Import del archivo que tiene las rutas, se debe agregar a los imports

// Componentes que deben ser agregados a los declarations













//servicios creados deben ser agregados en los providers 


























var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__productos_productos_component__["a" /* ProductosComponent */],
                __WEBPACK_IMPORTED_MODULE_10__productos_producto_display_producto_display_component__["a" /* ProductoDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__productos_producto_agregar_producto_agregar_component__["a" /* ProductoAgregarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__usuarios_usuarios_component__["a" /* UsuariosComponent */],
                __WEBPACK_IMPORTED_MODULE_16__usuarios_usuario_display_usuario_display_component__["a" /* UsuarioDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_17__usuarios_usuario_agregar_usuario_agregar_component__["a" /* UsuarioAgregarComponent */],
                __WEBPACK_IMPORTED_MODULE_27__shared_text_contains_directive__["a" /* TextContainsValidator */],
                __WEBPACK_IMPORTED_MODULE_28__ventas_ventas_component__["a" /* VentasComponent */],
                __WEBPACK_IMPORTED_MODULE_29__facturas_facturas_component__["a" /* FacturasComponent */],
                __WEBPACK_IMPORTED_MODULE_30__contabilidad_contabilidad_component__["a" /* ContabilidadComponent */],
                __WEBPACK_IMPORTED_MODULE_31__restaurante_restaurante_component__["a" /* RestauranteComponent */],
                __WEBPACK_IMPORTED_MODULE_32__left_nav_left_nav_component__["a" /* LeftNavComponent */],
                __WEBPACK_IMPORTED_MODULE_33__reportes_reportes_component__["a" /* ReportesComponent */],
                __WEBPACK_IMPORTED_MODULE_34__clientes_clientes_component__["a" /* ClientesComponent */],
                __WEBPACK_IMPORTED_MODULE_39__clientes_cliente_agregar_cliente_agregar_component__["a" /* ClienteAgregarComponent */],
                __WEBPACK_IMPORTED_MODULE_40__clientes_cliente_display_cliente_display_component__["a" /* ClienteDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_41__facturas_factura_display_factura_display_component__["a" /* FacturaDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_43__ver_facturas_ver_facturas_component__["a" /* VerFacturasComponent */],
                __WEBPACK_IMPORTED_MODULE_18__sucursales_sucursales_component__["a" /* SucursalesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__sucursales_sucursal_display_sucursal_display_component__["a" /* SucursalDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_20__sucursales_sucursal_agregar_sucursal_agregar_component__["a" /* SucursalAgregarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routes_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_42_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_45_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_44_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__services_productos_service__["a" /* ProductosService */],
                __WEBPACK_IMPORTED_MODULE_22__services_usuarios_service__["a" /* UsuariosService */],
                __WEBPACK_IMPORTED_MODULE_25__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_26__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_35__services_clientes_service__["a" /* ClientesService */],
                __WEBPACK_IMPORTED_MODULE_36__services_factura_service__["a" /* FacturaService */],
                __WEBPACK_IMPORTED_MODULE_23__services_sucursal_service__["a" /* SucursalService */],
                __WEBPACK_IMPORTED_MODULE_37__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DecimalPipe */],
                __WEBPACK_IMPORTED_MODULE_38__services_authguard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_24__services_inventario_service__["a" /* InventarioService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_42_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productos_productos_component__ = __webpack_require__("../../../../../src/app/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facturas_facturas_component__ = __webpack_require__("../../../../../src/app/facturas/facturas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usuarios_usuarios_component__ = __webpack_require__("../../../../../src/app/usuarios/usuarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sucursales_sucursales_component__ = __webpack_require__("../../../../../src/app/sucursales/sucursales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reportes_reportes_component__ = __webpack_require__("../../../../../src/app/reportes/reportes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contabilidad_contabilidad_component__ = __webpack_require__("../../../../../src/app/contabilidad/contabilidad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__clientes_clientes_component__ = __webpack_require__("../../../../../src/app/clientes/clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ver_facturas_ver_facturas_component__ = __webpack_require__("../../../../../src/app/ver-facturas/ver-facturas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authguard_service__ = __webpack_require__("../../../../../src/app/services/authguard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'productos',
        component: __WEBPACK_IMPORTED_MODULE_2__productos_productos_component__["a" /* ProductosComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_authguard_service__["a" /* AuthGuardService */]
        ]
    },
    {
        path: 'facturas',
        component: __WEBPACK_IMPORTED_MODULE_11__ver_facturas_ver_facturas_component__["a" /* VerFacturasComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_authguard_service__["a" /* AuthGuardService */]
        ]
    },
    {
        path: 'vender/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__facturas_facturas_component__["a" /* FacturasComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_authguard_service__["a" /* AuthGuardService */]
        ]
    },
    {
        path: 'vender',
        component: __WEBPACK_IMPORTED_MODULE_3__facturas_facturas_component__["a" /* FacturasComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_authguard_service__["a" /* AuthGuardService */]
        ]
    },
    {
        path: 'empleados',
        component: __WEBPACK_IMPORTED_MODULE_6__usuarios_usuarios_component__["a" /* UsuariosComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_authguard_service__["a" /* AuthGuardService */]
        ]
    },
    {
        path: 'reportes',
        component: __WEBPACK_IMPORTED_MODULE_8__reportes_reportes_component__["a" /* ReportesComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_authguard_service__["a" /* AuthGuardService */]
        ]
    },
    {
        path: 'contabilidad',
        component: __WEBPACK_IMPORTED_MODULE_9__contabilidad_contabilidad_component__["a" /* ContabilidadComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_authguard_service__["a" /* AuthGuardService */]
        ]
    },
    {
        path: 'sucursales',
        component: __WEBPACK_IMPORTED_MODULE_7__sucursales_sucursales_component__["a" /* SucursalesComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_authguard_service__["a" /* AuthGuardService */]
        ]
    },
    {
        path: 'clientes',
        component: __WEBPACK_IMPORTED_MODULE_10__clientes_clientes_component__["a" /* ClientesComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_authguard_service__["a" /* AuthGuardService */]
        ]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_authguard_service__["a" /* AuthGuardService */]
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(ROUTES, {
                    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */],
                    useHash: true
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/clientes/cliente-agregar/cliente-agregar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clientes/cliente-agregar/cliente-agregar.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(clienteForm)\" #clienteForm=\"ngForm\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Nombre</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Nombre\"\n\t\t\t\trequired\n\t\t\t\t[(ngModel)]=\"cliente.nombre\" name=\"nombre\"\n\t\t\t\t#nombre=\"ngModel\" [disabled]=\"action=='ver'\">\n\t\t\t\t<div [hidden]=\"nombre.valid || nombre.pristine\" class=\"alert alert-danger\">\n\t\t\t\t\t<div *ngIf=\"nombre.errors && nombre.errors.required\">\n\t\t\t\t\t\tEl Nombre es requerido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"apellido1\">Primer Apellido</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Nombre\"\n\t\t\t\trequired\n\t\t\t\t[(ngModel)]=\"cliente.apellido1\" name=\"apellido1\"\n\t\t\t\t#apellido1=\"ngModel\" [disabled]=\"action=='ver'\">\n\t\t\t\t<div [hidden]=\"apellido1.valid || apellido1.pristine\" class=\"alert alert-danger\">\n\t\t\t\t\t<div *ngIf=\"apellido1.errors && apellido1.errors.required\">\n\t\t\t\t\t\tEl primer apellido es requerido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"apellido2\">Segundo Apellido</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Nombre\"\n\t\t\t\t[(ngModel)]=\"cliente.apellido2\" name=\"apellido2\"\n\t\t\t\t#apellido2=\"ngModel\" [disabled]=\"action=='ver'\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"cedula\">Cedula</label>\n\t\t\t\t<input type=\"text\" placeholder=\"102340671\" \n\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\tid=\"cedula\" name=\"cedula\"\n\t\t\t\t\t[(ngModel)]=\"cliente.cedula\"  \n\t\t\t\t\t#cedula=\"ngModel\" \n\t\t\t\t\trequired pattern=\"[0-9]*\" minlength=\"9\" maxlength=\"15\" [disabled]=\"action=='ver'\">\n\t\t\t\t<div [hidden]=\"cedula.valid || cedula.pristine\" class=\"alert alert-danger\" *ngIf=\"cedula.errors && cedula.errors.required\">\n\t\t\t\t\tLa Cedula es requerida\n\t\t\t\t</div>\n\t\t\t\t<div [hidden]=\"cedula.valid || cedula.pristine\" class=\"alert alert-danger\" *ngIf=\"cedula.errors && cedula.errors.pattern\">\n\t\t\t\t\tLa Cedula debe ser compuesta solo de números.\n\t\t\t\t</div>\n\t\t\t\t<div [hidden]=\"cedula.valid || cedula.pristine\" class=\"alert alert-danger\" *ngIf=\"cedula.errors && cedula.errors.minlength\">\n\t\t\t\t\tLa Cedula debe ser de minimo 9 digitos.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"cantidad\">Telefonos</label>\n\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Telefono\" aria-label=\"Telefonos\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"newPhone\"  \n\t\t\t\t\t#phone=\"ngModel\" name=\"phone\" pattern=\"[0-9]*\" minlength=\"8\" maxlength=\"8\" [disabled]=\"action=='ver'\">\n\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t<span class=\"input-group-text\" id=\"basic-addon2\" (click)=\"(action=='agregar' || action=='editar') && newPhone && phone.valid && addPhone()\" style=\"padding-top: 6px;padding-bottom: 1px;\" tooltip=\"Agregar telefono.\">\n\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v8\"/><path d=\"M8 12h8\"/></g></svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div [hidden]=\"phone.valid || phone.pristine\" class=\"alert alert-danger\" *ngIf=\"phone.errors && phone.errors.pattern\">\n\t\t\t\t\tEl telefono debe ser compuesto solo de números.\n\t\t\t\t</div>\n\t\t\t\t<div [hidden]=\"phone.valid || phone.pristine\" class=\"alert alert-danger\" *ngIf=\"phone.errors && phone.errors.minlength\">\n\t\t\t\t\tEl telefono debe ser de minimo 8 digitos.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" style=\"min-height: 149px;\">\n\t\t\t\t<span>Telefonos:</span>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"let telefono of cliente.telefonos\">{{telefono.telefono}} <button class=\"btn btn-link\" (click)=\"quitarTelefono(telefono)\" *ngIf=\"action=='agregar' || action=='editar'\">Quitar</button></li>\n\t\t\t\t</ul>\n\t\t\t\t<p *ngIf=\"cliente.telefonos.length == 0\" style=\"color:red;\">Agregue telefonos para el cliente.</p>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\">Correo</label>\n\t\t\t\t<input type=\"email\" \n\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\tid=\"email\" name=\"email\"\n\t\t\t\t\t[(ngModel)]=\"cliente.correo.correo\"  \n\t\t\t\t\t#email=\"ngModel\" email [disabled]=\"action=='ver'\">\n\t\t\t\t<div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\" *ngIf=\"email.errors && email.errors.email\">\n\t\t\t\t\tRevise el formato del correo.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<p *ngIf=\"errorDisplay\" class=\"error\">{{errorDisplay}}</p>\n\t<div *ngIf=\"action!='ver'\">\n\t\t<button *ngIf=\"action!='borrar'\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!clienteForm.form.valid || !canAdd || cliente.telefonos.length == 0\">\n\t\t\t<span *ngIf=\"action=='agregar'\">Agregar</span>\n\t\t\t<span *ngIf=\"action=='editar'\">Editar</span>\n\t\t</button>\n\t\t<button *ngIf=\"action=='borrar'\" type=\"button\" class=\"btn btn-danger\" (click)=\"eliminar()\">\n\t\t\tEliminar\n\t\t</button>\n\t\t<!-- <button *ngIf=\"action!='borrar'\" type=\"button\" class=\"btn btn-danger\" (click)=\"newCliente(); clienteForm.reset()\">\t\tDeshacer cambios\n\t\t</button> -->\n\t</div>\n\t<!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"newCliente(); clienteForm.reset()\">Eliminar</button> -->\n</form>"

/***/ }),

/***/ "../../../../../src/app/clientes/cliente-agregar/cliente-agregar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteAgregarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cliente__ = __webpack_require__("../../../../../src/app/models/cliente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_telefono__ = __webpack_require__("../../../../../src/app/models/telefono.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClienteAgregarComponent = /** @class */ (function () {
    function ClienteAgregarComponent(clientesService) {
        this.clientesService = clientesService;
        this.agregarCliente = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editarCliente = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.canAdd = true;
        this.action = "ver";
        this.cliente = new __WEBPACK_IMPORTED_MODULE_2__models_cliente__["a" /* Cliente */]();
        this.submitted = false;
        this.requiredText = 'cliente';
        this.isEditing = false;
        this.newPhone = '';
        this.noPhones = true;
        this.errorDisplay = '';
    }
    ClienteAgregarComponent.prototype.ngOnInit = function () {
    };
    ClienteAgregarComponent.prototype.onSubmit = function (clienteForm) {
        var _this = this;
        console.log('cliente');
        console.log(this.cliente);
        if (this.action === "agregar") {
            this.clientesService.agregarCliente(this.cliente)
                .then(function (success) {
                console.log('agregado', success);
                _this.close.emit();
            }, function (fail) {
                var body = JSON.parse(fail._body);
                console.log(body);
                if (body.code == "11000") {
                    _this.errorDisplay = "Por favor seleccione otra cedula";
                }
                console.log('fallo', fail);
            });
        }
        if (this.action === "editar") {
            this.clientesService.editarCliente(this.cliente)
                .then(function (success) {
                console.log('editado', success);
                _this.close.emit();
            }, function (fail) {
                var body = JSON.parse(fail._body);
                console.log(body);
                if (body.code == "11000") {
                    _this.errorDisplay = "Por favor seleccione otra cedula";
                }
                console.log('fallo', fail);
            });
        }
    };
    ClienteAgregarComponent.prototype.ngOnChanges = function (changes) {
        // console.log('changes',changes)
        // if(changes.cliente && changes.cliente.currentValue._id){
        // 	console.log('is editing');
        // 	this.isEditing = true;
        // }
    };
    ClienteAgregarComponent.prototype.newCliente = function () {
        this.submitted = false;
        this.isEditing = false;
        this.cliente = new __WEBPACK_IMPORTED_MODULE_2__models_cliente__["a" /* Cliente */]();
    };
    ClienteAgregarComponent.prototype.eliminar = function () {
        var _this = this;
        this.clientesService.borrarCliente(this.cliente)
            .then(function (success) {
            console.log('borrado', success);
            _this.close.emit();
        }, function (fail) {
            console.log('fallo', fail);
        });
    };
    ClienteAgregarComponent.prototype.addPhone = function () {
        if (this.cliente.telefonos.length < 3) {
            var phone = new __WEBPACK_IMPORTED_MODULE_3__models_telefono__["a" /* Telefono */]();
            phone.telefono = this.newPhone + '';
            this.cliente.telefonos.push(phone);
            this.newPhone = '';
            this.phone.reset();
        }
        else {
            alert('Ya tiene el maximo de 3 telefonos para este cliente');
        }
    };
    ClienteAgregarComponent.prototype.quitarTelefono = function (phone) {
        this.cliente.telefonos = this.cliente.telefonos.filter(function (tel) { return tel.telefono != phone.telefono; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ClienteAgregarComponent.prototype, "agregarCliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ClienteAgregarComponent.prototype, "editarCliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ClienteAgregarComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ClienteAgregarComponent.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ClienteAgregarComponent.prototype, "action", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('selectedProduct'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_cliente__["a" /* Cliente */])
    ], ClienteAgregarComponent.prototype, "cliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('phone'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgModel */])
    ], ClienteAgregarComponent.prototype, "phone", void 0);
    ClienteAgregarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cliente-agregar',
            template: __webpack_require__("../../../../../src/app/clientes/cliente-agregar/cliente-agregar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/clientes/cliente-agregar/cliente-agregar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_clientes_service__["a" /* ClientesService */]])
    ], ClienteAgregarComponent);
    return ClienteAgregarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/clientes/cliente-display/cliente-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".actions {\n\tmargin-top: 8px;\n}\n\n.actions .text-center {\n\tmargin-bottom: 5px;\n}\n\n.actions .text-center button{\n\twidth: 85px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clientes/cliente-display/cliente-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 row\">\n\t<div class=\"col-sm-3 col-6\">\n\t\t<p>{{cliente.nombre}} {{cliente.apellido1}}</p>\n\t</div>\n\t<div class=\"col-sm-2 d-none d-sm-block text-center\">\n\t\t<p *ngIf=\"cliente.telefonos.length > 0\">{{cliente.telefonos[0].telefono}}</p>\n\t\t<p *ngIf=\"cliente.telefonos.length == 0\">El Cliente no tiene telefonos registrados.</p>\n\t</div>\n\t<div class=\"col-sm-3 d-none d-sm-block text-center ellipsis\">\n\t\t<p>{{cliente.correo.correo}}</p>\n\t</div>\n\t<div class=\"col-sm-4 col-6 text-center\">\n\t\t<p class=\"action\">\n\t        <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"ver(template)\" tooltip=\"Ver información del cliente.\">\n\t        \t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tVer\n\t        \t</span>\n\t        </button>\n\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" (click)=\"editar(template)\" tooltip=\"Editar información del cliente.\">\n\t\t\t\t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2l4 4L7 17H3v-4L14 2z\"/><path d=\"M3 22h18\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tEditar\n\t        \t</span>\n\t        </button>\n\t        <button class=\"btn btn-sm btn-outline-secondary delete\" (click)=\"borrar(template)\" tooltip=\"Eliminar cliente.\">\n\t        \t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"/><path d=\"M18 9l-6 6\"/><path d=\"M12 9l6 6\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tEliminar\n\t        \t</span>\n\t        </button>\n        </p>\n\t</div>\n</div>\n \n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">{{action}} Cliente</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-cliente-agregar [action]=\"action\" [selectedProduct]=\"copy\" (close)=\"actualizar();modalRef.hide();\"></app-cliente-agregar>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/clientes/cliente-display/cliente-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cliente__ = __webpack_require__("../../../../../src/app/models/cliente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClienteDisplayComponent = /** @class */ (function () {
    function ClienteDisplayComponent(clientesService, modalService) {
        this.clientesService = clientesService;
        this.modalService = modalService;
        this.borrarCliente = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editarCliente = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.actualizarLista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isDeleting = false;
        this.action = "ver";
    }
    ClienteDisplayComponent.prototype.ngOnInit = function () {
        this.copy = JSON.parse(JSON.stringify(this.cliente));
    };
    ClienteDisplayComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ClienteDisplayComponent.prototype.ver = function (template) {
        this.action = "ver";
        this.copy = JSON.parse(JSON.stringify(this.cliente));
        this.openModal(template);
    };
    ClienteDisplayComponent.prototype.borrar = function (template) {
        this.action = "borrar";
        this.copy = JSON.parse(JSON.stringify(this.cliente));
        this.openModal(template);
    };
    ClienteDisplayComponent.prototype.editar = function (template) {
        this.action = "editar";
        this.copy = JSON.parse(JSON.stringify(this.cliente));
        this.openModal(template);
    };
    ClienteDisplayComponent.prototype.actualizar = function () {
        this.actualizarLista.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_cliente__["a" /* Cliente */])
    ], ClienteDisplayComponent.prototype, "cliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ClienteDisplayComponent.prototype, "borrarCliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ClienteDisplayComponent.prototype, "editarCliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ClienteDisplayComponent.prototype, "actualizarLista", void 0);
    ClienteDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cliente-display',
            template: __webpack_require__("../../../../../src/app/clientes/cliente-display/cliente-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/clientes/cliente-display/cliente-display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], ClienteDisplayComponent);
    return ClienteDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/clientes/clientes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cliente-display{\n\tmargin-top: 5px;\n}\n\n.sort svg{\n\theight: 15px;\n\t/*position: absolute;\n\ttop: 10px;\n\tleft: 90px;*/\n}\n\n.sort-item{\n\tcursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clientes/clientes.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n\t\t<h1 class=\"h2\">Clientes</h1>\n\t\t<div class=\"btn-toolbar mb-2 mb-md-0\">\n\t\t\t<div class=\"btn-group mr-2\">\n\t\t\t\t<button (click)=\"agregar(template)\" class=\"btn btn-sm btn-outline-secondary\"><svg _ngcontent-c3=\"\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><g _ngcontent-c3=\"\" fill=\"none\" stroke=\"#626262\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path _ngcontent-c3=\"\" d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><path _ngcontent-c3=\"\" d=\"M17 21v-8H7v8\"></path><path _ngcontent-c3=\"\" d=\"M7 3v5h8\"></path></g><rect _ngcontent-c3=\"\" fill=\"rgba(0, 0, 0, 0)\" height=\"24\" width=\"24\" x=\"0\" y=\"0\"></rect></svg> <p _ngcontent-c3=\"\" style=\"display: block;margin-top: -7px !important;margin-bottom: 4px;\">Agregar</p></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<pagination-controls\n\t\t\tclass=\"pagination\"\n\t\t\tpreviousLabel=\"Previo\"\n            nextLabel=\"Siguiente\"\n\t\t\t(pageChange)=\"p = $event\">\n\t\t</pagination-controls>\n\t\t<ul class=\"col-12 items-list\">\n\t\t\t<li>\n\t\t\t\t<div class=\"col-12 row\">\n\t\t\t\t\t<div class=\"col-sm-3 col-6\">\n\t\t\t\t\t\t<p (click)=\"orderBy('nombre')\" class=\"sort-item\">Nombre\n\t\t\t\t\t\t\t<span *ngIf=\"order=='nombre'\" class=\"sort\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == true\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5\"/><path d=\"M5 12l7-7 7 7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == false\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5v14\"/><path d=\"M19 12l-7 7-7-7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2 d-none d-sm-block text-center\">\n\t\t\t\t\t\t<p>Telefono</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 d-none d-sm-block text-center\">\n\t\t\t\t\t\t<p>Correo</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 col-6 text-center\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAcciones\n\t\t\t\t        </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li *ngFor=\"let cliente of clientes | paginate: { itemsPerPage: 10, currentPage: p }; index as i\" class=\"\" [class.pair]=\"i%2==0\">\n\t\t\t\t<app-cliente-display [cliente]='cliente' (borrarCliente)=\"borrarCliente($event)\" (editarCliente)=\"editarCliente($event)\" (actualizarLista)=\"actualizarLista($event)\" class=\"\"></app-cliente-display>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</main>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">{{action}} Cliente</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-cliente-agregar [action]=\"action\" (close)=\"actualizarLista();modalRef.hide()\"></app-cliente-agregar>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/clientes/clientes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cliente__ = __webpack_require__("../../../../../src/app/models/cliente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientesComponent = /** @class */ (function () {
    function ClientesComponent(clientesService, modalService, authService, router) {
        this.clientesService = clientesService;
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
        this.p = 1;
        this.order = 'nombre';
        this.reverse = false;
        this.selectedProduct = new __WEBPACK_IMPORTED_MODULE_1__models_cliente__["a" /* Cliente */];
        this.loading = false;
        this.action = 'agregar';
    }
    ClientesComponent.prototype.ngOnInit = function () {
        if (this.authService.isLogged == false) {
            this.router.navigate(['/']);
        }
        this.obtenerClientes();
    };
    ClientesComponent.prototype.orderBy = function (by) {
        this.order = by;
        this.clientes = this.sortByKey(this.clientes, by);
        if (this.reverse) {
            this.clientes.reverse();
        }
        this.reverse = !this.reverse;
    };
    ClientesComponent.prototype.sortByKey = function (array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            if (key.indexOf('.') != -1) {
                x = a[key.split('.')[0]][key.split('.')[1]];
                y = b[key.split('.')[0]][key.split('.')[1]];
            }
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    };
    ClientesComponent.prototype.editarCliente = function (cliente) {
        console.log('edit', cliente);
        this.selectedProduct = Object.assign({}, cliente);
    };
    ClientesComponent.prototype.editarClienteSave = function (cliente) {
        var _this = this;
        this.clientesService.editarCliente(cliente.cliente)
            .then(function (data) {
            _this.obtenerClientes();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    ClientesComponent.prototype.borrarCliente = function (cliente) {
        var _this = this;
        this.clientesService.borrarCliente(cliente)
            .then(function (data) {
            _this.obtenerClientes();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    ClientesComponent.prototype.obtenerClientes = function () {
        var _this = this;
        this.clientesService.obtenerClientes().subscribe(function (data) {
            _this.clientes = data.client;
        }, function (error) {
            console.log('error', error);
        });
    };
    ClientesComponent.prototype.agregarCliente = function (cliente) {
        var _this = this;
        this.loading = true;
        this.clientesService.agregarCliente(cliente.cliente)
            .then(function (data) {
            console.log('cliente agregado');
            cliente.form.reset();
            _this.loading = false;
            _this.obtenerClientes();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    ClientesComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ClientesComponent.prototype.agregar = function (template) {
        this.action = "agregar";
        this.openModal(template);
    };
    ClientesComponent.prototype.actualizarLista = function () {
        this.obtenerClientes();
    };
    ClientesComponent.prototype.ngAfterViewInit = function () {
        console.timeEnd();
    };
    ClientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clientes',
            template: __webpack_require__("../../../../../src/app/clientes/clientes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/clientes/clientes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], ClientesComponent);
    return ClientesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contabilidad/contabilidad.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contabilidad/contabilidad.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n\t\t<h1 class=\"h2\">Contabilidad</h1>\n\t\t<div class=\"btn-toolbar mb-2 mb-md-0\">\n\t\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 products row\">\n\t\t<div class=\"col-12\">\n\t\t\tContabilidad info\n\t\t</div>\n\t\t\n\t</div>\n</main>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">{{action}} Producto</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    modal\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/contabilidad/contabilidad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContabilidadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContabilidadComponent = /** @class */ (function () {
    function ContabilidadComponent() {
    }
    ContabilidadComponent.prototype.ngOnInit = function () {
    };
    ContabilidadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contabilidad',
            template: __webpack_require__("../../../../../src/app/contabilidad/contabilidad.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contabilidad/contabilidad.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContabilidadComponent);
    return ContabilidadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/facturas/factura-display/factura-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".factura-cambio{\n\theight: 25px;\n    width: 75px;\n    text-align: center;\n}\n\n.action .icon svg {\n    height: 18px;\n    top: 4px;\n    position: absolute;\n}\n\n.delete{\n\tpadding-top: 2px;\n}\n\n.action {\n    margin-bottom: 11px;\n}\n\n.ver-producto:hover{\n\ttext-decoration: underline;\n\tcursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturas/factura-display/factura-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 row\">\n\t<div class=\"col-6 col-sm-2\" *ngIf=\"productofacturaitem.producto.codigo != '0000'\">\n\t\t<p (click)=\"ver(template)\" class=\"ver-producto\">{{productofacturaitem.producto.nombre}} - {{productofacturaitem.producto.marca}}</p>\n\t</div>\n\t<div class=\"col-6 col-sm-2\" *ngIf=\"productofacturaitem.producto.codigo == '0000'\">\n\t\t<p class=\"ver-producto\">\n\t\t\t<input type=\"type\" name=\"nombre\" [(ngModel)]=\"productofacturaitem.producto.nombre\" style=\"width: 100px\">\n\t\t</p>\n\t</div>\n\t<div class=\"col-2 text-center d-none d-sm-block\" *ngIf=\"productofacturaitem.producto.codigo != '0000'\" >\n\t\t<p>{{productofacturaitem.producto.precio | number:'1.2-2'}}<span *ngIf=\"productofacturaitem.producto.impuestos\">*</span></p>\n\t</div>\n\t<div class=\"col-2 text-center d-none d-sm-block\" *ngIf=\"productofacturaitem.producto.codigo == '0000'\">\n\t\t<input type=\"number\" name=\"nombre\" [(ngModel)]=\"productofacturaitem.producto.precio\" class=\"factura-cambio\" (focusout)=\"fueraPrecio($event)\">\n\t</div>\n\t<div class=\"col-2 text-center d-none d-sm-block\">\n\t\t<input type=\"number\" name=\"cantidad\" class=\"factura-cambio\" [(ngModel)]=\"productofacturaitem.cantidad\" (focusout)=\"fueraCantidad()\" [disabled]=\"estado == 'completa'\" style=\"width: 80%;\">\n\t</div>\n\t<div class=\"col-2 text-center d-none d-sm-block\">\n\t\t<input type=\"number\" name=\"descuento\" class=\"factura-cambio\" [(ngModel)]=\"productofacturaitem.descuento\" (focusout)=\"fueraDescuento()\" [disabled]=\"estado == 'completa'\" style=\"width: 80%;\">\n\t</div>\n\t<div class=\"col-2 text-center d-none d-sm-block\">\n\t\t<select [(ngModel)]=\"productofacturaitem.descuento_tipo\" (focusout)=\"fueraDescuentoTipo()\" name=\"descuento_tipo\" class=\"form-control small-select\" [disabled]=\"estado == 'completa'\" style=\"width: 80%; padding: 0;\"> \n\t\t    <option value=\"1\">Colones</option>\n\t\t    <option value=\"2\">%</option>\n\t\t</select>\n\t</div>\n\t<div class=\"col-6 col-sm-2 text-center\">\n\t\t<p class=\"action\" *ngIf=\"estado != 'completa'\">\n\t        <button class=\"btn btn-sm btn-outline-secondary delete\" (click)=\"borrar()\" tooltip=\"Eliminar de la lista.\">\n\t        \t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"/><path d=\"M18 9l-6 6\"/><path d=\"M12 9l6 6\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tEliminar\n\t        \t</span>\n\t        </button>\n        </p>\n\t</div>\n</div>\n \n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">Ver Producto</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-producto-agregar [action]=\"'ver'\" [selectedProduct]=\"copy\" (close)=\"actualizar();modalRef.hide();\"></app-producto-agregar>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/facturas/factura-display/factura-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_productofacturaitem__ = __webpack_require__("../../../../../src/app/models/productofacturaitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_producto__ = __webpack_require__("../../../../../src/app/models/producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacturaDisplayComponent = /** @class */ (function () {
    function FacturaDisplayComponent(modalService) {
        this.modalService = modalService;
        this.borrarProd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editarFactura = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.actualizarLista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    FacturaDisplayComponent.prototype.ngOnInit = function () {
        //this.copy = JSON.parse(JSON.stringify(this.productofacturaitem.producto));
    };
    FacturaDisplayComponent.prototype.borrar = function () {
        console.log('borrar');
        this.borrarProd.emit(this.index);
    };
    FacturaDisplayComponent.prototype.fueraDescuento = function () {
        if (this.productofacturaitem.descuento == null || isNaN(this.productofacturaitem.descuento)) {
            this.productofacturaitem.descuento = 0;
        }
        else if (this.productofacturaitem.descuento > 99 && this.productofacturaitem.descuento_tipo == 2) {
            this.productofacturaitem.descuento = 0;
            alert('Cambie el monto de descuento si quiere usar porcentajes.');
        }
        else if (this.productofacturaitem.descuento > this.productofacturaitem.producto.precio && this.productofacturaitem.descuento_tipo == 1) {
            this.productofacturaitem.descuento = 0;
            alert('No puede poner un descuento mayor al precio del producto.');
        }
        else if (this.productofacturaitem.descuento < 0) {
            this.productofacturaitem.descuento = 0;
            alert('El descuento no puede ser menor a 0.');
        }
        else {
            this.editarFactura.emit();
        }
    };
    FacturaDisplayComponent.prototype.fueraDescuentoTipo = function () {
        if (this.productofacturaitem.descuento > 99 && this.productofacturaitem.descuento_tipo == 2) {
            this.productofacturaitem.descuento_tipo = 1;
            alert('Cambie el monto de descuento si quiere usar porcentajes. 2');
        }
        else if (this.productofacturaitem.descuento > this.productofacturaitem.producto.precio && this.productofacturaitem.descuento_tipo == 1) {
            this.productofacturaitem.descuento_tipo = 2;
            alert('No puede poner un descuento mayor al precio del producto.');
        }
        else {
            this.editarFactura.emit();
        }
    };
    FacturaDisplayComponent.prototype.fueraCantidad = function () {
        if (this.productofacturaitem.cantidad == null || isNaN(this.productofacturaitem.cantidad)) {
            this.productofacturaitem.cantidad = 1;
        }
        else if (this.productofacturaitem.cantidad > this.productofacturaitem.producto.cantidad) {
            this.productofacturaitem.cantidad = 1;
            alert('No puede poner una cantidad mayor a la disponible: ' + this.productofacturaitem.producto.cantidad + '.');
        }
        else if (this.productofacturaitem.cantidad < 1) {
            this.productofacturaitem.cantidad = 1;
            alert('La cantidad no puede ser menor a 1.');
        }
        else {
            this.editarFactura.emit();
        }
    };
    FacturaDisplayComponent.prototype.fueraPrecio = function () {
        if (this.productofacturaitem.producto.precio == null || isNaN(this.productofacturaitem.producto.precio)) {
            this.productofacturaitem.producto.precio = 1;
            alert('El precio no debe ser un número.');
        }
        else if (this.productofacturaitem.producto.precio < 1) {
            this.productofacturaitem.producto.precio = 1;
            alert('El precio no puede ser menor a 1.');
        }
    };
    FacturaDisplayComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    FacturaDisplayComponent.prototype.ver = function (template) {
        this.copy = JSON.parse(JSON.stringify(this.productofacturaitem.producto));
        this.openModal(template);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_productofacturaitem__["a" /* Productofacturaitem */])
    ], FacturaDisplayComponent.prototype, "productofacturaitem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_producto__["a" /* Producto */])
    ], FacturaDisplayComponent.prototype, "copy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], FacturaDisplayComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FacturaDisplayComponent.prototype, "estado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FacturaDisplayComponent.prototype, "borrarProd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FacturaDisplayComponent.prototype, "editarFactura", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FacturaDisplayComponent.prototype, "actualizarLista", void 0);
    FacturaDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-factura-display',
            template: __webpack_require__("../../../../../src/app/facturas/factura-display/factura-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/facturas/factura-display/factura-display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], FacturaDisplayComponent);
    return FacturaDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/facturas/facturas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-results{\n\tpadding-left: 0; \n\tmargin-top:20px;\n}\n\n.search-results li{\n\tmargin-top: 7px;\n\tmargin-bottom: 8px;\n\tborder-bottom: 1px solid gray;\n}\n\n.search-results li div{\n\t/*white-space: nowrap;*/\n  \t/*overflow: hidden;*/\n  \t/*text-overflow: ellipsis;*/\n}\n\ninput{\n\tmax-width: 100%;\n}\n\n.seleccionar{\n    padding: 0;\n    text-decoration:  underline;\n}\n\n.totales{\n\tpadding-left: 0;\n    margin-left: 15px;\n}\n\n.totales .item{\n\tmargin-bottom: 10px;\n}\n\n.ultimo{\n\tborder-bottom: 1px solid black;\n    padding-bottom: 20px;\n}\n\n.products-list{\n\tborder: 1px solid gray;\n    border-radius: 10px;\n    margin-right: 5px;\n}\n\n.list-products{\n\theight: 500px;\n    overflow-y: scroll;\n}\n\n.client-display{\n\tfont-weight: bold;\n}\n\n.no-client{\n\tcolor: red;\n}\n\n.no-client span{\n\tcolor:#007bff;\n}\n\n.no-client span:hover{\n\ttext-decoration: underline;\n\tcursor: pointer;\n}\n\n.confirmar-items .row{\n\tmargin-bottom: 20px;\n}\n\n.invisible{\n\t/*visibility: hidden;*/\n\theight: 0px !important;\n\toverflow: hidden;\n}\n\nul{\n\tpadding-left: 0;\n}\n\n.agotado-item{\n\tpadding-bottom: 6px;\n\tpadding-top: 6px;\n\tborder-bottom: 1px solid black\n}\n\n.stay-in-box{\n\toverflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturas/facturas.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"col-md-10 ml-sm-auto col-lg-10 pt-3 px-4\">\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n\t\t<h1 class=\"h2\">Factura</h1>\n\t\t<div>\n\t\t\t<span class=\"client-display\">\n\t\t\t\tCliente: \n\t\t\t</span>\n\t\t\t<span class=\"client-display\" *ngIf=\"factura.comprador.nombre != ''\">\n\t\t\t\t{{factura.comprador.nombre}} {{factura.comprador.apellido1}} - {{factura.comprador.cedula}} <span (click)=\"seleccionarCliente(template)\" class=\"client-display no-client\" *ngIf=\"factura.estado != 'completa'\"><span>Cambiar Cliente</span></span>\n\t\t\t</span>\n\t\t\t<span class=\"client-display no-client\" *ngIf=\"factura.comprador.nombre == ''\">\n\t\t\t\tFactura sin cliente <span (click)=\"seleccionarCliente(template)\" *ngIf=\"factura.estado != 'completa'\">Seleccionar Cliente</span>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"btn-toolbar mb-2 mb-md-0\" >\n\t\t\t<span *ngIf=\"guardado\">Guardado </span>\n\t\t\t<div class=\"btn-group mr-2\" *ngIf=\"factura.estado != 'completa'\">\n\t\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" (click)=\"guardar('pendiente',agotadosPop)\">Guardar</button>\n\t\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" (click)=\"confirmar(completarPop)\">Completar</button>\n\t\t\t</div>\n\t        <span class=\"client-display\" *ngIf=\"factura.estado == 'completa'\">\n\t        \tFactura Completa\n\t        </span>\n\t\t</div>\n\t</div>\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap pb-2 mb-3 products row\">\n\t\t<div class=\"col-12 col-md-8 products-list order-2 order-md-1\">\n\t\t\t<!-- <perfect-scrollbar style=\"max-width: 600px; max-height: 400px;\"> -->\n\t\t\t\t<ul class=\"col-12 items-list\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"col-12 row\">\n\t\t\t\t\t\t\t<div class=\"col-6 col-sm-2\">\n\t\t\t\t\t\t\t\t<p>Producto</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2 text-center d-none d-sm-block\">\n\t\t\t\t\t\t\t\t<p>Precio</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2 text-center d-none d-sm-block\">\n\t\t\t\t\t\t\t\t<p>Cantidad</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2 text-center d-none d-sm-block\">\n\t\t\t\t\t\t\t\t<p>Descuento </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2 text-center d-none d-sm-block\">\n\t\t\t\t\t\t\t\t<p>Tipo Desc</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-6 col-sm-2 text-center\">\n\t\t\t\t\t\t\t\t<p>Accion</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"col-12 items-list list-products\">\n\t\t\t\t\t<li *ngFor=\"let pfi of factura.productos; index as i\" class=\"\" [class.pair]=\"i%2==0\">\n\t\t\t\t\t\t<app-factura-display [productofacturaitem]='pfi' (borrarProd)=\"eliminarProd($event)\" (editarFactura)=\"editarFactura($event)\" (actualizarLista)=\"actualizarLista($event)\" [index]=\"i\" [estado]=\"factura.estado\" class=\"\"></app-factura-display>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t<!-- </perfect-scrollbar> -->\n\t\t</div>\n\t\t<div class=\"col-12 col-md-4 order-1 order-md-2\" style=\"padding-right:0;\">\n\t\t\t<div class=\"col-12 row totales\">\n\t\t\t\t<div class=\"col-12 row item\">\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\tDescuento\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t\t<input type=\"number\" name=\"descuento\" class=\"factura-cambio\" [(ngModel)]=\"factura.descuento\" (focusout)=\"fueraDescuento()\" [disabled]=\"factura.estado == 'completa'\" style=\"width: 80%; padding: 0;\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 row item\">\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\tTipo de descuento\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t\t<select [(ngModel)]=\"factura.descuento_tipo\" name=\"descuento_tipo\" class=\"form-control small-select\" (change)=\"actualizaTotal()\" [disabled]=\"factura.estado == 'completa'\" style=\"width: 80%; padding: 0;\"> \n\t\t\t\t\t\t    <option value=\"1\">Colones</option>\n\t\t\t\t\t\t    <option value=\"2\">%</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 row item\">\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\tDescuentos\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t\t{{totalDescuento() | number:'1.2-2'}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 row item\">\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\tTotal sin Impuestos\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t\t{{totalNeto() | number:'1.2-2'}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 row item ultimo\">\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\tImpuestos\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t\t{{totalImpuestos() | number:'1.2-2'}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 row item\">\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\tTotal\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t\t{{totalGlobal() | number:'1.2-2'}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 row totales card\" style=\"margin-top: 40px;\" *ngIf=\"factura.estado == 'completa'\">\n\t\t\t\t<div class=\"col-12 row item\">\n\t\t\t\t\t<div class=\"col-7\">\n\t\t\t\t\t\tFecha Completada\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-5 text-right\">\n\t\t\t\t\t\t{{factura.fecha_modificada | date:'dd/MM/yyyy'}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 row item\">\n\t\t\t\t\t<div class=\"col-7\">\n\t\t\t\t\t\tTipo de pago\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-5 text-right\">\n\t\t\t\t\t\t<span *ngIf=\"factura.tipo_de_pago == 'efectivo'\">\n\t\t\t\t\t\t\tEfectivo\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span *ngIf=\"factura.tipo_de_pago == 'tarjeta'\">\n\t\t\t\t\t\t\tTarjeta\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span *ngIf=\"factura.tipo_de_pago == 'notacredito'\">\n\t\t\t\t\t\t\tNota de Credito\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 row item\" *ngIf=\"factura.tipo_de_pago == 'tarjeta'\">\n\t\t\t\t\t<div class=\"col-7\">\n\t\t\t\t\t\tComprobante\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-5 text-right\">\n\t\t\t\t\t\t{{factura.comprobante}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 row item\">\n\t\t\t\t\t<div class=\"col-7\">\n\t\t\t\t\t\tImprimir factura\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-5 text-right\">\n\t\t\t\t\t\t<p class=\"action\">\n\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" (click)=\"openModalPrint(print)\" tooltip=\"Imprimir factura.\" style=\"color: black;\">\n\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9V2h12v7\"/><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"/><path d=\"M6 14h12v8H6z\"/></g></svg>\n\t\t\t\t\t          \t</span>\n\t\t\t\t\t          \t<span class=\"label\">\n\t\t\t\t\t          \t\tImprimir\n\t\t\t\t\t        \t</span>\n\t\t\t\t\t        </button>\n\t\t\t\t        </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 row\" style=\"margin-top: 50px;padding-right:0;\" [class.invisible]=\"factura.estado == 'completa'\">\n\t\t\t\t<div class=\"col-6 row no-gutters\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\tCodigo\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<input type=\"text\" name=\"txtCodigo\" id=\"buscarPorCodigo\" [(ngModel)]=\"codigo\" (ngModelChange)=\"changedCodigo()\" placeholder=\"Buscar por código\" tabindex=\"1\" [disabled]=\"factura.estado == 'completa'\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-6 row no-gutters\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\tProducto\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<input type=\"text\" name=\"txtProducto\" [(ngModel)]=\"nombreProducto\" (ngModelChange)=\"changedNombre()\" placeholder=\"Buscar por Nombre\" tabindex=\"2\" [disabled]=\"factura.estado == 'completa'\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 row\" style=\"padding-right:0;\">\n\t\t\t\t<ul class=\"search-results col-12\" *ngIf=\"productos.length > 0\">\n\t\t\t\t\t<li class=\"col-12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-4 col-lg-3\">\n\t\t\t\t\t\t\t\tCódigo\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4 col-lg-3\">\n\t\t\t\t\t\t\t\tNombre\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-3 d-none d-lg-block\">\n\t\t\t\t\t\t\t\tMarca\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4 col-lg-3\">\n\t\t\t\t\t\t\t\tAcción\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngFor=\"let prod of productos; index as i\" class=\"col-12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-4 col-lg-3\">\n\t\t\t\t\t\t\t\t{{prod.codigo}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4 col-lg-3\">\n\t\t\t\t\t\t\t\t{{prod.nombre}} \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-3 stay-in-box d-none d-lg-block\" tooltip=\"{{prod.marca}}\">\n\t\t\t\t\t\t\t\t{{prod.marca}} \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4 col-lg-3 stay-in-box\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-link seleccionar\" (click)=\"seleccionarProd(prod)\" tabindex=\"{{i+3}}\">Seleccionar</button> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<p *ngIf=\"buscando && productos.length == 0\">\n\t\t\t\t\t\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n</main>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">Seleccionar Cliente</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n  \t<div class=\"col-12\" style=\"border-bottom: 1px solid black;padding-bottom:  27px;\">\n  \t\t<div class=\"row\">\n\t\t\t<div class=\"col-5 row\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\tNombre\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<input type=\"text\" name=\"txtCodigo\" id=\"buscarPorCodigo\" [(ngModel)]=\"nombreCliente\" (ngModelChange)=\"changedNombreCliente()\" placeholder=\"Buscar por nombre\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-5 row\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\tCedula\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<input type=\"text\" name=\"txtProducto\" [(ngModel)]=\"cedulaCliente\" (ngModelChange)=\"changedCedula()\" placeholder=\"Buscar por Cedula\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-2 row\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<span class=\"client-display no-client\" (click)=\"openModalAgregar(clienteAgregar)\"><span>Nuevo Cliente</span></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    <ul class=\"col-12 items-list\">\n\t\t<li>\n\t\t\t<div class=\"col-12 row\">\n\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t<p>Nombre</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-3 text-center\">\n\t\t\t\t\t<p>Cedula</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-5 text-center\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAcciones\n\t\t\t        </p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li *ngFor=\"let cliente of clientes; index as i\" class=\"\" [class.pair]=\"i%2==0\">\n\t\t\t<div class=\"col-12 row\">\n\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t<p>{{cliente.nombre}} {{cliente.apellido1}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-3 text-center\">\n\t\t\t\t\t<p>{{cliente.cedula}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-5 text-center\">\n\t\t\t\t\t<p class=\"action\">\n\t\t\t\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" (click)=\"seleccionarClient(cliente)\" tooltip=\"Seleccionar cliente.\">\n\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2l4 4L7 17H3v-4L14 2z\"/><path d=\"M3 22h18\"/></g></svg>\n\t\t\t\t          \t</span>\n\t\t\t\t          \t<span class=\"label\">\n\t\t\t\t          \t\tSeleccionar\n\t\t\t\t        \t</span>\n\t\t\t\t        </button>\n\t\t\t        </p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</ul>\n  </div>\n</ng-template>\n\n<ng-template #print>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">Imprimir</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"printRefCompletar.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n  \t<div class=\"text-center\">\n  \t\t<p>Seleccione el tipo de factura a imprimir</p>\n  \t</div>\n    <div class=\"col-12\">\n    \t<div class=\"row\" style=\"padding-bottom: 35px;\">\n    \t\t<div class=\"col-5 card\" (click)=\"imprimir('pdv')\">\n    \t\t\t<p class=\"text-center\">\n    \t\t\t\tImpresora punto de venta.\n    \t\t\t</p>\n    \t\t\t<p class=\"text-center\">\n    \t\t\t\t<img src=\"/assets/pdv.png\" style=\"width: 178px;\">\n    \t\t\t</p>\n    \t\t</div>\n    \t\t<div class=\"col-5 offset-2 card\" (click)=\"imprimir('A4')\">\n    \t\t\t<p class=\"text-center\">\n    \t\t\t\tHoja A4\n    \t\t\t</p>\n    \t\t\t<p class=\"text-center\">\n    \t\t\t\t<img src=\"/assets/a4.jpg\" style=\"width: 131px;\">\n    \t\t\t</p>\n    \t\t</div>\n    \t</div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #agotadosPop>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Productos agotados o insuficientes</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"agotadosRefCompletar.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n  \t<div class=\"text-center\">\n  \t\t<p>Los siguientes productos se encuentran agotados o son insuficientes para su compra.</p>\n  \t</div>\n    <div class=\"col-12\">\n    \t<ul>\n    \t\t<li class=\"row agotado-item\">\n    \t\t\t<div class=\"col-3\">\n    \t\t\t\tCodigo \n    \t\t\t</div>\n    \t\t\t<div class=\"col-3\"> \n    \t\t\t\tNombre\n    \t\t\t</div>\n    \t\t\t<div class=\"col-3\"> \n    \t\t\t\tMarca\n    \t\t\t</div>\n    \t\t\t<div class=\"col-3\"> \n    \t\t\t\tCant Disp\n    \t\t\t</div>\n\t\t\t</li>\n    \t\t<li *ngFor=\"let agotado of agotados\" class=\"row agotado-item\">\n    \t\t\t<div class=\"col-3\">\n    \t\t\t\t{{agotado.producto.codigo}}  \n    \t\t\t</div>\n    \t\t\t<div class=\"col-3\"> \n    \t\t\t\t{{agotado.producto.nombre}}\n    \t\t\t</div>\n    \t\t\t<div class=\"col-3\"> \n    \t\t\t\t{{agotado.producto.marca}}\n    \t\t\t</div>\n    \t\t\t<div class=\"col-3\"> \n    \t\t\t\t{{agotado.cantidadDisponible}}\n    \t\t\t</div>\n    \t\t</li>\n    \t</ul>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #clienteAgregar>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">agregar Cliente</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRefAgregar.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-cliente-agregar [action]=\"'agregar'\" (close)=\"actualizarListaClientes();modalRefAgregar.hide()\"></app-cliente-agregar>\n  </div>\n</ng-template>\n\n<ng-template #completarPop>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">Confirmar Factura</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRefCompletar.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"col-12 confirmar-items\">\n    \t<div class=\"row\">\n    \t\t<div class=\"col-3\">\n    \t\t\tCliente\n    \t\t</div>\n    \t\t<div class=\"col-9\">\n    \t\t\t<span class=\"client-display\" *ngIf=\"factura.comprador.nombre != ''\">\n\t\t\t\t\t{{factura.comprador.nombre}} {{factura.comprador.apellido1}} - {{factura.comprador.cedula}} <span (click)=\"seleccionarCliente(template)\" class=\"client-display no-client\"><span>Cambiar Cliente</span></span>\n\t\t\t\t</span>\n\t\t\t\t<span class=\"client-display no-client\" *ngIf=\"factura.comprador.nombre == ''\">\n\t\t\t\t\tFactura sin cliente <span (click)=\"seleccionarCliente(template)\">Seleccionar Cliente</span>\n\t\t\t\t</span>\n    \t\t</div>\n    \t</div>\n    \t<div class=\"row\">\n    \t\t<div class=\"col-3\">\n    \t\t\tTotal\n    \t\t</div>\n    \t\t<div class=\"col-9\">\n    \t\t\t{{totalGlobal() | number:'1.2-2'}}\n    \t\t</div>\n    \t</div>\n    \t<div class=\"row\">\n    \t\t<div class=\"col-3\">\n    \t\t\tTipo de pago\n    \t\t</div>\n    \t\t<div class=\"col-9\">\n    \t\t\t<select [(ngModel)]=\"factura.tipo_de_pago\" name=\"tipo_de_pago\" class=\"form-control\"> \n\t\t\t\t    <option value=\"efectivo\" selected=\"\">Efectivo</option>\n\t\t\t\t    <option value=\"tarjeta\">Tarjeta</option>\n\t\t\t\t    <option value=\"notacredito\">Nota de Credito</option>\n\t\t\t\t</select>\n    \t\t</div>\n    \t</div>\n    \t<div class=\"row\" *ngIf=\"factura.tipo_de_pago == 'tarjeta'\">\n    \t\t<div class=\"col-3\">\n    \t\t\tComprobante\n    \t\t</div>\n    \t\t<div class=\"col-9\">\n    \t\t\t<input type=\"text\" [(ngModel)]=\"factura.comprobante\" name=\"comprobante\" class=\"form-control\"> \n    \t\t</div>\n    \t</div>\n    \t<p *ngIf=\"errorDisplay\" class=\"error\">{{errorDisplay}}</p>\n\t\t<div>\n\t\t\t<button type=\"submit\" class=\"btn btn-success\" (click)=\"completarFactura(agotadosPop)\">\n\t\t\t\t<span>Completar</span>\n\t\t\t</button>\n\t\t</div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/facturas/facturas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_producto__ = __webpack_require__("../../../../../src/app/models/producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_factura__ = __webpack_require__("../../../../../src/app/models/factura.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_productofacturaitem__ = __webpack_require__("../../../../../src/app/models/productofacturaitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_productos_service__ = __webpack_require__("../../../../../src/app/services/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_factura_service__ = __webpack_require__("../../../../../src/app/services/factura.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var FacturasComponent = /** @class */ (function () {
    function FacturasComponent(productosService, facturaService, modalService, clientesService, route, decimalPipe, authService, router) {
        this.productosService = productosService;
        this.facturaService = facturaService;
        this.modalService = modalService;
        this.clientesService = clientesService;
        this.route = route;
        this.decimalPipe = decimalPipe;
        this.authService = authService;
        this.router = router;
        this.codigo = '';
        this.copy = new __WEBPACK_IMPORTED_MODULE_2__models_producto__["a" /* Producto */]();
        this.nombreProducto = '';
        this.nombreCliente = '';
        this.productos = [];
        this.agotados = [];
        this.buscando = false;
        this.factura = new __WEBPACK_IMPORTED_MODULE_3__models_factura__["a" /* Factura */]();
        this.total = 0;
        this.id = '';
        this.errorDisplay = '';
        this.guardado = false;
        this.changedCodigo = __WEBPACK_IMPORTED_MODULE_11_lodash__["debounce"](function () {
            var _this = this;
            if (this.codigo.length > 2) {
                this.buscando = true;
                this.productosService.obtenerProductosFiltroCodigo(this.codigo).subscribe(function (data) {
                    if (data.product.length > 1) {
                        _this.productos = data.product;
                    }
                    else if (data.product.length == 1) {
                        _this.seleccionarProd(data.product[0]);
                    }
                    else {
                    }
                }, function (fail) {
                });
            }
        }, 400);
        this.changedNombre = __WEBPACK_IMPORTED_MODULE_11_lodash__["debounce"](function () {
            var _this = this;
            if (this.nombreProducto.length > 2) {
                this.buscando = true;
                this.productosService.obtenerProductosFiltroNombre(this.nombreProducto).subscribe(function (data) {
                    _this.productos = data.product;
                }, function (fail) {
                });
            }
        }, 400);
        this.changedNombreCliente = __WEBPACK_IMPORTED_MODULE_11_lodash__["debounce"](function () {
            var _this = this;
            if (this.nombreCliente.length > 2) {
                this.buscando = true;
                this.clientesService.obtenerClientesFiltroNombre(this.nombreCliente).subscribe(function (data) {
                    _this.clientes = data.client;
                }, function (fail) {
                });
            }
        }, 400);
        this.changedCedula = __WEBPACK_IMPORTED_MODULE_11_lodash__["debounce"](function () {
            var _this = this;
            if (this.cedulaCliente.length > 2) {
                this.buscando = true;
                this.clientesService.obtenerClientesFiltroCedula(this.cedulaCliente).subscribe(function (data) {
                    _this.clientes = data.client;
                }, function (fail) {
                });
            }
        }, 400);
    }
    FacturasComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.getElementById("buscarPorCodigo").focus();
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
            if (_this.id != undefined) {
                _this.facturaService.obtenerFacturasId(_this.id).subscribe(function (data) {
                    console.log(data);
                    _this.factura = data.productBill;
                    _this.actualizaTotal();
                }, function (fail) {
                });
            }
        });
    };
    FacturasComponent.prototype.seleccionarProd = function (prod) {
        if (prod.cantidad >= 1) {
            var pfi = new __WEBPACK_IMPORTED_MODULE_4__models_productofacturaitem__["a" /* Productofacturaitem */]();
            pfi.producto = prod;
            pfi.cantidad = 1;
            pfi.descuento = prod.descuento;
            pfi.descuento_tipo = prod.descuento_tipo;
            this.factura.productos.unshift(pfi);
            this.actualizaTotal();
            this.productos = [];
            this.nombreProducto = '';
            this.codigo = '';
            document.getElementById("buscarPorCodigo").focus();
        }
        else {
            alert('El producto se encuentra agotado.');
        }
    };
    FacturasComponent.prototype.eliminarProd = function (index) {
        this.factura.productos.splice(index, 1);
        this.actualizaTotal();
    };
    FacturasComponent.prototype.actualizaTotal = function () {
        var total = 0;
        for (var i = this.factura.productos.length - 1; i >= 0; i--) {
            var productoPrecio = this.factura.productos[i].producto.precio;
            if (this.factura.productos[i].descuento > 0) {
                if (this.factura.productos[i].descuento_tipo == 1) {
                    productoPrecio -= this.factura.productos[i].descuento;
                }
                else {
                    productoPrecio -= (productoPrecio * (this.factura.productos[i].descuento * 0.01));
                }
            }
            total += productoPrecio * this.factura.productos[i].cantidad;
        }
        if (total > 0) {
            if (this.factura.descuento > 0) {
                if (this.factura.descuento_tipo == 1) {
                    total -= this.factura.descuento;
                }
                else {
                    total -= (total * (this.factura.descuento * 0.01));
                }
            }
        }
        if (total < 0) {
            alert('Por favor revise los datos');
        }
        this.total = total;
    };
    FacturasComponent.prototype.editarFactura = function (param) {
        this.actualizaTotal();
    };
    FacturasComponent.prototype.fueraDescuento = function () {
        if (this.factura.descuento == null || isNaN(this.factura.descuento)) {
            this.factura.descuento = 0;
        }
        this.actualizaTotal();
    };
    FacturasComponent.prototype.confirmar = function (template) {
        console.log(this.factura);
        this.openModalCompletar(template);
    };
    FacturasComponent.prototype.guardar = function (estado, template) {
        var _this = this;
        if (estado === void 0) { estado = 'pendiente'; }
        if (this.factura.vendedor.nombre == '') {
            this.factura.vendedor = this.authService.loggedUser;
        }
        var that = this;
        if (this.total > 0) {
            this.factura.idSucursal = this.authService.loggedUser.idSucursal;
            if (this.id == undefined) {
                this.factura.estado = estado;
                var that = this;
                this.facturaService.agregarFactura(this.factura)
                    .then(function (data) {
                    console.log('success');
                    console.log(data);
                    if (data.productBill.error) {
                        // alert(data.productBill.error);
                        that.agotados = data.productBill.productos;
                        that.openModalAgotados(template);
                    }
                    else {
                        that.guardado = true;
                        setTimeout(function (argument) {
                            that.guardado = false;
                        }, 2000);
                        that.router.navigate(['/vender/' + data.productBill._id]);
                    }
                }, function (fail) {
                    console.log('fail');
                    console.log(fail);
                });
            }
            else {
                this.factura.estado = estado;
                this.facturaService.editarFactura(this.factura)
                    .then(function (data) {
                    console.log(data);
                    if (data.productBill.error) {
                        _this.factura.estado = 'pendiente';
                        // alert(data.productBill.error);
                        that.agotados = data.productBill.productos;
                        that.openModalAgotados(template);
                    }
                    else {
                        that.guardado = true;
                        setTimeout(function (argument) {
                            that.guardado = false;
                        }, 2000);
                    }
                }, function (fail) {
                    console.log('fail');
                    console.log(fail);
                });
            }
        }
    };
    FacturasComponent.prototype.seleccionarCliente = function (template) {
        this.obtenerClientes();
        this.openModal(template);
    };
    FacturasComponent.prototype.obtenerClientes = function () {
        var _this = this;
        this.clientesService.obtenerClientes().subscribe(function (data) {
            console.log('clientes', _this.clientes);
            _this.clientes = data.client;
        }, function (error) {
            console.log('error', error);
        });
    };
    FacturasComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    FacturasComponent.prototype.openModalAgregar = function (template) {
        this.modalRefAgregar = this.modalService.show(template);
    };
    FacturasComponent.prototype.openModalCompletar = function (template) {
        this.modalRefCompletar = this.modalService.show(template);
    };
    FacturasComponent.prototype.openModalPrint = function (template) {
        this.printRefCompletar = this.modalService.show(template);
    };
    FacturasComponent.prototype.openModalAgotados = function (template) {
        this.agotadosRefCompletar = this.modalService.show(template);
    };
    FacturasComponent.prototype.seleccionarClient = function (client) {
        this.factura.comprador = client;
        this.nombreCliente = '';
        this.cedulaCliente = 0;
        if (this.modalRef) {
            this.modalRef.hide();
        }
        if (this.modalRefAgregar) {
            this.modalRefAgregar.hide();
        }
    };
    FacturasComponent.prototype.actualizarListaClientes = function () {
        var _this = this;
        this.obtenerClientes();
        this.clientesService.obtenerClientes().subscribe(function (data) {
            console.log('clientes', _this.clientes);
            _this.clientes = data.client;
            _this.nombreCliente = '';
            _this.cedulaCliente = 0;
            if (_this.clientes.length > 0) {
                _this.seleccionarClient(_this.clientes[_this.clientes.length - 1]);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    FacturasComponent.prototype.completarFactura = function (temp) {
        // this.factura.estado = 'completa';
        this.guardar('completa', temp);
        this.modalRefCompletar.hide();
    };
    FacturasComponent.prototype.paseDate = function (date) {
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var parsed = dd + '/' + mm + '/' + yyyy;
        return parsed;
    };
    FacturasComponent.prototype.truncate = function (str, limit) {
        var bits, i;
        bits = str.split('');
        if (bits.length > limit) {
            for (i = bits.length - 1; i > -1; --i) {
                if (i > limit) {
                    bits.length = i;
                }
                else if (' ' === bits[i]) {
                    bits.length = i;
                    break;
                }
            }
            bits.push('...');
        }
        return bits.join('');
    };
    FacturasComponent.prototype.imprimir = function (tipo) {
        console.log('imprimir', tipo, this.factura.productos.length);
        var doc;
        var that = this;
        if (tipo == 'A4') {
            var img = new Image();
            img.addEventListener('load', function () {
                // header
                var pags = Math.ceil(that.factura.productos.length / 32);
                doc = new __WEBPACK_IMPORTED_MODULE_12_jspdf__('p', 'pt', 'letter');
                // var i = 0;
                // console.log('j',j,pags);
                var j = 0;
                var o, f, temparray, chunk = 32;
                for (o = 0, f = that.factura.productos.length; o < f; o += chunk) {
                    temparray = that.factura.productos.slice(o, o + chunk);
                    console.log(temparray);
                    // for (var j = 0 ; j < pags; j++) {
                    console.log('looped', i, pags);
                    doc.setFont("helvetica");
                    doc.setFontType("bold");
                    doc.setFontSize("12");
                    doc.text('Factura Empresa', 100, 20);
                    doc.setFont("helvetica");
                    doc.setFontType("normal");
                    doc.setFontSize("8");
                    doc.text('San Ramón, Alajuela', 100, 35);
                    doc.text('Tel. 87051854', 100, 45);
                    doc.text('ronald.lb2@gmail.com', 100, 55);
                    doc.text('kyr.com', 100, 65);
                    img.width = 80;
                    img.height = 80;
                    doc.addImage(img, 'png', 25, 10);
                    // fin header
                    // numero factura
                    doc.setFont("helvetica");
                    doc.setFontType("bold");
                    doc.setFontSize("12");
                    doc.text('Factura No', 25, 120);
                    doc.text('100', 100, 120);
                    doc.text('Fecha', 25, 140);
                    doc.text(that.paseDate(new Date(that.factura.fecha_modificada)), 100, 140);
                    // fin numero factura
                    // cliente 
                    // doc.setFillColor(191,191,191);
                    doc.rect(300, 100, 250, 58);
                    doc.text('Cliente', 310, 115);
                    doc.setFont("helvetica");
                    doc.setFontType("normal");
                    doc.setFontSize("10");
                    doc.text('Nombre', 310, 130);
                    if (that.factura.comprador.nombre != '') {
                        doc.text(that.factura.comprador.nombre + ' ' +
                            that.factura.comprador.apellido1 + ' ' +
                            that.factura.comprador.apellido2, 380, 130);
                        doc.text('Cedula', 310, 145);
                        doc.text('' + that.factura.comprador.cedula, 380, 145);
                    }
                    else {
                        doc.text('Factura sin cliente', 380, 130);
                    }
                    // fin cliente
                    // tabla productos
                    doc.rect(25, 200, 560, 430);
                    doc.setFillColor(191, 191, 191);
                    doc.rect(26, 201, 558, 13, 'F');
                    var x = 26, y = 214;
                    for (var i = 0; i < 32; i++) {
                        if (i % 2 == 0) {
                            doc.setFillColor(204, 217, 255);
                        }
                        else {
                            doc.setFillColor(255, 255, 255);
                        }
                        doc.rect(x, y, 558, 13, 'F');
                        y += 13;
                    }
                    doc.setDrawColor(255, 255, 255);
                    doc.setLineWidth(1.5);
                    doc.line(100, 200, 100, 700);
                    doc.line(280, 200, 280, 700);
                    doc.line(330, 200, 330, 700);
                    doc.line(400, 200, 400, 700);
                    doc.line(480, 200, 480, 700);
                    doc.setFontSize("8");
                    doc.text('Código', 47, 210);
                    doc.text('Producto', 200, 210);
                    doc.text('Cantidad', 290, 210);
                    doc.text('Descuento', 345, 210);
                    doc.text('Precio und', 420, 210);
                    doc.text('Precio', 520, 210);
                    // fin tabla productos
                    // agregar productos
                    y = 223;
                    for (var i = temparray.length - 1; i >= 0; i--) {
                        doc.text('' + temparray[i].producto.codigo, 70, y, 'right');
                        if (temparray[i].producto.codigo != '0000') {
                            var text = '' + temparray[i].producto.nombre + ' ' + temparray[i].producto.marca;
                            doc.text(that.truncate(text, 50), 130, y);
                        }
                        else {
                            doc.text('' + temparray[i].producto.nombre, 130, y);
                        }
                        doc.text('' + temparray[i].cantidad, 310, y, 'right');
                        doc.text(that.toDecimals(that.descuentoPorProducto(temparray[i])), 380, y, 'right');
                        doc.text(that.toDecimals(temparray[i].producto.precio), 460, y, 'right');
                        doc.text(that.toDecimals(temparray[i].producto.precio * temparray[i].cantidad), 550, y, 'right');
                        y += 13;
                    }
                    // fin agregar productos
                    // total
                    doc.setFontSize("10");
                    doc.setFontType("bold");
                    doc.text('Total Bruto', 400, 670);
                    doc.setFontType("normal");
                    doc.text(that.toDecimals(that.totalBruto()), 560, 670, 'right');
                    doc.text('Descuento', 400, 690);
                    doc.text(that.toDecimals(that.totalDescuento()), 560, 690, 'right');
                    doc.text('Total Neto', 400, 710);
                    doc.text(that.toDecimals(that.totalNeto()), 560, 710, 'right');
                    doc.text('Impuestos', 400, 730);
                    doc.text(that.toDecimals(that.totalImpuestos()), 560, 730, 'right');
                    doc.setFontSize("11");
                    doc.setFontType("bold");
                    doc.text('Total Factura', 400, 750);
                    doc.text(that.toDecimals(that.totalGlobal()), 560, 750, 'right');
                    doc.text('Pag. ' + (j + 1) + ' de ' + pags, 540, 15);
                    if (j < pags - 1) {
                        doc.addPage();
                    }
                    j++;
                }
                // fin total
                that.printDoc(doc);
            });
            img.src = '/assets/kyr.jpg';
        }
        else {
            var height = 60;
            height += that.factura.productos.length * 4;
            doc = new __WEBPACK_IMPORTED_MODULE_12_jspdf__('p', 'mm', [60, height]);
            doc.setFontSize("10");
            doc.setFontType("bold");
            doc.text('KyR', 30, 8, "center");
            doc.setFontSize("7");
            doc.setFontType("normal");
            doc.text('San Ramón, Alajuela', 30, 12, "center");
            doc.text('8705-1854', 30, 16, "center");
            doc.text('ronald.lb2@gmail.com', 30, 20, "center");
            doc.text('kyr.com', 30, 24, "center");
            doc.text('206780037', 30, 28, "center");
            doc.text('Vendedor:', 7, 32, "left");
            doc.text(that.factura.vendedor.nombre + ' ' + that.factura.vendedor.apellido1, 30, 32, "left");
            //display products
            var y = 39;
            for (var i = that.factura.productos.length - 1; i >= 0; i--) {
                if (that.factura.productos[i].producto.codigo != '0000') {
                    var text = '' + that.factura.productos[i].producto.nombre + ' ' + that.factura.productos[i].producto.marca;
                    doc.text(that.truncate(text, 14), 7, y, 'left');
                }
                else {
                    doc.text('' + that.factura.productos[i].producto.nombre, 7, y, 'left');
                }
                doc.text('' + that.factura.productos[i].producto.codigo, 30, y, 'left');
                doc.text(that.toDecimals(that.factura.productos[i].producto.precio * that.factura.productos[i].cantidad), 50, y, 'right');
                y += 4;
            }
            // end display
            // total
            doc.text('-------------------------------------------------------------', 30, y, "center");
            doc.text('Total Neto: ', 35, y + 4, "right");
            doc.text(that.toDecimals(that.totalNeto()), 50, y + 4, "right");
            doc.text('Total Impuestos: ', 35, y + 8, "right");
            doc.text(that.toDecimals(that.totalImpuestos()), 50, y + 8, "right");
            doc.text('Total: ', 35, y + 12, "right");
            doc.text(that.toDecimals(that.totalGlobal()), 50, y + 12, "right");
            // fin total
            doc.setFontSize("8");
            doc.text('Muchas Gracias', 30, y + 19, "center");
            that.printDoc(doc);
            // doc.save('pdv.pdf')
        }
    };
    FacturasComponent.prototype.printDoc = function (doc) {
        var blob = doc.output("blob");
        window.open(URL.createObjectURL(blob));
        // var link = document.createElement('a');
        //    link.href = window.URL.createObjectURL(blob);
        //    link.setAttribute('download', 'factura');
        //    document.body.appendChild(link);    
        //    link.click();
        //    document.body.removeChild(link);   
    };
    FacturasComponent.prototype.descuentoPorProducto = function (productoItem) {
        var totalDescuento = 0;
        if (productoItem.descuento_tipo == 1) {
            totalDescuento += productoItem.descuento * productoItem.cantidad;
        }
        else {
            totalDescuento += (productoItem.producto.precio * productoItem.cantidad) * (productoItem.descuento * 0.01);
        }
        return totalDescuento;
    };
    FacturasComponent.prototype.totalBruto = function () {
        var totalBruto = 0;
        for (var i = this.factura.productos.length - 1; i >= 0; i--) {
            totalBruto += (this.factura.productos[i].producto.precio * this.factura.productos[i].cantidad);
        }
        return totalBruto;
    };
    FacturasComponent.prototype.totalDescuento = function () {
        var totalDescuento = 0;
        for (var i = this.factura.productos.length - 1; i >= 0; i--) {
            if (this.factura.productos[i].descuento_tipo == 1) {
                totalDescuento += this.factura.productos[i].descuento * this.factura.productos[i].cantidad;
            }
            else {
                totalDescuento += (this.factura.productos[i].producto.precio * this.factura.productos[i].cantidad) * (this.factura.productos[i].descuento * 0.01);
            }
        }
        if (this.factura.descuento_tipo == 1) {
            totalDescuento += this.factura.descuento;
        }
        else {
            totalDescuento += this.totalBruto() * (this.factura.descuento * 0.01);
        }
        return totalDescuento;
    };
    FacturasComponent.prototype.totalNeto = function () {
        return this.totalBruto() - this.totalDescuento();
    };
    // 1131 = x - (x * 0.13).       1131 = 1300 - ( 1300 * 0.13)
    // 1131 = x - x * 0.13.       1131 = 1300 - 1300 * 0.13
    // 1131 = x - 0.13x 
    // 1131 = 0.87x
    // 1131/0.87 = x 							 
    // 1131 = x - 0.13x
    FacturasComponent.prototype.totalImpuestos = function () {
        var imp = 0;
        for (var i = this.factura.productos.length - 1; i >= 0; i--) {
            if (this.factura.productos[i].producto.impuestos && this.factura.productos[i].producto.impuestos != 0) {
                imp += (this.factura.productos[i].producto.precio * this.factura.productos[i].cantidad) * this.factura.productos[i].producto.impuestos / 100;
            }
        }
        return imp;
    };
    FacturasComponent.prototype.totalGlobal = function () {
        // console.log(this.totalImpuestos(),this.totalNeto() * 0.13);
        this.factura.total = this.totalNeto() + this.totalImpuestos();
        return this.totalNeto() + this.totalImpuestos();
    };
    FacturasComponent.prototype.dottedLine = function (doc, xFrom, yFrom, xTo, yTo, segmentLength) {
        // Calculate line length (c)
        var a = Math.abs(xTo - xFrom);
        var b = Math.abs(yTo - yFrom);
        var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        // Make sure we have an odd number of line segments (drawn or blank)
        // to fit it nicely
        var fractions = c / segmentLength;
        var adjustedSegmentLength = (Math.floor(fractions) % 2 === 0) ? (c / Math.ceil(fractions)) : (c / Math.floor(fractions));
        // Calculate x, y deltas per segment
        var deltaX = adjustedSegmentLength * (a / c);
        var deltaY = adjustedSegmentLength * (b / c);
        var curX = xFrom, curY = yFrom;
        while (curX <= xTo && curY <= yTo) {
            doc.line(curX, curY, curX + deltaX, curY + deltaY);
            curX += 2 * deltaX;
            curY += 2 * deltaY;
        }
    };
    FacturasComponent.prototype.toDecimals = function (num) {
        return this.decimalPipe.transform(num, '1.2-2');
    };
    FacturasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-facturas',
            template: __webpack_require__("../../../../../src/app/facturas/facturas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/facturas/facturas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_productos_service__["a" /* ProductosService */],
            __WEBPACK_IMPORTED_MODULE_6__services_factura_service__["a" /* FacturaService */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_7__services_clientes_service__["a" /* ClientesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* DecimalPipe */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], FacturasComponent);
    return FacturasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n\t\t<h1 class=\"h2\">Dashboard</h1>\n\t</div>\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 products row\">\n\t\t<div class=\"col-12\">\n\t\t\tSistema punto de venta KyR.com\n\t\t</div>\n\t</div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.login = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/left-nav/left-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/left-nav/left-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-md-2 d-none d-md-block bg-light sidebar\" *ngIf=\"authService.isLogged == true\">\n  <div class=\"sidebar-sticky\">\n    <ul class=\"nav flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg>\n          Dashboard <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/vender\" routerLinkActive=\"active\">\n          <svg \n            xmlns=\"http://www.w3.org/2000/svg\" \n            width=\"24\" \n            height=\"24\" \n            viewBox=\"0 0 24 24\" \n            fill=\"none\" \n            stroke=\"currentColor\" \n            stroke-width=\"2\" \n            stroke-linecap=\"round\" \n            stroke-linejoin=\"round\" \n            class=\"feather feather-dollar-sign\">\n            <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M12 1v22\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/>\n            </g>\n          </svg>\n          Vender\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/facturas\" routerLinkActive=\"active\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file\"><path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline></svg>\n          Facturas\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/productos\" routerLinkActive=\"active\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\"><circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path></svg>\n          Productos\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/clientes\" routerLinkActive=\"active\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path></svg>\n          Clientes\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedUser.rol == 1\">\n        <a class=\"nav-link\" routerLink=\"/empleados\" routerLinkActive=\"active\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path></svg>\n          Empleados\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedUser.rol == 1\">\n        <a class=\"nav-link\" routerLink=\"/reportes\" routerLinkActive=\"active\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bar-chart-2\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line></svg>\n          Reportes\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedUser.rol == 1\">\n        <a class=\"nav-link\" routerLink=\"/sucursales\" routerLinkActive=\"active\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><path d=\"M9 22V12h6v10\"/></g></svg>\n          Sucursales\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedUser.rol == 1\">\n        <a class=\"nav-link\" routerLink=\"/contabilidad\" routerLinkActive=\"active\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-layers\"><polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline></svg>\n          Contabilidad\n        </a>\n      </li>\n    </ul>\n\n    <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\" *ngIf=\"false\">\n      <span>Saved reports</span>\n      <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>\n      </a>\n    </h6>\n    <ul class=\"nav flex-column mb-2\" *ngIf=\"false\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\n          Current month\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\n          Last quarter\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\n          Social engagement\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\n          Year-end sale\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/left-nav/left-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftNavComponent = /** @class */ (function () {
    function LeftNavComponent(authService) {
        this.authService = authService;
    }
    LeftNavComponent.prototype.ngOnInit = function () {
    };
    LeftNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'left-nav',
            template: __webpack_require__("../../../../../src/app/left-nav/left-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/left-nav/left-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], LeftNavComponent);
    return LeftNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/cliente.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__correo__ = __webpack_require__("../../../../../src/app/models/correo.ts");

var Cliente = /** @class */ (function () {
    function Cliente() {
        this._id = undefined;
        this.nombre = '';
        this.apellido1 = '';
        this.apellido2 = '';
        this.cedula = 0;
        this.telefonos = [];
        this.correo = new __WEBPACK_IMPORTED_MODULE_0__correo__["a" /* Correo */]();
    }
    return Cliente;
}());



/***/ }),

/***/ "../../../../../src/app/models/correo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Correo; });
var Correo = /** @class */ (function () {
    function Correo() {
        this._id = undefined;
        this.correo = '';
        this.estado = true;
    }
    return Correo;
}());



/***/ }),

/***/ "../../../../../src/app/models/factura.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Factura; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cliente__ = __webpack_require__("../../../../../src/app/models/cliente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usuario__ = __webpack_require__("../../../../../src/app/models/usuario.ts");


var Factura = /** @class */ (function () {
    function Factura() {
        this._id = undefined;
        this.productos = [];
        this.comprador = new __WEBPACK_IMPORTED_MODULE_0__cliente__["a" /* Cliente */]();
        this.vendedor = new __WEBPACK_IMPORTED_MODULE_1__usuario__["a" /* Usuario */]();
        this.notas = '';
        this.idSucursal = '';
        this.tipo_de_pago = 'efectivo';
        this.comprobante = '';
        this.descuento = 0;
        this.total = 0;
        this.descuento_tipo = 1;
        this.estado = 'pendiente';
        this.fecha_modificada = new Date();
    }
    return Factura;
}());



/***/ }),

/***/ "../../../../../src/app/models/producto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Producto; });
var Producto = /** @class */ (function () {
    function Producto() {
        this._id = undefined;
        this.nombre = '';
        this.precio = 0;
        this.descripcion = '';
        this.marca = '';
        this.codigo = '';
        this.unidad = 'unidad';
        this.cantidad = 0;
        this.descuento = 0;
        this.descuento_tipo = 1;
        this.categoria = 1;
        this.estado = true;
        this.impuestos = 0;
        this.idSucursal = '';
    }
    return Producto;
}());



/***/ }),

/***/ "../../../../../src/app/models/productofacturaitem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Productofacturaitem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__producto__ = __webpack_require__("../../../../../src/app/models/producto.ts");

var Productofacturaitem = /** @class */ (function () {
    function Productofacturaitem() {
        this._id = undefined;
        this.producto = new __WEBPACK_IMPORTED_MODULE_0__producto__["a" /* Producto */]();
        this.descuento = 0;
        this.descuento_tipo = 0;
        this.cantidad = 0;
        this.estado = true;
    }
    return Productofacturaitem;
}());



/***/ }),

/***/ "../../../../../src/app/models/sucursal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sucursal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__correo__ = __webpack_require__("../../../../../src/app/models/correo.ts");

var Sucursal = /** @class */ (function () {
    function Sucursal() {
        this._id = undefined;
        this.idEmpresa = '';
        this.nombre = '';
        this.provincia = '';
        this.canton = '';
        this.distrito = '';
        this.senas = '';
        this.telefonos = [];
        this.correo = new __WEBPACK_IMPORTED_MODULE_0__correo__["a" /* Correo */]();
    }
    return Sucursal;
}());



/***/ }),

/***/ "../../../../../src/app/models/telefono.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Telefono; });
var Telefono = /** @class */ (function () {
    function Telefono() {
        this._id = undefined;
        this.telefono = '';
        this.estado = true;
    }
    return Telefono;
}());



/***/ }),

/***/ "../../../../../src/app/models/usuario.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__correo__ = __webpack_require__("../../../../../src/app/models/correo.ts");

var Usuario = /** @class */ (function () {
    function Usuario() {
        this._id = undefined;
        this.nombre = '';
        this.idSucursal = '';
        this.apellido1 = '';
        this.apellido2 = '';
        this.clave = '';
        this.cedula = 0;
        this.rol = 1;
        this.telefonos = [];
        this.correo = new __WEBPACK_IMPORTED_MODULE_0__correo__["a" /* Correo */]();
    }
    return Usuario;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.active {\n\tcolor: #0056b3;\n\ttext-decoration: underline;\n}\n\n.routes {\n\tpadding-top: 7px;\n}\n\n.social a {\n\tcolor: black;\n\tfont-size: 30px;\n\tmargin-left: 10px;\n}\n\n#navbar-items{\n\tpadding-left: 27px;\n}\n\n.action{\n\tmargin-right: 20px;\n}\n\n.confirmar-items .row{\n\tmargin-bottom: 25px;\n}\n\n.nav-item a{\n\tcolor: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md sticky-top navbar-dark bg-dark flex-md-nowrap p-0\">\n\t<a class=\"navbar-brand col-7 col-sm-3 col-md-2 mr-0\" href=\"#\">Punto de Venta</a>\n\t<button class=\"navbar-toggler collapsed action\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-items\" aria-controls=\"navbar-items\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t</button>\n\n\t<div class=\"navbar-collapse collapse \" id=\"navbar-items\" style=\"\">\n\t\t<ul class=\"navbar-nav mr-auto\">\n\t\t\t<li class=\"nav-item d-md-none d-lg-none\">\n\t\t\t\t<a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg>\n\t\t\t\t\tDashboard <span class=\"sr-only\">(current)</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item d-md-none d-lg-none\">\n\t\t\t\t<a routerLink=\"/vender\" routerLinkActive=\"active\">\n\t\t\t\t\t<svg \n\t\t\t            xmlns=\"http://www.w3.org/2000/svg\" \n\t\t\t            width=\"24\" \n\t\t\t            height=\"24\" \n\t\t\t            viewBox=\"0 0 24 24\" \n\t\t\t            fill=\"none\" \n\t\t\t            stroke=\"currentColor\" \n\t\t\t            stroke-width=\"2\" \n\t\t\t            stroke-linecap=\"round\" \n\t\t\t            stroke-linejoin=\"round\" \n\t\t\t            class=\"feather feather-dollar-sign\">\n\t\t\t            <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n\t\t\t              <path d=\"M12 1v22\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/>\n\t\t\t            </g>\n\t\t\t        </svg>\n\t\t\t\t\tVender\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item d-md-none d-lg-none\">\n\t\t\t\t<a routerLink=\"/facturas\" routerLinkActive=\"active\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file\"><path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline></svg>\n\t\t\t\t\tfacturas\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item d-md-none d-lg-none\">\n\t\t\t\t<a routerLink=\"/productos\" routerLinkActive=\"active\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\"><circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path></svg>\n\t\t\t\t\tProductos\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item d-md-none d-lg-none\">\n\t\t\t\t<a routerLink=\"/clientes\" routerLinkActive=\"active\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path></svg>\n\t\t\t\t\tClientes\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item d-md-none d-lg-none\" *ngIf=\"authService.loggedUser.rol == 1\">\n\t\t\t\t<a routerLink=\"/empleados\" routerLinkActive=\"active\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path></svg>\n\t\t\t\t\tEmpleados\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item d-md-none d-lg-none\" *ngIf=\"authService.loggedUser.rol == 1\">\n\t\t\t\t<a routerLink=\"/sucursales\" routerLinkActive=\"active\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><path d=\"M9 22V12h6v10\"/></g></svg>\n\t\t\t\t\tSucursales\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item d-md-none d-lg-none\" *ngIf=\"authService.loggedUser.rol == 1\">\n\t\t\t\t<a routerLink=\"/reportes\" routerLinkActive=\"active\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bar-chart-2\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line></svg>\n\t\t\t\t\tReportes\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item d-md-none d-lg-none\" *ngIf=\"authService.loggedUser.rol == 1\">\n\t\t\t\t<a routerLink=\"/contabilidad\" routerLinkActive=\"active\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-layers\"><polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline></svg>\n\t\t\t\t\tContabilidad\n\t\t\t\t</a>\n\t\t\t</li>\n\t        <!--   <li class=\"nav-item dropdown d-md-none d-lg-none\">\n\t            <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown04\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n\t            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown04\">\n\t              <a class=\"dropdown-item\" href=\"#\">Action</a>\n\t              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n\t              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n\t            </div>\n\t        </li> -->\n\t    </ul>\n\t    <ul class=\"navbar-nav px-3\">\n\t    \t<li class=\"nav-item text-nowrap\" *ngIf=\"authService.isLogged == true\">\n\t    \t\t<a class=\"nav-link\" href=\"#\" (click)=\"salir()\">{{authService.loggedUser.nombre}} {{authService.loggedUser.apellido1}} Salir</a>\n\t    \t</li>\n\t    \t<li class=\"nav-item text-nowrap\" *ngIf=\"authService.isLogged == false\">\n\t    \t\t<a class=\"nav-link\" href=\"#\" (click)=\"openModal(template)\">Entrar</a>\n\t    \t</li>\n\t    </ul>\n\t</div>\n</nav>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">Login</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"col-12 confirmar-items\">\n    \t<div class=\"row\">\n    \t\t<div class=\"col-3\">\n    \t\t\tCedula\n    \t\t</div>\n    \t\t<div class=\"col-9\">\n    \t\t\t<input type=\"text\" [(ngModel)]=\"cedula\" name=\"comprobante\" class=\"form-control\"> \n    \t\t</div>\n    \t</div>\n    \t<div class=\"row\">\n    \t\t<div class=\"col-3\">\n    \t\t\tClave\n    \t\t</div>\n    \t\t<div class=\"col-9\">\n    \t\t\t<input type=\"password\" [(ngModel)]=\"clave\" name=\"comprobante\" class=\"form-control\"> \n    \t\t</div>\n    \t</div>\n    \t<p *ngIf=\"errorDisplay && triedLogin\" class=\"error\">{{errorDisplay}}</p>\n\t\t<div>\n\t\t\t<button type=\"submit\" class=\"btn btn-success\" (click)=\"login()\">\n\t\t\t\t<span>Login</span>\n\t\t\t</button>\n\t\t</div>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_usuario__ = __webpack_require__("../../../../../src/app/models/usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(authService, modalService) {
        this.authService = authService;
        this.modalService = modalService;
        this.errorDisplay = 'Por favor revise la información proporcionada.';
        this.clave = '';
        this.triedLogin = false;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    NavComponent.prototype.salir = function () {
        this.authService.logout();
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_1__models_usuario__["a" /* Usuario */]();
        user.cedula = this.cedula;
        user.clave = this.clave;
        this.authService.login(user);
        this.triedLogin = true;
        this.sub = this.authService.loggedSub
            .asObservable()
            .subscribe(function (logged) {
            _this.modalRef.hide();
            _this.triedLogin = false;
        });
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/productos/producto-agregar/producto-agregar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productos/producto-agregar/producto-agregar.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(productoForm)\" #productoForm=\"ngForm\">\n\t<div class=\"row\">\n\t\t<div class=\"col-6\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Nombre</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Nombre\"\n\t\t\t\trequired\n\t\t\t\t[(ngModel)]=\"producto.nombre\" name=\"nombre\"\n\t\t\t\t#nombre=\"ngModel\" [disabled]=\"action=='ver' || authService.loggedUser.rol != 1\">\n\t\t\t\t<div [hidden]=\"nombre.valid || nombre.pristine\" class=\"alert alert-danger\">\n\t\t\t\t\t<div *ngIf=\"nombre.errors && nombre.errors.required\">\n\t\t\t\t\t\tEl Nombre es requerido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"descripcion\">Descripción</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"descripcion\" placeholder=\"Descripción\"\n\t\t\t\t[(ngModel)]=\"producto.descripcion\" name=\"descripcion\" #descripcion=\"ngModel\" required [disabled]=\"action=='ver' || authService.loggedUser.rol != 1\">\n\t\t\t\t<div [hidden]=\"descripcion.valid || descripcion.pristine\" class=\"alert alert-danger\">\n\t\t\t\t\tLa descripción es requerida\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<!-- <div class=\"col-8\"> -->\n\t\t\t\t\t<label for=\"precio\">Precio Sin Impuestos</label>\n\t\t\t\t\t<input type=\"text\" \n\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\tid=\"precio\" name=\"precio\"\n\t\t\t\t\t\t[(ngModel)]=\"producto.precio\"  \n\t\t\t\t\t\t#precio=\"ngModel\" \n\t\t\t\t\t\trequired pattern=\"^[1-9][0-9]*$\" [disabled]=\"action=='ver' || authService.loggedUser.rol != 1\">\n\t\t\t\t<!-- </div> -->\n\t\t\t\t<!-- <div class=\"col-4\">\n\t\t\t\t\t<label for=\"precio\">ivi</label>\n\t\t\t\t\t<input type=\"checkbox\" \n\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\tid=\"ivi\" name=\"ivi\"\n\t\t\t\t\t\t[(ngModel)]=\"ivi\"\n\t\t\t\t\t\t[disabled]=\"action=='ver'\">\n\t\t\t\t</div> -->\n\t\t\t\t<div [hidden]=\"precio.valid || precio.pristine\" class=\"alert alert-danger\" *ngIf=\"precio.errors && precio.errors.required\">\n\t\t\t\t\tEl precio es requerido\n\t\t\t\t</div>\n\t\t\t\t<div [hidden]=\"precio.valid || precio.pristine\" class=\"alert alert-danger\" *ngIf=\"precio.errors && precio.errors.pattern\">\n\t\t\t\t\tEl precio deben ser números\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"marca\">Marca</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"marca\" placeholder=\"Marca\"\n\t\t\t\t[(ngModel)]=\"producto.marca\" name=\"marca\"\n\t\t\t\t#marca=\"ngModel\" [disabled]=\"action=='ver' || authService.loggedUser.rol != 1\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"codigo\">Código</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"codigo\" placeholder=\"Código\"\n\t\t\t\t[(ngModel)]=\"producto.codigo\" name=\"codigo\" #codigo=\"ngModel\" required [disabled]=\"action=='ver' || authService.loggedUser.rol != 1\">\n\t\t\t\t<div [hidden]=\"codigo.valid || codigo.pristine\" class=\"alert alert-danger\">\n\t\t\t\t\tEl código es requerido\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"impuestos\">Impuestos</label>\n\t\t\t\t<input type=\"text\" \n\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\tid=\"impuestos\" name=\"impuestos\"\n\t\t\t\t\t[(ngModel)]=\"producto.impuestos\"  \n\t\t\t\t\t#impuestos=\"ngModel\" \n\t\t\t\t\tpattern=\"[0-9]*\" [disabled]=\"action=='ver' || authService.loggedUser.rol != 1\">\n\t\t\t\t<div [hidden]=\"impuestos.valid || impuestos.pristine\" class=\"alert alert-danger\" *ngIf=\"impuestos.errors && impuestos.errors.pattern\">\n\t\t\t\t\tEl impuestos deben ser números\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-6\">\n\t\t\t<div class=\"form-group\" *ngIf=\"action != 'agregar'\">\n\t\t\t\t<label for=\"cantidad\">Cantidad Disponible</label>\n\t\t\t\t<input type=\"text\" \n\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\tid=\"cantidad\" name=\"cantidad\"\n\t\t\t\t\t[(ngModel)]=\"producto.cantidad\"  \n\t\t\t\t\t#cantidad=\"ngModel\" \n\t\t\t\t\trequired pattern=\"^[1-9][0-9]*$\" [disabled]=\"action=='ver'\">\n\t\t\t\t<div [hidden]=\"cantidad.valid || cantidad.pristine\" class=\"alert alert-danger\" *ngIf=\"cantidad.errors && cantidad.errors.required\">\n\t\t\t\t\tLa cantidad disponibles es requerida\n\t\t\t\t</div>\n\t\t\t\t<div [hidden]=\"cantidad.valid || cantidad.pristine\" class=\"alert alert-danger\" *ngIf=\"cantidad.errors && cantidad.errors.pattern\">\n\t\t\t\t\tLa cantidad disponibles deben ser números\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"descuento\">Descuento</label>\n\t\t\t\t<input type=\"text\" \n\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\tid=\"descuento\" name=\"descuento\"\n\t\t\t\t\t[(ngModel)]=\"producto.descuento\"  \n\t\t\t\t\t#descuento=\"ngModel\" \n\t\t\t\t\tpattern=\"[0-9]*\" [disabled]=\"action=='ver' || authService.loggedUser.rol != 1\">\n\t\t\t\t<div [hidden]=\"descuento.valid || descuento.pristine\" class=\"alert alert-danger\" *ngIf=\"descuento.errors && descuento.errors.pattern\">\n\t\t\t\t\tEl descuento deben ser números\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\" *ngIf=\"producto.descuento && producto.descuento > 0\">\n\t\t\t\t<label for=\"descuento_tipo\">Tipo de descuento </label>\n\t\t\t\t<select [(ngModel)]=\"producto.descuento_tipo\" name=\"descuento_tipo\" class=\"form-control\" [disabled]=\"action=='ver' || authService.loggedUser.rol != 1\"> \n\t\t\t\t    <option value=\"1\" selected=\"\">Colones</option>\n\t\t\t\t    <option value=\"2\">%</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"categoria\">Categoría </label>\n\t\t\t\t<select [(ngModel)]=\"producto.categoria\" name=\"categoria\" class=\"form-control\" [disabled]=\"action=='ver' || authService.loggedUser.rol != 1\"> \n\t\t\t\t    <option value=\"1\" selected=\"\">Hogar</option>\n\t\t\t\t    <option value=\"2\">Ferretería</option>\n\t\t\t\t    <option value=\"3\">Limpieza</option>\n\t\t\t\t    <option value=\"4\">Alimentos</option>\n\t\t\t\t    <option value=\"5\">Ropa</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"estado\">Estado </label>\n\t\t\t\t<select [(ngModel)]=\"producto.estado\" name=\"estado\" class=\"form-control\" [disabled]=\"action=='ver' || authService.loggedUser.rol != 1\"> \n\t\t\t\t    <option value=\"true\" selected=\"\">Activo</option>\n\t\t\t\t    <option value=\"false\">Pendiente</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"unidad\">Unidad </label>\n\t\t\t\t<select [(ngModel)]=\"producto.unidad\" name=\"unidad\" class=\"form-control\" [disabled]=\"action=='ver' || authService.loggedUser.rol != 1\"> \n\t\t\t\t    <option value=\"gramo\" selected=\"\">Kilo</option>\n\t\t\t\t    <option value=\"litro\">Litro</option>\n\t\t\t\t    <option value=\"paquete\">Paquete</option>\n\t\t\t\t    <option value=\"unidad\">Unidad</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<p *ngIf=\"errorDisplay\" class=\"error\">{{errorDisplay}}</p>\n\t<div *ngIf=\"action!='ver'\">\n\t\t<button *ngIf=\"action!='borrar'\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!productoForm.form.valid || !canAdd\">\n\t\t\t<span *ngIf=\"action=='agregar'\">Agregar</span>\n\t\t\t<span *ngIf=\"action=='editar'\">Editar</span>\n\t\t</button>\n\t\t<button *ngIf=\"action=='borrar'\" type=\"button\" class=\"btn btn-danger\" (click)=\"eliminar()\">\n\t\t\tEliminar\n\t\t</button>\n\t\t<!-- <button *ngIf=\"action!='borrar'\" type=\"button\" class=\"btn btn-danger\" (click)=\"newProducto(); productoForm.reset()\">\t\tDeshacer cambios\n\t\t</button> -->\n\t</div>\n\t<!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"newProducto(); productoForm.reset()\">Eliminar</button> -->\n</form>"

/***/ }),

/***/ "../../../../../src/app/productos/producto-agregar/producto-agregar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoAgregarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_producto__ = __webpack_require__("../../../../../src/app/models/producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_productos_service__ = __webpack_require__("../../../../../src/app/services/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_inventario_service__ = __webpack_require__("../../../../../src/app/services/inventario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductoAgregarComponent = /** @class */ (function () {
    function ProductoAgregarComponent(productosService, authService, inventarioService) {
        this.productosService = productosService;
        this.authService = authService;
        this.inventarioService = inventarioService;
        this.agregarProducto = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editarProducto = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.canAdd = true;
        this.action = "ver";
        this.producto = new __WEBPACK_IMPORTED_MODULE_1__models_producto__["a" /* Producto */]();
        this.submitted = false;
        this.requiredText = 'producto';
        this.isEditing = false;
        this.errorDisplay = "";
        this.ivi = false;
    }
    ProductoAgregarComponent.prototype.ngOnInit = function () {
    };
    ProductoAgregarComponent.prototype.onSubmit = function (productoForm) {
        var _this = this;
        console.log('producto');
        console.log(this.producto);
        this.errorDisplay = '';
        this.producto.idSucursal = this.authService.loggedUser.idSucursal;
        if (this.action === "agregar") {
            // if(!this.ivi) this.producto.precio -= this.producto.precio * 0.13;
            this.productosService.agregarProducto(this.producto)
                .then(function (success) {
                console.log('agregado', success);
                _this.close.emit();
            }, function (fail) {
                var body = JSON.parse(fail._body);
                console.log(body);
                if (body.code == "11000") {
                    _this.errorDisplay = "Por favor seleccione otro codigo";
                }
                console.log('fallo', fail);
            });
        }
        if (this.action === "editar") {
            if (this.authService.loggedUser.rol == 1) {
                this.productosService.editarProducto(this.producto)
                    .then(function (success) {
                    console.log('editado', success);
                    _this.close.emit();
                }, function (fail) {
                    var body = JSON.parse(fail._body);
                    console.log(body);
                    if (body.code == "11000") {
                        _this.errorDisplay = "Por favor seleccione otro codigo";
                    }
                    console.log('fallo', fail);
                    console.log('fallo', fail);
                });
            }
            else {
                console.log('actualizar inv', this.authService.loggedUser.idSucursal);
                this.inventarioService.actualizarInventario({
                    idSucursal: this.authService.loggedUser.idSucursal,
                    idProducto: this.producto._id,
                    estado: 1,
                    cantidad: this.producto.cantidad
                });
            }
        }
    };
    ProductoAgregarComponent.prototype.ngOnChanges = function (changes) {
        // console.log('changes',changes)
        // if(changes.producto && changes.producto.currentValue._id){
        // 	console.log('is editing');
        // 	this.isEditing = true;
        // }
    };
    ProductoAgregarComponent.prototype.newProducto = function () {
        this.submitted = false;
        this.isEditing = false;
        this.producto = new __WEBPACK_IMPORTED_MODULE_1__models_producto__["a" /* Producto */]();
    };
    ProductoAgregarComponent.prototype.eliminar = function () {
        var _this = this;
        this.productosService.borrarProducto(this.producto)
            .then(function (success) {
            console.log('borrado', success);
            _this.close.emit();
        }, function (fail) {
            console.log('fallo', fail);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ProductoAgregarComponent.prototype, "agregarProducto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ProductoAgregarComponent.prototype, "editarProducto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ProductoAgregarComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ProductoAgregarComponent.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ProductoAgregarComponent.prototype, "action", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('selectedProduct'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_producto__["a" /* Producto */])
    ], ProductoAgregarComponent.prototype, "producto", void 0);
    ProductoAgregarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-producto-agregar',
            template: __webpack_require__("../../../../../src/app/productos/producto-agregar/producto-agregar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/productos/producto-agregar/producto-agregar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_inventario_service__["a" /* InventarioService */]])
    ], ProductoAgregarComponent);
    return ProductoAgregarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/productos/producto-display/producto-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".actions {\n\tmargin-top: 8px;\n}\n\n.actions .text-center {\n\tmargin-bottom: 5px;\n}\n\n.actions .text-center button{\n\twidth: 85px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productos/producto-display/producto-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 row\">\n\t<div class=\"col-2\">\n\t\t<p>{{producto.nombre}}</p>\n\t</div>\n\t<div class=\"col-2 text-center\">\n\t\t<p>{{producto.marca}}</p>\n\t</div>\n\t<div class=\"col-2 text-center\">\n\t\t<p>{{producto.cantidad}} {{producto.unidad}}</p>\n\t</div>\n\t<div class=\"col-1 text-center\">\n\t\t<p>{{producto.precio}}</p>\n\t</div>\n\t<div class=\"col-1 text-center\">\n\t\t<p>{{producto.codigo}}</p>\n\t</div>\n\t<div class=\"col-4 text-center\">\n\t\t<p class=\"action\">\n\t        <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"ver(template)\" tooltip=\"Ver información del producto.\">\n\t        \t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tVer\n\t        \t</span>\n\t        </button>\n\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" (click)=\"editar(template)\" tooltip=\"Editar información del producto.\">\n\t\t\t\t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2l4 4L7 17H3v-4L14 2z\"/><path d=\"M3 22h18\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tEditar\n\t        \t</span>\n\t        </button>\n\t        <button class=\"btn btn-sm btn-outline-secondary delete\" (click)=\"borrar(template)\" tooltip=\"Eliminar producto.\">\n\t        \t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"/><path d=\"M18 9l-6 6\"/><path d=\"M12 9l6 6\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tEliminar\n\t        \t</span>\n\t        </button>\n        </p>\n\t</div>\n</div>\n \n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">{{action}} Producto</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-producto-agregar [action]=\"action\" [selectedProduct]=\"copy\" (close)=\"actualizar();modalRef.hide();\"></app-producto-agregar>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/productos/producto-display/producto-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_producto__ = __webpack_require__("../../../../../src/app/models/producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_productos_service__ = __webpack_require__("../../../../../src/app/services/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductoDisplayComponent = /** @class */ (function () {
    function ProductoDisplayComponent(productosService, modalService) {
        this.productosService = productosService;
        this.modalService = modalService;
        this.borrarProducto = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editarProducto = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.actualizarLista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isDeleting = false;
        this.action = "ver";
    }
    ProductoDisplayComponent.prototype.ngOnInit = function () {
        this.copy = JSON.parse(JSON.stringify(this.producto));
    };
    ProductoDisplayComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ProductoDisplayComponent.prototype.ver = function (template) {
        this.action = "ver";
        this.copy = JSON.parse(JSON.stringify(this.producto));
        this.openModal(template);
    };
    ProductoDisplayComponent.prototype.borrar = function (template) {
        this.action = "borrar";
        this.copy = JSON.parse(JSON.stringify(this.producto));
        this.openModal(template);
    };
    ProductoDisplayComponent.prototype.editar = function (template) {
        this.action = "editar";
        this.copy = JSON.parse(JSON.stringify(this.producto));
        this.openModal(template);
    };
    ProductoDisplayComponent.prototype.actualizar = function () {
        this.actualizarLista.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_producto__["a" /* Producto */])
    ], ProductoDisplayComponent.prototype, "producto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ProductoDisplayComponent.prototype, "borrarProducto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ProductoDisplayComponent.prototype, "editarProducto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ProductoDisplayComponent.prototype, "actualizarLista", void 0);
    ProductoDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-producto-display',
            template: __webpack_require__("../../../../../src/app/productos/producto-display/producto-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/productos/producto-display/producto-display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], ProductoDisplayComponent);
    return ProductoDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/productos/productos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".producto-display{\n\tmargin-top: 5px;\n}\n\n.sort-elem{\n\tcursor: pointer;\n}\n\n.sort-elem svg{\n\theight: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productos/productos.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n\t\t<h1 class=\"h2\">Productos</h1>\n\t\t<div class=\"btn-toolbar mb-2 mb-md-0\">\n\t\t\t<div class=\"btn-group mr-2\" *ngIf=\"this.authService.loggedUser.rol == 1\">\n\t\t\t\t<button (click)=\"agregar(template)\" class=\"btn btn-sm btn-outline-secondary\"><svg _ngcontent-c3=\"\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><g _ngcontent-c3=\"\" fill=\"none\" stroke=\"#626262\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path _ngcontent-c3=\"\" d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><path _ngcontent-c3=\"\" d=\"M17 21v-8H7v8\"></path><path _ngcontent-c3=\"\" d=\"M7 3v5h8\"></path></g><rect _ngcontent-c3=\"\" fill=\"rgba(0, 0, 0, 0)\" height=\"24\" width=\"24\" x=\"0\" y=\"0\"></rect></svg> <p _ngcontent-c3=\"\" style=\"display: block;margin-top: -7px !important;margin-bottom: 4px;\">Agregar</p></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<pagination-controls\n\t\t\tclass=\"pagination\"\n\t\t\tpreviousLabel=\"Previo\"\n            nextLabel=\"Siguiente\"\n\t\t\t(pageChange)=\"p = $event\">\n\t\t</pagination-controls>\n\t\t<ul class=\"col-12 items-list\">\n\t\t\t<li>\n\t\t\t\t<div class=\"col-12 row\">\n\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t<p (click)=\"orderBy('nombre')\" class=\"sort-elem\">Nombre <br>\n\t\t\t\t\t\t\t<span *ngIf=\"order=='nombre'\" class=\"sort\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == true\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5\"/><path d=\"M5 12l7-7 7 7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == false\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5v14\"/><path d=\"M19 12l-7 7-7-7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t<p (click)=\"orderBy('marca')\" class=\"sort-elem\">Marca <br>\n\t\t\t\t\t\t\t<span *ngIf=\"order=='marca'\" class=\"sort\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == true\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5\"/><path d=\"M5 12l7-7 7 7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == false\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5v14\"/><path d=\"M19 12l-7 7-7-7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t<p (click)=\"orderBy('cantidad')\" class=\"sort-elem\">Cantidad <br>\n\t\t\t\t\t\t\t<span *ngIf=\"order=='cantidad'\" class=\"sort\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == true\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5\"/><path d=\"M5 12l7-7 7 7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == false\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5v14\"/><path d=\"M19 12l-7 7-7-7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-1 text-center\">\n\t\t\t\t\t\t<p (click)=\"orderBy('precio')\" class=\"sort-elem\">Precio <br>\n\t\t\t\t\t\t\t<span *ngIf=\"order=='precio'\" class=\"sort\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == true\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5\"/><path d=\"M5 12l7-7 7 7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == false\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5v14\"/><path d=\"M19 12l-7 7-7-7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-1 text-center\">\n\t\t\t\t\t\t<p (click)=\"orderBy('codigo')\" class=\"sort-elem\">Código <br>\n\t\t\t\t\t\t\t<span *ngIf=\"order=='codigo'\" class=\"sort\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == true\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5\"/><path d=\"M5 12l7-7 7 7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == false\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5v14\"/><path d=\"M19 12l-7 7-7-7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4 text-center\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAcciones\n\t\t\t\t        </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li *ngFor=\"let producto of productos | paginate: { itemsPerPage: 10, currentPage: p }; index as i\" class=\"\" [class.pair]=\"i%2==0\">\n\t\t\t\t<app-producto-display [producto]='producto' (borrarProducto)=\"borrarProducto($event)\" (editarProducto)=\"editarProducto($event)\" (actualizarLista)=\"actualizarLista($event)\" class=\"\"></app-producto-display>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</main>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">{{action}} Producto</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-producto-agregar [action]=\"action\" (close)=\"actualizarLista();modalRef.hide()\"></app-producto-agregar>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/productos/productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_producto__ = __webpack_require__("../../../../../src/app/models/producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_productos_service__ = __webpack_require__("../../../../../src/app/services/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductosComponent = /** @class */ (function () {
    function ProductosComponent(productosService, modalService, authService) {
        this.productosService = productosService;
        this.modalService = modalService;
        this.authService = authService;
        this.p = 1;
        this.selectedProduct = new __WEBPACK_IMPORTED_MODULE_1__models_producto__["a" /* Producto */];
        this.loading = false;
        this.action = 'agregar';
        this.order = 'nombre';
        this.reverse = false;
    }
    ProductosComponent.prototype.ngOnInit = function () {
        this.obtenerProductos();
    };
    ProductosComponent.prototype.editarProducto = function (producto) {
        console.log('edit', producto);
        this.selectedProduct = Object.assign({}, producto);
    };
    ProductosComponent.prototype.editarProductoSave = function (producto) {
        var _this = this;
        this.productosService.editarProducto(producto.producto)
            .then(function (data) {
            _this.obtenerProductos();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    ProductosComponent.prototype.borrarProducto = function (producto) {
        var _this = this;
        this.productosService.borrarProducto(producto)
            .then(function (data) {
            _this.obtenerProductos();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    ProductosComponent.prototype.obtenerProductos = function () {
        var _this = this;
        this.productosService.obtenerProductos().subscribe(function (data) {
            _this.productos = data.product;
            _this.orderBy(_this.order);
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductosComponent.prototype.agregarProducto = function (producto) {
        var _this = this;
        this.loading = true;
        this.productosService.agregarProducto(producto.producto)
            .then(function (data) {
            console.log('producto agregado');
            producto.form.reset();
            _this.loading = false;
            _this.obtenerProductos();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    ProductosComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ProductosComponent.prototype.agregar = function (template) {
        this.action = "agregar";
        this.openModal(template);
    };
    ProductosComponent.prototype.actualizarLista = function () {
        this.obtenerProductos();
    };
    ProductosComponent.prototype.ngAfterViewInit = function () {
        // console.timeEnd();
    };
    ProductosComponent.prototype.orderBy = function (by) {
        this.order = by;
        this.productos = this.sortByKey(this.productos, by);
        if (this.reverse) {
            this.productos.reverse();
        }
        this.reverse = !this.reverse;
    };
    ProductosComponent.prototype.sortByKey = function (array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            if (key.indexOf('.') != -1) {
                x = a[key.split('.')[0]][key.split('.')[1]];
                y = b[key.split('.')[0]][key.split('.')[1]];
            }
            console.log(key, 'key', x, y);
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    };
    ProductosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-productos',
            template: __webpack_require__("../../../../../src/app/productos/productos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/productos/productos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], ProductosComponent);
    return ProductosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reportes/reportes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#CantBillMont{\n  width:1000px !important;\n  height:400px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reportes/reportes.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n\t\t<h1 class=\"h2\">Reportes</h1>\n\t\t<div class=\"btn-toolbar mb-2 mb-md-0\">\n\t\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 products row\">\n\t\t<div class=\"col-12\">\n\t\t\t<div class=\"col-6\">\n\t\t\t\t<p>\n\t\t\t\t\tReporte de Cantidad de Facturas realizadas por Mes.\n\t\t\t\t</p>\n\t\t\t\t<canvas id=\"CantBillMont\">\n\t\t\t\t</canvas>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n</main>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">{{action}} Producto</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    modal\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/reportes/reportes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_factura_service__ = __webpack_require__("../../../../../src/app/services/factura.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportesComponent = /** @class */ (function () {
    function ReportesComponent(facturaService, authService, router) {
        this.facturaService = facturaService;
        this.authService = authService;
        this.router = router;
        this.cantBillMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.colorReport = [];
    }
    ReportesComponent.prototype.ngOnInit = function () {
        if (this.authService.isLogged == false) {
            this.router.navigate(['/']);
        }
    };
    ReportesComponent.prototype.obtenerCantidadFacturasMes = function () {
        var _this = this;
        this.facturaService.getCountBillMonth().subscribe(function (data) {
            var temp = data.productBill;
            var numMayor = 0;
            console.log(temp);
            temp.map(function (item) {
                if (item.count > numMayor) {
                    numMayor = item.count;
                }
                ;
                return item;
            });
            console.log(numMayor);
            var mitad = numMayor / 2;
            temp.map(function (item) {
                _this.cantBillMonth[item._id.month - 1] = item.count;
                if (item.count < mitad) {
                    _this.colorReport[item._id.month - 1] = 'rgba(255, 206, 86, 1)';
                }
                else {
                    _this.colorReport[item._id.month - 1] = 'rgba(54, 162, 235, 1)';
                }
                return item;
            });
            _this.paintCantBillMonth();
        }, function (error) {
            console.log('error', error);
        });
    };
    ReportesComponent.prototype.ngAfterViewInit = function () {
        this.canvas = document.getElementById('CantBillMont');
        this.ctx = this.canvas.getContext('2d');
        this.obtenerCantidadFacturasMes();
    };
    ReportesComponent.prototype.paintCantBillMonth = function () {
        var myChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__(this.ctx, {
            type: 'bar',
            data: {
                labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"],
                datasets: [{
                        label: 'Cantidad de Facturas por Mes',
                        data: this.cantBillMonth,
                        backgroundColor: this.colorReport,
                        borderWidth: 1
                    }]
            },
            options: {
                responsive: false
            }
        });
    };
    ReportesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reportes',
            template: __webpack_require__("../../../../../src/app/reportes/reportes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reportes/reportes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_factura_service__["a" /* FacturaService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], ReportesComponent);
    return ReportesComponent;
}());

//cantidad de facturas facturadas
// ventas del mes por vendedor


/***/ }),

/***/ "../../../../../src/app/restaurante/restaurante.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/restaurante/restaurante.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  restaurante works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/restaurante/restaurante.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestauranteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestauranteComponent = /** @class */ (function () {
    function RestauranteComponent() {
    }
    RestauranteComponent.prototype.ngOnInit = function () {
    };
    RestauranteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-restaurante',
            template: __webpack_require__("../../../../../src/app/restaurante/restaurante.component.html"),
            styles: [__webpack_require__("../../../../../src/app/restaurante/restaurante.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RestauranteComponent);
    return RestauranteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_usuario__ = __webpack_require__("../../../../../src/app/models/usuario.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(requestOptions, dataService, usuariosService, loginService, router) {
        this.requestOptions = requestOptions;
        this.dataService = dataService;
        this.usuariosService = usuariosService;
        this.loginService = loginService;
        this.router = router;
        this.loggedUser = new __WEBPACK_IMPORTED_MODULE_7__models_usuario__["a" /* Usuario */]();
        this.isLogged = false;
        this.token = '';
        this.loggedSub = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        requestOptions.headers.set('Content-type', 'application/json');
        this.readFromStore();
    }
    AuthService.prototype.login = function (usuario) {
        var _this = this;
        this.loginService.loggearUsuario(usuario)
            .then(function (success) {
            console.log(success);
            if (success.token != '') {
                _this.loggedUser = success.user;
                _this.token = success.token;
                _this.isLogged = true;
                _this.requestOptions.headers.set('authorization', 'Bearer ' + success.token);
                _this.store();
                _this.router.navigate(['/ventas']);
                _this.loggedSub.next();
            }
        }, function (fail) {
        });
    };
    AuthService.prototype.logout = function () {
        this.isLogged = false;
        localStorage.removeItem('userLogged');
        localStorage.removeItem('token');
    };
    AuthService.prototype.store = function () {
        localStorage.setItem('userLogged', JSON.stringify(this.loggedUser));
        localStorage.setItem('token', this.token);
    };
    AuthService.prototype.readFromStore = function () {
        this.token = localStorage.getItem('token');
        if (this.token && this.token != '' && this.token != undefined) {
            this.requestOptions.headers.set('authorization', 'Bearer ' + this.token);
            this.loggedUser = JSON.parse(localStorage.getItem('userLogged'));
            this.isLogged = true;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__usuarios_service__["a" /* UsuariosService */],
            __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.isLogged) {
            if (this.authService.loggedUser.rol == 1 || (state.url != '/empleados' &&
                state.url != '/reportes' &&
                state.url != '/contabilidad' &&
                state.url != '/sucursales')) {
                return true;
            }
        }
        this.router.navigate(['/']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/clientes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientesService = /** @class */ (function () {
    function ClientesService(dataService) {
        this.dataService = dataService;
    }
    ClientesService.prototype.obtenerClientes = function () {
        return this.dataService.get('/api/clients');
    };
    ClientesService.prototype.obtenerClientesFiltroNombre = function (filtro) {
        return this.dataService.get('/api/clients?nombre=' + filtro);
    };
    ClientesService.prototype.obtenerClientesFiltroCedula = function (filtro) {
        return this.dataService.get('/api/clients?cedula=' + filtro);
    };
    ClientesService.prototype.agregarCliente = function (cliente) {
        return this.dataService.post('/api/clients', { 'client': cliente });
    };
    ClientesService.prototype.borrarCliente = function (cliente) {
        return this.dataService.delete('/api/clients/' + cliente._id);
    };
    ClientesService.prototype.editarCliente = function (cliente) {
        return this.dataService.put('/api/clients/' + cliente._id, { 'client': cliente });
    };
    ClientesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], ClientesService);
    return ClientesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        // public host = '';
        // public host = 'http://localhost:9009';
        // public host = 'http://localhost:8080';
        // public host = 'http://kyrapps.com:9008';    
        this.host = 'http://kyrapps.com:9009';
    }
    DataService.prototype.search = function (url, element) {
        var options;
        var params;
        params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        for (var key in element) {
            if (element.hasOwnProperty(key)) {
                params.set(key, element[key]);
            }
        }
        options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ search: params });
        return this.http.get(this.host + url, options)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.post = function (url, element) {
        return this.http.post(this.host + url, JSON.stringify(element))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.put = function (url, element) {
        console.log('element', element);
        return this.http.put(this.host + url, JSON.stringify(element))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.postFile = function (url, element) {
        return this.http.post(this.host + url, JSON.stringify(element), { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Blob })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getAll = function (url) {
        return this.http.get(this.host + url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.get = function (url) {
        console.log('url', this.host + url);
        return this.http.get(this.host + url)
            .map(function (response) { return response.json(); })
            .catch(function (e) { console.log(e); return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(e || 'Internal Server error'); });
    };
    // public get(url: string): Promise<any> {
    //     console.log('url',url);
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json() as any)
    //         .catch(this.handleError);
    // }
    DataService.prototype.delete = function (url, element) {
        if (element) {
            return this.http.delete(this.host + url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ body: element }))
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
        }
        else {
            return this.http.delete(this.host + url)
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
        }
    };
    DataService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/factura.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacturaService = /** @class */ (function () {
    function FacturaService(dataService, authService) {
        this.dataService = dataService;
        this.authService = authService;
    }
    FacturaService.prototype.obtenerFacturas = function () {
        var url = '/api/productbill';
        if (this.authService.loggedUser.rol != 1) {
            url = url + '?idSucursal=' + this.authService.loggedUser.idSucursal;
        }
        return this.dataService.get(url);
    };
    FacturaService.prototype.obtenerFacturasId = function (id) {
        return this.dataService.get('/api/productbill/' + id);
    };
    FacturaService.prototype.obtenerFacturasFiltroCodigo = function (filtro) {
        var url = '/api/productbill?';
        if (this.authService.loggedUser.rol != 1) {
            url = url.substring(0, url.length - 1) + '?idSucursal=' + this.authService.loggedUser.idSucursal + '&';
        }
        return this.dataService.get(url + 'codigo=' + filtro);
    };
    FacturaService.prototype.obtenerFacturasFiltroNombre = function (filtro) {
        var url = '/api/productbill?';
        if (this.authService.loggedUser.rol != 1) {
            url = url.substring(0, url.length - 1) + '?idSucursal=' + this.authService.loggedUser.idSucursal + '&';
        }
        return this.dataService.get(url + 'nombre=' + filtro);
    };
    FacturaService.prototype.obtenerFacturasFiltroNombreVendedor = function (filtro) {
        var url = '/api/productbill?';
        if (this.authService.loggedUser.rol != 1) {
            url = url.substring(0, url.length - 1) + '?idSucursal=' + this.authService.loggedUser.idSucursal + '&';
        }
        return this.dataService.get(url + 'nombreven=' + filtro);
    };
    FacturaService.prototype.agregarFactura = function (factura) {
        return this.dataService.post('/api/productbill', { 'productBill': factura });
    };
    FacturaService.prototype.borrarFactura = function (factura) {
        return this.dataService.delete('/api/productbill/' + factura._id);
    };
    FacturaService.prototype.editarFactura = function (factura) {
        return this.dataService.put('/api/productbill/' + factura._id, { 'productBill': factura });
    };
    FacturaService.prototype.getCountBillMonth = function () {
        return this.dataService.get('/api/productbill?nomreporte=ReportCountBillMonth');
        //return this.dataService.get('/api/productbill');
    };
    FacturaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], FacturaService);
    return FacturaService;
}());



/***/ }),

/***/ "../../../../../src/app/services/inventario.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventarioService = /** @class */ (function () {
    function InventarioService(dataService) {
        this.dataService = dataService;
    }
    InventarioService.prototype.actualizarInventario = function (inventario) {
        return this.dataService.put('/api/inventarioproducto', { 'inventarioProducto': inventario });
    };
    InventarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], InventarioService);
    return InventarioService;
}());



/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(dataService) {
        this.dataService = dataService;
    }
    LoginService.prototype.loggearUsuario = function (usuario) {
        return this.dataService.post('/api/login', { 'user': usuario });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/services/productos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductosService = /** @class */ (function () {
    function ProductosService(dataService, authService) {
        this.dataService = dataService;
        this.authService = authService;
    }
    ProductosService.prototype.obtenerProductos = function () {
        var url = '/api/products';
        if (this.authService.loggedUser.rol != 1) {
            url = url + '?idSucursal=' + this.authService.loggedUser.idSucursal;
        }
        return this.dataService.get(url);
    };
    ProductosService.prototype.obtenerProductosFiltroCodigo = function (filtro) {
        var url = '/api/products?';
        if (this.authService.loggedUser.rol != 1) {
            url = url.substring(0, url.length - 1) + '?idSucursal=' + this.authService.loggedUser.idSucursal + '&';
        }
        return this.dataService.get(url + 'codigo=' + filtro);
    };
    ProductosService.prototype.obtenerProductosFiltroNombre = function (filtro) {
        var url = '/api/products?';
        if (this.authService.loggedUser.rol != 1) {
            url = url.substring(0, url.length - 1) + '?idSucursal=' + this.authService.loggedUser.idSucursal + '&';
        }
        return this.dataService.get(url + 'nombre=' + filtro);
    };
    ProductosService.prototype.agregarProducto = function (producto) {
        return this.dataService.post('/api/products', { 'product': producto });
    };
    ProductosService.prototype.borrarProducto = function (producto) {
        return this.dataService.delete('/api/products/' + producto._id);
    };
    ProductosService.prototype.editarProducto = function (producto) {
        return this.dataService.put('/api/products/' + producto._id, { 'product': producto });
    };
    ProductosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], ProductosService);
    return ProductosService;
}());



/***/ }),

/***/ "../../../../../src/app/services/sucursal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SucursalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SucursalService = /** @class */ (function () {
    function SucursalService(dataService) {
        this.dataService = dataService;
    }
    SucursalService.prototype.obtenerSucursales = function () {
        return this.dataService.get('/api/sucursal');
    };
    SucursalService.prototype.agregarSucursal = function (sucursal) {
        console.log('sucursal');
        return this.dataService.post('/api/sucursal', { 'sucursal': sucursal });
    };
    SucursalService.prototype.borrarSucursal = function (sucursal) {
        return this.dataService.delete('/api/sucursal/' + sucursal._id);
    };
    SucursalService.prototype.editarSucursal = function (sucursal) {
        return this.dataService.put('/api/sucursal/' + sucursal._id, { 'sucursal': sucursal });
    };
    SucursalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], SucursalService);
    return SucursalService;
}());



/***/ }),

/***/ "../../../../../src/app/services/usuarios.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuariosService = /** @class */ (function () {
    function UsuariosService(dataService) {
        this.dataService = dataService;
    }
    UsuariosService.prototype.obtenerUsuarios = function () {
        return this.dataService.get('/api/users');
    };
    UsuariosService.prototype.agregarUsuario = function (usuario) {
        console.log('usuario');
        return this.dataService.post('/api/users', { 'user': usuario });
    };
    UsuariosService.prototype.borrarUsuario = function (usuario) {
        return this.dataService.delete('/api/users/' + usuario._id);
    };
    UsuariosService.prototype.editarUsuario = function (usuario) {
        return this.dataService.put('/api/users/' + usuario._id, { 'user': usuario });
    };
    UsuariosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], UsuariosService);
    return UsuariosService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/text-contains.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextContainsValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextContainsValidator = /** @class */ (function () {
    function TextContainsValidator() {
    }
    TextContainsValidator_1 = TextContainsValidator;
    TextContainsValidator.prototype.validate = function (control) {
        var text = control.value;
        if (text && text.indexOf(this.param) == -1) {
            return {
                textContains: {
                    textContains: this.param
                }
            };
        }
        else {
            return null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('text-contains-validator'),
        __metadata("design:type", String)
    ], TextContainsValidator.prototype, "param", void 0);
    TextContainsValidator = TextContainsValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[text-contains-validator]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return TextContainsValidator_1; }),
                    multi: true
                }
            ]
        })
    ], TextContainsValidator);
    return TextContainsValidator;
    var TextContainsValidator_1;
}());



/***/ }),

/***/ "../../../../../src/app/sucursales/sucursal-agregar/sucursal-agregar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sucursales/sucursal-agregar/sucursal-agregar.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(sucursalForm)\" #sucursalForm=\"ngForm\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Nombre</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Nombre\"\n\t\t\t\trequired\n\t\t\t\t[(ngModel)]=\"sucursal.nombre\" name=\"nombre\"\n\t\t\t\t#nombre=\"ngModel\" [disabled]=\"action=='ver'\">\n\t\t\t\t<div [hidden]=\"nombre.valid || nombre.pristine\" class=\"alert alert-danger\">\n\t\t\t\t\t<div *ngIf=\"nombre.errors && nombre.errors.required\">\n\t\t\t\t\t\tEl Nombre es requerido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"cantidad\">Telefonos</label>\n\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Telefono\" aria-label=\"Telefonos\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"newPhone\"  \n\t\t\t\t\t#phone=\"ngModel\" name=\"phone\" pattern=\"[0-9]*\" minlength=\"8\" maxlength=\"8\" [disabled]=\"action=='ver'\">\n\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t<span class=\"input-group-text\" id=\"basic-addon2\" (click)=\"(action=='agregar' || action=='editar') && newPhone && phone.valid && addPhone()\" style=\"padding-top: 6px;padding-bottom: 1px;\" tooltip=\"Agregar telefono.\">\n\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v8\"/><path d=\"M8 12h8\"/></g></svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div [hidden]=\"phone.valid || phone.pristine\" class=\"alert alert-danger\" *ngIf=\"phone.errors && phone.errors.pattern\">\n\t\t\t\t\tEl telefono debe ser compuesto solo de números.\n\t\t\t\t</div>\n\t\t\t\t<div [hidden]=\"phone.valid || phone.pristine\" class=\"alert alert-danger\" *ngIf=\"phone.errors && phone.errors.minlength\">\n\t\t\t\t\tEl telefono debe ser de minimo 8 digitos.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" style=\"min-height: 149px;\">\n\t\t\t\t<span>Telefonos:</span>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"let telefono of sucursal.telefonos\">{{telefono.telefono}} <button class=\"btn btn-link\" (click)=\"quitarTelefono(telefono)\" *ngIf=\"action=='agregar' || action=='editar'\">Quitar</button></li>\n\t\t\t\t</ul>\n\t\t\t\t<p *ngIf=\"sucursal.telefonos.length == 0\" style=\"color:red;\">Agregue telefonos para el sucursal.</p>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\">Correo</label>\n\t\t\t\t<input type=\"email\" \n\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\tid=\"email\" name=\"email\"\n\t\t\t\t\t[(ngModel)]=\"sucursal.correo.correo\"  \n\t\t\t\t\t#email=\"ngModel\" email [disabled]=\"action=='ver'\">\n\t\t\t\t<div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\" *ngIf=\"email.errors && email.errors.email\">\n\t\t\t\t\tRevise el formato del correo.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<p *ngIf=\"errorDisplay\" class=\"error\">{{errorDisplay}}</p>\n\t<div *ngIf=\"action!='ver'\">\n\t\t<button *ngIf=\"action!='borrar'\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!sucursalForm.form.valid || !canAdd || sucursal.telefonos.length == 0\">\n\t\t\t<span *ngIf=\"action=='agregar'\">Agregar</span>\n\t\t\t<span *ngIf=\"action=='editar'\">Editar</span>\n\t\t</button>\n\t\t<button *ngIf=\"action=='borrar'\" type=\"button\" class=\"btn btn-danger\" (click)=\"eliminar()\">\n\t\t\tEliminar\n\t\t</button>\n\t\t<!-- <button *ngIf=\"action!='borrar'\" type=\"button\" class=\"btn btn-danger\" (click)=\"newUsuario(); usuarioForm.reset()\">\t\tDeshacer cambios\n\t\t</button> -->\n\t</div>\n\t<!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"newUsuario(); usuarioForm.reset()\">Eliminar</button> -->\n</form>"

/***/ }),

/***/ "../../../../../src/app/sucursales/sucursal-agregar/sucursal-agregar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SucursalAgregarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_sucursal__ = __webpack_require__("../../../../../src/app/models/sucursal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_telefono__ = __webpack_require__("../../../../../src/app/models/telefono.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sucursal_service__ = __webpack_require__("../../../../../src/app/services/sucursal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SucursalAgregarComponent = /** @class */ (function () {
    function SucursalAgregarComponent(sucursalService) {
        this.sucursalService = sucursalService;
        this.agregarSucursal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editarSucursal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.canAdd = true;
        this.action = "ver";
        this.sucursal = new __WEBPACK_IMPORTED_MODULE_2__models_sucursal__["a" /* Sucursal */]();
        this.submitted = false;
        this.requiredText = 'sucursal';
        this.isEditing = false;
        this.newPhone = '';
        this.noPhones = true;
        this.errorDisplay = '';
    }
    SucursalAgregarComponent.prototype.ngOnInit = function () {
    };
    SucursalAgregarComponent.prototype.onSubmit = function (sucursalForm) {
        var _this = this;
        console.log('sucursal');
        console.log(this.sucursal);
        if (this.action === "agregar") {
            this.sucursalService.agregarSucursal(this.sucursal)
                .then(function (success) {
                console.log('agregado', success);
                _this.close.emit();
            }, function (fail) {
                var body = JSON.parse(fail._body);
                console.log(body);
                if (body.code == "11000") {
                    _this.errorDisplay = "Por favor seleccione otra cedula";
                }
                console.log('fallo', fail);
            });
        }
        if (this.action === "editar") {
            this.sucursalService.editarSucursal(this.sucursal)
                .then(function (success) {
                console.log('editado', success);
                _this.close.emit();
            }, function (fail) {
                var body = JSON.parse(fail._body);
                console.log(body);
                if (body.code == "11000") {
                    _this.errorDisplay = "Por favor seleccione otra cedula";
                }
                console.log('fallo', fail);
            });
        }
    };
    SucursalAgregarComponent.prototype.ngOnChanges = function (changes) {
        // console.log('changes',changes)
        // if(changes.usuario && changes.usuario.currentValue._id){
        // 	console.log('is editing');
        // 	this.isEditing = true;
        // }
    };
    SucursalAgregarComponent.prototype.newSucursal = function () {
        this.submitted = false;
        this.isEditing = false;
        this.sucursal = new __WEBPACK_IMPORTED_MODULE_2__models_sucursal__["a" /* Sucursal */]();
    };
    SucursalAgregarComponent.prototype.eliminar = function () {
        var _this = this;
        this.sucursalService.borrarSucursal(this.sucursal)
            .then(function (success) {
            console.log('borrado', success);
            _this.close.emit();
        }, function (fail) {
            console.log('fallo', fail);
        });
    };
    SucursalAgregarComponent.prototype.addPhone = function () {
        if (this.sucursal.telefonos.length < 3) {
            var phone = new __WEBPACK_IMPORTED_MODULE_3__models_telefono__["a" /* Telefono */]();
            phone.telefono = this.newPhone + '';
            this.sucursal.telefonos.push(phone);
            this.newPhone = '';
            this.phone.reset();
        }
        else {
            alert('Ya tiene el maximo de 3 telefonos para este sucursal');
        }
    };
    SucursalAgregarComponent.prototype.quitarTelefono = function (phone) {
        this.sucursal.telefonos = this.sucursal.telefonos.filter(function (tel) { return tel.telefono != phone.telefono; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SucursalAgregarComponent.prototype, "agregarSucursal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SucursalAgregarComponent.prototype, "editarSucursal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SucursalAgregarComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SucursalAgregarComponent.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SucursalAgregarComponent.prototype, "action", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('selectedProduct'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_sucursal__["a" /* Sucursal */])
    ], SucursalAgregarComponent.prototype, "sucursal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('phone'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgModel */])
    ], SucursalAgregarComponent.prototype, "phone", void 0);
    SucursalAgregarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sucursal-agregar',
            template: __webpack_require__("../../../../../src/app/sucursales/sucursal-agregar/sucursal-agregar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sucursales/sucursal-agregar/sucursal-agregar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_sucursal_service__["a" /* SucursalService */]])
    ], SucursalAgregarComponent);
    return SucursalAgregarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sucursales/sucursal-display/sucursal-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".actions {\n\tmargin-top: 8px;\n}\n\n.actions .text-center {\n\tmargin-bottom: 5px;\n}\n\n.actions .text-center button{\n\twidth: 85px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sucursales/sucursal-display/sucursal-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 row\">\n\t<div class=\"col-sm-3 col-6\">\n\t\t<p>{{sucursal.nombre}}</p>\n\t</div>\n\t<div class=\"col-sm-2 d-none d-sm-block text-center\">\n\t\t<p *ngIf=\"sucursal.telefonos.length > 0\">{{sucursal.telefonos[0].telefono}}</p>\n\t\t<p *ngIf=\"sucursal.telefonos.length == 0\">La Sucursal no tiene telefonos registrados.</p>\n\t</div>\n\t<div class=\"col-sm-3 d-none d-sm-block text-center ellipsis\">\n\t\t<p>{{sucursal.correo.correo}}</p>\n\t</div>\n\t<div class=\"col-sm-4 col-6 text-center\">\n\t\t<p class=\"action\">\n\t        <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"ver(template)\" tooltip=\"Ver información del la Sucursal.\">\n\t        \t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tVer\n\t        \t</span>\n\t        </button>\n\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" (click)=\"editar(template)\" tooltip=\"Editar información de la sucursal.\">\n\t\t\t\t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2l4 4L7 17H3v-4L14 2z\"/><path d=\"M3 22h18\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tEditar\n\t        \t</span>\n\t        </button>\n\t        <button class=\"btn btn-sm btn-outline-secondary delete\" (click)=\"borrar(template)\" tooltip=\"Eliminar sucursal.\">\n\t        \t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"/><path d=\"M18 9l-6 6\"/><path d=\"M12 9l6 6\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tEliminar\n\t        \t</span>\n\t        </button>\n        </p>\n\t</div>\n</div>\n \n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">{{action}} Sucursal</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-sucursal-agregar [action]=\"action\" [selectedProduct]=\"copy\" (close)=\"actualizar();modalRef.hide();\"></app-sucursal-agregar>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/sucursales/sucursal-display/sucursal-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SucursalDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_sucursal__ = __webpack_require__("../../../../../src/app/models/sucursal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sucursal_service__ = __webpack_require__("../../../../../src/app/services/sucursal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SucursalDisplayComponent = /** @class */ (function () {
    function SucursalDisplayComponent(sucursalService, modalService) {
        this.sucursalService = sucursalService;
        this.modalService = modalService;
        this.borrarSucursal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editarSucursal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.actualizarLista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isDeleting = false;
        this.action = "ver";
    }
    SucursalDisplayComponent.prototype.ngOnInit = function () {
        this.copy = JSON.parse(JSON.stringify(this.sucursal));
    };
    SucursalDisplayComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SucursalDisplayComponent.prototype.ver = function (template) {
        this.action = "ver";
        this.copy = JSON.parse(JSON.stringify(this.sucursal));
        this.openModal(template);
    };
    SucursalDisplayComponent.prototype.borrar = function (template) {
        this.action = "borrar";
        this.copy = JSON.parse(JSON.stringify(this.sucursal));
        this.openModal(template);
    };
    SucursalDisplayComponent.prototype.editar = function (template) {
        this.action = "editar";
        this.copy = JSON.parse(JSON.stringify(this.sucursal));
        this.openModal(template);
    };
    SucursalDisplayComponent.prototype.actualizar = function () {
        this.actualizarLista.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_sucursal__["a" /* Sucursal */])
    ], SucursalDisplayComponent.prototype, "sucursal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SucursalDisplayComponent.prototype, "borrarSucursal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SucursalDisplayComponent.prototype, "editarSucursal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SucursalDisplayComponent.prototype, "actualizarLista", void 0);
    SucursalDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sucursal-display',
            template: __webpack_require__("../../../../../src/app/sucursales/sucursal-display/sucursal-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sucursales/sucursal-display/sucursal-display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_sucursal_service__["a" /* SucursalService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], SucursalDisplayComponent);
    return SucursalDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sucursales/sucursales.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sucursal-display{\n\tmargin-top: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sucursales/sucursales.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n\t\t<h1 class=\"h2\">Sucursales</h1>\n\t\t<div class=\"btn-toolbar mb-2 mb-md-0\">\n\t\t\t<div class=\"btn-group mr-2\">\n\t\t\t\t<button (click)=\"agregar(template)\" class=\"btn btn-sm btn-outline-secondary\"><svg _ngcontent-c3=\"\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><g _ngcontent-c3=\"\" fill=\"none\" stroke=\"#626262\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path _ngcontent-c3=\"\" d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><path _ngcontent-c3=\"\" d=\"M17 21v-8H7v8\"></path><path _ngcontent-c3=\"\" d=\"M7 3v5h8\"></path></g><rect _ngcontent-c3=\"\" fill=\"rgba(0, 0, 0, 0)\" height=\"24\" width=\"24\" x=\"0\" y=\"0\"></rect></svg> <p _ngcontent-c3=\"\" style=\"display: block;margin-top: -7px !important;margin-bottom: 4px;\">Agregar</p></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 products row\">\n\t\t<ul class=\"col-12 items-list\">\n\t\t\t<li>\n\t\t\t\t<div class=\"col-12 row\">\n\t\t\t\t\t<div class=\"col-sm-3 col-6\">\n\t\t\t\t\t\t<p>Nombre</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2 d-none d-sm-block text-center\">\n\t\t\t\t\t\t<p>Telefono</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 d-none d-sm-block text-center\">\n\t\t\t\t\t\t<p>Correo</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 col-6 text-center\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAcciones\n\t\t\t\t        </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li *ngFor=\"let sucursal of sucursales; index as i\" class=\"\" [class.pair]=\"i%2==0\">\n\t\t\t\t<app-sucursal-display [sucursal]='sucursal' (borrarSucursal)=\"borrarSucursal($event)\" (editarSucursal)=\"editarSucursal($event)\" (actualizarLista)=\"actualizarLista($event)\" class=\"\"></app-sucursal-display>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</main>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">{{action}} Sucursal</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-sucursal-agregar [action]=\"action\" (close)=\"actualizarLista();modalRef.hide()\"></app-sucursal-agregar>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/sucursales/sucursales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SucursalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_sucursal__ = __webpack_require__("../../../../../src/app/models/sucursal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sucursal_service__ = __webpack_require__("../../../../../src/app/services/sucursal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SucursalesComponent = /** @class */ (function () {
    function SucursalesComponent(sucursalService, modalService) {
        this.sucursalService = sucursalService;
        this.modalService = modalService;
        this.selectedProduct = new __WEBPACK_IMPORTED_MODULE_1__models_sucursal__["a" /* Sucursal */];
        this.loading = false;
        this.action = 'agregar';
    }
    SucursalesComponent.prototype.ngOnInit = function () {
        this.obtenerSucursales();
    };
    SucursalesComponent.prototype.editarSucursal = function (sucursal) {
        console.log('edit', sucursal);
        this.selectedProduct = Object.assign({}, sucursal);
    };
    SucursalesComponent.prototype.editarSucursalSave = function (sucursal) {
        var _this = this;
        this.sucursalService.editarSucursal(sucursal.sucursal)
            .then(function (data) {
            _this.obtenerSucursales();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    SucursalesComponent.prototype.borrarSucursal = function (sucursal) {
        var _this = this;
        this.sucursalService.borrarSucursal(sucursal)
            .then(function (data) {
            _this.obtenerSucursales();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    SucursalesComponent.prototype.obtenerSucursales = function () {
        var _this = this;
        this.sucursalService.obtenerSucursales().subscribe(function (data) {
            _this.sucursales = data.sucursal;
        }, function (error) {
            console.log('error', error);
        });
    };
    SucursalesComponent.prototype.agregarSucursal = function (sucursal) {
        var _this = this;
        this.loading = true;
        this.sucursalService.agregarSucursal(sucursal.sucursal)
            .then(function (data) {
            console.log('sucursal agregado');
            sucursal.form.reset();
            _this.loading = false;
            _this.obtenerSucursales();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    SucursalesComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SucursalesComponent.prototype.agregar = function (template) {
        this.action = "agregar";
        this.openModal(template);
    };
    SucursalesComponent.prototype.actualizarLista = function () {
        this.obtenerSucursales();
    };
    SucursalesComponent.prototype.ngAfterViewInit = function () {
        console.timeEnd();
    };
    SucursalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sucursales',
            template: __webpack_require__("../../../../../src/app/sucursales/sucursales.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sucursales/sucursales.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_sucursal_service__["a" /* SucursalService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], SucursalesComponent);
    return SucursalesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/usuarios/usuario-agregar/usuario-agregar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usuarios/usuario-agregar/usuario-agregar.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(usuarioForm)\" #usuarioForm=\"ngForm\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Nombre</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Nombre\"\n\t\t\t\trequired\n\t\t\t\t[(ngModel)]=\"usuario.nombre\" name=\"nombre\"\n\t\t\t\t#nombre=\"ngModel\" [disabled]=\"action=='ver'\">\n\t\t\t\t<div [hidden]=\"nombre.valid || nombre.pristine\" class=\"alert alert-danger\">\n\t\t\t\t\t<div *ngIf=\"nombre.errors && nombre.errors.required\">\n\t\t\t\t\t\tEl Nombre es requerido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"apellido1\">Primer Apellido</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Nombre\"\n\t\t\t\trequired\n\t\t\t\t[(ngModel)]=\"usuario.apellido1\" name=\"apellido1\"\n\t\t\t\t#apellido1=\"ngModel\" [disabled]=\"action=='ver'\">\n\t\t\t\t<div [hidden]=\"apellido1.valid || apellido1.pristine\" class=\"alert alert-danger\">\n\t\t\t\t\t<div *ngIf=\"apellido1.errors && apellido1.errors.required\">\n\t\t\t\t\t\tEl primer apellido es requerido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"apellido2\">Segundo Apellido</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Nombre\"\n\t\t\t\t[(ngModel)]=\"usuario.apellido2\" name=\"apellido2\"\n\t\t\t\t#apellido2=\"ngModel\" [disabled]=\"action=='ver'\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"cedula\">Cedula</label>\n\t\t\t\t<input type=\"text\" placeholder=\"102340671\" \n\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\tid=\"cedula\" name=\"cedula\"\n\t\t\t\t\t[(ngModel)]=\"usuario.cedula\"  \n\t\t\t\t\t#cedula=\"ngModel\" \n\t\t\t\t\trequired pattern=\"[0-9]*\" minlength=\"9\" maxlength=\"15\" [disabled]=\"action=='ver'\">\n\t\t\t\t<div [hidden]=\"cedula.valid || cedula.pristine\" class=\"alert alert-danger\" *ngIf=\"cedula.errors && cedula.errors.required\">\n\t\t\t\t\tLa Cedula es requerida\n\t\t\t\t</div>\n\t\t\t\t<div [hidden]=\"cedula.valid || cedula.pristine\" class=\"alert alert-danger\" *ngIf=\"cedula.errors && cedula.errors.pattern\">\n\t\t\t\t\tLa Cedula debe ser compuesta solo de números.\n\t\t\t\t</div>\n\t\t\t\t<div [hidden]=\"cedula.valid || cedula.pristine\" class=\"alert alert-danger\" *ngIf=\"cedula.errors && cedula.errors.minlength\">\n\t\t\t\t\tLa Cedula debe ser de minimo 9 digitos.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"clave\">Clave</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Clave\"\n\t\t\t\trequired\n\t\t\t\t[(ngModel)]=\"usuario.clave\" name=\"clave\"\n\t\t\t\t#clave=\"ngModel\" [disabled]=\"action=='ver'\">\n\t\t\t\t<div [hidden]=\"clave.valid || clave.pristine\" class=\"alert alert-danger\">\n\t\t\t\t\t<div *ngIf=\"clave.errors && clave.errors.required\">\n\t\t\t\t\t\tLa clave es requerida\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"sucursal\">Sucursal</label>\n\t\t\t\t<select [(ngModel)]=\"usuario.idSucursal\" name=\"sucursal\" class=\"form-control\" [disabled]=\"action=='ver'\"> \n\t\t\t\t    <option [ngValue]=\"sucursal._id\" *ngFor=\"let sucursal of sucursales\">{{sucursal.nombre}}</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"cantidad\">Telefonos</label>\n\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Telefono\" aria-label=\"Telefonos\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"newPhone\"  \n\t\t\t\t\t#phone=\"ngModel\" name=\"phone\" pattern=\"[0-9]*\" minlength=\"8\" maxlength=\"8\" [disabled]=\"action=='ver'\">\n\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t<span class=\"input-group-text\" id=\"basic-addon2\" (click)=\"(action=='agregar' || action=='editar') && newPhone && phone.valid && addPhone()\" style=\"padding-top: 6px;padding-bottom: 1px;\" tooltip=\"Agregar telefono.\">\n\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v8\"/><path d=\"M8 12h8\"/></g></svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div [hidden]=\"phone.valid || phone.pristine\" class=\"alert alert-danger\" *ngIf=\"phone.errors && phone.errors.pattern\">\n\t\t\t\t\tEl telefono debe ser compuesto solo de números.\n\t\t\t\t</div>\n\t\t\t\t<div [hidden]=\"phone.valid || phone.pristine\" class=\"alert alert-danger\" *ngIf=\"phone.errors && phone.errors.minlength\">\n\t\t\t\t\tEl telefono debe ser de minimo 8 digitos.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" style=\"min-height: 149px;\">\n\t\t\t\t<span>Telefonos:</span>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"let telefono of usuario.telefonos\">{{telefono.telefono}} <button class=\"btn btn-link\" (click)=\"quitarTelefono(telefono)\" *ngIf=\"action=='agregar' || action=='editar'\">Quitar</button></li>\n\t\t\t\t</ul>\n\t\t\t\t<p *ngIf=\"usuario.telefonos.length == 0\" style=\"color:red;\">Agregue telefonos para el usuario.</p>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\">Correo</label>\n\t\t\t\t<input type=\"email\" \n\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\tid=\"email\" name=\"email\"\n\t\t\t\t\t[(ngModel)]=\"usuario.correo.correo\"  \n\t\t\t\t\t#email=\"ngModel\" email [disabled]=\"action=='ver'\">\n\t\t\t\t<div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\" *ngIf=\"email.errors && email.errors.email\">\n\t\t\t\t\tRevise el formato del correo.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"rol\">Rol </label>\n\t\t\t\t<select [(ngModel)]=\"usuario.rol\" name=\"rol\" class=\"form-control\" [disabled]=\"action=='ver'\"> \n\t\t\t\t    <option value=\"1\" selected=\"\">Administrador</option>\n\t\t\t\t    <option value=\"2\">Cajero</option>\n\t\t\t\t    <option value=\"3\">Vendedor</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<p *ngIf=\"errorDisplay\" class=\"error\">{{errorDisplay}}</p>\n\t<div *ngIf=\"action!='ver'\">\n\t\t<button *ngIf=\"action!='borrar'\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!usuarioForm.form.valid || !canAdd || usuario.telefonos.length == 0\">\n\t\t\t<span *ngIf=\"action=='agregar'\">Agregar</span>\n\t\t\t<span *ngIf=\"action=='editar'\">Editar</span>\n\t\t</button>\n\t\t<button *ngIf=\"action=='borrar'\" type=\"button\" class=\"btn btn-danger\" (click)=\"eliminar()\">\n\t\t\tEliminar\n\t\t</button>\n\t\t<!-- <button *ngIf=\"action!='borrar'\" type=\"button\" class=\"btn btn-danger\" (click)=\"newUsuario(); usuarioForm.reset()\">\t\tDeshacer cambios\n\t\t</button> -->\n\t</div>\n\t<!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"newUsuario(); usuarioForm.reset()\">Eliminar</button> -->\n</form>"

/***/ }),

/***/ "../../../../../src/app/usuarios/usuario-agregar/usuario-agregar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioAgregarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_usuario__ = __webpack_require__("../../../../../src/app/models/usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_telefono__ = __webpack_require__("../../../../../src/app/models/telefono.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sucursal_service__ = __webpack_require__("../../../../../src/app/services/sucursal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsuarioAgregarComponent = /** @class */ (function () {
    function UsuarioAgregarComponent(usuariosService, sucursalService) {
        var _this = this;
        this.usuariosService = usuariosService;
        this.sucursalService = sucursalService;
        this.agregarUsuario = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editarUsuario = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.canAdd = true;
        this.action = "ver";
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */]();
        this.submitted = false;
        this.requiredText = 'usuario';
        this.isEditing = false;
        this.newPhone = '';
        this.noPhones = true;
        this.errorDisplay = '';
        this.sucursales = [];
        this.sucursalService.obtenerSucursales().subscribe(function (data) {
            _this.sucursales = data.sucursal;
        }, function (error) {
            console.log('error', error);
        });
    }
    UsuarioAgregarComponent.prototype.ngOnInit = function () {
    };
    UsuarioAgregarComponent.prototype.onSubmit = function (usuarioForm) {
        var _this = this;
        console.log('usuario');
        console.log(this.usuario);
        if (this.action === "agregar") {
            this.usuariosService.agregarUsuario(this.usuario)
                .then(function (success) {
                console.log('agregado', success);
                _this.close.emit();
            }, function (fail) {
                var body = JSON.parse(fail._body);
                console.log(body);
                if (body.code == "11000") {
                    _this.errorDisplay = "Por favor seleccione otra cedula";
                }
                console.log('fallo', fail);
            });
        }
        if (this.action === "editar") {
            this.usuariosService.editarUsuario(this.usuario)
                .then(function (success) {
                console.log('editado', success);
                _this.close.emit();
            }, function (fail) {
                var body = JSON.parse(fail._body);
                console.log(body);
                if (body.code == "11000") {
                    _this.errorDisplay = "Por favor seleccione otra cedula";
                }
                console.log('fallo', fail);
            });
        }
    };
    UsuarioAgregarComponent.prototype.ngOnChanges = function (changes) {
        // console.log('changes',changes)
        // if(changes.usuario && changes.usuario.currentValue._id){
        // 	console.log('is editing');
        // 	this.isEditing = true;
        // }
    };
    UsuarioAgregarComponent.prototype.newUsuario = function () {
        this.submitted = false;
        this.isEditing = false;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */]();
    };
    UsuarioAgregarComponent.prototype.eliminar = function () {
        var _this = this;
        this.usuariosService.borrarUsuario(this.usuario)
            .then(function (success) {
            console.log('borrado', success);
            _this.close.emit();
        }, function (fail) {
            console.log('fallo', fail);
        });
    };
    UsuarioAgregarComponent.prototype.addPhone = function () {
        if (this.usuario.telefonos.length < 3) {
            var phone = new __WEBPACK_IMPORTED_MODULE_3__models_telefono__["a" /* Telefono */]();
            phone.telefono = this.newPhone + '';
            this.usuario.telefonos.push(phone);
            this.newPhone = '';
            this.phone.reset();
        }
        else {
            alert('Ya tiene el maximo de 3 telefonos para este usuario');
        }
    };
    UsuarioAgregarComponent.prototype.quitarTelefono = function (phone) {
        this.usuario.telefonos = this.usuario.telefonos.filter(function (tel) { return tel.telefono != phone.telefono; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UsuarioAgregarComponent.prototype, "agregarUsuario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UsuarioAgregarComponent.prototype, "editarUsuario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UsuarioAgregarComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UsuarioAgregarComponent.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], UsuarioAgregarComponent.prototype, "action", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('selectedProduct'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */])
    ], UsuarioAgregarComponent.prototype, "usuario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('phone'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgModel */])
    ], UsuarioAgregarComponent.prototype, "phone", void 0);
    UsuarioAgregarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-usuario-agregar',
            template: __webpack_require__("../../../../../src/app/usuarios/usuario-agregar/usuario-agregar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/usuarios/usuario-agregar/usuario-agregar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__["a" /* UsuariosService */], __WEBPACK_IMPORTED_MODULE_5__services_sucursal_service__["a" /* SucursalService */]])
    ], UsuarioAgregarComponent);
    return UsuarioAgregarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/usuarios/usuario-display/usuario-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".actions {\n\tmargin-top: 8px;\n}\n\n.actions .text-center {\n\tmargin-bottom: 5px;\n}\n\n.actions .text-center button{\n\twidth: 85px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usuarios/usuario-display/usuario-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 row\">\n\t<div class=\"col-sm-3 col-6\">\n\t\t<p>{{usuario.nombre}} {{usuario.apellido1}}</p>\n\t</div>\n\t<div class=\"col-sm-2 d-none d-sm-block text-center\">\n\t\t<p *ngIf=\"usuario.telefonos.length > 0\">{{usuario.telefonos[0].telefono}}</p>\n\t\t<p *ngIf=\"usuario.telefonos.length == 0\">El Usuario no tiene telefonos registrados.</p>\n\t</div>\n\t<div class=\"col-sm-3 d-none d-sm-block text-center ellipsis\">\n\t\t<p>{{usuario.correo.correo}}</p>\n\t</div>\n\t<div class=\"col-sm-4 col-6 text-center\">\n\t\t<p class=\"action\">\n\t        <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"ver(template)\" tooltip=\"Ver información del usuario.\">\n\t        \t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tVer\n\t        \t</span>\n\t        </button>\n\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" (click)=\"editar(template)\" tooltip=\"Editar información del usuario.\">\n\t\t\t\t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2l4 4L7 17H3v-4L14 2z\"/><path d=\"M3 22h18\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tEditar\n\t        \t</span>\n\t        </button>\n\t        <button class=\"btn btn-sm btn-outline-secondary delete\" (click)=\"borrar(template)\" tooltip=\"Eliminar usuario.\">\n\t        \t<span class=\"icon\">\n\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"/><path d=\"M18 9l-6 6\"/><path d=\"M12 9l6 6\"/></g></svg>\n\t          \t</span>\n\t          \t<span class=\"label\">\n\t          \t\tEliminar\n\t        \t</span>\n\t        </button>\n        </p>\n\t</div>\n</div>\n \n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">{{action}} Usuario</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-usuario-agregar [action]=\"action\" [selectedProduct]=\"copy\" (close)=\"actualizar();modalRef.hide();\"></app-usuario-agregar>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/usuarios/usuario-display/usuario-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_usuario__ = __webpack_require__("../../../../../src/app/models/usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioDisplayComponent = /** @class */ (function () {
    function UsuarioDisplayComponent(usuariosService, modalService) {
        this.usuariosService = usuariosService;
        this.modalService = modalService;
        this.borrarUsuario = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editarUsuario = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.actualizarLista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isDeleting = false;
        this.action = "ver";
    }
    UsuarioDisplayComponent.prototype.ngOnInit = function () {
        this.copy = JSON.parse(JSON.stringify(this.usuario));
    };
    UsuarioDisplayComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    UsuarioDisplayComponent.prototype.ver = function (template) {
        this.action = "ver";
        this.copy = JSON.parse(JSON.stringify(this.usuario));
        this.openModal(template);
    };
    UsuarioDisplayComponent.prototype.borrar = function (template) {
        this.action = "borrar";
        this.copy = JSON.parse(JSON.stringify(this.usuario));
        this.openModal(template);
    };
    UsuarioDisplayComponent.prototype.editar = function (template) {
        this.action = "editar";
        this.copy = JSON.parse(JSON.stringify(this.usuario));
        this.openModal(template);
    };
    UsuarioDisplayComponent.prototype.actualizar = function () {
        this.actualizarLista.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_usuario__["a" /* Usuario */])
    ], UsuarioDisplayComponent.prototype, "usuario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UsuarioDisplayComponent.prototype, "borrarUsuario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UsuarioDisplayComponent.prototype, "editarUsuario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UsuarioDisplayComponent.prototype, "actualizarLista", void 0);
    UsuarioDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-usuario-display',
            template: __webpack_require__("../../../../../src/app/usuarios/usuario-display/usuario-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/usuarios/usuario-display/usuario-display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_usuarios_service__["a" /* UsuariosService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], UsuarioDisplayComponent);
    return UsuarioDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/usuarios/usuarios.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".usuario-display{\n\tmargin-top: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usuarios/usuarios.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n\t\t<h1 class=\"h2\">Empleados</h1>\n\t\t<div class=\"btn-toolbar mb-2 mb-md-0\">\n\t\t\t<div class=\"btn-group mr-2\">\n\t\t\t\t<button (click)=\"agregar(template)\" class=\"btn btn-sm btn-outline-secondary\"><svg _ngcontent-c3=\"\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><g _ngcontent-c3=\"\" fill=\"none\" stroke=\"#626262\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path _ngcontent-c3=\"\" d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><path _ngcontent-c3=\"\" d=\"M17 21v-8H7v8\"></path><path _ngcontent-c3=\"\" d=\"M7 3v5h8\"></path></g><rect _ngcontent-c3=\"\" fill=\"rgba(0, 0, 0, 0)\" height=\"24\" width=\"24\" x=\"0\" y=\"0\"></rect></svg> <p _ngcontent-c3=\"\" style=\"display: block;margin-top: -7px !important;margin-bottom: 4px;\">Agregar</p></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 products row\">\n\t\t<ul class=\"col-12 items-list\">\n\t\t\t<li>\n\t\t\t\t<div class=\"col-12 row\">\n\t\t\t\t\t<div class=\"col-sm-3 col-6\">\n\t\t\t\t\t\t<p>Nombre</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2 d-none d-sm-block text-center\">\n\t\t\t\t\t\t<p>Telefono</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 d-none d-sm-block text-center\">\n\t\t\t\t\t\t<p>Correo</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 col-6 text-center\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAcciones\n\t\t\t\t        </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li *ngFor=\"let usuario of usuarios; index as i\" class=\"\" [class.pair]=\"i%2==0\">\n\t\t\t\t<app-usuario-display [usuario]='usuario' (borrarUsuario)=\"borrarUsuario($event)\" (editarUsuario)=\"editarUsuario($event)\" (actualizarLista)=\"actualizarLista($event)\" class=\"\"></app-usuario-display>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</main>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" style=\"text-transform: capitalize;\">{{action}} Empleado</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-usuario-agregar [action]=\"action\" (close)=\"actualizarLista();modalRef.hide()\"></app-usuario-agregar>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/usuarios/usuarios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_usuario__ = __webpack_require__("../../../../../src/app/models/usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuariosComponent = /** @class */ (function () {
    function UsuariosComponent(usuariosService, modalService) {
        this.usuariosService = usuariosService;
        this.modalService = modalService;
        this.selectedProduct = new __WEBPACK_IMPORTED_MODULE_1__models_usuario__["a" /* Usuario */];
        this.loading = false;
        this.action = 'agregar';
    }
    UsuariosComponent.prototype.ngOnInit = function () {
        this.obtenerUsuarios();
    };
    UsuariosComponent.prototype.editarUsuario = function (usuario) {
        console.log('edit', usuario);
        this.selectedProduct = Object.assign({}, usuario);
    };
    UsuariosComponent.prototype.editarUsuarioSave = function (usuario) {
        var _this = this;
        this.usuariosService.editarUsuario(usuario.usuario)
            .then(function (data) {
            _this.obtenerUsuarios();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    UsuariosComponent.prototype.borrarUsuario = function (usuario) {
        var _this = this;
        this.usuariosService.borrarUsuario(usuario)
            .then(function (data) {
            _this.obtenerUsuarios();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    UsuariosComponent.prototype.obtenerUsuarios = function () {
        var _this = this;
        this.usuariosService.obtenerUsuarios().subscribe(function (data) {
            _this.usuarios = data.user;
        }, function (error) {
            console.log('error', error);
        });
    };
    UsuariosComponent.prototype.agregarUsuario = function (usuario) {
        var _this = this;
        this.loading = true;
        this.usuariosService.agregarUsuario(usuario.usuario)
            .then(function (data) {
            console.log('usuario agregado');
            usuario.form.reset();
            _this.loading = false;
            _this.obtenerUsuarios();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    UsuariosComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    UsuariosComponent.prototype.agregar = function (template) {
        this.action = "agregar";
        this.openModal(template);
    };
    UsuariosComponent.prototype.actualizarLista = function () {
        this.obtenerUsuarios();
    };
    UsuariosComponent.prototype.ngAfterViewInit = function () {
        console.timeEnd();
    };
    UsuariosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-usuarios',
            template: __webpack_require__("../../../../../src/app/usuarios/usuarios.component.html"),
            styles: [__webpack_require__("../../../../../src/app/usuarios/usuarios.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_usuarios_service__["a" /* UsuariosService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], UsuariosComponent);
    return UsuariosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ventas/ventas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ventas/ventas.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ventas works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/ventas/ventas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VentasComponent = /** @class */ (function () {
    function VentasComponent() {
    }
    VentasComponent.prototype.ngOnInit = function () {
    };
    VentasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ventas',
            template: __webpack_require__("../../../../../src/app/ventas/ventas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ventas/ventas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VentasComponent);
    return VentasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ver-facturas/ver-facturas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sort svg{\n\theight: 15px;\n\t/*position: absolute;\n\ttop: 10px;\n\tleft: 90px;*/\n}\n\n.sort-item{\n\tcursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ver-facturas/ver-facturas.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\n\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n\t\t<h1 class=\"h2\">Facturas</h1>\n\t\t<div class=\"btn-toolbar mb-2 mb-md-0\">\n\t\t\t<div class=\"btn-group mr-2\">\n\t\t\t\t<button (click)=\"agregarFactura()\" class=\"btn btn-sm btn-outline-secondary\"><svg _ngcontent-c3=\"\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" height=\"24\" preserveAspectRatio=\"xMidYMid meet\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><g _ngcontent-c3=\"\" fill=\"none\" stroke=\"#626262\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path _ngcontent-c3=\"\" d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><path _ngcontent-c3=\"\" d=\"M17 21v-8H7v8\"></path><path _ngcontent-c3=\"\" d=\"M7 3v5h8\"></path></g><rect _ngcontent-c3=\"\" fill=\"rgba(0, 0, 0, 0)\" height=\"24\" width=\"24\" x=\"0\" y=\"0\"></rect></svg> <p _ngcontent-c3=\"\" style=\"display: block;margin-top: -7px !important;margin-bottom: 4px;\">Agregar</p></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"row col-12\" style=\"padding-bottom: 26px;\">\n\t\t\t<div class=\"col-4 offset-1 \">\n\t\t\t\tBuscar por cliente:\n\t\t\t\t<input type=\"text\" name=\"cliente-name\" [(ngModel)]=\"nombreCliente\" (ngModelChange)=\"changedNombreCliente()\" >\n\t\t\t</div>\n\t\t\t<div class=\"col-4 offset-1 \">\n\t\t\t\tBuscar por vendedor:\n\t\t\t\t<input type=\"text\" name=\"cliente-name\" [(ngModel)]=\"nombreVendedor\" (ngModelChange)=\"changedNombreVendedor()\" >\n\t\t\t</div>\n\t\t</div>\n\t\t<pagination-controls\n\t\t\tclass=\"pagination\"\n\t\t\tpreviousLabel=\"Previo\"\n            nextLabel=\"Siguiente\"\n\t\t\t(pageChange)=\"p = $event\">\n\t\t</pagination-controls>\n\t\t<ul class=\"col-12 items-list\">\n\t\t\t<li>\n\t\t\t\t<div class=\"col-12 row\">\n\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t<p (click)=\"orderBy('comprador.nombre')\" class=\"sort-item\">Cliente <br>\n\t\t\t\t\t\t\t<span *ngIf=\"order == 'comprador.nombre'\" class=\"sort\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == true\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5\"/><path d=\"M5 12l7-7 7 7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == false\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5v14\"/><path d=\"M19 12l-7 7-7-7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t<p (click)=\"orderBy('total')\" class=\"sort-item\">Total<br>\n\t\t\t\t\t\t\t<span *ngIf=\"order=='total'\" class=\"sort\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == true\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5\"/><path d=\"M5 12l7-7 7 7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == false\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5v14\"/><path d=\"M19 12l-7 7-7-7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t<p (click)=\"orderBy('fecha_modificada')\" class=\"sort-item\">Fecha Modificación<br>\n\t\t\t\t\t\t\t<span *ngIf=\"order=='fecha_modificada'\" class=\"sort\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == true\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5\"/><path d=\"M5 12l7-7 7 7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == false\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5v14\"/><path d=\"M19 12l-7 7-7-7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t<p (click)=\"orderBy('estado')\" class=\"sort-item\">Estado <br>\n\t\t\t\t\t\t\t<span *ngIf=\"order=='estado'\" class=\"sort\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == true\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5\"/><path d=\"M5 12l7-7 7 7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"reverse == false\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5v14\"/><path d=\"M19 12l-7 7-7-7\"/></g></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAcciones\n\t\t\t\t        </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li *ngFor=\"let factura of facturas | paginate: { itemsPerPage: 10, currentPage: p }; index as i\" class=\"\" [class.pair]=\"i%2==0\">\n\t\t\t\t<div class=\"col-12 row\">\n\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t<p *ngIf=\"factura.comprador.nombre != ''\">\n\t\t\t\t\t\t\t{{factura.comprador.nombre}} {{factura.comprador.apellido1}}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p *ngIf=\"factura.comprador.nombre == ''\">\n\t\t\t\t\t\t\tEsta factura no cuenta con Cliente aún.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t<p>{{factura.total | number:'1.2-2'}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t<p>{{factura.fecha_modificada | date:'dd/MM/yyyy'}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t<p>{{factura.estado}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t<p class=\"action\">\n\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" (click)=\"seleccionarFactura(factura)\" tooltip=\"Seleccionar factura.\">\n\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t          \t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" width=\"24\" height=\"24\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2l4 4L7 17H3v-4L14 2z\"/><path d=\"M3 22h18\"/></g></svg>\n\t\t\t\t          \t</span>\n\t\t\t\t          \t<span class=\"label\">\n\t\t\t\t          \t\tSeleccionar\n\t\t\t\t        \t</span>\n\t\t\t\t        </button>\n\t\t\t\t        </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/ver-facturas/ver-facturas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerFacturasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_factura_service__ = __webpack_require__("../../../../../src/app/services/factura.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerFacturasComponent = /** @class */ (function () {
    function VerFacturasComponent(router, facturaService) {
        this.router = router;
        this.facturaService = facturaService;
        this.facturas = [];
        this.p = 1;
        this.order = 'fecha_modificada';
        this.reverse = true;
        this.nombreCliente = '';
        this.nombreVendedor = '';
        this.pagConfig = {
            autoHide: false,
            previousLabel: 'Previo',
            nextLabel: 'Siguiente'
        };
        this.changedNombreCliente = __WEBPACK_IMPORTED_MODULE_2_lodash__["debounce"](function () {
            var _this = this;
            console.log('called');
            if (this.nombreCliente.length == 0) {
                this.obtenerFacturas();
            }
            if (this.nombreCliente.length > 2) {
                this.buscando = true;
                this.facturaService.obtenerFacturasFiltroNombre(this.nombreCliente).subscribe(function (data) {
                    _this.facturas = data.productBill;
                }, function (fail) {
                });
            }
        }, 400);
        this.changedNombreVendedor = __WEBPACK_IMPORTED_MODULE_2_lodash__["debounce"](function () {
            var _this = this;
            console.log('called');
            if (this.nombreVendedor.length == 0) {
                this.obtenerFacturas();
            }
            if (this.nombreVendedor.length > 2) {
                this.buscando = true;
                this.facturaService.obtenerFacturasFiltroNombreVendedor(this.nombreVendedor).subscribe(function (data) {
                    _this.facturas = data.productBill;
                }, function (fail) {
                });
            }
        }, 400);
    }
    VerFacturasComponent.prototype.ngOnInit = function () {
        this.obtenerFacturas();
    };
    VerFacturasComponent.prototype.orderBy = function (by) {
        this.order = by;
        this.facturas = this.sortByKey(this.facturas, by);
        if (this.reverse) {
            this.facturas.reverse();
        }
        this.reverse = !this.reverse;
    };
    VerFacturasComponent.prototype.sortByKey = function (array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            if (key.indexOf('.') != -1) {
                x = a[key.split('.')[0]][key.split('.')[1]];
                y = b[key.split('.')[0]][key.split('.')[1]];
            }
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    };
    VerFacturasComponent.prototype.obtenerFacturas = function () {
        var _this = this;
        this.facturaService.obtenerFacturas().subscribe(function (data) {
            console.log('success', data);
            _this.facturas = data.productBill;
            _this.reverse = true;
            _this.orderBy('fecha_modificada');
        }, function (fail) {
        });
    };
    VerFacturasComponent.prototype.agregarFactura = function () {
        this.router.navigate(['/vender']);
    };
    VerFacturasComponent.prototype.obtieneTotal = function (factura) {
        var total = 0;
        for (var i = factura.productos.length - 1; i >= 0; i--) {
            var productoPrecio = factura.productos[i].producto.precio;
            if (factura.productos[i].descuento > 0) {
                if (factura.productos[i].descuento_tipo == 1) {
                    productoPrecio -= factura.productos[i].descuento;
                }
                else {
                    productoPrecio -= (productoPrecio * (factura.productos[i].descuento * 0.01));
                }
            }
            total += productoPrecio * factura.productos[i].cantidad;
        }
        if (total > 0) {
            if (factura.descuento > 0) {
                if (factura.descuento_tipo == 1) {
                    total -= factura.descuento;
                }
                else {
                    total -= (total * (factura.descuento * 0.01));
                }
            }
        }
        if (total < 0) {
            alert('Por favor revise los datos');
        }
        return total;
    };
    VerFacturasComponent.prototype.seleccionarFactura = function (factura) {
        console.log(factura);
        this.router.navigate(['/vender/' + factura._id]);
    };
    VerFacturasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ver-facturas',
            template: __webpack_require__("../../../../../src/app/ver-facturas/ver-facturas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ver-facturas/ver-facturas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_factura_service__["a" /* FacturaService */]])
    ], VerFacturasComponent);
    return VerFacturasComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map