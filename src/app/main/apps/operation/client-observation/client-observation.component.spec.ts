import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientObservationComponent } from './client-observation.component';

describe('ClientObservationComponent', () => {
  let component: ClientObservationComponent;
  let fixture: ComponentFixture<ClientObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientObservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
