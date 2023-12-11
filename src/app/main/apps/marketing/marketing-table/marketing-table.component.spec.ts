import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingTableComponent } from './marketing-table.component';

describe('MarketingTableComponent', () => {
  let component: MarketingTableComponent;
  let fixture: ComponentFixture<MarketingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
