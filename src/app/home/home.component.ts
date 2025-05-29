import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AnimatorService } from '../services/animator.service';

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

  homeTitle = "Welcome"
  name = "I'm Almanzo Rosseel";
  jobTitle = "Junior Fullstack/<br>Backend Developer";

  constructor(
    private renderer: Renderer2,
    private animator: AnimatorService,
  ) {}

  ngAfterViewInit(): void {
    this.animator.animateText(this.homeTitle, this.animatedText.nativeElement, this.renderer).then(() => {
      this.animator.startTextTyping(this.typedText, this.name, this.renderer);

      setTimeout(() => {
        this.animator.startTextTyping(this.typedJobTitle, this.jobTitle, this.renderer);
      }, 5000);
    });
  }
}
