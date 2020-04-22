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

  @Input()
  isAdmin?: boolean;

  constructor(public viewController: ViewControllerService) {
  }

  toggleLeftSideNav() {
    this.viewController.toggleLeftSidenav();
  }

  // In IC Admin some modules are visible to non-admin users
  showNonAdminModules(isNonAdminModule) {
    if (typeof isNonAdminModule === "boolean") {
      return this.isAdmin ? true : isNonAdminModule;
    }
    return true;
  }

}
