import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
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
  @ViewChildren('imageContainer') containers!: QueryList<ElementRef>;

  imageSets: string[][] = [
    ['assets/images/portfolio1.png', 'assets/images/portfolio2.png'],
    ['assets/images/reporter.png', 'assets/images/user.png'],
    ['assets/images/sniffhikesWebApp.png', 'assets/images/sniffhikesWebApp2.png', 'assets/images/sniffhikesWebApp3.png', 'assets/images/sniffhikesWebApp4.png',],
    ['assets/images/sniffhikesmob3.png', 'assets/images/sniffhikesmob2.png', 'assets/images/sniffhikesmob1.png'],
  ];

  currentIndexes = Array(this.imageSets.length).fill(0);
  
  constructor (
    private imageAnimator: AnimatorService,
  ){}

  ngAfterViewInit() {
      this.containers.forEach((container, index) => {
      const images = this.imageSets[index];

      if (images) {
        this.imageAnimator.startImageAnimationLoop(
          container.nativeElement,
          images.length,
          (i) => (this.currentIndexes[index] = i)
        );
      } 
      else {
        console.warn(`No images found for container index ${index}`);
      }
    });

    const matchMedia = gsap.matchMedia();
    matchMedia.add('(min-width: 992px) and (min-height: 740px)', () => {
      gsap.utils.toArray('.projects').forEach((box) => {
        ScrollTrigger.create({
          trigger: box as HTMLElement,
          start: 'top top',
          pin: true,
          pinSpacing: false,
        });
      });
    });
  }
}
