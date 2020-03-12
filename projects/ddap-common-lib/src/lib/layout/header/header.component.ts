import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ddaplib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input()
  label: string;
  @Input()
  iconName?: string;
  @Input()
  backLink: string;
  @Input()
  iconClass?: string;

  constructor(private location: Location) {
  }

  back() {
    this.location.back();
  }

}
