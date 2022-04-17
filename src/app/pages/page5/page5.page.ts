import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
})
export class Page5Page implements OnInit {

  efeturarSoliContainer = true;
  minhasSoliContainer = false;

  constructor() { }

  ngOnInit() {
  }

  showSolicitacoes() {
    this.efeturarSoliContainer = true;
    this.minhasSoliContainer = false;
  }

  showSolicitacoesOptions() {
    this.efeturarSoliContainer = false;
    this.minhasSoliContainer = true;
  }

}
