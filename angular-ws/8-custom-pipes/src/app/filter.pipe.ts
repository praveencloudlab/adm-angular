import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[],property:string,value:any): any[] {
    console.log(property);

    if(!items || !property || !value){
      return items;
    }
    return items.filter(item => item[property].toLowerCase().includes(value.toLowerCase()));
  }
}
