/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoronaService } from './corona.service';

describe('Service: Corona', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoronaService]
    });
  });

  it('should ...', inject([CoronaService], (service: CoronaService) => {
    expect(service).toBeTruthy();
  }));
});
