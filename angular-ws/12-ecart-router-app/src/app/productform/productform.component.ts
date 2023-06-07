import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styles: [
  ]
})
export class ProductformComponent {

  productForm!: FormGroup;

  handleSubmit(){
    console.log(this.productForm.value);
    
  }

  constructor(private fb:FormBuilder,private prodService:ProductService) {
    this.productForm = this.fb.group(
      {
        productTitle:[''],
        description:[''],
        keywords:[''],
        rating:[0],
        stock:this.fb.group({
          stock:[0]
        }),
        price:this.fb.group({
          price:[0.0]
        }),
      },
      );
    
  }



}
