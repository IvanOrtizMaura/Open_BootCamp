import { Component } from '@angular/core';
import { IContacto } from 'src/app/models/contact.interfaces';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  listaContactos: IContacto[] = [
    {
      id: 0,
      nombre: 'Ivan',
      apellidos: 'Ortiz',
      email:'Ivantiz45@gmail.com'
    },
    {
      id: 1,
      nombre: 'Inés',
      apellidos: 'Bullejos',
      email:'Ivantiz45@gmail.com'
    },
    {
      id: 2,
      nombre: 'Marcos',
      apellidos: 'Lijó',
      email:'Ivantiz45@gmail.com'
    },
  ]

}
