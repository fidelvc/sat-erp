import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProveedorComponent,
    ProductoComponent,
    PresupuestoComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
