import { Component } from '@angular/core';
import { loadData } from './mock-data/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  emps:any[]
  filterText='';

  constructor(){
    this.emps = loadData();
  }
} 
