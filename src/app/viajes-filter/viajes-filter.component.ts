import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-viajes-filter',
  templateUrl: './viajes-filter.component.html',
  styleUrls: ['./viajes-filter.component.scss'],
})
export class ViajesFilterComponent {
  form: FormGroup;
  @Output() filterResult = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      search: ['', this.validarTacos],
    });

    this.form.controls.search.valueChanges.subscribe((value) =>
      this.filterResult.emit(value)
    );
  }

  validarTacos(control: FormControl): ValidationErrors {
    const tacos = ['idiota', 'hijo puta', 'subnormal'];
    if (tacos.includes(control.value)) {
      return { taco: true };
    }
  }
}
