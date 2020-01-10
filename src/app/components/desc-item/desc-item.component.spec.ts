import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescItemComponent } from './desc-item.component';

describe('DescItemComponent', () => {
  let component: DescItemComponent;
  let fixture: ComponentFixture<DescItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
