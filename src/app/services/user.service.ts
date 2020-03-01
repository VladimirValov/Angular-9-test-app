import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  mockUser: User = {
    id: '',
    avatar:
      'https://sun1-20.userapi.com/c850220/v850220499/721a2/QJPqmsQQSmU.jpg',
    name: 'Иван',
    fname: 'Иванов',
    mname: 'Иванович',
    balance: 100,
    date: new Date(),
    status: 1
  };

  constructor() {}

  getUsers() {
    return of<User[]>([
      { id: '1', ...this.mockUser },
      { id: '2', ...this.mockUser },
      { id: '3', ...this.mockUser },
      { id: '4', ...this.mockUser }
    ]);
  }
}
