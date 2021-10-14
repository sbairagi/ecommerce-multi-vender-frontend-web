import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesdropdownComponent } from './categoriesdropdown.component';

describe('CategoriesdropdownComponent', () => {
  let component: CategoriesdropdownComponent;
  let fixture: ComponentFixture<CategoriesdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesdropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
