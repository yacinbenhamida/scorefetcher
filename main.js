(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 40%;\r\n    margin-left: 30%;\r\n  }\r\n  \r\n  .tah{\r\n      font-family: Tahoma;\r\n      text-align: center;\r\n      font-size: 25px;\r\n  }\r\n  \r\n  .tah1{\r\n    font-family: Tahoma;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<br/>\r\n<h1 class=\"tah\">Calcul score concours spécifique</h1>\r\n<h2 class=\"tah\">SCORE 1</h2>\r\n<form>\r\n<div class=\"example-container\">\r\n  <mat-form-field >\r\n      <form>\r\n    <input name=\"moybac\" type=\"number\"  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"moybac\" matInput placeholder=\"Votre moyenne au bac\">\r\n  </form>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input type=\"number\"  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"r1\" matInput placeholder=\"Votre rang pour la 1ére année\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input type=\"number\"  matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"effectif1\" placeholder=\"L'effectif de la promotion (1ére année)\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input type=\"number\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"r2\" placeholder=\"Votre rang pour la 2éme année\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input type=\"number\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"effectif2\" placeholder=\"L'effectif de la promotion (2éme année)\" >\r\n  </mat-form-field>\r\n  <div>\r\n    <label class=\"tah1\">Année de naissance : </label>\r\n    <mat-radio-group name=\"annenaiss\" [(ngModel)]=\"annenaiss\">\r\n      <mat-radio-button   value=\"1997\">1997 </mat-radio-button>\r\n      <mat-radio-button   value=\"1996\"> 1996</mat-radio-button>\r\n    </mat-radio-group>\r\n  </div>\r\n  <h2 class=\"tah\">SCORE 2</h2>\r\n  <mat-form-field >\r\n    <input type=\"number\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"matprincip\" matInput placeholder=\"La moyenne générale de la matiére principale (ex : mathématiques)\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input type=\"number\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"matgenerale\" matInput placeholder=\"La moyenne générale en français et en anglais\">\r\n  </mat-form-field>\r\n  <br/>\r\n\r\n  <button mat-raised-button color=\"primary\" *ngIf=\"res == false\" (click)=\"calcul()\">Caculer</button>\r\n  <br/>\r\n  <button mat-raised-button color=\"warn\" (click)=\"init()\" *ngIf=\"res == true\">réinitialiser</button>\r\n  <br/>\r\n  <div style=\"text-align: center;\" *ngIf=\"res == true\">\r\n  <div class=\"tah1\">\r\n    score 1 : {{s1}}/125<br/> \r\n    score 2 : {{s2}}/40\r\n  </div>\r\n  <h2 class=\"tah\">SCORE GLOBAL = SCORE 1 + SCORE 2</h2>\r\n  <h1 class=\"tah\">VOTRE SCORE : {{totale}}/165</h1>\r\n</div>\r\n</div>\r\n</form>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.M = 0;
        this.totale = 0;
        this.s1 = 0;
        this.s2 = 0;
        this.res = false;
    }
    AppComponent.prototype.calcul = function () {
        var ri1, ri2, R, B1, B2 = 0;
        if (this.moybac >= 15) {
            this.M = 100;
        }
        else if (this.moybac > 10 && this.moybac < 15)
            this.M = 20 * (this.moybac - 10);
        ri1 = (this.r1 - 1) / this.effectif1;
        ri2 = (this.r2 - 1) / this.effectif2;
        R = (0.5) * ((100 - (700 * ri1) / 3) + (100 - (700 * ri2) / 3));
        if (this.annenaiss == 1997) {
            B1 = 5;
        }
        if (this.moybac >= 16) {
            B2 = 20;
        }
        else if (this.moybac < 16 && this.moybac >= 14) {
            B2 = 15;
        }
        else if (this.moybac < 14 && this.moybac > 12) {
            B2 = 10;
        }
        else if (this.moybac < 12 && this.moybac >= 11) {
            B2 = 5;
        }
        this.s1 = 0.3 * this.M + 0.7 * R + B1 + B2;
        this.s2 = Number(this.matprincip) + Number(this.matgenerale);
        this.totale = this.s1 + this.s2;
        if (!isNaN(this.totale)) {
            this.res = true;
        }
        else {
            alert("veuillez verifier les champs!");
            this.init();
        }
    };
    AppComponent.prototype.init = function () {
        this.s1 = 0;
        this.res = false;
        this.totale = 0;
        this.M = 0;
        this.r1 = null;
        this.r2 = null;
        this.effectif1 = null;
        this.effectif2 = null;
        this.annenaiss = null;
        this.matprincip = null;
        this.matgenerale = null;
        this.moybac = null;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER\Documents\GitHub\CalculScore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map