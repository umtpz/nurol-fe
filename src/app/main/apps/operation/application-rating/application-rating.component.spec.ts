import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRatingComponent } from './application-rating.component';

describe('ApplicationRatingComponent', () => {
  let component: ApplicationRatingComponent;
  let fixture: ComponentFixture<ApplicationRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
