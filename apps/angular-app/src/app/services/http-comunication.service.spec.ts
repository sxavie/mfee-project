import { TestBed } from '@angular/core/testing';

import { HttpComunicationService } from './http-comunication.service';

describe('HttpComunicationService', () => {
  let service: HttpComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
