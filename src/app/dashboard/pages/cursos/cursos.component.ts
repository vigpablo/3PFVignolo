import { Component, OnInit } from '@angular/core';
import { CursosService } from './services/cursos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from './models';
import { MatDialog } from '@angular/material/dialog';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  dataSource = new MatTableDataSource();

  displayedColumns = ['id', 'nombre', 'fecha_inicio', 'fecha_fin', 'detalle', 'editar', 'eliminar']
  constructor(private cursosService: CursosService, private dialog: MatDialog) {}

  ngOnInit():void {
    this.cursosService.obtenerCursos().subscribe ({
      next: (cursos) => {
        this.dataSource.data = cursos
      }
    })
  }

  abrirABMCursos(): void {
    const dialog = this.dialog.open(AbmCursosComponent);

    dialog.afterClosed()
    .subscribe((formvalue) => {
      if (formvalue) { 
      this.cursosService.crearCurso(formvalue);
      }
    }); 
}

editarCurso(curso: Curso): void {
  const dialog = this.dialog.open(AbmCursosComponent, {
    data: {
      curso,
    }
  })

  dialog.afterClosed()
  .subscribe((formvalue) => {
    if (formvalue) {
      this.cursosService.editarCurso(curso.id, formvalue)
    }
  })
}

eliminarCurso(curso: Curso): void {
  if (confirm('Está seguro que desea elimar el curso?'))
  this.cursosService.eliminarCurso(curso.id);
}

  aplicarFiltros(ev: Event): void {

  }

  irAlDetalle(cursoId: number): void {

  }

  
  
}
