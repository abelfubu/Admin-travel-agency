import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // this.authService
    //   .register(this.registerForm.value)
    //   .subscribe((response) => console.log(response));
    this.router.navigateByUrl('viajes');
  }
}
