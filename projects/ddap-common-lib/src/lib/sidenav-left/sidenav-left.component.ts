import { Component } from '@angular/core';
import { ViewControllerService } from '../view-controller/view-controller.service'
 
@Component({
  selector: 'app-sidenav-left',
  templateUrl: './sidenav-left.component.html'
})
export class SidenavLeftComponent {

  public viewController;

  constructor(
    viewController : ViewControllerService
  ) {

  }

  closeLeftSideNav() {
    this.viewController.closeLeftSideNav();
  }

}
