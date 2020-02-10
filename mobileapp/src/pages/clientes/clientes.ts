import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
  @ViewChild(Nav) nav: Nav;
  // clientes = [{ "id": 8, "nome": "João", "data_nasc": "1993-05-07T03:00:00.000Z", "cpf": "122.256.739-70", "cidade": "São Paulo", "uf": "SP", "produtos": null }, { "id": 9, "nome": "Lucas", "data_nasc": "1999-03-30T03:00:00.000Z", "cpf": "143.476.739-40", "cidade": "Vitória", "uf": "ES", "produtos": null }, { "id": 10, "nome": "Magno", "data_nasc": "1989-08-29T03:00:00.000Z", "cpf": "153.656.549-10", "cidade": "Cariacica", "uf": "ES", "produtos": null }, { "id": 11, "nome": "Helen", "data_nasc": "2000-01-30T02:00:00.000Z", "cpf": "323.876.369-40", "cidade": "Vila Velha", "uf": "ES", "produtos": null }, { "id": 12, "nome": "Marcos", "data_nasc": "1992-03-20T03:00:00.000Z", "cpf": "623.386.459-60", "cidade": "Rio de Janeiro", "uf": "RJ", "produtos": null }, { "id": 13, "nome": "Obadias", "data_nasc": "1996-12-13T02:00:00.000Z", "cpf": "325.469.946-30", "cidade": "Serra", "uf": "ES", "produtos": null }, { "id": 14, "nome": "Maria Lúcia", "data_nasc": "2002-09-06T03:00:00.000Z", "cpf": "893.564.673-20", "cidade": "Recife", "uf": "PE", "produtos": null }];
  clientes = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public clientesProvider: ClientesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
    this.clientesProvider.getClientes().subscribe({
      next: (clientes: []) => {
        console.log(clientes);
        this.clientes = clientes;
      }
    })
  }

  openDetalhes(cliente) {
    const params = {
      cliente: cliente
    }
    this.nav.push('DetalhesPage', params);
  }
}
