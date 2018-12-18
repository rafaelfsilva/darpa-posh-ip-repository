import {EventEmitter} from '@angular/core';
import {User} from 'src/app/models';

export class DashboardEvent {
  public onUserLoggedInEvent: EventEmitter<User> = new EventEmitter<User>();
  public onUserLoggedOutEvent: EventEmitter<User> = new EventEmitter<User>();
}
