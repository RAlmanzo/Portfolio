import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('menu') menuRef!: ElementRef;
  @ViewChild('menuButton') menuButtonRef!: ElementRef;

  menuOpen = false;

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    const clickedInsideMenu = this.menuRef?.nativeElement.contains(target);
    const clickedMenuButton = this.menuButtonRef?.nativeElement.contains(target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      this.menuOpen = false;
    }
  }
}
