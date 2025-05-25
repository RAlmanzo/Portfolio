import { Component, AfterViewInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { AnimatorService } from '../services/animator.service';
import anime from 'animejs/lib/anime.es.js';

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
    private textAnimator: AnimatorService
  ) {}

  ngAfterViewInit() {
    this.textAnimator.animateText(this.aboutTitle, this.animatedText.nativeElement, this.renderer);
    this.animatePositions();
    this.intervalId = setInterval(() => this.nextSlide(), 4000);
  }

  nextSlide() {
    this.positions = this.positions.map(pos => {
      if (pos === 'left') return 'right';
      if (pos === 'center') return 'left';
      if (pos === 'right') return 'center';
      return pos;
    });
    this.animatePositions();
  }

  animatePositions() {
    this.images.forEach((_, i) => {
      const pos = this.positions[i];
      const imgEl = document.getElementById(`img-${i}`);
      if (!imgEl) return;

      let targetProps: {translateX: number, scale: number, opacity: number, zIndex: number};

      if (pos === 'center') {
        targetProps = { translateX: 0, scale: 1, opacity: 1, zIndex: 3 };
      } else if (pos === 'left') {
        targetProps = { translateX: -110, scale: 0.8, opacity: 0.3, zIndex: 1 };
      } else {
        targetProps = { translateX: 110, scale: 0.8, opacity: 0.3, zIndex: 1 };
      }

      anime({
        targets: imgEl,
        translateX: targetProps.translateX,
        scale: targetProps.scale,
        opacity: targetProps.opacity,
        duration: 800,
        easing: 'easeInOutQuad',
        update(anim) {
          imgEl.style.zIndex = String(targetProps.zIndex);
        }
      });
    });
  }
}
