import {Component, Input, OnInit} from '@angular/core';
import {EntityViewerComponent} from "../entity-viewer/entity-viewer.component";

@Component({
  selector: 'ddaplib-access-policies',
  templateUrl: './access-policies.component.html',
  styleUrls: ['./access-policies.component.scss']
})
export class AccessPoliciesComponent extends EntityViewerComponent implements OnInit {

  constructor() {
    super();
  }

  @Input()
  listData;
  variableDefinitions: any;
  policyData: object[] = [];

  ngOnInit() {
    this.modifyObject(this.listData);
  }

  private modifyObject(listData: any) {
    this.policyData = listData['anyOf'];
    this.variableDefinitions = listData['variableDefinitions'];
  }

  showRightColumn(uiData: any, variableDefinitions: any) {
    let key, value;
    for([key, value] of Object.entries(uiData)) {
      if(key !== 'label' && key !== 'description' && value.length > 0) {
        return true;
      }
    }
    return !!variableDefinitions;
  }

  removePrefix(value: any) {
    return value.replace(/(const:|pattern:|split_pattern:)/, '');
  }
}
