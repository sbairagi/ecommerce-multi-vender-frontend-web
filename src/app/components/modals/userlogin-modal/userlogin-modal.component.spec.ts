import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginModalComponent } from './userlogin-modal.component';

describe('UserloginModalComponent', () => {
  let component: UserloginModalComponent;
  let fixture: ComponentFixture<UserloginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserloginModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
