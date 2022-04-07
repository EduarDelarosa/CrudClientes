import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent {

  constructor(private clienteService: ClienteService, private router: Router) { }

  clienteForm = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    documento: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required)
  });

  agregarCliente(){
    console.log(this.clienteForm.value);

    this.clienteService.crearCliente(this.clienteForm.value).subscribe((data:any) =>{
      alert('Cliente Creado');
      this.router.navigate(['/clientes']);
    })
  }

}
