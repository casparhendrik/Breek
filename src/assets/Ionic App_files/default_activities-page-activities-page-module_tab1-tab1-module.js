(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~activities-page-activities-page-module~tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/activities-scrollview/activities-scrollview.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/activities-scrollview/activities-scrollview.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\n  <ion-row class=\"searchBarRow\" *ngIf=\"removeHeader\">\n    <ion-searchbar (ionInput)=\"handleInput($event)\" id=\"searchbar\" placeholder=\"zoek\" class=\"searchBar\"></ion-searchbar>\n  </ion-row>\n  <ion-row *ngIf=\"!removeHeader\" style=\"margin-left: 5%;\"><h6>ACTIVITEITEN VOOR VANDAAG</h6></ion-row>\n  \n  <ion-row *ngIf=\"!removeHeader\" style=\"width: 100%\">\n    <div style=\"width: 100%\">\n      <ion-button id=\"timeBtnOne\" (click)=\"timeBtnPressed($event)\" class=\"timeBtn isSelected\">12:00 uur</ion-button>\n      <ion-button id=\"timeBtnTwo\" (click)=\"timeBtnPressed($event)\" class=\"timeBtn\">12:30 uur</ion-button>\n      <ion-button id=\"timeBtnThree\" (click)=\"timeBtnPressed($event)\" class=\"timeBtn\">13:00 uur</ion-button>\n      <ion-button id=\"others\" (click)=\"timeBtnPressed($event)\" class=\"timeBtn\">Overig</ion-button>\n    </div>\n  </ion-row>\n  <div class=\"scrollView\" style=\"width: 100%\">\n      <ion-card id=\"{{activity.id}}card\" tabindex=\"0\" (click)=\"cardPressed($event)\" class=\"activityCard {{ activity.type }}\" *ngFor=\"let activity of filteredActivities\">\n          <ul id=\"{{activity.id}}ulLi\"  style=\"padding-left: 10px; width: 100%; float: left;\">\n            <p id=\"{{activity.id}}type\" style=\"margin-bottom: 10px; margin-top: 10px;\">{{activity.type}}</p>\n            <p id=\"{{activity.id}}name\" style=\"margin-top: 10px; font-weight: bold\">{{activity.name}}</p>\n            <p id=\"{{activity.id}}date\" style=\"margin-bottom: 10px; font-weight: bold;\">{{activity.startDate.slice(0, 10)}}</p>\n            <p id=\"{{activity.id}}loca\" style=\"margin-top: 10px; margin-bottom: 10px;\">{{activity.location}}</p>\n          </ul> \n         <ul id=\"{{activity.id}}desc\" style=\"display: none; margin-left: 50%; padding-Left: 3%; white-space: normal;\">\n           <p id=\"{{activity.id}}\" >{{ activity.description }}</p>\n           <div>\n            <ion-button (click)=\"createActivity($event)\" class=\"createBtn\">Meedoen</ion-button>\n           </div>\n         </ul>\n      </ion-card>\n  </div>\n  <div *ngIf=\"!removeHeader\" class=\"createRow\">\n    <ion-button (click)=\"createBtnPressed()\" class=\"createBtn\">Activiteit toevoegen</ion-button>\n  </div>\n  <div style=\"width:100%\" *ngIf=\"removeHeader\">\n    <label style=\"margin-left: 5%; margin-right: 15%;\">\n      Activiteit toevoegen\n    </label>\n    <ion-button (click)=\"createBtnPressed()\" class=\"createBtn\">Activiteit creeren</ion-button>\n  </div>\n</ion-row>"

/***/ }),

