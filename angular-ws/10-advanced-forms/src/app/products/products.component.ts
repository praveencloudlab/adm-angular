import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
  products:any
  constructor(private prodService:ProductsService) {}

  ngOnInit(): void {
    this.prodService.listProducts().subscribe(response =>this.products = response);
  }
  renderProducts(){

    console.log(this.products);
    
  }


}
