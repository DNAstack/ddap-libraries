import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  @Input()
  realmActions: string[];

  @Input()
  isSandbox: boolean = false;

  @Output()
  realmChangeAcknowledge: EventEmitter<object> = new EventEmitter<object>();

  public administrativeApps: ModuleMetadata[];

  constructor(public viewController: ViewControllerService) {}

  toggleLeftSideNav() {
    this.viewController.toggleLeftSidenav();
  }

  onRealmChangeAcknowledge($event) {
    this.realmChangeAcknowledge.emit($event);
  }
}
