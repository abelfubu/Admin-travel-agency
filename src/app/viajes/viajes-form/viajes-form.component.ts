import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Viaje } from '../../models';
import { ViajesUIService } from '../viajes-ui.service';
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
    fb: FormBuilder,
    private vs: ViajesService,
    private vui: ViajesUIService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private passedData: { viaje: Viaje }
  ) {
    this.form = fb.group({
      nombre: ['', Validators.required],
      destino: ['', Validators.required],
      duracion: ['', Validators.min(5)],
      img: [''],
      plazas: ['', Validators.min(5)],
      rating: [0, Validators.max(5)],
      tipo: [''],
    });
  }

  ngOnInit(): void {
    if (this.passedData) {
      this.form.patchValue(this.passedData.viaje);
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    if (this.passedData) {
      const { id, color, estado, rating } = this.passedData.viaje;
      this.vs
        .updateOne({ ...this.form.value, id, color, estado, rating })
        .subscribe((response) => {
          console.log(response);
          this.vs.getAll();
          this.dialog.closeAll();
          this.vui.snackBarUI('Viaje actualizado');
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
          this.vs.getAll();
          this.dialog.closeAll();
          this.vui.snackBarUI('Viaje creado con éxito');
        });
    }
  }
}
