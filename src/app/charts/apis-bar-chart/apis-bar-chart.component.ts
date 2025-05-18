import { AfterViewInit, Component } from '@angular/core';
import { ChartBarBuilderService } from '../../services/chart-builder.service';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-apis-bar-chart',
  imports: [],
  templateUrl: './apis-bar-chart.component.html',
  styleUrl: './apis-bar-chart.component.css'
})
export class ApisBarChartComponent implements AfterViewInit {
  chart:any;
  labels = [
    "Rest API's (C#)",
    "GraphQL API's (C#)"
  ];
  dataSetData = [85, 75];
  backgroundColor = 'rgba(153, 102, 255, 0.2)';
  borderColor = 'rgb(153, 102, 255)';

  chartBarData = {
    labels: this.labels,
    datasets: [{
      data: this.dataSetData,
      backgroundColor:this.backgroundColor,
      borderColor: this.borderColor,
      borderWidth: 1
    }]
  };

  config: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: this.chartBarData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: { color: 'black', }
        },
        x: {
          ticks: { 
            color: 'black',
            font: {
              size: 14
            } 
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    },
  };

  constructor(private chartBarBuilder: ChartBarBuilderService,) {}

  ngAfterViewInit(): void {
    this.chart = this.chartBarBuilder.createBarChart(this.config);
  }
}
