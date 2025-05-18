import { TestBed } from '@angular/core/testing';

import { ChartBarBuilderService } from './chart-builder.service.spec';

describe('ChartBarBuilderService', () => {
  let service: ChartBarBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartBarBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
