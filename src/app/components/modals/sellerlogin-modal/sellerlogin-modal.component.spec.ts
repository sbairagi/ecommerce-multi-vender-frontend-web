import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerloginModalComponent } from './sellerlogin-modal.component';

describe('SellerloginModalComponent', () => {
  let component: SellerloginModalComponent;
  let fixture: ComponentFixture<SellerloginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerloginModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerloginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
