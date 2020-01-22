import { Component, OnInit, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
  Environment,
  ILatLng,
  Polyline,
  BaseArrayClass,
  Spherical
} from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-maps',
  templateUrl: 'maps.page.html',
  styleUrls: ['maps.page.scss']
})

export class MapsPage implements OnInit {

  map: GoogleMap;
  distance: string;
  time: string;
  points: ILatLng[];

  constructor(private _ngZone: NgZone, private platform: Platform) {}

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {

    if (this.points == null) {
      this.points = [
        {lat: 51.827048, lng: 5.863427},
        {lat: 51.825879, lng: 5.863745},
        {lat: 51.825399, lng: 5.867656},
        {lat: 51.826061, lng: 5.868426},
        {lat: 51.827985, lng: 5.865230},
        {lat: 51.827580, lng: 5.864503},
        {lat: 51.827620, lng: 5.863599}
      ]
    }

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDoXlMJUY-OrCWYkjTEEp61TCPFbD8wZ7E',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDoXlMJUY-OrCWYkjTEEp61TCPFbD8wZ7E'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: this.points
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let polyline: Polyline = this.map.addPolylineSync({
      points: this.points
    });
    let baseArray: BaseArrayClass<ILatLng> = polyline.getPoints();

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 51.826535,
        lng: 5.864890
      }
    });

    baseArray.mapAsync((point: ILatLng, next: (newElement: any) => void) => {
      this.map.addMarker({
        position: point,
        draggable: true
      }).then(next);
    }).then((markers: Marker[]) => {
      
      let baseArray2: BaseArrayClass<Marker> = new BaseArrayClass<Marker>(markers);
      baseArray2.forEach((marker: Marker, idx: number) => {
        marker.on('position_changed').subscribe((params) => {
          baseArray.setAt(idx, params[1]);
          this.points[idx] = params[1];
        });
      });

      // trigger the position_changed event for the first calculation.
      markers[0].trigger('position_changed', null, markers[0].getPosition());
    });
    baseArray.on('set_at').subscribe(() => {
      this._ngZone.run(() => {
        let distanceMeter: number = Spherical.computeLength(baseArray);
        this.distance = distanceMeter.toFixed(2) + " metres";
        let hours: number = (distanceMeter/5000)
        let minutes: number = (hours - Math.floor(hours))*60;
        let seconds: number = (minutes - Math.floor(minutes))*60;
        this.time = Math.floor(hours) + ":" + Math.floor(minutes) + ":" + Math.floor(seconds);
      });
    });

    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked')
    });
  }

  onButtonClick() {
    this.points.push({lat: 51.826535, lng: 5.864890});
    this.map.remove();
    this.loadMap();
  }
}
