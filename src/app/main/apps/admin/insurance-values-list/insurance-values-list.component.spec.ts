import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceValuesListComponent } from './insurance-values-list.component';

describe('InsuranceValuesListComponent', () => {
  let component: InsuranceValuesListComponent;
  let fixture: ComponentFixture<InsuranceValuesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceValuesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceValuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
