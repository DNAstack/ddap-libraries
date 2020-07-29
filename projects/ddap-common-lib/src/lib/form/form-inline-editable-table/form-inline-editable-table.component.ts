import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'ddaplib-form-inline-editable-table',
  templateUrl: './form-inline-editable-table.component.html',
  styleUrls: ['./form-inline-editable-table.component.scss'],
})
export class FormInlineEditableTableComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  get datasource(): FormArray {
    return this.form.get(this.arrayFieldName) as FormArray;
  }

  @ViewChild('dataTable', { static: true })
  dataTable: MatTable<any>;

  @Input()
  form: FormGroup;
  @Input()
  arrayFieldName: string;
  @Input()
  fieldTitle: string;

  displayedColumns: string[] = ['value', 'moreActions'];
  currentlyEditing: number;

  ngOnInit(): void {
    this.datasource.insert(0, this.formBuilder.control(''));
    this.datasource.valueChanges
      .subscribe(() => this.dataTable.renderRows());
  }

  removeRow(index: number): void {
    this.datasource.removeAt(index);
    this.currentlyEditing = null;
  }

  addEmptyRow() {
    const firstControl = this.datasource.controls[0];
    if (!firstControl || firstControl.value) {
      this.datasource.insert(0, this.formBuilder.control(''));
    }
    this.dataTable.renderRows();
    this.currentlyEditing = 0;
  }
}
