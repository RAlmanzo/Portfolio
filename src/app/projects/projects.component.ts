import { AfterViewInit, Component } from '@angular/core';
import { AnimatorService } from '../services/animator.service';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit{
  

  portfolioImages = [
    'assets/images/portfolio1.png',
    'assets/images/portfolio2.png',
  ];
  liveSportsImages = [
    'assets/images/reporter.png',
    'assets/images/user.png',
  ];
  sniffHikesWebAppImages = [
    'assets/images/reporter.png',
    'assets/images/user.png',
  ];
  sniffHikesMobileAppImages = [
    'assets/images/sniffhikesmob3.png',
    'assets/images/sniffhikesmob2.png',
    'assets/images/sniffhikesmob1.png',
  ];

  
  constructor (
    private imageAnimator: AnimatorService,
  ){}

  ngAfterViewInit() {
    this.imageAnimator.animateSlideImages(this.portfolioImages);
    this.imageAnimator.animateSlideImages(this.liveSportsImages);
    this.imageAnimator.animateSlideImages(this.sniffHikesWebAppImages);
    this.imageAnimator.animateSlideImages(this.sniffHikesMobileAppImages);

    let matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 992px) and (min-height: 740px)", () => {
      gsap.utils.toArray(".projects").forEach((box, i) => {
        ScrollTrigger.create({
          trigger: box as HTMLElement,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      });
    });
  }
}
