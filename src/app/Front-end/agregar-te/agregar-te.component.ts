import { Component, OnInit } from '@angular/core';
import { TeService } from 'src/app/services/te.service';

@Component({
  selector: 'app-agregar-te',
  templateUrl: './agregar-te.component.html',
  styleUrls: ['../header/header.component.scss']
})
export class AgregarTeComponent implements OnInit {

  tea:any = {
  nombre: '',
  dificultad: 0,
  urlNacionalidad: '',
  foto: '',
  instrucciones: '',
  temperatura: '',
  tipoTe: '',
  favorito: false
  }

  constructor(private teService: TeService) { }

  ngOnInit(): void {
  }

  agregarTe(){
    this.teService.agregarTe(this.tea);
    this.limpiarParametros();
  }


  limpiarParametros(){
    this.tea.nombre = '';
    this.tea.dificultad= 0;
    this.tea.urlNacionalidad='';
    this.tea.foto='';
    this.tea.instrucciones='';
    this.tea.temperatura='';
    this.tea.tipoTe='';
  }
}
