import { Component, OnInit } from '@angular/core';
import { Blueprint } from 'src/app/models/blueprint';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: Array<Blueprint>;
  originalProducts: Array<Blueprint>;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((d) => {
      this.originalProducts = d;
      this.products = d;
    });
  }

  onChange(searchText: string) {
    this.products = this.originalProducts.filter((p: Blueprint) => {
      return p.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
    });

  }
}
