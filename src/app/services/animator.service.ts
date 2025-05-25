import { Injectable, Renderer2 } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Injectable({
  providedIn: 'root'
})
export class AnimatorService {

  constructor() { }

  animateText(text: string, element: HTMLElement, renderer: Renderer2): Promise<void> {
    return new Promise((resolve) => {
      element.textContent = '';

      const spans: HTMLElement[] = [];

      for (const char of text) {
        const span = renderer.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        renderer.setStyle(span, 'display', 'inline-block');
        renderer.appendChild(element, span);
        spans.push(span);
      }

      spans.forEach((span, i) => {
        anime({
          targets: span,
          translateX: [Math.random() * 800 - 400, 0],
          translateY: [Math.random() * 800 - 400, 0],
          opacity: [0, 1],
          delay: i * 100,
          duration: 1000,
          easing: 'easeOutExpo',
          complete: i === spans.length - 1 ? () => resolve() : undefined
        });
      });
    });
  }
}
