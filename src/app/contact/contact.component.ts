import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TextAnimatorService } from '../services/text-animator.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild('animatedText') animatedText!: ElementRef;

  contactTitle = "Contact Me"

  constructor(
    private renderer: Renderer2,
    private textAnimator: TextAnimatorService
  ){}

  ngAfterViewInit() {
    this.textAnimator.animateText(this.contactTitle, this.animatedText.nativeElement, this.renderer);
  }
}
