import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationRequestsComponent } from './attestation-requests.component';

describe('AttestationRequestsComponent', () => {
  let component: AttestationRequestsComponent;
  let fixture: ComponentFixture<AttestationRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttestationRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
