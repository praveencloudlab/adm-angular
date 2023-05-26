import { Component } from '@angular/core';

@Component(
  {
     selector: 'app-root',
     templateUrl: './app.component.html'
  }
)
export class AppComponent {

  name='Praveen';
  product={
    id:'P001',
    name:'Book',
    price:5000,
    'description':'Angular book'
  }
  
}
