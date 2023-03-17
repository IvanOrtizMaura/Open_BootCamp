import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/interfaces/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrls: ['./lista-contacto.component.scss'],
})
export class ListaContactoComponent implements OnInit, OnDestroy {
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;
  susbcripcion: Subscription | undefined;

  constructor(private contatoService: ContactoService) {}
  ngOnDestroy(): void {
    this.susbcripcion?.unsubscribe;
  }

  ngOnInit(): void {
    this.contatoService
      .obtenerContactos()
      .then((lista: IContacto[]) => (this.listaContactos = lista))
      .catch((error) =>
        console.error(
          `Ha habnido un error al recuperar la  lista de contactos: ${error}`
        )
      )
      .finally(() => console.log('Peticion de lista de contactos terminado'));
  }

  obtenerDatos(id: number) {
    // console.log(`El id del usuarisario es ${id}`)
    this.susbcripcion = this.contatoService
      .obtenerContactoPorID(id)
      ?.subscribe(
        (contacto: IContacto) => (this.contactoSeleccionado = contacto)
      );
  }
}
