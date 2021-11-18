import { Component, OnInit } from '@angular/core';
import { TeService } from 'src/app/services/te.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bandeja-entrada',
  templateUrl: './bandeja-entrada.component.html',
  styleUrls: ['../header/header.component.scss']
})
export class BandejaEntradaComponent implements OnInit {
  
  term:string;


  editarTe:any={
  nombre: '',
  dificultad: 0,
  urlNacionalidad: '',
  foto: '',
  instrucciones: '',
  temperatura: '',
  tipoTe: '',
  favorito: Boolean
  }

  teas:any;
  constructor(private teService: TeService) {  
    this.teService.listaTeas().subscribe(tea=>{
      this.teas = tea;
    })
  }

  ngOnInit(){
  }

  eliminar(tea){
    this.teService.eliminarTe(tea);
  }

  editar(tea){
    this.editarTe = tea;
  }

  agregarTeEditado(){
    this.teService.editarTe(this.editarTe);
  }

}
