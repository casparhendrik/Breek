import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FirestoreService, Activity } from 'src/datastorage/firestore.service';

export interface ExampleActivity {
  title: string;
  description: string;
}

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.page.html',
  styleUrls: ['./activities-page.page.scss'],
})

export class ActivitiesPagePage implements OnInit, AfterViewInit {

  activities: ExampleActivity[] = [];
  exampleActivities: string[][] = [
    ['Potje kaarten', 'Heb jij zin in een competetief spelletje? Ga samen een potje kaarten en ga de strijd aan met je collega\'s.', 'rust'],
    ['Yoga', 'Even helemaal zen... Met een korte yoga sessie kom je even helemaal tot rust. Geef jezelf nieuwe energie', 'bewegen'],
    ['Pingpong', 'Heb je zin in een competetief spelletje? Ga samen een potje kaarten en ga de strijd aan met je collega\'s.', 'spel'],
    ['Tekenen', 'Uit samen met je collega\'s je creativiteit en creëer wat leuks. Leer van elkaar', 'rust'],
    ['Koffie of thee', 'Niet zo\'n zin in iets actiefs? Ga voor iets ontspannends en drink samen met collega\'s een kopje koffie/thee', 'bewegen'],
    ['Darten', 'Zin in iets competitiefs? Daag je collega\'s uit voor een potje darten', 'spel'],
    ['Frisbee', 'Doe mee met een potje frisbee! Je bent lekker buiten en je doet iets actiefs.', 'bewegen']
  ];
  locationError: string;
  currentTitle: string;
  currentDescription: string;
  currentLocation: string;
  currentId: string;
  startDate = '';
  duration = '';

  constructor(private db: FirestoreService) {
    for (const exampleActivity of this.exampleActivities) {
     const newActivity: ExampleActivity = {
        title: exampleActivity[0],
        description: exampleActivity[1]
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
      (document.getElementById(event.target.id + 'card')).classList.remove('openedCard');
      (document.getElementById(event.target.id + 'div') as HTMLDivElement).style.display = 'none';
      (document.getElementById(event.target.id) as HTMLIonIconElement).name = 'add-circle-outline';
      this.locationError = '';
    } else {
      (document.getElementById(event.target.id + 'card')).classList.add('openedCard');
      (document.getElementById(event.target.id + 'div') as HTMLDivElement).style.display = 'block';
      (document.getElementById(event.target.id) as HTMLIonIconElement).name = 'remove-circle-outline';
      this.currentId = event.target.id;
      this.currentTitle = event.target.id;
      this.currentDescription = (document.getElementById(event.target.id + 'desc') as HTMLParagraphElement).innerHTML;
      this.currentLocation = (document.getElementById(event.target.id + 'input') as HTMLIonInputElement).value;
    }
  }

  createActivity() {
    this.validateData();
    if (this.locationError !== '') {
      const newActivity: Activity = {
        name: (document.getElementById('activityName') as HTMLInputElement).value,
        description: (document.getElementById('activityDescription') as HTMLInputElement).value,
        type: 'this.selectedCategory',
        startDate: this.startDate,
        durationInMinutes: this.duration,
        participants: [],
        location: (document.getElementById('location') as HTMLInputElement).value
      };

    }
  }

  validateData() {
    if ((document.getElementById(this.currentId + 'input') as HTMLInputElement).value === '') {
      this.locationError = 'Geef een locatie van de activiteit';
    }
  }
}
