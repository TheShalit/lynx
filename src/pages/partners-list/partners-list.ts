import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PlacePage} from '../place/place';

/*
 Generated class for the PartnersList page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-partners-list',
  templateUrl: 'partners-list.html'
})
export class PartnersListPage {

  constructor(public navCtrl:NavController, public navParams:NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartnersListPage');
  }

  send() {
    this.navCtrl.push(PlacePage, {floor: 1, lookingForPartner: true});
  }

}
