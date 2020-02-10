import { HttpProvider } from './../../providers/http/http';
import { ConcursoPage } from './../concurso/concurso';
import { CandidatoPage } from './../candidato/candidato';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  input:string

  getCpf(input){
    console.log(input)
    this.paginaCandidato(input)
    return input
  }
  getCodConcurso(input){
    console.log(input)
    this.paginaConcurso(input)
    return input
  }
  paginaCandidato(input){
    this.navCtrl.push(CandidatoPage, {cpf: input})
  }
  paginaConcurso(input){
    this.navCtrl.push(ConcursoPage, {codConcurso: input})
  }
  
  constructor(public navCtrl: NavController,
     public NavParams: NavParams,
     public api: HttpProvider,
     public loadCtrl: LoadingController ) {
  }

}
