import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginHandler(form: NgForm): void {
    // if (form.invalid) return console.log('wrong');

    this.authService.login(form.value);
    this.router.navigate([''])
  }
}
