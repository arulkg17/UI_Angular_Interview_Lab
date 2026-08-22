import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { BehaviorSubjectDemoService } from '../../services/behavior-subject-demo.service';
@Component({
  selector: 'app-behavior-subject-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './behaviorsubject.component.html',
  styleUrl: './behaviorsubject.component.css',
})
export class BehaviorSubjectComponent implements OnInit, OnDestroy {
  message = '';
  receivedMessage = '';
  private subscription?: Subscription;
  constructor(private behaviorsubjectservice: BehaviorSubjectDemoService) {}

  ngOnInit(): void {
    this.subscription = this.behaviorsubjectservice.message$.subscribe(
      (message) => {
        this.receivedMessage = message;
      },
    );
  }
  sendMessage(): void {
    this.behaviorsubjectservice.sendMessage(this.message);
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
