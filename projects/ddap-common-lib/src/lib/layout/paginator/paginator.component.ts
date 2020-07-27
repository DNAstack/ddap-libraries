import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PageEvent } from "@angular/material/paginator";
import { PaginationType } from "./pagination-type.enum";
import { FormControl } from '@angular/forms';


@Component({
  selector: 'ddaplib-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnChanges {

  @Input()
  length: number;
  @Input()
  pageSize: number | string = 25;
  @Input()
  pageSizeOptions: number[] = [10, 25, 50, 100];
  @Input()
  showFirstLastButtons = false;
  @Input()
  hidePageSize = false;
  @Input()
  paginationType: string = PaginationType.bidirectional;

  @Output()
  readonly pageChange = new EventEmitter<PageEvent>();

  readonly PaginationType = PaginationType;
  pageSizeControl: FormControl = new FormControl(this.pageSize);

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.pageSize || this.paginationType !== PaginationType.unidirectional) {
      return;
    }
    if (typeof this.pageSize === 'string') {
      this.pageSizeControl.setValue(parseInt(this.pageSize, 10));
    } else {
      this.pageSizeControl.setValue(this.pageSize);
    }
  }

  changePage(pageEvent: PageEvent | any) {
    this.pageChange.emit(pageEvent);
  }

}
