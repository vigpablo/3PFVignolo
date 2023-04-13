import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlErrorMessages'
})
export class ControlErrorMessagesPipe implements PipeTransform {

  transform(error: any, ...args: unknown[]): unknown {

    const opciones: Record<string, string> = {
      required: 'Este campo es requerido', 
      minlength: `Debes ingresar al menos ${error.value.requiredLength} caracteres`,
      maxlength: 'Máximo 10 caracteres',
    }

    return opciones[error.key];
  }

}
