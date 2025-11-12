import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ResumeComponent } from "../resume/resume.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-landing-page',
  imports: [HomeComponent, AboutComponent, ResumeComponent, ProjectsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
