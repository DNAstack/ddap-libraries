import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { MatFormFieldAppearance, MatTable } from '@angular/material';

@Component({
  selector: 'ddaplib-form-inline-editable-table',
  templateUrl: './form-inline-editable-table.component.html',
  styleUrls: ['./form-inline-editable-table.component.scss'],
})
export class FormInlineEditableTableComponent implements OnInit {

  get datasource(): FormArray {
    return this.form.get(this.arrayFieldName) as FormArray;
  }

  @ViewChild('dataTable', { static: true })
  dataTable: MatTable<any>;

  @Input()
  form: FormGroup;
  @Input()
  arrayFieldName: string;

  displayedColumns: string[] = ['value', 'moreActions'];
  currentlyEditing: number;

  ngOnInit(): void {
    this.datasource.valueChanges
      .subscribe((values: string[]) => {
        if (!values[0]) {
          this.currentlyEditing = 0;
        }
        this.dataTable.renderRows();
      });
  }

  removeRow(index: number): void {
    this.datasource.removeAt(index);
    this.currentlyEditing = null;
  }

}
