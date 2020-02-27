import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ddaplib-menu-profile',
  templateUrl: './menu-profile.component.html',
  styleUrls: ['./menu-profile.component.scss']
})
export class MenuProfileComponent implements OnInit {

  @Input()
  account?;

  constructor() { }

  ngOnInit() {
  }

}
