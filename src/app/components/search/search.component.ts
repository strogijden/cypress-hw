import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // tslint:disable-next-line
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeHandler(searchText: string) {
    this.onChange.emit(searchText);
  }

}
