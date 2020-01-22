import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FirestoreService, Activity } from 'src/datastorage/firestore.service';
import { Calendar } from '@ionic-native/calendar/ngx';

export interface ExampleActivity {
  title: string;
  description: string;
  type: string;
}

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.page.html',
  styleUrls: ['./activities-page.page.scss'],
})

export class ActivitiesPagePage implements OnInit, AfterViewInit {

  activities: ExampleActivity[] = [];
  exampleActivities: string[][] = [
    ['Potje kaarten', 'Heb jij zin in een competetief spelletje? Ga samen een potje kaarten en ga de strijd aan met je collega\'s.', 'RUST'],
    ['Yoga', 'Even helemaal zen... Met een korte yoga sessie kom je even helemaal tot rust. Geef jezelf nieuwe energie', 'BEWEGEN'],
    ['Pingpong', 'Heb je zin in een competetief spelletje? Ga samen een potje kaarten en ga de strijd aan met je collega\'s.', 'SPEL'],
    ['Tekenen', 'Uit samen met je collega\'s je creativiteit en creëer wat leuks. Leer van elkaar', 'RUST'],
    ['Koffie of thee', 'Niet zo\'n zin in iets actiefs? Ga voor iets ontspannends en drink samen met collega\'s een kopje koffie/thee', 'BEWEGEN'],
    ['Darten', 'Zin in iets competitiefs? Daag je collega\'s uit voor een potje darten', 'SPEL'],
    ['Frisbee', 'Doe mee met een potje frisbee! Je bent lekker buiten en je doet iets actiefs.', 'BEWEGEN']
  ];

  locationError = '';
  currentTitle: string;
  currentDescription: string;
  currentLocation: string;
  currentId: string;
  currentType: string;
  startDate: Date;
  duration = '';
  type = '';
  lastSelected = '';

  constructor(private db: FirestoreService, private calendar: Calendar) {
    for (const exampleActivity of this.exampleActivities) {
     const newActivity: ExampleActivity = {
        title: exampleActivity[0],
        description: exampleActivity[1],
        type: exampleActivity[2]
      };
     this.activities.push(newActivity);
  }
}

  ngOnInit() {
  }

  async ngAfterViewInit() {
    for (const exampleActivity of this.exampleActivities) {
      (document.getElementById(exampleActivity[0] + 'colorBlock') as HTMLDivElement).classList.add('cardBackground');
      (document.getElementById(exampleActivity[0] + 'colorBlock') as HTMLDivElement).style.backgroundImage = 'url("../../assets/icons/' +
      exampleActivity[0] + '.png")';
   }
  }

  onIcon(event) {
    if ((document.getElementById(event.target.id) as HTMLIonIconElement).name === 'remove-circle-outline') {
      this.closeCard(event.target.id);
      this.lastSelected = '';
    } else {
      (document.getElementById(event.target.id + 'card')).classList.add('openedCard');
      (document.getElementById(event.target.id + 'div') as HTMLDivElement).style.display = 'block';
      (document.getElementById(event.target.id) as HTMLIonIconElement).name = 'remove-circle-outline';
      this.currentId = event.target.id;
      this.currentTitle = event.target.id;
      this.currentDescription = (document.getElementById(event.target.id + 'desc') as HTMLParagraphElement).innerHTML;
      this.currentLocation = (document.getElementById(event.target.id + 'input') as HTMLIonInputElement).value;
      this.activities.forEach(activity => {
        if (activity.title === this.currentTitle) {
          this.currentType = activity.type;
        }
      });
      if (this.lastSelected !== '') {
        this.closeCard(this.lastSelected);
      }
      this.lastSelected = event.target.id;
    }
  }

  createActivity() {
    this.validateData();
    if (this.locationError === '') {
      const duration = new Date(this.duration).getMinutes().toString();
      const newActivity: Activity = {
        name: this.currentTitle,
        description: this.currentDescription,
        type: this.currentType,
        startDate: this.startDate.toDateString(),
        durationInMinutes: duration,
        participants: [],
        location: (document.getElementById(this.currentId + 'location') as HTMLInputElement).value
      };
      this.calendar.createEventInteractively(this.currentTitle, (document.getElementById(this.currentId + 'location') as HTMLInputElement).value, '', this.startDate, new Date(this.startDate.getDate() + new Date(this.duration).getMinutes()))
      this.db.createActivity(newActivity);
    }
    this.closeCard(this.lastSelected);
  }

  validateData() {
    if ((document.getElementById(this.currentId + 'location') as HTMLInputElement).value === '') {
      this.locationError = 'Geef een locatie van de activiteit';
    } else {
      this.locationError = '';
    }
  }

  closeCard(id: string) {
      (document.getElementById(id + 'card')).classList.remove('openedCard');
      (document.getElementById(id + 'div') as HTMLDivElement).style.display = 'none';
      (document.getElementById(id) as HTMLIonIconElement).name = 'add-circle-outline';
      this.locationError = '';
      this.currentId = '';
      this.currentTitle = '';
      this.currentDescription = '';
      this.currentLocation = '';
      this.currentType = '';
  }
}
