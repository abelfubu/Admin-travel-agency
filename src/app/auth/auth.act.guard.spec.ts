import { TestBed } from '@angular/core/testing';

import { Auth.ActGuard } from './auth.act.guard';

describe('Auth.ActGuard', () => {
  let guard: Auth.ActGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Auth.ActGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
