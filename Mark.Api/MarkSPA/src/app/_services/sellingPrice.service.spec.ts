/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellingPriceService } from './sellingPrice.service';

describe('Service: SellingPrice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellingPriceService]
    });
  });

  it('should ...', inject([SellingPriceService], (service: SellingPriceService) => {
    expect(service).toBeTruthy();
  }));
});
