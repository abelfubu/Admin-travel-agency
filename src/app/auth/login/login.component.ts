import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
  ) {
    this.loginForm = fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // this.authService
    //   .login(this.loginForm.value)
    //   .subscribe((response) => console.log(response));
    this.router.navigateByUrl('viajes');
  }
}
