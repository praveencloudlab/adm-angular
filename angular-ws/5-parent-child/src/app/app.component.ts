import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chilMsg:string = ''
f3(childMsg: any) {
    this.chilMsg = childMsg;
}

msg:string=''
f1(msg: string) {
  this.msg = msg;
}
  
}
