import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablasComponent } from './dashboard/pages/tablas/tablas.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { DetalleAlumnosComponent } from './dashboard/pages/tablas/detalle-alumnos/detalle-alumnos.component';

const routes: Routes = [

{
  path: 'dashboard',
  component: DashboardComponent,
  children: [ 
    {
      path: 'estudiantes',
      component: TablasComponent,
     },
     {
      path: 'estudiantes/:id',
      component: DetalleAlumnosComponent,
    },
    {
      path: 'cursos',
      component: CursosComponent
    } 
  ]
},
{
  path: 'auth',
  component: AuthComponent,
  children: [
    {
      path:'login',
      component: LoginComponent
    }
  ]
},
{
  path: '**',
  redirectTo: 'dashboard',
},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
