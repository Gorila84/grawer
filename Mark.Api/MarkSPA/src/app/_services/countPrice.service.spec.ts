/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountPriceService } from './countPrice.service';

describe('Service: CountPrice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountPriceService]
    });
  });

  it('should ...', inject([CountPriceService], (service: CountPriceService) => {
    expect(service).toBeTruthy();
  }));
});
