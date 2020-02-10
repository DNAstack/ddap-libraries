import { Component, Input } from '@angular/core';
import { ViewControllerService } from '../view-controller/view-controller.service'
 
@Component({
  selector: 'app-sidenav-left',
  templateUrl: './sidenav-left.component.html'
})
export class SidenavLeftComponent {

  public viewController : ViewControllerService;

  constructor(
     viewController : ViewControllerService
  ) {
    this.viewController = viewController;
  }

  closeLeftSideNav() {
    this.viewController.closeLeftSidenav();
  }

}
