import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Calendar } from '@ionic-native/calendar/ngx'

import { AngularFireModule } from '@angular/fire';
import { environment} from '../environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig,
            AngularFirestoreModule)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestore,
    GoogleMaps,
    Calendar
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
