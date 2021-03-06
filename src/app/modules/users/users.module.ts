import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserComponent],
  imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {}
