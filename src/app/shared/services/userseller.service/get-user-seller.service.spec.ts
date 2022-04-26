import { TestBed } from '@angular/core/testing';

import { GetUserSellerService } from './get-user-seller.service';

describe('GetUserSellerService', () => {
  let service: GetUserSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
