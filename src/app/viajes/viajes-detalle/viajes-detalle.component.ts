import { Component, Inject, Input, OnInit } from '@angular/core';
import { Viaje } from '../../models/Viaje';
import { ViajesService } from '../viajes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViajesUIService } from '../viajes-ui.service';
import { MatDialog } from '@angular/material/dialog';
import { ViajesFormComponent } from '../viajes-form/viajes-form.component';

@Component({
  selector: 'app-viajes-detalle',
  templateUrl: './viajes-detalle.component.html',
  styleUrls: ['./viajes-detalle.component.scss'],
})
export class ViajesDetalleComponent implements OnInit {
  viaje: Viaje;

  constructor(
    private vs: ViajesService,
    private dialog: MatDialog,
    private vui: ViajesUIService,
    private router: Router,
    private route: ActivatedRoute // @Inject(MAT_DIALOG_DATA) private passedData: { id: number }
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((id) => {
      console.log(id);
      this.vs.getOne(+id).subscribe((response) => {
        this.viaje = response;
        console.log(response);
      });
    });
  }

  editarViaje(viaje: Viaje): void {
    this.dialog.open(ViajesFormComponent, { data: { viaje }, width: '75%' });
  }

  borrarViaje(id: number): void {
    this.vui.confirmUI().subscribe((confirmation) => {
      if (confirmation) {
        this.vs.deleteOne(id).subscribe((response) => {
          this.router.navigateByUrl('viajes');
          this.vui.snackBarUI('Viaje Borrado');
        });
      }
    });
  }
}
