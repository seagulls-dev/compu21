import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSiteComponent } from './single-site.component';

describe('SingleSiteComponent', () => {
  let component: SingleSiteComponent;
  let fixture: ComponentFixture<SingleSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
