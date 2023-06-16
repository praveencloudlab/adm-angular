import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {CartItem} from '../cart-item'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {


removeItem(cartId: number) {
  
  this.productService.removeFromCart(cartId).subscribe(resp=>{
    this._router.navigate(['/cart', Date.now()]);
  });

  
}

checkoutselectedItems() {
  const selectedItems = this.cartItems.filter((item,index) => this.selectedItems[index]);
  console.log(selectedItems);
  // code for sending the selected items to the server
  this.productService.checkout

}
  
  cartItems:CartItem[] = [];
   isAllSelected: boolean = false;
   selectedItems=Array(this.cartItems.length).fill(false)

   selectAll(){
    this.isAllSelected = !this.isAllSelected;
    this.selectedItems.fill(this.isAllSelected);// fill the selected items
    console.log(this.selectedItems);
    
   }

   selectItem(index:number){
    this.selectedItems[index]=!this.selectedItems[index]; // toggle selected
    this.isAllSelected = this.selectedItems.every(val=>val===true)
    console.log(this.selectedItems);
    
   }

   getSelectedItemsCount(){
    return this.cartItems.filter((item,index)=>this.selectedItems[index]).length
   }

   getSelectedItemsTotal(){
    return this.cartItems
          .filter((item,index)=>this.selectedItems[index])
          .reduce((total,item)=>total+(item.price*item.qty),0)
   }

  constructor(private productService:ProductService,private _router: Router){}
  itemPrice:any;
  product!:any;
  total=0
  recalculateTotal(){
    this.total=this.cartItems.reduce((sum,item)=>sum+(item.price*item.qty),0)
  }

  getPriceOfProduct(productId:number){
   
    
  }
  
  ngOnInit(): void {  
    this.productService.getCart(1).subscribe((data:any) =>{
      this.cartItems=data;
      this.selectedItems=Array(this.cartItems.length).fill(false);
      this.cartItems.forEach((item: any) =>{
       this.productService.getProduct(item.productId).subscribe((product:any)=>{
         // this.product=product;
         item.productTitle=product.productTitle;
         item.price= Number(product.price.price);
         this.recalculateTotal()
        //this.total+=item.price*item.qty;
          //console.log(this.product);
          
       })
      });
    })

   
  }

}
