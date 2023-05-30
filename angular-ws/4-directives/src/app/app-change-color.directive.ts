import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class AppChangeColorDirective {

  constructor(e1:ElementRef,e2:ElementRef) {
    e1.nativeElement.style.color = 'blue';
    //e2.nativeElement.style.background ='red';

   }

}
