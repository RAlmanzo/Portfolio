import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('animatedText') animatedText!: ElementRef;
  @ViewChild('typedText') typedText!: ElementRef;
  @ViewChild('typedJobTitle') typedJobTitle!: ElementRef;

  name = "I'm Almanzo Rosseel";
  jobTitle = "Junior Fullstack/ Backend<br>Developer";
  typingSpeed = 200;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.animateWelcome().then(() => {
      this.typeText(this.typedText, this.name);

      setTimeout(() => {
        this.typeText(this.typedJobTitle, this.jobTitle);
      }, 5000);
    });
  }

  animateWelcome(): Promise<void> {
    return new Promise((resolve) => {
      const textEl = this.animatedText.nativeElement;
      const text = textEl.textContent;
      textEl.textContent = '';

      const spans = [];

      for (const char of text) {
        const span = this.renderer.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        this.renderer.setStyle(span, 'display', 'inline-block');
        this.renderer.appendChild(textEl, span);
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

  typeText(elRef: ElementRef, text: string): void {
    const el = elRef.nativeElement;
    el.innerHTML = '';

    const cursor = this.renderer.createElement('span');
    this.renderer.addClass(cursor, 'cursor');
    cursor.textContent = '|';
    this.renderer.appendChild(el, cursor);

    let index = 0;

    const interval = setInterval(() => {
      if (text.substr(index, 4) === '<br>') {
        const br = this.renderer.createElement('br');
        this.renderer.insertBefore(el, br, cursor);
        index += 4;
        return;
      }

      if (index < text.length) {
        const span = this.renderer.createElement('span');
        const char = text.charAt(index);
        const textNode = this.renderer.createText(char === ' ' ? '\u00A0' : char);
        this.renderer.appendChild(span, textNode);
        this.renderer.insertBefore(el, span, cursor);

        this.renderer.setStyle(span, 'opacity', '0');
        this.renderer.setStyle(span, 'display', 'inline-block');

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
        this.renderer.removeChild(el, cursor);
      }
    }, this.typingSpeed);
  }

  /*typeText(): void {
    const el = this.typedText.nativeElement;
    el.innerHTML = '';

    const cursor = this.renderer.createElement('span');
    this.renderer.addClass(cursor, 'cursor');
    cursor.textContent = '|';
    this.renderer.appendChild(el, cursor);

    let index = 0;

    const interval = setInterval(() => {
      if (index < this.fullText.length) {
        const span = this.renderer.createElement('span');
        const char = this.fullText.charAt(index);
        const textNode = this.renderer.createText(char === ' ' ? '\u00A0' : char);
        this.renderer.appendChild(span, textNode);
        this.renderer.insertBefore(el, span, cursor); // voeg letter toe vóór de cursor

        // Animatie per letter
        this.renderer.setStyle(span, 'opacity', '0');
        this.renderer.setStyle(span, 'display', 'inline-block');

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
        this.renderer.removeChild(el, cursor);
      }
    }, this.typingSpeed);
  }*/

  /*typeText(): void {
    const el = this.typedText.nativeElement;
    el.innerHTML = '';
    let index = 0;

    const interval = setInterval(() => {
      if (index < this.fullText.length) {
        el.innerHTML += this.fullText.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, this.typingSpeed);
  }*/
}
