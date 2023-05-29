import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2> home Component</h2> <hr/>
    <button [disabled]='isDisabled'>click me</button> <br/>
    <img [src]='imageUrl' width="200px" height="150px">
    <div [id]='divId'>This is a Div</div>
    <h2 [style.color]='fontColor'>This is some text</h2>
    <input [checked]='isChecked' type="checkbox"/> hello
  `
})
export class HomeComponent {
  isChecked: boolean = false;
  fontColor: string = 'blue';
  isDisabled: boolean = true;
  imageUrl='assets/tj2.png'
  divId='divId'



}
