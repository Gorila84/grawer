/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarkRangeService } from './markRange.service';

describe('Service: MarkRange', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkRangeService]
    });
  });

  it('should ...', inject([MarkRangeService], (service: MarkRangeService) => {
    expect(service).toBeTruthy();
  }));
});
