import { Injectable } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartBarBuilderService {
  constructor() {
    Chart.register(...registerables);
  }

  createBarChart(config:ChartConfiguration): void {
    new Chart('skillsChart', config);
  }
}
