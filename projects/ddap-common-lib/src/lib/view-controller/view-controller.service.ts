import { Injectable } from "@angular/core";
import { AppService } from "../app/app.service";
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ViewControllerService {

  public appName : any;
  public view = {
    leftSidebarOpened: false
  }

  public apps : AppService[];
  public currentApp : AppService;
  public realm : string;

  constructor(
    private route: ActivatedRoute) {
    this.realm = this.route.root.firstChild.snapshot.params.realmId;
  }

  public closeLeftSidenav() {
    this.view.leftSidebarOpened = false;
  }

  public toggleLeftSidenav() {
    this.view.leftSidebarOpened = !this.view.leftSidebarOpened;
  }
}