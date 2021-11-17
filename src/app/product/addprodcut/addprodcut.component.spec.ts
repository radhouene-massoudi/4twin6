import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodcutComponent } from './addprodcut.component';

describe('AddprodcutComponent', () => {
  let component: AddprodcutComponent;
  let fixture: ComponentFixture<AddprodcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprodcutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprodcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
