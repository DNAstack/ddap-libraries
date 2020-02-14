import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'ddaplib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input()
  label: string;
  @Input()
  icon: string;
  @Input()
  backLink: string;

  constructor(
    private location: Location,
    ) {
  }

  back() {
    this.location.back();
  }
}
