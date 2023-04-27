import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent {

  nombreControl = new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]);
  apellidoControl = new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]);

  alumnosForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
  });
  matDialog: any;

  constructor(
    private dialogRef: MatDialogRef<AbmAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    ) {
      if (data) {
        this.nombreControl.setValue(data.alumnoParaEditar.nombre);
        this.apellidoControl.setValue(data.alumnoParaEditar.apellido);
      }
      
    }

  guardar(): void {
    if (this.alumnosForm.valid) {
      this.dialogRef.close(this.alumnosForm.value)
    } else {
      this.alumnosForm.markAllAsTouched();
    }
  }
}
