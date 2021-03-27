import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshaComponent } from './osha.component';

describe('OshaComponent', () => {
  let component: OshaComponent;
  let fixture: ComponentFixture<OshaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