/***/ "./src/app/activities-scrollview/activities-scrollview.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/activities-scrollview/activities-scrollview.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeBtn {\n  width: 25%;\n  margin-left: 0px;\n  margin-right: 0px;\n  --background: #ECEEF3;\n  color: black;\n  --border-radius: 0px;\n  --background-activated: #ECEEF3;\n  --background-focused: #ECEEF3;\n  --background-hover: #ECEEF3;\n  --color-activated: black;\n}\n\n.isSelected {\n  border-bottom-style: solid;\n  border-bottom-width: 8px;\n  border-bottom-color: #2178A5;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.scrollView {\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.activityCard {\n  width: 40%;\n  height: 80%;\n  padding: 0px;\n  margin: 20px;\n  margin-right: 0%;\n  border-radius: 11%;\n  background-color: #2178A5;\n  color: white;\n  text-align: center;\n  display: inline-block;\n  font-size: 12px;\n  -webkit-transition: width 0.4s;\n  /* Safari prior 6.1 */\n  transition: width 0.4s;\n}\n\n.activityCard:focus {\n  width: 80%;\n}\n\n.createRow {\n  width: 40%;\n  margin-left: 30%;\n  margin-right: 30;\n  margin-bottom: 5%;\n}\n\n.createBtn {\n  font-size: 13px;\n  --background: #32175C;\n  --border-radius: 11px;\n  --background-activated: #32175C;\n  --color-activated: white;\n  --background-hover: #32275C;\n}\n\n.bewegen {\n  background-color: #BC0574;\n}\n\n.spel {\n  background-color: #32175C;\n}\n\n.rust {\n  background-color: #698EA9;\n}\n\n.searchBarRow {\n  width: 100%;\n}\n\n.searchBar {\n  --background: white;\n  --color: black;\n  --icon-color: black;\n  --placeholder-color: black;\n  border-radius: 11px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: black;\n  padding: 0px;\n  margin-left: 8%;\n  margin-right: 8%;\n  margin-top: 1%;\n  height: 25px;\n}\n\n.cardContent {\n  border-left: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXNwYXJ2YW5ib29tL0RvY3VtZW50cy9Qcm9qZWN0cy9icmVlay9zcmMvYXBwL2FjdGl2aXRpZXMtc2Nyb2xsdmlldy9hY3Rpdml0aWVzLXNjcm9sbHZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FjdGl2aXRpZXMtc2Nyb2xsdmlldy9hY3Rpdml0aWVzLXNjcm9sbHZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQWdDLHFCQUFBO0VBQ2hDLHNCQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQ0VKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURDQTtFQUNJLHlCQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSw0QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYWN0aXZpdGllcy1zY3JvbGx2aWV3L2FjdGl2aXRpZXMtc2Nyb2xsdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lQnRuIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRUNFRUYzO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRUNFRUYzO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRUNFRUYzO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI0VDRUVGMztcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogYmxhY2s7XG59XG5cbi5pc1NlbGVjdGVkIHtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzIxNzhBNTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbn1cblxuLnNjcm9sbFZpZXcge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hY3Rpdml0eUNhcmQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDExJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE3OEE1O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC40czsgLyogU2FmYXJpIHByaW9yIDYuMSAqL1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHM7XG59XG5cbi5hY3Rpdml0eUNhcmQ6Zm9jdXMge1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5jcmVhdGVSb3cge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uY3JlYXRlQnRuIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMzIxNzVDO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTFweDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMzIxNzVDO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMzMjI3NUM7XG59XG5cbi5iZXdlZ2VuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkMwNTc0O1xufVxuXG4uc3BlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMTc1Qztcbn1cblxuLnJ1c3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OThFQTk7XG59XG5cbi5zZWFyY2hCYXJSb3cge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VhcmNoQmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tY29sb3I6IGJsYWNrO1xuICAgIC0taWNvbi1jb2xvcjogYmxhY2s7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDglO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLmNhcmRDb250ZW50IHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xufVxuIiwiLnRpbWVCdG4ge1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRUNFRUYzO1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRUNFRUYzO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0VDRUVGMztcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRUNFRUYzO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogYmxhY2s7XG59XG5cbi5pc1NlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzIxNzhBNTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuXG4uc2Nyb2xsVmlldyB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWN0aXZpdHlDYXJkIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDAlO1xuICBib3JkZXItcmFkaXVzOiAxMSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTc4QTU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjRzO1xuICAvKiBTYWZhcmkgcHJpb3IgNi4xICovXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHM7XG59XG5cbi5hY3Rpdml0eUNhcmQ6Zm9jdXMge1xuICB3aWR0aDogODAlO1xufVxuXG4uY3JlYXRlUm93IHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5jcmVhdGVCdG4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIC0tYmFja2dyb3VuZDogIzMyMTc1QztcbiAgLS1ib3JkZXItcmFkaXVzOiAxMXB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMzIxNzVDO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzMyMjc1Qztcbn1cblxuLmJld2VnZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkMwNTc0O1xufVxuXG4uc3BlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjE3NUM7XG59XG5cbi5ydXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5OEVBOTtcbn1cblxuLnNlYXJjaEJhclJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VhcmNoQmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0taWNvbi1jb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tbGVmdDogOCU7XG4gIG1hcmdpbi1yaWdodDogOCU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5jYXJkQ29udGVudCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/activities-scrollview/activities-scrollview.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/activities-scrollview/activities-scrollview.component.ts ***!
  \**************************************************************************/
