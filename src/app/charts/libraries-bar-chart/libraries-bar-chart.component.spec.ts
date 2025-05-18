import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariesBarChartComponent } from './libraries-bar-chart.component';

describe('LibrariesBarChartComponent', () => {
  let component: LibrariesBarChartComponent;
  let fixture: ComponentFixture<LibrariesBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariesBarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrariesBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
