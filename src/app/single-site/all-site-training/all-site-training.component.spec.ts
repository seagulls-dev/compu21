import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSiteTrainingComponent } from './all-site-training.component';

describe('AllSiteTrainingComponent', () => {
  let component: AllSiteTrainingComponent;
  let fixture: ComponentFixture<AllSiteTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSiteTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSiteTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
