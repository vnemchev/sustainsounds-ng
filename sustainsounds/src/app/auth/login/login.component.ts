import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginError = false;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {
    if (this.loginForm.invalid) return console.log('wrong');

    const { email, password } = this.loginForm.value;

    this.authService.login(email as string, password as string).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        this.loginError = true;
      },
    });
  }
}
