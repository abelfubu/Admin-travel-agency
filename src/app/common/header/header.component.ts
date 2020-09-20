import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { ViajesFormComponent } from 'src/app/viajes/viajes-form/viajes-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog, public authService: AuthService) {}

  ngOnInit(): void {}

  nuevoViaje(): void {
    this.dialog.open(ViajesFormComponent, { width: '75%' });
  }
}
