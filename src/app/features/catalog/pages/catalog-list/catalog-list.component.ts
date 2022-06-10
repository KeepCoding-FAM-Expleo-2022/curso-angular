import { Component, OnInit } from '@angular/core';
import { Comic } from '@core/models/comic.model';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'cm-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
})
export class CatalogListComponent implements OnInit {
  comics: Comic[] = [];
  page: number = 1;
  totalPages: number = 1;
  actualFilters: { [term: string]: any } = {};
  limit: number = 20;

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {}

  search(search: { [term: string]: any }) {
    console.warn('Búsqueda', search);
    this.actualFilters = search;

  }

  changePage() {

    this.actualFilters = {
      ...this.actualFilters,
      offset: (this.page - 1) * this.limit, // 20 es el limit
    };
    this.search(this.actualFilters);
  }
}
