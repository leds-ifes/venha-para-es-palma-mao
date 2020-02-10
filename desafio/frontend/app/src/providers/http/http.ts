import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  testhttp() {
    return console.log(this.http.get('http://localhost:3000'))
  }

  getStrProfissoes(cpf){
    return this.http.get('http://localhost:3000/candidato/'+ cpf)
  }

  getStrVagas(codConcurso) {
    return this.http.get('http://localhost:3000/concurso/'+ codConcurso)
  }
  getFirstQuestion(strProfissoes){
    return this.http.get('http://localhost:3000/concurso/candidato/'+strProfissoes)
  }
  getSecondQuestion(strVagas){
    return this.http.get('http://localhost:3000/candidato/concurso/'+strVagas)
  }

}
