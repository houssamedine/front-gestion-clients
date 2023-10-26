import { NgModule } from '@angular/core';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ListaProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    DetalleProductoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],

})
export class ProductoModule { }
