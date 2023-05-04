import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TablasComponent } from './tablas.component';
import { DetalleAlumnosComponent } from './detalle-alumnos/detalle-alumnos.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TablasComponent
      },
      {
        path: ':id',
        component: DetalleAlumnosComponent
      }
    ])
  ],
  exports:[
    RouterModule,
  ]
  
})
export class TablasRoutingModule { }
