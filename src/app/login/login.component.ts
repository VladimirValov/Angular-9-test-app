import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit() {
    const authData = {
      login: 'test@example.com',
      password: '1q2w3e'
    };

    this.authService.login(authData).subscribe();
  }
}
