import { TestBed, inject } from '@angular/core/testing';

import { AuthJwtService } from './auth-jwt.service';

describe('AuthJwtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthJwtService]
    });
  });

  it('should be created', inject([AuthJwtService], (service: AuthJwtService) => {
    expect(service).toBeTruthy();
  }));
});
