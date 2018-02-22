import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

const protocolo = 'http';
const servidor =  'localhost';
const porta = '4040';
const urlbase = protocolo + '://' + servidor + ':' + porta;
const urlCidadesCombo: string = urlbase + '/cidades/combo/';
const urlUfsCombo: string = urlbase + '/ufs/combo/';
const urlCidades: string = urlbase + '/cidades/';
const urlPaginas: string = urlbase + '/cidades/paginas';
const urlCidade: string = urlbase + '/cidade/';

@Injectable()
export class CidadeService {

  constructor(private http: Http) { }

  getServer(url) {
    return this.http.get(url)
      .map(res => res.json());
  }

  obtemCidadesCombo(uf: string) {
    return this.getServer(urlCidadesCombo.concat(uf));
  }

  obtemUfsCombo() {
    return this.getServer(urlUfsCombo);
  }

  obtemCidade(id: number) {
    return this.getServer(urlCidade.concat(id.toString()));
  }

  obtemCidades(pagina: number) {
    return this.getServer(urlCidades.concat(pagina.toString()));
  }

  contaPaginas() {
    return this.getServer(urlPaginas);
  }

}
