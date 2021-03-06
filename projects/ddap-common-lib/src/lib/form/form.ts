import { AbstractControl, FormGroup } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';

export interface Form {
  getAllForms(): FormGroup[];
  isValid(): boolean;
}

export function combineForms(...forms: Form[]): Form {
  return new class implements Form {
    getAllForms(): FormGroup[] {
      return forms.map(f => f.getAllForms())
        .reduce((prev, cur) => cur.concat(prev));
    }

    isValid(): boolean {
      return forms.map(f => f.isValid())
        .reduce((prev, cur) => prev && cur);
    }
  };
}

export function removeInternalFields(model: { [ key: string]: string }, fieldsToRemove: string[]): { [ key: string]: string } {
  Object.values(model)
    .forEach((value: any) => {
      Object.entries(value)
        .forEach(([innerKey, innerValue]: any) => {
          if (innerValue instanceof Object) {
            return removeInternalFields(innerValue, fieldsToRemove);
          }
          if (fieldsToRemove.some((fieldToRemove) => fieldToRemove === innerKey)) {
            delete value[innerKey];
          }
        });
    });
  return model;
}

export function alignControlsWithModelDefinitions(formGroups: FormGroup[]): void {
  formGroups.forEach((formGroup) => {
    Object.entries(formGroup.controls)
      .forEach(([currentControlId, control]: any) => {
        const { id: newControlId } = control.value;
        changeControlId(formGroup, currentControlId, newControlId);
      });
  });
}

function changeControlId(formGroup: FormGroup, currentId, newId): void {
  if (currentId !== newId) {
    formGroup.addControl(newId, formGroup.get(currentId));
    formGroup.removeControl(currentId);
  }
}

export function isExpanded(control: AbstractControl, expansionPanel: MatExpansionPanel): boolean {
  if (expansionPanel.expanded) {
    return true;
  }
  if (control.invalid) {
    return true;
  }
  return expansionPanel.expanded;
}

export default Form;
