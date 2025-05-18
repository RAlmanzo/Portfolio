import { TestBed } from '@angular/core/testing';

import { ChartBarBuilderService } from './chart-bar-builder.service';

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
