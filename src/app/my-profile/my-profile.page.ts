import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService, Activity } from 'src/datastorage/firestore.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-my-profile',
  templateUrl: 'my-profile.page.html',
  styleUrls: ['my-profile.page.scss']
})
export class MyProfilePage {

  eventSource = [];
  activities: Observable<Activity[]>;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(private db: FirestoreService) {

  }

  onEventSelected(event) {
  }

  onViewTitleChanged(event) {

  }

  onTimeSelected(event) {
    // this.activities = this.db.getAllActivities().pipe(
    //   map(activities => activities.filter(activity => ))
    // )
  }
}
