import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { NavController } from '@ionic/angular';
import { MysteryActivityComponent } from 'src/app/mystery-activity/mystery-activity.component';

export interface User {
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    passwordHash: string;
}

export interface Activity {
    id?: string;
    name: string;
    type: string;
    description: string;
    participants: string[];
    startDate: string;
    durationInMinutes: string;
    location: string;
}

@Injectable({
    providedIn: 'root'
})

export class FirestoreService {
    private UserCollection: AngularFirestoreCollection;
    private users: Observable<User[]>;
    private activities: Observable<Activity[]>;

    constructor(private db: AngularFirestore, private navCntrl: NavController) {
        this.getAllUsers();
    }

    getAllUsers(): Observable<User[]> {
        const ref = this.db.collection<User>('users');
        this.users = ref.snapshotChanges().pipe(
            map(Users => {
                return Users.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
            });
            })
        );
        return this.users;
    }

    createUser(newUser: User) {
        const ref = this.db.collection<User>('users');
        const newId: string = uuid();
        ref.doc(newId).set({
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email,
            passwordHash: newUser.passwordHash
        }).then(() => {
        }).catch(() => {
        });
    }

    getAllActivities(): Observable<Activity[]> {
        const ref = this.db.collection<Activity>('activities');
        this.activities = ref.snapshotChanges().pipe(
            map(activities => {
                return activities.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
                });
            })
        );
        return this.activities;
    }

    getAcitivities(searchText: string): Observable<Activity[]> {
        const ref = this.db.collection<Activity>('activities', ref => ref.where('name', '>=', searchText));
        this.activities = ref.snapshotChanges().pipe(
            map(activities => {
                return activities.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
                });
            })
        );
        return this.activities;
    }

    getActivity(id: string): Observable<Activity> {
        const ref = this.db.collection('activities').doc<Activity>(id);
        const activity = ref.valueChanges().pipe(
            map (activity => {
                activity.id = id;
                return activity;
            }));
        return activity;
    }

    getMysteryActivity(id: string): Observable<Activity> {
        const ref = this.db.collection('mysteryactivities').doc<Activity>(id);
        const mysteryactivity = ref.valueChanges().pipe(
            map (activity => {
                activity.id = id;
                return activity;
            }));
        return mysteryactivity;
    }

    createActivity(newActivity: Activity) {
        const ref = this.db.collection<Activity>('activities');
        const newId: string = uuid();
        ref.doc(newId).set({
            name: newActivity.name,
            type: newActivity.type,
            description: newActivity.description,
            durationInMinutes: newActivity.durationInMinutes,
            startDate: newActivity.startDate,
            participants: newActivity.participants,
            location: newActivity.location
        }).then(() => {
            this.navCntrl.navigateBack('/tabs/tabs');
        }).catch(error => {
            console.log(error);
        });
    }

    createMysteryActivity() {
        const ref = this.db.collection<Activity>('mysteryactivities');
        const newId: string = uuid();
        ref.doc(newId).set({
            name: 'Groeps-yoga',
            type: 'bewegen',
            description: 'Een leuk gezellige groepsyoga sessie!',
            durationInMinutes: '20',
            startDate: '2020-01-20T09:44:32.215+01:00',
            participants: ['Erik', 'Fleur'],
            location: 'In het park'
        }).then(() => {
            this.navCntrl.navigateBack('/tabs/tabs/activities-page');
        }).catch(() => {
            console.log('error');
        });
    }

    updateMysteryActivity(mysteryActivity: Activity) {
        const ref = this.db.collection('mysteryactivities').doc(mysteryActivity.id).update({ participants: mysteryActivity.participants });
    }

    updateActivity(activity: Activity) {
        const ref = this.db.collection('activities').doc(activity.id).update({participants: activity.participants});
    }


}