/*! exports provided: ActivitiesScrollviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesScrollviewComponent", function() { return ActivitiesScrollviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/datastorage/firestore.service */ "./src/datastorage/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ActivitiesScrollviewComponent = class ActivitiesScrollviewComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.selectedActivity = '';
        this.lastSelectedActivity = '';
        this.selectedTime = 'timeBtnOne';
        this.filteredActivities = [];
        this.removeHeader = false;
        this.cardOpened = false;
        if (this.getUrl().includes('activities-page')) {
            this.removeHeader = true;
        }
        // setInterval(this.printDate, 300);
    }
    printDate() {
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.setupActivities();
    }
    getUrl() {
        const path = window.location.pathname;
        return path;
    }
    timeBtnPressed(event) {
        document.getElementById(this.selectedTime).classList.remove('isSelected');
        const id = event.target.id;
        this.selectedTime = id;
        document.getElementById(id).classList.add('isSelected');
    }
    cardPressed(event) {
        if (this.cardOpened) {
            this.removeDescriptionToCard(event);
            this.cardOpened = false;
        }
        else {
            setTimeout(this.addDescriptionToCard, 250, event);
            this.cardOpened = true;
        }
    }
    addDescriptionToCard(event) {
        const idTypes = ['card', 'ulLi', 'type', 'name', 'date', 'loca', 'desc'];
        let id = '';
        for (const value of idTypes) {
            if (event.target.id.includes(value)) {
                id = event.target.id.replace(value, '');
            }
        }
        const cardContent = document.getElementById(id + 'ulLi');
        const description = document.getElementById(id + 'desc');
        cardContent.style.width = '50%';
        description.classList.add('cardContent');
        description.style.display = 'block';
    }
    removeDescriptionToCard(event) {
        const idTypes = ['card', 'ulLi', 'type', 'name', 'date', 'loca', 'desc'];
        let id = '';
        for (const value of idTypes) {
            if (event.target.id.includes(value)) {
                id = event.target.id.replace(value, '');
            }
        }
        const cardContent = document.getElementById(id + 'ulLi');
        const description = document.getElementById(id + 'desc');
        cardContent.style.width = '100%';
        description.classList.remove('cardContent');
        description.style.display = 'none';
    }
    createBtnPressed() {
        this.router.navigate(['/create-activity']);
    }
    setupActivities() {
        const currentDate = new Date();
        this.db.getAllActivities().subscribe(activities => {
            this.filteredActivities = [];
            for (const activity of activities) {
                if (new Date(activity.startDate).getFullYear() === currentDate.getFullYear() &&
                    new Date(activity.startDate).getMonth() === currentDate.getMonth() &&
                    new Date(activity.startDate).getDate() === Number(this.currentDate)) {
                    this.filteredActivities.push(activity);
                }
            }
        });
    }
    handleInput(event) {
        const value = event.target.value;
        if (value === '') {
            this.setupActivities();
        }
        else {
            const currentDate = new Date();
            this.db.getAcitivities(value).subscribe(activities => {
                this.filteredActivities = [];
                for (const activity of activities) {
                    if (new Date(activity.startDate).toDateString() === currentDate.toDateString()) {
                        this.filteredActivities.push(activity);
                    }
                }
            });
        }
    }
};
ActivitiesScrollviewComponent.ctorParameters = () => [
    { type: src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ActivitiesScrollviewComponent.prototype, "currentDate", void 0);
ActivitiesScrollviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activities-scrollview',
        template: 'currentDate: {{ currentDate }}',
        template: __webpack_require__(/*! raw-loader!./activities-scrollview.component.html */ "./node_modules/raw-loader/index.js!./src/app/activities-scrollview/activities-scrollview.component.html"),
        styles: [__webpack_require__(/*! ./activities-scrollview.component.scss */ "./src/app/activities-scrollview/activities-scrollview.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_datastorage_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ActivitiesScrollviewComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _activities_scrollview_activities_scrollview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../activities-scrollview/activities-scrollview.component */ "./src/app/activities-scrollview/activities-scrollview.component.ts");







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]],
        declarations: [_activities_scrollview_activities_scrollview_component__WEBPACK_IMPORTED_MODULE_6__["ActivitiesScrollviewComponent"]],
        exports: [_activities_scrollview_activities_scrollview_component__WEBPACK_IMPORTED_MODULE_6__["ActivitiesScrollviewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=default~activities-page-activities-page-module~tab1-tab1-module.js.map