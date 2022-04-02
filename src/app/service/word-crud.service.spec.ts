import { TestBed } from '@angular/core/testing';

import { WordCrudService } from './word-crud.service';

describe('WordCrudService', () => {
  let service: WordCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
