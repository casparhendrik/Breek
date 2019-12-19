import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService, Activity } from 'src/datastorage/firestore.service';

@Component({
  selector: 'app-activities-scrollview',
  templateUrl: './activities-scrollview.component.html',
  styleUrls: ['./activities-scrollview.component.scss'],
})
export class ActivitiesScrollviewComponent implements OnInit {

  activities: Observable<Activity[]>;

  selectedTime = 'timeBtnOne';

  constructor(private db: FirestoreService) {
    this.activities = this.db.getAllActivities();
   }

  ngOnInit() {}

  timeBtnPressed(event) {
    (document.getElementById(this.selectedTime) as HTMLButtonElement).classList.remove('isSelected');
    const id = event.target.id;
    this.selectedTime = id;
    (document.getElementById(id) as HTMLButtonElement).classList.add('isSelected');
  }

}
