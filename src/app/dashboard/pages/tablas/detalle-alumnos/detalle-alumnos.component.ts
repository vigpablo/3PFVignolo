import { Component } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { ActivatedRoute } from '@angular/router';
import { Estudiante } from '../tablas.component';

@Component({
  selector: 'app-detalle-alumnos',
  templateUrl: './detalle-alumnos.component.html',
  styleUrls: ['./detalle-alumnos.component.scss']
})
export class DetalleAlumnosComponent {

  alumno: Estudiante | undefined;

constructor(
  private activatedRoute: ActivatedRoute,
  private alumnosService: AlumnosService,
  ) {
  this.alumnosService.obtenerEstudiantePorId(parseInt(this.activatedRoute.snapshot.params['id']))
  .subscribe((alumno) => this.alumno = alumno);
}

}
