import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-interview-lab',
  standalone: true,
  templateUrl: './angular-interview-lab.component.html',
  styleUrl: './angular-interview-lab.component.css',
})
export class AngularInterviewLabComponent {
  constructor(private router: Router) {}

  openExercise(route: string): void {
    this.router.navigate(['/angular-lab', route]);
  }
}
