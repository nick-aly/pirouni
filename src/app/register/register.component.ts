import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required),
    });
  }
  onRegister() {
    this.auth.SignUp(
      this.registerForm.get('email').value,
      this.registerForm.get('password').value
    );
  }
}
