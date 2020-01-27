import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {nameConstraintPattern} from "../../../admin/entity.model";
import {RealmChangeConfirmationDialogComponent} from "../realm-change-confirmation-dialog/realm-change-confirmation-dialog.component";
import {ActionType} from "../realm-change-confirmation-dialog/realm-change-confirmation-dialog.model";

@Component({
  selector: 'ddaplib-realm-input',
  templateUrl: './realm-input.component.html',
  styleUrls: ['./realm-input.component.scss']
})
export class RealmInputComponent implements OnInit {

  realm: string;
  form: FormGroup;

  @Input()
  actions: string[];
  @Output()
  onAcknowledge = new EventEmitter<object>();

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.root.firstChild.params.subscribe((params) => {
      this.realm = params.realmId;
      this.form = this.formBuilder.group({
        realm: [this.realm, [Validators.pattern(nameConstraintPattern)]],
      });
    });
  }

  openRealmChangeConfirmationDialog(action: ActionType): void {
    if (this.form.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(RealmChangeConfirmationDialogComponent, {
      data: { realm: this.form.get('realm').value, action, onAcknowledge: this.onAcknowledge },
    });
    dialogRef.afterClosed().subscribe(acknowledged => {
      if (!acknowledged) {
        this.form.setValue({ realm: this.realm });
      }
    });
  }

}
