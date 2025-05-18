import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageBarChartComponent } from './language-bar-chart.component';

describe('LanguageBarChartComponent', () => {
  let component: LanguageBarChartComponent;
  let fixture: ComponentFixture<LanguageBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageBarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
