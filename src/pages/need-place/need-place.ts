import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PlacesPage} from "../places/places";

/*
  Generated class for the NeedPlace page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-need-place',
  templateUrl: 'need-place.html'
})
export class NeedPlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NeedPlacePage');
  }

  gotoPlaces(){
    this.navCtrl.push(PlacesPage);
  }
}
