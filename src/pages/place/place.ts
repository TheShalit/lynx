import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
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

  constructor(public navCtrl:NavController, public navParams:NavParams, private socialSharing:SocialSharing) {
    this.floor = navParams.get('floor');
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
