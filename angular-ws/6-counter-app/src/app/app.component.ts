import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  totalHitsCount:number=0;

calculateTotalHits(btnLabel: number) {
  this.totalHitsCount=this.totalHitsCount+btnLabel;
}


  
  numbers=[5,10,15,20,-5,-10, -15, -20];





}
