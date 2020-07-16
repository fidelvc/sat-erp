import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  cliente: Cliente;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cliente = new Cliente(undefined, undefined); // undefined undefined
  }

  crear() {
    this.clienteService.create(this.cliente).subscribe((data) => {
      console.log('Se ha creado el Cliente' + data.nombre);
      this.cliente = new Cliente(undefined, undefined);
    });
  }
}
