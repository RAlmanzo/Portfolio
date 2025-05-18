import { AfterViewInit, Component } from '@angular/core';
import { ChartBarBuilderService } from '../../services/chart-builder.service';

@Component({
  selector: 'app-tools-versioncontrol-bar-chart',
  imports: [],
  templateUrl: './tools-versioncontrol-bar-chart.component.html',
  styleUrl: './tools-versioncontrol-bar-chart.component.css'
})
export class ToolsVersioncontrolBarChartComponent implements AfterViewInit {
  chart:any;
  labels = [
    "GitHub",
    "GitLab",
    "Git",
    "Yarn",
    "Npm",
    "Swagger"
  ];
  dataSetData = [85, 75, 80, 65, 65, 90];
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
    this.chart = this.chartBarBuilder.createBarChart(this.chartBarData);
  }
}
