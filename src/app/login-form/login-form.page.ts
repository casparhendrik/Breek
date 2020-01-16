import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService, User } from 'src/datastorage/firestore.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {

  errorMessage: string;
  private users: Observable<User[]>;

  constructor(private db: FirestoreService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    if (email !== '' && password !== '') {
    this.users = this.db.getAllUsers().pipe(
      map(items => items.filter(item => item.email === email && item.passwordHash === password)));
    this.users.subscribe(result => {
      if (result.length === 0) {
        this.errorMessage = 'No match found for this email and password';
      } else {
        localStorage.setItem('currentUserId', result[0].id);
        this.router.navigate(['/tabs/tabs/tab1'], { replaceUrl: true });
      } });
    }
}

navigateRegisterPage() {
  this.router.navigate(['/register-page']);
}
}
