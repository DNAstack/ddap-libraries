import {Injectable} from '@angular/core';
import {ModuleMetadata} from '../model/module-metadata.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewFilterInterface} from './view-filter.interface';
import {GroupMetadata} from './group-metadata.model';

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
  public expFlag: string = '';

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
    return this.appList.filter(module => module.isExperimental
      ? (this.isExperimentOn(module.expFlag) && module.isApp) : module.isApp );
  }

  getAccessibleApps(): ModuleMetadata[] {
    if (this.filters.length === 0) {
      return this.getAllApps();
    }
    return this.getAllApps().filter(module => {
      for (const viewFilter of this.filters) {
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
    this.groups.push(groupMetadata);
    return this;
  }

  setExperimentalFlag(expFlag) {
    this.expFlag = expFlag || '';
  }

  isExperimentOn(expFlag: string): boolean {
    return this.expFlag == expFlag;
  }

  getGroups(): GroupMetadata[] {
    return this.groups;
  }

  getCurrentApp(): ModuleMetadata {
    if (!this.route.root
      || !this.route.root.firstChild
      || !this.route.root.firstChild.firstChild) {
      return null;
    }
    const secondLevelPath = this.route.root.firstChild.firstChild.snapshot.routeConfig.path;
    for (const app of this.getAllApps()) {
      if (app.routerLink === secondLevelPath) {
        return app;
      }
    }
    return null;
  }

  /**
   * All submodules of a group
   * @param group
   */
  getGroupSubmodules(group: GroupMetadata): ModuleMetadata[] {
    return Object.values(this.appList).filter(module => module.isExperimental
                                                        ? (module.group === group.key && this.isExperimentOn(module.expFlag))
                                                        : module.group === group.key);
  }

  /**
   * All submodules of an app
   * @param currentApp
   */
  getAppSubmodules(currentApp: ModuleMetadata): ModuleMetadata[] {
    return currentApp
      ? Object.values(this.appList).filter(module => {
        return module.isExperimental
          ? (module.parentKey === currentApp.key) && this.isExperimentOn(module.expFlag)
          : module.parentKey === currentApp.key;
      })
      : [];
  }

  /**
   * Submodules that neither belong to an app nor to a group
   */
  getSubmodules(): ModuleMetadata[] {
    return Object.values(this.appList).filter(module => module.isExperimental
                                                        ? !module.group && !module.parentKey && !module.isApp && this.isExperimentOn(module.expFlag)
                                                        : !module.group && !module.parentKey && !module.isApp);
  }

  isMobile(): boolean {
    return this.isMobileWidth(window.innerWidth);
  }

  isMobileWidth(width: number): boolean {
    return width <= 760;
  }
}
