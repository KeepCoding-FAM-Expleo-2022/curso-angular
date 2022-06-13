import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MenuElement } from '@core/interfaces/menu-element.interface';

@Component({
  selector: 'cm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  // Data binding entrada
  @Input()
  menuElements: MenuElement[] = [];

  // Data binding salida
  @Output()
  rightElementClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Two-way Data binding
  @Input()
  tema: string = 'claro';
  @Output()
  temaChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {}

  rightElementClick() {
    console.log('click');
    this.temaChange.emit('oscuro');
    this.rightElementClicked.emit(true);
  }
}
