import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCardComponent } from './verify-card.component';

describe('VerifyCardComponent', () => {
  let component: VerifyCardComponent;
  let fixture: ComponentFixture<VerifyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
