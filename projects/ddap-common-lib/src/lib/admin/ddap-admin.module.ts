import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntityDescriptionComponent } from './entity-description/entity-description.component';
import { EntityDescriptionLinkComponent } from './entity-description/entity-description-link.component';

@NgModule({
  declarations: [
    EntityDescriptionComponent,
    EntityDescriptionLinkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    EntityDescriptionComponent,
    EntityDescriptionLinkComponent,
  ]
})
export class DdapAdminModule { }
