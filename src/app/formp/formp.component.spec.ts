import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpComponent } from './formp.component';

describe('FormpComponent', () => {
  let component: FormpComponent;
  let fixture: ComponentFixture<FormpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
