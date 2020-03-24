import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lineChart: any = [];
  doughnutChart: any;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.initChart();
      this.initChartDoughnut();
    }, 5);
  }

  initChart() {
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: '#DE4040',
            borderColor: '#DE4040',
            data: [15, 35, 55, 25, 25, 44, -10],
            fill: false
          },
          {
            label: 'My Premium dataset',
            backgroundColor: '#3666B8',
            borderColor: '#3666B8',
            fill: false,
            data: [200, 33, 22, 19, 11, 49, 30]
          },
          {
            label: 'My Second dataset',
            backgroundColor: '#6CAA46',
            borderColor: '#6CAA46',
            fill: false,
            data: [59, 34, 24, 19, 11, 49, 33]
          }
        ]
      },
      options: {
        responsive: true,
        // maintainAspectRatio: false,
        borderWidth: 1,
        legend: {
          // display: false,
          labels: {
            boxWidth: 20,
          },
        },
        title: {
          display: true,
          text: 'Min and Max Settings'
        },
        scales: {
          y: {
            min: 10,
            max: 50
          }
        }
      }
    });
  }

  initChartDoughnut() {
    this.doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        labels: ['Data1','Data2'],
        datasets: [
          { 
            data: [55,45, 30],
            backgroundColor: ['rgba(255, 0, 0, 1)','rgba(255, 0, 0, 0.1)'],
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        tooltips:{
          enabled:false
        }
      }
    });
  }
}
