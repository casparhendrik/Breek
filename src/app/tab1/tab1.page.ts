import { Component } from '@angular/core';
import { FirestoreService, Activity } from 'src/datastorage/firestore.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'tab1.page.html',
  selector: 'app-tab1',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  activities: Observable<Activity[]>;

  constructor(private storage: FirestoreService, private router: Router) {
    this.activities = this.storage.getAllActivities();
  }

  navCreateActivity() {
    this.router.navigate(['/create-activity']);
  }
}
