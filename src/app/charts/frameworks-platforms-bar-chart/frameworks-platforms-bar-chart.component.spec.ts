import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksPlatformsBarChartComponent } from './frameworks-platforms-bar-chart.component';

describe('FrameworksPlatformsBarChartComponent', () => {
  let component: FrameworksPlatformsBarChartComponent;
  let fixture: ComponentFixture<FrameworksPlatformsBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworksPlatformsBarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworksPlatformsBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
