import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Viaje } from '../../models';
import { ViajesService } from '../viajes.service';

@Component({
  selector: 'app-viajes-form',
  templateUrl: './viajes-form.component.html',
  styleUrls: ['./viajes-form.component.scss'],
})
export class ViajesFormComponent implements OnInit {
  form: FormGroup;
  title = 'Nuevo Viaje';
  constructor(
    private fb: FormBuilder,
    private vs: ViajesService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private passedData: { viaje: Viaje }
  ) {
    if (this.passedData) {
      const {
        nombre,
        destino,
        duracion,
        img,
        plazas,
        rating,
        tipo,
      } = this.passedData.viaje;
      this.form = fb.group({
        nombre: [nombre],
        destino: [destino],
        duracion: [duracion],
        img: [img],
        plazas: [plazas],
        rating: [rating],
        tipo: [tipo],
      });
    } else {
      this.form = fb.group({
        nombre: [''],
        destino: [''],
        duracion: [''],
        img: [''],
        plazas: [''],
        rating: [0],
        tipo: [''],
      });
    }
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.passedData) {
      const { id, color, estado, rating } = this.passedData.viaje;
      this.vs
        .updateOne({ ...this.form.value, id, color, estado, rating })
        .subscribe((response) => {
          console.log(response);
          this.dialog.closeAll();
          this.vs.getAll();
          this.openSnackBar('Viaje actualizado');
        });
    } else {
      this.vs
        .addOne({
          ...this.form.value,
          color: '#232323',
          estado: 1,
          rating: 3,
        })
        .subscribe((response) => {
          console.log(response);
          this.dialog.closeAll();
          this.vs.getAll();
          this.openSnackBar('Viaje creado con éxito');
        });
    }
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Vale', {
      duration: 2000,
    });
  }
}
