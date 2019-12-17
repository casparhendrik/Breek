import { Component, OnInit } from '@angular/core';
import { FirestoreService, User } from 'src/datastorage/firestore.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {

  errorMessage: string;

  constructor(private db: FirestoreService, private router: Router,
              private navCntrl: NavController) { }

  ngOnInit() {
  }

  register() {
    const firstname = (document.getElementById('firstname') as HTMLInputElement).value;
    const lastname = (document.getElementById('lastname') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const passwordConfirm = (document.getElementById('passwordConfirm') as HTMLInputElement).value;

    if (password !== passwordConfirm ) {
      this.errorMessage = 'Passwords are not equal';
    } else {
      const newUser: User = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        passwordHash: password
      };
      console.log('account created');
      this.db.createUser(newUser);
      this.router.navigate([''], { replaceUrl: true } );
      }
    }

  goBack() {
    this.navCntrl.navigateBack('');
  }
}
