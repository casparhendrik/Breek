(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/colleagues-view/colleagues-view.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/colleagues-view/colleagues-view.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row class=\"colleagueview\">\n  <div class=\"header\"><h4>COLLEGA'S</h4></div>\n  <div style=\"width: 100%\">\n    <div class=\"scrollview\" style=\"width: 100%\">\n      <ion-card class=\"colleagueCardView\">\n          <!-- <div class=\"profileImg\"></div>\n        <ul class=\"card-content\">\n          <p>Wouter</p>\n        </ul> -->\n      </ion-card>\n\n    </div>\n  \n  </div>\n</ion-row>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mystery-activity/mystery-activity.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mystery-activity/mystery-activity.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row class=\"mysteryBox\" *ngIf=\"mysteryActivity | async as mystery\">\n  <div class=\"mysteryActTextBox\" style=\"width: 50%\">\n    <ul style=\"padding-left: 8px; padding-right: 8px\">\n      <h5 style=\"margin: 5px 0px;\">MYSTERY ACTIVITEIT</h5>\n      <p style=\"margin: 5px 0px;\">{{weekDay[countdownDate.getDay() + 1]}} {{countdownDate.getDate()}} {{months[countdownDate.getMonth()]}}</p>\n      <p style=\"margin: 5px 0px;\">{{countdownDate.getHours()}}:{{countdownDate.getMinutes()}} - {{mystery.durationInMinutes}} min</p>\n      <p style=\"margin: 0px 0px;\">{{mystery.participants.length}} mensen doen al mee</p>\n    </ul>\n    \n  </div>\n  <div style=\"width: 50%\">\n    <ion-row>\n      <ion-card class=\"dateCard\">\n        <p class=\"dateCardText\" style=\"width: 50%; margin-left: 25%; margin-right: 25%; margin-top: 25%;\">{{ days }} </p>\n        <p class=\"dateCardText\" style=\"margin-bottom: 25%;\"> dagen</p>\n      </ion-card>\n      <ion-card class=\"dateCard\">\n        <p class=\"dateCardText\" style=\"width: 50%; margin-left: 25%; margin-right: 25%; margin-top: 25%;\">{{hours}}</p>\n        <p class=\"dateCardText\" style=\"margin-bottom: 25%;\"> uur</p>\n      </ion-card>\n      <ion-card class=\"dateCard\">\n        <p class=\"dateCardText\" style=\"width: 50%; margin-left: 25%; margin-right: 25%; margin-top: 25%;\">{{minutes}}</p>\n        <p class=\"dateCardText\" style=\"margin-bottom: 25%;\"> minuten</p>\n      </ion-card>\n    </ion-row>\n    <ion-row>\n      <ion-button *ngIf=\"!isJoined\" (click)=\"joinBtnPressed()\" class=\"joinBtn\">MEEDOEN</ion-button>\n      <ion-button *ngIf=\"isJoined\" (click)=\"unJoinPressed() \" class=\"joinBtn\">UITSCHRIJVEN</ion-button>\n    </ion-row>\n  </div>\n</ion-row>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      VANDAAG\n    </ion-title>\n  </ion-toolbar>\n  <ion-row class=\"weekView\">\n    <ion-button (click)=\"goBack()\" class=\"weekCalBtn arrow\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-button>\n    <div class=\"dayNumbers\">\n      <ion-button id={{dateNumbers[0]}} (click)=weekBtnPressed($event) class=\"weekCalBtn\">{{ dateNumbers[0] }}</ion-button>\n      <ion-button id={{dateNumbers[1]}} (click)=weekBtnPressed($event) class=\"weekCalBtn\">{{ dateNumbers[1] }}</ion-button>\n      <ion-button id={{dateNumbers[2]}} (click)=weekBtnPressed($event) class=\"weekCalBtn\">{{ dateNumbers[2] }}</ion-button>\n      <ion-button id={{dateNumbers[3]}} (click)=weekBtnPressed($event) class=\"weekCalBtn\">{{ dateNumbers[3] }}</ion-button>\n      <ion-button id={{dateNumbers[4]}} (click)=weekBtnPressed($event) class=\"weekCalBtn\">{{ dateNumbers[4] }}</ion-button>\n    </div>\n    <ion-button (click)=\"goForward()\" class=\"weekCalBtn arrow\">\n      <ion-icon name=\"arrow-forward\"></ion-icon>\n    </ion-button>\n  </ion-row>\n  <ion-row class=\"ion-justify-content-around days\">\n    <div>ma</div>\n    <div>di</div>\n    <div>wo</div>\n    <div>do</div>\n    <div>vr</div>\n  </ion-row>\n</ion-header>\n<ion-content>\n  <div class=\"currentActivityRow\">\n    <ion-row>\n      <div class=\"textBox\">\n        <h6 style=\"text-align: center; padding-left: 20%; padding-right: 10%; padding-bottom: 25%; text-align: start\">MIJN GEPLANDE PAUZE ACTIVITEIT</h6>\n      </div>\n      <div class=\"textBox\">\n        <ion-card class=\"activityTextBox\">\n          <p style=\"text-align: center\">Je hebt nog niets gepland</p>\n          <p style=\"text-align: center\">Heb je zin in een activiteit? </p>\n        </ion-card>\n      </div>\n    </ion-row>\n    <app-mystery-activity></app-mystery-activity>\n    <app-activities-scrollview [currentDate]=\"lastSelected\"></app-activities-scrollview>\n    <app-colleagues-view></app-colleagues-view>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/colleagues-view/colleagues-view.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/colleagues-view/colleagues-view.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".colleagueview {\n  background-image: url('Vlek_collegas.png');\n  background-size: 100% 150%;\n}\n\n.header {\n  width: 40%;\n  margin-left: 30%;\n  text-align: center;\n  color: white;\n}\n\n.scrollview {\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.colleagueCardView {\n  margin-top: 0%;\n  background-color: white;\n  color: black;\n  width: 100px;\n  height: 100px;\n  position: relative;\n}\n\n.profileImg {\n  background-image: url('default.png');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  height: 50px;\n  width: 50%;\n  margin-left: 25%;\n  margin-bottom: 25%;\n  border-radius: 50%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 10;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXNwYXJ2YW5ib29tL0RvY3VtZW50cy9Qcm9qZWN0cy9icmVlay9zcmMvYXBwL2NvbGxlYWd1ZXMtdmlldy9jb2xsZWFndWVzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbGxlYWd1ZXMtdmlldy9jb2xsZWFndWVzLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURJQTtFQUNJLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb2xsZWFndWVzLXZpZXcvY29sbGVhZ3Vlcy12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxlYWd1ZXZpZXcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9WbGVrX2NvbGxlZ2FzLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTUwJTtcbn1cblxuLmhlYWRlciB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zY3JvbGx2aWV3IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY29sbGVhZ3VlQ2FyZFZpZXcge1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBcbn1cblxuLnByb2ZpbGVJbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9kZWZhdWx0LnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICBcbiAgICB6LWluZGV4OiAxMDtcbiAgICBtYXJnaW46IDEwcHg7XG5cbn1cblxuXG4uY2FyZC1jb250ZW50IHtcbn0iLCIuY29sbGVhZ3VldmlldyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9WbGVrX2NvbGxlZ2FzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDE1MCU7XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNjcm9sbHZpZXcge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNvbGxlYWd1ZUNhcmRWaWV3IHtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZmlsZUltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9kZWZhdWx0LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgbWFyZ2luLWJvdHRvbTogMjUlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/colleagues-view/colleagues-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/colleagues-view/colleagues-view.component.ts ***!
  \**************************************************************/
/*! exports provided: ColleaguesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColleaguesViewComponent", function() { return ColleaguesViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ColleaguesViewComponent = class ColleaguesViewComponent {
    constructor() { }
    ngOnInit() { }
};
ColleaguesViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-colleagues-view',
        template: __webpack_require__(/*! raw-loader!./colleagues-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/colleagues-view/colleagues-view.component.html"),
        styles: [__webpack_require__(/*! ./colleagues-view.component.scss */ "./src/app/colleagues-view/colleagues-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ColleaguesViewComponent);



/***/ }),

/***/ "./src/app/mystery-activity/mystery-activity.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/mystery-activity/mystery-activity.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mysteryBox {\n  background-color: #2178A5;\n  color: white;\n}\n\n.mysteryActTextBox {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.dateCard {\n  background-color: white;\n  border-radius: 11px;\n  color: black;\n  width: 28%;\n  margin-top: 10%;\n  margin-left: 2px;\n  margin-bottom: 0px;\n  margin-right: 2px;\n  float: left;\n}\n\n.dateCardText {\n  margin-top: 0;\n  margin-bottom: 0;\n  display: block;\n  text-align: center;\n}\n\n.joinBtn {\n  --background:#32157C;\n  --background-activated: #32157C;\n  width: 100%;\n  margin-right: 11%;\n  margin-top: 10%;\n  margin-bottom: 5%;\n  --border-radius: 11px;\n}\n\nh5 {\n  font-size: 14px;\n}\n\np {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXNwYXJ2YW5ib29tL0RvY3VtZW50cy9Qcm9qZWN0cy9icmVlay9zcmMvYXBwL215c3RlcnktYWN0aXZpdHkvbXlzdGVyeS1hY3Rpdml0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbXlzdGVyeS1hY3Rpdml0eS9teXN0ZXJ5LWFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9teXN0ZXJ5LWFjdGl2aXR5L215c3RlcnktYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlzdGVyeUJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNzhBNTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5teXN0ZXJ5QWN0VGV4dEJveCB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kYXRlQ2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDI4JTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5kYXRlQ2FyZFRleHQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qb2luQnRuIHtcbiAgICAtLWJhY2tncm91bmQ6IzMyMTU3QztcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMzIxNTdDO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMTElO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDExcHg7XG59XG5cbmg1IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn0iLCIubXlzdGVyeUJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTc4QTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm15c3RlcnlBY3RUZXh0Qm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kYXRlQ2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAyOCU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5kYXRlQ2FyZFRleHQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uam9pbkJ0biB7XG4gIC0tYmFja2dyb3VuZDojMzIxNTdDO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMzIxNTdDO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMSU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTFweDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/mystery-activity/mystery-activity.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/mystery-activity/mystery-activity.component.ts ***!
  \****************************************************************/
/*! exports provided: MysteryActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysteryActivityComponent", function() { return MysteryActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/datastorage/firestore.service */ "./src/datastorage/firestore.service.ts");



