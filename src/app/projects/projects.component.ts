import { AfterViewInit, Component } from '@angular/core';
import { AnimatorService } from '../services/animator.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit{
  images = [
    'assets/images/reporter.png',
    'assets/images/user.png',
  ];

  constructor (
    private imageAnimator: AnimatorService,
  ){}

  ngAfterViewInit() {
    this.imageAnimator.animateSlideImages(this.images);
  }
}
