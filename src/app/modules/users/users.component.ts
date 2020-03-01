import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services';
import { User } from 'src/types';
import { interval, Subscription } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

const auth = {
  login: 'test@example.com',
  password: '1q2w3e'
};

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  sub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.userService.getUsers())
      )
      .subscribe((us: User[]) => {
        console.log('getUsers');
        this.users = us;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
