import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  loginHandler(form: NgForm): void {
    // if (form.invalid) return console.log('wrong');

    console.log(form.value.email);
    this.authService.login(form.value).subscribe({
      next: (value) => {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
