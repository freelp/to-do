import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  items = ['--', '00', '01', '03', '04'];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private notifServic: LocalNotifications) { }


  itemSelected(item) {
    console.log('o item: ' + item + ' foi clicado');
  }


  add() {
    console.log('botao add clicado');
  }


  notify() {
    this.notifServic.schedule({
      id: 1,
      title: 'Ola Mundo',
      text: 'Porra Consegui',
      trigger: { at: new Date(new Date().getTime() + 2000) },
      data: { mydata: 'Ocular a porra toda' }
    })
  }

}
