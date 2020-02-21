import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {nameConstraintPattern} from "../../../admin/entity.model";

@Component({
  selector: 'ddaplib-realm-edit-dialog',
  templateUrl: './realm-edit-dialog.component.html',
  styleUrls: ['./realm-edit-dialog.component.scss']
})
export class RealmEditDialogComponent implements OnInit{

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<RealmEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      realm: [this.data.realm, [Validators.pattern(nameConstraintPattern)]]
    })
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    console.log("realm edit dialog save");
    if(this.form.valid) {
      this.dialogRef.close();
      this.data.updateRealm.emit({action: 'edit', realm: this.form.get('realm').value});
    }
  }

}
