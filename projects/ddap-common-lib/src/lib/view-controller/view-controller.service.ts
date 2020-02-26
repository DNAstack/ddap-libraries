import {Injectable} from "@angular/core";
import {ModuleMetadata} from "../model/module-metadata.model";
import {ActivatedRoute, Router} from '@angular/router';
import {ViewFilterInterface} from "./view-filter.interface";
import {GroupMetadata} from "./group-metadata.model";

@Injectable({
  providedIn: 'root',
})
export class ViewControllerService {
  public view = {
    leftSidebarOpened: true // TODO replace with uiSidebarEnabled* (to be considered)
  };

  private appList: ModuleMetadata[] = [];
  public realm: string; // FIXME
  private filters: ViewFilterInterface[] = [];
  private groups: GroupMetadata[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.realm = this.route.root.firstChild.snapshot.params.realmId;
  }

  public closeLeftSidenav() {
    this.view.leftSidebarOpened = false;
  }

  public toggleLeftSidenav() {
    this.view.leftSidebarOpened = !this.view.leftSidebarOpened;
  }

  getRealmId(): string {
    return this.route.root.firstChild.snapshot.params.realmId;
  }

  getAllApps(): ModuleMetadata[] {
    return this.appList.filter(module => module.isApp);
  }

  getAccessibleApps(): ModuleMetadata[] {
    if (this.filters.length === 0) {
      return this.getAllApps();
    }
    return this.getAllApps().filter(module => {
      for (let viewFilter of this.filters) {
        if (viewFilter.isVisible(module)) {
          return true;
        }
      }
      return false;
    });
  }

  registerModule(metadata: ModuleMetadata) {
    this.appList.push(metadata);
    return this;
  }

  addFilter(filter: ViewFilterInterface) {
    this.filters.push(filter);
    return this;
  }

  registerGroup(groupMetadata: GroupMetadata) {
    this.groups.push(groupMetadata)
    return this;
  }

  getGroups(): GroupMetadata[] {
    return this.groups;
  }

  getGroupSubmodules(group : GroupMetadata): ModuleMetadata[] {
    return Object.values(this.appList).filter(module => module.group === group.key)
  }
  getCurrentApp(): ModuleMetadata {
    // if (!this.route.root
    //   || !this.route.root.firstChild
    //   || !this.route.root.firstChild.firstChild) {
    //   return null;
    // }
    // const secondLevelPath = this.route.root.firstChild.firstChild.snapshot.routeConfig.path;
    const currentUrl = this.router.url;
    for (let app of this.getAllApps()) {
      if (currentUrl.indexOf(app.routerLink) !== -1) {
        return app;
      }
    }
    return null;
  }

  getSubModuleList(currentApp: ModuleMetadata): ModuleMetadata[] {
    return currentApp
      ? Object.values(this.appList).filter(module => module.parentKey === currentApp.key)
      : [];
  }
}
