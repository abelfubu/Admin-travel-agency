import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesTablaComponent } from './viajes-tabla.component';

describe('ViajesTablaComponent', () => {
  let component: ViajesTablaComponent;
  let fixture: ComponentFixture<ViajesTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajesTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
