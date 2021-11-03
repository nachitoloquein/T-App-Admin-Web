import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tea {
  nombre: string,
  dificultad: number,
  urlNacionalidad: string,
  foto: string,
  instrucciones: string,
  temperatura: string,
  tipoTe: string,
}

@Injectable()
export class TeService {
  private teasCollections: AngularFirestoreCollection<Tea>;
  private teas: Observable<Tea[]>;

  constructor(private db: AngularFirestore) { 
    this.teasCollections = db.collection<Tea>('te');
    this.teas = this.teasCollections.snapshotChanges().pipe(map(actions =>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Tea;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }

  listaTeas(){
    return this.teas
  }

  agregarTe(tea: Tea){
    this.teasCollections.add(tea);
  }
}
