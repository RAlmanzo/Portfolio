import { AfterViewInit, Component } from '@angular/core';
import { ChartBarBuilderService } from '../../services/chart-builder.service';

@Component({
  selector: 'app-frameworks-platforms-bar-chart',
  imports: [],
  templateUrl: './frameworks-platforms-bar-chart.component.html',
  styleUrl: './frameworks-platforms-bar-chart.component.css'
})
export class FrameworksPlatformsBarChartComponent implements AfterViewInit {
  chart:any;
  labels = [
    ".NET (WPF, Console)",
    "ASP.NET Core MVC",
    "ASP.NET Core Web API",
    "EF Core",
    "Microsoft Identity",
    "Angular 19",
    "React.js",
    "Vue.js",
    "Blazor (Server)",
    "Hot Chocolate (GraphQL C#)",
    "Xamarin Forms (MVVM)"
  ];
  dataSetData = [90, 91, 91, 90, 90, 70, 50, 80, 85, 70, 85];
  backgroundColor = 'rgba(255, 159, 64, 0.2)';
  borderColor = 'rgb(255, 159, 64)';

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
