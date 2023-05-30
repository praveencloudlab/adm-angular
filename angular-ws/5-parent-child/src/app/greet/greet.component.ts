import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html'
})
export class GreetComponent {
  @Input() // receives data from parent component
  parentMsg: string='';

  @Output() // sents data from child component to parent component
  messageFromChild=new EventEmitter<string>(); // messageFromChild is a custom event in the parent component : AppComponent

f2(messageFromChild: string) {
  this.messageFromChild.emit(messageFromChild);
}
}
