(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-activity-create-activity-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/create-activity/create-activity.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-activity/create-activity.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header\">\n  <ion-toolbar>\n    <ion-title>Activiteit creeën</ion-title>\n  </ion-toolbar>\n  <ion-row class=\"subHeader\">\n    <div class=\"icon\">\n      <ion-button (click)=\"goBack()\" class=\"arrowBtn\"><ion-icon class=\"arrowIcon\" name=\"arrow-dropleft\"></ion-icon></ion-button>\n    </div>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"createCard\">\n  <ion-card-content class=\"cardContent\">\n      <p class=\"headerText\">Nog leuker! Maak je eigen activiteit aan en nodig collega's uit. \n          Vul de informatie in die nodig is om de activiteit toe te voegen aan het overzicht.</p>\n    <h4>Activiteit</h4>\n    <ion-input id=\"activityName\"></ion-input>\n    <span class=\"error\">{{ activityNameError }}</span>\n    <h4>Informatie</h4>\n    <ion-textarea id=\"activityDescription\"></ion-textarea>\n    <span class=\"error\">{{ activityDescriptionError }}</span>\n    <h4>Categorie</h4>\n    <ion-row class=\"ion-justify-content-around\">\n        <ion-button id=\"bewegen\" (click)=\"categoryBtnPressed($event)\" class=\"pinkBtn defaultBtn\">Beweging</ion-button>\n        <ion-button id=\"rust\" (click)=\"categoryBtnPressed($event)\" class=\"blueBtn defaultBtn\">Rust</ion-button>\n        <ion-button id=\"spel\" (click)=\"categoryBtnPressed($event)\" class=\"purpleBtn defaultBtn\">Spel</ion-button>\n    </ion-row>\n    <span class=\"error\">{{ categoryError }}</span>\n    <ion-row>\n      <ion-col size=\"8\">\n        <h4>Wanneer</h4>\n      </ion-col>\n      <ion-col>\n        <h4>Duur</h4>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"customCol\" size=\"8\">\n        <ion-datetime [(ngModel)]=\"startDate\" id=\"startDate\" picker-format=\"DDD H:mm\" display-format=\"DDD H:mm\" max=\"2030-12-31\" placeholder=\"Datum\"></ion-datetime>\n      </ion-col>\n      <ion-col class=\"customCol\">\n        <ion-datetime [(ngModel)]=\"duration\" id=\"duration\" display-format=\"mm\" placeholder=\"Tijd\"></ion-datetime>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"8\">\n        <span class=\"error\">{{ dateError }}</span>\n    </ion-col>\n    <ion-col>\n        <span class=\"error\">{{ durationError }}</span>\n    </ion-col>\n  </ion-row>\n    <h4>Waar</h4>\n    <ion-input id=\"location\"></ion-input>\n    <span class=\"error\">{{ locationError }}</span>\n    <ion-row class=\"ion-justify-content-around submitRow\">\n      <ion-button class=\"blueBtn submitBtn\">Collega's uitnodigen</ion-button>\n      <ion-button class=\"purpleBtn submitBtn\" (click)=\"createActivity()\">Aanmaken</ion-button>\n    </ion-row>\n\n  </ion-card-content>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/create-activity/create-activity-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/create-activity/create-activity-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CreateActivityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateActivityPageRoutingModule", function() { return CreateActivityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_activity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-activity.page */ "./src/app/create-activity/create-activity.page.ts");




const routes = [
    {
        path: '',
        component: _create_activity_page__WEBPACK_IMPORTED_MODULE_3__["CreateActivityPage"]
    }
];
let CreateActivityPageRoutingModule = class CreateActivityPageRoutingModule {
};
CreateActivityPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateActivityPageRoutingModule);



/***/ }),

/***/ "./src/app/create-activity/create-activity.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/create-activity/create-activity.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateActivityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateActivityPageModule", function() { return CreateActivityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_activity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-activity-routing.module */ "./src/app/create-activity/create-activity-routing.module.ts");
/* harmony import */ var _create_activity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-activity.page */ "./src/app/create-activity/create-activity.page.ts");







let CreateActivityPageModule = class CreateActivityPageModule {
};
CreateActivityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_activity_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateActivityPageRoutingModule"]
        ],
        declarations: [_create_activity_page__WEBPACK_IMPORTED_MODULE_6__["CreateActivityPage"]]
    })
], CreateActivityPageModule);



/***/ }),

