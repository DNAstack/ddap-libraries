import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RealmChangeConfirmationDialogModel} from "./realm-change-confirmation-dialog.model";

@Component({
  selector: 'ddaplib-realm-change-confirmation-dialog',
  templateUrl: './realm-change-confirmation-dialog.component.html',
  styleUrls: ['./realm-change-confirmation-dialog.component.scss']
})
export class RealmChangeConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<RealmChangeConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: RealmChangeConfirmationDialogModel) {
    dialogRef.afterClosed().subscribe(acknowledged => {
      if(acknowledged) {
        data.onAcknowledge.emit({action: data.action, realm: data.realm})
      }
    })
  }

}
