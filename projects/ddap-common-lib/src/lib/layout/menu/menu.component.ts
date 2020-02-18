import {Component, Input} from '@angular/core';
import {ViewControllerService} from '../../view-controller/view-controller.service';
import {ModuleMetadata} from '../../model/module-metadata.model';

@Component({
  selector: 'ddaplib-main-header',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input()
  siteName: string;

  public administrativeApps: ModuleMetadata[];

  constructor(public viewController: ViewControllerService) {}

  toggleLeftSideNav() {
    this.viewController.toggleLeftSidenav();
  }
}
