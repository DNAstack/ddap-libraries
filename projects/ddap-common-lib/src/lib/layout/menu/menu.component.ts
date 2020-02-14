import { Component, Input } from '@angular/core';
import { ViewControllerService } from '../../view-controller/view-controller.service';
import { AppService } from '../../app/app.service';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() appname: string; 
  @Input() sitename : string;

  public manageApp : AppService;

  constructor(
    public viewController : ViewControllerService
  ) {
  }

  selectApp(app) {
    this.viewController.currentApp = app;
  }

  toggleLeftSideNav() {
    this.viewController.toggleLeftSidenav();
  }
}