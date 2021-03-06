import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import {Observable} from "rxjs";

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
  @Input()
  showAutocomplete? = false;
  @Input()
  autocompleteOptions?: Observable<string[]>;
  @Input()
  linkable = false;
  @Input()
  linkPrefix?: string;
  @Input()
  editable? = true;

  readonly displayedColumns: string[] = ['value', 'moreActions'];
  currentlyEditing: number;
  newValueInputControl: FormControl = new FormControl();

  ngOnInit(): void {
    this.datasource.valueChanges
      .subscribe(() => this.dataTable.renderRows());
  }

  removeRow(index: number): void {
    this.datasource.removeAt(index);
    this.currentlyEditing = null;
  }

  addRow(value: string): void {
    this.datasource.insert(0, this.formBuilder.control(value));
    this.newValueInputControl.reset();
  }

}
