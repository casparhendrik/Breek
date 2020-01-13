import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { FirestoreService, Activity } from 'src/datastorage/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities-scrollview',
  templateUrl: './activities-scrollview.component.html',
  styleUrls: ['./activities-scrollview.component.scss'],
})
export class ActivitiesScrollviewComponent implements OnInit, AfterViewInit {

  activities: Observable<Activity[]>;
  selectedActivity = '';
  lastSelectedActivity = '';
  selectedTime = 'timeBtnOne';
  filteredActivities: Activity[] = [];

  removeHeader = false;

  constructor(private db: FirestoreService, private router: Router) {
    if (this.getUrl().includes('activities-page')) {
      this.removeHeader = true;
    }
  }

ngOnInit() {

}

ngAfterViewInit() {
}

getUrl() {
    const path = window.location.pathname;
    return path;
  }

timeBtnPressed(event) {
    (document.getElementById(this.selectedTime) as HTMLButtonElement).classList.remove('isSelected');
    const id = event.target.id;
    this.selectedTime = id;
    (document.getElementById(id) as HTMLButtonElement).classList.add('isSelected');
  }

cardPressed(event) {
    this.addDescriptionToCard(event);
  }

addDescriptionToCard(event) {
    const idTypes = ['ulLi', 'type', 'name', 'date', 'loca', 'desc'];
    let id = '';
    for (const value of idTypes) {
      if (event.target.id.includes(value)) {
        id = event.target.id.replace(value, '');
      }
    }
    console.log(id);
    const cardContent = document.getElementById(id + 'ulLi');
    const description = document.getElementById(id + 'desc');
    console.log(cardContent.id);
    cardContent.style.width = '50%';
    description.classList.add('cardContent');
    description.style.marginLeft = '50%';
    description.style.paddingLeft = '3%';
    description.style.display = 'block';
  }

createBtnPressed() {
    this.router.navigate(['/create-activity']);
  }

setupActivities() {
    const currentDate: Date = new Date();
    this.db.getAllActivities().subscribe(activities => {
      this.filteredActivities = [];
      for (const activity of activities) {
        if (new Date(activity.startDate).toDateString() === currentDate.toDateString()) {
          this.filteredActivities.push(activity);
        }
      }
    });
  }

handleInput(event) {
    const value = event.target.value;
    if (value === '') {
      this.setupActivities();
    } else {
      const currentDate: Date = new Date();
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
}
