import { Component, Pipe } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { HttpProvider } from './../../providers/http/http';


/**
 * Generated class for the ConcursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-concurso',
  templateUrl: 'concurso.html',
})

export class ConcursoPage {

  codConcurso:string
  lstCandidatos = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public NavParams: NavParams, public api: HttpProvider, public loadCtrl: LoadingController ) {
      let codConcurso = navParams.get('codConcurso')
      this.api.getStrVagas(codConcurso).subscribe((data: {id:string, orgao:string, edital:string, codigo_do_concurso:string, lista_de_vagas:string}) => {
        var vagas = data.lista_de_vagas
        console.log(vagas)

          this.api.getSecondQuestion(vagas).subscribe((data: {nome:string, data_de_nascimento:Date, cpf:string}[])=>{
            this.lstCandidatos = data
            console.log(this.lstCandidatos)
          });
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConcursoPage');
  }
}
