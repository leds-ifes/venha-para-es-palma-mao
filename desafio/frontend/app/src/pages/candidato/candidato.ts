import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { HttpProvider } from './../../providers/http/http';

/**
 * Generated class for the CandidatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-candidato',
  templateUrl: 'candidato.html',
})
export class CandidatoPage {
  cpf:string
  lstConcursos = []
  loadingCtrl: LoadingController

  constructor(public navCtrl: NavController, public navParams: NavParams, public NavParams: NavParams, public api: HttpProvider, public loadCtrl: LoadingController ) {

    let cpf = navParams.get('cpf')
    this.api.getStrProfissoes(cpf).subscribe((data: {id:string, nome:string, data_de_nascimento:string, cpf:string, profissoes:string}) => {
      var profissoes = data.profissoes
      console.log(profissoes)

        this.api.getFirstQuestion(profissoes).subscribe((data: {orgao:string, data_de_nascimentoedital: string, codigo_do_concurso:string}[])=>{
          this.lstConcursos = data
          console.log(this.lstConcursos)
        });
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandidatoPage');
  }

}
