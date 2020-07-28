import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DeleteActionConfirmationDialogModel } from './delete-action-confirmation-dialog.model';

@Component({
  selector: 'ddaplib-delete-action-confirmation-dialog',
  templateUrl: './delete-action-confirmation-dialog.component.html',
  styleUrls: ['./delete-action-confirmation-dialog.component.scss']
})
export class DeleteActionConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteActionConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DeleteActionConfirmationDialogModel) {
  }

}
