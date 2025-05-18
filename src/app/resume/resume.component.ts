import { Component } from '@angular/core';
import { LanguageBarChartComponent } from '../charts/language-bar-chart/language-bar-chart.component';
import { FrameworksPlatformsBarChartComponent } from '../charts/frameworks-platforms-bar-chart/frameworks-platforms-bar-chart.component';
import { DatabasesQueryLanguagesBarChartComponent } from '../charts/databases-query-languages-bar-chart/databases-query-languages-bar-chart.component';

@Component({
  selector: 'app-resume',
  imports: [LanguageBarChartComponent, FrameworksPlatformsBarChartComponent, DatabasesQueryLanguagesBarChartComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  showLanguagesChart = true;
  showFrameworksPlatformsChart = false;
  showDatabasesQueryLanguagesChart = false;

  toggleLanguages(){
    this.showFrameworksPlatformsChart = false;
    this.showDatabasesQueryLanguagesChart = false;
    this.showLanguagesChart = true;
  }

  toggleFrameworksAndPlatforms(){
    this.showLanguagesChart = false;
    this.showDatabasesQueryLanguagesChart = false;
    this.showFrameworksPlatformsChart = true;
  }

  toggleDatabasesAndQueryLanguages(){
    this.showLanguagesChart = false;
    this.showFrameworksPlatformsChart = false;
    this.showDatabasesQueryLanguagesChart = true;
  }
}
