import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Comic } from '@core/models/comic.model';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'cm-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
})
export class CatalogListComponent implements OnInit {
  comics: Comic[] = [];
  page: PageEvent = new PageEvent();
  actualFilters: { [term: string]: any } = {};
  limit: number = 20;

  constructor(public catalogService: CatalogService) {}

  ngOnInit(): void {
    this.catalogService.comics$.subscribe((comics) => {
      if (comics) {
        this.comics = comics;
      }
    });
    this.catalogService.pagination$.subscribe((pagination) => {
      this.page.pageIndex = pagination.page;
      this.page.length = pagination.total;
      this.page.pageSize = pagination.limit;
    });
  }

  search(search: { [term: string]: any }) {
    this.actualFilters = search;
    this.catalogService.searchComic(this.actualFilters);
  }

  changePage() {
    this.actualFilters = {
      ...this.actualFilters,
      offset: (this.page.pageIndex) * this.page.pageSize, // 20 es el limit
    };
    this.search(this.actualFilters);
  }
}
