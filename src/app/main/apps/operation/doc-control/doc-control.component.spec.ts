import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocControlComponent } from './doc-control.component';

describe('DocControlComponent', () => {
  let component: DocControlComponent;
  let fixture: ComponentFixture<DocControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
