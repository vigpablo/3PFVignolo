import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
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

  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>) {}

  guardar(): void {
    if (this.alumnosForm.valid) {
      this.dialogRef.close(this.alumnosForm.value)
    } else {
      this.alumnosForm.markAllAsTouched();
    }
  }
}
