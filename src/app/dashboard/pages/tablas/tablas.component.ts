import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlumnosService } from './services/alumnos.service';



export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  fecha_registro: Date; 
}

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {

  dataSource = new MatTableDataSource<Estudiante>();

  displayedColumns: string[] = ['id','nombreCompleto', 'fecha_registro', 'eliminar', 'ver_detalle', 'editar'];

  aplicarFiltros (ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;

    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor (private matDialog: MatDialog, private router: Router, private alumnosService: AlumnosService){
    this.alumnosService.obtenerEstudiantes().subscribe((alumnos) => {
      this.dataSource.data = alumnos;
    })
  }


  irAlDetalle(alumnoId: number): void {
    this.router.navigate([ 'dashboard', 'estudiantes', alumnoId])
  }

  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)

    dialog.afterClosed().subscribe((valor) => { 
    if (valor) {
      this.dataSource.data = [
        ...this.dataSource.data,
         {
          ...valor,
          fecha_registro: new Date(),
          id: this.dataSource.data.length + 1, 
        } 
      ];
    }
  })
  }

eliminarAlumno(alumnoParaEliminar: Estudiante): void {
  this.dataSource.data = this.dataSource.data.filter (
    alumnoActual => alumnoActual.id !== alumnoParaEliminar.id
  );
}

editarAlumno(alumnoParaEditar: Estudiante): void {
  const dialog = this.matDialog.open(AbmAlumnosComponent, {
    data: {
      alumnoParaEditar
    }
  });

  dialog.afterClosed().subscribe((valorDelFormulario)=>{
    if (valorDelFormulario) {
      this.dataSource.data = this.dataSource.data.map (
        (alumnoActual) => alumnoActual.id === alumnoParaEditar.id
        ? ({...alumnoActual, ...valorDelFormulario})
        : alumnoActual,
      );
    }
  })
}

}
