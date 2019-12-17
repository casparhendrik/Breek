import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { NavController } from '@ionic/angular';

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
        }).catch(() => {
            console.log('error');
        });
    }

}
