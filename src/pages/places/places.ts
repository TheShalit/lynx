import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DBMeter} from '@ionic-native/db-meter';
import {AngularFire} from 'angularfire2';

/*
 Generated class for the Places page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
  providers: [
    DBMeter
  ]
})
export class PlacesPage {

  public gaugeChartOptions:any = {
    chartType: 'Gauge',
    dataTable: [
      ['Label', 'Value'],
      ['Value', 1.78]
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

  constructor(public navCtrl:NavController, public navParams:NavParams, public af:AngularFire, private dbMeter:DBMeter) {
    let me = this;
    af.database.object('/dbmeter')
      .subscribe(function (item:any) {
        if (item)
          me.gaugeChartOptions = {
            chartType: 'Gauge',
            dataTable: [
              ['Label', 'Value'],
              ['Value', +item.$value / 10 - 4]
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
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }
}
