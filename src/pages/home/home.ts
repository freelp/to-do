import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private itensCollection: AngularFirestoreCollection<any>;
  private listItens: Observable<any>;

  constructor(
    private db: AngularFirestore,
    private modalCtrl: ModalController) {
    this.itensCollection = this.db.collection("notas");
    this.listItens = this.itensCollection.valueChanges();
  }


  itemSelected(item) {
    console.log('o item: ' + item.text + ', foi clicado');
  }


  add() {
    let addModal = this.modalCtrl.create('AddPage');
    addModal.onDidDismiss(data => { this.salvarTarefa(data) });
    addModal.present();
  }

  private salvarTarefa(data: any) {
    this.itensCollection.add(data)
      .then(result => { console.log(result.id) })
      .catch(err => { console.log(err) })
  }


  // notify() {
  //   this.notifServic.schedule({
  //     id: 1,
  //     title: 'Ola Mundo',
  //     text: 'Porra Consegui',
  //     trigger: { at: new Date(new Date().getTime() + 2000) },
  //     data: { mydata: 'Ocular a porra toda' }
  //   })
  // }

}
