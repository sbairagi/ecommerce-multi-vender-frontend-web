import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandingproductsliderComponent } from './trandingproductslider.component';

describe('TrandingproductsliderComponent', () => {
  let component: TrandingproductsliderComponent;
  let fixture: ComponentFixture<TrandingproductsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrandingproductsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrandingproductsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
