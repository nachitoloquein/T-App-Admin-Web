import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BandejaEntradaComponent } from './bandeja-entrada/bandeja-entrada.component';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path: '', redirectTo: '/login', pathMatch: 'full'  },
  { path: 'inicio', component: BandejaEntradaComponent, canActivate: [LoginGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
