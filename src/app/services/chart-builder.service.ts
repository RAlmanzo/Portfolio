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
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: { 
              color: 'white',
              font: {
                size: window.innerWidth < 768 ? 8 : 14
              } 
            }
          },
          x: {
            ticks: { 
              color: 'white',
              font: {
                size: window.innerWidth < 768 ? 9 : 14
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