/***/ "./src/app/create-activity/create-activity.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/create-activity/create-activity.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 3px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n}\n\n.cardContent {\n  padding-top: 0px;\n  color: black;\n}\n\n.arrowBtn {\n  --background: transparent;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --background-activated: transparent;\n}\n\n.icon {\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 0%;\n}\n\n.arrowIcon {\n  color: white;\n  font-size: 32px;\n}\n\n.headerText {\n  color: black;\n  width: 100%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.invalid {\n  border-style: solid;\n  border-width: 2px;\n  border-color: red;\n}\n\n.error {\n  font-size: 11px;\n  color: red;\n}\n\n.submitRow {\n  margin-top: 25px;\n}\n\n.submitBtn {\n  font-size: 12px;\n  width: 40%;\n  border-radius: 11px;\n}\n\nion-textarea {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n}\n\nion-item {\n  padding-left: 0px;\n}\n\nion-col {\n  padding: 0px;\n}\n\nh4 {\n  padding-top: 10px;\n  padding-bottom: 7px;\n}\n\n.customCol {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 3px;\n  padding: 0px;\n  margin: 0px 0px;\n}\n\n.defaultBtn {\n  font-size: 11px;\n  width: 30%;\n  --color: white;\n  --color-activated:white;\n  --border-radius: 11px;\n}\n\n.pinkBtn {\n  --background: #BC0574;\n  --background-activated: #BC0574;\n  --color-activated: black;\n}\n\n.blueBtn {\n  --background: #698EA9;\n  --background-activated: #698EA9;\n  --background-hover: #698EA9;\n  --color-activated: black;\n}\n\n.purpleBtn {\n  --background: #32227b;\n  --background-activated: #32227b;\n  --background-hover: #32227b;\n  --color-activated: black;\n}\n\n.pinkSelected {\n  color: black;\n  --background: #BC0574;\n  --border-style: none;\n}\n\n.blueSelected {\n  color: black;\n  --background: #698EA9;\n  --border-style: none;\n}\n\n.purpleSelected {\n  color: black;\n  --background: #32227b;\n  --border-style: none;\n}\n\n.createCard {\n  border-radius: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXNwYXJ2YW5ib29tL0RvY3VtZW50cy9Qcm9qZWN0cy9icmVlay9zcmMvYXBwL2NyZWF0ZS1hY3Rpdml0eS9jcmVhdGUtYWN0aXZpdHkucGFnZS5zY3NzIiwic3JjL2FwcC9jcmVhdGUtYWN0aXZpdHkvY3JlYXRlLWFjdGl2aXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFFQSxvQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBRUEsb0JBQUE7QUNESjs7QURHQTtFQUNJLG1CQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtYWN0aXZpdHkvY3JlYXRlLWFjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmNhcmRDb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmFycm93QnRuIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbn1cblxuLmljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDAlO1xufVxuXG4uYXJyb3dJY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4uaGVhZGVyVGV4dCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uaW52YWxpZCB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLmVycm9yIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnN1Ym1pdFJvdyB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5pb24taXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuaDQge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5cbi5jdXN0b21Db2wge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweCAwcHg7XG59XG5cbi5kZWZhdWx0QnRuIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgd2lkdGg6IDMwJTtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDp3aGl0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDExcHg7XG59XG5cbi5waW5rQnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICNCQzA1NzQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0JDMDU3NDtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogYmxhY2s7XG59XG5cbi5ibHVlQnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICM2OThFQTk7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzY5OEVBOTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM2OThFQTk7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6IGJsYWNrO1xufVxuXG4ucHVycGxlQnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICMzMjE1N0M7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzMyMTU3QztcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMzMjE1N0M7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6IGJsYWNrOyAgIFxufVxuXG4ucGlua1NlbGVjdGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLS1iYWNrZ3JvdW5kOiAjQkMwNTc0O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4uYmx1ZVNlbGVjdGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjk4RUE5O1xuIFxuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4ucHVycGxlU2VsZWN0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAtLWJhY2tncm91bmQ6ICMzMjE1N0M7XG5cbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cbi5jcmVhdGVDYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xufSIsImlvbi1pbnB1dCB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uY2FyZENvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5hcnJvd0J0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLXRvcDogMCU7XG59XG5cbi5hcnJvd0ljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmhlYWRlclRleHQge1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uZXJyb3Ige1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zdWJtaXRSb3cge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uc3VibWl0QnRuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogNDAlO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaDQge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cblxuLmN1c3RvbUNvbCB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHggMHB4O1xufVxuXG4uZGVmYXVsdEJ0biB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2lkdGg6IDMwJTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tY29sb3ItYWN0aXZhdGVkOndoaXRlO1xuICAtLWJvcmRlci1yYWRpdXM6IDExcHg7XG59XG5cbi5waW5rQnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjQkMwNTc0O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjQkMwNTc0O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogYmxhY2s7XG59XG5cbi5ibHVlQnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjk4RUE5O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNjk4RUE5O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM2OThFQTk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiBibGFjaztcbn1cblxuLnB1cnBsZUJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzMyMTU3QztcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzMyMTU3QztcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMzIxNTdDO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogYmxhY2s7XG59XG5cbi5waW5rU2VsZWN0ZWQge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI0JDMDU3NDtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5ibHVlU2VsZWN0ZWQge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogIzY5OEVBOTtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5wdXJwbGVTZWxlY3RlZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjMzIxNTdDO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmNyZWF0ZUNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/create-activity/create-activity.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/create-activity/create-activity.page.ts ***!
  \*********************************************************/
