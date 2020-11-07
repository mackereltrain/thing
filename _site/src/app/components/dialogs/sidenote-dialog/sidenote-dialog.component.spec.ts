import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenoteDialogComponent } from './sidenote-dialog.component';

describe('SidenoteDialogComponent', () => {
  let component: SidenoteDialogComponent;
  let fixture: ComponentFixture<SidenoteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenoteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
