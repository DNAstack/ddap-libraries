import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntityDescriptionComponent } from './entity-description/entity-description.component';
import { EntityDescriptionLinkComponent } from './entity-description/entity-description-link.component';
import { DeleteActionConfirmationDialogComponent } from './delete-action-confirmation-dialog/delete-action-confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SecretGeneratedDialogComponent } from './secret-generated-dialog/secret-generated-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from 'ngx-clipboard';
import { ConfigOptionEditDialogComponent } from './config-option-edit-dialog/config-option-edit-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EntityDescriptionComponent,
    EntityDescriptionLinkComponent,
    DeleteActionConfirmationDialogComponent,
    SecretGeneratedDialogComponent,
    ConfigOptionEditDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,

    ClipboardModule,
    ReactiveFormsModule,
  ],
  exports: [
    EntityDescriptionComponent,
    EntityDescriptionLinkComponent,
    DeleteActionConfirmationDialogComponent,
    SecretGeneratedDialogComponent,
    ConfigOptionEditDialogComponent,
  ]
})
export class DdapAdminModule { }
