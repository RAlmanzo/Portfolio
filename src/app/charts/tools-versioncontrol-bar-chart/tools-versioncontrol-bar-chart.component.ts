import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ChartBarBuilderService } from '../../services/chart-builder.service';

@Component({
  selector: 'app-tools-versioncontrol-bar-chart',
  imports: [],
  templateUrl: './tools-versioncontrol-bar-chart.component.html',
  styleUrl: './tools-versioncontrol-bar-chart.component.css'
})
export class ToolsVersioncontrolBarChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('skillsCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  chart:any;
  labels = [
    "GitHub",
    "GitLab",
    "Git",
    "Yarn",
    "Npm",
    "Swagger",
    "Docker",
    "Render"
  ];
  dataSetData = [85, 70, 80, 65, 65, 90, 60, 60];
  backgroundColor = 'rgba(255, 205, 86, 0.2)';
  borderColor = 'rgb(255, 205, 86)';

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
    this.chart = this.chartBarBuilder.createBarChart(this.chartBarData, this.canvasRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
