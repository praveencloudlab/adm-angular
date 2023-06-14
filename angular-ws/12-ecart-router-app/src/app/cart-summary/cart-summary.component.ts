import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styles: [
  ]
})
export class CartSummaryComponent implements OnInit {
  constructor(private productService: ProductService){}
  totalItems: any=0
  ngOnInit(): void {
    this.productService.getCartTotalCount(1).subscribe(data=>this.totalItems=data);
  }

}
