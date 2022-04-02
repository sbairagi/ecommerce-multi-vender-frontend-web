import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterproductspageComponent } from './filterproductspage.component';

describe('FilterproductspageComponent', () => {
  let component: FilterproductspageComponent;
  let fixture: ComponentFixture<FilterproductspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterproductspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterproductspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
