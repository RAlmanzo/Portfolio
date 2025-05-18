import { AfterViewInit, Component } from '@angular/core';
import { ChartBarBuilderService } from '../../services/chart-builder.service';

@Component({
  selector: 'app-language-bar-chart',
  imports: [],
  templateUrl: './language-bar-chart.component.html',
  styleUrl: './language-bar-chart.component.css'
})
export class LanguageBarChartComponent implements AfterViewInit{
  chart:any;
  labels = ['C# (OOP)','JavaScript','TypeScript','HTML5','CSS'];
  dataSetData = [90, 85, 75, 90, 90];
  backgroundColor = 'rgba(255, 99, 132, 0.2)';
  borderColor = 'rgb(255, 99, 132)';

  chartBarData = {
    labels: this.labels,
    datasets: [{
      data: this.dataSetData,
      backgroundColor:this.backgroundColor,
      borderColor: this.borderColor,
      borderWidth: 1
    }]
  };

  constructor(private chartBarBuilder: ChartBarBuilderService,) {}

  ngAfterViewInit(): void {
    this.chart = this.chartBarBuilder.createBarChart(this.chartBarData);
  }
}
