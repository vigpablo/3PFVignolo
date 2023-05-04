import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { TablasModule } from '../dashboard/pages/tablas/tablas.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { CursosModule } from './pages/cursos/cursos.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list'; 
import { TablasComponent } from './pages/tablas/tablas.component';
import { DetalleAlumnosComponent } from './pages/tablas/detalle-alumnos/detalle-alumnos.component';
import { CursosComponent } from './pages/cursos/cursos.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    //TablasModule,
    DirectivesModule,
    //CursosModule,
    MatListModule,
    RouterModule.forChild([
      {
        // http://localhost:XXXX/dashboard/estudiantes
        path: 'estudiantes',
        loadChildren: () => import('./pages/tablas/tablas.module').then((m) => m.TablasModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('./pages/cursos/cursos.module').then((m) => m.CursosModule),
      }
    ])
    
    
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
