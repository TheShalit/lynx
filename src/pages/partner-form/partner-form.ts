import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WillBeNotifyPage} from "../will-be-notify/will-be-notify";
import {PartnersListPage} from "../partners-list/partners-list";


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

  constructor(public navCtrl:NavController, public navParams:NavParams) {
    this.lookingForPartner = navParams.get('lookingForPartner');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartnerFormPage');
  }

  send(){
    if (this.lookingForPartner) {
      this.navCtrl.push(PartnersListPage);
    } else {
      this.navCtrl.push(WillBeNotifyPage);
    }
  }
}
