import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      {{"Hello " + name}}
    </h2>
    <button (click)=fireEvent()>Send Event</button>

    <h2>{{"Stackroute" | lowercase}}</h2>
    <h2>{{"Stackroute" | uppercase}}</h2>
    <h2>{{"Welcome to Stackroute" | titlecase}}</h2>
    <h2>{{"Stackroute" | slice:3:6}}</h2>
    <h2>{{person | json}}</h2>

    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>
    
    
    <h2>{{0.25 | percent}}</h2>
    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency:'GBP'}}</h2>
    <h2>{{0.25 | currency:'GBP':'code'}}</h2>
    
    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
    
    
    
    
    
    
    
    
  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter<string>();

  public person = {
    "firstName": "Rutu",
    "lastName": "Bacchuwar"
  }

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey Stackroute');
  }

}
