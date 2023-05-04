import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Estudiante } from '../tablas.component';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  // Subject
  private estudiantes2$ = new Subject<Estudiante[]>();

  // BehaviorSubject
  private estudiantes$ = new BehaviorSubject<Estudiante[]>([
    {
      id: 1,
      nombre: 'María',
      apellido: 'Gutemberg',
      fecha_registro: new Date()
    },
    {
      id: 2,
      nombre: 'Joanna',
      apellido: 'Simplink',
      fecha_registro: new Date()
    },
    {
      id: 3,
      nombre: 'Ramiro',
      apellido: 'Benitez',
      fecha_registro: new Date()
    },
    {
      id: 4,
      nombre: 'Artemio',
      apellido: 'Juarez',
      fecha_registro: new Date()
    }
  ])
  
  constructor() { }

  obtenerEstudiantes(): Observable<Estudiante[]> {
    return this.estudiantes$.asObservable();
  }

  obtenerEstudiantePorId(id:number): Observable<Estudiante | undefined> {
    return this.estudiantes$.asObservable()
      .pipe(
        map((alumnos) => alumnos.find((a) => a.id === id))
      )
  } 
 }
