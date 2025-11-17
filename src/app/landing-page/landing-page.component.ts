import { Component, inject, OnInit } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ResumeComponent } from "../resume/resume.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [HomeComponent, AboutComponent, ResumeComponent, ProjectsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {

  }
}
