(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-page-register-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register-page/register-page.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-page/register-page.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"goBack()\">\n      <ion-icon name=\"arrow-round-back\"></ion-icon>\n    </ion-button>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form  #form=\"ngForm\" (ngSubmit)=\"register()\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>Create your account!</h3>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-item>\n              <ion-input id=\"firstname\" name=\"firstname\" type=\"text\" placeholder=\"Firstname\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input id=\"lastname\" name=\"lastname\" type=\"text\" placeholder=\"Lastname\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input id=\"email\" name=\"email\" type=\"email\" placeholder=\"your@email.com\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input id=\"password\" name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input id=\"passwordConfirm\" name=\"confirm\" type=\"password\" placeholder=\"Password again\" ngModel required></ion-input>\n            </ion-item>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-button  size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Register</ion-button>\n          </div>\n          <div class=\"ion-padding\">\n            <p> {{ errorMessage }}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register-page/register-page-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/register-page/register-page-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RegisterPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPagePageRoutingModule", function() { return RegisterPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-page.page */ "./src/app/register-page/register-page.page.ts");




const routes = [
    {
        path: '',
        component: _register_page_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPagePage"]
    }
];
let RegisterPagePageRoutingModule = class RegisterPagePageRoutingModule {
};
RegisterPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPagePageRoutingModule);



/***/ }),

/***/ "./src/app/register-page/register-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/register-page/register-page.module.ts ***!
  \*******************************************************/
/*! exports provided: RegisterPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPagePageModule", function() { return RegisterPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-page-routing.module */ "./src/app/register-page/register-page-routing.module.ts");
/* harmony import */ var _register_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-page.page */ "./src/app/register-page/register-page.page.ts");







let RegisterPagePageModule = class RegisterPagePageModule {
};
RegisterPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPagePageRoutingModule"]
        ],
        declarations: [_register_page_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPagePage"]]
    })
], RegisterPagePageModule);



/***/ }),

/***/ "./src/app/register-page/register-page.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/register-page/register-page.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/register-page/register-page.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/register-page/register-page.page.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPagePage", function() { return RegisterPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/datastorage/firestore.service */ "./src/datastorage/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let RegisterPagePage = class RegisterPagePage {
    constructor(db, router, navCntrl) {
        this.db = db;
        this.router = router;
        this.navCntrl = navCntrl;
    }
    ngOnInit() {
    }
    register() {
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('passwordConfirm').value;
        if (password !== passwordConfirm) {
            this.errorMessage = 'Passwords are not equal';
        }
        else {
            const newUser = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                passwordHash: password
            };
            console.log('account created');
            this.db.createUser(newUser);
            this.router.navigate([''], { replaceUrl: true });
        }
    }
    goBack() {
        this.navCntrl.navigateBack('');
    }
};
RegisterPagePage.ctorParameters = () => [
    { type: src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
RegisterPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-page',
        template: __webpack_require__(/*! raw-loader!./register-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/register-page/register-page.page.html"),
        styles: [__webpack_require__(/*! ./register-page.page.scss */ "./src/app/register-page/register-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], RegisterPagePage);



/***/ })

}]);
//# sourceMappingURL=register-page-register-page-module.js.map