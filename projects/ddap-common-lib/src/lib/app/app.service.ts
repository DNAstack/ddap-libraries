export interface AppService {
  name: string;
  appRoute: ButtonRoute;
  sectionRoutes: ButtonRoute[];
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