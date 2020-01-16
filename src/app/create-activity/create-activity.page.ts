import { Component, OnInit } from '@angular/core';
import { FirestoreService, Activity } from 'src/datastorage/firestore.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.page.html',
  styleUrls: ['./create-activity.page.scss'],
})
export class CreateActivityPage implements OnInit {

  activityNameError = '';
  activityDescriptionError = '';
  categoryError = '';
  selectedCategory = '';
  dateError = '';
  durationError = '';
  locationError = '';
  customDayShortNames = '';
  startDate = '';
  duration = '';

  constructor(private db: FirestoreService, private location: Location, private navCntrl: NavController) {
  }

  ngOnInit() {
  }

  categoryBtnPressed(event) {
    const classNames = ['bewegen', 'rust', 'spel'];
    const id = event.target.id;
    this.selectedCategory = id;
    this.resetButtons(classNames);
    if (id === 'bewegen') {
      (document.getElementById(this.selectedCategory) as HTMLButtonElement).classList.add('pinkSelected');
    } else if (id === 'rust') {
      (document.getElementById(this.selectedCategory) as HTMLButtonElement).classList.add('blueSelected');
    } else {
      (document.getElementById(this.selectedCategory) as HTMLButtonElement).classList.add('purpleSelected');
    }
  }

  resetButtons(classNames: string[]) {
    for (const iterator of classNames) {
      (document.getElementById(iterator) as HTMLButtonElement).classList.remove('pinkSelected');
      (document.getElementById(iterator) as HTMLButtonElement).classList.remove('blueSelected');
      (document.getElementById(iterator) as HTMLButtonElement).classList.remove('purpleSelected');
    }
  }

  createActivity() {
    this.resetErrorMessages();
    this.validateData();
    if (this.checkErrors()) {
      this.duration = new Date(this.duration).getMinutes().toString();
      const newActivity: Activity = {
        name: (document.getElementById('activityName') as HTMLInputElement).value,
        description: (document.getElementById('activityDescription') as HTMLInputElement).value,
        type: this.selectedCategory.toUpperCase(),
        startDate: this.startDate,
        durationInMinutes: this.duration,
        participants: [],
        location: (document.getElementById('location') as HTMLInputElement).value
      };
      this.db.createActivity(newActivity);
    }
  }

  resetErrorMessages() {
    this.activityNameError = '';
    this.activityDescriptionError = '';
    this.categoryError = '';
    this.categoryError = '';
    this.dateError = '';
    this.durationError = '';
    this.locationError = '';
  }

  checkErrors() {
    if (this.activityNameError === '' &&
        this.activityDescriptionError === '' &&
        this.categoryError === '' &&
        this.categoryError === '' &&
        this.dateError === '' &&
        this.durationError === '' &&
        this.locationError === '') {
          return true;
    } else {
      return false;
    }
  }

  validateData() {
    if ((document.getElementById('activityName') as HTMLInputElement).value === '') {
      this.activityNameError = 'Een activiteit moet een naam hebben';
    }

    if ((document.getElementById('activityDescription') as HTMLInputElement).value === '') {
      this.activityDescriptionError = 'Een activiteit moet een beschrijving hebben';
    }

    if (this.selectedCategory === '') {
      this.categoryError = 'Kies een categorie';
    }

    if (this.startDate === '') {
      this.dateError = 'Kies een datum';
    }

    if (this.duration === '') {
      this.durationError = 'Kies een tijdsduur';
    }

    if ((document.getElementById('location') as HTMLInputElement).value === '') {
      this.locationError = 'Geef een locatie van de activiteit';
    }
  }

  goBack() {
    this.navCntrl.back();
  }
}
