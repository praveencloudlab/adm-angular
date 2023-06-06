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

  getCategories(){
    console.log(this.baseUrl+"/categories");
    return this.http.get(this.baseUrl+"/categories");
  }

  getBrandsBycategoryId(categoryId:any){
    console.log(this.baseUrl+`/categories/${categoryId}`);
    
    return this.http.get(this.baseUrl+`/categories/${categoryId}`)
  }

  saveProduct(product: Product) {
    return this.http.post(this.baseUrl, product);
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
