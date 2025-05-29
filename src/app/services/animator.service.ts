import { ElementRef, Injectable, Renderer2 } from '@angular/core';
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

  startImageAnimationLoop(container: HTMLElement, imageCount: number, onIndexChange: (index: number) => void) {
    let currentIndex = 0;
    const duration = 5000;
    const fadeDuration = 1500;

    const animate = () => {
      const images = container.querySelectorAll('img');

      anime({
        targets: images,
        opacity: (_el: HTMLElement, i: number) => (i === currentIndex ? 1 : 0),
        duration: fadeDuration,
        easing: 'easeInOutQuad',
        complete: () => {
          setTimeout(() => {
            currentIndex = (currentIndex + 1) % imageCount;
            onIndexChange(currentIndex);
            animate();
          }, duration - fadeDuration);
        },
      });
    };

    animate();
  }

  startImagesCarousel(images: string[], positions: string[]) {
    images.forEach((_, i) => {
      const pos = positions[i];
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

  startTextTyping(elRef: ElementRef, text: string, renderer: Renderer2): void {
    const el = elRef.nativeElement;
    el.innerHTML = '';
    const typingSpeed = 200;

    const cursor = renderer.createElement('span');
    renderer.addClass(cursor, 'cursor');
    cursor.textContent = '|';
    renderer.appendChild(el, cursor);

    let index = 0;

    const interval = setInterval(() => {
      if (text.substring(index, index + 4) === '<br>') {
        const br = renderer.createElement('br');
        renderer.insertBefore(el, br, cursor);
        index += 4;
        return;
      }

      if (index < text.length) {
        const span = renderer.createElement('span');
        const char = text.charAt(index);
        const textNode = renderer.createText(char === ' ' ? '\u00A0' : char);
        renderer.appendChild(span, textNode);
        renderer.insertBefore(el, span, cursor);

        renderer.setStyle(span, 'opacity', '0');
        renderer.setStyle(span, 'display', 'inline-block');

        anime({
          targets: span,
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 500,
          easing: 'easeOutExpo'
        });

        index++;
      } else {
        clearInterval(interval);
        renderer.removeChild(el, cursor);
      }
    }, typingSpeed);
  }
}
