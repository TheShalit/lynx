import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {NeedPlacePage} from '../pages/need-place/need-place';
import {PlacesPage} from '../pages/places/places';
import {PlacePage} from '../pages/place/place';
import {PartnerFormPage} from '../pages/partner-form/partner-form';
import {PartnersList} from '../pages/partners-list/partners-list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SocialSharing} from '@ionic-native/social-sharing';

// Import the AF2 Module
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {GooglePlus} from '@ionic-native/google-plus';
import {WelcomePage} from "../pages/welcome/welcome";
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {NoiseSharePage} from "../pages/noise-share/noise-share";


// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAI1BqZwuNOKkC1Rl7CldY7U3um_wRStwc",
  authDomain: "lynx-163108.firebaseapp.com",
  databaseURL: "https://lynx-163108.firebaseio.com",
  storageBucket: "lynx-163108.appspot.com",
  messagingSenderId: "595907167294"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
  scope: ['email', 'id', 'name', 'picture'],
  offline: true
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    NeedPlacePage,
    PlacesPage,
    NoiseSharePage,
    PartnerFormPage,
    PlacePage,
    PartnersList
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    Ng2GoogleChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    NeedPlacePage,
    PlacesPage,
    NoiseSharePage,
    PartnerFormPage,
    PlacePage,
    PartnersList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
