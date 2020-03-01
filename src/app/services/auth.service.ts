import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(authData) {
    const url = 'https://bumagi-frontend-test.herokuapp.com/auth';

    return this.http.post(url, authData).pipe(
      tap(res => {
        console.log(res);
        // localStorage.setItem('access_token', res.access_token);
      })
    );
  }
}
