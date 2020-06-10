import {Component, Input} from '@angular/core';

@Component({
  selector: 'ddaplib-menu-profile',
  templateUrl: './menu-profile.component.html',
  styleUrls: ['./menu-profile.component.scss']
})
export class MenuProfileComponent {

  @Input()
  showSignIn: boolean = false;
  @Input()
  loginPath?: string;

}
