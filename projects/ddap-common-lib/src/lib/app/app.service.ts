export class AppService {
  name: string;
  appRoute: ButtonRoute;
  sectionRoutes: ButtonRoute[];

  constructor(name:string, appRoute:ButtonRoute, sectionRoutes:ButtonRoute[]) {
    this.name = name;
    this.appRoute = appRoute;
    this.sectionRoutes = sectionRoutes;
  }
}

export class ButtonRoute {
  icon : string;
  label : string;
  routerLink : string;

  constructor(icon:string, label:string, routerLink:string) {
    this.icon = icon;
    this.label = label;
    this.routerLink = routerLink;
  }
}