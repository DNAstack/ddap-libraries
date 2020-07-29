import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { SecretGeneratedDialogModel } from './secret-generated-dialog.model';

@Component({
  selector: 'ddaplib-secret-generated-dialog',
  templateUrl: './secret-generated-dialog.component.html',
  styleUrls: ['./secret-generated-dialog.component.scss']
})
export class SecretGeneratedDialogComponent {

  constructor(public dialogRef: MatDialogRef<SecretGeneratedDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: SecretGeneratedDialogModel) {
  }

}
