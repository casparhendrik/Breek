(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activities-page-activities-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/activities-page/activities-page.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/activities-page/activities-page.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Activiteiten</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-activities-scrollview></app-activities-scrollview>\n  <ion-card id=\"{{ activity.title }}card\" class=\"exampleCards\" *ngFor=\"let activity of activities\">\n    <ion-card-header style=\"padding-bottom: 0px; padding-top: 5%;\">\n      <div style=\"width: 100%\">\n        <ion-icon id=\"{{ activity.title }}\" (click)=\"onIcon($event)\" class=\"titleRow icon\" style=\"padding: 0%;\" name=\"add-circle-outline\"></ion-icon>\n        <label style=\"margin-left: 4%\" class=\"titleRow\">{{activity.title}}</label>\n      </div>\n    </ion-card-header>\n    <ion-card-content class=\"exampleCardContent\">\n      <p id=\"{{ activity.title }}desc\" class=\"contentText\">{{activity.description}}</p>\n      <div id=\"{{ activity.title }}colorBlock\" class=\"colorBlock\"></div>\n      <div id=\"{{ activity.title }}div\" class=\"nodisplay\">\n          <ion-row>\n              <ion-col size=\"8\">\n                <h4>Wanneer</h4>\n              </ion-col>\n              <ion-col>\n                <h4>Duur</h4>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"customCol\" size=\"8\">\n                <ion-datetime [(ngModel)]=\"myDate\" id=\"startDate\" picker-format=\"DDDD H:mm\" display-format=\"DDDD H:mm\" max=\"2030-12-31\" placeholder=\"Datum\"></ion-datetime>\n              </ion-col>\n              <ion-col class=\"customCol\">\n                <ion-datetime [(ngModel)]=\"duration\" id=\"duration\" display-format=\"mm\" placeholder=\"Tijd\"></ion-datetime>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"8\">\n                <span class=\"error\">{{ dateError }}</span>\n            </ion-col>\n            <ion-col>\n                <span class=\"error\">{{ durationError }}</span>\n            </ion-col>\n          </ion-row>\n          <ion-input id=\"{{activity.title}}input\" id=\"location\"></ion-input>\n          <span id=\"{{activity.title}}input\" class=\"error\">{{ locationError }}</span>\n          <ion-row id=\"{{ activity.title }}div\" class=\"ion-justify-content-around submitRow\" style=\"margin-top: 5%;\">\n              <ion-button class=\"blueBtn submitBtn\">Collega's uitnodigen</ion-button>\n              <ion-button class=\"purpleBtn submitBtn\" (click)=\"createActivity()\">Aanmaken</ion-button>\n            </ion-row>\n            <div id=\"{{activity.title}}type\" style=\"display: none;\"></div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/activities-page/activities-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/activities-page/activities-page.module.ts ***!
  \***********************************************************/
/*! exports provided: ActivitiesPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesPagePageModule", function() { return ActivitiesPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activities_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activities-page.page */ "./src/app/activities-page/activities-page.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let ActivitiesPagePageModule = class ActivitiesPagePageModule {
};
ActivitiesPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _activities_page_page__WEBPACK_IMPORTED_MODULE_6__["ActivitiesPagePage"] }]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_activities_page_page__WEBPACK_IMPORTED_MODULE_6__["ActivitiesPagePage"]]
    })
], ActivitiesPagePageModule);



/***/ }),

