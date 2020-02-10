import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClienteDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-detalhes',
  templateUrl: 'cliente-detalhes.html',
})
export class ClienteDetalhesPage {
  cliente = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = navParams.get('cliente')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClienteDetalhesPage');
  }

}
