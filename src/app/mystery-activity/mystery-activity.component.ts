import { Component, OnInit } from '@angular/core';
import { FirestoreService, Activity } from 'src/datastorage/firestore.service';
import { interval, Observable } from 'rxjs';
import { callbackify } from 'util';

@Component({
  selector: 'app-mystery-activity',
  templateUrl: './mystery-activity.component.html',
  styleUrls: ['./mystery-activity.component.scss'],
})
export class MysteryActivityComponent implements OnInit {

  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  countdownDate = new Date();
  mysteryActivity: Observable<Activity>;
  weekDay = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];
  months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'November', 'December'];
  currentActivity: Activity;

  currentUserId = localStorage.getItem('currentUserId');
  isJoined = false;

  constructor(private db: FirestoreService) {
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
        } else {
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

}
