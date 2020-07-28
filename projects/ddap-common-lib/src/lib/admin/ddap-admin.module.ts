import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntityDescriptionComponent } from './entity-description/entity-description.component';
import { EntityDescriptionLinkComponent } from './entity-description/entity-description-link.component';
import { DeleteActionConfirmationDialogComponent } from './delete-action-confirmation-dialog/delete-action-confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    EntityDescriptionComponent,
    EntityDescriptionLinkComponent,
    DeleteActionConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    EntityDescriptionComponent,
    EntityDescriptionLinkComponent,
    DeleteActionConfirmationDialogComponent,
  ]
})
export class DdapAdminModule { }
