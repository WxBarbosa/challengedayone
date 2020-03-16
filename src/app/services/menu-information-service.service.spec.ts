/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MenuInformationServiceService } from './menu-information-service.service';

describe('Service: MenuInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuInformationServiceService]
    });
  });

  it('should ...', inject([MenuInformationServiceService], (service: MenuInformationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
