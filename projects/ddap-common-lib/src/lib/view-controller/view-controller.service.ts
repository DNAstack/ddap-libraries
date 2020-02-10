import { Injectable } from "@angular/core";
import { AppService } from "../app/app.service";

@Injectable()
export class ViewControllerService {

  public appName : any;
  public view = {
    leftSidebarOpened: false
  }

  public apps : AppService[];
  public currentApp : AppService;

  constructor() {
  }

  public closeLeftSidenav() {
    this.view.leftSidebarOpened = false;
  }

  public toggleLeftSidenav() {
    this.view.leftSidebarOpened = !this.view.leftSidebarOpened;
  }
}