import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasesQueryLanguagesBarChartComponent } from './databases-query-languages-bar-chart.component';

describe('DatabasesQueryLanguagesBarChartComponent', () => {
  let component: DatabasesQueryLanguagesBarChartComponent;
  let fixture: ComponentFixture<DatabasesQueryLanguagesBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabasesQueryLanguagesBarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabasesQueryLanguagesBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
