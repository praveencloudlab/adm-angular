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
  constructor(private productService:ProductService){
    
   
    
  }
  cartItems:any
  itemPrice:any;
  product!:any;
  total=0

  getPriceOfProduct(productId:number){
   
    
  }
  


  ngOnInit(): void {  
    this.productService.getCart(1).subscribe(data =>{
      this.cartItems=data;
      this.cartItems.forEach((item: any) =>{
        console.log("test");
        
       this.productService.getProduct(item.productId).subscribe((product:any)=>{
         // this.product=product;
         item.productTitle=product.productTitle;
         item.price=product.price.price;
        this.total=this.total+product.price.price*item.qty;
          console.log(this.product);
          
       })
      });
    })

   
  }

}
