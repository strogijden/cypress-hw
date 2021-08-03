import { Component, Input, OnInit } from '@angular/core';
import { Blueprint } from 'src/app/models/blueprint';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Array<Blueprint>;

  constructor() { }

  ngOnInit(): void {
  }

}
