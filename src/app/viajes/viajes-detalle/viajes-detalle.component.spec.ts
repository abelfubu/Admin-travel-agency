import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesDetalleComponent } from './viajes-detalle.component';

describe('ViajesDetalleComponent', () => {
  let component: ViajesDetalleComponent;
  let fixture: ComponentFixture<ViajesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajesDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
