import { Component } from '@angular/core';
import { loadData } from './mock-data/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

dynamicFilterText=''
setColumn(s1: any) {
console.log(s1.target.value);
this.dynamicFilterText=s1.target.value;

}
 
  emps:any[]
  filterText='';
  jsonKeys:any[];
  jsonColumns:any


  constructor(){
    this.emps = loadData();
    this.jsonKeys=Object.keys(this.emps);
    this.jsonColumns=Object.keys(this.emps[0]);
    console.log(this.jsonColumns);
    
    
    

  }



  get filterPeople():any[] {
    return this.emps.filter(emp => emp.name.toLowerCase().includes(this.filterText.toLowerCase()));
  }


  applyFilter(): void{

  }


 
} 
