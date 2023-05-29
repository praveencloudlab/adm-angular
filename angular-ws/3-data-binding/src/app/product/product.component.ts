import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <h2>Product Component</h2>
    <button (click)='f1()'>click me</button> <br/>
    <input type="text"  (keyup)="f2($event)"/>
    <h2>{{data}}

    <hr/>

    <input type="text" [(ngModel)]='s2'/>

    <h2>{{s2}} <h2>


  `,

})
export class ProductComponent {


  s2:string=''
  data:string=''

  f2(s1: any) {
      //console.log(s1.target.value);
      this.data=s1.target.value;  
  }
 f1(){
  console.log('Hello World');
 }

}
