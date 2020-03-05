import {Component, Input} from '@angular/core';
import { ViewControllerService } from '../../view-controller/view-controller.service';

@Component({
  selector: 'app-sidenav-left',
  templateUrl: './sidenav-left.component.html',
  styleUrls: ['./sidenav-left.component.scss'],
})
export class SidenavLeftComponent {

  @Input()
  appTitle: string;

  @Input()
  sideNavCollapsible = true;

  constructor(public viewController: ViewControllerService) {
  }

  toggleLeftSideNav() {
    this.viewController.toggleLeftSidenav();
  }

}
