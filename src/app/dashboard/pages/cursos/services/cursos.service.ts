import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../models';

const CURSOS_MOCKS: Curso[] = [
  {
    id:1,
    nombre: 'Javascript',
    fecha_fin: new Date(),
    fecha_inicio: new Date(),
  },
  {
    id:2,
    nombre: 'Backend',
    fecha_fin: new Date(),
    fecha_inicio: new Date(),
  },
  {
    id:3,
    nombre: 'UX/UI',
    fecha_fin: new Date(),
    fecha_inicio: new Date(),
  },

]

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos$ = new BehaviorSubject<Curso[]>([])

  constructor() { }

  obtenerCursos(): Observable<Curso[]>{
    this.cursos$.next(CURSOS_MOCKS);
    return this.cursos$.asObservable();
  }
}
