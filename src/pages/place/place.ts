import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AngularFire} from 'angularfire2';
import {SocialSharing} from '@ionic-native/social-sharing';

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

  constructor(public navCtrl:NavController, public af:AngularFire, public navParams:NavParams, private socialSharing:SocialSharing) {
    let me = this;
    me.floor = navParams.get('floor');

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

}
