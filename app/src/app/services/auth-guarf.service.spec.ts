import { TestBed } from '@angular/core/testing';

import { AuthGuarfService } from './auth-guarf.service';

describe('AuthGuarfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuarfService = TestBed.get(AuthGuarfService);
    expect(service).toBeTruthy();
  });
});
