import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LocalNotifications } from '@ionic-native/local-notifications';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2Hpmm9V6LZw2xlmhCJUzLK0fEJkwCc4U",
  authDomain: "to-do-pwa-3ffd9.firebaseapp.com",
  databaseURL: "https://to-do-pwa-3ffd9.firebaseio.com",
  projectId: "to-do-pwa-3ffd9",
  storageBucket: "to-do-pwa-3ffd9.appspot.com",
  messagingSenderId: "518679561649"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
