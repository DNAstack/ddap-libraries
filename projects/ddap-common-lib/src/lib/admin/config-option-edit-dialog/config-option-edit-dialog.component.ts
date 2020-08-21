import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ConfigOptionEditDialogModel } from './config-option-edit-dialog.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ddaplib-config-option-edit-dialog',
  templateUrl: './config-option-edit-dialog.component.html',
  styleUrls: ['./config-option-edit-dialog.component.scss']
})
export class ConfigOptionEditDialogComponent {

  valueControl: FormControl = new FormControl(this.data.value);

  constructor(public dialogRef: MatDialogRef<ConfigOptionEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ConfigOptionEditDialogModel) {
  }

}
