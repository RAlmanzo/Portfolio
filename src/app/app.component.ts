import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menuOpen = false;

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }
}
