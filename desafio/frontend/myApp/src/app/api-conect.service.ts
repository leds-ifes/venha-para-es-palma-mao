import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiConectService {

  constructor(public http: HttpClient) {
    console.log('funciona');
  }

  getProfissoes( cpf:string ){
    return this.http.get('http://localhost:3000'+cpf)
  }
  getLstVagas( codConcurso:string ) {
    return this.http.get('http://localhost:3000'+codConcurso)
  }
  
}
