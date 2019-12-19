import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { MysteryActivityComponent } from '../mystery-activity/mystery-activity.component';
import { ActivitiesScrollviewComponent } from '../activities-scrollview/activities-scrollview.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, MysteryActivityComponent, ActivitiesScrollviewComponent]
})
export class Tab1PageModule {}
