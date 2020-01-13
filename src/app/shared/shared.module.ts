import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivitiesScrollviewComponent } from '../activities-scrollview/activities-scrollview.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [ActivitiesScrollviewComponent],
  exports: [ActivitiesScrollviewComponent, CommonModule, FormsModule, RouterModule]
})
export class SharedModule {}
