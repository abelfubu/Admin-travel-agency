import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesFilterComponent } from './viajes-filter.component';

describe('ViajesFilterComponent', () => {
  let component: ViajesFilterComponent;
  let fixture: ComponentFixture<ViajesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajesFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
