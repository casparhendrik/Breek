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
  selectedCategory = 'all';
  filteredActivities: Activity[] = [];

  allActivities: Activity[] = [];

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
    this.selectedTime = event.target.id;
    (document.getElementById(event.target.id) as HTMLButtonElement).classList.add('isSelected');
    const activities = Array.from(document.getElementById('scrollViewHome').children);
    const query = event.target.innerHTML;
    requestAnimationFrame(() => {
      activities.forEach(item => {
        let shouldShow;
        if (query === 'Overig') {
          shouldShow = true;
        } else {
          shouldShow = item.children.item(0).children.item(3).innerHTML >= query;
        }
        (item as HTMLElement).style.display = shouldShow ? 'inline-block' : 'none';
      });
    });
  }


  cardPressed(event) {
    const idTypes = ['card', 'ulLi', 'type', 'name', 'date', 'loca', 'desc'];
    let id = '';
    for (const value of idTypes) {
      if (event.target.id.includes(value)) {
        id = event.target.id.replace(value, '');
      }
    }
    if (event.target.id.includes('join')) {
      this.joinActivity(event.target.id);
    } else if (event.target.id.includes('cancel')) {
      this.cancelActivity(event.target.id);
    } else {
      this.transitionCard(id);
    }
  }

  transitionCard(id: string) {
    if (this.lastSelectedActivity === '') {
      this.checkIfJoined(id);
      document.getElementById(id + 'card').classList.add('openedCard');
      window.setTimeout(this.addDescriptionToCard, 150, id);
      this.lastSelectedActivity = id;
    } else if (this.lastSelectedActivity === id) {
      document.getElementById(id + 'card').classList.remove('openedCard');
      this.removeDescriptionToCard(id);
      this.lastSelectedActivity = '';
    } else if (this.lastSelectedActivity !== '') {
      this.removeDescriptionToCard(this.lastSelectedActivity);
      document.getElementById(this.lastSelectedActivity + 'card').classList.remove('openedCard');
      this.checkIfJoined(id);
      document.getElementById(id + 'card').classList.add('openedCard');
      window.setTimeout(this.addDescriptionToCard, 150, id);
      this.lastSelectedActivity = id;
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

  cancelActivity(id: string) {
    let act: Activity;
    id = id.replace('cancel', '');
    this.filteredActivities.forEach(activity => {
      if (activity.id === id) {
        const index = activity.participants.indexOf(this.currentUser);
        if (index > -1) {
          activity.participants.splice(index, 1);
          act = activity;
        }
      }
    });
    this.db.updateActivity(act);
  }

  addDescriptionToCard(id) {
    const cardContent = document.getElementById(id + 'ulLi');
    const description = document.getElementById(id + 'desc');
    cardContent.style.width = '50%';
    description.classList.add('cardContent');
    description.style.display = 'block';
  }

  removeDescriptionToCard(id) {
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
  this.getAllActivities();
}

handleInput(event) {
    const items = Array.from(document.getElementById('scrollViewActivities').children);
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
      if (this.getUrl() === '/tabs/tabs/activities-page') {
        this.filteredActivities = [];
        activities.forEach(activity => {
          this.allActivities.push(activity);
          const currentTime = new Date(activity.startDate);
          activity.startDate = currentTime.getHours() + ':' + currentTime.getMinutes();
        });
      } else {
        this.filteredActivities = [];
        activities.forEach(activity => {
          if (new Date(activity.startDate).getDate() === Number(this.currentDate)) {
            this.filteredActivities.push(activity);
            const currentTime = new Date(activity.startDate);
            activity.startDate = currentTime.getHours() + ':' + currentTime.getMinutes();
          }
        });
      }
    });
  }

 checkIfJoined(id: string) {
    const currentUser = localStorage.getItem('currentUserId');
    this.db.getActivity(id).subscribe(activity => {
      if (activity.participants.length === 0) {
        this.joined = false;
      }
      activity.participants.forEach(participant => {
        if (participant === currentUser) {
          this.joined = true;
        } else {
          this.joined = false;
        }
      });
    });
  }

  changeCategory(event) {
    document.getElementById(this.selectedCategory).classList.remove('isSelected');
    this.selectedCategory = event.target.id;
    document.getElementById(event.target.id).classList.add('isSelected');
    const activities = Array.from(document.getElementById('scrollViewActivities').children);
    const query = event.target.id;
    if (query === 'all') {
      requestAnimationFrame(() => {
        activities.forEach(item => {
          const shouldShow = true;
          (item as HTMLElement).style.display = shouldShow ? 'inline-block' : 'none';
        });
      });
    } else {
      requestAnimationFrame(() => {
        activities.forEach(item => {
          const shouldShow = item.children.item(0).children.item(1).innerHTML === query;
          (item as HTMLElement).style.display = shouldShow ? 'inline-block' : 'none';
        });
      });
    }
  }
}
