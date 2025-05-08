import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('animatedText') animatedText!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
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
        easing: 'easeOutExpo'
      });
    });
  }
}
