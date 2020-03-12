import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ddaplib-menu-apps',
  templateUrl: './menu-apps.component.html',
  styleUrls: ['./menu-apps.component.scss']
})
export class MenuAppsComponent implements OnInit {

  @Input()
  accessibleApps: any;

  @Input()
  realmId: string;

  constructor() { }

  ngOnInit() {
  }

}
