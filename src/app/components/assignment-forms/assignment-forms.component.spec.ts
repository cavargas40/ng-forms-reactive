import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentFormsComponent } from './assignment-forms.component';

describe('AssignmentFormsComponent', () => {
  let component: AssignmentFormsComponent;
  let fixture: ComponentFixture<AssignmentFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
