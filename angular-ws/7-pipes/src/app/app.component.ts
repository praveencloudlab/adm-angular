import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '7-pipes';
  date=new Date();

   product={
    id:1,
    name:'Product 1',
    price:100,
    description:'This is a product'
  }
}
