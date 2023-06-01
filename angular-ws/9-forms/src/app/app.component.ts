import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  prodForm!: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder,private http: HttpClient){} //2
  ngOnInit(): void { // 3
    this.prodForm = this.fb.group(
      {
       name:['',[Validators.required]],
       price:new FormControl('',[Validators.required]),
       description:new FormControl()
      });
  }

  fc(): { [key: string]: AbstractControl | null } {
    return this.prodForm.controls;
  }
  

  fetchLatestId():Observable<any>{
    return this.http.get('http://localhost:3000/products')
  }
  
  handleSubmit() { // 5
    this.isSubmitted = true;
    if(this.prodForm.valid){
     this.fetchLatestId().subscribe(product => {
      const prod={id:(product.id)+1,...this.prodForm.value};
      this.http.post('http://localhost:3000/products',prod)
      .subscribe(response => {
        console.log(response);
      });
     });
    }
  }
    
     //product={...product,this.prodForm.value}
   
    
      
  




}
