import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';
import {HomePage} from '../home/home';

/*
 Generated class for the Welcome page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(private googlePlus:GooglePlus, public navCtrl:NavController, public navParams:NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login() {
    this.navCtrl.setRoot(HomePage);
    // this.googlePlus.login({
    //   webClientId: '595907167294-c6h4io3arjnk0sttckeonb1b8bv8bh44.apps.googleusercontent.com'
    // }).then((obj:any) => {
    //   console.log(obj);
    //   if (!firebase.auth().currentUser) {
    //     console.log(obj);
    //     firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(obj.idToken))
    //       .then((success) => {
    //         console.log(success);
    //       })
    //       .catch((gplusErr) => {
    //         console.log(gplusErr);
    //       });
    //   }
    // }).catch((msg) => {
    //   console.error(msg);
    //   this.navCtrl.push(HomePage);
    // });
  }
}
