import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {AngularFire} from 'angularfire2';
import {DBMeter} from '@ionic-native/db-meter';
import {NoiseSharePage} from "../noise-share/noise-share";
import {PlacePage} from "../place/place";
import {PartnerFormPage} from "../partner-form/partner-form";

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
      ['Library', 50]
    ],
    options: {
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 0, greenTo: 30,
      redFrom: 70, redTo: 100,
      yellowFrom: 30, yellowTo: 70,
      minorTicks: 5,
      min: 0, max: 100,
      majorTicks: ['0', '20', '40', '60', '80', '100'],
      greenColor: '#d0e9c6',
      redColor: '#e9d0c6',
      yellowColor: '#ffcf94'
    }
  };
  public floors:any = [
    {
      img: 'images/005-science.png',
      num: 1,
      name: 'Engineering Sciences and Natural Sciences',
      lvl: 50,
      data: {
        chartType: 'Gauge',
        dataTable: [
          ['Label', 'Floor 1'],
          ['Floor 1', 50]
        ],
        options: {
          animation: {easing: 'out'},
          width: 40, height: 40,
          greenFrom: 0, greenTo: 30,
          redFrom: 70, redTo: 100,
          yellowFrom: 30, yellowTo: 70,
          minorTicks: 5,
          min: 0, max: 100,
          majorTicks: ['0', '20', '40', '60', '80', '100'],
          greenColor: '#d0e9c6',
          redColor: '#e9d0c6',
          yellowColor: '#ffcf94'
        }
      }
    },

    {
      img: 'images/003-bookshelf.png',
      num: 2,
      name: 'General Reference and Questions',
      lvl: 50,
      data: {
        chartType: 'Gauge',
        dataTable: [
          ['Label', 'Floor 2'],
          ['Floor 2', 50]
        ],
        options: {
          animation: {easing: 'out'},
          width: 40, height: 40,
          greenFrom: 0, greenTo: 30,
          redFrom: 70, redTo: 100,
          yellowFrom: 30, yellowTo: 70,
          minorTicks: 5,
          min: 0, max: 100,
          majorTicks: ['0', '20', '40', '60', '80', '100'],
          greenColor: '#d0e9c6',
          redColor: '#e9d0c6',
          yellowColor: '#ffcf94'
        }
      }
    },

    {
      img: 'images/002-college.png',
      num: 3,
      name: 'Reading Room for Humanities',
      lvl: 50,
      data: {
        chartType: 'Gauge',
        dataTable: [
          ['Label', 'Floor 3'],
          ['Floor 3', 50]
        ],
        options: {
          animation: {easing: 'out'},
          width: 40, height: 40,
          greenFrom: 0, greenTo: 30,
          redFrom: 70, redTo: 100,
          yellowFrom: 30, yellowTo: 70,
          minorTicks: 5,
          min: 0, max: 100,
          majorTicks: ['0', '20', '40', '60', '80', '100'],
          greenColor: '#d0e9c6',
          redColor: '#e9d0c6',
          yellowColor: '#ffcf94'
        }
      }
    },

    {
      img: 'images/004-books.png',
      num: 4,
      name: 'Social Sciences and Management',
      lvl: 50,
      data: {
        chartType: 'Gauge',
        dataTable: [
          ['Label', 'Floor 4'],
          ['Floor 4', 50]
        ],
        options: {
          animation: {easing: 'out'},
          width: 40, height: 40,
          greenFrom: 0, greenTo: 30,
          redFrom: 70, redTo: 100,
          yellowFrom: 30, yellowTo: 70,
          minorTicks: 5,
          min: 0, max: 100,
          majorTicks: ['0', '20', '40', '60', '80', '100'],
          greenColor: '#d0e9c6',
          redColor: '#e9d0c6',
          yellowColor: '#ffcf94'
        }
      }
    },

    {
      img: 'images/001-earth-globe.png',
      num: 5,
      name: 'Judaism and Israel',
      lvl: 50,
      data: {
        chartType: 'Gauge',
        dataTable: [
          ['Label', 'Floor 5'],
          ['Floor 5', 50]
        ],
        options: {
          animation: {easing: 'out'},
          width: 40, height: 40,
          greenFrom: 0, greenTo: 30,
          redFrom: 70, redTo: 100,
          yellowFrom: 30, yellowTo: 70,
          minorTicks: 5,
          min: 0, max: 100,
          majorTicks: ['0', '20', '40', '60', '80', '100'],
          greenColor: '#d0e9c6',
          redColor: '#e9d0c6',
          yellowColor: '#ffcf94'
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
            let val = ((+item['floor' + i] || 50) / 40 - 1.25) * 70 + 30;
            sum += val;

            opts['data']['dataTable'] = [
              ['Label', 'Floor ' + i],
              ['Floor ' + i, val]
            ];
            opts['lvl'] = val;
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
              greenFrom: 0, greenTo: 30,
              redFrom: 70, redTo: 100,
              yellowFrom: 30, yellowTo: 70,
              minorTicks: 5,
              min: 0, max: 100,
              majorTicks: ['0', '20', '40', '60', '80', '100'],
              greenColor: '#d0e9c6',
              redColor: '#e9d0c6',
              yellowColor: '#ffcf94'
            }
          };

        }
      });
  }

  noiseShare() {
    this.navCtrl.push(NoiseSharePage);
  }

  openForm(){
    this.navCtrl.push(PartnerFormPage);
  }

  openPlace(num:any) {
    let floor = JSON.parse(JSON.stringify(this.floors[num - 1]));
    floor.data.options.width = 150;
    floor.data.options.height = 150;
    this.navCtrl.push(PlacePage, {floor: floor});
  }
}
