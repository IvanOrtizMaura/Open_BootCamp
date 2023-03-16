import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/interfaces/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrls: ['./lista-contacto.component.scss']
})
export class ListaContactoComponent implements OnInit {
  listaContactos: IContacto[] = []
  contactoSeleccionado : IContacto | undefined;

  constructor(private contatoService: ContactoService) { }

  ngOnInit(): void {
    this.listaContactos = this.contatoService.obtenerContactos()
  }

  obtenerDatos(id: number) {
    // console.log(`El id del usuarisario es ${id}`)
    this.contatoService.obtenerContactoPorID(id);

  }

}
