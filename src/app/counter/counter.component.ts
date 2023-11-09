import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  number = 0;
  Onincrese() {
    this.number++;
  }
  Ondecrease(){
    this.number--;
  }
  get isShow(){
  return this.number <= 10
  }
  get textColor(){
    if (this.number > 10){
      return 'red'
    }
    return ''
  }
}
