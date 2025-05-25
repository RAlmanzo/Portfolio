import { TestBed } from '@angular/core/testing';

import { TextAnimatorService } from './animator.service';

describe('TextAnimatorService', () => {
  let service: TextAnimatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextAnimatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
