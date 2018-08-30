import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private notasList: Observable<any>;

  constructor(private db: AngularFirestore, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.notasList = this.db.collection('notas').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  itemSelected(item) {
    console.log('o item: ' + item.text + ', foi Deletado');
  }

  getListItens() {
    return this.notasList;
  }

  add() {
    let addModal = this.modalCtrl.create('AddPage');
    addModal.onDidDismiss(data => { this.salvarTarefa(data) });
    addModal.present();
  }

  private salvarTarefa(data: any) {
    if (data != null && data.text != null) {
      this.db.collection('notas').add(data)
        .then(result => { console.log(result.id) })
        .catch(err => { console.log(err) })
    }
  }

  private delete(note) {
    this.db.collection('notas').doc(note.id).delete();
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
