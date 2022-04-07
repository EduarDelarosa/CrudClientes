import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.scss']
})
export class ActualizarClienteComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(private fb: FormBuilder,
              private clienteService: ClienteService,
              private router: Router,
              private dialogref: MatDialogRef<ActualizarClienteComponent>,
              @Inject(MAT_DIALOG_DATA) private data: {nombres:string, apellidos:string, direccion: string, telefono: string, documento:string, id: number}
              ) {
                this.id = data.id;
                this.form = fb.group({
                  nombres: [data.nombres, Validators.required],
                  apellidos: [data.apellidos, Validators.required],
                  direccion: [data.direccion, Validators.required],
                  telefono: [data.telefono, Validators.required],
                  documento: [data.documento, Validators.required]
                })
              }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogref.close();
  }

  guardar(){
    this.form.value.id = this.id;
    this.clienteService.actualizarCliente(this.id, this.form.value).subscribe(data => {
      this.router.navigate(['/clientes']);
      window.location.reload();
    });
    this.dialogref.close();
  }

}
