import { Component, OnInit } from '@angular/core';
import { AuthService, AuthData } from '../services';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  mockAuthData: AuthData = {
    login: 'test@example.com',
    password: '1q2w3e'
  };

  showPass = false;
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.createForm(this.mockAuthData);
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe();
  }

  createForm({login = '', password = ''}) {
    return new FormGroup({
      login: new FormControl(login, [Validators.required]),
      password: new FormControl(password, [
        Validators.required
      ])
    });
  }

  get inputType() {
    return this.showPass ? 'text' : 'password';
  }
}
