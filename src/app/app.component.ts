import { Component } from '@angular/core';
import { WorkoutsService } from './core/services/workouts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fitness-app';
  workout: any;

  constructor(private workoutsService: WorkoutsService) {}

  getWorkouts() {
    this.workoutsService.getWorkouts().subscribe((res) => console.log(res));
  }

  onUpload(event: any) {
    console.log('it works');
  }
}
