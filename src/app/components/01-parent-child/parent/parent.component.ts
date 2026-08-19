import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent-test',
  standalone: true,
  imports: [FormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentValue = '';
  receivedMessage = '';
  receivedMessageFromChild(message: string): void {
    const modifiedMessage = message.toUpperCase();
    this.receivedMessage = modifiedMessage;
  }
  reset(): void {
    this.parentValue = '';
    this.receivedMessage = '';
  }
}
