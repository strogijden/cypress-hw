import { Component, Input, OnInit } from '@angular/core';
import { Blueprint } from 'src/app/models/blueprint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent implements OnInit {
  @Input() product: Blueprint;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.router.navigate([`/list/${this.product.id}`], { state: this.product });
  }

  generateRandomNumber(min: number, max: number){
    return ((Math.random() * (max - min + 1)) + min).toFixed(2);
  }

}
