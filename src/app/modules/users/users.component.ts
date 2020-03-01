import { Component, OnInit } from '@angular/core';

const auth = {
  login: 'test@example.com',
  password: '1q2w3e'
};

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
