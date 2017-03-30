import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {GooglePlus} from '@ionic-native/google-plus';
import {DBMeter} from '@ionic-native/db-meter';

/*
 Generated class for the NoiseShare page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-noise-share',
  templateUrl: 'noise-share.html',
  providers: [
    DBMeter
  ]
})
export class NoiseSharePage {
  public dbmeter:FirebaseObjectObservable<any>;
  public floor = 'floor1';

  constructor(public navCtrl:NavController, public af:AngularFire, private googlePlus:GooglePlus, private dbMeter:DBMeter) {
    let me = this;
    me.dbmeter = af.database.object('/meters');

    me.dbMeter.start().subscribe(function (data) {
      me.dbmeter.update({[me.floor]: data});
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoiseSharePage');
  }

}
