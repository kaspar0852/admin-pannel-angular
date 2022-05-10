import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions ={};

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Economy'
      },
      xAxis: {
          categories: ['2019', '2020', '2021', '2022', '2023']
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Kathmandu',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Lalitpur',
          data: [2, -2, -3, 2, 1]
      }, {
          name: 'Bhaktapur',
          data: [3, 4, 4, -2, 5]
      }]
  }

  }

}
