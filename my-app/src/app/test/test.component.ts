import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{name}}
  </h2>
  <h2 class="text-success">Codevolution</h2>
  <h2 [class]="sucessClass">Codevolution</h2>
  <h2 class="text-special" [class]="sucessClass">Codevolution</h2>
  <h2 [class.text-danger]="hasError">Codevolution</h2>

  <h2 [ngClass]="messageClasses">Codevolution</h2>

  <h2 [style.color]="hasError ? 'red' : 'green'" >Style Binding</h2>

  <h2 [style.color]="highlightColor"> Style Binding 2</h2>

  <h2 [ngStyle]="titleStyles"> Style Binding 3</h2>

  <button (click)="onClick($event)">Greet</button>
  <button (click)="greeting='Welcome Numery'">Greet</button>
  {{greeting}}

  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>

  <input [(ngModel)]="twowaydinding" type="text"> {{twowaydinding}}

  `,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {


public greeting=""; 
public name= "Codevolution";
public sucessClass="text-success";
public hasError=false;
public isSpecial=true;
public messageClasses={
  "text-success": !this.hasError,
  "text-danger": this.hasError,
  "text-special": this.isSpecial
}

public titleStyles={
  color:"blue",
  fontStyle:"italic"
}

public highlightColor="orange";

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log('Welcome to Codevolution');
    console.log(event);
    //this.greeting='Welcome to Codevolution';
    this.greeting=event.type;
  }

  logMessage(value){
    console.log(value);
  }
}
