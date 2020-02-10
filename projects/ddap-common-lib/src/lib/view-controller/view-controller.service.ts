import { Injectable } from "@angular/core";
import { AppService } from "../app/app.service";

@Injectable()
export class ViewControllerService {

  public appName : any;
  public view = {
    leftSidebarOpened: false
  }
  public currentApp : AppService;

  constructor() {
  }

  closeLeftSidenav() {
    this.view.leftSidebarOpened = false;
  }

  toggleLeftSidenav() {
    this.view.leftSidebarOpened = !this.view.leftSidebarOpened;
  }
}