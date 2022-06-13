import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CreatorsPipe } from './pipes/creators.pipe';
import { CursorChangeDirective } from './directives/cursor-change.directive';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    LoaderComponent,
    PaginationComponent,
    CreatorsPipe,
    CursorChangeDirective,
  ],
  imports: [CommonModule, CoreModule],
  exports: [
    LoaderComponent,
    PaginationComponent,
    CreatorsPipe,
    CursorChangeDirective,
  ],
})
export class SharedModule {}
