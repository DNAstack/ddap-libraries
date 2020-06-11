import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { RealmActionConfirmationDialogModel, RealmActionType } from './realm-action-confirmation-dialog.model';

@Component({
  selector: 'ddaplib-realm-action-confirmation-dialog',
  templateUrl: './realm-action-confirmation-dialog.component.html',
  styleUrls: ['./realm-action-confirmation-dialog.component.scss']
})
export class RealmActionConfirmationDialogComponent {

  readonly ActionType = RealmActionType;

  constructor(public dialogRef: MatDialogRef<RealmActionConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: RealmActionConfirmationDialogModel) {
    dialogRef.afterClosed().subscribe(acknowledged => {
      if (acknowledged) {
        data.onAcknowledge.emit({
          action: data.action,
          realm: data.realm
        });
      }
    });
  }

}
