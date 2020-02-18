import { Component } from '@angular/core';
import { ViewControllerService } from '../../view-controller/view-controller.service'

@Component({
  selector: 'app-sidenav-left',
  templateUrl: './sidenav-left.component.html'
})
export class SidenavLeftComponent {

  constructor(
     public viewController : ViewControllerService
  ) {
  }

  toggleLeftSideNav() {
    this.viewController.toggleLeftSidenav();
  }

}
