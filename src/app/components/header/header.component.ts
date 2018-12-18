import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from 'src/app/classes/base-component';

@Component({
  selector: 'posh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent extends BaseComponent {

  // constructor(private dashboardEvent: DashboardEvent, private notificationService: NotificationService) {
  constructor() {
    super();
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.subscriptions.push(this.onUserLoggedOutEventListener());
    // this.subscriptions.push(this.onUserLoggedInEventListener());
  }

  ngOnInit() {
  }

  // public fullName(): string {
    // return 'Rafael';
    // if (!this.currentUser) {
    //   return '';
    // }
    // return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
  // }

  // public onUserLoggedInEventListener(): Subscription {
    // return this.dashboardEvent.onUserLoggedInEvent.subscribe(
    //   (user) => this.currentUser = user,
      // error => this.notificationService.showError(error)
    // );
  // }

  // public onUserLoggedOutEventListener(): Subscription {
    // return this.dashboardEvent.onUserLoggedOutEvent.subscribe(
    //   () => this.currentUser = undefined,
      // error => this.notificationService.showError(error)
    // );
  // }

  // public logout() {
    // this.dashboardEvent.onUserLoggedOutEvent.emit();
  // }

}
