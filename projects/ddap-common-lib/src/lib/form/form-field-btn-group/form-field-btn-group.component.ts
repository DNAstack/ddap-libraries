import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import {Observable} from "rxjs";

@Component({
  selector: 'ddaplib-form-field-btn-group',
  templateUrl: './form-field-btn-group.component.html',
  styleUrls: ['./form-field-btn-group.component.scss'],
})
export class FormFieldBtnGroupComponent {

  @Input()
  control: AbstractControl;
  @Input()
  fieldName: string;
  @Input()
  fieldTitle: string;
  @Input()
  index?: number;
  @Input()
  appearance?: MatFormFieldAppearance = 'outline';
  @Input()
  showAutocomplete? = false;
  @Input()
  autocompleteOptions?: Observable<string[]>;
  @Input()
  showCancelBtn? = false;
  @Input()
  allowInvalidInputs? = false;

  @Output()
  readonly doneButtonClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  readonly cancelButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  done(inputValue: string) {
    this.doneButtonClicked.emit(inputValue);
  }

  cancel() {
    this.cancelButtonClicked.emit();
  }

}
