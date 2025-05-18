import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksPlatformsBarChartComponentComponent } from './frameworks-platforms-bar-chart-component.component';

describe('FrameworksPlatformsBarChartComponentComponent', () => {
  let component: FrameworksPlatformsBarChartComponentComponent;
  let fixture: ComponentFixture<FrameworksPlatformsBarChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworksPlatformsBarChartComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworksPlatformsBarChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
