import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
    <h2>{{"Hello " + parentData}}</h2>
    <h2>{{"Hello " + name}}</h2>

    <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  
  @Input() public parentData;
  @Input('parentData') public name;
  

  @Output() public childEvent= new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey Codevolution');    
  }

}
