import { Injectable } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartBarBuilderService {
  constructor() {
    Chart.register(...registerables);
  }

  createBarChart(data:any): void {
    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: data,
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

    new Chart('skillsChart', config);
  }
}
