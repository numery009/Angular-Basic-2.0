import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <h2 *ngIf="true">
        Codevolution
      </h2> 
      
      <h2 *ngIf="displayName">
        Codevolution
      </h2> 
      
      <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

      <ng-template #thenBlock>
        <h2>
          Codevolution
        </h2> 
      </ng-template>


      <ng-template #elseBlock>
        <h2>
          Hidden
        </h2> 
      </ng-template>

      <div [ngSwitch]="color">
          <div *ngSwitchCase="'red'"> You picked red color</div>
          <div *ngSwitchCase="'blue'"> You picked blue color</div>
          <div *ngSwitchCase="'green'"> You picked green color</div>
          <div *ngSwitchDefault>Pick Again</div>
      </div>


      <div *ngFor="let color of colors; index as i; first as f; last as l; odd as o; even as e">
          <h2>Even Odd Last First Index Color</h2>
          <h2>{{e}} {{o}} {{l}} {{f}} {{i}} {{color}}</h2>
      </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public color="yellow";

  public colors=["red","blue","green","yellow"];

  displayName=false;
  constructor() { }

  ngOnInit() {
  }

}
