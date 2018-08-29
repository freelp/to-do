import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  formulario: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    public viewCtrl: ViewController) {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formulario = this.formBuilder.group({
      text: [],
      data: [],
      hora: [],
    });
  }

  salvar() {
    console.log('botao salvar clicado');
    this.viewCtrl.dismiss(this.formulario.value);
  }

}
