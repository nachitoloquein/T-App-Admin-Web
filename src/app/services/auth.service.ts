import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth,
    private router: Router) { }

  Login(email: string, password: string){
    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user =>{
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logout(){
    this.AFauth.signOut().then(() =>
    {
      this.router.navigate(['/login']);
    });
  }

}
