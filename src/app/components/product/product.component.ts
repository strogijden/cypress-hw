import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blueprint } from 'src/app/models/blueprint';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Blueprint;

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('productId');

    if (productId) {
      this.productService.getProductById(productId).subscribe(d => {
        this.product = d;
      });
    }
  }

  generateRandomNumber(min: number, max: number){
    return ((Math.random() * (max - min + 1)) + min).toFixed(2);
  }
}
