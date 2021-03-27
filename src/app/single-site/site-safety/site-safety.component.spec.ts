import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSafetyComponent } from './site-safety.component';

describe('SiteSafetyComponent', () => {
  let component: SiteSafetyComponent;
  let fixture: ComponentFixture<SiteSafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
