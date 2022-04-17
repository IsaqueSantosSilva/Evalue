import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page13',
  templateUrl: './page13.page.html',
  styleUrls: ['./page13.page.scss'],
})
export class Page13Page implements OnInit {
  months = [
    {
      month: 'Janeiro',
      img: 'janeiro',
    },
    {
      month: 'Fevereiro',
      img: 'fevereiro',
    },
    {
      month: 'Março',
      img: 'marco',
    },
    {
      month: 'Abril',
      img: 'abril',
    },
    {
      month: 'Maio',
      img: 'maio',
    },
    {
      month: 'Junho',
      img: 'julho',
    },
    {
      month: 'Julho',
      img: 'julho',
    },
    {
      month: 'Agosto',
      img: 'agosto',
    },
    {
      month: 'Setembro',
      img: 'setembro',
    },
    {
      month: 'Outubro',
      img: 'outubro',
    },
    {
      month: 'Novembro',
      img: 'novembro',
    },
    {
      month: 'Dezembro',
      img: 'dezembro',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
