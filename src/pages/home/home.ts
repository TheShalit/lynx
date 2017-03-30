import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {GooglePlus} from '@ionic-native/google-plus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl:NavController, private googlePlus:GooglePlus) {

  }

  login() {
    this.googlePlus.login({
      'webClientId': 'USE-YOURS-HERE!!!!!.apps.googleusercontent.com',
      'offline': true
    }).then((obj) => {
      if (!firebase.auth().currentUser) {
        firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(obj.idToken))
          .then((success) => {
            console.log(success);
          })
          .catch((gplusErr) => {
            console.log(gplusErr);
          });
      }
    }).catch((msg) => {
      console.log(msg);
    });
  }

}
