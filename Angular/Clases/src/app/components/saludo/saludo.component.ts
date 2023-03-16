import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit, OnChanges, OnDestroy {
  @Input() nombre: string = 'Anonimo';
  @Output() mensajeEmiter: EventEmitter<string> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngChanges El componente recibe cambios',changes['nombre'].currentValue);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy El componente se va a eliminar');
  }

  enviarMensajeAlPadre(): void {
    // alert(`Hola ${this.nombre}. Alert despachada desde un click`);
    this.mensajeEmiter.emit(
      `Hola ${this.nombre}. Alert despachada desde un click`
    );
  }
}
