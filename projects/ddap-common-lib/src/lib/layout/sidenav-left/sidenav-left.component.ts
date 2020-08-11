import {Component, Input} from '@angular/core';
import { ViewControllerService } from '../../view-controller/view-controller.service';
import {Router} from '@angular/router';
import {GroupMetadata} from '../../view-controller/group-metadata.model';

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

  constructor(public viewController: ViewControllerService, private router: Router) {
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

  shouldExpandPanel(group: GroupMetadata) {
    for (const submodule of this.viewController.getGroupSubmodules(group)) {
      if (this.router.url.includes(submodule.routerLink)) {
        return true;
      }
    }
    return false;
  }
}
