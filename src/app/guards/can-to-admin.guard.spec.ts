import { TestBed } from '@angular/core/testing';

import { CanToAdminGuard } from './can-to-admin.guard';

describe('CanToAdminGuard', () => {
  let guard: CanToAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanToAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
