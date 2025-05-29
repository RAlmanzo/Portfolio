import { Component, AfterViewInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { AnimatorService } from '../services/animator.service';

type Position = 'left' | 'center' | 'right';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('animatedText') animatedText!: ElementRef;

  aboutTitle = 'About me';
  images = [
    'assets/images/hiken2.jpg',
    'assets/images/me.jpg',
    'assets/images/hiken.jpg',
  ];
  positions: Position[] = ['left', 'center', 'right'];
  intervalId?: any;

  constructor(
    private renderer: Renderer2,
    private animator: AnimatorService
  ) {}

  ngAfterViewInit() {
    this.animator.animateText(this.aboutTitle, this.animatedText.nativeElement, this.renderer);
    this.animator.startImagesCarousel(this.images, this.positions);
    this.intervalId = setInterval(() => this.nextSlide(), 4000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.positions = this.positions.map(pos => {
      if (pos === 'left') return 'right';
      if (pos === 'center') return 'left';
      if (pos === 'right') return 'center';
      return pos;
    });
    this.animator.startImagesCarousel(this.images, this.positions);
  }
}
