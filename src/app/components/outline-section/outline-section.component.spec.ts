import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineSectionComponent } from './outline-section.component';

describe('OutlineSectionComponent', () => {
  let component: OutlineSectionComponent;
  let fixture: ComponentFixture<OutlineSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlineSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
