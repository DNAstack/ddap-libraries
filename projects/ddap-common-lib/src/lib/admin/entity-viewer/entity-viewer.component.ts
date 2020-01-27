import {Component, Input, OnInit} from '@angular/core';
import _startcase from 'lodash.startcase';

@Component({
  selector: 'ddaplib-entity-viewer',
  templateUrl: './entity-viewer.component.html',
  styleUrls: ['./entity-viewer.component.scss']
})
export class EntityViewerComponent implements OnInit {

  constructor() { }

  @Input()
  listData;

  @Input()
  description;

  modifiedListData;

  ngOnInit() {
    this.modifiedListData = this.isArray(this.listData)
                            ? this.modifyArray(this.listData)
                            : this.modifyObj(this.listData);
  }

  objKeys(obj): string[] {
    return Object.keys(obj)
  }

  isArray(obj): boolean {
    return Array.isArray(obj)
  }

  isObject(obj: any): boolean {
    return !this.isArray(obj) && (typeof(obj) === 'object')
  }

  isString(value: any): boolean {
    return !this.isObject(value) && !this.isArray(value)
  }

  isLink(val: any) {
    try {
      new URL(val);
      return true;
    } catch (e) {
      return false
    }
  }

  public modifyObj(obj, updatedObj?) {
    let newObj = updatedObj || {},
        key: any,
        value: any;
    for([key, value] of Object.entries(obj)) {
      if(key === 'ui') {
        this.modifyObj(value, newObj)
      }
      else if(key !== 'label' && key !== 'description' && value.length > 0){
        newObj[key] = value
      }
    }
    return newObj;
  }

  private modifyArray(listData: string[]) {
    if(!this.isLink(listData[0])) {
      return [listData.join(', ')];
    }
    return listData;
  }

  formatVal(val: string) {
    return /^\w*$/.test(val) ? _startcase(val) : val;
  }
}
