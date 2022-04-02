import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcategoryslidersComponent } from './allcategorysliders.component';

describe('AllcategoryslidersComponent', () => {
  let component: AllcategoryslidersComponent;
  let fixture: ComponentFixture<AllcategoryslidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcategoryslidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcategoryslidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
