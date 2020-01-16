import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ActivitiesPagePage } from './activities-page.page';
import { ActivitiesScrollviewComponent } from '../activities-scrollview/activities-scrollview.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ActivitiesPagePage}]),
    SharedModule
  ],
  declarations: [ActivitiesPagePage]
})
export class ActivitiesPagePageModule {}
