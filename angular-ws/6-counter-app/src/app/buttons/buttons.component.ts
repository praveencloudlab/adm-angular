import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  btnHits:number=0

calculateHitsCount() {
  this.btnHits++;
  this.totalCount.emit(this.btnLabel)
}

  @Input()
  btnLabel:number=0

  @Output()
  totalCount=new EventEmitter<number>();





}
