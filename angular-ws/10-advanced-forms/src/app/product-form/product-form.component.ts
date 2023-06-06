import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit{
  categoryId='';
  brands:any
getCategoryId(categoryId: any) {
  this.categoryId = categoryId.target.value;
  console.log(this.categoryId);
  this.productService.getBrandsBycategoryId(this.categoryId).subscribe(data=>{
    this.brands = data;
 // Check if productForm is defined before trying to call get() on it
 if (this.productForm) {
  this.productForm.get('brandTitle')?.setValue('');
}
  });
}

  categories:any;
   productForm: FormGroup;
   constructor(private productService:ProductsService,private fb:FormBuilder){
    this.productForm = this.fb.group({
      product_id: [''],
      product_title: [''],
      description: [''],
      keywords: [''],
      rating: [0],
      categoryTitle: [''],
      brandTitle: [''],
      price: [0],
      stock: [0]
  
    });
   }
  
   handleSubmit() {
    console.log(this.productForm.value);
    return null;
    if(this.productForm.valid){
      const product:Product = this.productForm.value
      this.productService.saveProduct(product).subscribe(response=>{
        console.log(response);
        
      }, err => {console.log(err)})

    }else{
      console.log('form is not valid');
      
    }

    
   }
   ngOnInit(): void {
    this.productService.getCategories().subscribe(data => this.categories=data);
      
   
    
  }

  



}
