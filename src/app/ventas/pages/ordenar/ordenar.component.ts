import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  isMayus = true
  orderBy: string = ''
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Deadpoll',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
  cambio(){
    this.isMayus = !this.isMayus
  }

  changeOrder(valor: string) {
    if(this.orderBy === 'vuela' && valor === 'vuela') {
      this.orderBy = 'no-vuela'
      return
    } 
    this.orderBy = valor
  }
}
