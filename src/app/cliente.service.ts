import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICliente } from './models/ICliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private _http: HttpClient) { }

  urlApi : string = 'https://localhost:7229/api/Clientes/'

  getClientes(){

    let authToken = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Authorization': `Bearer ${authToken}`
    });

    return this._http.get(this.urlApi, { headers: headers });
  }

  getCliente(id: number){
    let authToken = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Authorization': `Bearer ${authToken}`
    });

    return this._http.get(this.urlApi+id, {headers: headers});
  }

  crearCliente(cliente: ICliente){
    let authToken = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Authorization': `Bearer ${authToken}`
    });

    return this._http.post(this.urlApi, cliente, {headers: headers});
  }

  actualizarCliente(id: number, cliente: ICliente){
    let authToken = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Authorization': `Bearer ${authToken}`
    });

    return this._http.put(this.urlApi + id, cliente, {headers: headers});
  }

  deleteCliente(id: number){
    let authToken = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Authorization': `Bearer ${authToken}`
    });

    return this._http.delete(this.urlApi+id, {headers: headers});
  }
}