/***/ "./src/app/activities-page/activities-page.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/activities-page/activities-page.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".exampleCards {\n  padding-left: 0;\n  padding-right: 0;\n  --border-radius: 11px;\n  -webkit-transition: width 0.5s;\n  /* Safari prior 6.1 */\n  -webkit-transition: height 0.5s;\n  transition: height 0.5s;\n  height: 20%;\n}\n\n.exampleCardContent {\n  padding-top: 0;\n  padding-right: 5%;\n  color: black;\n  text-align: left;\n  width: 100%;\n  padding-bottom: 2%;\n}\n\n.titleRow {\n  font-size: 18px;\n  font-weight: 600;\n  vertical-align: middle;\n  color: black;\n}\n\n.icon {\n  color: black;\n  font-size: 20px;\n}\n\n.contentText {\n  width: 70%;\n  display: inline-block;\n  font-size: 12px;\n  vertical-align: top;\n  margin-top: 3%;\n  padding-right: 8%;\n}\n\n.colorBlock {\n  display: inline-block;\n  height: 80px;\n  width: 80px;\n  margin-left: 0;\n  margin-bottom: 0%;\n  border-radius: 11px;\n  overflow: auto;\n}\n\n.backgroundBlue {\n  background-color: #698EA9;\n}\n\n.backgroundPurple {\n  background-color: #32157C;\n}\n\n.backgroundPink {\n  background-color: #BC0574;\n}\n\n.nodisplay {\n  display: none;\n}\n\n.openedCard {\n  height: 50%;\n}\n\n.pinkBtn {\n  --background: #BC0574;\n}\n\n.blueBtn {\n  --background: #698EA9;\n}\n\n.purpleBtn {\n  --background: #32157C;\n}\n\n.submitBtn {\n  font-size: 12px;\n  width: 40%;\n  --border-radius: 3px;\n}\n\nion-input {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n}\n\n.error {\n  font-size: 11px;\n  color: red;\n}\n\n.cardBackground {\n  background-size: 110% 110%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXNwYXJ2YW5ib29tL0RvY3VtZW50cy9Qcm9qZWN0cy9icmVlay9zcmMvYXBwL2FjdGl2aXRpZXMtcGFnZS9hY3Rpdml0aWVzLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9hY3Rpdml0aWVzLXBhZ2UvYWN0aXZpdGllcy1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFBZ0MscUJBQUE7RUFDaEMsK0JBQUE7RUFBQSx1QkFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtBQ0VKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURDQTtFQUNJLHlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDRUo7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQ0VKOztBRENBO0VBQ0ksMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hY3Rpdml0aWVzLXBhZ2UvYWN0aXZpdGllcy1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlQ2FyZHMge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTFweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNXM7IC8qIFNhZmFyaSBwcmlvciA2LjEgKi9cbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcbiAgICBoZWlnaHQ6IDIwJTtcbn1cblxuLmV4YW1wbGVDYXJkQ29udGVudHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi50aXRsZVJvdyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29udGVudFRleHQge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDglO1xufVxuXG4uY29sb3JCbG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uYmFja2dyb3VuZEJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzY5OEVBOTtcbn1cblxuLmJhY2tncm91bmRQdXJwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjE1N0M7XG59XG5cbi5iYWNrZ3JvdW5kUGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JDMDU3NDtcbn1cblxuLm5vZGlzcGxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9wZW5lZENhcmQge1xuICAgIGhlaWdodDogNTAlO1xufVxuXG4ucGlua0J0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjQkMwNTc0O1xufVxuXG4uYmx1ZUJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjk4RUE5O1xufVxuXG4ucHVycGxlQnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICMzMjE1N0M7XG59XG5cbi5zdWJtaXRCdG4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG5pb24taW5wdXQge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5lcnJvciB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5jYXJkQmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59IiwiLmV4YW1wbGVDYXJkcyB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG4gIC8qIFNhZmFyaSBwcmlvciA2LjEgKi9cbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XG4gIGhlaWdodDogMjAlO1xufVxuXG4uZXhhbXBsZUNhcmRDb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi50aXRsZVJvdyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29udGVudFRleHQge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIHBhZGRpbmctcmlnaHQ6IDglO1xufVxuXG4uY29sb3JCbG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAlO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmJhY2tncm91bmRCbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5OEVBOTtcbn1cblxuLmJhY2tncm91bmRQdXJwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIxNTdDO1xufVxuXG4uYmFja2dyb3VuZFBpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkMwNTc0O1xufVxuXG4ubm9kaXNwbGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9wZW5lZENhcmQge1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuLnBpbmtCdG4ge1xuICAtLWJhY2tncm91bmQ6ICNCQzA1NzQ7XG59XG5cbi5ibHVlQnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjk4RUE5O1xufVxuXG4ucHVycGxlQnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzIxNTdDO1xufVxuXG4uc3VibWl0QnRuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogNDAlO1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNhcmRCYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/activities-page/activities-page.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/activities-page/activities-page.page.ts ***!
  \*********************************************************/
/*! exports provided: ActivitiesPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesPagePage", function() { return ActivitiesPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/datastorage/firestore.service */ "./src/datastorage/firestore.service.ts");



