import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ChartBarBuilderService } from '../../services/chart-builder.service';

@Component({
  selector: 'app-databases-query-languages-bar-chart',
  imports: [],
  templateUrl: './databases-query-languages-bar-chart.component.html',
  styleUrl: './databases-query-languages-bar-chart.component.css'
})
export class DatabasesQueryLanguagesBarChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('skillsCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  chart:any;
  labels = [
    "MS SQL Server (Relational)",
    "MongoDB (NoSQL, Cloud DB)",
    "Firebase (NoSQL, Cloud DB)",
    "LINQ",
    "SQL",
    "GraphQL Queries"
  ];
  dataSetData = [85, 65, 65, 85, 75, 80];
  backgroundColor = 'rgba(75, 192, 192, 0.2)';
  borderColor = 'rgb(75, 192, 192)';

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
