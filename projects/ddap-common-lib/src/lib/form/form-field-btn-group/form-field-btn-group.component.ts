import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material';

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
  index?: number;
  @Input()
  appearance: MatFormFieldAppearance = 'outline';

  @Output()
  readonly doneButtonClicked: EventEmitter<void> = new EventEmitter<void>();

}