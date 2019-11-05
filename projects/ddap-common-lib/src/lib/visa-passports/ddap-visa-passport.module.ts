import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimGroupComponent } from './claim-group/claim-group.component';
import { MatIconModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [
    ClaimGroupComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    ClaimGroupComponent,
  ],
})
export class DdapVisaPassportModule { }
