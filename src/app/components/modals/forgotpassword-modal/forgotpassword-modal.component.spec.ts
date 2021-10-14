import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordModalComponent } from './forgotpassword-modal.component';

describe('ForgotpasswordModalComponent', () => {
  let component: ForgotpasswordModalComponent;
  let fixture: ComponentFixture<ForgotpasswordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpasswordModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
