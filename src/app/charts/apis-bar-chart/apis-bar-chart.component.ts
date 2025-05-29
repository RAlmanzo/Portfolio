import { AfterViewInit, Component } from '@angular/core';
import { ChartBarBuilderService } from '../../services/chart-builder.service';

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

  constructor(private chartBarBuilder: ChartBarBuilderService,) {}

  ngAfterViewInit(): void {
    this.chart = this.chartBarBuilder.createBarChart(this.chartBarData);
  }
}
