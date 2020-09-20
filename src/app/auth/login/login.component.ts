import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViajesUIService } from 'src/app/viajes/viajes-ui.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private vui: ViajesUIService
  ) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
      () => this.router.navigateByUrl('viajes'),
      (error) => {
        if (error.status === 401) {
          this.vui.snackBarUI('Email o contraseña incorrectos');
        }
      }
    );
  }
}
