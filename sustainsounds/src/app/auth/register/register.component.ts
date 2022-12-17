import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  checked = false;
  passwordError = false;
  usernameTaken = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    repeatPassword: ['', [Validators.required, Validators.minLength(8)]],
    alias: ['', [Validators.minLength(2)]],
  });

  check(): void {
    this.checked = !this.checked;
  }

  register() {
    if (this.registerForm.invalid) return;

    if (
      this.registerForm.value.password !==
      this.registerForm.value.repeatPassword
    ) {
      this.passwordError = true;
      return;
    }

    const { email, password, repeatPassword, alias } = this.registerForm.value;

    this.authService
      .register(
        email as string,
        password as string,
        repeatPassword as string,
        alias as string
      )
      .subscribe({
        next: (value) => {
          console.log(value);
        },
        error: (err) => {
          this.usernameTaken = true;
        },
      });
  }
}
