import { AfterViewInit, Component, ElementRef, Renderer2, viewChild, ViewChild } from '@angular/core';
import { AnimatorService } from '../services/animator.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('animatedText') animatedText!: ElementRef;
  @ViewChild('typedText') typedText!: ElementRef;
  @ViewChild('typedJobTitle') typedJobTitle!: ElementRef;
  @ViewChild('typedParagraph') typedParagraph!: ElementRef;

  homeTitle = "Welcome"
  name = "I'm Almanzo Rosseel";
  jobTitle = "Junior Fullstack/<br>Backend .NET Developer";
  paragrafh = "Building modern web applications with<br>cutting-edge technologies";

  constructor(
    private renderer: Renderer2,
    private animator: AnimatorService,
  ) { }

  ngAfterViewInit(): void {
    this.animator.animateText(this.homeTitle, this.animatedText.nativeElement, this.renderer).then(() => {
      this.animator.startTextTyping(this.typedText, this.name, this.renderer);

      setTimeout(() => {
        this.animator.startTextTyping(this.typedJobTitle, this.jobTitle, this.renderer);
      }, 5000);

      setTimeout(() => {
        this.animator.startTextTyping(this.typedParagraph, this.paragrafh, this.renderer);
      }, 14000);
    });
  }
}
