import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
  //i18nSelect
  nombre: string = 'Manuel'
  genero: string = 'masculino'
  opcionesUn = {
    'masculino':'un',
    'femenino': 'una'
  }
  opcionesDev = {
    'masculino':'desarrollador',
    'femenino': 'desarrolladora'
  }

  //i18nPlural
  clientes: string[] = ["Manuel","Patro","Rosas"]
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  //KeyValue
  campeon = {
    name: 'Jhin',
    frase: 'Sublime!',
    skin: 'Proyecto'
  }
  //json
  campeones = [
    {
      name: 'Draven',
      frase: 'Draven noo, Draaveen!',
      skin: 'Draven caído'
    },
    {
      name: 'Urgot',
      frase: '***!',
      skin: 'Armadura bélica'
    },
    {
      name: 'Jhin',
      frase: 'Sublime!',
      skin: 'Proyecto'
    },
  ]

  // Async Pipe
  miObservable = interval(2000)
  activated: boolean = false
  prom!: Promise<any>

  activarPromesa() {
    this.activated = true
    this.prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Soy la promesa :v')
      },3500)
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambio() {
    if(this.genero === 'masculino'){
      this.nombre = 'Cortana'
      this.genero = 'femenino'
    }else {
      this.nombre = 'John'
      this.genero = 'masculino'
    }
  }

  add() {
    this.clientes.push('somebody')
  }
  deleteC() {
    this.clientes.splice(this.clientes.length-1,this.clientes.length )
  }
}
