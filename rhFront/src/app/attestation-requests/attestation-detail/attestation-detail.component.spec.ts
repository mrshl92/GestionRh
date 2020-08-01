import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationDetailComponent } from './attestation-detail.component';

describe('AttestationDetailComponent', () => {
  let component: AttestationDetailComponent;
  let fixture: ComponentFixture<AttestationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttestationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
