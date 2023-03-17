import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mocks';
import { IContacto } from '../models/interfaces/contacto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor() {}

  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS); // Nos devuelven una lista de contactos
  }

  obtenerContactoPorID(id: number): Observable<IContacto> | undefined {
    // Buscamos el contacto dentro de la lista por un id
    const contacto = CONTACTOS.find(
      (contacto: IContacto) => contacto?.id === id
    );

    let observable: Observable<IContacto> = new Observable((observer) => {
      observer.next(contacto); //Empitir un valir a todo componente suscrito
      observer.complete();
    });
    if (contacto) {
      return observable;
    } else {
      return;
    }
  }
}
