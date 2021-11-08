import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string;
  password: string;

  constructor( private authService: AuthService,
    public router: Router ) { }

  ngOnInit(): void {
  }

  Login(){
    this.authService.Login(this.email, this.password).then(res => {
      this.router.navigate(['/inicio']);
    }).catch(err => alert('Los datos son incorrectos o el usuario no existe'))
  }

}
