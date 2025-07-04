import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  enterAccountNumControl = new FormControl('', [
    Validators.required,
    Validators.minLength(16),
    Validators.maxLength(16),
  ]);
  enterPasswordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(12),
    Validators.maxLength(64),
    Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/),
  ]);
}
