import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {nameConstraintPattern} from "../../../admin/entity.model";
import {RealmChangeConfirmationDialogComponent} from "../realm-change-confirmation-dialog/realm-change-confirmation-dialog.component";
import {ActionType} from "../realm-change-confirmation-dialog/realm-change-confirmation-dialog.model";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {RealmEditDialogComponent} from "../realm-edit-dialog/realm-edit-dialog.component";

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
  @ViewChild("realmInput", {static: false}) realmField: ElementRef;
  isReadOnly: boolean = true;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.matIconRegistry.addSvgIcon(
      "more-vert",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/more-vert.svg")
    );
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

  openRealmEditDialog() {
    const dialogRef = this.dialog.open(RealmEditDialogComponent, {
      data: {
        realm: this.realm,
        updateRealm: this.onAcknowledge
      },
      minWidth: "10vw",
      minHeight: "10vh"
    });
    dialogRef.afterClosed().subscribe();
  }

  toggleReadonly() {
    this.isReadOnly = false;
    this.realmField.nativeElement.focus();
    this.realmField.nativeElement.select();
  }
}
