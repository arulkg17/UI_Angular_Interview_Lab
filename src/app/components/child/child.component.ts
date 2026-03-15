import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: 
  `
    <button (click)="send()">Notify Parent </button>
  `,
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Output() notify = new EventEmitter<string>();
  
  send(){
    this.notify.emit("Hello From Child");
  }
}
