import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrls: ['./delete-cliente.component.scss']
})
export class DeleteClienteComponent implements OnInit {

  id: any;
  cliente = {
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    documento: ''
  }

  constructor(private clienteService: ClienteService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.clienteService.getCliente(this.id).subscribe((data: any)=>{
      console.log(data);
      this.cliente.nombres = data.result.nombres;
      this.cliente.apellidos = data.result.apellidos;
      this.cliente.documento = data.result.documento;
      this.cliente.direccion = data.result.direccion;
      this.cliente.telefono = data.result.telefono;
    })
  }

  cancelar(){
    this.router.navigate(['/clientes']);
  }

  confirmar(){
    this.clienteService.deleteCliente(this.id).subscribe((data: any) => {
      this.router.navigate(['/clientes']);
    })
  }

}
