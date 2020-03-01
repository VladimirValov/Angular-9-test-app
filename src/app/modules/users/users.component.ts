import { Component, OnInit } from '@angular/core';

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
  users = mockUsers;
  constructor() {}

  ngOnInit(): void {}
}
