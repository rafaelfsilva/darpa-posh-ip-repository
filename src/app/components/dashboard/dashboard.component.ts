import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../../models';
import {UserService, DashboardEvent, NotificationService} from '../../services';
import {Subscription} from 'rxjs';
import {BaseComponent} from 'src/app/classes/base-component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'posh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent {
  // currentUser: User;
  // projectId: string;
  // users: User[] = [];

  // constructor(private userService: UserService,
  //             private dashboardEvent: DashboardEvent,
  //             private notificationService: NotificationService,
  //             private route: ActivatedRoute,
  //             private router: Router) {
  constructor(
    private route: ActivatedRoute,
    private router: Router) {
    super();
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.dashboardEvent.onUserLoggedInEvent.emit(this.currentUser);
    // this.subscriptions.push(this.onUserLoggedOutEventListener());
    // this.subscriptions.push(this.getProjectIdFromUrl());
  }

  ngOnInit() {
    // this.loadAllUsers();
  }

  // deleteUser(id: number) {
  //   this.userService.delete(id).pipe(first()).subscribe(() => {
  //     this.loadAllUsers();
  //   });
  // }
  //
  // private loadAllUsers() {
  //   this.userService.getAll().pipe(first()).subscribe(users => {
  //     this.users = users;
  //   });
  // }
  //
  // private getProjectIdFromUrl(): Subscription {
  //   return this.route.queryParams.subscribe(
  //     params => {
  //       if (params && params['projectId']) {
  //         this.projectId = params['projectId'];
  //         this.router.navigateByUrl(`projects/${this.projectId}`);
  //       } else {
  //         // this.router.navigateByUrl('login');
  //       }
  //     },
  //     error => this.notificationService.showError(error)
  //   );
  // }
  //
  // public onUserLoggedOutEventListener(): Subscription {
  //   return this.dashboardEvent.onUserLoggedOutEvent.subscribe(
  //     () => {
  //       this.router.navigateByUrl('/login');
  //       this.currentUser = undefined;
  //     },
  //     error => this.notificationService.showError(error)
  //   );
  // }
}
