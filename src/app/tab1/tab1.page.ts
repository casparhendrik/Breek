import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FirestoreService, Activity } from 'src/datastorage/firestore.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'tab1.page.html',
  selector: 'app-tab1',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit {


  dateNumbers: string[] = [];
  dayNumbers: string[] = [];
  days: string[] = [];

  daysWithNumbers: string[][] = [['1', 'ma'], ['2', 'di'], ['3', 'wo'], ['4', 'do'], ['5', 'vr'], ['6', 'za'], ['7', 'zo']];

  lastSelected: string = '';

  currentDate = new Date();

  constructor(private storage: FirestoreService, private router: Router) {
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
      this.lastSelected = new Date().getDay().toString();
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
      console.log(day);
      this.dateNumbers.push(day);
    }
  }

  refactorDaysToString() {
    for (const value of this.dayNumbers) {
      console.log(value);
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
}
