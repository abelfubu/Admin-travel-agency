import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../common/confirm/confirm.component';

@Injectable({
  providedIn: 'root',
})
export class ViajesUIService {
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  confirmUI(): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmComponent);
    return dialogRef.afterClosed();
  }

  snackBarUI(message: string): void {
    this.snackBar.open(message, 'Vale', {
      duration: 2000,
    });
  }
}
