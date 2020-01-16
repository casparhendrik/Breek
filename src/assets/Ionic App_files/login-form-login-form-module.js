(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-form-login-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login-form/login-form.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-form/login-form.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>login-form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-content class=\"ion-padding\">\n    <form #form=\"ngForm\" (ngSubmit)=\"login()\">\n      <ion-grid>\n        <ion-row color=\"primary\" class=\"ion-justify-content-center\">\n          <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n            <div text-center>\n              <h3>Login</h3>\n            </div>\n            <div class=\"ion-padding\">\n              <ion-item>\n                <ion-input id=\"email\" name=\"email\" type=\"email\" placeholder=\"your@email.com\" ngModel required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input id=\"password\" name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n              </ion-item>\n            </div>\n            <div class=\"ion-padding\">\n              <ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Login</ion-button>\n            </div>\n            <p>Dont have an account already?</p>\n            <div>\n              <ion-button size=\"large\" expand=\"block\" (click)=\"navigateRegisterPage()\">Register</ion-button>\n            </div>\n            <div class=\"ion-padding\">\n              <p> {{ errorMessage }} </p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-content>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login-form/login-form-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/login-form/login-form-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormPageRoutingModule", function() { return LoginFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form.page */ "./src/app/login-form/login-form.page.ts");




const routes = [
    {
        path: '',
        component: _login_form_page__WEBPACK_IMPORTED_MODULE_3__["LoginFormPage"]
    }
];
let LoginFormPageRoutingModule = class LoginFormPageRoutingModule {
};
LoginFormPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginFormPageRoutingModule);



/***/ }),

/***/ "./src/app/login-form/login-form.module.ts":
/*!*************************************************!*\
  !*** ./src/app/login-form/login-form.module.ts ***!
  \*************************************************/
/*! exports provided: LoginFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormPageModule", function() { return LoginFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-form-routing.module */ "./src/app/login-form/login-form-routing.module.ts");
/* harmony import */ var _login_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-form.page */ "./src/app/login-form/login-form.page.ts");







let LoginFormPageModule = class LoginFormPageModule {
};
LoginFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginFormPageRoutingModule"]
        ],
        declarations: [_login_form_page__WEBPACK_IMPORTED_MODULE_6__["LoginFormPage"]]
    })
], LoginFormPageModule);



/***/ }),

/***/ "./src/app/login-form/login-form.page.scss":
/*!*************************************************!*\
  !*** ./src/app/login-form/login-form.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/login-form/login-form.page.ts":
/*!***********************************************!*\
  !*** ./src/app/login-form/login-form.page.ts ***!
  \***********************************************/
/*! exports provided: LoginFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormPage", function() { return LoginFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/datastorage/firestore.service */ "./src/datastorage/firestore.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LoginFormPage = class LoginFormPage {
    constructor(db, router) {
        this.db = db;
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email !== '' && password !== '') {
            this.users = this.db.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(items => items.filter(item => item.email === email && item.passwordHash === password)));
            this.users.subscribe(result => {
                if (result.length === 0) {
                    this.errorMessage = 'No match found for this email and password';
                }
                else {
                    localStorage.setItem('currentUserId', result[0].id);
                    this.router.navigate(['/tabs/tabs/tab1'], { replaceUrl: true });
                }
            });
        }
    }
    navigateRegisterPage() {
        this.router.navigate(['/register-page']);
    }
};
LoginFormPage.ctorParameters = () => [
    { type: src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-form',
        template: __webpack_require__(/*! raw-loader!./login-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/login-form/login-form.page.html"),
        styles: [__webpack_require__(/*! ./login-form.page.scss */ "./src/app/login-form/login-form.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginFormPage);



/***/ })

}]);
//# sourceMappingURL=login-form-login-form-module.js.map