import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mocks';
import { IContacto } from '../models/interfaces/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): IContacto[] {
    return CONTACTOS // Nos devuelven una lista de contactos
  }

  obtenerContactoPorID(id: number): IContacto | undefined {
    // Buscamos el contacto dentro de la lista por un id
    const contacto = CONTACTOS.find((contacto: IContacto) => contacto?.id === id);

    if (contacto) {
      return contacto;
    } else {
      return;
    }
  }

}
