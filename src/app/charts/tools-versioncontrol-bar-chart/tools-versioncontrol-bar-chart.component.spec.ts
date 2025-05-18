import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsVersioncontrolBarChartComponent } from './tools-versioncontrol-bar-chart.component';

describe('ToolsVersioncontrolBarChartComponent', () => {
  let component: ToolsVersioncontrolBarChartComponent;
  let fixture: ComponentFixture<ToolsVersioncontrolBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsVersioncontrolBarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsVersioncontrolBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
