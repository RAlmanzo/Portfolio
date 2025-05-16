import { Component, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

type Position = 'left' | 'center' | 'right';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  images = [
    'assets/images/profile-menu.png',
    'assets/images/profile-picture.png',
    'assets/images/wooden-wall.png',
  ];

  positions: Position[] = ['left', 'center', 'right'];

  intervalId?: any;

  ngAfterViewInit() {
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
