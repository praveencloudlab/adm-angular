import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[],property:string,value:any): any[] {
    if(!items || !property || !value){
      return items;
    }

    return items;
  }



}
