import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFooterErrorComponent } from './form-footer-error/form-footer-error.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormFieldBtnGroupComponent } from './form-field-btn-group/form-field-btn-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
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
