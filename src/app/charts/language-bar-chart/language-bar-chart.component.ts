import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ChartBarBuilderService } from '../../services/chart-builder.service';

@Component({
  selector: 'app-language-bar-chart',
  imports: [],
  templateUrl: './language-bar-chart.component.html',
  styleUrl: './language-bar-chart.component.css'
})
export class LanguageBarChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('skillsCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  chart: any;
  labels = ['C# (OOP)', 'Python3 Basics', 'JavaScript', 'TypeScript', 'HTML5', 'CSS'];
  dataSetData = [90, 70, 85, 70, 90, 85];
  backgroundColor = 'rgba(255, 99, 132, 0.2)';
  borderColor = 'rgb(255, 99, 132)';

  chartBarData = {
    labels: this.labels,
    datasets: [{
      data: this.dataSetData,
      backgroundColor: this.backgroundColor,
      borderColor: this.borderColor,
      borderWidth: 1
    }]
  };

  constructor(private chartBarBuilder: ChartBarBuilderService,) { }

  ngAfterViewInit(): void {
    this.chart = this.chartBarBuilder.createBarChart(this.chartBarData, this.canvasRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
