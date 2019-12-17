import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService, Activity } from 'src/datastorage/firestore.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
