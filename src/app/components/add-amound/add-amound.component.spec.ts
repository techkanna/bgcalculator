import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmoundComponent } from './add-amound.component';

describe('AddAmoundComponent', () => {
  let component: AddAmoundComponent;
  let fixture: ComponentFixture<AddAmoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
