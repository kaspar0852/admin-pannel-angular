import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions ={};
  constructor() { }

  ngOnInit(){
    this.chartOptions={
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Product Complains'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'Jan',
              y: 61.41,
              sliced: true,
              selected: true
          }, {
              name: 'Feb',
              y: 11.84
          }, {
              name: 'Mar',
              y: 10.85
          }, {
              name: 'Apr',
              y: 4.67
          }, {
              name: 'May',
              y: 4.18
          }, {
              name: 'June',
              y: 1.64
          }, {
              name: 'July',
              y: 1.6
          }, {
              name: 'Aug',
              y: 1.2
          }, {
              name: 'Sept',
              y: 2.61
          },
          {
            name: 'OCt',
            y: 2.61
          },{
            name: 'Nov',
            y: 2.61
          },{
           name: 'Dec',
           y: 2.61
    }]
      }]
  }
  HC_exporting(Highcharts);

  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  },300);

  };

}
