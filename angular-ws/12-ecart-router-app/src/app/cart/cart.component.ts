import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
  constructor(private productService:ProductService){}
  cartItems:any;
  itemPrice:any;

  getPriceOfProduct(productId:number):any{
    //return this.productService.getProductPriceByProductId(1).subscribe(data =>this.itemPrice = data);

  }


  ngOnInit(): void {
    this.productService.getCart(1).subscribe(data =>this.cartItems = data)
  }

}
