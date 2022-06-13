import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'cm-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input()
  page!: PageEvent;

  @Output()
  pageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @Input()
  limit: number = 20;

  @Input()
  totalElements: number = 0;

  constructor() {}

  ngOnInit(): void {}

  clickPage(page: PageEvent) {
    this.page = page;
    this.pageChange.emit(page);
  }
}
