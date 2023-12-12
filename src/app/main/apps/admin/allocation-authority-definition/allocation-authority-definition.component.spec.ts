import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationAuthorityDefinitionComponent } from './allocation-authority-definition.component';

describe('AllocationAuthorityDefinitionComponent', () => {
  let component: AllocationAuthorityDefinitionComponent;
  let fixture: ComponentFixture<AllocationAuthorityDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocationAuthorityDefinitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocationAuthorityDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
