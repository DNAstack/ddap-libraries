import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ViewControllerService} from '../../view-controller/view-controller.service';
import {ModuleMetadata} from '../../view-controller/module-metadata.model';
import { RealmActionType } from '../realm/realm-action-confirmation-dialog/realm-action-confirmation-dialog.model';

@Component({
  selector: 'ddaplib-main-header', // FIXME: selector and file name is different
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input()
  siteName: string;
  @Input()
  realmActions: RealmActionType[];
  @Input()
  isSandbox = false;
  @Input()
  logoUrl: string;
  @Input()
  headerLink?: string;


  @Output()
  readonly realmActionConfirmed: EventEmitter<object> = new EventEmitter<object>();

  administrativeApps: ModuleMetadata[];

  constructor(public viewController: ViewControllerService) {}

  toggleLeftSideNav() {
    this.viewController.toggleLeftSidenav();
  }

  realmActionAcknowledged($event) {
    this.realmActionConfirmed.emit($event);
  }
}
