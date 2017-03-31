import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {PartnersListPage} from "../partners-list/partners-list";
import {HomePage} from "../home/home";


/*
 Generated class for the PartnerForm page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-partner-form',
  templateUrl: 'partner-form.html'
})
export class PartnerFormPage {
  public lookingForPartner:any;

  constructor(public navCtrl:NavController, public navParams:NavParams, private alertCtrl:AlertController) {
    this.lookingForPartner = navParams.get('lookingForPartner');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartnerFormPage');
  }

  send() {
    if (this.lookingForPartner) {
      this.navCtrl.push(PartnersListPage);
    } else {
      let alert = this.alertCtrl.create({
        title: 'Waiting for a partner',
        subTitle: 'As soon as we will find a match, you will get a notification.<br/>Good Luck!',
        buttons: ['Ok']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage);
    }
  }
}
