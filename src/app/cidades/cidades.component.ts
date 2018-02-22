import { CidadeService } from './../cidade.service';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  providers: [CidadeService],
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  cidade = {};
  cidades: any[] = [];
  cidadesCombo = [];
  ufsCombo: any[] = [];
  selectedUf: string = "SP";
  selectedIdMunicipio: number = 1;
  qtdPaginas = 0;
  paginacao = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  paginacaoOffset = 0;

  constructor(
    private service: CidadeService
  ) { }

  ngOnInit() {
    this.carga();
    this.contaPaginas();
    this.service.obtemUfsCombo().subscribe(res => this.ufsCombo = res);
  }

  onChangeUf() {
    this.service.obtemCidadesCombo(this.selectedUf).subscribe(res => this.cidadesCombo = res);
  }

  onChangeMunicipio() {
    this.service.obtemCidade(this.selectedIdMunicipio).subscribe(res => this.cidade = res);
  }

  carga() {
    this.paginado(0); 
  }

  contaPaginas() {
    this.service.contaPaginas().subscribe(res => this.qtdPaginas = parseInt(res));
  }

  paginado(pagina: number) {
    this.service.obtemCidades(pagina).subscribe(res => this.cidades = res);
  }

  selecionaCidade(cidadeId: number) {
    this.service.obtemCidade(cidadeId).subscribe(res => this.cidade = res);
  }

  proximo() {
    this.paginacaoOffset = this.paginacaoOffset + 20;
    for (let num in this.paginacao) {
      this.paginacao[num] = this.paginacaoOffset + parseInt(num);
    }
    this.paginado(this.paginacao[0]);
    console.log(this.paginacaoOffset);
  }

  anterior() {
    if (this.paginacaoOffset > 0) {
      this.paginacaoOffset = this.paginacaoOffset - 20;
      for (let num in this.paginacao) {
        this.paginacao[num] = this.paginacaoOffset + parseInt(num);
      }
      this.paginado(this.paginacao[0]);
    }
    console.log(this.paginacaoOffset);
  }

}
