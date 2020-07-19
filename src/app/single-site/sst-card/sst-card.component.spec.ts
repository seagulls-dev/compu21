import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SstCardComponent } from './sst-card.component';

describe('SstCardComponent', () => {
  let component: SstCardComponent;
  let fixture: ComponentFixture<SstCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SstCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SstCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
