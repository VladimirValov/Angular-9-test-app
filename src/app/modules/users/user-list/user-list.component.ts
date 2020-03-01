import { Component, OnInit } from '@angular/core';
import { User } from 'src/types';

const mockUsers = [
  {
    avatar:
      'https://sun1-20.userapi.com/c850220/v850220499/721a2/QJPqmsQQSmU.jpg',
    name: 'Иван',
    fname: 'Иванов',
    mname: 'Иванович',
    balance: 100,
    date: new Date(),
    status: 1
  },  {
    avatar:
      'https://sun1-20.userapi.com/c850220/v850220499/721a2/QJPqmsQQSmU.jpg',
    name: 'Иван',
    fname: 'Иванов',
    mname: 'Иванович',
    balance: 100,
    date: new Date(),
    status: 1
  },  {
    avatar:
      'https://sun1-20.userapi.com/c850220/v850220499/721a2/QJPqmsQQSmU.jpg',
    name: 'Иван',
    fname: 'Иванов',
    mname: 'Иванович',
    balance: 100,
    date: new Date(),
    status: 1
  },  {
    avatar:
      'https://sun1-20.userapi.com/c850220/v850220499/721a2/QJPqmsQQSmU.jpg',
    name: 'Иван',
    fname: 'Иванов',
    mname: 'Иванович',
    balance: 100,
    date: new Date(),
    status: 1
  },  {
    avatar:
      'https://sun1-20.userapi.com/c850220/v850220499/721a2/QJPqmsQQSmU.jpg',
    name: 'Иван',
    fname: 'Иванов',
    mname: 'Иванович',
    balance: 100,
    date: new Date(),
    status: 1
  },  {
    avatar:
      'https://sun1-20.userapi.com/c850220/v850220499/721a2/QJPqmsQQSmU.jpg',
    name: 'Иван',
    fname: 'Иванов',
    mname: 'Иванович',
    balance: 100,
    date: new Date(),
    status: 1
  },  {
    avatar:
      'https://sun1-20.userapi.com/c850220/v850220499/721a2/QJPqmsQQSmU.jpg',
    name: 'Иван',
    fname: 'Иванов',
    mname: 'Иванович',
    balance: 100,
    date: new Date(),
    status: 1
  },  {
    avatar:
      'https://sun1-20.userapi.com/c850220/v850220499/721a2/QJPqmsQQSmU.jpg',
    name: 'Иван',
    fname: 'Иванов',
    mname: 'Иванович',
    balance: 100,
    date: new Date(),
    status: 1
  },  {
    avatar:
      'https://sun1-20.userapi.com/c850220/v850220499/721a2/QJPqmsQQSmU.jpg',
    name: 'Иван',
    fname: 'Иванов',
    mname: 'Иванович',
    balance: 100,
    date: new Date(),
    status: 1
  },  {
    avatar:
      'https://sun1-20.userapi.com/c850220/v850220499/721a2/QJPqmsQQSmU.jpg',
    name: 'Иван',
    fname: 'Иванов',
    mname: 'Иванович',
    balance: 100,
    date: new Date(),
    status: 1
  },
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = mockUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
