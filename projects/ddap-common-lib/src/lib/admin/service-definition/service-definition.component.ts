import {Component, Input, OnInit} from '@angular/core';
import _startcase from 'lodash.startcase';
import {EntityViewerComponent} from "../entity-viewer/entity-viewer.component";

@Component({
  selector: 'ddaplib-service-definition',
  templateUrl: './service-definition.component.html',
  styleUrls: ['./service-definition.component.scss']
})
export class ServiceDefinitionComponent extends EntityViewerComponent implements OnInit {

  constructor() {
    super();
  }

  @Input()
  listData;

  @Input()
  description;

  modifiedData = {};
  rolesData = {};
  interfaceData = {};
  ngOnInit() {
    this.modifyObject();
  }

  private modifyObject() {
    for(let[key, value] of Object.entries(this.listData)) {
      if(typeof value !== 'object') {
        this.modifiedData[key] = value;
      } else {
        this.updateObj(key, value);
      }
    }
  }

  private updateObj(key: string, value: any) {
    if(key==='roles') {
      this.rolesData = this.getUi(value);
    }
    if(key === 'interfaces') {
      this.interfaceData = value;
    }
  }

  formatVal(val: string) {
    return /^\w*$/.test(val) ? _startcase(val) : val;
  }

  getUi(roles: any): object {
    const obj = {};
    for(let[role, roleData] of Object.entries(roles)) {
      for(let[key, val] of Object.entries(roleData)){
        if(key === 'ui') {
          obj[role] = val['label'] + ', ' + val['description'];
        }
      }
    }
    return obj;
  }
}
