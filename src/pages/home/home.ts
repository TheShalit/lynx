import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {AngularFire} from 'angularfire2';
import {DBMeter} from '@ionic-native/db-meter';
import {NoiseSharePage} from "../noise-share/noise-share";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    DBMeter
  ]
})
export class HomePage {

  public gaugeChartOptions:any = {
    chartType: 'Gauge',
    dataTable: [
      ['Label', 'Library'],
      ['Library', 2.5]
    ],
    options: {
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 2,
      redFrom: 4, redTo: 5,
      minorTicks: 5,
      min: 0, max: 5,
      majorTicks: ['0', '1', '2', '3', '4', '5'],
      greenColor: '#d0e9c6',
      redColor: '#e9d0c6'
    }
  };
  public floors:any = [
    {
      img: 'images/001-earth-globe.png',
      num: 1,
      name: 'Engineering Sciences and Natural Sciences',
      data: {
        chartType: 'Gauge',
        dataTable: [
          ['Label', 'Floor 1'],
          ['Floor 1', 2.5]
        ],
        options: {
          animation: {easing: 'out'},
          width: 56, height: 56,
          greenFrom: 0, greenTo: 2,
          redFrom: 4, redTo: 5,
          minorTicks: 5,
          min: 0, max: 5,
          majorTicks: ['0', '1', '2', '3', '4', '5'],
          greenColor: '#d0e9c6',
          redColor: '#e9d0c6'
        }
      }
    },

    {
      img: 'images/002-college.png',
      num: 2,
      name: 'General Reference and Question',
      data: {
        chartType: 'Gauge',
        dataTable: [
          ['Label', 'Floor 2'],
          ['Floor 2', 2.5]
        ],
        options: {
          animation: {easing: 'out'},
          width: 56, height: 56,
          greenFrom: 0, greenTo: 2,
          redFrom: 4, redTo: 5,
          minorTicks: 5,
          min: 0, max: 5,
          majorTicks: ['0', '1', '2', '3', '4', '5'],
          greenColor: '#d0e9c6',
          redColor: '#e9d0c6'
        }
      }
    },

    {
      img: 'images/003-bookshelf.png',
      num: 3,
      name: 'Reading Room for Humanities',
      data: {
        chartType: 'Gauge',
        dataTable: [
          ['Label', 'Floor 3'],
          ['Floor 3', 2.5]
        ],
        options: {
          animation: {easing: 'out'},
          width: 56, height: 56,
          greenFrom: 0, greenTo: 2,
          redFrom: 4, redTo: 5,
          minorTicks: 5,
          min: 0, max: 5,
          majorTicks: ['0', '1', '2', '3', '4', '5'],
          greenColor: '#d0e9c6',
          redColor: '#e9d0c6'
        }
      }
    },

    {
      img: 'images/004-books.png',
      num: 4,
      name: 'Social Sciences and Management',
      data: {
        chartType: 'Gauge',
        dataTable: [
          ['Label', 'Floor 4'],
          ['Floor 4', 2.5]
        ],
        options: {
          animation: {easing: 'out'},
          width: 56, height: 56,
          greenFrom: 0, greenTo: 2,
          redFrom: 4, redTo: 5,
          minorTicks: 5,
          min: 0, max: 5,
          majorTicks: ['0', '1', '2', '3', '4', '5'],
          greenColor: '#d0e9c6',
          redColor: '#e9d0c6'
        }
      }
    },

    {
      img: 'images/005-science.png',
      num: 5,
      name: 'Judaism and Israel',
      data: {
        chartType: 'Gauge',
        dataTable: [
          ['Label', 'Floor 5'],
          ['Floor 5', 2.5]
        ],
        options: {
          animation: {easing: 'out'},
          width: 56, height: 56,
          greenFrom: 0, greenTo: 2,
          redFrom: 4, redTo: 5,
          minorTicks: 5,
          min: 0, max: 5,
          majorTicks: ['0', '1', '2', '3', '4', '5'],
          greenColor: '#d0e9c6',
          redColor: '#e9d0c6'
        }
      }
    }
  ];

  constructor(public navCtrl:NavController, public af:AngularFire, private dbMeter:DBMeter) {
    let me = this;
    af.database.object('/meters')
      .subscribe(function (item:any) {
        if (item) {
          let sum = 0;
          me.floors = [1, 2, 3, 4, 5].map(function (i) {
            let opts = me.floors[i - 1];
            let val = (+item['floor' + i] || 2.5) / 10 - 4;
            sum += val;

            opts['data']['dataTable'] = [
              ['Label', 'Floor ' + i],
              ['Floor ' + i, val]
            ];

            return Object.assign({}, opts);
          });

          me.gaugeChartOptions = {
            chartType: 'Gauge',
            dataTable: [
              ['Label', 'Library'],
              ['Library', sum / 5]
            ],
            options: {
              animation: {easing: 'out'},
              width: 150, height: 150,
              greenFrom: 0, greenTo: 2,
              redFrom: 4, redTo: 5,
              minorTicks: 5,
              min: 0, max: 5,
              majorTicks: ['0', '1', '2', '3', '4', '5'],
              greenColor: '#d0e9c6',
              redColor: '#e9d0c6'
            }
          };

        }
      });
  }

  noiseShare() {
    this.navCtrl.push(NoiseSharePage);

  }
}
