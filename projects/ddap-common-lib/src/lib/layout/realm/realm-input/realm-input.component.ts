import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { nameConstraintPattern } from '../../../admin/entity.model';
import { RealmEditDialogComponent } from '../realm-edit-dialog/realm-edit-dialog.component';
import { RealmActionConfirmationDialogComponent } from '../realm-action-confirmation-dialog/realm-action-confirmation-dialog.component';
import { RealmActionType } from '../realm-action-confirmation-dialog/realm-action-confirmation-dialog.model';

@Component({
  selector: 'ddaplib-realm-input',
  templateUrl: './realm-input.component.html',
  styleUrls: ['./realm-input.component.scss'],
})
export class RealmInputComponent implements OnInit {

  @Input()
  enabledActions?: RealmActionType[] = Object.values(RealmActionType);

  @Output()
  readonly actionAcknowledged: EventEmitter<object> = new EventEmitter<object>();

  form: FormGroup;
  readonly ActionType = RealmActionType;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.activatedRoute.root.firstChild.params.subscribe((params) => {
      this.form = this.formBuilder.group({
        realm: [params.realmId, [Validators.pattern(nameConstraintPattern)]],
      });
    });
  }

  openRealmActionConfirmationDialog(action: RealmActionType): void {
    if (this.form.invalid) {
      return;
    }

    const realm = this.form.get('realm').value;
    const dialogRef = this.dialog.open(RealmActionConfirmationDialogComponent, {
      data: {
        realm,
        action,
        onAcknowledge: this.actionAcknowledged,
      },
    });
    dialogRef.afterClosed().subscribe(acknowledged => {
      if (!acknowledged) {
        this.form.setValue({ realm });
      }
    });
  }

  openRealmEditDialog() {
    const realm = this.form.get('realm').value;
    this.dialog.open(RealmEditDialogComponent, {
      data: {
        realm,
        updateRealm: this.actionAcknowledged,
      },
      minWidth: '10vw',
      minHeight: '10vh',
    });
  }

}
