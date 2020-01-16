import { Component } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss']
})
export class CalendarPage {
  calendars = [];
  plannedEvents = [];
  eventList = [];
  events = [];

  constructor(public navCtrl: NavController, private calendar: Calendar, private platform: Platform) {
    // platform.ready().then(() => {
    //   calendar.listCalendars().then(dataa => {
    //     this.calendars = dataa;
    //   });

    //   console.log("1: ")
    //   console.log(this.events)
    //   if (platform.is('ios')) {
    //     for (var i = 0; i < this.calendars.length; i++) {
    //       calendar.findAllEventsInNamedCalendar(this.calendars[i].name).then(iOSData => {
    //         this.events = iOSData;
    //         console.log("2 (iOS): ")
    //         console.log(this.events)
    //       });
    //     }
    //   } else if (platform.is('android')) {
    //     let start = new Date();
    //     let end = new Date();
    //     start.setHours(8, 0, 0, 0);
    //     end.setHours(18, 0, 0 ,0);

    //     calendar.listEventsInRange(start, end).then(data => {
    //       this.events = data;
    //       console.log("2 (Android): ")
    //       console.log(this.events)
    //       data.forEach(event => {
    //         console.log(event)
    //       });
    //       for (var i = 0; i < this.events.length; i++) {
    //         let event = this.events[i];
    //         console.log(event);
    //         this.plannedEvents.push({start: new Date(event.dtstart).getHours(), end: new Date(event.dtend).getHours(), name: event.name})
    //       }
    //     }).catch(error => {
    //       console.log(error);
    //     });
    //   }
    //   console.log(this.plannedEvents);

    //   var time = 8;
    //   for (var i = 0; i < this.plannedEvents.length; i++) {
    //     var timesBeforeEvent = [];
    //     if (this.plannedEvents[i].start > time) {
    //       for (time; time < this.plannedEvents[i].start; time++) {
    //         if (time >= 10) {
    //           timesBeforeEvent.push(time);
    //         }
    //         else {
    //           timesBeforeEvent.push("0"+time);
    //         }
    //       }
    //     }
    //     let eventTime = [this.plannedEvents[i].start, this.plannedEvents[i].end];
    //     var timesDuringEvent = []
    //     for (var j = this.plannedEvents[i].start; j < this.plannedEvents[i].end; j++) {
    //       if (j >= 10) {
    //         timesDuringEvent.push(j);
    //       }
    //       else {
    //         timesDuringEvent.push("0"+j);
    //       }
    //     }
    //     this.eventList.push({timesBeforeEvent: timesBeforeEvent, event: {times: timesDuringEvent, event: {time: eventTime, eventName: this.plannedEvents[i].name}}})
    //     if (i + 1 >= this.plannedEvents.length) {
    //       this.eventList.push({timesBeforeEvent: timesBeforeEvent, event: null})
    //     }
    //   }
    //   console.log(this.eventList);
    // });
  }

  // addEvent(cal) {
  //   let date = new Date();
  //   let options = { calendarId: cal.id, calendarName: cal.name, url: 'https://lolwatsdis.com', firstReminderMinutes: 30 }
    
  //   this.calendar.createEventInteractivelyWithOptions('New Event', 'Nimma', 'Notes', date, date, options).then(() => {
      
  //   });
  // }
}
