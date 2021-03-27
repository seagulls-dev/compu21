import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCourseComponent } from './virtual-course.component';

describe('VirtualCourseComponent', () => {
  let component: VirtualCourseComponent;
  let fixture: ComponentFixture<VirtualCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
