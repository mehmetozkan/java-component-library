import { TestBed } from '@angular/core/testing';

import { JavaComponentLibraryService } from './java-component-library.service';

describe('JavaComponentLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JavaComponentLibraryService = TestBed.get(JavaComponentLibraryService);
    expect(service).toBeTruthy();
  });
});
