import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(authData) {
    const url = 'https://bumagi-frontend-test.herokuapp.com/auth';

    return this.http.post(url, authData).pipe(
      tap(res => {
        localStorage.setItem('access_token', 'res.access_token');
        this.router.navigateByUrl('/');
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  isLoginIn() {
    return !!localStorage.getItem('access_token');
  }
}
