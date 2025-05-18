import { Component } from '@angular/core';
import { LanguageBarChartComponent } from '../charts/language-bar-chart/language-bar-chart.component';
import { FrameworksPlatformsBarChartComponent } from '../charts/frameworks-platforms-bar-chart/frameworks-platforms-bar-chart.component';

@Component({
  selector: 'app-resume',
  imports: [LanguageBarChartComponent, FrameworksPlatformsBarChartComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  showLanguagesChart = true;
  showFrameworksPlatformsChart = false;

  toggleLanguages(){
    this.showLanguagesChart = true;
    this.showFrameworksPlatformsChart = false;
  }

  toggleFrameworksAndPlatforms(){
    this.showLanguagesChart = false;
    this.showFrameworksPlatformsChart = true;
  }
}
