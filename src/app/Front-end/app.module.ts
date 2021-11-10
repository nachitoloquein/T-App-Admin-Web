//Modulos
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//Componentes
import { AppComponent } from './app.component';
import { BandejaEntradaComponent } from './bandeja-entrada/bandeja-entrada.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgregarTeComponent } from './agregar-te/agregar-te.component';
import { environment } from 'src/environments/environment';
import { TeService } from '../services/te.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BandejaEntradaComponent,
    HeaderComponent,
    FooterComponent,
    AgregarTeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    Ng2SearchPipeModule
  ],
  providers: [TeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
