import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  template: `
  <div>
      <h1>GreetComponent</h1>
      <input type="checkbox" (change)=f1($event)>Are you Married? <br/>
      <div *ngIf="isLoggedIn">
         Number of Children <input type="number"/>
      </div>

      <hr/>

      <ul>
          <li *ngFor="let num of arr1">{{num}} </li>
      </ul>

      <select>
        <option *ngFor="let fruit of arr3">
          {{fruit}}
        </option>
      </select>
      <hr/>
      <div *ngFor="let fruit of arr3">
      <input type="checkbox"/> {{fruit}}
      </div>

      <hr/>
      <div *ngFor="let imagePath of images">
      
      <img src="{{imagePath}}">
      </div>


  </div>
  `
})
export class GreetComponent {

  isLoggedIn = false;

   f1(e1:any) {
      console.log(e1.target.checked);
      this.isLoggedIn = e1.target.checked;
  }
   arr1=[10,20,30,40,50,60,70,80,90,100];
   arr2:any = [10,20,30,40,50,60,70,80,90];
   arr3:string[] = ["apple", "orange", "pear", "banana", "grape", "kiwi"];
   arr4:number[]=new Array()
   arr5:number[]= new Array(5).fill(0)

   images=["http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png","http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png","http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png","http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png"];



 




}
