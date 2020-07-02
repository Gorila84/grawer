/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountEngraveService } from './countEngrave.service';

describe('Service: CountEngrave', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountEngraveService]
    });
  });

  it('should ...', inject([CountEngraveService], (service: CountEngraveService) => {
    expect(service).toBeTruthy();
  }));
});
