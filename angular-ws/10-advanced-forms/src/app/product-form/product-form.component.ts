import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit{


   productForm!: FormGroup;
   constructor(private productService:ProductsService,private fb:FormBuilder){}
  
   handleSubmit() {
    console.log(this.productForm.value);
   }
   ngOnInit(): void {
    
    this.productForm = this.fb.group({
      product_id: [''],
      product_title: [''],
      description: [''],
      keywords: [''],
      rating: [0]
    });
    
  }

  



}
