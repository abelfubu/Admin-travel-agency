import { TestBed } from '@angular/core/testing';
import { ViajesUIService } from './viajes-ui.service';

describe('ViajesUIService', () => {
  let service: ViajesUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajesUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
