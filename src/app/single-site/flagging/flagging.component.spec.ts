import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaggingComponent } from './flagging.component';

describe('FlaggingComponent', () => {
  let component: FlaggingComponent;
  let fixture: ComponentFixture<FlaggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlaggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
