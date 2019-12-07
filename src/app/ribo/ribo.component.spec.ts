import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiboComponent } from './ribo.component';

describe('RiboComponent', () => {
  let component: RiboComponent;
  let fixture: ComponentFixture<RiboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
