import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { PaginationType } from "./pagination-type.enum";


@Component({
  selector: 'ddaplib-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {

  @Input()
  length: number;
  @Input()
  pageSize = 25;
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

  changePage(pageEvent: PageEvent) {
    this.pageChange.emit(pageEvent);
  }

}
