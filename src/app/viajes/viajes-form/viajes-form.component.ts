import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  rating = 0;
  estados = [
    { value: 1, text: 'Abierto' },
    { value: 2, text: 'Cerrado' },
    { value: 3, text: 'Pendiente' },
  ];
  constructor(
    fb: FormBuilder,
    private router: Router,
    private vs: ViajesService,
    private dialog: MatDialog,
    private vui: ViajesUIService,
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
      estado: [null],
    });
  }

  ngOnInit(): void {
    if (this.passedData) {
      this.form.patchValue(this.passedData.viaje);
      this.rating = this.passedData.viaje.rating;
    }
  }

  setRating(rating: number): void {
    this.form.controls.rating.setValue(rating);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    if (this.passedData) {
      const { id, color } = this.passedData.viaje;
      this.vs.updateOne({ ...this.form.value, id, color }).subscribe(() => {
        this.dialog.closeAll();
        this.vui.snackBarUI('Viaje actualizado');
      });
    } else {
      this.vs
        .addOne({
          ...this.form.value,
          color: '#232323',
        })
        .subscribe(() => {
          this.dialog.closeAll();
          this.vui.snackBarUI('Viaje creado con éxito');
        });
    }
  }
}
