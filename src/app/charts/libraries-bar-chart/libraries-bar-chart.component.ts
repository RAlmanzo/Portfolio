import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ChartBarBuilderService } from '../../services/chart-builder.service';

@Component({
  selector: 'app-libraries-bar-chart',
  imports: [],
  templateUrl: './libraries-bar-chart.component.html',
  styleUrl: './libraries-bar-chart.component.css'
})
export class LibrariesBarChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('skillsCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  chart:any;
  labels = [
    "Bootstrap",
    "Anime.js",
    "Chart.js",
    "SignalR"
  ];
  dataSetData = [65, 55, 55, 65];
  backgroundColor = 'rgba(145, 255, 102, 0.2)';
  borderColor = 'rgb(105, 255, 102)';

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
