import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisBarChartComponent } from './apis-bar-chart.component';

describe('ApisBarChartComponent', () => {
  let component: ApisBarChartComponent;
  let fixture: ComponentFixture<ApisBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApisBarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApisBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