let ActivitiesPagePage = class ActivitiesPagePage {
    constructor(db) {
        this.db = db;
        this.activities = [];
        this.exampleActivities = [
            ['Potje kaarten', 'Heb jij zin in een competetief spelletje? Ga samen een potje kaarten en ga de strijd aan met je collega\'s.', 'rust'],
            ['Yoga', 'Even helemaal zen... Met een korte yoga sessie kom je even helemaal tot rust. Geef jezelf nieuwe energie', 'bewegen'],
            ['Pingpong', 'Heb je zin in een competetief spelletje? Ga samen een potje kaarten en ga de strijd aan met je collega\'s.', 'spel'],
            ['Tekenen', 'Uit samen met je collega\'s je creativiteit en creëer wat leuks. Leer van elkaar', 'rust'],
            ['Koffie of thee', 'Niet zo\'n zin in iets actiefs? Ga voor iets ontspannends en drink samen met collega\'s een kopje koffie/thee', 'bewegen'],
            ['Darten', 'Zin in iets competitiefs? Daag je collega\'s uit voor een potje darten', 'spel'],
            ['Frisbee', 'Doe mee met een potje frisbee! Je bent lekker buiten en je doet iets actiefs.', 'bewegen']
        ];
        this.startDate = '';
        this.duration = '';
        this.type = '';
        for (const exampleActivity of this.exampleActivities) {
            const newActivity = {
                title: exampleActivity[0],
                description: exampleActivity[1],
                type: exampleActivity[2]
            };
            this.activities.push(newActivity);
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (const exampleActivity of this.exampleActivities) {
                document.getElementById(exampleActivity[0] + 'colorBlock').classList.add('cardBackground');
                document.getElementById(exampleActivity[0] + 'colorBlock').style.backgroundImage = 'url("../../assets/icons/' +
                    exampleActivity[0] + '.png")';
            }
        });
    }
    onIcon(event) {
        if (document.getElementById(event.target.id).name === 'remove-circle-outline') {
            (document.getElementById(event.target.id + 'card')).classList.remove('openedCard');
            document.getElementById(event.target.id + 'div').style.display = 'none';
            document.getElementById(event.target.id).name = 'add-circle-outline';
            this.locationError = '';
        }
        else {
            (document.getElementById(event.target.id + 'card')).classList.add('openedCard');
            document.getElementById(event.target.id + 'div').style.display = 'block';
            document.getElementById(event.target.id).name = 'remove-circle-outline';
            this.currentId = event.target.id;
            this.currentTitle = event.target.id;
            this.currentDescription = document.getElementById(event.target.id + 'desc').innerHTML;
            this.currentLocation = document.getElementById(event.target.id + 'input').value;
        }
    }
    createActivity() {
        this.validateData();
        if (this.locationError !== '') {
            const newActivity = {
                name: document.getElementById('activityName').value,
                description: document.getElementById('activityDescription').value,
                type: 'this.selectedCategory',
                startDate: this.startDate,
                durationInMinutes: this.duration,
                participants: [],
                location: document.getElementById('location').value
            };
        }
    }
    validateData() {
        if (document.getElementById(this.currentId + 'input').value === '') {
            this.locationError = 'Geef een locatie van de activiteit';
        }
    }
};
ActivitiesPagePage.ctorParameters = () => [
    { type: src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] }
];
ActivitiesPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activities-page',
        template: __webpack_require__(/*! raw-loader!./activities-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/activities-page/activities-page.page.html"),
        styles: [__webpack_require__(/*! ./activities-page.page.scss */ "./src/app/activities-page/activities-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
], ActivitiesPagePage);



/***/ })

}]);
//# sourceMappingURL=activities-page-activities-page-module.js.map