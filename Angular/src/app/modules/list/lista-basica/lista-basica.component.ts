import { Component, OnInit } from '@angular/core';

export type Producto = {
  nombre: string,
  precio: number,
  descripcion: string

}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss'],
})
export class ListaBasicaComponent implements OnInit {
  opcion: number = 0;
  listElement: Producto[] = [
    {
      nombre: "Leche",
      precio: 2,
      descripcion: "Leche entera"
    },
    {
      nombre: "Carne",
      precio: 50,
      descripcion: "Carne cerdo"
    }
  ];

  cargando: boolean = false;

  ngOnInit(): void {}
  cambiarCargando() {
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcion: number){
    this.opcion = opcion
  }
}
