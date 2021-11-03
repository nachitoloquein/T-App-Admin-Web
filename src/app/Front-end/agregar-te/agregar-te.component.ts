import { Component, OnInit } from '@angular/core';
import { TeService } from 'src/app/services/te.service';

@Component({
  selector: 'app-agregar-te',
  templateUrl: './agregar-te.component.html',
  styleUrls: ['../header/header.component.scss']
})
export class AgregarTeComponent implements OnInit {

  tea:any={
  nombre: '',
  dificultad: 0,
  urlNacionalidad: '',
  foto: '',
  instrucciones: '',
  temperatura: '',
  tipoTe: '',
  }

  constructor(private teService: TeService) { }

  ngOnInit(): void {
  }

}
