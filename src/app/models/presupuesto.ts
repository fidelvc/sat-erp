import { Cliente } from './cliente';
import { Producto } from './producto';
import { Proveedor } from './proveedor';

export class Presupuesto {
  id: number;
  descripción: string;
  cliente: Cliente;
  proveedor: Proveedor;
  producto: Producto;
}
