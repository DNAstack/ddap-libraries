import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFooterErrorComponent } from './form-footer-error/form-footer-error.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormFieldBtnGroupComponent } from './form-field-btn-group/form-field-btn-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule, MatMenuModule, MatTableModule } from '@angular/material';
import { FormInlineEditableTableComponent } from './form-inline-editable-table/form-inline-editable-table.component';

@NgModule({
  declarations: [
    FormFooterErrorComponent,
    FormFieldBtnGroupComponent,
    FormInlineEditableTableComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    FormFooterErrorComponent,
    FormFieldBtnGroupComponent,
    FormInlineEditableTableComponent,
  ]
})
export class DdapFormModule { }
