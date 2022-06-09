import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cm-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    name: new FormControl<string | null>(null, [Validators.minLength(4)]),
    year: new FormControl<number | null>(null, [
      Validators.min(1900),
      Validators.max(2022),
    ]),
  });
  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.searchForm.controls);
  }
}