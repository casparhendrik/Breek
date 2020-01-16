import { Component, OnInit, AfterViewInit, Input, OnChanges } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { FirestoreService, Activity } from 'src/datastorage/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities-scrollview',
  template: 'currentDate: {{ currentDate }}',
  templateUrl: './activities-scrollview.component.html',
  styleUrls: ['./activities-scrollview.component.scss'],
})
export class ActivitiesScrollviewComponent implements OnInit, AfterViewInit, OnChanges {

  activities: Observable<Activity[]>;
  selectedActivity = '';
  lastSelectedActivity = '';
  selectedTime = 'timeBtnOne';
  filteredActivities: Activity[] = [];

  startDates: Date[] = [];
  removeHeader = false;
  cardOpened = false;

  noActivitiesFound = false;
  currentUser = localStorage.getItem('currentUserId');

  joined = false;

  constructor(private db: FirestoreService, private router: Router) {
    if (this.getUrl().includes('activities-page')) {
      this.removeHeader = true;
    }
  }
  @Input() currentDate: any;
  ngOnChanges(currentDate: any) {
    this.setupActivities();
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
    (document.getElementById(this.selectedTime) as HTMLButtonElement).classList.remove('isSelected');
    const id = event.target.id;
    this.selectedTime = id;
    (document.getElementById(id) as HTMLButtonElement).classList.add('isSelected');
  }

  cardPressed(event) {
    const idTypes = ['card', 'ulLi', 'type', 'name', 'date', 'loca', 'desc'];
    let id = '';
    for (const value of idTypes) {
      if (event.target.id.includes(value)) {
        id = event.target.id.replace(value, '');
      }
    }
    this.checkIfJoined(id);
    if (event.target.id.includes('join')) {
      this.joinActivity(event.target.id);
      event = event.target.id.replace('join', 'card');
      this.cardOpened = false;
    } else {
      if (this.cardOpened) {
        this.removeDescriptionToCard(event, id);
        this.cardOpened = false;
      } else {
        window.setTimeout(this.addDescriptionToCard, 150, event, id);
        this.cardOpened = true;
      }
    }
  }

  joinActivity(id: string) {
    let act: Activity;
    id = id.replace('join', '');
    this.filteredActivities.forEach(activity => {
      if (activity.id === id) {
        activity.participants.push(this.currentUser);
        act = activity;
      }
    });
    this.db.updateActivity(act);
  }

  addDescriptionToCard(event, id) {
    const cardContent = document.getElementById(id + 'ulLi');
    const description = document.getElementById(id + 'desc');
    cardContent.style.width = '50%';
    description.classList.add('cardContent');
    description.style.display = 'block';
  }

  removeDescriptionToCard(event, id) {
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
  if (this.getUrl() === '/tabs/tabs/activities-page') {
    this.getAllActivities();
  } else {
    this.getActivitiesByDate();
  }
}

handleInput(event) {
    const items = Array.from(document.getElementById('scrollView').children);
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        (item as HTMLElement).style.display = shouldShow ? 'inline-block' : 'none';
      });
    });
  }

  private getActivitiesByDate() {
    const currentDate: Date = new Date();
    this.db.getAllActivities().subscribe(activities => {
      this.filteredActivities = [];
      for (const activity of activities) {
        if (new Date(activity.startDate).getFullYear() === currentDate.getFullYear() &&
            new Date(activity.startDate).getMonth() === currentDate.getMonth() &&
            new Date(activity.startDate).getDate() === Number(this.currentDate)) {
          const currentTime = new Date(activity.startDate);
          activity.startDate = currentTime.getHours() + ':' + currentTime.getMinutes();
          this.filteredActivities.push(activity);
          this.noActivitiesFound = false;
        }
      }
      if (this.filteredActivities.length === 0) {
        this.noActivitiesFound = true;
      } else {
        this.noActivitiesFound = false;
      }
    });
  }

  private getAllActivities() {
    this.db.getAllActivities().subscribe(activities => {
      this.filteredActivities = [];
      activities.forEach(activity => {
        this.filteredActivities.push(activity);
        const currentTime = new Date(activity.startDate);
        activity.startDate = currentTime.getHours() + ':' + currentTime.getMinutes();
      });
    });
  }

 checkIfJoined(id: string) {
   this.filteredActivities.forEach(activity => {
     if (activity.id === id) {
       activity.participants.forEach(participant => {
         if (participant === this.currentUser) {
           this.joined = true;
         } else {
           this.joined = false;
         }
       });
     }
   });
  }
}
