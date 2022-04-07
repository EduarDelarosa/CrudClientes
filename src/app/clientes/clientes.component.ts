import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ActualizarClienteComponent } from '../actualizar-cliente/actualizar-cliente.component';
import { ClienteService } from '../cliente.service';
import { ICliente } from '../models/ICliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['Nombres', 'Apellidos', 'Documento', 'Direccion', 'Telefono', 'Acciones'];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private clienteService: ClienteService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<ICliente>(data.result as ICliente[]);
      this.dataSource.paginator = this.paginator
      console.log(data);
    },
    (errorData: any) => {
      this.router.navigate(['/login'])
    });
  }

  actualizarCliente(cliente: ICliente){
    console.log(cliente);

    this.dialog.open(ActualizarClienteComponent, {
      data: {
        nombres: cliente.nombres,
        apellidos: cliente.apellidos,
        direccion: cliente.direccion,
        telefono: cliente.telefono,
        documento: cliente.documento,
        id: cliente.id
      }
    })
  }

  aplicarFiltro(filtro: any){
    this.dataSource.filter = filtro.target.value.trim().toLowerCase();
  }

}
