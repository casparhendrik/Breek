import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { FirestoreService, Activity } from 'src/datastorage/firestore.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivitiesScrollviewComponent } from '../activities-scrollview/activities-scrollview.component';

@Component({
  templateUrl:
  'tab1.page.html',
  selector: 'app-tab1',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, AfterViewInit {

  dateNumbers: string[] = [];
  dayNumbers: string[] = [];
  days: string[] = [];

  daysWithNumbers: string[][] = [['1', 'ma'], ['2', 'di'], ['3', 'wo'], ['4', 'do'], ['5', 'vr'], ['6', 'za'], ['7', 'zo']];

  lastSelected = '';

  currentDate = new Date();

  currentUserActivities: Activity[] = [];
  userHasActivities = false;

  constructor(private db: FirestoreService, private router: Router) {
    if (this.checkIfWeekdays()) {
      this.lastSelected = new Date().getDate().toString();
    }
    this.currentUserActivities.forEach(activity => {
      console.log(activity.id);
    });
  }

  ngOnInit() {
    this.getActivitys();
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

  initializeDates(currentDate: Date) {
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
      (document.getElementById(this.lastSelected) as HTMLButtonElement).classList.remove('selectedWeekBtn');
    } else if (this.checkIfWeekdays() && this.lastSelected !== '') {
      (document.getElementById(this.lastSelected) as HTMLButtonElement).classList.remove('selectedWeekBtn');
    }
    this.lastSelected = event.target.id;
    (document.getElementById(this.lastSelected) as HTMLButtonElement).classList.add('selectedWeekBtn');
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
    } else {
      return true;
    }
  }

  getActivitys() {
    const currentUser = localStorage.getItem('currentUserId');
    this.db.getAllActivities().subscribe(activities => {
      activities.forEach(activity => {
        activity.participants.forEach(participant => {
          if (participant === currentUser) {
            const currentTime = new Date(activity.startDate);
            activity.startDate = currentTime.getHours() + ':' + currentTime.getMinutes();
            this.currentUserActivities.push(activity);
            this.userHasActivities = true;
          }
        });
      });
    });
  }
}
