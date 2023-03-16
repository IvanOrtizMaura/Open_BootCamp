import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  nombre = 'Martin'

  recibirMensajeHijo(evento: string){
    alert(evento)
  }
}




