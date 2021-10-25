//Modulos
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { BandejaEntradaComponent } from './bandeja-entrada/bandeja-entrada.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgregarTeComponent } from './agregar-te/agregar-te.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BandejaEntradaComponent,
    HeaderComponent,
    FooterComponent,
    AgregarTeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