/*! exports provided: CreateActivityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateActivityPage", function() { return CreateActivityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/datastorage/firestore.service */ "./src/datastorage/firestore.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let CreateActivityPage = class CreateActivityPage {
    constructor(db, location, navCntrl) {
        this.db = db;
        this.location = location;
        this.navCntrl = navCntrl;
        this.activityNameError = '';
        this.activityDescriptionError = '';
        this.categoryError = '';
        this.selectedCategory = '';
        this.dateError = '';
        this.durationError = '';
        this.locationError = '';
        this.customDayShortNames = '';
        this.startDate = '';
        this.duration = '';
    }
    ngOnInit() {
    }
    categoryBtnPressed(event) {
        const classNames = ['bewegen', 'rust', 'spel'];
        const id = event.target.id;
        this.selectedCategory = id;
        this.resetButtons(classNames);
        if (id === 'bewegen') {
            document.getElementById(this.selectedCategory).classList.add('pinkSelected');
        }
        else if (id === 'rust') {
            document.getElementById(this.selectedCategory).classList.add('blueSelected');
        }
        else {
            document.getElementById(this.selectedCategory).classList.add('purpleSelected');
        }
    }
    resetButtons(classNames) {
        for (const iterator of classNames) {
            document.getElementById(iterator).classList.remove('pinkSelected');
            document.getElementById(iterator).classList.remove('blueSelected');
            document.getElementById(iterator).classList.remove('purpleSelected');
        }
    }
    createActivity() {
        this.resetErrorMessages();
        this.validateData();
        if (this.checkErrors()) {
            const newActivity = {
                name: document.getElementById('activityName').value,
                description: document.getElementById('activityDescription').value,
                type: this.selectedCategory,
                startDate: this.startDate,
                durationInMinutes: this.duration,
                participants: [],
                location: document.getElementById('location').value
            };
            this.db.createActivity(newActivity);
        }
    }
    resetErrorMessages() {
        this.activityNameError = '';
        this.activityDescriptionError = '';
        this.categoryError = '';
        this.categoryError = '';
        this.dateError = '';
        this.durationError = '';
        this.locationError = '';
    }
    checkErrors() {
        if (this.activityNameError === '' &&
            this.activityDescriptionError === '' &&
            this.categoryError === '' &&
            this.categoryError === '' &&
            this.dateError === '' &&
            this.durationError === '' &&
            this.locationError === '') {
            return true;
        }
        else {
            return false;
        }
    }
    validateData() {
        if (document.getElementById('activityName').value === '') {
            this.activityNameError = 'Een activiteit moet een naam hebben';
        }
        if (document.getElementById('activityDescription').value === '') {
            this.activityDescriptionError = 'Een activiteit moet een beschrijving hebben';
        }
        if (this.selectedCategory === '') {
            this.categoryError = 'Kies een categorie';
        }
        if (this.startDate === '') {
            this.dateError = 'Kies een datum';
        }
        if (this.duration === '') {
            this.durationError = 'Kies een tijdsduur';
        }
        if (document.getElementById('location').value === '') {
            this.locationError = 'Geef een locatie van de activiteit';
        }
    }
    goBack() {
        this.navCntrl.back();
    }
};
CreateActivityPage.ctorParameters = () => [
    { type: src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
CreateActivityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-activity',
        template: __webpack_require__(/*! raw-loader!./create-activity.page.html */ "./node_modules/raw-loader/index.js!./src/app/create-activity/create-activity.page.html"),
        styles: [__webpack_require__(/*! ./create-activity.page.scss */ "./src/app/create-activity/create-activity.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], CreateActivityPage);



/***/ })

}]);
//# sourceMappingURL=create-activity-create-activity-module.js.map