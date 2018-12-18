import {OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

export class BaseComponent implements OnInit, OnDestroy {
  protected subscriptions: Subscription[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => {
      x.unsubscribe();
    });
    this.prepareGC();
  }

  /**
   * performance function to track every record on *ngFor loops
   */
  public trackByFn(index, item) {
    return index;
  }

  /**
   * this sets to undefined any dom element, the gargabe collector will clean this
   */
  private prepareGC() {
    let componentInstance = this;
    componentInstance = undefined;
  }
}
