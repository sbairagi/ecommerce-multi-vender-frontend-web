import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealofthedaysliderComponent } from './dealofthedayslider.component';

describe('DealofthedaysliderComponent', () => {
  let component: DealofthedaysliderComponent;
  let fixture: ComponentFixture<DealofthedaysliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealofthedaysliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealofthedaysliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
