import { Component } from '@angular/core';
import { LanguageBarChartComponent } from '../charts/language-bar-chart/language-bar-chart.component';
import { FrameworksPlatformsBarChartComponent } from '../charts/frameworks-platforms-bar-chart/frameworks-platforms-bar-chart.component';
import { DatabasesQueryLanguagesBarChartComponent } from '../charts/databases-query-languages-bar-chart/databases-query-languages-bar-chart.component';
import { ApisBarChartComponent } from '../charts/apis-bar-chart/apis-bar-chart.component';

@Component({
  selector: 'app-resume',
  imports: [LanguageBarChartComponent, FrameworksPlatformsBarChartComponent, DatabasesQueryLanguagesBarChartComponent, ApisBarChartComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  barChart = "languagesChart";

  toggleBarCharts(value:string){
    this.barChart = value;
  }
}
