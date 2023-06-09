import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styles: [
  ]
})
export class ProductformComponent implements OnInit {


  productForm!: FormGroup;
  categories:any
  selectedCategory:any
  brands:any
  

  handleCategoryChange() {
    const selectedCategoryId = Number(this.productForm.get('categoryId')?.value);      
    this.selectedCategory=this.categories.find((category:any) => category.categoryId === selectedCategoryId);    
    if(this.selectedCategory) {
      this.brands=this.selectedCategory.brands;
    }  
  }
  

  handleSubmit(){

    const selectedbrandId = Number(this.productForm.get('brandId')?.value);    
    console.log(selectedbrandId);

    console.log(this.productForm.value);

    // save product

    this.prodService.createProduct(this.productForm.value).subscribe(res=>console.log(res));
    



    
  }

  productId!:number;
  constructor(private fb:FormBuilder,private prodService:ProductService,private route: ActivatedRoute) {
    this.prodService.getCategories().subscribe(data =>this.categories = data);
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
        categoryId:[''],
        brandId:['']
      },
      );
    
  }


  product={}
  category={}
  ngOnInit(): void {
    this.productId=Number(this.route.snapshot.paramMap.get('id'));
    console.log(">> ID: "+this.productId);
    if(this.productId!=0) {

      this.prodService.getProduct(this.productId).subscribe((product)=>{
        console.log(product);
        this.productForm.patchValue(product);
      })
        //this.productForm.patchValue(product);
    }
    
    
  }



}
