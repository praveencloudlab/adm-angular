import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }

  private apiUrl='http://localhost:8080/api/products';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // product and its associations
   createProductAndAssociations(product:any,categoryId:number,brandId:number) {
    const productRequest=this.http.post(this.apiUrl,product,this.httpOptions);
    const categoryRequest=this.http.post(`this.apiUrl/category/${categoryId}`,categoryId,this.httpOptions);
    const brandRequest=this.http.post(`this.apiUrl/brand/${brandId}`,brandId,this.httpOptions);
    return forkJoin([productRequest,categoryRequest,brandRequest]);
    
  }



  //get all products
  getProducts() {
    return this.http.get(this.apiUrl);
  }

  //get product by id
  getProduct(id:number) {
    console.log(">>> service:: ID:: "+id);
    console.log(`${this.apiUrl}/${id}`);
    
    
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getProductPriceByProductId(productId:number) {
    return this.http.get(`${this.apiUrl}/price/${productId}`);
  }
  //create product
  createProduct(product:any) {
    return this.http.post(this.apiUrl, product,this.httpOptions);
  }
  //update product
  updateProduct(id:number, product:any) {
    console.log(">>>>> product:");
    console.log(product);
    
    
    return this.http.put(`${this.apiUrl}/${id}`, product,this.httpOptions);
  }
  //delete product
  deleteProduct(id:number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  //search product
  searchProduct(search:string) {
    return this.http.get(`${this.apiUrl}?search=${search}`);
  }
  //search product by category
  searchProductByCategory(category:string) {
    return this.http.get(`${this.apiUrl}?category=${category}`);
  }

  searchCategoryByProductId(id:number) {
    return this.http.get(`${this.apiUrl}/categories/product/${id}`);
  }

  //search product by brand
  searchProductByBrand(brand:string) {
    return this.http.get(`${this.apiUrl}?brand=${brand}`);
  }
  //search product by price
  searchProductByPrice(price:number) {
    return this.http.get(`${this.apiUrl}?price=${price}`);
  }
  //search product by rating
  searchProductByRating(rating:number) {
    return this.http.get(`${this.apiUrl}?rating=${rating}`);
  }

  //get all categories
  getCategories() {
    return this.http.get(`${this.apiUrl}/categories`);
  }
  //get all brands
  getBrands() {
    return this.http.get(`${this.apiUrl}/brands`);
  }



  // add to cart
  addToCart(productId:number,quantity:number,userId:number){
    return this.http.post(`${this.apiUrl}/cart/${productId}/${quantity}/${userId}`,null);
   
  }
  // remove from cart
  removeFromCart(id:number) {
    return this.http.delete(`${this.apiUrl}/cart/${id}`);
  }
  //get cart
  getCart(userId:number) {
    return this.http.get(`${this.apiUrl}/cart/${userId}`);
  }
  //get cart items
  getCartItems() {
    return this.http.get(`${this.apiUrl}/cart/items`);
  }
  getCartTotalCount(userId:number) {
    return this.http.get(`${this.apiUrl}/cart/count/${userId}`);
  }
  //update cart
  updateCart(id:number) {
    return this.http.put(`${this.apiUrl}/cart/${id}`,null);
  }
  //clear cart
  clearCart() {
    return this.http.delete(`${this.apiUrl}/cart`);
  }
  // implement checkout
  checkout(item:any, userId:number) {
    return this.http.post(`${this.apiUrl}/checkout/${userId}`,item);
  }

  //get checkout
  getCheckout() {
    return this.http.get(`${this.apiUrl}/checkout`);
  }
  //get checkout items
  getCheckoutItems() {
    return this.http.get(`${this.apiUrl}/checkout/items`);
  }
  //update checkout
  updateCheckout(id:number) {
    return this.http.put(`${this.apiUrl}/checkout/${id}`,null);
  }
  //clear checkout
  clearCheckout() {
    return this.http.delete(`${this.apiUrl}/checkout`);
  }
  //get cart total
  getCartTotal() {
    return this.http.get(`${this.apiUrl}/cart/total`);
  }
  //get checkout total
  getCheckoutTotal() {
    return this.http.get(`${this.apiUrl}/checkout/total`);
  }
  //update cart total
  updateCartTotal(total:number) {
    return this.http.put(`${this.apiUrl}/cart/total`,total);
  }
  //update checkout total
  updateCheckoutTotal(total:number) {
    return this.http.put(`${this.apiUrl}/checkout/total`,total);
  }
  
  
}
