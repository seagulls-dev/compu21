import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSiteCourseComponent } from './on-site-course.component';

describe('OnSiteCourseComponent', () => {
  let component: OnSiteCourseComponent;
  let fixture: ComponentFixture<OnSiteCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnSiteCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnSiteCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
