import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bandeja-entrada',
  templateUrl: './bandeja-entrada.component.html',
  styleUrls: ['../header/header.component.scss']
})
export class BandejaEntradaComponent implements OnInit {
  teas: Observable<any[]>;
  constructor(db: AngularFirestore) { 
    this.teas = db.collection('te').valueChanges()
  }

  ngOnInit(): void {
  }

}
