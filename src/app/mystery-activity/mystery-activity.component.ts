import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/datastorage/firestore.service';
import { interval } from 'rxjs';

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
  countdownDate = new Date('Jan 10, 2020 15:30:00').getTime();

  constructor(private db: FirestoreService) {
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countdownDate - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(x);
      }
    });
  }

  ngOnInit() {}

  initializeDate() {

  }

}
