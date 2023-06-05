import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = 'http://localhost:8080/api/products';

  constructor(private http:HttpClient) { }

  saveProduct(product: Product) {
  }

  listProducts()  {
    return this.http.get(this.baseUrl)
  }

  deleteProduct(id: number) {
  }

  updateProduct(product: Product) {
  }

  findProduct(id: number) {
  }



}