let MysteryActivityComponent = class MysteryActivityComponent {
    constructor(db) {
        this.db = db;
        this.countdownDate = new Date();
        this.weekDay = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];
        this.months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'November', 'December'];
        this.currentUserId = localStorage.getItem('currentUserId');
        this.isJoined = false;
        this.getMysteryActivity();
    }
    ngOnInit() {
    }
    initializeDate() {
    }
    getMysteryActivity() {
        this.mysteryActivity = this.db.getMysteryActivity('0f217307-7a1f-4587-94ec-51db241a8ee2');
        this.mysteryActivity.subscribe(activity => {
            this.countdownDate = new Date(activity.startDate);
            const x = setInterval(() => {
                const now = new Date().getTime();
                const distance = this.countdownDate.getTime() - now;
                this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if (distance < 0) {
                    clearInterval(x);
                }
            });
            this.currentActivity = activity;
            for (const participant of activity.participants) {
                if (participant === this.currentUserId) {
                    this.isJoined = true;
                }
                else {
                    this.isJoined = false;
                }
            }
        });
    }
    joinBtnPressed() {
        this.currentActivity.participants.push(this.currentUserId);
        this.db.updateMysteryActivity(this.currentActivity);
    }
    unJoinPressed() {
        const index = this.currentActivity.participants.indexOf(this.currentUserId);
        if (index > -1) {
            this.currentActivity.participants.splice(index, 1);
        }
        this.db.updateMysteryActivity(this.currentActivity);
    }
};
MysteryActivityComponent.ctorParameters = () => [
    { type: src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] }
];
MysteryActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mystery-activity',
        template: __webpack_require__(/*! raw-loader!./mystery-activity.component.html */ "./node_modules/raw-loader/index.js!./src/app/mystery-activity/mystery-activity.component.html"),
        styles: [__webpack_require__(/*! ./mystery-activity.component.scss */ "./src/app/mystery-activity/mystery-activity.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
], MysteryActivityComponent);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _mystery_activity_mystery_activity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mystery-activity/mystery-activity.component */ "./src/app/mystery-activity/mystery-activity.component.ts");
/* harmony import */ var _colleagues_view_colleagues_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colleagues-view/colleagues-view.component */ "./src/app/colleagues-view/colleagues-view.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"], _mystery_activity_mystery_activity_component__WEBPACK_IMPORTED_MODULE_7__["MysteryActivityComponent"], _colleagues_view_colleagues_view_component__WEBPACK_IMPORTED_MODULE_8__["ColleaguesViewComponent"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  display: block;\n  width: 20%;\n  height: 20%;\n  border-radius: 50%;\n  border: 1px solid red;\n}\n\nion-searchbar {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.arrow {\n  width: 23%;\n}\n\n.arrow:active {\n  --border-color: white;\n  --border-width: 1px;\n  --border-radius: 11px;\n  --border-style: solid;\n}\n\n.weekCalBtn {\n  --background: transparent;\n  font-size: 12px;\n  padding-left: 0px;\n  padding-right: 0px;\n  --background-activated: transparent;\n  margin: 0px;\n  width: 25%;\n}\n\n.dayNumbers {\n  width: 50%;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.weekView {\n  width: 100%;\n}\n\n.days {\n  color: white;\n  font-size: 11px;\n  margin-left: 25%;\n  margin-right: 25%;\n  margin-bottom: 3%;\n}\n\n.selectedWeekBtn {\n  --border-color: white;\n  --border-width: 1px;\n  --border-radius: 50%;\n  --border-style: solid;\n}\n\n.currentActivityRow {\n  height: 15%;\n  width: 100%;\n}\n\n.textBox {\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.activityTextBox {\n  color: white;\n  background-color: #BC0574;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXNwYXJ2YW5ib29tL0RvY3VtZW50cy9Qcm9qZWN0cy9icmVlay9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMjAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjoxcHggc29saWQgcmVkO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmFycm93IHtcbiAgd2lkdGg6IDIzJTtcbn1cblxuLmFycm93OmFjdGl2ZSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi53ZWVrQ2FsQnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxMnB4OyAgXG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmRheU51bWJlcnMge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ud2Vla1ZpZXcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRheXMge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG4uc2VsZWN0ZWRXZWVrQnRuIHtcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uY3VycmVudEFjdGl2aXR5Um93IHtcbiAgaGVpZ2h0OiAxNSU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dEJveCB7XG4gIHdpZHRoOiA1MCU7IFxuICBkaXNwbGF5OiBmbGV4OyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWN0aXZpdHlUZXh0Qm94IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkMwNTc0O1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbn0iLCIuYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMjAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5hcnJvdyB7XG4gIHdpZHRoOiAyMyU7XG59XG5cbi5hcnJvdzphY3RpdmUge1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ud2Vla0NhbEJ0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMjUlO1xufVxuXG4uZGF5TnVtYmVycyB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi53ZWVrVmlldyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGF5cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5zZWxlY3RlZFdlZWtCdG4ge1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5jdXJyZW50QWN0aXZpdHlSb3cge1xuICBoZWlnaHQ6IDE1JTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0Qm94IHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hY3Rpdml0eVRleHRCb3gge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCQzA1NzQ7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/datastorage/firestore.service */ "./src/datastorage/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Tab1Page = class Tab1Page {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.dateNumbers = [];
        this.dayNumbers = [];
        this.days = [];
        this.daysWithNumbers = [['1', 'ma'], ['2', 'di'], ['3', 'wo'], ['4', 'do'], ['5', 'vr'], ['6', 'za'], ['7', 'zo']];
        this.lastSelected = '';
        this.currentDate = new Date();
        if (this.checkIfWeekdays()) {
            this.lastSelected = new Date().getDate().toString();
        }
    }
    ngOnInit() {
        this.initializeDates(this.currentDate);
        this.refactorDaysToString();
    }
    ngAfterViewInit() {
        this.initializeSelectedWeekBtn();
    }
    initializeSelectedWeekBtn() {
        if (this.checkIfWeekdays()) {
            (document.getElementById(new Date().getDate().toString())).classList.add('selectedWeekBtn');
        }
    }
    navCreateActivity() {
        this.router.navigate(['/create-activity']);
    }
    initializeDates(currentDate) {
        for (let i = 1; i <= 5; i++) {
            const first = currentDate.getDate() - currentDate.getDay() + i;
            let day = new Date(currentDate.setDate(first)).toISOString().slice(8, 10);
            if (day[0] === '0') {
                day = day.slice(1, 2);
            }
            this.dateNumbers.push(day);
        }
    }
    refactorDaysToString() {
        for (const value of this.dayNumbers) {
            switch (value) {
                case '1':
                    this.days.push('ma');
                    break;
                case '2':
                    this.days.push('di');
                    break;
                case '3':
                    this.days.push('wo');
                    break;
                case '4':
                    this.days.push('do');
                    break;
                case '5':
                    this.days.push('vr');
                    break;
            }
        }
    }
    weekBtnPressed(event) {
        if (!this.checkIfWeekdays() && this.lastSelected !== '') {
            document.getElementById(this.lastSelected).classList.remove('selectedWeekBtn');
        }
        else if (this.checkIfWeekdays() && this.lastSelected !== '') {
            document.getElementById(this.lastSelected).classList.remove('selectedWeekBtn');
        }
        this.lastSelected = event.target.id;
        document.getElementById(this.lastSelected).classList.add('selectedWeekBtn');
    }
    goForward() {
        this.currentDate.setDate(this.currentDate.getDate() + 7);
        this.dateNumbers = [];
        this.initializeDates(this.currentDate);
    }
    goBack() {
        this.currentDate.setDate(this.currentDate.getDate() - 7);
        this.dateNumbers = [];
        this.initializeDates(this.currentDate);
    }
    checkIfWeekdays() {
        const currentDate = new Date();
        if (currentDate.getDay() === 6 || currentDate.getDay() === 0) {
            return false;
        }
        else {
            return true;
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        selector: 'app-tab1',
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map