import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector:'app-child',
    standalone:true,
    imports:[FormsModule],
    templateUrl:'./child.component.html',
    styleUrl:'./child.component.css'
})
export class ChildComponent {
    @Input() message = "";
    @Output() sendMessageToParent = new EventEmitter<string>();
    sendToParent():void{
        this.sendMessageToParent.emit(this.message);
    }
}