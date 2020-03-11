import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  showPass = false;

  ngOnInit(): void {}

  onSubmit() {
    const authData = {
      login: 'test@example.com',
      password: '1q2w3e'
    };

    this.authService.login(authData).subscribe();
  }

  get inputType() {
    return this.showPass ? 'text' : 'password';
  }
}
