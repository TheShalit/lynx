import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFire} from 'angularfire2';
import {SocialSharing} from '@ionic-native/social-sharing';
import {HomePage} from "../home/home";

/*
 Generated class for the Place page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-place',
  templateUrl: 'place.html'
})
export class PlacePage {
  public floor:any;
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
      }
    }
  ];
  public lookingForPartner:any;

  constructor(public navCtrl:NavController, public af:AngularFire, public navParams:NavParams, private alertCtrl:AlertController,
              private socialSharing:SocialSharing) {
    let me = this;
    this.lookingForPartner = !!navParams.get('lookingForPartner');
    me.floor = navParams.get('floor');
    if (!isNaN(me.floor))
      me.floor = this.floors[me.floor];

    af.database.object('/meters')
      .subscribe(function (item:any) {
        if (item) {
          let opts = me.floor;
          let val = ((+item['floor' + me.floor.num] || 50) / 40 - 1.25) * 70 + 30;

          opts['data']['dataTable'] = [
            ['Label', 'Floor ' + me.floor.num],
            ['Floor ' + me.floor.num, val]
          ];
          opts['data'] = Object.assign({}, opts['data']);
          opts['lvl'] = val;
          me.floor = Object.assign({}, opts);
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  share() {
    this.socialSharing.share('there is ' + this.floor.data.dataTable[1][1] + '% noise', 'Noise in the library').then(() => {
      // Success!
    }).catch((msg) => {
      console.log(msg);
    });
  }

  bethere() {
    let alert = this.alertCtrl.create({
      title: 'Partner Found!',
      subTitle: 'A message with your information was sent to Edan',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.setRoot(HomePage);
  }

}
