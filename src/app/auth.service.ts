import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from './models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApi : string = 'https://localhost:7229/api/EmpresaUsers/'

  constructor(private _http: HttpClient, private router: Router) { }


  register(user: IUser){
    return this._http.post(this.urlApi+'Register', user);
  }

  login(user: IUser){
    return this._http.post(this.urlApi+'Login', user);
  }

  logout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('token_value');
    this.router.navigate(['/']);
    window.location.reload();
  }

  get getUserName(){
    return localStorage.getItem('userName');
  }

  get isAuthent(){
    return !!localStorage.getItem('token_value')
  }
}
