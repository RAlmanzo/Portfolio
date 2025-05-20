import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LanguageBarChartComponent } from '../charts/language-bar-chart/language-bar-chart.component';
import { FrameworksPlatformsBarChartComponent } from '../charts/frameworks-platforms-bar-chart/frameworks-platforms-bar-chart.component';
import { DatabasesQueryLanguagesBarChartComponent } from '../charts/databases-query-languages-bar-chart/databases-query-languages-bar-chart.component';
import { ApisBarChartComponent } from '../charts/apis-bar-chart/apis-bar-chart.component';
import { ToolsVersioncontrolBarChartComponent } from '../charts/tools-versioncontrol-bar-chart/tools-versioncontrol-bar-chart.component';
import { LibrariesBarChartComponent } from "../charts/libraries-bar-chart/libraries-bar-chart.component";
import { TextAnimatorService } from '../services/text-animator.service';

@Component({
  selector: 'app-resume',
  imports: [
    LanguageBarChartComponent,
    FrameworksPlatformsBarChartComponent,
    DatabasesQueryLanguagesBarChartComponent,
    ApisBarChartComponent,
    ToolsVersioncontrolBarChartComponent,
    LibrariesBarChartComponent
],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements AfterViewInit{
  @ViewChild('animatedText') animatedText!: ElementRef;

  resumeTitle = 'Resume';
  barChart = "languagesChart";

  constructor(
    private renderer: Renderer2,
    private textAnimator: TextAnimatorService
  ){}

  ngAfterViewInit() {
    this.textAnimator.animateText(this.resumeTitle, this.animatedText.nativeElement, this.renderer);
  }

  toggleBarCharts(value:string){
    this.barChart = value;
  }
}
