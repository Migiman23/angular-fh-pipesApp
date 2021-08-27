import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 3155242.5126
  procentaje: number = 0.48
  constructor() { }

  ngOnInit(): void {
  }

}
