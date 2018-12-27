import {Component, OnInit, Input} from '@angular/core';
import {BaseComponent} from '../../classes/base-component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'posh-ip-list',
    templateUrl: './ip-list.component.html',
    styleUrls: ['./ip-list.component.scss']
})
export class IPListComponent extends BaseComponent {

    constructor(private route: ActivatedRoute,
                private router: Router) {
        super();
    }

    ngOnInit() {
    }

}
