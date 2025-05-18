import { Component } from '@angular/core';
import { LanguageBarChartComponent } from '../charts/language-bar-chart/language-bar-chart.component';

@Component({
  selector: 'app-resume',
  imports: [LanguageBarChartComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  
}
