import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public auth: AuthService) {}

  onLogin() {
    this.auth.SignIn(
      this.loginForm.get('email').value,
      this.loginForm.get('password').value
    );
  }
  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required),
    });
  }
  ngOnInit() {
    this.createForm();
  }
}
