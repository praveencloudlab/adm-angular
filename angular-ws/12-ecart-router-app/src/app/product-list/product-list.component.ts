import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent implements OnInit {
  constructor(private _router: Router, private prodService: ProductService) { }
  products:any=[];
  ngOnInit() {
    //this.products = this.prodService.getProducts();
    this.prodService.getProducts().subscribe(data => this.products = data)
  }
}
