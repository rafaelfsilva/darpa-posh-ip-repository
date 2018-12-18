import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from 'src/app/classes/base-component';

@Component({
  selector: 'posh-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent extends BaseComponent {
  constructor() {
    super();
  }

  ngOnInit() {
  }
}
